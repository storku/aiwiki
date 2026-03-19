import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/content";
import PaginatedGrid from "@/components/PaginatedGrid";
import type { Metadata } from "next";

export const dynamicParams = true;
export const revalidate = 3600;

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const catName = decodeURIComponent(name);
  return {
    title: catName.replace(/_/g, " "),
    description: `Browse AI Wiki articles in the ${catName.replace(/_/g, " ")} category.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { name } = await params;
  const catName = decodeURIComponent(name);
  const allPages = await getAllPages();
  const pages = allPages.filter((p) => p.categories.includes(catName));

  if (pages.length === 0) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href="/categories" className="breadcrumb-link hover:text-primary transition-colors">Categories</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium truncate">{catName.replace(/_/g, " ")}</span>
      </nav>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium mb-3">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
          Category
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">
          {catName.replace(/_/g, " ")}
        </h1>
        <p className="text-muted">
          {pages.length} article{pages.length !== 1 ? "s" : ""}
        </p>
      </div>

      <PaginatedGrid pages={pages} categoryName={catName} />
    </div>
  );
}
