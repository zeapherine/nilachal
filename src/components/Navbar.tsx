"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Heart, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Facilities", href: "/facilities" },
    { name: "Doctors", href: "/doctors" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 md:top-0 w-full z-50 px-4 pt-14 md:pt-6 transition-all duration-500">
      <nav
        className={cn(
          "max-w-7xl mx-auto rounded-[2.5rem] transition-all duration-500 border border-white/20",
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-forest-light/10 shadow-2xl py-3 px-8"
            : "bg-forest-muted/30 backdrop-blur-md py-5 px-10"
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group text-decoration-none">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Heart fill="currentColor" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-forest group-hover:text-primary transition-colors leading-none">
                Nilachal
              </span>
              <span className="block text-[8px] uppercase tracking-[0.2em] text-forest/60 font-sans mt-0.5">
                Research Centre
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-forest/80 hover:text-primary font-medium text-sm transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            <Link
              href="tel:+911234567890"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-forest transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              <Phone size={14} className="animate-pulse" />
              <span>Emergency</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-forest p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden fixed inset-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center p-8 space-y-6 transition-transform duration-200 ease-in-out",
            isOpen 
              ? "translate-x-0" 
              : "translate-x-full"
          )}
        >
          <button
            className="absolute top-20 right-8 text-forest p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-3xl font-serif text-forest hover:text-primary transition-colors duration-200",
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div 
              className={cn(
                "w-full pt-8 transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            >
              <Link
                href="tel:+911234567890"
                className="flex items-center justify-center space-x-3 w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg shadow-2xl shadow-primary/20"
              >
                <Phone size={20} className="animate-pulse" />
                <span>Call for Help Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
