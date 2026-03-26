"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const update = () => {
      setZoom(Math.min(document.documentElement.clientWidth / 1440, 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: "1440px", margin: "0 auto", zoom }}>
      {children}
    </div>
  );
}
