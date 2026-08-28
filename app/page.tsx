import ApexWorld from "@/components/ApexWorld";
import ApexOverviewPanel from "@/components/ApexOverviewPanel";

export default function Home() {
  return (
    <main
      id="main"
      style={{
        background: "#04080f",
        color: "#f0ede8",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Top-left overview HUD: live clock + weather + user profile links */}
      <ApexOverviewPanel />

      {/* The world: 3D Particle Orb Core + Orbiting Agent Reasoning Constellation */}
      <section style={{ position: "relative", height: "100vh", minHeight: 620, width: "100%" }}>
        <ApexWorld />
      </section>

      {/* Top Right Header Controls */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: "clamp(16px, 3vw, 40px)",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <a
          href="http://localhost:8080/console"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00e5ff",
            textDecoration: "none",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            borderRadius: 20,
            padding: "7px 16px",
            background: "rgba(0, 229, 255, 0.1)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 16px rgba(0, 229, 255, 0.15)",
            fontWeight: 600,
          }}
        >
          Open Console ↗
        </a>

        <a
          href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(240,237,232,0.75)",
            textDecoration: "none",
            border: "1px solid rgba(240,237,232,0.2)",
            borderRadius: 20,
            padding: "7px 15px",
            background: "rgba(4,8,15,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          GitHub ↗
        </a>
      </div>
    </main>
  );
}
