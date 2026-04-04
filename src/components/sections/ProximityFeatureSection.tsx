"use client";

import { motion } from "framer-motion";
import CosmicTerminalDemo from "@/components/sections/CosmicTerminalDemo";
import { Activity } from "lucide-react";

export default function ProximityFeatureSection() {
  return (
    <section id="proximity" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-[11px] font-medium uppercase tracking-widest text-text-muted mb-8">
              <Activity size={14} className="text-secondary" />
              Execution Telemetry
            </div>
            <h2 className="text-5xl sm:text-6xl text-white font-medium tracking-tight mb-8 leading-[1.05] font-heading">
              Live Inspection. <br className="hidden sm:block" /> Unfiltered Truth.
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-text-muted leading-relaxed mb-10 font-sans">
              <p>
                Stop hiding complexity behind abstracted layers. OctaClaw exposes the exact intelligence graph of your orchestrations in a high-fidelity spatial telemetry terminal.
              </p>
              <p className="text-base sm:text-lg">
                Inject context mid-flight, forcefully pause reasoning cycles, and inspect autonomous network requests directly from the <strong>Execution Node</strong> interface. No padding. Just pure data.
              </p>
            </div>
          </motion.div>

          {/* Demo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/40 glass p-2 shadow-[0_24px_80px_-12px_rgba(0,0,0,1)]"
          >
            <CosmicTerminalDemo mode="execution" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}