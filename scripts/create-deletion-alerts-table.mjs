#!/usr/bin/env node

/**
 * Create deletion_alerts table to track large content deletions on wiki pages.
 *
 * Usage: node --env-file=.env.local scripts/create-deletion-alerts-table.mjs
 */

import { neon } from "@neondatabase/serverless";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use: node --env-file=.env.local scripts/create-deletion-alerts-table.mjs");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Creating deletion_alerts table...");

  await sql`
    CREATE TABLE IF NOT EXISTS deletion_alerts (
      id SERIAL PRIMARY KEY,
      page_id INTEGER REFERENCES pages(id) ON DELETE SET NULL,
      page_slug TEXT NOT NULL,
      page_title TEXT NOT NULL,
      deleted_content TEXT NOT NULL,
      old_word_count INTEGER NOT NULL,
      new_word_count INTEGER NOT NULL,
      words_deleted INTEGER NOT NULL,
      edit_summary TEXT,
      dismissed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_deletion_alerts_dismissed
    ON deletion_alerts (dismissed, created_at DESC)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_deletion_alerts_page_slug
    ON deletion_alerts (page_slug)
  `;

  console.log("Done! deletion_alerts table created.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
