"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

const SIDE_PAD = 40;
const MOBILE_BP = 768;

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState(1);
  const [mobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    const update = () => {
      const vwRaw = document.documentElement.clientWidth;
      const vw = Number.isFinite(vwRaw) ? Math.max(vwRaw, 1) : 1024;

      const isMobile = vw < MOBILE_BP;
      setMobile(isMobile);
      if (isMobile) {
        setZoom(1);
        return;
      }

      const available = Math.max(vw - SIDE_PAD * 2, 0);
      const z = Math.min(available / 1440, 1);
      setZoom(z);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (mobile) {
    return (
      <div
        style={{
          width: "100%",
          padding: "0 16px",
          ["--mobile" as string]: "1",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div style={{ padding: `0 ${SIDE_PAD}px` }}>
      <div
        style={{
          width: "1440px",
          margin: "0 auto",
          zoom,
        }}
      >
        {children}
      </div>
    </div>
  );
}
