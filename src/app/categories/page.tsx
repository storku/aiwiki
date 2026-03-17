import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse AI Wiki articles by category.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div>
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span className="text-foreground">Categories</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Categories</h1>
      <p className="text-muted mb-8">{categories.length} categories</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/categories/${encodeURIComponent(cat.name)}`}
            className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
          >
            <span className="font-medium group-hover:text-primary transition-colors">
              {cat.name.replace(/_/g, " ")}
            </span>
            <span className="text-sm text-muted bg-surface px-2 py-0.5 rounded-md">
              {cat.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
