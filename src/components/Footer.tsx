import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-sand-light pt-24 pb-12 relative overflow-hidden">
      {/* Organic background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Hospital Info */}
          <div className="space-y-6 lg:space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white ring-1 ring-white/20">
                <Heart fill="currentColor" size={20} className="lg:size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-serif font-bold text-white leading-none">Nilachal</span>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/40 font-sans mt-1">Research Centre</span>
              </div>
            </Link>
            <p className="text-sand-light/60 font-sans leading-relaxed text-sm max-w-sm">
              Nurturing life through excellence in healthcare and clinical research. We provide compassionate medical solutions for a healthier future in Kokrajhar.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-primary/20 flex items-center justify-center rounded-xl border border-white/10 transition-all hover:-translate-y-1">
                  <Icon size={18} className="text-white/70" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Support */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 lg:mb-8">Patient Support</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
              {[
                { label: "Account", href: "/contact" },
                { label: "Doctors", href: "/doctors" },
                { label: "Departments", href: "/departments" },
                { label: "Facilities", href: "/facilities" },
                { label: "Privacy", href: "#" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sand-light/50 hover:text-accent font-sans text-sm flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 lg:mb-8">Get in Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-sans mb-1">Emergency 24/7</p>
                  <p className="text-lg font-bold text-white">+91 1122 334 455</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-sans mb-1">Email Inquiry</p>
                  <p className="text-sand-light/80 text-sm truncate max-w-[200px] lg:max-w-none">support@nilachalhospital.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center text-orange-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-sand-light/80 text-sm leading-relaxed">
                  JD Road, Kokrajhar, <br />Assam - 783370
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Simulation */}
          <div className="mt-8 lg:mt-0">
             <div className="w-full h-40 lg:h-48 rounded-[2.5rem] bg-white/5 border border-white/10 p-2 relative group overflow-hidden">
                <div className="absolute inset-0 bg-forest/40 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Link href="/contact" className="bg-white text-forest px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Expand Map</Link>
                </div>
                <div className="w-full h-full bg-forest-medium/20 rounded-[2rem] flex items-center justify-center">
                   <MapPin className="text-accent animate-bounce" size={28} />
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sand-light/30 text-[10px] uppercase tracking-widest font-sans text-center md:text-left">
            © 2026 NILACHAL HOSPITAL & RESEARCH CENTRE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-sand-light/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-sans">Sitemap</Link>
            <Link href="#" className="text-sand-light/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-sans">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
