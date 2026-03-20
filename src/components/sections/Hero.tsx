"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type HeroSectionProps = {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function HeroSection({
  primaryHref = "#waitlist",
  secondaryHref = "#demo",
  primaryLabel = "Join the Priority Waitlist",
  secondaryLabel = "Watch the DAG run",
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-[#efeaff] shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_10px_30px_rgba(124,58,255,0.14)]"
        >
          Private beta • Multi-agent DAG orchestrator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-7 text-4xl sm:text-6xl lg:text-7xl leading-[1.08] sm:leading-[1.03] font-medium tracking-[-0.01em] text-white"
        >
          Your agents are stuck in scripts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-3xl mx-auto text-base sm:text-xl text-[#dfdaf0]"
        >
          OctaClaw puts your team and your AI agents in the same spatial environment. See who&apos;s working on what, jump
          into any agent&apos;s run, and collaborate with your team - all in one living workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
        >
          <a
            href={primaryHref}
            className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 py-0 leading-none text-sm sm:text-base"
          >
            {primaryLabel}
            <ArrowRight size={16} />
          </a>
          <a
            href={secondaryHref}
            className="btn-secondary inline-flex h-12 items-center justify-center rounded-xl px-5 py-0 leading-none text-sm sm:text-base"
          >
            {secondaryLabel}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-5 text-sm text-[#b9b2cf]"
        >
          Limited beta seats this month.
        </motion.p>
      </div>
    </section>
  );
}
