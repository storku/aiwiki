// Shared utility for computing derived article fields on save.
// Used by import scripts and future article editor to keep
// contentHtml, contentPlain, wordCount, readingTime, and links in sync.

import { contentToHtml } from "./html-utils";

/**
 * Compute derived fields from TipTap JSON content.
 * Call this on article create/update and store the results in the DB.
 */
export function computeArticleDerivedFields(content: unknown): {
  contentHtml: string;
  contentPlain: string;
  wordCount: number;
  readingTimeMinutes: number;
  outgoingLinkSlugs: string[];
} {
  const contentHtml = contentToHtml(content);
  const contentPlain = contentHtml
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = contentPlain.split(/\s+/).filter((w) => w.length > 0).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
  const outgoingLinkSlugs = extractWikilinkSlugs(content);

  return { contentHtml, contentPlain, wordCount, readingTimeMinutes, outgoingLinkSlugs };
}

/**
 * Traverse TipTap JSON to extract all wikilink target slugs.
 * Wikilinks have href like "/wiki/article-slug".
 */
function extractWikilinkSlugs(content: unknown): string[] {
  const slugs = new Set<string>();

  function traverse(node: unknown) {
    if (!node || typeof node !== "object") return;
    const n = node as Record<string, unknown>;

    if (Array.isArray(n.marks)) {
      for (const mark of n.marks) {
        if (
          mark &&
          typeof mark === "object" &&
          (mark as Record<string, unknown>).type === "wikilink"
        ) {
          const href = String(
            ((mark as Record<string, unknown>).attrs as Record<string, unknown>)?.href || ""
          );
          const match = href.match(/\/wiki\/([^"?#]+)/);
          if (match) slugs.add(match[1]);
        }
      }
    }

    if (Array.isArray(n.content)) {
      for (const child of n.content) traverse(child);
    }
  }

  traverse(content);
  return Array.from(slugs);
}
