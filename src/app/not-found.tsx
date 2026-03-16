import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Phone } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import { BLUR_DATA_URL } from "@/lib/image-utils";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-sand-light selection:bg-coral-light selection:text-coral-dark">
      {/* Immersive Sanctuary Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/not_found_sanctuary.png"
          alt="Healing Sanctuary"
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        {/* Soft Organic Overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-forest-light/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-coral-light/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-3xl w-full px-6 relative z-10 text-center">
        <div className="organic-card p-12 md:p-20 space-y-8 md:space-y-12 animate-in fade-in zoom-in duration-1000">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-forest-muted text-forest-medium mb-4">
              <Compass size={40} className="animate-spin-slow" style={{ animationDuration: '10s' }} />
            </div>
            
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              A Moment of Repose
            </p>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black text-forest leading-tight">
              404.
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold italic text-forest/80 text-balance">
              It seems you&apos;ve wandered off the path.
            </h2>
          </div>

          <div className="w-24 h-1 bg-coral/20 mx-auto rounded-full" />

          <p className="text-lg md:text-xl text-forest/60 max-w-xl mx-auto leading-relaxed font-sans text-balance">
            Even in a sanctuary, one might lose their way. Let us guide you back to the heart of our healing environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link 
              href="/" 
              className="bg-forest hover:bg-forest-medium text-white px-8 md:px-10 py-4 md:py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center space-x-3 transition-all hover:shadow-[0_20px_50px_rgba(45,62,38,0.2)] hover:-translate-y-1 shadow-lg w-full sm:w-auto"
            >
              <span>Return to Sanctuary</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link 
              href="/contact" 
              className="group flex items-center justify-center space-x-4 text-forest font-bold text-lg hover:text-accent transition-colors py-2"
            >
              <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <Phone size={20} />
              </div>
              <span>Get Immediate Help</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Signature */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none opacity-20">
        <p className="font-serif italic text-forest text-sm">Nilachal Hospital & Research Centre</p>
      </div>
    </div>
  );
}
