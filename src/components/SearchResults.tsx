"use client";

import Link from "next/link";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  t: string;
  s: string;
  c: string;
  e: string;
}

interface ServerResult {
  slug: string;
  title: string;
  excerpt: string;
  headline: string;
  rank: number;
  categories: string[];
}

interface MergedResult {
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  headline?: string;
  source: "client" | "server";
}

export default function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverResults, setServerResults] = useState<ServerResult[]>([]);
  const [serverSearching, setServerSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Debounced server-side search
  const searchServer = useCallback((q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!q.trim() || q.trim().length < 2) {
      setServerResults([]);
      setServerSearching(false);
      return;
    }

    setServerSearching(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setServerResults(data);
        }
      } catch {
        // Silently fail; client results are still shown
      } finally {
        setServerSearching(false);
      }
    }, 300);
  }, []);

  useEffect(() => {
    searchServer(query);
  }, [query, searchServer]);

  // Merge client + server results, deduplicating by slug
  const results: MergedResult[] = useMemo(() => {
    const clientResults = query.trim()
      ? fuse.search(query.trim(), { limit: 50 }).map(({ item }) => ({
          slug: item.s,
          title: item.t,
          excerpt: item.e,
          categories: item.c,
          source: "client" as const,
        }))
      : [];

    if (serverResults.length === 0) return clientResults;

    const seen = new Set<string>();
    const merged: MergedResult[] = [];

    // Server results first (more relevant for content matches)
    for (const sr of serverResults) {
      if (!seen.has(sr.slug)) {
        seen.add(sr.slug);
        merged.push({
          slug: sr.slug,
          title: sr.title,
          excerpt: sr.excerpt,
          categories: sr.categories.join(", "),
          headline: sr.headline,
          source: "server",
        });
      }
    }

    // Then client results that weren't in server results
    for (const cr of clientResults) {
      if (!seen.has(cr.slug)) {
        seen.add(cr.slug);
        merged.push(cr);
      }
    }

    return merged.slice(0, 50);
  }, [query, fuse, serverResults]);

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
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-surface text-base placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          autoFocus
        />
      </div>

      {loading && query && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl border border-border">
              <div className="skeleton h-4 w-48 mb-3" />
              <div className="skeleton h-3 w-64 mb-2" />
              <div className="skeleton h-3 w-32" />
            </div>
          ))}
        </div>
      )}

      {!loading && query && (
        <div className="flex items-center gap-2 mb-4">
          <p className="text-muted text-sm">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
          {serverSearching && (
            <div className="flex items-center gap-1.5 text-xs text-muted/50">
              <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" className="opacity-75" />
              </svg>
              searching content...
            </div>
          )}
        </div>
      )}

      <div className="space-y-2">
        {results.map((item, idx) => (
          <Link
            key={item.slug}
            href={`/wiki/${item.slug}`}
            className="card group flex items-start gap-3.5 p-4 animate-fade-in"
            style={{ animationDelay: `${idx * 0.02}s` }}
          >
            <div className="icon-box w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0 text-muted group-hover:bg-primary-light group-hover:text-primary transition-all mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              {item.headline && item.source === "server" ? (
                <p
                  className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed [&_mark]:bg-primary/15 [&_mark]:text-foreground [&_mark]:rounded-sm [&_mark]:px-0.5"
                  dangerouslySetInnerHTML={{ __html: item.headline }}
                />
              ) : (
                item.excerpt && (
                  <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                )
              )}
              {item.categories && (
                <p className="text-[11px] text-muted/60 mt-1.5 truncate">{item.categories}</p>
              )}
            </div>
            <svg className="shrink-0 text-muted/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        ))}
      </div>

      {!loading && query && results.length === 0 && !serverSearching && (
        <div className="text-center py-20 text-muted">
          <div className="empty-state-icon inline-block mb-4">
            <svg className="text-muted/20" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-1">No articles found</p>
          <p className="text-sm">Try different keywords or <Link href="/wiki" className="text-primary hover:underline">browse all pages</Link></p>
        </div>
      )}

      {!query && !loading && (
        <div className="text-center py-20 text-muted">
          <div className="empty-state-icon inline-block mb-4">
            <svg className="text-muted/15" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-1">Search {items.length.toLocaleString()} articles</p>
          <p className="text-sm">Fuzzy matching finds what you need, even with typos</p>
        </div>
      )}
    </div>
  );
}
