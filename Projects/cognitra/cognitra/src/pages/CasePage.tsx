import { CASE_STUDIES } from "../constants";
import { FadeUp } from "../components/FadeUp";
import { InnerPageLayout } from "../components/InnerPageLayout";

type CasePageProps = {
  embedded?: boolean;
};

export function CasePage({ embedded = false }: CasePageProps) {
  const content = (
    <InnerPageLayout
      counter="004 / 005"
      title="Selected client work"
      subtitle="Automation systems shipped for logistics, health, and retail teams."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
        {CASE_STUDIES.map((item, idx) => (
          <FadeUp key={item.client} delay={0.15 + idx * 0.1}>
            <div
              style={{
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 16,
                padding: "24px 28px",
                background: "rgba(255,255,255,0.35)",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#666",
                }}
              >
                {item.tag}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "8px 0 6px" }}>
                {item.client}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>
                {item.outcome}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
