"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface TerminalProps {
  children?: React.ReactNode;
  className?: string;
  sequence?: boolean;
  startOnView?: boolean;
}

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = false,
}: TerminalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(!startOnView);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border bg-black",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">
          {isInView ? children : null}
        </code>
      </pre>
    </div>
  );
};

export const TypingAnimation = ({
  children,
  className,
  duration = 50,
  delay = 0,
  as: Component = "span",
}: {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < children.length) {
        setDisplayedText(children.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, duration);
    return () => clearInterval(interval);
  }, [children, duration, started]);

  return (
    // @ts-ignore - dynamic component type
    <Component ref={elementRef as any} className={cn("text-sm", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </Component>
  );
};

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <span className={cn("grid text-sm font-normal tracking-tight", className)}>
      {children}
    </span>
  );
};
