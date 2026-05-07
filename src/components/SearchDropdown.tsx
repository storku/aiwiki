"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import SearchShortcutHint from "./SearchShortcutHint";

interface SearchItem {
  t: string; // title
  s: string; // slug
  c: string; // categories
  e: string; // excerpt
}

// Module-level cache so the index persists across re-renders / remounts
let cachedItems: SearchItem[] | null = null;
let fetchPromise: Promise<SearchItem[]> | null = null;
let cachedAt = 0;

const INDEX_TTL_MS = 60_000;

function fetchIndex(): Promise<SearchItem[]> {
  const now = Date.now();
  if (cachedItems && now - cachedAt < INDEX_TTL_MS) {
    return Promise.resolve(cachedItems);
  }
  if (fetchPromise) return fetchPromise;
  fetchPromise = fetch("/api/search-index", { cache: "no-store" })
    .then((r) => r.json())
    .then((data: SearchItem[]) => {
      cachedItems = data;
      cachedAt = Date.now();
      fetchPromise = null;
      return data;
    })
    .catch(() => {
      fetchPromise = null;
      return [] as SearchItem[];
    });
  return fetchPromise;
}

const MAX_RESULTS = 7;

interface Props {
  id?: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function SearchDropdown({
  id = "header-search",
  mobile = false,
  onNavigate,
}: Props) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchItem[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    if (items.length === 0) return null;
    return new Fuse(items, {
      keys: [
        { name: "t", weight: 3 },
        { name: "e", weight: 1.5 },
        { name: "c", weight: 1 },
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }, [items]);

  // Lazy-load index on first focus
  const ensureLoaded = useCallback(() => {
    fetchIndex().then(setItems);
  }, []);

  // Compute results
  const results =
    query.trim().length >= 1 && fuse
      ? fuse.search(query.trim(), { limit: MAX_RESULTS })
      : [];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navigate(slug: string) {
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
    onNavigate?.();
    router.push(`/wiki/${slug}`);
  }

  function goToSearchPage() {
    if (!query.trim()) return;
    setOpen(false);
    setActiveIndex(-1);
    onNavigate?.();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        goToSearchPage();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        // -1 = none selected, 0..results.length-1 = results, results.length = "view all"
        setActiveIndex((prev) =>
          prev < results.length ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : results.length
        );
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < results.length) {
          navigate(results[activeIndex].item.s);
        } else {
          goToSearchPage();
        }
        break;
      case "Escape":
        setOpen(false);
        setActiveIndex(-1);
        inputRef.current?.blur();
        break;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setActiveIndex(-1);
    if (val.trim().length >= 1) {
      ensureLoaded();
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  // Highlight matching portion of title
  function highlightTitle(result: (typeof results)[0]) {
    const title = result.item.t;
    const matches = result.matches?.find((m) => m.key === "t");
    if (!matches?.indices?.length) return title;

    // Merge overlapping indices
    const sorted = [...matches.indices].sort((a, b) => a[0] - b[0]);
    const merged: [number, number][] = [];
    for (const [start, end] of sorted) {
      const last = merged[merged.length - 1];
      if (last && start <= last[1] + 1) {
        last[1] = Math.max(last[1], end);
      } else {
        merged.push([start, end]);
      }
    }

    const parts: React.ReactNode[] = [];
    let cursor = 0;
    for (let i = 0; i < merged.length; i++) {
      const [start, end] = merged[i];
      if (cursor < start) {
        parts.push(title.slice(cursor, start));
      }
      parts.push(
        <mark
          key={i}
          className="bg-primary/15 text-foreground rounded-sm px-0.5"
        >
          {title.slice(start, end + 1)}
        </mark>
      );
      cursor = end + 1;
    }
    if (cursor < title.length) {
      parts.push(title.slice(cursor));
    }
    return <>{parts}</>;
  }

  const showDropdown = open && query.trim().length >= 1;

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          width="15"
          height="15"
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
          ref={inputRef}
          id={id}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            ensureLoaded();
            if (query.trim().length >= 1) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search articles..."
          autoComplete="off"
          aria-label="Search articles"
          className={
            mobile
              ? "min-h-11 w-full pl-9 pr-4 py-3 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              : "min-h-10 w-full pl-9 pr-20 py-2 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          }
        />
        {!mobile && (
          <SearchShortcutHint className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-surface text-[10px] text-muted font-mono" />
        )}
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-[60] bg-background border border-border rounded-xl shadow-lg overflow-hidden animate-fade-in">
          {results.length > 0 ? (
            <>
              <ul className="py-1">
                {results.map((result, idx) => (
                  <li key={result.item.s}>
                    <Link
                      href={`/wiki/${result.item.s}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(result.item.s);
                      }}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 text-sm transition-colors ${
                        idx === activeIndex
                          ? "bg-primary/10 text-foreground"
                          : "text-foreground hover:bg-surface"
                      }`}
                    >
                      <svg
                        className="shrink-0 text-muted/50"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-[13px] truncate">
                          {highlightTitle(result)}
                        </div>
                        {result.item.c && (
                          <div className="text-[11px] text-muted/60 truncate mt-0.5">
                            {result.item.c}
                          </div>
                        )}
                      </div>
                      {idx === activeIndex && (
                        <kbd className="hidden sm:inline-flex shrink-0 text-[10px] text-muted/50 border border-border rounded px-1 py-0.5">
                          Enter
                        </kbd>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border">
                <button
                  onClick={goToSearchPage}
                  onMouseEnter={() => setActiveIndex(results.length)}
                  className={`w-full flex items-center gap-2 px-3.5 py-2.5 text-xs transition-colors ${
                    activeIndex === results.length
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:text-primary hover:bg-surface"
                  }`}
                >
                  <svg
                    width="13"
                    height="13"
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
                  View all results for &ldquo;{query.trim()}&rdquo;
                </button>
              </div>
            </>
          ) : items.length > 0 ? (
            <div className="px-3.5 py-4 text-center text-sm text-muted">
              No matches found
              <button
                onClick={goToSearchPage}
                className="block mx-auto mt-1.5 text-xs text-primary hover:underline"
              >
                Try full-text search
              </button>
            </div>
          ) : (
            <div className="px-3.5 py-4 text-center text-sm text-muted">
              Loading search index...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
