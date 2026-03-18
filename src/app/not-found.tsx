import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-24 max-w-md mx-auto animate-fade-in-up">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-border/30 border border-border flex items-center justify-center text-muted/50">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-primary mb-2">404</p>
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-foreground/50 mb-8">
        This article doesn&apos;t exist yet. It may have been moved or removed.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/search"
          className="px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-surface transition-colors"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
