ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email
  ON users(email)
  WHERE email IS NOT NULL;

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
  dismissed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_deletion_alerts_dismissed
  ON deletion_alerts (dismissed, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_deletion_alerts_page_slug
  ON deletion_alerts (page_slug);
