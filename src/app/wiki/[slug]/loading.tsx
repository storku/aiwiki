export default function WikiPageLoading() {
  const tocWidths = ["82%", "64%", "91%", "73%", "88%", "69%", "95%", "78%"];

  return (
    <div className="flex gap-10">
      {/* Main content skeleton */}
      <article className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm mb-6">
          <div className="skeleton h-4 w-10" />
          <div className="skeleton h-4 w-1" />
          <div className="skeleton h-4 w-8" />
          <div className="skeleton h-4 w-1" />
          <div className="skeleton h-4 w-24" />
        </nav>

        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <div className="article-accent-bar mb-4 sm:mb-6" />
          <div className="skeleton h-9 sm:h-12 w-72 sm:w-96 mb-3 sm:mb-4" />
          <div className="flex flex-wrap items-center gap-2">
            <div className="skeleton h-6 w-20 rounded-md" />
            <div className="skeleton h-6 w-28 rounded-md" />
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-4 w-32" />
          </div>
        </header>

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[95%]" />
          <div className="skeleton h-5 w-[88%]" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[92%]" />
          <div className="skeleton h-5 w-[70%]" />

          <div className="skeleton h-7 w-48 mt-8" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[90%]" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[85%]" />
          <div className="skeleton h-5 w-[60%]" />

          <div className="skeleton h-7 w-56 mt-8" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[93%]" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-[78%]" />
        </div>
      </article>

      {/* TOC sidebar skeleton */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-20">
          <div className="skeleton h-4 w-24 mb-3" />
          <div className="space-y-2 pl-3 border-l border-border">
            {tocWidths.map((width, i) => (
              <div key={i} className="skeleton h-3.5" style={{ width }} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
