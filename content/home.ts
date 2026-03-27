/**
 * главная — правка в одном месте.
 * порядок карточек: auth → promo-ab → verification (id не меняй — на них завязаны данные).
 * кейс-герой: слой 1 фон → слой 2 фото (box в `layerPhoto.box`) → слой 3 HTML.
 * макет: https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159496 (Maket/b; было и 3108-30667 — тот же файл)
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

/** десктоп: две вертикальные зоны (как в макете auth — градиент слева, чёрный справа). на мобиле — только `layerBackground`. */
export type CaseBackgroundSplit = {
  splitAt: string;
  left: CSSProperties;
  right: CSSProperties;
};

export type HomeCase = {
  id: string;
  /** слой 1: заливка под картинкой фона (и фолбэк на мобиле при `layerBackgroundSplit`) */
  layerBackground: string;
  /** слой 1b: опционально PNG/JPG фона (cover), путь из public */
  layerBackgroundImage?: string;
  /** слой 1c: только ≥md; левая/правая колонка фона */
  layerBackgroundSplit?: CaseBackgroundSplit;
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
  /** строка тегов под заголовком (дефолт `#494a4d`; в макете auth — золотистый) */
  tagsColor?: string;
  /** заголовок под ECOS: напр. белый 60% — задаёт `color`, размер на desktop задаётся в компоненте при наличии */
  copyTitleStyle?: CSSProperties;
  /** одна строка тегов на desktop: напр. 24px medium `#494A4D` — `color` + класс размера в компоненте */
  copyTagsLineStyle?: CSSProperties;
  /** лого 36×36 в макете */
  logoSrc?: string;
  logoSize?: number;
  /** кнопка «смотреть кейс», % от всей карточки */
  button: { top: string; left?: string; right?: string };
  figmaNodeId?: string;
  subCards?: CaseSubCard[];
};

const BTN_FULL = { top: "58.4%", left: "73.86%" } as const;

/** единая типографика hero-кейсов: `CaseStudy` → `case-hero-title-spec` + строка `case-hero-tags-line` в `globals.css`. у auth теги — через `tagsColor`, без `copyTagsLineStyle`. */
export const caseHeroTitleStyle: CSSProperties = { color: "#FFFFFF99" };
export const caseHeroTagsLineStyle: CSSProperties = { color: "#494A4D" };

export const homeCases: HomeCase[] = [
  {
    id: "auth",
    figmaNodeId: "2699:165519",
    layerBackground: "#262626",
    layerBackgroundSplit: {
      splitAt: "54%",
      left: {
        backgroundImage: "url(/images/cases/case-promo-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      },
      right: { backgroundColor: "#262626" },
    },
    layerPhoto: {
      src: "/images/cases/figma-case-auth-hero.png",
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
    title: "редизайн флоу авторизации и регистрации в fintech-продукте",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    tagsColor: "#a38d5d",
    copyTitleStyle: caseHeroTitleStyle,
    href: "/case/auth-redesign",
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(480px, 50%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["- 38% обращений в поддержку,", "+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/cases/figma-auth-sub1.png", bg: "#dee2e6", alt: "экраны — вариант 1" },
      { image: "/images/cases/figma-auth-sub2.png", bg: "#282a2c", alt: "экраны — вариант 2" },
    ],
  },
  {
    id: "promo-ab",
    figmaNodeId: "2693:159550",
    layerBackground: "#191919",
    layerBackgroundImage: "/images/cases/case-promo-bg.png",
    layerPhoto: {
      src: "/images/cases/case-promo-browser.png",
      box: {
        position: "absolute",
        inset: "6% 4% 5% 24%",
      },
      imageObjectFit: "cover",
      imageObjectPosition: "center center",
    },
    logoSrc: "/images/ecos-app-icon.png",
    logoSize: 36,
    title: "а/б тестирование посадочной страницы промо",
    company: "ECOS",
    tags: ["fintech", "web", "b2c", "2024"],
    copyTitleStyle: caseHeroTitleStyle,
    copyTagsLineStyle: caseHeroTagsLineStyle,
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(520px, 48%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
  },
  {
    id: "verification",
    figmaNodeId: "2693:159516",
    /** сплошной тёмный блок + рука (без отдельного градиентного PNG — иначе «течёт» под мокап) */
    layerBackground: "#262626",
    layerPhoto: {
      src: "/images/cases/figma-case-verification-hero.png",
      box: {
        position: "absolute",
        width: "64%",
        height: "100%",
        right: "-4%",
        bottom: "0",
        top: "auto",
        left: "auto",
      },
      imageObjectFit: "contain",
      imageObjectPosition: "center bottom",
    },
    logoSrc: "/images/ecos-app-icon.png",
    logoSize: 36,
    title: "редизайн флоу авторизации и регистрации в fintech-продукте",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    copyTitleStyle: caseHeroTitleStyle,
    copyTagsLineStyle: caseHeroTagsLineStyle,
    copyMetaBox: { position: "absolute", left: 40, top: 35, maxWidth: "min(420px, 46%)", zIndex: 3 },
    copyStatsBox: { position: "absolute", left: 40, bottom: 40, maxWidth: "min(520px, 90%)", zIndex: 3 },
    stats: ["- 38% обращений в поддержку,", "+29% количества завершённых регистраций"],
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/cases/figma-verification-sub1.png", bg: "#dee2e6", alt: "верификация — ряд мокапов" },
      { image: "/images/cases/figma-verification-sub2.png", bg: "#282a2c", alt: "верификация — мокап" },
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
