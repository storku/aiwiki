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

  // Upsert the page
  const result = await sql`
    INSERT INTO pages (slug, title, content, excerpt, reading_time, word_count, content_plain, status, quality)
    VALUES (${slug}, ${title}, ${content}, ${excerpt}, ${readingTime}, ${wordCount}, ${contentPlain}, 'published', 'complete')
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      content = EXCLUDED.content,
      excerpt = EXCLUDED.excerpt,
      reading_time = EXCLUDED.reading_time,
      word_count = EXCLUDED.word_count,
      content_plain = EXCLUDED.content_plain,
      status = EXCLUDED.status,
      quality = EXCLUDED.quality,
      updated_at = now()
    RETURNING id
  `;
  const pageId = result[0].id;
  console.log(`Upserted page: ${slug} (id: ${pageId}, ${wordCount} words)`);

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

  console.log("Done!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
