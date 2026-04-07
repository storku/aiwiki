#!/usr/bin/env node

/**
 * Migrates images from local public/images/ to Vercel Blob storage,
 * then updates all image URLs in the database (both content and content_html).
 *
 * Prerequisites:
 *   1. Images downloaded to public/images/ from old MediaWiki server
 *   2. Set BLOB_READ_WRITE_TOKEN and DATABASE_URL in .env.local
 *
 * Usage: node --env-file=.env.local scripts/migrate-images-to-blob.mjs
 */

import { put } from "@vercel/blob";
import { neon } from "@neondatabase/serverless";
import { readFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "../public");

async function main() {
  if (!process.env.DATABASE_URL || !process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("DATABASE_URL and BLOB_READ_WRITE_TOKEN must be set in .env.local");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Find all unique /images/ paths from content_html and content
  console.log("Scanning database for image references...");
  const rows = await sql`SELECT id, slug, content, content_html FROM pages WHERE content_html LIKE '%/images/%' OR content LIKE '%/images/%'`;

  const imagePaths = new Set();
  for (const row of rows) {
    for (const field of [row.content_html || "", row.content || ""]) {
      const matches = field.matchAll(/\/images\/[^\s)"'<>]+/g);
      for (const match of matches) {
        imagePaths.add(match[0]);
      }
    }
  }

  console.log(`Found ${imagePaths.size} unique image paths across ${rows.length} articles`);

  if (imagePaths.size === 0) {
    console.log("No images to migrate.");
    return;
  }

  // Upload each image from local files to Vercel Blob
  const urlMap = new Map(); // old path -> blob URL
  let uploaded = 0;
  let failed = 0;

  for (const imgPath of imagePaths) {
    const decoded = decodeURIComponent(imgPath);
    const localFile = resolve(PUBLIC_DIR, decoded.replace(/^\//, ""));

    try {
      const data = await readFile(localFile);
      const blobPathname = `wiki${decoded}`;
      const blob = await put(blobPathname, data, {
        access: "public",
        addRandomSuffix: false,
      });

      urlMap.set(imgPath, blob.url);
      uploaded++;

      if (uploaded % 20 === 0) {
        console.log(`  Uploaded ${uploaded}/${imagePaths.size}...`);
      }
    } catch (err) {
      console.error(`  FAIL: ${imgPath} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nUploaded: ${uploaded}, Failed: ${failed}`);

  // Update image URLs in database (both content and content_html)
  if (urlMap.size > 0) {
    console.log("\nUpdating image URLs in database...");
    let updated = 0;

    for (const row of rows) {
      let newContent = row.content || "";
      let newHtml = row.content_html || "";
      let changed = false;

      for (const [oldPath, blobUrl] of urlMap) {
        if (newContent.includes(oldPath)) {
          newContent = newContent.replaceAll(oldPath, blobUrl);
          changed = true;
        }
        if (newHtml.includes(oldPath)) {
          newHtml = newHtml.replaceAll(oldPath, blobUrl);
          changed = true;
        }
      }

      if (changed) {
        await sql`UPDATE pages SET content = ${newContent}, content_html = ${newHtml}, updated_at = now() WHERE id = ${row.id}`;
        updated++;
        console.log(`  Updated: ${row.slug}`);
      }
    }

    console.log(`\nUpdated ${updated} pages with new blob URLs`);
  }

  console.log("\nDone! You can now delete public/images/ and remove the /images rewrite from next.config.ts");
}

main().catch(console.error);
