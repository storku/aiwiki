#!/usr/bin/env node

/**
 * Scans the pages table for wikilinks with slugs that don't exist as actual pages.
 * Reports the offending links grouped by source article.
 *
 * Usage: node --env-file=.env.local scripts/find-broken-wikilinks.mjs
 */

import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.error(
    "DATABASE_URL not set. Use: node --env-file=.env.local scripts/find-broken-wikilinks.mjs"
  );
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

// 1. Pull every existing slug so we can resolve which wikilink targets are real
const allSlugsRows = await sql`SELECT slug FROM pages`;
const validSlugs = new Set(allSlugsRows.map((r) => r.slug));
console.log(`Loaded ${validSlugs.size} valid slugs from pages table\n`);

// 2. Pull every page's content (just slug, title, and markdown)
const pages = await sql`SELECT slug, title, content FROM pages WHERE content IS NOT NULL`;
console.log(`Scanning ${pages.length} pages for broken wikilinks...\n`);

// 3. For each page, extract markdown links of the form [text](/wiki/slug)
//    and check whether the slug exists in validSlugs.
const linkRegex = /\[([^\]]+)\]\(\/wiki\/([^)#?\s]+)\)/g;

const offenders = [];

for (const page of pages) {
  const broken = new Map(); // slug -> Set of link texts
  let m;
  linkRegex.lastIndex = 0;
  while ((m = linkRegex.exec(page.content)) !== null) {
    const text = m[1];
    const target = decodeURIComponent(m[2]);
    if (!validSlugs.has(target)) {
      if (!broken.has(target)) broken.set(target, new Set());
      broken.get(target).add(text);
    }
  }
  if (broken.size > 0) {
    offenders.push({ slug: page.slug, title: page.title, broken });
  }
}

// 4. Report

// Sort by number of broken links descending
offenders.sort((a, b) => b.broken.size - a.broken.size);

console.log(`Found ${offenders.length} pages with broken wikilinks.\n`);

// Tally how often each broken target appears across all pages
const brokenTargetCounts = new Map();
for (const o of offenders) {
  for (const target of o.broken.keys()) {
    brokenTargetCounts.set(target, (brokenTargetCounts.get(target) || 0) + 1);
  }
}

// Specifically: how many pages link to slugs ending in `_article`?
const articleSuffixOffenders = offenders.filter((o) =>
  [...o.broken.keys()].some((s) => s.endsWith("_article"))
);
console.log(
  `Pages with at least one link to a slug ending in "_article": ${articleSuffixOffenders.length}\n`
);

console.log("=== Pages linking to slugs ending in _article ===");
for (const o of articleSuffixOffenders) {
  const articleSlugs = [...o.broken.entries()].filter(([s]) =>
    s.endsWith("_article")
  );
  console.log(`\n  ${o.slug}  (${o.title})`);
  for (const [target, texts] of articleSlugs) {
    console.log(`    - /wiki/${target}   (linked as: ${[...texts].join(", ")})`);
  }
}

console.log("\n=== Top 30 most common broken targets across all pages ===");
const sortedTargets = [...brokenTargetCounts.entries()].sort(
  (a, b) => b[1] - a[1]
);
for (const [target, count] of sortedTargets.slice(0, 30)) {
  console.log(`  ${count.toString().padStart(4)}  /wiki/${target}`);
}

console.log(
  `\nTotal unique broken target slugs: ${brokenTargetCounts.size}`
);
console.log(`Total pages with at least one broken link: ${offenders.length}`);
