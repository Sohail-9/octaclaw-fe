"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const DashboardMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotateX = useTransform(smoothProgress, [0, 0.5], [12, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [0.92, 1]);
  const translateZ = useTransform(smoothProgress, [0, 0.5], [-100, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.4], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto mt-24 perspective-[1500px] overflow-visible">
      <motion.div
        style={{
          rotateX,
          scale,
          translateZ,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[16/10] bg-white rounded-3xl border border-black/5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-12 bg-black/[0.02] border-b border-black/5 flex items-center px-6 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
          <div className="flex-1" />
          <div className="h-6 w-32 bg-black/5 rounded-md" />
        </div>

        <div className="absolute inset-0 pt-12 p-8 flex gap-8">
          <div className="w-48 h-full bg-black/[0.01] border border-black/5 rounded-xl p-4 space-y-4">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="h-2 w-full bg-black/5 rounded-full" />
             ))}
          </div>
          <div className="flex-1 h-full space-y-8">
             <div className="grid grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="aspect-square bg-black/[0.01] border border-black/5 rounded-xl flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full border-2 border-black/5 border-t-black/20 animate-spin" />
                  </div>
                ))}
             </div>
             <div className="w-full h-48 bg-black/[0.01] border border-black/5 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 dotted-grid opacity-[0.05]" />
                <div className="space-y-4">
                   <div className="h-3 w-1/3 bg-black/10 rounded-full" />
                   <div className="h-3 w-2/3 bg-black/5 rounded-full" />
                   <div className="h-3 w-1/2 bg-black/5 rounded-full" />
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute -inset-20 bg-gradient-to-tr from-[#7c3aed]/5 via-transparent to-emerald-500/5 blur-3xl -z-10"
      />
    </div>
  );
};
