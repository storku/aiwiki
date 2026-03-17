import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface WikiPage {
  title: string;
  slug: string;
  categories: string[];
  content: string;
}

export interface WikiPageMeta {
  title: string;
  slug: string;
  categories: string[];
}

export function getAllPages(): WikiPageMeta[] {
  const indexPath = path.join(CONTENT_DIR, "_index.json");
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"));
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

  return {
    title: data.title || slug,
    slug: data.slug || slug,
    categories: data.categories || [],
    content,
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
  return pages.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.categories.some((c) => c.toLowerCase().includes(q))
  );
}
