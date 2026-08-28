interface IconProps { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; }
const d: IconProps = { size: 24, color: "#C8A96A", strokeWidth: 1.5 };

export const Home = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>;
};

export const Plus = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
};

export const ArrowRight = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
};

export const ArrowLeft = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>;
};

export const ChevronRight = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
};

export const Close = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
};
