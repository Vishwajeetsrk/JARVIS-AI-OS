export function LegalSections() {
  return (
    <>
      <section
        id="privacy"
        style={{
          position: "relative",
          zIndex: 2,
          background: "#C5C5C5",
          borderTop: "1px solid rgba(0,0,0,0.18)",
          padding: "70px 32px",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Privacy Policy
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: 560,
            }}
          >
            COGNITRA collects only the information required to deliver automation engagements.
            Replace this placeholder with counsel-approved language before production launch.
          </p>
        </div>
      </section>
      <section
        id="terms"
        style={{
          position: "relative",
          zIndex: 2,
          background: "#b8b8b8",
          borderTop: "1px solid rgba(0,0,0,0.18)",
          padding: "70px 32px",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h2
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Terms of Service
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: 560,
            }}
          >
            Use of this site constitutes agreement to COGNITRA&apos;s engagement terms. Update with
            jurisdiction-specific policies before going live.
          </p>
        </div>
      </section>
    </>
  );
}
