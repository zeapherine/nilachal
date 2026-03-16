"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Heart, Stethoscope, ChevronRight, Sprout, Phone, Sparkles, Shield, Clock, Baby, Building2, Camera, MapPin, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { bloomIn, staggerContainer, fadeInSlideUp, hoverScale, scrollReveal, magneticScale, depthBloom, slideInLeft } from "@/lib/animations";

export default function HomeClient() {
  const departments = [
    { 
      title: "Maternity & NICU", 
      icon: <Baby size={24} />, 
      description: "A gentle start for the smallest lives in our state-of-the-art sanctuary.", 
      image: "/dept_mother_child.png",
      color: "text-coral", 
      bg: "bg-coral-light" 
    },
    { 
      title: "Emergency Care", 
      icon: <Activity size={24} />, 
      description: "Compassionate urgency when every second counts for your loved ones.", 
      image: "/dept_critical_care.png",
      color: "text-forest-medium", 
      bg: "bg-forest-muted" 
    },
    { 
      title: "Modern Surgery", 
      icon: <Stethoscope size={24} />, 
      description: "Precision healing through advanced minimally invasive procedures.", 
      image: "/dept_surgery.png",
      color: "text-forest-medium", 
      bg: "bg-forest-muted" 
    },
  ];

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark">
      {/* Narrative Hero: The Invitation */}
      <section className="relative min-h-[95vh] w-full flex items-center pt-32 pb-20 overflow-hidden">
        {/* Organic Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 right-[-10%] w-[60%] h-[80%] bg-forest-light/20 rounded-full blur-[120px] -rotate-12 animate-pulse" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-[-5%] w-[40%] h-[50%] bg-coral-light/30 rounded-full blur-[100px]" 
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10"
        >
          <div className="lg:col-span-7 space-y-10">
            <motion.div 
              variants={bloomIn}
              className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md border border-forest-light/30 px-5 py-2.5 rounded-full text-forest-medium text-xs font-bold uppercase tracking-widest shadow-sm"
            >
              <Sprout size={14} className="text-forest" />
              <span>A Sanctuary for Healing & Hope</span>
            </motion.div>
            
            <motion.h1 variants={fadeInSlideUp} className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.95] tracking-tight text-balance">
              Where <span className="text-accent underline decoration-coral-light/50 decoration-8 underline-offset-8">Care</span> Feels Like <br />
              <span className="italic font-normal serif">Coming Home.</span>
            </motion.h1>
            
            <motion.p variants={fadeInSlideUp} className="text-xl md:text-2xl text-forest/70 font-sans leading-relaxed max-w-xl text-balance">
              Nilachal Hospital & Research Centre is more than a facility; it&apos;s a compassionate ecosystem designed for your complete recovery.
            </motion.p>
            
            <motion.div variants={fadeInSlideUp} className="flex flex-wrap gap-6 pt-4">
              <motion.div variants={magneticScale} whileHover="hover" whileTap="tap">
                <Link 
                  href="/contact" 
                  className="bg-primary hover:bg-forest text-white px-10 py-5 rounded-[2rem] font-bold text-lg flex items-center space-x-3 transition-all hover:shadow-[0_20px_50px_rgba(45,62,38,0.2)] hover:-translate-y-1"
                >
                  <span>Heal With Us</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
                <Link 
                  href="/about" 
                  className="group flex items-center space-x-4 text-forest font-bold text-lg hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <ChevronRight size={20} />
                  </div>
                  <span>Discover our Story</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={bloomIn} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
              <motion.div variants={depthBloom} className="w-full h-full">
                <Image
                  src="/hospital_hero_background_1773413303358.png"
                  alt="Compassionate Care at Nilachal"
                  fill
                  className="object-cover transition-transform duration-[15s] group-hover:scale-110"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-sand-dark/20 max-w-[240px]"
              >
                 <div className="bg-coral-light w-12 h-12 rounded-2xl flex items-center justify-center text-coral mb-4">
                    <Heart fill="currentColor" size={24} />
                 </div>
                 <p className="text-2xl font-serif font-bold text-forest leading-none">25k+</p>
                 <p className="text-xs text-forest/40 uppercase tracking-widest mt-1">Lives touched & restored</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Narrative Section: The Philosophy */}
      <section className="py-32 px-6 relative overflow-hidden">
        <motion.div 
          variants={scrollReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
        >
          <Activity size={48} className="mx-auto text-accent opacity-30 mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-forest leading-tight">
            We believe that <span className="italic font-normal">healing environment</span> is as vital as medical expertise.
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-coral/20 mx-auto rounded-full origin-center" 
          />
          <p className="text-lg text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans">
            Our multi-disciplinary team led by Dr. S.C. Rabha integrates botanical aesthetics, soft-lighting, and human-centric design to reduce patient anxiety and accelerate recovery times.
          </p>
          <motion.div variants={fadeInSlideUp} className="pt-8">
            <Link href="/about" className="inline-flex items-center space-x-4 text-forest font-bold text-lg group">
              <span>Read Our Full Story</span>
              <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Narrative Section: The Departments Overlay */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest-medium/5 rounded-full blur-[100px]" />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           <motion.div variants={fadeInSlideUp} className="lg:col-span-1 py-10 space-y-6">
              <p className="text-coral font-bold uppercase tracking-[0.3em] text-[10px]">Specialized Spheres</p>
              <h3 className="text-4xl font-serif font-black text-forest">Precision Meets Perspective.</h3>
              <p className="text-forest/50 text-sm leading-relaxed">
                From neonatal whispers to emergency roars, we are equipped for every chapter of your health journey.
              </p>
              <Link href="/departments" className="inline-flex items-center text-forest font-black border-b-2 border-accent/30 pb-1 hover:border-accent transition-all group">
                View All Specialties <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
           </motion.div>

           {departments.map((dept, idx) => (
             <motion.div 
               key={idx} 
               variants={bloomIn}
               whileHover={{ y: -8 }}
               className="group relative bg-white rounded-[3.5rem] overflow-hidden shadow-[0_30px_100px_rgba(45,62,38,0.05)] border border-sand-dark/10 flex flex-col transition-all cursor-pointer"
             >
                {/* Editorial Inset Gallery */}
                <div className="p-4 w-full">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden">
                    <motion.div variants={depthBloom} className="w-full h-full">
                       <Image 
                          src={dept.image} 
                          alt={dept.title} 
                          fill 
                          className="object-cover transition-transform duration-[8s] group-hover:scale-105" 
                       />
                    </motion.div>
                    
                    {/* Minimal Gradient for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Badge Signature */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute top-4 right-4 ${dept.bg} ${dept.color} w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md border border-white/20 z-20`}
                    >
                      {dept.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content Signature Area */}
                <div className="px-10 pb-10 pt-4 space-y-4">
                   <h4 className="text-3xl font-serif font-black text-forest leading-tight group-hover:text-primary transition-colors">
                    {dept.title}
                   </h4>
                   <p className="text-forest/50 text-sm leading-relaxed font-sans line-clamp-2">
                     {dept.description}
                   </p>
                   
                   <div className="pt-4 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent opacity-60 group-hover:opacity-100 transition-all">
                      <span>Inquire Department</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </section>

      {/* Narrative Section: Facilities Preview */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
              <motion.div variants={bloomIn} className="inline-flex items-center space-x-2 bg-forest-muted px-4 py-2 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest">
                <Building2 size={14} className="text-accent" />
                <span>The Infrastructure of Hope</span>
              </motion.div>
              <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest">
                Spaces Built for <br /><span className="text-accent italic font-normal">Sanctuary.</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeInSlideUp}>
              <Link href="/facilities" className="bg-forest text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent transition-all shadow-xl flex items-center gap-3">
                Explore All Facilities <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Modular OTs", img: "/facility_ot.png", tag: "Sterile Precision" },
              { title: "Imaging Labs", img: "/facility_xray.png", tag: "Visionary Insight" },
              { title: "Recovery Suites", img: "/facility_ward.png", tag: "Restorative Comfort" }
            ].map((fac, i) => (
              <motion.div key={i} variants={bloomIn} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-sand-dark/10 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                  <Image src={fac.img} alt={fac.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[10s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent font-black text-[10px] uppercase tracking-widest mb-2">{fac.tag}</p>
                    <h4 className="text-white text-3xl font-serif font-bold italic">{fac.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Narrative Section: Doctors Preview */}
      <section className="py-32 px-6 bg-forest-muted/30 rounded-[5rem] mx-6">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.div variants={bloomIn} className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest mx-auto">
              <Stethoscope size={14} className="text-accent" />
              <span>The Stewards of Life</span>
            </motion.div>
            <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest">
              Healers with a <br /><span className="text-accent italic font-normal">Human Soul.</span>
            </motion.h2>
            <motion.p variants={fadeInSlideUp} className="text-forest/50 text-xl max-w-2xl mx-auto leading-relaxed">
              Our specialists blend clinical excellence with profound compassion, ensuring you never walk the path to wellness alone.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Dr. P.K. Rabha", role: "Chief Architect of Surgery", img: "/dr_pk_rabha.png", exp: "31+ Years" },
              { name: "Dr. Ananya Sen", role: "Guardian of New Life", img: "/dr_ananya_sen.png", exp: "21+ Years" }
            ].map((dr, i) => (
              <motion.div key={i} variants={bloomIn} className="bg-white rounded-[4rem] p-10 flex flex-col sm:flex-row gap-10 items-center border border-sand-dark/10 hover:shadow-2xl transition-all duration-700">
                <div className="relative w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-sand-light">
                  <Image src={dr.img} alt={dr.name} fill className="object-cover" />
                </div>
                <div className="space-y-4 text-center sm:text-left">
                  <h4 className="text-3xl font-serif font-black text-forest">{dr.name}</h4>
                  <p className="text-accent font-black text-[10px] tracking-widest uppercase">{dr.role}</p>
                  <div className="flex items-center gap-2 justify-center sm:justify-start text-forest/40 text-xs font-bold uppercase tracking-widest">
                    <Award size={14} /> {dr.exp} Experience
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/doctors" className="inline-flex items-center gap-4 text-forest font-black border-b-2 border-accent/30 pb-2 hover:border-accent transition-all group text-lg">
              Meet Our Full Medical Team <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section: Gallery Preview */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-4">
              <motion.div variants={bloomIn} className="flex items-center justify-center md:justify-start gap-2">
                <Camera size={14} className="text-accent" />
                <span className="text-accent font-black text-[10px] uppercase tracking-widest">The Art of Healing</span>
              </motion.div>
              <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-6xl font-serif font-black text-forest leading-tight">
                Visions of <span className="italic font-normal">Vitality.</span>
              </motion.h2>
            </div>
            <motion.div variants={bloomIn}>
              <Link href="/gallery" className="group flex items-center gap-4 text-forest font-black uppercase text-xs tracking-widest hover:text-accent transition-colors">
                Visit the Gallery <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { src: "/facility_exterior.png", span: "md:col-span-2 md:row-span-2" },
              { src: "/dept_mother_child.png", span: "md:col-span-1" },
              { src: "/facility_ward.png", span: "md:col-span-1" },
              { src: "/dept_critical_care.png", span: "md:col-span-2" }
            ].map((img, i) => (
              <motion.div key={i} variants={bloomIn} className={`relative overflow-hidden rounded-[2.5rem] aspect-square ${img.span} group border border-sand-dark/10`}>
                <Image src={img.src} alt="Facility Preview" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[8s]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mandatory Section: The Features/Services Grid */}
      <section className="py-20 px-6">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Activity className="text-coral" />, title: "24/7 Emergency", desc: "Always awake, always ready." },
            { icon: <Zap className="text-accent" />, title: "Rapid Response", desc: "Minutes that save lives." },
            { icon: <Shield className="text-forest" />, title: "NABH Standard", desc: "Excellence in every touch." },
            { icon: <Phone className="text-coral" />, title: "Ambulance", desc: "Instant critical transport." }
          ].map((feature, i) => (
            <motion.div key={i} variants={fadeInSlideUp} className="bg-white/60 p-10 rounded-[3rem] border border-sand-dark/10 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-sand-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-black text-forest mb-2">{feature.title}</h4>
              <p className="text-forest/40 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Narrative Section: Why Choose Nilachal - The Flow */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              variants={slideInLeft}
              style={{ perspective: 1000 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-accent/5 rounded-full blur-[150px] animate-pulse" />
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5 }}
                className="relative rounded-[5rem] overflow-hidden shadow-2xl skew-y-1 transition-transform duration-1000"
              >
                 <Image 
                    src="/why_choose_nilachal.png" 
                    alt="Nilachal Healing Atmosphere" 
                    width={800} 
                    height={1000} 
                    className="object-cover h-[700px] w-full"
                 />
                 <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
              </motion.div>
              
              {/* Overlapping Narrative Box */}
              <motion.div 
                variants={bloomIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block w-72 p-10 bg-white shadow-2xl rounded-[3rem] border border- sand-dark/10 space-y-4"
              >
                 <Sparkles className="text-accent" size={32} />
                 <p className="text-3xl font-serif font-bold text-forest">20+</p>
                 <p className="text-xs text-forest/40 uppercase tracking-widest font-bold">Years of Trust in Kokrajhar</p>
                 <div className="pt-4 border-t border-sand-dark/20 text-xs italic text-forest/60 underline underline-offset-4">
                    Legacy that heals.
                 </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-12"
            >
               <div className="space-y-6">
                  <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-black text-forest leading-tight">
                    Every Recovery <br />
                    <span className="text-accent italic font-normal">has a story.</span>
                  </motion.h2>
                  <motion.p variants={fadeInSlideUp} className="text-lg text-forest/60 leading-relaxed font-sans">
                    At Nilachal, we don&apos;t just treat symptoms; we nurture the whole person. Our clinical research wing ensures you have access to the latest medical breakthroughs right here in your community.
                  </motion.p>
               </div>

               <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Surgeries", value: "15k+", icon: <Stethoscope size={20} /> },
                    { label: "Critical Care", value: "500+", icon: <Activity size={20} /> },
                    { label: "Specialists", value: "150+", icon: <Shield size={20} /> },
                    { label: "Accreditation", value: "NABH", icon: <Clock size={20} /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeInSlideUp}
                      className="space-y-2 border-l-2 border-coral-light/30 pl-6 group hover:border-accent transition-colors"
                    >
                       <div className="text-coral group-hover:scale-110 transition-transform w-fit">
                          {item.icon}
                       </div>
                       <p className="text-3xl font-serif font-bold text-forest">{item.value}</p>
                       <p className="text-[10px] uppercase tracking-widest text-forest/40 font-bold">{item.label}</p>
                    </motion.div>
                  ))}
               </motion.div>
            </motion.div>
        </div>
      </section>

      {/* The Final Wrap: Start Your Healing */}
      <section className="px-6 pb-40">
        <motion.div 
          variants={bloomIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto rounded-[5rem] bg-forest text-white p-16 md:p-32 text-center relative overflow-hidden group"
        >
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] group-hover:scale-150 transition-transform duration-[4s]" />
           <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
           
           <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="relative z-10 max-w-2xl mx-auto space-y-12"
           >
              <motion.h2 variants={fadeInSlideUp} className="text-5xl md:text-7xl font-serif font-bold text-balance leading-tight">
                Trust Your Heart <br />to our <span className="italic font-normal serif text-accent">Care.</span>
              </motion.h2>
              <motion.p variants={fadeInSlideUp} className="text-sand-light/50 text-lg leading-relaxed font-sans">
                 Your journey to wellness starts with a single conversation. Our medical concierge is ready to guide you through your first visit.
              </motion.p>
              <motion.div variants={fadeInSlideUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                 <motion.div variants={magneticScale} whileHover="hover" whileTap="tap">
                    <Link href="/contact" className="w-full sm:w-auto bg-white text-forest px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-accent hover:text-white transition-all shadow-2xl inline-block">
                       Request Appointment
                    </Link>
                 </motion.div>
                 <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
                    <Link href="tel:+911122334455" className="group flex items-center space-x-3 text-sand-light font-bold text-lg hover:text-accent transition-colors">
                       <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/5 group-hover:border-accent transition-all">
                          <Phone size={24} className="animate-pulse" />
                       </div>
                       <span>Instant Support</span>
                    </Link>
                 </motion.div>
              </motion.div>
           </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

