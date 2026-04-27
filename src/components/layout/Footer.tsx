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
    <footer className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-6">
      <div className="text-[10px] text-white/20 tracking-[0.2em] uppercase font-medium">
        © {new Date().getFullYear()} Octaclaw. Built for the future.
      </div>
    </footer>
  );
}
