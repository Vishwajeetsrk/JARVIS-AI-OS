/**
 * PPTX Creator Tool — Master 16:9 Presentation Deck Generator.
 *
 * Supports:
 * - 16:9 Widescreen modern slide layouts
 * - KPI Metric Callout Cards
 * - 3-Column Feature Matrix Cards
 * - Image & Photo Embeds with Captions
 * - Video Link / Preview Cards
 * - Curated Aesthetic Themes (Midnight Executive, Cyber Velvet, Titanium Clean)
 */

import PptxGenJS from "pptxgenjs";

export interface KpiMetric {
  label: string;
  value: string;
  subtext?: string;
  color?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  badge?: string;
}

export interface PptxSlide {
  /** Slide layout type */
  type: "title" | "kpiStats" | "threeCard" | "twoColumn" | "photoCard" | "videoPreview" | "timeline" | "titleContent" | "sectionHeader";
  /** Slide title */
  title?: string;
  /** Slide subtitle / category tag */
  subtitle?: string;
  /** Badge pill text */
  badge?: string;
  /** Bullet points or general content */
  content?: string[];
  /** KPI metrics for kpiStats layout */
  kpiMetrics?: KpiMetric[];
  /** 3-column cards for threeCard layout */
  cards?: FeatureCard[];
  /** Left column content (for twoColumn) */
  leftContent?: string[];
  /** Right column content (for twoColumn) */
  rightContent?: string[];
  /** Photo / Image URL or Base64 */
  imageUrl?: string;
  /** Photo caption / summary */
  imageCaption?: string;
  /** Video link URL */
  videoUrl?: string;
  /** Video title */
  videoTitle?: string;
  /** Background color override (hex without #) */
  bgColor?: string;
  /** Notes for speaker */
  notes?: string;
}

export interface PptxOptions {
  /** Presentation title */
  title: string;
  /** Presentation author */
  author?: string;
  /** Organization */
  company?: string;
  /** Color theme */
  theme?: "midnight" | "cyber" | "titanium";
  /** Slides */
  slides: PptxSlide[];
}

const THEMES = {
  midnight: { bg: "0F172A", cardBg: "1E293B", text: "FFFFFF", subtext: "94A3B8", accent: "06B6D4", border: "334155" },
  cyber: { bg: "1E1B4B", cardBg: "2E1065", text: "FFFFFF", subtext: "C084FC", accent: "A855F7", border: "581C87" },
  titanium: { bg: "18181B", cardBg: "27272A", text: "FFFFFF", subtext: "A1A1AA", accent: "F59E0B", border: "3F3F46" },
};

export async function createPptx(options: PptxOptions): Promise<PptxGenJS> {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = options.author || "JARVIS AI OS";
  pptx.company = options.company || "Jarvis AI Ecosystem";
  pptx.title = options.title;

  const theme = THEMES[options.theme || "midnight"];

  for (const s of options.slides) {
    const slide = pptx.addSlide();
    slide.background = { color: s.bgColor || theme.bg };

    // Header Badge & Title
    if (s.type !== "title") {
      if (s.badge || s.subtitle) {
        slide.addText((s.badge || s.subtitle || "").toUpperCase(), {
          x: 0.8,
          y: 0.5,
          w: 8.0,
          h: 0.3,
          fontSize: 10,
          bold: true,
          color: theme.accent,
          fontFace: "Calibri",
        });
      }

      if (s.title) {
        slide.addText(s.title, {
          x: 0.8,
          y: 0.8,
          w: 11.5,
          h: 0.7,
          fontSize: 24,
          bold: true,
          color: theme.text,
          fontFace: "Calibri",
        });
      }
    }

    // Layout: Title Hero
    if (s.type === "title") {
      slide.addShape(pptx.ShapeType.rect, {
        x: 0.8,
        y: 1.5,
        w: 2.2,
        h: 0.35,
        fill: { color: theme.cardBg },
        line: { color: theme.accent, width: 1 },
      });
      slide.addText((s.badge || "EXECUTIVE MASTER DECK").toUpperCase(), {
        x: 0.8,
        y: 1.5,
        w: 2.2,
        h: 0.35,
        fontSize: 10,
        bold: true,
        color: theme.accent,
        align: "center",
      });

      slide.addText(s.title || options.title, {
        x: 0.8,
        y: 2.2,
        w: 11.5,
        h: 1.8,
        fontSize: 40,
        bold: true,
        color: theme.text,
        fontFace: "Calibri",
      });

      if (s.subtitle) {
        slide.addText(s.subtitle, {
          x: 0.8,
          y: 4.1,
          w: 10.0,
          h: 0.9,
          fontSize: 18,
          color: theme.subtext,
          fontFace: "Calibri",
        });
      }

      slide.addText(`Prepared by ${options.author || "Jarvis AI OS"} • ${new Date().toLocaleDateString()}`, {
        x: 0.8,
        y: 6.2,
        w: 8.0,
        h: 0.4,
        fontSize: 11,
        color: theme.subtext,
      });
    }

    // Layout: KPI Stats (3 Metric Cards)
    else if (s.type === "kpiStats" && s.kpiMetrics) {
      const metrics = s.kpiMetrics.slice(0, 3);
      metrics.forEach((m, idx) => {
        const xPos = 0.8 + idx * 3.9;
        slide.addShape(pptx.ShapeType.roundRect, {
          x: xPos,
          y: 1.8,
          w: 3.6,
          h: 4.2,
          fill: { color: theme.cardBg },
          line: { color: theme.border, width: 1 },
        });

        slide.addText(m.label.toUpperCase(), {
          x: xPos + 0.3,
          y: 2.2,
          w: 3.0,
          h: 0.4,
          fontSize: 12,
          bold: true,
          color: theme.subtext,
        });

        slide.addText(m.value, {
          x: xPos + 0.3,
          y: 2.8,
          w: 3.0,
          h: 1.2,
          fontSize: 42,
          bold: true,
          color: m.color || theme.accent,
        });

        if (m.subtext) {
          slide.addText(m.subtext, {
            x: xPos + 0.3,
            y: 4.2,
            w: 3.0,
            h: 1.4,
            fontSize: 12,
            color: theme.subtext,
          });
        }
      });
    }

    // Layout: 3-Column Feature Cards
    else if (s.type === "threeCard" && s.cards) {
      const cards = s.cards.slice(0, 3);
      cards.forEach((c, idx) => {
        const xPos = 0.8 + idx * 3.9;
        slide.addShape(pptx.ShapeType.roundRect, {
          x: xPos,
          y: 1.8,
          w: 3.6,
          h: 4.5,
          fill: { color: theme.cardBg },
          line: { color: theme.border, width: 1 },
        });

        if (c.badge) {
          slide.addText(c.badge.toUpperCase(), {
            x: xPos + 0.3,
            y: 2.1,
            w: 3.0,
            h: 0.3,
            fontSize: 10,
            bold: true,
            color: theme.accent,
          });
        }

        slide.addText(c.title, {
          x: xPos + 0.3,
          y: 2.5,
          w: 3.0,
          h: 0.6,
          fontSize: 16,
          bold: true,
          color: theme.text,
        });

        slide.addText(c.description, {
          x: xPos + 0.3,
          y: 3.2,
          w: 3.0,
          h: 2.7,
          fontSize: 12,
          color: theme.subtext,
        });
      });
    }

    // Layout: Photo / Image Card with Structured Text Side
    else if (s.type === "photoCard") {
      // Left side content
      if (s.content && s.content.length > 0) {
        slide.addText(
          s.content.map((txt) => ({ text: `• ${txt}\n`, options: { fontSize: 14, color: theme.text } })),
          { x: 0.8, y: 1.8, w: 5.5, h: 4.5 }
        );
      }

      // Right side photo placeholder/card
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.8,
        y: 1.8,
        w: 5.5,
        h: 4.2,
        fill: { color: theme.cardBg },
        line: { color: theme.border, width: 1 },
      });

      if (s.imageUrl) {
        slide.addImage({ path: s.imageUrl, x: 7.0, y: 2.0, w: 5.1, h: 3.2 });
      } else {
        slide.addText("📷 [High-Resolution Visual Asset]", {
          x: 7.0,
          y: 3.2,
          w: 5.1,
          h: 0.6,
          fontSize: 14,
          align: "center",
          color: theme.accent,
        });
      }

      if (s.imageCaption) {
        slide.addText(s.imageCaption, {
          x: 7.0,
          y: 5.2,
          w: 5.1,
          h: 0.6,
          fontSize: 11,
          italic: true,
          color: theme.subtext,
          align: "center",
        });
      }
    }

    // Layout: Video Preview Card
    else if (s.type === "videoPreview") {
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.8,
        w: 11.5,
        h: 4.5,
        fill: { color: theme.cardBg },
        line: { color: theme.accent, width: 1.5 },
      });

      slide.addText("🎬 VIDEO DEMONSTRATION", {
        x: 1.2,
        y: 2.2,
        w: 10.5,
        h: 0.4,
        fontSize: 12,
        bold: true,
        color: theme.accent,
      });

      slide.addText(s.videoTitle || s.title || "Interactive Video Walkthrough", {
        x: 1.2,
        y: 2.8,
        w: 10.5,
        h: 0.8,
        fontSize: 22,
        bold: true,
        color: theme.text,
      });

      if (s.content && s.content.length > 0) {
        slide.addText(s.content.join("\n"), {
          x: 1.2,
          y: 3.8,
          w: 10.5,
          h: 1.5,
          fontSize: 13,
          color: theme.subtext,
        });
      }

      if (s.videoUrl) {
        slide.addText(`Link: ${s.videoUrl}`, {
          x: 1.2,
          y: 5.4,
          w: 10.5,
          h: 0.4,
          fontSize: 11,
          color: theme.accent,
        });
      }
    }

    // Fallback: Two-column or bullet content
    else {
      if (s.content && s.content.length > 0) {
        slide.addText(
          s.content.map((txt) => ({ text: `• ${txt}\n`, options: { fontSize: 14, color: theme.text } })),
          { x: 0.8, y: 1.8, w: 11.5, h: 4.5 }
        );
      }
    }

    if (s.notes) {
      slide.addNotes(s.notes);
    }
  }

  return pptx;
}

export async function downloadPptx(options: PptxOptions): Promise<void> {
  const pptx = await createPptx(options);
  const filename = `${options.title.replace(/[^a-z0-9_-]/gi, "_")}.pptx`;
  await pptx.writeFile({ fileName: filename });
}
