#!/usr/bin/env node

/**
 * V2 Schema Migration — adds new columns to pages, creates page_revisions
 * and page_links tables, and adds a search vector trigger.
 *
 * Safe to run multiple times (all statements use IF NOT EXISTS / IF EXISTS checks).
 *
 * Usage: node --env-file=.env.local scripts/migrate-v2-schema.mjs
 */

import { neon } from "@neondatabase/serverless";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error(
      "DATABASE_URL not set. Use: node --env-file=.env.local scripts/migrate-v2-schema.mjs"
    );
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Running V2 schema migration...\n");

  // ── 1. Add new columns to pages ──────────────────────────────────────

  console.log("Adding new columns to pages table...");

  // Content columns
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS content_tiptap JSONB`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS content_html TEXT`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS content_plain TEXT`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS search_vector tsvector`;

  // Metadata
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'published'`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS quality TEXT NOT NULL DEFAULT 'complete'`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS version INTEGER NOT NULL DEFAULT 1`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS word_count INTEGER`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS view_count INTEGER NOT NULL DEFAULT 0`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS description TEXT`;

  // AI fields
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS ai_summary TEXT`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS ai_summary_updated_at TIMESTAMPTZ`;

  // Moderation
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS is_locked BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS locked_by TEXT`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS locked_at TIMESTAMPTZ`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS needs_review BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE pages ADD COLUMN IF NOT EXISTS has_conflicting_info BOOLEAN NOT NULL DEFAULT false`;

  console.log("  Done.\n");

  // ── 2. New indexes on pages ──────────────────────────────────────────

  console.log("Creating indexes on pages...");
  await sql`CREATE INDEX IF NOT EXISTS idx_pages_search_vector ON pages USING GIN(search_vector)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_pages_status ON pages(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_pages_view_count ON pages(view_count)`;
  console.log("  Done.\n");

  // ── 3. Create page_revisions table ───────────────────────────────────

  console.log("Creating page_revisions table...");
  await sql`
    CREATE TABLE IF NOT EXISTS page_revisions (
      id            SERIAL PRIMARY KEY,
      page_id       INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
      version       INTEGER NOT NULL,
      content       TEXT NOT NULL,
      content_tiptap JSONB,
      editor_id     TEXT,
      summary       TEXT,
      ai_assisted   BOOLEAN NOT NULL DEFAULT false,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_revisions_page_created ON page_revisions(page_id, created_at)`;
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS idx_revisions_page_version ON page_revisions(page_id, version)`;
  console.log("  Done.\n");

  // ── 4. Create page_links table ───────────────────────────────────────

  console.log("Creating page_links table...");
  await sql`
    CREATE TABLE IF NOT EXISTS page_links (
      id                SERIAL PRIMARY KEY,
      source_page_id    INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
      target_slug       TEXT NOT NULL,
      created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_page_links_target ON page_links(target_slug)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_page_links_source ON page_links(source_page_id)`;
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS idx_page_links_source_target ON page_links(source_page_id, target_slug)`;
  console.log("  Done.\n");

  // ── 5. Search vector trigger ─────────────────────────────────────────

  console.log("Creating search vector trigger...");
  await sql`
    CREATE OR REPLACE FUNCTION pages_search_vector_update() RETURNS trigger AS $$
    BEGIN
      NEW.search_vector := to_tsvector('english',
        COALESCE(NEW.title, '') || ' ' || COALESCE(NEW.content_plain, ''));
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql
  `;

  // Drop existing trigger if it exists, then recreate
  await sql`DROP TRIGGER IF EXISTS pages_search_vector_trigger ON pages`;
  await sql`
    CREATE TRIGGER pages_search_vector_trigger
      BEFORE INSERT OR UPDATE OF title, content_plain ON pages
      FOR EACH ROW EXECUTE FUNCTION pages_search_vector_update()
  `;
  console.log("  Done.\n");

  // ── 6. Verify ────────────────────────────────────────────────────────

  console.log("Verifying migration...");

  const cols = await sql`
    SELECT column_name FROM information_schema.columns
    WHERE table_name = 'pages'
    ORDER BY ordinal_position
  `;
  console.log(
    "  pages columns:",
    cols.map((c) => c.column_name).join(", ")
  );

  const tables = await sql`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name
  `;
  console.log(
    "  tables:",
    tables.map((t) => t.table_name).join(", ")
  );

  console.log("\nV2 schema migration complete!");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
