"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  t: string; // title
  s: string; // slug
  c: string; // categories
}

export default function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/search-index")
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "t", weight: 2 },
          { name: "c", weight: 1 },
        ],
        threshold: 0.3,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [items]
  );

  const results = query.trim()
    ? fuse.search(query.trim(), { limit: 50 })
    : [];

  return (
    <div>
      <div className="relative mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          autoFocus
        />
      </div>

      {loading && query && (
        <p className="text-muted text-sm">Loading search index...</p>
      )}

      {!loading && query && (
        <p className="text-muted text-sm mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="space-y-2">
        {results.map(({ item }) => (
          <Link
            key={item.s}
            href={`/wiki/${item.s}`}
            className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="mt-0.5 p-1.5 rounded-md bg-surface text-muted group-hover:bg-primary-light group-hover:text-primary transition-colors shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold group-hover:text-primary transition-colors">
                {item.t}
              </h2>
              {item.c && (
                <p className="text-xs text-muted mt-0.5 truncate">{item.c}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {!loading && query && results.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-2">No articles found</p>
          <p className="text-sm">Try different keywords or browse <Link href="/wiki" className="text-primary hover:underline">all pages</Link></p>
        </div>
      )}

      {!query && !loading && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-2">Start typing to search</p>
          <p className="text-sm">Search across {items.length.toLocaleString()} articles with fuzzy matching</p>
        </div>
      )}
    </div>
  );
}
