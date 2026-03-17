import Link from "next/link";
import { getAllPages } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all 2,000+ articles in the AI Wiki encyclopedia.",
};

export default function AllPagesPage() {
  const pages = getAllPages();

  // Group pages by first letter
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
    <div>
      <div className="mb-8">
        <nav className="flex items-center gap-1.5 text-sm text-muted mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">All Pages</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">All Pages</h1>
        <p className="text-muted">
          {pages.length.toLocaleString()} articles in the encyclopedia
        </p>
      </div>

      <nav className="flex flex-wrap gap-1 mb-8 p-3 rounded-lg bg-surface border border-border">
        {sortedKeys.map((key) => (
          <a
            key={key}
            href={`#section-${key}`}
            className="px-2.5 py-1 text-sm font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            {key}
          </a>
        ))}
      </nav>

      {sortedKeys.map((key) => (
        <section key={key} id={`section-${key}`} className="mb-10">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b border-border sticky top-14 bg-background z-10">
            {key}
            <span className="text-sm font-normal text-muted ml-2">
              ({grouped.get(key)!.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
            {grouped.get(key)!.map((page) => (
              <Link
                key={page.slug}
                href={`/wiki/${page.slug}`}
                className="text-sm py-1 hover:text-primary transition-colors truncate block"
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
