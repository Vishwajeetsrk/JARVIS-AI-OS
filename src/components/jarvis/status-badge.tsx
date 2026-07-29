export type JarvisStatus = "ready" | "processing" | "needs-input";

export function StatusBadge({ status }: { status: JarvisStatus }) {
  const label =
    status === "ready" ? "READY" : status === "processing" ? "PROCESSING" : "NEEDS INPUT";
  const dotClass =
    status === "ready" ? "status-dot status-ready"
    : status === "processing" ? "status-processing"
    : "status-dot status-amber";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span className={dotClass} />
      {label}
    </span>
  );
}
