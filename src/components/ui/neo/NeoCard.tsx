"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "primary" | "secondary" | "dark" | "surface";
  padding?: "none" | "sm" | "md" | "lg";
}

export const NeoCard = ({
  className,
  variant = "white",
  padding = "md",
  children,
  ...props
}: NeoCardProps) => {
  const variants = {
    white: "bg-neo-bg text-neo-stroke", // Use adaptive theme tokens
    dark: "bg-neo-bg text-neo-stroke",
    surface: "bg-neo-surface text-neo-stroke",
    primary: "bg-neo-primary text-black", // Keep primary high-contrast
    secondary: "bg-neo-secondary text-neo-stroke",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-12",
  };

  return (
    <div
      className={cn(
        "border-2 border-neo-stroke rounded-none shadow-neo",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
