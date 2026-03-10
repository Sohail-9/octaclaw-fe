import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0F] border-t border-white/[0.04] py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-2 group opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-lg leading-none" aria-hidden="true">
                            🐙
                        </span>
                        <span className="text-white font-medium" style={{ fontFamily: "var(--font-space)" }}>
                            OctaClaw
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-[#64748B]">
                        <a href="mailto:contact@octaclaw.com" className="text-sm hover:text-white transition-colors">
                            contact@octaclaw.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4 text-[#64748B]">
                        <a href="https://x.com/octaclaww" target="_blank" rel="noreferrer" className="hover:text-[#60A5FA] transition-colors" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="https://github.com/0xLabs-Org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/company/octaclaw" target="_blank" rel="noreferrer" className="hover:text-[#60A5FA] transition-colors" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-white/[0.04] text-center md:flex md:justify-between md:items-center text-xs text-[#475569]">
                    <p>© {new Date().getFullYear()} OctaClaw. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
