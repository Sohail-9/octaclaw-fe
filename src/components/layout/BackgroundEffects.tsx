"use client";

import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Mesh Gradient Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(124, 58, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(124, 58, 255, 0.12) 0%, transparent 40%)
          `,
          filter: "blur(60px)",
        }}
      />

      {/* Floating Orbs */}
      <Orb color="rgba(124, 58, 255, 0.4)" size="40vw" top="-10%" left="-10%" duration="25s" delay="0s" />
      <Orb color="rgba(0, 245, 255, 0.2)" size="35vw" top="40%" right="-5%" duration="30s" delay="-5s" />
      <Orb color="rgba(168, 85, 247, 0.3)" size="30vw" bottom="-5%" left="20%" duration="28s" delay="-10s" />

      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

const Orb = ({ color, size, top, left, right, bottom, duration, delay }: {
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration: string;
  delay: string;
}) => (
  <div
    className="absolute rounded-full mix-blend-screen"
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      filter: "blur(80px)",
      opacity: 0.6,
      animation: `float-orb ${duration} ease-in-out infinite alternate ${delay}`,
    }}
  />
);

export default BackgroundEffects;
