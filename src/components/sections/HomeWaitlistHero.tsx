"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

export default function HomeWaitlistHero() {
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
    <section id="waitlist" className="hero-glow relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#ded8f0]">
          OctaClaw private waitlist
        </p>

        <h1 className="mt-6 text-4xl sm:text-6xl leading-[1.05] font-semibold text-white">
          Your team. Your agents. One spatial environment.
        </h1>

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
            className="btn-primary inline-flex h-[50px] items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={18} />
            ) : status === "success" ? (
              "You are on the list"
            ) : (
              <>
                Join waitlist
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>


        {status === "error" && <p className="mt-2 text-sm text-[#b8b0d1]">Something failed. Please try again.</p>}
      </div>
    </section>
  );
}
