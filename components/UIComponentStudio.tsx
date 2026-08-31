"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { CloudShader } from "@/components/ui/cloud-shader";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Notch, type NotchItem } from "@/components/ui/notch";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";
import { SquigglyText } from "@/components/ui/squiggly-text";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { GooeyInput } from "@/components/ui/gooey-input";
import { Tooltip } from "@/components/ui/tooltip-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Terminal } from "@/components/ui/terminal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { AsciiArt } from "@/components/ui/ascii-art";
import { CanvasText } from "@/components/ui/canvas-text";
import { Globe3D } from "@/components/ui/3d-globe";
import { DitherShader } from "@/components/ui/dither-shader";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ImagesBadge } from "@/components/ui/images-badge";
import { Keyboard } from "@/components/ui/keyboard";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Scales } from "@/components/ui/scales";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Card as AppleCard, Carousel as AppleCarousel } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Carousel from "@/components/ui/carousel";
import { CodeBlock } from "@/components/ui/code-block";
import ColourfulText from "@/components/ui/colourful-text";
import { CometCard } from "@/components/ui/comet-card";
import { Compare } from "@/components/ui/compare";
import { Cover } from "@/components/ui/cover";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { ExpandableCardList } from "@/components/ui/expandable-card";
import { FeaturesSection } from "@/components/ui/features-section";
import { FileUpload } from "@/components/ui/file-upload";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FocusCards } from "@/components/ui/focus-cards";
import { HeroSectionOne } from "@/components/ui/hero-section";
import { Lens } from "@/components/ui/lens";
import { LoaderOne, LoaderThree, LoaderFour } from "@/components/ui/loader";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton } from "@/components/ui/resizable-navbar";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "@/components/ui/animated-modal";

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
  renderDemo: (params?: Record<string, any>) => React.ReactNode;
  defaultParams?: Record<string, any>;
}

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
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            textAlign: "center",
            background: "rgba(220, 38, 38, 0.08)",
            borderRadius: 12,
            border: "1px solid rgba(220, 38, 38, 0.3)",
          }}
        >
          <span style={{ fontSize: "1.2rem", marginBottom: 4 }}>⚠️</span>
          <span style={{ fontSize: "0.78rem", fontWeight: "bold", color: "#f87171" }}>
            {this.props.name} WebGL Preview Standby
          </span>
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.6)", marginTop: 4, maxWidth: 260 }}>
            {this.state.errorMsg}
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

function LazyDemoCard({ comp, params }: { comp: UIComponentItem; params: Record<string, any> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        minHeight: 180,
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isVisible ? (
        <SafeDemoErrorBoundary name={comp.name}>
          {comp.renderDemo(params)}
        </SafeDemoErrorBoundary>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "rgba(0, 229, 255, 0.7)",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: "2px solid rgba(0, 229, 255, 0.3)",
              borderTopColor: "#00e5ff",
              animation: "spin 1s linear infinite",
            }}
          />
          <span style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.5)" }}>
            Loading {comp.name}...
          </span>
        </div>
      )}
    </div>
  );
}

export function UIComponentStudio({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "preview" | "code" | "customize">>({});
  const [customParams, setCustomParams] = useState<Record<string, Record<string, any>>>({});
  const [fullscreenComponentId, setFullscreenComponentId] = useState<string | null>(null);
  const [skillInstallToast, setSkillInstallToast] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleOpen = () => setInternalOpen(true);
    window.addEventListener("OPEN_UI_STUDIO", handleOpen);
    return () => window.removeEventListener("OPEN_UI_STUDIO", handleOpen);
  }, []);

  const isModalOpen = isOpen === true || internalOpen === true;

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        if (fullscreenComponentId) {
          setFullscreenComponentId(null);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, fullscreenComponentId]);

  const categories = [
    "All",
    "WebGL & Shaders",
    "Hardware & 3D",
    "Kinetic Typography",
    "Controls & Inputs",
    "Cards & Navigation",
    "Ambient FX & Loaders",
  ];

  const componentsCatalog: UIComponentItem[] = useMemo(() => [
    {
      id: "cloud-shader",
      name: "Cloud Shader",
      category: "WebGL & Shaders",
      description: "Hardware accelerated procedural volumetric cloud simulation shader.",
      codeSnippet: `import { CloudShader } from "@/components/ui/cloud-shader";\n\nexport function Demo() {\n  return <CloudShader className="h-[28rem] w-full" speed={1} />;\n}`,
      renderDemo: (p) => <CloudShader className="h-72 w-full" speed={p?.speed || 1} />,
      defaultParams: { speed: 1 },
    },
    {
      id: "macbook-scroll",
      name: "Macbook Scroll",
      category: "Hardware & 3D",
      description: "3D Perspective MacBook hardware mockup with dynamic scroll-driven lid angle.",
      codeSnippet: `import { MacbookScroll } from "@/components/ui/macbook-scroll";\n\nexport function Demo() {\n  return (\n    <MacbookScroll\n      title="Built with Pure Tailwind & React."\n      src="https://assets.aceternity.com/linear-demo.webp"\n    />\n  );\n}`,
      renderDemo: (p) => (
        <div className="w-full overflow-hidden bg-neutral-950 rounded-2xl">
          <MacbookScroll title={p?.title || "This Macbook is built with pure Tailwind."} />
        </div>
      ),
      defaultParams: { title: "This Macbook is built with pure Tailwind." },
    },
    {
      id: "notch",
      name: "Dynamic Notch",
      category: "Controls & Inputs",
      description: "Interactive floating dynamic island notch with live color and alignment controls.",
      codeSnippet: `import { Notch } from "@/components/ui/notch";\n\nexport function Demo() {\n  return <Notch items={items} position="bottom" />;\n}`,
      renderDemo: (p) => {
        const items: NotchItem[] = [
          { id: "bg", label: p?.theme || "Theme", options: [{ id: "cyan", label: "Cyan" }, { id: "purple", label: "Purple" }], value: "cyan", onChange: () => {} },
          { id: "align", label: "Align", options: [{ id: "center", label: "Center" }, { id: "left", label: "Left" }], value: "center", onChange: () => {} },
        ];
        return (
          <div className="relative h-64 w-full flex items-center justify-center rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-neutral-400 text-sm">{p?.label || "Interactive Notch anchored at bottom"}</span>
            <Notch items={items} position="bottom" className="absolute bottom-4" />
          </div>
        );
      },
      defaultParams: { theme: "Theme", label: "Interactive Notch anchored at bottom" },
    },
    {
      id: "parallax-hero-images",
      name: "Parallax Hero Images",
      category: "WebGL & Shaders",
      description: "Mouse-tracking 3D depth floating images around periphery.",
      codeSnippet: `import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";\n\nexport function Demo() {\n  return <ParallaxHeroImages images={images} variant="edge-focus" />;\n}`,
      renderDemo: (p) => (
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
          <ParallaxHeroImages images={[]} />
          <h2 className="relative z-10 text-2xl font-bold text-white">{p?.title || "Move cursor for Parallax"}</h2>
        </div>
      ),
      defaultParams: { title: "Move cursor for Parallax" },
    },
    {
      id: "squiggly-text",
      name: "Squiggly Text",
      category: "Kinetic Typography",
      description: "SVG turbulent displacement animated squiggly wiggle text effect.",
      codeSnippet: `import { SquigglyText } from "@/components/ui/squiggly-text";\n\nexport function Demo() {\n  return (\n    <h1 className="text-4xl font-bold text-white">\n      Ship at <SquigglyText className="text-cyan-400">warp speed</SquigglyText>\n    </h1>\n  );\n}`,
      renderDemo: (p) => (
        <div className="flex h-48 w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
          <h2 className="text-3xl font-bold text-white text-center">
            Build applications at <SquigglyText className="text-amber-400 font-extrabold">{p?.highlight || "warp speed"}</SquigglyText>
          </h2>
        </div>
      ),
      defaultParams: { highlight: "warp speed" },
    },
    {
      id: "text-flipping-board",
      name: "Text Flipping Board",
      category: "Kinetic Typography",
      description: "Mechanical split-flap airport schedule style character flipper board.",
      codeSnippet: `import { TextFlippingBoard } from "@/components/ui/text-flipping-board";\n\nexport function Demo() {\n  return <TextFlippingBoard text="STAY HUNGRY\\nSTAY FOOLISH" />;\n}`,
      renderDemo: (p) => (
        <div className="flex w-full justify-center bg-neutral-950 rounded-2xl p-6 border border-neutral-800">
          <TextFlippingBoard text={p?.text || "JARVIS AI OS\nNEXORA APEX"} />
        </div>
      ),
      defaultParams: { text: "JARVIS AI OS\nNEXORA APEX" },
    },
    {
      id: "gooey-input",
      name: "Gooey Search Input",
      category: "Controls & Inputs",
      description: "Liquid SVG filter search input with glowing particle focus feedback.",
      codeSnippet: `import { GooeyInput } from "@/components/ui/gooey-input";\n\nexport function Demo() {\n  return <GooeyInput placeholder="Search everything..." />;\n}`,
      renderDemo: (p) => <GooeyInput placeholder={p?.placeholder || "Search knowledge & agents..."} />,
      defaultParams: { placeholder: "Search knowledge & agents..." },
    },
    {
      id: "tooltip-card",
      name: "Tooltip Card (Tyler Durden)",
      category: "Cards & Navigation",
      description: "Rich interactive hover card with profile picture and bio preview.",
      codeSnippet: `import { Tooltip } from "@/components/ui/tooltip-card";\n\nexport function Demo() {\n  return (\n    <Tooltip content={<Card />}>\n      <span className="font-bold text-cyan-400">Tyler Durden</span>\n    </Tooltip>\n  );\n}`,
      renderDemo: (p) => (
        <div className="flex h-48 w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-sm text-neutral-300">
          Hover over &nbsp;
          <Tooltip
            content={
              <div className="space-y-2">
                <img
                  src="https://assets.aceternity.com/screenshots/tyler.webp"
                  alt="Tyler"
                  className="h-28 w-full rounded-lg object-cover"
                />
                <h4 className="font-bold text-white">{p?.name || "Tyler Durden"}</h4>
                <p className="text-xs text-neutral-400">{p?.role || "Soap Developer & Project Mayhem Lead."}</p>
              </div>
            }
          >
            <span className="font-bold text-cyan-400 underline decoration-cyan-400/40">{p?.name || "Tyler Durden"}</span>
          </Tooltip>
          &nbsp; to inspect credentials.
        </div>
      ),
      defaultParams: { name: "Tyler Durden", role: "Soap Developer & Project Mayhem Lead." },
    },
    {
      id: "magnetic-button",
      name: "Magnetic Button",
      category: "Controls & Inputs",
      description: "Physics-based magnetic button attracted to cursor trajectory.",
      codeSnippet: `import { MagneticButton } from "@/components/ui/magnetic-button";\n\nexport function Demo() {\n  return (\n    <MagneticButton>\n      <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black">\n        Follow @jarvis\n      </button>\n    </MagneticButton>\n  );\n}`,
      renderDemo: (p) => (
        <div className="flex h-48 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <MagneticButton>
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/20 active:scale-95">
              {p?.label || "Attracts Cursor Magnetically ⚡"}
            </button>
          </MagneticButton>
        </div>
      ),
      defaultParams: { label: "Attracts Cursor Magnetically ⚡" },
    },
    {
      id: "terminal",
      name: "Interactive Terminal",
      category: "Controls & Inputs",
      description: "Automated typing and command execution terminal emulator.",
      codeSnippet: `import { Terminal } from "@/components/ui/terminal";\n\nexport function Demo() {\n  return <Terminal typingSpeed={40} />;\n}`,
      renderDemo: () => <Terminal className="my-2" />,
      defaultParams: { typingSpeed: 40 },
    },
    {
      id: "3d-card",
      name: "3D Perspective Card",
      category: "Hardware & 3D",
      description: "CSS 3D perspective transform with mouse elevation and translateZ.",
      codeSnippet: `import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";\n\nexport function Demo() {\n  return (\n    <CardContainer>\n      <CardBody className="bg-neutral-900 border border-white/20 p-6 rounded-2xl">\n        <CardItem translateZ="50" className="text-xl font-bold text-white">Title</CardItem>\n      </CardBody>\n    </CardContainer>\n  );\n}`,
      renderDemo: (p) => (
        <CardContainer>
          <CardBody className="relative h-auto w-80 rounded-2xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
            <CardItem translateZ={40} className="text-lg font-bold text-white">
              {p?.title || "Float Elements in 3D Air"}
            </CardItem>
            <CardItem translateZ={50} as="p" className="mt-2 text-xs text-neutral-400">
              {p?.subtitle || "Hover over this card to activate the perspective matrix."}
            </CardItem>
            <CardItem translateZ={70} className="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
                alt="thumbnail"
                className="h-36 w-full rounded-xl object-cover"
              />
            </CardItem>
            <div className="mt-6 flex items-center justify-between">
              <CardItem translateZ={30} as="span" className="text-xs text-cyan-400">
                Explore →
              </CardItem>
              <CardItem translateZ={40} as="button" className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-black">
                Launch
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ),
      defaultParams: { title: "Float Elements in 3D Air", subtitle: "Hover over this card to activate the perspective matrix." },
    },
    {
      id: "ascii-art",
      name: "ASCII Art Matrix",
      category: "WebGL & Shaders",
      description: "Image-to-ASCII real-time brightness character matrix generator.",
      codeSnippet: `import { AsciiArt } from "@/components/ui/ascii-art";\n\nexport function Demo() {\n  return <AsciiArt src="avatar.webp" resolution={60} color="#00f0ff" />;\n}`,
      renderDemo: (p) => <AsciiArt src="https://assets.aceternity.com/avatars/manu.webp" resolution={p?.resolution || 55} color={p?.color || "#00f0ff"} />,
      defaultParams: { resolution: 55, color: "#00f0ff" },
    },
    {
      id: "canvas-text",
      name: "Canvas Kinetic Text",
      category: "Kinetic Typography",
      description: "Dynamic particle canvas text with scanlines and glow trails.",
      codeSnippet: `import { CanvasText } from "@/components/ui/canvas-text";\n\nexport function Demo() {\n  return <CanvasText text="Lightning Speed" />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-40 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <CanvasText text={p?.text || "Lightning Speed"} />
        </div>
      ),
      defaultParams: { text: "Lightning Speed" },
    },
    {
      id: "3d-globe",
      name: "3D Interactive Globe",
      category: "Hardware & 3D",
      description: "Rotating WebGL vector globe with geographic nodes and glow ring.",
      codeSnippet: `import { Globe3D } from "@/components/ui/3d-globe";\n\nexport function Demo() {\n  return <Globe3D markers={markers} />;\n}`,
      renderDemo: () => (
        <Globe3D
          markers={[
            { lat: 40.7128, lng: -74.006, label: "New York" },
            { lat: 51.5074, lng: -0.1278, label: "London" },
            { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
            { lat: 28.6139, lng: 77.209, label: "New Delhi" },
          ]}
        />
      ),
    },
    {
      id: "dither-shader",
      name: "Retro Dither Shader",
      category: "WebGL & Shaders",
      description: "Bayer 4x4 matrix dithering algorithm canvas filter.",
      codeSnippet: `import { DitherShader } from "@/components/ui/dither-shader";\n\nexport function Demo() {\n  return <DitherShader gridSize={2} />;\n}`,
      renderDemo: (p) => <DitherShader className="h-64 w-full" gridSize={p?.gridSize || 3} />,
      defaultParams: { gridSize: 3 },
    },
    {
      id: "dotted-glow",
      name: "Dotted Glow Grid",
      category: "Ambient FX & Loaders",
      description: "Interactive radial glow pulsing matrix background.",
      codeSnippet: `import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";\n\nexport function Demo() {\n  return <DottedGlowBackground gap={16} radius={1.5} />;\n}`,
      renderDemo: (p) => (
        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
          <DottedGlowBackground gap={p?.gap || 18} />
          <span className="relative z-10 text-lg font-bold text-white">{p?.label || "Dynamic Grid Pulse"}</span>
        </div>
      ),
      defaultParams: { gap: 18, label: "Dynamic Grid Pulse" },
    },
    {
      id: "encrypted-text",
      name: "Encrypted Matrix Text",
      category: "Kinetic Typography",
      description: "Matrix cipher character unscrambling animation.",
      codeSnippet: `import { EncryptedText } from "@/components/ui/encrypted-text";\n\nexport function Demo() {\n  return <EncryptedText text="Welcome to the Matrix, Neo." />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-xl font-mono">
          <EncryptedText text={p?.text || "Welcome to NEXORA APEX OS, Vishwajeet."} />
        </div>
      ),
      defaultParams: { text: "Welcome to NEXORA APEX OS, Vishwajeet." },
    },
    {
      id: "colourful-text",
      name: "Colourful Gradient Text",
      category: "Kinetic Typography",
      description: "Smooth continuous rainbow color shifting kinetic text.",
      codeSnippet: `import ColourfulText from "@/components/ui/colourful-text";\n\nexport function Demo() {\n  return <h2>Ship with <ColourfulText text="Autonomous Intelligence" /></h2>;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-black">
          <ColourfulText text={p?.text || "Autonomous Agent Fleet"} />
        </div>
      ),
      defaultParams: { text: "Autonomous Agent Fleet" },
    },
    {
      id: "cover",
      name: "Cover Interactive Beam",
      category: "Kinetic Typography",
      description: "Luminescent animated spotlight container covering key headline words.",
      codeSnippet: `import { Cover } from "@/components/ui/cover";\n\nexport function Demo() {\n  return <h1>Build at <Cover>Warp Speed</Cover></h1>;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-bold">
          Empowering <Cover className="mx-2">{p?.text || "Next-Gen AI"}</Cover> Systems
        </div>
      ),
      defaultParams: { text: "Next-Gen AI" },
    },
    {
      id: "container-text-flip",
      name: "Container Text Flip",
      category: "Kinetic Typography",
      description: "Flipping dynamic word transition cycling through phrases.",
      codeSnippet: `import { ContainerTextFlip } from "@/components/ui/container-text-flip";\n\nexport function Demo() {\n  return <ContainerTextFlip words={['Fast', 'Reliable', 'Autonomous']} />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-xl">
          <span className="text-neutral-400 mr-2">Architecting</span>
          <ContainerTextFlip words={p?.words ? p.words.split(",") : ["Fast", "Reliable", "Autonomous", "Scalable"]} />
        </div>
      ),
      defaultParams: { words: "Fast,Reliable,Autonomous,Scalable" },
    },
    {
      id: "layout-text-flip",
      name: "Layout Text Flip",
      category: "Kinetic Typography",
      description: "Perspective 3D rotation flip on word update.",
      codeSnippet: `import { LayoutTextFlip } from "@/components/ui/layout-text-flip";\n\nexport function Demo() {\n  return <LayoutTextFlip words={['Design', 'Systems', 'Components']} />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 text-2xl font-black text-cyan-400">
          <LayoutTextFlip words={p?.words ? p.words.split(",") : ["Design", "Systems", "Components"]} />
        </div>
      ),
      defaultParams: { words: "Design,Systems,Components" },
    },
    {
      id: "text-hover-effect",
      name: "Text Hover SVG Reveal",
      category: "Kinetic Typography",
      description: "Cursor-driven radial gradient spotlight revealing SVG text stroke fill.",
      codeSnippet: `import { TextHoverEffect } from "@/components/ui/text-hover-effect";\n\nexport function Demo() {\n  return <TextHoverEffect text="JARVIS" />;\n}`,
      renderDemo: (p) => <TextHoverEffect text={p?.text || "JARVIS"} />,
      defaultParams: { text: "JARVIS" },
    },
    {
      id: "images-badge",
      name: "Images Badge Hover Fan",
      category: "Cards & Navigation",
      description: "Interactive floating image stack that fans out on hover.",
      codeSnippet: `import { ImagesBadge } from "@/components/ui/images-badge";\n\nexport function Demo() {\n  return <ImagesBadge text="Introducing Pro Features" images={images} />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-44 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <ImagesBadge text={p?.text || "Explore Agent Constellation"} images={[]} />
        </div>
      ),
      defaultParams: { text: "Explore Agent Constellation" },
    },
    {
      id: "keyboard",
      name: "Mechanical 3D Keyboard",
      category: "Controls & Inputs",
      description: "Full mechanical keyboard with live WebAudio clicks and keystroke preview.",
      codeSnippet: `import { Keyboard } from "@/components/ui/keyboard";\n\nexport function Demo() {\n  return <Keyboard enableSound={true} showPreview={true} />;\n}`,
      renderDemo: () => <Keyboard enableSound={true} showPreview={true} />,
    },
    {
      id: "webcam-pixel-grid",
      name: "Webcam Pixel Matrix",
      category: "WebGL & Shaders",
      description: "Interactive elevation matrix grid with real-time waveform displacement.",
      codeSnippet: `import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";\n\nexport function Demo() {\n  return <WebcamPixelGrid gridCols={40} gridRows={30} />;\n}`,
      renderDemo: () => (
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
          <WebcamPixelGrid gridCols={35} gridRows={25} />
          <h3 className="relative z-10 text-lg font-bold text-white backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            Realtime Pixel Matrix
          </h3>
        </div>
      ),
    },
    {
      id: "animated-testimonials",
      name: "Animated Testimonials",
      category: "Cards & Navigation",
      description: "Kinetic testimonial carousel with stacked 3D avatar cards.",
      codeSnippet: `import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";\n\nexport function Demo() {\n  return <AnimatedTestimonials testimonials={testimonials} />;\n}`,
      renderDemo: () => (
        <AnimatedTestimonials
          testimonials={[
            {
              quote: "The autonomous agent constellation completely automated our deployment pipeline.",
              name: "Sarah Chen",
              designation: "Head of AI Architecture",
              src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop",
            },
            {
              quote: "Zero fabrication verification with Level 6 Human approval is revolutionary.",
              name: "Michael Rodriguez",
              designation: "CTO, CloudScale",
              src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
            },
          ]}
        />
      ),
    },
    {
      id: "apple-cards-carousel",
      name: "Apple Cards Carousel",
      category: "Cards & Navigation",
      description: "WWDC style expandable cards carousel with rich modal dialogue.",
      codeSnippet: `import { Card, Carousel } from "@/components/ui/apple-cards-carousel";\n\nexport function Demo() {\n  return <Carousel items={cards} />;\n}`,
      renderDemo: () => {
        const cardsData = [
          { category: "Intelligence", title: "Autonomous Agents", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop" },
          { category: "Workflow", title: "Instant Video Renderer", src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=800&auto=format&fit=crop" },
          { category: "Hardware", title: "PC Bridge Telemetry", src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=800&auto=format&fit=crop" },
        ];
        return <AppleCarousel items={cardsData.map((c, i) => <AppleCard key={i} card={c} index={i} />)} />;
      },
    },
    {
      id: "beams-collision",
      name: "Beams with Collision",
      category: "Ambient FX & Loaders",
      description: "Laser beams with physics particle spark explosions upon collision.",
      codeSnippet: `import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";\n\nexport function Demo() {\n  return (\n    <BackgroundBeamsWithCollision>\n      <h2 className="text-3xl font-bold text-white">Exploding Beams</h2>\n    </BackgroundBeamsWithCollision>\n  );\n}`,
      renderDemo: (p) => (
        <BackgroundBeamsWithCollision>
          <h3 className="text-2xl font-extrabold text-white">{p?.title || "Laser Beam Sparks Collision"}</h3>
        </BackgroundBeamsWithCollision>
      ),
      defaultParams: { title: "Laser Beam Sparks Collision" },
    },
    {
      id: "background-lines",
      name: "Background Lines Flow",
      category: "Ambient FX & Loaders",
      description: "Curved SVG glowing path lines flowing in the background.",
      codeSnippet: `import { BackgroundLines } from "@/components/ui/background-lines";\n\nexport function Demo() {\n  return <BackgroundLines><h2>Flowing Energy</h2></BackgroundLines>;\n}`,
      renderDemo: (p) => (
        <BackgroundLines className="h-64 flex items-center justify-center">
          <h3 className="text-xl font-bold text-white">{p?.title || "Flowing Quantum Lines"}</h3>
        </BackgroundLines>
      ),
      defaultParams: { title: "Flowing Quantum Lines" },
    },
    {
      id: "background-ripple",
      name: "Background Ripple",
      category: "Ambient FX & Loaders",
      description: "Expanding concentric acoustic ripple waves.",
      codeSnippet: `import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";\n\nexport function Demo() {\n  return <BackgroundRippleEffect />;\n}`,
      renderDemo: () => (
        <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
          <BackgroundRippleEffect />
          <span className="relative z-10 font-bold text-white">Concentric Ripple Center</span>
        </div>
      ),
    },
    {
      id: "card-spotlight",
      name: "Card Spotlight",
      category: "Cards & Navigation",
      description: "Mouse-following radial spotlight highlight on card hover.",
      codeSnippet: `import { CardSpotlight } from "@/components/ui/card-spotlight";\n\nexport function Demo() {\n  return <CardSpotlight>Card Content</CardSpotlight>;\n}`,
      renderDemo: (p) => (
        <CardSpotlight className="h-52 w-full max-w-sm mx-auto p-6 flex flex-col justify-center">
          <h4 className="text-lg font-bold text-white">{p?.title || "Spotlight Hover"}</h4>
          <p className="text-xs text-neutral-400 mt-2">{p?.subtitle || "Move your mouse across this card to see the radial gradient reveal."}</p>
        </CardSpotlight>
      ),
      defaultParams: { title: "Spotlight Hover", subtitle: "Move your mouse across this card to see the radial gradient reveal." },
    },
    {
      id: "comet-card",
      name: "Comet Glow Card",
      category: "Cards & Navigation",
      description: "Orbiting luminous comet light trail following card border.",
      codeSnippet: `import { CometCard } from "@/components/ui/comet-card";\n\nexport function Demo() {\n  return <CometCard>Comet Border</CometCard>;\n}`,
      renderDemo: (p) => (
        <CometCard className="h-48 w-full max-w-sm mx-auto flex items-center justify-center">
          <span className="text-white font-bold">{p?.title || "Orbiting Comet Border"}</span>
        </CometCard>
      ),
      defaultParams: { title: "Orbiting Comet Border" },
    },
    {
      id: "compare-slider",
      name: "Compare Slider",
      category: "Hardware & 3D",
      description: "Interactive before/after split screen image comparison slider.",
      codeSnippet: `import { Compare } from "@/components/ui/compare";\n\nexport function Demo() {\n  return <Compare firstImage="before.png" secondImage="after.png" />;\n}`,
      renderDemo: () => <Compare className="h-64 w-full max-w-lg mx-auto" firstImage="https://assets.aceternity.com/code-problem.png" secondImage="https://assets.aceternity.com/code-solution.png" />,
    },
    {
      id: "draggable-card",
      name: "Draggable Physics Card",
      category: "Hardware & 3D",
      description: "Physics spring-inertia draggable card with reset boundary.",
      codeSnippet: `import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";\n\nexport function Demo() {\n  return <DraggableCardContainer><DraggableCardBody>Drag Me</DraggableCardBody></DraggableCardContainer>;\n}`,
      renderDemo: () => (
        <DraggableCardContainer className="h-56 w-full flex items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <DraggableCardBody className="p-4 bg-neutral-800 rounded-xl border border-neutral-700 text-sm font-bold text-white">
            ✋ Grab & Drag Me Around
          </DraggableCardBody>
        </DraggableCardContainer>
      ),
    },
    {
      id: "expandable-cards",
      name: "Expandable Cards List",
      category: "Cards & Navigation",
      description: "Smooth expanding accordion card list with rich details on click.",
      codeSnippet: `import { ExpandableCardList } from "@/components/ui/expandable-card";\n\nexport function Demo() {\n  return <ExpandableCardList items={items} />;\n}`,
      renderDemo: () => (
        <ExpandableCardList
          items={[
            {
              title: "Autonomous Fleet Orchestration",
              description: "18 specialized agent personas with real-time reasoning traces.",
              src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
              ctaText: "Deploy",
              content: () => <p className="text-xs text-neutral-300">Full multi-tier execution tree with Level 6 Human Approval Gate.</p>,
            },
          ]}
        />
      ),
    },
    {
      id: "features-section",
      name: "Bento Features Grid",
      category: "Cards & Navigation",
      description: "Bento grid layout highlighting core platform capabilities.",
      codeSnippet: `import { FeaturesSection } from "@/components/ui/features-section";\n\nexport function Demo() {\n  return <FeaturesSection />;\n}`,
      renderDemo: () => <FeaturesSection className="my-2" />,
    },
    {
      id: "focus-cards",
      name: "Focus Cards Hover Blur",
      category: "Cards & Navigation",
      description: "Hovering over a card blurs out other neighboring cards.",
      codeSnippet: `import { FocusCards } from "@/components/ui/focus-cards";\n\nexport function Demo() {\n  return <FocusCards cards={cards} />;\n}`,
      renderDemo: () => {
        const cards = [
          { title: "Quantum Neural Net", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
          { title: "Autonomous Fleet", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
        ];
        return <FocusCards cards={cards} />;
      },
    },
    {
      id: "lens",
      name: "Interactive Zoom Lens",
      category: "Controls & Inputs",
      description: "Magnifying inspection lens following cursor over imagery.",
      codeSnippet: `import { Lens } from "@/components/ui/lens";\n\nexport function Demo() {\n  return <Lens><img src="diagram.png" /></Lens>;\n}`,
      renderDemo: () => (
        <Lens className="h-56 w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop"
            alt="mesh"
            className="h-full w-full object-cover"
          />
        </Lens>
      ),
    },
    {
      id: "loaders-suite",
      name: "Futuristic Loaders Suite",
      category: "Ambient FX & Loaders",
      description: "Hardware-inspired cyberpunk neon spinners and loading bars.",
      codeSnippet: `import { LoaderOne, LoaderThree, LoaderFour } from "@/components/ui/loader";\n\nexport function Demo() {\n  return <div className="flex gap-4"><LoaderOne /><LoaderThree /><LoaderFour /></div>;\n}`,
      renderDemo: () => (
        <div className="flex h-36 w-full items-center justify-around bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
          <LoaderOne />
          <LoaderThree />
          <LoaderFour />
        </div>
      ),
    },
    {
      id: "noise-background",
      name: "Film Grain Noise",
      category: "Ambient FX & Loaders",
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
      id: "pixelated-canvas",
      name: "Pixelated Canvas Grid",
      category: "WebGL & Shaders",
      description: "Interactive canvas pixel grid responding to mouse velocity.",
      codeSnippet: `import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";\n\nexport function Demo() {\n  return <PixelatedCanvas src="avatar.webp" />;\n}`,
      renderDemo: () => <PixelatedCanvas src="https://assets.aceternity.com/avatars/manu.webp" />,
    },
    {
      id: "pointer-highlight",
      name: "Multiplayer Cursor Highlight",
      category: "Controls & Inputs",
      description: "Collaborative multiplayer style avatar pointer highlight box.",
      codeSnippet: `import { PointerHighlight } from "@/components/ui/pointer-highlight";\n\nexport function Demo() {\n  return <PointerHighlight>Target</PointerHighlight>;\n}`,
      renderDemo: (p) => (
        <div className="flex h-40 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
          <PointerHighlight>
            <span className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-bold text-white">
              {p?.label || "Collaborative Cursor Focus"}
            </span>
          </PointerHighlight>
        </div>
      ),
      defaultParams: { label: "Collaborative Cursor Focus" },
    },
    {
      id: "resizable-navbar",
      name: "Floating Resizable Navbar",
      category: "Cards & Navigation",
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
      id: "scales",
      name: "Scales Audio Visualizer",
      category: "Ambient FX & Loaders",
      description: "Rhythmic bar visualizer scaling with acoustic frequencies.",
      codeSnippet: `import { Scales } from "@/components/ui/scales";\n\nexport function Demo() {\n  return <Scales orientation="horizontal" size={8} />;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
          <Scales orientation="horizontal" size={p?.size || 8} />
        </div>
      ),
      defaultParams: { size: 8 },
    },
    {
      id: "sticky-banner",
      name: "Sticky Notification Banner",
      category: "Cards & Navigation",
      description: "Top-anchored dismissal banner with action button.",
      codeSnippet: `import { StickyBanner } from "@/components/ui/sticky-banner";\n\nexport function Demo() {\n  return <StickyBanner><span>v4.0.0 is Live!</span></StickyBanner>;\n}`,
      renderDemo: (p) => (
        <div className="w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 p-2">
          <StickyBanner>
            <span>{p?.text || "🚀 JARVIS AI OS v4.0.0 is Live & Autonomous!"}</span>
          </StickyBanner>
        </div>
      ),
      defaultParams: { text: "🚀 JARVIS AI OS v4.0.0 is Live & Autonomous!" },
    },
    {
      id: "tracing-beam",
      name: "Tracing Beam Scroll Timeline",
      category: "Ambient FX & Loaders",
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
      id: "file-upload",
      name: "Interactive File Upload",
      category: "Controls & Inputs",
      description: "Drag-and-drop file uploader with real-time vector indexing tags.",
      codeSnippet: `import { FileUpload } from "@/components/ui/file-upload";\n\nexport function Demo() {\n  return <FileUpload onChange={(files) => console.log(files)} />;\n}`,
      renderDemo: () => <FileUpload />,
    },
    {
      id: "floating-dock",
      name: "macOS Floating Dock",
      category: "Cards & Navigation",
      description: "Interactive dock with smooth magnification physics on cursor proximity.",
      codeSnippet: `import { FloatingDock } from "@/components/ui/floating-dock";\n\nexport function Demo() {\n  return <FloatingDock items={links} />;\n}`,
      renderDemo: () => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <FloatingDock
            items={[
              { title: "Home", icon: <span>🏠</span>, href: "#" },
              { title: "Agents", icon: <span>🤖</span>, href: "#" },
              { title: "Memory", icon: <span>🧠</span>, href: "#" },
              { title: "GitHub", icon: <span>🐙</span>, href: "#" },
              { title: "Settings", icon: <span>⚙️</span>, href: "#" },
            ]}
          />
        </div>
      ),
    },
    {
      id: "hero-section",
      name: "High-Conversion Hero",
      category: "Cards & Navigation",
      description: "Complete landing page hero section with badges, CTA buttons, and mockup.",
      codeSnippet: `import { HeroSectionOne } from "@/components/ui/hero-section";\n\nexport function Demo() {\n  return <HeroSectionOne />;\n}`,
      renderDemo: () => <HeroSectionOne className="my-2" />,
    },
    {
      id: "stateful-button",
      name: "Stateful Action Button",
      category: "Controls & Inputs",
      description: "Multi-state button supporting idle, spinner loading, and success confirmation.",
      codeSnippet: `import { Button } from "@/components/ui/stateful-button";\n\nexport function Demo() {\n  return <Button onClick={async () => await fetch('/api')}>Deploy App</Button>;\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <StatefulButton
            onClick={() => new Promise((resolve) => setTimeout(resolve, 2000))}
          >
            {p?.label || "Execute Agent Mission"}
          </StatefulButton>
        </div>
      ),
      defaultParams: { label: "Execute Agent Mission" },
    },
    {
      id: "gemini-effect",
      name: "Google Gemini Curves Effect",
      category: "Ambient FX & Loaders",
      description: "Generative multi-strand glowing curve waves.",
      codeSnippet: `import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";\n\nexport function Demo() {\n  return <GoogleGeminiEffect />;\n}`,
      renderDemo: () => <GoogleGeminiEffect className="h-60" />,
    },
    {
      id: "3d-marquee",
      name: "3D Isometric Marquee",
      category: "Hardware & 3D",
      description: "Infinite scrolling 3D isometric wall showcase.",
      codeSnippet: `import { ThreeDMarquee } from "@/components/ui/3d-marquee";\n\nexport function Demo() {\n  return <ThreeDMarquee images={images} />;\n}`,
      renderDemo: () => <ThreeDMarquee images={[]} />,
    },
    {
      id: "animated-modal",
      name: "Animated Modal Trigger",
      category: "Cards & Navigation",
      description: "Interactive modal trigger with 3D button hover effects.",
      codeSnippet: `import { Modal, ModalTrigger, ModalBody, ModalContent } from "@/components/ui/animated-modal";\n\nexport function Demo() {\n  return (\n    <Modal>\n      <ModalTrigger>Launch Mission</ModalTrigger>\n      <ModalBody><ModalContent>Mission Details</ModalContent></ModalBody>\n    </Modal>\n  );\n}`,
      renderDemo: (p) => (
        <div className="flex h-36 w-full items-center justify-center bg-neutral-950 rounded-2xl border border-neutral-800">
          <Modal>
            <ModalTrigger>{p?.buttonText || "Open Mission Terminal"}</ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h3 className="text-xl font-bold">{p?.modalTitle || "Autonomous Deployment Protocol"}</h3>
                <p className="text-sm text-neutral-300">
                  Ready to deploy 18 autonomous agents across connected cloud infrastructure.
                </p>
              </ModalContent>
              <ModalFooter>
                <button className="rounded-lg bg-cyan-500 px-4 py-2 font-bold text-black">
                  Confirm & Execute
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      ),
      defaultParams: { buttonText: "Open Mission Terminal", modalTitle: "Autonomous Deployment Protocol" },
    },
  ], []);

  // Filtered components
  const filteredComponents = useMemo(() => {
    return componentsCatalog.filter((c: UIComponentItem) => {
      const matchCat = selectedCategory === "All" || c.category === selectedCategory;
      const matchSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [componentsCatalog, selectedCategory, searchQuery]);

  const handleInstallSkill = (comp: UIComponentItem) => {
    setSkillInstallToast(`✨ Skill [${comp.name}] installed into .agents/skills/ & ready for pair programming!`);
    setTimeout(() => setSkillInstallToast(null), 4000);
  };

  const copyCode = (code: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  if (!isModalOpen || !mounted || typeof document === "undefined") return null;

  const fullscreenComp = componentsCatalog.find((c: UIComponentItem) => c.id === fullscreenComponentId);

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "rgba(3, 7, 18, 0.98)",
        backdropFilter: "blur(32px)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Toast Notification */}
      {skillInstallToast && (
        <div
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 1000000,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(6, 78, 59, 0.95)",
            border: "1px solid #10b981",
            borderRadius: 14,
            padding: "12px 20px",
            color: "#6ee7b7",
            fontWeight: "bold",
            fontSize: "0.85rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(16, 185, 129, 0.4)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span>{skillInstallToast}</span>
        </div>
      )}

      {/* Fullscreen Isolated View Modal */}
      {fullscreenComp && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000001,
            background: "#02040a",
            display: "flex",
            flexDirection: "column",
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              paddingBottom: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#00e5ff", letterSpacing: "0.04em" }}>
                {fullscreenComp.name}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: "rgba(0, 229, 255, 0.15)",
                  border: "1px solid rgba(0, 229, 255, 0.35)",
                  color: "#00e5ff",
                  fontWeight: 700,
                }}
              >
                {fullscreenComp.category}
              </span>
            </div>
            <button
              onClick={() => setFullscreenComponentId(null)}
              style={{
                padding: "8px 18px",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✕ Exit Fullscreen
            </button>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
              padding: 20,
              background: "radial-gradient(ellipse at center, rgba(0, 229, 255, 0.05) 0%, #010308 100%)",
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <SafeDemoErrorBoundary name={fullscreenComp.name}>
              {fullscreenComp.renderDemo(customParams[fullscreenComp.id] || fullscreenComp.defaultParams || {})}
            </SafeDemoErrorBoundary>
          </div>
        </div>
      )}

      {/* Top Header Bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 28px",
          background: "rgba(6, 12, 24, 0.94)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(0, 229, 255, 0.22)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "rgba(0, 229, 255, 0.12)",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 16px rgba(0, 229, 255, 0.25)",
            }}
          >
            <img src="/main-logo.png" alt="NEXORA" style={{ width: 28, height: 28, objectFit: "contain" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h1 style={{ margin: 0, fontSize: "1.12rem", fontWeight: 900, letterSpacing: "0.06em", color: "#ffffff" }}>
                NEXORA UI COMPONENT STUDIO
              </h1>
              <span
                style={{
                  fontSize: "0.68rem",
                  padding: "2px 8px",
                  borderRadius: 12,
                  background: "linear-gradient(90deg, #00e5ff 0%, #3b82f6 100%)",
                  color: "#020617",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                53 PRO COMPONENTS
              </span>
            </div>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)" }}>
              Live Interactive Previews · 1-Click Code Copy · Parameter Customizer · Agent Skill Exporter
            </p>
          </div>
        </div>

        <button
          onClick={handleClose}
          aria-label="Close UI Studio"
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
            e.currentTarget.style.borderColor = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
          }}
        >
          ✕
        </button>
      </header>

      {/* Search & Filter Categories */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "14px 28px",
          background: "rgba(4, 9, 18, 0.8)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <div style={{ position: "relative", flex: 1, maxWidth: 480 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: "0.85rem", opacity: 0.6 }}>
              🔍
            </span>
            <input
              type="text"
              placeholder="Search 53+ shaders, 3D cards, inputs, typography & FX..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 14px 9px 38px",
                background: "rgba(12, 20, 36, 0.9)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                borderRadius: 12,
                color: "#ffffff",
                fontSize: "0.82rem",
                outline: "none",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "monospace" }}>
              Showing {filteredComponents.length} of {componentsCatalog.length}
            </span>
          </div>
        </div>

        {/* Categories Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            const count = cat === "All" ? componentsCatalog.length : componentsCatalog.filter((c: UIComponentItem) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: "0.72rem",
                  fontWeight: active ? 800 : 600,
                  fontFamily: "monospace",
                  background: active ? "rgba(0, 229, 255, 0.2)" : "rgba(255, 255, 255, 0.04)",
                  border: active ? "1px solid #00e5ff" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: active ? "#00e5ff" : "rgba(255, 255, 255, 0.7)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: active ? "0 0 14px rgba(0, 229, 255, 0.25)" : "none",
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Component Grid Scroll View */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: 22,
            maxWidth: 1720,
            margin: "0 auto",
          }}
        >
          {filteredComponents.map((comp: UIComponentItem) => {
            const activeTab = activeTabMap[comp.id] || "preview";
            const params = customParams[comp.id] || comp.defaultParams || {};

            return (
              <div
                key={comp.id}
                style={{
                  background: "rgba(8, 14, 28, 0.88)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 229, 255, 0.18)",
                  borderRadius: 20,
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.45)",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Card Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#ffffff" }}>
                        {comp.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.62rem",
                          padding: "2px 7px",
                          borderRadius: 8,
                          background: "rgba(0, 229, 255, 0.12)",
                          border: "1px solid rgba(0, 229, 255, 0.3)",
                          color: "#00e5ff",
                          fontWeight: 700,
                        }}
                      >
                        {comp.category}
                      </span>
                    </div>
                    <p style={{ margin: "4px 0 0 0", fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.4 }}>
                      {comp.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setFullscreenComponentId(comp.id)}
                    title="Fullscreen Mode"
                    style={{
                      padding: "5px 9px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span>⛶</span> Fullscreen
                  </button>
                </div>

                {/* Card Body - Content Switcher */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  {activeTab === "preview" && (
                    <div
                      style={{
                        height: 220,
                        width: "100%",
                        borderRadius: 14,
                        background: "#02050b",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LazyDemoCard comp={comp} params={params} />
                    </div>
                  )}

                  {activeTab === "code" && (
                    <div
                      style={{
                        height: 220,
                        width: "100%",
                        borderRadius: 14,
                        background: "#010409",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                          background: "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        <span style={{ fontSize: "0.68rem", fontFamily: "monospace", color: "rgba(255, 255, 255, 0.5)" }}>
                          React + TypeScript
                        </span>
                        <button
                          onClick={() => copyCode(comp.codeSnippet, comp.id)}
                          style={{
                            padding: "4px 10px",
                            borderRadius: 6,
                            background: copiedId === comp.id ? "#10b981" : "rgba(0, 229, 255, 0.15)",
                            border: copiedId === comp.id ? "1px solid #10b981" : "1px solid rgba(0, 229, 255, 0.4)",
                            color: copiedId === comp.id ? "#000000" : "#00e5ff",
                            fontSize: "0.65rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          {copiedId === comp.id ? "✓ Copied!" : "📋 Copy Code"}
                        </button>
                      </div>
                      <pre
                        style={{
                          flex: 1,
                          margin: 0,
                          padding: 12,
                          overflow: "auto",
                          fontSize: "0.72rem",
                          fontFamily: "monospace",
                          color: "#7dd3fc",
                          lineHeight: 1.5,
                        }}
                      >
                        <code>{comp.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {activeTab === "customize" && (
                    <div
                      style={{
                        height: 220,
                        width: "100%",
                        borderRadius: 14,
                        background: "#030712",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        padding: 14,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <div style={{ fontSize: "0.72rem", fontWeight: "bold", color: "#00e5ff", textTransform: "uppercase" }}>
                        Live Parameters
                      </div>
                      {comp.defaultParams &&
                        Object.keys(comp.defaultParams).map((key) => (
                          <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <label style={{ fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.7)", fontFamily: "monospace" }}>
                              {key}:
                            </label>
                            {typeof comp.defaultParams![key] === "number" ? (
                              <input
                                type="range"
                                min={0.1}
                                max={5}
                                step={0.1}
                                value={params[key] ?? comp.defaultParams![key]}
                                onChange={(e) =>
                                  setCustomParams((prev: Record<string, Record<string, any>>) => ({
                                    ...prev,
                                    [comp.id]: {
                                      ...(prev[comp.id] || {}),
                                      [key]: parseFloat(e.target.value),
                                    },
                                  }))
                                }
                                style={{ accentColor: "#00e5ff" }}
                              />
                            ) : (
                              <input
                                type="text"
                                value={params[key] ?? comp.defaultParams![key]}
                                onChange={(e) =>
                                  setCustomParams((prev: Record<string, Record<string, any>>) => ({
                                    ...prev,
                                    [comp.id]: {
                                      ...(prev[comp.id] || {}),
                                      [key]: e.target.value,
                                    },
                                  }))
                                }
                                style={{
                                  padding: "6px 10px",
                                  borderRadius: 8,
                                  background: "rgba(15, 23, 42, 0.9)",
                                  border: "1px solid rgba(255, 255, 255, 0.15)",
                                  color: "#ffffff",
                                  fontSize: "0.72rem",
                                  outline: "none",
                                }}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Segmented Tabs & Action */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    paddingTop: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 3,
                      background: "rgba(0, 0, 0, 0.45)",
                      padding: 3,
                      borderRadius: 10,
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    {(["preview", "code", "customize"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTabMap((prev: Record<string, "preview" | "code" | "customize">) => ({ ...prev, [comp.id]: tab }))}
                        style={{
                          padding: "4px 9px",
                          borderRadius: 8,
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          background: activeTab === tab ? "rgba(0, 229, 255, 0.22)" : "transparent",
                          border: activeTab === tab ? "1px solid rgba(0, 229, 255, 0.5)" : "1px solid transparent",
                          color: activeTab === tab ? "#00e5ff" : "rgba(255, 255, 255, 0.5)",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInstallSkill(comp)}
                    style={{
                      padding: "5px 11px",
                      borderRadius: 9,
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      color: "#34d399",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      transition: "all 0.2s",
                    }}
                  >
                    <span>✨</span> Install Skill
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default UIComponentStudio;
