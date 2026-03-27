# kuzenkova — portfolio

> **локальная копия («портфолио2»).** папка: `Portfolio2`. remotes бывают двух схем — см. блок **github** ниже: либо `portfolio2` + `origin` (основной сайт), либо после переименования **`origin` = Portfolio2**, **`upstream` = Portfolio** (удобно для github desktop).

персональное портфолио product designer'а евгении кузенковой.

## github: отдельный репозиторий портфолио2

репо на сайте: [janekuzenkova-ops/Portfolio2](https://github.com/janekuzenkova-ops/Portfolio2). если создаёшь **с нуля** (другой аккаунт): [github.com/new](https://github.com/new) → имя `Portfolio2` → без readme → create, затем:

```bash
cd ~/Documents/GitHub/Portfolio2
git remote add portfolio2 https://github.com/janekuzenkova-ops/Portfolio2.git   # если remote ещё нет
git push -u portfolio2 main
```

дальше (если remote называется **`portfolio2`**): **`git push portfolio2 main`** в портфолио2; **`git push origin main`** — в основной [`Portfolio`](https://github.com/janekuzenkova-ops/Portfolio) (не путай).

незакоммиченное: `git add -A` → `git commit -m "…"` → тот же push, что используешь обычно.

### github desktop: нормальное имя «Portfolio2» в списке

в desktop **нельзя** просто переименовать подпись: он тянет имя с **основного** github-remote. пока **`origin`** = основной `Portfolio`, в списке будет дубликат **Portfolio**.

**сделать `origin` = репо портфолио2** (основной сайт тогда **`upstream`**):

```bash
cd ~/Documents/GitHub/Portfolio2
git remote rename origin upstream
git remote rename portfolio2 origin
git branch --set-upstream-to=origin/main main
```

после этого пуш в портфолио2: **`git push origin main`**. подтянуть изменения из основного репо: **`git fetch upstream`**, потом merge/rebase `upstream/main` по необходимости.

**добавить репо в desktop:** **file → add local repository…** → **`~/Documents/GitHub/Portfolio2`**.

**пока не переименовала remotes:** отличай копии по **local path** — **repository → repository settings** / **show in finder**: путь **`…/Portfolio2`** = портфолио2.

## стек

- **next.js 15** — react-фреймворк
- **tailwind css v4** — стилизация
- **typescript** — типизация

## структура

```
app/
  layout.tsx                   — без ручного `<head>`; Koulen — локальный `public/fonts/Koulen-latin.woff2` + `@font-face` в `globals.css` (не тянуть Google в postcss при dev); `suppressHydrationWarning` из‑за Lenis на `html`
  error.tsx / global-error.tsx — экран с текстом ошибки вместо «белого листа»
  page.tsx                     — главная (кейсы и опыт без ScrollReveal — стабильная видимость)
  globals.css                  — глобальные стили; на кейсе мобилка: `section.px-5` без padding, nav/footer с `px-5` не трогаем
  case/auth-redesign/page.tsx  — кейс: редизайн флоу авторизации (без ScrollReveal — растры и секции сразу видимы)
components/
  ScaleWrapper.tsx    — колонка 1440px по центру, `zoom` под ширину viewport, отступы 40 / на мобилке 16px
  Navbar.tsx          — навигация с якорями (lenis smooth scroll)
  Hero.tsx            — герой-секция "KUZENKOVA" (Koulen 149px, letter-by-letter reveal)
  ConceptCarousel.tsx — карусель концептов в ширину колонки (`rounded-2xl` с 768px)
  CaseStudy.tsx       — кейс-стади с glow + настраиваемой позицией кнопки
  CaseButton.tsx      — магнитная кнопка "смотреть кейс" (frosted glass)
  CaseGlowImage.tsx   — тёмная карточка с изображением и glow spotlight
  Experience.tsx      — опыт работы (glow + jiggle chips; 60px между периодом и тегами)
  Footer.tsx          — футер с соцсетями и контактами; копирайт — ссылка на главную (`/`)
  ScrollReveal.tsx    — fade-in обёртка (в проекте сейчас не импортируется; оставлена на будущее)
  SmoothScroll.tsx    — Lenis: динамический `import("lenis")` только в браузере (нет bailout SSR от `next/dynamic`)
  CaseEntryScroll.tsx — только страница кейса: при монтировании скролл в начало + `lenis.scrollTo(0)` (без `usePathname` в layout — не белый экран)
  ReadingProgress.tsx — прогресс-бар чтения страницы кейса
  TiltImage.tsx       — 3D tilt при наведении на превью кейса
public/
  fonts/              — Koulen latin `.woff2` (без запросов к Google при сборке CSS)
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

- Safari **«unable to handle this request»** на localhost: процесс `next dev` упал или не запущен — смотри **терминал** (stack trace); затем `rm -rf .next` и снова `npm run dev`
- если **«страница не работает»** на localhost: часто порт занят старым `node` — `lsof -i :3001` (или `:3000`), затем `kill -9 <PID>` и снова `npm run dev`
- **Lenis**: без `next/dynamic` в `layout` — иначе `BAILOUT_TO_CLIENT_SIDE_RENDERING` и у части браузеров белый экран; модуль `lenis` грузится в `useEffect`
- в `next.config.ts` — `outputFileTracingRoot` = папка проекта (убирает путаницу с `~/package-lock.json`)
- при падении рендера смотри **`app/error.tsx`** / **`app/global-error.tsx`** — на экране будет текст ошибки

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
- клик по всей карточке кейса ведёт на страницу (не только кнопка); вход на кейс — сверху (`CaseEntryScroll` + Lenis)
- контент в колонке 1440 (без full-bleed на весь экран)
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
- **marquee** — бесконечная прокрутка карточек концептов (пауза по hover)
- **reading progress** — тонкий прогресс-бар чтения вверху страницы кейса
- **tilt preview** — 3D наклон при наведении на превью предыдущего/следующего кейса

## контакты

- [telegram](https://t.me/jane_kuzenkova)
- [linkedin](https://www.linkedin.com/in/jane-kuzenkova/)
- [dribbble](https://dribbble.com/Kuzenkova)
- [e-mail](mailto:p-janni@bk.ru)
