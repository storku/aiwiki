import Link from "next/link";
import { getAllPages } from "@/lib/content";
import PaginatedPageList from "@/components/PaginatedPageList";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all 2,000+ articles in the AI Wiki encyclopedia.",
  alternates: {
    canonical: "https://aiwiki.ai/wiki",
  },
};

export default async function AllPagesPage() {
  const pages = await getAllPages();

  return (
    <div className="animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium">All Pages</span>
      </nav>

      <div className="mb-8">
        <div className="article-accent-bar mb-4" />
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">All Pages</h1>
        <p className="text-muted">
          {pages.length.toLocaleString()} articles in the encyclopedia
        </p>
      </div>

      <PaginatedPageList pages={pages} />
    </div>
  );
}
