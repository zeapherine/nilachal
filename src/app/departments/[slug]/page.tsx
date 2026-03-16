import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  ArrowRight,
  Baby, 
  HeartPulse, 
  Activity, 
  Beaker, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Stethoscope,
  Phone
} from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { cn } from "@/lib/utils";

const departmentData: Record<string, any> = {
  "mother-child": {
    title: "Mother & Child Care",
    icon: <Baby className="w-12 h-12 text-pink-600" />,
    image: "/dept_mother_child.png",
    description: "Nurturing environment for newborns, prenatal counseling, and neonatal intensive care with the latest technology.",
    fullContent: "Our Mother & Child Care department is a center of excellence dedicated to the health and well-being of women and children. We provide a comprehensive range of services, from routine prenatal check-ups to complex neonatal intensive care. Our facility is designed to provide a warm, nurturing environment for both mothers and their little ones.",
    features: [
      { title: "Advanced NICU", desc: "Level III Neonatal Intensive Care Unit for specialized newborn care." },
      { title: "Painless Labor", desc: "Modern obstetric practices including epidural analgesia for comfortable delivery." },
      { title: "Pediatric Surgery", desc: "Expert surgical interventions for infants and children by specialized surgeons." },
      { title: "Vaccination Hub", desc: "Comprehensive immunization programs following international standards." }
    ],
    stats: [
      { label: "Successful Deliveries", value: "5000+" },
      { label: "NICU Beds", value: "15" },
      { label: "Specialists", value: "12" }
    ]
  },
  "pediatrics": {
    title: "Pediatric Excellence",
    icon: <Baby className="w-12 h-12 text-green-600" />,
    image: "/dept_pediatrics.png",
    description: "Holistic healthcare for infants, children, and adolescents, focusing on both physical and emotional well-being.",
    fullContent: "The Department of Pediatrics at Nilachal Hospital provides world-class medical care for children from birth through adolescence. Our team of expert pediatricians and specialized nursing staff are dedicated to ensuring the healthy development and recovery of our young patients in a child-friendly atmosphere.",
    features: [
      { title: "Neonatal Rescue", desc: "Critical lifesaving interventions for newborns in distress." },
      { title: "Child Growth Clinic", desc: "Dedicated monitoring of physical and cognitive development milestones." },
      { title: "Pediatric ER", desc: "Round-the-clock emergency services tailored specifically for children." },
      { title: "Adolescent Care", desc: "Specialized guidance and treatment for the unique needs of teenagers." }
    ],
    stats: [
      { label: "Happy Families", value: "10k+" },
      { label: "Pediatricians", value: "8" },
      { label: "Child Beds", value: "25" }
    ]
  },
  "critical-care": {
    title: "Critical Care Unit",
    icon: <HeartPulse className="w-12 h-12 text-red-600" />,
    image: "/dept_critical_care.png",
    description: "Managed by experienced doctors and specialized nursing staff providing round-the-clock monitoring and life support.",
    fullContent: "The Critical Care Unit (CCU) at Nilachal Hospital is equipped with state-of-the-art life support systems and monitored 24/7 by a dedicated team of intensivists. We provide high-intensity care for patients with life-threatening illnesses or injuries, ensuring the best possible chances of recovery through constant vigilance and advanced medical intervention.",
    features: [
      { title: "24/7 Monitoring", desc: "Continuous hemodynamic and respiratory monitoring by expert staff." },
      { title: "Advanced Ventilation", desc: "Latest generation ventilators for complex respiratory support." },
      { title: "Isolation Cubicles", desc: "Specialized units for high-risk and infectious cases to ensure safety." },
      { title: "Rapid Response", desc: "Dedicated emergency team available for immediate critical interventions." }
    ],
    stats: [
      { label: "Critical Beds", value: "20" },
      { label: "Recovery Rate", value: "92%" },
      { label: "Intensivists", value: "8" }
    ]
  },
  "surgery": {
    title: "Advanced Surgery",
    icon: <Activity className="w-12 h-12 text-blue-600" />,
    image: "/dept_surgery.png",
    description: "Operations performed by highly skilled surgeons in state-of-the-art operative theaters equipped with laminar airflow.",
    fullContent: "Our Department of Advanced Surgery offers a wide spectrum of surgical services ranging from routine procedures to complex multi-specialty operations. Our modular operation theaters are designed with laminar airflow systems and the latest surgical technology to ensure maximum safety and precision for every patient.",
    features: [
      { title: "Modular OTs", desc: "Environmentally controlled surgical suites with advanced sterilization." },
      { title: "Laparoscopic Care", desc: "Minimally invasive 'keyhole' surgeries for faster recovery and less pain." },
      { title: "Neuro & Ortho", desc: "Specialized surgical teams for complex brain, spine, and joint procedures." },
      { title: "Post-Op Recovery", desc: "Dedicated recovery units with specialized nursing care for surgical patients." }
    ],
    stats: [
      { label: "Operations Yearly", value: "3500+" },
      { label: "Modular OTs", value: "4" },
      { label: "Expert Surgeons", value: "25" }
    ]
  },
  "diagnostics": {
    title: "Diagnostics & Pathology",
    icon: <Beaker className="w-12 h-12 text-purple-600" />,
    image: "/dept_diagnostics.png",
    description: "Accurate diagnosis using international quality standards for laboratory and imaging results, operating 24x7.",
    fullContent: "Nilachal's Diagnostic Center provides comprehensive imaging and laboratory services that form the backbone of our medical care. We utilize cutting-edge technology to deliver fast, accurate, and reliable results, helping our clinicians make informed decisions for patient treatment plans at any hour of the day.",
    features: [
      { title: "1.5 Tesla MRI", desc: "High-resolution imaging for detailed neurological and musculoskeletal scans." },
      { title: "32 Slice CT", desc: "Fast and precise computed tomography for emergency and routine diagnostics." },
      { title: "Digital X-Ray", desc: "Low-radiation imaging with instant digital processing and reporting." },
      { title: "Automated Lab", desc: "Fully automated pathology laboratory for rapid and accurate blood analysis." }
    ],
    stats: [
      { label: "Daily Tests", value: "1000+" },
      { label: "Report Accuracy", value: "99.9%" },
      { label: "Service Hours", value: "24/7" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(departmentData).map((slug) => ({
    slug,
  }));
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = departmentData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-light">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-serif font-black text-forest">Not Found</h1>
          <p className="text-forest/60 font-sans">The sanctuary you seek does not exist.</p>
          <Link href="/departments" className="text-accent font-bold flex items-center justify-center gap-2 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={20} /> Back to Specialties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-light min-h-screen selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Section: The Origin */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <FadeIn direction="left" className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/50 backdrop-blur-md border border-forest-light/30 text-forest-medium rounded-full font-bold text-[10px] uppercase tracking-widest shadow-sm">
              <Stethoscope size={14} className="text-accent" />
              Specialized Care Sanctuary
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight">
                {data.title.split(' ').map((word: string, i: number) => (
                  <React.Fragment key={i}>
                    {i === 1 ? <span className="text-accent italic font-normal serif">{word} </span> : word + ' '}
                  </React.Fragment>
                ))}
              </h1>
            </div>

            <p className="text-xl text-forest/60 leading-relaxed max-w-xl font-sans text-balance">
              {data.fullContent}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="bg-forest text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-accent transition-all shadow-xl shadow-forest/10 hover:-translate-y-1">
                Book Consultation
              </Link>
              <Link href="/departments" className="flex items-center space-x-3 text-forest/40 font-bold text-sm tracking-widest uppercase hover:text-forest transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                <span>Specialties</span>
              </Link>
            </div>
          </FadeIn>

          <ScaleIn className="lg:col-span-5 relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
            <Image 
              src={data.image} 
              alt={data.title} 
              fill 
              className="object-cover transition-transform duration-[10s] group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            <div className="absolute top-8 left-8">
               <div className="bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl">
                  {React.cloneElement(data.icon, { className: "w-8 h-8 text-accent" })}
               </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Stats Overlay: The Impact */}
      <section className="py-16 bg-forest rounded-[5rem] mx-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-20 translate-x-20" />
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {data.stats.map((stat: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 border-l-2 border-white/10 pl-8 hover:border-accent transition-colors">
                <span className="text-5xl font-serif font-black text-white">{stat.value}</span>
                <span className="text-sand-light/40 font-black uppercase tracking-[0.3em] text-[10px]">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid: The Distinction */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <FadeIn className="text-accent font-black tracking-widest uppercase text-[10px]">The Nilachal Promise</FadeIn>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-forest">
              Why <span className="italic font-normal serif text-accent">Our Care</span> is Different.
            </h2>
            <p className="text-forest/50 max-w-2xl mx-auto text-lg leading-relaxed">
              We combine absolute clinical precision with an environment that nurtures the soul’s capacity for restoration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {data.features.map((feature: any, idx: number) => (
              <FadeIn 
                key={idx}
                delay={idx * 0.1}
                className="p-12 rounded-[4rem] bg-white/60 backdrop-blur-xl border border-sand-dark/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-forest-muted flex items-center justify-center text-forest mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-3xl font-serif font-black text-forest mb-4">{feature.title}</h3>
                <p className="text-forest/50 leading-relaxed font-sans italic">"{feature.desc}"</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Banner: The Final Vow */}
      <section className="px-6 pb-32">
        <FadeIn className="max-w-6xl mx-auto rounded-[5rem] bg-forest p-16 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-accent/10 blur-[150px] rounded-full translate-x-1/2" />
          <div className="relative z-10 text-center space-y-12">
            <div className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-[0.3em] text-[10px]">
              <ShieldCheck size={18} />
              The Standard of Sanctuary
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-[0.9] tracking-tight">
              Advanced Science, <br />
              <span className="text-accent italic font-normal serif">Infinite Compassion.</span>
            </h2>
            <p className="text-sand-light/40 text-xl leading-relaxed max-w-2xl mx-auto font-sans">
              At Nilachal, specialized clinical teams are guardians of your wellness journey, ensuring you receive the highest sanctuary of care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
              <Link href="/contact" className="w-full sm:w-auto bg-white text-forest px-12 py-6 rounded-[2.5rem] font-bold text-xl hover:bg-accent hover:text-white transition-all shadow-2xl">
                Ready for Restoration
              </Link>
              <Link href="tel:+911234567890" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-[2.5rem] font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-4">
                <Phone size={20} className="text-accent animate-pulse" />
                24/7 Life Support
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Narrative Buffer */}
      <div className="h-40 bg-sand-light" />
    </div>
  );
}
