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

interface WikiContentProps {
  content: string;
  contentHtml?: string | null;
}

// ─── Markdown fallback components ────────────────────────────────────

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

// ─── Pre-rendered HTML: client-side interactivity ────────────────────

function useHtmlInteractivity(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Event delegation for wiki link hover previews
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/wiki/"]') as HTMLAnchorElement | null;
      if (link) {
        // Let Next.js router handle navigation (WikiLink hover handled separately)
        return;
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
    '<sup class="text-xs text-muted">[$1]</sup>'
  );

  // Clean up HTML entities that didn't get decoded
  cleaned = cleaned.replace(/&#160;/g, " ");
  cleaned = cleaned.replace(/&#91;/g, "[");
  cleaned = cleaned.replace(/&#93;/g, "]");

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
