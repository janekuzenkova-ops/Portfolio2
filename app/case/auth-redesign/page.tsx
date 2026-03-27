import Image from "next/image";
import type { Metadata } from "next";
import ScaleWrapper from "@/components/ScaleWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CaseGlowImage from "@/components/CaseGlowImage";
import ReadingProgress from "@/components/ReadingProgress";
import TiltImage from "@/components/TiltImage";

/** неразрывный пробел — против висячих предлогов */
const nb = "\u00a0";

export const metadata: Metadata = {
  title: "Редизайн флоу авторизации | Кузенкова Евгения",
  description: "Редизайн флоу авторизации и регистрации в fintech продукте ECOS",
};

function StaticImage({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden case-page-img" style={{ aspectRatio: aspect }}>
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

function DarkCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div
      className="case-dark-card"
      style={{
        background: "#1E1E1E",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <span style={{ color: "#888", fontSize: "14px" }}>{num}</span>
      <span className="case-typo" style={{ color: "#fff", fontSize: "16px", fontWeight: 600, lineHeight: 1.3 }}>
        {title}
      </span>
      <span className="case-typo" style={{ color: "#aaa", fontSize: "14px", lineHeight: 1.5 }}>
        {desc}
      </span>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="case-stat-card">
      <div className="case-stat-value">{value}</div>
      <div className="case-stat-label">{label}</div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="case-typo" style={{ color: "#111", fontSize: "22px", fontWeight: 600, marginBottom: "16px" }}>
      {children}
    </h2>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="case-typo" style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
      {children}
    </p>
  );
}

function FindingItem({ text }: { text: string }) {
  return (
    <div
      className="case-typo"
      style={{
        padding: "14px 0",
        borderBottom: "1px solid #e5e5e5",
        color: "#333",
        fontSize: "14px",
        lineHeight: 1.6,
      }}
    >
      {text}
    </div>
  );
}

function ImageCaption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mobile-only-block case-typo"
      style={{
        color: "#555",
        fontSize: "14px",
        lineHeight: 1.6,
        marginTop: "12px",
      }}
    >
      {children}
    </p>
  );
}

export default function AuthRedesignCase() {
  return (
    <ScaleWrapper>
      <ReadingProgress />
      <main className="min-h-screen case-page-main">
        <Navbar />

        {/* ===== HERO TITLE ===== */}
        <section className="px-5">
          <div className="desktop-only-block">
            <StaticImage
              src="/images/case-auth/hero-title.png"
              alt="Редизайн флоу авторизации"
              aspect="1400/402"
            />
          </div>
          <div className="mobile-only-block" style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px 16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
              <Image
                src="/images/ecos-app-icon.png"
                alt="ECOS"
                width={44}
                height={44}
                priority
                className="shrink-0"
                style={{ borderRadius: "11px" }}
              />
              <span style={{ fontSize: "22px", fontWeight: 600, color: "#111", letterSpacing: "0.04em" }}>
                ECOS
              </span>
            </div>
            <div className="case-typo" style={{ color: "#888", fontSize: "13px", lineHeight: 1.45, marginBottom: "8px" }}>
              fintech{nb}•{nb}iOS,{nb}Android{nb}•{nb}b2c{nb}•{nb}2025
            </div>
            <h1 className="case-typo" style={{
              color: "#111",
              fontSize: "26px",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              редизайн экранов авторизации
            </h1>
          </div>
        </section>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/hero.png"
              alt="Редизайн флоу авторизации в fintech продукте"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <div className="desktop-only-block">
              <StaticImage
                src="/images/case-auth/info-section.png"
                alt="Проблема: 68% не завершали регистрацию"
                aspect="1400/2456"
              />
            </div>
            <div className="mobile-only-block" style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px 16px",
            }}>
              <SectionHeading>контекст</SectionHeading>
              <BodyText>
                Аналитика и{nb}пользовательские исследования показали, что{nb}регистрация является одним из{nb}главных
                узких мест продукта.
              </BodyText>

              <div style={{ height: "24px" }} />

              <SectionHeading>проблема</SectionHeading>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <DarkCard
                  num="01"
                  title={`68% не${nb}завершали регистрацию`}
                  desc={`Большинство уходили до${nb}конца воронки, не${nb}доходя до${nb}ключевых действий`}
                />
                <DarkCard
                  num="02"
                  title="Сложный и перегруженный KYC"
                  desc={`Верификация без${nb}объяснений и${nb}прогресса — пользователь не${nb}понимал, зачем это нужно`}
                />
                <DarkCard
                  num="03"
                  title="Нет ощущения прогресса"
                  desc={`Пользователи не${nb}понимали, сколько шагов им предстоит и${nb}что ждёт дальше`}
                />
                <DarkCard
                  num="04"
                  title="Высокая нагрузка на поддержку"
                  desc={`Непонятные требования и${nb}ошибки в${nb}процессе приводили к${nb}большому количеству обращений`}
                />
              </div>

              <div style={{ height: "24px" }} />

              <SectionHeading>задача</SectionHeading>
              <BodyText>
                Переработала флоу авторизации: добавила понятные состояния полей и{nb}валидацию. Это напрямую влияло
                на{nb}рост продукта и{nb}конверсию в{nb}дальнейшие действия.
              </BodyText>
            </div>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <div className="desktop-only-block">
              <StaticImage
                src="/images/case-auth/research1.png"
                alt="Коридорное тестирование"
                aspect="1400/1150"
              />
            </div>
            <div className="mobile-only-block" style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px 16px",
            }}>
              <h2 className="case-research-heading">исследование — 01</h2>

              <div className="case-stat-row">
                <StatCard value="10" label={`участников`} />
                <StatCard value="15–20 мин" label={`длительность${nb}сессии`} />
                <StatCard value="3 задачи" label={`на${nb}регистрацию и${nb}вход`} />
              </div>

              <div className="case-typo" style={{ color: "#111", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
                Коридорное тестирование
              </div>
              <BodyText>
                Перед редизайном провели быстрые юзабилити-тесты, чтобы{nb}зафиксировать реальные проблемы текущего флоу.
              </BodyText>

              <div style={{ marginTop: "16px", borderTop: "1px solid #e5e5e5" }}>
                <FindingItem
                  text={`До${nb}68% пользователей отваливались на${nb}этапе KYC/регистрации`}
                />
                <FindingItem
                  text={`Пользователи не${nb}понимали требования и${nb}последовательность шагов`}
                />
                <FindingItem
                  text={`Процесс выглядел сложным и${nb}перегруженным, особенно для${nb}новичков в${nb}крипто-финтехе`}
                />
                <FindingItem
                  text={`Высокая нагрузка на${nb}поддержку (вопросы «что происходит?», «почему не${nb}работает?»)`}
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img2-signup.png"
              alt="Первый шаг — создание аккаунта"
              aspect="1400/810"
            />
            <ImageCaption>
              Первый шаг{nb}— создание аккаунта. Пользователь вводит email и{nb}пароль. Я{nb}спроектировала понятные
              состояния полей и{nb}валидацию, чтобы{nb}снизить количество ошибок и{nb}упростить процесс регистрации.
            </ImageCaption>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <div className="desktop-only-block">
              <StaticImage
                src="/images/case-auth/research2.png"
                alt="Анализ отвалов по воронке"
                aspect="1400/1454"
              />
            </div>
            <div className="mobile-only-block" style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px 16px",
            }}>
              <h2 className="case-research-heading">исследование — 02</h2>

              <div className="case-stat-row">
                <StatCard value="68%" label={`не${nb}завершали регистрацию`} />
                <StatCard value="KYC" label={`наибольший${nb}отвал`} />
                <StatCard value="−29%" label={`меньше${nb}потерь`} />
              </div>

              <div className="case-typo" style={{ color: "#111", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
                Анализ отвалов по{nb}воронке
              </div>
              <BodyText>
                Проанализировали данные аналитики, чтобы{nb}понять, на{nb}каком шаге и{nb}сколько пользователей уходило.
              </BodyText>

              <div style={{ marginTop: "16px", borderTop: "1px solid #e5e5e5" }}>
                <FindingItem
                  text={`До${nb}68% пользователей отваливались на${nb}этапе KYC/регистрации`}
                />
                <FindingItem
                  text={`Пользователи не${nb}понимали требования и${nb}последовательность шагов`}
                />
                <FindingItem
                  text={`Процесс выглядел сложным и${nb}перегруженным, особенно для${nb}новичков в${nb}крипто-финтехе`}
                />
                <FindingItem
                  text={`Высокая нагрузка на${nb}поддержку (вопросы «что происходит?», «почему не${nb}работает?»)`}
                />
                <FindingItem
                  text={`Это напрямую влияло на${nb}рост продукта и${nb}конверсию в${nb}дальнейшие действия`}
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img3-verify.png"
              alt="Второй шаг — подтверждение email"
              aspect="1400/810"
            />
            <ImageCaption>
              Второй шаг{nb}— подтверждение email. Экран сфокусирован на{nb}одном действии{nb}— вводе кода. Добавлены
              автопереход между полями, понятные ошибки и{nb}таймер повторной отправки.
            </ImageCaption>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <StaticImage
              src="/images/case-auth/img4-cards.png"
              alt="Финальный шаг — создание PIN-кода"
              aspect="1400/520"
            />
            <ImageCaption>Финальный шаг регистрации{nb}— создание PIN-кода.</ImageCaption>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <div className="desktop-only-block">
              <StaticImage
                src="/images/case-auth/what-done.png"
                alt="Что сделала"
                aspect="1400/776"
              />
            </div>
            <div className="mobile-only-block" style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px 16px",
            }}>
              <SectionHeading>что сделала</SectionHeading>
              <div style={{ borderTop: "1px solid #e5e5e5" }}>
                <FindingItem
                  text={`Провела аудит текущего флоу регистрации и${nb}авторизации${nb}— зафиксировала узкие места`}
                />
                <FindingItem
                  text={`Спроектировала новую структуру шагов: сократила количество экранов и${nb}упростила навигацию`}
                />
                <FindingItem
                  text={`Добавила прогресс-бар и${nb}понятные состояния полей с${nb}валидацией в${nb}реальном времени`}
                />
                <FindingItem
                  text={`Переработала экраны KYC-верификации${nb}— объяснение каждого шага и${nb}зачем он нужен`}
                />
                <FindingItem
                  text={`Спроектировала флоу восстановления пароля с${nb}минимальным количеством действий`}
                />
                <FindingItem
                  text={`Подготовила UI-кит и${nb}передала в${nb}разработку с${nb}детальной спецификацией`}
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <CaseGlowImage
              src="/images/case-auth/img5-password.png"
              alt="Флоу восстановления пароля"
              aspect="1400/810"
            />
          </section>
        </ScrollReveal>

        <div className="case-spacer" style={{ height: "20px" }} />

        <ScrollReveal>
          <section className="px-5">
            <div className="desktop-only-block">
              <StaticImage
                src="/images/case-auth/result.png"
                alt="Результат"
                aspect="1400/580"
              />
            </div>
            <div className="mobile-only-block" style={{
              background: "#1A1A1A",
              borderRadius: "12px",
              padding: "24px 16px",
            }}>
              <h2 className="case-typo" style={{ color: "#fff", fontSize: "22px", fontWeight: 600, marginBottom: "16px" }}>
                результат
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <DarkCard
                  num="01"
                  title="Понятная структура регистрации"
                  desc={`Сокращение шагов и${nb}логичная последовательность увеличили количество завершённых регистраций на${nb}29%.`}
                />
                <DarkCard
                  num="02"
                  title="Прозрачный процесс KYC"
                  desc={`Объяснение этапов и${nb}прогресс регистрации снизили количество отказов на${nb}ключевых шагах.`}
                />
                <DarkCard
                  num="03"
                  title="Меньше обращений в поддержку"
                  desc={`Пользователи стали лучше понимать процесс регистрации, что${nb}снизило количество обращений в${nb}поддержку.`}
                />
                <DarkCard
                  num="04"
                  title="Лучший первый пользовательский опыт"
                  desc={`Пользователь быстрее попадал внутрь продукта и${nb}начинал работу с${nb}сервисом.`}
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="case-nav-spacer" style={{ height: "80px" }} />

        <section className="px-5">
          <div className="desktop-only w-full items-center justify-between" style={{ width: "100%" }}>
            <a href="/" className="case-nav-link case-nav-a flex items-center gap-4" style={{ fontSize: "28px", fontWeight: 600 }}>
              <TiltImage
                src="/images/case2-header.png"
                alt="Предыдущий кейс"
                width={200}
                height={150}
                className="object-cover rounded-xl case-nav-thumb"
                style={{
                  width: "100px",
                  height: "75px",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                  flexShrink: 0,
                }}
              />
              <span style={{ display: "inline-block", transform: "translateY(1px)" }}>←</span> предыдущий кейс
            </a>

            <a href="/" className="case-nav-link case-nav-a flex items-center gap-4" style={{ fontSize: "28px", fontWeight: 600 }}>
              следующий кейс <span style={{ display: "inline-block", transform: "translateY(1px)" }}>→</span>
              <TiltImage
                src="/images/case1-header.png"
                alt="Следующий кейс"
                width={200}
                height={150}
                className="object-cover rounded-xl case-nav-thumb"
                style={{
                  width: "100px",
                  height: "75px",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                  flexShrink: 0,
                }}
              />
            </a>
          </div>

          <div className="case-nav-mobile-wrap">
            <a href="/" className="case-nav-m-link">
              <div className="case-nav-m-thumb">
                <Image
                  src="/images/case2-header.png"
                  alt=""
                  width={176}
                  height={132}
                  className="object-cover"
                  sizes="88px"
                />
              </div>
              <div className="case-nav-m-text">
                <span className="case-nav-m-label case-typo">← предыдущий кейс</span>
              </div>
            </a>
            <a href="/" className="case-nav-m-link case-nav-m-link--next">
              <div className="case-nav-m-thumb">
                <Image
                  src="/images/case1-header.png"
                  alt=""
                  width={176}
                  height={132}
                  className="object-cover"
                  sizes="88px"
                />
              </div>
              <div className="case-nav-m-text">
                <span className="case-nav-m-label case-typo">следующий кейс →</span>
              </div>
            </a>
          </div>
        </section>

        <div className="case-footer-offset" style={{ marginTop: "-100px" }}>
          <Footer />
        </div>
      </main>
    </ScaleWrapper>
  );
}
