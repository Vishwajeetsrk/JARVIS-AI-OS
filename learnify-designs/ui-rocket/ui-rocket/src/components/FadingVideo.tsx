import { useEffect, useRef } from "react";

type FadingVideoProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

/** rAF opacity crossfade loop for hero / dashboard clips */
export function FadingVideo({ src, className = "", style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fadeTo = (targetOpacity: number, duration = 500) => {
    const video = videoRef.current;
    if (!video) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const startOpacity = video.style.opacity ? parseFloat(video.style.opacity) : 0;
    const startTime = performance.now();

    const anim = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const newOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = newOpacity.toFixed(4);
      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(anim);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(anim);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.style.opacity = "0";
    fadingOutRef.current = false;

    const handleLoadedData = () => {
      video.style.opacity = "0";
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => fadeTo(1, 500)).catch(() => fadeTo(1, 500));
      }
    };

    const handleTimeUpdate = () => {
      const { duration, currentTime } = video;
      if (!Number.isNaN(duration) && duration > 0) {
        const remaining = duration - currentTime;
        if (!fadingOutRef.current && remaining <= 0.55 && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0, 500);
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              fadingOutRef.current = false;
              fadeTo(1, 500);
            })
            .catch(() => {});
        }
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    if (video.readyState >= 2) handleLoadedData();

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ opacity: 0, ...style }}
      muted
      playsInline
      autoPlay
      preload="auto"
    />
  );
}
