"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface PageMeta {
  title: string;
  slug: string;
  categories: string[];
}

const SEARCH_VISIBLE_COUNT = 80;
const SECTION_PREVIEW_COUNT = 5;

export default function PaginatedPageList({ pages }: { pages: PageMeta[] }) {
  const [expandedLetters, setExpandedLetters] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [visibleSearchCount, setVisibleSearchCount] = useState(SEARCH_VISIBLE_COUNT);

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

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPages = useMemo(() => {
    if (!normalizedQuery) return [];
    return pages.filter((page) => {
      const searchable = `${page.title} ${page.slug} ${page.categories.join(" ")}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [normalizedQuery, pages]);

  function updateQuery(value: string) {
    setQuery(value);
    setVisibleSearchCount(SEARCH_VISIBLE_COUNT);
  }

  function jumpToLetter(key: string) {
    setExpandedLetters((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    window.requestAnimationFrame(() => {
      document.getElementById(`section-${key}`)?.scrollIntoView({ block: "start" });
    });
  }

  const visibleSearchResults = filteredPages.slice(0, visibleSearchCount);

  return (
    <div className="space-y-6">
      <div className="sticky top-14 z-20 -mx-4 border-y border-border bg-background/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <label className="relative block">
          <span className="sr-only">Filter all pages</span>
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            type="search"
            placeholder="Filter all pages..."
            className="min-h-11 w-full rounded-lg border border-border bg-surface py-3 pl-10 pr-10 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => updateQuery("")}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:bg-surface-hover hover:text-foreground"
              aria-label="Clear page filter"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </label>

        {!normalizedQuery && (
          <nav className="alpha-scroll mt-3 overflow-x-auto" aria-label="Article initials">
            <div className="flex min-w-max gap-1 pb-1">
              {sortedKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => jumpToLetter(key)}
                  className="flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium text-muted transition-colors hover:bg-primary hover:text-white"
                >
                  {key}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>

      {normalizedQuery && (
        <section className="space-y-4">
          <p className="text-sm text-muted">
            Showing {visibleSearchResults.length.toLocaleString()} of{" "}
            {filteredPages.length.toLocaleString()} matching pages
          </p>

          {visibleSearchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {visibleSearchResults.map((page) => (
                <Link
                  key={page.slug}
                  href={`/wiki/${page.slug}`}
                  className="card group flex min-h-16 items-start gap-3 p-4"
                >
                  <div className="icon-box mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-muted transition-all group-hover:bg-primary-light group-hover:text-primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold group-hover:text-primary">
                      {page.title}
                    </p>
                    {page.categories.length > 0 && (
                      <p className="mt-1 truncate text-xs text-muted">
                        {page.categories.slice(0, 4).join(", ")}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-surface px-4 py-12 text-center text-muted">
              <p className="font-medium text-foreground">No pages found</p>
              <p className="mt-1 text-sm">Try a different filter.</p>
            </div>
          )}

          {filteredPages.length > visibleSearchCount && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleSearchCount((count) => count + SEARCH_VISIBLE_COUNT)}
                className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-surface"
              >
                Show more pages
              </button>
            </div>
          )}
        </section>
      )}

      {!normalizedQuery && sortedKeys.map((key) => {
        const items = grouped.get(key)!;
        const isExpanded = expandedLetters.has(key);
        const collapsedItems = items.slice(0, SECTION_PREVIEW_COUNT);
        const showItems = isExpanded ? items : collapsedItems;
        const hasMore = items.length > SECTION_PREVIEW_COUNT;

        return (
          <section key={key} id={`section-${key}`} className="scroll-mt-32 rounded-xl border border-border bg-background p-4">
            <div className="mb-3 flex items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-extrabold text-primary">{key}</h2>
                <span className="text-xs text-muted">
                  {items.length} articles
                </span>
              </div>
              {items.length > SECTION_PREVIEW_COUNT && (
                <button
                  type="button"
                  onClick={() => toggleLetter(key)}
                  className="min-h-10 rounded-lg px-3 text-sm font-medium text-primary hover:bg-primary-light"
                >
                  {isExpanded ? "Show less" : "Expand"}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {showItems.map((page) => (
                <Link
                  key={page.slug}
                  href={`/wiki/${page.slug}`}
                  className="block min-h-10 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-surface hover:text-primary"
                >
                  {page.title}
                </Link>
              ))}
            </div>
            {hasMore && (
              <button
                onClick={() => toggleLetter(key)}
                className="mt-3 min-h-10 rounded-lg px-2 text-sm text-primary hover:bg-primary-light"
              >
                {isExpanded
                  ? `Show first ${SECTION_PREVIEW_COUNT} articles`
                  : `Show all ${items.length} articles`}
              </button>
            )}
          </section>
        );
      })}
    </div>
  );
}
