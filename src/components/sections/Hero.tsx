"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Subtle Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 0 50 Q 25 45 50 50 T 100 50"
              stroke="white"
              strokeWidth="0.05"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <HomeWaitlistHero />
        </motion.div>
      </div>
    </section>
  );
}
