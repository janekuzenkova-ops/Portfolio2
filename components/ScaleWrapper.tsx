"use client";

import { useEffect, useState, type ReactNode } from "react";

const SIDE_PAD = 40;
const MOBILE_BP = 768;

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState(1);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const vw = document.documentElement.clientWidth;
      const isMobile = vw < MOBILE_BP;
      setMobile(isMobile);
      if (isMobile) {
        setZoom(1);
      } else {
        const available = vw - SIDE_PAD * 2;
        setZoom(Math.min(available / 1440, 1));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const bleed = !mobile && zoom < 1 ? SIDE_PAD / zoom : 0;

  if (mobile) {
    return (
      <div
        style={{
          width: "100%",
          padding: "0 16px",
          ["--mobile" as string]: "1",
          ["--carousel-bleed" as string]: "0px",
          ["--carousel-radius" as string]: "0px",
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
          ["--carousel-bleed" as string]: `${bleed}px`,
          ["--carousel-radius" as string]: bleed > 0 ? "0px" : "16px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
