#!/usr/bin/env node

/**
 * Batch upserts all generated robot articles into aiwiki database.
 * Uses the same logic as upsert-article.mjs but processes all articles in one process
 * for efficiency.
 *
 * Usage: node --env-file=.env.local scripts/batch-upsert-robots.mjs
 */

import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

const INPUT_DIR = path.resolve("tmp/robot-articles");

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

  // Check if page exists
  const existing = await sql`
    SELECT id, content, content_tiptap, version FROM pages WHERE slug = ${slug}
  `;

  let pageId;

  if (existing.length > 0) {
    const old = existing[0];
    const oldVersion = old.version || 1;
    const newVersion = oldVersion + 1;

    // Save revision
    await sql`
      INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
      VALUES (${old.id}, ${oldVersion}, ${old.content}, ${old.content_tiptap}, ${"Auto-saved before robot article update"}, ${true})
      ON CONFLICT (page_id, version) DO NOTHING
    `;

    // Update page
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
    return { action: "updated", pageId, slug, version: newVersion, wordCount };
  } else {
    // Insert new page
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
    const catId = catResult[0].id;
    await sql`
      INSERT INTO page_categories (page_id, category_id)
      VALUES (${pageId}, ${catId})
      ON CONFLICT DO NOTHING
    `;
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use: node --env-file=.env.local scripts/batch-upsert-robots.mjs");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Read manifest
  const manifestPath = path.join(INPUT_DIR, "_manifest.json");
  if (!fs.existsSync(manifestPath)) {
    console.error("No manifest found. Run generate-robot-articles.mjs first.");
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  console.log(`Processing ${manifest.total} articles...`);

  const BATCH_SIZE = 10;
  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < manifest.generated.length; i += BATCH_SIZE) {
    const batch = manifest.generated.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(manifest.generated.length / BATCH_SIZE);

    console.log(`\nBatch ${batchNum}/${totalBatches} (${batch.length} articles)...`);

    const results = await Promise.allSettled(
      batch.map(async (entry) => {
        const filePath = path.join(INPUT_DIR, entry.file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

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
        console.log(`  ${r.action}: ${entry.name} (${r.slug}, v${r.version}, ${r.wordCount} words)`);
        successCount++;
      } else {
        console.error(`  ERROR: ${entry.name} - ${result.reason.message}`);
        errors.push({ name: entry.name, slug: entry.slug, error: result.reason.message });
        errorCount++;
      }
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  if (errors.length > 0) {
    console.log("\nFailed articles:");
    errors.forEach((e) => console.log(`  - ${e.name} (${e.slug}): ${e.error}`));
  }

  // Trigger revalidation for all pages
  const revalidateUrl = process.env.REVALIDATE_URL || "https://aiwiki.ai/api/revalidate";
  const revalidateSecret = process.env.REVALIDATE_SECRET;
  if (revalidateSecret) {
    console.log("\nTriggering revalidation for all robot pages...");
    for (const entry of manifest.generated) {
      try {
        const res = await fetch(revalidateUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${revalidateSecret}`,
          },
          body: JSON.stringify({ slug: entry.slug }),
        });
        if (!res.ok) {
          console.warn(`  Revalidation failed for ${entry.slug} (${res.status})`);
        }
      } catch (e) {
        // Ignore revalidation errors - pages will update at next ISR cycle
      }
    }
    console.log("Revalidation requests sent.");
  }

  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
