/**
 * JARVIS AI OS — Universal UI/UX Design System Registry
 * Integrates:
 * 1. Shadcn UI (Primitives, forms, modals, accordions)
 * 2. Aceternity UI (3D pin cards, aurora glows, bento grids)
 * 3. Magic UI (Border beams, sparkles, animated counters)
 * 4. Three.js & Three VRM (3D humanoid avatars, holographic Arc Reactor)
 * 5. Lucide Icons (Universal multi-platform iconography)
 */

export interface DesignSystemSpec {
  id: string;
  name: string;
  category: "Web" | "Mobile" | "3D" | "Tokens";
  sourceRepo: string;
  stars: string;
  componentPath: string;
  features: string[];
}

export const INSTALLED_DESIGN_COMPONENTS: DesignSystemSpec[] = [
  {
    id: "shadcn-primitives",
    name: "Shadcn UI Full Primitives",
    category: "Web",
    sourceRepo: "https://github.com/shadcn-ui/ui",
    stars: "75.4k ★",
    componentPath: "src/components/ui/",
    features: [
      "50+ Radix UI Primitives",
      "Accessible ARIA attributes",
      "Tailwind CSS Dark Theme Tokens",
      "Zero runtime bloat",
    ],
  },
  {
    id: "aceternity-3d-cards",
    name: "Aceternity 3D Pin & Glow Cards",
    category: "Web",
    sourceRepo: "https://github.com/mannupaaji/aceternity-ui",
    stars: "18.2k ★",
    componentPath: "src/components/ui/cyber-3d-card.tsx",
    features: [
      "Cursor-tracking 3D perspective tilt",
      "Dynamic multi-color radial blur",
      "Spring physics transitions",
      "Glassmorphism elevation",
    ],
  },
  {
    id: "magic-border-beam",
    name: "Magic UI Border Beam & Grid",
    category: "Web",
    sourceRepo: "https://github.com/magicuidesign/magicui",
    stars: "14.8k ★",
    componentPath: "src/components/ui/animated-border-beam.tsx",
    features: [
      "Pulsing gradient rim animation",
      "CSS mask composition",
      "High FPS hardware accelerated",
    ],
  },
  {
    id: "mobile-3d-tactile",
    name: "Mobile 3D Tactile Buttons (Wardelio/Android/iOS)",
    category: "Mobile",
    sourceRepo: "https://github.com/ionic-team/capacitor",
    stars: "10.5k ★",
    componentPath: "src/components/ui/mobile-3d-button.tsx",
    features: [
      "3D tactile press depth",
      "Haptic vibration feedback on touch",
      "Gradient neon lighting",
      "Zero-latency spring release",
    ],
  },
  {
    id: "three-vrm-companion",
    name: "Three.js 3D Holographic Avatar & Arc Reactor",
    category: "3D",
    sourceRepo: "https://github.com/pixiv/three-vrm",
    stars: "3.2k ★",
    componentPath: "src/components/jarvis/arc-reactor-hud.tsx",
    features: [
      "WebGL holographic shader rings",
      "Particle burst animations",
      "Eye-tracking and spring bone physics",
    ],
  },
];

export function getComponentCodeTemplate(componentId: string): string {
  switch (componentId) {
    case "cyber-3d-card":
      return `import { Cyber3DCard } from "@/components/ui/cyber-3d-card";\n\n<Cyber3DCard glowColor="cyan">\n  <h3 className="text-xl font-bold text-white">Title</h3>\n</Cyber3DCard>`;
    case "mobile-3d-button":
      return `import { Mobile3DButton } from "@/components/ui/mobile-3d-button";\n\n<Mobile3DButton variant="primary" size="md">Launch App</Mobile3DButton>`;
    case "bento-grid":
      return `import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";\n\n<BentoGrid>\n  <BentoGridItem title="Card" description="Details" />\n</BentoGrid>`;
    default:
      return `// Component available in src/components/ui/`;
  }
}
