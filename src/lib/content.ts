import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

const INTERNAL_CATEGORIES = new Set([
  "Not_updated",
  "Not_Edited",
  "Updated",
  "Not_edited",
  "Pages_with_broken_file_links",
]);

export interface WikiPage {
  title: string;
  slug: string;
  categories: string[];
  content: string;
  excerpt: string;
  readingTime: number;
}

export interface WikiPageMeta {
  title: string;
  slug: string;
  categories: string[];
  excerpt?: string;
}

function filterCategories(cats: string[]): string[] {
  return cats.filter((c) => !INTERNAL_CATEGORIES.has(c));
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

function calcReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

let cachedPages: WikiPageMeta[] | null = null;

export function getAllPages(): WikiPageMeta[] {
  if (cachedPages) return cachedPages;
  const indexPath = path.join(CONTENT_DIR, "_index.json");
  if (fs.existsSync(indexPath)) {
    const raw = JSON.parse(fs.readFileSync(indexPath, "utf-8")) as {
      title: string;
      slug: string;
      categories: string[];
    }[];
    cachedPages = raw.map((p) => ({
      ...p,
      categories: filterCategories(p.categories),
    }));
    return cachedPages;
  }
  return [];
}

export function getPageBySlug(slug: string): WikiPage | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const categories = filterCategories(data.categories || []);

  return {
    title: data.title || slug,
    slug: data.slug || slug,
    categories,
    content,
    excerpt: generateExcerpt(content),
    readingTime: calcReadingTime(content),
  };
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".md") && f !== "_index.md")
    .map((f) => f.replace(".md", ""));
}

export function getAllCategories(): { name: string; count: number }[] {
  const pages = getAllPages();
  const catMap = new Map<string, number>();

  for (const page of pages) {
    for (const cat of page.categories) {
      catMap.set(cat, (catMap.get(cat) || 0) + 1);
    }
  }

  return Array.from(catMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function searchPages(query: string): WikiPageMeta[] {
  const pages = getAllPages();
  const q = query.toLowerCase();
  return pages
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    )
    .slice(0, 100);
}

export function getRelatedPages(
  slug: string,
  categories: string[],
  limit = 6
): WikiPageMeta[] {
  const pages = getAllPages();
  const allCats = getAllCategories();
  const catSizeMap = new Map(allCats.map((c) => [c.name, c.count]));
  const catSet = new Set(categories);
  const titleTokens = new Set(
    slug.split("_").filter((t) => t.length > 2).map((t) => t.toLowerCase())
  );

  return pages
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      // Category overlap with IDF weighting (rarer categories = stronger signal)
      for (const c of p.categories) {
        if (catSet.has(c)) {
          score += 1 / Math.log((catSizeMap.get(c) || 1) + 1);
        }
      }
      // Title token overlap
      const pTokens = p.slug.split("_").filter((t) => t.length > 2).map((t) => t.toLowerCase());
      const overlap = pTokens.filter((t) => titleTokens.has(t)).length;
      score += overlap * 0.5;
      return { page: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.page);
}
