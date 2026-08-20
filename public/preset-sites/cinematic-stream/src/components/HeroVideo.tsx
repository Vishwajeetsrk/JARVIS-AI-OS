import { useEffect, useRef, useState, type CSSProperties } from "react";

interface HeroVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
}

/** Full-bleed looped hero per prompt2 cinematic-stream spec. */
export default function HeroVideo({ src, className, style }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const video = videoRef.current;
    if (!video) return;

    const ensurePlay = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    video.addEventListener("loadeddata", ensurePlay);
    if (video.readyState >= 2) ensurePlay();

    return () => video.removeEventListener("loadeddata", ensurePlay);
  }, [src]);

  if (failed) {
    return <div className={`video-fallback ${className ?? ""}`} style={style} aria-hidden />;
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={style}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onError={() => setFailed(true)}
    />
  );
}
