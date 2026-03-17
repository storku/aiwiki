import Link from "next/link";
import { searchPages } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search: ${q}` : "Search",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q || "";
  const results = query ? searchPages(query) : [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search</h1>

      <form action="/search" method="GET" className="mb-8">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Search articles..."
          className="w-full max-w-lg px-4 py-2 rounded-lg border border-border bg-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
          autoFocus
        />
      </form>

      {query && (
        <p className="text-muted mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;
          {query}&rdquo;
        </p>
      )}

      <div className="space-y-2">
        {results.map((page) => (
          <Link
            key={page.slug}
            href={`/wiki/${page.slug}`}
            className="block p-3 rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all"
          >
            <h2 className="font-semibold">{page.title}</h2>
            {page.categories.length > 0 && (
              <p className="text-xs text-muted mt-1">
                {page.categories.slice(0, 5).join(", ")}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
