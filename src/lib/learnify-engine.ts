/**
 * Learnify Design Engine
 * AI-powered design learning, recreation, and customization from 47 learned projects.
 */
// @ts-ignore - Vite handles JSON imports
import learnifyData from "./learnify-designs.json";

export interface LearnedDesign {
  id: string;
  name: string;
  category: string;
  theme: "dark" | "light";
  colors: Record<string, string>;
  fonts: string[];
  components: string[];
  pattern: string;
  tailwind: Record<string, string>;
}

export interface DesignRecreationRequest {
  referenceDesign?: string;      // ID of a learned design to base on
  theme?: "dark" | "light";      // Override theme
  brandName?: string;            // Custom brand name
  brandColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    foreground?: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
  components?: string[];         // Which components to include
  category?: string;             // Site category (SaaS, portfolio, e-commerce, etc.)
  description?: string;          // What the site should be about
  borderRadius?: string;         // Override radius
}

export interface DesignRecreationResult {
  html: string;
  css: string;
  designSystem: {
    colors: Record<string, string>;
    fonts: string[];
    radius: string;
    components: string[];
  };
  previewUrl?: string;
}

// Get all learned designs
export function listLearnedDesigns(): LearnedDesign[] {
  return learnifyData.designSystems as unknown as LearnedDesign[];
}

// Get a specific learned design
export function getLearnedDesign(id: string): LearnedDesign | undefined {
  return (learnifyData.designSystems as unknown as LearnedDesign[]).find(d => d.id === id);
}

// Search designs by keyword
export function searchLearnedDesigns(query: string): LearnedDesign[] {
  const q = query.toLowerCase();
  return (learnifyData.designSystems as unknown as LearnedDesign[]).filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.category.toLowerCase().includes(q) ||
    d.pattern.toLowerCase().includes(q) ||
    d.components.some(c => c.toLowerCase().includes(q))
  );
}

// Get designs by theme
export function getDesignsByTheme(theme: "dark" | "light"): LearnedDesign[] {
  return (learnifyData.designSystems as unknown as LearnedDesign[]).filter(d => d.theme === theme);
}

// Get common patterns
export function getCommonPatterns() {
  return learnifyData.commonPatterns;
}

// Merge brand customization with a reference design
function mergeDesign(request: DesignRecreationRequest): LearnedDesign {
  const base = request.referenceDesign
    ? getLearnedDesign(request.referenceDesign)
    : getDesignsByTheme(request.theme ?? "dark")[0]
      ?? learnifyData.designSystems[0];

  if (!base) {
    throw new Error("No base design found");
  }

  const merged: LearnedDesign = {
    ...base,
    theme: request.theme ?? base.theme,
    colors: { ...base.colors },
    fonts: [...base.fonts],
    components: request.components?.length ? request.components : [...base.components],
    tailwind: { ...base.tailwind },
  };

  // Apply brand color overrides
  if (request.brandColors) {
    if (request.brandColors.primary) merged.colors.primary = request.brandColors.primary;
    if (request.brandColors.secondary) merged.colors.secondary = request.brandColors.secondary;
    if (request.brandColors.accent) merged.colors.accent = request.brandColors.accent;
    if (request.brandColors.background) merged.colors.background = request.brandColors.background;
    if (request.brandColors.foreground) merged.colors.foreground = request.brandColors.foreground;
  }

  // Apply font overrides
  if (request.fonts?.heading) merged.fonts[0] = request.fonts.heading;
  if (request.fonts?.body) merged.fonts[1] = request.fonts.body;

  // Apply radius override
  if (request.borderRadius) merged.tailwind.radius = request.borderRadius;

  return merged;
}

// Generate a full HTML page from a design recreation request
export function recreateDesign(request: DesignRecreationRequest): DesignRecreationResult {
  const design = mergeDesign(request);
  const brandName = request.brandName ?? design.name;
  const description = request.description ?? `${brandName} — built with learned design patterns`;
  const isDark = design.theme === "dark";

  const bg = design.colors.background ?? (isDark ? "#0A0A0A" : "#FFFFFF");
  const fg = design.colors.foreground ?? (isDark ? "#FFFFFF" : "#1A1A1A");
  const card = design.colors.card ?? (isDark ? "#141414" : "#F8F8F8");
  const primary = design.colors.primary ?? fg;
  const secondary = design.colors.secondary ?? (isDark ? "#888888" : "#666666");
  const muted = design.colors.muted ?? (isDark ? "#555555" : "#999999");
  const accent = design.colors.accent ?? primary;
  const border = design.colors.border ?? (isDark ? "#222222" : "#E5E5E5");
  const radius = design.tailwind.radius ?? "8px";
  const fontFamily = design.fonts.join(", ");

  const html = `<!DOCTYPE html>
<html lang="en" class="${isDark ? "dark" : ""}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brandName}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=${design.fonts[0]?.replace(/\s+/g, "+")}:wght@400;500;600;700;800;900${design.fonts[1] ? `&family=${design.fonts[1].replace(/\s+/g, "+")}:wght@400;500;600;700` : ""}&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: "${fontFamily}";
      background: ${bg};
      color: ${fg};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    :root {
      --bg: ${bg};
      --fg: ${fg};
      --card: ${card};
      --primary: ${primary};
      --secondary: ${secondary};
      --muted: ${muted};
      --accent: ${accent};
      --border: ${border};
      --radius: ${radius};
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .section { padding: 80px 0; }

    /* NAV */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 24px;
      background: ${isDark ? "rgba(10,10,10,0.8)" : "rgba(255,255,255,0.8)"};
      backdrop-filter: blur(12px);
      border-bottom: 1px solid ${border};
    }
    .nav-logo { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .nav-links { display: flex; gap: 32px; }
    .nav-links a {
      color: ${muted}; text-decoration: none; font-size: 14px; font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: ${fg}; }
    .nav-cta {
      padding: 10px 20px; border-radius: ${radius};
      background: ${primary}; color: ${isDark ? bg : "#FFF"};
      border: none; font-size: 14px; font-weight: 600; cursor: pointer;
      transition: opacity 0.2s;
    }
    .nav-cta:hover { opacity: 0.9; }

    /* HERO */
    .hero {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      text-align: center; padding: 120px 24px 80px;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px; border-radius: ${radius};
      background: ${accent}15; color: ${accent};
      font-size: 13px; font-weight: 600; margin-bottom: 24px;
    }
    .hero h1 {
      font-size: clamp(40px, 7vw, 80px); font-weight: 900;
      line-height: 1.05; letter-spacing: -2px; margin-bottom: 20px;
    }
    .hero p {
      font-size: 18px; color: ${secondary}; max-width: 600px;
      margin: 0 auto 32px; line-height: 1.6;
    }
    .hero-cta {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 16px 32px; border-radius: ${radius};
      background: ${primary}; color: ${isDark ? bg : "#FFF"};
      border: none; font-size: 16px; font-weight: 600; cursor: pointer;
      text-decoration: none; transition: transform 0.2s, opacity 0.2s;
    }
    .hero-cta:hover { transform: translateY(-1px); opacity: 0.95; }

    /* FEATURES */
    .features-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    .feature-card {
      padding: 32px; border-radius: var(--radius);
      background: ${card}; border: 1px solid ${border};
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .feature-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.08)"}; }
    .feature-icon {
      width: 48px; height: 48px; border-radius: 12px;
      background: ${accent}15; display: flex; align-items: center; justify-content: center;
      margin-bottom: 16px; font-size: 24px;
    }
    .feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
    .feature-card p { font-size: 14px; color: ${secondary}; line-height: 1.6; }

    /* CTA SECTION */
    .cta-section {
      text-align: center; padding: 100px 24px;
      background: ${isDark ? "linear-gradient(180deg, transparent, " + card + " 50%, transparent)" : "linear-gradient(180deg, transparent, " + card + " 50%, transparent)"};
    }
    .cta-section h2 {
      font-size: clamp(28px, 5vw, 48px); font-weight: 800;
      letter-spacing: -1px; margin-bottom: 16px;
    }
    .cta-section p { color: ${secondary}; font-size: 16px; margin-bottom: 32px; }

    /* FOOTER */
    footer {
      padding: 40px 24px; text-align: center;
      border-top: 1px solid ${border};
      color: ${muted}; font-size: 13px;
    }

    /* ANIMATIONS */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(28px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-in { animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .features-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav>
    <div class="nav-logo">${brandName}</div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#about">About</a>
      <a href="#pricing">Pricing</a>
    </div>
    <button class="nav-cta">Get Started</button>
  </nav>

  <section class="hero">
    <div>
      <div class="hero-badge animate-in">✦ ${design.category}</div>
      <h1 class="animate-in delay-1">${brandName}</h1>
      <p class="animate-in delay-2">${description}</p>
      <a href="#features" class="hero-cta animate-in delay-3">Explore Features →</a>
    </div>
  </section>

  <section id="features" class="section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card animate-in">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Built with modern technology for peak performance and speed.</p>
        </div>
        <div class="feature-card animate-in delay-1">
          <div class="feature-icon">🎨</div>
          <h3>Beautiful Design</h3>
          <p>Crafted with attention to detail using proven design patterns.</p>
        </div>
        <div class="feature-card animate-in delay-2">
          <div class="feature-icon">🔒</div>
          <h3>Secure & Private</h3>
          <p>Your data is encrypted and protected at every layer.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="cta-section">
    <div class="container">
      <h2>Ready to get started?</h2>
      <p>Join thousands of users who trust ${brandName}.</p>
      <a href="#" class="hero-cta">Get Started Free →</a>
    </div>
  </section>

  <footer>
    <p>© 2026 ${brandName}. Built with learned design patterns from ${learnifyData.meta.totalProjects} reference projects.</p>
  </footer>
</body>
</html>`;

  return {
    html,
    css: "",
    designSystem: {
      colors: design.colors,
      fonts: design.fonts,
      radius,
      components: design.components,
    },
  };
}

// Generate a customization summary for the AI to explain what it did
export function explainDesignChoices(request: DesignRecreationRequest): string {
  const base = request.referenceDesign ? getLearnedDesign(request.referenceDesign) : null;
  const parts: string[] = [];

  if (base) {
    parts.push(`Based on **${base.name}** (${base.category}) — a ${base.theme} theme with ${base.pattern}.`);
    parts.push(`Original colors: ${Object.entries(base.colors).map(([k, v]) => `${k}: \`${v}\``).join(", ")}.`);
    parts.push(`Fonts: ${base.fonts.join(", ")}.`);
    parts.push(`Learned components: ${base.components.join(", ")}.`);
  }

  if (request.brandName) parts.push(`Branded as **${request.brandName}**.`);
  if (request.brandColors) {
    parts.push(`Custom colors applied: ${Object.entries(request.brandColors).filter(([,v]) => v).map(([k, v]) => `${k}: \`${v}\``).join(", ")}.`);
  }
  if (request.theme) parts.push(`Theme: ${request.theme}.`);
  if (request.borderRadius) parts.push(`Border radius: ${request.borderRadius}.`);

  parts.push(`\nThis design was generated from the **Learnify Design Engine** — AI-learned patterns from ${learnifyData.meta.totalProjects} reference projects.`);

  return parts.join("\n");
}
