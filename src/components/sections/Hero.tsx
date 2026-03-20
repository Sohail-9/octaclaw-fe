"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-glow relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(13,8,24,0.55)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#ded8f0]"
        >
          Private beta • Multi-agent DAG orchestrator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold text-white"
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
          <a href="#waitlist" className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base">
            Join the Priority Waitlist
            <ArrowRight size={16} />
          </a>
          <a href="#demo" className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base">
            Watch the DAG run
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
