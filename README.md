# kuzenkova — portfolio

персональное портфолио product designer'а евгении кузенковой.

## стек

- **next.js 15** — react-фреймворк
- **tailwind css v4** — стилизация
- **typescript** — типизация

## структура

```
app/
  layout.tsx          — корневой лейаут, шрифты (Koulen + SF Pro Display)
  page.tsx            — главная страница
  globals.css         — глобальные стили, карусель-анимация
components/
  ScaleWrapper.tsx    — zoom-масштабирование под ширину экрана
  Navbar.tsx          — навигация с якорями
  Hero.tsx            — герой-секция "KUZENKOVA" (Koulen 149px)
  ConceptCarousel.tsx — карусель концептов (8 карточек, infinite scroll, hover +5%)
  CaseStudy.tsx       — кейс-стади с настраиваемой позицией кнопки
  CaseButton.tsx      — интерактивная кнопка "смотреть кейс" (frosted glass + hover)
  Experience.tsx      — опыт работы (4 карточки с тегами)
  Footer.tsx          — футер с соцсетями и контактами
public/
  images/             — экспорт из figma API @2x
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
- zoom-скейлинг: страница масштабируется под любую ширину экрана

## фичи

- адаптивный zoom-скейлинг (1440px дизайн → любой viewport)
- бесконечная карусель концептов (CSS animation, hover scale +5%)
- 3 кейс-стади ECOS с мокапами из figma
- hover-эффект на кнопке "смотреть кейс"
- секция опыта работы с тегами скиллов
- якорная навигация (smooth scroll)
- все изображения вытянуты через figma REST API (png @2x)
- кейс-хедеры пересобраны послойно (button-слой исключён из экспорта)

## контакты

- [telegram](https://t.me/jane_kuzenkova)
- [linkedin](https://www.linkedin.com/in/jane-kuzenkova/)
- [dribbble](https://dribbble.com/Kuzenkova)
- [e-mail](mailto:p-janni@bk.ru)
