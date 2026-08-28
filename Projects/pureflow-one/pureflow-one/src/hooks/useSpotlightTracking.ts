import { useEffect, useRef, useState } from "react";
import { SPOTLIGHT_R } from "../constants";

export type CursorPoint = { x: number; y: number };
export type GridOffset = { x: number; y: number };

function isGalleryPreview(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get("draftlyGallery") === "1";
  } catch {
    return false;
  }
}

export function useSpotlightTracking(heroRef: React.RefObject<HTMLElement | null>) {
  const mouseRef = useRef<CursorPoint>({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const smoothRef = useRef<CursorPoint>({ ...mouseRef.current });
  const gridOffsetRef = useRef<GridOffset>({ x: 0, y: 0 });
  const galleryPhaseRef = useRef(0);

  const [cursorPos, setCursorPos] = useState<CursorPoint>({ ...smoothRef.current });
  const [gridOffset, setGridOffset] = useState<GridOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const gallery = isGalleryPreview();

    const onMouseMove = (e: MouseEvent) => {
      if (gallery) return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf = 0;
    const tick = () => {
      if (gallery) {
        galleryPhaseRef.current += 0.018;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const t = galleryPhaseRef.current;
        mouseRef.current = {
          x: w * 0.5 + Math.cos(t) * w * 0.22,
          y: h * 0.5 + Math.sin(t * 0.85) * h * 0.18,
        };
      }

      const mouse = mouseRef.current;
      const smooth = smoothRef.current;
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      const rect = heroRef.current?.getBoundingClientRect();
      if (rect && rect.width > 0 && rect.height > 0) {
        const cx = (smooth.x - rect.left) / rect.width - 0.5;
        const cy = (smooth.y - rect.top) / rect.height - 0.5;
        const go = gridOffsetRef.current;
        go.x += (cx * 16 - go.x) * 0.06;
        go.y += (cy * 16 - go.y) * 0.06;
        setGridOffset({ x: go.x, y: go.y });
      }

      setCursorPos({ x: smooth.x, y: smooth.y });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [heroRef]);

  return { cursorPos, gridOffset, spotlightRadius: SPOTLIGHT_R };
}
