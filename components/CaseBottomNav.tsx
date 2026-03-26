"use client";

import Image from "next/image";

interface CaseLink {
  label: string;
  href: string;
  image: string;
}

interface CaseBottomNavProps {
  prev: CaseLink;
  next: CaseLink;
}

export default function CaseBottomNav({ prev, next }: CaseBottomNavProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "rgba(17, 17, 17, 0.75)",
        backdropFilter: "blur(20px) saturate(1.8)",
        WebkitBackdropFilter: "blur(20px) saturate(1.8)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href={prev.href}
          className="group"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div style={{ width: "60px", height: "45px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src={prev.image}
              alt={prev.label}
              width={120}
              height={90}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="transition-colors duration-300 group-hover:text-white"
            style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
          >
            ← {prev.label}
          </span>
        </a>

        <a
          href={next.href}
          className="group"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <span
            className="transition-colors duration-300 group-hover:text-white"
            style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
          >
            {next.label} →
          </span>
          <div style={{ width: "60px", height: "45px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src={next.image}
              alt={next.label}
              width={120}
              height={90}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
