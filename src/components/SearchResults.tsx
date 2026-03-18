"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  t: string;
  s: string;
  c: string;
  e: string;
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
          { name: "t", weight: 3 },
          { name: "e", weight: 1.5 },
          { name: "c", weight: 1 },
        ],
        threshold: 0.3,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [items]
  );

  const results = query.trim() ? fuse.search(query.trim(), { limit: 50 }) : [];

  return (
    <div>
      <div className="relative mb-8">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-surface text-base placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all"
          autoFocus
        />
      </div>

      {loading && query && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl border border-border">
              <div className="skeleton h-4 w-48 mb-2" />
              <div className="skeleton h-3 w-32" />
            </div>
          ))}
        </div>
      )}

      {!loading && query && (
        <p className="text-muted text-sm mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="space-y-2">
        {results.map(({ item }, idx) => (
          <Link
            key={item.s}
            href={`/wiki/${item.s}`}
            className="card group flex items-start gap-3 p-4 animate-fade-in"
            style={{ animationDelay: `${idx * 0.02}s` }}
          >
            <div className="icon-box w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0 text-muted group-hover:bg-primary-light group-hover:text-primary transition-colors mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {item.t}
              </h2>
              {item.e && (
                <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">{item.e}</p>
              )}
              {item.c && (
                <p className="text-[11px] text-muted/70 mt-1.5 truncate">{item.c}</p>
              )}
            </div>
            <svg className="shrink-0 text-muted/30 group-hover:text-primary transition-colors mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        ))}
      </div>

      {!loading && query && results.length === 0 && (
        <div className="text-center py-16 text-muted">
          <svg className="mx-auto mb-4 text-muted/30" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <p className="text-lg font-medium mb-1">No articles found</p>
          <p className="text-sm">Try different keywords or <Link href="/wiki" className="text-primary hover:underline">browse all pages</Link></p>
        </div>
      )}

      {!query && !loading && (
        <div className="text-center py-16 text-muted">
          <svg className="mx-auto mb-4 text-muted/20" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p className="text-lg font-medium mb-1">Search {items.length.toLocaleString()} articles</p>
          <p className="text-sm">Fuzzy matching finds what you need, even with typos</p>
        </div>
      )}
    </div>
  );
}
