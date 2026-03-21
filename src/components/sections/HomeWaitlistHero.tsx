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
    <section id="waitlist" className="hero-glow relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 px-6">
      <div className="glow-orb-1 opacity-60" />
      <div className="glow-orb-2 opacity-60" />
      <div className="glow-orb-3 opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[500px] bg-[#7c3aff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left pt-8 lg:pt-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-[#efeaff] shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_10px_30px_rgba(124,58,255,0.14)]"
            >
              OctaClaw private waitlist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-7 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl leading-[1.08] sm:leading-[1.05] font-medium tracking-tight text-white"
            >
              Your team. Your agents. One spatial environment.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-6 mb-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#d9d2ee] leading-relaxed"
            >
              Teams running AI agents today are flying blind. No visibility, no collaboration, no way to know what broke until a user reports it. OctaClaw changes that.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="space-y-3 mb-10 text-left max-w-xl mx-auto lg:mx-0 hidden sm:block"
            >
              {[
                "Visualize complex multi-agent DAGs instantly",
                "Approve or reject agent actions in real-time"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#c9c2df] text-base">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-[#7c3aff] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 rounded-2xl border border-white/15 bg-white/5 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/5 px-4 py-0 text-white placeholder-[#a59cbf] leading-none focus:outline-none focus:ring-2 focus:ring-[#a855f7]/35"
                />

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-primary inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-0 leading-none"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : status === "success" ? (
                    "You are on the list"
                  ) : (
                    <>
                      Join waitlist
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 text-sm text-[#b9b2cf] text-center lg:text-left">
                No spam. One early-access invite when it&apos;s your turn.
              </p>
            </motion.form>

            {status === "error" && <p className="mt-2 text-sm text-[#b8b0d1] text-center lg:text-left">Something failed. Please try again.</p>}
          </motion.div>

          {/* Visual Canvas Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <MiniOfficeDemo mode="multiplayer" />
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          <article className="oc-card p-6">
            <Sparkles className="text-[#c084fc]" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-white">A calmer way to build agents</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Keep your team and runs in one spatial view — fewer tabs, more shared context.
            </p>
          </article>
          <article className="oc-card p-6">
            <Timer className="text-[#a855f7]" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-white">Trace every node, instantly</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Debug step-by-step execution with the right level of detail at the moment you need it.
            </p>
          </article>
          <article className="oc-card p-6">
            <ShieldCheck className="text-[#7c3aff]" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-white">Built for production workflows</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Collaborate, iterate, and ship with guardrails — not brittle scripts and guesswork.
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
