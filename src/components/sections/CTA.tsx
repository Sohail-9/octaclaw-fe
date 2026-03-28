"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Mail } from "lucide-react";

export default function CTASection() {
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
    <section id="waitlist" className="relative overflow-hidden py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-150 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass-card border-white/10 p-8 sm:p-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-tertiary">
            <div className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
            Limited Beta Slots Remaining
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl font-black text-white font-heading tracking-tight leading-none">
            Synthesize the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-tertiary">Future.</span>
          </h2>

          <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto font-medium">
            Early members get direct access to the founders and can shape the roadmap before public launch.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 group flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-tertiary transition-colors" size={20} />
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@nebula.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full h-16 rounded-2xl border-b-2 border-white/10 bg-white/5 pl-12 pr-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-tertiary transition-all duration-500 font-medium text-lg"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="relative group/btn h-16 px-10 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={24} />
              ) : status === "success" ? (
                "You are synced"
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-cyber-mint font-bold tracking-tight">
              Synchronization complete. Welcome to the workspace.
            </motion.p>
          )}
          {status === "error" && <p className="mt-6 text-red-400 font-medium">Uplink failed. Please retry connection.</p>}
        </motion.div>
      </div>
    </section>
  );
}
