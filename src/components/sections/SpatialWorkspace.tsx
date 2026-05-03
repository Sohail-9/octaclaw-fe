"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Database, BrainCircuit, Activity } from "lucide-react";

export default function SpatialWorkspaceSection() {
  return (
    <section id="spatial-workspace" className="relative py-20 sm:py-32 px-6 overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7c3aff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="inline-flex rounded-full border border-[#7c3aff]/30 bg-[#7c3aff]/10 px-3 py-1.5 text-sm font-medium text-[#c4a1ff] mb-6">
              Execution Graphs
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl text-white font-medium tracking-tight mb-6 leading-tight">
              The execution graph for <br className="hidden sm:block" /> humans and agents.
            </h2>
            <p className="text-lg sm:text-lg text-[#dfdaf0] leading-relaxed mb-8">
              OctaClaw gives your team and agents one unified orchestration graph. You can see every active run, jump into any node, discuss issues in context, and move from alert to fix without switching tools.
            </p>

            <ul className="space-y-4">
              {[
                "Visualize complex multi-agent DAGs instantly",
                "Approve or reject agent actions in real-time",
                "Full state history and node-level replay"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#c9c2df]">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-[#7c3aff] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Canvas Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl border border-white/10 bg-[#0c0816] overflow-hidden shadow-2xl flex items-center justify-center p-4 lg:p-8"
          >
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            {/* Mock Nodes - built with pure CSS/Tailwind */}
            <div className="relative w-full h-full min-h-[350px]">

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <path d="M 20% 30% C 35% 30%, 35% 55%, 50% 55%" fill="none" stroke="#7c3aff" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse opacity-60" />
                <path d="M 50% 55% C 65% 55%, 65% 30%, 80% 30%" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
                <path d="M 50% 55% C 65% 55%, 65% 80%, 80% 80%" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
              </svg>

              {/* Node 1 - Source */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-10 w-[140px] sm:w-[160px] rounded-xl border border-emerald-500/20 bg-black/60 backdrop-blur-md p-3 sm:p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={14} className="text-emerald-400" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white">Data Ingestion</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-full" />
                </div>
                <div className="mt-2 text-[9px] text-emerald-400/80 font-mono">Status: Complete</div>
              </motion.div>

              {/* Node 2 - Processing Agent */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] sm:w-[180px] rounded-xl border border-[#7c3aff]/50 bg-[#7c3aff]/10 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_30px_rgba(124,58,255,0.2)]"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BrainCircuit size={14} className="text-[#c4a1ff]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-white">Syntax Agent</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7c3aff] animate-pulse" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#c9c2df] mb-1">
                  <span>Parsing inputs...</span>
                  <span className="font-mono">68%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7c3aff] w-[68%]" />
                </div>
              </motion.div>

              {/* Node 3 - Human Review */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10 w-[150px] sm:w-[170px] rounded-xl border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md p-3 sm:p-4 shadow-lg outline outline-1 outline-yellow-500/10 outline-offset-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <User size={14} className="text-yellow-400" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white">Human Edit</span>
                </div>
                <div className="text-[10px] text-yellow-200/70 mb-3">Awaiting action</div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md py-1.5 text-[10px] text-white transition-colors">Reject</button>
                  <button className="flex-1 bg-[#7c3aff] hover:bg-[#6b2ee6] rounded-md py-1.5 text-[10px] text-white transition-colors shadow-md">Approve</button>
                </div>
              </motion.div>

              {/* Node 4 - Storage */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10 w-[140px] sm:w-[160px] rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4 shadow-lg hover:border-white/20 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Database size={14} className="text-slate-400" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white/80">Log Sink</span>
                </div>
                <div className="text-[10px] text-[#c9c2df]/60 font-mono">Idle</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
