"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
        throw new Error(data.error || "Request failed.");
      }

      setStatus("success");
      setMessage(
        data.message === "Already on the waitlist"
          ? "Already in queue — we'll be in touch."
          : "You're in. Welcome to OctaClaw."
      );
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className={`relative z-20 w-full flex items-center rounded-full p-1.5 pl-6 transition-all duration-300 ${isFocused
            ? "shadow-[0_0_0_2px_rgba(139,92,246,0.15)] bg-zinc-50 border border-violet-500/40"
            : "bg-zinc-100/50 border border-zinc-200/80"
          }`}
      >
        <input
          type="email"
          value={email}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-base text-zinc-950 outline-none placeholder:text-zinc-400 font-medium min-w-0"
          style={{
            WebkitBoxShadow: "0 0 0px 1000px transparent inset",
            WebkitTextFillColor: "#09090b",
            caretColor: "#8b5cf6",
          }}
          disabled={status === "loading" || status === "success"}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "loading" || status === "success" || !email}
          className="ml-2 shrink-0 rounded-full bg-zinc-950 text-white py-3.5 px-8 text-[13px] font-bold tracking-tight disabled:cursor-not-allowed disabled:opacity-40 relative overflow-hidden group transition-all duration-300 hover:bg-zinc-900"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:animate-[shimmer-btn_1.5s_infinite_linear]" />
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                Get Early Access
              </motion.span>
            )}
            {status === "loading" && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1 relative z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: "300ms" }} />
              </motion.div>
            )}
            {status === "success" && (
              <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Joined
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center text-xs font-medium tracking-wide ${status === "success" ? "text-emerald-600" : "text-red-600"
              }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
