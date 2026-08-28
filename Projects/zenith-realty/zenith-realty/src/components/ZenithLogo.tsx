export function ZenithLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`text-xl font-black leading-[0.85] tracking-tighter text-[#141414] ${className}`}
      data-editable
      data-preset-text="logo"
    >
      <div>ZENITH</div>
      <div>REALTY</div>
    </div>
  );
}
