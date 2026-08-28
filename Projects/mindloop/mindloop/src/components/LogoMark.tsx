type LogoMarkProps = {
  outerClass?: string;
  innerClass?: string;
};

export default function LogoMark({
  outerClass = "w-7 h-7",
  innerClass = "w-3 h-3",
}: LogoMarkProps) {
  return (
    <span className={`relative inline-flex items-center justify-center ${outerClass}`}>
      <span className="absolute inset-0 rounded-full border-2 border-foreground/60" />
      <span className={`rounded-full border border-foreground/60 ${innerClass}`} />
    </span>
  );
}
