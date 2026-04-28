"use client";

import React, { useState } from "react";
import { NeoButton } from "@/components/ui/neo/NeoButton";
import { NeoInput } from "@/components/ui/neo/NeoInput";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="border-4 border-neo-primary bg-black p-6 shadow-neo overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-neo-primary/20" />
              <div className="font-mono text-[11px] space-y-2 uppercase">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-neo-primary">
                  [SYSTEM] Initializing Handshake...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-neo-primary">
                  [AUTH] Verifying Identity...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-neo-primary">
                  [NETWORK] Routing Swarm Access...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="mt-8 p-4 border-2 border-neo-primary bg-neo-primary/10 text-center"
                >
                  <span className="text-2xl font-black italic glitch-hover cursor-default text-neo-primary">
                    Access Granted
                  </span>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center text-[9px] text-neo-primary/60 mt-4"
                >
                  Welcome to the runtime. Check your inbox for briefing.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="mt-6 flex justify-center"
                >
                  <NeoButton
                    variant="outline"
                    size="sm"
                    className="border-neo-primary/20 text-neo-primary/60 hover:text-neo-primary"
                    onClick={() => setStatus("idle")}
                  >
                    Add another agent
                  </NeoButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-2 bg-neo-surface border-2 border-neo-stroke shadow-neo"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <NeoInput
                type="email"
                placeholder="Enter Ur Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-none shadow-none focus:translate-x-0 focus:translate-y-0 text-sm h-14"
              />
              <NeoButton
                type="submit"
                disabled={status === "loading"}
                className="h-14 md:w-auto w-full group"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Join <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </NeoButton>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-[10px] font-black uppercase tracking-widest ml-2">
                System Error. Try again.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
      <p className="mt-4 text-center text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
        Limited Slots Available
      </p>
    </div>
  );
}
