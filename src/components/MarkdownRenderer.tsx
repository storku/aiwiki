"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import WikiLink from "./WikiLink";
import { refTextToHtml } from "@/lib/html-utils";

const components: Components = {
  a: ({ href, children, node: _node, ...props }) => {
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
  img: ({ src, alt, node: _imgNode, ..._ }) => {
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

export default function MarkdownRenderer({ content }: { content: string }) {
  let cleaned = content;

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
      rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeHighlight, { ignoreMissing: true }]]}
      components={components}
    >
      {cleaned}
    </ReactMarkdown>
  );
}
