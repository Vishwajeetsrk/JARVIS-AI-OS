export type JarvisStatus = "ready" | "processing" | "needs-input";

export function StatusBadge({ status }: { status: JarvisStatus }) {
  const label =
    status === "ready" ? "READY" : status === "processing" ? "PROCESSING" : "NEEDS INPUT";
  const dotClass =
    status === "ready" ? "status-dot status-ready"
    : status === "processing" ? "status-dot status-processing"
    : "status-dot status-amber";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      {status === "processing" ? (
        <svg viewBox="0 0 24 16" className="ecg-line h-3.5 w-6" aria-hidden="true">
          <polyline points="0,8 7,8 10,2 14,14 17,8 24,8" />
        </svg>
      ) : (
        <span className={dotClass} />
      )}
      {label}
    </span>
  );
}
