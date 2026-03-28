# kuzenkova — portfolio

> **локальная копия («портфолио2»).** папка: `Portfolio2`. remotes бывают двух схем — см. блок **github** ниже: либо `portfolio2` + `origin` (основной сайт), либо после переименования **`origin` = Portfolio2**, **`upstream` = Portfolio** (удобно для github desktop).
>
> для cursor: правило `.cursor/rules/portfolio2-banner.mdc` — агент в **первом** сообщении чата пишет баннер **ЭТО PORTFOLIO 2**.

## figma mcp (cursor) — как подтянуть макеты в агента

### что уже сделано в репо

- в проекте: [`.cursor/mcp.json`](.cursor/mcp.json) — сервер **`figma`**, URL `https://mcp.figma.com/mcp`, заголовок **`X-Figma-Region: us-east-1`**.
- у тебя в **`~/.cursor/mcp.json`** тот же блок **figma** может дублироваться — норм: Cursor обычно **мержит** глобальный и проектный конфиг. если в списке MCP видишь **два** Figma — убери запись из одного из файлов.

### пошагово: подключить и авторизоваться

1. **Полный перезапуск Cursor** после любых правок `mcp.json`.
2. **Cursor → Settings** (`⌘ ,`) → раздел **MCP** / **Model Context Protocol** (или иконка **MCP** в интерфейсе чата).
3. Найди сервер **figma** → нажми **Connect** / **Sign in** / **Authenticate**.
4. Откроется браузер → **Figma** → **Allow** / разреши доступ аккаунту, у которого есть **чтение файла** с макетом.
5. Проверка: в чате агента в списке инструментов должны появиться вызовы вроде **`get_design_context`**, **`get_screenshot`**, **`get_metadata`**. если пусто — **View → Output → выпадайка «MCP» / логи** и смотри ошибку.

**Альтернатива без ручного json:** в чате Cursor команда **`/add-plugin figma`** — поставит официальный плагин (MCP + skills). конфиг из `.cursor/mcp.json` при этом может совпасть — не страшно.

**Установка в один клик (из доки Figma):** [deep link «Install Figma MCP» в Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=Figma&config=eyJ1cmwiOiJodHRwczovL21jcC5maWdtYS5jb20vbWNwIn0%3D) → **Install** → затем снова **Connect** к Figma. официальная инструкция: [Set up the remote server (recommended)](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/).

### регион

если организация не в **us-east-1**, поменяй **`X-Figma-Region`** в `mcp.json` на свой регион (как в [документации Figma](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)) и перезапусти Cursor.

### как именно «подтянуть» макет в промпте

1. В **Figma**: выдели нужный **frame** или слой → **Share** → **Copy link** (в URL должен быть **`node-id=...`**).
2. В **чате агента** вставь ссылку и формулировку вроде: *«сними `get_design_context` и `get_screenshot` по этой ссылке и сверстай под наш стек (Next + Tailwind)»*.
3. Агент **не открывает URL в браузере** — он передаёт **file key + node id** в MCP; поэтому ссылка должна быть именно на **ноду**, не только на файл.

**Без успешного OAuth** Figma MCP не отдаёт инструменты — тогда в коде остаётся ручная правка и [`content/home.ts`](content/home.ts).

### PNG главной из Maket/b (цены/ноды не путать с порядком карточек на сайте)

макет: [Maket/b `node-id=2693-159496`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159496). герои **1400×810**:

| на сайте (`homeCases`) | фрейм в Figma | ссылка на ноду |
|------------------------|---------------|----------------|
| **auth** | case/3 → `header` | [`2699-165519`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2699-165519) |
| **promo-ab** | case/2 → `header` | [`2693-159551`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159551) |
| **verification** | case/1 → `header/reg` | [`2693-159516`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2693-159516) |

выгрузка в репо (нужен [Personal access token](https://developers.figma.com/docs/rest-api/authentication/) с чтением файла):

```bash
FIGMA_ACCESS_TOKEN=… npm run figma:case-images
```

скрипт [`scripts/figma-export-case-images.mjs`](scripts/figma-export-case-images.mjs) дергает [Images API](https://www.figma.com/developers/api#get-images-endpoint) и перезаписывает `public/images/cases/case-card-*.png` и сабкарты `figma-auth-sub*`, `figma-verification-sub*`. URL из MCP `…/api/mcp/asset/…` без авторизации часто **404** — для автозаливки в git надёжнее токен + этот npm-скрипт.

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
content/
  home.ts             — `homeCases`: **одна картинка на карточку** (`heroImage`, файлы `case-card-*.png`) + позиция `CaseButton`; текст/фон внутри экспорта из Figma
app/
  layout.tsx                   — без ручного `<head>`; Koulen — локальный `public/fonts/Koulen-latin.woff2` + `@font-face` в `globals.css` (не тянуть Google в postcss при dev); `suppressHydrationWarning` из‑за Lenis на `html`
  error.tsx / global-error.tsx — экран с текстом ошибки вместо «белого листа»
  page.tsx                     — главная: кейсы из `homeCases` в `content/home.ts`
  globals.css                  — глобальные стили; на мобилке у `.case-hero-card` `min-height: 280px`; у кейса `.case-figma-label-track` + `padding-bottom: 30px` (ранний конец sticky по высоте секции); `.case-figma-label`: `sticky` + `top: 96px` + **`bottom: 40px`** — зазор от низа экрана; секция **«контекст»** — `CaseFigmaRow` с **`labelStatic`**: `<h2 class="case-figma-label case-figma-label--static">`, без sticky; `.case-task-secondary` — `margin-bottom: 104px` после строки «подтолкнуть пользователей…» до `img-info`; крупные кадры кейса auth — **100px** между секциями/текстом и кадром: `case-gap--hero-to-context`, `case-gap--concept-to-research`, `case-gap--research1-to-signup`, `case-gap--signup-to-research2`, `case-gap--research2-to-verify`, `case-gap--cards-to-what-done`, `case-gap--what-done-to-password`, `case-gap--password-to-result`; навигация предыдущий/следующий кейс: `.case-nav-spacer` **80px** сверху от **«результат»**, `.case-footer-offset` в `globals.css` (**−80px** десктоп при `Footer` `marginTop` **140px**; **8px** на моб. при `footer-section` **24px**) — **32px** снизу до футера; **≤767px**: крупные вертикали кейса **32px** (`case-gap--*`, `.case-hero-intro` padding, `.case-spacer--section`, `.case-task-secondary`, post-funnel, метрики→блок **32px**), `.case-nav-spacer` **32px**; **кадр подряд к кадру** (**img-info**→Concept, **img3**→**img4**) — **20px** (`.case-concept-pair-section` `margin-top`, `case-gap--verify-to-cards`); в паре Concept по горизонтали — `.case-concept-pair-grid` **20px**; **«результат»** — `CaseFigmaRow` + `.case-result-grid` (**20px** между карточками, 2×2 от **768px**), карточки те же токены, что **«проблема»** (`.case-figma-problem-card`)
  case/auth-redesign/page.tsx  — кейс: редизайн флоу; текстовые блоки сверстаны HTML’ем по макету [Кейс/b в Figma `node-id=2700-203785`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2700-203785); после «задачи» — `img-info.png` (логин ×3, `2939:65121`), затем два серых кадра Concept (`img-concept-welcome.png`, `img-concept-signup.png`, фрейм `2941:102077` / ноды `2941:102078`, `2941:102148`); пересборка пары из `info-section.png`: `node scripts/extract-auth-concept-cards.mjs`; прочие кадры — `StaticImage` / `CaseGlowImage`; после `img4-cards` — **что сделала**: только список 01–06 по [Figma `2834:222373`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2834-222373); **результат** — четыре карточки 01–04 (`RESULT_CARDS`), копируемый текст, не `result.png`; вертикальные зазоры между крупными кадрами — **100px** (`case-gap--*` в `globals.css`); `public/images/case-auth/result.png` в разметке не используется (можно удалить при уборке ассетов)
components/
  ScaleWrapper.tsx    — колонка 1440px по центру, `zoom` под ширину viewport (главная), горизонтальные отступы **20px**; страница кейса auth: **`disableZoom`** — без `zoom`, иначе в Chrome ломается **`position: sticky`** у лейблов «контекст / проблема / …»
  Navbar.tsx          — навигация из `navContent` + якоря (lenis)
  Hero.tsx            — герой из `heroContent` (Koulen, letter-by-letter)
  ConceptCarousel.tsx — карусель из `conceptCards` (`<article>` + слой картинки)
  CaseStudy.tsx       — hero: `next/image` fill + hover glow; поверх только **CaseButton** (не вся карточка — ссылка)
  CaseButton.tsx      — магнитная кнопка «смотреть кейс» (glass + blur + лёгкое свечение)
  CaseGlowImage.tsx   — тёмная карточка с изображением и glow spotlight
  Experience.tsx      — опыт из `experienceContent` (glow + jiggle chips)
  Footer.tsx          — `footerContent`: ссылки + копирайт (`/` через `Link`); **≤767px**: все ссылки в **одну строку** (`flex-wrap: nowrap`, `justify-content: center`, при нехватке ширины — горизонтальный скролл без полосы)
  ScrollReveal.tsx    — fade-in обёртка (в проекте сейчас не импортируется; оставлена на будущее)
  SmoothScroll.tsx    — Lenis: динамический `import("lenis")` только в браузере (нет bailout SSR от `next/dynamic`)
  CaseEntryScroll.tsx — только страница кейса: при монтировании скролл в начало + `lenis.scrollTo(0)` (без `usePathname` в layout — не белый экран)
  ReadingProgress.tsx — прогресс-бар чтения страницы кейса
  TiltImage.tsx       — 3D tilt при наведении на превью кейса
public/
  fonts/              — Koulen latin `.woff2` (без запросов к Google при сборке CSS)
  images/             — экспорт из figma API @2x
  images/cases/       — **главная**: `case-card-*.png` + сабкарты — см. **`npm run figma:case-images`** и таблицу нод в блоке **PNG главной из Maket/b** выше; прочие `figma-case-*`, `case-promo-*` — архив / страницы кейсов
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

- **Chrome / Safari «This page isn’t working» / unable to handle** на `localhost:3000`: либо **`next dev` не запущен**, либо на **3000** висит **мертвый node** и отдаёт **HTTP 500** (новый dev тогда поднимется на **3001** — смотри строку `Local:` в терминале). лечение: **`lsof -iTCP:3000 -sTCP:LISTEN` → `kill -9 <PID>`**, затем **`npm run dev`** (или сразу открыть **http://localhost:3001**). при странном состоянии: **`npm run dev:clean`**
- **Runtime TypeError / `__webpack_modules__[moduleId] is not a function`** — битый **webpack**-кэш в dev. по умолчанию **`npm run dev` уже с `--turbopack`** (без webpack). если меняла на webpack: **`npm run dev:clean`** или вручную `rm -rf .next` и снова `npm run dev`. запасной вариант: **`npm run build && npm run start`** (прод-режим без HMR)
- порт занят / дубликат dev: **`lsof -iTCP:3000 -sTCP:LISTEN`** (и при необходимости `:3001`) → **`kill -9 <PID>`** → снова **`npm run dev`**
- **Lenis**: без `next/dynamic` в `layout` — иначе `BAILOUT_TO_CLIENT_SIDE_RENDERING` и у части браузеров белый экран; модуль `lenis` грузится в `useEffect`
- в `next.config.ts` — `outputFileTracingRoot` = папка проекта (убирает путаницу с `~/package-lock.json`)
- при падении рендера смотри **`app/error.tsx`** / **`app/global-error.tsx`** — на экране будет текст ошибки

→ **прод:** в репозитории нет конфига под хостинг — сейчас только локально (`npm run dev`, при необходимости `npm run build` + `npm run start`). выкат на прод — отдельно, на площадку по твоему выбору. публичный сайт из основного репо — [`Portfolio`](https://github.com/janekuzenkova-ops/Portfolio).

## дизайн

- макет из figma, 1440px; canvas **#0a0a0a** (Neutral/1000); порядок **`homeCases`**: **auth** → **promo-ab** → **verification**; превью кейсов — **растровые карточки** (`heroImage`), чипы опыта **#323232**, вторичный текст ссылок **#494a4d**
- шрифты: **Koulen** (google fonts), **SF Pro Display** (system font stack)
- zoom-скейлинг: страница масштабируется под любую ширину экрана (по бокам **20px** у `ScaleWrapper`)
- мобильный адаптив: бургер-меню, стек-карточки, fluid шрифты (breakpoint 768px); превью кейсов — `object-cover` в `aspect-[16/10]`; от опыта работы до футера — 24px; в футере над блоком соцссылок — 20px (`footer-links` margin-top)
- страница кейса auth-redesign: вертикальный ритм **100px** между кадром и текстом/секцией (герой → контекст, **img-info**→Concept **20px** — два кадра подряд, Concept → **исследование - 01**, инсайты → `img2-signup`, `img2` → **исследование - 02**, конец 02 → `img3-verify`, **`img3`→`img4` 20px**, `img4` → **что сделала**, список → `img5-password`, `img5` → **«результат»**, до блока предыдущий/следующий кейс **80px**, снизу до футера **60px**); **исследование - 01/02** — классы `case-gap--*` + где нужно inline height внутри `section`; блок **исследование - 02** ([Figma `2946:103146`](https://www.figma.com/design/vCzZlNer2Fixkg9ibPRxR0/?node-id=2946-103146)) — анализ отвалов, метрики, **отвалы по шагам** (`FunnelRow`), **ключевые инсайты** (3 пункта); исследования 01 и 02: **24 / 57 / 57** (`case-research-block--metrics-68`: заголовок→лид; лид→метрики; метрики→следующий блок); двойной класс **`gap: 0`** у блока с метриками; после воронки до «ключевые инсайты» **64px** на десктопе (`case-insights-section--post-funnel`; на моб. **32px**); `nb` в лидах; hero/лиды — `<br />`, `NumberedRow` → `ReactNode`; **моб. кейс auth:** см. `globals.css` `@media (max-width: 767px)` — секционные **32px** вместо **100px**/герой **120px**

## фичи

- адаптивный zoom-скейлинг (1440px дизайн → любой viewport)
- бесконечная карусель концептов (CSS animation, hover scale +5%)
- 3 кейс-стади ECOS с мокапами из figma + страница кейса авторизации
- переход в кейс — **только кнопка** «смотреть кейс» (картинка не обёрнута в ссылку); вход на страницу кейса — сверху (`CaseEntryScroll` + Lenis)
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
- **marquee** — бесконечная прокрутка карточек концептов (пауза по hover); при `prefers-reduced-motion` анимация отключается
- **reading progress** — тонкий прогресс-бар чтения вверху страницы кейса
- **tilt preview** — 3D наклон при наведении на превью предыдущего/следующего кейса

## контакты

- [telegram](https://t.me/jane_kuzenkova)
- [linkedin](https://www.linkedin.com/in/jane-kuzenkova/)
- [dribbble](https://dribbble.com/Kuzenkova)
- [e-mail](mailto:p-janni@bk.ru)
