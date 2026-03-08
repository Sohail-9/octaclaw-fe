import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0F] border-t border-white/[0.04] py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-2 group opacity-80 hover:opacity-100 transition-opacity">
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <circle cx="16" cy="14" r="10" fill="url(#logoGlow2)" opacity="0.3" />
                            <ellipse cx="16" cy="13" rx="8" ry="7.5" fill="url(#bodyGrad2)" />
                            <circle cx="13" cy="12" r="1.8" fill="white" />
                            <circle cx="19" cy="12" r="1.8" fill="white" />
                            <circle cx="13.5" cy="12.3" r="0.9" fill="#1e1b4b" />
                            <circle cx="19.5" cy="12.3" r="0.9" fill="#1e1b4b" />
                            {/* Tentacles */}
                            <path d="M9 19 Q7 22 9 25 Q10 22 9 19Z" fill="url(#tentGrad2)" />
                            <path d="M12 20.5 Q11 24 13 26 Q13.5 23 12 20.5Z" fill="url(#tentGrad2)" />
                            <path d="M16 21 Q15.5 25 17 27 Q17.5 24 16 21Z" fill="url(#tentGrad2)" />
                            <path d="M20 20.5 Q21 24 19 26 Q18.5 23 20 20.5Z" fill="url(#tentGrad2)" />
                            <path d="M23 19 Q25 22 23 25 Q22 22 23 19Z" fill="url(#tentGrad2)" />
                            <defs>
                                <radialGradient id="logoGlow2" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#7C3AED" />
                                    <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                                <linearGradient id="bodyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#9F67FF" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                                <linearGradient id="tentGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#7C3AED" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>
                        </svg>
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
                        <a href="https://twitter.com/octaclaw" target="_blank" rel="noreferrer" className="hover:text-[#60A5FA] transition-colors" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="https://github.com/octaclaw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/company/octaclaw" target="_blank" rel="noreferrer" className="hover:text-[#60A5FA] transition-colors" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-white/[0.04] text-center md:flex md:justify-between md:items-center text-xs text-[#475569]">
                    <p>© {new Date().getFullYear()} OctaClaw. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#94a3b8] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#94a3b8] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
