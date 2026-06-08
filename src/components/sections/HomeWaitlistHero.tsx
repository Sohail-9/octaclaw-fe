"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

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
        throw new Error(data.error || "Request failed.");
      }

      setStatus("success");
      setMessage(
        data.message === "Already on the waitlist"
          ? "Already in queue — we'll be in touch soon."
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
    <div className="relative w-full flex flex-col gap-3">
      <NoiseBackground
        containerClassName="w-full rounded-2xl p-1.5 md:rounded-full"
        gradientColors={[
          "rgb(124, 58, 237)",
          "rgb(5, 150, 105)",
          "rgb(250, 204, 21)",
        ]}
        noiseIntensity={0.1}
        group={false}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 md:flex-row md:items-center bg-white/80 backdrop-blur-md rounded-xl md:rounded-full p-1.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 bg-transparent px-5 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 font-medium rounded-full"
            style={{
              WebkitBoxShadow: "0 0 0px 1000px rgba(255,255,255,0.01) inset",
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
            className="rounded-full bg-zinc-950 text-white py-3 px-7 text-[13px] font-bold tracking-tight disabled:cursor-not-allowed disabled:opacity-40 transition-colors whitespace-nowrap flex-shrink-0 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Get Early Access
                </motion.span>
              )}
              {status === "loading" && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
              {status === "success" && (
                <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Joined!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </NoiseBackground>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center text-xs font-medium tracking-wide ${
              status === "success" ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-zinc-400 font-medium tracking-wide text-center">
        No spam · Free during beta · No credit card required
      </p>
    </div>
  );
}
