"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET = -100;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    setMenuOpen(false);

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
      style={{ paddingTop: "20px", paddingBottom: "20px", color: "#535457" }}
    >
      {/* Desktop */}
      <div className="desktop-only items-center justify-between">
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

      {/* Mobile */}
      <div className="mobile-only items-center justify-between">
        <a href="#top" onClick={scrollTo} className="nav-link text-[18px] font-medium">
          кузенкова евгения
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", padding: "4px", cursor: "pointer" }}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#535457" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-only flex-col gap-4 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "12px" }}
        >
          <a href="#cases" onClick={scrollTo} className="nav-link text-[18px] font-medium">проекты</a>
          <a href="#experience" onClick={scrollTo} className="nav-link text-[18px] font-medium">обо мне</a>
          <a href="#concepts" onClick={scrollTo} className="nav-link text-[18px] font-medium">концепты</a>
          <a href="#footer" onClick={scrollTo} className="nav-link text-[18px] font-medium">контакты</a>
        </div>
      )}
    </nav>
  );
}
