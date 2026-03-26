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
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * -18, y: cx * 18 });
  }, []);

  const handleEnter = useCallback(() => setHovered(true), []);
  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const { overflow, borderRadius, boxShadow, ...outerStyle } = style || {};

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        ...outerStyle,
        perspective: "300px",
      }}
    >
      <div
        style={{
          overflow: overflow as string,
          borderRadius: borderRadius as string,
          boxShadow: boxShadow as string,
          transition: "transform 0.25s ease-out, box-shadow 0.25s ease-out",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.05 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}
