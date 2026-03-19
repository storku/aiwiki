#!/usr/bin/env node
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3001";
const slugs = ["neural_network", "chatgpt", "transformer", "large_language_model", "deep_learning"];

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const slug of slugs) {
    const failed = [];
    page.on("response", (resp) => {
      if (resp.status() >= 400) {
        failed.push({ url: resp.url(), status: resp.status() });
      }
    });

    await page.goto(`${BASE}/wiki/${slug}`, { waitUntil: "networkidle", timeout: 15000 });

    if (failed.length) {
      console.log(`\n${slug}: ${failed.length} failed resources`);
      for (const f of failed) {
        console.log(`  ${f.status} ${f.url}`);
      }
    } else {
      console.log(`${slug}: OK (no 404s)`);
    }

    page.removeAllListeners("response");
  }

  await browser.close();
}

main().catch(console.error);
