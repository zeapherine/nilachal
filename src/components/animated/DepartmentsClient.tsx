"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Baby, HeartPulse, Sparkles, ShieldCheck, Microscope, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { bloomIn, staggerContainer, fadeInSlideUp, scrollReveal, slideInLeft, slideInRight, depthBloom } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function DepartmentsClient() {
  const isMobile = useIsMobile();
  const departments = [
    {
      title: "Mother & Child Sanctuary",
      slug: "mother-and-child",
      icon: <Baby className="w-10 h-10 text-coral" />,
      image: "/dept_mother_child.png",
      services: ["Holistic Maternity OT", "Gentle Labor Suites", "Neonatal Restoration", "Pediatric Surgery"],
      description: "A nurturing ecosystem where life begins in tranquility. Our focus is on the sacred bond between mother and child, supported by the latest neonatal breakthroughs.",
      accent: "bg-coral-light/30"
    },
    {
      title: "Restorative Critical Care",
      slug: "critical-care",
      icon: <HeartPulse className="w-10 h-10 text-forest-medium" />,
      image: "/dept_critical_care.png",
      services: ["Quiet-Zone ICU", "Advanced Life Flow", "Compassionate Emergency", "Cardiac Vigilance"],
      description: "Where every heartbeat is a priority. Our Critical Care Unit blends intense medical monitoring with a calming, human-centric environment to accelerate stabilization.",
      accent: "bg-forest-muted"
    },
    {
      title: "Advanced Surgical Wings",
      slug: "surgery",
      icon: <Activity className="w-10 h-10 text-forest-medium" />,
      image: "/dept_surgery.png",
      services: ["Minimally Invasive Care", "Neuro-restoration", "Organic Orthopedics", "Precision Urology"],
      description: "Harnessing the power of precision. Our surgical teams use advanced laminar flow environments and robotic assistance to perform life-changing procedures with minimal trauma.",
      accent: "bg-forest-muted"
    },
    {
      title: "Imaging & Insight Lab",
      slug: "diagnostics",
      icon: <Microscope className="w-10 h-10 text-coral" />,
      image: "/dept_diagnostics.png",
      services: ["1.5 Tesla Clarity MRI", "Insightful CT Scanning", "Molecular Pathology", "Digital Transparency"],
      description: "Seeking the truth within. Our diagnostics wing provides the clarity needed for effective healing, using high-resolution technology and rapid-result laboratory systems.",
      accent: "bg-coral-light/30"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Spheres */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-[-5%] w-[40%] h-full bg-forest-light/10 blur-[130px] rounded-full" 
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
             <Sparkles size={14} className="text-accent" />
             <span>Centers of Clinical Excellence</span>
          </motion.div>
          <motion.h1 
            variants={fadeInSlideUp}
            className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance"
          >
            Sanctuaries of <br />
            <span className="text-accent italic font-normal serif text-forest">Specialized Care.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInSlideUp}
            className="text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            We have compartmentalized our expertise into dedicated ecosystems, ensuring that every patient receives focused, world-class attention.
          </motion.p>
        </motion.div>
      </section>

      {/* Narrative Grid: The Experiences */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 gap-32">
          {departments.map((dept, index) => (
            <motion.div 
              key={index} 
              variants={isMobile ? undefined : staggerContainer}
              initial={isMobile ? "animate" : "initial"}
              whileInView="animate"
              viewport={{ once: true, margin: "200px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 group`}
            >
              <motion.div 
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className="w-full lg:w-1/2 relative aspect-[1.2/1] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group-hover:skew-x-1 transition-all duration-[2s]"
              >
                <Image 
                  src={dept.image} 
                  alt={dept.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[15s]"
                />
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-6">
                  <motion.div 
                    variants={bloomIn}
                    className={`${dept.accent} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8`}
                  >
                    {dept.icon}
                  </motion.div>
                  <motion.h2 
                    variants={fadeInSlideUp}
                    className="text-5xl font-serif font-black text-forest leading-tight group-hover:text-accent transition-colors duration-500"
                  >
                    {dept.title}
                  </motion.h2>
                  <motion.p 
                    variants={fadeInSlideUp}
                    className="text-forest/60 text-lg leading-relaxed font-sans"
                  >
                    {dept.description}
                  </motion.p>
                </div>

                <motion.div 
                  variants={fadeInSlideUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/40 p-8 rounded-[3rem] border border-sand-dark/10"
                >
                   {dept.services.map((service, sIdx) => (
                     <div key={sIdx} className="flex items-center space-x-3 group/item">
                       <div className="w-2 h-2 rounded-full bg-accent/30 group-hover/item:bg-accent transition-colors" />
                       <span className="text-sm font-bold text-forest/70 group-hover/item:text-forest transition-colors">{service}</span>
                     </div>
                   ))}
                </motion.div>

                <motion.div variants={bloomIn}>
                  <Link 
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center space-x-4 group/btn"
                  >
                    <div className="w-14 h-14 rounded-full border border-forest/20 flex items-center justify-center group-hover/btn:bg-forest group-hover/btn:text-white transition-all">
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-forest font-black tracking-widest uppercase text-xs">Deep Dive into {dept.title}</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-40">
        <motion.div 
          variants={isMobile ? undefined : scrollReveal}
          initial={isMobile ? "animate" : "initial"}
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[5rem] bg-accent text-white p-16 md:p-32 text-center relative overflow-hidden group"
        >
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <Sparkles className="absolute top-10 left-10 w-40 h-40 text-white" />
              <ShieldCheck className="absolute bottom-10 right-10 w-60 h-60 text-white" />
           </div>
           
           <div className="relative z-10 space-y-10">
              <motion.h2 
                variants={fadeInSlideUp}
                className="text-5xl md:text-7xl font-serif font-bold"
              >
                Uncertain about <br />
                <span className="italic font-normal serif text-forest">your needs?</span>
              </motion.h2>
              <motion.p 
                variants={fadeInSlideUp}
                className="text-sand-light/60 text-lg max-w-xl mx-auto leading-relaxed"
              >
                Our medical counselors are available 24/7 to guide you to the right specialist for your unique journey.
              </motion.p>
              <motion.div 
                variants={bloomIn}
                className="flex justify-center pt-8"
              >
                <Link href="/contact" className="bg-white text-forest px-16 py-7 rounded-[2.5rem] font-bold text-xl hover:bg-forest hover:text-white transition-all shadow-2xl">
                  Start Your Healing Journey
                </Link>
              </motion.div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
