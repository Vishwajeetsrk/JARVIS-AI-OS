import { FadeUp } from "./FadeUp";

const STATEMENT_WORDS = "WE BUILD END-TO-END AI AUTOMATION SYSTEMS.".split(" ");

export function StatementSection() {
  return (
    <section
      className="cognitra-section-pad"
      style={{
        position: "relative",
        zIndex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "70px 32px 32px 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 720,
          padding: "80px 0",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#fff",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25em",
            margin: 0,
          }}
        >
          {STATEMENT_WORDS.map((word, i) => (
            <FadeUp key={word + i} as="span" delay={0.15 + i * 0.08} y={32}>
              <span>{word}</span>
            </FadeUp>
          ))}
        </h2>
        <FadeUp as="p" delay={0.9}>
          <p
            style={{
              marginTop: 24,
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 260,
            }}
          >
            We provide all-in-one AI automation services in one place.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
