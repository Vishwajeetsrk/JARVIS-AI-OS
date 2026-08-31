"use client";
import React from "react";
import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemoThree() {
  return (
    <div className="flex h-[8rem] w-full items-center justify-center">
      <ImagesBadge
        text="Quick Preview"
        images={[
          "https://assets.aceternity.com/pro/agenforce-1.webp",
          "https://assets.aceternity.com/pro/agenforce-2.webp",
        ]}
        folderSize={{ width: 24, height: 18 }}
        teaserImageSize={{ width: 14, height: 10 }}
        hoverImageSize={{ width: 36, height: 24 }}
        hoverTranslateY={-28}
        hoverSpread={14}
      />
    </div>
  );
}

export { ImagesBadgeDemoThree as ImagesBadgeDemo3 };
