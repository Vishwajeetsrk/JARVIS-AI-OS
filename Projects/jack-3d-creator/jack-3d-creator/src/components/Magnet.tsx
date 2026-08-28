import type { MouseEvent, ReactNode } from "react";
import { useCallback, useRef, useState } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className = "",
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const inX = e.clientX >= rect.left - padding && e.clientX <= rect.right + padding;
      const inY = e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding;
      if (inX && inY) {
        setTransition(activeTransition);
        setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
      } else {
        setTransition(inactiveTransition);
        setTransform("translate3d(0, 0, 0)");
      }
    },
    [activeTransition, inactiveTransition, padding, strength],
  );

  const onMouseLeave = useCallback(() => {
    setTransition(inactiveTransition);
    setTransform("translate3d(0, 0, 0)");
  }, [inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform, transition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
