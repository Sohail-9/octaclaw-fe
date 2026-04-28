import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-6 h-6" />
              <span className="text-sm font-bold tracking-tight text-text-main">OctaClaw</span>
            </Link>
            <p className="text-xs text-text-muted max-w-[220px] leading-relaxed">
              The multi-agent orchestration runtime for builders.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-text-muted">
            <Link
              href="#waitlist"
              className="hover:text-text-main transition-colors duration-200"
            >
              Join Waitlist
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex items-center justify-between">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} OctaClaw. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">Built for the next generation of AI teams.</p>
        </div>
      </div>
    </footer>
  );
}
