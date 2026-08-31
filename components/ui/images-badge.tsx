"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ImagesBadgeProps {
  text: string;
  images: string[];
  className?: string;
  /** Optional link URL */
  href?: string;
  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;
  /** Folder dimensions { width, height } in pixels */
  folderSize?: { width: number; height: number };
  /** Image dimensions when teased (peeking) { width, height } in pixels */
  teaserImageSize?: { width: number; height: number };
  /** Image dimensions when hovered { width, height } in pixels */
  hoverImageSize?: { width: number; height: number };
  /** How far images translate up on hover in pixels */
  hoverTranslateY?: number;
  /** How far images spread horizontally on hover in pixels */
  hoverSpread?: number;
  /** Rotation angle for fanned images on hover in degrees */
  hoverRotation?: number;
}

export function ImagesBadge({
  text,
  images,
  className,
  href,
  target,
  folderSize = { width: 32, height: 24 },
  teaserImageSize = { width: 20, height: 14 },
  hoverImageSize = { width: 48, height: 32 },
  hoverTranslateY = -35,
  hoverSpread = 20,
  hoverRotation = 15,
}: ImagesBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Limit to max 3 images
  const displayImages = images.slice(0, 3);

  // Calculate folder tab dimensions proportionally
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex cursor-pointer items-center gap-3 select-none [perspective:1000px] [transform-style:preserve-3d]",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Folder Container */}
      <div
        className="relative"
        style={{
          width: folderSize.width,
          height: folderSize.height,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Folder Back */}
        <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-amber-400 to-amber-500 shadow-sm dark:from-amber-500 dark:to-amber-600">
          {/* Folder Tab */}
          <div
            className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
            style={{
              top: -tabHeight * 0.65,
              width: tabWidth,
              height: tabHeight,
            }}
          />
        </div>

        {/* Images that pop out */}
        {displayImages.map((image, index) => {
          const totalImages = displayImages.length;

          // Calculate rotation based on index
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;

          // Hover positions - fan out
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;

          // Teaser positions - slight peek from folder
          const teaseY = -4 - (totalImages - 1 - index) * 1;
          const teaseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3;

          const currentX = isHovered ? hoverX : 0;
          const currentY = isHovered ? hoverY : teaseY;
          const currentRotate = isHovered ? baseRotation : teaseRotation;
          const currentWidth = isHovered ? hoverImageSize.width : teaserImageSize.width;
          const currentHeight = isHovered ? hoverImageSize.height : teaserImageSize.height;

          return (
            <div
              key={index}
              className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 transition-all duration-300 ease-out dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
              style={{
                transform: `translateX(calc(-50% + ${currentX}px)) translateY(${currentY}px) rotate(${currentRotate}deg)`,
                width: `${currentWidth}px`,
                height: `${currentHeight}px`,
                zIndex: 10 + index,
                transitionDelay: `${index * 30}ms`,
              }}
            >
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}

        {/* Folder Front (flattens on hover) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-amber-300 to-amber-400 shadow-sm transition-transform duration-300 ease-out dark:from-amber-400 dark:to-amber-500"
          style={{
            transform: isHovered
              ? "rotateX(-45deg) scaleY(0.8)"
              : "rotateX(-25deg) scaleY(1)",
            transformStyle: "preserve-3d",
            zIndex: 20,
          }}
        >
          {/* Folder line detail */}
          <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/50 dark:bg-amber-300/50" />
        </div>
      </div>

      {/* Text */}
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {text}
      </span>
    </Component>
  );
}

export default ImagesBadge;
