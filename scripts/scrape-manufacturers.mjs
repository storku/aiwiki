#!/usr/bin/env node

/**
 * Scrapes all manufacturer detail pages from humanoidspecs.com
 * using JSON-LD structured data + HTML parsing, and combines with robot data.
 *
 * Usage: node scripts/scrape-manufacturers.mjs
 */

import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

const HUMANOIDSPECS_DB =
  "postgresql://neondb_owner:npg_Les9XAaJ1CpQ@ep-young-pine-ah3d2i5k-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require";

const OUTPUT_FILE = path.resolve("tmp/manufacturer-data.json");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseManufacturerPage(html) {
  const result = {
    founded: null,
    headquarters: null,
    employees: null,
    funding: null,
    industries: [],
    description: null,
    website: null,
  };

  // 1. Extract from JSON-LD (most reliable)
  const ldJsonRegex = /application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"Organization"[^<]+)/g;
  let ldMatch;
  while ((ldMatch = ldJsonRegex.exec(html)) !== null) {
    try {
      const jsonStr = ldMatch[1].replace(/\n/g, "");
      const ld = JSON.parse(jsonStr);
      if (ld.name === "HumanoidSpecs") continue; // Skip the site-level org

      if (ld.foundingDate) result.founded = parseInt(ld.foundingDate);
      if (ld.description) result.description = ld.description;
      if (ld.url) result.website = ld.url;
      if (ld.address) {
        if (typeof ld.address === "string") {
          result.headquarters = ld.address;
        } else if (ld.address.addressLocality) {
          result.headquarters = ld.address.addressLocality;
          if (ld.address.addressCountry && !ld.address.addressLocality.includes(ld.address.addressCountry)) {
            result.headquarters += ", " + ld.address.addressCountry;
          }
        }
      }
      if (ld.numberOfEmployees) {
        result.employees =
          typeof ld.numberOfEmployees === "string"
            ? ld.numberOfEmployees
            : ld.numberOfEmployees.value || null;
      }
    } catch (e) {
      // JSON parse failed, continue
    }
  }

  // 2. Extract from HTML for fields not found in JSON-LD
  // Funding (not in JSON-LD)
  const fundingMatch = html.match(
    /uppercase tracking-wide">Funding<\/div><div class="text-sm text-white font-medium">([^<]+)/
  );
  if (fundingMatch) result.funding = fundingMatch[1].trim();

  // Headquarters fallback from HTML
  if (!result.headquarters) {
    const hqMatch = html.match(
      /uppercase tracking-wide">Headquarters<\/div><div class="text-sm text-white font-medium">([^<]+)/
    );
    if (hqMatch) result.headquarters = hqMatch[1].replace(/\n/g, ", ").trim();
  }

  // Founded fallback from HTML
  if (!result.founded) {
    const foundedMatch = html.match(
      /uppercase tracking-wide">Founded<\/div><div class="text-sm text-white font-medium">(\d{4})/
    );
    if (foundedMatch) result.founded = parseInt(foundedMatch[1]);
  }

  // Employees fallback from HTML
  if (!result.employees) {
    const empMatch = html.match(
      /uppercase tracking-wide">Employees<\/div><div class="text-sm text-white font-medium">([^<]+)/
    );
    if (empMatch) result.employees = empMatch[1].replace(/\n/g, "").trim();
  }

  // Industries from HTML tags
  const tagRegex =
    /bg-blue-500\/10 text-blue-400 rounded-full text-sm font-medium[^>]*>([^<]+)/g;
  let tagMatch;
  while ((tagMatch = tagRegex.exec(html)) !== null) {
    result.industries.push(tagMatch[1].trim());
  }

  // Website fallback from "Visit Website" link
  if (!result.website) {
    const webMatch = html.match(
      /href="(https?:\/\/[^"]+)"[^>]*>[^<]*Visit Website/
    );
    if (webMatch) result.website = webMatch[1];
  }

  return result;
}

async function fetchManufacturerPage(slug) {
  const url = `https://humanoidspecs.com/manufacturers/${slug}`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Accept: "text/html",
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function main() {
  console.log("Connecting to humanoidspecs database...");
  const sql = neon(HUMANOIDSPECS_DB);

  // Get all robots
  const robots = await sql`SELECT * FROM robots ORDER BY manufacturer, name`;

  // Build manufacturer map from DB
  const mfrMap = new Map();
  for (const r of robots) {
    const normName = r.manufacturer.toLowerCase().trim();
    if (!mfrMap.has(normName)) {
      mfrMap.set(normName, {
        name: r.manufacturer,
        country: r.country_of_origin,
        robots: [],
        websites: new Set(),
      });
    }
    const mfr = mfrMap.get(normName);
    mfr.robots.push({
      name: r.name,
      slug: r.slug,
      status: r.status,
      release_year: r.release_year,
      price_usd: r.price_usd,
      height_cm: r.height_cm,
      weight_kg: r.weight_kg,
      degrees_of_freedom: r.degrees_of_freedom,
      description: r.description,
      image_url: r.image_url,
    });
    if (r.website_url) mfr.websites.add(r.website_url);
    if (r.country_of_origin && !mfr.country) mfr.country = r.country_of_origin;
  }

  // Get manufacturer slugs from the index page
  console.log("Fetching manufacturers index page...");
  const indexHtml = await fetchManufacturerPage("");
  const mfrSlugs = new Set();
  if (indexHtml) {
    const linkRegex = /\/manufacturers\/([a-z0-9-]+)/g;
    let match;
    while ((match = linkRegex.exec(indexHtml)) !== null) {
      mfrSlugs.add(match[1]);
    }
  }
  console.log(`Found ${mfrSlugs.size} manufacturer slugs`);

  // Fetch each manufacturer page
  const allSlugs = Array.from(mfrSlugs);
  console.log(`\nFetching ${allSlugs.length} manufacturer detail pages...`);

  const BATCH_SIZE = 5;
  const scrapedData = new Map();

  for (let i = 0; i < allSlugs.length; i += BATCH_SIZE) {
    const batch = allSlugs.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(allSlugs.length / BATCH_SIZE);
    process.stdout.write(`  Batch ${batchNum}/${totalBatches}...`);

    const results = await Promise.allSettled(
      batch.map(async (slug) => {
        const html = await fetchManufacturerPage(slug);
        if (!html) return { slug, data: null };
        const data = parseManufacturerPage(html);
        return { slug, data };
      })
    );

    let scraped = 0;
    for (const result of results) {
      if (result.status === "fulfilled" && result.value.data) {
        scrapedData.set(result.value.slug, result.value.data);
        scraped++;
      }
    }
    console.log(` ${scraped}/${batch.length} scraped`);

    if (i + BATCH_SIZE < allSlugs.length) await sleep(300);
  }

  console.log(`\nTotal scraped: ${scrapedData.size}`);
  const withFounded = Array.from(scrapedData.values()).filter((d) => d.founded).length;
  const withDesc = Array.from(scrapedData.values()).filter((d) => d.description).length;
  const withFunding = Array.from(scrapedData.values()).filter((d) => d.funding).length;
  console.log(`With founded year: ${withFounded}`);
  console.log(`With description: ${withDesc}`);
  console.log(`With funding: ${withFunding}`);

  // Merge rules for duplicate manufacturers
  const mergeRules = [
    { primary: "1x technologies", aliases: ["1x"] },
    { primary: "agibot", aliases: [] },
    { primary: "deep robotics", aliases: [] },
    { primary: "engineai", aliases: ["engineai robotics"] },
    { primary: "kepler robotics", aliases: [] },
    { primary: "kinisi robotics", aliases: [] },
    { primary: "lanxin robotics", aliases: [] },
    { primary: "leju robotics", aliases: ["leju robot"] },
    { primary: "neura robotics", aliases: [] },
    { primary: "paxini", aliases: ["paxini technology"] },
    { primary: "pl universe", aliases: ["pl-universe"] },
    { primary: "pudu robotics", aliases: ["pudu technology"] },
    { primary: "siasun", aliases: ["siasun robot & automation"] },
    { primary: "lg electronics", aliases: ["lg electronics & kist"] },
  ];

  // Combine scraped data with DB data
  const combined = new Map();

  for (const [normName, mfr] of mfrMap.entries()) {
    let primaryKey = normName;
    for (const rule of mergeRules) {
      if (normName === rule.primary || rule.aliases.includes(normName)) {
        primaryKey = rule.primary;
        break;
      }
    }

    // Find matching scraped data
    let scraped = null;
    const slugVariants = [
      normName.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-"),
      normName.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      primaryKey.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-"),
    ];
    for (const slug of slugVariants) {
      if (scrapedData.has(slug)) {
        scraped = scrapedData.get(slug);
        break;
      }
    }
    // Fuzzy match
    if (!scraped) {
      for (const [slug, data] of scrapedData.entries()) {
        const slugNorm = slug.replace(/-/g, " ");
        if (slugNorm.includes(primaryKey) || primaryKey.includes(slugNorm)) {
          scraped = data;
          break;
        }
      }
    }

    if (combined.has(primaryKey)) {
      const existing = combined.get(primaryKey);
      existing.robots.push(...mfr.robots);
      mfr.websites.forEach((w) => existing.websites.add(w));
      if (!existing.country && mfr.country) existing.country = mfr.country;
      if (scraped && scraped.founded && !existing.scraped.founded) {
        existing.scraped = { ...existing.scraped, ...scraped };
      }
    } else {
      combined.set(primaryKey, {
        name: mfr.name,
        country: mfr.country,
        robots: [...mfr.robots],
        websites: new Set(mfr.websites),
        scraped: scraped || {},
      });
    }
  }

  // Convert to array and finalize
  const result = Array.from(combined.values())
    .map((m) => ({
      ...m,
      websites: Array.from(m.websites),
      robotCount: m.robots.length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Deduplicate robots within each manufacturer
  for (const mfr of result) {
    const seen = new Set();
    mfr.robots = mfr.robots.filter((r) => {
      if (seen.has(r.name)) return false;
      seen.add(r.name);
      return true;
    });
    mfr.robotCount = mfr.robots.length;
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`\nSaved ${result.length} manufacturers to ${OUTPUT_FILE}`);

  // Print stats
  const finalWithFounded = result.filter((m) => m.scraped && m.scraped.founded).length;
  const finalWithDesc = result.filter((m) => m.scraped && m.scraped.description).length;
  const multiRobot = result.filter((m) => m.robotCount > 1).length;
  console.log(`Final: ${result.length} manufacturers`);
  console.log(`  With founding year: ${finalWithFounded}`);
  console.log(`  With description: ${finalWithDesc}`);
  console.log(`  With multiple robots: ${multiRobot}`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
