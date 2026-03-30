"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Cpu } from "lucide-react";
import { useRef } from "react";

export default function HeroSection({
  primaryHref = "#waitlist",
  secondaryHref = "#proximity",
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            style={{ opacity, scale }} 
            className="flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 py-1.5 px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted glass-micro-border"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Cosmic Orchestrator
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white font-heading leading-[0.95]"
            >
              Orchestrate. <br />
              Execute. <span className="text-vivid-gradient italic">Scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-xl sm:text-2xl text-[#CFC2D5] leading-snug font-medium"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Manage multi-agent swarms with absolute precision. The professional-grade spatial orchestrator for elite intelligence teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <LinkButton
                href={primaryHref}
                className="btn-premium flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-full"
                style={{ 
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)", 
                  color: "#0c1324" 
                }}
              >
                <Zap size={22} className="relative z-10 fill-current" />
                <span className="relative z-10">{primaryLabel}</span>
              </LinkButton>

              <LinkButton
                href={secondaryHref}
                className="btn-premium-secondary glass flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-full border-none shadow-none"
              >
                <Cpu size={22} className="text-secondary" />
                <span className="text-text">{secondaryLabel}</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform text-secondary" />
              </LinkButton>
            </motion.div>
          </motion.div>

          {/* Right Visual (Cosmic Glass Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="glass-card aspect-square w-full max-w-[500px] p-8 flex flex-col justify-between overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-secondary/10 blur-[60px] rounded-full" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">System Status</div>
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                </div>
                <div className="text-4xl font-black text-white/90">99.99%</div>
                <div className="h-[1px] w-full bg-white/5" />
                <div className="space-y-4">
                   <div className="flex items-center justify-between text-[11px] text-text-muted">
                      <span>Uptime</span>
                      <span className="text-white">Active</span>
                   </div>
                   <div className="flex items-center justify-between text-[11px] text-text-muted">
                      <span>Node Latency</span>
                      <span className="text-white">12ms</span>
                   </div>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Cpu size={16} className="text-primary" />
                      </div>
                      <div className="text-xs font-bold text-white">Quantum Core v2.4</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
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
