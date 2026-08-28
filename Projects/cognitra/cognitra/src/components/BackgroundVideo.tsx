import { BACKGROUND_VIDEO } from "../constants";

export function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      src={BACKGROUND_VIDEO}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        zIndex: 0,
      }}
    />
  );
}
