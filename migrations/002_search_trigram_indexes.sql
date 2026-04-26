CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX IF NOT EXISTS idx_pages_title_trgm
  ON pages USING GIN(title gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_pages_slug_trgm
  ON pages USING GIN(slug gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_categories_name_trgm
  ON categories USING GIN(name gin_trgm_ops);
