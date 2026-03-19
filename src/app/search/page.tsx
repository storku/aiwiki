import Link from "next/link";
import SearchResults from "@/components/SearchResults";
import type { Metadata } from "next";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search: ${q}` : "Search" };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium">Search</span>
      </nav>

      <div className="mb-6">
        <div className="article-accent-bar mb-4" />
        <h1 className="text-3xl font-extrabold tracking-tight">Search</h1>
      </div>

      <SearchResults initialQuery={q || ""} />
    </div>
  );
}
