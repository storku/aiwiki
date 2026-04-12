#!/usr/bin/env node

/**
 * Generates comprehensive wiki articles for all humanoid robots from humanoidspecs.com
 * Fetches data from humanoidspecs Neon DB, generates markdown, saves as JSON files
 * for upsert-article.mjs
 *
 * Usage: node scripts/generate-robot-articles.mjs
 */

import { createRequire } from "module";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const { neon } = require("../node_modules/@neondatabase/serverless/index.js");

const HUMANOIDSPECS_DB =
  "postgresql://neondb_owner:npg_Les9XAaJ1CpQ@ep-young-pine-ah3d2i5k-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require";

const OUTPUT_DIR = path.resolve("tmp/robot-articles");

// Existing aiwiki pages that should NOT be overwritten
const SKIP_SLUGS = new Set([
  "boston-dynamics-atlas", // atlas_robot exists with detailed content
  "tesla-optimus-gen-1", // tesla_optimus exists
  "tesla-optimus-gen-2", // tesla_optimus exists
  "hanson-robotics-sophia", // sophia_robot exists
]);

// Deduplicate: when multiple entries exist for the same robot, prefer these slugs
const PREFERRED_SLUGS = {
  "4NE-1": "4ne-1", // id 209 (shorter slug preferred over neura-robotics-4ne-1)
};

function parseJsonField(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return val
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
}

function hsSlugToAiwikiSlug(hsSlug) {
  return hsSlug.replace(/-/g, "_");
}

function manufacturerSlug(manufacturer) {
  return manufacturer
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

function formatSpeed(mps) {
  if (!mps) return null;
  const val = parseFloat(mps);
  const kmh = (val * 3.6).toFixed(1);
  const mph = (val * 2.237).toFixed(1);
  return `${val} m/s (${kmh} km/h, ${mph} mph)`;
}

function formatPrice(price) {
  if (!price) return null;
  const num = parseFloat(price);
  if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M USD`;
  if (num >= 1000) return `$${num.toLocaleString("en-US")} USD`;
  return `$${num} USD`;
}

function formatAvailability(avail) {
  if (!avail) return null;
  const map = {
    "pre-order": "Pre-order",
    available: "Available",
    "research-only": "Research only",
    development: "In development",
    announced: "Announced",
    production: "In production",
    discontinued: "Discontinued",
    limited: "Limited availability",
    prototype: "Prototype",
  };
  return map[avail] || avail.charAt(0).toUpperCase() + avail.slice(1);
}

function formatStatus(status) {
  if (!status) return null;
  const map = {
    production: "In production",
    development: "In development",
    prototype: "Prototype",
    announced: "Announced",
    discontinued: "Discontinued",
    concept: "Concept",
    "pre-production": "Pre-production",
  };
  return map[status] || status.charAt(0).toUpperCase() + status.slice(1);
}

function boolToYesNo(val) {
  if (val === true) return "Yes";
  if (val === false) return "No";
  return null;
}

function generateInfobox(robot) {
  const lines = [];
  lines.push(`| ${robot.name} |`);
  lines.push("| --- |");

  if (robot.image_url) {
    lines.push(`| ![${robot.name}](${robot.image_url}) |`);
  }

  lines.push("| General information |");

  const addRow = (label, value) => {
    if (value !== null && value !== undefined && value !== "") {
      lines.push(`| **${label}** | ${value} |`);
    }
  };

  const mfrSlug = manufacturerSlug(robot.manufacturer);
  addRow(
    "Manufacturer",
    `[${robot.manufacturer}](/wiki/${mfrSlug})`
  );
  addRow("Country of origin", robot.country_of_origin);
  addRow("Release year", robot.release_year);
  addRow("Status", formatStatus(robot.status));
  addRow("Generation", robot.generation);
  addRow("Price", formatPrice(robot.price_usd));
  addRow("Availability", formatAvailability(robot.availability));

  if (robot.website_url) {
    const domain = new URL(robot.website_url).hostname.replace("www.", "");
    addRow("Website", `[${domain}](${robot.website_url})`);
  }

  return lines.join("\n");
}

function generateSpecsTable(robot) {
  const rows = [];

  const add = (category, spec, value) => {
    if (value !== null && value !== undefined && value !== "") {
      rows.push(`| ${category} | ${spec} | ${value} |`);
    }
  };

  // Physical
  add("Physical", "Height", robot.height_cm ? `${robot.height_cm} cm` : null);
  add("Physical", "Weight", robot.weight_kg ? `${robot.weight_kg} kg` : null);
  add("Physical", "Width", robot.width_cm ? `${robot.width_cm} cm` : null);
  add("Physical", "Depth", robot.depth_cm ? `${robot.depth_cm} cm` : null);
  add("Physical", "Arm span", robot.arm_span_cm ? `${robot.arm_span_cm} cm` : null);
  add("Physical", "Material", robot.main_material);
  add("Physical", "Color options", robot.color_options);
  add("Physical", "IP rating", robot.ip_rating);

  // Mobility
  add("Mobility", "Degrees of freedom", robot.degrees_of_freedom);
  add("Mobility", "DOF per arm", robot.dof_per_arm);
  add("Mobility", "DOF per hand", robot.dof_per_hand);
  add("Mobility", "DOF per leg", robot.dof_per_leg);
  add("Mobility", "Max walking speed", formatSpeed(robot.max_walking_speed_mps));
  add("Mobility", "Max running speed", formatSpeed(robot.max_running_speed_mps));
  add("Mobility", "Step height", robot.step_height_cm ? `${robot.step_height_cm} cm` : null);
  add("Mobility", "Can climb stairs", boolToYesNo(robot.can_climb_stairs));
  add("Mobility", "Can crawl", boolToYesNo(robot.can_crawl));
  add("Mobility", "Can jump", boolToYesNo(robot.can_jump));

  // Manipulation
  add("Manipulation", "Payload capacity", robot.payload_kg ? `${robot.payload_kg} kg` : null);
  add("Manipulation", "Arm payload", robot.arm_payload_kg ? `${robot.arm_payload_kg} kg` : null);
  add("Manipulation", "Grip force", robot.grip_force_n ? `${robot.grip_force_n} N` : null);
  add("Manipulation", "Hand type", robot.hand_type ? robot.hand_type.charAt(0).toUpperCase() + robot.hand_type.slice(1) : null);
  add("Manipulation", "Fingers per hand", robot.fingers_per_hand);

  // Power
  add("Power", "Battery capacity", robot.battery_capacity_wh ? `${robot.battery_capacity_wh} Wh` : null);
  add("Power", "Battery life", robot.battery_life_hours ? `${robot.battery_life_hours} hours` : null);
  add("Power", "Charging time", robot.charging_time_hours ? `${robot.charging_time_hours} hours` : null);
  add("Power", "Power consumption", robot.power_consumption_w ? `${robot.power_consumption_w} W` : null);

  // Computing
  add("Computing", "Compute platform", robot.compute_platform);
  add("Computing", "CPU", robot.cpu);
  add("Computing", "GPU", robot.gpu);
  add("Computing", "RAM", robot.ram_gb ? `${robot.ram_gb} GB` : null);
  add("Computing", "Onboard AI", boolToYesNo(robot.onboard_ai));
  add("Computing", "LLM integration", boolToYesNo(robot.llm_integration));
  add("Computing", "Operating system", robot.operating_system);
  add("Computing", "Latency", robot.latency_ms ? `${robot.latency_ms} ms` : null);

  // Sensors
  const cameras = parseJsonField(robot.cameras);
  add("Sensors", "Cameras", cameras.length > 0 ? cameras.join(", ") : null);
  add("Sensors", "Camera resolution", robot.camera_resolution);
  add("Sensors", "LiDAR", boolToYesNo(robot.lidar));
  add("Sensors", "Depth sensors", boolToYesNo(robot.depth_sensors));
  add("Sensors", "Force/torque sensors", boolToYesNo(robot.force_torque_sensors));
  add("Sensors", "IMU", boolToYesNo(robot.imu));
  add("Sensors", "Microphones", robot.microphones);
  add("Sensors", "Other sensors", robot.other_sensors);

  // Actuators
  add("Actuators", "Type", robot.actuator_type);
  add("Actuators", "Motor count", robot.motor_count);
  add("Actuators", "Custom actuators", boolToYesNo(robot.custom_actuators));
  add("Actuators", "Details", robot.actuator_details);
  add("Actuators", "Gear technology", robot.gear_technology);

  // Connectivity
  const connectivity = parseJsonField(robot.connectivity);
  add("Connectivity", "Interfaces", connectivity.length > 0 ? connectivity.join(", ") : null);
  add("Connectivity", "API available", boolToYesNo(robot.api_available));
  add("Connectivity", "ROS compatible", boolToYesNo(robot.ros_compatible));

  if (rows.length === 0) return "";

  const header = `| Category | Specification | Value |\n|---|---|---|`;
  return header + "\n" + rows.join("\n");
}

function generateArticle(robot) {
  const sections = [];
  const mfrSlug = manufacturerSlug(robot.manufacturer);
  const aiwikiSlug = hsSlugToAiwikiSlug(robot.hs_slug);

  // Title
  sections.push(`# ${robot.name}`);
  sections.push("");

  // Infobox
  sections.push(generateInfobox(robot));
  sections.push("");

  // Lead paragraph
  let lead = `**${robot.name}** is a [humanoid robot](/wiki/humanoid_robot) developed by [${robot.manufacturer}](/wiki/${mfrSlug})`;
  if (robot.country_of_origin) {
    lead += `, a robotics company based in ${robot.country_of_origin}`;
  }
  lead += ".";

  if (robot.description) {
    // Clean up description - remove redundancy with lead sentence
    let desc = robot.description.trim();
    // If description starts with the robot name, trim it
    if (desc.startsWith(robot.name + " is")) {
      desc = desc.replace(new RegExp("^" + robot.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + " is "), "It is ");
    }
    lead += " " + desc;
  }

  // Add release year context
  if (robot.release_year && !lead.includes(String(robot.release_year))) {
    lead += ` The robot was ${robot.status === "announced" ? "announced" : "introduced"} in ${robot.release_year}.`;
  }

  sections.push(lead);
  sections.push("");

  // Overview section from long_description
  if (robot.long_description) {
    sections.push("## Overview");
    sections.push("");

    // Split long_description into paragraphs and clean up
    let longDesc = robot.long_description.trim();
    // Replace em dashes with appropriate alternatives
    longDesc = longDesc.replace(/\s*—\s*/g, ", ");
    longDesc = longDesc.replace(/—/g, ", ");

    // Add wikilinks to common terms in the long description
    longDesc = addWikilinks(longDesc, robot.name, robot.manufacturer);

    sections.push(longDesc);
    sections.push("");
  }

  // Specifications table
  const specsTable = generateSpecsTable(robot);
  if (specsTable) {
    sections.push("## Technical specifications");
    sections.push("");
    sections.push(specsTable);
    sections.push("");
  }

  // Key features
  const features = parseJsonField(robot.key_features);
  if (features.length > 0) {
    sections.push("## Key features");
    sections.push("");
    features.forEach((f) => {
      sections.push(`- ${f}`);
    });
    sections.push("");
  }

  // Design and hardware section
  const designParts = [];
  if (robot.main_material) {
    designParts.push(`The ${robot.name} is constructed from ${robot.main_material}.`);
  }
  if (robot.actuator_type || robot.actuator_details) {
    let actLine = `The robot uses ${(robot.actuator_type || "electric").toLowerCase()} actuators`;
    if (robot.motor_count) actLine += ` with ${robot.motor_count} motors`;
    if (robot.actuator_details) actLine += `. ${robot.actuator_details}`;
    else actLine += ".";
    designParts.push(actLine);
  }
  if (robot.hand_type) {
    let handLine = `It features ${robot.hand_type} hands`;
    if (robot.fingers_per_hand) handLine += ` with ${robot.fingers_per_hand} fingers per hand`;
    if (robot.dof_per_hand) handLine += ` and ${robot.dof_per_hand} degrees of freedom per hand`;
    handLine += ".";
    designParts.push(handLine);
  }
  if (robot.ip_rating) {
    designParts.push(`The robot carries an ${robot.ip_rating} ingress protection rating.`);
  }
  if (robot.safe_with_humans === true) {
    designParts.push("It is rated safe for operation alongside humans.");
  }

  if (designParts.length > 0 && !robot.long_description) {
    sections.push("## Design and hardware");
    sections.push("");
    sections.push(designParts.join(" "));
    sections.push("");
  }

  // Mobility section (only if not covered in long_description)
  const mobilityParts = [];
  if (robot.degrees_of_freedom) {
    mobilityParts.push(`The ${robot.name} has ${robot.degrees_of_freedom} degrees of freedom.`);
  }
  if (robot.max_walking_speed_mps) {
    mobilityParts.push(`Its maximum walking speed is ${formatSpeed(robot.max_walking_speed_mps)}.`);
  }
  if (robot.max_running_speed_mps && robot.max_running_speed_mps !== robot.max_walking_speed_mps) {
    mobilityParts.push(`It can run at up to ${formatSpeed(robot.max_running_speed_mps)}.`);
  }
  const capabilities = [];
  if (robot.can_climb_stairs) capabilities.push("climb stairs");
  if (robot.can_crawl) capabilities.push("crawl");
  if (robot.can_jump) capabilities.push("jump");
  if (capabilities.length > 0) {
    mobilityParts.push(`The robot can ${capabilities.join(", ")}.`);
  }

  if (mobilityParts.length > 1 && !robot.long_description) {
    sections.push("## Mobility");
    sections.push("");
    sections.push(mobilityParts.join(" "));
    sections.push("");
  }

  // Power section
  const powerParts = [];
  if (robot.battery_capacity_wh) {
    powerParts.push(`The ${robot.name} is powered by a ${robot.battery_capacity_wh} Wh battery.`);
  }
  if (robot.battery_life_hours) {
    powerParts.push(`It provides approximately ${robot.battery_life_hours} hours of operation on a single charge.`);
  }
  if (robot.charging_time_hours) {
    powerParts.push(`Charging takes approximately ${robot.charging_time_hours} hours.`);
  }
  if (robot.power_consumption_w) {
    powerParts.push(`Power consumption is rated at ${robot.power_consumption_w} W.`);
  }

  if (powerParts.length > 0 && !robot.long_description) {
    sections.push("## Power system");
    sections.push("");
    sections.push(powerParts.join(" "));
    sections.push("");
  }

  // AI and computing section
  const aiParts = [];
  if (robot.compute_platform) {
    aiParts.push(`The ${robot.name} runs on ${robot.compute_platform}.`);
  }
  if (robot.cpu) aiParts.push(`The CPU is ${robot.cpu}.`);
  if (robot.gpu) aiParts.push(`It includes a ${robot.gpu} GPU.`);
  if (robot.ram_gb) aiParts.push(`The system has ${robot.ram_gb} GB of RAM.`);
  if (robot.onboard_ai) {
    aiParts.push("The robot features onboard [artificial intelligence](/wiki/artificial_intelligence) processing.");
  }
  if (robot.llm_integration) {
    aiParts.push("It supports [large language model](/wiki/large_language_model) integration for natural language interaction.");
  }
  if (robot.operating_system) {
    aiParts.push(`The operating system is ${robot.operating_system}.`);
  }

  if (aiParts.length > 0 && !robot.long_description) {
    sections.push("## Computing and AI");
    sections.push("");
    sections.push(aiParts.join(" "));
    sections.push("");
  }

  // Use cases
  const useCases = parseJsonField(robot.use_cases);
  if (useCases.length > 0) {
    sections.push("## Applications");
    sections.push("");
    useCases.forEach((uc) => {
      sections.push(`- ${uc}`);
    });
    sections.push("");
  }

  // Target market and availability
  const marketParts = [];
  if (robot.price_usd) {
    marketParts.push(`The ${robot.name} is priced at approximately ${formatPrice(robot.price_usd)}.`);
  }
  if (robot.availability) {
    marketParts.push(`Availability status: ${formatAvailability(robot.availability)}.`);
  }
  const markets = parseJsonField(robot.target_market);
  if (markets.length > 0) {
    marketParts.push(`Target markets include ${markets.join(", ")}.`);
  }

  if (marketParts.length > 0) {
    sections.push("## Availability and pricing");
    sections.push("");
    sections.push(marketParts.join(" "));
    sections.push("");
  }

  // Videos
  const videoUrls = [];
  if (robot.video_url) videoUrls.push(robot.video_url);
  const pressVideos = parseJsonField(robot.press_video_urls);
  videoUrls.push(...pressVideos);

  if (videoUrls.length > 0) {
    sections.push("## Videos");
    sections.push("");
    videoUrls.forEach((v, i) => {
      sections.push(`- [Video ${i + 1}](${v})`);
    });
    sections.push("");
  }

  // See also
  sections.push("## See also");
  sections.push("");
  sections.push("- [Humanoid robot](/wiki/humanoid_robot)");
  sections.push("- [Humanoid robots](/wiki/humanoid_robots)");
  sections.push(`- [${robot.manufacturer}](/wiki/${mfrSlug})`);
  sections.push("- [AI robotics](/wiki/ai_robotics)");
  sections.push("");

  // References
  sections.push("## References");
  sections.push("");
  let refNum = 1;
  if (robot.website_url) {
    sections.push(`${refNum}. [${robot.manufacturer} official website](${robot.website_url})`);
    refNum++;
  }
  sections.push(`${refNum}. [HumanoidSpecs.com - ${robot.name}](https://humanoidspecs.com/robots/${robot.hs_slug})`);
  refNum++;
  if (robot.data_sources) {
    const sources = robot.data_sources.split(",").map((s) => s.trim());
    sources.forEach((src) => {
      if (src.startsWith("http")) {
        sections.push(`${refNum}. [${src}](${src})`);
      } else {
        sections.push(`${refNum}. ${src}`);
      }
      refNum++;
    });
  }
  sections.push("");

  return sections.join("\n");
}

function addWikilinks(text, robotName, manufacturer) {
  // Terms to link (sorted by length descending to prioritize longer matches)
  const wikiTerms = [
    ["artificial intelligence", "artificial_intelligence"],
    ["natural language processing", "natural_language_processing"],
    ["computer vision", "computer_vision"],
    ["large language model", "large_language_model"],
    ["machine learning", "machine_learning"],
    ["deep learning", "deep_learning"],
    ["reinforcement learning", "reinforcement_learning"],
    ["neural network", "neural_network"],
    ["robot operating system", "ros"],
    ["degrees of freedom", "degrees_of_freedom"],
    ["humanoid robot", "humanoid_robot"],
    ["force torque", "force_torque_sensor"],
    ["NVIDIA Jetson", "nvidia_jetson"],
    ["Boston Dynamics", "boston_dynamics"],
    ["Tesla", "tesla"],
    ["OpenAI", "openai"],
    ["Google DeepMind", "google_deepmind"],
    ["NVIDIA", "nvidia"],
    ["Hyundai", "hyundai"],
    ["BMW", "bmw"],
    ["ROS", "ros"],
    ["LiDAR", "lidar"],
    ["SLAM", "slam"],
  ];

  const linked = new Set();

  for (const [term, slug] of wikiTerms) {
    if (linked.has(slug)) continue;

    // Case-insensitive match, but only link first occurrence
    const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
    const match = text.match(regex);
    if (match) {
      // Don't link if it's inside an existing markdown link
      const idx = match.index;
      const before = text.substring(Math.max(0, idx - 2), idx);
      if (before.includes("[") || before.includes("(")) continue;

      text = text.replace(regex, `[${match[1]}](/wiki/${slug})`);
      linked.add(slug);
    }
  }

  return text;
}

async function main() {
  console.log("Connecting to humanoidspecs database...");
  const hsSql = neon(HUMANOIDSPECS_DB);

  // Fetch all robots
  const robots = await hsSql`SELECT * FROM robots ORDER BY name`;
  console.log(`Fetched ${robots.length} robots`);

  // Fetch all images
  const images = await hsSql`SELECT * FROM robot_images ORDER BY robot_id, display_order`;
  const imageMap = {};
  images.forEach((img) => {
    if (!imageMap[img.robot_id]) imageMap[img.robot_id] = [];
    imageMap[img.robot_id].push(img);
  });
  console.log(`Fetched ${images.length} images`);

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Track duplicate robot names
  const seenNames = new Map();
  const skipped = [];
  const generated = [];

  for (const robot of robots) {
    robot.hs_slug = robot.slug;

    // Skip existing aiwiki pages
    if (SKIP_SLUGS.has(robot.hs_slug)) {
      skipped.push(`${robot.name} (${robot.hs_slug}) - already exists in aiwiki`);
      continue;
    }

    // Handle duplicates: skip if we've seen this name and this isn't the preferred slug
    if (seenNames.has(robot.name)) {
      const preferred = PREFERRED_SLUGS[robot.name];
      if (preferred && robot.hs_slug !== preferred) {
        skipped.push(`${robot.name} (${robot.hs_slug}) - duplicate, using ${preferred} instead`);
        continue;
      }
      if (!preferred) {
        // Keep the one with more data (longer long_description)
        const prevRobot = seenNames.get(robot.name);
        const prevLen = (prevRobot.long_description || "").length;
        const thisLen = (robot.long_description || "").length;
        if (thisLen <= prevLen) {
          skipped.push(`${robot.name} (${robot.hs_slug}) - duplicate with less data`);
          continue;
        }
        // This one has more data, remove the previous
        const prevSlug = hsSlugToAiwikiSlug(prevRobot.hs_slug);
        const prevFile = path.join(OUTPUT_DIR, `${prevSlug}.json`);
        if (fs.existsSync(prevFile)) fs.unlinkSync(prevFile);
        generated.splice(
          generated.findIndex((g) => g.slug === prevSlug),
          1
        );
        skipped.push(`${robot.name} (${prevRobot.hs_slug}) - replaced by version with more data`);
      }
    }
    seenNames.set(robot.name, robot);

    // Add images to robot object
    robot.images = imageMap[robot.id] || [];

    // Generate article
    const aiwikiSlug = hsSlugToAiwikiSlug(robot.hs_slug);
    const content = generateArticle(robot);

    // Determine title
    const title = robot.name;

    const articleJson = {
      slug: aiwikiSlug,
      title: title,
      content: content,
      categories: ["Humanoid Robots", "Robotics"],
    };

    const outFile = path.join(OUTPUT_DIR, `${aiwikiSlug}.json`);
    fs.writeFileSync(outFile, JSON.stringify(articleJson, null, 2));
    generated.push({ slug: aiwikiSlug, name: robot.name, file: outFile });
  }

  console.log(`\nGenerated ${generated.length} articles in ${OUTPUT_DIR}`);
  console.log(`Skipped ${skipped.length} robots:`);
  skipped.forEach((s) => console.log(`  - ${s}`));

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
  console.log(`\nManifest written to ${OUTPUT_DIR}/_manifest.json`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
