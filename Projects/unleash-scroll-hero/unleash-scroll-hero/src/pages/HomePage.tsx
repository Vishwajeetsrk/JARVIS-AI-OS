import { useRef } from "react";
import { MUX_HLS_SRC, HERO_HEADLINE } from "../constants";
import { GlassPanel } from "../components/GlassPanel";
import { ScrollFloat } from "../components/ScrollFloat";
import { ScrollVideo } from "../components/ScrollVideo";

export function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ScrollVideo src={MUX_HLS_SRC} />
      <div ref={scrollRef} style={{ position: "relative", height: "500vh" }}>
        <ScrollFloat>{HERO_HEADLINE}</ScrollFloat>
        <GlassPanel scrollContainerRef={scrollRef} />
      </div>
    </>
  );
}
