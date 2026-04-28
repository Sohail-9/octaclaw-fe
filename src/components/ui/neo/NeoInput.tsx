"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const NeoInput = React.forwardRef<HTMLInputElement, NeoInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-sm font-black uppercase tracking-wider text-neo-stroke">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-neo-surface text-white border-2 border-neo-stroke rounded-none",
            "shadow-neo-sm focus:shadow-neo focus:translate-x-[-1px] focus:translate-y-[-1px]",
            "transition-all duration-75 outline-none placeholder:text-gray-500 font-bold uppercase text-xs tracking-widest",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NeoInput.displayName = "NeoInput";
