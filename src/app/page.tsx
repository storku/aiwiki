import Link from "next/link";
import { getAllPages, getAllCategories } from "@/lib/content";

export default function HomePage() {
  const pages = getAllPages();
  const categories = getAllCategories().slice(0, 20);

  const featured = pages
    .filter(
      (p) =>
        !p.title.includes("(ChatGPT Plugin)") &&
        !p.title.includes("(GPT)") &&
        p.title.length > 2
    )
    .slice(0, 12);

  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-primary">AI</span> Wiki
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          The comprehensive encyclopedia of artificial intelligence. Covering{" "}
          <strong>{pages.length.toLocaleString()}</strong> articles on AI
          concepts, tools, models, and applications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm hover:border-primary hover:text-primary transition-colors"
            >
              {cat.name.replace(/_/g, " ")} ({cat.count})
            </Link>
          ))}
          <Link
            href="/categories"
            className="px-3 py-1.5 rounded-full bg-primary text-white text-sm hover:bg-primary-dark transition-colors"
          >
            All Categories
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Articles</h2>
          <Link href="/wiki" className="text-primary text-sm hover:underline">
            View all pages &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((page) => (
            <Link
              key={page.slug}
              href={`/wiki/${page.slug}`}
              className="block p-4 rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-1">{page.title}</h3>
              {page.categories.length > 0 && (
                <p className="text-xs text-muted">
                  {page.categories.slice(0, 3).join(", ")}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
