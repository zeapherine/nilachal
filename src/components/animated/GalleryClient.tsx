"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { bloomIn, staggerContainer, fadeInSlideUp, scrollReveal } from "@/lib/animations";

export default function GalleryClient() {
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

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Art of Healing */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-[-10%] w-[50%] h-full bg-forest-light/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto relative z-10 text-center space-y-8"
        >
          <motion.div 
            variants={bloomIn}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2.5 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest shadow-sm mx-auto"
          >
             <Camera size={14} className="text-accent" />
             <span>The Art of Healing</span>
          </motion.div>
          <motion.h1 
            variants={fadeInSlideUp}
            className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance"
          >
            Moments of <br />
            <span className="text-accent italic font-normal serif text-forest">Light & Vitality.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInSlideUp}
            className="text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans italic"
          >
            &quot;We believe that beauty is an essential component of the restorative journey. Explore the spaces where science meets serenity.&quot;
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery: The Organic Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "200px" }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-8"
        >
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              variants={bloomIn}
              className={`relative overflow-hidden rounded-[3rem] group cursor-pointer shadow-sm ${img.span} border border-white/40`}
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[10s] grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-10 left-10 right-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-0.5 bg-accent" />
                   <p className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">{img.category}</p>
                </div>
                <h3 className="text-white text-3xl font-serif font-bold italic">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Narrative CTA: The Invitation */}
      <section className="py-40 px-6 relative overflow-hidden">
        <motion.div 
          variants={scrollReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative z-10"
        >
           <div className="bg-forest rounded-[5rem] p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <motion.h2 
                variants={fadeInSlideUp}
                className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight"
              >
                Walk Our Halls <br />
                <span className="text-accent italic font-normal">of Hope.</span>
              </motion.h2>
              <motion.p 
                variants={fadeInSlideUp}
                className="text-sand-light/60 mb-12 text-xl max-w-2xl mx-auto font-sans leading-relaxed"
              >
                A photograph can only tell half the story. Visit us in Kokrajhar to feel the warmth of our care and the tranquility of our environment.
              </motion.p>
              
              <motion.div 
                variants={bloomIn}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link 
                   href="/contact"
                   className="bg-accent text-forest px-12 py-5 rounded-full font-black tracking-widest uppercase text-xs hover:bg-white transition-all shadow-xl group/btn flex items-center gap-4"
                >
                  Schedule a Visit <MapPin size={16} />
                </Link>
                <Link 
                   href="/appointments"
                   className="text-white font-black tracking-widest uppercase text-xs flex items-center gap-3 hover:text-accent transition-colors"
                >
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
