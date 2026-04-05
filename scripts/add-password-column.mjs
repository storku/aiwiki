#!/usr/bin/env node

/**
 * Add password_hash column to users table for email/password auth.
 *
 * Usage: node --env-file=.env.local scripts/add-password-column.mjs
 */

import { neon } from "@neondatabase/serverless";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set. Use: node --env-file=.env.local scripts/add-password-column.mjs");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Adding password_hash column to users table...");

  await sql`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS password_hash TEXT
  `;

  console.log("Done! password_hash column added.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
