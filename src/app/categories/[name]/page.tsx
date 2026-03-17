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
    title: `Category: ${catName.replace(/_/g, " ")}`,
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
      <h1 className="text-3xl font-bold mb-2">
        {catName.replace(/_/g, " ")}
      </h1>
      <p className="text-muted mb-6">
        {pages.length} article{pages.length !== 1 ? "s" : ""} in this category
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/wiki/${page.slug}`}
            className="block p-3 rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all"
          >
            <h2 className="font-semibold text-sm">{page.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
