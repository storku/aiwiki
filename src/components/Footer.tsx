import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 font-bold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>AI<span className="text-primary">Wiki</span></span>
          </div>
          <nav className="flex gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/wiki" className="hover:text-foreground transition-colors">All Pages</Link>
            <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
            <Link href="/search" className="hover:text-foreground transition-colors">Search</Link>
          </nav>
          <p className="text-xs text-muted">
            The encyclopedia of AI
          </p>
        </div>
      </div>
    </footer>
  );
}
