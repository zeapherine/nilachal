import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const images = [
  { src: "/facility_exterior.png", title: "The Sanctuary Exterior", category: "Infrastructure", span: "row-span-2 col-span-2" },
  { src: "/facility_ot.png", title: "Sterile Precision", category: "Operations", span: "row-span-1 col-span-1" },
  { src: "/dept_mother_child.png", title: "New Beginnings", category: "Maternity", span: "row-span-1 col-span-1" },
  { src: "/facility_ward.png", title: "Restorative Suites", category: "Patient Care", span: "row-span-1 col-span-2" },
  { src: "/dept_critical_care.png", title: "The Pulse of Care", category: "Specialized", span: "row-span-2 col-span-1" },
  { src: "/facility_xray.png", title: "Diagnostic Insight", category: "Diagnostics", span: "row-span-1 col-span-1" },
  { src: "/dept_surgery.png", title: "Healing Hands", category: "Surgical", span: "row-span-1 col-span-1" },
  { src: "/dept_diagnostics.png", title: "Molecular Vision", category: "Advanced Lab", span: "row-span-1 col-span-1" }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Art of Healing */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[50%] h-full bg-forest-light/10 blur-[100px] lg:blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6 lg:space-y-8">
          <FadeIn className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2.5 rounded-full text-forest-medium text-[9px] lg:text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto">
             <Camera size={14} className="text-accent" />
             <span>The Art of Healing</span>
          </FadeIn>
          <FadeIn direction="up" className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black text-forest leading-[1.1] lg:leading-[0.9] tracking-tight text-balance">
            Moments of <br />
            <span className="text-accent italic font-normal serif">Light & Vitality.</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-lg lg:text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans italic">
            &quot;We believe that beauty is an essential component of the restorative journey. Explore the spaces where science meets serenity.&quot;
          </FadeIn>
        </div>
      </section>

      {/* Gallery: The Organic Grid */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.05}
              className={`relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 ${img.span.split(' ').map(s => s.startsWith('col-span') || s.startsWith('row-span') ? `md:${s}` : s).join(' ')} border border-white/40 aspect-[4/3] md:aspect-auto`}
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[10s] lg:grayscale lg:group-hover:grayscale-0"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 translate-y-4 lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-700 space-y-1 lg:space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-0.5 bg-accent" />
                   <p className="text-accent font-black text-[9px] lg:text-[10px] uppercase tracking-[0.2em]">{img.category}</p>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-serif font-bold italic">{img.title}</h3>
              </div>

              <div className="absolute top-6 right-6 lg:top-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Sparkles size={18} />
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Narrative CTA: The Invitation */}
      <section className="py-20 lg:py-40 px-6 relative overflow-hidden">
        <FadeIn className="max-w-5xl mx-auto relative z-10">
           <div className="bg-forest rounded-[3rem] lg:rounded-[5rem] p-10 lg:p-24 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-accent/20 blur-[80px] lg:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <h2 className="text-3xl lg:text-6xl font-serif font-black text-white mb-6 lg:mb-8 leading-tight">
                Walk Our Halls <br />
                <span className="text-accent italic font-normal">of Hope.</span>
              </h2>
              <p className="text-sand-light/60 mb-10 lg:mb-12 text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
                A photograph can only tell half the story. Visit us in Kokrajhar to feel the warmth of our care and the tranquility of our environment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
                <Link 
                   href="/contact"
                   className="w-full sm:w-auto bg-accent text-forest px-10 lg:px-12 py-4 lg:py-5 rounded-full font-black tracking-widest uppercase text-[10px] lg:text-xs hover:bg-white transition-all shadow-xl group/btn flex items-center justify-center gap-4"
                >
                   Schedule a Visit <MapPin size={16} />
                </Link>
                <Link 
                   href="/appointments"
                   className="text-white font-black tracking-widest uppercase text-[10px] lg:text-xs flex items-center gap-3 hover:text-accent transition-colors"
                >
                   Book Consultation <ArrowRight size={16} />
                </Link>
              </div>
           </div>
        </FadeIn>
      </section>
    </div>
  );
}
