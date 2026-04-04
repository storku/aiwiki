import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse AI Wiki articles by category.",
  alternates: {
    canonical: "https://aiwiki.ai/categories",
  },
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium">Categories</span>
      </nav>

      <div className="mb-8">
        <div className="article-accent-bar mb-4" />
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">Categories</h1>
        <p className="text-muted">{categories.length} categories to explore</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            href={`/categories/${encodeURIComponent(cat.name)}`}
            className="card group flex items-center justify-between p-4 animate-fade-in"
            style={{ animationDelay: `${i * 0.015}s` }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="icon-box w-9 h-9 rounded-xl bg-surface flex items-center justify-center shrink-0 text-muted group-hover:bg-primary-light group-hover:text-primary transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <span className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                {cat.name.replace(/_/g, " ")}
              </span>
            </div>
            <span className="cat-count text-xs font-medium text-muted bg-surface px-2.5 py-1 rounded-md shrink-0 ml-2 border border-border">
              {cat.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
