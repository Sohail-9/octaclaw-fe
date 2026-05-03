"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AgentIDCard from "../ui/AgentIDCard";

export default function HomeWaitlistHero() {
  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setSavedEmail(email);
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
    <div className="relative w-full max-w-[440px] flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className={`relative z-20 w-full flex items-center bg-bg-surface border rounded-full p-2.5 pl-7 transition-all duration-300 ${isFocused ? "border-border-focus shadow-[0_0_0_3px_var(--border-subtle)]" : "border-border-subtle"
          }`}
      >
        <input
          type="email"
          value={email}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-lg text-text-main outline-none placeholder:text-text-muted/40 font-medium min-w-0"
          style={{
            WebkitBoxShadow: "0 0 0px 1000px var(--bg-surface) inset",
            WebkitTextFillColor: "var(--text-main)",
            transition: "background-color 5000s ease-in-out 0s",
          }}
          disabled={status === "loading" || status === "success"}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "loading" || status === "success" || !email}
          className="ml-2 shrink-0 rounded-full bg-text-main text-bg-base transition-all py-4 px-10 text-base font-bold disabled:cursor-not-allowed disabled:opacity-50 z-10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-base/10 to-transparent -translate-x-[150%] group-hover:animate-[shimmer-btn_2s_infinite_linear]" />

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                Join
              </motion.span>
            )}
            {status === "loading" && (
              <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5 relative z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-bg-base animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-bg-base animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-bg-base animate-pulse" style={{ animationDelay: "300ms" }} />
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
        {status === "success" && (
          <AgentIDCard
            email={savedEmail}
            onDismiss={() => setStatus("idle")}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <p className={`text-center text-[11px] font-mono font-bold tracking-widest uppercase ${status === "success" ? "text-brand-primary" : "text-red-400"
              }`}>
              {status === "success" && "[SUCCESS] "}
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
