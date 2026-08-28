interface IconProps { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; }
const d: IconProps = { size: 24, color: "#C8A96A", strokeWidth: 1.5 };

export const Camera = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>;
};

export const Image = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;
};

export const Mail = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
};

export const Bell = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
};

export const Search = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
};

export const Heart = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
};

export const Bookmark = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>;
};

export const Share = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>;
};

export const Settings = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
};

export const Cloud = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
};

export const Calendar = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>;
};

export const MapPin = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
};

export const BarChart = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>;
};

export const Clock = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
};

export const Lightbulb = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
};

export const Palette = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill={s.color}/><circle cx="17.5" cy="10.5" r=".5" fill={s.color}/><circle cx="8.5" cy="7.5" r=".5" fill={s.color}/><circle cx="6.5" cy="12.5" r=".5" fill={s.color}/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
};

export const LogOut = (p: IconProps = {}) => {
  const s = { ...d, ...p };
  return <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
};
