"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MouseGlowGrid } from "@/components/ui/MouseGlowGrid";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* ── Interactive Background Glow ── */}
      <div className="absolute inset-0 pointer-events-auto">
        <MouseGlowGrid />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center w-full"
        >
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-[11px] font-medium uppercase tracking-widest text-text-muted backdrop-blur-md mb-8"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            OctaClaw OS Platform
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl lg:text-8xl font-medium tracking-[-0.03em] text-white font-heading leading-[1.05]"
          >
            The Control Layer <br className="hidden sm:block" />
            for AI <span className="text-transparent bg-clip-text bg-gradient-to-bl from-white/10 to-white"> Agents</span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-xl sm:text-2xl text-text-muted leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Deploy high-fidelity DAG architectures with zero-latency checkpointing. Scale your intelligence, reliably.
          </motion.p> */}
          <div className="w-full flex justify-center mt-10">
            <HomeWaitlistHero />
          </div>




        </motion.div>
      </div>

    </section>
  );
}

function LinkButton({ href, children, className, style }: { href: string; children: React.ReactNode; className: string, style?: React.CSSProperties }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={style}
    >
      {children}
    </motion.a>
  );
}
