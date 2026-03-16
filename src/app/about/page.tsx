import React from "react";
import Image from "next/image";
import { Shield, Users, Heart, Sprout, Sparkles, Quote, Leaf, Activity, Globe, Flower2, Microscope, Clock, Compass, Target } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const values = [
  { title: "Patient Sanctuary", desc: "Creating a safe, calming ecosystem where the soul heals alongside the body.", icon: <Heart className="text-coral" />, bg: "bg-coral-light" },
  { title: "Living Innovation", desc: "Constant evolution of medical science, rooted in the wisdom of patient-centric care.", icon: <Sprout className="text-forest-medium" />, bg: "bg-forest-muted" },
  { title: "Radical Inclusion", desc: "Universal access to premium healing, removing barriers of distance and socio-economics.", icon: <Users className="text-forest-medium" />, bg: "bg-forest-muted" },
  { title: "Absolute Trust", desc: "Upholding clinical integrity as the foundation of every heartbeat we monitor.", icon: <Shield className="text-coral" />, bg: "bg-coral-light" },
];

const milestones = [
  { year: "1998", title: "Founding Spark", desc: "Dr. S.C. Rabha establishes the first clinic, driven by a vision to bring quality healthcare to his home soil in Kokrajhar.", icon: <Leaf className="text-forest-medium" /> },
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

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Visionary & the Legacy */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-sand-dark/5 blur-[80px] lg:blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Imagery */}
            <FadeIn direction="left" duration={1} className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 lg:-inset-6 bg-accent/5 rounded-[2.5rem] lg:rounded-[4rem] blur-xl lg:blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
              <ScaleIn className="relative aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/dr_sc_rabha.png" 
                  alt="Dr. S.C. Rabha - The Visionary" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[10s]"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent flex items-end p-6 lg:p-10">
                  <div className="space-y-1 lg:space-y-2">
                    <p className="text-[10px] lg:text-xs font-bold text-accent uppercase tracking-widest">Our Founder</p>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white italic">Dr. S.C. Rabha</h3>
                  </div>
                </div>
              </ScaleIn>
            </FadeIn>

            {/* Right: The Vision Message */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <FadeIn className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-widest text-[9px] lg:text-[10px]">
                  <Sparkles size={14} />
                  <span>The Vision Unveiled</span>
                </FadeIn>
                <FadeIn direction="up" className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black text-forest leading-[1.1] lg:leading-[0.9] tracking-tight">
                  A Legacy of <br />
                  <span className="text-accent italic font-normal serif">Nurturing Hope.</span>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} className="text-lg lg:text-xl text-forest/60 font-sans leading-relaxed text-balance">
                  In January 2026, we opened the doors to our new JD Road sanctuary—a dream decades in the making. Dr. S.C. Rabha envisioned a world where healthcare isn&apos;t just about treatment, but about restoring agency to the patient.
                </FadeIn>
              </div>

              <FadeIn className="bg-sand-dark/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-sand-dark/20 relative">
                 <Quote className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 text-accent/20 size-12 lg:size-16 rotate-180" />
                 <p className="text-xl lg:text-2xl font-serif italic text-forest/80 leading-relaxed mb-6">
                   &quot;We don&apos;t just measure success in heartbeats, but in the confidence of a mother holding her newborn.&quot;
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="w-8 lg:w-12 h-px bg-accent/30" />
                    <p className="font-bold text-forest uppercase tracking-widest text-[9px] lg:text-[10px]">Founder&apos;s Philosophy</p>
                 </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Pillars: Advanced Specialization */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-4 lg:space-y-6">
              <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest leading-tight">
                Our Clinical <br /><span className="italic font-normal serif text-accent underline decoration-coral/20 decoration-4 lg:decoration-8 underline-offset-4">Pillars.</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="text-lg lg:text-xl text-forest/60 leading-relaxed">
                Beyond the architecture, Nilachal is defined by world-class centers of excellence designed to handle the most complex medical challenges in the region.
              </FadeIn>
            </div>

            <div className="grid gap-6 lg:gap-8">
              {[
                { title: "Mother & Child Excellence", desc: "A comprehensive wing for high-risk neonatology and maternal care.", icon: <Heart className="text-coral" /> },
                { title: "Advanced Surgical Tech", desc: "Modular OTs equipped with robotic-assisted visualization systems.", icon: <Shield className="text-forest-medium" /> },
                { title: "Cardiac Research", desc: "A dedicated unit for preventive cardiology and chronic disease research.", icon: <Microscope className="text-forest-medium" /> },
              ].map((pillar, idx) => (
                <FadeIn 
                  key={idx}
                  delay={idx * 0.1}
                  className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-sand-dark/20"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-sand-dark/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    {React.cloneElement(pillar.icon as React.ReactElement<{ size: number }>, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-serif font-bold text-forest group-hover:text-accent transition-colors">{pillar.title}</h4>
                    <p className="text-forest/50 text-sm leading-relaxed mt-1 lg:mt-2">{pillar.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-8 lg:-inset-12 bg-accent/5 rounded-full blur-[80px] lg:blur-[100px]" />
            <FadeIn direction="right" className="relative aspect-square rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/hospital_clinical.png" 
                alt="Advanced Clinical Excellence" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </FadeIn>
            
            <FadeIn
              className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-sand-dark/20 max-w-[220px] lg:max-w-[280px]"
            >
              <div className="flex items-center space-x-3 lg:space-x-4 mb-2 lg:mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-forest/40">Latest Benchmark</span>
              </div>
              <p className="text-base lg:text-lg font-serif font-bold text-forest leading-tight italic">
                &quot;Setting new standards for regional healthcare in Assam.&quot;
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Sanctuary Environment: Architectural Philosophy */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grain.png')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-10 lg:space-y-12">
              <div className="space-y-4 lg:space-y-6">
                <FadeIn className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-widest text-[9px] lg:text-[10px]">
                  <Flower2 size={14} />
                  <span>Biophilic Design</span>
                </FadeIn>
                <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black leading-[1.1] lg:leading-[0.9]">
                  Architecture as <br /> <span className="text-accent italic font-normal serif text-balance">Medicine.</span>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
                  Our flagship JD Road facility is built on the principle of &quot;The Sanctuary.&quot; We believe that natural light, botanical integration, and sound-dampening geometries are as vital as the medicine we prescribe.
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                {[
                  { title: "Botanical Lungs", desc: "Internal courtyards filled with local flora to naturally oxygenate the patient wards." },
                  { title: "Non-Linear Geometry", desc: "Curved corridors designed to reduce the 'clinical anxiety' often found in traditional grids." },
                ].map((item, i) => (
                  <FadeIn 
                    key={i} 
                    delay={0.1 * i}
                    className="space-y-3 lg:space-y-4 p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-lg lg:text-xl font-serif font-bold text-accent">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            <ScaleIn className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="absolute -inset-8 lg:-inset-10 bg-accent/20 rounded-full blur-[80px] lg:blur-[100px]" />
              <div className="relative aspect-[3/4] rounded-[3rem] lg:rounded-[5rem] overflow-hidden border-4 lg:border-8 border-forest-light/20 shadow-2xl">
                <Image 
                  src="/hospital_exterior.png" 
                  alt="Architectural Sanctuary" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* The Odyssey: Chronological Timeline */}
      <section className="py-20 lg:py-32 bg-sand-dark/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <FadeIn className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-[0.2em] text-[9px] lg:text-[10px] mb-3 lg:mb-4">
              <Clock size={14} />
              <span>Our Odyssey</span>
            </FadeIn>
            <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest leading-tight">
              A Journey Through <br /><span className="italic font-normal serif text-accent">the Decades.</span>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-forest/10" />
            
            <div className="space-y-16 md:space-y-0">
              {milestones.map((ms, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <FadeIn 
                    key={idx}
                    direction={isEven ? "left" : "right"}
                    className={`flex flex-row md:items-center justify-between gap-8 md:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                      <div className={`${isEven ? 'md:pr-12' : 'md:pl-12'} space-y-2 lg:space-y-4`}>
                        <span className="text-4xl lg:text-6xl font-serif font-black text-coral/20">{ms.year}</span>
                        <h4 className="text-xl lg:text-3xl font-serif font-bold text-forest leading-tight">{ms.title}</h4>
                        <p className={`text-forest/60 text-sm lg:text-base leading-relaxed max-w-sm ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>{ms.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-3 md:relative md:left-0 z-10 flex items-center justify-center">
                      <div className="w-6 h-6 md:w-16 md:h-16 rounded-full bg-white shadow-xl border border-forest/5 flex items-center justify-center text-forest overflow-hidden relative">
                         <div className="absolute inset-0 bg-forest/5 animate-pulse" />
                         <div className="relative z-10 hidden md:block">{ms.icon}</div>
                         <div className="relative z-10 block md:hidden w-2 h-2 rounded-full bg-accent" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Organic Grid */}
      <section className="py-20 lg:py-40 bg-forest rounded-[2.5rem] lg:rounded-[5rem] text-white overflow-hidden relative mx-4 lg:mx-6 mb-20 lg:mb-40">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-[20%] right-[-10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-accent rounded-full blur-[100px] lg:blur-[150px]" />
           <div className="absolute bottom-0 left-[-5%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-coral rounded-full blur-[80px] lg:blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16 lg:mb-24 space-y-4">
            <FadeIn>
              <Sprout className="size-10 lg:size-12 mx-auto text-accent/40 mb-6 lg:mb-8" />
              <h2 className="text-4xl lg:text-7xl font-serif font-black leading-tight">Our Ethos</h2>
              <p className="text-sand-light/50 text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">The invisible threads that weave our standard of care together.</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {values.map((val, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className="group space-y-6 lg:space-y-8 p-0"
              >
                <div className={`${val.bg} w-14 lg:w-20 h-14 lg:h-20 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-white`}>
                   {React.cloneElement(val.icon as React.ReactElement<{ size: number }>, { size: 24 })}
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <h4 className="text-xl lg:text-2xl font-serif font-bold">{val.title}</h4>
                  <p className="text-sand-light/40 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership: The Stewards */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-6 lg:gap-8">
          <div className="space-y-3 lg:space-y-4">
            <FadeIn direction="up" className="text-forest font-bold uppercase tracking-widest text-[10px] lg:text-xs">The Stewards</FadeIn>
            <FadeIn direction="up" delay={0.1} className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest leading-tight">Keepers of <span className="italic font-normal serif text-accent">the Flame.</span></FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2} className="text-forest/50 text-base lg:text-lg max-w-sm leading-relaxed">Meet the visionary minds ensuring Nilachal stays at the frontier of compassionate science.</FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {leaders.map((leader, idx) => (
            <div 
              key={idx} 
              className="group space-y-4 lg:space-y-6"
            >
              <FadeIn delay={idx * 0.1} className="relative aspect-[3/4] w-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all group-hover:rounded-[1.5rem] duration-500">
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </FadeIn>
              <FadeIn delay={idx * 0.1 + 0.2} className="space-y-1 lg:space-y-2">
                <h4 className="text-2xl lg:text-3xl font-serif font-bold text-forest leading-tight">{leader.name}</h4>
                <p className="text-coral font-bold tracking-widest text-[9px] lg:text-[10px] uppercase">{leader.role}</p>
                <p className="text-forest/50 text-sm leading-relaxed pt-1 lg:pt-2">{leader.desc}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Future Vision: Nilachal 2030 */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-forest/5 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <FadeIn className="inline-flex items-center space-x-2 text-forest font-bold uppercase tracking-widest text-[9px] lg:text-[10px] justify-center lg:justify-start">
                <Compass size={14} className="text-accent" />
                <span>The Future Horizon</span>
              </FadeIn>
              <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest leading-tight">
                Nilachal <span className="italic font-normal serif text-accent">2030.</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="text-base lg:text-xl text-forest/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our vision extends beyond clinical excellence. We are building a future where healthcare is a seamless blend of artificial intelligence, planetary health, and ancestral wisdom.
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-4 lg:pt-6 text-left">
                <FadeIn delay={0.3} className="space-y-3 lg:space-y-4 p-6 rounded-[2rem] bg-forest-muted">
                  <div className="flex items-center space-x-3 text-forest">
                    <Globe size={18} className="text-accent" />
                    <span className="font-bold font-serif italic text-lg">Green Sanctuary</span>
                  </div>
                  <p className="text-sm text-forest/50 leading-relaxed">Transforming our campus into a zero-carbon, healing forest by 2030.</p>
                </FadeIn>
                <FadeIn delay={0.4} className="space-y-3 lg:space-y-4 p-6 rounded-[2rem] bg-forest-muted">
                  <div className="flex items-center space-x-3 text-forest">
                    <Target size={18} className="text-accent" />
                    <span className="font-bold font-serif italic text-lg">AI-Precision</span>
                  </div>
                  <p className="text-sm text-forest/50 leading-relaxed">Integrating machine learning for earlier diagnostics and personalized genomic care.</p>
                </FadeIn>
              </div>
            </div>

            <ScaleIn className="relative aspect-[16/9] lg:aspect-square w-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl mt-8 lg:mt-0">
               <Image 
                 src="/hospital_future.png" 
                 alt="Nilachal 2030 Vision" 
                 fill 
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover"
                 placeholder="blur"
                 blurDataURL={BLUR_DATA_URL}
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 to-transparent flex items-center justify-center p-8 lg:p-12 text-center">
                  <div className="bg-white/20 backdrop-blur-xl p-6 lg:p-8 rounded-[2.5rem] lg:rounded-[3rem] border border-white/30 max-w-[280px] lg:max-w-xs">
                     <p className="text-white font-serif italic text-base lg:text-lg leading-relaxed">
                       &quot;The future is not what we wait for, but what we curate today.&quot;
                     </p>
                  </div>
               </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* High-Impact Stat Strip */}
      <section className="pb-20 lg:pb-40 px-6">
        <FadeIn className="max-w-7xl mx-auto bg-sand-dark/10 rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-24 relative overflow-hidden">
          <Sparkles className="absolute top-10 right-10 text-accent/20 size-24 lg:size-32 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 text-center">
             <div className="space-y-2 lg:space-y-3">
                <div className="text-5xl lg:text-7xl font-serif font-black text-forest">25+</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[9px] lg:text-[10px]">Years of Restorative Care</p>
             </div>
             <div className="space-y-2 lg:space-y-3 border-y sm:border-y-0 sm:border-x border-sand-dark/30 py-10 sm:py-0">
                <div className="text-5xl lg:text-7xl font-serif font-black text-accent">100%</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[9px] lg:text-[10px]">Commitment to Patient Agency</p>
             </div>
             <div className="space-y-2 lg:space-y-3">
                <div className="text-5xl lg:text-7xl font-serif font-black text-forest">500+</div>
                <p className="text-forest/40 font-bold tracking-widest uppercase text-[9px] lg:text-[10px]">Pioneering Clinical Trials</p>
             </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
