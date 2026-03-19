#!/usr/bin/env node

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const statements = [
  `CREATE TABLE IF NOT EXISTS pages (
    id           SERIAL PRIMARY KEY,
    slug         TEXT UNIQUE NOT NULL,
    title        TEXT NOT NULL,
    content      TEXT NOT NULL,
    excerpt      TEXT NOT NULL DEFAULT '',
    reading_time INTEGER NOT NULL DEFAULT 1,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS categories (
    id   SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS page_categories (
    page_id     INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (page_id, category_id)
  )`,
  `CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug)`,
  `CREATE INDEX IF NOT EXISTS idx_pages_updated ON pages(updated_at)`,
  `CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name)`,
  `CREATE INDEX IF NOT EXISTS idx_pc_page ON page_categories(page_id)`,
  `CREATE INDEX IF NOT EXISTS idx_pc_category ON page_categories(category_id)`,
];

async function main() {
  for (const stmt of statements) {
    await sql.query(stmt);
    console.log("OK:", stmt.slice(0, 60) + "...");
  }
  console.log("\nSchema created successfully!");
}

main().catch(console.error);
