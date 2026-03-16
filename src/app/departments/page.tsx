import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Heart, Shield, Activity, Sparkles, Stethoscope, ChevronRight, Baby } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const departments = [
  {
    name: "Precision Surgery",
    slug: "surgery",
    desc: "Merging robotic-assisted technology with the steady hands of master surgeons for restorative outcomes.",
    icon: <Shield className="text-forest-medium" />,
    image: "/dept_surgery.png",
    stat: "99% Success Rate"
  },
  {
    name: "Restorative Mother & Child",
    slug: "mother-child",
    desc: "A sanctuary for high-risk neonatology and compassionate maternal care, built for the next generation.",
    icon: <Heart className="text-coral" />,
    image: "/dept_mother_child.png",
    stat: "15k+ Deliveries"
  },
  {
    name: "Advanced Critical Care",
    slug: "critical-care",
    desc: "24/7 hyper-vigilance in our state-of-the-art ICU wings, where every second is treated as sacred.",
    icon: <Activity className="text-forest-medium" />,
    image: "/dept_critical_care.png",
    stat: "Real-time Monitoring"
  },
  {
    name: "Molecular Diagnostics",
    slug: "diagnostics",
    desc: "Unlocking biological truths through advanced pathology and genomic research centers.",
    icon: <Microscope className="text-forest-medium" />,
    image: "/dept_diagnostics.png",
    stat: "AI-Enhanced Insight"
  },
  {
    name: "Pediatric Excellence",
    slug: "pediatrics",
    desc: "Holistic healthcare for the next generation, blending medical precision with a gentle touch.",
    icon: <Baby className="text-forest-medium" />,
    image: "/dept_pediatrics.png",
    stat: "24/7 Neonatal Care"
  }
];

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <FadeIn className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2.5 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto">
             <Stethoscope size={14} className="text-accent" />
             <span>The Frontlines of Healing</span>
          </FadeIn>
          <FadeIn direction="up" className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance">
            Specialized Care <br />
            <span className="text-accent italic font-normal serif text-forest">Redefined.</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans italic">
            &quot;True healing requires more than medicine; it requires a specialized sanctuary where every detail is focused on restoration.&quot;
          </FadeIn>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {departments.map((dept, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className="group relative bg-white/40 backdrop-blur-xl rounded-[4rem] overflow-hidden border border-sand-dark/10 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <ScaleIn className="w-full h-full">
                  <Image 
                    src={dept.image} 
                    alt={dept.name} 
                    fill 
                    sizes={IMAGE_SIZES.half}
                    className="object-cover group-hover:scale-110 transition-transform duration-[10s]"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    priority={idx < 2}
                  />
                </ScaleIn>
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white text-forest flex items-center justify-center shadow-2xl">
                    {dept.icon}
                  </div>
                  <div className="bg-accent/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-forest uppercase tracking-widest">
                    {dept.stat}
                  </div>
                </div>
              </div>
              
              <div className="p-12 space-y-6">
                <h3 className="text-4xl font-serif font-black text-forest group-hover:text-accent transition-colors">
                  {dept.name}
                </h3>
                <p className="text-forest/60 text-lg leading-relaxed italic">
                  &quot;{dept.desc}&quot;
                </p>
                <div className="pt-6">
                  <Link 
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center space-x-4 bg-forest text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-xl group/btn"
                  >
                    <span>Enter Department</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6">
         <FadeIn className="max-w-5xl mx-auto bg-forest rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden group">
            <Sparkles className="absolute top-10 right-10 text-accent/20 w-32 h-32 animate-pulse" />
            <div className="relative z-10 space-y-8">
               <h2 className="text-5xl md:text-7xl font-serif font-black">Choosing <br /><span className="text-accent italic font-normal">the Right Path.</span></h2>
               <p className="text-sand-light/40 text-xl max-w-2xl mx-auto leading-relaxed">
                  Choosing a department is the start of your journey. Let our stewards guide you to the specialist who understands your unique story.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
                  <Link href="/contact" className="bg-accent text-forest px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl">
                     Speak with a Steward
                  </Link>
                  <Link href="/doctors" className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs hover:text-accent transition-colors">
                     Meet the Healers <ChevronRight size={16} />
                  </Link>
               </div>
            </div>
         </FadeIn>
      </section>
    </div>
  );
}
