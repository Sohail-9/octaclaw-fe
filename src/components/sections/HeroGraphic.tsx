"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroGraphic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] w-full max-w-5xl mx-auto" />;

  // Central node
  // Outer orbit nodes
  const nodes = [
    { id: 1, x: 20, y: 25, delay: 0.2, pulseDelay: 0 },
    { id: 2, x: 80, y: 30, delay: 0.4, pulseDelay: 1.5 },
    { id: 3, x: 70, y: 75, delay: 0.6, pulseDelay: 0.8 },
    { id: 4, x: 30, y: 70, delay: 0.8, pulseDelay: 2.2 },
    { id: 5, x: 10, y: 50, delay: 1.0, pulseDelay: 1.1 },
    { id: 6, x: 90, y: 60, delay: 1.2, pulseDelay: 0.5 },
  ];

  return (
    <section className="relative w-full px-4 pt-10 pb-20 flex justify-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl aspect-[16/7] md:aspect-[21/9] rounded-2xl sm:rounded-3xl border border-border-subtle bg-bg-surface/60 backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]"
      >
        {/* Glow Effects Behind Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

        {/* Dynamic Graph Nodes */}
        <div className="absolute inset-0 z-10">
          <svg className="w-full h-full">
            {/* Draw lines to center */}
            {nodes.map((node) => (
              <motion.line
                key={`line-${node.id}`}
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="url(#gradientLine)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: node.delay, ease: "easeOut" }}
              />
            ))}

            {/* Moving signal particles */}
            {nodes.map((node) => (
              <motion.circle
                key={`dot-${node.id}`}
                r="2"
                fill="white"
                initial={{ opacity: 0 }}
                animate={{
                 opacity: [0, 1, 0],
                 cx: ["50%", `${node.x}%`],
                 cy: ["50%", `${node.y}%`]
                }}
                transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "linear",
                 delay: node.pulseDelay
                }}
              />
            ))}
            
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {/* Outer rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 border border-[#81e6d9]/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-[#22d3ee]/30 rounded-full"
              />
              <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 bg-white/10 blur-xl rounded-full"
              />
              {/* Core */}
              <div className="w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Render Satellite Nodes */}
          {nodes.map((node) => (
             <motion.div
               key={`circle-${node.id}`}
               className="absolute w-6 h-6 -ml-3 -mt-3"
               style={{ left: `${node.x}%`, top: `${node.y}%` }}
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, delay: node.delay + 0.3 }}
             >
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: node.pulseDelay }}
                    className="absolute inset-0 bg-white/10 rounded-full blur-md"
                  />
                  <div className="w-4 h-4 rounded-full bg-black border border-white/20 z-10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                </div>
             </motion.div>
          ))}
        </div>

        {/* Console / Status Bar Top left */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 opacity-50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
        </div>

        {/* Terminal/Status details top right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 invisible sm:visible">
          <div className="font-mono text-[9px] text-[#22d3ee]/40 uppercase tracking-widest text-right">
            SPATIAL NODE GRAPH :<br/>
            LIVE STATUS : ACTIVE
          </div>
        </div>

      </motion.div>
    </section>
  );
}
