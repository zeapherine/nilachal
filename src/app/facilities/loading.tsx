export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Facility cards skeleton */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-40">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="skeleton aspect-[1.1/1] rounded-[4rem] w-full" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="skeleton h-6 w-32" />
              <div className="skeleton h-12 w-full max-w-md" />
              <div className="skeleton h-20 w-full" />
              <div className="skeleton h-32 w-full rounded-[3rem]" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
