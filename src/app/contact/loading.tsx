export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Contact grid skeleton */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/60 p-10 rounded-[3rem] space-y-4">
                <div className="skeleton h-16 w-16 rounded-[2rem]" />
                <div className="skeleton h-6 w-3/4" />
                <div className="skeleton h-4 w-full" />
              </div>
            ))}
          </div>
          <div className="skeleton h-40 w-full rounded-[4rem]" />
        </div>
        <div className="lg:col-span-7">
          <div className="skeleton h-[600px] w-full rounded-[5rem]" />
        </div>
      </section>
    </div>
  );
}
