"use client";

import { motion } from "framer-motion";
import { Users, Keyboard, PlayCircle } from "lucide-react";
import MiniOfficeDemo from "@/components/sections/MiniOfficeDemo";

export default function MultiplayerFeatureSection() {
  return (
    <section id="multiplayer" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="glow-orb-1" />
      <div className="glow-orb-3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Mini Office Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <MiniOfficeDemo mode="multiplayer" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 max-w-xl"
          >
            <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1.5 text-sm font-medium text-pink-300 mb-6 flex items-center gap-2">
              <Users size={14} /> Play Multiplayer
            </div>
            <h2 className="text-4xl sm:text-5xl text-white font-medium tracking-tight mb-6 leading-tight">
              Gamify your <br className="hidden sm:block" /> AI orchestration.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#dfdaf0] leading-relaxed mb-8">
              <p>
                Forget boring submission forms. We turned launching complex AI workflows into a cinematic moment.
              </p>
              <p>
                Walk your avatar to the CEO Command Desk, hit{" "}
                <kbd className="inline-flex items-center justify-center w-6 h-6 bg-white/10 border border-white/20 rounded text-xs font-bold text-white">
                  F
                </kbd>{" "}
                to sit, and deploy your entire fleet of agents instantly. Your whole team watches the orchestration unfold live in the same room.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg flex-shrink-0">
                  <Keyboard size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Gamified Mechanics</h4>
                  <p className="text-xs text-[#9ca3af] mt-0.5">WASD movement, sit mechanics, physical desk layouts.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg flex-shrink-0">
                  <PlayCircle size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Live WebSocket Sync</h4>
                  <p className="text-xs text-[#9ca3af] mt-0.5">Avatars, chat, and agent status perfectly synced locally and globally.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}