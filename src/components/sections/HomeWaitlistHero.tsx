"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, ShieldCheck, Sparkles, Timer } from "lucide-react";

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
    <section id="waitlist" className="hero-glow relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 px-6">
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />
      <div className="glow-orb-3" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
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
          className="mt-7 text-4xl sm:text-6xl leading-[1.08] sm:leading-[1.03] font-medium tracking-[-0.01em] text-white"
        >
          Your team. Your agents. One spatial environment.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#d9d2ee]"
        >
          Design, run, and debug multi-agent DAG execution on a shared canvas — with full visibility and collaboration
          built in.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-9 max-w-2xl mx-auto"
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

          <p className="mt-3 text-sm text-[#b9b2cf]">
            No spam. One early-access invite when it&apos;s your turn.
          </p>
        </motion.form>

        {status === "error" && <p className="mt-2 text-sm text-[#b8b0d1]">Something failed. Please try again.</p>}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          <article className="oc-card p-6">
            <Sparkles className="text-[#c084fc]" size={22} />
            <h3 className="mt-3 text-lg font-semibold text-white">A calmer way to build agents</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Keep your team and runs in one spatial view — fewer tabs, more shared context.
            </p>
          </article>
          <article className="oc-card p-6">
            <Timer className="text-[#a855f7]" size={22} />
            <h3 className="mt-3 text-lg font-semibold text-white">Trace every node, instantly</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Debug step-by-step execution with the right level of detail at the moment you need it.
            </p>
          </article>
          <article className="oc-card p-6">
            <ShieldCheck className="text-[#7c3aff]" size={22} />
            <h3 className="mt-3 text-lg font-semibold text-white">Built for production workflows</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c9c2df]">
              Collaborate, iterate, and ship with guardrails — not brittle scripts and guesswork.
            </p>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b9b2cf]">Designed for</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Product teams", "Dev tool builders", "Automation studios", "Ops & growth", "AI engineers"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-[#e7e1f6]"
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
