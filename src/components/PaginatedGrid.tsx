"use client";

import Link from "next/link";
import { useState } from "react";

interface PageMeta {
  title: string;
  slug: string;
  categories: string[];
}

const PER_PAGE = 60;

export default function PaginatedGrid({
  pages,
  categoryName,
}: {
  pages: PageMeta[];
  categoryName: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pages.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const visible = pages.slice(start, start + PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map((page, i) => (
          <Link
            key={page.slug}
            href={`/wiki/${page.slug}`}
            className="card group p-4 animate-fade-in"
            style={{ animationDelay: `${i * 0.015}s` }}
          >
            <h2 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {page.title}
            </h2>
            {page.categories.filter((c) => c !== categoryName).length > 0 && (
              <p className="text-xs text-muted mt-1.5 truncate">
                {page.categories
                  .filter((c) => c !== categoryName)
                  .slice(0, 3)
                  .join(", ")}
              </p>
            )}
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:bg-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-muted px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:bg-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}
