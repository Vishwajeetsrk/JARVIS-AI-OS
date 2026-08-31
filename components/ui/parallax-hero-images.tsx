"use client";
import React, { useEffect, useState, useMemo, memo } from "react";
import { cn } from "@/lib/utils";

type ImagePosition = {
  src: string;
  position:
    | "top-left"
    | "top-right"
    | "mid-left"
    | "mid-right"
    | "bottom-left"
    | "bottom-right"
    | "far-left"
    | "far-right";
  depth: number;
  delay: number;
};

const positionStyles: Record<
  ImagePosition["position"],
  { top: string; left?: string; right?: string }
> = {
  "top-left": { top: "8%", left: "4%" },
  "top-right": { top: "8%", right: "4%" },
  "mid-left": { top: "38%", left: "6%" },
  "mid-right": { top: "38%", right: "6%" },
  "bottom-left": { top: "68%", left: "4%" },
  "bottom-right": { top: "68%", right: "4%" },
  "far-left": { top: "52%", left: "2%" },
  "far-right": { top: "52%", right: "2%" },
};

const positionOrder: ImagePosition["position"][] = [
  "top-left",
  "top-right",
  "mid-left",
  "mid-right",
  "bottom-left",
  "bottom-right",
  "far-left",
  "far-right",
];

type DepthVariant = "default" | "edge-focus";

const depthValuesByVariant: Record<DepthVariant, number[]> = {
  default: [0.3, 0.35, 0.9, 0.85, 0.4, 0.45, 0.25, 0.2],
  "edge-focus": [0.85, 0.9, 0.3, 0.35, 0.8, 0.85, 0.4, 0.45],
};

export interface ParallaxHeroImagesProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  variant?: DepthVariant;
}

export const ParallaxHeroImages = ({
  images,
  className,
  imageClassName,
  variant = "default",
}: ParallaxHeroImagesProps) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const limitedImages = images.slice(0, 8);
    const depthValues = depthValuesByVariant[variant];
    return limitedImages.map((src, index) => ({
      src,
      position: positionOrder[index],
      depth: depthValues[index],
      delay: index * 0.12,
    }));
  }, [images, variant]);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const updateMouse = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMouse({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateMouse);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {positions.map((pos, index) => (
        <ParallaxImage
          key={`${pos.src}-${index}`}
          src={pos.src}
          position={pos.position}
          depth={pos.depth}
          delay={pos.delay}
          imageClassName={imageClassName}
          mouseX={mouse.x}
          mouseY={mouse.y}
        />
      ))}
    </div>
  );
};

interface ParallaxImageProps extends ImagePosition {
  imageClassName?: string;
  mouseX: number;
  mouseY: number;
}

const ParallaxImage = memo(function ParallaxImage({
  src,
  position,
  depth,
  imageClassName,
  mouseX,
  mouseY,
}: ParallaxImageProps) {
  const maxOffset = 45;
  const translateX = mouseX * maxOffset * depth;
  const translateY = mouseY * maxOffset * depth;
  const posStyle = positionStyles[position];

  return (
    <div
      className="absolute transition-transform duration-75 ease-out"
      style={{
        top: posStyle.top,
        left: posStyle.left,
        right: posStyle.right,
        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        zIndex: Math.round(depth * 10),
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn(
          "aspect-4/3 h-20 w-32 rounded-xl object-cover shadow-2xl border border-white/15 backdrop-blur-md sm:h-36 sm:w-52 md:h-48 md:w-72",
          imageClassName,
        )}
      />
    </div>
  );
});
