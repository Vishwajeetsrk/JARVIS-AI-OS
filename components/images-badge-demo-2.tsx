"use client";
import React from "react";
import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemoTwo() {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <ImagesBadge
        text="Introducing Aceternity UI Pro"
        images={[
          "https://assets.aceternity.com/pro/agenforce-2.webp",
          "https://assets.aceternity.com/pro/minimal-3-min.webp",
          "https://assets.aceternity.com/pro/bento-4.png",
        ]}
        folderSize={{ width: 48, height: 36 }}
        teaserImageSize={{ width: 40, height: 28 }}
        hoverImageSize={{ width: 140, height: 108 }}
        hoverTranslateY={-110}
        hoverSpread={50}
      />
    </div>
  );
}

export { ImagesBadgeDemoTwo as ImagesBadgeDemo2 };
