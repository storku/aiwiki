import { sql } from "./db";

const INTERNAL_CATEGORIES = [
  "Not_updated",
  "Not_Edited",
  "Updated",
  "Not_edited",
  "Pages_with_broken_file_links",
];

export interface WikiPage {
  title: string;
  slug: string;
  categories: string[];
  content: string;
  contentHtml: string | null;
  contentPlain: string | null;
  excerpt: string;
  readingTime: number;
  updatedAt: Date;
}

export interface WikiPageMeta {
  title: string;
  slug: string;
  categories: string[];
  excerpt?: string;
}

export function generateExcerpt(content: string, maxLen = 160): string {
  const text = content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/#{1,6}\s+.*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\|[^|]*\|/g, "")
    .replace(/&#\d+;/g, "")
    .replace(/\n+/g, " ")
    .trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s\S*$/, "") + "...";
}

export async function getAllPages(): Promise<WikiPageMeta[]> {
  const rows = await sql`
    SELECT p.id, p.slug, p.title, p.excerpt,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    GROUP BY p.id
    ORDER BY p.title
  `;
  return rows.map((r) => ({
    slug: r.slug as string,
    title: r.title as string,
    categories: (r.categories as string[]) || [],
    excerpt: r.excerpt as string,
  }));
}

export async function getPageBySlug(slug: string): Promise<WikiPage | null> {
  const rows = await sql`
    SELECT p.*, p.content_html, p.content_plain,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.slug = ${slug}
    GROUP BY p.id
  `;

  if (rows.length === 0) return null;

  const row = rows[0];
  return {
    title: row.title as string,
    slug: row.slug as string,
    categories: (row.categories as string[]) || [],
    content: row.content as string,
    contentHtml: (row.content_html as string) || null,
    contentPlain: (row.content_plain as string) || null,
    excerpt: row.excerpt as string,
    readingTime: row.reading_time as number,
    updatedAt: new Date(row.updated_at as string),
  };
}

export async function getAllSlugs(): Promise<string[]> {
  const rows = await sql`SELECT slug FROM pages ORDER BY slug`;
  return rows.map((r) => r.slug as string);
}

export async function getAllCategories(): Promise<{ name: string; count: number }[]> {
  const rows = await sql`
    SELECT c.name, COUNT(pc.page_id) as count
    FROM categories c
    JOIN page_categories pc ON pc.category_id = c.id
    WHERE c.name NOT IN (${INTERNAL_CATEGORIES[0]}, ${INTERNAL_CATEGORIES[1]}, ${INTERNAL_CATEGORIES[2]}, ${INTERNAL_CATEGORIES[3]}, ${INTERNAL_CATEGORIES[4]})
    GROUP BY c.id
    ORDER BY count DESC
  `;
  return rows.map((r) => ({
    name: r.name as string,
    count: Number(r.count),
  }));
}

export async function searchPages(query: string): Promise<WikiPageMeta[]> {
  const q = `%${query}%`;
  const rows = await sql`
    SELECT DISTINCT p.slug, p.title, p.excerpt,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.title ILIKE ${q}
       OR EXISTS (
         SELECT 1 FROM page_categories pc2
         JOIN categories c2 ON c2.id = pc2.category_id
         WHERE pc2.page_id = p.id AND c2.name ILIKE ${q}
       )
    GROUP BY p.id
    LIMIT 100
  `;
  return rows.map((r) => ({
    slug: r.slug as string,
    title: r.title as string,
    categories: (r.categories as string[]) || [],
    excerpt: r.excerpt as string,
  }));
}

/**
 * Full-text search using PostgreSQL tsvector.
 * Returns pages matching the query with headline snippets.
 */
export async function fullTextSearch(
  query: string,
  limit = 30
): Promise<
  Array<{
    slug: string;
    title: string;
    excerpt: string;
    headline: string;
    rank: number;
    categories: string[];
  }>
> {
  // Convert user query to tsquery: split words and join with &
  const words = query
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter((w) => w.length > 0);

  if (words.length === 0) return [];

  const tsQuery = words.join(" & ");

  const rows = await sql`
    SELECT p.slug, p.title, p.excerpt,
           ts_headline('english', COALESCE(p.content_plain, ''), to_tsquery('english', ${tsQuery}),
             'StartSel=<mark>, StopSel=</mark>, MaxWords=40, MinWords=20, MaxFragments=2') as headline,
           ts_rank(p.search_vector, to_tsquery('english', ${tsQuery})) as rank,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.search_vector @@ to_tsquery('english', ${tsQuery})
    GROUP BY p.id
    ORDER BY rank DESC
    LIMIT ${limit}
  `;

  return rows.map((r) => ({
    slug: r.slug as string,
    title: r.title as string,
    excerpt: r.excerpt as string,
    headline: r.headline as string,
    rank: Number(r.rank),
    categories: (r.categories as string[]) || [],
  }));
}

/**
 * Get pages that link to the given slug (backlinks).
 */
export async function getBacklinks(
  slug: string
): Promise<Array<{ slug: string; title: string }>> {
  const rows = await sql`
    SELECT p.slug, p.title
    FROM page_links pl
    JOIN pages p ON p.id = pl.source_page_id
    WHERE pl.target_slug = ${slug}
    ORDER BY p.title
  `;
  return rows.map((r) => ({
    slug: r.slug as string,
    title: r.title as string,
  }));
}

export async function getRelatedPages(
  slug: string,
  categories: string[],
  limit = 6
): Promise<WikiPageMeta[]> {
  if (categories.length === 0) return [];

  const rows = await sql`
    WITH category_sizes AS (
      SELECT c.name, COUNT(pc.page_id) as size
      FROM categories c
      JOIN page_categories pc ON pc.category_id = c.id
      GROUP BY c.id
    ),
    scored AS (
      SELECT p.id, p.slug, p.title, p.excerpt,
             SUM(1.0 / ln(cs.size + 2)) as cat_score
      FROM pages p
      JOIN page_categories pc ON pc.page_id = p.id
      JOIN categories c ON c.id = pc.category_id
      JOIN category_sizes cs ON cs.name = c.name
      WHERE c.name = ANY(${categories})
        AND p.slug != ${slug}
      GROUP BY p.id
    )
    SELECT s.slug, s.title, s.excerpt, s.cat_score,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM scored s
    LEFT JOIN page_categories pc ON pc.page_id = s.id
    LEFT JOIN categories c ON c.id = pc.category_id
    GROUP BY s.id, s.slug, s.title, s.excerpt, s.cat_score
    ORDER BY s.cat_score DESC
    LIMIT ${limit}
  `;

  return rows.map((r) => ({
    slug: r.slug as string,
    title: r.title as string,
    categories: (r.categories as string[]) || [],
    excerpt: r.excerpt as string,
  }));
}

// ─── Revision History ────────────────────────────────────────────────

export interface PageRevision {
  id: number;
  version: number;
  summary: string | null;
  editorId: string | null;
  aiAssisted: boolean;
  createdAt: Date;
}

export interface PageRevisionFull extends PageRevision {
  content: string;
  contentTiptap: unknown | null;
}

/**
 * Get all revisions for a page (newest first), by slug.
 */
export async function getPageRevisions(slug: string): Promise<PageRevision[]> {
  const rows = await sql`
    SELECT r.id, r.version, r.summary, r.editor_id, r.ai_assisted, r.created_at
    FROM page_revisions r
    JOIN pages p ON p.id = r.page_id
    WHERE p.slug = ${slug}
    ORDER BY r.version DESC
  `;
  return rows.map((r) => ({
    id: r.id as number,
    version: r.version as number,
    summary: (r.summary as string) || null,
    editorId: (r.editor_id as string) || null,
    aiAssisted: r.ai_assisted as boolean,
    createdAt: new Date(r.created_at as string),
  }));
}

/**
 * Get a specific revision by slug and version number.
 */
export async function getRevisionByVersion(
  slug: string,
  version: number
): Promise<(PageRevisionFull & { pageTitle: string; pageSlug: string; currentVersion: number }) | null> {
  const rows = await sql`
    SELECT r.id, r.version, r.content, r.content_tiptap, r.summary,
           r.editor_id, r.ai_assisted, r.created_at,
           p.title as page_title, p.slug as page_slug, p.version as current_version
    FROM page_revisions r
    JOIN pages p ON p.id = r.page_id
    WHERE p.slug = ${slug} AND r.version = ${version}
  `;
  if (rows.length === 0) return null;
  const r = rows[0];
  return {
    id: r.id as number,
    version: r.version as number,
    content: r.content as string,
    contentTiptap: r.content_tiptap,
    summary: (r.summary as string) || null,
    editorId: (r.editor_id as string) || null,
    aiAssisted: r.ai_assisted as boolean,
    createdAt: new Date(r.created_at as string),
    pageTitle: r.page_title as string,
    pageSlug: r.page_slug as string,
    currentVersion: r.current_version as number,
  };
}

// ─── Users ───────────────────────────────────────────────────────────

export interface WikiUser {
  username: string;
  displayName: string;
  email: string | null;
  bio: string;
  avatarUrl: string | null;
  role: string;
  createdAt: Date;
  lastActive: Date;
}

/**
 * Get a user by username (public — never exposes is_bot).
 */
export async function getUserByUsername(
  username: string
): Promise<WikiUser | null> {
  const rows = await sql`
    SELECT username, display_name, email, bio, avatar_url, role, created_at, last_active
    FROM users
    WHERE username = ${username}
  `;
  if (rows.length === 0) return null;
  const r = rows[0];
  return {
    username: r.username as string,
    displayName: r.display_name as string,
    email: (r.email as string) || null,
    bio: r.bio as string,
    avatarUrl: (r.avatar_url as string) || null,
    role: r.role as string,
    createdAt: new Date(r.created_at as string),
    lastActive: new Date(r.last_active as string),
  };
}

/**
 * Get all users (public — never exposes is_bot).
 */
export async function getAllUsers(): Promise<WikiUser[]> {
  const rows = await sql`
    SELECT username, display_name, email, bio, avatar_url, role, created_at, last_active
    FROM users
    ORDER BY created_at
  `;
  return rows.map((r) => ({
    username: r.username as string,
    displayName: r.display_name as string,
    email: (r.email as string) || null,
    bio: r.bio as string,
    avatarUrl: (r.avatar_url as string) || null,
    role: r.role as string,
    createdAt: new Date(r.created_at as string),
    lastActive: new Date(r.last_active as string),
  }));
}

export async function getPageTimestamps(): Promise<Map<string, Date>> {
  const rows = await sql`SELECT slug, updated_at FROM pages`;
  const map = new Map<string, Date>();
  for (const r of rows) {
    map.set(r.slug as string, new Date(r.updated_at as string));
  }
  return map;
}
