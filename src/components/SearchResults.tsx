"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

interface ServerResult {
  slug: string;
  title: string;
  excerpt: string;
  headline: string;
  rank: number;
  categories: string[];
}

interface DisplayResult {
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  headline?: string;
}

export default function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<DisplayResult[]>([]);
  const [searching, setSearching] = useState(!!initialQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const search = useCallback(async (q: string) => {
    if (!q.trim() || q.trim().length < 2) {
      setResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
      if (res.ok) {
        const data: ServerResult[] = await res.json();
        setResults(
          data.map((sr) => ({
            slug: sr.slug,
            title: sr.title,
            excerpt: sr.excerpt,
            categories: sr.categories.join(", "),
            headline: sr.headline,
          }))
        );
      }
    } catch {
      // Silently fail
    } finally {
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim() || query.trim().length < 2) {
      setResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    debounceRef.current = setTimeout(() => {
      search(query);
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, search]);

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
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-surface text-base sm:text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          autoFocus
        />
      </div>

      {searching && query && (
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

      {!searching && query && (
        <p className="text-muted text-sm mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="space-y-2">
        {results.map((item, idx) => (
          <Link
            key={item.slug}
            href={`/wiki/${item.slug}`}
            className="card group flex items-start gap-3.5 p-4 animate-fade-in"
            style={{ animationDelay: `${Math.min(idx * 0.02, 0.3)}s` }}
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
              {item.headline ? (
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

      {!searching && query && results.length === 0 && (
        <div className="text-center py-20 text-muted">
          <div className="empty-state-icon inline-block mb-4">
            <svg className="text-muted/30" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-1">No articles found</p>
          <p className="text-sm">Try different keywords or <Link href="/wiki" className="text-primary hover:underline">browse all pages</Link></p>
        </div>
      )}

      {!query && (
        <div className="text-center py-20 text-muted">
          <div className="empty-state-icon inline-block mb-4">
            <svg className="text-muted/25" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-1">Search articles</p>
          <p className="text-sm">Full-text search across all wiki content</p>
        </div>
      )}
    </div>
  );
}
