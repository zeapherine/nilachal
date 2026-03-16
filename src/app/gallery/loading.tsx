export default function Loading() {
  return (
    <div className="flex flex-col w-full bg-sand-light pt-20 animate-pulse">
      {/* Hero skeleton */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center space-y-8">
        <div className="skeleton h-6 w-48 mx-auto rounded-full" />
        <div className="skeleton h-20 w-full max-w-2xl mx-auto" />
        <div className="skeleton h-6 w-full max-w-xl mx-auto" />
      </section>

      {/* Gallery grid skeleton */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8">
          <div className="skeleton col-span-2 row-span-2 rounded-[3rem]" />
          <div className="skeleton rounded-[3rem]" />
          <div className="skeleton rounded-[3rem]" />
          <div className="skeleton col-span-2 rounded-[3rem]" />
          <div className="skeleton rounded-[3rem]" />
          <div className="skeleton rounded-[3rem]" />
        </div>
      </section>
    </div>
  );
}
