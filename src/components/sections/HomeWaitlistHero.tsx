"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        setMessage("Credentials verified. Already in queue.");
      } else {
        setMessage("Welcome to Octaclaw.");
      }
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      setMessage((error instanceof Error ? error.message : "Connection refused. Please try again."));
    }
  };

  return (
    <div className="relative w-full max-w-[420px] px-2">
      <form onSubmit={handleSubmit} className="relative z-20 w-full flex items-center bg-bg-surface border border-border-subtle rounded-full p-1.5 pl-6 transition-all duration-300 hover:border-border-focus focus-within:border-border-focus shadow-[0_0_30px_rgba(0,0,0,0.1)]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email to join waitlist"
          className="flex-1 bg-transparent text-lg text-text-main outline-none placeholder:text-text-muted font-medium min-w-0"
          disabled={status === "loading" || status === "success"}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading" || status === "success" || !email}
          className="ml-2 shrink-0 rounded-full bg-text-main hover:opacity-90 transition-all py-3.5 px-8 text-base font-semibold text-bg-base border border-border-subtle disabled:cursor-not-allowed disabled:opacity-60 z-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer-btn_2.5s_infinite_linear]" />
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                Join
              </motion.span>
            )}
            {status === "loading" && (
              <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5 relative z-10">
                <span className="h-2 w-2 rounded-full bg-[#0f172a] animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 rounded-full bg-[#0f172a] animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 rounded-full bg-[#0f172a] animate-pulse" style={{ animationDelay: "300ms" }} />
              </motion.div>
            )}
            {status === "success" && (
              <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                Joined
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`absolute -bottom-8 left-0 right-0 text-center text-sm font-medium ${status === "success" ? "text-[#81e6d9]" : "text-red-400"} font-mono`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
