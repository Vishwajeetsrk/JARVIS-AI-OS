import { CREW } from "../constants";
import { FadeUp } from "../components/FadeUp";
import { InnerPageLayout } from "../components/InnerPageLayout";

type CrewPageProps = {
  embedded?: boolean;
};

export function CrewPage({ embedded = false }: CrewPageProps) {
  const content = (
    <InnerPageLayout
      counter="002 / 005"
      title="The crew"
      subtitle="Strategists and engineers building bespoke AI products for ambitious teams."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {CREW.map((member, idx) => (
          <FadeUp key={member.name} delay={0.1 + idx * 0.08}>
            <div
              style={{
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 16,
                padding: 24,
                background: "rgba(255,255,255,0.35)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 4px", color: "#1a1a1a" }}>
                {member.name}
              </h3>
              <p
                style={{ fontSize: 12, letterSpacing: "0.06em", margin: "0 0 8px", color: "#666" }}
              >
                {member.role}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "#3a3a3a" }}>
                {member.focus}
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
