import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Cyber3DCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  glowColor?: "cyan" | "purple" | "emerald" | "amber" | "rose";
}

export function Cyber3DCard({
  children,
  className,
  containerClassName,
  glowColor = "cyan",
}: Cyber3DCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const glowStyles = {
    cyan: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 shadow-cyan-500/20",
    purple: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/40 shadow-purple-500/20",
    emerald: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 shadow-emerald-500/20",
    amber: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 shadow-amber-500/20",
    rose: "from-rose-500/20 via-red-500/10 to-transparent border-rose-500/40 shadow-rose-500/20",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 20; // -10 to 10 deg
    const yPct = (mouseY / height - 0.5) * -20; // -10 to 10 deg
    setRotateX(yPct);
    setRotateY(xPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn("relative [perspective:1000px]", containerClassName)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-slate-950/80 p-6 backdrop-blur-xl transition-shadow duration-300 shadow-xl",
          glowStyles[glowColor],
          className
        )}
      >
        {/* Aceternity Glowing Background Blur */}
        <div
          className={cn(
            "pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-40",
            glowColor === "cyan" && "bg-cyan-500/20",
            glowColor === "purple" && "bg-purple-500/20",
            glowColor === "emerald" && "bg-emerald-500/20",
            glowColor === "amber" && "bg-amber-500/20",
            glowColor === "rose" && "bg-rose-500/20"
          )}
        />
        <div className="relative z-10 [transform:translateZ(20px)]">{children}</div>
      </motion.div>
    </div>
  );
}
