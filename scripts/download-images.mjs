#!/usr/bin/env node

/**
 * Downloads all images referenced in wiki content from the old MediaWiki server
 * to the local public/images/ directory.
 *
 * Usage: node scripts/download-images.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "content");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");
const BASE_URL = "https://aiwiki.ai";

async function main() {
  // Find all image references
  const imagePaths = new Set();
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    // Match /images/... paths in markdown and HTML
    const matches = content.matchAll(/\/images\/[^\s)"'<>]+/g);
    for (const match of matches) {
      imagePaths.add(match[0]);
    }
  }

  console.log(`Found ${imagePaths.size} unique image paths`);

  let downloaded = 0;
  let failed = 0;
  let skipped = 0;

  for (const imgPath of imagePaths) {
    const localPath = path.join(OUTPUT_DIR, imgPath.replace(/^\/images\//, ""));
    const dir = path.dirname(localPath);

    // Skip if already downloaded
    if (fs.existsSync(localPath)) {
      skipped++;
      continue;
    }

    // Create directory
    fs.mkdirSync(dir, { recursive: true });

    const url = `${BASE_URL}${imgPath}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`  FAIL ${response.status}: ${imgPath}`);
        failed++;
        continue;
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(localPath, buffer);
      downloaded++;

      if (downloaded % 50 === 0) {
        console.log(`  Downloaded ${downloaded}...`);
      }

      // Rate limit
      await new Promise((r) => setTimeout(r, 100));
    } catch (err) {
      console.error(`  ERROR: ${imgPath} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! Downloaded: ${downloaded}, Skipped: ${skipped}, Failed: ${failed}`);
}

main().catch(console.error);
