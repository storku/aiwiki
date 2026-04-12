#!/usr/bin/env node

/**
 * Batch upserts all generated manufacturer articles into aiwiki database.
 *
 * Usage: node --env-file=.env.local scripts/batch-upsert-manufacturers.mjs
 */

import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

const INPUT_DIR = path.resolve("tmp/manufacturer-articles");

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
  return Math.max(1, Math.round(content.split(/\s+/).length / 200));
}

function calcWordCount(content) {
  return content.split(/\s+/).filter((w) => w.length > 0).length;
}

function extractPlainText(content) {
  return content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

async function upsertArticle(sql, data) {
  const { slug, title, content, categories = [] } = data;
  const excerpt = generateExcerpt(content);
  const readingTime = calcReadingTime(content);
  const wordCount = calcWordCount(content);
  const contentPlain = extractPlainText(content);

  const existing = await sql`
    SELECT id, content, content_tiptap, version FROM pages WHERE slug = ${slug}
  `;

  let pageId;

  if (existing.length > 0) {
    const old = existing[0];
    const oldVersion = old.version || 1;
    const newVersion = oldVersion + 1;

    await sql`
      INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
      VALUES (${old.id}, ${oldVersion}, ${old.content}, ${old.content_tiptap}, ${"Auto-saved before manufacturer article update"}, ${true})
      ON CONFLICT (page_id, version) DO NOTHING
    `;

    await sql`
      UPDATE pages SET
        title = ${title}, content = ${content}, excerpt = ${excerpt},
        reading_time = ${readingTime}, word_count = ${wordCount},
        content_plain = ${contentPlain}, status = 'published',
        quality = 'complete', version = ${newVersion}, updated_at = now()
      WHERE id = ${old.id}
    `;
    pageId = old.id;
    return { action: "updated", pageId, slug, version: newVersion, wordCount };
  } else {
    const result = await sql`
      INSERT INTO pages (slug, title, content, excerpt, reading_time, word_count, content_plain, status, quality, version)
      VALUES (${slug}, ${title}, ${content}, ${excerpt}, ${readingTime}, ${wordCount}, ${contentPlain}, 'published', 'complete', 1)
      RETURNING id
    `;
    pageId = result[0].id;
    return { action: "created", pageId, slug, version: 1, wordCount };
  }
}

async function handleCategories(sql, pageId, categories) {
  if (categories.length === 0) return;
  await sql`DELETE FROM page_categories WHERE page_id = ${pageId}`;
  for (const catName of categories) {
    const catResult = await sql`
      INSERT INTO categories (name) VALUES (${catName})
      ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
      RETURNING id
    `;
    await sql`
      INSERT INTO page_categories (page_id, category_id)
      VALUES (${pageId}, ${catResult[0].id})
      ON CONFLICT DO NOTHING
    `;
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set.");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const manifest = JSON.parse(
    fs.readFileSync(path.join(INPUT_DIR, "_manifest.json"), "utf-8")
  );
  console.log(`Processing ${manifest.total} manufacturer articles...`);

  const BATCH_SIZE = 10;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < manifest.generated.length; i += BATCH_SIZE) {
    const batch = manifest.generated.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(manifest.generated.length / BATCH_SIZE);
    console.log(`\nBatch ${batchNum}/${totalBatches}...`);

    const results = await Promise.allSettled(
      batch.map(async (entry) => {
        const data = JSON.parse(
          fs.readFileSync(path.join(INPUT_DIR, entry.file), "utf-8")
        );
        const result = await upsertArticle(sql, data);
        await handleCategories(sql, result.pageId, data.categories || []);
        return result;
      })
    );

    for (let j = 0; j < results.length; j++) {
      const result = results[j];
      const entry = batch[j];
      if (result.status === "fulfilled") {
        const r = result.value;
        console.log(
          `  ${r.action}: ${entry.name} (${r.slug}, v${r.version}, ${r.wordCount} words)`
        );
        successCount++;
      } else {
        console.error(`  ERROR: ${entry.name} - ${result.reason.message}`);
        errorCount++;
      }
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log("Done!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
