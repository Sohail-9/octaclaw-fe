"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function MouseGlowGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const webkitMaskImage = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      black 0%,
      transparent 100%
    )
  `;
  
  const maskImage = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(0,0,0,0.15) 0%,
      transparent 100%
    )
  `;

  const orbTop = useMotionTemplate`calc(${mouseY}px - 300px)`;
  const orbLeft = useMotionTemplate`calc(${mouseX}px - 300px)`;

  return (
    <div
      className="absolute inset-0 group h-full w-full bg-black flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Base Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center top"
        }}
      />
      
      {/* Interactive Glowing Grid */}
      {mounted && (
        <motion.div
          className="absolute inset-0 pointer-events-none duration-300 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            backgroundPosition: "center top",
            WebkitMaskImage: webkitMaskImage,
            maskImage: maskImage,
          }}
        />
      )}

      {/* Soft tracking orb */}
      {mounted && (
        <motion.div
           className="absolute pointer-events-none duration-300 opacity-0 group-hover:opacity-100 transition-opacity"
           style={{
             width: "600px",
             height: "600px",
             top: orbTop,
             left: orbLeft,
             background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
             mixBlendMode: "screen",
           }}
        />
      )}
      
      <div className="absolute top-[-20%] w-[100vw] h-[60vh] bg-primary/5 blur-[120px] rounded-[100%] opacity-60" />
    </div>
  );
}
