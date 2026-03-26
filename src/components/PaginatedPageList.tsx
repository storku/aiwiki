"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface PageMeta {
  title: string;
  slug: string;
  categories: string[];
}

const ITEMS_PER_SECTION = 20;

export default function PaginatedPageList({ pages }: { pages: PageMeta[] }) {
  const [expandedLetters, setExpandedLetters] = useState<Set<string>>(new Set());

  const grouped = useMemo(() => {
    const map = new Map<string, PageMeta[]>();
    for (const page of pages) {
      const first = page.title[0]?.toUpperCase() || "#";
      const key = /[A-Z]/.test(first) ? first : "#";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(page);
    }
    return map;
  }, [pages]);

  const sortedKeys = useMemo(() => {
    return Array.from(grouped.keys()).sort((a, b) => {
      if (a === "#") return -1;
      if (b === "#") return 1;
      return a.localeCompare(b);
    });
  }, [grouped]);

  function toggleLetter(key: string) {
    setExpandedLetters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <>
      <nav className="alpha-nav flex overflow-x-auto sm:flex-wrap gap-1 mb-10 p-2 sm:p-3 rounded-xl bg-surface border border-border sticky top-14 z-10 -webkit-overflow-scrolling-touch">
        {sortedKeys.map((key) => (
          <a
            key={key}
            href={`#section-${key}`}
            className="w-8 h-8 flex items-center justify-center shrink-0 text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            {key}
          </a>
        ))}
      </nav>

      {sortedKeys.map((key) => {
        const items = grouped.get(key)!;
        const isExpanded = expandedLetters.has(key);
        const showItems = isExpanded ? items : items.slice(0, ITEMS_PER_SECTION);
        const hasMore = items.length > ITEMS_PER_SECTION;

        return (
          <section key={key} id={`section-${key}`} className="mb-10">
            <div className="flex items-baseline gap-2 mb-3 pb-2 border-b border-border">
              <h2 className="text-2xl font-extrabold text-primary">{key}</h2>
              <span className="text-xs text-muted">
                {items.length} articles
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0.5">
              {showItems.map((page) => (
                <Link
                  key={page.slug}
                  href={`/wiki/${page.slug}`}
                  className="text-sm py-1.5 hover:text-primary transition-colors truncate block"
                >
                  {page.title}
                </Link>
              ))}
            </div>
            {hasMore && !isExpanded && (
              <button
                onClick={() => toggleLetter(key)}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Show all {items.length} articles
              </button>
            )}
          </section>
        );
      })}
    </>
  );
}
