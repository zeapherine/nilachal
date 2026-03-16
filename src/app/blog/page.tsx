import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { FadeIn, Reveal, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-forest/10">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-light/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn delay={0.1} className="text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-forest/10 text-forest text-sm font-bold tracking-wider uppercase mb-6">
              Insights & Research
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-8 leading-tight">
              Medical <span className="text-coral">Research</span> <br /> & Wellness Insights
            </h1>
            <p className="max-w-2xl mx-auto text-forest/70 text-lg md:text-xl font-medium leading-relaxed">
              Advancing healthcare through clinical excellence and community-focused research in the heart of Kokrajhar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <Reveal key={blog.id} delay={index * 0.1} className="group relative">
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-forest-light/5 border border-white/50 group-hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes={IMAGE_SIZES.third}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-forest uppercase tracking-wider shadow-sm border border-forest/5">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="flex items-center space-x-4 text-xs font-bold text-forest/50 uppercase tracking-widest mb-4">
                      <span className="flex items-center space-x-1.5 font-sans">
                        <Calendar size={14} className="text-coral" />
                        <span>{blog.date}</span>
                      </span>
                      <span className="flex items-center space-x-1.5 font-sans">
                        <User size={14} className="text-coral" />
                        <span>{blog.author}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-forest mb-4 group-hover:text-coral transition-colors duration-300 leading-snug">
                      {blog.title}
                    </h2>

                    <p className="text-forest/70 text-base leading-relaxed mb-6 line-clamp-3 font-medium">
                      {blog.description}
                    </p>

                    <div className="inline-flex items-center space-x-2 text-forest font-bold text-sm uppercase tracking-wider border-b-2 border-transparent group-hover:border-coral transition-all duration-300">
                      <span>Read Full Entry</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Research Vision CTA */}
          <ScaleIn className="mt-32 p-12 md:p-20 rounded-[3rem] bg-forest relative overflow-hidden shadow-3xl shadow-forest/20">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <BookOpen size={48} className="text-accent mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                Empowering Patients Through <br /> Medical Knowledge
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Our research initiatives focus on patterns of care that improve outcomes for the people of Kokrajhar. We believe informed communities are healthier communities.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-coral text-white rounded-full font-bold text-lg hover:bg-white hover:text-forest transition-all shadow-xl shadow-coral/20"
              >
                Collaborate With Us
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}
