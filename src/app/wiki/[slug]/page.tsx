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
  return getAllSlugs().map((slug) => ({ slug }));
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
    <div className="flex gap-10">
      {/* Main content */}
      <article className="flex-1 min-w-0 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          <Link href="/wiki" className="hover:text-foreground transition-colors">Wiki</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          <span className="text-foreground truncate max-w-[200px]">{page.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            {page.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {page.categories.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {page.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${encodeURIComponent(cat)}`}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {cat.replace(/_/g, " ")}
                  </Link>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1.5 text-sm text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {page.readingTime} min read
            </div>
          </div>
        </header>

        {/* Content */}
        <WikiContent content={page.content} />

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-5">
              <div className="icon-box p-1.5 rounded-md bg-surface text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                </svg>
              </div>
              <h2 className="text-lg font-bold">Related Articles</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/wiki/${r.slug}`}
                  className="card group p-4"
                >
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  {r.categories.length > 0 && (
                    <p className="text-xs text-muted mt-1.5 truncate">
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
