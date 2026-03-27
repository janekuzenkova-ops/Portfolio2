"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

function getLenis(): Lenis | undefined {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

/** после перехода на страницу кейса (и любой другой) — в начало; иначе Lenis оставляет «середину» */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const run = () => getLenis()?.scrollTo(0, { immediate: true });
    run();
    const t0 = window.setTimeout(run, 0);
    const t1 = window.setTimeout(run, 50);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [pathname]);

  return null;
}
