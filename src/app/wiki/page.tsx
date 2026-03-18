import Link from "next/link";
import { getAllPages } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all 2,000+ articles in the AI Wiki encyclopedia.",
};

export default function AllPagesPage() {
  const pages = getAllPages();

  const grouped = new Map<string, typeof pages>();
  for (const page of pages) {
    const first = page.title[0]?.toUpperCase() || "#";
    const key = /[A-Z]/.test(first) ? first : "#";
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(page);
  }

  const sortedKeys = Array.from(grouped.keys()).sort((a, b) => {
    if (a === "#") return -1;
    if (b === "#") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground">All Pages</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">All Pages</h1>
        <p className="text-muted">
          {pages.length.toLocaleString()} articles in the encyclopedia
        </p>
      </div>

      {/* Alphabet navigation */}
      <nav className="flex flex-wrap gap-1 mb-10 p-3 rounded-xl bg-surface border border-border sticky top-14 z-10">
        {sortedKeys.map((key) => (
          <a
            key={key}
            href={`#section-${key}`}
            className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            {key}
          </a>
        ))}
      </nav>

      {sortedKeys.map((key) => (
        <section key={key} id={`section-${key}`} className="mb-10">
          <div className="flex items-baseline gap-2 mb-3 pb-2 border-b border-border">
            <h2 className="text-2xl font-extrabold text-primary">{key}</h2>
            <span className="text-xs text-muted">
              {grouped.get(key)!.length} articles
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0.5">
            {grouped.get(key)!.map((page) => (
              <Link
                key={page.slug}
                href={`/wiki/${page.slug}`}
                className="text-sm py-1.5 hover:text-primary transition-colors truncate block"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
