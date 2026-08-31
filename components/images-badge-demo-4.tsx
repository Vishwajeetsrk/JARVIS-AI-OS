"use client";
import React from "react";
import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemoFour() {
  return (
    <div className="flex h-[10rem] w-full items-center justify-center">
      <ImagesBadge
        text="Gallery View"
        images={[
          "https://assets.aceternity.com/pro/agenforce-1.webp",
          "https://assets.aceternity.com/pro/agenforce-2.webp",
          "https://assets.aceternity.com/pro/agenforce-3.webp",
        ]}
        hoverSpread={35}
        hoverRotation={20}
      />
    </div>
  );
}

export { ImagesBadgeDemoFour as ImagesBadgeDemo4 };
