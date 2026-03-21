"use client";

import { motion } from "framer-motion";
import MiniOfficeDemo from "@/components/sections/MiniOfficeDemo";

export default function ProximityFeatureSection() {
  return (
    <section id="proximity" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="glow-orb-1" />
      <div className="glow-orb-3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="inline-flex rounded-full border border-[#7c3aff]/30 bg-[#7c3aff]/10 px-3 py-1.5 text-sm font-medium text-[#c4a1ff] mb-6">
              Killer Feature
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-medium tracking-tight mb-6 leading-tight">
              Walk right up to <br className="hidden sm:block" /> your AI agents.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#dfdaf0] leading-relaxed mb-8">
              <p>
                Stop navigating through 15 nested sidebars just to see what an agent is doing. In the OctaClaw 2D workspace, every AI agent occupies a physical desk in your virtual office.
              </p>
              <p>
                Just walk your avatar into a 2-tile radius of the "Lead Researcher". Their <strong>AgentPanel</strong> immediately springs open, letting you intercept their thoughts, inspect memory logs, or inject new instructions mid-run.
              </p>
            </div>
          </motion.div>

          {/* Mini Office Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MiniOfficeDemo mode="proximity" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}