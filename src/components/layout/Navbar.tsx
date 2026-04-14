"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Load theme
    try {
      const stored = localStorage.getItem("theme") as "dark" | "light" || "dark";
      setTheme(stored);
    } catch {}

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cycleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 px-4 pointer-events-none`}
    >
      <nav
        className={`max-w-7xl mx-auto h-16 flex items-center justify-between px-6 rounded-2xl pointer-events-auto transition-all duration-500 border ${scrolled
          ? "bg-bg-surface/80 backdrop-blur-xl border-border-subtle shadow-2xl py-2"
          : "bg-transparent border-transparent py-4"
          }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image src="/logo.png" alt="octaClaw Logo" fill className="object-contain" />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81e6d9] to-[#63b3ed]">Octaclaw</span>
        </Link>

        {/* Action Right */}
        <div className="flex items-center gap-4">
           {/* Theme Toggler */}
           <button
             onClick={cycleTheme}
             className="w-10 h-10 rounded-full flex items-center justify-center bg-bg-card border border-border-subtle text-text-muted hover:text-text-main transition-colors"
             aria-label="Toggle Theme"
           >
             {theme === "dark" && <Sun size={18} />}
             {theme === "light" && <Moon size={18} />}
           </button>
        </div>
      </nav>
    </motion.header>
  );
}
