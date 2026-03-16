export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Grid skeleton */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/40 rounded-[4rem] overflow-hidden">
              <div className="skeleton aspect-[16/9] w-full" style={{ borderRadius: 0 }} />
              <div className="p-12 space-y-4">
                <div className="skeleton h-10 w-3/4" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-12 w-40 rounded-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
