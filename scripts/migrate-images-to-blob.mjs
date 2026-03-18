#!/usr/bin/env node

/**
 * Migrates images from the old MediaWiki server to Vercel Blob storage,
 * then updates all image URLs in the database.
 *
 * Prerequisites:
 *   1. Run migrate-content-to-db.mjs first
 *   2. Set BLOB_READ_WRITE_TOKEN and DATABASE_URL in .env.local
 *
 * Usage: node --env-file=.env.local scripts/migrate-images-to-blob.mjs
 */

import { put } from "@vercel/blob";
import { neon } from "@neondatabase/serverless";

const BASE_URL = "https://aiwiki.ai";

async function main() {
  if (!process.env.DATABASE_URL || !process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("DATABASE_URL and BLOB_READ_WRITE_TOKEN must be set in .env.local");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  // Find all unique image paths in page content
  console.log("Scanning page content for image references...");
  const rows = await sql`SELECT id, content FROM pages`;

  const imagePaths = new Set();
  for (const row of rows) {
    const matches = row.content.matchAll(/\/images\/[^\s)"'<>]+/g);
    for (const match of matches) {
      imagePaths.add(match[0]);
    }
  }

  console.log(`Found ${imagePaths.size} unique image paths`);

  if (imagePaths.size === 0) {
    console.log("No images to migrate.");
    return;
  }

  // Download and upload each image
  const urlMap = new Map(); // old path -> blob URL
  let uploaded = 0;
  let failed = 0;

  for (const imgPath of imagePaths) {
    const url = `${BASE_URL}${imgPath}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`  FAIL ${response.status}: ${imgPath}`);
        failed++;
        continue;
      }

      const buffer = await response.arrayBuffer();
      const contentType = response.headers.get("content-type") || "image/png";

      // Upload to Vercel Blob
      const blobPathname = imgPath.replace(/^\//, ""); // strip leading slash
      const blob = await put(blobPathname, Buffer.from(buffer), {
        access: "public",
        contentType,
      });

      urlMap.set(imgPath, blob.url);
      uploaded++;

      if (uploaded % 25 === 0) {
        console.log(`  Uploaded ${uploaded}/${imagePaths.size}...`);
      }

      // Rate limit
      await new Promise((r) => setTimeout(r, 100));
    } catch (err) {
      console.error(`  ERROR: ${imgPath} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nUploaded: ${uploaded}, Failed: ${failed}`);

  // Update image URLs in page content
  if (urlMap.size > 0) {
    console.log("\nUpdating image URLs in database...");
    let updated = 0;
    for (const row of rows) {
      let newContent = row.content;
      let changed = false;
      for (const [oldPath, blobUrl] of urlMap) {
        if (newContent.includes(oldPath)) {
          newContent = newContent.replaceAll(oldPath, blobUrl);
          changed = true;
        }
      }
      if (changed) {
        await sql`UPDATE pages SET content = ${newContent}, updated_at = now() WHERE id = ${row.id}`;
        updated++;
      }
    }
    console.log(`Updated ${updated} pages with new image URLs`);
  }

  console.log("\nDone!");
}

main().catch(console.error);
