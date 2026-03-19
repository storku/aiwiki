#!/usr/bin/env node

/**
 * Fresh import from MediaWiki into the V2 database schema.
 *
 * For every page on the old wiki, this script:
 *   1. Fetches parsed HTML + categories via the MediaWiki API
 *   2. Converts to three formats: markdown, cleaned HTML, and TipTap JSON
 *   3. Computes derived fields (plain text, word count, reading time, excerpt)
 *   4. Upserts into `pages` with all V2 columns populated
 *   5. Creates an initial `page_revisions` entry (version 1)
 *   6. Extracts internal links → `page_links`
 *   7. Handles categories → `categories` + `page_categories`
 *
 * Rate-limited (200ms between API requests), idempotent (ON CONFLICT ... DO UPDATE).
 *
 * Prerequisites:
 *   - V2 schema must already exist (run migrate-v2-schema.mjs first)
 *
 * Usage: node --env-file=.env.local scripts/import-from-mediawiki.mjs
 */

import { neon } from "@neondatabase/serverless";
import { JSDOM } from "jsdom";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { Table, TableRow, TableHeader, TableCell } from "@tiptap/extension-table";
import { Image as ImageExt } from "@tiptap/extension-image";

const API_URL = "https://aiwiki.ai/api.php";
const DELAY_MS = 200;
const BATCH_SIZE = 50;

const INTERNAL_CATEGORIES = new Set([
  "Not_updated",
  "Not_Edited",
  "Updated",
  "Not_edited",
  "Pages_with_broken_file_links",
]);

// ─── Helpers ────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function slugify(title) {
  return title
    .replace(/ /g, "_")
    .replace(/[^a-zA-Z0-9_\-\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

async function fetchJSON(url, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (response.status === 429) {
        const waitTime = Math.pow(2, attempt + 1) * 1000;
        console.log(`  Rate limited, waiting ${waitTime / 1000}s...`);
        await sleep(waitTime);
        continue;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    } catch (err) {
      if (attempt === retries - 1) throw err;
      await sleep(1000 * (attempt + 1));
    }
  }
}

// ─── MediaWiki API ──────────────────────────────────────────────────────

async function getAllPageTitles() {
  const titles = [];
  let apcontinue = "";

  while (true) {
    const params = new URLSearchParams({
      action: "query",
      list: "allpages",
      aplimit: "500",
      apnamespace: "0",
      format: "json",
    });
    if (apcontinue) params.set("apcontinue", apcontinue);

    const data = await fetchJSON(`${API_URL}?${params}`);
    for (const page of data.query.allpages) {
      titles.push(page.title);
    }
    console.log(`Fetched ${titles.length} page titles...`);

    if (data.continue) {
      apcontinue = data.continue.apcontinue;
    } else {
      break;
    }
    await sleep(100);
  }

  return titles;
}

// ─── Content Conversion ─────────────────────────────────────────────────

/**
 * Clean MediaWiki HTML: remove edit sections, TOC, mw-* cruft,
 * red link edit URLs, citation artifacts, etc.
 */
function cleanMediaWikiHtml(html) {
  if (!html) return "";

  // Use jsdom for robust HTML manipulation
  const dom = new JSDOM(`<div id="root">${html}</div>`);
  const doc = dom.window.document;
  const root = doc.getElementById("root");

  // Remove edit sections
  root.querySelectorAll(".mw-editsection").forEach((el) => el.remove());

  // Remove TOC
  root.querySelectorAll("#toc, .toc").forEach((el) => el.remove());

  // Remove mw-empty-elt, mw-references, reference/cite containers
  root.querySelectorAll(".mw-empty-elt").forEach((el) => el.remove());

  // Remove elements with style="display:none"
  root.querySelectorAll('[style*="display:none"], [style*="display: none"]').forEach((el) =>
    el.remove()
  );

  // Clean red links: convert to plain text
  root.querySelectorAll('a[href*="action=edit&redlink=1"]').forEach((a) => {
    const text = doc.createTextNode(a.textContent || "");
    a.parentNode.replaceChild(text, a);
  });

  // Convert internal wiki links to /wiki/slug format
  root.querySelectorAll('a[href^="/wiki/"]').forEach((a) => {
    const rawHref = a.getAttribute("href");
    if (!rawHref) return;
    const pageTitle = decodeURIComponent(rawHref.replace("/wiki/", ""));
    const slug = slugify(pageTitle);
    a.setAttribute("href", `/wiki/${slug}`);
  });

  // Remove all mw-* classes but keep the element
  root.querySelectorAll("[class]").forEach((el) => {
    const classes = el.getAttribute("class").split(/\s+/);
    const filtered = classes.filter((c) => !c.startsWith("mw-"));
    if (filtered.length === 0) {
      el.removeAttribute("class");
    } else {
      el.setAttribute("class", filtered.join(" "));
    }
  });

  // Clean up citation references: [1] etc
  root.querySelectorAll("sup.reference").forEach((sup) => {
    const link = sup.querySelector("a");
    if (link) {
      const text = link.textContent || "";
      const match = text.match(/\[(\d+)\]/);
      if (match) {
        const newSup = doc.createElement("sup");
        newSup.textContent = `[${match[1]}]`;
        sup.parentNode.replaceChild(newSup, sup);
      }
    }
  });

  // Remove reference lists (usually at the end)
  root.querySelectorAll(".reflist, .references, ol.references").forEach((el) => el.remove());

  // Remove navbox, metadata, category links at the bottom
  root.querySelectorAll(".navbox, .metadata, .catlinks").forEach((el) => el.remove());

  return root.innerHTML;
}

/**
 * Convert MediaWiki parsed HTML to markdown (improved version of fetch-wiki-content.mjs)
 */
function htmlToMarkdown(html) {
  if (!html) return "";
  let md = html;

  // Handle headings
  for (let i = 6; i >= 1; i--) {
    const hashes = "#".repeat(i);
    const re = new RegExp(`<h${i}[^>]*>([\\s\\S]*?)<\\/h${i}>`, "g");
    md = md.replace(re, `\n${hashes} $1\n\n`);
  }

  // Handle paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, "$1\n\n");

  // Handle bold and italic
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/g, "**$1**");
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, "**$1**");
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/g, "*$1*");
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, "*$1*");

  // Handle links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, "[$2]($1)");

  // Handle unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, "- $1\n") + "\n";
  });

  // Handle ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (match, content) => {
    let counter = 0;
    return (
      content.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (m, text) => {
        counter++;
        return `${counter}. ${text}\n`;
      }) + "\n"
    );
  });

  // Handle code blocks
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, "```\n$1\n```\n\n");
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/g, "`$1`");

  // Handle tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/g, (match, tableContent) => {
    let result = "";
    const rows = tableContent.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];
    let isFirstRow = true;
    for (const row of rows) {
      const cells = [];
      const cellMatches = row.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g) || [];
      for (const cell of cellMatches) {
        const content = cell.replace(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/, "$1").trim();
        cells.push(content);
      }
      if (cells.length > 0) {
        result += "| " + cells.join(" | ") + " |\n";
        if (isFirstRow) {
          result += "| " + cells.map(() => "---").join(" | ") + " |\n";
          isFirstRow = false;
        }
      }
    }
    return result + "\n";
  });

  // Handle blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (match, content) => {
    return (
      content
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n") + "\n\n"
    );
  });

  // Handle images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g, "![$2]($1)");
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/g, "![$1]($2)");
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/g, "![]($1)");

  md = md.replace(/<br\s*\/?>/g, "\n");
  md = md.replace(/<hr\s*\/?>/g, "\n---\n\n");

  // Handle divs and spans
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/g, "$1\n");
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/g, "$1");

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  md = md.replace(/&amp;/g, "&");
  md = md.replace(/&lt;/g, "<");
  md = md.replace(/&gt;/g, ">");
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#039;/g, "'");
  md = md.replace(/&nbsp;/g, " ");
  md = md.replace(/&#160;/g, " ");

  // Clean up excessive whitespace
  md = md.replace(/\n{3,}/g, "\n\n");
  md = md.trim();

  return md;
}

/**
 * Convert cleaned HTML to TipTap JSON using @tiptap/html with jsdom
 */
function htmlToTiptapJson(cleanedHtml) {
  if (!cleanedHtml || cleanedHtml.trim().length === 0) {
    return { type: "doc", content: [{ type: "paragraph" }] };
  }

  try {
    // Set up jsdom globally for @tiptap/html which expects DOM APIs
    const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
    global.document = dom.window.document;
    global.window = dom.window;
    global.DOMParser = dom.window.DOMParser;
    global.Node = dom.window.Node;
    global.HTMLElement = dom.window.HTMLElement;

    const extensions = [
      StarterKit,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      ImageExt,
    ];

    const json = generateJSON(cleanedHtml, extensions);
    return json;
  } catch (err) {
    console.warn(`  TipTap conversion failed: ${err.message}`);
    return { type: "doc", content: [{ type: "paragraph" }] };
  }
}

/**
 * Strip HTML tags to get plain text
 */
function htmlToPlainText(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Generate excerpt from plain text
 */
function generateExcerpt(plainText, maxLen = 160) {
  if (!plainText) return "";
  if (plainText.length <= maxLen) return plainText;
  return plainText.slice(0, maxLen).replace(/\s\S*$/, "") + "...";
}

/**
 * Extract internal link slugs from cleaned HTML
 */
function extractInternalLinks(html) {
  const slugs = new Set();
  const regex = /href="\/wiki\/([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    slugs.add(match[1]);
  }
  return Array.from(slugs);
}

// ─── Main ───────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error(
      "DATABASE_URL not set. Use: node --env-file=.env.local scripts/import-from-mediawiki.mjs"
    );
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Fetching all page titles from aiwiki.ai...");
  const titles = await getAllPageTitles();
  console.log(`Found ${titles.length} pages total.\n`);

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  // Pre-cache all categories to avoid repeated lookups
  const categoryIdMap = new Map();

  async function getOrCreateCategory(name) {
    if (categoryIdMap.has(name)) return categoryIdMap.get(name);
    const result = await sql`
      INSERT INTO categories (name) VALUES (${name})
      ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
      RETURNING id
    `;
    const id = result[0].id;
    categoryIdMap.set(name, id);
    return id;
  }

  async function processPage(page) {
    // 1. Upsert page
    const result = await sql`
      INSERT INTO pages (
        slug, title, content, content_html, content_tiptap, content_plain,
        excerpt, reading_time, word_count, version, status, description
      ) VALUES (
        ${page.slug}, ${page.title}, ${page.markdown}, ${page.contentHtml},
        ${JSON.stringify(page.tiptapJson)}, ${page.contentPlain},
        ${page.excerpt}, ${page.readingTime}, ${page.wordCount},
        1, 'published', ${page.excerpt}
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        content = EXCLUDED.content,
        content_html = EXCLUDED.content_html,
        content_tiptap = EXCLUDED.content_tiptap,
        content_plain = EXCLUDED.content_plain,
        excerpt = EXCLUDED.excerpt,
        reading_time = EXCLUDED.reading_time,
        word_count = EXCLUDED.word_count,
        description = EXCLUDED.description,
        updated_at = now()
      RETURNING id
    `;
    const pageId = result[0].id;

    // 2. Create initial revision
    await sql`
      INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary)
      VALUES (${pageId}, 1, ${page.markdown}, ${JSON.stringify(page.tiptapJson)}, 'Initial import from MediaWiki')
      ON CONFLICT (page_id, version) DO UPDATE SET
        content = EXCLUDED.content,
        content_tiptap = EXCLUDED.content_tiptap
    `;

    // 3. Replace internal links
    await sql`DELETE FROM page_links WHERE source_page_id = ${pageId}`;
    // Insert links in parallel (max 5 concurrent to avoid overwhelming Neon)
    const linkChunks = [];
    for (let i = 0; i < page.internalLinks.length; i += 5) {
      linkChunks.push(page.internalLinks.slice(i, i + 5));
    }
    for (const chunk of linkChunks) {
      await Promise.all(chunk.map(targetSlug =>
        sql`INSERT INTO page_links (source_page_id, target_slug)
            VALUES (${pageId}, ${targetSlug})
            ON CONFLICT (source_page_id, target_slug) DO NOTHING`
      ));
    }

    // 4. Handle categories (clear + re-insert)
    const validCategories = page.categories.filter((c) => !INTERNAL_CATEGORIES.has(c));
    await sql`DELETE FROM page_categories WHERE page_id = ${pageId}`;
    for (const catName of validCategories) {
      const catId = await getOrCreateCategory(catName);
      await sql`
        INSERT INTO page_categories (page_id, category_id)
        VALUES (${pageId}, ${catId})
        ON CONFLICT DO NOTHING
      `;
    }
  }

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];

    try {
      const params = new URLSearchParams({
        action: "parse",
        page: title,
        prop: "text|categories",
        format: "json",
        disableeditsection: "1",
      });

      const data = await fetchJSON(`${API_URL}?${params}`);

      if (data.error) {
        console.warn(`  Skip "${title}": ${data.error.info}`);
        skipped++;
        await sleep(DELAY_MS);
        continue;
      }

      const rawHtml = data.parse.text["*"];
      const categories = (data.parse.categories || []).map((c) => c["*"]);
      const slug = slugify(title);

      // Clean the HTML
      const contentHtml = cleanMediaWikiHtml(rawHtml);

      // Convert to markdown
      const markdown = htmlToMarkdown(contentHtml);

      // Skip pages that are too short (likely empty or redirects)
      if (markdown.length < 20) {
        skipped++;
        await sleep(DELAY_MS);
        continue;
      }

      // Convert to TipTap JSON
      const tiptapJson = htmlToTiptapJson(contentHtml);

      // Compute derived fields
      const contentPlain = htmlToPlainText(contentHtml);
      const wordCount = contentPlain.split(/\s+/).filter((w) => w.length > 0).length;
      const readingTime = Math.max(1, Math.ceil(wordCount / 200));
      const excerpt = generateExcerpt(contentPlain);

      // Extract internal links
      const internalLinks = extractInternalLinks(contentHtml);

      // Process immediately (no batching)
      await processPage({
        slug, title, markdown, contentHtml, tiptapJson,
        contentPlain, wordCount, readingTime, excerpt, categories, internalLinks,
      });
      processed++;
    } catch (err) {
      console.warn(`  Failed "${title}": ${err.message}`);
      failed++;
    }

    if ((i + 1) % 50 === 0 || i === titles.length - 1) {
      console.log(
        `Progress: ${i + 1}/${titles.length} (processed: ${processed}, skipped: ${skipped}, failed: ${failed})`
      );
    }

    await sleep(DELAY_MS);
  }

  // ── Verification ────────────────────────────────────────────────────

  console.log("\nVerifying import...");

  const pageCount = await sql`SELECT COUNT(*) as count FROM pages`;
  const htmlCount =
    await sql`SELECT COUNT(*) as count FROM pages WHERE content_html IS NOT NULL`;
  const tiptapCount =
    await sql`SELECT COUNT(*) as count FROM pages WHERE content_tiptap IS NOT NULL`;
  const revCount = await sql`SELECT COUNT(*) as count FROM page_revisions`;
  const linkCount = await sql`SELECT COUNT(*) as count FROM page_links`;
  const catCount = await sql`SELECT COUNT(*) as count FROM categories`;

  console.log(`  Total pages: ${pageCount[0].count}`);
  console.log(`  With content_html: ${htmlCount[0].count}`);
  console.log(`  With content_tiptap: ${tiptapCount[0].count}`);
  console.log(`  Revisions: ${revCount[0].count}`);
  console.log(`  Page links: ${linkCount[0].count}`);
  console.log(`  Categories: ${catCount[0].count}`);

  // Test search
  try {
    const searchTest =
      await sql`SELECT title FROM pages WHERE search_vector @@ to_tsquery('english', 'neural & network') LIMIT 5`;
    console.log(
      `\n  Search test ("neural & network"): ${searchTest.length} results`
    );
    for (const r of searchTest) {
      console.log(`    - ${r.title}`);
    }
  } catch (err) {
    console.log(`  Search test skipped: ${err.message}`);
  }

  console.log(
    `\nDone! Processed: ${processed}, Skipped: ${skipped}, Failed: ${failed}`
  );
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
