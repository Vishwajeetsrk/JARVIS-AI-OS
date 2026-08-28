"use client";

import { useEffect, useRef, useState } from "react";
import ApexHeroOrb, { type OrbState } from "./ApexHeroOrb";
import ReasoningWebJs from "./ReasoningWeb";
import ShaderBackgroundJs from "./ShaderBackground";
import OrbStatusBar from "./OrbStatusBar";
import AgentCockpit, { type AgentNodeSel, AGENT_REGISTRY } from "./AgentCockpit";
import ProjectLauncher from "./ProjectLauncher";
import VoicePipeline from "./VoicePipeline";
import DeviceControlPanel from "./DeviceControlPanel";

export type NodeSel = AgentNodeSel;

const ReasoningWeb = ReasoningWebJs as unknown as React.ComponentType<{
  state?: string;
  trace?: unknown;
  mode?: string;
  coreless?: boolean;
  onSelect?: (n: NodeSel) => void;
  light?: boolean;
}>;

const ShaderBackground = ShaderBackgroundJs as unknown as React.ComponentType<{
  opacity?: number;
  voiceActive?: boolean;
  gold?: boolean;
}>;

export const ROSTER: { key: string; name: string; color: string }[] = [
  { key: "chief_of_staff", name: "Chief of staff", color: "#00e5ff" },
  { key: "memory", name: "Memory", color: "#00e5ff" },
  { key: "strategist", name: "Strategist", color: "#00e5ff" },
  { key: "researcher", name: "Researcher", color: "#00e5ff" },
  { key: "finance", name: "Finance", color: "#00e5ff" },
  { key: "editor", name: "Editor", color: "#00e5ff" },
  { key: "sales", name: "Sales", color: "#f5a623" },
  { key: "marketing", name: "Marketing", color: "#f5a623" },
  { key: "ops", name: "Ops", color: "#f5a623" },
  { key: "social_media", name: "Social", color: "#f5a623" },
  { key: "engineering", name: "Engineering", color: "#f5a623" },
  { key: "design", name: "Design", color: "#f5a623" },
  { key: "developer", name: "Developer", color: "#f5a623" },
  { key: "analytics", name: "Analytics", color: "#7f9bb3" },
  { key: "crm", name: "CRM", color: "#7f9bb3" },
  { key: "calendar", name: "Calendar", color: "#7f9bb3" },
  { key: "email", name: "Email", color: "#7f9bb3" },
  { key: "drive", name: "Drive", color: "#7f9bb3" },
];

export default function ApexWorld() {
  const [selected, setSelected] = useState<NodeSel | null>(null);
  const [reduced, setReduced] = useState(false);

  const [showState, setShowState] = useState<OrbState>("idle");
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const orbState: OrbState = showState;

  const boost = () => {
    const next: OrbState = showState === "idle" ? "thinking" : showState === "thinking" ? "speaking" : "idle";
    setShowState(next);
    if (showTimer.current) clearTimeout(showTimer.current);
    showTimer.current = setTimeout(() => setShowState("idle"), 8000);
  };

  useEffect(() => () => {
    if (showTimer.current) clearTimeout(showTimer.current);
  }, []);

  const openAgent = (n: NodeSel) => {
    setSelected(n);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const webState = orbState === "thinking" ? "processing" : orbState === "speaking" ? "speaking" : "standby";

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", userSelect: "none" }}>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 95% 88% at 50% 42%, #122c43 0%, #0c1d30 38%, #07111f 72%, #050b14 100%)",
        }}
      />

      {/* Background WebGL waves */}
      {!reduced && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ShaderBackground opacity={0.12} voiceActive={orbState === "speaking"} gold={false} />
        </div>
      )}

      {/* Cyan Light Cast */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          mixBlendMode: "screen",
          background: `radial-gradient(circle at 50% 42%, rgba(13,210,255,${
            orbState === "speaking" ? 0.3 : 0.18
          }) 0%, rgba(13,170,228,0.08) 30%, rgba(8,17,31,0) 62%)`,
          transition: "background 0.6s ease",
        }}
      />

      {/* Reasoning Web Constellation */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <ReasoningWeb
          state={webState}
          mode="full"
          coreless
          onSelect={(n: NodeSel) => {
            openAgent(n);
          }}
        />
      </div>

      {/* Accessible agent list for screen readers */}
      <nav className="visually-hidden" aria-label="JARVIS Autonomous Agents">
        <ul>
          {ROSTER.map((a) => (
            <li key={a.key}>
              <button type="button" onClick={() => openAgent({ key: a.key, name: a.name, color: a.color })}>
                {a.name} - {AGENT_REGISTRY[a.key]?.role ?? "Specialist"}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* The Core 3D Particle Scene */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "min(560px, 58vw)",
          height: "min(500px, 56vw, 70vh)",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <ApexHeroOrb state={orbState} interactive={false} />
      </div>

      {/* Central Interactive Tap Disc */}
      <div
        role="button"
        tabIndex={0}
        aria-label="JARVIS Core — Tap to cycle autonomous state"
        onClick={boost}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            boost();
          }
        }}
        onMouseDown={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(340px, 36vw)",
          height: "min(340px, 36vw)",
          borderRadius: "50%",
          zIndex: 4,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          userSelect: "none",
        }}
      />

      {/* Equalizer & Status Bar */}
      <OrbStatusBar state={orbState} />

      {/* Project Launcher */}
      <ProjectLauncher />

      {/* Device & OS Bridge Control */}
      <DeviceControlPanel />

      {/* Live Voice Pipeline */}
      <VoicePipeline
        onStateChange={(s) => setShowState(s)}
        onTranscript={(t) => console.log("Voice transcript:", t)}
      />

      {/* Interactive Agent Cockpit */}
      {selected && (
        <AgentCockpit
          sel={selected}
          onClose={() => setSelected(null)}
          onStateChange={(state) => {
            setShowState(state);
          }}
        />
      )}
    </div>
  );
}
