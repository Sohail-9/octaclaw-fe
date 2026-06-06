"use client";

import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/ui/DashboardMockup";

export default function DashboardShowcase() {
  return (
    <section id="platform" className="relative pt-24 pb-8 px-6 overflow-hidden bg-[#050505]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-600/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-600/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8"
        >
          Product Showcase
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] text-white uppercase font-heading leading-[0.85] mb-6"
        >
          Unified spatial<br />
          <span className="text-white/20 font-heading">execution environment.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-lg max-w-xl leading-relaxed mb-12"
        >
          Track real-time agent communications, active task trees, and telemetry streams under a high-performance orchestration canvas.
        </motion.p>

        {/* Dashboard 3D Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
