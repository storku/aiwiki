#!/usr/bin/env node

/**
 * Fixes infobox tables that have inconsistent column counts.
 * The bug: tables start with `| --- |` (1 column) but data rows have
 * `| **Label** | Value |` (2 columns). GFM treats the whole table as
 * 1-column, so pipes render as literal text instead of cell separators.
 *
 * Fix: change `| --- |` to `| --- | --- |` and add empty second cell
 * to single-column rows (title, image, section headers).
 *
 * Usage: node --env-file=.env.local scripts/fix-infobox-tables.mjs
 */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

function fixInfoboxTable(content) {
  const lines = content.split("\n");
  const result = [];
  let i = 0;
  let fixed = false;

  while (i < lines.length) {
    // Look for the start of an infobox table:
    // A line starting with `|` followed by `| --- |` on the next line
    if (
      !fixed &&
      lines[i].startsWith("|") &&
      i + 1 < lines.length &&
      lines[i + 1].trim() === "| --- |"
    ) {
      // Collect the full table
      const tableStart = i;
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }

      // Check if this table has 2-column data rows (infobox pattern)
      const hasTwoColRows = tableLines.some((line) => {
        // Count pipes: `| label | value |` has 3 pipes
        const pipeCount = (line.match(/\|/g) || []).length;
        return pipeCount >= 3 && line.includes("**");
      });

      if (hasTwoColRows && tableLines[1].trim() === "| --- |") {
        // Fix the table
        for (let j = 0; j < tableLines.length; j++) {
          const line = tableLines[j];

          if (j === 1 && line.trim() === "| --- |") {
            // Fix separator row
            result.push("| --- | --- |");
            fixed = true;
            continue;
          }

          // Count pipes to determine column count
          const pipeCount = (line.match(/\|/g) || []).length;

          if (pipeCount === 2) {
            // Single-column row: `| content |` → `| content | |`
            // But the title row (j === 0) should also become 2 columns
            const content = line.slice(1, -1).trim();
            result.push(`| ${content} | |`);
          } else {
            // Already 2+ columns, keep as is
            result.push(line);
          }
        }
      } else {
        // Not an infobox table, keep as is
        for (const line of tableLines) {
          result.push(line);
        }
      }
      continue;
    }

    result.push(lines[i]);
    i++;
  }

  return result.join("\n");
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Find all pages with the broken infobox pattern
  const pages = await sql`
    SELECT id, slug, content, version
    FROM pages
    WHERE content LIKE '%| --- |%'
      AND content LIKE '%| **%| %|%'
      AND content NOT LIKE '%| --- | --- |%'
    ORDER BY slug
  `;

  console.log(`Found ${pages.length} pages with broken infobox tables`);

  let fixedCount = 0;
  let errorCount = 0;
  const BATCH_SIZE = 10;

  for (let i = 0; i < pages.length; i += BATCH_SIZE) {
    const batch = pages.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(pages.length / BATCH_SIZE);
    console.log(`\nBatch ${batchNum}/${totalBatches}...`);

    const results = await Promise.allSettled(
      batch.map(async (page) => {
        const fixedContent = fixInfoboxTable(page.content);

        if (fixedContent === page.content) {
          return { slug: page.slug, action: "skipped" };
        }

        const newVersion = (page.version || 1) + 1;

        // Save revision
        await sql`
          INSERT INTO page_revisions (page_id, version, content, summary, ai_assisted)
          VALUES (${page.id}, ${page.version || 1}, ${page.content}, ${"Fix infobox table column count"}, ${true})
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

        return { slug: page.slug, action: "fixed", version: newVersion };
      })
    );

    for (let j = 0; j < results.length; j++) {
      const result = results[j];
      if (result.status === "fulfilled") {
        const r = result.value;
        if (r.action === "fixed") {
          console.log(`  fixed: ${r.slug} (v${r.version})`);
          fixedCount++;
        } else {
          console.log(`  skipped: ${r.slug}`);
        }
      } else {
        console.error(`  ERROR: ${batch[j].slug} - ${result.reason.message}`);
        errorCount++;
      }
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
