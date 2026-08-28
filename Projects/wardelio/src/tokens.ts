// Wardelio Design Tokens — extracted from 153 screen images
// These match the EXACT colors, fonts, spacing, and radii from the Wardelio design

export const tokens = {
  // Colors — extracted from S01-S131 images
  colors: {
    // Backgrounds
    bg: "#F6F3EE",           // Warm cream — all light screens (S02-S153)
    bgDark: "#0D0C0A",       // Splash dark (S01)
    bgDarkPanel: "#1A1714",  // Right panel in design boards

    // Text
    textPrimary: "#161616",  // Near-black headings
    textSecondary: "#6B6B66", // Gray descriptions
    textMuted: "#A09890",    // Light gray labels
    textWhite: "#FFFFFF",

    // Accent — gold/champagne
    accent: "#C8A96A",       // Primary gold — buttons, icons, badges
    accentDark: "#B8943A",   // Darker gold for hover
    accentLight: "rgba(200,169,106,0.12)", // Light gold background
    accentBorder: "rgba(200,169,106,0.25)", // Gold border

    // Surfaces
    surface: "#FFFFFF",      // Cards, inputs, sheets
    surfaceElevated: "#FFFFFF",

    // Borders
    border: "#E9E5DF",       // Default border
    borderLight: "#F0ECE6",  // Lighter border

    // Status
    error: "#E53935",        // Red — validation, warnings
    errorLight: "rgba(229,57,53,0.08)",
    success: "#4CAF50",      // Green — checkmarks
    successLight: "rgba(76,175,80,0.08)",
    warning: "#FF9800",      // Orange — cautions
    warningLight: "rgba(255,152,0,0.08)",

    // Virtual Try-On accent
    purple: "#5B21B6",
    purpleLight: "#EDE9FE",
    purpleBorder: "rgba(91,33,182,0.2)",
  },

  // Typography — Inter font family
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    // Weights
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    // Sizes
    size: {
      xs: 10,
      sm: 12,
      base: 14,
      md: 15,
      lg: 16,
      xl: 18,
      "2xl": 20,
      "3xl": 24,
      "4xl": 28,
      "5xl": 32,
      hero: 34,
    },
    // Line heights
    lineHeight: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.4,
      relaxed: 1.5,
      loose: 1.6,
    },
  },

  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
    "5xl": 48,
  },

  // Border radius
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    full: 9999,
  },

  // Shadows
  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.06)",
    md: "0 2px 8px rgba(0,0,0,0.08)",
    lg: "0 4px 16px rgba(0,0,0,0.1)",
    xl: "0 8px 30px rgba(0,0,0,0.12)",
    card: "0 2px 12px rgba(0,0,0,0.06)",
    sheet: "0 -4px 20px rgba(0,0,0,0.1)",
  },

  // Animation
  animation: {
    duration: {
      fast: 150,
      normal: 200,
      slow: 300,
      slower: 400,
    },
    easing: {
      default: "cubic-bezier(0.22, 1, 0.36, 1)",
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
} as const;

// CSS variable string generator
export function getCSSVariables(): string {
  return `
    :root {
      --bg: ${tokens.colors.bg};
      --bg-dark: ${tokens.colors.bgDark};
      --text-primary: ${tokens.colors.textPrimary};
      --text-secondary: ${tokens.colors.textSecondary};
      --text-muted: ${tokens.colors.textMuted};
      --accent: ${tokens.colors.accent};
      --accent-dark: ${tokens.colors.accentDark};
      --accent-light: ${tokens.colors.accentLight};
      --surface: ${tokens.colors.surface};
      --border: ${tokens.colors.border};
      --error: ${tokens.colors.error};
      --success: ${tokens.colors.success};
      --purple: ${tokens.colors.purple};
      --purple-light: ${tokens.colors.purpleLight};
    }
  `;
}
