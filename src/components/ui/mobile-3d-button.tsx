import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Mobile3DButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "neon";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Mobile3DButton({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  ...props
}: Mobile3DButtonProps) {
  const variantStyles = {
    primary:
      "bg-gradient-to-b from-cyan-400 to-blue-600 text-white shadow-[0_6px_0_#0284c7,0_12px_16px_rgba(6,182,212,0.3)] active:shadow-[0_2px_0_#0284c7,0_4px_8px_rgba(6,182,212,0.2)]",
    secondary:
      "bg-gradient-to-b from-slate-800 to-slate-950 text-slate-200 border border-white/10 shadow-[0_6px_0_#0f172a,0_10px_14px_rgba(0,0,0,0.4)] active:shadow-[0_2px_0_#0f172a,0_4px_6px_rgba(0,0,0,0.3)]",
    danger:
      "bg-gradient-to-b from-rose-500 to-red-700 text-white shadow-[0_6px_0_#b91c1c,0_12px_16px_rgba(239,68,68,0.3)] active:shadow-[0_2px_0_#b91c1c,0_4px_8px_rgba(239,68,68,0.2)]",
    neon:
      "bg-gradient-to-b from-purple-500 to-indigo-700 text-white shadow-[0_6px_0_#4338ca,0_12px_16px_rgba(168,85,247,0.3)] active:shadow-[0_2px_0_#4338ca,0_4px_8px_rgba(168,85,247,0.2)]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-semibold rounded-xl",
    md: "px-5 py-3 text-sm font-bold rounded-2xl",
    lg: "px-7 py-4 text-base font-bold rounded-2xl",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Optional Web Haptic feedback on mobile devices
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(20);
    }
    onClick?.(e);
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 4 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider transition-all select-none focus:outline-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...(props as any)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
}
