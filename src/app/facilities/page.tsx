import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Zap, Heart, ArrowRight, Building2 } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const facilities = [
  {
    title: "Laminar Flow Surgical Sanctuaries",
    slug: "modular-theatre",
    tagline: "Sterile Precision",
    desc: "Our operation theaters are more than rooms; they are controlled ecosystems. With integrated laminar airflow and advanced robotics, we ensure every procedure is performed in an environment of absolute clinical purity.",
    image: "/facility_ot.png",
    features: ["Absolute Sterile Bio-Zones", "Intelligent Surgical Lighting", "Laminar Flow Restoratives", "Integrated Digital Insight"],
    accent: "bg-forest-muted"
  },
  {
    title: "Clarity Imaging Laboratories",
    slug: "diagnostics-center",
    tagline: "Visionary Insight",
    desc: "Clarity is the first step to healing. Our imaging wings utilize low-radiation, high-definition digital technology to capture the internal story of your health with breathtaking precision.",
    image: "/facility_xray.png",
    features: ["Digital Clarity Imaging", "High-Resolution Molecular CT", "Quiet-Zone MRI Suites", "Tele-Laboratory Connectivity"],
    accent: "bg-coral-light/30"
  },
  {
    title: "Patient Recovery Sanctuaries",
    slug: "patient-wards",
    tagline: "Restorative Comfort",
    desc: "Recovery requires peace. Our wards are designed with organic materials, soft circadian lighting, and ergonomic forms to provide a sanctuary for both the body and the mind.",
    image: "/facility_ward.png",
    features: ["Circadian Lighting Systems", "Organic Ergonomic Suites", "Guardian Nurse Call-Points", "Family Companion Spaces"],
    accent: "bg-forest-muted"
  }
];

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Infrastructure */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/10 blur-[100px] lg:blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6 lg:space-y-8">
          <FadeIn className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2.5 rounded-full text-forest-medium text-[9px] lg:text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto">
             <Building2 size={14} className="text-accent" />
             <span>The Infrastructure of Hope</span>
          </FadeIn>
          <FadeIn direction="up" className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black text-forest leading-[1.1] lg:leading-[0.9] tracking-tight text-balance">
            Foundations Designed <br />
            <span className="text-accent italic font-normal serif">to Restore.</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-lg lg:text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans">
            Our medical infrastructure is a harmony of advanced engineering and human comfort, rooted in the belief that the environment is a healer in itself.
          </FadeIn>
        </div>
      </section>

      {/* Facilities: The Narrative Flow */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 space-y-24 lg:space-y-40">
        {facilities.map((fac, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center group`}
            >
              <FadeIn 
                direction={isEven ? "left" : "right"}
                className="w-full lg:w-1/2 relative"
              >
                <div className="absolute -inset-6 lg:-inset-10 bg-forest-light/5 rounded-[3rem] lg:rounded-[5rem] blur-2xl lg:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
                <ScaleIn className="relative aspect-[4/3] lg:aspect-[1.1/1] w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white group-hover:rotate-1 transition-all duration-[2s]">
                  <Image 
                    src={fac.image} 
                    alt={fac.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[15s]"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    priority={idx === 0}
                  />
                </ScaleIn>
              </FadeIn>
              <FadeIn 
                direction={isEven ? "right" : "left"}
                className="w-full lg:w-1/2 space-y-8 lg:space-y-10 group-hover:translate-x-2 transition-transform duration-1000"
              >
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center gap-3">
                     <div className="w-8 lg:w-10 h-0.5 bg-accent/30" />
                     <p className="text-accent font-black tracking-[0.3em] uppercase text-[9px] lg:text-[10px]">{fac.tagline}</p>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-serif font-black text-forest leading-tight group-hover:text-accent transition-colors duration-500">
                    {fac.title}
                  </h2>
                  <p className="text-forest/60 text-base lg:text-lg leading-relaxed font-sans italic">
                    &quot;{fac.desc}&quot;
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 bg-white/40 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-sand-dark/10 shadow-sm">
                   {fac.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-center gap-3 lg:gap-4">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-forest-muted flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 text-forest-medium" />
                        </div>
                        <span className="text-forest font-bold text-xs lg:text-sm tracking-tight">{feature}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-2 lg:pt-4">
                  <Link 
                    href={`/facilities/${fac.slug}`}
                    className="inline-flex items-center space-x-4 lg:space-x-6 group/btn"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-forest text-white flex items-center justify-center group-hover/btn:bg-accent transition-all shadow-xl">
                      <ArrowRight size={20} className="lg:size-6 group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                    <span className="text-forest font-black tracking-widest uppercase text-[10px] lg:text-xs">Explore the {fac.tagline}</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          );
        })}
      </section>

      {/* Narrative Trust: The Vow */}
      <section className="px-6 py-20 lg:py-40">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {[
              { title: "A Vow of Safety", desc: "Every touchpoint within our walls is calibrated for absolute clinical hygiene and emotional security.", icon: <Shield size={32} />, color: "bg-white/60", textColor: "text-forest", iconColor: "text-forest-medium" },
              { title: "Future-Ready Pulse", desc: "Our infrastructure evolves with medical science, bringing the latest global breakthroughs to Kokrajhar.", icon: <Zap size={32} />, color: "bg-forest", textColor: "text-white", iconColor: "text-accent" },
              { title: "Souls First", desc: "Our walls don't just hold technology; they hold stories, and every space is designed to nurture them.", icon: <Heart size={32} />, color: "bg-white/60", textColor: "text-forest", iconColor: "text-coral" },
            ].map((vow, idx) => (
              <FadeIn 
                key={idx}
                delay={idx * 0.1}
                className={`flex flex-col items-center text-center space-y-6 lg:space-y-8 ${vow.color} p-8 lg:p-12 rounded-[3rem] lg:rounded-[4rem] border border-sand-dark/10 shadow-sm hover:shadow-2xl transition-all group ${idx === 1 ? 'lg:hover:scale-105' : ''}`}
              >
                 <div className={`w-16 h-16 lg:w-20 lg:h-20 ${idx === 1 ? 'bg-white/10' : 'bg-forest-muted'} rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center group-hover:bg-accent transition-all ${vow.iconColor}`}>
                    {vow.icon}
                 </div>
                 <div className="space-y-2 lg:space-y-4">
                    <h3 className={`text-xl lg:text-2xl font-serif font-black ${vow.textColor}`}>{vow.title}</h3>
                    <p className={`${idx === 1 ? 'text-sand-light/40' : 'text-forest/50'} text-xs lg:text-sm leading-relaxed`}>{vow.desc}</p>
                 </div>
              </FadeIn>
            ))}
         </div>
      </section>
    </div>
  );
}
