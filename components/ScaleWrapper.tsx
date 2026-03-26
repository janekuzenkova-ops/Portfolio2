"use client";

import { useEffect, useState, type ReactNode } from "react";

const SIDE_PAD = 40;

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const update = () => {
      const vw = document.documentElement.clientWidth;
      const available = vw - SIDE_PAD * 2;
      setZoom(Math.min(available / 1440, 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const bleed = zoom > 0 ? SIDE_PAD / zoom : SIDE_PAD;

  return (
    <div style={{ padding: `0 ${SIDE_PAD}px` }}>
      <div
        style={{
          width: "1440px",
          margin: "0 auto",
          zoom,
          ["--carousel-bleed" as string]: `${bleed}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
