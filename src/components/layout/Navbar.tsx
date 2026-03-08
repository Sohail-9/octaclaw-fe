"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
                        : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        {/* Cute octopus SVG logo */}
                        <div className="relative w-8 h-8">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                {/* Glow behind */}
                                <circle cx="16" cy="14" r="10" fill="url(#logoGlow)" opacity="0.3" />
                                {/* Body */}
                                <ellipse cx="16" cy="13" rx="8" ry="7.5" fill="url(#bodyGrad)" />
                                {/* Eyes */}
                                <circle cx="13" cy="12" r="1.8" fill="white" />
                                <circle cx="19" cy="12" r="1.8" fill="white" />
                                <circle cx="13.5" cy="12.3" r="0.9" fill="#1e1b4b" />
                                <circle cx="19.5" cy="12.3" r="0.9" fill="#1e1b4b" />
                                {/* Shine */}
                                <circle cx="14" cy="11.6" r="0.4" fill="white" opacity="0.8" />
                                <circle cx="20" cy="11.6" r="0.4" fill="white" opacity="0.8" />
                                {/* Tentacles */}
                                <path d="M9 19 Q7 22 9 25 Q10 22 9 19Z" fill="url(#tentGrad)" />
                                <path d="M12 20.5 Q11 24 13 26 Q13.5 23 12 20.5Z" fill="url(#tentGrad)" />
                                <path d="M16 21 Q15.5 25 17 27 Q17.5 24 16 21Z" fill="url(#tentGrad)" />
                                <path d="M20 20.5 Q21 24 19 26 Q18.5 23 20 20.5Z" fill="url(#tentGrad)" />
                                <path d="M23 19 Q25 22 23 25 Q22 22 23 19Z" fill="url(#tentGrad)" />
                                {/* Blush */}
                                <ellipse cx="11" cy="14.5" rx="1.5" ry="0.8" fill="#f9a8d4" opacity="0.5" />
                                <ellipse cx="21" cy="14.5" rx="1.5" ry="0.8" fill="#f9a8d4" opacity="0.5" />
                                <defs>
                                    <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#7C3AED" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>
                                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#9F67FF" />
                                        <stop offset="100%" stopColor="#3B82F6" />
                                    </linearGradient>
                                    <linearGradient id="tentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#7C3AED" />
                                        <stop offset="100%" stopColor="#3B82F6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span
                            className="text-white font-semibold text-lg tracking-tight"
                            style={{ fontFamily: "var(--font-space)" }}
                        >
                            OctaClaw
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#waitlist"
                            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm"
                            style={{ padding: "9px 22px" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Get Early Access
                        </a>

                        <button
                            className="md:hidden text-white p-2 glass rounded-lg"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4 md:hidden"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[#94a3b8] hover:text-white transition-colors py-2 border-b border-white/[0.05]"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#waitlist"
                            className="btn-primary text-sm text-center mt-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Get Early Access
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
