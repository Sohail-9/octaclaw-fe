"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
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
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0818]/85 backdrop-blur-xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-lg text-white font-extrabold tracking-tight font-[family-name:var(--font-syne)]"
        >
          <Image src="/logo.png" alt="OctaClaw logo" width={26} height={26} className="h-6 w-6 rounded-sm object-contain" />
          OctaClaw
        </a>

        <a href="#waitlist" className="btn-primary text-sm">
          Request Early Access
        </a>
      </nav>
    </motion.header>
  );
}
