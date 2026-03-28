import { notFound } from "next/navigation";
import Link from "next/link";
import { getPageBySlug, getPageRevisions } from "@/lib/content";
import type { Metadata } from "next";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return {};
  return {
    title: `Revision History - ${page.title}`,
    description: `View the edit history of "${page.title}" on AI Wiki.`,
  };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export default async function HistoryPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const revisions = await getPageRevisions(slug);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="breadcrumb-link hover:text-primary transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href="/wiki" className="breadcrumb-link hover:text-primary transition-colors">Wiki</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href={`/wiki/${slug}`} className="breadcrumb-link hover:text-primary transition-colors truncate max-w-[150px]">{page.title}</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted/40"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-foreground font-medium">History</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="article-accent-bar mb-6" />
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Revision History
        </h1>
        <p className="text-muted">
          <Link href={`/wiki/${slug}`} className="text-primary hover:underline">{page.title}</Link>
          {" "}&middot; {revisions.length} revision{revisions.length !== 1 ? "s" : ""}
        </p>
      </header>

      {/* Revision list */}
      {revisions.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-lg font-medium mb-1">No revisions found</p>
          <p className="text-sm">This page has no recorded edit history.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-1">
            {revisions.map((rev, idx) => (
              <Link
                key={rev.id}
                href={`/wiki/${slug}/revisions/${rev.version}`}
                className="card group relative flex items-start gap-4 p-4 pl-12"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3 top-5 w-3 h-3 rounded-full border-2 ${
                  idx === 0
                    ? "bg-primary border-primary"
                    : "bg-background border-border group-hover:border-primary"
                } transition-colors`} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-surface border border-border text-xs font-mono font-medium">
                      v{rev.version}
                    </span>
                    {idx === 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Current
                      </span>
                    )}
                    {rev.aiAssisted && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        AI assisted
                      </span>
                    )}
                  </div>

                  <p className="text-sm mt-1.5 text-foreground group-hover:text-primary transition-colors">
                    {rev.summary || "No summary provided"}
                  </p>

                  <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                    <span title={formatDate(rev.createdAt)}>
                      {timeAgo(rev.createdAt)}
                    </span>
                    <span>&middot;</span>
                    <span>{formatDate(rev.createdAt)}</span>
                    {rev.editorId && (
                      <>
                        <span>&middot;</span>
                        <span>{rev.editorId}</span>
                      </>
                    )}
                  </div>
                </div>

                <svg className="shrink-0 text-muted/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
