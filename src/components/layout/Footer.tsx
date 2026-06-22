import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white border-t border-zinc-100">

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.20), rgba(52,211,153,0.15), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-0">

        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between gap-y-14 pb-14 border-b border-zinc-100">

          {/* Brand column */}
          <div className="flex flex-col md:max-w-[300px]">
            <Link href="/" className="group flex items-center gap-3 mb-5 w-fit">
              <Logo className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12" />
              <span className="font-heading font-bold text-zinc-800 text-sm tracking-tight group-hover:text-zinc-950 transition-colors">
                OctaClaw
              </span>
            </Link>

            <p className="text-[14px] text-zinc-400 leading-relaxed mb-7 max-w-[240px]">
              Ship AI agents without the chaos — parallel execution, self-healing, full observability.
            </p>

            <a
              href="https://www.linkedin.com/company/octaclaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-xl text-[12px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200 border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-white"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-14 md:gap-x-20 gap-y-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-heading font-bold text-zinc-400 text-[10px] tracking-[0.18em] uppercase">Product</h4>
              <div className="flex flex-col gap-3">
                <Link href="#features"     className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200">Capabilities</Link>
                <Link href="#how-it-works" className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200">How It Works</Link>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  SDK
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold"
                    style={{ background: "rgba(124,58,237,0.08)", color: "rgba(124,58,237,0.60)" }}>soon</span>
                </span>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  Docs
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold"
                    style={{ background: "rgba(124,58,237,0.08)", color: "rgba(124,58,237,0.60)" }}>soon</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-heading font-bold text-zinc-400 text-[10px] tracking-[0.18em] uppercase">Company</h4>
              <div className="flex flex-col gap-3">
                <Link href="#waitlist"                className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200">Early Access</Link>
                <Link href="mailto:contact@octaclaw.com" className="text-zinc-500 text-sm hover:text-zinc-950 transition-colors duration-200">Contact</Link>
                <span className="text-zinc-300 text-sm cursor-default flex items-center gap-1.5">
                  Blog
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold"
                    style={{ background: "rgba(52,211,153,0.10)", color: "rgba(5,150,105,0.65)" }}>soon</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="-mx-6 md:-mx-10 overflow-hidden border-t border-zinc-100">
          <div className="flex h-[4.5rem] md:h-[9rem] items-center justify-center px-4 md:px-0">
            <p className="w-full truncate text-center font-heading font-black tracking-tight select-none leading-none text-zinc-100"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
              OCTACLAW
            </p>
          </div>
          <div className="flex items-center justify-between px-6 md:px-10 py-4 border-t border-zinc-100">
            <p className="text-[11px] text-zinc-400">© 2025 OctaClaw. All rights reserved.</p>
            <p className="text-[11px] text-zinc-400">Built for engineers who ship.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
