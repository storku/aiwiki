#!/usr/bin/env node

/**
 * Migrates all markdown content from the filesystem into Neon PostgreSQL.
 *
 * Prerequisites:
 *   1. Create a Neon database and set DATABASE_URL in .env.local
 *   2. Run the schema: psql $DATABASE_URL < scripts/schema.sql
 *
 * Usage: node --env-file=.env.local scripts/migrate-content-to-db.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { neon } from "@neondatabase/serverless";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "content");

const INTERNAL_CATEGORIES = new Set([
  "Not_updated",
  "Not_Edited",
  "Updated",
  "Not_edited",
  "Pages_with_broken_file_links",
]);

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

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use: node --env-file=.env.local scripts/migrate-content-to-db.mjs");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Read index
  const indexPath = path.join(CONTENT_DIR, "_index.json");
  if (!fs.existsSync(indexPath)) {
    console.error("content/_index.json not found");
    process.exit(1);
  }

  const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  console.log(`Found ${index.length} pages in index`);

  // Collect all unique categories first
  const allCategories = new Set();
  for (const entry of index) {
    for (const cat of entry.categories || []) {
      if (!INTERNAL_CATEGORIES.has(cat)) {
        allCategories.add(cat);
      }
    }
  }

  console.log(`Found ${allCategories.size} unique categories`);

  // Insert categories
  console.log("Inserting categories...");
  const categoryIdMap = new Map();
  for (const name of allCategories) {
    const result = await sql`
      INSERT INTO categories (name) VALUES (${name})
      ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
      RETURNING id
    `;
    categoryIdMap.set(name, result[0].id);
  }
  console.log(`Inserted ${categoryIdMap.size} categories`);

  // Insert pages in batches
  let inserted = 0;
  let skipped = 0;

  for (const entry of index) {
    const filePath = path.join(CONTENT_DIR, `${entry.slug}.md`);
    if (!fs.existsSync(filePath)) {
      skipped++;
      continue;
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const title = data.title || entry.title || entry.slug;
    const slug = data.slug || entry.slug;
    const excerpt = generateExcerpt(content);
    const readingTime = calcReadingTime(content);
    const categories = (entry.categories || []).filter((c) => !INTERNAL_CATEGORIES.has(c));

    try {
      // Insert page
      const result = await sql`
        INSERT INTO pages (slug, title, content, excerpt, reading_time)
        VALUES (${slug}, ${title}, ${content}, ${excerpt}, ${readingTime})
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          content = EXCLUDED.content,
          excerpt = EXCLUDED.excerpt,
          reading_time = EXCLUDED.reading_time,
          updated_at = now()
        RETURNING id
      `;
      const pageId = result[0].id;

      // Insert page-category associations
      for (const cat of categories) {
        const catId = categoryIdMap.get(cat);
        if (catId) {
          await sql`
            INSERT INTO page_categories (page_id, category_id)
            VALUES (${pageId}, ${catId})
            ON CONFLICT DO NOTHING
          `;
        }
      }

      inserted++;
      if (inserted % 100 === 0) {
        console.log(`  Inserted ${inserted}/${index.length}...`);
      }
    } catch (err) {
      console.error(`  Error inserting ${slug}: ${err.message}`);
    }
  }

  console.log(`\nDone! Inserted: ${inserted}, Skipped: ${skipped}`);

  // Verify
  const pageCount = await sql`SELECT COUNT(*) as count FROM pages`;
  const catCount = await sql`SELECT COUNT(*) as count FROM categories`;
  const pcCount = await sql`SELECT COUNT(*) as count FROM page_categories`;
  console.log(`\nVerification:`);
  console.log(`  Pages: ${pageCount[0].count}`);
  console.log(`  Categories: ${catCount[0].count}`);
  console.log(`  Page-Category links: ${pcCount[0].count}`);
}

main().catch(console.error);
