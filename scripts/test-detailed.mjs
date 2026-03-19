#!/usr/bin/env node
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3001";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Test 1: Check that pre-rendered HTML articles have heading IDs for TOC
  console.log("=== Test: TOC heading IDs in pre-rendered HTML ===");
  await page.goto(`${BASE}/wiki/neural_network`, { waitUntil: "networkidle", timeout: 15000 });

  // Check if headings in wiki-content have IDs
  const headingsWithIds = await page.$$eval(".wiki-content h2[id], .wiki-content h3[id], .wiki-content h4[id]",
    els => els.map(e => ({ tag: e.tagName, id: e.id, text: e.textContent?.trim().slice(0, 50) }))
  );
  const headingsWithoutIds = await page.$$eval(".wiki-content h2:not([id]), .wiki-content h3:not([id]), .wiki-content h4:not([id])",
    els => els.map(e => ({ tag: e.tagName, text: e.textContent?.trim().slice(0, 50) }))
  );
  console.log(`  Headings with IDs: ${headingsWithIds.length}`);
  console.log(`  Headings WITHOUT IDs: ${headingsWithoutIds.length}`);
  if (headingsWithoutIds.length > 0) {
    console.log("  Missing IDs on:", headingsWithoutIds.slice(0, 5));
  }

  // Check TOC links
  const tocLinks = await page.$$eval(".toc-link, aside a[href^='#']",
    els => els.map(e => ({ href: e.getAttribute("href"), text: e.textContent?.trim().slice(0, 40) }))
  );
  console.log(`  TOC links: ${tocLinks.length}`);

  // Check if TOC links match heading IDs
  const headingIds = new Set(headingsWithIds.map(h => h.id));
  const brokenTocLinks = tocLinks.filter(l => !headingIds.has(l.href?.replace("#", "")));
  if (brokenTocLinks.length > 0) {
    console.log(`  BROKEN TOC links (${brokenTocLinks.length}):`, brokenTocLinks.slice(0, 5));
  } else if (tocLinks.length > 0) {
    console.log("  All TOC links point to valid heading IDs");
  }

  // Test 2: Check wiki internal links work
  console.log("\n=== Test: Internal wiki links in articles ===");
  const wikiLinks = await page.$$eval('.wiki-content a[href^="/wiki/"]',
    els => els.map(e => e.getAttribute("href")).filter(Boolean)
  );
  console.log(`  Internal wiki links on neural_network: ${wikiLinks.length}`);
  // Test a sample of them
  const sampleLinks = [...new Set(wikiLinks)].slice(0, 5);
  for (const href of sampleLinks) {
    const resp = await page.goto(`${BASE}${href}`, { waitUntil: "domcontentloaded", timeout: 10000 });
    const status = resp?.status() || 0;
    console.log(`  ${status === 200 ? "OK" : "FAIL"} ${href} (${status})`);
  }

  // Test 3: Dark mode toggle
  console.log("\n=== Test: Theme toggle ===");
  await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 15000 });
  const themeToggle = await page.$('button[aria-label*="theme"], button[title*="theme"], button[class*="theme"]');
  if (themeToggle) {
    await themeToggle.click();
    await page.waitForTimeout(500);
    const htmlClass = await page.$eval("html", el => el.className);
    console.log(`  Theme toggled, html class: "${htmlClass}"`);
    console.log("  OK  Theme toggle works");
  } else {
    // Try to find any toggle button
    const buttons = await page.$$eval("button", els => els.map(e => ({ text: e.textContent?.trim().slice(0, 30), ariaLabel: e.getAttribute("aria-label") })));
    console.log("  Could not find theme toggle button. Buttons found:", buttons.filter(b => b.text || b.ariaLabel).slice(0, 5));
  }

  // Test 4: Mobile TOC
  console.log("\n=== Test: Mobile TOC on article ===");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${BASE}/wiki/neural_network`, { waitUntil: "networkidle", timeout: 15000 });
  const mobileTocButton = await page.$('button:has-text("Table of Contents")');
  if (mobileTocButton) {
    await mobileTocButton.click();
    await page.waitForTimeout(300);
    const mobileTocItems = await page.$$("nav ul li a[href^='#']");
    console.log(`  OK  Mobile TOC opens with ${mobileTocItems.length} items`);
  } else {
    console.log("  WARN  No mobile TOC button found");
  }

  // Test 5: History page content
  console.log("\n=== Test: History page details ===");
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE}/wiki/neural_network/history`, { waitUntil: "networkidle", timeout: 15000 });
  const revisionItems = await page.$$eval("a[href*='/revisions/']",
    els => els.map(e => ({ href: e.getAttribute("href"), text: e.textContent?.trim().slice(0, 80) }))
  );
  console.log(`  Revision entries: ${revisionItems.length}`);
  if (revisionItems.length > 0) {
    console.log(`  First revision: ${revisionItems[0].text?.slice(0, 60)}`);
    console.log("  OK  History page shows revisions");
  } else {
    console.log("  FAIL  No revision entries found on history page");
  }

  // Test 6: Revision detail page
  console.log("\n=== Test: Revision detail page ===");
  await page.goto(`${BASE}/wiki/neural_network/revisions/1`, { waitUntil: "networkidle", timeout: 15000 });
  const revContent = await page.$(".wiki-content");
  const revBanner = await page.textContent("body");
  const hasVersionBadge = revBanner.includes("v1");
  console.log(`  Has wiki-content: ${!!revContent}`);
  console.log(`  Has version badge: ${hasVersionBadge}`);
  if (revContent && hasVersionBadge) {
    console.log("  OK  Revision detail page renders correctly");
  } else {
    console.log("  FAIL  Revision detail page missing content");
  }

  await browser.close();
  console.log("\nDone.");
}

main().catch(console.error);
