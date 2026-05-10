#!/usr/bin/env node

/**
 * Scan every wiki page for internal links of the form [Text](/wiki/<slug>)
 * (and bare /wiki/<slug> hrefs in raw HTML) and report the ones whose target
 * slug does not exist in the pages table.
 *
 * Mirrors src/lib/content.ts resolvePageBySlug() fallback so we don't flag
 * slugs that the runtime would silently rewrite (hyphen/underscore swap, and
 * underscore-to-dot for dotted slugs).
 *
 * For each distinct broken slug we suggest a fix:
 *   1. Closest existing slug (token overlap + Levenshtein on the slug string)
 *   2. Closest existing title (token overlap on the human-readable title)
 *   3. Otherwise: "no close match — create article or unlink"
 *
 * Usage:
 *   node --env-file=.env.local scripts/find-broken-links.mjs
 *   node --env-file=.env.local scripts/find-broken-links.mjs --json /tmp/broken.json
 */

import fs from "fs";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const jsonFlagIdx = process.argv.indexOf("--json");
const JSON_OUT = jsonFlagIdx > -1 ? process.argv[jsonFlagIdx + 1] : null;

const SLUG_ALIASES = {
  aws_bedrock: "amazon_bedrock",
  cross_validation: "cross-validation",
  dall_e_3: "dall-e",
  gpt_4: "gpt-4",
  humanitys_last_exam: "humanity_s_last_exam",
  large_language_models: "large_language_model",
  openai_o1: "o1",
  quadruped_robots: "quadruped_robot",
  vision_language_action_model: "vision_language_model",
};

function decodeSlug(raw) {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

// Replicates resolvePageBySlug() fallback in src/lib/content.ts.
function buildResolutionCandidates(slug) {
  const out = new Set([slug]);
  if (SLUG_ALIASES[slug]) out.add(SLUG_ALIASES[slug]);
  if (slug.includes("-")) out.add(slug.replace(/-/g, "_"));
  if (slug.includes("_")) out.add(slug.replace(/_/g, "-"));
  if (slug.includes("_")) out.add(slug.replace(/_/g, "."));
  return out;
}

function tokensFromSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/[()'"`,]/g, " ")
    .split(/[\s_\-./]+/)
    .filter(Boolean);
}

function tokensFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[()'"`,]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function jaccard(a, b) {
  if (!a.length || !b.length) return 0;
  const setA = new Set(a);
  const setB = new Set(b);
  let intersect = 0;
  for (const t of setA) if (setB.has(t)) intersect++;
  const union = setA.size + setB.size - intersect;
  return union === 0 ? 0 : intersect / union;
}

function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      prev = tmp;
    }
  }
  return dp[n];
}

function suggestFix(brokenSlug, allSlugs, slugToTitle) {
  const brokenTokens = tokensFromSlug(brokenSlug);
  const brokenLower = brokenSlug.toLowerCase();

  let bestSlug = null;
  let bestScore = -Infinity;
  let bestEditDist = Infinity;

  for (const candidate of allSlugs) {
    const candTokens = tokensFromSlug(candidate);
    const overlap = jaccard(brokenTokens, candTokens);

    const title = slugToTitle.get(candidate) || "";
    const titleOverlap = jaccard(brokenTokens, tokensFromTitle(title));

    const dist = levenshtein(brokenLower, candidate.toLowerCase());
    const maxLen = Math.max(brokenLower.length, candidate.length);
    const editSim = 1 - dist / Math.max(1, maxLen);

    const score = overlap * 1.5 + titleOverlap * 1.0 + editSim * 0.6;

    if (score > bestScore || (score === bestScore && dist < bestEditDist)) {
      bestScore = score;
      bestEditDist = dist;
      bestSlug = candidate;
    }
  }

  // Confidence threshold: require either reasonable token overlap or small edit distance.
  const brokenTokenSet = new Set(brokenTokens);
  const bestTokens = tokensFromSlug(bestSlug || "");
  const sharedTokens = bestTokens.filter((t) => brokenTokenSet.has(t)).length;
  const editRatio = bestEditDist / Math.max(1, brokenLower.length);

  let confidence = "low";
  if (sharedTokens >= 2 && editRatio < 0.5) confidence = "high";
  else if (sharedTokens >= 1 && editRatio < 0.4) confidence = "medium";
  else if (editRatio < 0.25) confidence = "medium";

  return {
    suggestedSlug: bestSlug,
    suggestedTitle: bestSlug ? slugToTitle.get(bestSlug) || null : null,
    score: Number(bestScore.toFixed(3)),
    editDistance: bestEditDist,
    confidence,
  };
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use --env-file=.env.local");
    process.exit(1);
  }

  console.log("Loading slug index...");
  const slugRows = await sql`SELECT slug, title FROM pages`;
  const allSlugs = slugRows.map((r) => r.slug);
  const slugSet = new Set(allSlugs);
  const slugToTitle = new Map(slugRows.map((r) => [r.slug, r.title]));
  console.log(`  ${allSlugs.length} pages indexed`);

  // Extract every wiki link target from a chunk of text/markdown/html.
  // Markdown form: [Text](/wiki/<slug>) — destination per CommonMark allows
  // balanced parens inside. We match `[text](url)` then walk url, allowing
  // nested balanced (...) so slugs like `transformer_(machine_learning)` survive.
  const htmlLink = /href=["']\/wiki\/([^"'#?]+)(?:[#?][^"']*)?["']/g;
  function* extractMdLinks(src) {
    const re = /\[([^\]]*?)\]\(\/wiki\/((?:[^()\s#?]|\([^()]*\))+)(?:#[^)]*)?(?:\?[^)]*)?\)/g;
    let m;
    while ((m = re.exec(src)) !== null) yield { anchor: m[1], slug: m[2] };
  }

  // distinct broken slug -> { count, instances: [{fromSlug, anchorText}] }
  const broken = new Map();
  // self-references (a page links to itself with a broken slug); rare but worth flagging
  let totalLinksScanned = 0;
  let pagesScanned = 0;
  let offset = 0;
  const batchSize = 25;

  console.log("Loading page content...");
  while (true) {
    const pages = await sql`
      SELECT slug, title, content, content_html
      FROM pages
      WHERE content IS NOT NULL OR content_html IS NOT NULL
      ORDER BY slug
      LIMIT ${batchSize}
      OFFSET ${offset}
    `;
    if (pages.length === 0) break;

    pagesScanned += pages.length;
    offset += pages.length;

    for (const page of pages) {
      const sources = [page.content || "", page.content_html || ""];
      for (const src of sources) {
        for (const { anchor, slug } of extractMdLinks(src)) {
          totalLinksScanned++;
          const target = decodeSlug(slug);
          if (resolves(target, slugSet)) continue;
          recordBroken(broken, target, page.slug, anchor);
        }

        let m;
        htmlLink.lastIndex = 0;
        while ((m = htmlLink.exec(src)) !== null) {
          totalLinksScanned++;
          const target = decodeSlug(m[1]);
          if (resolves(target, slugSet)) continue;
          recordBroken(broken, target, page.slug, "(html)");
        }
      }
    }
  }

  console.log(`  ${pagesScanned} pages with content`);
  console.log(`  ${totalLinksScanned} wiki link references scanned`);
  console.log(`  ${broken.size} distinct broken targets`);

  const ranked = [...broken.entries()]
    .map(([slug, info]) => ({ slug, ...info }))
    .sort((a, b) => b.count - a.count);

  console.log("Computing fix suggestions...");
  for (const item of ranked) {
    const fix = suggestFix(item.slug, allSlugs, slugToTitle);
    item.fix = fix;
  }

  // Print a concise report to stdout
  console.log("\n=== Broken internal links ===\n");
  console.log(`Total broken references: ${ranked.reduce((s, i) => s + i.count, 0)}`);
  console.log(`Distinct broken targets: ${ranked.length}\n`);

  const top = ranked.slice(0, 60);
  for (const item of top) {
    const fix = item.fix;
    const arrow =
      fix.confidence === "high"
        ? "->"
        : fix.confidence === "medium"
        ? "?"
        : "??";
    console.log(
      `[${item.count.toString().padStart(3)}] ${item.slug}\n      ${arrow} ${fix.suggestedSlug || "(none)"} (${fix.confidence}, edit=${fix.editDistance})`
    );
    if (item.instances.length) {
      const sample = item.instances.slice(0, 2).map((i) => `${i.fromSlug}:"${i.anchorText}"`).join("  |  ");
      console.log(`      seen in: ${sample}`);
    }
  }

  if (JSON_OUT) {
    fs.writeFileSync(JSON_OUT, JSON.stringify(ranked, null, 2));
    console.log(`\nFull report written to ${JSON_OUT}`);
  }
}

function resolves(target, slugSet) {
  for (const candidate of buildResolutionCandidates(target)) {
    if (slugSet.has(candidate)) return true;
  }
  return false;
}

function recordBroken(broken, target, fromSlug, anchorText) {
  if (!broken.has(target)) {
    broken.set(target, { count: 0, instances: [] });
  }
  const entry = broken.get(target);
  entry.count++;
  if (entry.instances.length < 5) {
    entry.instances.push({ fromSlug, anchorText: anchorText.slice(0, 60) });
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  process.exit(1);
});
