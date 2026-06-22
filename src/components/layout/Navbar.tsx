"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Linkedin } from "lucide-react";
import GooeyNav from "@/components/ui/GooeyNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [shimmer, setShimmer] = useState(false);

  const triggerShimmer = () => {
    setShimmer(true);
    setTimeout(() => setShimmer(false), 600);
  };
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrolled(latest > 20);
  });

  const navItems = [
    { label: "Capabilities", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -120, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed left-0 right-0 top-3 z-50 flex w-full justify-center px-3 md:top-6 md:px-4"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
          boxShadow: scrolled
            ? "inset 0 1px 0px rgba(255,255,255,0.9), 0 0 9px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.07)"
            : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative flex h-14 w-full max-w-5xl items-center justify-between overflow-hidden rounded-full border px-4 md:h-16 md:px-6"
      >
        {scrolled && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-70" />
        )}

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group flex-shrink-0">
          <Logo className="w-7 h-7 transition-transform duration-500 group-hover:rotate-6" />
          <span className="uppercase tracking-[0.25em] font-bold text-[10px] text-zinc-700 group-hover:text-zinc-950 transition-colors duration-300 font-heading">
            OctaClaw
          </span>
        </Link>

        {/* Nav links */}
        <div className="relative z-10 hidden md:flex items-center">
          <GooeyNav items={navItems} />
        </div>

        {/* Right */}
        <div className="relative z-10 flex items-center gap-4 flex-shrink-0">
          <a
            href="https://www.linkedin.com/company/octaclaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center text-zinc-500 hover:text-zinc-800 transition-colors duration-300"
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>

          {/* Desktop CTA */}
          <Link href="#waitlist" className="hidden md:block">
            <motion.span
              onHoverStart={triggerShimmer}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden flex items-center gap-2 cursor-pointer rounded-full px-5 py-2 text-white text-[13px] font-bold tracking-tight"
              style={{
                background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
                boxShadow: "0 6px 18px rgba(124,58,237,0.22), 0 2px 6px rgba(124,58,237,0.12), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -2px 5px rgba(0,0,0,0.20)",
              }}
            >
              {/* Shimmer sweep */}
              <motion.span
                key={shimmer ? "on" : "off"}
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)" }}
                initial={{ x: "-110%" }}
                animate={shimmer ? { x: "110%" } : { x: "-110%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              Early Access
              <motion.svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="w-3.5 h-3.5 relative"
                animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </motion.svg>
            </motion.span>
          </Link>

          {/* Mobile CTA */}
          <Link href="#waitlist" className="md:hidden">
            <motion.span
              whileTap={{ scale: 0.95 }}
              className="flex items-center h-9 px-4 rounded-full text-white text-xs font-bold"
              style={{
                background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
                boxShadow: "0 6px 16px rgba(124,58,237,0.40), inset 0 1.5px 4px rgba(255,255,255,0.40)",
              }}
            >
              Early Access
            </motion.span>
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
