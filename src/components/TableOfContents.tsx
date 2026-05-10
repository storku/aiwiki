"use client";

import { useEffect, useState, useRef } from "react";
import { parseHeadings, parseHeadingsFromHtml } from "@/lib/headings";

interface TableOfContentsProps {
  content: string;
  contentHtml?: string | null;
}

export default function TableOfContents({ content, contentHtml }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const [showFullOutline, setShowFullOutline] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const headings = contentHtml ? parseHeadingsFromHtml(contentHtml) : parseHeadings(content);
  const compactLimit = 28;
  const activeIndex = headings.findIndex((heading) => heading.id === activeId);
  const sectionCount = headings.filter((heading) => heading.level === 2).length;
  const visibleHeadings =
    showFullOutline || headings.length <= compactLimit
      ? headings
      : getCompactHeadings(headings, activeIndex);

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
    <aside className="hidden xl:block w-60 shrink-0">
      <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-hidden rounded-xl border border-border bg-background p-3 shadow-sm">
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
          <span className="ml-auto font-medium normal-case tracking-normal text-muted/70">
            {sectionCount || headings.length}
          </span>
        </p>
        <ul className="max-h-[calc(100vh-11rem)] space-y-0.5 overflow-y-auto pr-1">
          {visibleHeadings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`toc-link flex min-h-10 items-center rounded-md border-l-2 py-2 pr-2 text-[13px] leading-snug ${
                  h.level === 2 ? "pl-3" : h.level === 3 ? "pl-5" : "pl-7"
                } ${
                  activeId === h.id
                    ? "bg-primary-light text-primary border-primary font-medium"
                    : "text-muted border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
        {headings.length > compactLimit && (
          <button
            type="button"
            onClick={() => setShowFullOutline((value) => !value)}
            className="mt-3 min-h-10 w-full rounded-lg border border-border px-3 text-sm font-medium text-primary hover:bg-primary-light"
          >
            {showFullOutline ? "Show compact outline" : `Show detailed outline`}
          </button>
        )}
      </nav>
    </aside>
  );
}

function getCompactHeadings(
  headings: ReturnType<typeof parseHeadings>,
  activeIndex: number
) {
  const activeParentIndex = findParentSectionIndex(headings, activeIndex);
  return headings.filter((heading, index) => {
    if (heading.level === 2) return true;
    if (activeParentIndex === -1) return index < 8;

    const nextSectionIndex = headings.findIndex(
      (candidate, candidateIndex) =>
        candidateIndex > activeParentIndex && candidate.level === 2
    );
    const sectionEnd = nextSectionIndex === -1 ? headings.length : nextSectionIndex;
    return index > activeParentIndex && index < sectionEnd;
  });
}

function findParentSectionIndex(
  headings: ReturnType<typeof parseHeadings>,
  activeIndex: number
) {
  if (activeIndex < 0) return -1;
  for (let index = activeIndex; index >= 0; index--) {
    if (headings[index].level === 2) return index;
  }
  return -1;
}
