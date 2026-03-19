export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Parse headings from markdown content (h2-h4).
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
    // Strip HTML tags to get plain text
    const text = content.replace(/<[^>]*>/g, "").trim();

    if (!text) continue;

    // Check for existing id attribute
    const idMatch = attrs.match(/\bid="([^"]*)"/);
    const id =
      idMatch?.[1] ||
      `heading-${headingIndex}-${text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`;

    headings.push({ id, text, level });
    headingIndex++;
  }

  return headings;
}
