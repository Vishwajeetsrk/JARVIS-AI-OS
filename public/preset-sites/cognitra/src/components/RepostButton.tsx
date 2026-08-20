import { Share2 } from "lucide-react";

export function RepostButton() {
  return (
    <button
      type="button"
      className="cognitra-nav-link"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: 6,
        color: "rgba(0,0,0,0.8)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        background: "none",
        border: "none",
        fontFamily: "inherit",
      }}
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.share) {
          void navigator.share({
            title: "COGNITRA",
            url: window.location.href,
          });
        }
      }}
    >
      <Share2 size={14} strokeWidth={2} aria-hidden />
      REPOST
    </button>
  );
}
