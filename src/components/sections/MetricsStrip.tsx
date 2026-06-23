"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

function Counter({ prefix, num, suffix, delay }: { prefix: string; num: number; suffix: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, num, {
      duration: 1.8,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, count, num, prefix, suffix, delay]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

function InfinityReveal({ delay }: { delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.4, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      ∞
    </motion.span>
  );
}

const metrics = [
  {
    prefix: "<", num: 150 as number | null, suffix: "ms",
    label: "DAG planning latency",
    clayClass: "clay-violet",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    prefix: "", num: 100 as number | null, suffix: "+",
    label: "Concurrent agents",
    clayClass: "clay-emerald",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    prefix: "", num: 8 as number | null, suffix: "+",
    label: "Model providers",
    clayClass: "clay-sky",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    prefix: "", num: 100 as number | null, suffix: "%",
    label: "Deterministic replay",
    clayClass: "clay-amber",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function MetricsStrip() {
  return (
    <section className="relative">
      <div
        style={{
          background: "rgba(255,255,255,0.60)",
          backdropFilter: "blur(32px) saturate(200%)",
          WebkitBackdropFilter: "blur(32px) saturate(200%)",
          borderTop: "1px solid rgba(255,255,255,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.55)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 2px 24px rgba(0,0,0,0.04)",
        }}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center text-center gap-4 rounded-2xl p-6 neo-surface"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 320, damping: 14 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${m.clayClass}`}
                >
                  {m.icon}
                </motion.div>
                <div>
                  <div className="text-3xl font-bold font-heading text-zinc-950 tracking-tight mb-1">
                    {m.num !== null ? (
                      <Counter prefix={m.prefix} num={m.num} suffix={m.suffix} delay={i * 0.12} />
                    ) : (
                      <InfinityReveal delay={i * 0.12} />
                    )}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    {m.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
