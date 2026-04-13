export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Generate a stable heading ID from text and index.
 * Shared by all heading-related functions to ensure consistency.
 */
export function generateHeadingId(text: string, index: number): string {
  return `heading-${index}-${text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

/**
 * Parse headings from markdown content (h2-h4).
 * Uses the same ID scheme as rehypeSlug (github-slugger style) for consistency
 * with the markdown rendering path.
 */
export function parseHeadings(content: string): TocItem[] {
  const headings: TocItem[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_`]/g, "")
        .replace(/&#\d+;/g, "")
        .trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
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

  const regex = /<(h[2-4])(\s[^>]*)?>(([\s\S]*?))<\/\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const [, tag, attrs = "", content] = match;
    const level = parseInt(tag.charAt(1));
    const text = content.replace(/<[^>]*>/g, "").trim();

    if (!text) continue;

    // Use existing id attribute if present, otherwise generate one
    const idMatch = attrs.match(/\bid="([^"]*)"/);
    const id = idMatch?.[1] || generateHeadingId(text, headingIndex);

    headings.push({ id, text, level });
    headingIndex++;
  }

  return headings;
}
