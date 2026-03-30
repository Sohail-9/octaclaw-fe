"use client";

import { motion } from "framer-motion";
import CosmicTerminalDemo from "@/components/sections/CosmicTerminalDemo";

export default function ProximityFeatureSection() {
  return (
    <section id="proximity" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-8">
              Cosmic Command
            </div>
            <h2 className="text-5xl sm:text-6xl text-white font-bold tracking-tight mb-8 leading-[1.1] font-heading" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Cosmic Command. <br className="hidden sm:block" /> Real-time Orchestration.
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-text-muted leading-relaxed mb-10" style={{ fontFamily: "var(--font-manrope)" }}>
              <p>
                Stop hiding complexity behind abstract dashboards. OctaClaw exposes the actual intelligence graph of your orchestrations in a beautifully spatial terminal.
              </p>
              <p>
                Inject context mid-flight, pause reasoning cycles, and inspect autonomous network requests directly from the <strong>Cosmic Terminal</strong> interface. No borders. No clutter. Just deep editorial precision.
              </p>
            </div>
          </motion.div>

          {/* Demo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <CosmicTerminalDemo mode="execution" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}