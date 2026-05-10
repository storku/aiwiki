export interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueHeadingId(baseId: string, seen: Map<string, number>): string {
  const fallback = baseId || "section";
  const count = seen.get(fallback) || 0;
  seen.set(fallback, count + 1);
  return count === 0 ? fallback : `${fallback}-${count}`;
}

/**
 * Generate a stable heading ID from text.
 * Shared by all heading-related functions to ensure consistency.
 */
export function generateHeadingId(text: string, index: number): string {
  return slugifyHeading(text) || `section-${index}`;
}

/**
 * Parse headings from markdown content (h2-h4).
 * Uses the same ID scheme as rehypeSlug (github-slugger style) for consistency
 * with the markdown rendering path.
 */
export function parseHeadings(content: string): TocItem[] {
  const headings: TocItem[] = [];
  const lines = content.split("\n");
  const seen = new Map<string, number>();
  for (const line of lines) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_`]/g, "")
        .replace(/&#\d+;/g, "")
        .trim();
      const id = uniqueHeadingId(slugifyHeading(text), seen);
      if (text && id) {
        headings.push({ id, text, level });
      }
    }
  }
  return headings;
}

/**
 * Parse headings from pre-rendered HTML content (h2-h4).
 * Used when contentHtml is available instead of markdown.
 */
export function parseHeadingsFromHtml(html: string): TocItem[] {
  const headings: TocItem[] = [];
  let headingIndex = 0;
  const seen = new Map<string, number>();

  const regex = /<(h[2-4])(\s[^>]*)?>(([\s\S]*?))<\/\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const [, tag, attrs = "", content] = match;
    const level = parseInt(tag.charAt(1));
    const text = content.replace(/<[^>]*>/g, "").trim();

    if (!text) continue;

    // Use existing id attribute if present, otherwise generate one
    const idMatch = attrs.match(/\bid="([^"]*)"/);
    const id = uniqueHeadingId(idMatch?.[1] || generateHeadingId(text, headingIndex), seen);

    headings.push({ id, text, level });
    headingIndex++;
  }

  return headings;
}
