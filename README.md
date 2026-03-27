# kuzenkova — portfolio

персональное портфолио product designer'а евгении кузенковой.

## стек

- **next.js 15** — react-фреймворк
- **tailwind css v4** — стилизация
- **typescript** — типизация

## структура

```
app/
  layout.tsx                   — корневой лейаут, SmoothScroll + `<Suspense><ScrollToTop /></Suspense>` (usePathname), фон `#111` инлайном
  page.tsx                     — главная (кейсы и опыт без ScrollReveal — стабильная видимость)
  globals.css                  — глобальные стили, карусель-анимация
  case/auth-redesign/page.tsx  — кейс: редизайн флоу авторизации (без ScrollReveal — растры и секции сразу видимы)
components/
  ScaleWrapper.tsx    — zoom-масштабирование под ширину экрана
  Navbar.tsx          — навигация с якорями (lenis smooth scroll)
  Hero.tsx            — герой-секция "KUZENKOVA" (Koulen 149px, letter-by-letter reveal)
  ConceptCarousel.tsx — карусель концептов (depth falloff эффект)
  CaseStudy.tsx       — кейс-стади с glow + настраиваемой позицией кнопки
  CaseButton.tsx      — магнитная кнопка "смотреть кейс" (frosted glass)
  CaseGlowImage.tsx   — тёмная карточка с изображением и glow spotlight
  Experience.tsx      — опыт работы (glow + jiggle chips; 60px между периодом и тегами)
  Footer.tsx          — футер с соцсетями и контактами; копирайт — ссылка на главную (`/`)
  ScrollReveal.tsx    — fade-in обёртка (в проекте сейчас не импортируется; оставлена на будущее)
  SmoothScroll.tsx    — Lenis smooth scroll провайдер
  ScrollToTop.tsx     — при смене URL скролл в начало (`lenis.scrollTo(0)`), в т.ч. после «смотреть кейс»
  ReadingProgress.tsx — прогресс-бар чтения страницы кейса
  TiltImage.tsx       — 3D tilt при наведении на превью кейса
public/
  images/             — экспорт из figma API @2x
  images/case-auth/   — изображения кейса авторизации
```

## запуск

```bash
npm install
npm run dev
npm run lint   # tsc --noEmit (next lint в Next 15 без своего eslint-конфига открывает интерактив и падает)
# порт 3001: `npm run dev:3001` (сервер должен быть запущен — иначе в браузере ERR_CONNECTION_REFUSED)
```

→ http://localhost:3000

- если **«страница не работает»** на localhost: часто порт занят старым `node` — `lsof -i :3001` (или `:3000`), затем `kill -9 <PID>` и снова `npm run dev`
- в `next.config.ts` задан `outputFileTracingRoot: process.cwd()`, чтобы Next не путал корень проекта с `~/package-lock.json`

→ прод: [kuzenkova-portfolio.vercel.app](https://kuzenkova-portfolio.vercel.app/)

## дизайн

- макет из figma, 1440px, тёмная тема `#111111`
- шрифты: **Koulen** (google fonts), **SF Pro Display** (system font stack)
- zoom-скейлинг: страница масштабируется под любую ширину экрана (min 40px отступы)
- мобильный адаптив: бургер-меню, стек-карточки, fluid шрифты (breakpoint 768px); превью кейсов на главной — `object-fit` + `scale(1.617)` для кропа правой части макета; от опыта работы до футера — 24px; в футере над блоком соцссылок — 20px (`footer-links` margin-top)
- страница кейса адаптивна: текстовые секции пересобраны html'ем на мобилке (14px+), визуальные мокапы остаются изображениями с текстовыми подписями; иконка ECOS (`public/images/ecos-app-icon.png`), stat-карточки колонкой, неразрывные пробелы, отдельная вёрстка prev/next на мобилке

## фичи

- адаптивный zoom-скейлинг (1440px дизайн → любой viewport)
- бесконечная карусель концептов (CSS animation, hover scale +5%)
- 3 кейс-стади ECOS с мокапами из figma + страница кейса авторизации
- клик по всей карточке кейса ведёт на страницу (не только кнопка); открытие кейса — с верху страницы (`ScrollToTop` + Lenis)
- карусель вровень с контентом на широком экране, шире контента на узком
- hover-эффект на кнопке "смотреть кейс" (frosted glass, backdrop-blur)
- секция опыта работы с тегами скиллов
- якорная навигация
- все изображения вытянуты через figma REST API (png @2x)
- кейс-хедеры пересобраны послойно (button-слой исключён из экспорта)

## анимации

- **sticky blur nav** — navbar прилипает и получает backdrop-blur при скролле
- **hero** — фамилия сразу видима: `useState(true)` + инлайн `color` у заголовка (без фазы `opacity: 0`)
- **scroll reveal** — компонент `ScrollReveal.tsx` в репозитории; **главная** и **страница кейса** рендерят контент **без** него (Lenis + IO давали `opacity: 0` и пропадание блоков)
- **lenis smooth scroll** — плавный инерционный скролл по всей странице
- **jiggle chips** — теги скиллов хаотично подёргиваются при наведении на карточку опыта
- **magnetic button** — кнопка "смотреть кейс" притягивается к курсору (как у Apple/Stripe)
- **glow spotlight** — мягкое свечение за курсором на тёмных карточках (опыт + кейсы)
- **depth falloff** — карточки карусели уменьшаются и затухают к краям экрана
- **reading progress** — тонкий прогресс-бар чтения вверху страницы кейса
- **tilt preview** — 3D наклон при наведении на превью предыдущего/следующего кейса

## контакты

- [telegram](https://t.me/jane_kuzenkova)
- [linkedin](https://www.linkedin.com/in/jane-kuzenkova/)
- [dribbble](https://dribbble.com/Kuzenkova)
- [e-mail](mailto:p-janni@bk.ru)
