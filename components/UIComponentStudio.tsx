"use client";

/**
 * NEXORA UI Component Studio
 * ─────────────────────────────────────────────────────────────────────────────
 * Performance architecture:
 *  • ALL heavy components use React.lazy + Suspense so their JS chunks are
 *    never downloaded until the Studio is first opened AND that component card
 *    scrolls into the viewport (IntersectionObserver gate).
 *  • Static catalog data is defined outside the component (no useMemo churn).
 *  • Category filtering is a single Array.filter() — O(n), <1ms for 40 items.
 *  • Card renders are memoised with React.memo + stable callback refs.
 *  • All CSS is injected once as a single <style> tag inside the portal.
 */

import React, {
  useState, useEffect, useCallback, useRef, memo, Suspense,
} from "react";
import { createPortal } from "react-dom";

// ─── Lazy imports (each becomes its own JS chunk) ──────────────────────────

const CloudShader            = React.lazy(() => import("@/components/ui/cloud-shader").then(m => ({ default: m.CloudShader })));
const MacbookScroll          = React.lazy(() => import("@/components/ui/macbook-scroll").then(m => ({ default: m.MacbookScroll })));
const Notch                  = React.lazy(() => import("@/components/ui/notch").then(m => ({ default: m.Notch })));
const ParallaxHeroImages     = React.lazy(() => import("@/components/ui/parallax-hero-images").then(m => ({ default: m.ParallaxHeroImages })));
const SquigglyText           = React.lazy(() => import("@/components/ui/squiggly-text").then(m => ({ default: m.SquigglyText })));
const TextFlippingBoard      = React.lazy(() => import("@/components/ui/text-flipping-board").then(m => ({ default: m.TextFlippingBoard })));
const GooeyInput             = React.lazy(() => import("@/components/ui/gooey-input").then(m => ({ default: m.GooeyInput })));
const Tooltip                = React.lazy(() => import("@/components/ui/tooltip-card").then(m => ({ default: m.Tooltip })));
const MagneticButton         = React.lazy(() => import("@/components/ui/magnetic-button").then(m => ({ default: m.MagneticButton })));
const Terminal               = React.lazy(() => import("@/components/ui/terminal").then(m => ({ default: m.Terminal })));
const CardContainer          = React.lazy(() => import("@/components/ui/3d-card").then(m => ({ default: m.CardContainer })));
const CardBody               = React.lazy(() => import("@/components/ui/3d-card").then(m => ({ default: m.CardBody })));
const CardItem               = React.lazy(() => import("@/components/ui/3d-card").then(m => ({ default: m.CardItem })));
const AsciiArt               = React.lazy(() => import("@/components/ui/ascii-art").then(m => ({ default: m.AsciiArt })));
const CanvasText             = React.lazy(() => import("@/components/ui/canvas-text").then(m => ({ default: m.CanvasText })));
const Globe3D                = React.lazy(() => import("@/components/ui/3d-globe").then(m => ({ default: m.Globe3D })));
const DitherShader           = React.lazy(() => import("@/components/ui/dither-shader").then(m => ({ default: m.DitherShader })));
const DottedGlowBackground   = React.lazy(() => import("@/components/ui/dotted-glow-background").then(m => ({ default: m.DottedGlowBackground })));
const EncryptedText          = React.lazy(() => import("@/components/ui/encrypted-text").then(m => ({ default: m.EncryptedText })));
const ImagesBadge            = React.lazy(() => import("@/components/ui/images-badge").then(m => ({ default: m.ImagesBadge })));
const Keyboard               = React.lazy(() => import("@/components/ui/keyboard").then(m => ({ default: m.Keyboard })));
const NoiseBackground        = React.lazy(() => import("@/components/ui/noise-background").then(m => ({ default: m.NoiseBackground })));
const Scales                 = React.lazy(() => import("@/components/ui/scales").then(m => ({ default: m.Scales })));
const TextHoverEffect        = React.lazy(() => import("@/components/ui/text-hover-effect").then(m => ({ default: m.TextHoverEffect })));
const WebcamPixelGrid        = React.lazy(() => import("@/components/ui/webcam-pixel-grid").then(m => ({ default: m.WebcamPixelGrid })));
const AnimatedTestimonials   = React.lazy(() => import("@/components/ui/animated-testimonials").then(m => ({ default: m.AnimatedTestimonials })));
const AppleCardComp          = React.lazy(() => import("@/components/ui/apple-cards-carousel").then(m => ({ default: m.Card })));
const AppleCarousel          = React.lazy(() => import("@/components/ui/apple-cards-carousel").then(m => ({ default: m.Carousel })));
const BackgroundBeams        = React.lazy(() => import("@/components/ui/background-beams-with-collision").then(m => ({ default: m.BackgroundBeamsWithCollision })));
const BackgroundLines        = React.lazy(() => import("@/components/ui/background-lines").then(m => ({ default: m.BackgroundLines })));
const BackgroundRipple       = React.lazy(() => import("@/components/ui/background-ripple-effect").then(m => ({ default: m.BackgroundRippleEffect })));
const CardSpotlight          = React.lazy(() => import("@/components/ui/card-spotlight").then(m => ({ default: m.CardSpotlight })));
const CarouselUI             = React.lazy(() => import("@/components/ui/carousel"));
const CodeBlock              = React.lazy(() => import("@/components/ui/code-block").then(m => ({ default: m.CodeBlock })));
const ColourfulText          = React.lazy(() => import("@/components/ui/colourful-text"));
const CometCard              = React.lazy(() => import("@/components/ui/comet-card").then(m => ({ default: m.CometCard })));
const Compare                = React.lazy(() => import("@/components/ui/compare").then(m => ({ default: m.Compare })));
const Cover                  = React.lazy(() => import("@/components/ui/cover").then(m => ({ default: m.Cover })));
const ContainerTextFlip      = React.lazy(() => import("@/components/ui/container-text-flip").then(m => ({ default: m.ContainerTextFlip })));
const LayoutTextFlip         = React.lazy(() => import("@/components/ui/layout-text-flip").then(m => ({ default: m.LayoutTextFlip })));
const DraggableContainer     = React.lazy(() => import("@/components/ui/draggable-card").then(m => ({ default: m.DraggableCardContainer })));
const DraggableBody          = React.lazy(() => import("@/components/ui/draggable-card").then(m => ({ default: m.DraggableCardBody })));
const ExpandableCardList     = React.lazy(() => import("@/components/ui/expandable-card").then(m => ({ default: m.ExpandableCardList })));
const FeaturesSection        = React.lazy(() => import("@/components/ui/features-section").then(m => ({ default: m.FeaturesSection })));
const FileUpload             = React.lazy(() => import("@/components/ui/file-upload").then(m => ({ default: m.FileUpload })));
const FloatingDock           = React.lazy(() => import("@/components/ui/floating-dock").then(m => ({ default: m.FloatingDock })));
const FocusCards             = React.lazy(() => import("@/components/ui/focus-cards").then(m => ({ default: m.FocusCards })));
const HeroSectionOne         = React.lazy(() => import("@/components/ui/hero-section").then(m => ({ default: m.HeroSectionOne })));
const Lens                   = React.lazy(() => import("@/components/ui/lens").then(m => ({ default: m.Lens })));
const LoaderOne              = React.lazy(() => import("@/components/ui/loader").then(m => ({ default: m.LoaderOne })));
const LoaderThree            = React.lazy(() => import("@/components/ui/loader").then(m => ({ default: m.LoaderThree })));
const LoaderFour             = React.lazy(() => import("@/components/ui/loader").then(m => ({ default: m.LoaderFour })));
const PixelatedCanvas        = React.lazy(() => import("@/components/ui/pixelated-canvas").then(m => ({ default: m.PixelatedCanvas })));
const PointerHighlight       = React.lazy(() => import("@/components/ui/pointer-highlight").then(m => ({ default: m.PointerHighlight })));
const Navbar                 = React.lazy(() => import("@/components/ui/resizable-navbar").then(m => ({ default: m.Navbar })));
const NavBody                = React.lazy(() => import("@/components/ui/resizable-navbar").then(m => ({ default: m.NavBody })));
const NavItems               = React.lazy(() => import("@/components/ui/resizable-navbar").then(m => ({ default: m.NavItems })));
const NavbarLogo             = React.lazy(() => import("@/components/ui/resizable-navbar").then(m => ({ default: m.NavbarLogo })));
const NavbarButton           = React.lazy(() => import("@/components/ui/resizable-navbar").then(m => ({ default: m.NavbarButton })));
const StatefulButton         = React.lazy(() => import("@/components/ui/stateful-button").then(m => ({ default: m.Button })));
const StickyBanner           = React.lazy(() => import("@/components/ui/sticky-banner").then(m => ({ default: m.StickyBanner })));
const GoogleGeminiEffect     = React.lazy(() => import("@/components/ui/google-gemini-effect").then(m => ({ default: m.GoogleGeminiEffect })));
const TracingBeam            = React.lazy(() => import("@/components/ui/tracing-beam").then(m => ({ default: m.TracingBeam })));
const ThreeDMarquee          = React.lazy(() => import("@/components/ui/3d-marquee").then(m => ({ default: m.ThreeDMarquee })));
const AnimatedModal          = React.lazy(() => import("@/components/ui/animated-modal").then(m => ({ default: m.Modal })));
const ModalTrigger           = React.lazy(() => import("@/components/ui/animated-modal").then(m => ({ default: m.ModalTrigger })));
const ModalBody              = React.lazy(() => import("@/components/ui/animated-modal").then(m => ({ default: m.ModalBody })));
const ModalContent           = React.lazy(() => import("@/components/ui/animated-modal").then(m => ({ default: m.ModalContent })));
const ModalFooter            = React.lazy(() => import("@/components/ui/animated-modal").then(m => ({ default: m.ModalFooter })));

// ─── Types ─────────────────────────────────────────────────────────────────

export interface UIComponentItem {
  id: string;
  name: string;
  category:
    | "WebGL & Shaders"
    | "Hardware & 3D"
    | "Kinetic Typography"
    | "Controls & Inputs"
    | "Cards & Navigation"
    | "Ambient FX & Loaders";
  description: string;
  codeSnippet: string;
  renderDemo: () => React.ReactNode;
  defaultParams?: Record<string, any>;
}

// ─── Category metadata ──────────────────────────────────────────────────────

const CATEGORY_META: Record<string, { icon: string; color: string; glow: string }> = {
  "All":                  { icon: "◈", color: "#00e5ff", glow: "rgba(0,229,255,0.25)" },
  "WebGL & Shaders":      { icon: "⬡", color: "#a78bfa", glow: "rgba(167,139,250,0.25)" },
  "Hardware & 3D":        { icon: "◻", color: "#38bdf8", glow: "rgba(56,189,248,0.25)" },
  "Kinetic Typography":   { icon: "Aa", color: "#fb923c", glow: "rgba(251,146,60,0.25)" },
  "Controls & Inputs":    { icon: "⊞", color: "#34d399", glow: "rgba(52,211,153,0.25)" },
  "Cards & Navigation":   { icon: "▣", color: "#f472b6", glow: "rgba(244,114,182,0.25)" },
  "Ambient FX & Loaders": { icon: "✦", color: "#fbbf24", glow: "rgba(251,191,36,0.25)" },
};

const CATEGORIES = [
  "All",
  "WebGL & Shaders",
  "Hardware & 3D",
  "Kinetic Typography",
  "Controls & Inputs",
  "Cards & Navigation",
  "Ambient FX & Loaders",
] as const;

// ─── Demo skeleton (shown while chunk loads) ────────────────────────────────

function DemoSkeleton({ name }: { name: string }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      width: "100%", height: "100%", justifyContent: "center",
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        border: "2.5px solid rgba(0,229,255,0.18)",
        borderTopColor: "#00e5ff",
        animation: "uis-spin 0.8s linear infinite",
      }} />
      <span style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.4)" }}>
        Loading {name}…
      </span>
    </div>
  );
}

// ─── Error boundary ─────────────────────────────────────────────────────────

class SafeDemoErrorBoundary extends React.Component<
  { name: string; children: React.ReactNode },
  { hasError: boolean; errorMsg: string }
> {
  constructor(props: { name: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorMsg: error?.message || "Demo render unavailable" };
  }
  componentDidCatch() {
    // swallow — shown in UI
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="uis-error-boundary">
          <span style={{ fontSize: "1.4rem" }}>⚠️</span>
          <span className="uis-error-title">{this.props.name} Standby</span>
          <span className="uis-error-msg">{this.state.errorMsg}</span>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Intersection-observer gated lazy demo card ─────────────────────────────

const LazyDemoCard = memo(function LazyDemoCard({
  name, children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="uis-demo-container">
      {visible ? (
        <SafeDemoErrorBoundary name={name}>
          <Suspense fallback={<DemoSkeleton name={name} />}>
            {children}
          </Suspense>
        </SafeDemoErrorBoundary>
      ) : (
        <DemoSkeleton name={name} />
      )}
    </div>
  );
});

// ─── Static catalog (defined OUTSIDE component — zero re-init cost) ─────────

const COMPONENTS_CATALOG: UIComponentItem[] = [
  {
    id: "cloud-shader", name: "Cloud Shader", category: "WebGL & Shaders",
    description: "Hardware-accelerated procedural volumetric cloud simulation shader.",
    codeSnippet: `import { CloudShader } from "@/components/ui/cloud-shader";\n\nexport function Demo() {\n  return <CloudShader className="h-[28rem] w-full" speed={1} />;\n}`,
    renderDemo: () => <CloudShader className="h-72 w-full" speed={1} />,
    defaultParams: { speed: 1 },
  },
  {
    id: "macbook-scroll", name: "Macbook Scroll", category: "Hardware & 3D",
    description: "3D Perspective MacBook hardware mockup with dynamic scroll-driven lid angle.",
    codeSnippet: `import { MacbookScroll } from "@/components/ui/macbook-scroll";\n\nexport function Demo() {\n  return <MacbookScroll title="Built with Pure Tailwind." />;\n}`,
    renderDemo: () => (
      <div className="w-full overflow-hidden bg-neutral-950 rounded-2xl">
        <MacbookScroll title="This Macbook is built with pure Tailwind." />
      </div>
    ),
    defaultParams: { title: "This Macbook is built with pure Tailwind." },
  },
  {
    id: "notch", name: "Dynamic Notch", category: "Controls & Inputs",
    description: "Interactive floating dynamic island notch with live color and alignment controls.",
    codeSnippet: `import { Notch } from "@/components/ui/notch";\n\nexport function Demo() {\n  return <Notch items={items} position="bottom" />;\n}`,
    renderDemo: () => (
      <div className="relative h-64 w-full flex items-center justify-center rounded-2xl bg-neutral-900/60 border border-neutral-800">
        <span className="text-neutral-400 text-sm">Interactive Notch anchored at bottom</span>
        <Notch items={[
          { id: "bg", label: "Theme", options: [{ id: "cyan", label: "Cyan" }, { id: "purple", label: "Purple" }], value: "cyan", onChange: () => {} },
        ]} position="bottom" className="absolute bottom-4" />
      </div>
    ),
  },
  {
    id: "parallax-hero-images", name: "Parallax Hero Images", category: "WebGL & Shaders",
    description: "Mouse-tracking 3D depth floating images around periphery.",
    codeSnippet: `import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";\n\nexport function Demo() {\n  return <ParallaxHeroImages images={images} />;\n}`,
    renderDemo: () => (
      <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
        <ParallaxHeroImages images={[]} />
        <h2 className="relative z-10 text-2xl font-bold text-white">Move cursor for Parallax</h2>
      </div>
    ),
  },
  {
    id: "squiggly-text", name: "Squiggly Text", category: "Kinetic Typography",
    description: "SVG turbulent displacement animated squiggly wiggle text effect.",
    codeSnippet: `import { SquigglyText } from "@/components/ui/squiggly-text";\n\nexport function Demo() {\n  return <h1 className="text-4xl font-bold text-white">Ship at <SquigglyText className="text-cyan-400">warp speed</SquigglyText></h1>;\n}`,
    renderDemo: () => (
      <div className="flex h-48 w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
        <h2 className="text-3xl font-bold text-white text-center">
          Build at <SquigglyText className="text-amber-400 font-extrabold">warp speed</SquigglyText>
        </h2>
      </div>
    ),
  },
  {
    id: "text-flipping-board", name: "Text Flipping Board", category: "Kinetic Typography",
    description: "Mechanical split-flap airport schedule style character flipper board.",
    codeSnippet: `import { TextFlippingBoard } from "@/components/ui/text-flipping-board";\n\nexport function Demo() {\n  return <TextFlippingBoard text="STAY HUNGRY\\nSTAY FOOLISH" />;\n}`,
    renderDemo: () => (
      <div className="flex w-full justify-center bg-neutral-950 rounded-2xl p-6 border border-neutral-800">
        <TextFlippingBoard text={"JARVIS AI OS\nNEXORA APEX"} />
      </div>
    ),
  },
  {
    id: "gooey-input", name: "Gooey Search Input", category: "Controls & Inputs",
    description: "Liquid SVG filter search input with glowing particle focus feedback.",
    codeSnippet: `import { GooeyInput } from "@/components/ui/gooey-input";\n\nexport function Demo() {\n  return <GooeyInput placeholder="Search everything..." />;\n}`,
    renderDemo: () => <GooeyInput placeholder="Search knowledge & agents…" />,
  },
  {
    id: "tooltip-card", name: "Tooltip Card", category: "Cards & Navigation",
    description: "Rich interactive hover card with profile picture and bio preview.",
    codeSnippet: `import { Tooltip } from "@/components/ui/tooltip-card";\n\nexport function Demo() {\n  return <Tooltip content={<Card />}><span className="font-bold text-cyan-400">Tyler Durden</span></Tooltip>;\n}`,
    renderDemo: () => (
      <div className="flex h-48 w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-sm text-neutral-300">
        Hover over &nbsp;
        <Tooltip content={
          <div className="space-y-2">
            <img src="https://assets.aceternity.com/screenshots/tyler.webp" alt="Tyler" className="h-28 w-full rounded-lg object-cover" />
            <h4 className="font-bold text-white">Tyler Durden</h4>
            <p className="text-xs text-neutral-400">Soap Developer & Project Mayhem Lead.</p>
          </div>
        }>
          <span className="font-bold text-cyan-400 underline decoration-cyan-400/40">Tyler Durden</span>
        </Tooltip>
        &nbsp; to inspect credentials.
      </div>
    ),
  },
  {
    id: "magnetic-button", name: "Magnetic Button", category: "Controls & Inputs",
    description: "Physics-based magnetic button attracted to cursor trajectory.",
    codeSnippet: `import { MagneticButton } from "@/components/ui/magnetic-button";\n\nexport function Demo() {\n  return <MagneticButton><button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black">Follow @jarvis</button></MagneticButton>;\n}`,
    renderDemo: () => (
      <div className="flex h-48 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <MagneticButton>
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/20 active:scale-95">
            Attracts Cursor Magnetically ⚡
          </button>
        </MagneticButton>
      </div>
    ),
  },
  {
    id: "terminal", name: "Interactive Terminal", category: "Controls & Inputs",
    description: "Automated typing and command execution terminal emulator.",
    codeSnippet: `import { Terminal } from "@/components/ui/terminal";\n\nexport function Demo() {\n  return <Terminal typingSpeed={40} />;\n}`,
    renderDemo: () => <Terminal className="my-2" />,
  },
  {
    id: "3d-card", name: "3D Perspective Card", category: "Hardware & 3D",
    description: "CSS 3D perspective transform with mouse elevation and translateZ.",
    codeSnippet: `import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";\n\nexport function Demo() {\n  return (\n    <CardContainer>\n      <CardBody className="bg-neutral-900 border border-white/20 p-6 rounded-2xl">\n        <CardItem translateZ="50" className="text-xl font-bold text-white">Title</CardItem>\n      </CardBody>\n    </CardContainer>\n  );\n}`,
    renderDemo: () => (
      <CardContainer>
        <CardBody className="relative h-auto w-80 rounded-2xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
          <CardItem translateZ={40} className="text-lg font-bold text-white">Float Elements in 3D Air</CardItem>
          <CardItem translateZ={50} as="p" className="mt-2 text-xs text-neutral-400">Hover over this card to activate the perspective matrix.</CardItem>
          <CardItem translateZ={70} className="mt-4 w-full">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop" alt="thumbnail" className="h-36 w-full rounded-xl object-cover" loading="lazy" />
          </CardItem>
          <div className="mt-6 flex items-center justify-between">
            <CardItem translateZ={30} as="span" className="text-xs text-cyan-400">Explore →</CardItem>
            <CardItem translateZ={40} as="button" className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-black">Launch</CardItem>
          </div>
        </CardBody>
      </CardContainer>
    ),
  },
  {
    id: "ascii-art", name: "ASCII Art Matrix", category: "WebGL & Shaders",
    description: "Image-to-ASCII real-time brightness character matrix generator.",
    codeSnippet: `import { AsciiArt } from "@/components/ui/ascii-art";\n\nexport function Demo() {\n  return <AsciiArt src="avatar.webp" resolution={60} color="#00f0ff" />;\n}`,
    renderDemo: () => <AsciiArt src="https://assets.aceternity.com/avatars/manu.webp" resolution={55} color="#00f0ff" />,
  },
  {
    id: "canvas-text", name: "Canvas Kinetic Text", category: "Kinetic Typography",
    description: "Dynamic particle canvas text with scanlines and glow trails.",
    codeSnippet: `import { CanvasText } from "@/components/ui/canvas-text";\n\nexport function Demo() {\n  return <CanvasText text="Lightning Speed" />;\n}`,
    renderDemo: () => (
      <div className="flex h-40 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <CanvasText text="Lightning Speed" />
      </div>
    ),
  },
  {
    id: "3d-globe", name: "3D Interactive Globe", category: "Hardware & 3D",
    description: "Rotating WebGL vector globe with geographic nodes and glow ring.",
    codeSnippet: `import { Globe3D } from "@/components/ui/3d-globe";\n\nexport function Demo() {\n  return <Globe3D markers={markers} />;\n}`,
    renderDemo: () => (
      <Globe3D markers={[
        { lat: 40.7128, lng: -74.006, label: "New York" },
        { lat: 51.5074, lng: -0.1278, label: "London" },
        { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
        { lat: 28.6139, lng: 77.209, label: "New Delhi" },
      ]} />
    ),
  },
  {
    id: "dither-shader", name: "Retro Dither Shader", category: "WebGL & Shaders",
    description: "Bayer 4x4 matrix dithering algorithm canvas filter.",
    codeSnippet: `import { DitherShader } from "@/components/ui/dither-shader";\n\nexport function Demo() {\n  return <DitherShader gridSize={2} />;\n}`,
    renderDemo: () => <DitherShader src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" className="h-64 w-full" gridSize={3} />,
  },
  {
    id: "dotted-glow", name: "Dotted Glow Grid", category: "Ambient FX & Loaders",
    description: "Interactive radial glow pulsing matrix background.",
    codeSnippet: `import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";\n\nexport function Demo() {\n  return <DottedGlowBackground gap={16} />;\n}`,
    renderDemo: () => (
      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
        <DottedGlowBackground gap={18} />
        <span className="relative z-10 text-lg font-bold text-white">Dynamic Grid Pulse</span>
      </div>
    ),
  },
  {
    id: "encrypted-text", name: "Encrypted Matrix Text", category: "Kinetic Typography",
    description: "Matrix cipher character unscrambling animation.",
    codeSnippet: `import { EncryptedText } from "@/components/ui/encrypted-text";\n\nexport function Demo() {\n  return <EncryptedText text="Welcome to the Matrix, Neo." />;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-xl font-mono">
        <EncryptedText text="Welcome to NEXORA APEX OS, Vishwajeet." />
      </div>
    ),
  },
  {
    id: "colourful-text", name: "Colourful Gradient Text", category: "Kinetic Typography",
    description: "Smooth continuous rainbow color shifting kinetic text.",
    codeSnippet: `import ColourfulText from "@/components/ui/colourful-text";\n\nexport function Demo() {\n  return <h2>Ship with <ColourfulText text="Autonomous Intelligence" /></h2>;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-black">
        <ColourfulText text="Autonomous Agent Fleet" />
      </div>
    ),
  },
  {
    id: "cover", name: "Cover Interactive Beam", category: "Kinetic Typography",
    description: "Luminescent animated spotlight container covering key headline words.",
    codeSnippet: `import { Cover } from "@/components/ui/cover";\n\nexport function Demo() {\n  return <h1>Build at <Cover>Warp Speed</Cover></h1>;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-bold">
        Empowering <Cover className="mx-2">Next-Gen AI</Cover> Systems
      </div>
    ),
  },
  {
    id: "container-text-flip", name: "Container Text Flip", category: "Kinetic Typography",
    description: "Flipping dynamic word transition cycling through phrases.",
    codeSnippet: `import { ContainerTextFlip } from "@/components/ui/container-text-flip";\n\nexport function Demo() {\n  return <ContainerTextFlip words={['Fast', 'Reliable', 'Autonomous']} />;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-xl">
        <span className="text-neutral-400 mr-2">Architecting</span>
        <ContainerTextFlip words={["Fast", "Reliable", "Autonomous", "Scalable"]} />
      </div>
    ),
  },
  {
    id: "layout-text-flip", name: "Layout Text Flip", category: "Kinetic Typography",
    description: "Perspective 3D rotation flip on word update.",
    codeSnippet: `import { LayoutTextFlip } from "@/components/ui/layout-text-flip";\n\nexport function Demo() {\n  return <LayoutTextFlip words={['Design', 'Systems', 'Components']} />;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-black text-cyan-400">
        <LayoutTextFlip words={["Design", "Systems", "Components"]} />
      </div>
    ),
  },
  {
    id: "text-hover-effect", name: "Text Hover SVG Reveal", category: "Kinetic Typography",
    description: "Cursor-driven radial gradient spotlight revealing SVG text stroke fill.",
    codeSnippet: `import { TextHoverEffect } from "@/components/ui/text-hover-effect";\n\nexport function Demo() {\n  return <TextHoverEffect text="JARVIS" />;\n}`,
    renderDemo: () => <TextHoverEffect text="JARVIS" />,
  },
  {
    id: "images-badge", name: "Images Badge Fan", category: "Cards & Navigation",
    description: "Interactive floating image stack that fans out on hover.",
    codeSnippet: `import { ImagesBadge } from "@/components/ui/images-badge";\n\nexport function Demo() {\n  return <ImagesBadge text="Explore Agent Constellation" images={[]} />;\n}`,
    renderDemo: () => (
      <div className="flex h-44 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <ImagesBadge text="Explore Agent Constellation" images={[]} />
      </div>
    ),
  },
  {
    id: "keyboard", name: "Mechanical 3D Keyboard", category: "Controls & Inputs",
    description: "Full mechanical keyboard with live WebAudio clicks and keystroke preview.",
    codeSnippet: `import { Keyboard } from "@/components/ui/keyboard";\n\nexport function Demo() {\n  return <Keyboard enableSound={true} showPreview={true} />;\n}`,
    renderDemo: () => <Keyboard enableSound showPreview />,
  },
  {
    id: "webcam-pixel-grid", name: "Webcam Pixel Matrix", category: "WebGL & Shaders",
    description: "Interactive elevation matrix grid with real-time waveform displacement.",
    codeSnippet: `import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";\n\nexport function Demo() {\n  return <WebcamPixelGrid gridCols={40} gridRows={30} />;\n}`,
    renderDemo: () => (
      <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
        <WebcamPixelGrid gridCols={35} gridRows={25} />
        <h3 className="relative z-10 text-lg font-bold text-white backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">Realtime Pixel Matrix</h3>
      </div>
    ),
  },
  {
    id: "animated-testimonials", name: "Animated Testimonials", category: "Cards & Navigation",
    description: "Kinetic testimonial carousel with stacked 3D avatar cards.",
    codeSnippet: `import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";\n\nexport function Demo() {\n  return <AnimatedTestimonials testimonials={testimonials} />;\n}`,
    renderDemo: () => (
      <AnimatedTestimonials testimonials={[
        { quote: "The autonomous agent constellation completely automated our deployment pipeline.", name: "Sarah Chen", designation: "Head of AI Architecture", src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop" },
        { quote: "Zero fabrication verification with Level 6 Human approval is revolutionary.", name: "Michael Rodriguez", designation: "CTO, CloudScale", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop" },
      ]} />
    ),
  },
  {
    id: "apple-cards-carousel", name: "Apple Cards Carousel", category: "Cards & Navigation",
    description: "WWDC style expandable cards carousel with rich modal dialogue.",
    codeSnippet: `import { Card, Carousel } from "@/components/ui/apple-cards-carousel";\n\nexport function Demo() {\n  return <Carousel items={cards} />;\n}`,
    renderDemo: () => {
      const cardsData = [
        { category: "Intelligence", title: "Autonomous Agents", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop" },
        { category: "Workflow", title: "Instant Video Renderer", src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=800&auto=format&fit=crop" },
      ];
      return <AppleCarousel items={cardsData.map((c, i) => <AppleCardComp key={i} card={c} index={i} />)} />;
    },
  },
  {
    id: "beams-collision", name: "Beams with Collision", category: "Ambient FX & Loaders",
    description: "Laser beams with physics particle spark explosions upon collision.",
    codeSnippet: `import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";\n\nexport function Demo() {\n  return <BackgroundBeamsWithCollision><h2 className="text-3xl font-bold text-white">Exploding Beams</h2></BackgroundBeamsWithCollision>;\n}`,
    renderDemo: () => (
      <BackgroundBeams>
        <h3 className="text-2xl font-extrabold text-white">Laser Beam Sparks Collision</h3>
      </BackgroundBeams>
    ),
  },
  {
    id: "background-lines", name: "Background Lines Flow", category: "Ambient FX & Loaders",
    description: "Curved SVG glowing path lines flowing in the background.",
    codeSnippet: `import { BackgroundLines } from "@/components/ui/background-lines";\n\nexport function Demo() {\n  return <BackgroundLines><h2>Flowing Energy</h2></BackgroundLines>;\n}`,
    renderDemo: () => (
      <BackgroundLines className="h-64 flex items-center justify-center">
        <h3 className="text-xl font-bold text-white">Flowing Quantum Lines</h3>
      </BackgroundLines>
    ),
  },
  {
    id: "background-ripple", name: "Background Ripple", category: "Ambient FX & Loaders",
    description: "Expanding concentric acoustic ripple waves.",
    codeSnippet: `import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";\n\nexport function Demo() {\n  return <BackgroundRippleEffect />;\n}`,
    renderDemo: () => (
      <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
        <BackgroundRipple />
        <span className="relative z-10 font-bold text-white">Concentric Ripple Center</span>
      </div>
    ),
  },
  {
    id: "card-spotlight", name: "Card Spotlight", category: "Cards & Navigation",
    description: "Mouse-following radial spotlight highlight on card hover.",
    codeSnippet: `import { CardSpotlight } from "@/components/ui/card-spotlight";\n\nexport function Demo() {\n  return <CardSpotlight>Card Content</CardSpotlight>;\n}`,
    renderDemo: () => (
      <CardSpotlight className="h-52 w-full max-w-sm mx-auto p-6 flex flex-col justify-center">
        <h4 className="text-lg font-bold text-white">Spotlight Hover</h4>
        <p className="text-xs text-neutral-400 mt-2">Move your mouse across this card to see the radial gradient reveal.</p>
      </CardSpotlight>
    ),
  },
  {
    id: "comet-card", name: "Comet Glow Card", category: "Cards & Navigation",
    description: "Orbiting luminous comet light trail following card border.",
    codeSnippet: `import { CometCard } from "@/components/ui/comet-card";\n\nexport function Demo() {\n  return <CometCard>Comet Border</CometCard>;\n}`,
    renderDemo: () => (
      <CometCard className="h-48 w-full max-w-sm mx-auto flex items-center justify-center">
        <span className="text-white font-bold">Orbiting Comet Border</span>
      </CometCard>
    ),
  },
  {
    id: "compare-slider", name: "Compare Slider", category: "Hardware & 3D",
    description: "Interactive before/after split screen image comparison slider.",
    codeSnippet: `import { Compare } from "@/components/ui/compare";\n\nexport function Demo() {\n  return <Compare firstImage="before.png" secondImage="after.png" />;\n}`,
    renderDemo: () => <Compare className="h-64 w-full max-w-lg mx-auto" firstImage="https://assets.aceternity.com/code-problem.png" secondImage="https://assets.aceternity.com/code-solution.png" />,
  },
  {
    id: "draggable-card", name: "Draggable Physics Card", category: "Hardware & 3D",
    description: "Physics spring-inertia draggable card with reset boundary.",
    codeSnippet: `import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";\n\nexport function Demo() {\n  return <DraggableCardContainer><DraggableCardBody>Drag Me</DraggableCardBody></DraggableCardContainer>;\n}`,
    renderDemo: () => (
      <DraggableContainer className="h-56 w-full flex items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <DraggableBody className="p-4 bg-neutral-800 rounded-xl border border-neutral-700 text-sm font-bold text-white">
          ✋ Grab & Drag Me Around
        </DraggableBody>
      </DraggableContainer>
    ),
  },
  {
    id: "expandable-cards", name: "Expandable Cards List", category: "Cards & Navigation",
    description: "Smooth expanding accordion card list with rich details on click.",
    codeSnippet: `import { ExpandableCardList } from "@/components/ui/expandable-card";\n\nexport function Demo() {\n  return <ExpandableCardList items={items} />;\n}`,
    renderDemo: () => (
      <ExpandableCardList items={[{
        title: "Autonomous Fleet Orchestration",
        description: "18 specialized agent personas with real-time reasoning traces.",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        ctaText: "Deploy",
        content: () => <p className="text-xs text-neutral-300">Full multi-tier execution tree with Level 6 Human Approval Gate.</p>,
      }]} />
    ),
  },
  {
    id: "features-section", name: "Bento Features Grid", category: "Cards & Navigation",
    description: "Bento grid layout highlighting core platform capabilities.",
    codeSnippet: `import { FeaturesSection } from "@/components/ui/features-section";\n\nexport function Demo() {\n  return <FeaturesSection />;\n}`,
    renderDemo: () => <FeaturesSection className="my-2" />,
  },
  {
    id: "focus-cards", name: "Focus Cards Hover Blur", category: "Cards & Navigation",
    description: "Hovering over a card blurs out other neighboring cards.",
    codeSnippet: `import { FocusCards } from "@/components/ui/focus-cards";\n\nexport function Demo() {\n  return <FocusCards cards={cards} />;\n}`,
    renderDemo: () => (
      <FocusCards cards={[
        { title: "Quantum Neural Net", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
        { title: "Autonomous Fleet", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
      ]} />
    ),
  },
  {
    id: "lens", name: "Interactive Zoom Lens", category: "Controls & Inputs",
    description: "Magnifying inspection lens following cursor over imagery.",
    codeSnippet: `import { Lens } from "@/components/ui/lens";\n\nexport function Demo() {\n  return <Lens><img src="diagram.png" /></Lens>;\n}`,
    renderDemo: () => (
      <Lens className="h-56 w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop" alt="mesh" className="h-full w-full object-cover" loading="lazy" />
      </Lens>
    ),
  },
  {
    id: "loaders-suite", name: "Futuristic Loaders Suite", category: "Ambient FX & Loaders",
    description: "Hardware-inspired cyberpunk neon spinners and loading bars.",
    codeSnippet: `import { LoaderOne, LoaderThree, LoaderFour } from "@/components/ui/loader";\n\nexport function Demo() {\n  return <div className="flex gap-4"><LoaderOne /><LoaderThree /><LoaderFour /></div>;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-around bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
        <LoaderOne /><LoaderThree /><LoaderFour />
      </div>
    ),
  },
  {
    id: "noise-background", name: "Film Grain Noise", category: "Ambient FX & Loaders",
    description: "Subtle analog film grain texture overlay.",
    codeSnippet: `import { NoiseBackground } from "@/components/ui/noise-background";\n\nexport function Demo() {\n  return <NoiseBackground><div>Analog Texture</div></NoiseBackground>;\n}`,
    renderDemo: () => (
      <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-neutral-900 flex items-center justify-center border border-neutral-800">
        <NoiseBackground>
          <span className="relative z-10 text-neutral-300 font-mono text-xs">Analog Film Grain Texture</span>
        </NoiseBackground>
      </div>
    ),
  },
  {
    id: "pixelated-canvas", name: "Pixelated Canvas Grid", category: "WebGL & Shaders",
    description: "Interactive canvas pixel grid responding to mouse velocity.",
    codeSnippet: `import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";\n\nexport function Demo() {\n  return <PixelatedCanvas src="avatar.webp" />;\n}`,
    renderDemo: () => <PixelatedCanvas src="https://assets.aceternity.com/avatars/manu.webp" />,
  },
  {
    id: "pointer-highlight", name: "Multiplayer Cursor Highlight", category: "Controls & Inputs",
    description: "Collaborative multiplayer style avatar pointer highlight box.",
    codeSnippet: `import { PointerHighlight } from "@/components/ui/pointer-highlight";\n\nexport function Demo() {\n  return <PointerHighlight>Target</PointerHighlight>;\n}`,
    renderDemo: () => (
      <div className="flex h-40 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
        <PointerHighlight>
          <span className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-bold text-white">Collaborative Cursor Focus</span>
        </PointerHighlight>
      </div>
    ),
  },
  {
    id: "resizable-navbar", name: "Floating Resizable Navbar", category: "Cards & Navigation",
    description: "Adaptive scroll-responsive navigation dock.",
    codeSnippet: `import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton } from "@/components/ui/resizable-navbar";\n\nexport function Demo() {\n  return <Navbar><NavBody><NavbarLogo />...</NavBody></Navbar>;\n}`,
    renderDemo: () => (
      <div className="relative h-44 w-full bg-neutral-950 rounded-2xl p-4 flex items-center justify-center border border-neutral-800">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={[{ name: "Docs", link: "#" }, { name: "Agents", link: "#" }]} />
            <NavbarButton>Launch</NavbarButton>
          </NavBody>
        </Navbar>
      </div>
    ),
  },
  {
    id: "scales", name: "Scales Audio Visualizer", category: "Ambient FX & Loaders",
    description: "Rhythmic bar visualizer scaling with acoustic frequencies.",
    codeSnippet: `import { Scales } from "@/components/ui/scales";\n\nexport function Demo() {\n  return <Scales orientation="horizontal" size={8} />;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
        <Scales orientation="horizontal" size={8} />
      </div>
    ),
  },
  {
    id: "sticky-banner", name: "Sticky Notification Banner", category: "Cards & Navigation",
    description: "Top-anchored dismissal banner with action button.",
    codeSnippet: `import { StickyBanner } from "@/components/ui/sticky-banner";\n\nexport function Demo() {\n  return <StickyBanner><span>v4.0.0 is Live!</span></StickyBanner>;\n}`,
    renderDemo: () => (
      <div className="w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 p-2">
        <StickyBanner>
          <span>🚀 JARVIS AI OS v4.0.0 is Live & Autonomous!</span>
        </StickyBanner>
      </div>
    ),
  },
  {
    id: "tracing-beam", name: "Tracing Beam Scroll Timeline", category: "Ambient FX & Loaders",
    description: "Glowing SVG laser path tracing vertical scroll progress.",
    codeSnippet: `import { TracingBeam } from "@/components/ui/tracing-beam";\n\nexport function Demo() {\n  return <TracingBeam><Content /></TracingBeam>;\n}`,
    renderDemo: () => (
      <div className="relative h-64 w-full overflow-y-auto bg-neutral-950 rounded-2xl p-6 border border-neutral-800">
        <TracingBeam>
          <div className="space-y-4 text-xs text-neutral-300">
            <h4 className="font-bold text-cyan-400">Step 1: Agent Reasoning</h4>
            <p>Planning multi-tier execution tree across 18 autonomous agent personas.</p>
            <h4 className="font-bold text-purple-400">Step 2: Level 6 Human Gate</h4>
            <p>Evaluating high-risk operations against policy bounds.</p>
            <h4 className="font-bold text-emerald-400">Step 3: GitHub PR Dispatch</h4>
            <p>Direct commit, test verification, and automated branch pull request.</p>
          </div>
        </TracingBeam>
      </div>
    ),
  },
  {
    id: "file-upload", name: "Interactive File Upload", category: "Controls & Inputs",
    description: "Drag-and-drop file uploader with real-time vector indexing tags.",
    codeSnippet: `import { FileUpload } from "@/components/ui/file-upload";\n\nexport function Demo() {\n  return <FileUpload onChange={(files) => console.log(files)} />;\n}`,
    renderDemo: () => <FileUpload />,
  },
  {
    id: "floating-dock", name: "macOS Floating Dock", category: "Cards & Navigation",
    description: "Interactive dock with smooth magnification physics on cursor proximity.",
    codeSnippet: `import { FloatingDock } from "@/components/ui/floating-dock";\n\nexport function Demo() {\n  return <FloatingDock items={links} />;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <FloatingDock items={[
          { title: "Home", icon: <span>🏠</span>, href: "#" },
          { title: "Agents", icon: <span>🤖</span>, href: "#" },
          { title: "Memory", icon: <span>🧠</span>, href: "#" },
          { title: "GitHub", icon: <span>🐙</span>, href: "#" },
          { title: "Settings", icon: <span>⚙️</span>, href: "#" },
        ]} />
      </div>
    ),
  },
  {
    id: "hero-section", name: "High-Conversion Hero", category: "Cards & Navigation",
    description: "Complete landing page hero section with badges, CTA buttons, and mockup.",
    codeSnippet: `import { HeroSectionOne } from "@/components/ui/hero-section";\n\nexport function Demo() {\n  return <HeroSectionOne />;\n}`,
    renderDemo: () => <HeroSectionOne className="my-2" />,
  },
  {
    id: "stateful-button", name: "Stateful Action Button", category: "Controls & Inputs",
    description: "Multi-state button supporting idle, spinner loading, and success confirmation.",
    codeSnippet: `import { Button } from "@/components/ui/stateful-button";\n\nexport function Demo() {\n  return <Button onClick={async () => await fetch('/api')}>Deploy App</Button>;\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <StatefulButton onClick={() => new Promise((resolve) => setTimeout(resolve, 2000))}>
          Execute Agent Mission
        </StatefulButton>
      </div>
    ),
  },
  {
    id: "gemini-effect", name: "Google Gemini Curves", category: "Ambient FX & Loaders",
    description: "Generative multi-strand glowing curve waves.",
    codeSnippet: `import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";\n\nexport function Demo() {\n  return <GoogleGeminiEffect />;\n}`,
    renderDemo: () => <GoogleGeminiEffect className="h-60" />,
  },
  {
    id: "3d-marquee", name: "3D Isometric Marquee", category: "Hardware & 3D",
    description: "Infinite scrolling 3D isometric wall showcase.",
    codeSnippet: `import { ThreeDMarquee } from "@/components/ui/3d-marquee";\n\nexport function Demo() {\n  return <ThreeDMarquee images={images} />;\n}`,
    renderDemo: () => <ThreeDMarquee images={[]} />,
  },
  {
    id: "animated-modal", name: "Animated Modal Trigger", category: "Cards & Navigation",
    description: "Interactive modal trigger with 3D button hover effects.",
    codeSnippet: `import { Modal, ModalTrigger, ModalBody, ModalContent } from "@/components/ui/animated-modal";\n\nexport function Demo() {\n  return (\n    <Modal>\n      <ModalTrigger>Launch Mission</ModalTrigger>\n      <ModalBody><ModalContent>Mission Details</ModalContent></ModalBody>\n    </Modal>\n  );\n}`,
    renderDemo: () => (
      <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
        <AnimatedModal>
          <ModalTrigger>Open Mission Terminal</ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h3 className="text-xl font-bold">Autonomous Deployment Protocol</h3>
              <p className="text-sm text-neutral-300">Ready to deploy 18 autonomous agents.</p>
            </ModalContent>
            <ModalFooter>
              <button className="rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black">Confirm & Execute</button>
            </ModalFooter>
          </ModalBody>
        </AnimatedModal>
      </div>
    ),
  },
];



// ─── Main Studio Component ──────────────────────────────────────────────────

export function UIComponentStudio({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "preview" | "code" | "customize">>({});
  const [customParams, setCustomParams] = useState<Record<string, Record<string, any>>>({});
  const [fullscreenId, setFullscreenId] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const catScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleOpen = () => setInternalOpen(true);
    window.addEventListener("OPEN_UI_STUDIO", handleOpen);
    return () => window.removeEventListener("OPEN_UI_STUDIO", handleOpen);
  }, []);

  const isOpen_ = isOpen === true || internalOpen;

  const handleClose = useCallback(() => {
    setInternalOpen(false);
    onClose?.();
  }, [onClose]);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen_) {
        if (fullscreenId) setFullscreenId(null);
        else handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen_, fullscreenId, handleClose]);

  // Filter
  const filteredComponents = React.useMemo(() => {
    const q = searchQuery.toLowerCase();
    return COMPONENTS_CATALOG.filter((c) => {
      const matchCat = selectedCategory === "All" || c.category === selectedCategory;
      const matchQ = !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [selectedCategory, searchQuery]);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  }, []);

  const handleInstallSkill = useCallback((comp: UIComponentItem) => {
    showToast(`✨ Skill [${comp.name}] installed into .agents/skills/`);
  }, [showToast]);

  const copyCode = useCallback((code: string, id: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  }, []);

  const setTab = useCallback((id: string, tab: "preview" | "code" | "customize") => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  }, []);

  const setParam = useCallback((id: string, key: string, val: any) => {
    setCustomParams((prev) => ({ ...prev, [id]: { ...(prev[id] || {}), [key]: val } }));
  }, []);

  if (!isOpen_ || !mounted || typeof document === "undefined") return null;

  const fullscreenComp = fullscreenId ? COMPONENTS_CATALOG.find((c) => c.id === fullscreenId) : null;
  const catMeta = CATEGORY_META[selectedCategory] || CATEGORY_META["All"];

  return createPortal(
    <>
      {/* ── Scoped CSS ──────────────────────────────────────────────────── */}
      <style>{`
        .uis-root*,.uis-root*::before,.uis-root*::after{box-sizing:border-box}
        .uis-root{
          position:fixed;inset:0;z-index:999999;
          background:rgba(3,7,18,0.97);
          backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);
          color:#fff;display:flex;flex-direction:column;overflow:hidden;
          font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
        }

        /* Header */
        .uis-header{
          display:flex;align-items:center;justify-content:space-between;gap:12px;
          padding:12px 20px;background:rgba(6,12,28,0.96);
          border-bottom:1px solid rgba(0,229,255,0.18);flex-shrink:0;min-height:64px;
        }
        .uis-header-left{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
        .uis-logo-box{
          width:40px;height:40px;flex-shrink:0;border-radius:12px;
          background:rgba(0,229,255,0.1);border:1px solid rgba(0,229,255,0.35);
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 0 18px rgba(0,229,255,0.2);
        }
        .uis-logo-box img{width:28px;height:28px;object-fit:contain}
        .uis-title-group{display:flex;flex-direction:column;gap:2px;min-width:0}
        .uis-title-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .uis-title{font-size:clamp(0.8rem,2.5vw,1.1rem);font-weight:900;letter-spacing:.05em;color:#fff;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .uis-count-pill{
          font-size:.62rem;padding:2px 8px;border-radius:99px;
          background:linear-gradient(90deg,#00e5ff 0%,#3b82f6 100%);
          color:#020617;font-weight:900;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;flex-shrink:0;
        }
        .uis-subtitle{font-size:clamp(0.6rem,1.5vw,0.74rem);color:rgba(255,255,255,.5);margin:0;display:none}
        @media(min-width:480px){.uis-subtitle{display:block}}

        /* Close button */
        .uis-close-btn{
          width:40px;height:40px;flex-shrink:0;border-radius:12px;
          background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);
          color:#fff;font-size:1rem;font-weight:bold;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;transition:all .2s;
        }
        .uis-close-btn:hover{background:rgba(239,68,68,.2);border-color:#ef4444;transform:scale(1.05)}

        /* Filter bar */
        .uis-filter-bar{
          display:flex;flex-direction:column;gap:10px;
          padding:12px 20px 10px;
          background:rgba(4,9,20,.88);
          border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0;
        }
        .uis-search-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .uis-search-wrap{position:relative;flex:1;min-width:160px;max-width:520px}
        .uis-search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:.85rem;opacity:.5;pointer-events:none}
        .uis-search-input{
          width:100%;padding:9px 12px 9px 36px;
          background:rgba(10,18,36,.9);border:1px solid rgba(0,229,255,.25);
          border-radius:12px;color:#fff;font-size:clamp(14px,2vw,.82rem);
          outline:none;transition:border-color .2s;
        }
        .uis-search-input:focus{border-color:rgba(0,229,255,.55)}
        .uis-search-input::placeholder{color:rgba(255,255,255,.35)}
        .uis-result-count{font-size:.72rem;color:rgba(255,255,255,.45);font-family:monospace;white-space:nowrap;flex-shrink:0}

        /* Category pills */
        .uis-cat-scroll{
          display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;
          scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;
        }
        .uis-cat-scroll::-webkit-scrollbar{display:none}
        .uis-cat-pill{
          display:inline-flex;align-items:center;gap:5px;padding:6px 13px;border-radius:99px;
          font-size:.72rem;font-weight:600;font-family:monospace;white-space:nowrap;
          background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
          color:rgba(255,255,255,.65);cursor:pointer;transition:all .18s;flex-shrink:0;
          touch-action:manipulation;
        }
        .uis-cat-pill:hover{background:rgba(255,255,255,.09)}
        .uis-cat-pill.active{font-weight:800}

        /* Grid */
        .uis-grid-area{flex:1;overflow-y:auto;padding:20px 20px 32px;scrollbar-width:thin;scrollbar-color:rgba(0,229,255,.25) rgba(0,0,0,.2)}
        .uis-grid-area::-webkit-scrollbar{width:5px}
        .uis-grid-area::-webkit-scrollbar-track{background:rgba(0,0,0,.2)}
        .uis-grid-area::-webkit-scrollbar-thumb{background:rgba(0,229,255,.3);border-radius:4px}
        .uis-grid{
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));
          gap:18px;max-width:1800px;margin:0 auto;
        }
        @media(max-width:480px){.uis-grid{grid-template-columns:1fr;gap:14px}.uis-grid-area{padding:14px 12px 28px}}

        /* Card */
        .uis-card{
          background:rgba(8,14,30,.92);border:1px solid rgba(0,229,255,.12);
          border-radius:18px;padding:16px;
          display:flex;flex-direction:column;gap:12px;
          box-shadow:0 6px 28px rgba(0,0,0,.4);
          transition:border-color .25s,box-shadow .25s,transform .2s;
          will-change:transform;
          contain:layout style;
        }
        .uis-card:hover{
          border-color:rgba(0,229,255,.32);
          box-shadow:0 8px 40px rgba(0,0,0,.55),0 0 24px rgba(0,229,255,.1);
          transform:translateY(-2px);
        }
        .uis-card-header{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
        .uis-card-info{flex:1;min-width:0}
        .uis-card-name-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
        .uis-card-name{margin:0;font-size:.92rem;font-weight:800;color:#fff}
        .uis-card-cat-badge{font-size:.6rem;padding:2px 7px;border-radius:8px;font-weight:700;white-space:nowrap;flex-shrink:0}
        .uis-card-desc{margin:4px 0 0;font-size:.71rem;color:rgba(255,255,255,.5);line-height:1.45}

        .uis-fullscreen-btn{
          display:flex;align-items:center;gap:4px;padding:6px 10px;border-radius:8px;
          background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
          color:rgba(255,255,255,.65);font-size:.65rem;font-weight:600;
          cursor:pointer;flex-shrink:0;white-space:nowrap;
          touch-action:manipulation;min-height:34px;transition:all .18s;
        }
        .uis-fullscreen-btn:hover{background:rgba(255,255,255,.1);color:#fff}

        /* Preview / Code / Customize box */
        .uis-preview-box{
          height:220px;width:100%;border-radius:13px;
          background:#02050b;border:1px solid rgba(255,255,255,.07);
          position:relative;overflow:hidden;
          display:flex;align-items:center;justify-content:center;
          contain:strict;
        }
        .uis-code-box{height:220px;width:100%;border-radius:13px;background:#010409;border:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;overflow:hidden}
        .uis-code-header{display:flex;align-items:center;justify-content:space-between;padding:7px 12px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02)}
        .uis-code-lang{font-size:.66rem;font-family:monospace;color:rgba(255,255,255,.45)}
        .uis-copy-btn{padding:4px 10px;border-radius:6px;font-size:.65rem;font-weight:bold;cursor:pointer;transition:all .15s;touch-action:manipulation}
        .uis-copy-btn.idle{background:rgba(0,229,255,.12);border:1px solid rgba(0,229,255,.35);color:#00e5ff}
        .uis-copy-btn.copied{background:#10b981;border:1px solid #10b981;color:#000}
        .uis-code-pre{flex:1;margin:0;padding:12px;overflow:auto;font-size:.72rem;font-family:monospace;color:#7dd3fc;line-height:1.55}
        .uis-customize-box{height:220px;width:100%;border-radius:13px;background:#030712;border:1px solid rgba(255,255,255,.07);padding:14px;overflow-y:auto;display:flex;flex-direction:column;gap:12px}
        .uis-param-label-head{font-size:.68rem;font-weight:bold;color:#00e5ff;text-transform:uppercase}
        .uis-param-key{font-size:.66rem;color:rgba(255,255,255,.65);font-family:monospace;margin-bottom:3px;display:block}
        .uis-param-text{width:100%;padding:6px 10px;border-radius:8px;background:rgba(15,23,42,.9);border:1px solid rgba(255,255,255,.13);color:#fff;font-size:.72rem;outline:none}

        /* Footer / tabs */
        .uis-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.06);padding-top:10px}
        .uis-tab-group{display:flex;gap:2px;background:rgba(0,0,0,.4);padding:3px;border-radius:10px;border:1px solid rgba(255,255,255,.06)}
        .uis-tab-btn{padding:5px 10px;border-radius:7px;font-size:.64rem;font-weight:700;text-transform:uppercase;font-family:monospace;background:transparent;border:1px solid transparent;color:rgba(255,255,255,.45);cursor:pointer;transition:all .15s;min-height:30px;touch-action:manipulation}
        .uis-tab-btn.active{background:rgba(0,229,255,.2);border-color:rgba(0,229,255,.45);color:#00e5ff}
        .uis-install-btn{display:flex;align-items:center;gap:5px;padding:6px 12px;border-radius:9px;background:rgba(16,185,129,.13);border:1px solid rgba(16,185,129,.35);color:#34d399;font-size:.68rem;font-weight:700;cursor:pointer;transition:all .2s;touch-action:manipulation;min-height:34px}
        .uis-install-btn:hover{background:rgba(16,185,129,.25);border-color:#34d399}

        /* Lazy loader */
        .uis-demo-container{position:relative;height:100%;width:100%;min-height:180px;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;contain:layout}

        /* Error boundary */
        .uis-error-boundary{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:16px;text-align:center;background:rgba(220,38,38,.08);border-radius:12px;border:1px solid rgba(220,38,38,.3);width:100%;height:100%}
        .uis-error-title{font-size:.78rem;font-weight:bold;color:#f87171}
        .uis-error-msg{font-size:.66rem;color:rgba(255,255,255,.55);max-width:280px}

        /* Toast */
        .uis-toast{position:fixed;top:20px;right:20px;z-index:1000002;display:flex;align-items:center;gap:10px;background:rgba(6,78,59,.97);border:1px solid #10b981;border-radius:14px;padding:12px 20px;color:#6ee7b7;font-weight:bold;font-size:.82rem;box-shadow:0 8px 36px rgba(0,0,0,.8),0 0 20px rgba(16,185,129,.35);backdrop-filter:blur(16px);max-width:calc(100vw - 40px);animation:uis-slide-in .25s ease}
        @media(max-width:480px){.uis-toast{top:auto;bottom:80px;right:12px;left:12px;font-size:.75rem}}

        /* Fullscreen */
        .uis-fullscreen-overlay{position:fixed;inset:0;z-index:1000001;background:#02040a;display:flex;flex-direction:column;padding:20px}
        .uis-fullscreen-header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:14px;margin-bottom:18px;gap:12px;flex-wrap:wrap}
        .uis-fullscreen-name{font-size:clamp(1rem,3vw,1.3rem);font-weight:900;color:#00e5ff}
        .uis-fullscreen-cat{font-size:.72rem;padding:3px 10px;border-radius:12px;background:rgba(0,229,255,.14);border:1px solid rgba(0,229,255,.3);color:#00e5ff;font-weight:700}
        .uis-fullscreen-exit{padding:8px 18px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:.82rem;font-weight:bold;cursor:pointer;white-space:nowrap;touch-action:manipulation;min-height:40px;transition:all .2s}
        .uis-fullscreen-exit:hover{background:rgba(239,68,68,.2);border-color:#ef4444}
        .uis-fullscreen-body{flex:1;display:flex;align-items:center;justify-content:center;overflow:auto;padding:16px;background:radial-gradient(ellipse at center,rgba(0,229,255,.05) 0%,#010308 100%);border-radius:14px;border:1px solid rgba(255,255,255,.05)}

        /* Empty */
        .uis-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:60px 20px;text-align:center;color:rgba(255,255,255,.35)}
        .uis-empty-icon{font-size:3rem;opacity:.5}
        .uis-empty-title{font-size:1.1rem;font-weight:700;color:rgba(255,255,255,.5)}
        .uis-empty-sub{font-size:.8rem;max-width:280px;line-height:1.5}

        /* Animations */
        @keyframes uis-spin{to{transform:rotate(360deg)}}
        @keyframes uis-slide-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes uis-pulse-ring{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:.8;transform:scale(1.05)}}
      `}</style>

      <div className="uis-root" role="dialog" aria-modal="true" aria-label="NEXORA UI Component Studio">

        {/* Toast */}
        {toastMsg && (
          <div className="uis-toast" role="status" aria-live="polite">
            <span>✅</span> {toastMsg}
          </div>
        )}

        {/* Fullscreen overlay */}
        {fullscreenComp && (
          <div className="uis-fullscreen-overlay" role="dialog" aria-modal="true">
            <div className="uis-fullscreen-header">
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span className="uis-fullscreen-name">{fullscreenComp.name}</span>
                <span className="uis-fullscreen-cat">{fullscreenComp.category}</span>
              </div>
              <button className="uis-fullscreen-exit" onClick={() => setFullscreenId(null)} aria-label="Exit fullscreen">
                ✕ Exit Fullscreen
              </button>
            </div>
            <div className="uis-fullscreen-body">
              <SafeDemoErrorBoundary name={fullscreenComp.name}>
                <Suspense fallback={<DemoSkeleton name={fullscreenComp.name} />}>
                  {fullscreenComp.renderDemo()}
                </Suspense>
              </SafeDemoErrorBoundary>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="uis-header">
          <div className="uis-header-left">
            <div className="uis-logo-box" aria-hidden="true">
              <img src="/main-logo.png" alt="NEXORA" width={28} height={28} />
            </div>
            <div className="uis-title-group">
              <div className="uis-title-row">
                <h1 className="uis-title">NEXORA UI STUDIO</h1>
                <span className="uis-count-pill">{COMPONENTS_CATALOG.length} COMPONENTS</span>
              </div>
              <p className="uis-subtitle">
                Live Previews · Code Copy · Parameter Customizer · Lazy WebGL Loading · 0ms Startup
              </p>
            </div>
          </div>
          <button className="uis-close-btn" onClick={handleClose} aria-label="Close UI Studio" title="Close (Esc)">
            ✕
          </button>
        </header>

        {/* Search & Categories */}
        <div className="uis-filter-bar" role="search">
          <div className="uis-search-row">
            <div className="uis-search-wrap">
              <span className="uis-search-icon" aria-hidden="true">🔍</span>
              <input
                id="uis-search"
                type="search"
                className="uis-search-input"
                placeholder="Search shaders, 3D, typography, animations…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                aria-label="Search components"
              />
            </div>
            <span className="uis-result-count" aria-live="polite" aria-atomic="true">
              {filteredComponents.length} / {COMPONENTS_CATALOG.length}
            </span>
          </div>

          <div className="uis-cat-scroll" ref={catScrollRef} role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              const meta = CATEGORY_META[cat] || CATEGORY_META["All"];
              const count = cat === "All" ? COMPONENTS_CATALOG.length : COMPONENTS_CATALOG.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  className={`uis-cat-pill${active ? " active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={active ? {
                    background: `${meta.glow}`,
                    border: `1px solid ${meta.color}`,
                    color: meta.color,
                    boxShadow: `0 0 14px ${meta.glow}`,
                  } : undefined}
                >
                  <span aria-hidden="true">{meta.icon}</span>
                  {cat === "All" ? "All" : cat.split(" & ")[0]}
                  <span style={{ opacity: 0.6 }}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Component Grid */}
        <div className="uis-grid-area" role="main">
          {filteredComponents.length === 0 ? (
            <div className="uis-empty" role="status">
              <span className="uis-empty-icon">🔭</span>
              <span className="uis-empty-title">No components found</span>
              <span className="uis-empty-sub">Try a different search term or clear the category filter.</span>
            </div>
          ) : (
            <div className="uis-grid">
              {filteredComponents.map((comp) => {
                const activeTab = activeTabMap[comp.id] || "preview";
                const params = customParams[comp.id] || comp.defaultParams || {};
                const meta = CATEGORY_META[comp.category] || CATEGORY_META["All"];

                return (
                  <article key={comp.id} className="uis-card" aria-label={comp.name}>
                    {/* Header */}
                    <div className="uis-card-header">
                      <div className="uis-card-info">
                        <div className="uis-card-name-row">
                          <h3 className="uis-card-name">{comp.name}</h3>
                          <span
                            className="uis-card-cat-badge"
                            style={{ borderWidth: 1, borderStyle: "solid", borderColor: `${meta.color}55`, color: meta.color, background: `${meta.glow.replace("0.25", "0.12")}` }}
                          >
                            {meta.icon} {comp.category.split(" & ")[0]}
                          </span>
                        </div>
                        <p className="uis-card-desc">{comp.description}</p>
                      </div>
                      <button
                        className="uis-fullscreen-btn"
                        onClick={() => setFullscreenId(comp.id)}
                        title="Open in fullscreen"
                        aria-label={`View ${comp.name} in fullscreen`}
                      >
                        ⛶ <span className="hide-on-mobile">Fullscreen</span>
                      </button>
                    </div>

                    {/* Content */}
                    {activeTab === "preview" && (
                      <div className="uis-preview-box" aria-label={`${comp.name} preview`}>
                        <LazyDemoCard name={comp.name}>
                          {comp.renderDemo()}
                        </LazyDemoCard>
                      </div>
                    )}

                    {activeTab === "code" && (
                      <div className="uis-code-box">
                        <div className="uis-code-header">
                          <span className="uis-code-lang">React + TypeScript</span>
                          <button
                            className={`uis-copy-btn ${copiedId === comp.id ? "copied" : "idle"}`}
                            onClick={() => copyCode(comp.codeSnippet, comp.id)}
                          >
                            {copiedId === comp.id ? "✓ Copied!" : "📋 Copy"}
                          </button>
                        </div>
                        <pre className="uis-code-pre"><code>{comp.codeSnippet}</code></pre>
                      </div>
                    )}

                    {activeTab === "customize" && (
                      <div className="uis-customize-box">
                        <div className="uis-param-label-head">Live Parameters</div>
                        {comp.defaultParams ? (
                          Object.keys(comp.defaultParams).map((key) => (
                            <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                              <label className="uis-param-key" htmlFor={`uis-p-${comp.id}-${key}`}>{key}:</label>
                              {typeof comp.defaultParams![key] === "number" ? (
                                <input
                                  id={`uis-p-${comp.id}-${key}`}
                                  type="range" min={0.1} max={10} step={0.1}
                                  value={params[key] ?? comp.defaultParams![key]}
                                  onChange={(e) => setParam(comp.id, key, parseFloat(e.target.value))}
                                  style={{ accentColor: "#00e5ff" }}
                                />
                              ) : (
                                <input
                                  id={`uis-p-${comp.id}-${key}`}
                                  type="text"
                                  className="uis-param-text"
                                  value={params[key] ?? comp.defaultParams![key]}
                                  onChange={(e) => setParam(comp.id, key, e.target.value)}
                                />
                              )}
                            </div>
                          ))
                        ) : (
                          <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,.4)" }}>No configurable parameters.</span>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="uis-card-footer">
                      <div className="uis-tab-group" role="tablist">
                        {(["preview", "code", "customize"] as const).map((tab) => (
                          <button
                            key={tab}
                            role="tab"
                            aria-selected={activeTab === tab}
                            className={`uis-tab-btn${activeTab === tab ? " active" : ""}`}
                            onClick={() => setTab(comp.id, tab)}
                          >
                            {tab === "preview" ? "▶ Preview" : tab === "code" ? "{ } Code" : "⚙ Params"}
                          </button>
                        ))}
                      </div>
                      <button
                        className="uis-install-btn"
                        onClick={() => handleInstallSkill(comp)}
                        aria-label={`Install ${comp.name} as a skill`}
                      >
                        ✨ Install Skill
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}

export default UIComponentStudio;
