import { Play } from "lucide-react";
import { useRef } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { BG_IMAGE_1 } from "../constants";
import { GridBackground } from "../components/GridBackground";
import { Navbar } from "../components/Navbar";
import { PureFlowSections } from "../components/PureFlowSections";
import { RevealLayer } from "../components/RevealLayer";
import { useSpotlightTracking } from "../hooks/useSpotlightTracking";

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { cursorPos, gridOffset } = useSpotlightTracking(heroRef);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section
        id="device"
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        <GridBackground offset={gridOffset} />

        <div
          className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${BG_IMAGE_1}')` }}
          aria-hidden
        />

        <RevealLayer cursorPos={cursorPos} />

        <div className="absolute bottom-12 left-5 z-50 max-w-[260px] sm:bottom-12 sm:left-8 sm:max-w-xs md:bottom-56 md:left-12">
          <p
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:mb-3 sm:text-[11px]"
            data-editable
          >
            PureFlow One
          </p>
          <h1
            className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl"
            data-editable
          >
            Clean Air, Clear
            <br />
            Mind. Anywhere.
          </h1>
          <div className="flex items-center gap-3 sm:gap-4">
            <PresetNavLink
              target={{ kind: "section", id: "science" }}
              className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-700 sm:px-6 sm:py-2.5 sm:text-sm"
              data-editable
            >
              Discover
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "section", id: "plans" }}
              className="flex items-center gap-2 text-xs font-medium text-gray-700 transition-colors hover:text-gray-900 sm:text-sm"
              data-editable
            >
              <Play size={12} className="fill-gray-700" />
              View Specs
            </PresetNavLink>
          </div>
        </div>
      </section>

      <PureFlowSections />
    </div>
  );
}
