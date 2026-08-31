"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src = "https://assets.aceternity.com/linear-demo.webp",
  showGradient = false,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + scrollProgress * (isMobile ? 0.2 : 0.4);
  const rotateX = Math.max(-28 + scrollProgress * 28, -28);
  const translateY = scrollProgress * 150;
  const textOpacity = Math.max(1 - scrollProgress * 3, 0);

  return (
    <div
      ref={ref}
      className="flex min-h-[140vh] shrink-0 transform flex-col items-center justify-start py-12 [perspective:1000px] md:py-32"
    >
      <div
        style={{
          transform: `translateY(${scrollProgress * 60}px)`,
          opacity: textOpacity,
          transition: "opacity 0.2s ease-out",
        }}
        className="mb-12 text-center text-2xl font-bold text-neutral-800 md:text-4xl dark:text-white"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </div>

      {/* Lid */}
      <div className="relative [perspective:1000px]">
        <div
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) translateY(${translateY * 0.1}px)`,
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out",
          }}
          className="relative h-[18rem] w-[26rem] rounded-2xl bg-[#010101] p-2 shadow-2xl sm:h-[22rem] sm:w-[34rem] md:h-[26rem] md:w-[42rem]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#171717]">
            <img
              src={src}
              alt="Macbook Screen"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Base area */}
      <div
        style={{
          transform: `scale(${scale * 0.9})`,
          transition: "transform 0.1s ease-out",
        }}
        className="relative -mt-2 h-[18rem] w-[28rem] overflow-hidden rounded-2xl bg-neutral-200 shadow-2xl sm:h-[22rem] sm:w-[36rem] md:h-[24rem] md:w-[44rem] dark:bg-[#272729]"
      >
        {/* above keyboard bar */}
        <div className="relative h-6 w-full">
          <div className="absolute inset-x-0 mx-auto h-3 w-[80%] rounded-b-md bg-[#050505]" />
        </div>
        <div className="relative flex px-4">
          <div className="mx-auto h-full w-[8%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[84%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[8%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-2 h-20 w-[36%] rounded-xl bg-neutral-300 dark:bg-neutral-800"
      style={{
        boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.2) inset",
      }}
    />
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 rounded-md bg-[#050505] p-1.5 shadow-inner">
      {/* Row 1 */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        {["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "⏻"].map((k, i) => (
          <KBtn key={i} className="flex-1 text-[7px]">{k}</KBtn>
        ))}
      </div>
      {/* Row 2 */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        {["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"].map((k, i) => (
          <KBtn key={i} className={k === "delete" ? "w-10 text-[7px]" : "flex-1 text-[8px]"}>{k}</KBtn>
        ))}
      </div>
      {/* Row 3 */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        {["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"].map((k, i) => (
          <KBtn key={i} className={k === "tab" ? "w-8 text-[7px]" : "flex-1 text-[8px]"}>{k}</KBtn>
        ))}
      </div>
      {/* Row 4 */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        {["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"].map((k, i) => (
          <KBtn key={i} className={k === "caps" || k === "return" ? "w-10 text-[7px]" : "flex-1 text-[8px]"}>{k}</KBtn>
        ))}
      </div>
      {/* Row 5 */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        {["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"].map((k, i) => (
          <KBtn key={i} className={k === "shift" ? "w-12 text-[7px]" : "flex-1 text-[8px]"}>{k}</KBtn>
        ))}
      </div>
      {/* Row 6 */}
      <div className="flex w-full shrink-0 gap-[2px]">
        {["fn", "ctrl", "opt", "cmd", " ", "cmd", "opt", "◀", "▲/▼", "▶"].map((k, i) => (
          <KBtn key={i} className={k === " " ? "flex-grow-[4] text-[7px]" : "flex-1 text-[7px]"}>{k}</KBtn>
        ))}
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("rounded-[3px] bg-white/[0.12] p-[0.5px]", className)}>
      <div
        className="flex h-5 w-full items-center justify-center rounded-[2.5px] bg-[#0A090D] font-mono text-neutral-300 shadow-inner"
        style={{
          boxShadow: "0px -0.5px 1px 0 #0D0D0F inset, -0.5px 0px 1px 0 #0D0D0F inset",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-32 w-full gap-[2px] px-[0.5px] opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
};
