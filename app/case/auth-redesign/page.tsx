import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ScaleWrapper from "@/components/ScaleWrapper";
import CaseEntryScroll from "@/components/CaseEntryScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseGlowImage from "@/components/CaseGlowImage";
import ReadingProgress from "@/components/ReadingProgress";
import TiltImage from "@/components/TiltImage";

/** неразрывный пробел — против висячих предлогов */
const nb = "\u00a0";

export const metadata: Metadata = {
  title: "редизайн флоу авторизации | Кузенкова Евгения",
  description: "редизайн флоу авторизации и регистрации в fintech-продукте ECOS",
};

/** строка 1 после «Регистрация —»: …В ECOS этот */
const HERO_LEAD_AFTER_DASH = ` первый и самый критичный этап воронки fintech-продукта. В ECOS этот `;
const HERO_LEAD_LINE2 = `этап был узким местом: пользователи не${nb}завершали KYC, не${nb}понимали `;
const HERO_LEAD_LINE3 = `последовательность шагов и${nb}часто обращались в${nb}поддержку.`;

const PROBLEM_CARDS = [
  {
    num: "01",
    title: `68% не${nb}завершали регистрацию`,
    desc: `Большинство уходили до${nb}конца воронки, не${nb}доходя до${nb}ключевых действий`,
  },
  {
    num: "02",
    title: "сложный и перегруженный KYC",
    desc: "Верификация без объяснений и прогресса — пользователь не понимал зачем это нужно",
  },
  {
    num: "03",
    title: `нет${nb}ощущения прогресса`,
    desc: `Пользователи не${nb}понимали, сколько шагов им${nb}предстоит и${nb}что${nb}ждёт дальше`,
  },
  {
    num: "04",
    title: `высокая нагрузка на${nb}поддержку`,
    desc: `Непонятные требования и${nb}ошибки в${nb}процессе приводили к${nb}большому количеству обращений`,
  },
] as const;

const TASK_SECONDARY = `подтолкнуть пользователей к${nb}дальнейшим действиям внутри продукта`;

/** переносы как в Figma + nb против висячих предлогов/союзов */
const RESEARCH1_LEAD_LINE1 = `Перед редизайном провели быстрые юзабилити-тесты, чтобы${nb}зафиксировать реальные`;
const RESEARCH1_LEAD_LINE2 = `проблемы текущего${nb}флоу.`;

const RESEARCH1_INSIGHTS: [string, ReactNode][] = [
  ["01", `6 из 10 не${nb}поняли, что${nb}форма продолжается — не${nb}скроллили вниз`],
  ["02", `Ошибки валидации появлялись неожиданно и${nb}не объясняли причину`],
  [
    "03",
    <>
      {`После отправки формы не${nb}было явного подтверждения — пользователи `}
      <br />
      {`нажимали${nb}кнопку повторно`}
    </>,
  ],
  ["04", `Прогресс прохождения не${nb}был виден — непонятно сколько${nb}шагов осталось`],
  ["05", `Долгий сценарий входа из-за${nb}отсутствия быстрых способов авторизации.`],
];

const FUNNEL_STEPS: { main: string; delta?: string; step: string }[] = [
  { main: "100%", step: "Открыли приложение" },
  { main: "78%", delta: "−22%", step: "Начали заполнять форму" },
  { main: "47%", delta: "−31%", step: "Перешли к шагу верификации" },
  { main: "38%", delta: "−9%", step: "Прошли верификацию" },
  { main: "32%", step: "Завершили регистрацию" },
];

const RESEARCH2_LEAD_LINE1 = `Проанализировали данные аналитики, чтобы${nb}понять на${nb}каком шаге и${nb}сколько `;
const RESEARCH2_LEAD_LINE2 = `пользователей уходило.`;

const RESEARCH2_INSIGHTS: [string, ReactNode][] = [
  [
    "01",
    <>
      {`Шаг верификации— самый критичный: −31%, пользователи не${nb}понимали `}
      <br />
      {`зачем и${nb}что делать`}
    </>,
  ],
  [
    "02",
    <>
      {`22% пользователей уходили ещё до${nb}формы — на${nb}вводном экране не${nb}было понятного `}
      <br />
      следующего шага
    </>,
  ],
  [
    "03",
    <>
      {`Данные подтвердили проблемы, найденные на${nb}коридорках — решения приняты `}
      <br />
      {`на${nb}основе двух источников`}
    </>,
  ],
];

/** [Кейс/b, что сделала `2834:222373`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2834-222373) */
const WHAT_DONE: [string, ReactNode][] = [
  ["01", `Упростила структуру и${nb}сократила количество шагов, убрала лишние поля`],
  [
    "02",
    <>
      {`Перестроила сценарии по${nb}принципу «от простого к${nb}сложному», вынесла KYC `}
      <br />
      {`дальше по${nb}флоу`}
    </>,
  ],
  ["03", `Внедрила прогрессивное раскрытие — только нужная информация на${nb}каждом этапе`],
  ["04", "Добавила альтернативные способы входа: email, Apple, Google"],
  ["05", `Добавила PIN-код для${nb}быстрого повторного входа`],
  ["06", `Упростила интерфейс для${nb}пользователей без${nb}опыта в${nb}крипте`],
];

/** блок «результат» — текстовый слой (не растр), как в Figma */
const RESULT_CARDS: { num: string; title: string; desc: ReactNode }[] = [
  {
    num: "01",
    title: "Понятная структура регистрации",
    desc: (
      <>
        {`Сокращение шагов и${nb}логичная последовательность увеличили количество завершённых регистраций на${nb}`}
        <span className="case-figma-card-em">29%</span>.
      </>
    ),
  },
  {
    num: "02",
    title: "Прозрачный процесс KYC",
    desc: `Объяснение этапов и${nb}прогресс регистрации снизили количество отказов на${nb}ключевых шагах.`,
  },
  {
    num: "03",
    title: `Меньше обращений в${nb}поддержку`,
    desc: `Пользователи стали лучше понимать процесс регистрации, что${nb}снизило количество обращений в${nb}поддержку.`,
  },
  {
    num: "04",
    title: "Лучший первый пользовательский опыт",
    desc: `Пользователь быстрее попадал внутрь продукта и${nb}начинал работу с${nb}сервисом.`,
  },
];

function StaticImage({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden case-page-img" style={{ aspectRatio: aspect }}>
      <Image src={src} alt={alt} width={2880} height={2880} className="w-full h-full object-cover" />
    </div>
  );
}

function CaseFigmaRow({
  label,
  labelStatic,
  children,
}: {
  label: string;
  /** только «контекст»: семантический заголовок, без sticky */
  labelStatic?: boolean;
  children: React.ReactNode;
}) {
  const staticLabel = labelStatic === true;
  return (
    <div className="case-figma-row">
      <div className={`case-figma-label-track${staticLabel ? " case-figma-label-track--static" : ""}`}>
        {staticLabel ? (
          <h2 className="case-figma-label case-figma-label--static">{label}</h2>
        ) : (
          <p className="case-figma-label">{label}</p>
        )}
      </div>
      <div className="case-figma-content min-w-0">{children}</div>
    </div>
  );
}

function FigmaMetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="case-figma-metric-card">
      <p className="case-figma-metric-value">{value}</p>
      <p className="case-figma-metric-label">{label}</p>
    </div>
  );
}

function FigmaProblemCard({ num, title, desc }: { num: string; title: string; desc: ReactNode }) {
  return (
    <div className="case-figma-problem-card">
      <p className="case-figma-card-num">{num}</p>
      <p className="case-figma-card-title">{title}</p>
      <p className="case-figma-card-desc">{desc}</p>
    </div>
  );
}

function NumberedRow({ num, text }: { num: string; text: ReactNode }) {
  return (
    <div className="case-figma-numbered-row">
      <span className="case-figma-numbered-num">{num}</span>
      <p className="case-figma-numbered-text">{text}</p>
    </div>
  );
}

function FunnelRow({ main, delta, step }: { main: string; delta?: string; step: string }) {
  return (
    <li className="case-funnel-item">
      <div className="case-funnel-inner">
        <p className="case-funnel-metric">
          <span className="case-funnel-metric-main">{main}</span>
          {delta != null && delta !== "" ? <span className="case-funnel-metric-delta">{nb}{delta}</span> : null}
        </p>
        <p className="case-funnel-step">{step}</p>
      </div>
    </li>
  );
}

export default function AuthRedesignCase() {
  return (
    <ScaleWrapper disableZoom>
      <CaseEntryScroll />
      <ReadingProgress />
      <main className="min-h-screen case-page-main">
        <Navbar />

        {/* hero — текст из Figma (2837:222901, 2837:223300); мокапы — отдельным кадром */}
        <section className="px-5 case-hero-intro">
          <div className="case-hero-text-grid">
            <div className="case-hero-text-left">
              <div className="case-hero-brand-row">
                <Image
                  src="/images/ecos-app-icon.png"
                  alt="ECOS"
                  width={36}
                  height={36}
                  priority
                  className="shrink-0 rounded-[9px]"
                />
                <span className="case-hero-ecos">ECOS</span>
              </div>
              <div className="case-hero-tags">
                <span>
                  fintech<span className="case-hero-tag-sep">{nb}•{nb}</span>ios, android
                </span>
                <span>
                  b2c<span className="case-hero-tag-sep">{nb}•{nb}</span>2025
                </span>
              </div>
            </div>
            <div className="case-hero-text-right">
              <h1 className="case-hero-h1">
                редизайн флоу авторизации
                <br />
                и{nb}регистрации в{nb}fintech-продукте
              </h1>
              <p className="case-hero-lead">
                <span className="case-hero-lead-strong">Регистрация —</span>
                {HERO_LEAD_AFTER_DASH}
                <br />
                {HERO_LEAD_LINE2}
                <br />
                {HERO_LEAD_LINE3}
              </p>
            </div>
          </div>
        </section>

        <section className="px-5">
          <CaseGlowImage
            src="/images/case-auth/hero.png"
            alt="редизайн флоу авторизации и регистрации в fintech-продукте"
            aspect="1400/810"
          />
        </section>

        <div className="case-gap--hero-to-context" aria-hidden />

        <section className="px-5">
          <CaseFigmaRow label="контекст" labelStatic>
            <p className="case-figma-body case-figma-body--context-after">
              Мобильное приложение ECOS обладало широким функционалом, однако регистрация
              <br />
              оставалась узким местом. До 68% пользователей не{nb}завершали её — до ключевых
              <br />
              действий они просто не{nb}доходили. Это напрямую влияло на{nb}конверсию и{nb}рост продукта.
            </p>
          </CaseFigmaRow>
        </section>

        <section className="px-5">
          <CaseFigmaRow label="проблема">
            <div className="case-figma-problem-grid">
              {PROBLEM_CARDS.map((c) => (
                <FigmaProblemCard key={c.num} num={c.num} title={c.title} desc={c.desc} />
              ))}
            </div>
          </CaseFigmaRow>
        </section>

        <div className="case-spacer case-spacer--section" />

        <section className="px-5">
          <CaseFigmaRow label="задача">
            <div className="case-task-stack">
              <p className="case-task-primary">
                упростить вход в{nb}продукт, снизить количество отказов и{nb}увеличить
                <br />
                количество завершённых регистраций{nb}
              </p>
              <p className="case-task-secondary">{TASK_SECONDARY}</p>
            </div>
          </CaseFigmaRow>
        </section>

        <section className="px-5">
          <CaseGlowImage
            src="/images/case-auth/img-info.png"
            alt="логин: пустое состояние, заполненные поля и ошибка валидации с клавиатурой"
            aspect="1400/810"
          />
        </section>

        <section className="px-5 case-concept-pair-section">
          <div className="case-concept-pair-grid">
            <StaticImage
              src="/images/case-auth/img-concept-welcome.png"
              alt="Welcome to ECOS: онбординг перед регистрацией"
              aspect="692/520"
            />
            <StaticImage
              src="/images/case-auth/img-concept-signup.png"
              alt="Sign up: шаг 1 из 3, поля формы и клавиатура"
              aspect="692/520"
            />
          </div>
        </section>

        <div className="case-gap--concept-to-research" aria-hidden />

        <section className="px-5">
          <CaseFigmaRow label="исследование - 01">
            <div className="case-research-block case-research-block--metrics-68">
              <h2 className="case-research-title">коридорное тестирование</h2>
              <p className="case-figma-body case-research-lead">
                {RESEARCH1_LEAD_LINE1}
                <br />
                {RESEARCH1_LEAD_LINE2}
              </p>
              <div className="case-stat-row">
                <FigmaMetricCard value="10" label="участников" />
                <FigmaMetricCard value="15–20 мин" label="длительность сессии" />
                <FigmaMetricCard value="3 задачи" label={`на${nb}регистрацию и${nb}вход`} />
              </div>
              <div className="case-insights-section">
                <h3 className="case-insights-heading">ключевые инсайты</h3>
                <div className="case-figma-list-rows">
                  {RESEARCH1_INSIGHTS.map(([n, t]) => (
                    <div key={n} className="case-figma-numbered-wrap">
                      <NumberedRow num={n} text={t} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CaseFigmaRow>
          <div
            className="case-gap--research1-to-signup"
            style={{ display: "block", width: "100%", height: 100, minHeight: 100, flexShrink: 0 }}
            aria-hidden
          />
        </section>

        <section className="px-5">
          <CaseGlowImage src="/images/case-auth/img2-signup.png" alt="Первый шаг — создание аккаунта" aspect="1400/810" />
        </section>

        <div
          className="case-gap--signup-to-research2"
          style={{ display: "block", width: "100%", height: 100, minHeight: 100, flexShrink: 0 }}
          aria-hidden
        />

        <section className="px-5">
          <CaseFigmaRow label="исследование - 02">
            <div className="case-research-block case-research-block--metrics-68">
              <h2 className="case-research-title">анализ отвалов по воронке</h2>
              <p className="case-figma-body case-research-lead">
                {RESEARCH2_LEAD_LINE1}
                <br />
                {RESEARCH2_LEAD_LINE2}
              </p>
              <div className="case-stat-row">
                <FigmaMetricCard value="68%" label={`не${nb}завершали регистрацию`} />
                <FigmaMetricCard value="верификация личности" label="наибольший отвал" />
                <FigmaMetricCard value="−29%" label="потерь после редизайна" />
              </div>
              <div className="case-insights-section">
                <h3 className="case-insights-heading">отвалы по шагам</h3>
                <ul className="case-funnel-list">
                  {FUNNEL_STEPS.map((row) => (
                    <FunnelRow key={row.step} main={row.main} delta={row.delta} step={row.step} />
                  ))}
                </ul>
              </div>
              <div className="case-insights-section case-insights-section--post-funnel">
                <h3 className="case-insights-heading">ключевые инсайты</h3>
                <div className="case-figma-list-rows">
                  {RESEARCH2_INSIGHTS.map(([n, t]) => (
                    <div key={n} className="case-figma-numbered-wrap">
                      <NumberedRow num={n} text={t} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CaseFigmaRow>
        </section>

        <div className="case-gap--research2-to-verify" aria-hidden />

        <section className="px-5">
          <CaseGlowImage src="/images/case-auth/img3-verify.png" alt="ECOS, экран приложения" aspect="1400/810" />
        </section>

        <div className="case-gap--verify-to-cards" aria-hidden />

        <section className="px-5">
          <StaticImage src="/images/case-auth/img4-cards.png" alt="ECOS, экран приложения" aspect="1400/520" />
        </section>

        <div
          className="case-gap--cards-to-what-done"
          style={{ display: "block", width: "100%", height: 100, minHeight: 100, flexShrink: 0 }}
          aria-hidden
        />

        <section className="px-5">
          <CaseFigmaRow label="что сделала">
            <div className="case-figma-list-rows">
              {WHAT_DONE.map(([n, t]) => (
                <div key={n} className="case-figma-numbered-wrap">
                  <NumberedRow num={n} text={t} />
                </div>
              ))}
            </div>
          </CaseFigmaRow>
        </section>

        <div
          className="case-gap--what-done-to-password"
          style={{ display: "block", width: "100%", height: 100, minHeight: 100, flexShrink: 0 }}
          aria-hidden
        />

        <section className="px-5">
          <CaseGlowImage src="/images/case-auth/img5-password.png" alt="ECOS, экран приложения" aspect="1400/810" />
        </section>

        <div className="case-gap--password-to-result" aria-hidden />

        <section className="px-5">
          <CaseFigmaRow label="результат">
            <div className="case-result-grid">
              {RESULT_CARDS.map((c) => (
                <FigmaProblemCard key={c.num} num={c.num} title={c.title} desc={c.desc} />
              ))}
            </div>
          </CaseFigmaRow>
        </section>

        <div className="case-nav-spacer" aria-hidden />

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
                <Image src="/images/case2-header.png" alt="" width={176} height={132} className="object-cover" sizes="88px" />
              </div>
              <div className="case-nav-m-text">
                <span className="case-nav-m-label case-typo">← предыдущий кейс</span>
              </div>
            </a>
            <a href="/" className="case-nav-m-link case-nav-m-link--next">
              <div className="case-nav-m-thumb">
                <Image src="/images/case1-header.png" alt="" width={176} height={132} className="object-cover" sizes="88px" />
              </div>
              <div className="case-nav-m-text">
                <span className="case-nav-m-label case-typo">следующий кейс →</span>
              </div>
            </a>
          </div>
        </section>

        <div className="case-footer-offset">
          <Footer />
        </div>
      </main>
    </ScaleWrapper>
  );
}
