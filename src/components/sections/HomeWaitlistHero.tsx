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
    <div className="relative w-full max-w-[420px] px-2 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-[10px] tracking-[0.4em] text-white/40 mb-6 uppercase font-medium"
      >
        Early Access
      </motion.div>
      <form 
        onSubmit={handleSubmit} 
        className={`relative z-20 w-full flex items-center bg-white/[0.03] backdrop-blur-xl border rounded-full p-2.5 pl-7 transition-all duration-700 ${
          isFocused ? "border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.08)]" : "border-white/10"
        }`}
      >
        {/* Pulsing inner glow when focused */}
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full bg-white/[0.06] animate-pulse pointer-events-none"
            />
          )}
        </AnimatePresence>

        <input
          type="email"
          value={email}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/20 font-medium min-w-0 autofill:bg-transparent"
          style={{ 
            WebkitBoxShadow: "0 0 0px 1000px transparent inset",
            WebkitTextFillColor: "white",
            transition: "background-color 5000s ease-in-out 0s"
          }}
          disabled={status === "loading" || status === "success"}
        />
        <motion.button
          type="submit"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255,255,255,0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "loading" || status === "success" || !email}
          className="ml-2 shrink-0 rounded-full bg-white hover:bg-white transition-all py-4 px-10 text-base font-bold text-black disabled:cursor-not-allowed disabled:opacity-50 z-10 relative overflow-hidden group"
        >
          {/* Liquid shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer-btn_2s_infinite_linear]" />
          
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                Join
              </motion.span>
            )}
            {status === "loading" && (
              <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1.5 relative z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" style={{ animationDelay: "300ms" }} />
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
            className={`absolute -bottom-10 left-0 right-0 text-center text-[10px] font-medium tracking-[0.1em] ${status === "success" ? "text-white/80" : "text-red-400"} uppercase`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
