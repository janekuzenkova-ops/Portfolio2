"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type Lenis from "lenis";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function getLenis(): Lenis | undefined {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

/** fade-in блоков: IntersectionObserver с Lenis часто не срабатывает — добавляем проверку по геометрии, lenis, жесты и короткий поллинг */
export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let io: IntersectionObserver | null = null;
    let lenisPoll = 0;
    let revealTick = 0;
    let safetyId = 0;
    let lenisAttached = false;

    const finish = () => {
      if (done) return;
      done = true;
      setVisible(true);
      io?.disconnect();
      io = null;
      window.clearInterval(lenisPoll);
      window.clearInterval(revealTick);
      window.clearTimeout(safetyId);
    };

    const isInView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const margin = Math.min(360, Math.round(vh * 0.45));
      return rect.top < vh + margin && rect.bottom > -margin;
    };

    const runCheck = () => {
      if (isInView()) finish();
    };

    runCheck();
    if (done) return;

    io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) finish();
      },
      { threshold: 0, rootMargin: "0px 0px 45% 0px" }
    );
    io.observe(el);

    const onLenisScroll = () => runCheck();
    const onUserMove = () => runCheck();

    const tryAttachLenis = () => {
      const L = getLenis();
      if (!L || lenisAttached) return !!L;
      L.on("scroll", onLenisScroll);
      lenisAttached = true;
      runCheck();
      return true;
    };

    if (!tryAttachLenis()) {
      lenisPoll = window.setInterval(() => {
        if (tryAttachLenis()) window.clearInterval(lenisPoll);
      }, 100);
      window.setTimeout(() => window.clearInterval(lenisPoll), 5000);
    }

    window.addEventListener("wheel", onUserMove, { passive: true });
    window.addEventListener("touchmove", onUserMove, { passive: true });
    window.addEventListener("resize", onUserMove);

    revealTick = window.setInterval(() => {
      runCheck();
      if (done) window.clearInterval(revealTick);
    }, 200);

    requestAnimationFrame(() => {
      runCheck();
      requestAnimationFrame(runCheck);
    });

    safetyId = window.setTimeout(() => finish(), 2800);

    return () => {
      io?.disconnect();
      window.clearInterval(lenisPoll);
      window.clearInterval(revealTick);
      window.clearTimeout(safetyId);
      window.removeEventListener("wheel", onUserMove);
      window.removeEventListener("touchmove", onUserMove);
      window.removeEventListener("resize", onUserMove);
      const L = getLenis();
      if (L && lenisAttached) L.off("scroll", onLenisScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
