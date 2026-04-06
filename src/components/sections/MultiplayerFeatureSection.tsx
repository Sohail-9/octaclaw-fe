"use client";

import { motion } from "framer-motion";
import { Users, Terminal, PlayCircle } from "lucide-react";
import CosmicTerminalDemo from "@/components/sections/CosmicTerminalDemo";

export default function MultiplayerFeatureSection() {
  return (
    <section id="multiplayer" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="glow-orb-1" />
      <div className="glow-orb-3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Cosmic Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 relative"
          >
            <CosmicTerminalDemo mode="multiplayer" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 max-w-xl"
          >
            <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1.5 text-sm font-medium text-[#DEB7FF] mb-6 flex items-center gap-2">
              <Users size={14} /> Shared Workspace
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-medium tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Multiplayer <br className="hidden sm:block" /> Agent Swarms.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#CFC2D5] leading-relaxed mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
              <p>
                Building complex agents shouldn&apos;t be a solo endeavor. OctaClaw introduces genuine multiplayer synchronization to CLI sessions.
              </p>
              <p>
                Execute <kbd className="inline-flex items-center justify-center bg-white/10 border border-white/20 rounded text-xs font-bold text-[#e0b6ff] px-1.5 py-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>octa sync --team</kbd> to stream agent terminal output directly to your colleagues. Your whole team watches the execution unfold live, with identical local states.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-white/[0.03] border border-[#4C4353]/15 p-4 rounded-xl">
                <div className="p-2 text-[#DEB7FF] rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(123, 44, 191, 0.2)" }}>
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="text-[#E5E2E3] text-sm font-semibold">Live Session Sync</h4>
                  <p className="text-xs text-[#CFC2D5] mt-0.5">Terminal outputs perfectly synced locally and globally.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/[0.03] border border-[#4C4353]/15 p-4 rounded-xl">
                <div className="p-2 text-[#FDB969] rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(126, 77, 0, 0.2)" }}>
                  <PlayCircle size={20} />
                </div>
                <div>
                  <h4 className="text-[#E5E2E3] text-sm font-semibold">Shared Context Memory</h4>
                  <p className="text-xs text-[#CFC2D5] mt-0.5">Agents maintain state across different team members&apos; machines.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}