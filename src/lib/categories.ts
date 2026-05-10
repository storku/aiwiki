export interface CategoryCount {
  name: string;
  count: number;
}

const INTERNAL_CATEGORY_KEYS = new Set([
  "not updated",
  "not edited",
  "updated",
  "pages with broken file links",
]);

const CATEGORY_NAME_OVERRIDES: Record<string, string> = {
  "ai agents": "AI Agents",
  "ai companies": "AI Companies",
  "ai in education": "AI in Education",
  "ai safety": "AI Safety",
  "ai watermarking": "AI Watermarking",
  "artificial intelligence": "Artificial Intelligence",
  "large language models": "Large Language Models",
  "machine learning": "Machine Learning",
  "natural language processing": "Natural Language Processing",
  "open source ai": "Open Source AI",
};

export function categoryKey(name: string): string {
  return name
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function canonicalCategoryName(name: string): string {
  const cleaned = name.replace(/_/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  return CATEGORY_NAME_OVERRIDES[categoryKey(cleaned)] || cleaned;
}

export function isInternalCategory(name: string): boolean {
  return INTERNAL_CATEGORY_KEYS.has(categoryKey(name));
}

export function dedupeCategoryNames(categories: string[]): string[] {
  const seen = new Set<string>();
  const canonical: string[] = [];

  for (const category of categories) {
    const name = canonicalCategoryName(category);
    if (!name || isInternalCategory(name)) continue;

    const key = categoryKey(name);
    if (seen.has(key)) continue;

    seen.add(key);
    canonical.push(name);
  }

  return canonical;
}

export function groupCategoryCounts(categories: CategoryCount[]): CategoryCount[] {
  const grouped = new Map<string, CategoryCount>();

  for (const category of categories) {
    const name = canonicalCategoryName(category.name);
    if (!name || isInternalCategory(name)) continue;

    const key = categoryKey(name);
    const existing = grouped.get(key);
    if (existing) {
      existing.count += category.count;
    } else {
      grouped.set(key, { name, count: category.count });
    }
  }

  return Array.from(grouped.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}
