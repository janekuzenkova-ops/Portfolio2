"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

interface CaseGlowImageProps {
  src: string;
  alt: string;
  aspect: string;
  ring?: boolean;
}

export default function CaseGlowImage({ src, alt, aspect, ring = true }: CaseGlowImageProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 70%)`;
  }, []);

  const handleLeave = useCallback(() => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden case-page-img${ring ? " ring-1 ring-white/10" : ""}`}
      style={{ aspectRatio: aspect }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ pointerEvents: "none" }}
      />
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}
