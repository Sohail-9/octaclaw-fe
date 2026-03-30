"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Zap, Cpu } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type Node = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "agent" | "task" | "compute";
};

export default function HeroSection({
  primaryHref = "#waitlist",
  secondaryHref = "#gameplay",
  primaryLabel = "Join the Priority Waitlist",
  secondaryLabel = "Watch Demo",
}: {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const initialNodes: Node[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      type: i % 3 === 0 ? "agent" : i % 3 === 1 ? "compute" : "task",
    }));
    setNodes(initialNodes);

    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((node) => ({
          ...node,
          x: (node.x + node.vx + 100) % 100,
          y: (node.y + node.vy + 100) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* ── Background Spatial Infrastructure ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.08),transparent_70%)]" />
        
        {/* Animated Nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-40">
          {nodes.map((node, i) => (
            <g key={node.id}>
              {/* Connections */}
              {nodes.slice(i + 1).map((other) => {
                const dist = Math.hypot(node.x - other.x, node.y - other.y);
                if (dist < 25) {
                  return (
                    <motion.line
                      key={`${node.id}-${other.id}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${other.x}%`}
                      y2={`${other.y}%`}
                      stroke="var(--primary)"
                      strokeWidth="0.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: (1 - dist / 25) * 0.5 }}
                    />
                  );
                }
                return null;
              })}
              
              {/* Agent Node */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                fill={node.type === "agent" ? "var(--tertiary)" : "var(--primary)"}
                className="filter blur-[1px]"
              />
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="8"
                fill={node.type === "agent" ? "var(--tertiary)" : "var(--primary)"}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </g>
          ))}
        </svg>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full animate-float-orb" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 py-1.5 px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted glass-micro-border"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse" />
          Neural Workspace Live
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white font-heading leading-[0.95] text-balance"
        >
          Synthesize <br className="hidden sm:block" />
          <span className="text-vivid-gradient">
            Agents.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-xl sm:text-2xl text-text-muted leading-snug font-medium"
        >
          Orchestrate multi-agent swarms with zero-latency spatial reasoning. The next dimension of autonomous intelligence is here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
        >
          <LinkButton
            href={primaryHref}
            className="btn-premium flex items-center justify-center gap-3 text-lg"
          >
            <Zap size={22} className="relative z-10 fill-current" />
            <span className="relative z-10">{primaryLabel}</span>
          </LinkButton>
          
          <LinkButton
            href={secondaryHref}
            className="btn-premium-secondary flex items-center justify-center gap-3 text-lg"
          >
            <Cpu size={22} />
            {secondaryLabel}
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </LinkButton>
        </motion.div>
      </motion.div>

      {/* Floating Meta Data */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold pointer-events-none">
        <div>Coordinates: 42.02 / 12.89</div>
        <div>System: Stable</div>
        <div>Uptime: 99.99%</div>
      </div>
    </section>
  );
}

function LinkButton({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
