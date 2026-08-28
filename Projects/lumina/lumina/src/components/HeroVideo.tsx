import { HERO_VIDEO } from "../constants";

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  );
}
