"use client";

import { useEffect, useState } from "react";
import { Sparkles, Github, Layers, Database, Cpu, Activity, ArrowUpRight, Terminal, Globe, Shield, Wifi } from "lucide-react";

const ACCENT = "#00e5ff";
const WCODE: Record<number, string> = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing Rime Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Dense Drizzle",
  61: "Slight Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  71: "Slight Snow",
  73: "Moderate Snow",
  75: "Heavy Snow",
  80: "Slight Showers",
  81: "Moderate Showers",
  82: "Violent Showers",
  95: "Thunderstorm",
  96: "Thunderstorm with Hail",
  99: "Heavy Hail Thunderstorm",
};

type Tile = { key: string; icon: any; label: string; href: string; badge?: string; desc?: string };

const TILES: Tile[] = [
  {
    key: "github-repo",
    icon: Github,
    label: "JARVIS AI OS Repository",
    href: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
    badge: "v4.0.0",
    desc: "Autonomous agent operating system source repository",
  },
  {
    key: "github-profile",
    icon: Globe,
    label: "Vishwajeet GitHub Profile",
    href: "https://github.com/Vishwajeetsrk",
    badge: "Architect",
    desc: "Core developer and AI systems lead",
  },
  {
    key: "local-console",
    icon: Terminal,
    label: "Full JARVIS Workspace Console",
    href: "https://jarvisaios.vercel.app/console",
    badge: "Cloud Console",
    desc: "Universal project builder, code editor & fleet hub",
  },
  {
    key: "supabase-db",
    icon: Database,
    label: "Supabase Cloud Database",
    href: "https://supabase.com/dashboard/project/tupgfxqkefgntrpgakxk",
    badge: "15 Tables",
    desc: "Real-time PostgreSQL cloud persistence & RLS",
  },
  {
    key: "fleet-runtime",
    icon: Cpu,
    label: "Autonomous 8-Bot Fleet & Org Chart",
    href: "https://jarvisaios.vercel.app/console/fleet",
    badge: "Active",
    desc: "Executive Chief of Staff & multi-persona orchestration",
  },
];

function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  const [wx, setWx] = useState<{ temp: number | null; code: number | null; city: string } | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let ok = true;
    const load = () =>
      fetch("/api/weather")
        .then((r) => r.json())
        .then((d) => {
          if (ok)
            setWx({
              temp: d.current?.temperature_2m ?? null,
              code: d.current?.weather_code ?? null,
              city: d.city || "System Online",
            });
        })
        .catch(() => {});
    load();
    const id = setInterval(load, 1200000);
    return () => {
      ok = false;
      clearInterval(id);
    };
  }, []);

  if (!now) return <div style={{ height: 52 }} />;
  const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
      <div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: "0.04em",
            color: "#ffffff",
            lineHeight: 1,
            fontFamily: "var(--font-display)",
            textShadow: `0 0 28px ${ACCENT}44`,
          }}
        >
          {time}
        </div>
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            color: "rgba(240,237,232,0.6)",
            marginTop: 5,
            textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
          }}
        >
          {date} · VISHWAJEET CORE
        </div>
      </div>
      {wx && (
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 16 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: `${ACCENT}`, fontFamily: "var(--font-display)" }}>
            {wx.temp != null ? Math.round(wx.temp) + "°C" : "LIVE"}
          </div>
          <div
            style={{
              fontSize: 9.5,
              letterSpacing: "0.14em",
              color: "rgba(240,237,232,0.55)",
              marginTop: 3,
              textTransform: "uppercase",
              fontFamily: "var(--font-mono)",
            }}
          >
            {(wx.city || "JARVIS OS").toUpperCase()}
            {wx.city && wx.code != null ? " · " : ""}
            {wx.code != null ? (WCODE[wx.code] || "").toUpperCase() : ""}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApexOverviewPanel() {
  const [open, setOpen] = useState(false);
  const FIL = open ? 480 : 320;
  const FIL_CAP = "calc(100vw - 184px)";

  return (
    <div className="apex-overview" style={{ pointerEvents: "none" }}>
      {/* Glow cone backdrop */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 8,
          width: "min(520px, 94vw)",
          height: 260,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 50% 75% at 46% 0%, ${ACCENT}${open ? "60" : "30"}, ${ACCENT}0d 48%, transparent 75%)`,
          filter: "blur(14px)",
          transition: "all .5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Filament line & sliding node */}
      <div
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Toggle overview panel"
        aria-expanded={open}
        style={{ position: "relative", height: 44, cursor: "pointer", pointerEvents: "auto", userSelect: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 8,
            width: `min(${FIL}px, ${FIL_CAP})`,
            height: 2,
            borderRadius: 2,
            background: "linear-gradient(90deg, #00e5ff 0%, #a5f3fc 100%)",
            boxShadow: `0 0 12px ${ACCENT}, 0 0 28px ${ACCENT}${open ? ", 0 0 60px " + ACCENT : ""}`,
            transition: "all .5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 11,
            left: open ? `min(${FIL}px, ${FIL_CAP})` : 6,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: `0 0 12px ${ACCENT}, 0 0 22px ${ACCENT}`,
            transition: "left .5s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 10,
            fontSize: 9,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: open ? ACCENT : "rgba(240,237,232,0.55)",
            transition: "color .3s",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
          }}
        >
          {open ? "▲ CLOSE HUD" : "▼ VISHWAJEET · JARVIS APEX HUD"}
        </div>
      </div>

      {/* Expanded HUD Surface */}
      <div
        style={{
          position: "absolute",
          top: 54,
          left: 10,
          width: "min(480px, calc(100vw - 20px))",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity .3s ease, transform .3s ease",
          zIndex: 45,
        }}
      >
        <div
          style={{
            background: "rgba(4, 10, 22, 0.94)",
            backdropFilter: "blur(32px)",
            border: `1px solid ${ACCENT}40`,
            borderRadius: 22,
            padding: 22,
            boxShadow: `0 0 50px ${ACCENT}20, 0 16px 44px rgba(0,0,0,0.85)`,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <Clock />

          {/* Real-Time Telemetry Matrix */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>18 Active Agents</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e5ff", boxShadow: "0 0 10px #00e5ff" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Groq LPUs & Gemini</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Supabase Cloud DB</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", boxShadow: "0 0 10px #f59e0b" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Sub-400ms Audio</span>
            </div>
          </div>

          {/* Quick Access Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TILES.map((t) => {
              const Icon = t.icon;
              return (
                <a
                  key={t.key}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    background: "rgba(6, 16, 32, 0.75)",
                    border: `1px solid ${ACCENT}25`,
                    borderRadius: 14,
                    textDecoration: "none",
                    color: "#ffffff",
                    transition: "all .2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${ACCENT}88`;
                    e.currentTarget.style.background = "rgba(0, 229, 255, 0.12)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${ACCENT}25`;
                    e.currentTarget.style.background = "rgba(6, 16, 32, 0.75)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <Icon size={18} style={{ color: ACCENT, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{t.label}</div>
                    {t.desc && <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>{t.desc}</div>}
                  </div>
                  {t.badge && (
                    <span
                      style={{
                        fontSize: 9.5,
                        padding: "3px 8px",
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      {t.badge}
                    </span>
                  )}
                  <ArrowUpRight size={14} style={{ color: `${ACCENT}99`, flexShrink: 0 }} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
