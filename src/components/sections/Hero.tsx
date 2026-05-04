"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";
import DarioAgent from "../ui/DarioAgent";
import { useState, useEffect } from "react";

const providers = ["Anthropic", "OpenAI", "Gemini", "Groq", "Grok"];
const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

const useScrambleText = (text: string, delay: number = 0) => {
  const [display, setDisplay] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const interval = 30;
    const totalIterations = 15;
    
    setTimeout(() => {
      const timer = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration / (totalIterations / text.length)) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= totalIterations) {
          clearInterval(timer);
          setDisplay(text);
          setIsComplete(true);
        }
        iteration += 1;
      }, interval);
    }, delay);
  }, [text, delay]);

  return display;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  const line1 = useScrambleText("Multi-agent", 200);
  const line2 = useScrambleText("Orchestration", 600);

  return (
    <section id="waitlist" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden bg-bg-base transition-colors duration-500">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-bg-base" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-brand-secondary opacity-[0.15] dark:opacity-[0.1] blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-brand-primary opacity-[0.12] dark:opacity-[0.08] blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <motion.h1
          {...fadeUp(0.2)}
          className="text-center text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.95] text-text-main flex flex-col items-center sm:block"
        >
          <span className="inline-flex items-center gap-4 sm:gap-6 align-middle">
            <DarioAgent className="-ml-2 sm:-ml-4 sm:mr-2 scale-[0.5] sm:scale-[0.7] md:scale-[1]" state="run_right" />
            <span className="font-mono">{line1}</span>
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary font-mono">
            {line2}
          </span>
        </motion.h1>

        <motion.p 
          {...fadeUp(0.3)}
          className="mt-6 text-center text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed"
        >
          OctaClaw is a dependency-driven, governance-controlled multi-agent orchestration engine designed for verifiable, staged execution of complex goals via a managed task DAG.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-8 w-full flex flex-col items-center gap-6">
          <div className="w-full max-w-md">
            <HomeWaitlistHero />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 opacity-60">
            {providers.map((p) => (
              <span key={p} className="inline-flex items-center h-5 px-2 rounded-md border border-border-subtle bg-bg-surface text-[9px] font-bold text-text-muted">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
