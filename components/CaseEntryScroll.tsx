"use client";

import { useEffect } from "react";

/** только страница кейса: в начало после входа (Lenis подключается без SSR — ждём несколько тиков) */
export default function CaseEntryScroll() {
  useEffect(() => {
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
    const timers = [0, 50, 150, 400, 800].map((ms) => setTimeout(tick, ms));
    return () => {
      cancelAnimationFrame(id);
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
