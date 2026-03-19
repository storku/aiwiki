-- AI Wiki Database Schema for Neon PostgreSQL (V2)

CREATE TABLE IF NOT EXISTS pages (
  id           SERIAL PRIMARY KEY,
  slug         TEXT UNIQUE NOT NULL,
  title        TEXT NOT NULL,
  content      TEXT NOT NULL,
  excerpt      TEXT NOT NULL DEFAULT '',
  reading_time INTEGER NOT NULL DEFAULT 1,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Content columns (V2)
  content_tiptap  JSONB,
  content_html    TEXT,
  content_plain   TEXT,
  search_vector   tsvector,

  -- Metadata (V2)
  status       TEXT NOT NULL DEFAULT 'published',
  quality      TEXT NOT NULL DEFAULT 'complete',
  version      INTEGER NOT NULL DEFAULT 1,
  word_count   INTEGER,
  view_count   INTEGER NOT NULL DEFAULT 0,
  description  TEXT,

  -- AI fields (V2)
  ai_summary            TEXT,
  ai_summary_updated_at TIMESTAMPTZ,

  -- Moderation (V2)
  is_locked            BOOLEAN NOT NULL DEFAULT false,
  locked_by            TEXT,
  locked_at            TIMESTAMPTZ,
  needs_review         BOOLEAN NOT NULL DEFAULT false,
  has_conflicting_info BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS categories (
  id   SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS page_categories (
  page_id     INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
  category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (page_id, category_id)
);

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
);

CREATE TABLE IF NOT EXISTS page_links (
  id                SERIAL PRIMARY KEY,
  source_page_id    INTEGER NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
  target_slug       TEXT NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_updated ON pages(updated_at);
CREATE INDEX IF NOT EXISTS idx_pages_search_vector ON pages USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_pages_status ON pages(status);
CREATE INDEX IF NOT EXISTS idx_pages_view_count ON pages(view_count);

CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);

CREATE INDEX IF NOT EXISTS idx_pc_page ON page_categories(page_id);
CREATE INDEX IF NOT EXISTS idx_pc_category ON page_categories(category_id);

CREATE INDEX IF NOT EXISTS idx_revisions_page_created ON page_revisions(page_id, created_at);
CREATE UNIQUE INDEX IF NOT EXISTS idx_revisions_page_version ON page_revisions(page_id, version);

CREATE INDEX IF NOT EXISTS idx_page_links_target ON page_links(target_slug);
CREATE INDEX IF NOT EXISTS idx_page_links_source ON page_links(source_page_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_page_links_source_target ON page_links(source_page_id, target_slug);

-- Search vector trigger
CREATE OR REPLACE FUNCTION pages_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := to_tsvector('english',
    COALESCE(NEW.title, '') || ' ' || COALESCE(NEW.content_plain, ''));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS pages_search_vector_trigger ON pages;
CREATE TRIGGER pages_search_vector_trigger
  BEFORE INSERT OR UPDATE OF title, content_plain ON pages
  FOR EACH ROW EXECUTE FUNCTION pages_search_vector_update();
