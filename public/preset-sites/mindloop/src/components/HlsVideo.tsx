import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HlsVideoProps = {
  src: string;
  className?: string;
};

export default function HlsVideo({ src, className = "" }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play().catch(() => undefined);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      void video.play().catch(() => undefined);
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return <video ref={videoRef} className={className} playsInline muted loop autoPlay aria-hidden />;
}
