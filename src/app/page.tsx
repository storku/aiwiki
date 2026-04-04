import Link from "next/link";
import {
  getAllCategories,
  getPagesBySlugs,
  getRecentPagesWithCount,
  getRandomPages,
} from "@/lib/content";

export const revalidate = 86400;

const TOPIC_SECTIONS = [
  {
    title: "Core Concepts",
    color: "#3b82f6",
    slugs: [
      "machine_learning",
      "deep_learning",
      "neural_network",
      "transformer",
      "reinforcement_learning",
      "natural_language_processing",
    ],
  },
  {
    title: "AI Products",
    color: "#8b5cf6",
    slugs: ["chatgpt", "dall-e", "midjourney", "claude", "stable_diffusion", "gpt-4"],
  },
  {
    title: "AI Companies",
    color: "#10b981",
    slugs: [
      "openai",
      "anthropic",
      "google_deepmind",
      "meta_ai",
      "stability_ai",
      "hugging_face",
    ],
  },
];

export default async function HomePage() {
  const allSlugs = TOPIC_SECTIONS.flatMap((s) => s.slugs);
  const [topicPages, allCategories, { totalPages, recentPages }, randomPages] =
    await Promise.all([
      getPagesBySlugs(allSlugs),
      getAllCategories(),
      getRecentPagesWithCount(8),
      getRandomPages(5),
    ]);

  const categories = allCategories
    .filter((c) => c.name !== "Plugin" && !c.name.startsWith("Not_"))
    .slice(0, 24);

  const totalCategories = allCategories.length;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Wiki",
    url: "https://aiwiki.ai",
    description: `Comprehensive encyclopedia covering ${totalPages.toLocaleString()} articles on artificial intelligence.`,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aiwiki.ai/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Wiki",
    url: "https://aiwiki.ai",
    logo: "https://aiwiki.ai/favicon-32x32.png",
    description:
      "AI Wiki is a free, open-access encyclopedia dedicated to artificial intelligence.",
    sameAs: [],
  };

  return (
    <div className="wiki-portal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Welcome banner */}
      <div className="portal-welcome">
        <h1 className="portal-welcome-title">
          Welcome to <span className="text-primary font-extrabold">AI Wiki</span>
        </h1>
        <p className="portal-welcome-subtitle">
          The free encyclopedia of artificial intelligence that{" "}
          <Link href="/wiki" className="text-primary hover:underline font-medium">
            anyone can edit
          </Link>
          .
        </p>
        <p className="portal-welcome-stats">
          {totalPages.toLocaleString()} articles in English &middot;{" "}
          {totalCategories} categories
        </p>

        {/* Search */}
        <div className="portal-search-wrapper">
          <Link
            href="/search"
            className="portal-search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>Search AI Wiki...</span>
            <kbd className="portal-search-kbd">
              <span>Ctrl</span>K
            </kbd>
          </Link>
        </div>
      </div>

      {/* Main two-column portal grid */}
      <div className="portal-grid">
        {/* Left column */}
        <div className="portal-column">
          {/* Featured articles / Did you know */}
          <section className="portal-section">
            <div className="portal-section-header" style={{ borderColor: "#3b82f6" }}>
              <h2>Featured Articles</h2>
            </div>
            <div className="portal-section-body">
              {randomPages.map((page) => (
                <div key={page.slug} className="portal-featured-item">
                  <Link
                    href={`/wiki/${page.slug}`}
                    className="portal-featured-title"
                  >
                    {page.title}
                  </Link>
                  <p className="portal-featured-excerpt">{page.excerpt}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Topic sections */}
          {TOPIC_SECTIONS.map((section) => {
            const sectionPages = section.slugs
              .map((slug) => topicPages.find((p) => p.slug === slug))
              .filter(Boolean);
            if (sectionPages.length === 0) return null;
            return (
              <section key={section.title} className="portal-section">
                <div
                  className="portal-section-header"
                  style={{ borderColor: section.color }}
                >
                  <h2>{section.title}</h2>
                </div>
                <div className="portal-section-body">
                  <ul className="portal-link-list">
                    {sectionPages.map((page) =>
                      page ? (
                        <li key={page.slug}>
                          <Link
                            href={`/wiki/${page.slug}`}
                            className="portal-link"
                          >
                            {page.title}
                          </Link>
                          {page.categories.length > 0 && (
                            <span className="portal-link-cat">
                              {" "}
                              ({page.categories.slice(0, 2).join(", ")})
                            </span>
                          )}
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        {/* Right column */}
        <div className="portal-column">
          {/* Recently updated */}
          <section className="portal-section">
            <div
              className="portal-section-header"
              style={{ borderColor: "#f59e0b" }}
            >
              <h2>Recently Updated</h2>
            </div>
            <div className="portal-section-body">
              <ul className="portal-recent-list">
                {recentPages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/wiki/${page.slug}`}
                      className="portal-link"
                    >
                      {page.title}
                    </Link>
                    <span className="portal-recent-date">
                      {page.updatedAt.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="portal-section-footer">
                <Link href="/wiki" className="portal-more-link">
                  View all pages &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Browse by Category */}
          <section className="portal-section">
            <div
              className="portal-section-header"
              style={{ borderColor: "#8b5cf6" }}
            >
              <h2>Browse by Category</h2>
            </div>
            <div className="portal-section-body">
              <div className="portal-category-grid">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/categories/${encodeURIComponent(cat.name)}`}
                    className="portal-category"
                  >
                    <span className="portal-category-name">
                      {cat.name.replace(/_/g, " ")}
                    </span>
                    <span className="portal-category-count">{cat.count}</span>
                  </Link>
                ))}
              </div>
              <div className="portal-section-footer">
                <Link href="/categories" className="portal-more-link">
                  All categories &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Quick navigation */}
          <section className="portal-section">
            <div
              className="portal-section-header"
              style={{ borderColor: "#10b981" }}
            >
              <h2>Navigation</h2>
            </div>
            <div className="portal-section-body">
              <ul className="portal-nav-list">
                <li>
                  <Link href="/wiki" className="portal-nav-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    All Articles
                    <span className="portal-nav-count">{totalPages.toLocaleString()}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="portal-nav-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    All Categories
                    <span className="portal-nav-count">{totalCategories}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="portal-nav-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="portal-nav-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    About AI Wiki
                  </Link>
                </li>
                <li>
                  <Link href="/feed.xml" className="portal-nav-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 11a9 9 0 0 1 9 9" />
                      <path d="M4 4a16 16 0 0 1 16 16" />
                      <circle cx="5" cy="19" r="1" />
                    </svg>
                    RSS Feed
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
