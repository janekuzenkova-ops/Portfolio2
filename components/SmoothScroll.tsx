"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Lenis через import() в браузере; ref — корректный destroy при размонтировании до resolve (strict mode / навигация). */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    void import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      try {
        const lenis = new LenisCtor({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis;
        window.__lenis = lenis;

        function raf(time: number) {
          if (cancelled) return;
          lenisRef.current?.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        }
        rafRef.current = requestAnimationFrame(raf);
      } catch {
        lenisRef.current = null;
        delete window.__lenis;
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      lenisRef.current?.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  return null;
}
