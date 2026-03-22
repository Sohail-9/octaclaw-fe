"use client";

import { motion } from "framer-motion";
import MiniOfficeDemo from "@/components/sections/MiniOfficeDemo";

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
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-light mb-8">
              Spatial Intelligence
            </div>
            <h2 className="text-5xl sm:text-6xl text-white font-bold tracking-tight mb-8 leading-[1.1] font-heading">
              Walk right up to <br className="hidden sm:block" /> your AI agents.
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-text-muted leading-relaxed mb-10">
              <p>
                Stop navigating through nested sidebars. In the OctaClaw 2D workspace, every AI agent occupies a physical desk in your virtual office.
              </p>
              <p>
                Just walk your avatar into proximity. The <strong>AgentPanel</strong> springs open, letting you intercept thoughts, inspect logs, or inject instructions mid-run.
              </p>
            </div>
          </motion.div>

          {/* Mini Office Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-20" />
            <div className="glass-card p-2 rounded-2xl border border-white/5 relative z-10 shadow-3xl">
              <MiniOfficeDemo mode="proximity" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}