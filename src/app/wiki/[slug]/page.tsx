import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getRelatedPages, resolvePageBySlug } from "@/lib/content";
import { addHeadingIds, fixReferences } from "@/lib/html-utils";
import { sanitizeArticleHtml } from "@/lib/html-sanitize";
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
  const { page, canonicalSlug } = await resolvePageBySlug(slug);
  if (!page) return {};
  const pageSlug = canonicalSlug || page.slug;
  const description = createArticleSummary(page.content, page.excerpt);
  return {
    title: page.title,
    description,
    alternates: {
      canonical: `https://aiwiki.ai/wiki/${pageSlug}`,
    },
    openGraph: {
      title: `${page.title} | AI Wiki`,
      description,
      type: "article",
      url: `https://aiwiki.ai/wiki/${pageSlug}`,
      siteName: "AI Wiki",
      modifiedTime: page.updatedAt.toISOString(),
      section: page.categories[0]?.replace(/_/g, " "),
      tags: page.categories.map((c) => c.replace(/_/g, " ")),
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | AI Wiki`,
      description,
    },
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  const { page, canonicalSlug } = await resolvePageBySlug(slug);

  if (page && canonicalSlug && canonicalSlug !== slug) {
    redirect(`/wiki/${canonicalSlug}`);
  }

  if (!page) {
    notFound();
  }

  const pageSlug = canonicalSlug || page.slug;
  const articleSummary = createArticleSummary(page.content, page.excerpt);

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
    ? sanitizeArticleHtml(fixReferences(contentHtmlToUse, page.content))
    : null;
  if (processedHtml) {
    processedHtml = addHeadingIds(processedHtml);
  }

  const wordCount = page.content
    ? page.content.split(/\s+/).filter((w) => w.length > 0).length
    : 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.excerpt,
    url: `https://aiwiki.ai/wiki/${pageSlug}`,
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
      "@id": `https://aiwiki.ai/wiki/${pageSlug}`,
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
        item: `https://aiwiki.ai/wiki/${pageSlug}`,
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
            <Link href="/" className="breadcrumb-link inline-flex min-h-10 items-center hover:text-primary transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
            <Link href="/wiki" className="breadcrumb-link inline-flex min-h-10 items-center hover:text-primary transition-colors">Wiki</Link>
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
                      className="category-badge inline-flex min-h-10 items-center px-2.5 py-1.5 rounded-md bg-surface border border-border text-xs font-medium"
                    >
                      {cat.replace(/_/g, " ")}
                    </Link>
                  ))}
                </div>
              )}
              <div className="flex min-h-10 items-center gap-1.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {page.readingTime} min read
              </div>
              <div className="flex min-h-10 items-center gap-1.5 text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Updated {page.updatedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </div>
              <Link
                href={`/wiki/${pageSlug}/edit`}
                prefetch={false}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2 text-sm text-muted hover:bg-surface hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit
              </Link>
              <Link
                href={`/wiki/${pageSlug}/history`}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2 text-sm text-muted hover:bg-surface hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l3 3" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4" />
                  <path d="M3 16l-1.5-3L5 12" />
                </svg>
                History
              </Link>
            </div>
            {articleSummary && (
              <aside className="article-summary-card mt-5 rounded-xl border border-border bg-surface px-4 py-3.5">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted">
                  At a glance
                </p>
                <p className="text-sm leading-6 text-muted sm:text-[15px]">
                  {articleSummary}
                </p>
              </aside>
            )}
          </header>

          {/* Mobile Table of Contents */}
          <MobileToc content={page.content} contentHtml={processedHtml} />

          {/* Content */}
          <WikiContent content={page.content} contentHtml={processedHtml} />

          {/* Related Articles (streamed separately) */}
          <Suspense>
            <RelatedArticlesAsync slug={page.slug} categories={page.categories} />
          </Suspense>
        </article>

        {/* Table of Contents sidebar */}
        <TableOfContents content={page.content} contentHtml={processedHtml} />
      </div>
    </>
  );
}

async function RelatedArticlesAsync({ slug, categories }: { slug: string; categories: string[] }) {
  const related = await getRelatedPages(slug, categories);
  if (related.length === 0) return null;
  return <RelatedArticles related={related} />;
}

function createArticleSummary(content: string, fallback: string, maxLength = 220): string {
  const blocks = content
    .replace(/^---[\s\S]*?---/, "")
    .split(/\n{2,}/)
    .map(cleanSummaryBlock)
    .filter((block) => block.length >= 80);

  const summary = blocks[0] || cleanSummaryBlock(fallback);
  if (summary.length <= maxLength) return summary;
  return `${summary.slice(0, maxLength).replace(/\s+\S*$/, "")}...`;
}

function cleanSummaryBlock(block: string): string {
  const cleanedLines = block
    .split("\n")
    .map(cleanSummaryInline)
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false;
      if (/^#{1,6}\s+/.test(line)) return false;
      if (/^see also:/i.test(line)) return false;
      if (/^figure\s+\d+:/i.test(line)) return false;
      if (/^[*-]\s*$/.test(line)) return false;
      return true;
    });

  return cleanedLines.join(" ").replace(/\s+/g, " ").trim();
}

function cleanSummaryInline(value: string): string {
  return value
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[[^\]]*]\(\/wiki\/file[^)]*\)/gi, "")
    .replace(/\[\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/\[&#91;?\d+&#93;?]\([^)]*\)/g, "")
    .replace(/\[\d+]/g, "")
    .replace(/&#160;/g, " ")
    .replace(/&#91;/g, "[")
    .replace(/&#93;/g, "]")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ");
}
