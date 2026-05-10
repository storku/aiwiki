// Server-safe HTML utility functions for AI Wiki

/**
 * Convert Tiptap JSON content to HTML string
 * Handles both Tiptap JSON objects and raw HTML strings
 */
export function contentToHtml(content: unknown): string {
  if (typeof content === "string") return content;
  if (!content) return "";
  if (typeof content === "object" && content !== null) return tiptapJsonToHtml(content);
  return String(content);
}

function tiptapJsonToHtml(json: unknown): string {
  if (!json || typeof json !== "object") return "";
  const doc = json as Record<string, unknown>;
  if (doc.type !== "doc" || !Array.isArray(doc.content)) {
    return typeof json === "string" ? json : JSON.stringify(json);
  }
  return doc.content.map(nodeToHtml).join("");
}

function nodeToHtml(node: unknown): string {
  if (!node || typeof node !== "object") return "";

  const n = node as Record<string, unknown>;
  const type = n.type as string;
  const content = Array.isArray(n.content) ? n.content.map(nodeToHtml).join("") : "";
  const attrs = n.attrs as Record<string, unknown> | undefined;

  switch (type) {
    case "paragraph":
      return `<p>${content}</p>`;
    case "heading": {
      const level = attrs?.level || 2;
      return `<h${level}>${content}</h${level}>`;
    }
    case "text": {
      let text = escapeHtml(String(n.text || ""));
      const marks = n.marks as Array<{ type: string; attrs?: Record<string, unknown> }> | undefined;
      if (marks) {
        for (const mark of marks) {
          switch (mark.type) {
            case "bold":
              text = `<strong>${text}</strong>`;
              break;
            case "italic":
              text = `<em>${text}</em>`;
              break;
            case "code":
              text = `<code>${text}</code>`;
              break;
            case "link": {
              const rawHref = String(mark.attrs?.href || "");
              if (/^(javascript|data|vbscript)\s*:/i.test(rawHref.trim())) break;
              const href = escapeHtml(rawHref);
              const isExternal = href.startsWith("http") && !href.includes("aiwiki.ai");
              const relAttr = isExternal ? ' rel="noopener noreferrer" target="_blank"' : "";
              text = `<a href="${href}"${relAttr}>${text}</a>`;
              break;
            }
            case "wikilink": {
              const rawHref = String(mark.attrs?.href || "");
              if (/^(javascript|data|vbscript)\s*:/i.test(rawHref.trim())) break;
              const href = escapeHtml(rawHref);
              text = `<a href="${href}" data-type="wikilink" class="wikilink">${text}</a>`;
              break;
            }
          }
        }
      }
      return text;
    }
    case "bulletList":
      return `<ul>${content}</ul>`;
    case "orderedList":
      return `<ol>${content}</ol>`;
    case "listItem":
      return `<li>${content}</li>`;
    case "codeBlock":
      return `<pre><code>${content}</code></pre>`;
    case "blockquote":
      return `<blockquote>${content}</blockquote>`;
    case "horizontalRule":
      return "<hr />";
    case "hardBreak":
      return "<br />";
    case "image": {
      const src = String(attrs?.src || "");
      const caption = String(attrs?.caption || "");
      const alt = String(attrs?.alt || "") || caption || String(attrs?.title || "") || altFromSrc(src);
      const imgTag = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`;
      if (caption) {
        return `<figure>${imgTag}<figcaption>${escapeHtml(caption)}</figcaption></figure>`;
      }
      return imgTag;
    }
    case "table": {
      const rows = Array.isArray(n.content) ? n.content : [];
      const firstRow = rows[0] as Record<string, unknown> | undefined;
      const firstRowCells = Array.isArray(firstRow?.content) ? firstRow.content : [];
      const hasHeaderRow = firstRowCells.some(
        (cell: unknown) => (cell as Record<string, unknown>)?.type === "tableHeader"
      );
      if (hasHeaderRow && rows.length > 1) {
        const headHtml = nodeToHtml(firstRow);
        const bodyHtml = rows.slice(1).map(nodeToHtml).join("");
        return `<table><thead>${headHtml}</thead><tbody>${bodyHtml}</tbody></table>`;
      }
      return `<table>${content}</table>`;
    }
    case "tableRow":
      return `<tr>${content}</tr>`;
    case "tableCell":
      return `<td>${content}</td>`;
    case "tableHeader":
      return `<th scope="col">${content}</th>`;
    default:
      return content;
  }
}

function altFromSrc(src: string): string {
  try {
    const filename = src.split("/").pop()?.split("?")[0] || "";
    const name = filename.replace(/\.[^.]+$/, "");
    return name.replace(/[-_]+/g, " ").trim();
  } catch {
    return "";
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

import { generateHeadingId } from "./headings";

const ANCHOR_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

/**
 * Add IDs to headings in HTML content (server-safe, no DOM required).
 * Also adds anchor buttons for heading links.
 */
export function addHeadingIds(html: string): string {
  let headingIndex = 0;
  const seen = new Map<string, number>();

  return html.replace(
    /<(h[1-4])(\s[^>]*)?>([\s\S]*?)<\/\1>/gi,
    (match, tag, attrs = "", content) => {
      const idMatch = attrs.match(/\bid="([^"]*)"/);
      const text = content.replace(/<[^>]*>/g, "").trim();
      const baseId = idMatch?.[1] || generateHeadingId(text, headingIndex);
      const seenCount = seen.get(baseId) || 0;
      const id = seenCount === 0 ? baseId : `${baseId}-${seenCount}`;
      seen.set(baseId, seenCount + 1);

      headingIndex++;

      const anchorHtml = `<button class="heading-anchor" data-heading-id="${id}" title="Copy link to this section">${ANCHOR_SVG}</button>`;

      const existingClassMatch = attrs.match(/\bclass="([^"]*)"/);
      let newAttrs = attrs;

      if (existingClassMatch) {
        if (!existingClassMatch[1].includes("group")) {
          newAttrs = newAttrs.replace(/\bclass="([^"]*)"/, `class="$1 group relative"`);
        }
      } else {
        newAttrs = `${newAttrs} class="group relative"`;
      }

      if (idMatch) {
        newAttrs = newAttrs.replace(/\bid="([^"]*)"/, `id="${id}"`);
      } else {
        newAttrs = `${newAttrs} id="${id}"`;
      }

      return `<${tag}${newAttrs}>${content}${anchorHtml}</${tag}>`;
    }
  );
}

/**
 * Convert reference text (from markdown) to HTML, handling markdown links and bare URLs.
 */
export function refTextToHtml(text: string): string {
  // Convert markdown links [text](url) to HTML
  let html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText: string, url: string) => {
      const isInternal = url.startsWith("/");
      const attrs = isInternal ? "" : ' target="_blank" rel="noopener noreferrer"';
      return `<a href="${url}"${attrs}>${linkText}</a>`;
    }
  );

  // Convert bare URLs (not already inside href="...") to clickable links
  html = html.replace(
    /(?<![="'/])(https?:\/\/[^\s<>")\]]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return html;
}

/**
 * Parse references from markdown content's "## References" section.
 */
function parseMarkdownReferences(
  markdown: string
): Array<{ num: number; html: string }> {
  const refsMatch = markdown.match(/##\s*References\s*\n+([\s\S]*?)(?=\n##\s|$)/);
  if (!refsMatch) return [];

  const lines = refsMatch[1].trim().split("\n");
  const refs: Array<{ num: number; html: string }> = [];

  for (const line of lines) {
    // Support both "1. text" and "[1] text" formats
    const match = line.trim().match(/^(?:(\d+)\.\s+|\[(\d+)\]\s+)(.*)/);
    if (match) {
      refs.push({
        num: parseInt(match[1] || match[2]),
        html: refTextToHtml(match[3]),
      });
    }
  }

  return refs;
}

/**
 * Fix references in pre-rendered HTML:
 * - Convert plain <sup>[N]</sup> to clickable citation links
 * - Populate empty References section from markdown content
 */
export function fixReferences(html: string, markdown: string): string {
  if (!html || !markdown) return html;

  // Make inline citations clickable
  let fixed = html.replace(
    /<sup>\s*\[(\d+)\]\s*<\/sup>/g,
    (_, num) =>
      `<sup><a href="#cite_note-${num}" class="cite-ref">[${num}]</a></sup>`
  );

  // Parse references from markdown
  const refs = parseMarkdownReferences(markdown);
  if (refs.length === 0) return fixed;

  // Build reference list HTML
  const items = refs
    .map((ref) => `<li id="cite_note-${ref.num}">${ref.html}</li>`)
    .join("");
  const refListHtml = `<ol class="references-list">${items}</ol>`;

  // Replace empty References section
  fixed = fixed.replace(
    /(<h2[^>]*>(?:<span[^>]*>)?References(?:<\/span>)?[^<]*<\/h2>\s*)<div>\s*<\/div>/i,
    `$1${refListHtml}`
  );

  return fixed;
}

/**
 * Optimize article images for performance:
 * - First image: fetchpriority="high" decoding="async"
 * - Others: loading="lazy" decoding="async"
 */
export function optimizeArticleImages(html: string): string {
  let imageIndex = 0;

  return html.replace(/<img(\s[^>]*)?\/?>/gi, (match, attrs = "") => {
    if (/\b(loading|fetchpriority)=/.test(attrs)) {
      imageIndex++;
      return match;
    }

    const sizesAttr = /\bsizes=/.test(attrs)
      ? ""
      : ' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px"';

    const dimensionAttrs =
      /\bwidth=/.test(attrs) || /\bheight=/.test(attrs) ? "" : ' width="800" height="450"';

    if (imageIndex === 0) {
      imageIndex++;
      return `<img${attrs} fetchpriority="high" decoding="async"${sizesAttr}${dimensionAttrs} />`;
    }

    imageIndex++;
    return `<img${attrs} loading="lazy" decoding="async"${sizesAttr}${dimensionAttrs} />`;
  });
}
