"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Lens = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
}: {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  position?: { x: number; y: number };
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [localIsHovering, setLocalIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

  const isHovering = hovering !== undefined ? hovering : localIsHovering;
  const setIsHovering = setHovering !== undefined ? setHovering : setLocalIsHovering;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.58 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute overflow-hidden rounded-full border border-neutral-200 shadow-xl dark:border-neutral-800"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: isStatic ? position.x - lensSize / 2 : mousePosition.x - lensSize / 2,
              top: isStatic ? position.y - lensSize / 2 : mousePosition.y - lensSize / 2,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div
                  style={{
                    width: containerRef.current?.offsetWidth,
                    height: containerRef.current?.offsetHeight,
                    transform: `translate(${-mousePosition.x + lensSize / 2}px, ${-mousePosition.y + lensSize / 2}px) scale(${1})`,
                  }}
                  className="flex items-center justify-center"
                >
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
