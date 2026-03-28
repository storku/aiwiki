#!/usr/bin/env node

/**
 * Upserts a single wiki article into the Neon database.
 *
 * Usage: node --env-file=.env.local scripts/upsert-article.mjs <json-file>
 *
 * The JSON file should contain:
 * {
 *   "slug": "article_slug",
 *   "title": "Article Title",
 *   "content": "Full markdown content...",
 *   "categories": ["Category1", "Category2"]
 * }
 */

import fs from "fs";
import { neon } from "@neondatabase/serverless";

function generateExcerpt(content, maxLen = 160) {
  const text = content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/#{1,6}\s+.*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\|[^|]*\|/g, "")
    .replace(/&#\d+;/g, "")
    .replace(/\n+/g, " ")
    .trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s\S*$/, "") + "...";
}

function calcReadingTime(content) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function calcWordCount(content) {
  return content.split(/\s+/).filter((w) => w.length > 0).length;
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error(
      "DATABASE_URL not set. Use: node --env-file=.env.local scripts/upsert-article.mjs <json-file>"
    );
    process.exit(1);
  }

  const jsonFile = process.argv[2];
  if (!jsonFile) {
    console.error("Usage: node --env-file=.env.local scripts/upsert-article.mjs <json-file>");
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
  const { slug, title, content, categories = [] } = data;

  if (!slug || !title || !content) {
    console.error("JSON must contain slug, title, and content fields");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const excerpt = generateExcerpt(content);
  const readingTime = calcReadingTime(content);
  const wordCount = calcWordCount(content);

  // Extract plain text for search
  const contentPlain = content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\n+/g, " ")
    .trim();

  // Check if page already exists — if so, save current version to page_revisions
  const existing = await sql`
    SELECT id, content, content_tiptap, version FROM pages WHERE slug = ${slug}
  `;

  let pageId;

  if (existing.length > 0) {
    const old = existing[0];
    const oldVersion = old.version || 1;
    const newVersion = oldVersion + 1;

    // Save the old content as a revision
    await sql`
      INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
      VALUES (${old.id}, ${oldVersion}, ${old.content}, ${old.content_tiptap}, ${'Auto-saved before update'}, ${true})
      ON CONFLICT (page_id, version) DO NOTHING
    `;
    console.log(`  Saved previous version ${oldVersion} to page_revisions`);

    // Update the existing page
    await sql`
      UPDATE pages SET
        title = ${title},
        content = ${content},
        excerpt = ${excerpt},
        reading_time = ${readingTime},
        word_count = ${wordCount},
        content_plain = ${contentPlain},
        status = 'published',
        quality = 'complete',
        version = ${newVersion},
        updated_at = now()
      WHERE id = ${old.id}
    `;
    pageId = old.id;
    console.log(`Updated page: ${slug} (id: ${pageId}, v${oldVersion} -> v${newVersion}, ${wordCount} words)`);
  } else {
    // Insert new page
    const result = await sql`
      INSERT INTO pages (slug, title, content, excerpt, reading_time, word_count, content_plain, status, quality, version)
      VALUES (${slug}, ${title}, ${content}, ${excerpt}, ${readingTime}, ${wordCount}, ${contentPlain}, 'published', 'complete', 1)
      RETURNING id
    `;
    pageId = result[0].id;
    console.log(`Created page: ${slug} (id: ${pageId}, v1, ${wordCount} words)`);
  }

  // Handle categories
  if (categories.length > 0) {
    // Remove old category associations
    await sql`DELETE FROM page_categories WHERE page_id = ${pageId}`;

    for (const catName of categories) {
      // Upsert category
      const catResult = await sql`
        INSERT INTO categories (name) VALUES (${catName})
        ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      `;
      const catId = catResult[0].id;

      // Link page to category
      await sql`
        INSERT INTO page_categories (page_id, category_id)
        VALUES (${pageId}, ${catId})
        ON CONFLICT DO NOTHING
      `;
    }
    console.log(`  Categories: ${categories.join(", ")}`);
  }

  // Trigger on-demand revalidation so the site reflects the update immediately
  const revalidateUrl = process.env.REVALIDATE_URL || "https://aiwiki.ai/api/revalidate";
  const revalidateSecret = process.env.REVALIDATE_SECRET;
  if (revalidateSecret) {
    try {
      const res = await fetch(revalidateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${revalidateSecret}`,
        },
        body: JSON.stringify({ slug }),
      });
      if (res.ok) {
        const result = await res.json();
        console.log(`  Revalidated: ${result.revalidated.join(", ")}`);
      } else {
        console.warn(`  Revalidation failed (${res.status}) - page will update at next ISR cycle`);
      }
    } catch (e) {
      console.warn(`  Revalidation skipped: ${e.message}`);
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
