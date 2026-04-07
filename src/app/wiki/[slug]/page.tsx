import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getPageBySlug, getRelatedPages } from "@/lib/content";
import { addHeadingIds, fixReferences } from "@/lib/html-utils";
import WikiContent from "@/components/WikiContent";
import TableOfContents from "@/components/TableOfContents";
import MobileToc from "@/components/MobileToc";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedArticles from "@/components/RelatedArticles";
import type { Metadata } from "next";

export const dynamicParams = true;
export const revalidate = 86400;

const POPULAR_SLUGS = [
  "chatgpt", "ai", "dall-e", "gpt-4", "large_language_model",
  "midjourney", "claude", "anthropic", "transformer", "neural_network",
  "deep_learning", "machine_learning", "openai", "stable_diffusion",
  "reinforcement_learning", "natural_language_processing", "gpt-4o",
  "computer_vision", "generative_ai", "prompt_engineering",
];

export async function generateStaticParams() {
  return POPULAR_SLUGS.map((slug) => ({ slug }));
}

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
      url: `https://aiwiki.ai/wiki/${slug}`,
      siteName: "AI Wiki",
      modifiedTime: page.updatedAt.toISOString(),
      section: page.categories[0]?.replace(/_/g, " "),
      tags: page.categories.map((c) => c.replace(/_/g, " ")),
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | AI Wiki`,
      description: page.excerpt,
    },
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  let page = await getPageBySlug(slug);

  // If not found, try replacing dashes with underscores (wiki convention)
  if (!page && slug.includes("-")) {
    const underscoreSlug = slug.replace(/-/g, "_");
    if (underscoreSlug !== slug) {
      const altPage = await getPageBySlug(underscoreSlug);
      if (altPage) {
        redirect(`/wiki/${underscoreSlug}`);
      }
    }
  }

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

  // Process pre-rendered HTML: fix references, add heading IDs
  let processedHtml = contentHtmlToUse
    ? fixReferences(contentHtmlToUse, page.content)
    : null;
  if (processedHtml) {
    processedHtml = addHeadingIds(processedHtml);
  }

  const related = await getRelatedPages(page.slug, page.categories);

  const wordCount = page.content
    ? page.content.split(/\s+/).filter((w) => w.length > 0).length
    : 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.excerpt,
    url: `https://aiwiki.ai/wiki/${slug}`,
    dateModified: page.updatedAt.toISOString(),
    wordCount,
    publisher: {
      "@type": "Organization",
      name: "AI Wiki",
      url: "https://aiwiki.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://aiwiki.ai/favicon-32x32.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "AI Wiki",
      url: "https://aiwiki.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aiwiki.ai/wiki/${slug}`,
    },
    articleSection: page.categories.map((c) => c.replace(/_/g, " ")),
    inLanguage: "en",
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aiwiki.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wiki",
        item: "https://aiwiki.ai/wiki",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://aiwiki.ai/wiki/${slug}`,
      },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
              <div className="flex items-center gap-1.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Updated {page.updatedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </div>
              <Link
                href={`/wiki/${slug}/edit`}
                className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit
              </Link>
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
