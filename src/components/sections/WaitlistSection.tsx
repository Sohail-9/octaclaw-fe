"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function WaitlistSection() {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[110px]"
          style={{ background: "rgba(139,92,246,0.14)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(52,211,153,0.12)" }} />
      </div>

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 glass-pill-emerald"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold text-zinc-600 tracking-wide">
            Private beta · Now open
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-heading font-bold text-4xl sm:text-5xl text-zinc-950 tracking-tight leading-[1.06] mb-4"
        >
          Get early access
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-sm"
        >
          Join the waitlist and be first to ship with OctaClaw.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 160, damping: 20 }}
          className="w-full rounded-3xl p-6 glass-card relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.95), transparent)" }} />
          <HomeWaitlistHero />
        </motion.div>

      </div>
    </section>
  );
}
