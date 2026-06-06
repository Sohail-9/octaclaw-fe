"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  color: string;
  pulse: number;
}

export const SpatialNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // AI Agent Nodes
    const agentLabels = [
      "Orchestrator",
      "Researcher",
      "Analyst",
      "Coder",
      "Writer",
      "Reviewer",
      "Database",
      "Executor",
    ];
    const colors = ["#8b5cf6", "#10b981", "#0ea5e9", "#f59e0b"];

    const nodes: Node[] = [];
    for (let i = 0; i < agentLabels.length; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 3,
        label: agentLabels[i],
        color: colors[i % colors.length],
        pulse: Math.random() * Math.PI,
      });
    }

    // Add extra background nodes to fill the network space
    const bgNodesCount = 15;
    for (let i = 0; i < bgNodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: 2,
        label: "",
        color: "#ffffff",
        pulse: 0,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Pulse signal particle tracker
    const signals: { x: number; y: number; tx: number; ty: number; progress: number; color: string }[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Update and draw background connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move nodes
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Interactivity with mouse pointer
        if (mouse.active) {
          const dx = mouse.x - n1.x;
          const dy = mouse.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 3000;
            n1.vx -= dx * force;
            n1.vy -= dy * force;
            // Cap speed
            const speed = Math.sqrt(n1.vx * n1.vx + n1.vy * n1.vy);
            if (speed > 1) {
              n1.vx = (n1.vx / speed) * 1;
              n1.vy = (n1.vy / speed) * 1;
            }
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (150 - dist) / 150 * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();

            // Randomly spawn communication signals
            if (Math.random() < 0.00015 && signals.length < 10) {
              signals.push({
                x: n1.x,
                y: n1.y,
                tx: n2.x,
                ty: n2.y,
                progress: 0,
                color: n1.label ? n1.color : "#ffffff",
              });
            }
          }
        }

        // Draw node
        n1.pulse += 0.015;
        const currentPulseRadius = n1.radius + Math.sin(n1.pulse) * (n1.label ? 2 : 0);

        ctx.fillStyle = n1.color;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.label ? currentPulseRadius : n1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow
        if (n1.label) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = n1.color;
          ctx.fillStyle = `rgba(${n1.color === "#8b5cf6" ? "139, 92, 246" : n1.color === "#10b981" ? "16, 185, 129" : n1.color === "#0ea5e9" ? "14, 165, 233" : "245, 158, 11"}, 0.15)`;
          ctx.beginPath();
          ctx.arc(n1.x, n1.y, currentPulseRadius * 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }

        // Node Label
        if (n1.label) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.font = "bold 9px var(--font-mono, monospace)";
          ctx.fillText(n1.label.toUpperCase(), n1.x + 12, n1.y + 3);
        }
      }

      // Update and draw signal pulses
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += 0.01;

        if (s.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }

        const currX = s.x + (s.tx - s.x) * s.progress;
        const currY = s.y + (s.ty - s.y) * s.progress;

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(currX, currY, 2, 0, Math.PI * 2);
        ctx.fill();

        // Glow on signal
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.beginPath();
        ctx.arc(currX, currY, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
