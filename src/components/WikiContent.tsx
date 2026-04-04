"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import WikiLink from "./WikiLink";
import { refTextToHtml } from "@/lib/html-utils";

interface WikiContentProps {
  content: string;
  contentHtml?: string | null;
}

// ─── Markdown fallback components ────────────────────────────────────

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

// ─── Pre-rendered HTML: client-side interactivity ────────────────────

function useHtmlInteractivity(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Handle broken images - hide them gracefully
    const imgs = el.querySelectorAll("img");
    for (const img of imgs) {
      if (!img.dataset.errorHandled) {
        img.dataset.errorHandled = "1";
        img.addEventListener("error", () => {
          img.style.display = "none";
        });
        // Check if already failed (complete but no natural width)
        if (img.complete && img.naturalWidth === 0 && img.src) {
          img.style.display = "none";
        }
      }
    }

    // Wrap tables that may overflow on mobile in a scrollable container
    // Skip infobox tables — they float right and must not be wrapped
    const tables = el.querySelectorAll("table");
    for (const table of tables) {
      if (table.parentElement?.classList.contains("table-wrapper")) continue;
      if (table.classList.contains("infobox")) continue;
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper overflow-x-auto -mx-1 px-1";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    // Handle heading anchor button clicks (copy link)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorBtn = target.closest(".heading-anchor") as HTMLButtonElement | null;
      if (anchorBtn) {
        e.preventDefault();
        const id = anchorBtn.dataset.headingId;
        if (id) {
          const url = `${window.location.origin}${window.location.pathname}#${id}`;
          navigator.clipboard.writeText(url).catch(() => {});
          // Brief visual feedback
          anchorBtn.style.opacity = "1";
          anchorBtn.style.color = "var(--color-primary)";
          setTimeout(() => {
            anchorBtn.style.opacity = "";
            anchorBtn.style.color = "";
          }, 1000);
        }
      }
    };

    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [containerRef]);
}

// ─── Component ───────────────────────────────────────────────────────

export default function WikiContent({ content, contentHtml }: WikiContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useHtmlInteractivity(containerRef);

  // Pre-rendered HTML mode
  if (contentHtml) {
    return (
      <div
        ref={containerRef}
        className="wiki-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    );
  }

  // Markdown fallback
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
    // Convert [N] inline citations to linked superscripts
    // Match " [N]" not followed by ( (which would be a markdown link)
    cleaned = cleaned.replace(
      / \[(\d{1,3})\](?!\()/g,
      ' <sup><a href="#cite_note-$1" class="cite-ref">[$1]</a></sup>'
    );

    // Convert References numbered list to HTML with anchor IDs
    cleaned = cleaned.replace(
      /(##\s*References\s*\n+)((?:\d+\.\s+.+\n?)+)/,
      (_, heading: string, list: string) => {
        const items = list
          .trim()
          .split("\n")
          .map((line: string) => {
            const m = line.match(/^(\d+)\.\s+(.*)/);
            if (!m) return "";
            return `<li id="cite_note-${m[1]}">${refTextToHtml(m[2])}</li>`;
          })
          .filter(Boolean)
          .join("\n");
        return `${heading}<ol class="references-list">\n${items}\n</ol>\n`;
      }
    );
  }

  return (
    <div ref={containerRef} className="wiki-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeHighlight, { ignoreMissing: true }]]}
        components={components}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
}
