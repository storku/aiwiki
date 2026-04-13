export default function HomeLoading() {
  return (
    <div className="wiki-portal">
      {/* Welcome banner skeleton */}
      <div className="portal-welcome">
        <div className="flex justify-center mb-3">
          <div className="skeleton h-9 w-72" />
        </div>
        <div className="flex justify-center mb-2">
          <div className="skeleton h-5 w-80 max-w-full" />
        </div>
        <div className="flex justify-center mb-6">
          <div className="skeleton h-4 w-48" />
        </div>
        <div className="max-w-md mx-auto">
          <div className="skeleton h-11 w-full rounded-xl" />
        </div>
      </div>

      {/* Two-column portal grid skeleton */}
      <div className="portal-grid">
        {/* Left column */}
        <div className="portal-column">
          {[1, 2, 3, 4].map((i) => (
            <section key={i} className="portal-section">
              <div className="portal-section-header" style={{ borderColor: "#e5e7eb" }}>
                <div className="skeleton h-5 w-36" />
              </div>
              <div className="portal-section-body space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex flex-col gap-1.5">
                    <div className="skeleton h-4 w-40" />
                    <div className="skeleton h-3 w-full" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Right column */}
        <div className="portal-column">
          {[1, 2, 3].map((i) => (
            <section key={i} className="portal-section">
              <div className="portal-section-header" style={{ borderColor: "#e5e7eb" }}>
                <div className="skeleton h-5 w-40" />
              </div>
              <div className="portal-section-body space-y-2">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="skeleton h-4 w-full" />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
