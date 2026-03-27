/**
 * главная — правка в одном месте.
 * кейс-герой: слой 1 фон → слой 2 фото (рука/телефон, box в `layerPhoto.box` — двигай px/%) → слой 3 HTML (лого+текст по размерам из фигмы).
 * подложи отдельный PNG без текста в `layerPhoto.src`, когда будет готов.
 * figma: https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159496
 */

import type { CSSProperties } from "react";

export const heroContent = {
  headline: "kuzenkova",
  line1: "делаю сложные продукты простыми",
  line2: "product designer с 6-летним опытом в fintech, crypto, b2c, b2b",
} as const;

export const navContent = {
  brand: "кузенкова евгения",
  links: [
    { href: "#cases", label: "проекты" },
    { href: "#experience", label: "обо мне" },
    { href: "#concepts", label: "концепты" },
  ] as const,
  contactsHref: "#footer",
  contactsLabel: "контакты",
} as const;

export const conceptCards = [
  { id: "c1", image: "/images/concept-1.png", alt: "концепт 1" },
  { id: "c2", image: "/images/concept-2.png", alt: "концепт 2" },
  { id: "c3", image: "/images/concept-3.png", alt: "концепт 3" },
  { id: "c4", image: "/images/concept-4.png", alt: "концепт 4" },
] as const;

export type CaseSubCard = {
  image: string;
  bg: string;
  alt?: string;
  caption?: string;
};

/** слой 2: только картинка устройства/руки; `box` = absolute-позиция внутри карточки 1400×810 */
export type CasePhotoLayer = {
  src: string;
  box: CSSProperties;
  /** на мобиле иначе; если нет — см. `.case-photo-layer` в globals */
  boxMobile?: CSSProperties;
  imageObjectFit?: "contain" | "cover";
  imageObjectPosition?: string;
};

export type HomeCase = {
  id: string;
  /** слой 1: заливка под картинкой фона */
  layerBackground: string;
  /** слой 1b: опционально PNG/JPG фона (cover), путь из public */
  layerBackgroundImage?: string;
  /** слой 2 — замени `src` на вырез без текста, когда приложишь файл */
  layerPhoto: CasePhotoLayer;
  title: string;
  company: string;
  tags: string[];
  href?: string;
  /** слой 3: блок лого+заголовок+теги (фигма ~40×35 от карточки) */
  copyMetaBox?: CSSProperties;
  /** слой 3: метрики снизу слева */
  copyStatsBox?: CSSProperties;
  stats?: string[];
  /** лого 36×36 в макете */
  logoSrc?: string;
  logoSize?: number;
  /** кнопка «смотреть кейс», % от всей карточки */
  button: { top: string; left?: string; right?: string };
  figmaNodeId?: string;
  subCards?: CaseSubCard[];
};

const BTN_FULL = { top: "58.4%", left: "73.86%" } as const;

export const homeCases: HomeCase[] = [
  {
    id: "verification",
    figmaNodeId: "2693:159516",
    layerBackground: "#191919",
    layerBackgroundImage: "/images/cases/case-verification-bg.png",
    layerPhoto: {
      src: "/images/cases/case-verification-hand.png",
      box: {
        position: "absolute",
        width: "58%",
        height: "100%",
        right: "-2%",
        bottom: "0",
        top: "auto",
        left: "auto",
      },
      imageObjectFit: "contain",
      imageObjectPosition: "center bottom",
    },
    logoSrc: "/images/ecos-app-icon.png",
    logoSize: 36,
    title: "редизайн экрана верификации",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(420px, 46%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["- 38% обращений в поддержку,", "+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/case1-sub1.png", bg: "#dee2e6", alt: "экран верификации — вариант 1" },
      { image: "/images/case1-sub2.png", bg: "#282a2c", alt: "экран верификации — вариант 2" },
    ],
  },
  {
    id: "promo-ab",
    layerBackground: "#191919",
    layerBackgroundImage: "/images/cases/case-promo-bg.png",
    layerPhoto: {
      src: "/images/cases/case-promo-browser.png",
      box: {
        position: "absolute",
        inset: "6% 5% 5% 26%",
      },
      imageObjectFit: "cover",
      imageObjectPosition: "center top",
    },
    logoSrc: "/images/ecos-app-icon.png",
    logoSize: 36,
    title: "а/б тестирование посадочной страницы промо",
    company: "ECOS",
    tags: ["fintech", "web", "b2c", "2024"],
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(520px, 48%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
  },
  {
    id: "auth",
    figmaNodeId: "2699:165519",
    layerBackground: "rgba(57, 57, 57, 0.2)",
    layerPhoto: {
      src: "/images/cases/case-auth-phones.png",
      box: {
        position: "absolute",
        width: "64%",
        height: "104%",
        right: "-5%",
        bottom: "-6%",
        top: "auto",
        left: "auto",
      },
      imageObjectFit: "contain",
      imageObjectPosition: "center bottom",
    },
    logoSrc: "/images/ecos-app-icon.png",
    logoSize: 36,
    title: "Редизайн флоу авторизации и регистрации в fintech-продукте",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    href: "/case/auth-redesign",
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(480px, 50%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["- 38% обращений в поддержку,", "+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/case3-sub1.png", bg: "#dee2e6", alt: "флоу авторизации" },
      { image: "/images/case3-sub2.png", bg: "#dee2e6", alt: "регистрация" },
    ],
  },
];

export const experienceContent = [
  {
    company: "алтгту",
    role: "UX UI Designer",
    period: "Ноябрь 2010 - Январь 2019",
    tags: ["edtech", "web", "ui/ux", "visual design"],
  },
  {
    company: "maximus",
    role: "UX UI Designer",
    period: "Январь 2019 - Ноябрь 2021",
    tags: ["e-commerce", "ui/ux", "web/mobile"],
  },
  {
    company: "сплав",
    role: "UX UI Designer",
    period: "Декабрь 2021 - Декабрь 2022",
    tags: ["fintech", "ui/ux", "a/b", "product design"],
  },
  {
    company: "ecos",
    role: "Product Designer",
    period: "Январь 2023 - наст. время",
    tags: ["fintech", "ai", "a/b", "crypto"],
  },
] as const;

export const footerContent = {
  links: [
    { label: "telegram", href: "https://t.me/jane_kuzenkova" },
    { label: "e-mail", href: "mailto:p-janni@bk.ru" },
    { label: "linkedin", href: "https://www.linkedin.com/in/jane-kuzenkova/" },
    { label: "dribbble", href: "https://dribbble.com/Kuzenkova" },
    { label: "cv", href: "/cv.pdf" },
  ] as const,
  copyright: "2026 © евгения кузенкова",
} as const;
