import { cn } from "@/lib/utils";

export function JarvisStar({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function JarvisWordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <JarvisStar size={size} className="text-primary" />
      <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
        Jarvis
      </span>
    </span>
  );
}
