export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Filter skeleton */}
      <section className="py-12 max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-wrap justify-center gap-4 bg-white/40 p-6 rounded-[3rem]">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton h-12 w-28 rounded-full" />
          ))}
        </div>
      </section>

      {/* Doctors grid skeleton */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/60 rounded-[4rem] overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-2/5">
                <div className="skeleton aspect-[4/5] w-full" style={{ borderRadius: 0 }} />
              </div>
              <div className="sm:w-3/5 p-12 space-y-6">
                <div className="skeleton h-10 w-3/4" />
                <div className="skeleton h-4 w-1/2" />
                <div className="skeleton h-16 w-full" />
                <div className="skeleton h-12 w-full rounded-[2rem]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
