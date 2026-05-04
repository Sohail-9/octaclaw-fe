"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export type DarioState = 
  | "idle" 
  | "run_right" 
  | "run_left" 
  | "wave" 
  | "jump" 
  | "failed" 
  | "waiting" 
  | "running" 
  | "review";

interface DarioAgentProps {
  state?: DarioState;
  className?: string;
  scale?: number;
}

const STATE_CONFIG: Record<DarioState, { row: number; frames: number; loop: boolean }> = {
  idle: { row: 0, frames: 6, loop: true },
  run_right: { row: 1, frames: 8, loop: true },
  run_left: { row: 2, frames: 8, loop: true },
  wave: { row: 3, frames: 4, loop: true },
  jump: { row: 4, frames: 5, loop: false },
  failed: { row: 5, frames: 8, loop: false },
  waiting: { row: 6, frames: 6, loop: true },
  running: { row: 7, frames: 6, loop: true },
  review: { row: 8, frames: 6, loop: true },
};

const FRAME_WIDTH = 192;
const FRAME_HEIGHT = 208;

export default function DarioAgent({ 
  state = "idle", 
  className,
  scale = 1
}: DarioAgentProps) {
  const config = STATE_CONFIG[state];
  
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ 
        width: FRAME_WIDTH * scale, 
        height: FRAME_HEIGHT * scale,
      }}
    >
      <div
        key={state} // Force re-mount on state change to reset non-looping animations
        className="absolute top-0 left-0"
        style={{
          backgroundImage: "url('/agents/dario.png')",
          backgroundSize: `${FRAME_WIDTH * 8 * scale}px ${FRAME_HEIGHT * 9 * scale}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          backgroundPositionY: -(config.row * FRAME_HEIGHT * scale) + "px",
          width: FRAME_WIDTH * 8 * scale,
          height: FRAME_HEIGHT * scale,
          animation: `play-sprite ${config.frames * 0.1}s steps(${config.frames - 1}, end) ${config.loop ? "infinite" : "1"}`,
          "--sprite-end": -(config.frames - 1) * FRAME_WIDTH * scale,
        } as React.CSSProperties}
      />
    </div>
  );
}
