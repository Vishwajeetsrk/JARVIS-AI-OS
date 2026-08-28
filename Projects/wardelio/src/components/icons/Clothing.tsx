// Wardreobe & Clothing Icons
interface IconProps { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; }
const d: IconProps = { size: 24, color: "#C8A96A", strokeWidth: 1.5 };

export const Shirt = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2 12 3.46 8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/><line x1="6" y1="10" x2="18" y2="10"/></svg>;
};

export const Hanger = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 2 22"/><path d="M6.5 15.5 12 9l5.5 6.5"/><path d="M12 9V2"/><circle cx="12" cy="2" r="1"/></svg>;
};

export const Dress = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M9 5v1a3 3 0 0 1-3 3L3 22h18l-3-14a3 3 0 0 1-3-3V5"/></svg>;
};

export const Wardrobe = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M12 3v18"/><circle cx="8" cy="12" r="1" fill={s.color}/><circle cx="16" cy="12" r="1" fill={s.color}/></svg>;
};
