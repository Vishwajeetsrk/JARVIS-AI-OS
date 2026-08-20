import { useEffect, useRef, useState } from "react";
import { BG_IMAGE_2, SPOTLIGHT_R } from "../constants";
import type { CursorPoint } from "../hooks/useSpotlightTracking";

export function RevealLayer({ cursorPos }: { cursorPos: CursorPoint }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maskUrl, setMaskUrl] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x: cursorX, y: cursorY } = cursorPos;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    setMaskUrl(canvas.toDataURL());
  }, [cursorPos]);

  return (
    <>
      <canvas ref={canvasRef} className="hidden" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BG_IMAGE_2}')`,
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : undefined,
          maskImage: maskUrl ? `url(${maskUrl})` : undefined,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
    </>
  );
}
