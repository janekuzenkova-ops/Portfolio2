"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface TiltImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltImage({ src, alt, width, height, className, style }: TiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -12, y: cx * 12 });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        perspective: "400px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          transition: "transform 0.2s ease-out",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      />
    </div>
  );
}
