"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";
import Grainient from "@/components/ui/Grainient";

export default function CTASection() {
  return (
    <section id="waitlist" className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16 md:px-6 md:py-32 rounded-t-[1.5rem] md:rounded-t-[2rem]">

      {/* Grainient WebGL background */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
        <Grainient
          color1="#9f7aea"
          color2="#34d399"
          color3="#e0f2fe"
          timeSpeed={0.1}
          zoom={1.5}
          grainAmount={0.08}
          className="w-full h-full"
        />
      </div>

      {/* Sliding gradient blobs — mirrors hero */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "-40%", opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-[10%] z-[1] hidden w-[480px] h-[480px] md:block rounded-full blur-[60px]"
        style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.5) 0%, transparent 70%)" }}
      />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: "40%", opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="pointer-events-none absolute bottom-[15%] right-0 z-[1] hidden w-[420px] h-[420px] md:block rounded-full blur-[60px]"
        style={{ background: "radial-gradient(ellipse at center, rgba(52,211,153,0.4) 0%, transparent 70%)" }}
      />

      <div className="relative z-20 flex max-w-3xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 font-serif text-3xl font-normal tracking-tight text-zinc-950 md:mb-10 md:text-6xl leading-[1.1]"
        >
          Build your next AI system with&nbsp;OctaClaw.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl px-1 md:px-0"
        >
          <HomeWaitlistHero />
        </motion.div>
      </div>
    </section>
  );
}
