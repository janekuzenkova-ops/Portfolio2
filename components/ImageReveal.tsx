"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ImageReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        clipPath: revealed
          ? "inset(0 0 0 0)"
          : "inset(0 100% 0 0)",
        transition: "clip-path 0.9s cubic-bezier(0.77, 0, 0.175, 1)",
      }}
    >
      {children}
    </div>
  );
}
