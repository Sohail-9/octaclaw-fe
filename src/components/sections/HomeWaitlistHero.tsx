"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, Mail, CheckCircle2, Shield, Zap, Globe } from "lucide-react";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative pt-48 pb-48 px-6 bg-[#252527] overflow-hidden min-h-screen flex flex-col items-center">

      {/* ── Airy Minimalist Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Blur-in Header */}
        <div className="blur-in-header">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-[#f8fafc] font-heading leading-[1.1]">
            Standardize <br />
            <span className="text-[#94a3b8]">Autonomous Intelligence.</span>
          </h1>
          <p className="mt-10 max-w-xl mx-auto text-xl sm:text-2xl text-[#94a3b8] font-medium leading-relaxed tracking-tight">
            OctaClaw is the professional spatial layer for multi-agent orchestration. Built for architects, not just builders.
          </p>
        </div>

        {/* Magnetic Expanding Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 w-full max-w-lg"
        >
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.div
              animate={{
                scale: isFocused ? 1.05 : 1,
                backgroundColor: isFocused ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex-1 w-full h-16 rounded-3xl border border-white/10 flex items-center px-6 overflow-hidden transition-colors"
            >
              <Mail className={`transition-colors duration-300 ${isFocused ? "text-white" : "text-[#94a3b8]"}`} size={20} />
              <input
                type="email"
                required
                placeholder="Work email"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full h-full bg-transparent border-none outline-none pl-4 text-white placeholder-[#94a3b8]/30 font-medium text-lg"
              />
            </motion.div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="relative h-16 px-8 rounded-3xl bg-white text-black font-bold text-lg overflow-hidden flex items-center justify-center gap-2 group shimmer-btn-light transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10">
                {status === "loading" ? <Loader2 className="animate-spin" /> : status === "success" ? "Joined" : "Join Waitlist"}
              </span>
              {status === "idle" && <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-medium text-[#f8fafc]"
              >
                Welcome to the workspace. We'll reach out shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bento-Lite Layout */}
        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

          <div className="md:col-span-2 p-10 rounded-[40px] bg-[#14121b]/40 backdrop-blur-3xl border border-white/5 flex flex-col justify-between min-h-[300px] text-left">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Infrastructure</h3>
              <p className="mt-4 text-lg text-[#94a3b8] max-w-md">Private models, SOC2 compliance, and dedicated compute for mission-critical swarms.</p>
            </div>
          </div>

          <div className="p-10 rounded-[40px] bg-[#2b2933]/20 border border-white/5 flex flex-col justify-between min-h-[300px] text-left">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Zero-Latency</h3>
              <p className="mt-4 text-lg text-[#94a3b8]">Real-time spatial visualization of every agent decision.</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
