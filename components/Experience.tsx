"use client";

import { useCallback, useRef } from "react";
import { experienceContent } from "@/content/home";

const experiences = experienceContent.map((e) => ({ ...e }));

const jiggleOffsets = [
  { x: 3, y: -2, r: 1.5 },
  { x: -2, y: 3, r: -2 },
  { x: 4, y: 1, r: 2 },
  { x: -3, y: -3, r: -1.5 },
  { x: 2, y: 4, r: 1 },
  { x: -4, y: 2, r: -2.5 },
  { x: 1, y: -4, r: 3 },
  { x: -1, y: 3, r: -1 },
];

function buildKeyframes() {
  let css = "";
  for (let i = 0; i < experiences.length; i++) {
    for (let j = 0; j < experiences[i].tags.length; j++) {
      const o = jiggleOffsets[j % jiggleOffsets.length];
      css += `
        @keyframes jiggle-${i}-${j} {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(${o.x}px, ${o.y}px) rotate(${o.r}deg); }
        }
        .group:hover > .exp-chips > .exp-chip-${i}-${j} {
          animation: jiggle-${i}-${j} ${0.4 + (j % 3) * 0.15}s ease-in-out ${j * 0.07}s infinite alternate;
        }
      `;
    }
  }
  return css;
}

function GlowCard({ exp, idx }: { exp: typeof experiences[number]; idx: number }) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const glow = glowRef.current;
    if (!glow) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.07), transparent 70%)`;
  }, []);

  const handleLeave = useCallback(() => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      className="group flex-1 bg-[#191919] rounded-2xl flex flex-col justify-between"
      style={{ padding: "20px", minHeight: "240px", position: "relative", overflow: "hidden" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      <div className="flex flex-col gap-4" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col gap-1">
          <h3 className="exp-card-title" style={{ fontSize: "28px", fontWeight: 500, lineHeight: "35px", color: "#ffffff" }}>
            {exp.company}
          </h3>
          <p className="exp-card-role" style={{ fontSize: "21px", fontWeight: 500, lineHeight: "26px", color: "rgba(255,255,255,0.6)" }}>
            {exp.role}
          </p>
        </div>
        <p className="exp-card-period" style={{ fontSize: "18px", fontWeight: 500, lineHeight: "22px", color: "rgba(255,255,255,0.2)" }}>
          {exp.period}
        </p>
      </div>

      <div
        className="flex flex-wrap gap-[10px] exp-chips"
        style={{ position: "relative", zIndex: 1, marginTop: "60px" }}
      >
        {exp.tags.map((tag, j) => (
          <span
            key={j}
            className={`exp-chip exp-chip-${idx}-${j} exp-chip-tag`}
            style={{
              backgroundColor: "#323232",
              fontSize: "21px",
              fontWeight: 500,
              color: "#ffffff",
              padding: "8px 13px",
              borderRadius: "10px",
              lineHeight: "26px",
              transition: "transform 0.35s ease, background-color 0.3s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-5 exp-section" style={{ paddingTop: "120px" }}>
      <style>{buildKeyframes()}</style>
      <div className="flex flex-col gap-10">
        <h2 className="exp-heading" style={{ fontSize: "48px", fontWeight: 500, lineHeight: "60px", color: "#ffffff" }}>
          oпыт работы
        </h2>

        <div className="flex gap-4 exp-grid">
          {experiences.map((exp, i) => (
            <GlowCard key={i} exp={exp} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
