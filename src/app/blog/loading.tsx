export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Blog cards skeleton */}
      <section className="pb-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-6">
              <div className="skeleton aspect-[16/10] rounded-[2rem] w-full" />
              <div className="px-2 space-y-4">
                <div className="flex gap-4">
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton h-4 w-24" />
                </div>
                <div className="skeleton h-8 w-3/4" />
                <div className="skeleton h-16 w-full" />
                <div className="skeleton h-4 w-28" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
