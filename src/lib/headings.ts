export interface TocItem {
  id: string;
  text: string;
  level: number;
}

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
