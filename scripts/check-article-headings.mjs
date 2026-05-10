#!/usr/bin/env node

import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is required. Run with --env-file=.env.local or set it in the environment.");
  process.exit(1);
}

const sql = neon(databaseUrl);

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueId(baseId, seen) {
  const fallback = baseId || "section";
  const count = seen.get(fallback) || 0;
  seen.set(fallback, count + 1);
  return count === 0 ? fallback : `${fallback}-${count}`;
}

function parseMarkdownHeadings(content) {
  const headings = [];
  const seen = new Map();

  for (const line of content.split("\n")) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (!match) continue;

    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/&#\d+;/g, "")
      .trim();
    if (!text) continue;

    headings.push(uniqueId(slugifyHeading(text), seen));
  }

  return headings;
}

function parseHtmlHeadings(html) {
  const headings = [];
  const seen = new Map();
  const regex = /<(h[2-4])(\s[^>]*)?>(([\s\S]*?))<\/\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const [, , attrs = "", content] = match;
    const text = content.replace(/<[^>]*>/g, "").trim();
    if (!text) continue;

    const idMatch = attrs.match(/\bid="([^"]*)"/);
    const baseId = idMatch?.[1] || slugifyHeading(text);
    headings.push(uniqueId(baseId, seen));
  }

  return headings;
}

function findDuplicates(values) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  return Array.from(duplicates);
}

const failures = [];
let checkedCount = 0;
let offset = 0;
const batchSize = 25;

while (true) {
  const rows = await sql`
    SELECT slug, title, content, content_html
    FROM pages
    ORDER BY slug
    LIMIT ${batchSize}
    OFFSET ${offset}
  `;

  if (rows.length === 0) break;
  checkedCount += rows.length;
  offset += rows.length;

  for (const row of rows) {
    const headings = row.content_html
      ? parseHtmlHeadings(String(row.content_html))
      : parseMarkdownHeadings(String(row.content || ""));

    const duplicates = findDuplicates(headings);
    if (duplicates.length > 0) {
      failures.push({
        slug: row.slug,
        title: row.title,
        duplicates,
      });
    }
  }
}

if (failures.length > 0) {
  console.error(`Found duplicate generated heading IDs on ${failures.length} page(s):`);
  for (const failure of failures.slice(0, 20)) {
    console.error(`- ${failure.slug}: ${failure.duplicates.join(", ")}`);
  }
  if (failures.length > 20) {
    console.error(`...and ${failures.length - 20} more.`);
  }
  process.exit(1);
}

console.log(`Checked ${checkedCount.toLocaleString()} pages; generated heading IDs are unique.`);
