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
    <section id="waitlist" className="relative overflow-hidden py-16 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="oc-card p-8 sm:p-12 text-center"
        >
          <p className="inline-flex rounded-full border border-[#7c3aff]/40 bg-[#7c3aff]/12 px-3 py-1 text-xs text-[#d9ccff]">
            Limited intake for this batch
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            Get in before this round closes
          </h2>

          <p className="mt-4 text-[#c9c2df] max-w-2xl mx-auto">
            Early members get direct access to the founders and can shape the roadmap before public launch.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-[#a59cbf] focus:outline-none focus:ring-2 focus:ring-[#a855f7]/35"
            />

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary inline-flex h-[50px] items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={18} />
              ) : status === "success" ? (
                "You are on the list"
              ) : (
                <>
                  Reserve my spot
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {status === "success" && <p className="mt-4 text-sm text-[#d9ccff]">Check your inbox for the confirmation email.</p>}
          {status === "error" && <p className="mt-4 text-sm text-[#b8b0d1]">Something failed. Please try again.</p>}
        </motion.div>
      </div>
    </section>
  );
}
