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
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center"
    >
      <nav
        className={`w-full max-w-5xl h-14 flex items-center justify-between px-6 rounded-2xl transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-xl border border-zinc-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            : "bg-zinc-50/40 backdrop-blur-md border border-zinc-200/50"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-7 h-7 transition-transform duration-500 group-hover:rotate-6" />
          <span className="uppercase tracking-[0.25em] font-bold text-[10px] text-zinc-600 group-hover:text-zinc-950 transition-colors duration-300 font-heading">
            OctaClaw
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center">
          <GooeyNav items={navItems} />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/company/octaclaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center text-zinc-400 hover:text-zinc-700 transition-colors duration-300"
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>

          <Link
            href="#waitlist"
            className="inline-flex items-center h-9 px-5 rounded-full bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-zinc-900 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] active:scale-95"
          >
            Early Access
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
