"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

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
    <section id="waitlist" className="relative py-32 px-6 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto glass p-10 md:p-16 rounded-[2rem] border border-white/5 text-center shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden">
        {/* Glow effect inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-[#7C3AED]/20 to-transparent blur-2xl" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Join OctaClaw <span className="text-gradient">Early Access</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Be among the first builders exploring spatial AI workflows. Help shape an early spatial canvas for AI systems.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-[#7C3AED] transition-all bg-opacity-10 backdrop-blur-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary w-full sm:w-auto h-[52px] px-8 flex-shrink-0 flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={18} />
              ) : status === "success" ? (
                "Added to Waitlist!"
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-[#a78bfa] text-sm"
            >
                Thank you! We’ll be in touch soon.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-[#94a3b8] text-sm"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-3 md:gap-6 text-sm text-[#64748B]"
          >
            {["Early access", "Private beta", "Limited seats"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-[#3B82F6]/50 hidden sm:block" />}
                <span>{tag}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
