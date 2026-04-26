import { cache } from "react";
import { sql } from "./db";
import { sanitizeSearchHeadline } from "./html-sanitize";

const INTERNAL_CATEGORIES = [
  "Not_updated",
  "Not_Edited",
  "Updated",
  "Not_edited",
  "Pages_with_broken_file_links",
];

// DB row extraction helpers
function str(v: unknown): string { return (v != null ? String(v) : ""); }
function num(v: unknown): number { return Number(v) || 0; }
function arr(v: unknown): string[] { return (v as string[]) || []; }
function ts(v: unknown): Date { return new Date(v as string); }

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

export const getAllPages = cache(async function getAllPages(): Promise<WikiPageMeta[]> {
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
    slug: str(r.slug),
    title: str(r.title),
    categories: arr(r.categories),
    excerpt: str(r.excerpt),
  }));
});

export const getPageBySlug = cache(async function getPageBySlug(slug: string): Promise<WikiPage | null> {
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

  const r = rows[0];
  return {
    title: str(r.title),
    slug: str(r.slug),
    categories: arr(r.categories),
    content: str(r.content),
    contentHtml: (r.content_html as string) || null,
    contentPlain: (r.content_plain as string) || null,
    excerpt: str(r.excerpt),
    readingTime: num(r.reading_time),
    updatedAt: ts(r.updated_at),
  };
});

export const resolvePageBySlug = cache(async function resolvePageBySlug(slug: string): Promise<{
  page: WikiPage | null;
  canonicalSlug: string | null;
}> {
  const page = await getPageBySlug(slug);
  if (page) {
    return { page, canonicalSlug: page.slug };
  }

  const candidates = new Set<string>();

  if (slug.includes("-")) {
    candidates.add(slug.replace(/-/g, "_"));
  }

  if (slug.includes("_")) {
    candidates.add(slug.replace(/_/g, "."));
  }

  for (const candidate of candidates) {
    if (!candidate || candidate === slug) continue;
    const altPage = await getPageBySlug(candidate);
    if (altPage) {
      return { page: altPage, canonicalSlug: altPage.slug };
    }
  }

  return { page: null, canonicalSlug: null };
});

export async function getAllSlugs(): Promise<string[]> {
  const rows = await sql`SELECT slug FROM pages ORDER BY slug`;
  return rows.map((r) => str(r.slug));
}

export const getAllCategories = cache(async function getAllCategories(): Promise<{ name: string; count: number }[]> {
  const rows = await sql`
    SELECT c.name, COUNT(pc.page_id) as count
    FROM categories c
    JOIN page_categories pc ON pc.category_id = c.id
    WHERE c.name NOT IN (${INTERNAL_CATEGORIES[0]}, ${INTERNAL_CATEGORIES[1]}, ${INTERNAL_CATEGORIES[2]}, ${INTERNAL_CATEGORIES[3]}, ${INTERNAL_CATEGORIES[4]})
    GROUP BY c.id
    ORDER BY count DESC
  `;
  return rows.map((r) => ({
    name: str(r.name),
    count: num(r.count),
  }));
});

/**
 * Lightweight query for hover previews. Returns only metadata, not full content.
 */
export async function getPagePreview(slug: string): Promise<{
  title: string;
  excerpt: string;
  categories: string[];
  readingTime: number;
} | null> {
  const rows = await sql`
    SELECT p.title, p.excerpt, p.reading_time,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.slug = ${slug}
    GROUP BY p.id
  `;
  if (rows.length === 0) return null;
  const r = rows[0];
  return {
    title: str(r.title),
    excerpt: str(r.excerpt),
    categories: arr(r.categories).slice(0, 3),
    readingTime: num(r.reading_time),
  };
}

/**
 * Get total page count + recently updated pages in a single query.
 */
export async function getRecentPagesWithCount(
  limit = 10
): Promise<{
  totalPages: number;
  recentPages: Array<{ slug: string; title: string; updatedAt: Date; excerpt: string }>;
}> {
  const rows = await sql`
    SELECT slug, title, updated_at, excerpt, COUNT(*) OVER() as total_count
    FROM pages
    ORDER BY updated_at DESC
    LIMIT ${limit}
  `;
  return {
    totalPages: rows.length > 0 ? num(rows[0].total_count) : 0,
    recentPages: rows.map((r) => ({
      slug: str(r.slug),
      title: str(r.title),
      updatedAt: ts(r.updated_at),
      excerpt: str(r.excerpt),
    })),
  };
}

/**
 * Get specific pages by their slugs (for homepage topic sections).
 */
export async function getPagesBySlugs(slugs: string[]): Promise<WikiPageMeta[]> {
  if (slugs.length === 0) return [];
  const rows = await sql`
    SELECT p.slug, p.title, p.excerpt,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.slug = ANY(${slugs})
    GROUP BY p.id
  `;
  return rows.map((r) => ({
    slug: str(r.slug),
    title: str(r.title),
    categories: arr(r.categories),
    excerpt: str(r.excerpt),
  }));
}

/**
 * Get pages belonging to a specific category (avoids fetching ALL pages).
 */
export async function getPagesByCategory(categoryName: string): Promise<WikiPageMeta[]> {
  const rows = await sql`
    SELECT p.slug, p.title, p.excerpt,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    JOIN page_categories pc ON pc.page_id = p.id
    JOIN categories c ON c.id = pc.category_id
    WHERE p.id IN (
      SELECT pc2.page_id
      FROM page_categories pc2
      JOIN categories c2 ON c2.id = pc2.category_id
      WHERE c2.name = ${categoryName}
    )
    GROUP BY p.id
    ORDER BY p.title
  `;
  return rows.map((r) => ({
    slug: str(r.slug),
    title: str(r.title),
    categories: arr(r.categories),
    excerpt: str(r.excerpt),
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
    slug: str(r.slug),
    title: str(r.title),
    categories: arr(r.categories),
    excerpt: str(r.excerpt),
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
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return [];

  const slugQueryUnderscore = normalizedQuery.toLowerCase().replace(/\s+/g, "_");
  const slugQueryHyphen = normalizedQuery.toLowerCase().replace(/\s+/g, "-");
  const titleLike = `%${normalizedQuery}%`;
  const slugLikeUnderscore = `%${slugQueryUnderscore}%`;
  const slugLikeHyphen = `%${slugQueryHyphen}%`;

  const rows = await sql`
    SELECT p.slug, p.title, p.excerpt,
           COALESCE(
             NULLIF(
               ts_headline(
                 'english',
                 COALESCE(p.content_plain, ''),
                 plainto_tsquery('english', ${normalizedQuery}),
                 'StartSel=<mark>, StopSel=</mark>, MaxWords=40, MinWords=20, MaxFragments=2'
               ),
               ''
             ),
             p.excerpt
           ) as headline,
           (
             ts_rank(p.search_vector, plainto_tsquery('english', ${normalizedQuery}))
             + CASE WHEN lower(p.title) = lower(${normalizedQuery}) THEN 10 ELSE 0 END
             + CASE
                 WHEN lower(p.slug) = lower(${normalizedQuery})
                   OR lower(p.slug) = ${slugQueryUnderscore}
                   OR lower(p.slug) = ${slugQueryHyphen}
                 THEN 9
                 ELSE 0
               END
             + CASE WHEN p.title ILIKE ${titleLike} THEN 2 ELSE 0 END
             + CASE
                 WHEN p.slug ILIKE ${slugLikeUnderscore}
                   OR p.slug ILIKE ${slugLikeHyphen}
                 THEN 1.5
                 ELSE 0
               END
           ) as rank,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.search_vector @@ plainto_tsquery('english', ${normalizedQuery})
       OR p.title ILIKE ${titleLike}
       OR p.slug ILIKE ${slugLikeUnderscore}
       OR p.slug ILIKE ${slugLikeHyphen}
    GROUP BY p.id
    ORDER BY rank DESC
    LIMIT ${limit}
  `;

  return rows.map((r) => ({
    slug: str(r.slug),
    title: str(r.title),
    excerpt: str(r.excerpt),
    headline: sanitizeSearchHeadline(str(r.headline)),
    rank: num(r.rank),
    categories: arr(r.categories),
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
    slug: str(r.slug),
    title: str(r.title),
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
    slug: str(r.slug),
    title: str(r.title),
    categories: arr(r.categories),
    excerpt: str(r.excerpt),
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
    id: num(r.id),
    version: num(r.version),
    summary: (r.summary as string) || null,
    editorId: (r.editor_id as string) || null,
    aiAssisted: r.ai_assisted === true,
    createdAt: ts(r.created_at),
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
    id: num(r.id),
    version: num(r.version),
    content: str(r.content),
    contentTiptap: r.content_tiptap,
    summary: (r.summary as string) || null,
    editorId: (r.editor_id as string) || null,
    aiAssisted: r.ai_assisted === true,
    createdAt: ts(r.created_at),
    pageTitle: str(r.page_title),
    pageSlug: str(r.page_slug),
    currentVersion: num(r.current_version),
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

function mapUser(r: Record<string, unknown>): WikiUser {
  return {
    username: str(r.username),
    displayName: str(r.display_name),
    email: (r.email as string) || null,
    bio: str(r.bio),
    avatarUrl: (r.avatar_url as string) || null,
    role: str(r.role),
    createdAt: ts(r.created_at),
    lastActive: ts(r.last_active),
  };
}

/**
 * Get a user by username (public).
 */
export async function getUserByUsername(username: string): Promise<WikiUser | null> {
  const rows = await sql`
    SELECT username, display_name, email, bio, avatar_url, role, created_at, last_active
    FROM users
    WHERE username = ${username}
  `;
  if (rows.length === 0) return null;
  return mapUser(rows[0]);
}

/**
 * Get all users (public).
 */
export async function getAllUsers(): Promise<WikiUser[]> {
  const rows = await sql`
    SELECT username, display_name, email, bio, avatar_url, role, created_at, last_active
    FROM users
    ORDER BY created_at
  `;
  return rows.map(mapUser);
}

/**
 * Get a random selection of pages.
 */
export async function getRandomPages(
  limit = 5
): Promise<Array<{ slug: string; title: string; excerpt: string }>> {
  const countRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM pages
    WHERE excerpt IS NOT NULL AND excerpt != ''
  `;
  const count = num(countRows[0]?.count);
  if (count === 0) return [];

  const maxOffset = Math.max(count - limit, 0);
  const offset = Math.floor(Math.random() * (maxOffset + 1));

  const rows = await sql`
    SELECT slug, title, excerpt
    FROM pages
    WHERE excerpt IS NOT NULL AND excerpt != ''
    ORDER BY id
    OFFSET ${offset}
    LIMIT ${limit}
  `;
  return rows.map((r) => ({
    slug: str(r.slug),
    title: str(r.title),
    excerpt: str(r.excerpt),
  }));
}

/**
 * Lightweight sitemap query: returns only slug + updated_at for all pages.
 */
export async function getSitemapPages(): Promise<Array<{ slug: string; updatedAt: Date }>> {
  const rows = await sql`SELECT slug, updated_at FROM pages ORDER BY slug`;
  return rows.map((r) => ({
    slug: str(r.slug),
    updatedAt: ts(r.updated_at),
  }));
}

/**
 * Lightweight search index: returns title, slug, excerpt, and categories as a
 * pre-joined string. Uses a scalar subquery instead of GROUP BY + 2 JOINs,
 * reducing query plan complexity for 2000+ pages.
 */
export async function getSearchIndex(): Promise<Array<{ title: string; slug: string; excerpt: string; categories: string }>> {
  const rows = await sql`
    SELECT p.title, p.slug, p.excerpt,
           COALESCE((
             SELECT string_agg(c.name, ', ' ORDER BY c.name)
             FROM page_categories pc
             JOIN categories c ON c.id = pc.category_id
             WHERE pc.page_id = p.id
           ), '') as categories
    FROM pages p
    ORDER BY p.title
  `;
  return rows.map((r) => ({
    title: str(r.title),
    slug: str(r.slug),
    excerpt: str(r.excerpt),
    categories: str(r.categories),
  }));
}
