import React from "react";
import Image from "next/image";
import { Award, Clock, Stethoscope, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const doctors = [
  {
    name: "Dr. P.K. Rabha",
    role: "Chief Architect of Surgery",
    image: "/dr_pk_rabha.png",
    exp: "31+ Years",
    hours: "10 AM - 05 PM",
    desc: "A pioneer in precision surgery. Dr. Rabha has dedicated over three decades to honing the art of minimally invasive care.",
    specialty: "Advanced Surgery",
    accent: "bg-forest-muted"
  },
  {
    name: "Dr. Ananya Sen",
    role: "Guardian of New Life",
    image: "/dr_ananya_sen.png",
    exp: "21+ Years",
    hours: "09 AM - 06 PM",
    desc: "Championing the sacred bond of motherhood through a blend of holistic care and high-risk obstetric expertise.",
    specialty: "Mother & Child Care",
    accent: "bg-coral-light/30"
  },
  {
    name: "Dr. P.K. Konwar",
    role: "Advocate for Little Hearts",
    image: "/dr_pk_konwar.png",
    exp: "25+ Years",
    hours: "08 AM - 04 PM",
    desc: "Ensuring the next generation thrives. Dr. Konwar specializes in neonatal restoration and compassionate pediatric care.",
    specialty: "Pediatrics",
    accent: "bg-forest-muted"
  },
  {
    name: "Dr. Megha Singh",
    role: "Visionary of Diagnostics",
    image: "/dr_megha_singh.png",
    exp: "18+ Years",
    hours: "09 AM - 05 PM",
    desc: "Seeking clarity in every detail. Dr. Singh leads our pathology wing with a focus on digital transparency and rapid insight.",
    specialty: "Diagnostics",
    accent: "bg-coral-light/30"
  }
];

const specialties = ["All Healers", "Surgery", "Maternity", "Pediatrics", "Insights", "Cardiology"];

export default function DoctorsPage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Stewards */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-[-5%] w-[40%] h-full bg-forest-light/10 blur-[130px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <FadeIn className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-4 sm:px-6 py-2 rounded-full text-forest-medium text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto">
             <Stethoscope size={14} className="text-accent" />
             <span>The Stewards of Life</span>
          </FadeIn>
          <FadeIn direction="up" className="text-4xl sm:text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance">
            Healers Driven by <br />
            <span className="text-accent italic font-normal serif text-forest">Deep Compassion.</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-lg sm:text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans">
            Our specialists are more than medical experts; they are guardians of your wellness journey, blending science with a human soul.
          </FadeIn>
        </div>
      </section>

      {/* Specialty Filter: The Harmony */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md p-4 sm:p-6 rounded-[2rem] sm:rounded-[3rem] border border-sand-dark/10 shadow-sm">
           {specialties.map((cat, i) => (
             <FadeIn key={i} delay={i * 0.05} className="group">
               <button 
                 className={`px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all ${i === 0 ? 'bg-forest text-white shadow-xl sm:shadow-2xl scale-105 sm:scale-110' : 'bg-transparent text-forest/40 hover:text-forest hover:bg-white/50'}`}
               >
                  {cat}
               </button>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* Stewards Grid: The Connections */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24">
          {doctors.map((dr, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1}
              className="group flex flex-col sm:flex-row bg-white/60 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border border-sand-dark/10 shadow-sm hover:shadow-2xl transition-all duration-700 hover:translate-y-[-10px]"
            >
              <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                <ScaleIn className="w-full h-full">
                  <Image 
                    src={dr.image} 
                    alt={dr.name} 
                    fill 
                    sizes={IMAGE_SIZES.half}
                    className="object-cover group-hover:scale-110 transition-transform duration-[10s]"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </ScaleIn>
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                   <div className="bg-white/80 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full text-forest text-[9px] sm:text-[10px] font-black uppercase tracking-widest inline-block shadow-lg">
                      {dr.specialty}
                   </div>
                </div>
              </div>
              
              <div className="w-full sm:w-3/5 p-8 sm:p-12 space-y-6 sm:space-y-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-serif font-black text-forest group-hover:text-accent transition-colors duration-500">
                    {dr.name}
                  </h3>
                  <p className="text-accent font-black text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase leading-none">
                    {dr.role}
                  </p>
                </div>
                
                <p className="text-forest/60 text-sm sm:text-base leading-relaxed font-sans italic">
                  "{dr.desc}"
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-sand-dark/10">
                   <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-black text-forest/30 uppercase tracking-widest mb-1">Legacy</span>
                      <span className="text-forest font-bold text-xs sm:text-sm flex items-center gap-2">
                        <Award size={14} className="text-accent" /> {dr.exp}
                      </span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-black text-forest/30 uppercase tracking-widest mb-1">Presence</span>
                      <span className="text-forest font-bold text-xs sm:text-sm flex items-center gap-2">
                        <Clock size={14} className="text-accent" /> {dr.hours}
                      </span>
                   </div>
                </div>

                <div className="pt-4 sm:pt-8 w-full">
                   <Link href="/contact" className="block w-full text-center bg-forest text-white py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-bold text-sm hover:bg-accent transition-all shadow-xl">
                      Book a Session
                   </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stewardship CTA */}
      <section className="py-20 sm:py-32 px-6">
         <FadeIn className="max-w-6xl mx-auto rounded-[3rem] sm:rounded-[5rem] bg-forest-muted p-8 sm:p-16 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-forest-light/10 rounded-full blur-[100px]" />
            <div className="relative z-10 space-y-8 sm:space-y-10">
              <Sparkles className="mx-auto text-accent" size={32} />
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-forest">
                Join our <br />
                <span className="italic font-normal serif text-accent">Healer Circle.</span>
              </h2>
              <p className="text-forest/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                We are always seeking visionaries in medicine who prioritize the soul as much as the science.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 sm:pt-10">
                <button className="bg-forest text-white px-8 sm:px-12 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2.5rem] font-bold text-base sm:text-lg hover:bg-accent transition-all shadow-xl sm:shadow-2xl">
                   Inquire for Fellowship
                </button>
                <Link href="/about" className="bg-transparent border border-forest/20 text-forest px-8 sm:px-12 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2.5rem] font-bold text-base sm:text-lg hover:bg-white transition-all">
                   Our Shared Philosophy
                </Link>
              </div>
            </div>
         </FadeIn>
      </section>
    </div>
  );
}
