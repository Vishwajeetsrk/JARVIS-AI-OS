import { useState, useEffect } from "react";

interface S01SplashProps {
  onComplete: () => void;
}

export function S01Splash({ onComplete }: S01SplashProps) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => onComplete(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (phase >= 4) {
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const p = Math.min(elapsed / 1500, 1);
        setProgress(Math.round(p * 40));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [phase]);

  return (
    <div className="screen" style={{
      background: "#0D0C0A",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background fashion scene — dark closet with warm amber lighting, clothes rack, bags, shoes on pedestal */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: phase >= 3 ? 0.4 : 0,
        transition: "opacity 1.2s ease-out",
        filter: "brightness(0.45) saturate(1.3) contrast(1.1)",
      }} />

      {/* Warm amber spotlight from top-center */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 25%, rgba(180,140,60,0.15) 0%, rgba(13,12,10,0.97) 70%)",
        opacity: phase >= 3 ? 1 : 0,
        transition: "opacity 1s ease-out",
      }} />

      {/* Bottom gradient fade to dark */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0, height: "45%",
        background: "linear-gradient(to top, #0D0C0A 10%, rgba(13,12,10,0.8) 50%, transparent 100%)",
      }} />

      {/* Status bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 54, display: "flex", justifyContent: "space-between",
        alignItems: "center", padding: "14px 28px 0",
        fontSize: 15, fontWeight: 600, color: "rgba(200,169,106,0.4)",
        zIndex: 10,
      }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 5, fontSize: 12 }}>●●●●</div>
      </div>

      {/* Main content — centered vertically */}
      <div style={{
        position: "relative", zIndex: 5,
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        paddingBottom: 80,
      }}>
        {/* Logo W — serif italic gold monogram, large */}
        <div style={{
          fontFamily: "'Georgia', 'Didot', 'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: 96,
          fontWeight: 400,
          color: "#C8A96A",
          lineHeight: 0.9,
          opacity: phase >= 0 ? 1 : 0,
          transform: phase >= 0 ? "scale(1)" : "scale(0.92)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          marginBottom: 20,
          textShadow: "0 4px 30px rgba(200,169,106,0.15)",
        }}>
          W
        </div>

        {/* Brand name WARDELIO — wide letter spacing */}
        <div style={{
          fontSize: 17,
          fontWeight: 300,
          color: "#C8A96A",
          letterSpacing: "8px",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          marginBottom: 16,
        }}>
          WARDELIO
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 15,
          color: "rgba(200,169,106,0.55)",
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(5px)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          Your wardrobe.<br />Styled by AI.
        </div>
      </div>

      {/* Bottom section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0 24px 50px", zIndex: 5,
      }}>
        {/* Feature pills with bullet separators */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 0, marginBottom: 14,
          opacity: phase >= 3 ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}>
          {["PERSONAL STYLIST", "SMART WARDROBE", "VIRTUAL TRY-ON"].map((t, i) => (
            <span key={t} style={{
              fontSize: 8.5,
              fontWeight: 500,
              color: "rgba(200,169,106,0.4)",
              letterSpacing: "0.6px",
              display: "flex", alignItems: "center",
            }}>
              {i > 0 && <span style={{
                margin: "0 8px", fontSize: 3, color: "rgba(200,169,106,0.3)",
              }}>●</span>}
              {t}
            </span>
          ))}
        </div>

        {/* Progress bar — thin, champagne gold */}
        <div style={{
          opacity: phase >= 4 ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}>
          <div style={{
            height: 2,
            background: "rgba(200,169,106,0.1)",
            borderRadius: 1,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgba(200,169,106,0.5), rgba(200,169,106,0.8))",
              borderRadius: 1,
              transition: "width 0.08s linear",
            }} />
          </div>
          <div style={{
            textAlign: "center", marginTop: 10,
            fontSize: 11, color: "rgba(200,169,106,0.3)",
            letterSpacing: "0.2px",
          }}>
            Preparing your fashion experience...
          </div>
        </div>
      </div>
    </div>
  );
}
