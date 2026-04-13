#!/usr/bin/env node

/**
 * Fixes content_plain and excerpt fields to:
 * 1. Strip markdown table formatting (pipes, separator rows)
 * 2. Strip MediaWiki template tags (Template:Infobox, Template:About, etc.)
 * 3. Regenerate search vectors
 *
 * Usage: node --env-file=.env.local scripts/fix-excerpts-plaintext.mjs
 */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

function stripTableFormatting(text) {
  return text
    // Remove table separator rows: | --- | --- | or |---|---|
    .replace(/\|[\s-]+(\|[\s-]+)*\|/g, " ")
    // Remove pipe-separated table rows, keeping the cell content
    .replace(/^\|(.+)\|$/gm, (_, content) => {
      return content
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean)
        .join(", ");
    })
    // Clean up remaining isolated pipes
    .replace(/\s*\|\s*/g, " ");
}

function stripTemplateText(text) {
  // Remove MediaWiki template tags like "Template:Infobox software",
  // "Template:About", "Template:Infobox AI term", etc.
  return text.replace(/Template:\w[\w\s]*/gi, "");
}

function stripMarkdownTables(content) {
  // Remove entire markdown table blocks (header + separator + rows)
  // A table block is a sequence of lines starting with |
  const lines = content.split("\n");
  const result = [];
  let i = 0;
  while (i < lines.length) {
    // Detect table: line starts with | and next line is separator (| --- |)
    if (
      lines[i].trimStart().startsWith("|") &&
      i + 1 < lines.length &&
      /^\s*\|[\s-]+(\|[\s-]+)*\|\s*$/.test(lines[i + 1])
    ) {
      // Skip the entire table block
      while (i < lines.length && lines[i].trimStart().startsWith("|")) {
        i++;
      }
      continue;
    }
    result.push(lines[i]);
    i++;
  }
  return result.join("\n");
}

function generatePlainText(content) {
  let text = content;
  // Remove frontmatter
  text = text.replace(/^---[\s\S]*?---/, "");
  // Remove entire markdown tables (for cleaner search text)
  text = stripMarkdownTables(text);
  // Remove headings markers
  text = text.replace(/#{1,6}\s+/g, "");
  // Remove markdown links, keep text: [text](url)
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Remove wiki-style links: [[target|display]] -> display, [[target]] -> target
  text = text.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2");
  text = text.replace(/\[\[([^\]]+)\]\]/g, "$1");
  // Remove bold/italic/code markers
  text = text.replace(/[*_`~]/g, "");
  // Remove image references
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "");
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, "");
  // Strip any remaining table pipe characters
  text = stripTableFormatting(text);
  // Strip template tags
  text = stripTemplateText(text);
  // Remove HTML entities
  text = text.replace(/&#\d+;/g, "");
  // Remove "See also:" lines
  text = text.replace(/See also:[^\n]*/g, "");
  // Remove "Redirect to:" lines
  text = text.replace(/Redirect to:[^\n]*/g, "");
  // Collapse whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

function generateExcerpt(content, maxLen = 160) {
  let text = generatePlainText(content);
  // Remove any leading "See also:" that might remain
  text = text.replace(/^See also:\s*[^.]*\.?\s*/i, "");
  // Remove leading "Redirect to:" text
  text = text.replace(/^Redirect to:\s*[^\n]*/i, "").trim();
  // Remove leading dashes from redirects
  text = text.replace(/^-\s*/, "").trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s\S*$/, "") + "...";
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Get all published page IDs first (lightweight query)
  const allIds = await sql`
    SELECT id, slug FROM pages WHERE status = 'published' ORDER BY slug
  `;

  console.log(`Checking ${allIds.length} published pages...`);

  let fixedPlain = 0;
  let fixedExcerpt = 0;
  let errorCount = 0;
  const BATCH_SIZE = 10;

  for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
    const batchIds = allIds.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(allIds.length / BATCH_SIZE);

    if (batchNum % 20 === 1) {
      console.log(`\nBatch ${batchNum}/${totalBatches}...`);
    }

    const results = await Promise.allSettled(
      batchIds.map(async ({ id, slug }) => {
        // Fetch content individually to avoid huge responses
        const rows = await sql`
          SELECT id, slug, content, excerpt, content_plain, title
          FROM pages WHERE id = ${id}
        `;
        if (rows.length === 0) return { slug, plainChanged: false, excerptChanged: false };
        const page = rows[0];

        const newPlain = generatePlainText(page.content);
        const newExcerpt = generateExcerpt(page.content);

        const plainChanged = newPlain !== page.content_plain;
        const excerptChanged = newExcerpt !== page.excerpt;

        if (!plainChanged && !excerptChanged) {
          return { slug, plainChanged: false, excerptChanged: false };
        }

        // Update the page
        await sql`
          UPDATE pages SET
            content_plain = ${newPlain},
            excerpt = ${newExcerpt},
            search_vector = to_tsvector('english', ${slug.replace(/_/g, " ")} || ' ' || ${page.title} || ' ' || ${newPlain})
          WHERE id = ${id}
        `;

        return { slug, plainChanged, excerptChanged };
      })
    );

    for (let j = 0; j < results.length; j++) {
      const result = results[j];
      if (result.status === "fulfilled") {
        const r = result.value;
        if (r.plainChanged) fixedPlain++;
        if (r.excerptChanged) fixedExcerpt++;
        if (r.plainChanged || r.excerptChanged) {
          console.log(
            `  fixed: ${r.slug} (plain:${r.plainChanged ? "Y" : "N"}, excerpt:${r.excerptChanged ? "Y" : "N"})`
          );
        }
      } else {
        console.error(`  ERROR: ${batchIds[j].slug} - ${result.reason.message}`);
        errorCount++;
      }
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Content plain fixed: ${fixedPlain}`);
  console.log(`Excerpts fixed: ${fixedExcerpt}`);
  console.log(`Errors: ${errorCount}`);
  console.log("Done!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
