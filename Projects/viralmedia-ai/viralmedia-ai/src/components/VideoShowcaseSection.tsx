import { VIDEOS } from "../constants";

export function VideoShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative z-0 h-[650px] -mt-[325px] overflow-hidden scroll-mt-0"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEOS.showcase}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
