"use client";

import { useState } from "react";
import Link from "next/link";

interface RelatedArticle {
  slug: string;
  title: string;
  categories: string[];
}

interface RelatedArticlesProps {
  related: RelatedArticle[];
}

export default function RelatedArticles({ related }: RelatedArticlesProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 related-divider">
      {/* Header - clickable on mobile, static on desktop */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex min-h-11 items-center gap-2.5 mb-5 w-full text-left sm:pointer-events-none"
      >
        <div className="icon-box p-2 rounded-lg bg-surface text-muted">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
          </svg>
        </div>
        <h2 className="text-lg font-bold">Related Articles</h2>
        {/* Chevron - visible only on mobile */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`sm:hidden ml-auto transition-transform duration-200 text-muted ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Article grid - always visible on sm+, collapsible on mobile */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-300 ease-in-out sm:!max-h-none sm:!opacity-100 sm:!overflow-visible ${
          isOpen
            ? "max-h-[2000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`/wiki/${r.slug}`}
            className="card group block min-h-16 p-4"
          >
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {r.title}
            </h3>
            {r.categories.length > 0 && (
              <p className="text-xs text-muted mt-1.5 truncate">
                {r.categories.slice(0, 3).join(", ")}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
