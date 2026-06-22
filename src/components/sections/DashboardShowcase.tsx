"use client";

import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/ui/DashboardMockup";

export default function DashboardShowcase() {
  return (
    <section id="platform" className="relative pt-28 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.12), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(52,211,153,0.12), transparent)" }} />

      {/* Soft static orbs — not animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-[60%] w-[600px] h-[500px] rounded-full blur-[110px]"
          style={{ background: "rgba(139,92,246,0.12)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "rgba(52,211,153,0.10)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600 mb-8 glass-pill"
        >
          Platform
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-zinc-950 tracking-tight leading-[1.08] mb-6"
        >
          Your swarms, live
          <br />
          <span className="bg-gradient-to-r from-violet-500 to-emerald-500 bg-clip-text text-transparent">
            in one view.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-zinc-500 text-lg max-w-lg leading-relaxed mb-16"
        >
          Watch every agent, task, and tool call in real time. Full observability
          into your swarm — without touching a single config file.
        </motion.p>

        <DashboardMockup />
      </div>
    </section>
  );
}
