export interface UIComponentItem {
  id: string;
  name: string;
  category:
    | "3D & Motion"
    | "Hero Sections"
    | "Navigation & Menu"
    | "Backgrounds & Effects"
    | "Cards & Grids"
    | "Pricing & Plans"
    | "Reviews & Feedback"
    | "Blog & Content"
    | "Sidebars & Layouts";
  description: string;
  animationType: "3D Perspective" | "Framer Motion" | "Canvas WebGL" | "CSS Keyframes" | "GSAP Scroll";
  originPreset?: string;
  previewType: "component" | "iframe";
  previewUrl?: string;
  componentKey?: string;
  tags: string[];
  reactCode: string;
  tailwindCode: string;
  aiPrompt: string;
}

export const UI_COMPONENTS_CATALOG: UIComponentItem[] = [
  {
    id: "book-flip-animation",
    name: "3D Interactive Book Flip",
    category: "3D & Motion",
    description: "Realistic 3D book animation with page turning, perspective tilt, spine shading, and chapter progression.",
    animationType: "3D Perspective",
    originPreset: "aceternity-productized-agency",
    previewType: "component",
    componentKey: "BookFlipAnimation",
    tags: ["3D", "Book", "Motion", "Perspective", "Interactive"],
    reactCode: `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

export function BookFlip({ pages, coverTitle }) {
  const [currentPage, setCurrentPage] = useState(0);
  const page = pages[currentPage];

  return (
    <div className="perspective-[1500px] w-full max-w-[500px] mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl">
        <div className="flex justify-between border-b border-white/10 pb-2 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-[#e87a3a]"/> {coverTitle}</span>
          <span>Page {currentPage + 1} of {pages.length}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="py-4"
          >
            <h3 className="text-xl font-bold text-white">{page.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{page.content}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} className="px-3 py-1 bg-white/5 rounded text-xs">Prev</button>
          <button onClick={() => setCurrentPage(p => Math.min(pages.length - 1, p + 1))} className="px-3 py-1 bg-[#e87a3a] text-white rounded text-xs">Next</button>
        </div>
      </div>
    </div>
  );
}`,
    tailwindCode: `/* Required Tailwind Classes: perspective-[1500px], rotateY utilities */
.book-shadow {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(232, 122, 58, 0.15);
}`,
    aiPrompt: `Create a responsive 3D interactive book flip component in React with Tailwind CSS and Framer Motion. It should have a dark aesthetic with copper/gold accents, smooth rotateY page transitions with AnimatePresence, page navigation dots, chapter badges, and full mobile touch responsiveness.`,
  },
  {
    id: "earth-3d-globe",
    name: "Interactive 3D Earth Globe",
    category: "3D & Motion",
    description: "Canvas-rendered 3D rotating globe with latitude/longitude dots, orbital connection arcs, and global node markers.",
    animationType: "Canvas WebGL",
    originPreset: "aceternity-cryptgen-marketing",
    previewType: "component",
    componentKey: "Earth3DGlobe",
    tags: ["3D", "Earth", "Globe", "Canvas", "Global Network"],
    reactCode: `import { useEffect, useRef } from "react";

export function EarthGlobe({ size = 360 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    let animId;
    let rot = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rot += 0.01;
      // Draw Sphere & Points
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, size * 0.38, 0, Math.PI * 2);
      ctx.fillStyle = "#0d0d11";
      ctx.fill();
      ctx.strokeStyle = "rgba(232, 122, 58, 0.3)";
      ctx.stroke();
      animId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return <canvas ref={canvasRef} width={size} height={size} className="cursor-grab" />;
}`,
    tailwindCode: `/* Container with atmospheric glow */
.globe-glow {
  background: radial-gradient(circle, rgba(232, 122, 58, 0.15) 0%, rgba(0,0,0,0) 70%);
}`,
    aiPrompt: `Build a 3D Earth Globe component in HTML5 Canvas and React that supports interactive dragging, auto-rotation, animated pulsing node pins on major world cities, connecting quadratic bezier arcs, and glowing atmospheric lighting.`,
  },
  {
    id: "interactive-pricing",
    name: "Neon Glow Tiered Pricing",
    category: "Pricing & Plans",
    description: "Responsive pricing table with monthly/annual billing toggle, highlighted recommended plan, and feature matrices.",
    animationType: "Framer Motion",
    originPreset: "aceternity-simplistic-saas",
    previewType: "component",
    componentKey: "InteractivePricing",
    tags: ["Pricing", "Billing", "SaaS", "Cards", "Framer Motion"],
    reactCode: `import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

export function PricingTable({ tiers }) {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-center mb-8">
        <button onClick={() => setAnnual(!annual)} className="rounded-full bg-zinc-900 border border-white/10 p-1 text-xs text-white">
          Toggle {annual ? "Annual (Save 20%)" : "Monthly"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.id} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{t.name}</h3>
              <p className="text-3xl font-extrabold text-white mt-4">\${annual ? t.annual : t.monthly}</p>
            </div>
            <button className="mt-6 w-full py-2 bg-[#e87a3a] text-white rounded-xl text-xs font-semibold">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    tailwindCode: `.pricing-popular {
  border-color: rgba(232, 122, 58, 0.6);
  box-shadow: 0 0 30px rgba(232, 122, 58, 0.15);
}`,
    aiPrompt: `Create a high-converting modern SaaS Pricing Section with a monthly/yearly billing switch (20% discount badge), tiered feature checks with Lucide icons, gradient border hover effects, and a highlighted 'Most Popular' card.`,
  },
  {
    id: "interactive-testimonials",
    name: "Verified Reviews & Rating Feedback",
    category: "Reviews & Feedback",
    description: "Testimonial cards with star ratings, verified role badges, and an interactive 5-star rating submission widget.",
    animationType: "Framer Motion",
    originPreset: "aceternity-playful-marketing",
    previewType: "component",
    componentKey: "InteractiveTestimonials",
    tags: ["Reviews", "Testimonials", "Feedback", "Rating", "Social Proof"],
    reactCode: `import { Star, CheckCircle2 } from "lucide-react";

export function ReviewsList({ reviews }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {reviews.map(r => (
        <div key={r.id} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
          <div className="flex gap-1 text-amber-400 mb-3">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current"/>)}
          </div>
          <p className="text-xs text-zinc-300">"{r.content}"</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white">
            <span>{r.author}</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          </div>
        </div>
      ))}
    </div>
  );
}`,
    tailwindCode: `.review-card {
  background: rgba(24, 24, 27, 0.4);
  backdrop-filter: blur(12px);
}`,
    aiPrompt: `Design an interactive customer testimonial and feedback section with 5-star ratings, author avatars, verified customer badges, interactive stars, and responsive mobile flex layout.`,
  },
  {
    id: "floating-dock-nav",
    name: "macOS Style Floating Dock Menu",
    category: "Navigation & Menu",
    description: "Dynamic spring-animated floating navigation dock with icon scale magnification on hover.",
    animationType: "Framer Motion",
    originPreset: "aceternity-productized-agency",
    previewType: "iframe",
    previewUrl: "/preset-sites/aceternity-productized-agency/",
    tags: ["Navigation", "Dock", "Menu", "macOS", "Framer Motion"],
    reactCode: `import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Home, Terminal, Sparkles, Folder, Settings } from "lucide-react";

export function FloatingDock({ items }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 backdrop-blur-xl shadow-2xl">
      {items.map(item => (
        <motion.button key={item.label} whileHover={{ scale: 1.25, y: -4 }} className="p-2 text-zinc-300 hover:text-white rounded-full bg-white/5">
          <item.icon className="w-5 h-5" />
        </motion.button>
      ))}
    </div>
  );
}`,
    tailwindCode: `.floating-dock {
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}`,
    aiPrompt: `Create a macOS-inspired Floating Dock navigation component in React and Framer Motion with spring magnification physics on hover, tooltip labels, glassmorphism border styling, and mobile responsiveness.`,
  },
  {
    id: "aurora-background-hero",
    name: "Aurora Glowing Background Hero",
    category: "Backgrounds & Effects",
    description: "Multidimensional animated aurora background with smooth radial blur waves and responsive hero typography.",
    animationType: "CSS Keyframes",
    originPreset: "aceternity-cryptgen-marketing",
    previewType: "iframe",
    previewUrl: "/preset-sites/aceternity-cryptgen-marketing/",
    tags: ["Aurora", "Background", "Hero", "Glow", "Gradient"],
    reactCode: `export function AuroraHero({ title, subtitle, cta }) {
  return (
    <div className="relative min-h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black flex flex-col items-center justify-center text-center p-8">
      {/* Animated Aurora Glows */}
      <div className="absolute -inset-[10px] opacity-50 filter blur-[80px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#e87a3a]/30 animate-pulse delay-1000" />
      </div>
      <h1 className="relative text-4xl sm:text-6xl font-extrabold tracking-tight text-white">{title}</h1>
      <p className="relative mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">{subtitle}</p>
      <button className="relative mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:scale-105 transition-all">{cta}</button>
    </div>
  );
}`,
    tailwindCode: `@keyframes aurora-move {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, -20px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}`,
    aiPrompt: `Generate a full-bleed Aurora Background Hero section with layered fluid blur animations, responsive typography, glassmorphism CTAs, and dark mode palette.`,
  },
  {
    id: "bento-grid-features",
    name: "Interactive 3D Bento Feature Grid",
    category: "Cards & Grids",
    description: "Asymmetric feature grid with mouse-tracking radial glow, live metric charts, and animated border beams.",
    animationType: "Framer Motion",
    originPreset: "aceternity-simplistic-saas",
    previewType: "iframe",
    previewUrl: "/preset-sites/aceternity-simplistic-saas/",
    tags: ["Bento", "Grid", "Features", "SaaS", "Cards"],
    reactCode: `export function BentoGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
      {items.map((item, i) => (
        <div key={i} className={\`rounded-2xl border border-white/10 bg-zinc-900/50 p-6 flex flex-col justify-between hover:border-white/20 transition-all \${item.colSpan || ''}\`}>
          <div>
            <item.icon className="w-6 h-6 text-[#e87a3a] mb-4" />
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400 mt-2">{item.description}</p>
          </div>
          {item.preview}
        </div>
      ))}
    </div>
  );
}`,
    tailwindCode: `.bento-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%);
}`,
    aiPrompt: `Build an asymmetric Bento Grid features section in Tailwind CSS with 3D cards, integrated icons, glowing borders, and interactive card expansion on mobile and desktop.`,
  },
];
