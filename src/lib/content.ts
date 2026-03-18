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
    SELECT p.*,
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

export async function getPageTimestamps(): Promise<Map<string, Date>> {
  const rows = await sql`SELECT slug, updated_at FROM pages`;
  const map = new Map<string, Date>();
  for (const r of rows) {
    map.set(r.slug as string, new Date(r.updated_at as string));
  }
  return map;
}
