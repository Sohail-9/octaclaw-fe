"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function CTASection() {
  return (
    <section id="waitlist" className="relative py-40 px-6 overflow-hidden bg-zinc-50/60">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      {/* Soft background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-emerald-600/[0.04] rounded-full blur-[80px] translate-y-10" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-10"
        >
          Early Access
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.85] mb-8"
        >
          Ready to deploy
          <br />
          <span className="text-zinc-400">your first swarm?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-500 text-lg max-w-lg leading-relaxed mb-14"
        >
          Join the waitlist and be among the first teams to orchestrate
          intelligent agent swarms at production scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <HomeWaitlistHero />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-12"
        >
          {[
            { value: "10x", label: "Faster than sequential", accent: "text-violet-600" },
            { value: "∞", label: "Parallel agents", accent: "text-emerald-600" },
            { value: "100%", label: "Audit trail", accent: "text-sky-600" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <span className={`text-3xl font-bold font-heading tracking-tight ${stat.accent}`}>
                {stat.value}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
