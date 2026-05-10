"use client";
import * as React from "react";

interface TextFlipProps {
  children: string;
  className?: string;
}

export function TextFlip({ children, className }: TextFlipProps) {
  return (
    <div
      className={`relative inline-block overflow-hidden h-[1.5em] align-bottom ${className}`}
    >
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block transition-transform duration-300 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </div>
  );
}
