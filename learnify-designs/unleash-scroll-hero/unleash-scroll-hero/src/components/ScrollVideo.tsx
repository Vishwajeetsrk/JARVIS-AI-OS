import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const SEEK_THROTTLE_MS = 80;

type ScrollVideoProps = {
  src: string;
  className?: string;
};

export function ScrollVideo({ src, className = "" }: ScrollVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    let hls: Hls | null = null;
    let currentTarget = 0;
    let seekPending = false;
    let lastSeekAt = 0;
    let rafId = 0;

    const doSeek = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const now = performance.now();
      if (now - lastSeekAt < SEEK_THROTTLE_MS) return;
      lastSeekAt = now;
      const target = currentTarget;
      if (!video.seeking) {
        video.currentTime = target;
      } else {
        seekPending = true;
      }
    };

    const scheduleSeek = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(doSeek);
    };

    const onSeeked = () => {
      if (seekPending) {
        seekPending = false;
        doSeek();
      }
    };

    video.addEventListener("seeked", onSeeked);

    const onCanPlay = () => setLoading(false);
    video.addEventListener("canplay", onCanPlay);

    if (Hls.isSupported()) {
      hls = new Hls({
        maxBufferLength: 120,
        maxMaxBufferLength: 600,
        maxBufferSize: 200 * 1024 * 1024,
        startPosition: 0,
        capLevelToPlayerSize: false,
        startLevel: -1,
        autoStartLoad: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const maxLevel = hls!.levels.length - 1;
        if (maxLevel >= 0) {
          hls!.currentLevel = maxLevel;
          hls!.startLevel = maxLevel;
        }
      });
      hls.on(Hls.Events.FRAG_BUFFERED, (_e, data) => {
        const bufferedEnd = data.frag.start + data.frag.duration;
        if (video.duration) {
          setProgress(Math.round((bufferedEnd / video.duration) * 100));
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    const scrollSt = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (!video.duration) return;
        currentTarget = self.progress * video.duration;
        scheduleSeek();
      },
    });

    const onMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(wrapper, {
        x: moveX * -30,
        y: moveY * -30,
        duration: 1.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("canplay", onCanPlay);
      scrollSt.kill();
      hls?.destroy();
    };
  }, [src]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-sans text-2xl text-white">Loading… {progress}%</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        ref={wrapperRef}
        className={`fixed top-0 left-0 w-full h-full z-0 scale-[1.05] origin-center ${className}`}
      >
        <video
          ref={videoRef}
          className="h-full w-full scale-[1.35] object-cover"
          muted
          playsInline
          crossOrigin="anonymous"
          preload="auto"
        />
      </div>
    </>
  );
}
