"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TerminalSquare, Share2, Orbit, ShieldCheck } from "lucide-react";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setMessage("Transmission received. Welcome to the elite roster.");
      setEmail("");
    }, 1200);
  };

  return (
    <section className="relative w-full flex-1 overflow-hidden font-manrope">
      {/* ── Deep Space Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[120vw] h-[60vh] top-0 bg-gradient-to-b from-[#ba9eff]/10 to-transparent blur-[160px] opacity-70" />
        <div className="absolute w-[60vw] h-[60vw] right-[-20%] bottom-[-20%] bg-[#53ddfc]/10 blur-[200px] rounded-full mix-blend-screen opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 h-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Typography & Form */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full py-1.5 px-4 text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#53ddfc] border border-[#53ddfc]/20 bg-[#091328]/80 backdrop-blur-md">
              <Orbit size={14} className="animate-spin-slow" />
              The Celestial Conductor
            </div>
            
            <h1 
              className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#a3aac4] font-heading leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Orchestrate Swarms.
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#8455ef]">
                Don't chat with bots.
              </span>
            </h1>

            <p className="text-lg text-[#a3aac4] max-w-xl mb-12 leading-relaxed font-manrope">
              Gain exclusive access to the enterprise-grade DAG engine. OctaClaw drops the linear abstraction, offering a truly parallel worker-pool execution environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md relative"
          >
            <form onSubmit={handleSubmit} className="relative z-20 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="commander@enterprise.gov"
                  className="w-full h-14 bg-transparent border-b-2 border-[#40485d] px-2 text-[#dee5ff] outline-none transition-colors duration-300 placeholder:text-[#6d758c] font-manrope focus:border-[#53ddfc]"
                  disabled={status === "loading" || status === "success"}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success" || !email}
                className="h-14 px-8 rounded-md bg-[#ba9eff] text-[#39008c] font-bold font-manrope shadow-[0_0_0_0_rgba(186,158,255,0)] hover:shadow-[0_0_24px_rgba(186,158,255,0.3)] transition-all duration-300 flex items-center justify-center min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="txt" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex items-center gap-2">
                       Request Protocol <ArrowRight size={18} />
                    </motion.span>
                  )}
                  {status === "loading" && (
                    <motion.div key="spin" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex gap-1.5">
                       <span className="w-2 h-2 rounded-full bg-[#39008c] animate-bounce" style={{ animationDelay: "0ms" }} />
                       <span className="w-2 h-2 rounded-full bg-[#39008c] animate-bounce" style={{ animationDelay: "150ms" }} />
                       <span className="w-2 h-2 rounded-full bg-[#39008c] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.span key="check" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex items-center gap-2 text-[#2b006e]">
                       <Sparkles size={18} /> Logged
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
            
            <AnimatePresence>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-sm font-medium ${status === "success" ? "text-[#53ddfc]" : "text-[#ff6e84]"} font-manrope`}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Floating Intelligence Glass Layers */}
        <div className="w-full lg:w-1/2 relative h-[500px] hidden md:block">
          {/* Base Layer Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="absolute top-10 right-10 w-[420px] rounded-2xl bg-[#0f1930] border border-[#40485d]/30 p-8 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] z-10"
          >
             <div className="flex items-center justify-between mb-8">
                <span className="text-[#53ddfc] text-[10px] font-bold tracking-widest uppercase font-heading">
                   SYSTEM CONFIG
                </span>
                <span className="w-2 h-2 rounded-full bg-[#53ddfc] shadow-[0_0_8px_#53ddfc] animate-pulse" />
             </div>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-[#ba9eff]">
                    <TerminalSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#dee5ff] font-bold text-sm mb-1">DAG GraphPlanner</h4>
                    <p className="text-[#a3aac4] text-xs leading-relaxed">Decomposes string intents into parallelizable subroutines across threaded worker pools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-[#ba9eff]">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#dee5ff] font-bold text-sm mb-1">WorkerPool Concurrency</h4>
                    <p className="text-[#a3aac4] text-xs leading-relaxed">Scale execution automatically based on available local or cloud-provisioned cores.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-[#ba9eff]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#dee5ff] font-bold text-sm mb-1">HNSW Vector Memory</h4>
                    <p className="text-[#a3aac4] text-xs leading-relaxed">Native vector similarity search integrated tightly with episodic swarm learning.</p>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Elevated Floating Glass Card */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: [0, -10, 0] }}
             transition={{ duration: 6, opacity: { duration: 1, delay: 0.6 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
             className="absolute -bottom-4 right-20 w-[300px] rounded-xl bg-[#192540]/60 backdrop-blur-[24px] border border-[#40485d]/50 p-6 shadow-[0_24px_48px_rgba(0,0,0,0.4)] z-20"
          >
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ba9eff] to-[#8455ef] flex items-center justify-center shadow-inner">
                 <TerminalSquare size={16} className="text-[#39008c]" />
               </div>
               <div>
                  <div className="text-[10px] text-[#a3aac4] uppercase tracking-widest">Active Task</div>
                  <div className="text-sm font-bold text-[#dee5ff]">Compile Checkpoint</div>
               </div>
             </div>
             
             <div className="w-full h-1.5 bg-[#091328] rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-[#53ddfc]" 
                 initial={{ width: "20%" }}
                 animate={{ width: "85%" }}
                 transition={{ duration: 2, delay: 1, ease: "circOut" }}
               />
             </div>
             <div className="mt-3 flex justify-between text-[10px] text-[#a3aac4]">
               <span>ETA: 1.2s</span>
               <span className="text-[#ba9eff]">Parallelized</span>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
