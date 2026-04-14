"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Box, Activity, Target } from "lucide-react";

const logos = [
  { name: "VELOCITY", icon: Rocket },
  { name: "SYNAPSE", icon: Activity },
  { name: "MINTED", icon: Box },
  { name: "NOVA", icon: Sparkles },
  { name: "VERTEX", icon: Target },
];

export default function LogoTicker() {
  return (
    <section className="relative py-24 z-20 flex flex-col items-center w-full bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-text-main/[0.05] to-transparent" />
      
      <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-12">
        Built for the next generation of builders
      </p>

      {/* Infinite scrolling ticker */}
      <div className="w-full flex overflow-hidden mask-horizontal">
        <motion.div
           className="flex gap-16 md:gap-24 whitespace-nowrap px-8 items-center"
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             duration: 20,
             ease: "linear",
             repeat: Infinity
           }}
        >
          {/* Duplicate for seamless looping */}
          {[...logos, ...logos].map((logo, idx) => (
             <div key={`${logo.name}-${idx}`} className="flex items-center gap-3 text-[#cbd5e1] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
               <logo.icon size={18} />
               <span className="font-bold text-lg tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>{logo.name}</span>
             </div>
          ))}
        </motion.div>
      </div>
      
      <style>{`
        .mask-horizontal {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
