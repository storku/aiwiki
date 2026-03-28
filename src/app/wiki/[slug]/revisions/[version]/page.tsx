import { notFound } from "next/navigation";
import Link from "next/link";
import { getRevisionByVersion } from "@/lib/content";
import WikiContent from "@/components/WikiContent";
import type { Metadata } from "next";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string; version: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, version } = await params;
  const rev = await getRevisionByVersion(slug, parseInt(version));
  if (!rev) return {};
  return {
    title: `v${rev.version} - ${rev.pageTitle} | AI Wiki`,
    description: `Revision ${rev.version} of "${rev.pageTitle}" on AI Wiki.`,
  };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function RevisionPage({ params }: Props) {
  const { slug, version: versionStr } = await params;
  const version = parseInt(versionStr);

  if (isNaN(version) || version < 1) {
    notFound();
  }

  const rev = await getRevisionByVersion(slug, version);

  if (!rev) {
    notFound();
  }

  const isCurrent = rev.version === rev.currentVersion;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href="/wiki" className="breadcrumb-link hover:text-primary transition-colors">Wiki</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href={`/wiki/${slug}`} className="breadcrumb-link hover:text-primary transition-colors truncate max-w-[120px]">{rev.pageTitle}</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href={`/wiki/${slug}/history`} className="breadcrumb-link hover:text-primary transition-colors">History</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium">v{rev.version}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="article-accent-bar mb-6" />

        {/* Old revision banner */}
        {!isCurrent && (
          <div className="flex items-center gap-3 p-4 mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div className="text-sm">
              <p className="font-medium text-foreground">You are viewing an older revision of this page.</p>
              <p className="text-muted mt-0.5">
                This is version {rev.version} of {rev.currentVersion}.{" "}
                <Link href={`/wiki/${slug}`} className="text-primary hover:underline">
                  View current version
                </Link>
              </p>
            </div>
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
          {rev.pageTitle}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono font-medium">
            v{rev.version}
          </span>
          {isCurrent && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              Current version
            </span>
          )}
          {rev.aiAssisted && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              AI assisted
            </span>
          )}
          <span className="text-muted">{formatDate(rev.createdAt)}</span>
          {rev.editorId && (
            <span className="text-muted">by {rev.editorId}</span>
          )}
        </div>

        {rev.summary && (
          <p className="mt-3 text-sm text-muted italic">
            &ldquo;{rev.summary}&rdquo;
          </p>
        )}
      </header>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          {rev.version > 1 && (
            <Link
              href={`/wiki/${slug}/revisions/${rev.version - 1}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              v{rev.version - 1}
            </Link>
          )}
          {rev.version < rev.currentVersion && (
            <Link
              href={`/wiki/${slug}/revisions/${rev.version + 1}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:border-primary hover:text-primary transition-colors"
            >
              v{rev.version + 1}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          )}
        </div>

        <Link
          href={`/wiki/${slug}/history`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:border-primary hover:text-primary transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          All revisions
        </Link>
      </div>

      {/* Content */}
      <WikiContent content={rev.content} />
    </div>
  );
}
