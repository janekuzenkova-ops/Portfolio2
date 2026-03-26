"use client";

import { useRef, useState, useCallback } from "react";

interface CaseButtonProps {
  top: string;
  left?: string;
  right?: string;
  href?: string;
}

const MAGNETIC_RANGE = 60;
const MAGNETIC_STRENGTH = 0.2;

export default function CaseButton({ top, left, right, href }: CaseButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setOffset({
      x: dx * MAGNETIC_STRENGTH,
      y: dy * MAGNETIC_STRENGTH,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  const baseTranslate = right ? "translateY(-50%)" : "translate(-50%, -50%)";

  const posStyle: React.CSSProperties = {
    position: "absolute",
    top,
  };

  if (right) {
    posStyle.right = right;
  } else {
    posStyle.left = left;
  }

  return (
    <div
      style={{
        ...posStyle,
        width: "300px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: baseTranslate,
        pointerEvents: "auto",
        zIndex: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        ref={btnRef}
        href={href || "#"}
        style={{
          width: "228px",
          height: "228px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: hovered
            ? "transform 0.25s ease-out, background 0.2s ease"
            : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease",
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${hovered ? 1.05 : 1})`,
          background: hovered ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: "none",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: 500,
            userSelect: "none",
            textAlign: "center",
            lineHeight: "1.3",
          }}
        >
          смотреть кейс
        </span>
      </a>
    </div>
  );
}
