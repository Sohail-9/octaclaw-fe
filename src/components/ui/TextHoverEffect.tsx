"use client";

import { useRef, useState } from "react";

export function TextHoverEffect({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const baseStyle: React.CSSProperties = {
    fontSize: "clamp(3.5rem, 10vw, 9rem)",
    background:
      "linear-gradient(135deg, rgba(139,92,246,0.55) 0%, rgba(196,181,253,0.32) 40%, rgba(196,181,253,0.26) 60%, rgba(52,211,153,0.52) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const hoverStyle: React.CSSProperties = {
    fontSize: "clamp(3.5rem, 10vw, 9rem)",
    background:
      "linear-gradient(135deg, #7c3aed 0%, #a78bfa 35%, #c4b5fd 60%, #10b981 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    WebkitMaskImage: `radial-gradient(circle 200px at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
    maskImage: `radial-gradient(circle 200px at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full select-none cursor-default"
      style={{ height: "clamp(4.5rem, 12vw, 9.5rem)" }}
    >
      {/* Base layer — muted gradient */}
      <p
        className="absolute inset-0 flex items-center justify-center font-heading font-black tracking-tight leading-none"
        style={baseStyle}
      >
        {text}
      </p>

      {/* Hover layer — vivid, revealed by cursor mask */}
      {hovered && (
        <p
          className="absolute inset-0 flex items-center justify-center font-heading font-black tracking-tight leading-none"
          style={hoverStyle}
        >
          {text}
        </p>
      )}
    </div>
  );
}
