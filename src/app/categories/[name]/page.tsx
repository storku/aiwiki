import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPages, getAllCategories } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ name: encodeURIComponent(cat.name) }));
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
  const pages = getAllPages().filter((p) => p.categories.includes(catName));

  if (pages.length === 0) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground truncate">{catName.replace(/_/g, " ")}</span>
      </nav>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-medium mb-3">
          Category
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">
          {catName.replace(/_/g, " ")}
        </h1>
        <p className="text-muted">
          {pages.length} article{pages.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pages.map((page, i) => (
          <Link
            key={page.slug}
            href={`/wiki/${page.slug}`}
            className="card group p-4 animate-fade-in"
            style={{ animationDelay: `${i * 0.015}s` }}
          >
            <h2 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {page.title}
            </h2>
            {page.categories.filter((c) => c !== catName).length > 0 && (
              <p className="text-xs text-muted mt-1.5 truncate">
                {page.categories.filter((c) => c !== catName).slice(0, 3).join(", ")}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
