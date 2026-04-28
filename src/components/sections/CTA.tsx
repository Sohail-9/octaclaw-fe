"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

export default function CTASection() {
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

      if (!res.ok) throw new Error(data.error || "Failed");

      setStatus("success");
      setMessage(
        data.message === "Already on the waitlist"
          ? "You're already on the list."
          : "You're in. We'll be in touch."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32 px-6 border-t border-border-subtle">
      <div className="max-w-2xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Limited Beta Seats
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-text-main mb-5"
        >
          Ship with AI agent teams
          <br />
          <span className="text-text-muted">before anyone else.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-muted text-base leading-relaxed mb-12"
        >
          Early access members get direct access to the founders and help shape
          the product before public launch.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@startup.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1 h-12 rounded-xl border border-border-subtle bg-bg-surface px-5 text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-border-focus transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success" || !email}
            className="btn-premium h-12 gap-2 px-6 text-sm rounded-xl"
          >
            {status === "loading" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : status === "success" ? (
              "You're in"
            ) : (
              <>
                Get Early Access
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </motion.form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-sm font-medium ${
              status === "success" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
}
