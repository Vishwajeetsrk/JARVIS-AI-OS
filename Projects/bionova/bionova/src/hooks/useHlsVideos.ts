import Hls from "hls.js";
import { useEffect, type RefObject } from "react";

type StreamBinding = {
  ref: RefObject<HTMLVideoElement | null>;
  src: string;
};

export function useHlsVideos(streams: StreamBinding[]) {
  useEffect(() => {
    const instances: Hls[] = [];

    for (const { ref, src } of streams) {
      const video = ref.current;
      if (!video) continue;

      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          void video.play().catch(() => undefined);
        });
        instances.push(hls);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        void video.play().catch(() => undefined);
      }
    }

    return () => {
      for (const hls of instances) hls.destroy();
    };
  }, [streams]);
}
