"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  logoHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Navbar({
  logoHref = "/",
  ctaHref = "#waitlist",
  ctaLabel = "Request Early Access",
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0818]/85 border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={logoHref}
          className="inline-flex items-center gap-2 text-lg text-white font-extrabold tracking-tight font-[family-name:var(--font-syne)]"
        >
          <Image src="/logo.png" alt="OctaClaw logo" width={44} height={44} className="h-11 w-11 object-contain" />
          OctaClaw
        </Link>

        <Link href={ctaHref} className="btn-primary text-sm">
          {ctaLabel}
        </Link>
      </nav>
    </motion.header>
  );
}
