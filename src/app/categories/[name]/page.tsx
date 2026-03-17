import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPages, getAllCategories } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ name: encodeURIComponent(cat.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const catName = decodeURIComponent(name);
  return {
    title: `${catName.replace(/_/g, " ")}`,
    description: `Browse AI Wiki articles in the ${catName.replace(/_/g, " ")} category.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { name } = await params;
  const catName = decodeURIComponent(name);
  const allPages = getAllPages();
  const pages = allPages.filter((p) => p.categories.includes(catName));

  if (pages.length === 0) {
    notFound();
  }

  return (
    <div>
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
        <span>/</span>
        <span className="text-foreground">{catName.replace(/_/g, " ")}</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight mb-2">
        {catName.replace(/_/g, " ")}
      </h1>
      <p className="text-muted mb-8">
        {pages.length} article{pages.length !== 1 ? "s" : ""} in this category
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/wiki/${page.slug}`}
            className="group block p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
          >
            <h2 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {page.title}
            </h2>
            {page.categories.filter((c) => c !== catName).length > 0 && (
              <p className="text-xs text-muted mt-1 truncate">
                {page.categories
                  .filter((c) => c !== catName)
                  .slice(0, 3)
                  .join(", ")}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
