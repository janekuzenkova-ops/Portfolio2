"use client";

import { useLayoutEffect } from "react";

/** только страница кейса: в начало после входа (Lenis не сбрасывается сам при client navigation) */
export default function CaseEntryScroll() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const tick = () => {
      try {
        window.__lenis?.scrollTo(0, { immediate: true });
      } catch {
        /* noop */
      }
    };
    tick();
    const id = requestAnimationFrame(tick);
    const t0 = setTimeout(tick, 0);
    const t1 = setTimeout(tick, 100);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t0);
      clearTimeout(t1);
    };
  }, []);

  return null;
}
