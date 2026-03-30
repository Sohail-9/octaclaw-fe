"use client";

import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Mesh Gradient Base - Deep atmospheric nebula */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(123, 44, 191, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(106, 11, 170, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(45, 0, 80, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 90%, rgba(76, 0, 125, 0.1) 0%, transparent 40%)
          `,
          filter: "blur(80px)",
        }}
      />

      {/* Static Atmospheric Glows (replaces floating orbs) */}
      <div
        className="absolute w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(123, 44, 191, 0.3) 0%, transparent 60%)",
          filter: "blur(120px)",
          top: "-20%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(74, 0, 127, 0.4) 0%, transparent 60%)",
          filter: "blur(100px)",
          bottom: "-10%",
          right: "-10%",
        }}
      />

      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default BackgroundEffects;
