import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

type FooterProps = {
  minimal?: boolean;
};

export default function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer className="relative py-12 border-t border-white/5 surface-base">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-text-muted font-medium">
          © {new Date().getFullYear()} OctaClaw
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative py-20 border-t border-border-subtle bg-bg-surface text-text-main">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <Logo />
            <span className="text-2xl text-text-main font-bold tracking-tight font-heading">
              OctaClaw
            </span>
          </div>
          <p className="text-sm text-text-muted max-w-xs mt-2">
            The spatial intelligence layer for high-performance AI agent teams.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <a href="mailto:contact@octaclaw.com" className="text-base font-medium text-text-main/80 hover:text-[#81e6d9] transition-colors">
            contact@octaclaw.com
          </a>

          <div className="flex items-center gap-6 text-text-muted">
            <a href="http://x.com/octaclaw" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-[#81e6d9] transition-all transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/0xLabs-Org/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#81e6d9] transition-all transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/company/octaclaw" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#81e6d9] transition-all transform hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border-subtle text-xs text-text-muted/50 tracking-widest uppercase flex justify-between">
        <span>© {new Date().getFullYear()} OctaClaw.</span>
        <span>Built for the future of work.</span>
      </div>
    </footer>
  );
}
