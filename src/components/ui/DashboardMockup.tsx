"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Terminal, Cpu, Play, CheckCircle, Code, Shield, GitBranch, Layers } from "lucide-react";

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

  // 3D tilt scroll animation
  const rotateX = useTransform(smoothProgress, [0, 0.45], [15, 0]);
  const scale = useTransform(smoothProgress, [0, 0.45], [0.93, 1]);
  const translateZ = useTransform(smoothProgress, [0, 0.45], [-80, 0]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto mt-12 mb-0 perspective-[1500px] overflow-visible px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX,
          scale,
          translateZ,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[16/10] bg-[#07070a]/90 rounded-3xl border border-white/[0.08] shadow-[0_0_50px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden backdrop-blur-md"
      >
        {/* Browser Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-white/[0.02] border-b border-white/[0.05] flex items-center px-5 gap-2 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          
          <div className="mx-auto h-5.5 w-64 bg-white/[0.04] border border-white/[0.05] rounded-md flex items-center justify-center">
            <span className="text-[9px] font-mono text-white/30 tracking-wide select-none">
              octaclaw.ai/workspace/swarm-782
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded text-emerald-400 text-[8px] font-mono font-bold tracking-wider uppercase select-none">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            Live Run
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="absolute inset-0 pt-11 flex divide-x divide-white/[0.05]">
          
          {/* Left Panel: Swarm Navigation */}
          <div className="w-48 h-full bg-[#030305]/50 p-4 space-y-5">
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-[0.2em] font-mono font-bold text-white/20 select-none">Active Swarm</span>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] font-semibold">
                <GitBranch size={12} />
                MarketAnalystSwarm
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-[0.2em] font-mono font-bold text-white/20 select-none">Specialist Lanes</span>
              <div className="space-y-1">
                {[
                  { name: "Researcher", status: "running", color: "text-violet-400" },
                  { name: "Analyst", status: "running", color: "text-sky-400" },
                  { name: "Writer", status: "waiting", color: "text-white/20" },
                  { name: "Reviewer", status: "waiting", color: "text-white/20" },
                ].map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between px-2 py-1 rounded text-[10px] text-white/40 hover:text-white/70 hover:bg-white/[0.01] transition duration-200">
                    <div className="flex items-center gap-2">
                      <Cpu size={10} className={agent.color} />
                      <span className="font-mono">{agent.name}</span>
                    </div>
                    {agent.status === "running" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Central Workspace: Node Graph View */}
          <div className="flex-1 h-full bg-black/35 relative p-6 overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 dotted-grid opacity-[0.03] z-0" />
            
            {/* Top Workspace Header */}
            <div className="flex items-center justify-between relative z-10 select-none">
              <div>
                <h3 className="text-xs font-bold font-heading text-white uppercase tracking-wider">Goal Execution Map</h3>
                <p className="text-[9px] text-white/30 font-mono mt-0.5">COMPOSING TASK DAG FOR SWARM RUN</p>
              </div>
              <div className="flex gap-1.5">
                <div className="h-5 w-16 bg-white/[0.04] border border-white/[0.05] rounded flex items-center justify-center text-[9px] text-white/40 font-mono">
                  Scale: 100%
                </div>
              </div>
            </div>

            {/* Spatial Visual Graph (SVG Mock) */}
            <div className="flex-1 relative z-10 flex items-center justify-center">
              <svg className="w-full h-full max-h-56" viewBox="0 0 400 200">
                {/* Node Connection Lines */}
                <path d="M 50 100 L 150 50" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 50 100 L 150 150" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />
                <path d="M 150 50 L 280 100" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                <path d="M 150 150 L 280 100" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />
                <path d="M 280 100 L 370 100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3,3" />

                {/* Node 1: Orchestrator */}
                <g transform="translate(50, 100)">
                  <circle r="16" fill="#07070a" stroke="#8b5cf6" strokeWidth="1.5" />
                  <circle r="4" fill="#8b5cf6" className="animate-pulse" />
                  <text y="26" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold" fontFamily="monospace">ORCHESTRATOR</text>
                </g>

                {/* Node 2: Researcher (Pulsing Active) */}
                <g transform="translate(150, 50)">
                  <circle r="12" fill="#07070a" stroke="#8b5cf6" strokeWidth="1.5" />
                  <circle r="3" fill="#8b5cf6" />
                  <circle r="8" fill="rgba(139,92,246,0.15)" className="animate-ping" style={{ animationDuration: "2.5s" }} />
                  <text y="-20" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontWeight="bold" fontFamily="monospace">RESEARCHER</text>
                </g>

                {/* Node 3: Analyst */}
                <g transform="translate(150, 150)">
                  <circle r="12" fill="#07070a" stroke="#10b981" strokeWidth="1.5" />
                  <circle r="3" fill="#10b981" />
                  <text y="22" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace">ANALYST</text>
                </g>

                {/* Node 4: Writer */}
                <g transform="translate(280, 100)">
                  <circle r="12" fill="#07070a" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <circle r="2" fill="rgba(255,255,255,0.2)" />
                  <text y="-18" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="bold" fontFamily="monospace">WRITER</text>
                </g>
              </svg>
            </div>

            {/* Workspace status bar */}
            <div className="flex items-center justify-between border-t border-white/[0.05] pt-3 relative z-10 text-[9px] font-mono text-white/30 select-none">
              <span>Goal: Compose competitor analysis...</span>
              <span>Running for 42s</span>
            </div>
          </div>

          {/* Right Panel: Execution Log Stream */}
          <div className="w-64 h-full bg-[#030305]/75 p-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[8px] uppercase tracking-[0.2em] font-mono font-bold text-white/20 select-none">Live Telemetry</span>
              
              <div className="space-y-2.5 overflow-hidden">
                {[
                  { time: "00:41", agent: "system", msg: "Swarm initialized successfully", color: "text-zinc-500" },
                  { time: "00:41", agent: "orch", msg: "Decomposed goal into 3 parallel tasks", color: "text-violet-400" },
                  { time: "00:40", agent: "research", msg: "Fetching competitor endpoints...", color: "text-violet-400 animate-pulse" },
                  { time: "00:39", agent: "analyst", msg: "Constructing schema mapping...", color: "text-emerald-400" },
                ].map((log, i) => (
                  <div key={i} className="rounded border border-white/[0.05] bg-white/[0.01] p-2 space-y-1 font-mono text-[9px]">
                    <div className="flex items-center justify-between text-white/20">
                      <span>[{log.time}]</span>
                      <span className="uppercase font-bold tracking-wider">{log.agent}</span>
                    </div>
                    <p className={log.color}>{log.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-7 border border-white/[0.05] bg-white/[0.02] rounded-lg flex items-center justify-between px-3 text-[9px] font-mono text-white/40">
              <div className="flex items-center gap-1.5">
                <Terminal size={10} className="text-violet-400" />
                <span>Await orchestrator...</span>
              </div>
              <div className="w-1.5 h-3 bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Glow */}
      <div
        className="absolute -inset-20 bg-gradient-to-tr from-[#8b5cf6]/10 via-transparent to-emerald-500/10 blur-3xl -z-10 opacity-70"
      />
    </div>
  );
};
