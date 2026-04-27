"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitBranch, Cuboid, Zap } from "lucide-react";

const cards = [
  {
    title: "Orchestrate",
    description: "Seamlessly orchestrate complex multi-agent workflows with precision. Move beyond linear execution into autonomous parallel processing.",
    icon: GitBranch,
  },
  {
    title: "Spatial Control",
    description: "Real-time visual debugging in a spatial workspace. Inspect agent nodes as they execute, tracing every token and decision path instantly.",
    icon: Cuboid,
  },
  {
    title: "Cost Optimization",
    description: "A three-layer engine reducing token usage by up to 50-60%. Maximize agent intelligence while minimizing operational overhead.",
    icon: Zap,
  }
];

export default function CoreFeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative px-4 pb-24 z-20 flex justify-center w-full">
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] w-full"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative h-full min-h-[220px] rounded-2xl bg-bg-surface overflow-hidden"
          >
            {/* The animated beam border */}
            <div className="absolute inset-0 z-0">
               <div className="absolute -inset-[1px] rounded-2xl border border-border-subtle bg-transparent" />
               <div 
                 className="absolute inset-[1px] rounded-[15px] z-10 bg-bg-card" 
               />
            </div>

            {/* Hover Spotlight matching the mouse position relative to the container */}
            <div
               className="pointer-events-none absolute z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
               style={{
                 left: mousePosition.x - (idx * 400),
                 display: "none"
               }}
            />
            
            {/* Real Per-Card Spotlight */}
            <CardSpotlight>
              <div className="relative z-30 flex flex-col items-start p-8 h-full bg-bg-card hover:bg-bg-card-hover transition-colors rounded-[15px] overflow-hidden border border-border-subtle">
                
                 {/* Internal top gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-text-main/10 to-transparent" />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <card.icon className="w-6 h-6 text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-medium text-text-main mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {card.title}
                </h3>
                
                <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </CardSpotlight>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Subcomponent for handling localized mouse spotlight
function CardSpotlight({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative w-full h-full p-[1px] rounded-2xl overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
