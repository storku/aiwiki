#!/usr/bin/env node

/**
 * Fix internal wikilinks: replace dashes with underscores in slugs.
 *
 * The wiki convention (like Wikipedia) is to use underscores for spaces in slugs.
 * Some content was generated with dashes instead (e.g., /wiki/natural-language-processing
 * instead of /wiki/natural_language_processing).
 *
 * This script:
 * 1. Fetches all page slugs to know which slugs actually exist
 * 2. For each page, scans content (markdown), content_html, and content_tiptap
 * 3. Replaces dashed slugs with underscore versions when appropriate
 * 4. Updates the page in the database
 *
 * Usage: node --env-file=.env.local scripts/fix-wikilinks.mjs [--dry-run] [--limit N]
 */

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
const DRY_RUN = process.argv.includes("--dry-run");
const limitArg = process.argv.indexOf("--limit");
const LIMIT = limitArg > -1 ? parseInt(process.argv[limitArg + 1]) : 0;

/**
 * Given a slug from a link, determine the correct slug.
 * If the slug exists as-is, keep it. Otherwise try replacing dashes with underscores.
 */
function normalizeSlug(slug, slugSet) {
  // Already exists as-is (e.g., "gpt-4" is a real slug)
  if (slugSet.has(slug)) return slug;

  // Try replacing all dashes with underscores
  const underscored = slug.replace(/-/g, "_");
  if (underscored !== slug && slugSet.has(underscored)) return underscored;

  // Neither exists: use underscore convention for consistency
  if (underscored !== slug) return underscored;

  return slug;
}

/**
 * Fix wiki link slugs in markdown content.
 * Matches patterns like [text](/wiki/slug-with-dashes)
 */
function fixMarkdownLinks(content, slugSet) {
  if (!content) return { content, changed: false };

  let changed = false;
  const fixed = content.replace(
    /\]\(\/wiki\/([^)#?]+)/g,
    (match, slug) => {
      const normalized = normalizeSlug(slug, slugSet);
      if (normalized !== slug) {
        changed = true;
        return `](/wiki/${normalized}`;
      }
      return match;
    }
  );

  return { content: fixed, changed };
}

/**
 * Fix wiki link slugs in HTML content.
 * Matches patterns like href="/wiki/slug-with-dashes"
 */
function fixHtmlLinks(html, slugSet) {
  if (!html) return { content: html, changed: false };

  let changed = false;
  const fixed = html.replace(
    /href="\/wiki\/([^"#?]+)/g,
    (match, slug) => {
      const normalized = normalizeSlug(slug, slugSet);
      if (normalized !== slug) {
        changed = true;
        return `href="/wiki/${normalized}`;
      }
      return match;
    }
  );

  return { content: fixed, changed };
}

/**
 * Recursively fix wikilink hrefs in TipTap JSON content.
 */
function fixTiptapJson(node, slugSet) {
  if (!node || typeof node !== "object") return false;

  let changed = false;

  // Check marks for wikilink or link types
  if (Array.isArray(node.marks)) {
    for (const mark of node.marks) {
      if (
        mark &&
        (mark.type === "wikilink" || mark.type === "link") &&
        mark.attrs?.href
      ) {
        const href = mark.attrs.href;
        const wikiMatch = href.match(/^\/wiki\/([^#?]+)/);
        if (wikiMatch) {
          const slug = wikiMatch[1];
          const normalized = normalizeSlug(slug, slugSet);
          if (normalized !== slug) {
            mark.attrs.href = `/wiki/${normalized}`;
            changed = true;
          }
        }
      }
    }
  }

  // Recurse into content array
  if (Array.isArray(node.content)) {
    for (const child of node.content) {
      if (fixTiptapJson(child, slugSet)) {
        changed = true;
      }
    }
  }

  return changed;
}

async function main() {
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

  // 1. Get all page slugs
  const allSlugs = await sql`SELECT slug FROM pages`;
  const slugSet = new Set(allSlugs.map((r) => r.slug));
  console.log(`Total slugs in database: ${slugSet.size}`);

  // 2. Get page IDs and slugs (lightweight query)
  const pageList = await sql`
    SELECT id, slug FROM pages ORDER BY slug
  `;

  const processLimit = LIMIT || pageList.length;
  console.log(`Pages to process: ${Math.min(processLimit, pageList.length)}`);

  let totalPagesModified = 0;
  let totalLinksFixed = 0;

  for (let i = 0; i < Math.min(processLimit, pageList.length); i++) {
    const { id: pageId, slug: pageSlug } = pageList[i];

    // Fetch full content for this page individually
    const rows = await sql`
      SELECT id, slug, content, content_html, content_tiptap, version
      FROM pages WHERE id = ${pageId}
    `;
    if (rows.length === 0) continue;
    const page = rows[0];
    let pageModified = false;
    let linksFixedInPage = 0;

    // Fix markdown content
    const mdResult = fixMarkdownLinks(page.content, slugSet);
    if (mdResult.changed) {
      pageModified = true;
      // Count fixed links
      const oldLinks = (page.content.match(/\]\(\/wiki\/[^)]+\)/g) || []);
      const newLinks = (mdResult.content.match(/\]\(\/wiki\/[^)]+\)/g) || []);
      for (let j = 0; j < oldLinks.length; j++) {
        if (oldLinks[j] !== newLinks[j]) linksFixedInPage++;
      }
    }

    // Fix HTML content
    const htmlResult = fixHtmlLinks(page.content_html, slugSet);
    if (htmlResult.changed) {
      pageModified = true;
    }

    // Fix TipTap JSON content
    let tiptapChanged = false;
    let tiptapJson = page.content_tiptap;
    if (tiptapJson) {
      // Parse if it's a string
      if (typeof tiptapJson === "string") {
        try {
          tiptapJson = JSON.parse(tiptapJson);
        } catch {
          tiptapJson = null;
        }
      }
      if (tiptapJson) {
        tiptapChanged = fixTiptapJson(tiptapJson, slugSet);
        if (tiptapChanged) pageModified = true;
      }
    }

    if (pageModified) {
      totalPagesModified++;
      totalLinksFixed += linksFixedInPage;

      console.log(
        `  [${i + 1}/${processLimit}] ${page.slug}: ${linksFixedInPage} link(s) fixed`
      );

      if (!DRY_RUN) {
        const updateFields = {};

        // Save old version to revisions
        await sql`
          INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
          VALUES (
            ${page.id},
            ${page.version || 1},
            ${page.content},
            ${page.content_tiptap ? JSON.stringify(page.content_tiptap) : null}::jsonb,
            ${"Auto-saved before wikilink fix"},
            ${true}
          )
          ON CONFLICT (page_id, version) DO NOTHING
        `;

        // Update the page
        await sql`
          UPDATE pages SET
            content = ${mdResult.content},
            content_html = ${htmlResult.content},
            content_tiptap = ${tiptapChanged ? JSON.stringify(tiptapJson) : page.content_tiptap}::jsonb,
            version = ${(page.version || 1) + 1},
            updated_at = now()
          WHERE id = ${page.id}
        `;
      }
    }
  }

  console.log(`\nDone!`);
  console.log(`Pages modified: ${totalPagesModified}`);
  console.log(`Total links fixed: ${totalLinksFixed}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
