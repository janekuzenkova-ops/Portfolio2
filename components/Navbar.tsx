"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET = -100;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    if (!isHome) {
      e.preventDefault();
      if (href === "#top") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + href;
      }
      return;
    }

    e.preventDefault();

    if (href === "#top") {
      window.__lenis?.scrollTo(0, { duration: 1.6 });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      window.__lenis?.scrollTo(target as HTMLElement, {
        offset: NAV_OFFSET,
        duration: 1.6,
      });
    }
  }, [isHome]);

  return (
    <nav
      className="w-full px-5"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#top" onClick={scrollTo} className="nav-link text-[28px] font-medium">
            кузенкова евгения
          </a>
          <a href="#cases" onClick={scrollTo} className="nav-link text-[28px] font-medium">
            проекты
          </a>
          <a href="#experience" onClick={scrollTo} className="nav-link text-[28px] font-medium">
            обо мне
          </a>
          <a href="#concepts" onClick={scrollTo} className="nav-link text-[28px] font-medium">
            концепты
          </a>
        </div>
        <a href="#footer" onClick={scrollTo} className="nav-link text-[28px] font-medium">
          контакты
        </a>
      </div>
    </nav>
  );
}
