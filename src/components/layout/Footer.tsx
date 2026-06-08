import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-950/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row justify-between gap-y-12 mb-20">

          {/* Left: Brand */}
          <div className="flex flex-col md:max-w-[320px]">
            <Link href="/" className="group flex items-center gap-2 mb-6">
              <Logo className="w-7 h-7 transition-transform duration-500 [animation-play-state:paused] group-hover:rotate-12" />
              <span className="font-heading font-bold text-zinc-950 text-sm tracking-tight">OctaClaw</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium opacity-80">
              The production runtime for multi-agent AI systems.
            </p>
          </div>

          {/* Right: Columns */}
          <div className="flex flex-wrap gap-x-16 md:gap-x-24 gap-y-10">

            <div className="flex flex-col gap-5 min-w-[120px]">
              <h4 className="font-heading font-bold text-zinc-950 text-[11px] tracking-[0.1em] uppercase opacity-40">Product</h4>
              <div className="flex flex-col gap-3">
                <Link href="#features" className="text-zinc-600 text-[14px] font-medium hover:text-zinc-950 transition-colors">Capabilities</Link>
                <Link href="#platform" className="text-zinc-600 text-[14px] font-medium hover:text-zinc-950 transition-colors">Platform</Link>
                <Link href="#how-it-works" className="text-zinc-600 text-[14px] font-medium hover:text-zinc-950 transition-colors">How It Works</Link>
                <span className="text-zinc-400 text-[14px] font-medium opacity-60">Docs (soon)</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 min-w-[140px]">
              <h4 className="font-heading font-bold text-zinc-950 text-[11px] tracking-[0.1em] uppercase opacity-40">Company</h4>
              <div className="flex flex-col gap-3">
                <Link href="#waitlist" className="text-zinc-600 text-[14px] font-medium hover:text-zinc-950 transition-colors">Early Access</Link>
                <Link href="mailto:contact@octaclaw.com" className="text-zinc-600 text-[14px] font-medium hover:text-zinc-950 transition-colors">Contact</Link>
                <span className="text-zinc-400 text-[14px] font-medium opacity-60">Changelog (soon)</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 min-w-[100px]">
              <h4 className="font-heading font-bold text-zinc-950 text-[11px] tracking-[0.1em] uppercase opacity-40">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/company/octaclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-zinc-950/5 flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:bg-zinc-950/10 transition-all overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] group-hover:-translate-y-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] translate-y-full group-hover:translate-y-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom: large brand name */}
        <div className="-mx-6 overflow-hidden border-t border-zinc-950/5 md:-mx-10">
          <div className="flex h-[5rem] items-center justify-center px-4 md:h-[10rem] md:px-0">
            <p className="w-full truncate text-center text-5xl font-bold tracking-tight text-zinc-950/[0.07] md:text-[10rem] md:leading-none select-none font-heading">
              OCTACLAW
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
