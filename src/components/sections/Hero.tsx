"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Cpu } from "lucide-react";
import { useRef } from "react";

export default function HeroSection({
  primaryHref = "#waitlist",
  secondaryHref = "#orchestrate",
  primaryLabel = "Join the Priority Waitlist",
  secondaryLabel = "Watch Demo",
}: {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* ── Background Spatial Infrastructure ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Static Premium Glow */}
        <div className="absolute w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-primary/10 blur-[120px] rounded-full" />

        {/* Subtle grid layer */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "center center"
          }}
        />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 py-1.5 px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted glass-micro-border"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Spatial Workspace
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white font-heading leading-[0.95] text-balance"
        >
          Orchestrate. <br className="hidden sm:block" />
          Execute. <span className="text-[#DEB7FF]">Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-xl sm:text-2xl text-[#CFC2D5] leading-snug font-medium"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Manage multi-agent swarms with absolute precision. The professional-grade spatial orchestrator for elite intelligence teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
        >
          <LinkButton
            href={primaryHref}
            className="btn-premium flex items-center justify-center gap-3 text-lg"
            style={{ backgroundColor: "white", color: "#0E0E0F" }}
          >
            <Zap size={22} className="relative z-10 fill-current text-[#0E0E0F]" />
            <span className="relative z-10">{primaryLabel}</span>
          </LinkButton>

          <LinkButton
            href={secondaryHref}
            className="btn-premium-secondary flex items-center justify-center gap-3 text-lg"
          >
            <Cpu size={22} className="text-[#DEB7FF]" />
            {secondaryLabel}
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform text-[#DEB7FF]" />
          </LinkButton>
        </motion.div>
      </motion.div>

      {/* Floating Meta Data */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold pointer-events-none">
        <div>Session: Authenticated</div>
        <div>System: Nominal</div>
        <div>Uptime: 99.99%</div>
      </div>
    </section>
  );
}

function LinkButton({ href, children, className, style }: { href: string; children: React.ReactNode; className: string, style?: React.CSSProperties }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={style}
    >
      {children}
    </motion.a>
  );
}
