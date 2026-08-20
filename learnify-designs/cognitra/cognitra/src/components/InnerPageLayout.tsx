import type { ReactNode } from "react";
import { FadeUp } from "./FadeUp";

type InnerPageLayoutProps = {
  counter: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function InnerPageLayout({ counter, title, subtitle, children }: InnerPageLayoutProps) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        background: "#C5C5C5",
        minHeight: "100vh",
        padding: "120px 32px 80px",
      }}
    >
      <FadeUp delay={0}>
        <p style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", margin: "0 0 20px" }}>
          {counter}
        </p>
      </FadeUp>
      <FadeUp as="h1" delay={0.1}>
        <h1
          style={{
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            maxWidth: 520,
            margin: 0,
          }}
        >
          {title}
        </h1>
      </FadeUp>
      {subtitle && (
        <FadeUp as="p" delay={0.25}>
          <p
            style={{
              marginTop: 20,
              fontSize: 14,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: 420,
            }}
          >
            {subtitle}
          </p>
        </FadeUp>
      )}
      <div style={{ marginTop: 48 }}>{children}</div>
    </section>
  );
}
