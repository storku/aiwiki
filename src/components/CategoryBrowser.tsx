"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface Category {
  name: string;
  count: number;
}

const INITIAL_VISIBLE_COUNT = 60;
const VISIBLE_INCREMENT = 60;

function displayCategoryName(name: string) {
  return name.replace(/_/g, " ");
}

function categoryLetter(name: string) {
  const first = displayCategoryName(name).trim()[0]?.toUpperCase() || "#";
  return /[A-Z]/.test(first) ? first : "#";
}

export default function CategoryBrowser({ categories }: { categories: Category[] }) {
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [sortMode, setSortMode] = useState<"popular" | "az">("popular");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const letters = useMemo(() => {
    const set = new Set(categories.map((cat) => categoryLetter(cat.name)));
    return ["All", ...Array.from(set).sort((a, b) => {
      if (a === "#") return -1;
      if (b === "#") return 1;
      return a.localeCompare(b);
    })];
  }, [categories]);

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = categories.filter((cat) => {
      const label = displayCategoryName(cat.name).toLowerCase();
      const matchesQuery = !normalizedQuery || label.includes(normalizedQuery);
      const matchesLetter =
        activeLetter === "All" || categoryLetter(cat.name) === activeLetter;
      return matchesQuery && matchesLetter;
    });

    return filtered.sort((a, b) => {
      if (sortMode === "az") {
        return displayCategoryName(a.name).localeCompare(displayCategoryName(b.name));
      }
      return b.count - a.count || displayCategoryName(a.name).localeCompare(displayCategoryName(b.name));
    });
  }, [activeLetter, categories, query, sortMode]);

  const visibleCategories = filteredCategories.slice(0, visibleCount);
  const hasMore = filteredCategories.length > visibleCount;

  function updateQuery(value: string) {
    setQuery(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }

  function updateLetter(letter: string) {
    setActiveLetter(letter);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }

  function updateSort(nextSortMode: "popular" | "az") {
    setSortMode(nextSortMode);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-14 z-20 -mx-4 border-y border-border bg-background/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Filter categories</span>
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
              className="min-h-11 w-full rounded-lg border border-border bg-surface py-3 pl-10 pr-10 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder="Filter categories..."
              type="search"
            />
            {query && (
              <button
                type="button"
                onClick={() => updateQuery("")}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:bg-surface-hover hover:text-foreground"
                aria-label="Clear category filter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </label>

          <div className="inline-flex min-h-11 rounded-lg border border-border bg-surface p-1 text-sm">
            <button
              type="button"
              onClick={() => updateSort("popular")}
              className={`min-h-10 rounded-md px-3 py-2 transition-colors ${
                sortMode === "popular"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Popular
            </button>
            <button
              type="button"
              onClick={() => updateSort("az")}
              className={`min-h-10 rounded-md px-3 py-2 transition-colors ${
                sortMode === "az"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              A-Z
            </button>
          </div>
        </div>

        <div className="alpha-scroll mt-3 overflow-x-auto">
          <div className="flex min-w-max gap-1 pb-1">
            {letters.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => updateLetter(letter)}
                className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors ${
                  activeLetter === letter
                    ? "bg-primary text-white"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <p>
          Showing {visibleCategories.length.toLocaleString()} of{" "}
          {filteredCategories.length.toLocaleString()} categories
        </p>
        {(query || activeLetter !== "All") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveLetter("All");
              setVisibleCount(INITIAL_VISIBLE_COUNT);
            }}
            className="min-h-10 rounded-lg px-3 text-primary hover:bg-primary-light"
          >
            Reset filters
          </button>
        )}
      </div>

      {visibleCategories.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="card group flex min-h-16 items-center justify-between p-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="icon-box flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-muted transition-all group-hover:bg-primary-light group-hover:text-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                  </svg>
                </div>
                <span className="truncate text-sm font-medium transition-colors group-hover:text-primary">
                  {displayCategoryName(cat.name)}
                </span>
              </div>
              <span className="cat-count ml-3 shrink-0 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface px-4 py-12 text-center text-muted">
          <p className="font-medium text-foreground">No categories found</p>
          <p className="mt-1 text-sm">Try a different filter.</p>
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + VISIBLE_INCREMENT)}
            className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-surface"
          >
            Show more categories
          </button>
        </div>
      )}
    </div>
  );
}
