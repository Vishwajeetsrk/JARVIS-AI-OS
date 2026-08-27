import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "holographic" | "card" | "circle";
  shimmer?: boolean;
}

function Skeleton({ className, variant = "default", shimmer = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm",
        shimmer && "after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_2s_infinite] after:bg-gradient-to-r after:from-transparent after:via-cyan-500/10 after:to-transparent",
        variant === "circle" && "rounded-full",
        variant === "holographic" && "border-cyan-500/20 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
