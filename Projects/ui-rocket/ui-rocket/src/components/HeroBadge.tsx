import { MIcon } from "./MIcon";

type HeroBadgeProps = {
  label?: string;
};

export function HeroBadge({ label = "Now in public beta" }: HeroBadgeProps) {
  return (
    <div
      className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80"
      data-editable
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/30">
        <MIcon name="rocket_launch" className="text-[14px] text-violet-300" />
      </span>
      <span>{label}</span>
    </div>
  );
}
