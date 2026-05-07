import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import CategoryBrowser from "@/components/CategoryBrowser";
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

      <CategoryBrowser categories={categories} />
    </div>
  );
}
