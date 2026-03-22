"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

type HeroSectionProps = {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function HeroSection({
  primaryHref = "#waitlist",
  secondaryHref = "#gameplay",
  primaryLabel = "Join the Priority Waitlist",
  secondaryLabel = "Watch gameplay",
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-light"
        >
          <Activity size={12} />
          Now in Private Beta
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white font-heading leading-[1.1]"
        >
          The first 2D spatial office <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            for your AI agents.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto text-lg sm:text-2xl text-text-muted leading-relaxed"
        >
          OctaClaw puts your team and your AI agents in the same spatial environment. See who&apos;s working on what, jump
          into any agent&apos;s run, and collaborate in real-time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href={primaryHref}
            className="btn-primary group h-14 px-8 rounded-2xl flex items-center justify-center gap-2 text-lg transition-all duration-300"
          >
            {primaryLabel}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className="btn-secondary h-14 px-8 rounded-2xl flex items-center justify-center text-lg border-white/10 hover:bg-white/5"
            >
              {secondaryLabel}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
