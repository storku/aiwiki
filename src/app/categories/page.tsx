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
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <p className="text-muted mb-6">{categories.length} categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/categories/${encodeURIComponent(cat.name)}`}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all"
          >
            <span className="font-medium">{cat.name.replace(/_/g, " ")}</span>
            <span className="text-sm text-muted">{cat.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
