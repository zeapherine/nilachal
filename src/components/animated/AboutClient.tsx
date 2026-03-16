"use client";

import Image from "next/image";
import { Shield, Target, Users, Heart, Award, ArrowRight, Sprout, Sparkles, Quote, Leaf, Clock, Microscope, Activity, Compass, Globe, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { bloomIn, staggerContainer, fadeInSlideUp, hoverScale, scrollReveal, depthBloom } from "@/lib/animations";

export default function AboutClient() {
  const values = [
    { title: "Patient Sanctuary", desc: "Creating a safe, calming ecosystem where the soul heals alongside the body.", icon: <Heart className="text-coral" />, bg: "bg-coral-light" },
    { title: "Living Innovation", desc: "Constant evolution of medical science, rooted in the wisdom of patient-centric care.", icon: <Sprout className="text-forest-medium" />, bg: "bg-forest-muted" },
    { title: "Radical Inclusion", desc: "Universal access to premium healing, removing barriers of distance and socio-economics.", icon: <Users className="text-forest-medium" />, bg: "bg-forest-muted" },
    { title: "Absolute Trust", desc: "Upholding clinical integrity as the foundation of every heartbeat we monitor.", icon: <Shield className="text-coral" />, bg: "bg-coral-light" },
  ];

  const milestones = [
    { year: "1998", title: "Founding Spark", desc: "Dr. S.C. Rabha establishes the first clinic, driven by a vision to bring quality healthcare to his home soil in Kokrajhar.", icon: <Leaf  className="text-forest-medium" /> },
    { year: "2012", title: "Regional Expansion", desc: "The facility evolves into a multi-specialty hub, becoming a lifeline for thousands across the Bodoland region.", icon: <Activity className="text-coral" /> },
    { year: "2026", title: "The JD Road Sanctuary", desc: "January 2026 marks the inauguration of our flagship sanctuary—a landmark of healing architecture and advanced clinical care.", icon: <Sparkles className="text-coral" /> },
    { year: "2030", title: "The Green Horizon", desc: "Our commitment to a zero-carbon future, integrating AI and botanical intelligence into the patient journey.", icon: <Globe className="text-forest-medium" /> },
  ];

  const leaders = [
    { name: "Dr. Arvind Rabha", role: "Executive Steward", desc: "Architect of the Nilachal 2030 vision, blending technology with touch.", image: "/dr_arvind_rabha.png" },
    { name: "Dr. Sarah D'Souza", role: "Director of Healing", desc: "Guardian of patient safety and clinical excellence across all wings.", image: "/dr_sarah_dsouza.png" },
    { name: "Prof. Rajesh Kumar", role: "Scientific Luminary", desc: "Leading transformative research in regenerative and restorative medicine.", image: "/prof_rajesh_kumar.png" },
    { name: "Meenakshi Iyer", role: "Chief of Harmony", desc: "Ensuring operational grace and seamless patient journeys every day.", image: "/meenakshi_iyer.png" },
  ];

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Visionary & the Legacy */}
      <section className="relative py-32 overflow-hidden bg-sand-light">
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[60%] h-full bg-sand-dark/5 blur-[120px] rounded-full" 
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Founder Imagery */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-6 bg-accent/5 rounded-[4rem] blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image 
                  src="/dr_sc_rabha.png" 
                  alt="Dr. S.C. Rabha - The Visionary" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent flex items-end p-10">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Our Founder</p>
                    <h3 className="text-3xl font-serif font-bold text-white italic">Dr. S.C. Rabha</h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: The Vision Message */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-6">
                <motion.div variants={bloomIn} className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-widest text-[10px]">
                  <Sparkles size={14} />
                  <span>The Vision Unveiled</span>
                </motion.div>
                <motion.h1 variants={fadeInSlideUp} className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight">
                  A Legacy of <br />
                  <span className="text-accent italic font-normal serif">Nurturing Hope.</span>
                </motion.h1>
                <motion.p variants={fadeInSlideUp} className="text-xl text-forest/60 font-sans leading-relaxed text-balance">
                  In January 2026, we opened the doors to our new JD Road sanctuary—a dream decades in the making. Dr. S.C. Rabha envisioned a world where healthcare isn&apos;t just about treatment, but about restoring agency to the patient.
                </motion.p>
              </div>

              <motion.div 
                variants={bloomIn}
                className="bg-sand-dark/10 backdrop-blur-sm p-10 rounded-[3rem] border border-sand-dark/20 relative"
              >
                 <Quote className="absolute -top-6 -right-6 text-accent/20 w-16 h-16 rotate-180" />
                 <p className="text-2xl font-serif italic text-forest/80 leading-relaxed mb-6">
                   &quot;We don&apos;t just measure success in heartbeats, but in the confidence of a mother holding her newborn.&quot;
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-accent/30" />
                    <p className="font-bold text-forest uppercase tracking-widest text-[10px]">Founder&apos;s Philosophy</p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Pillars: Advanced Specialization */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest leading-tight">
                Our Clinical <br /><span className="italic font-normal serif text-accent underline decoration-coral/20 decoration-8 underline-offset-4">Pillars.</span>
              </motion.h2>
              <motion.p variants={fadeInSlideUp} className="text-xl text-forest/60 leading-relaxed">
                Beyond the architecture, Nilachal is defined by world-class centers of excellence designed to handle the most complex medical challenges in the region.
              </motion.p>
            </div>

            <div className="grid gap-8">
              {[
                { title: "Mother & Child Excellence", desc: "A comprehensive wing for high-risk neonatology and maternal care.", icon: <Heart className="text-coral" /> },
                { title: "Advanced Surgical Tech", desc: "Modular OTs equipped with robotic-assisted visualization systems.", icon: <Shield className="text-forest-medium" /> },
                { title: "Cardiac Research", desc: "A dedicated unit for preventive cardiology and chronic disease research.", icon: <Microscope className="text-forest-medium" /> },
              ].map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  variants={bloomIn}
                  className="group flex items-start space-x-6 p-6 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-sand-dark/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sand-dark/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-forest group-hover:text-accent transition-colors">{pillar.title}</h4>
                    <p className="text-forest/50 text-sm leading-relaxed mt-2">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-12 bg-accent/5 rounded-full blur-[100px]" />
            <div className="relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/hospital_clinical.png" 
                alt="Advanced Clinical Excellence" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-sand-dark/20 max-w-[280px]"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/40">Latest Benchmark</span>
              </div>
              <p className="text-lg font-serif font-bold text-forest leading-tight italic">
                &quot;Setting new standards for regional healthcare in Assam.&quot;
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Sanctuary Environment: Architectural Philosophy */}
      <section className="py-32 relative overflow-hidden bg-forest text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grain.png')] opacity-20" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-widest text-[10px]"
                >
                  <Flower2 size={14} />
                  <span>Biophilic Design</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-serif font-black leading-[0.9]"
                >
                  Architecture as <br /> <span className="text-accent italic font-normal serif">Medicine.</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/70 leading-relaxed max-w-2xl"
                >
                  Our flagship JD Road facility is built on the principle of &quot;The Sanctuary.&quot; We believe that natural light, botanical integration, and sound-dampening geometries are as vital as the medicine we prescribe.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Botanical Lungs", desc: "Internal courtyards filled with local flora to naturally oxygenate the patient wards." },
                  { title: "Non-Linear Geometry", desc: "Curved corridors designed to reduce the 'clinical anxiety' often found in traditional grids." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="space-y-4 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-xl font-serif font-bold text-accent">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px]" />
              <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden border-8 border-forest-light/20">
                <Image 
                  src="/hospital_exterior.png" 
                  alt="Architectural Sanctuary" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Odyssey: Chronological Timeline */}
      <section className="py-32 bg-sand-dark/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div variants={bloomIn} className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              <Clock size={14} />
              <span>Our Odyssey</span>
            </motion.div>
            <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest">
              A Journey Through <br /><span className="italic font-normal serif text-accent">the Decades.</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-forest/10 hidden md:block" />
            
            <div className="space-y-24 md:space-y-0">
              {milestones.map((ms, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right w-full">
                    {idx % 2 === 0 ? (
                      <div className="md:pr-12 space-y-4">
                        <span className="text-6xl font-serif font-black text-coral/20">{ms.year}</span>
                        <h4 className="text-3xl font-serif font-bold text-forest">{ms.title}</h4>
                        <p className="text-forest/60 leading-relaxed max-w-sm ml-auto">{ms.desc}</p>
                      </div>
                    ) : null}
                    {idx % 2 === 1 ? (
                      <div className="md:pl-12 space-y-4 text-center md:text-left">
                        <span className="text-6xl font-serif font-black text-coral/20">{ms.year}</span>
                        <h4 className="text-3xl font-serif font-bold text-forest">{ms.title}</h4>
                        <p className="text-forest/60 leading-relaxed max-w-sm mr-auto">{ms.desc}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-forest/5 flex items-center justify-center text-forest overflow-hidden relative">
                       <div className="absolute inset-0 bg-forest/5 animate-pulse" />
                       <div className="relative z-10">{ms.icon}</div>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Organic Grid */}
      <section className="py-40 bg-forest rounded-[5rem] text-white overflow-hidden relative mx-6 mb-40">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" 
           />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
             transition={{ duration: 8, repeat: Infinity, delay: 2 }}
             className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-coral rounded-full blur-[120px]" 
           />
        </div>
        
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-24 space-y-4"
          >
            <Sprout size={48} className="mx-auto text-accent/40 mb-8" />
            <h2 className="text-5xl md:text-7xl font-serif font-black">Our Ethos</h2>
            <p className="text-sand-light/50 text-xl max-w-2xl mx-auto">The invisible threads that weave our standard of care together.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {values.map((val, idx) => (
              <motion.div 
                key={idx} 
                variants={bloomIn}
                className="group space-y-8 p-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${val.bg} w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-white`}
                >
                  {val.icon}
                </motion.div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-serif font-bold">{val.title}</h4>
                  <p className="text-sand-light/40 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership: The Stewards */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="space-y-4">
            <motion.h2 variants={fadeInSlideUp} className="text-forest font-bold uppercase tracking-widest text-xs">The Stewards</motion.h2>
            <motion.p variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest">Keepers of <span className="italic font-normal serif text-accent">the Flame.</span></motion.p>
          </div>
          <motion.p variants={fadeInSlideUp} className="text-forest/50 text-lg max-w-sm leading-relaxed">Meet the visionary minds ensuring Nilachal stays at the frontier of compassionate science.</motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx} 
              variants={bloomIn}
              className="group space-y-6"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative aspect-[3/4] w-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-all group-hover:rounded-[1.5rem] duration-500"
              >
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">Connect with</p>
                      <p className="text-accent font-serif font-bold">Stewardship Board</p>
                   </div>
                </div>
              </motion.div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-forest">{leader.name}</h4>
                <p className="text-coral font-bold tracking-widest text-[10px] uppercase">{leader.role}</p>
                <p className="text-forest/50 text-sm leading-relaxed pt-2">{leader.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Future Vision: Nilachal 2030 */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-forest/5 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={bloomIn} className="inline-flex items-center space-x-2 text-forest font-bold uppercase tracking-widest text-[10px]">
                <Compass size={14} className="text-accent" />
                <span>The Future Horizon</span>
              </motion.div>
              <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest">
                Nilachal <span className="italic font-normal serif text-accent">2030.</span>
              </motion.h2>
              <motion.p variants={fadeInSlideUp} className="text-xl text-forest/60 leading-relaxed">
                Our vision extends beyond clinical excellence. We are building a future where healthcare is a seamless blend of artificial intelligence, planetary health, and ancestral wisdom.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <motion.div variants={bloomIn} className="space-y-4">
                  <div className="flex items-center space-x-3 text-forest">
                    <Globe size={18} className="text-accent" />
                    <span className="font-bold font-serif italic">Green Sanctuary</span>
                  </div>
                  <p className="text-sm text-forest/50">Transforming our campus into a zero-carbon, healing forest by 2030.</p>
                </motion.div>
                <motion.div variants={bloomIn} className="space-y-4">
                  <div className="flex items-center space-x-3 text-forest">
                    <Target size={18} className="text-accent" />
                    <span className="font-bold font-serif italic">AI-Precision</span>
                  </div>
                  <p className="text-sm text-forest/50">Integrating machine learning for earlier diagnostics and personalized genomic care.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[16/9] lg:aspect-square w-full rounded-[4rem] overflow-hidden shadow-2xl"
            >
               <Image 
                 src="/hospital_future.png" 
                 alt="Nilachal 2030 Vision" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 to-transparent flex items-center justify-center p-12 text-center">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/30 max-w-xs"
                  >
                     <p className="text-white font-serif italic text-lg leading-relaxed">
                       &quot;The future is not what we wait for, but what we curate today.&quot;
                     </p>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Impact Stat Strip */}
      <section className="pb-40 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-sand-dark/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
        >
          <Sparkles className="absolute top-10 right-10 text-accent/20 w-32 h-32 animate-pulse" />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          >
             <motion.div variants={fadeInSlideUp} className="space-y-3">
                <div className="text-7xl font-serif font-black text-forest">25+</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[10px]">Years of Restorative Care</p>
             </motion.div>
             <motion.div variants={fadeInSlideUp} className="space-y-3 border-y md:border-y-0 md:border-x border-sand-dark/30 py-12 md:py-0">
                <div className="text-7xl font-serif font-black text-accent">100%</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[10px]">Commitment to Patient Agency</p>
             </motion.div>
             <motion.div variants={fadeInSlideUp} className="space-y-3">
                <div className="text-7xl font-serif font-black text-forest">500+</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[10px]">Pioneering Clinical Trials</p>
             </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
