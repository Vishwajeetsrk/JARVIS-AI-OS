export default function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-2 border-white ${className}`}
      aria-hidden
    >
      <span className="h-[38%] w-[38%] rounded-full bg-white" />
    </span>
  );
}
