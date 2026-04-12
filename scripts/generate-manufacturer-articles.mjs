#!/usr/bin/env node

/**
 * Generates wiki articles for humanoid robot manufacturers.
 * Reads scraped data from tmp/manufacturer-data.json.
 *
 * Usage: node scripts/generate-manufacturer-articles.mjs
 */

import fs from "fs";
import path from "path";

const INPUT_FILE = path.resolve("tmp/manufacturer-data.json");
const OUTPUT_DIR = path.resolve("tmp/manufacturer-articles");

// Existing aiwiki pages that should NOT be overwritten (already have detailed content)
const SKIP_SLUGS = new Set([
  "1x_technologies",
  "1x",
  "agility_robotics",
  "apptronik",
  "boston_dynamics",
  "figure_ai",
  "fourier_intelligence",
  "sanctuary_ai",
  "ubtech",
  "unitree",
  "unitree_robotics",
]);

// Map certain manufacturer names to preferred aiwiki slugs
const SLUG_OVERRIDES = {
  "1x technologies": "1x_technologies",
  "figure": "figure_ai",
  "ubtech robotics": "ubtech",
  "unitree": "unitree_robotics",
  "softbank robotics": "softbank_robotics",
  "hanson robotics": "hanson_robotics",
  "pal robotics": "pal_robotics",
  "kepler robotics": "kepler_robotics",
  "deep robotics": "deep_robotics",
  "lanxin robotics": "lanxin_robotics",
  "neura robotics": "neura_robotics",
  "rainbow robotics": "rainbow_robotics",
  "pollen robotics": "pollen_robotics",
  "clone robotics": "clone_robotics",
  "engineered arts": "engineered_arts",
  "limx dynamics": "limx_dynamics",
  "agile robots se": "agile_robots",
  "xpeng robotics": "xpeng_robotics",
  "beijing galaxy general robot": "beijing_galaxy_robot",
  "pudu robotics": "pudu_robotics",
  "dobot robotics": "dobot_robotics",
  "matrix robotics": "matrix_robotics",
  "kinisi robotics": "kinisi_robotics",
  "muks robotics": "muks_robotics",
  "magiclab": "magiclab",
  "noetix robotics": "noetix_robotics",
  "mentee robotics": "mentee_robotics",
  "galaxea dynamics": "galaxea_dynamics",
  "booster robotics": "booster_robotics",
  "borg robotics": "borg_robotics",
  "cartwheel robotics": "cartwheel_robotics",
  "lumos robotics": "lumos_robotics",
  "tars robotics": "tars_robotics",
  "sunday robotics": "sunday_robotics",
  "tangible robots": "tangible_robots",
  "tokyo robotics": "tokyo_robotics",
  "oversonic robotics": "oversonic_robotics",
  "generative bionics": "generative_bionics",
  "spirit ai": "spirit_ai",
  "mirsee robotics": "mirsee_robotics",
  "cyan robotics": "cyan_robotics",
};

function makeSlug(name) {
  const norm = name.toLowerCase().trim();
  if (SLUG_OVERRIDES[norm]) return SLUG_OVERRIDES[norm];
  return norm
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

function robotSlugToAiwiki(hsSlug) {
  return hsSlug.replace(/-/g, "_");
}

function formatPrice(price) {
  if (!price) return null;
  const num = parseFloat(price);
  if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M USD`;
  if (num >= 1000) return `$${num.toLocaleString("en-US")} USD`;
  return `$${num} USD`;
}

function generateArticle(mfr) {
  const sections = [];
  const slug = makeSlug(mfr.name);
  const scraped = mfr.scraped || {};

  // Title
  sections.push(`# ${mfr.name}`);
  sections.push("");

  // Infobox
  sections.push(`| ${mfr.name} |`);
  sections.push("| --- |");
  sections.push("| Company information |");

  const addRow = (label, value) => {
    if (value) sections.push(`| **${label}** | ${value} |`);
  };

  addRow("Type", "Robotics company");
  if (scraped.founded) addRow("Founded", scraped.founded);
  if (scraped.headquarters) addRow("Headquarters", scraped.headquarters);
  else if (mfr.country) addRow("Country", mfr.country);
  if (scraped.employees) addRow("Employees", scraped.employees);
  if (scraped.funding) addRow("Funding", scraped.funding);
  if (scraped.industries && scraped.industries.length > 0)
    addRow("Industries", scraped.industries.join(", "));
  addRow("Humanoid robots", String(mfr.robotCount));
  if (mfr.websites.length > 0) {
    const mainWebsite = scraped.website || mfr.websites[0];
    try {
      const domain = new URL(mainWebsite).hostname.replace("www.", "");
      addRow("Website", `[${domain}](${mainWebsite})`);
    } catch {
      addRow("Website", `[${mainWebsite}](${mainWebsite})`);
    }
  }
  sections.push("");

  // Lead paragraph
  let lead = `**${mfr.name}** is a robotics company`;
  if (mfr.country) lead += ` based in ${mfr.country}`;
  lead += ` that develops [humanoid robots](/wiki/humanoid_robot).`;

  if (scraped.description) {
    // Clean the description - remove em dashes, ensure it reads well
    let desc = scraped.description
      .replace(/\s*—\s*/g, ", ")
      .replace(/—/g, ", ");
    lead += " " + desc;
  } else {
    // Generate a basic description from robot data
    const robotNames = mfr.robots.map((r) => r.name).join(", ");
    lead += ` The company manufactures ${mfr.robotCount === 1 ? "the" : ""} ${robotNames}.`;
  }

  if (scraped.founded) {
    if (!lead.includes(String(scraped.founded))) {
      lead += ` The company was founded in ${scraped.founded}.`;
    }
  }
  if (scraped.headquarters && !lead.includes(scraped.headquarters)) {
    lead += ` It is headquartered in ${scraped.headquarters}.`;
  }

  sections.push(lead);
  sections.push("");

  // Company background section (if we have rich data)
  if (scraped.funding || scraped.employees) {
    sections.push("## Company overview");
    sections.push("");
    const parts = [];

    if (scraped.founded && scraped.headquarters) {
      parts.push(
        `${mfr.name} was founded in ${scraped.founded} and is headquartered in ${scraped.headquarters}.`
      );
    }
    if (scraped.employees) {
      parts.push(`The company employs ${scraped.employees} people.`);
    }
    if (scraped.funding) {
      parts.push(`Funding: ${scraped.funding}.`);
    }
    if (scraped.industries && scraped.industries.length > 0) {
      parts.push(
        `${mfr.name} operates in the ${scraped.industries.join(", ").toLowerCase()} sectors.`
      );
    }

    sections.push(parts.join(" "));
    sections.push("");
  }

  // Humanoid robots section
  sections.push("## Humanoid robots");
  sections.push("");

  if (mfr.robots.length === 1) {
    const r = mfr.robots[0];
    const rSlug = robotSlugToAiwiki(r.slug);
    sections.push(
      `${mfr.name} manufactures one humanoid robot, the [${r.name}](/wiki/${rSlug}).`
    );
    sections.push("");
    if (r.description) {
      sections.push(r.description.replace(/\s*—\s*/g, ", ").replace(/—/g, ", "));
      sections.push("");
    }
  } else {
    sections.push(
      `${mfr.name} manufactures ${mfr.robots.length} humanoid robots:`
    );
    sections.push("");
  }

  // Robot comparison table
  if (mfr.robots.length > 1) {
    sections.push("| Robot | Status | Height | Weight | DOF | Price |");
    sections.push("|---|---|---|---|---|---|");

    for (const r of mfr.robots) {
      const rSlug = robotSlugToAiwiki(r.slug);
      const name = `[${r.name}](/wiki/${rSlug})`;
      const status = r.status
        ? r.status.charAt(0).toUpperCase() + r.status.slice(1)
        : "N/A";
      const height = r.height_cm ? `${r.height_cm} cm` : "N/A";
      const weight = r.weight_kg ? `${r.weight_kg} kg` : "N/A";
      const dof = r.degrees_of_freedom || "N/A";
      const price = formatPrice(r.price_usd) || "N/A";
      sections.push(
        `| ${name} | ${status} | ${height} | ${weight} | ${dof} | ${price} |`
      );
    }
    sections.push("");

    // Individual robot descriptions
    for (const r of mfr.robots) {
      const rSlug = robotSlugToAiwiki(r.slug);
      sections.push(`### ${r.name}`);
      sections.push("");
      if (r.description) {
        let desc = r.description
          .replace(/\s*—\s*/g, ", ")
          .replace(/—/g, ", ");
        // Remove robot name prefix from description to avoid repetition
        const nameEsc = r.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        desc = desc.replace(new RegExp("^" + nameEsc + "\\s+is\\s+", "i"), "is ");
        desc = desc.replace(new RegExp("^" + nameEsc + "'s\\s+", "i"), "");
        desc = desc.replace(new RegExp("^" + nameEsc + "\\s+", "i"), "");
        // Ensure desc starts with lowercase or "is"
        if (!desc.startsWith("is ") && /^[A-Z]/.test(desc)) {
          desc = "is " + desc.charAt(0).toLowerCase() + desc.slice(1);
        }
        if (desc.startsWith("is is ")) desc = desc.replace("is is ", "is ");
        sections.push(`The [${r.name}](/wiki/${rSlug}) ${desc}`);
      } else {
        sections.push(`The [${r.name}](/wiki/${rSlug}) is a humanoid robot by ${mfr.name}.`);
      }
      if (r.release_year) {
        sections.push(` It was ${r.status === "announced" ? "announced" : "introduced"} in ${r.release_year}.`);
      }
      sections.push("");
    }
  }

  // See also
  sections.push("## See also");
  sections.push("");
  sections.push("- [Humanoid robot](/wiki/humanoid_robot)");
  sections.push("- [Humanoid robots](/wiki/humanoid_robots)");
  sections.push("- [AI robotics](/wiki/ai_robotics)");

  // Add links to individual robot pages
  for (const r of mfr.robots) {
    const rSlug = robotSlugToAiwiki(r.slug);
    sections.push(`- [${r.name}](/wiki/${rSlug})`);
  }
  sections.push("");

  // References
  sections.push("## References");
  sections.push("");
  let refNum = 1;
  if (scraped.website || mfr.websites.length > 0) {
    const url = scraped.website || mfr.websites[0];
    sections.push(`${refNum}. [${mfr.name} official website](${url})`);
    refNum++;
  }
  sections.push(
    `${refNum}. [HumanoidSpecs.com](https://humanoidspecs.com/manufacturers/${mfr.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")})`
  );
  sections.push("");

  return sections.join("\n");
}

function main() {
  const manufacturers = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"));
  console.log(`Loaded ${manufacturers.length} manufacturers`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const generated = [];
  const skipped = [];

  for (const mfr of manufacturers) {
    const slug = makeSlug(mfr.name);

    // Skip existing detailed pages
    if (SKIP_SLUGS.has(slug)) {
      skipped.push(`${mfr.name} (${slug}) - already has detailed aiwiki page`);
      continue;
    }

    const content = generateArticle(mfr);
    const title = mfr.name;

    const articleJson = {
      slug,
      title,
      content,
      categories: ["Robotics Companies", "Humanoid Robots"],
    };

    const outFile = path.join(OUTPUT_DIR, `${slug}.json`);
    fs.writeFileSync(outFile, JSON.stringify(articleJson, null, 2));
    generated.push({ slug, name: mfr.name, file: outFile });
  }

  // Write manifest
  const manifest = {
    generated: generated.map((g) => ({
      slug: g.slug,
      name: g.name,
      file: path.basename(g.file),
    })),
    skipped,
    total: generated.length,
  };
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "_manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nGenerated ${generated.length} articles in ${OUTPUT_DIR}`);
  console.log(`Skipped ${skipped.length}:`);
  skipped.forEach((s) => console.log(`  - ${s}`));
}

main();
