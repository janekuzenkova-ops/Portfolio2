"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const letters = "kuzenkova".split("");

  return (
    <section
      id="top"
      className="w-full px-5 hero-section flex flex-col justify-end"
      style={{ height: "580px" }}
    >
      <div className="flex flex-col gap-[22px]">
        <h1
          className="text-white tracking-tight hero-title"
          style={{
            fontFamily: "var(--font-koulen)",
            fontSize: "149px",
            lineHeight: 1,
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
          className="text-[28px] font-medium text-[#706d6d] leading-[1.4] hero-subtitle"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          делаю сложные продукты простыми
          <br />
          product designer с 6-летним опытом в fintech, crypto, b2c, b2b
        </p>
      </div>
    </section>
  );
}
