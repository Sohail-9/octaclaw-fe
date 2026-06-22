"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function CTASection() {
  return (
    <section id="cta" className="py-28 px-6 relative overflow-hidden">
      {/* Rich gradient section background — Prettiflow CTA style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #f5f3ff 0%, #ede9fe 30%, #d1fae5 65%, #ecfdf5 100%)" }} />
        <div className="absolute inset-0 dotted-grid opacity-30" />
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.48), rgba(52,211,153,0.32), transparent)" }} />
        {/* Soft orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "rgba(139,92,246,0.24)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[90px]"
          style={{ background: "rgba(52,211,153,0.22)" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8 glass-pill-emerald"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold text-zinc-600 tracking-wide">
            Private beta now open
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.8rem] text-zinc-950 leading-[1.06] tracking-tight mb-6"
        >
          Build your next AI system
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
            with OctaClaw.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-lg text-zinc-500 leading-relaxed max-w-md mb-12"
        >
          Join the engineers already building production multi-agent systems
          with the runtime that doesn&apos;t break.
        </motion.p>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22, type: "spring", stiffness: 150, damping: 20 }}
          className="w-full max-w-lg rounded-3xl p-8 relative overflow-hidden glass-card"
        >
          {/* Static top reflection */}
          <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.95), transparent)" }} />
          {/* Shimmer sweep on enter */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.7), rgba(52,211,153,0.5), transparent)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
          />
          <HomeWaitlistHero />
        </motion.div>

      </div>
    </section>
  );
}
