import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-violet-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border border-white/[0.06] bg-white/[0.02] rounded-3xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-start justify-between gap-14">
            {/* Brand */}
            <div className="flex flex-col gap-6 max-w-xs">
              <Link href="/" className="flex items-center gap-3 group">
                <Logo className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500 invert" />
                <span className="text-[13px] uppercase tracking-[0.4em] font-bold text-white/60 group-hover:text-white transition-colors duration-300 font-heading">
                  OctaClaw
                </span>
              </Link>
              <p className="text-[13px] text-white/35 leading-relaxed font-light">
                The multi-agent AI orchestration platform. Deploy intelligent swarms for any complex workflow.
              </p>
              <a
                href="https://linkedin.com/company/octaclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] text-white/30 hover:text-white/70 transition-colors duration-300 font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Links */}
            <div className="flex items-start gap-16 sm:gap-24">
              <div className="flex flex-col gap-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">Platform</span>
                <Link href="#features" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-300">
                  Intelligence
                </Link>
                <Link href="#features" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-300">
                  How It Works
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">Company</span>
                <Link href="#waitlist" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-300">
                  Early Access
                </Link>
                <Link href="#" className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-300">
                  Documentation
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-white/20 font-mono tracking-wider">
              © {new Date().getFullYear()} OctaClaw. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-white/30 font-mono font-bold tracking-[0.1em] uppercase">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
