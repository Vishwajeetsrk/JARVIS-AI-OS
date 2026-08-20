export function ScrollIndicator() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
      }}
    >
      <div
        style={{
          width: 22,
          height: 36,
          border: "1.5px solid rgba(0,0,0,0.75)",
          borderRadius: 11,
          display: "flex",
          justifyContent: "center",
          paddingTop: 6,
        }}
      >
        <div
          className="cognitra-scroll-dot"
          style={{
            width: 3,
            height: 8,
            background: "rgba(0,0,0,0.85)",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}
