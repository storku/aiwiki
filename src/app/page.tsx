import Link from "next/link";
import { getAllPages, getAllCategories } from "@/lib/content";

const POPULAR_SLUGS = [
  "chatgpt",
  "ai",
  "dall-e",
  "gpt-4",
  "large_language_model",
  "midjourney",
  "claude",
  "anthropic",
  "transformer",
  "neural_network",
  "deep_learning",
  "machine_learning",
  "openai",
  "stable_diffusion",
  "reinforcement_learning",
  "natural_language_processing",
  "computer_vision",
  "artificial_intelligence",
];

const TOPIC_SECTIONS = [
  {
    title: "Core Concepts",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    slugs: ["machine_learning", "deep_learning", "neural_network", "transformer", "reinforcement_learning", "natural_language_processing"],
  },
  {
    title: "AI Products",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    slugs: ["chatgpt", "dall-e", "midjourney", "claude", "stable_diffusion", "gpt-4"],
  },
  {
    title: "AI Companies",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    slugs: ["openai", "anthropic", "google_deepmind", "meta_ai", "stability_ai", "hugging_face"],
  },
];

export default function HomePage() {
  const pages = getAllPages();
  const categories = getAllCategories()
    .filter((c) => c.name !== "Plugin" && !c.name.startsWith("Not_"))
    .slice(0, 16);

  const totalCategories = getAllCategories().length;

  return (
    <div>
      {/* Hero */}
      <section className="relative hero-glow pt-16 sm:pt-24 pb-12 sm:pb-16 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 leading-[1.1]">
          The Encyclopedia of
          <br />
          <span className="hero-gradient">Artificial Intelligence</span>
        </h1>
        <p className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Explore {pages.length.toLocaleString()} articles covering everything from machine learning fundamentals to the latest AI breakthroughs.
        </p>

        {/* Search CTA */}
        <div className="max-w-lg mx-auto mb-10">
          <Link href="/search" className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-lg transition-all">
            <svg className="text-muted shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="text-muted text-sm text-left flex-1">Search for any AI topic...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border bg-background text-[10px] text-muted font-mono">
              <span className="text-[11px]">Ctrl</span>K
            </kbd>
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          {["ChatGPT", "GPT-4", "DALL-E", "Machine Learning", "Neural Network"].map((label) => {
            const slug = label.toLowerCase().replace(/ /g, "_").replace(/-/g, "-");
            return (
              <Link
                key={slug}
                href={`/wiki/${slug}`}
                className="quick-link px-3 py-1 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-3 sm:gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {[
          { value: pages.length.toLocaleString(), label: "Articles", color: "text-primary" },
          { value: totalCategories.toString(), label: "Categories", color: "text-accent" },
          { value: "Free", label: "Open Access", color: "text-success" },
        ].map((stat) => (
          <div key={stat.label} className="stat-card text-center p-4 sm:p-5">
            <p className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs sm:text-sm text-foreground/60 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Topic Sections */}
      {TOPIC_SECTIONS.map((section, i) => {
        const sectionPages = section.slugs
          .map((slug) => pages.find((p) => p.slug === slug))
          .filter(Boolean);
        if (sectionPages.length === 0) return null;
        return (
          <section
            key={section.title}
            className="mb-14 animate-fade-in"
            style={{ animationDelay: `${0.15 + i * 0.05}s` }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-primary-light text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={section.icon} />
                </svg>
              </div>
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sectionPages.map((page) =>
                page ? (
                  <Link
                    key={page.slug}
                    href={`/wiki/${page.slug}`}
                    className="card group flex items-center gap-3 p-4"
                  >
                    <div className="icon-box w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0 text-muted group-hover:bg-primary-light group-hover:text-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      {page.categories.length > 0 && (
                        <p className="text-xs text-muted mt-0.5 truncate">
                          {page.categories.slice(0, 2).join(" / ")}
                        </p>
                      )}
                    </div>
                    <svg className="ml-auto shrink-0 text-muted/40 group-hover:text-primary transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        );
      })}

      {/* Categories */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-accent-light text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Browse by Category</h2>
          </div>
          <Link href="/categories" className="text-sm text-primary hover:underline">
            All categories &rarr;
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface border border-border text-sm hover:border-primary hover:text-primary transition-all hover:shadow-sm"
            >
              <span>{cat.name.replace(/_/g, " ")}</span>
              <span className="cat-count text-[11px] font-medium text-muted bg-border/40 px-1.5 py-0.5 rounded-md">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore CTA */}
      <section className="explore-cta mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-border text-center animate-fade-in" style={{ animationDelay: "0.35s" }}>
        <h2 className="text-2xl font-bold mb-2">Explore the Full Encyclopedia</h2>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Dive into {pages.length.toLocaleString()} articles spanning every corner of artificial intelligence.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/wiki"
            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-sm"
          >
            Browse All Pages
          </Link>
          <Link
            href="/search"
            className="px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-surface transition-colors"
          >
            Search Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
