# kuzenkova — portfolio

персональное портфолио product designer'а евгении кузенковой.

## стек

- **next.js 15** — react-фреймворк
- **tailwind css v4** — стилизация
- **typescript** — типизация

## структура

```
app/
  layout.tsx                   — корневой лейаут, шрифты (Koulen + SF Pro Display)
  page.tsx                     — главная страница
  globals.css                  — глобальные стили, карусель-анимация
  case/auth-redesign/page.tsx  — кейс: редизайн флоу авторизации
components/
  ScaleWrapper.tsx    — zoom-масштабирование под ширину экрана
  Navbar.tsx          — навигация с якорями (lenis smooth scroll)
  Hero.tsx            — герой-секция "KUZENKOVA" (Koulen 149px, letter-by-letter reveal)
  ConceptCarousel.tsx — карусель концептов (depth falloff эффект)
  CaseStudy.tsx       — кейс-стади с glow + настраиваемой позицией кнопки
  CaseButton.tsx      — магнитная кнопка "смотреть кейс" (frosted glass)
  CaseGlowImage.tsx   — тёмная карточка с изображением и glow spotlight
  Experience.tsx      — опыт работы (glow + jiggle chips)
  Footer.tsx          — футер с соцсетями и контактами
  ScrollReveal.tsx    — IntersectionObserver fade-in + slide-up обёртка
  SmoothScroll.tsx    — Lenis smooth scroll провайдер
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
```

→ http://localhost:3000

## дизайн

- макет из figma, 1440px, тёмная тема `#111111`
- шрифты: **Koulen** (google fonts), **SF Pro Display** (system font stack)
- zoom-скейлинг: страница масштабируется под любую ширину экрана (min 40px отступы)
- мобильный адаптив: бургер-меню, стек-карточки, fluid шрифты (breakpoint 768px); превью кейсов на главной — `object-fit` + `scale(1.617)` для кропа правой части макета
- страница кейса адаптивна: текстовые секции пересобраны html'ем на мобилке (14px+), визуальные мокапы остаются изображениями с текстовыми подписями; иконка ECOS (`public/images/ecos-app-icon.png`), stat-карточки колонкой, неразрывные пробелы, отдельная вёрстка prev/next на мобилке

## фичи

- адаптивный zoom-скейлинг (1440px дизайн → любой viewport)
- бесконечная карусель концептов (CSS animation, hover scale +5%)
- 3 кейс-стади ECOS с мокапами из figma + страница кейса авторизации
- клик по всей карточке кейса ведёт на страницу (не только кнопка)
- карусель вровень с контентом на широком экране, шире контента на узком
- hover-эффект на кнопке "смотреть кейс" (frosted glass, backdrop-blur)
- секция опыта работы с тегами скиллов
- якорная навигация
- все изображения вытянуты через figma REST API (png @2x)
- кейс-хедеры пересобраны послойно (button-слой исключён из экспорта)

## анимации

- **sticky blur nav** — navbar прилипает и получает backdrop-blur при скролле
- **hero reveal** — буквы "KUZENKOVA" появляются последовательно, подзаголовок fade-in
- **scroll reveal** — кейсы и секция опыта fade-in + slide-up при появлении в viewport
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
