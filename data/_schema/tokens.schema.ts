/**
 * Canonical Design System Token Schema
 * Self-contained design tokens contract for JARVIS AI OS & Open Design
 */

export const DESIGN_SYSTEM_TOKEN_SCHEMA_VERSION = "od-token-schema/v1" as const;

export type TokenCategory =
  | "color"
  | "typography"
  | "spacing"
  | "radius"
  | "shadow"
  | "border"
  | "transition"
  | "zIndex"
  | "opacity";

export interface DesignTokenValue {
  value: string | number;
  type: TokenCategory;
  description?: string;
  fallback?: string | number;
}

export interface DesignTokens {
  colors?: Record<string, DesignTokenValue | string>;
  typography?: {
    fontFamilies?: Record<string, string>;
    fontSizes?: Record<string, string>;
    fontWeights?: Record<string, string | number>;
    lineHeights?: Record<string, string | number>;
    letterSpacing?: Record<string, string>;
  };
  spacing?: Record<string, string | number>;
  radii?: Record<string, string | number>;
  shadows?: Record<string, string>;
  borders?: Record<string, string>;
  transitions?: Record<string, string>;
  zIndices?: Record<string, number>;
}

export interface TokenContract {
  schemaVersion: typeof DESIGN_SYSTEM_TOKEN_SCHEMA_VERSION;
  brand: string;
  tokens: DesignTokens;
  cssVariables?: Record<string, string>;
}

export const DEFAULT_DESIGN_TOKENS: DesignTokens = {
  colors: {
    background: "#030712",
    foreground: "#f8fafc",
    primary: "#00e5ff",
    secondary: "#a855f7",
    accent: "#10b981",
    destructive: "#ef4444",
    muted: "#64748b",
    border: "rgba(255, 255, 255, 0.1)",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    full: "9999px",
  },
  shadows: {
    glowCyan: "0 0 25px rgba(0, 229, 255, 0.2)",
    glowPurple: "0 0 25px rgba(168, 85, 247, 0.2)",
    card: "0 20px 50px rgba(0, 0, 0, 0.8)",
  },
};

export function validateTokens(tokens: unknown): tokens is DesignTokens {
  return typeof tokens === "object" && tokens !== null;
}
