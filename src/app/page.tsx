import Link from "next/link";
import { getAllPages, getAllCategories } from "@/lib/content";

export const revalidate = 3600;

const TOPIC_SECTIONS = [
  {
    title: "Core Concepts",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    darkBgColor: "[data-theme='dark'] bg-blue-500/10",
    slugs: ["machine_learning", "deep_learning", "neural_network", "transformer", "reinforcement_learning", "natural_language_processing"],
  },
  {
    title: "AI Products",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    slugs: ["chatgpt", "dall-e", "midjourney", "claude", "stable_diffusion", "gpt-4"],
  },
  {
    title: "AI Companies",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    slugs: ["openai", "anthropic", "google_deepmind", "meta_ai", "stability_ai", "hugging_face"],
  },
];

const STAT_ICONS = [
  // Articles - document icon
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  // Categories - grid icon
  "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  // Free - unlock icon
  "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
];

export default async function HomePage() {
  const pages = await getAllPages();
  const allCategories = await getAllCategories();
  const categories = allCategories
    .filter((c) => c.name !== "Plugin" && !c.name.startsWith("Not_"))
    .slice(0, 16);

  const totalCategories = allCategories.length;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Wiki",
    url: "https://aiwiki.ai",
    description: `Comprehensive encyclopedia covering ${pages.length.toLocaleString()} articles on artificial intelligence.`,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aiwiki.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Hero */}
      <section className="relative hero-glow pt-12 sm:pt-28 pb-12 sm:pb-20 text-center animate-fade-in-up">
        {/* Decorative orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {pages.length.toLocaleString()}+ articles and growing
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            The Encyclopedia of
            <br />
            <span className="hero-gradient">Artificial Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Explore {pages.length.toLocaleString()} articles covering everything from machine learning fundamentals to the latest AI breakthroughs.
          </p>

          {/* Search CTA */}
          <div className="max-w-lg mx-auto mb-10">
            <Link href="/search" className="search-input-hero group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-primary/30 transition-all shadow-sm">
              <svg className="text-muted shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-muted text-sm text-left flex-1">Search for any AI topic...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 rounded-md border border-border bg-surface text-[10px] text-muted font-mono">
                <span className="text-[11px]">Ctrl</span>K
              </kbd>
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 text-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {["ChatGPT", "GPT-4", "DALL-E", "Machine Learning", "Neural Network"].map((label) => {
              const slug = label.toLowerCase().replace(/ /g, "_").replace(/-/g, "-");
              return (
                <Link
                  key={slug}
                  href={`/wiki/${slug}`}
                  className="quick-link px-3.5 py-1.5 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all text-muted hover:shadow-sm"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-2 sm:gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        {[
          { value: pages.length.toLocaleString(), label: "Articles", color: "text-primary", icon: STAT_ICONS[0] },
          { value: totalCategories.toString(), label: "Categories", color: "text-accent", icon: STAT_ICONS[1] },
          { value: "Free", label: "Open Access", color: "text-success", icon: STAT_ICONS[2] },
        ].map((stat) => (
          <div key={stat.label} className="stat-card text-center p-3 sm:p-6 group cursor-default">
            <div className="flex justify-center mb-1.5 sm:mb-2">
              <svg className={`${stat.color} opacity-40 group-hover:opacity-70 transition-opacity`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={stat.icon} />
              </svg>
            </div>
            <p className={`text-xl sm:text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
            <p className="text-[11px] sm:text-sm text-muted mt-0.5 sm:mt-1">{stat.label}</p>
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
            style={{ animationDelay: `${0.2 + i * 0.05}s` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`section-header-icon p-2.5 rounded-xl bg-primary-light ${section.color}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={section.icon} />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">{section.title}</h2>
                <p className="text-xs text-muted">{sectionPages.length} articles</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sectionPages.map((page) =>
                page ? (
                  <Link
                    key={page.slug}
                    href={`/wiki/${page.slug}`}
                    className="card group flex items-center gap-3.5 p-4"
                  >
                    <div className="icon-box w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0 text-muted group-hover:bg-primary-light group-hover:text-primary transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      {page.categories.length > 0 && (
                        <p className="text-xs text-muted mt-0.5 truncate">
                          {page.categories.slice(0, 2).join(" / ")}
                        </p>
                      )}
                    </div>
                    <svg className="shrink-0 text-muted/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.35s" }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="section-header-icon p-2.5 rounded-xl bg-accent-light text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Browse by Category</h2>
              <p className="text-xs text-muted">{totalCategories} total categories</p>
            </div>
          </div>
          <Link href="/categories" className="text-sm text-primary hover:underline font-medium">
            View all &rarr;
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="category-badge inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface border border-border text-sm"
            >
              <span>{cat.name.replace(/_/g, " ")}</span>
              <span className="cat-count text-[11px] font-medium text-muted bg-border/40 px-1.5 py-0.5 rounded-md">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore CTA */}
      <section className="explore-cta mb-12 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-border text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Explore the Full Encyclopedia</h2>
        <p className="text-muted mb-8 max-w-md mx-auto text-sm sm:text-base">
          Dive into {pages.length.toLocaleString()} articles spanning every corner of artificial intelligence.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/wiki"
            className="btn-primary px-6 py-2.5 rounded-lg font-medium"
          >
            Browse All Pages
          </Link>
          <Link
            href="/search"
            className="px-6 py-2.5 rounded-lg border border-border font-medium hover:bg-surface hover:border-primary/30 transition-all"
          >
            Search Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
