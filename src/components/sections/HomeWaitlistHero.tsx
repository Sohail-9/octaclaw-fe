"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

export default function HomeWaitlistHero() {
  const [email, setEmail]     = useState("");
  const [focused, setFocused] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res  = await fetch("/api/waitlist", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed.");
      setStatus("success");
      setMessage(
        data.message === "Already on the waitlist"
          ? "Already in queue — we'll be in touch soon."
          : "You're in. Welcome to OctaClaw."
      );
      setEmail("");
    } catch (error: unknown) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Try again.");
    }
  };

  const triggerShimmer = () => {
    if (status === "loading" || status === "success" || !email) return;
    setShimmer(true);
    setTimeout(() => setShimmer(false), 600);
  };

  return (
    <div className="relative w-full flex flex-col gap-4">

      {/* Outer rotating gradient border */}
      <NoiseBackground
        containerClassName="w-full rounded-2xl p-[2px]"
        gradientColors={["rgb(124, 58, 237)", "rgb(5, 150, 105)", "rgb(250, 204, 21)"]}
        noiseIntensity={0.08}
        group={false}
      >
        <form
          onSubmit={handleSubmit}
          className="relative rounded-[14px] overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 4px 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,1)",
          }}
        >
          {/* Focus radial glow — fires when input is focused */}
          <AnimatePresence>
            {focused && (
              <motion.div
                key="focus-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 15% 50%, rgba(124,58,237,0.07) 0%, transparent 65%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Top reflection line */}
          <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)" }} />

          <div className="flex flex-col sm:flex-row items-stretch">

            {/* Input area */}
            <div className="flex items-center gap-3 px-4 py-3.5 flex-1 min-w-0">
              {/* Clay mail icon */}
              <motion.div
                animate={focused ? { scale: 1.08 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 clay-violet"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-transparent text-[14px] font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px rgba(255,255,255,0.01) inset",
                  WebkitTextFillColor: status === "success" ? "#059669" : "#09090b",
                  caretColor: "#7c3aed",
                }}
                disabled={status === "loading" || status === "success"}
              />

              {/* Typing cursor pulse when focused + empty */}
              <AnimatePresence>
                {focused && !email && (
                  <motion.div
                    key="cursor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [1, 0, 1] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-px h-4 bg-violet-500 flex-shrink-0"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Vertical divider */}
            <div className="hidden sm:block self-stretch w-px my-2.5"
              style={{ background: "rgba(0,0,0,0.06)" }} />
            <div className="block sm:hidden h-px mx-4"
              style={{ background: "rgba(0,0,0,0.06)" }} />

            {/* Submit button */}
            <div className="p-2 flex-shrink-0">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                onHoverStart={triggerShimmer}
                disabled={status === "loading" || status === "success" || !email}
                className="relative overflow-hidden w-full sm:w-auto rounded-xl py-2.5 px-6 text-[13px] font-bold tracking-tight disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap flex items-center justify-center gap-2"
                style={
                  status === "success"
                    ? {
                        background: "linear-gradient(145deg, #6ee7b7 0%, #34d399 50%, #059669 100%)",
                        boxShadow: "0 12px 32px rgba(5,150,105,0.40), 0 4px 10px rgba(5,150,105,0.24), inset 0 2px 6px rgba(255,255,255,0.45), inset 0 -2px 6px rgba(0,0,0,0.16)",
                        color: "#fff",
                      }
                    : {
                        background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
                        boxShadow: "0 12px 32px rgba(124,58,237,0.42), 0 4px 10px rgba(124,58,237,0.26), inset 0 2px 6px rgba(255,255,255,0.45), inset 0 -2px 6px rgba(0,0,0,0.20)",
                        color: "#fff",
                      }
                }
              >
                {/* Shimmer sweep */}
                <motion.span
                  key={shimmer ? "shimmer-on" : "shimmer-off"}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                  }}
                  initial={{ x: "-110%" }}
                  animate={shimmer ? { x: "110%" } : { x: "-110%" }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                />

                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle"
                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="relative flex items-center gap-2"
                    >
                      Get Early Access
                      <motion.svg
                        className="w-3.5 h-3.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.span>
                  )}
                  {status === "loading" && (
                    <motion.span key="loading"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span key={i}
                          className="w-1.5 h-1.5 rounded-full bg-white"
                          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span key="success"
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="flex items-center gap-2"
                    >
                      <motion.svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                      You&apos;re in!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span key="error"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Try again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </form>
      </NoiseBackground>

      {/* Status message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold ${
              status === "success"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {status === "success" && (
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust line */}
      <div className="flex items-center justify-center gap-3 text-[10px] font-medium text-zinc-400">
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          No spam
        </span>
        <span className="text-zinc-200">·</span>
        <span>Free during beta</span>
        <span className="text-zinc-200">·</span>
        <span>No credit card</span>
      </div>
    </div>
  );
}
