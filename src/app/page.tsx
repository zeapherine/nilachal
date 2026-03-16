import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Heart, Stethoscope, ChevronRight, Sprout, Phone, Sparkles, Shield, Clock, Baby, Building2, Camera, MapPin, Zap, Award, Compass, Target } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL, IMAGE_SIZES } from "@/lib/image-utils";

const departments = [
  { 
    title: "Maternity & NICU", 
    slug: "mother-child",
    icon: <Baby size={24} />, 
    description: "A gentle start for the smallest lives in our state-of-the-art sanctuary.", 
    image: "/dept_mother_child.png",
    color: "text-coral", 
    bg: "bg-coral-light" 
  },
  { 
    title: "Emergency Care", 
    slug: "critical-care",
    icon: <Activity size={24} />, 
    description: "Compassionate urgency when every second counts for your loved ones.", 
    image: "/dept_critical_care.png",
    color: "text-forest-medium", 
    bg: "bg-forest-muted" 
  },
  { 
    title: "Modern Surgery", 
    slug: "surgery",
    icon: <Stethoscope size={24} />, 
    description: "Precision healing through advanced minimally invasive procedures.", 
    image: "/dept_surgery.png",
    color: "text-forest-medium", 
    bg: "bg-forest-muted" 
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark">
      {/* Narrative Hero: The Invitation */}
      <section className="relative min-h-[85vh] lg:min-h-[95vh] w-full flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Organic Background Elements */}
        <div className="absolute top-20 right-[-10%] w-[80%] lg:w-[60%] h-[80%] bg-forest-light/20 rounded-full blur-[80px] lg:blur-[120px] -rotate-12 animate-pulse" />
        <div className="absolute bottom-0 left-[-5%] w-[60%] lg:w-[40%] h-[50%] bg-coral-light/30 rounded-full blur-[70px] lg:blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <FadeIn className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md border border-forest-light/30 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-forest-medium text-[10px] lg:text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sprout size={14} className="text-forest" />
              <span>A Sanctuary for Healing & Hope</span>
            </FadeIn>
            
            <FadeIn direction="up" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-forest leading-[1.1] lg:leading-[0.95] tracking-tight text-balance">
              Where <span className="text-accent underline decoration-coral-light/50 decoration-4 lg:decoration-8 underline-offset-4 lg:underline-offset-8">Care</span> Feels Like <br />
              <span className="italic font-normal serif">Coming Home.</span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} className="text-lg lg:text-2xl text-forest/70 font-sans leading-relaxed max-w-xl text-balance">
              Nilachal Hospital & Research Centre is more than a facility; it&apos;s a compassionate ecosystem designed for your complete recovery.
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <Link 
                href="/contact" 
                className="bg-forest hover:bg-forest-medium text-white px-8 lg:px-10 py-4 lg:py-5 rounded-[1.5rem] lg:rounded-[2rem] font-bold text-base lg:text-lg flex items-center justify-center space-x-3 transition-all hover:shadow-[0_20px_50px_rgba(45,62,38,0.2)] hover:-translate-y-1 shadow-lg"
              >
                <span>Heal With Us</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center justify-center sm:justify-start space-x-4 text-forest font-bold text-base lg:text-lg hover:text-accent transition-colors py-2"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                  <ChevronRight size={18} className="lg:size-5" />
                </div>
                <span>Discover our Story</span>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <FadeIn className="relative aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white group">
              <ScaleIn className="w-full h-full">
                <Image
                  src="/hospital_hero_background_1773413303358.png"
                  alt="Compassionate Care at Nilachal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[15s] group-hover:scale-110"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </ScaleIn>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              
              {/* Floating Stat Card */}
              <div 
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-sand-dark/20 max-w-[180px] lg:max-w-[240px]"
              >
                 <div className="bg-coral-light w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center text-coral mb-3 lg:mb-4">
                    <Heart fill="currentColor" size={20} className="lg:size-6" />
                 </div>
                 <p className="text-xl lg:text-2xl font-serif font-bold text-forest leading-none">25k+</p>
                 <p className="text-[10px] lg:text-xs text-forest/40 uppercase tracking-widest mt-1">Lives touched & restored</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Narrative Section: The Philosophy */}
      <section className="py-16 lg:py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-10 lg:space-y-12 relative z-10">
          <FadeIn direction="up">
            <Activity className="size-10 lg:size-12 mx-auto text-accent opacity-30 mb-6 lg:mb-8" />
            <h2 className="text-3xl lg:text-5xl font-serif font-black text-forest leading-tight">
              We believe that <span className="italic font-normal">healing environment</span> is as vital as medical expertise.
            </h2>
          </FadeIn>
          <div className="w-16 lg:w-24 h-1 bg-coral/20 mx-auto rounded-full origin-center" />
          <FadeIn direction="up" delay={0.1} className="text-base lg:text-lg text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans text-balance">
            Our multi-disciplinary team led by Dr. S.C. Rabha integrates botanical aesthetics, soft-lighting, and human-centric design to reduce patient anxiety and accelerate recovery times.
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="pt-4 lg:pt-8">
            <Link href="/about" className="inline-flex items-center space-x-3 lg:space-x-4 text-forest font-bold text-base lg:text-lg group">
              <span>Read Our Full Story</span>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all">
                <ArrowRight size={18} className="lg:size-5" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Narrative Section: The Departments Overlay */}
      <section className="py-16 lg:py-20 px-6 max-w-7xl mx-auto w-full relative">
        <div className="absolute top-0 right-0 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-forest-medium/5 rounded-full blur-[80px] lg:blur-[100px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <FadeIn className="lg:col-span-1 py-8 lg:py-10 space-y-4 lg:space-y-6">
              <p className="text-coral font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[10px]">Specialized Spheres</p>
              <h3 className="text-3xl lg:text-4xl font-serif font-black text-forest leading-tight">Precision Meets Perspective.</h3>
              <p className="text-forest/50 text-sm leading-relaxed">
                From neonatal whispers to emergency roars, we are equipped for every chapter of your health journey.
              </p>
              <Link href="/departments" className="inline-flex items-center text-forest font-black border-b-2 border-accent/30 pb-1 hover:border-accent transition-all group lg:text-base text-sm">
                View All Specialties <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
           </FadeIn>

            {departments.map((dept: any, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className="group relative bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_30px_100px_rgba(45,62,38,0.05)] border border-sand-dark/10 flex flex-col transition-all cursor-pointer hover:translate-y-[-8px]"
              >
                <Link href={`/departments/${dept.slug}`} className="flex flex-col h-full">
                  {/* Editorial Inset Gallery */}
                  <div className="p-3 lg:p-4 w-full">
                    <ScaleIn className="relative aspect-[16/10] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
                      <Image 
                        src={dept.image} 
                        alt={dept.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[8s] group-hover:scale-105" 
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                      
                      {/* Minimal Gradient for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Badge Signature */}
                      <div 
                        className={`absolute top-3 right-3 lg:top-4 lg:right-4 ${dept.bg} ${dept.color} w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md border border-white/20 z-20 transition-all group-hover:scale-110`}
                      >
                        {React.cloneElement(dept.icon as React.ReactElement, { size: 20 })}
                      </div>
                    </ScaleIn>
                  </div>

                  {/* Content Signature Area */}
                  <div className="px-8 lg:px-10 pb-10 pt-2 lg:pt-4 space-y-3 lg:space-y-4">
                    <h4 className="text-2xl lg:text-3xl font-serif font-black text-forest leading-tight group-hover:text-accent transition-colors">
                      {dept.title}
                    </h4>
                    <p className="text-forest/50 text-sm leading-relaxed font-sans line-clamp-2">
                      {dept.description}
                    </p>
                    
                    <div className="pt-2 lg:pt-4 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent opacity-60 group-hover:opacity-100 transition-all">
                      <span>Inquire Department</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
        </div>
      </section>

      {/* Narrative Section: Facilities Preview */}
      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
        <div className="space-y-12 lg:space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8">
            <div className="space-y-4 lg:space-y-6 max-w-2xl">
              <FadeIn className="inline-flex items-center space-x-2 bg-forest-muted px-4 py-2 rounded-full text-forest-medium text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
                <Building2 size={14} className="text-accent" />
                <span>The Infrastructure of Hope</span>
              </FadeIn>
              <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest leading-tight">
                Spaces Built for <br /><span className="text-accent italic font-normal">Sanctuary.</span>
              </FadeIn>
            </div>
            <FadeIn direction="up">
              <Link href="/facilities" className="bg-forest text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-[10px] lg:text-sm uppercase tracking-widest hover:bg-accent transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
                Explore All Facilities <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Modular OTs", img: "/facility_ot.png", tag: "Sterile Precision" },
              { title: "Imaging Labs", img: "/facility_xray.png", tag: "Visionary Insight" },
              { title: "Recovery Suites", img: "/facility_ward.png", tag: "Restorative Comfort" }
            ].map((fac, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
                <ScaleIn className="relative aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden mb-6 lg:mb-8 border border-sand-dark/10 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                  <Image src={fac.img} alt={fac.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[10s]" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent font-black text-[9px] lg:text-[10px] uppercase tracking-widest mb-1 lg:mb-2">{fac.tag}</p>
                    <h4 className="text-white text-2xl lg:text-3xl font-serif font-bold italic">{fac.title}</h4>
                  </div>
                </ScaleIn>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section: Doctors Preview */}
      <section className="py-20 lg:py-32 px-6 lg:bg-forest-muted/30 lg:rounded-[5rem] lg:mx-6">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-20">
          <div className="text-center space-y-4 lg:space-y-6">
            <FadeIn className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full text-forest-medium text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mx-auto">
              <Stethoscope size={14} className="text-accent" />
              <span>The Stewards of Life</span>
            </FadeIn>
            <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-forest text-balance leading-tight">
              Healers with a <br /><span className="text-accent italic font-normal">Human Soul.</span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1} className="text-forest/50 text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Our specialists blend clinical excellence with profound compassion, ensuring you never walk the path to wellness alone.
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { name: "Dr. P.K. Rabha", role: "Chief Architect of Surgery", img: "/dr_pk_rabha.png", exp: "31+ Years" },
              { name: "Dr. Ananya Sen", role: "Guardian of New Life", img: "/dr_ananya_sen.png", exp: "21+ Years" }
            ].map((dr, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-10 flex flex-col sm:flex-row gap-6 lg:gap-10 items-center border border-sand-dark/10 hover:shadow-2xl transition-all duration-700">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-sand-light shadow-lg">
                  <Image src={dr.img} alt={dr.name} fill sizes={IMAGE_SIZES.avatar} className="object-cover" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                </div>
                <div className="space-y-3 lg:space-y-4 text-center sm:text-left">
                  <h4 className="text-2xl lg:text-3xl font-serif font-black text-forest">{dr.name}</h4>
                  <p className="text-accent font-black text-[9px] lg:text-[10px] tracking-widest uppercase">{dr.role}</p>
                  <div className="flex items-center gap-2 justify-center sm:justify-start text-forest/40 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
                    <Award size={14} /> {dr.exp} Experience
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center pt-6 lg:pt-8 border-t border-forest/5 lg:border-none">
            <FadeIn>
              <Link href="/doctors" className="inline-flex items-center gap-4 text-forest font-black border-b-2 border-accent/30 pb-2 hover:border-accent transition-all group lg:text-lg text-sm">
                Meet Our Full Medical Team <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Narrative Section: Gallery Preview */}
      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="space-y-10 lg:space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8 text-center md:text-left">
            <div className="space-y-3 lg:space-y-4">
              <FadeIn className="flex items-center justify-center md:justify-start gap-2">
                <Camera size={14} className="text-accent" />
                <span className="text-accent font-black text-[9px] lg:text-[10px] uppercase tracking-widest">The Art of Healing</span>
              </FadeIn>
              <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-forest leading-tight">
                Visions of <span className="italic font-normal">Vitality.</span>
              </FadeIn>
            </div>
            <FadeIn>
              <Link href="/gallery" className="group flex items-center justify-center md:justify-start gap-3 lg:gap-4 text-forest font-black uppercase text-[10px] lg:text-xs tracking-widest hover:text-accent transition-colors">
                Visit the Gallery <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: "/facility_exterior.png", span: "lg:col-span-2 lg:row-span-2" },
              { src: "/dept_mother_child.png", span: "lg:col-span-1" },
              { src: "/facility_ward.png", span: "lg:col-span-1" },
              { src: "/dept_critical_care.png", span: "lg:col-span-2" }
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] aspect-square ${img.span} group border border-sand-dark/10 shadow-sm transition-all`}>
                <Image src={img.src} alt="Facility Preview" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[8s]" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Section: The Features/Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Activity className="text-coral" />, title: "24/7 Emergency", desc: "Always awake, always ready." },
            { icon: <Zap className="text-accent" />, title: "Rapid Response", desc: "Minutes that save lives." },
            { icon: <Shield className="text-forest" />, title: "NABH Standard", desc: "Excellence in every touch." },
            { icon: <Phone className="text-coral" />, title: "Ambulance", desc: "Instant critical transport." }
          ].map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white/60 p-10 rounded-[3rem] border border-sand-dark/10 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-sand-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-black text-forest mb-2">{feature.title}</h4>
              <p className="text-forest/40 text-xs leading-relaxed">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Narrative Section: Why Choose Nilachal - The Flow */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="left" className="relative group">
              <div className="absolute -inset-20 bg-accent/5 rounded-full blur-[150px] animate-pulse" />
              <div 
                className="relative rounded-[5rem] overflow-hidden shadow-2xl skew-y-1 transition-transform duration-1000 group-hover:skew-y-0"
              >
                 <Image 
                    src="/why_choose_nilachal.png" 
                    alt="Nilachal Healing Atmosphere" 
                    width={800} 
                    height={1000} 
                    sizes={IMAGE_SIZES.half}
                    className="object-cover h-[700px] w-full"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                 />
                 <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
              </div>
              
              {/* Overlapping Narrative Box */}
              <div 
                className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block w-72 p-10 bg-white shadow-2xl rounded-[3rem] border border-sand-dark/10 space-y-4"
              >
                 <Sparkles className="text-accent" size={32} />
                 <p className="text-3xl font-serif font-bold text-forest">20+</p>
                 <p className="text-xs text-forest/40 uppercase tracking-widest font-bold">Years of Trust in Kokrajhar</p>
                 <div className="pt-4 border-t border-sand-dark/20 text-xs italic text-forest/60 underline underline-offset-4">
                    Legacy that heals.
                 </div>
              </div>
            </FadeIn>

            <div className="space-y-12">
               <div className="space-y-6">
                  <FadeIn direction="up" className="text-5xl md:text-7xl font-serif font-black text-forest leading-tight">
                    Every Recovery <br />
                    <span className="text-accent italic font-normal">has a story.</span>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.1} className="text-lg text-forest/60 leading-relaxed font-sans">
                    At Nilachal, we don&apos;t just treat symptoms; we nurture the whole person. Our clinical research wing ensures you have access to the latest medical breakthroughs right here in your community.
                  </FadeIn>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Surgeries", value: "15k+", icon: <Stethoscope size={20} /> },
                    { label: "Critical Care", value: "500+", icon: <Activity size={20} /> },
                    { label: "Specialists", value: "150+", icon: <Shield size={20} /> },
                    { label: "Accreditation", value: "NABH", icon: <Clock size={20} /> }
                  ].map((item, i) => (
                    <FadeIn 
                      key={i} 
                      delay={i * 0.1}
                      className="space-y-2 border-l-2 border-coral-light/30 pl-6 group hover:border-accent transition-colors"
                    >
                       <div className="text-coral group-hover:scale-110 transition-transform w-fit">
                          {item.icon}
                       </div>
                       <p className="text-3xl font-serif font-bold text-forest">{item.value}</p>
                       <p className="text-[10px] uppercase tracking-widest text-forest/40 font-bold">{item.label}</p>
                    </FadeIn>
                  ))}
               </div>
            </div>
        </div>
      </section>

      {/* The Final Wrap: Start Your Healing */}
      <section className="px-6 pb-20 lg:pb-40">
        <FadeIn className="max-w-6xl mx-auto rounded-[3.5rem] lg:rounded-[5rem] bg-forest text-white p-12 sm:p-20 lg:p-32 text-center relative overflow-hidden group">
           <div className="absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-accent/20 rounded-full blur-[80px] lg:blur-[120px] group-hover:scale-150 transition-transform duration-[4s]" />
           <div className="absolute top-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-primary/10 rounded-full blur-[70px] lg:blur-[100px]" />
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8 lg:space-y-12">
              <FadeIn direction="up" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight">
                Trust Your Heart <br />to our <span className="italic font-normal serif text-accent">Care.</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} className="text-sand-light/50 text-base lg:text-lg leading-relaxed font-sans">
                 Your journey to wellness starts with a single conversation. Our medical concierge is ready to guide you through your first visit.
              </FadeIn>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 lg:pt-6">
                 <FadeIn className="w-full sm:w-auto">
                    <Link href="/contact" className="w-full bg-white text-forest px-8 lg:px-12 py-5 lg:py-6 rounded-[1.5rem] lg:rounded-[2rem] font-bold text-lg lg:text-xl hover:bg-accent hover:text-white transition-all shadow-2xl inline-block">
                       Request Appointment
                    </Link>
                 </FadeIn>
                 <FadeIn>
                    <Link href="tel:+911122334455" className="group flex items-center space-x-3 text-sand-light font-bold text-base lg:text-lg hover:text-accent transition-colors">
                       <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/5 group-hover:border-accent transition-all">
                          <Phone size={20} className="lg:size-6 animate-pulse" />
                       </div>
                       <span>Instant Support</span>
                    </Link>
                 </FadeIn>
              </div>
           </div>
        </FadeIn>
      </section>
    </div>
  );
}
