"use client";

import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, HeartPulse, MessageSquare, Leaf } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";

export default function ContactClient() {
  const contactInfo = [
    {
      title: "The Sanctuary",
      details: ["JD Road", "Kokrajhar, Assam 783370"],
      icon: <MapPin className="w-8 h-8 text-forest-medium" />,
      bg: "bg-forest-muted"
    },
    {
      title: "Voice of Care",
      details: ["+91 361 222 6658", "+91 98640 12345"],
      icon: <Phone className="w-8 h-8 text-coral" />,
      bg: "bg-coral-light"
    },
    {
      title: "Digital Reach",
      details: ["care@nilachalhospital.com", "hope@nilachalhospital.com"],
      icon: <Mail className="w-8 h-8 text-forest-medium" />,
      bg: "bg-forest-muted"
    },
    {
      title: "Rhythm of Service",
      details: ["Emergency: Every Breath", "OPD: 08:00 AM - 08:00 PM"],
      icon: <Clock className="w-8 h-8 text-coral" />,
      bg: "bg-coral-light"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-sand-light selection:bg-coral-light selection:text-coral-dark pt-20">
      {/* Narrative Header: The Open Gate */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-forest-light/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6 sm:space-y-8">
          <FadeIn className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
             <MessageSquare size={14} />
             <span>A Bridge to Healing</span>
          </FadeIn>
          <FadeIn direction="up" className="text-4xl sm:text-6xl md:text-8xl font-serif font-black text-forest leading-[0.9] tracking-tight text-balance">
            We are here, <br />
            <span className="text-accent italic font-normal serif">waiting for you.</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="text-lg sm:text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed font-sans">
            Whether you seek urgent care or a gentle check-up, our sanctuary gates are always open. Your journey to wellness is our shared priority.
          </FadeIn>
        </div>
      </section>

      {/* Main Narrative Grid */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24">
        
        {/* Left Aspect: The Info Ecosystem */}
        <div className="lg:col-span-5 space-y-8 sm:space-y-12 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {contactInfo.map((info, idx) => (
              <FadeIn
                key={idx} 
                delay={idx * 0.1}
                className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-sand-dark/10 shadow-sm hover:shadow-2xl hover:translate-y-[-5px] transition-all group"
              >
                <div className={`${info.bg} w-12 h-12 sm:w-16 sm:h-16 rounded-[1.2rem] sm:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-accent group-hover:text-white transition-all`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-forest mb-2 sm:mb-3">{info.title}</h3>
                {info.details.map((line, lIdx) => (
                  <p key={lIdx} className="text-forest/50 text-[11px] sm:text-xs font-bold leading-relaxed">{line}</p>
                ))}
              </FadeIn>
            ))}
          </div>

          {/* Emergency Pulse Section */}
          <FadeIn className="bg-forest p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[4rem] text-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative overflow-hidden group">
             <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-[4s]" />
             <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-[1.8rem] sm:rounded-[2.5rem] flex items-center justify-center shadow-2xl shrink-0">
                <HeartPulse className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-pulse" />
             </div>
             <div className="text-center sm:text-left space-y-2 relative z-10">
                <p className="text-accent font-black tracking-widest uppercase text-[9px] sm:text-[10px]">Emergency Heartbeat</p>
                <p className="text-3xl sm:text-4xl font-serif font-bold">0361-222-7777</p>
                <p className="text-sand-light/40 text-[11px] sm:text-xs italic">Instant response for every emergency.</p>
             </div>
          </FadeIn>

          {/* Map Landscape */}
          <FadeIn className="relative group">
            <div className="absolute -inset-4 bg-forest/5 rounded-[2.5rem] sm:rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-64 sm:h-96 w-full bg-white rounded-[2.5rem] sm:rounded-[4rem] border-4 sm:border-8 border-white overflow-hidden relative shadow-2xl">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114302.23102782413!2d90.1435089!3d26.4575108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37588b00695a4341%3A0xd8aac03b108e773!2sNilachal%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1773678731101!5m2!1sen!2sin" 
                 className="w-full h-full grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                 loading="lazy"
               />
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex gap-3">
                  <div className="bg-forest/80 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Find our Sanctuary
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/qtVcg1rgPUxh91DH9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-white hover:text-accent transition-all px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 group/btn"
                  >
                    <span>Open in Maps</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Aspect: The Narrative Form */}
        <FadeIn className="lg:col-span-7 bg-white rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-12 md:p-20 shadow-2xl border border-sand-dark/10 relative overflow-hidden order-1 lg:order-2">
          <div className="absolute top-0 right-0 w-80 h-80 bg-coral-light/20 rounded-full blur-[100px] -translate-y-20 translate-x-20" />
          
          <div className="relative z-10 space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <Leaf className="text-accent mb-4" size={28} />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-forest leading-tight">
                Share Your <br /><span className="text-accent italic font-normal">Story with Us.</span>
              </h2>
              <p className="text-forest/50 text-base sm:text-lg font-sans">
                Your message is the first step in our collaborative healing process.
              </p>
            </div>

            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-forest/40 uppercase tracking-[0.2em] ml-2">Guardian Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-sand-light/30 border border-sand-dark/10 rounded-[1.2rem] sm:rounded-[1.5rem] px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-accent focus:bg-white transition-all font-sans text-forest text-sm sm:text-base" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-forest/40 uppercase tracking-[0.2em] ml-2">Contact Soul</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-sand-light/30 border border-sand-dark/10 rounded-[1.2rem] sm:rounded-[1.5rem] px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-accent focus:bg-white transition-all font-sans text-forest text-sm sm:text-base" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-forest/40 uppercase tracking-[0.2em] ml-2">Handheld Contact</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-sand-light/30 border border-sand-dark/10 rounded-[1.2rem] sm:rounded-[1.5rem] px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-accent focus:bg-white transition-all font-sans text-forest text-sm sm:text-base" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-forest/40 uppercase tracking-[0.2em] ml-2">Nature of Inquiry</label>
                  <select className="w-full bg-sand-light/30 border border-sand-dark/10 rounded-[1.2rem] sm:rounded-[1.5rem] px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-accent focus:bg-white transition-all appearance-none font-bold text-forest/60 text-sm sm:text-base">
                    <option>General Support</option>
                    <option>Appointment Session</option>
                    <option>Healing Feedback</option>
                    <option>Research Collaboration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <label className="text-[9px] sm:text-[10px] font-black text-forest/40 uppercase tracking-[0.2em] ml-2">What&apos;s on your mind?</label>
                <textarea rows={4} placeholder="How can we nurture your wellness journey today?" className="w-full bg-sand-light/30 border border-sand-dark/10 rounded-[1.5rem] sm:rounded-[2rem] px-6 sm:px-8 py-5 sm:py-6 outline-none focus:border-accent focus:bg-white transition-all resize-none font-sans text-forest text-sm sm:text-base"></textarea>
              </div>

              <button 
                className="w-full bg-forest text-white py-5 sm:py-6 rounded-[1.8rem] sm:rounded-[2.5rem] font-bold text-lg sm:text-xl hover:bg-accent transition-all shadow-[0_20px_50px_rgba(45,62,38,0.15)] flex items-center justify-center gap-3 sm:gap-4 group/btn hover:scale-[1.02] active:scale-[0.98]" 
                type="button"
              >
                <span>Engage with Nilachal</span>
                <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
              </button>
            </form>

            <div className="pt-8 sm:pt-12 border-t border-sand-dark/10 flex items-center gap-3 sm:gap-4 text-forest/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
               <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent/50" />
               Safe & Secure Transformation
            </div>
          </div>
        </FadeIn>

      </section>

      {/* Narrative Buffer */}
      <div className="h-24 sm:h-40 w-full bg-forest rounded-t-[3rem] sm:rounded-t-[5rem] mt-12 sm:mt-20" />
    </div>
  );
}
