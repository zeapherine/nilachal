'use client';

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  ArrowRight,
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Activity,
  Layers,
  Thermometer,
  Cpu,
  Bed,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";

const facilityData = {
  "modular-theatre": {
    title: "Modular Operation Theatre",
    tagline: "Precision & Hygiene Elevated",
    image: "/facility_ot.png",
    description: "An advanced surgical facility designed for peak hygiene and infection control. Equipped with laminar airflow systems and the latest surgical technology.",
    fullContent: "Our state-of-the-art Modular Operation Theatre (OT) is designed to meet international standards for surgical hygiene and safety. The core of our OT design is the Laminar Airflow System, which maintains a continuous flow of ultra-clean air over the surgical site, significantly reducing the risk of post-operative infections.",
    technicalSpecs: [
      { label: "Air Quality", value: "Class 100 Laminar Flow" },
      { label: "Surfaces", value: "Anti-bacterial Wall Panels" },
      { label: "Equipment", value: "Dräger Anesthesia Systems" },
      { label: "Imaging", value: "Integrated 4K Video Routing" }
    ],
    highlights: [
      { title: "Laminar Airflow", desc: "HEPA-filtered air circulation that ensures a sterile environment for complex surgeries.", icon: <Zap /> },
      { title: "LED Surgical Lights", desc: "Shadow-less LED lighting arrays with adjustable intensity and color temperature.", icon: <Layers /> },
      { title: "Integrated OT", desc: "Centralized control for lighting, gases, and patient data visualization.", icon: <Cpu /> },
      { title: "Hermetic Doors", desc: "Touch-less sliding doors to maintain pressure differentials and hygiene.", icon: <Thermometer /> }
    ],
    clinicalBenefits: [
      "Significant reduction in surgical site infections.",
      "Enhanced precision for neuro and cardiac procedures.",
      "Faster turnover between complex operations.",
      "Ergonomic design for minimized surgeon fatigue."
    ]
  },
  "diagnostics-center": {
    title: "Advanced X-Ray & Diagnostics",
    tagline: "Clarity in Every Pixel",
    image: "/facility_xray.png",
    description: "A high-resolution imaging department for accurate and rapid reporting using the latest digital technology.",
    fullContent: "The Diagnostics Department at Nilachal Hospital provides a critical foundation for clinical decision-making. We use advanced digital imaging systems that provide high-resolution results with significantly reduced radiation exposure. Our fully automated pathology lab ensures that blood tests and other diagnostic procedures are processed with extreme accuracy and speed.",
    technicalSpecs: [
      { label: "MRI", value: "1.5 Tesla High Field" },
      { label: "CT Scan", value: "32 Slice Multi-detector" },
      { label: "X-Ray", value: "DR (Digital Radiography)" },
      { label: "Lab", value: "CLIA Fully Automated" }
    ],
    highlights: [
      { title: "Low-Dose Imaging", desc: "Digital systems that provide superior clarity while minimizing patient radiation exposure.", icon: <Activity /> },
      { title: "Instant Reporting", desc: "PACs integrated system for immediate accessibility of images by clinical teams.", icon: <Clock /> },
      { title: "Silent MRI", desc: "Comfort-enhanced MRI technology designed for a less stressful patient experience.", icon: <ShieldCheck /> },
      { title: "Automated Path", desc: "Precision blood analysis with zero human intervention for maximum accuracy.", icon: <Cpu /> }
    ],
    clinicalBenefits: [
      "Early detection of complex medical conditions.",
      "Non-invasive diagnostic procedures for all ages.",
      "24/7 availability for emergency trauma screening.",
      "Digital archiving for easy long-term patient follow-up."
    ]
  },
  "patient-wards": {
    title: "Modern Wards & Patient Care",
    tagline: "Recovery in Comfort",
    image: "/facility_ward.png",
    description: "Comfort-focused patient accommodations designed to foster healing through a peaceful and ergonomic environment.",
    fullContent: "We believe that the healing process is deeply influenced by the patient's environment. Our wards are designed to provide a restful, ergonomic, and highly functional space for recovery. From general clinical wards to premium deluxe suites, every patient space is integrated with a centralized nursing station and smart call systems for immediate assistance.",
    technicalSpecs: [
      { label: "Beds", value: "Hill-Rom Ergonomic Beds" },
      { label: "Nurse Call", value: "IP-based Smart System" },
      { label: "Oxygen", value: "Piped Central Supply" },
      { label: "Monitoring", value: "Wireless Vitals Tracking" }
    ],
    highlights: [
      { title: "Ergonomic Beds", desc: "Multi-positional hospital beds designed to prevent pressure sores and maximize comfort.", icon: <Bed /> },
      { title: "Smart Nurse Call", desc: "One-touch bedside systems that immediately alert specialized nursing stations.", icon: <PhoneCall /> },
      { title: "Ambient Control", desc: "Individual lighting and temperature controls for a customized healing environment.", icon: <Layers /> },
      { title: "Hybrid Wards", desc: "Flexible spaces that can be quickly converted for high-dependency care if needed.", icon: <Activity /> }
    ],
    clinicalBenefits: [
      "Improved patient psychology and faster recovery rates.",
      "24/7 specialized nursing attention for every bed.",
      "Maximized patient privacy and dignity.",
      "Advanced infection control protocols in shared spaces."
    ]
  }
};

export default function FacilityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = facilityData[slug as keyof typeof facilityData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-light">
        <div className="text-center font-serif">
          <h1 className="text-4xl font-bold text-forest mb-4 italic">Facility Not Found</h1>
          <Link href="/facilities" className="text-accent hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Back to Infrastructure
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-light min-h-screen selection:bg-coral-light selection:text-coral-dark">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-16 space-y-6"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start">
               <div className="w-10 h-0.5 bg-accent/30" />
               <p className="text-accent font-black tracking-[0.3em] uppercase text-[10px]">{data.tagline}</p>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight">
              {data.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-accent italic font-normal">{data.title.split(' ').slice(-1)}</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 className="relative h-[450px] md:h-[650px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group"
               >
                 <Image src={data.image} alt={data.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[10s]" priority />
                 <div className="absolute inset-0 bg-gradient-to-tr from-forest/20 to-transparent" />
               </motion.div>
            </div>
            
            <div className="lg:col-span-5">
               <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/40 shadow-xl h-full flex flex-col justify-center space-y-10 group">
                  <div>
                    <h2 className="text-3xl font-serif font-black text-forest mb-6">Facility <span className="italic font-normal text-accent">Overview</span></h2>
                    <p className="text-forest/60 text-lg leading-relaxed italic">
                      &quot;{data.fullContent}&quot;
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-6 h-px bg-forest-light/30" />
                       <h3 className="text-[10px] font-bold text-forest/40 uppercase tracking-[0.2em]">Technical Specifications</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      {data.technicalSpecs.map((spec, i) => (
                        <div key={i} className="space-y-1 group/spec">
                          <p className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover/spec:translate-x-1 transition-transform">{spec.label}</p>
                          <p className="text-forest font-black text-sm">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-forest-light/30 px-6 py-2 rounded-full text-forest-medium text-[10px] font-bold uppercase tracking-widest shadow-sm">
               <Activity size={14} className="text-accent" />
               <span>Elite Capability</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-forest leading-[0.9]">Infrastructure <br /><span className="text-accent italic font-normal">Highlights.</span></h2>
          </div>
          <div className="flex items-center gap-6 bg-white/50 backdrop-blur-md p-6 rounded-[2rem] border border-white/40 shadow-sm">
             <div className="w-14 h-14 rounded-2xl bg-forest text-accent flex items-center justify-center shadow-lg">
               <ShieldCheck size={28} />
             </div>
             <div className="text-sm">
               <p className="font-black text-forest uppercase tracking-widest text-[10px]">Safety Certified</p>
               <p className="text-forest/50 font-medium">ISO & NABH Standards</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white/40 border border-white/40 hover:bg-white hover:border-accent/20 transition-all hover:shadow-2xl group"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-forest-muted text-forest-medium flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-4">{item.title}</h3>
              <p className="text-forest/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clinical Benefits Section */}
      <section className="py-40 px-6 bg-forest text-white relative overflow-hidden mx-6 rounded-[5rem] mb-40 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[130px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 text-accent font-bold uppercase tracking-widest text-[10px]">
              <Cpu size={14} />
              <span>Restorative Outcome</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-black leading-[0.9]">
              Clinical <br />
              <span className="text-accent italic font-normal">Advantages.</span>
            </h2>
            <p className="text-white/60 text-xl leading-relaxed max-w-xl font-sans">
              Our advanced infrastructure isn&apos;t just about technology—it&apos;s about the human impact. We calibrate every system to reduce recovery time and enhance patient dignity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
             {data.clinicalBenefits.map((benefit, idx) => (
               <motion.div 
                 key={idx} 
                 whileHover={{ x: 10 }}
                 className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] group hover:bg-white/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-forest transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-white font-serif font-bold text-xl">{benefit}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="pb-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="w-20 h-20 rounded-[2rem] bg-sand-dark/10 flex items-center justify-center mx-auto mb-8">
             <PhoneCall className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-forest leading-tight">Experience <span className="italic font-normal text-accent underline underline-offset-8 decoration-coral/20">Excellence.</span></h2>
          <p className="text-forest/50 text-xl max-w-2xl mx-auto leading-relaxed">We welcome you to visit our facility in Kokrajhar or call our clinical desk to learn more about our 2026 infrastructure roadmap.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link href="/contact" className="w-full sm:w-auto bg-forest text-white px-16 py-7 rounded-full font-black tracking-widest uppercase text-xs hover:bg-accent hover:text-white transition-all shadow-2xl flex items-center gap-3 justify-center group">
               Book Clinical Tour <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      <div className="h-20" />
    </div>
  );
}
