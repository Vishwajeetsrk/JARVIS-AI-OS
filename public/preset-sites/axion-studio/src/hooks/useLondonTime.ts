import { useEffect, useState } from "react";

function formatLondonTime(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function useLondonTime() {
  const [time, setTime] = useState(() => formatLondonTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(formatLondonTime(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
