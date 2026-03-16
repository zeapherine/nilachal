"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

const EmergencyHeader = () => {
  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-[100] animate-fadeInDown">
      <Link
        href="tel:+911234567890"
        className="flex items-center justify-center space-x-2 bg-accent text-white py-2.5 px-4 shadow-lg active:scale-95 transition-transform"
      >
        <Phone size={16} className="animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Emergency: +91 1234567890
        </span>
      </Link>
    </div>
  );
};

export default EmergencyHeader;
