import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { JarvisQuantumSpinner } from "./jarvis-loader";

export interface SpinnerProps extends React.ComponentProps<"svg"> {
  variant?: "default" | "quantum" | "glow";
  size?: "sm" | "md" | "lg" | number;
}

function Spinner({ className, variant = "default", size = "md", ...props }: SpinnerProps) {
  const pixelSize = typeof size === "number" ? size : size === "sm" ? 16 : size === "lg" ? 32 : 22;

  if (variant === "quantum") {
    return <JarvisQuantumSpinner size={pixelSize} className={className} />;
  }

  if (variant === "glow") {
    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <div className="absolute inset-0 rounded-full blur-sm bg-cyan-500/40 animate-pulse" />
        <Loader2Icon
          role="status"
          aria-label="Loading"
          className="animate-spin text-cyan-400 relative z-10"
          style={{ width: pixelSize, height: pixelSize }}
          {...props}
        />
      </div>
    );
  }

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("animate-spin text-cyan-400 shrink-0", className)}
      style={{ width: pixelSize, height: pixelSize }}
      {...props}
    />
  );
}

export { Spinner };
