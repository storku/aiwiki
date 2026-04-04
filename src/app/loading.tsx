export default function HomeLoading() {
  return (
    <div>
      {/* Hero skeleton */}
      <section className="pt-12 sm:pt-28 pb-12 sm:pb-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="skeleton h-7 w-52 rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="skeleton h-12 sm:h-14 w-80 sm:w-[28rem]" />
          <div className="skeleton h-12 sm:h-14 w-64 sm:w-96" />
        </div>
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="skeleton h-5 w-96 max-w-full" />
          <div className="skeleton h-5 w-72 max-w-full" />
        </div>
        <div className="max-w-lg mx-auto mb-10">
          <div className="skeleton h-12 w-full rounded-xl" />
        </div>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton h-8 w-24 rounded-full" />
          ))}
        </div>
      </section>

      {/* Stats skeleton */}
      <section className="grid grid-cols-3 gap-2 sm:gap-4 mb-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="stat-card text-center p-3 sm:p-6">
            <div className="flex justify-center mb-2">
              <div className="skeleton h-5 w-5 rounded" />
            </div>
            <div className="flex justify-center mb-1">
              <div className="skeleton h-8 w-20" />
            </div>
            <div className="flex justify-center">
              <div className="skeleton h-4 w-16" />
            </div>
          </div>
        ))}
      </section>

      {/* Topic sections skeleton */}
      {[1, 2, 3].map((section) => (
        <section key={section} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="skeleton h-10 w-10 rounded-xl" />
            <div>
              <div className="skeleton h-6 w-32 mb-1" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div key={card} className="card flex items-center gap-3.5 p-4">
                <div className="skeleton h-10 w-10 rounded-xl shrink-0" />
                <div className="flex-1">
                  <div className="skeleton h-4 w-28 mb-1.5" />
                  <div className="skeleton h-3 w-20" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
