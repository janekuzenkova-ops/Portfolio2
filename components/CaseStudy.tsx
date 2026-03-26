"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import CaseButton from "./CaseButton";

interface CaseStudyProps {
  headerImage: string;
  title: string;
  subCards?: { src: string; bg: string }[];
  buttonPos?: { top: string; left?: string; right?: string };
  href?: string;
}

function GlowOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const glow = ref.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 70%)`;
  }, []);

  const handleLeave = useCallback(() => {
    const glow = ref.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      style={{ position: "absolute", inset: 0, zIndex: 10 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={ref}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />
    </div>
  );
}

export default function CaseStudy({
  headerImage,
  title,
  subCards,
  buttonPos = { top: "58.5%", right: "80px" },
  href,
}: CaseStudyProps) {
  return (
    <section className="px-5 flex flex-col gap-5">
      <div
        className="relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
        style={{ aspectRatio: "1400/810" }}
      >
        <Image
          src={headerImage}
          alt={title}
          fill
          className="object-cover"
          style={{ pointerEvents: "none" }}
        />
        <GlowOverlay />
        <CaseButton top={buttonPos.top} left={buttonPos.left} right={buttonPos.right} href={href} />
      </div>

      {subCards && subCards.length > 0 && (
        <div className="flex gap-4">
          {subCards.map((card, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: card.bg, aspectRatio: "692/520" }}
            >
              <Image
                src={card.src}
                alt=""
                width={1384}
                height={1040}
                className="w-full h-full object-contain"
                style={{ objectPosition: "center calc(50% + 15px)", position: "relative", zIndex: 1, pointerEvents: "none" }}
              />
              {card.bg.toLowerCase() !== "#dee2e6" && <GlowOverlay />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
