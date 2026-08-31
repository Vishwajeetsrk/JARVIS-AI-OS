"use client";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];

export default function ParallaxHeroImagesDemo() {
  return (
    <div className="relative flex min-h-[40rem] w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 p-8 text-center text-white">
      <ParallaxHeroImages images={images} />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4 px-4">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] md:text-5xl">
          State of the art, cutting edge images, everywhere.
        </h1>
        <p className="max-w-md text-sm text-neutral-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] md:text-base">
          Move your mouse to see the parallax effect. Images at different depths
          move at different speeds.
        </p>
      </div>
    </div>
  );
}
