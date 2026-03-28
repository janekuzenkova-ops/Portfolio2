/**
 * главная — правка в одном месте.
 * порядок карточек: auth → promo-ab → verification (id не меняй).
 * кейс: одна картинка 1400×810 из Figma + `CaseButton` поверх.
 *
 * макет Maket/b: https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159496
 * ноды героев (не перепутать с порядком case/1…3 на полотне):
 *   auth         → case/3 header      https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2699-165519
 *   promo-ab     → case/2 header      https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159551
 *   verification → case/1 header/reg  https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159516
 *
 * обновить PNG из файла: `FIGMA_ACCESS_TOKEN=… npm run figma:case-images`
 */

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
  alt?: string;
};

export type HomeCase = {
  id: string;
  /** для alt и aria */
  title: string;
  /** одна картинка = вся карточка 1400×810 (или тот же аспект) */
  heroImage: string;
  href?: string;
  /** кнопка «смотреть кейс», % от карточки */
  button: { top: string; left?: string; right?: string };
  figmaNodeId?: string;
  /** только desktop; каждая картинка — цельный кадр */
  subCards?: CaseSubCard[];
};

const BTN_FULL = { top: "58.4%", left: "73.86%" } as const;

export const homeCases: HomeCase[] = [
  {
    id: "auth",
    figmaNodeId: "2699:165519",
    title: "редизайн флоу авторизации и регистрации в fintech-продукте",
    heroImage: "/images/cases/case-card-auth.png",
    href: "/case/auth-redesign",
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/cases/figma-auth-sub1.png", alt: "экраны — вариант 1" },
      { image: "/images/cases/figma-auth-sub2.png", alt: "экраны — вариант 2" },
    ],
  },
  {
    id: "promo-ab",
    figmaNodeId: "2693:159551",
    title: "а/б тестирование посадочной страницы промо",
    heroImage: "/images/cases/case-card-promo.png",
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
  },
  {
    id: "verification",
    figmaNodeId: "2693:159516",
    title: "редизайн экрана верификации",
    heroImage: "/images/cases/case-card-verification.png",
    button: { top: BTN_FULL.top, left: BTN_FULL.left },
    subCards: [
      { image: "/images/cases/figma-verification-sub1.png", alt: "верификация — ряд мокапов" },
      { image: "/images/cases/figma-verification-sub2.png", alt: "верификация — мокап" },
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
