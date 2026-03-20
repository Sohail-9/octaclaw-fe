import { Github, Linkedin, Twitter } from "lucide-react";

type FooterProps = {
  minimal?: boolean;
};

export default function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer className="relative border-t border-white/10 bg-[#252527] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#b9b2cf]">
          © {new Date().getFullYear()} OctaClaw
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative border-t border-white/10 py-8 bg-[#252527]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <span className="text-xl text-white font-extrabold tracking-tight font-[family-name:var(--font-syne)]">
          OctaClaw
        </span>

        <a href="mailto:contact@octaclaw.com" className="text-sm text-[#d8d4e5] hover:text-white transition-colors">
          contact@octaclaw.com
        </a>

        <div className="flex items-center gap-4 text-[#b1a8c9]">
          <a href="https://x.com/octaclaww" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-white transition-colors">
            <Twitter size={17} />
          </a>
          <a href="https://github.com/0xLabs-Org" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={17} />
          </a>
          <a href="https://linkedin.com/company/octaclaw" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={17} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-4 text-xs text-[#8c84a8]">
        © {new Date().getFullYear()} OctaClaw. All rights reserved.
      </div>
    </footer>
  );
}
