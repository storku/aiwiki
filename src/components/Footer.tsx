import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">AI</span>
              </div>
              <span className="font-bold">Wiki</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              The free encyclopedia of artificial intelligence. Explore 2,000+ articles on AI concepts, models, tools, and applications.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Navigate</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
              <Link href="/wiki" className="text-muted hover:text-foreground transition-colors">All Pages</Link>
              <Link href="/categories" className="text-muted hover:text-foreground transition-colors">Categories</Link>
              <Link href="/search" className="text-muted hover:text-foreground transition-colors">Search</Link>
            </nav>
          </div>

          {/* Popular */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Popular</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/wiki/chatgpt" className="text-muted hover:text-foreground transition-colors">ChatGPT</Link>
              <Link href="/wiki/large_language_model" className="text-muted hover:text-foreground transition-colors">Large Language Models</Link>
              <Link href="/wiki/deep_learning" className="text-muted hover:text-foreground transition-colors">Deep Learning</Link>
              <Link href="/wiki/neural_network" className="text-muted hover:text-foreground transition-colors">Neural Networks</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>AIWiki.ai</p>
          <p>Open knowledge for everyone</p>
        </div>
      </div>
    </footer>
  );
}
