"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Zap, Heart, ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { bloomIn, staggerContainer, fadeInSlideUp, slideInLeft, slideInRight, scrollReveal, depthBloom } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function FacilitiesClient() {
  const isMobile = useIsMobile();
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

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Infrastructure */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          variants={isMobile ? undefined : staggerContainer}
          initial={isMobile ? "animate" : "initial"}
          animate="animate"
          className="max-w-7xl mx-auto relative z-10 text-center space-y-8"
        >
          <motion.div 
            variants={bloomIn}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2.5 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto"
          >
             <Building2 size={14} className="text-accent" />
             <span>The Infrastructure of Hope</span>
          </motion.div>
          <motion.h1 
            variants={fadeInSlideUp}
            className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance"
          >
            Foundations Designed <br />
            <span className="text-accent italic font-normal serif text-forest">to Restore.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInSlideUp}
            className="text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Our medical infrastructure is a harmony of advanced engineering and human comfort, rooted in the belief that the environment is a healer in itself.
          </motion.p>
        </motion.div>
      </section>

      {/* Facilities: The Narrative Flow */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-40">
        {facilities.map((fac, idx) => (
          <motion.div 
            key={idx} 
            variants={isMobile ? undefined : staggerContainer}
            initial={isMobile ? "animate" : "initial"}
            whileInView="animate"
            viewport={{ once: true, margin: "200px" }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center group`}
          >
            <motion.div 
              variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-10 bg-forest-light/5 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
              <div className="relative aspect-[1.1/1] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group-hover:rotate-1 transition-all duration-[2s]">
                <Image 
                  src={fac.image} 
                  alt={fac.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[15s]"
                />
              </div>
            </motion.div>
            <motion.div 
              variants={idx % 2 === 0 ? slideInRight : slideInLeft}
              className="lg:w-1/2 space-y-10 group-hover:translate-x-2 transition-transform duration-1000"
            >
              <div className="space-y-6">
                <motion.div 
                  variants={bloomIn}
                  className="flex items-center gap-3"
                >
                   <div className="w-10 h-0.5 bg-accent/30" />
                   <p className="text-accent font-black tracking-[0.3em] uppercase text-[10px]">{fac.tagline}</p>
                </motion.div>
                <motion.h2 
                  variants={fadeInSlideUp}
                  className="text-5xl font-serif font-black text-forest leading-tight group-hover:text-accent transition-colors duration-500"
                >
                  {fac.title}
                </motion.h2>
                <motion.p 
                  variants={fadeInSlideUp}
                  className="text-forest/60 text-lg leading-relaxed font-sans italic"
                >
                  "{fac.desc}"
                </motion.p>
              </div>
              
              <motion.div 
                variants={bloomIn}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/40 p-10 rounded-[3rem] border border-sand-dark/10 shadow-sm"
              >
                 {fac.features.map((feature, fIdx) => (
                   <div key={fIdx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-forest-muted flex items-center justify-center">
                         <CheckCircle2 className="w-4 h-4 text-forest-medium" />
                      </div>
                      <span className="text-forest font-bold text-sm tracking-tight">{feature}</span>
                   </div>
                 ))}
              </motion.div>

              <motion.div 
                variants={fadeInSlideUp}
                className="pt-4"
              >
                <Link 
                  href={`/facilities/${fac.slug}`}
                  className="inline-flex items-center space-x-6 group/btn"
                >
                  <div className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center group-hover/btn:bg-accent transition-all shadow-xl">
                    <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                  <span className="text-forest font-black tracking-widest uppercase text-xs">Explore the {fac.tagline}</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      <section className="px-6 py-40">
         <motion.div 
           variants={isMobile ? undefined : staggerContainer}
           initial={isMobile ? "animate" : "initial"}
           whileInView="animate"
           viewport={{ once: true }}
           className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16"
         >
            <motion.div 
              variants={bloomIn}
              className="flex flex-col items-center text-center space-y-8 bg-white/60 p-12 rounded-[4rem] border border-sand-dark/10 shadow-sm hover:shadow-2xl transition-all group"
            >
               <div className="w-20 h-20 bg-forest-muted rounded-[2rem] flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all text-forest-medium">
                  <Shield size={32} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-black text-forest">A Vow of Safety</h3>
                  <p className="text-forest/50 text-sm leading-relaxed">Every touchpoint within our walls is calibrated for absolute clinical hygiene and emotional security.</p>
               </div>
            </motion.div>
            <motion.div 
              variants={bloomIn}
              className="flex flex-col items-center text-center space-y-8 bg-forest p-12 rounded-[4rem] text-white shadow-2xl hover:scale-105 transition-all group"
            >
               <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center group-hover:bg-accent transition-all">
                  <Zap size={32} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-black">Future-Ready Pulse</h3>
                  <p className="text-sand-light/40 text-sm leading-relaxed">Our infrastructure evolves with medical science, bringing the latest global breakthroughs to Kokrajhar.</p>
               </div>
            </motion.div>
            <motion.div 
              variants={bloomIn}
              className="flex flex-col items-center text-center space-y-8 bg-white/60 p-12 rounded-[4rem] border border-sand-dark/10 shadow-sm hover:shadow-2xl transition-all group"
            >
               <div className="w-20 h-20 bg-coral-light/30 rounded-[2rem] flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-all text-coral">
                  <Heart size={32} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-black text-forest">Souls First</h3>
                  <p className="text-forest/50 text-sm leading-relaxed">Our walls don&apos;t just hold technology; they hold stories, and every space is designed to nurture them.</p>
               </div>
            </motion.div>
         </motion.div>
      </section>
    </div>
  );
}
