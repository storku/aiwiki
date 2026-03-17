import Link from "next/link";
import SearchResults from "@/components/SearchResults";
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

  return (
    <div className="max-w-2xl mx-auto">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span className="text-foreground">Search</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">Search</h1>
      <SearchResults initialQuery={q || ""} />
    </div>
  );
}
