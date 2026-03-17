import Link from "next/link";
import { getAllPages } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all articles in the AI Wiki encyclopedia.",
};

export default function AllPagesPage() {
  const pages = getAllPages();

  // Group pages by first letter
  const grouped = new Map<string, typeof pages>();
  for (const page of pages) {
    const letter = page.title[0].toUpperCase();
    const key = /[A-Z]/.test(letter) ? letter : "#";
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
      <h1 className="text-3xl font-bold mb-2">All Pages</h1>
      <p className="text-muted mb-6">
        {pages.length.toLocaleString()} articles
      </p>

      <nav className="flex flex-wrap gap-1 mb-8">
        {sortedKeys.map((key) => (
          <a
            key={key}
            href={`#section-${key}`}
            className="px-2 py-1 text-sm rounded border border-border hover:border-primary hover:text-primary transition-colors"
          >
            {key}
          </a>
        ))}
      </nav>

      {sortedKeys.map((key) => (
        <section key={key} id={`section-${key}`} className="mb-8">
          <h2 className="text-xl font-bold mb-3 pb-1 border-b border-border">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            {grouped.get(key)!.map((page) => (
              <Link
                key={page.slug}
                href={`/wiki/${page.slug}`}
                className="text-sm py-0.5 hover:text-primary transition-colors truncate"
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
