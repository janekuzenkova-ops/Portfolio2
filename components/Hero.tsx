"use client";

import { useState } from "react";
import { heroContent } from "@/content/home";

export default function Hero() {
  /** сразу true — без фазы opacity:0 (tailwind/гидрация/Lenis иначе дают «пустой» hero) */
  const [visible] = useState(true);

  const letters = heroContent.headline.split("");

  return (
    <section
      id="top"
      className="w-full px-5 hero-section flex flex-col justify-end"
      style={{ height: "620px" }}
    >
      <div className="flex flex-col gap-[22px]">
        <h1
          className="text-white tracking-tight hero-title"
          style={{
            fontFamily: "var(--font-koulen)",
            fontSize: "149px",
            lineHeight: 1,
            color: "#ffffff",
          }}
        >
          {letters.map((ch, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`,
              }}
            >
              {ch}
            </span>
          ))}
        </h1>
        <p
          className="text-[28px] font-medium text-[#716d6d] leading-[1.4] hero-subtitle"
          style={{
            color: "#716d6d",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          {heroContent.line1}
          <br />
          {heroContent.line2}
        </p>
      </div>
    </section>
  );
}
