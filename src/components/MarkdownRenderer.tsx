"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import WikiLink from "./WikiLink";
import { refTextToHtml } from "@/lib/html-utils";

type BrokenInfoboxRow =
  | { kind: "single"; content: string }
  | { kind: "pair"; label: string; value: string };

function normalizeBrokenInfobox(content: string): string {
  const lines = content.split("\n");
  const scanLimit = Math.min(lines.length - 1, 40);

  for (let start = 0; start < scanLimit; start++) {
    if (!lines[start]?.trimStart().startsWith("|")) continue;
    if (lines[start + 1]?.trim() !== "| --- |") continue;

    const parsed = parseBrokenInfobox(lines, start);
    if (!parsed) continue;

    return [
      ...lines.slice(0, start),
      ...parsed.lines,
      ...lines.slice(parsed.end),
    ].join("\n");
  }

  return content;
}

function parseBrokenInfobox(
  lines: string[],
  start: number
): { lines: string[]; end: number } | null {
  const title = parseSingleCell(lines[start] || "");
  if (!title) return null;

  const rows: BrokenInfoboxRow[] = [];
  let sawPairRow = false;
  let i = start + 2;

  while (i < lines.length) {
    if (!lines[i]?.trim()) {
      const nextNonEmpty = findNextNonEmptyLine(lines, i + 1);
      if (nextNonEmpty === -1 || !lines[nextNonEmpty].trimStart().startsWith("|")) {
        break;
      }
      i++;
      continue;
    }

    if (!lines[i].trimStart().startsWith("|")) break;

    const rawRowLines = [lines[i]];
    while (!isClosedInfoboxRow(rawRowLines)) {
      i++;
      if (i >= lines.length) break;
      rawRowLines.push(lines[i]);
    }

    const row = parseBrokenInfoboxRow(rawRowLines);
    if (!row) return null;

    if (row.kind === "pair") {
      sawPairRow = true;
    }
    rows.push(row);
    i++;
  }

  if (!sawPairRow || rows.length === 0) return null;

  const normalizedLines = [
    `| ${title} | |`,
    "| --- | --- |",
    ...rows.map((row) => {
      if (row.kind === "single") {
        return `| ${row.content} | |`;
      }

      const label = /^\*\*.*\*\*$/.test(row.label) ? row.label : `**${row.label}**`;
      return `| ${label} | ${row.value} |`;
    }),
  ];

  return { lines: normalizedLines, end: i };
}

function parseBrokenInfoboxRow(rowLines: string[]): BrokenInfoboxRow | null {
  const firstLine = rowLines[0]?.trim();
  if (!firstLine) return null;

  const withoutLeadingPipe = firstLine.replace(/^\|\s*/, "");
  const trimmedFirstLine = withoutLeadingPipe.trimEnd();
  const separatorIndex = trimmedFirstLine.indexOf("|");

  if (separatorIndex === -1 || separatorIndex === trimmedFirstLine.length - 1) {
    const content = normalizeInfoboxValue(extractRowContent(rowLines));
    return content ? { kind: "single", content } : null;
  }

  const label = trimmedFirstLine
    .slice(0, separatorIndex)
    .trim()
    .replace(/^\*\*|\*\*$/g, "");

  const valueLines = [
    trimmedFirstLine.slice(separatorIndex + 1).trimStart(),
    ...rowLines.slice(1).map((line) => line.trim()),
  ];

  const value = normalizeInfoboxValue(valueLines.join("\n").replace(/\s*\|\s*$/, ""));
  if (!label || !value) return null;

  return { kind: "pair", label, value };
}

function extractRowContent(rowLines: string[]): string {
  const normalizedLines = rowLines.map((line) => line.trim());
  normalizedLines[0] = normalizedLines[0].replace(/^\|\s*/, "");
  normalizedLines[normalizedLines.length - 1] = normalizedLines[
    normalizedLines.length - 1
  ].replace(/\s*\|\s*$/, "");
  return normalizedLines.join("\n");
}

function parseSingleCell(line: string): string {
  return line.replace(/^\|\s*/, "").replace(/\s*\|\s*$/, "").trim();
}

function isClosedInfoboxRow(rowLines: string[]): boolean {
  const lastNonEmptyLine = [...rowLines]
    .reverse()
    .find((line) => line.trim().length > 0);

  return Boolean(lastNonEmptyLine?.trimEnd().endsWith("|"));
}

function findNextNonEmptyLine(lines: string[], start: number): number {
  for (let i = start; i < lines.length; i++) {
    if (lines[i]?.trim()) return i;
  }
  return -1;
}

function normalizeInfoboxValue(value: string): string {
  const normalized = value
    .replace(/\)\*\*(?=[A-Z\[])/g, ")<br />")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && line !== "|")
    .join("<br />");

  return normalized.replace(/(?:<br \/>){3,}/g, "<br /><br />").trim();
}

const components: Components = {
  a: ({ href, children, ...props }) => {
    if (href && href.startsWith("/wiki/")) {
      return (
        <WikiLink href={href} {...props}>
          {children}
        </WikiLink>
      );
    }
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={450}
        className="rounded-xl border border-border my-5"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        unoptimized={src.startsWith("http")}
      />
    );
  },
};

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames || []),
    "mark",
    "sup",
    "sub",
    "br",
    "figure",
    "figcaption",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "th",
    "td",
  ],
  attributes: {
    ...defaultSchema.attributes,
    "*": [
      ...((defaultSchema.attributes?.["*"] as unknown[]) || []),
      "className",
      "id",
      "title",
    ],
    a: [
      ...((defaultSchema.attributes?.a as unknown[]) || []),
      "className",
      "href",
      "id",
      "rel",
      "target",
      "title",
    ],
    code: [
      ...((defaultSchema.attributes?.code as unknown[]) || []),
      "className",
    ],
    span: [
      ...((defaultSchema.attributes?.span as unknown[]) || []),
      "className",
    ],
    img: ["src", "alt", "title", "width", "height", "loading"],
    th: ["scope", "colSpan", "rowSpan", "className", "id"],
    td: ["colSpan", "rowSpan", "className", "id"],
    ol: ["className", "id"],
    li: ["className", "id"],
    sup: ["className", "id"],
  },
  protocols: {
    ...defaultSchema.protocols,
    href: ["http", "https", "mailto"],
    src: ["http", "https"],
  },
};

export default function MarkdownRenderer({ content }: { content: string }) {
  let cleaned = normalizeBrokenInfobox(content);

  // Remove red link edit URLs, keeping the text
  cleaned = cleaned.replace(
    /\[([^\]]+)\]\(\/index\.php\?title=[^)]+&action=edit&redlink=1\)/g,
    "$1"
  );

  // Clean up citation references like [&#91;1&#93;](#cite_note-...)
  cleaned = cleaned.replace(
    /\[&#91;(\d+)&#93;\]\(#cite_note[^)]*\)/g,
    '<sup><a href="#cite_note-$1" class="cite-ref">[$1]</a></sup>'
  );

  // Clean up HTML entities that didn't get decoded
  cleaned = cleaned.replace(/&#160;/g, " ");
  cleaned = cleaned.replace(/&#91;/g, "[");
  cleaned = cleaned.replace(/&#93;/g, "]");

  // Make [N] inline citations clickable and add IDs to reference list items
  const hasRefs = /##\s*References\s*\n/.test(cleaned);
  if (hasRefs) {
    cleaned = cleaned.replace(
      /(##\s*References\s*\n+)([\s\S]*?)(?=\n##\s|$)/,
      (_, heading: string, block: string) => {
        const items = block
          .trim()
          .split("\n")
          .map((line: string) => {
            const m = line.match(/^(?:(\d+)\.\s+|\[(\d+)\]\s+)(.*)/);
            if (!m) return "";
            const num = m[1] || m[2];
            return `<li id="cite_note-${num}">${refTextToHtml(m[3])}</li>`;
          })
          .filter(Boolean)
          .join("\n");
        if (!items) return `${heading}`;
        return `${heading}<ol class="references-list">\n${items}\n</ol>\n`;
      }
    );

    cleaned = cleaned.replace(
      /(?<!\[)\[(\d{1,3})\](?!\()/g,
      '<sup><a href="#cite_note-$1" class="cite-ref">[$1]</a></sup>'
    );
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeSanitize, sanitizeSchema],
        rehypeSlug,
        [rehypeHighlight, { ignoreMissing: true }],
      ]}
      components={components}
    >
      {cleaned}
    </ReactMarkdown>
  );
}
