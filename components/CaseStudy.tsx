"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import CaseButton from "./CaseButton";
import type { CaseSubCard, HomeCase } from "@/content/home";

/** теги — мельче заголовка, темнее (как в макете) */
const TAG_LINE_COLOR = "#494a4d";
const TITLE_MUTED = "rgba(255,255,255,0.62)";

const DEFAULT_META: React.CSSProperties = {
  position: "absolute",
  left: 40,
  top: 35,
  maxWidth: "min(480px, 46%)",
  zIndex: 3,
};

const DEFAULT_STATS: React.CSSProperties = {
  position: "absolute",
  left: 40,
  bottom: 40,
  maxWidth: "min(520px, 92%)",
  zIndex: 3,
};

function CaseSubCardBlock({ card }: { card: CaseSubCard }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const showGlow = card.bg.replace(/\s/g, "").toLowerCase() !== "#dee2e6";

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!showGlow) return;
      const root = rootRef.current;
      const glow = glowRef.current;
      if (!root || !glow) return;
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 70%)`;
    },
    [showGlow],
  );

  const onLeave = useCallback(() => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      ref={rootRef}
      className="flex-1 flex flex-col gap-3 rounded-2xl overflow-hidden relative case-subcard-root"
      style={{ backgroundColor: card.bg, aspectRatio: "692/520" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="relative flex-1 min-h-0 case-subcard-visual">
        <Image
          src={card.image}
          alt={card.alt ?? ""}
          width={1384}
          height={1040}
          className="w-full h-full object-contain case-subcard-img"
          style={{
            objectPosition: "center calc(50% + 15px)",
            position: "relative",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {showGlow && (
          <div className="absolute inset-0 z-[2] pointer-events-none rounded-[inherit]" aria-hidden>
            <div
              ref={glowRef}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out rounded-[inherit]"
            />
          </div>
        )}
      </div>
      {card.caption && (
        <p
          className="px-4 pb-3 text-[15px] font-medium leading-snug text-white/70 shrink-0 select-text case-subcard-caption"
          style={{ marginTop: "-4px" }}
        >
          {card.caption}
        </p>
      )}
    </div>
  );
}

/** слой 3: типографика; опционально `copyTitleStyle` / `copyTagsLineStyle` в данных кейса */
function CaseHeroForeground({
  company,
  title,
  tags,
  stats,
  logoSrc,
  logoSize,
  copyMetaBox,
  copyStatsBox,
  tagsColor,
  copyTitleStyle,
  copyTagsLineStyle,
}: Pick<
  HomeCase,
  | "company"
  | "title"
  | "tags"
  | "stats"
  | "logoSrc"
  | "logoSize"
  | "copyMetaBox"
  | "copyStatsBox"
  | "tagsColor"
  | "copyTitleStyle"
  | "copyTagsLineStyle"
>) {
  const tagLine = tags.join(" · ");
  const tagColorResolved = tagsColor ?? TAG_LINE_COLOR;
  const meta = { ...DEFAULT_META, ...copyMetaBox };
  const st = stats?.length ? { ...DEFAULT_STATS, ...copyStatsBox } : null;
  const size = logoSize ?? 36;

  return (
    <>
      <div
        className="case-hero-meta pointer-events-none"
        style={{ ...meta, pointerEvents: "none" }}
        data-layer="case-copy"
      >
        <div className="flex min-w-0 flex-col gap-3 pointer-events-auto select-text">
          <div className="flex gap-2.5 items-center">
            {logoSrc && (
              <div
                className="relative shrink-0 overflow-hidden rounded-lg bg-transparent"
                style={{ width: size, height: size }}
              >
                <Image src={logoSrc} alt="" width={size} height={size} className="h-full w-full object-cover" />
              </div>
            )}
            <p className="text-[15px] leading-5 font-bold text-white md:text-[28px] md:leading-9 md:font-bold">
              {company}
            </p>
          </div>
          <h2
            className={
              copyTitleStyle
                ? "case-hero-title-spec whitespace-normal"
                : "text-[17px] font-medium leading-snug whitespace-normal md:text-[22px] md:leading-[1.35]"
            }
            style={{ color: copyTitleStyle?.color ?? TITLE_MUTED }}
          >
            {title}
          </h2>
          <p
            className="case-hero-tags-line min-w-0"
            style={{ color: copyTagsLineStyle?.color ?? tagColorResolved }}
          >
            {tagLine}
          </p>
        </div>
      </div>
      {stats && stats.length > 0 && st && (
        <div
          className="case-hero-stats pointer-events-none"
          style={{ ...st, pointerEvents: "none" }}
          data-layer="case-stats"
        >
          <div
            className="case-hero-stats-inner flex flex-col gap-2 pointer-events-auto select-text text-[12px] font-medium leading-snug md:text-[24px] md:leading-[1.25] md:gap-2"
            style={{ color: "#FFFFFF9E" }}
          >
            {stats.map((line, i) => (
              <p key={i} className="whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function CaseStudy({ data }: { data: HomeCase }) {
  const {
    layerBackground,
    layerBackgroundImage,
    layerBackgroundSplit,
    layerPhoto,
    title,
    company,
    tags,
    subCards,
    button,
    href,
    stats,
    logoSrc,
    logoSize,
    copyMetaBox,
    copyStatsBox,
    tagsColor,
    copyTitleStyle,
    copyTagsLineStyle,
    figmaNodeId,
  } = data;

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

  const fit = layerPhoto.imageObjectFit ?? "contain";
  const objPos = layerPhoto.imageObjectPosition ?? "center bottom";

  const photoImg = (
    <img
      src={layerPhoto.src}
      alt={title}
      className="case-photo-native block max-h-full w-auto max-w-full select-none"
      style={{ objectFit: fit, objectPosition: objPos }}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  return (
    <section
      className="px-5 flex flex-col gap-5 case-study-section"
      data-case-id={data.id}
      {...(figmaNodeId ? { "data-figma-node": figmaNodeId } : {})}
    >
      <div
        ref={cardRef}
        className="case-hero-card relative w-full aspect-[16/10] md:aspect-[1400/810] rounded-2xl overflow-hidden ring-1 ring-white/10"
        data-layer="case-hero-root"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {/* мобилка и фолбэк: одна заливка */}
        <div
          className="absolute inset-0 z-0 md:hidden"
          style={{ backgroundColor: layerBackground }}
          data-layer="case-bg-mobile"
        >
          {layerBackgroundImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${layerBackgroundImage})` }}
              data-layer="case-bg-image-mobile"
            />
          ) : null}
        </div>
        {layerBackgroundSplit ? (
          <div
            className="absolute inset-0 z-0 hidden md:flex"
            data-layer="case-bg-split"
            aria-hidden
          >
            <div className="h-full shrink-0 overflow-hidden" style={{ width: layerBackgroundSplit.splitAt, ...layerBackgroundSplit.left }} />
            <div className="h-full min-w-0 flex-1" style={layerBackgroundSplit.right} />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 hidden md:block" style={{ backgroundColor: layerBackground }} data-layer="case-bg">
            {layerBackgroundImage ? (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${layerBackgroundImage})` }}
                data-layer="case-bg-image"
              />
            ) : null}
          </div>
        )}

        <div className="absolute inset-0 z-[1] pointer-events-none rounded-[inherit]" aria-hidden data-layer="case-glow-wrap">
          <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out rounded-[inherit] case-glow"
          />
        </div>

        <div
          className="case-photo-layer absolute z-[2] flex items-end justify-end overflow-visible"
          style={{ ...layerPhoto.box, minHeight: 0 }}
          data-layer="case-photo"
        >
          {href ? (
            <Link
              href={href}
              className="flex h-full min-h-[120px] w-full items-end justify-end outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label={`${title} — перейти к кейсу`}
            >
              {photoImg}
            </Link>
          ) : (
            <div className="flex h-full min-h-[120px] w-full items-end justify-end">{photoImg}</div>
          )}
        </div>

        <CaseHeroForeground
          company={company}
          title={title}
          tags={tags}
          stats={stats}
          logoSrc={logoSrc}
          logoSize={logoSize}
          copyMetaBox={copyMetaBox}
          copyStatsBox={copyStatsBox}
          tagsColor={tagsColor}
          copyTitleStyle={copyTitleStyle}
          copyTagsLineStyle={copyTagsLineStyle}
        />

        <div data-layer="case-cta" className="contents">
          <CaseButton top={button.top} left={button.left} right={button.right} href={href} />
        </div>
      </div>

      {subCards && subCards.length > 0 && (
        <div className="flex gap-4 desktop-only case-subcards" data-layer="case-subcards">
          {subCards.map((card, i) => (
            <CaseSubCardBlock key={i} card={card} />
          ))}
        </div>
      )}
    </section>
  );
}
