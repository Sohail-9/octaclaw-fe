"use client";

import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/ui/DashboardMockup";

export default function DashboardShowcase() {
  return (
    <section id="platform" className="relative pt-24 pb-8 px-6 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-600/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
        >
          Product Showcase
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.85] mb-6"
        >
          Your swarms.
          <br />
          <span className="text-zinc-400 font-heading">Live, in one view.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-500 text-lg max-w-xl leading-relaxed mb-12"
        >
          Watch every agent, task, and tool call in real time. Full observability
          into your swarm — without touching a single config file.
        </motion.p>

        <DashboardMockup />
      </div>
    </section>
  );
}
