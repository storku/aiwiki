#!/usr/bin/env node

/**
 * Automated site test using Playwright.
 * Visits every major page type, checks for errors, broken links, console errors, etc.
 *
 * Usage: node scripts/test-site.mjs [base-url]
 * Default: http://localhost:3001
 */

import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3001";
const TIMEOUT = 15000;

const results = {
  pages: [],
  errors: [],
  consoleErrors: [],
  brokenLinks: [],
  passed: 0,
  failed: 0,
};

async function testPage(page, url, label) {
  const consoleErrors = [];
  const pageErrors = [];

  const onConsole = (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  };
  const onPageError = (err) => {
    pageErrors.push(err.message);
  };

  page.on("console", onConsole);
  page.on("pageerror", onPageError);

  try {
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
    const status = response?.status() || 0;

    // Check for visible error text
    const bodyText = await page.textContent("body");
    const hasErrorText =
      bodyText.includes("Application error") ||
      bodyText.includes("Internal Server Error") ||
      bodyText.includes("Unhandled Runtime Error");

    // Check if main content rendered
    const hasContent = await page.$("main, article, .wiki-content, h1, [class*=card]");

    const ok = status === 200 && !hasErrorText && pageErrors.length === 0;

    const result = {
      url,
      label,
      status,
      ok,
      hasContent: !!hasContent,
      consoleErrors: [...consoleErrors],
      pageErrors: [...pageErrors],
      hasErrorText,
    };

    results.pages.push(result);

    if (ok) {
      results.passed++;
      console.log(`  OK  ${label} (${status})`);
    } else {
      results.failed++;
      console.log(`  FAIL ${label} (${status})${hasErrorText ? " [error text on page]" : ""}${pageErrors.length ? ` [${pageErrors.length} JS errors]` : ""}`);
      if (pageErrors.length) {
        for (const e of pageErrors) {
          console.log(`       JS: ${e.slice(0, 200)}`);
          results.errors.push({ url, label, error: e });
        }
      }
    }

    if (consoleErrors.length) {
      for (const e of consoleErrors) {
        if (!e.startsWith("Failed to load resource")) {
          results.consoleErrors.push({ url, label, error: e });
        }
      }
    }

    return result;
  } catch (err) {
    results.failed++;
    console.log(`  FAIL ${label} (timeout/error: ${err.message.slice(0, 100)})`);
    results.errors.push({ url, label, error: err.message });
    results.pages.push({ url, label, status: 0, ok: false, error: err.message });
    return null;
  } finally {
    page.removeListener("console", onConsole);
    page.removeListener("pageerror", onPageError);
  }
}

async function findLinksOnPage(page, selector = "a[href]") {
  return page.$$eval(selector, (anchors) =>
    anchors
      .map((a) => ({ href: a.getAttribute("href"), text: a.textContent?.trim().slice(0, 50) }))
      .filter((l) => l.href && !l.href.startsWith("http") && !l.href.startsWith("#") && !l.href.startsWith("mailto:"))
  );
}

async function main() {
  console.log(`Testing site at ${BASE}\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: "AIWiki-Test-Bot/1.0",
  });
  const page = await context.newPage();

  // ── 1. Core pages ────────────────────────────────────────────────

  console.log("=== Core Pages ===");
  await testPage(page, `${BASE}/`, "Homepage");
  await testPage(page, `${BASE}/wiki`, "All Pages");
  await testPage(page, `${BASE}/categories`, "Categories");
  await testPage(page, `${BASE}/search`, "Search");

  // ── 2. Sample wiki articles ──────────────────────────────────────

  console.log("\n=== Wiki Articles ===");
  const sampleSlugs = [
    "neural_network",
    "transformer",
    "chatgpt",
    "large_language_model",
    "artificial_intelligence",
    "machine_learning",
    "deep_learning",
    "gpt-4",
    "reinforcement_learning",
    "natural_language_processing",
  ];

  for (const slug of sampleSlugs) {
    await testPage(page, `${BASE}/wiki/${slug}`, `Article: ${slug}`);
  }

  // ── 3. History & Revisions ───────────────────────────────────────

  console.log("\n=== History & Revisions ===");
  for (const slug of sampleSlugs.slice(0, 3)) {
    await testPage(page, `${BASE}/wiki/${slug}/history`, `History: ${slug}`);
    await testPage(page, `${BASE}/wiki/${slug}/revisions/1`, `Revision v1: ${slug}`);
  }

  // ── 4. Category pages ───────────────────────────────────────────

  console.log("\n=== Category Pages ===");
  // Visit categories page, grab some category links
  await page.goto(`${BASE}/categories`, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
  const catLinks = await findLinksOnPage(page, 'a[href^="/categories/"]');
  const catSample = catLinks.slice(0, 5);
  for (const link of catSample) {
    await testPage(page, `${BASE}${link.href}`, `Category: ${link.text}`);
  }

  // ── 5. Search functionality ──────────────────────────────────────

  console.log("\n=== Search API ===");
  // Test search API
  try {
    const searchResponse = await page.goto(`${BASE}/api/search?q=neural+network`, {
      waitUntil: "domcontentloaded",
      timeout: TIMEOUT,
    });
    const searchStatus = searchResponse?.status() || 0;
    const searchBody = await page.textContent("body");
    let searchResults = [];
    try { searchResults = JSON.parse(searchBody); } catch {}
    const searchOk = searchStatus === 200 && Array.isArray(searchResults);
    console.log(`  ${searchOk ? "OK" : "FAIL"}  Search API: /api/search?q=neural+network (${searchStatus}, ${searchResults.length} results)`);
    if (!searchOk) results.failed++;
    else results.passed++;
  } catch (err) {
    console.log(`  FAIL Search API: ${err.message.slice(0, 100)}`);
    results.failed++;
  }

  // Test search index API
  try {
    const indexResponse = await page.goto(`${BASE}/api/search-index`, {
      waitUntil: "domcontentloaded",
      timeout: TIMEOUT,
    });
    const indexStatus = indexResponse?.status() || 0;
    const indexBody = await page.textContent("body");
    let indexData = [];
    try { indexData = JSON.parse(indexBody); } catch {}
    const indexOk = indexStatus === 200 && Array.isArray(indexData) && indexData.length > 100;
    console.log(`  ${indexOk ? "OK" : "FAIL"}  Search Index API: /api/search-index (${indexStatus}, ${indexData.length} items)`);
    if (!indexOk) results.failed++;
    else results.passed++;
  } catch (err) {
    console.log(`  FAIL Search Index API: ${err.message.slice(0, 100)}`);
    results.failed++;
  }

  // ── 6. Preview API ──────────────────────────────────────────────

  console.log("\n=== Preview API ===");
  try {
    const previewResponse = await page.goto(`${BASE}/api/preview/neural_network`, {
      waitUntil: "domcontentloaded",
      timeout: TIMEOUT,
    });
    const previewStatus = previewResponse?.status() || 0;
    const previewBody = await page.textContent("body");
    let previewData = {};
    try { previewData = JSON.parse(previewBody); } catch {}
    const previewOk = previewStatus === 200 && previewData.title;
    console.log(`  ${previewOk ? "OK" : "FAIL"}  Preview API: /api/preview/neural_network (${previewStatus})`);
    if (!previewOk) results.failed++;
    else results.passed++;
  } catch (err) {
    console.log(`  FAIL Preview API: ${err.message.slice(0, 100)}`);
    results.failed++;
  }

  // ── 7. 404 page ─────────────────────────────────────────────────

  console.log("\n=== Error Handling ===");
  {
    const response = await page.goto(`${BASE}/wiki/this_page_definitely_does_not_exist_12345`, {
      waitUntil: "domcontentloaded",
      timeout: TIMEOUT,
    });
    const status = response?.status() || 0;
    const ok = status === 404;
    console.log(`  ${ok ? "OK" : "FAIL"}  404 for missing page (${status})`);
    if (ok) results.passed++;
    else results.failed++;
  }

  // ── 8. Check internal links from homepage ────────────────────────

  console.log("\n=== Internal Link Check (from homepage) ===");
  await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
  await page.waitForSelector("main", { timeout: TIMEOUT });
  const homeLinks = await findLinksOnPage(page);
  const uniqueLinks = [...new Set(homeLinks.map((l) => l.href))].slice(0, 20);
  let brokenCount = 0;
  for (const href of uniqueLinks) {
    try {
      const resp = await page.goto(`${BASE}${href}`, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
      const s = resp?.status() || 0;
      if (s >= 400) {
        brokenCount++;
        results.brokenLinks.push({ from: "/", to: href, status: s });
        console.log(`  BROKEN  ${href} (${s})`);
      }
    } catch {
      // timeout, skip
    }
  }
  if (brokenCount === 0) {
    console.log(`  OK  All ${uniqueLinks.length} links from homepage are valid`);
  }

  // ── 9. Interactive test: search page ─────────────────────────────

  console.log("\n=== Interactive: Search Page ===");
  await page.goto(`${BASE}/search`, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
  await page.waitForSelector("main", { timeout: TIMEOUT });
  // Wait for search index to load
  await page.waitForTimeout(2000);
  // Type in search box
  const searchInput = await page.$('input[type="text"]');
  if (searchInput) {
    await searchInput.fill("transformer");
    await page.waitForTimeout(1500);
    const resultLinks = await page.$$('a[href^="/wiki/"]');
    const resultCount = resultLinks.length;
    const ok = resultCount > 0;
    console.log(`  ${ok ? "OK" : "FAIL"}  Search for "transformer" returned ${resultCount} results`);
    if (ok) results.passed++;
    else results.failed++;
  } else {
    console.log("  FAIL  Could not find search input");
    results.failed++;
  }

  // ── Summary ──────────────────────────────────────────────────────

  await browser.close();

  console.log("\n" + "=".repeat(50));
  console.log(`RESULTS: ${results.passed} passed, ${results.failed} failed`);

  if (results.errors.length) {
    console.log(`\n--- JS Errors (${results.errors.length}) ---`);
    for (const e of results.errors) {
      console.log(`  ${e.label}: ${e.error.slice(0, 200)}`);
    }
  }

  if (results.brokenLinks.length) {
    console.log(`\n--- Broken Links (${results.brokenLinks.length}) ---`);
    for (const l of results.brokenLinks) {
      console.log(`  ${l.from} -> ${l.to} (${l.status})`);
    }
  }

  if (results.consoleErrors.length) {
    console.log(`\n--- Notable Console Errors (${results.consoleErrors.length}) ---`);
    for (const e of results.consoleErrors.slice(0, 10)) {
      console.log(`  ${e.label}: ${e.error.slice(0, 200)}`);
    }
  }

  process.exit(results.failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
