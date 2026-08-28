import type { ReactNode } from "react";

type JoinWaitlistPillProps = {
  className?: string;
  children?: ReactNode;
};

export function JoinWaitlistPill({
  className = "",
  children = "Join Waitlist",
}: JoinWaitlistPillProps) {
  return (
    <span className={`waitlist-pill-outer inline-flex ${className}`}>
      <span className="waitlist-pill-streak" aria-hidden />
      <span className="waitlist-pill-inner inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-2.5">
        {children}
      </span>
    </span>
  );
}
