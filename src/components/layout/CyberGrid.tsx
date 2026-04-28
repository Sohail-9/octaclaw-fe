"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CyberGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-neo-bg">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(var(--color-neo-stroke) 1px, transparent 1px), linear-gradient(90deg, var(--color-neo-stroke) 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Interactive Pulse / Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.15] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-neo-primary) 0%, transparent 70%)",
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Second Glow Layer (Secondary Color) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.1] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-neo-secondary) 0%, transparent 70%)",
          left: springX,
          top: springY,
          translateX: "-30%",
          translateY: "-30%",
        }}
      />
    </div>
  );
};
