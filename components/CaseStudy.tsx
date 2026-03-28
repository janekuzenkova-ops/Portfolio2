"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import CaseButton from "./CaseButton";
import type { CaseSubCard, HomeCase } from "@/content/home";

function CaseSubCardBlock({ card }: { card: CaseSubCard }) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-2xl ring-1 ring-white/10 aspect-[692/520] case-subcard-root">
      <Image
        src={card.image}
        alt={card.alt ?? ""}
        fill
        className="object-cover select-none case-subcard-img"
        sizes="(max-width: 767px) 100vw, 33vw"
      />
    </div>
  );
}

export default function CaseStudy({ data }: { data: HomeCase }) {
  const { heroImage, title, subCards, button, href, figmaNodeId } = data;

  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const glow = glowRef.current;
    const root = cardRef.current;
    if (!glow || !root) return;
    const rect = root.getBoundingClientRect();
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
    <section
      className="flex flex-col gap-5 px-5 case-study-section"
      data-case-id={data.id}
      {...(figmaNodeId ? { "data-figma-node": figmaNodeId } : {})}
    >
      <div
        ref={cardRef}
        className="case-hero-card relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 md:aspect-[1400/810]"
        data-layer="case-hero-root"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover select-none"
            sizes="(max-width: 767px) 100vw, min(1400px, 92vw)"
            priority={data.id === "auth"}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
          aria-hidden
          data-layer="case-glow-wrap"
        >
          <div
            ref={glowRef}
            className="case-glow absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out"
          />
        </div>

        <div data-layer="case-cta" className="contents">
          <CaseButton top={button.top} left={button.left} right={button.right} href={href} />
        </div>
      </div>

      {subCards && subCards.length > 0 && (
        <div className="desktop-only flex gap-4 case-subcards" data-layer="case-subcards">
          {subCards.map((card, i) => (
            <CaseSubCardBlock key={i} card={card} />
          ))}
        </div>
      )}
    </section>
  );
}
