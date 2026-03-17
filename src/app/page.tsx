import Link from "next/link";
import { getAllPages, getAllCategories } from "@/lib/content";

const POPULAR_SLUGS = [
  "chatgpt",
  "ai",
  "dall-e",
  "gpt-4",
  "artificial_intelligence",
  "large_language_model",
  "midjourney",
  "claude__ai",
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
];

export default function HomePage() {
  const pages = getAllPages();
  const categories = getAllCategories()
    .filter((c) => c.name !== "Plugin" && !c.name.startsWith("Not_"))
    .slice(0, 16);

  const popularPages = POPULAR_SLUGS
    .map((slug) => pages.find((p) => p.slug === slug))
    .filter(Boolean);

  const recentArticles = pages
    .filter(
      (p) =>
        !p.title.includes("(ChatGPT Plugin)") &&
        !p.title.includes("(GPT)") &&
        p.title.length > 3
    )
    .slice(0, 9);

  const totalCategories = getAllCategories().length;

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          {pages.length.toLocaleString()} articles and growing
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          The Encyclopedia of{" "}
          <span className="text-primary">Artificial Intelligence</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
          Your comprehensive reference for AI concepts, models, tools, and
          applications. From machine learning fundamentals to the latest
          breakthroughs.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/wiki"
            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
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

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 mb-16">
        <div className="text-center p-4 rounded-lg bg-surface border border-border">
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            {pages.length.toLocaleString()}
          </p>
          <p className="text-sm text-muted">Articles</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-surface border border-border">
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            {totalCategories}
          </p>
          <p className="text-sm text-muted">Categories</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-surface border border-border">
          <p className="text-2xl sm:text-3xl font-bold text-accent">Free</p>
          <p className="text-sm text-muted">Open Access</p>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Articles</h2>
          <Link
            href="/wiki"
            className="text-primary text-sm hover:underline"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularPages.map((page) =>
            page ? (
              <Link
                key={page.slug}
                href={`/wiki/${page.slug}`}
                className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="mt-0.5 p-1.5 rounded-md bg-primary-light text-primary shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  {page.categories.length > 0 && (
                    <p className="text-xs text-muted mt-0.5 truncate">
                      {page.categories.slice(0, 3).join(" / ")}
                    </p>
                  )}
                </div>
              </Link>
            ) : null
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <Link
            href="/categories"
            className="text-primary text-sm hover:underline"
          >
            All categories &rarr;
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <span>{cat.name.replace(/_/g, " ")}</span>
              <span className="text-xs text-muted">({cat.count})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">More Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {recentArticles.map((page) => (
            <Link
              key={page.slug}
              href={`/wiki/${page.slug}`}
              className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-sm mb-1">{page.title}</h3>
              {page.categories.length > 0 && (
                <p className="text-xs text-muted">
                  {page.categories.slice(0, 2).join(", ")}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
