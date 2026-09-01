import { useEffect, useState } from "react";

function formatManila(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function useLocalTime() {
  const [time, setTime] = useState(() => formatManila(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatManila(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
