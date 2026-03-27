/**
 * главная страница — единая точка правки: текст, ссылки, картинки, позиции кнопки/оверлея.
 * меняешь здесь → верстка подхватывает без перерисовки макета в фигме как единственного источника.
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

export type HomeCase = {
  id: string;
  mockupImage: string;
  title: string;
  company: string;
  tags: string[];
  href?: string;
  button: { top: string; left?: string; right?: string };
  /** блок текста на десктопе поверх мокапа (копируемый) */
  overlay: CSSProperties;
  subCards?: CaseSubCard[];
};

export const homeCases: HomeCase[] = [
  {
    id: "verification",
    mockupImage: "/images/case1-header.png",
    title: "редизайн экрана верификации",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    button: { top: "58.5%", right: "180px" },
    overlay: { position: "absolute", left: "40px", bottom: "48px", maxWidth: "min(520px, 45%)" },
    subCards: [
      { image: "/images/case1-sub1.png", bg: "#dee2e6", alt: "экран верификации — вариант 1" },
      { image: "/images/case1-sub2.png", bg: "#282a2c", alt: "экран верификации — вариант 2" },
    ],
  },
  {
    id: "promo-ab",
    mockupImage: "/images/case2-header.png",
    title: "а/б тестирование посадочной страницы промо",
    company: "ECOS",
    tags: ["fintech", "web", "b2c", "2024"],
    button: { top: "58.5%", right: "180px" },
    overlay: { position: "absolute", left: "40px", bottom: "48px", maxWidth: "min(520px, 45%)" },
  },
  {
    id: "auth",
    mockupImage: "/images/case3-header.png",
    title: "редизайн флоу авторизации и регистрации",
    company: "ECOS",
    tags: ["fintech", "ios, android", "b2c", "2025"],
    href: "/case/auth-redesign",
    button: { top: "58.5%", right: "180px" },
    overlay: { position: "absolute", left: "40px", bottom: "48px", maxWidth: "min(520px, 45%)" },
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
