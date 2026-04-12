"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    } catch (error: unknown) {
      setStatus("error");
      setMessage((error instanceof Error ? error.message : "Connection refused. Please try again."));
    }
  };

  return (
    <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden font-sans px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="relative z-20 w-full">
          <div className="group relative h-14 w-full rounded-full border border-black/25 bg-black/8 p-1 backdrop-blur-xl transition-all duration-300 hover:border-black/40 focus-within:border-black/55 focus-within:bg-black/12 dark:border-white/15 dark:bg-black/45 dark:hover:border-white/30 dark:focus-within:border-white/45 dark:focus-within:bg-black/55">
            <div className="pointer-events-none absolute -inset-[1px] rounded-full bg-gradient-to-r from-black/30 via-black/12 to-black/30 opacity-70 blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 dark:from-white/14 dark:via-white/6 dark:to-white/14" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-full w-full rounded-full bg-transparent pl-5 pr-36 text-sm text-black/85 outline-none transition-colors duration-300 placeholder:text-black/45 dark:text-white dark:placeholder:text-white/50"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success" || !email}
              className="absolute right-1 top-1 bottom-1 min-w-[118px] rounded-full border border-white/60 bg-white/90 px-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                    Join <ArrowRight size={14} />
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "300ms" }} />
                  </motion.div>
                )}
                {status === "success" && (
                  <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center">
                    Joined
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </form>

        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-2 text-xs font-medium ${status === "success" ? "text-text-muted" : "text-error"} font-mono`}
            >
              <span className="text-secondary">$</span> {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
