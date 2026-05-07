import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 sm:mt-20 footer-gradient-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex min-h-11 items-center gap-2 mb-3 group rounded-lg">
              <Image
                src="/aiwiki_logo_symbol.png"
                alt="AI Wiki"
                width={28}
                height={28}
              />
              <Image
                src="/aiwiki_logo_words.png"
                alt="AI Wiki"
                width={80}
                height={17}
                className="logo-wordmark"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              The free encyclopedia of artificial intelligence. Explore 2,000+ articles on AI concepts, models, tools, and applications.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Navigate</p>
            <nav className="flex flex-col gap-1 text-sm">
              <Link href="/" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Home</Link>
              <Link href="/wiki" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">All Pages</Link>
              <Link href="/categories" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Categories</Link>
              <Link href="/search" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Search</Link>
            </nav>
          </div>

          {/* Popular */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Popular</p>
            <nav className="flex flex-col gap-1 text-sm">
              <Link href="/wiki/chatgpt" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">ChatGPT</Link>
              <Link href="/wiki/large_language_model" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Large Language Models</Link>
              <Link href="/wiki/deep_learning" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Deep Learning</Link>
              <Link href="/wiki/neural_network" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Neural Networks</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Legal</p>
            <nav className="flex flex-col gap-1 text-sm">
              <Link href="/about" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">About</Link>
              <Link href="/privacy" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="inline-flex min-h-10 items-center text-muted hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p className="font-medium">AIWiki.ai</p>
          <div className="flex items-center gap-4">
            <Link href="/feed.xml" className="flex min-h-10 items-center gap-1.5 hover:text-primary transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              RSS Feed
            </Link>
            <p>Open knowledge for everyone</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
