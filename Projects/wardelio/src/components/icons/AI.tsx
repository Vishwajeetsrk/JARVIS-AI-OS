interface IconProps { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; }
const d: IconProps = { size: 24, color: "#C8A96A", strokeWidth: 1.5 };

export const Sparkles = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>;
};

export const MagicWand = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="m3 21 9-9"/></svg>;
};
