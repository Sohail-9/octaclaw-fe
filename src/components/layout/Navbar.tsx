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
  ctaLabel = "Request Early Access",
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
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        <Link
          href={logoHref}
          className="min-w-0 inline-flex items-center gap-2 text-base sm:text-lg text-white font-extrabold tracking-tight font-[family-name:var(--font-syne)]"
        >
          <Image
            src="/logo-v2.png"
            alt="OctaClaw logo"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
          />
          <span className="hidden sm:inline truncate">OctaClaw</span>
        </Link>

        <Link
          href={ctaHref}
          className="btn-primary inline-flex h-10 sm:h-11 items-center justify-center whitespace-nowrap rounded-xl px-3 sm:px-4 text-sm"
        >
          <span className="sm:hidden">{ctaLabelMobile ?? ctaLabel}</span>
          <span className="hidden sm:inline">{ctaLabel}</span>
        </Link>
      </nav>
    </motion.header>
  );
}
