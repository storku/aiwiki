import { notFound } from "next/navigation";
import Link from "next/link";
import { getPageBySlug, getAllSlugs, getRelatedPages } from "@/lib/content";
import WikiContent from "@/components/WikiContent";
import TableOfContents from "@/components/TableOfContents";
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
    description: page.excerpt,
    openGraph: {
      title: `${page.title} | AI Wiki`,
      description: page.excerpt,
      type: "article",
    },
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const related = getRelatedPages(page.slug, page.categories);

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/wiki" className="hover:text-foreground transition-colors">
            Wiki
          </Link>
          <span>/</span>
          <span className="text-foreground truncate">{page.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {page.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {page.categories.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {page.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${encodeURIComponent(cat)}`}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-surface border border-border text-xs hover:border-primary hover:text-primary transition-colors"
                  >
                    {cat.replace(/_/g, " ")}
                  </Link>
                ))}
              </div>
            )}
            <span className="text-muted">
              {page.readingTime} min read
            </span>
          </div>
        </header>

        {/* Content */}
        <WikiContent content={page.content} />

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/wiki/${r.slug}`}
                  className="block p-3 rounded-lg border border-border hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-sm">{r.title}</h3>
                  {r.categories.length > 0 && (
                    <p className="text-xs text-muted mt-1 truncate">
                      {r.categories.slice(0, 3).join(", ")}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Table of Contents sidebar */}
      <TableOfContents content={page.content} />
    </div>
  );
}
