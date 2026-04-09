#!/usr/bin/env node

/**
 * Looks at every wikilink whose target slug ends in "_article", checks whether
 * stripping the suffix yields a real page, and reports the breakdown.
 *
 * Usage: node --env-file=.env.local scripts/analyze-article-suffix-links.mjs
 */

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const allSlugsRows = await sql`SELECT slug FROM pages`;
const validSlugs = new Set(allSlugsRows.map((r) => r.slug));

const pages = await sql`SELECT slug, title, content FROM pages WHERE content IS NOT NULL`;

const linkRegex = /\[([^\]]+)\]\(\/wiki\/([^)#?\s]+)\)/g;

// brokenTarget -> { count, fixable: boolean, fixTarget: string|null, sourcePages: Set }
const targets = new Map();

for (const page of pages) {
  let m;
  linkRegex.lastIndex = 0;
  while ((m = linkRegex.exec(page.content)) !== null) {
    const target = decodeURIComponent(m[2]);
    if (!target.endsWith("_article")) continue;
    if (validSlugs.has(target)) continue; // valid as-is, skip
    const stripped = target.replace(/_article$/, "");
    if (!targets.has(target)) {
      targets.set(target, {
        count: 0,
        fixable: validSlugs.has(stripped),
        fixTarget: validSlugs.has(stripped) ? stripped : null,
        sourcePages: new Set(),
      });
    }
    const t = targets.get(target);
    t.count++;
    t.sourcePages.add(page.slug);
  }
}

const sorted = [...targets.entries()].sort((a, b) => b[1].count - a[1].count);

console.log(`\n=== Broken "_article" wikilink targets (${targets.size} unique) ===\n`);
console.log("count  pages  fixable  target -> fix");
console.log("-----  -----  -------  -------------");

let fixableTargets = 0;
let unfixableTargets = 0;
let fixableLinkCount = 0;
let unfixableLinkCount = 0;
const allAffectedPages = new Set();

for (const [target, info] of sorted) {
  const mark = info.fixable ? "yes" : "NO ";
  const fix = info.fixable ? `/wiki/${info.fixTarget}` : "(no match)";
  console.log(
    `${info.count.toString().padStart(5)}  ${info.sourcePages.size
      .toString()
      .padStart(5)}  ${mark.padStart(7)}  /wiki/${target} -> ${fix}`
  );
  if (info.fixable) {
    fixableTargets++;
    fixableLinkCount += info.count;
  } else {
    unfixableTargets++;
    unfixableLinkCount += info.count;
  }
  for (const p of info.sourcePages) allAffectedPages.add(p);
}

console.log(`\n--- Summary ---`);
console.log(`Unique targets:           ${targets.size}`);
console.log(`  Fixable (real page):    ${fixableTargets}`);
console.log(`  Unfixable (no match):   ${unfixableTargets}`);
console.log(`Total link occurrences:   ${fixableLinkCount + unfixableLinkCount}`);
console.log(`  Fixable occurrences:    ${fixableLinkCount}`);
console.log(`  Unfixable occurrences:  ${unfixableLinkCount}`);
console.log(`Pages needing edits:      ${allAffectedPages.size}`);
