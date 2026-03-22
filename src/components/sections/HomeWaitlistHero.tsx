"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, ShieldCheck, Sparkles, Timer, Activity, BrainCircuit, User, Database, CheckCircle2 } from "lucide-react";
import MiniOfficeDemo from "@/components/sections/MiniOfficeDemo";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    <section id="waitlist" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#a855f7] shadow-sm"
            >
              <Sparkles size={14} />
              Private Beta Access
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading"
            >
              Your team. Your agents. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                One spatial environment.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 mb-10 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-text-muted leading-relaxed"
            >
              Teams running AI agents today are flying blind. OctaClaw provides the visibility and collaboration layer needed to ship production-ready agentic workflows.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-2xl border border-white/10 shadow-2xl">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="w-full h-12 bg-transparent px-4 text-white placeholder-white/30 outline-none"
                />

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-primary group h-12 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : status === "success" ? (
                    "Joined"
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>

          {/* Visual Canvas Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
            <div className="glass-card p-2 rounded-2xl border border-white/5 relative z-10">
              <MiniOfficeDemo mode="multiplayer" />
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <article className="glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <BrainCircuit className="text-primary-light" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">A calmer way to build agents</h3>
            <p className="mt-4 text-text-muted leading-relaxed">
              Keep your team and runs in one spatial view — fewer tabs, more shared context for complex multi-agent runs.
            </p>
          </article>
          
          <article className="glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Activity className="text-primary-light" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Trace every node, instantly</h3>
            <p className="mt-4 text-text-muted leading-relaxed">
              Debug step-by-step execution with a spatial timeline. See exactly what each agent is thinking and doing.
            </p>
          </article>
          
          <article className="glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-primary-mid/10 flex items-center justify-center mb-6">
              <ShieldCheck className="text-primary-mid" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Built for production reliability</h3>
            <p className="mt-4 text-text-muted leading-relaxed">
              Collaborate on mission-critical agentic workflows with confidence. Real-time approval gates and observability.
            </p>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b9b2cf]">Designed for</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Product teams", "Dev tool builders", "Automation studios", "Ops & growth", "AI engineers"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs text-[#e7e1f6]"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
