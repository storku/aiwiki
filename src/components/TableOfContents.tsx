"use client";

import { useEffect, useState, useRef } from "react";
import { parseHeadings, parseHeadingsFromHtml } from "@/lib/headings";

interface TableOfContentsProps {
  content: string;
  contentHtml?: string | null;
}

export default function TableOfContents({ content, contentHtml }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const headings = contentHtml ? parseHeadingsFromHtml(contentHtml) : parseHeadings(content);

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, contentHtml]);

  if (headings.length < 3) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
        <p className="text-[11px] font-semibold text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          On this page
        </p>
        <ul className="space-y-0.5">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`toc-link block py-1 border-l-2 text-[13px] leading-snug ${
                  h.level === 2 ? "pl-3" : h.level === 3 ? "pl-5" : "pl-7"
                } ${
                  activeId === h.id
                    ? "text-primary border-primary font-medium"
                    : "text-muted border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
