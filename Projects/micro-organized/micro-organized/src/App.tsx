import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";
const OVERLAY_IMG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260507_181851_f7a6e930-087d-4ce3-978d-f982e804b7df.png&w=1280&q=85";

const MAX_CAPTURE_WIDTH = 960;
const BOOMERANG_FPS = 30;

type VFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
};

function drawSlice(
  ctx: CanvasRenderingContext2D,
  frame: HTMLCanvasElement,
  cardIndex: number,
  panelCount: number,
  cw: number,
  ch: number,
) {
  const fw = frame.width;
  const fh = frame.height;
  const displayAspect = (cw * panelCount) / ch;
  const frameAspect = fw / fh;

  let sx: number;
  let sy: number;
  let sw: number;
  let sh: number;

  if (frameAspect > displayAspect) {
    sh = fh;
    sw = fh * displayAspect;
    sy = 0;
    sx = (fw - sw) / 2;
  } else {
    sw = fw;
    sh = fw / displayAspect;
    sx = 0;
    sy = (fh - sh) / 2;
  }

  const sliceW = sw / panelCount;
  const sliceX = sx + sliceW * cardIndex;
  ctx.drawImage(frame, sliceX, sy, sliceW, sh, 0, 0, cw, ch);
}

function Orb({ className, color }: { className: string; color: string }) {
  return (
    <div
      className={`absolute pointer-events-none z-10 rounded-full mix-blend-screen blur-[20px] ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      aria-hidden
    />
  );
}

function ThreePanelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRefs = [
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
  ];
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const [framesReady, setFramesReady] = useState(false);
  const [panelCount, setPanelCount] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setPanelCount(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;

      const scale = Math.min(1, MAX_CAPTURE_WIDTH / vw);
      const w = Math.round(vw * scale);
      const h = Math.round(vh * scale);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, w, h);
      frames.push(canvas);
    };

    const vfcVideo = video as VFCVideo;
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === "function";

    let rafId = 0;
    const rafLoop = () => {
      captureFrame();
      if (capturing) rafId = requestAnimationFrame(rafLoop);
    };

    const vfcLoop = () => {
      captureFrame();
      if (capturing && vfcVideo.requestVideoFrameCallback) {
        vfcVideo.requestVideoFrameCallback(vfcLoop);
      }
    };

    const onEnded = () => {
      capturing = false;
      if (frames.length > 0) {
        framesRef.current = frames;
        setFramesReady(true);
      }
    };

    const onLoaded = () => {
      video.play().catch(() => {});
      if (hasVFC) {
        vfcVideo.requestVideoFrameCallback!(vfcLoop);
      } else {
        rafId = requestAnimationFrame(rafLoop);
      }
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    if (video.readyState >= 1) onLoaded();

    return () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!framesReady) return;
    const frames = framesRef.current;
    if (frames.length === 0) return;

    let index = 0;
    let direction = 1;
    let last = performance.now();
    const interval = 1000 / BOOMERANG_FPS;
    let rafId = 0;

    const render = (now: number) => {
      if (now - last >= interval) {
        last = now;
        const frame = frames[index]!;

        for (let i = 0; i < panelCount; i++) {
          const canvas = canvasRefs[i].current;
          if (!canvas) continue;
          const cw = canvas.clientWidth;
          const ch = canvas.clientHeight;
          if (!cw || !ch) continue;

          if (canvas.width !== cw || canvas.height !== ch) {
            canvas.width = cw;
            canvas.height = ch;
          }

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          drawSlice(ctx, frame, i, panelCount, cw, ch);
        }

        index += direction;
        if (index >= frames.length - 1) {
          index = frames.length - 1;
          direction = -1;
        } else if (index <= 0) {
          index = 0;
          direction = 1;
        }
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [framesReady, panelCount]);

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute h-px w-px opacity-0"
        style={{ left: -9999, top: -9999 }}
      />

      <div className="flex min-h-0 flex-1 gap-2 p-2 lg:p-5">
        <div className="relative flex-1 overflow-hidden rounded-[22px]">
          <canvas ref={canvasRefs[0]} className="absolute inset-0 h-full w-full" />
          <Orb
            className="left-[16%] top-[14%] h-[100px] w-[100px]"
            color="rgba(255,255,255,0.70)"
          />
        </div>

        <div className="relative hidden flex-1 overflow-hidden rounded-[22px] sm:block">
          <canvas ref={canvasRefs[1]} className="absolute inset-0 h-full w-full" />
          <Orb
            className="left-1/2 top-[8%] h-[72px] w-[72px] -translate-x-1/2"
            color="rgba(200,215,255,0.55)"
          />
          <div
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
            style={{
              width: 130,
              height: 225,
              boxShadow: "0 0 0 1.5px rgba(255,255,255,0.10)",
            }}
          >
            <img src={OVERLAY_IMG} alt="" className="h-full w-full object-cover object-center" />
          </div>
        </div>

        <div className="relative hidden flex-1 overflow-hidden rounded-[22px] sm:block">
          <canvas ref={canvasRefs[2]} className="absolute inset-0 h-full w-full" />
          <Orb
            className="right-[10%] top-[20%] h-[110px] w-[110px]"
            color="rgba(185,210,235,0.55)"
          />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div
      className="flex h-screen w-screen flex-col overflow-hidden"
      style={{
        backgroundColor: "#0E1114",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <header className="flex shrink-0 items-center justify-between px-7 py-7">
        <span
          className="text-2xl font-semibold tracking-tight text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          micro
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-full border border-white bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            Join the Waitlist
          </button>
        </div>
      </header>

      <main
        className="relative mx-2 mb-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[32px]"
        style={{ backgroundColor: "#030404" }}
      >
        <ThreePanelVideo />

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 260,
            background:
              "linear-gradient(to top, rgba(3,4,4,0.88) 0%, rgba(3,4,4,0.50) 45%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4 p-6 pb-10 md:flex-row md:items-end md:justify-between md:gap-0 md:p-8 md:pb-14">
          <div className="pointer-events-auto flex flex-col gap-4">
            <p className="max-w-[280px] text-sm leading-relaxed text-white/70">
              An all-in-one tool for email, CRM, project management and more that automatically
              organizes itself.
            </p>
            <button
              type="button"
              className="self-start rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#ffffff", color: "#030404" }}
            >
              Join the Waitlist
            </button>
          </div>

          <div className="flex flex-col md:items-end">
            <h1
              className="text-white md:text-right"
              style={{
                fontSize: "clamp(52px, 10vw, 110px)",
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Organized.
            </h1>
            <p className="text-base italic tracking-wide text-white/60 md:text-right">
              So you don&apos;t have to be.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
