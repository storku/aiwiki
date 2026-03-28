import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getPageBySlug, getRelatedPages } from "@/lib/content";
import { addHeadingIds } from "@/lib/html-utils";
import WikiContent from "@/components/WikiContent";
import TableOfContents from "@/components/TableOfContents";
import MobileToc from "@/components/MobileToc";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedArticles from "@/components/RelatedArticles";
import type { Metadata } from "next";

export const dynamicParams = true;
export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.excerpt,
    alternates: {
      canonical: `https://aiwiki.ai/wiki/${slug}`,
    },
    openGraph: {
      title: `${page.title} | AI Wiki`,
      description: page.excerpt,
      type: "article",
    },
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Detect redirect pages: content_html may contain a MediaWiki redirect message
  // while the markdown content field has the actual article text.
  let contentHtmlToUse = page.contentHtml;

  if (
    contentHtmlToUse &&
    (contentHtmlToUse.includes('class="redirectMsg"') ||
      contentHtmlToUse.includes("Redirect to:"))
  ) {
    // content_html is a redirect. Check if markdown content is also a redirect.
    const contentIsRedirect =
      page.content && page.content.trimStart().startsWith("Redirect to:");

    if (contentIsRedirect) {
      // Both fields are redirects: this is a genuine redirect page.
      // Parse the target slug from the markdown link, e.g. "[LLMs](/wiki/llms)"
      const linkMatch = page.content.match(/\[.*?\]\(\/wiki\/([^)]+)\)/);
      if (linkMatch) {
        redirect(`/wiki/${linkMatch[1]}`);
      }
    } else {
      // Only content_html is a redirect but content has real article text.
      // Discard the redirect HTML so the markdown renderer is used instead.
      contentHtmlToUse = null;
    }
  }

  // Add heading IDs to pre-rendered HTML for TOC anchor links
  const processedHtml = contentHtmlToUse ? addHeadingIds(contentHtmlToUse) : null;

  const related = await getRelatedPages(page.slug, page.categories);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.excerpt,
    url: `https://aiwiki.ai/wiki/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "AI Wiki",
      url: "https://aiwiki.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aiwiki.ai/wiki/${slug}`,
    },
    articleSection: page.categories,
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex gap-10">
        {/* Main content */}
        <article className="flex-1 min-w-0 animate-fade-in">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
            <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
            <Link href="/wiki" className="breadcrumb-link hover:text-primary transition-colors">Wiki</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
            <span className="text-foreground font-medium truncate max-w-[120px] sm:max-w-[200px]">{page.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-8 sm:mb-10">
            <div className="article-accent-bar mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
              {page.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {page.categories.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {page.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/categories/${encodeURIComponent(cat)}`}
                      className="category-badge inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-medium"
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
              <Link
                href={`/wiki/${slug}/history`}
                className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l3 3" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4" />
                  <path d="M3 16l-1.5-3L5 12" />
                </svg>
                History
              </Link>
            </div>
          </header>

          {/* Mobile Table of Contents */}
          <MobileToc content={page.content} contentHtml={processedHtml} />

          {/* Content */}
          <WikiContent content={page.content} contentHtml={processedHtml} />

          {/* Related Articles */}
          <RelatedArticles related={related} />
        </article>

        {/* Table of Contents sidebar */}
        <TableOfContents content={page.content} contentHtml={processedHtml} />
      </div>
    </>
  );
}
