"use client";

import { useState } from "react";

interface CaseButtonProps {
  top: string;
  left: string;
}

export default function CaseButton({ top, left }: CaseButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        top,
        left,
        transform: hovered
          ? "translate(-50%, -50%) scale(1.05)"
          : "translate(-50%, -50%) scale(1)",
        width: "240px",
        height: "240px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.4s ease",
        background: hovered
          ? "rgba(30, 30, 30, 0.55)"
          : "rgba(20, 20, 20, 0.45)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
        boxShadow: hovered
          ? "0 8px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.12)"
          : "0 4px 24px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.06)",
        border: "none",
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
    </div>
  );
}
