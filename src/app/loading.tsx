export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-32 animate-pulse">
      {/* Hero skeleton */}
      <section className="min-h-[80vh] max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20">
        <div className="lg:col-span-7 space-y-8">
          <div className="skeleton h-6 w-48" />
          <div className="skeleton h-20 w-full max-w-lg" />
          <div className="skeleton h-16 w-full max-w-md" />
          <div className="skeleton h-6 w-full max-w-xl" />
          <div className="flex gap-6 pt-4">
            <div className="skeleton h-16 w-48 rounded-[2rem]" />
            <div className="skeleton h-16 w-48 rounded-[2rem]" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="skeleton aspect-[4/5] rounded-[4rem] w-full" />
        </div>
      </section>

      {/* Philosophy skeleton */}
      <section className="py-32 px-6 max-w-4xl mx-auto w-full space-y-8 text-center">
        <div className="skeleton h-12 w-12 rounded-full mx-auto" />
        <div className="skeleton h-16 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-4 w-full max-w-xl mx-auto" />
      </section>

      {/* Departments skeleton */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/50 rounded-[3.5rem] overflow-hidden">
              <div className="skeleton aspect-[16/10] w-full" style={{ borderRadius: 0 }} />
              <div className="p-10 space-y-4">
                <div className="skeleton h-8 w-3/4" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
