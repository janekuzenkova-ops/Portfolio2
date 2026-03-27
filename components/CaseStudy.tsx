"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import CaseButton from "./CaseButton";
import type { HomeCase } from "@/content/home";

/** копируемый текст + теги на десктопе поверх мокапа */
function CaseMetaLayer({
  company,
  title,
  tags,
  overlay,
}: Pick<HomeCase, "company" | "title" | "tags" | "overlay">) {
  return (
    <div
      className="case-card-overlay desktop-only-block z-[3]"
      style={{
        ...overlay,
        pointerEvents: "none",
      }}
    >
      <div className="flex flex-col gap-2" style={{ pointerEvents: "auto", userSelect: "text" }}>
        {company && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.5px",
            }}
          >
            {company}
          </p>
        )}
        <h2
          style={{
            fontSize: "clamp(22px, 2vw, 28px)",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.25,
          }}
        >
          {title}
        </h2>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  backgroundColor: "#1e1e1e",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseStudy({ data }: { data: HomeCase }) {
  const { mockupImage, title, company, tags, subCards, button, href, overlay } = data;
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
    <section className="px-5 flex flex-col gap-5">
      <div className="mobile-only flex-col gap-2" style={{ display: "none", flexDirection: "column" }}>
        {company && (
          <p style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px" }}>
            {company}
          </p>
        )}
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#ffffff", lineHeight: 1.3 }}>
          {title}
        </h2>
        {tags && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  backgroundColor: "#1e1e1e",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        ref={cardRef}
        className="relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10 case-card-wrap"
        style={{ aspectRatio: "1400/810" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {href ? (
          <Link
            href={href}
            className="absolute inset-0 z-[1] block outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-[inherit]"
            aria-label={`${title} — смотреть кейс`}
          >
            <Image
              src={mockupImage}
              alt=""
              fill
              className="object-cover case-header-img"
              style={{ pointerEvents: "none" }}
            />
          </Link>
        ) : (
          <div className="absolute inset-0 z-[1]">
            <Image
              src={mockupImage}
              alt=""
              fill
              className="object-cover case-header-img"
              style={{ pointerEvents: "none" }}
            />
          </div>
        )}

        <div className="absolute inset-0 z-[2] pointer-events-none rounded-[inherit]" aria-hidden>
          <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out rounded-[inherit]"
          />
        </div>

        <CaseMetaLayer company={company} title={title} tags={tags} overlay={overlay} />

        <CaseButton top={button.top} left={button.left} right={button.right} href={href} />
      </div>

      {subCards && subCards.length > 0 && (
        <div className="flex gap-4 desktop-only case-subcards">
          {subCards.map((card, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col gap-3 rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: card.bg, aspectRatio: "692/520" }}
            >
              <div className="relative flex-1 min-h-0">
                <Image
                  src={card.image}
                  alt={card.alt ?? ""}
                  width={1384}
                  height={1040}
                  className="w-full h-full object-contain"
                  style={{
                    objectPosition: "center calc(50% + 15px)",
                    position: "relative",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
              </div>
              {card.caption && (
                <p
                  className="px-4 pb-3 text-[15px] font-medium leading-snug text-white/70 shrink-0 select-text"
                  style={{ marginTop: "-4px" }}
                >
                  {card.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
