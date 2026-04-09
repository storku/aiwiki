#!/usr/bin/env node

/**
 * Batch-fixes broken wikilinks of the form [text](/wiki/<slug>_article) by
 * mapping each broken target to a real or future canonical slug.
 *
 * Mapping types:
 *   - SIMPLE_STRIP:    `<x>_article` -> `<x>` if `<x>` exists in pages
 *   - ALIAS_FIXES:     hard-coded `<x>_article` -> `<other_slug>` for known aliases
 *   - CONTEXT_FIXES:   `<x>_article` -> different slug depending on the link's anchor text
 *
 * For each affected page:
 *   1. Loads current content and existing categories from the DB
 *   2. Replaces every broken [text](/wiki/<x>_article) link with the corrected target
 *   3. Writes a temp JSON for the page and shells out to scripts/upsert-article.mjs
 *      so the canonical revision/version/revalidation flow runs unchanged
 *
 * Usage:
 *   node --env-file=.env.local scripts/fix-article-suffix-wikilinks.mjs            # dry run
 *   node --env-file=.env.local scripts/fix-article-suffix-wikilinks.mjs --apply    # actually upsert
 */

import { neon } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const APPLY = process.argv.includes("--apply");

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

// 1. Load valid slugs to verify mechanical strip targets
const allSlugRows = await sql`SELECT slug FROM pages`;
const validSlugs = new Set(allSlugRows.map((r) => r.slug));
console.log(`Loaded ${validSlugs.size} valid slugs\n`);

// 2. Hard-coded alias mapping (broken target -> canonical real slug)
const ALIAS_FIXES = new Map([
  ["vae_article", "variational_autoencoder"],
  ["bias_variance_article", "bias_variance_tradeoff"],
  ["ner_article", "named_entity_recognition"],
  ["time_series_article", "time_series_analysis"],
  ["vector_db_article", "vector_database"],
  ["bleu_article", "bleu_bilingual_evaluation_understudy"],
  ["rouge_article", "rouge_score"],
  ["coco_article", "coco_dataset"],
  ["dalle_article", "dall_e"],
  ["qa_article", "question_answering"],
  ["cross_validation_article", "cross-validation"],
  ["semi_supervised_article", "semi-supervised_learning"],
  ["llama3_article", "llama_3"],
  ["bpe_article", "byte_pair_encoding"],
  ["dino_article", "dino_model"],
  ["chinchilla_article", "chinchilla_scaling"],
  ["vanishing_gradient_article", "vanishing_gradient_problem"],
  ["kaplan_scaling_article", "scaling_laws_paper"],
]);

// 3. Context-aware fixer: target depends on the link's anchor text
function contextFix(target, anchorText) {
  const a = anchorText.toLowerCase();
  if (target === "gamma_article") return "discount_factor";
  if (target === "seq2seq_article") return "seq2seq";
  if (target === "sampling_article") {
    if (a.includes("rejection")) return "rejection_sampling";
    if (a.includes("bias")) return "sampling_bias";
    return null;
  }
  if (target === "dim_reduction_article") {
    if (a.includes("singular")) return "singular_value_decomposition";
    if (a.includes("principal")) return "principal_component_analysis";
    if (a.includes("dimensionality") || a.includes("dim")) return "dimensionality_reduction";
    return null;
  }
  return null;
}

// 4. Resolve a (target, anchor) pair to its fix slug
function resolveFix(target, anchorText) {
  if (ALIAS_FIXES.has(target)) return ALIAS_FIXES.get(target);
  const ctx = contextFix(target, anchorText);
  if (ctx) return ctx;
  // Fallback: mechanical strip if the stripped slug exists
  if (target.endsWith("_article")) {
    const stripped = target.replace(/_article$/, "");
    if (validSlugs.has(stripped)) return stripped;
  }
  return null;
}

// 5. Pull every page that contains an "_article)" link
const pages =
  await sql`SELECT slug, title, content FROM pages WHERE content LIKE '%_article)%'`;
console.log(`Pages containing "_article)" markdown links: ${pages.length}\n`);

const linkRegex = /\[([^\]]+)\]\(\/wiki\/([a-zA-Z0-9_\-]+_article)\)/g;

const results = [];

for (const page of pages) {
  const replacements = []; // {from, to, anchor}
  const newContent = page.content.replace(linkRegex, (full, anchor, target) => {
    const fix = resolveFix(target, anchor);
    if (!fix) {
      replacements.push({ from: target, to: null, anchor, skipped: true });
      return full; // leave broken
    }
    replacements.push({ from: target, to: fix, anchor });
    return `[${anchor}](/wiki/${fix})`;
  });

  const fixed = replacements.filter((r) => !r.skipped);
  if (fixed.length === 0) continue;

  results.push({
    slug: page.slug,
    title: page.title,
    oldContent: page.content,
    newContent,
    replacements,
  });
}

console.log(`=== Pages with at least one fix ===`);
for (const r of results) {
  const fixed = r.replacements.filter((x) => !x.skipped);
  const skipped = r.replacements.filter((x) => x.skipped);
  console.log(
    `\n  ${r.slug}  (${fixed.length} fixed${skipped.length ? `, ${skipped.length} skipped` : ""})`
  );
  for (const rep of fixed) {
    console.log(`    /wiki/${rep.from}  ->  /wiki/${rep.to}   [${rep.anchor}]`);
  }
  for (const rep of skipped) {
    console.log(`    /wiki/${rep.from}  ->  SKIPPED   [${rep.anchor}]`);
  }
}

const totalFixed = results.reduce(
  (n, r) => n + r.replacements.filter((x) => !x.skipped).length,
  0
);
const totalSkipped = results.reduce(
  (n, r) => n + r.replacements.filter((x) => x.skipped).length,
  0
);
console.log(`\n--- Summary ---`);
console.log(`Pages affected: ${results.length}`);
console.log(`Link fixes:     ${totalFixed}`);
console.log(`Links skipped:  ${totalSkipped}`);

if (!APPLY) {
  console.log(`\n(dry run — pass --apply to upsert)`);
  process.exit(0);
}

// 6. Apply: write per-page temp JSON, shell out to upsert-article.mjs
console.log(`\nApplying ${results.length} page updates via upsert-article.mjs...\n`);

const tmpDir = path.resolve("tmp/wikilink-fixes");
fs.mkdirSync(tmpDir, { recursive: true });

let okCount = 0;
let failCount = 0;

for (const r of results) {
  // Pull existing categories so upsert-article.mjs preserves them
  const catRows = await sql`
    SELECT c.name FROM categories c
    JOIN page_categories pc ON pc.category_id = c.id
    JOIN pages p ON p.id = pc.page_id
    WHERE p.slug = ${r.slug}
  `;
  const categories = catRows.map((c) => c.name);

  const json = {
    slug: r.slug,
    title: r.title,
    content: r.newContent,
    categories,
  };
  const tmpFile = path.join(tmpDir, `${r.slug}.json`);
  fs.writeFileSync(tmpFile, JSON.stringify(json, null, 2));

  const proc = spawnSync(
    "node",
    ["--env-file=.env.local", "scripts/upsert-article.mjs", tmpFile],
    { stdio: ["ignore", "pipe", "pipe"], encoding: "utf-8" }
  );
  if (proc.status === 0) {
    okCount++;
    const last = (proc.stdout || "").trim().split("\n").slice(-2).join(" | ");
    console.log(`  [ok]   ${r.slug}   ${last}`);
  } else {
    failCount++;
    console.error(`  [FAIL] ${r.slug}`);
    console.error(proc.stdout);
    console.error(proc.stderr);
  }
}

console.log(`\nDone. ${okCount} succeeded, ${failCount} failed.`);
