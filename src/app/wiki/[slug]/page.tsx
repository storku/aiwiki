import { notFound } from "next/navigation";
import Link from "next/link";
import { getPageBySlug, getAllSlugs } from "@/lib/content";
import WikiContent from "@/components/WikiContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: `Learn about ${page.title} in the AI Wiki encyclopedia.`,
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{page.title}</h1>
        {page.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {page.categories.map((cat) => (
              <Link
                key={cat}
                href={`/categories/${encodeURIComponent(cat)}`}
                className="text-xs px-2 py-1 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {cat.replace(/_/g, " ")}
              </Link>
            ))}
          </div>
        )}
      </header>
      <WikiContent content={page.content} />
    </article>
  );
}
