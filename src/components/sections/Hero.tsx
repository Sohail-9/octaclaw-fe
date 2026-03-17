"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Network } from "lucide-react";

/* ─── Animated node-network canvas ─────────────────────────────── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  label?: string;
}

const NODE_LABELS = ["Agent", "GPT-4", "Claude", "Router", "Planner", "Tool", "Memory", "Output"];
const NODE_COLORS = ["#9F67FF", "#60A5FA", "#a78bfa", "#93c5fd", "#7C3AED", "#3B82F6"];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    if (prefersReducedMotion.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function initNodes() {
      const count = Math.min(18, Math.floor((width * height) / 28000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 2,
        color: NODE_COLORS[i % NODE_COLORS.length],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        label: Math.random() > 0.4 ? NODE_LABELS[i % NODE_LABELS.length] : undefined,
      }));
    }

    function drawFrame(t: number) {
      ctx!.clearRect(0, 0, width, height);

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = width < 768 ? 160 : 220;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            const grd = ctx!.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            grd.addColorStop(0, nodes[i].color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
            grd.addColorStop(1, nodes[j].color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
            ctx!.beginPath();
            ctx!.strokeStyle = grd;
            ctx!.lineWidth = 0.8;
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const glowRadius = n.r * (3.5 + Math.sin(n.pulse) * 1.2);

        // Outer glow
        const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius * 3.5);
        grd.addColorStop(0, n.color + "55");
        grd.addColorStop(1, n.color + "00");
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, glowRadius * 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = n.color;
        ctx!.shadowBlur = 12;
        ctx!.shadowColor = n.color;
        ctx!.fill();
        ctx!.shadowBlur = 0;

        // Label pill
        if (n.label && width > 480) {
          const labelAlpha = 0.5 + Math.sin(n.pulse) * 0.12;
          ctx!.save();
          ctx!.globalAlpha = labelAlpha;
          ctx!.font = "10px Inter, sans-serif";
          const tw = ctx!.measureText(n.label).width;
          const px = 7, py = 4;
          const lx = n.x - tw / 2 - px;
          const ly = n.y - n.r - 22;
          const lw = tw + px * 2;
          const lh = 18;
          // pill bg
          ctx!.fillStyle = "rgba(11,11,15,0.75)";
          ctx!.beginPath();
          ctx!.roundRect(lx, ly, lw, lh, 6);
          ctx!.fill();
          // pill border
          ctx!.strokeStyle = n.color + "55";
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
          // text
          ctx!.fillStyle = "#e2e8f0";
          ctx!.fillText(n.label, n.x - tw / 2, ly + 13);
          ctx!.restore();
        }
      }

      animId = requestAnimationFrame(drawFrame);
    }

    resize();
    initNodes();
    animId = requestAnimationFrame(drawFrame);

    const ro = new ResizeObserver(() => { resize(); initNodes(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.75 }}
    />
  );
}

/* ─── Floating stat card ────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
  reduceMotion?: boolean;
}

function StatCard({ icon, label, value, className = "", delay = 0, reduceMotion = false }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-xl px-4 py-3 flex items-center gap-3 ${className}`}
      style={reduceMotion ? undefined : { animation: `float-slow ${4 + delay}s ease-in-out infinite` }}
    >
      <div className="text-purple-400">{icon}</div>
      <div>
        <div className="text-xs text-[#64748B] font-medium">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </motion.div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */
export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = !!shouldReduceMotion;

  const FADE_UP: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: shouldReduceMotion ? 0.01 : 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      {/* ── Background canvas ── */}
      <NetworkCanvas />

      {/* ── Glow blobs ── */}
      <div
        className="glow-purple"
        style={{ width: 700, height: 700, top: "-15%", left: "-10%", opacity: 0.6 }}
      />
      <div
        className="glow-blue"
        style={{ width: 600, height: 600, top: "10%", right: "-8%", opacity: 0.5 }}
      />
      <div
        className="glow-purple"
        style={{ width: 500, height: 500, bottom: "-5%", left: "30%", opacity: 0.35 }}
      />

      {/* ── Radial vignette fade from center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #0B0B0F 80%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-24 pb-16">

        {/* Headline */}
        <div className="flex flex-col items-center gap-1">
          <motion.h1
            custom={0}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            The Spatial Workspace
          </motion.h1>
          <motion.h1
            custom={1}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-gradient"
            style={{ fontFamily: "var(--font-space)" }}
          >
            for AI Collaboration
          </motion.h1>
        </div>

        <motion.p
          custom={2}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="text-sm sm:text-base text-[#cbd5f5] max-w-2xl"
        >
          A visual workspace to design, connect, and run AI agents as a team.
        </motion.p>

        {/* Subtext */}
        <motion.p
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="max-w-xl text-base sm:text-lg text-[#94a3b8] leading-relaxed"
        >
          Design and explore AI workflows in a visual workspace.
          Build intelligent workflows for the{" "}
          <span className="text-white font-medium">next generation of teams</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-3 pt-2"
        >
          <a
            href="#waitlist"
            id="hero-join-waitlist"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Join Waitlist
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          custom={6}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-5 text-xs text-[#64748B] pt-1"
        >
          {["Private beta", "Early access", "Limited seats"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Floating stat cards ── */}
      <div className="absolute left-[4%] top-[32%] hidden lg:block">
        <StatCard
          icon={<Network size={16} />}
          label="Status"
          value="Private beta"
          delay={1.0}
          reduceMotion={reduceMotion}
        />
      </div>
      <div className="absolute right-[4%] top-[28%] hidden lg:block">
        <StatCard
          icon={<Zap size={16} />}
          label="Access"
          value="Limited seats"
          delay={1.2}
          reduceMotion={reduceMotion}
        />
      </div>
      <div className="absolute left-[6%] bottom-[22%] hidden xl:block">
        <StatCard
          icon={<Sparkles size={16} />}
          label="Models supported"
          value="Your preferred LLMs"
          delay={1.4}
          reduceMotion={reduceMotion}
        />
      </div>

      {/* ── Bottom horizon fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#475569] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#7C3AED] to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            style={{ height: "100%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
