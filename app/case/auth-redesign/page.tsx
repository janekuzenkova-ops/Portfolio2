import Image from "next/image";
import type { Metadata } from "next";
import ScaleWrapper from "@/components/ScaleWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CaseGlowImage from "@/components/CaseGlowImage";

export const metadata: Metadata = {
  title: "Редизайн флоу авторизации | Кузенкова Евгения",
  description: "Редизайн флоу авторизации и регистрации в fintech продукте ECOS",
};

function StaticImage({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: aspect }}>
      <Image
        src={src}
        alt={alt}
        width={2880}
        height={2880}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function AuthRedesignCase() {
  return (
    <ScaleWrapper>
      <main className="min-h-screen">
        <Navbar />

        {/* Hero title */}
        <section className="px-5">
          <StaticImage
            src="/images/case-auth/hero-title.png"
            alt="Редизайн флоу авторизации"
            aspect="1400/402"
          />
        </section>

        <div style={{ height: "20px" }} />

        {/* Hero image — phones (glow) */}
        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/hero.png"
              alt="Редизайн флоу авторизации в fintech продукте"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* Info section — problem */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/info-section.png"
              alt="Проблема: 68% не завершали регистрацию"
              aspect="1400/2456"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* Research 1 */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/research1.png"
              alt="Коридорное тестирование"
              aspect="1400/1150"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* img2 — Sign up flow (glow) */}
        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img2-signup.png"
              alt="Первый шаг — создание аккаунта"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* Research 2 */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/research2.png"
              alt="Анализ отвалов по воронке"
              aspect="1400/1454"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* img3 — Email verification (glow) */}
        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img3-verify.png"
              alt="Второй шаг — подтверждение email"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* img4 — PIN code cards */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/img4-cards.png"
              alt="Финальный шаг — создание PIN-кода"
              aspect="1400/520"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* What was done */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/what-done.png"
              alt="Что сделала"
              aspect="1400/776"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* img5 — Password recovery (glow) */}
        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img5-password.png"
              alt="Флоу восстановления пароля"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "20px" }} />

        {/* Result */}
        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/result.png"
              alt="Результат"
              aspect="1400/580"
            />
          </section>
        </ScrollReveal>

        <div style={{ height: "80px" }} />

        {/* Prev / Next case */}
        <section className="px-5">
          <div className="flex items-center justify-between">
            <a href="/" className="case-nav-link flex items-center gap-4" style={{ fontSize: "28px", fontWeight: 600 }}>
              <div
                className="w-[100px] h-[75px] rounded-xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}
              >
                <Image
                  src="/images/case2-header.png"
                  alt="Предыдущий кейс"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <span style={{ display: "inline-block", transform: "translateY(1px)" }}>←</span> предыдущий кейс
            </a>

            <a href="/" className="case-nav-link flex items-center gap-4" style={{ fontSize: "28px", fontWeight: 600 }}>
              следующий кейс <span style={{ display: "inline-block", transform: "translateY(1px)" }}>→</span>
              <div
                className="w-[100px] h-[75px] rounded-xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}
              >
                <Image
                  src="/images/case1-header.png"
                  alt="Следующий кейс"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </section>

        <div style={{ marginTop: "-100px" }}>
          <Footer />
        </div>
      </main>
    </ScaleWrapper>
  );
}
