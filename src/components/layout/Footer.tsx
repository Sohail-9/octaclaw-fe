"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white border-t border-zinc-100">

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.38), rgba(52,211,153,0.28), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-0">

        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between gap-y-14 pb-14 border-b border-zinc-100/60">

          {/* Brand column */}
          <div className="flex flex-col md:max-w-[300px]">
            <Link href="/" className="group flex items-center gap-3 mb-5 w-fit">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              >
                <Logo className="w-7 h-7" />
              </motion.div>
              <span className="font-heading font-bold text-zinc-800 text-sm tracking-tight group-hover:text-zinc-950 transition-colors">
                OctaClaw
              </span>
            </Link>

            <p className="text-[14px] text-zinc-400 leading-relaxed mb-7 max-w-[240px]">
              Ship AI agents without the chaos — parallel execution, self-healing, full observability.
            </p>

            {/* LinkedIn with slide-up reveal */}
            <a
              href="https://www.linkedin.com/company/octaclaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-xl text-[12px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors duration-200 glass-pill"
            >
              <span className="relative w-3.5 h-3.5 overflow-hidden flex-shrink-0">
                <svg
                  className="absolute w-3.5 h-3.5 translate-y-0 group-hover:-translate-y-full transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.6,0.01,0.05,0.95)" }}
                  fill="currentColor" viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <svg
                  className="absolute w-3.5 h-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.6,0.01,0.05,0.95)" }}
                  fill="currentColor" viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              Follow on LinkedIn
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-14 md:gap-x-20 gap-y-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-heading font-bold text-zinc-400 text-[10px] tracking-[0.18em] uppercase">Product</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo("features")}     className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200 text-left">Capabilities</button>
                <button onClick={() => scrollTo("how-it-works")} className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200 text-left">How It Works</button>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  SDK
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold glass-pill-violet" style={{ color: "rgba(124,58,237,0.72)" }}>soon</span>
                </span>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  Docs
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold glass-pill-violet" style={{ color: "rgba(124,58,237,0.72)" }}>soon</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-heading font-bold text-zinc-400 text-[10px] tracking-[0.18em] uppercase">Company</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo("cta")}          className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200 text-left">Early Access</button>
                <Link href="mailto:contact@octaclaw.com" className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200">Contact</Link>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  Blog
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold glass-pill-emerald" style={{ color: "rgba(5,150,105,0.78)" }}>soon</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="-mx-6 md:-mx-10 overflow-hidden border-t border-zinc-100">
          <div className="px-4 md:px-10">
            <TextHoverEffect text="OCTACLAW" />
          </div>
          <div className="flex items-center justify-between px-6 md:px-10 py-4 border-t border-zinc-100">
            <p className="text-[11px] text-zinc-400">© 2026 OctaClaw. All rights reserved.</p>
            <p className="text-[11px] text-zinc-400">Built for engineers who ship.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
