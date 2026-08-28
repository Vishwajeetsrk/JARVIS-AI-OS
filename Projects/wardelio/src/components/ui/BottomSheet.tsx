import { useEffect, useState } from "react";
import { tokens } from "../../tokens";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showHandle?: boolean;
}

export function BottomSheet({ open, onClose, title, children, showHandle = true }: BottomSheetProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => setAnimating(true));
    } else {
      setAnimating(false);
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: animating ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
        zIndex: 200,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        transition: "background 0.3s",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 393,
          maxHeight: "85vh",
          background: tokens.colors.surface,
          borderRadius: "20px 20px 0 0",
          padding: showHandle ? "12px 20px 32px" : "20px 20px 32px",
          overflowY: "auto",
          transform: animating ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {showHandle && (
          <div
            style={{
              width: 36,
              height: 4,
              borderRadius: 2,
              background: tokens.colors.border,
              margin: "0 auto 16px",
            }}
          />
        )}
        {title && (
          <div
            style={{
              fontSize: tokens.typography.size.xl,
              fontWeight: tokens.typography.weight.semibold,
              color: tokens.colors.textPrimary,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
