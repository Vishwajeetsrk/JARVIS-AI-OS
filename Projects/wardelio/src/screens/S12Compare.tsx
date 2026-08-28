import { Compare } from "@/components/ui/compare";

interface Props {
  onBack: () => void;
}

export function S12Compare({ onBack }: Props) {
  return (
    <div className="screen" style={{ background: "var(--bg)", padding: "56px 16px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <button onClick={onBack} style={{ border: "none", background: "var(--surface)", width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          ←
        </button>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>Outfit Compare</h1>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Drag or hover to compare</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        {/* Aceternity demo - code problem/solution */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/code-solution.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[320px] w-[340px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>

        <p style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center", maxWidth: 300 }}>
          Wardelio Compare — perfect for <b>Before vs After</b> outfit checks, original vs AI-styled looks, or day vs night styling.
        </p>

        {/* Wardelio outfit example - fashion compare */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="p-4 border rounded-3xl bg-white border-neutral-200">
            <Compare
              firstImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
              secondImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
              firstImageClassName="object-cover"
              secondImageClassname="object-cover"
              className="h-[320px] w-[340px]"
              slideMode="drag"
            />
          </div>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
          Drag mode — ideal for mobile try-on comparison
        </p>

        <button className="btn-primary" onClick={onBack} style={{ marginTop: 8 }}>
          Back to Wardelio
        </button>
      </div>
    </div>
  );
}
