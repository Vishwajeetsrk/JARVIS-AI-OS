import { HERO_VIDEO_URL } from "../constants";

export function BackgroundVideo() {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />
    </>
  );
}
