"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-neo-primary text-black",
      secondary: "bg-neo-secondary text-neo-stroke",
      outline: "bg-transparent text-neo-stroke border-2 border-neo-stroke",
      white: "bg-neo-bg text-neo-stroke",
      dark: "bg-neo-surface text-neo-stroke",
    };

    const sizes = {
      sm: "px-4 py-2 text-[11px] tracking-widest",
      md: "px-6 py-3 text-sm tracking-widest",
      lg: "px-8 py-4 text-base tracking-widest",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative font-black uppercase",
          "border-2 border-neo-stroke rounded-none",
          "shadow-neo transition-all duration-75",
          "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-neo-sm",
          "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

NeoButton.displayName = "NeoButton";
