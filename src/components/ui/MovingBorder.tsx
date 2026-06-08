"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 3000,
  className,
  containerClassName,
  borderGradient,
  rx = "16",
  ry = "16",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderGradient?: string;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null!);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength?.();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v)?.y ?? 0
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className={cn("relative p-[1px] rounded-2xl overflow-hidden", containerClassName)}>
      <div className="absolute inset-0 rounded-[inherit]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
            width: "160px",
            height: "160px",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                borderGradient ||
                "radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(16,185,129,0.4) 40%, transparent 70%)",
              filter: "blur(16px)",
              opacity: 0.8,
            }}
          />
        </motion.div>
      </div>

      {/* Static border */}
      <div className="absolute inset-0 rounded-[inherit] border border-zinc-200/80" />

      {/* Content */}
      <div className={cn("relative z-10 h-full rounded-[inherit]", className)}>
        {children}
      </div>
    </div>
  );
}
