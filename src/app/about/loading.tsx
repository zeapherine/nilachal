export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="skeleton aspect-[4/5] rounded-[4rem] w-full" />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="skeleton h-6 w-32" />
            <div className="skeleton h-20 w-full max-w-lg" />
            <div className="skeleton h-6 w-full max-w-xl" />
            <div className="skeleton h-32 w-full rounded-[3rem]" />
          </div>
        </div>
      </section>

      {/* Timeline skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full space-y-12 text-center">
        <div className="skeleton h-12 w-64 mx-auto" />
        <div className="skeleton h-6 w-96 mx-auto" />
        <div className="space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-12 justify-center">
              <div className="skeleton h-24 w-1/3" />
              <div className="skeleton h-16 w-16 rounded-full" />
              <div className="skeleton h-24 w-1/3" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
