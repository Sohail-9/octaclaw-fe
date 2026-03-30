"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  logoHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaLabelMobile?: string;
};

export default function Navbar({
  logoHref = "/",
  ctaHref = "#waitlist",
  ctaLabel = "Join Waitlist",
  ctaLabelMobile,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 px-4 pointer-events-none`}
    >
      <nav
        className={`max-w-5xl mx-auto h-16 flex items-center justify-between gap-3 px-6 rounded-2xl pointer-events-auto transition-all duration-500 border border-white/0 ${scrolled
          ? "glass-card border-white/10 shadow-2xl py-2"
          : "bg-transparent border-transparent py-4"
          }`}
      >
        <Link
          href={logoHref}
          className="min-w-0 inline-flex items-center gap-3 text-base sm:text-lg text-white font-black tracking-tight font-heading"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-125 transition-opacity duration-500" style={{ opacity: scrolled ? 1 : 0 }} />
            <Image
              src="/logo-v2.png"
              alt="OctaClaw logo"
              fill
              className="object-contain relative z-10"
            />
          </div>
          <span className="hidden sm:inline truncate uppercase tracking-widest text-sm opacity-90">OctaClaw</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          {/* Internal links removed until features are live */}
        </div>

        <Link
          href={ctaHref}
          className="relative group btn-primary inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl px-5 text-sm overflow-hidden"
        >
          <span className="relative z-10 sm:hidden">{ctaLabelMobile ?? ctaLabel}</span>
          <span className="relative z-10 hidden sm:inline">{ctaLabel}</span>

          {/* Subtle Pulse Effect */}
          <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="absolute -inset-1 bg-primary/30 blur-lg rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </nav>
    </motion.header>
  );
}
