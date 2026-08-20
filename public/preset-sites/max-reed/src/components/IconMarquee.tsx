import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  Box,
  Brush,
  Camera,
  Chrome,
  Figma,
  Framer,
  Layers,
  Palette,
  PenTool,
  Type,
  Wand2,
} from "lucide-react";

const ICONS: LucideIcon[] = [
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
];

const STROKE = 1.5;

function IconTile({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl md:h-12 md:w-12">
      <Icon className="h-5 w-5 text-white/80" strokeWidth={STROKE} />
    </div>
  );
}

function MarqueeRow({ direction }: { direction: "left" | "right" }) {
  const animClass = direction === "left" ? "marquee-left" : "marquee-right";
  const tiles = [...ICONS, ...ICONS];

  return (
    <div className="overflow-hidden">
      <div className={`marquee-track ${animClass}`}>
        {tiles.map((Icon, i) => (
          <IconTile key={`${direction}-${i}`} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export function IconMarquee() {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <MarqueeRow direction="left" />
      <MarqueeRow direction="right" />
    </div>
  );
}
