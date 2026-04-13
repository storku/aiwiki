#!/usr/bin/env node

/**
 * Removes MediaWiki Template: tags from wiki page content.
 * These are leftover artifacts from the MediaWiki migration.
 *
 * Examples removed:
 * - "Template:Infobox software"
 * - "Template:About"
 * - "Template:Infobox AI term"
 *
 * Usage: node --env-file=.env.local scripts/fix-template-tags.mjs
 */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

function removeTemplateTags(content) {
  // Remove lines that are just a Template: tag (possibly with whitespace)
  let cleaned = content.replace(/^\s*Template:\w[\w\s]*$/gm, "");
  // Remove inline Template: tags
  cleaned = cleaned.replace(/Template:\w[\w\s]*/g, "");
  // Clean up multiple blank lines left behind
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");
  return cleaned;
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Find pages with Template: tags in content
  const pages = await sql`
    SELECT id, slug, content, version
    FROM pages
    WHERE content LIKE '%Template:%'
    ORDER BY slug
  `;

  console.log(`Found ${pages.length} pages with Template: tags`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const page of pages) {
    const fixedContent = removeTemplateTags(page.content);

    if (fixedContent === page.content) {
      console.log(`  skipped: ${page.slug} (no change after cleanup)`);
      continue;
    }

    const newVersion = (page.version || 1) + 1;

    try {
      // Save revision
      await sql`
        INSERT INTO page_revisions (page_id, version, content, summary, ai_assisted)
        VALUES (${page.id}, ${page.version || 1}, ${page.content}, ${"Remove MediaWiki Template: tags"}, ${true})
        ON CONFLICT (page_id, version) DO NOTHING
      `;

      // Update page
      await sql`
        UPDATE pages SET
          content = ${fixedContent},
          version = ${newVersion},
          updated_at = now()
        WHERE id = ${page.id}
      `;

      console.log(`  fixed: ${page.slug} (v${newVersion})`);
      fixedCount++;
    } catch (err) {
      console.error(`  ERROR: ${page.slug} - ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Fixed: ${fixedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log("Done!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
