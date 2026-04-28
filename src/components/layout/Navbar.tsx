"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Moon, Sun, Github } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    try {
      const stored = (localStorage.getItem("theme") as "dark" | "light") || "dark";
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none"
    >
      <nav
        className={`max-w-6xl mx-auto h-14 flex items-center justify-between px-5 rounded-xl pointer-events-auto transition-all duration-500 ${
          scrolled
            ? "bg-bg-surface/90 backdrop-blur-xl border border-border-subtle shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-text-main"
        >
          <div className="relative w-7 h-7 flex-shrink-0">
            <Logo className="w-7 h-7" />
          </div>
          <span>OctaClaw</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-text-muted">
          <Link href="#features" className="hover:text-text-main transition-colors duration-200">
            Features
          </Link>
          <Link href="#howitworks" className="hover:text-text-main transition-colors duration-200">
            How it works
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/0xLabs-Org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-main hover:bg-bg-card transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <button
            onClick={cycleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-main hover:bg-bg-card transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            href="#cta"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-lg bg-text-main text-bg-base text-sm font-semibold tracking-tight hover:opacity-85 transition-opacity duration-200"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
