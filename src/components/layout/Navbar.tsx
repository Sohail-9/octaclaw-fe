"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Linkedin } from "lucide-react";
import GooeyNav from "@/components/ui/GooeyNav";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
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
    { label: "Platform", href: "#platform" },
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
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0)",
          boxShadow: scrolled
            ? "inset 0 1px 0px rgba(255,255,255,0.75), 0 0 9px rgba(0,0,0,0.05), 0 3px 8px rgba(0,0,0,0.08)"
            : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative flex h-14 w-full max-w-5xl items-center justify-between overflow-hidden rounded-full border px-4 md:h-16 md:px-6"
      >
        {/* Subtle highlight when scrolled */}
        {scrolled && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-70" />
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

          <NoiseBackground
            containerClassName="hidden md:block w-fit rounded-full p-1"
            gradientColors={["rgb(124, 58, 237)", "rgb(5, 150, 105)", "rgb(250, 204, 21)"]}
            noiseIntensity={0.1}
            group={false}
          >
            <Link href="#waitlist">
              <motion.span
                className="group flex items-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-5 py-2 text-zinc-950 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.8)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.15)] font-semibold text-sm transition-all duration-100 active:scale-95"
              >
                Early Access
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </motion.span>
            </Link>
          </NoiseBackground>

          {/* Mobile CTA */}
          <Link
            href="#waitlist"
            className="md:hidden flex items-center h-9 px-4 rounded-full bg-zinc-950 text-white text-xs font-bold"
          >
            Early Access
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
