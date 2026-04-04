"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to initialize protocol.");
      }

      setStatus("success");
      if (data.message === "Already on the waitlist") {
        setMessage("Credentials verified. Already in terminal queue.");
      } else {
        setMessage("Access logged. Awaiting genesis sequence.");
      }
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Connection refused. Please try again.");
    }
  };

  return (
    <section className="relative w-full flex-1 overflow-hidden font-sans min-h-[85vh]">
      {/* ── Deep Obsidian Minimal Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft, ultra-diffuse center glow */}
        <div className="absolute w-[60vw] h-[60vh] top-[10%] bg-secondary/5 blur-[120px] rounded-full opacity-40 mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 h-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Typography & Form */}
        <div className="w-full lg:w-[45%] flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full py-1.5 px-3 text-[10px] font-medium uppercase tracking-widest mb-6 text-text-muted border border-white/10 bg-black/40 backdrop-blur-md">
              <Terminal size={12} className="text-secondary" />
              Early Access Registration
            </div>
            
            <h1 
              className="text-5xl sm:text-7xl font-medium tracking-tight text-white font-heading leading-[1.05] mb-6"
            >
              The Swarm <br className="hidden sm:block" />
              is Waiting.
            </h1>

            <p className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed font-sans">
              Enter your credentials to queue for the private enterprise deployment of the OctaClaw DAG execution engine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md relative"
          >
            <form onSubmit={handleSubmit} className="relative z-20 flex flex-col gap-4 w-full">
              <div className="relative group w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@enterprise.com"
                  className="w-full h-12 bg-black/40 border border-white/10 rounded-lg px-4 text-white text-sm outline-none transition-all duration-300 placeholder:text-text-muted/50 font-sans focus:border-secondary focus:bg-black/60 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]"
                  disabled={status === "loading" || status === "success"}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success" || !email}
                className="h-12 w-full rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="txt" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex items-center gap-2">
                       Initialize Protocol <ArrowRight size={16} />
                    </motion.span>
                  )}
                  {status === "loading" && (
                    <motion.div key="spin" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "0ms" }} />
                       <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "150ms" }} />
                       <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "300ms" }} />
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.span key="check" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="flex items-center gap-2">
                       Queue Position Secured.
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
            
            <AnimatePresence>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-xs font-medium ${status === "success" ? "text-text-muted" : "text-error"} font-mono`}
                >
                  <span className="text-secondary">$</span> {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Sleek Realistic Terminal UI */}
        <div className="w-full lg:w-[55%] relative h-[450px] hidden md:flex items-center justify-end">
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="w-full max-w-lg rounded-xl bg-black border border-white/10 shadow-[0_24px_80px_-12px_rgba(0,0,0,1)] z-10 font-mono overflow-hidden"
          >
             {/* Terminal Header */}
             <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2 mr-4">
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] text-text-muted/70 tracking-widest uppercase flex-1 text-center pr-8">
                   octaclaw_daemon ~ zsh
                </span>
             </div>
             
             {/* Terminal Body */}
             <div className="p-6 space-y-2 text-[11px] text-text-muted/80 leading-relaxed min-h-[300px]">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.0}}>
                  <span className="text-white/40">~</span> <span className="text-secondary">octaclaw</span> up -d --workers=8
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}}>
                  [OK] Daemon bound to tcp://0.0.0.0:4040
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.0}}>
                  [OK] Local VectorStore hydrated (1.2GB)
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.3}}>
                  [OK] Swarm initialized with 8 idle cores.
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.2}} className="text-white mt-4">
                  {"{"}"status": "awaiting_connection", "client": "none"{"}"}
                </motion.div>
                
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.5}}>
                  <br />
                  <span className="text-white/40 delay-100 animate-pulse">_</span>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
