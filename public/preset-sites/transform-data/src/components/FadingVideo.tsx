import { useEffect, useRef, useState, type CSSProperties } from "react";

/** rAF opacity crossfade duration (ms) — preset spec: 250 */
export const FADE_DURATION_MS = 250;

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const [failed, setFailed] = useState(false);

  const fadeTo = (targetOpacity: number, duration = FADE_DURATION_MS) => {
    const video = videoRef.current;
    if (!video || failed) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const startOpacity = video.style.opacity ? parseFloat(video.style.opacity) : 0;
    const startTime = performance.now();

    const anim = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      video.style.opacity = String(startOpacity + (targetOpacity - startOpacity) * progress);
      if (progress < 1) rafIdRef.current = requestAnimationFrame(anim);
      else rafIdRef.current = null;
    };

    rafIdRef.current = requestAnimationFrame(anim);
  };

  useEffect(() => {
    setFailed(false);
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.style.opacity = "0";
    fadingOutRef.current = false;

    const onLoaded = () => {
      video.style.opacity = "0";
      void video
        .play()
        .then(() => fadeTo(1))
        .catch(() => fadeTo(1));
    };

    const onTimeUpdate = () => {
      const d = video.duration;
      if (!d || fadingOutRef.current) return;
      const remaining = d - video.currentTime;
      if (remaining <= 0.35 && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const onEnded = () => {
      video.style.opacity = "0";
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      window.setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        void videoRef.current
          .play()
          .then(() => {
            fadingOutRef.current = false;
            fadeTo(1);
          })
          .catch(() => {});
      }, 80);
    };

    const onError = () => setFailed(true);

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    if (video.readyState >= 2) onLoaded();

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [src, failed]);

  if (failed) {
    return <div className={`video-fallback ${className ?? ""}`} style={style} aria-hidden />;
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ opacity: 0, ...style }}
      muted
      autoPlay
      playsInline
      preload="auto"
    />
  );
}
