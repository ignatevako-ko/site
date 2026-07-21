# DESIGN.md — дизайн-система Do.Marketing

Единый свод правил по визуалу и по созданию новых страниц. **Читать перед вёрсткой любой новой страницы или секции.** Цель — чтобы весь сайт выглядел как одна система на ПК и на мобайле, а новые страницы нельзя было «уронить» копипастом.

Главный принцип: **не хардкодить то, для чего есть общий компонент или токен.** Если нужен новый визуальный приём — сначала проверь, нет ли уже готового; если добавляешь новый — вынеси в общий компонент/токен и опиши здесь.

---

## 1. Фундамент

- Стек: Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Шрифт — **Onest** (`--font-onest`), подключён в `layout.tsx`, отдельно импортировать не нужно.
- Тема одна — **тёмная фиолетовая**. Светлой темы нет. Фон страницы всегда `bg-slate-950` (`#020617`). Никаких `#070914`, `#06070c`, `bg-white` и самодельных градиентных фонов на уровне страницы.
- Языки: `RU` (основной) / `EN` / `ET`. Любая страница обязана быть трёхъязычной (см. §7).

---

## 2. Токены

### Цвет
| Роль | Класс | Примечание |
|---|---|---|
| Фон страницы | `bg-slate-950` | единственный базовый фон |
| Основной текст | `text-white` | заголовки, важные значения |
| Body-текст | `text-slate-300` | абзацы |
| Приглушённый | `text-slate-400` | подписи под цифрами, описания карточек |
| Лейблы/мелочь | `text-slate-500` | подписи фактов, копирайт |
| **Акцент** | `violet-400` | кнопки, активные состояния, цифры-хайлайты |
| Акцент-hover | `violet-300` | ховер акцентных элементов |
| Акцент-текст | `text-violet-300` | eyebrow, ссылки при ховере |
| Статус/успех | `emerald-300` / `emerald-200` | бейджи «Активно», метрики роста |
| Границы | `border-white/10` (карточки), `border-white/12`/`white/15` (кнопки/интерактив) |
| Поверхности | `bg-white/[0.04]`…`bg-white/[0.06]` (карточки), `bg-white/5` (второстепенные кнопки) |

Тёплые/розовые цвета (`amber`, `fuchsia`) — **только** в декоративных блоб-градиентах фона, не в контенте.

### Фон и декор
Обёртка страницы:
```tsx
<div className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
  <PageBackground />        {/* @/components/page-background */}
  <div className="relative z-10"> … контент … </div>
</div>
```
`PageBackground` даёт единый набор блоб-градиентов + сетку (`grid-overlay`). Не рисовать блобы вручную на новых страницах.

### Типографика
| Элемент | Класс |
|---|---|
| **Hero H1 (кейс/лендинг)** | `font-light leading-[1.02] tracking-[-0.045em]` + масштаб `text-[40px] sm:text-[58px] lg:text-[72px]` |
| **Hero H1 (сервис)** | как в `ServicePageShell`: `text-[34px] font-light tracking-[-0.06em] sm:text-[50px] lg:text-[68px]` |
| **Секция H2** | `text-[32px] font-light leading-[1.05] tracking-[-0.04em] sm:text-[46px]` |
| **Карточка H3** | `text-2xl font-light text-white` (или `text-[24px] font-medium tracking-[-0.04em]` для сервисных карточек) |
| **Eyebrow (надзаголовок)** | компонент `SectionLabel`: `text-[13px] font-semibold uppercase tracking-[0.28em] text-violet-300` |
| **Body** | `text-base leading-8 text-slate-300` (крупный — `text-lg leading-8`) |

Правила: заголовки — `font-light` (не `font-semibold`/`font-display`), с **отрицательным** трекингом. Eyebrow — только через `<SectionLabel>`, не изобретать своё значение `tracking`.

### Кнопки (высота `min-h-14`, `rounded-full`, `px-7`, `font-semibold`)
| Тип | Класс |
|---|---|
| Primary | `bg-violet-400 text-slate-950 hover:bg-violet-300` |
| Secondary | `border border-white/12 bg-white/5 text-white hover:border-violet-300/40 hover:bg-white/10` |
| White (на цветной плашке) | `bg-white text-slate-950 hover:bg-violet-100` |

Для кейсов эти классы вынесены в константы `casePrimaryButtonClass` / `caseSecondaryButtonClass` / `caseWhiteButtonClass` (`@/components/cases/case-sections`).

### Карточки, радиусы, отступы
- Радиусы: крупные панели `rounded-[2rem]`, карточки `rounded-[1.5rem]`, вложенные блоки `rounded-[1.25rem]`, кнопки/пилюли `rounded-full`.
- Карточка по умолчанию: `rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6`.
- Стеклянные панели (hero/прайсинг): класс `glass-shell`.
- Контейнер секции: `mx-auto w-full max-w-7xl px-6 lg:px-10`. Никогда не `max-w-6xl` для основного контента.
- Вертикальные отступы секций: `py-12 lg:py-20` (или `py-16` внутри контейнера кейса).

---

## 3. Общие компоненты — использовать, не хардкодить

| Нужно | Использовать | Не делать |
|---|---|---|
| Шапка | `SiteHeader` (`@/components/site-header`) | не верстать свой хедер-пилюлю в странице |
| Подвал | `SiteFooter` (`@/components/site-footer`) | не хардкодить футер, не оставлять страницу без футера |
| Фон | `PageBackground` | не копировать блобы |
| Eyebrow | `SectionLabel` | не писать `<p class="uppercase tracking-…">` |
| Логотип | `BrandLogo` | не вставлять внешние логотипы (Tilda CDN и т.п.) |
| Каркас сервисной страницы | `ServicePageShell` (`@/components/service-page-shell`) | не собирать сервисную страницу с нуля |
| Каркас кейса вне `[language]` | `CaseChrome` + секции из `@/components/cases/case-sections` | не хардкодить хедер/футер/`SectionLabel`/блобы в `cases/*/page.tsx` |

`SiteHeader` уже адаптивен: на мобайле — логотип + переключатель языка + бургер-меню. Свой хедер на кейсах ломал мобайл — поэтому теперь только `SiteHeader`.

---

## 4. Типы страниц и их каркас

1. **Главная / лендинг** → компонент `LandingPage`, контент в `src/data/site-content.ts` (RU/EN/ET). Роут `[language]/page.tsx`.
2. **Сервисная страница** (Meta Ads, Google Ads, SEO, SMM-услуга, аудит, разработка) → `ServicePageShell`. Тексты — `src/lib/service-pages.ts` или `src/lib/additional-service-pages.ts`. Роут — под `[language]/…` или через `additional-service-route`.
3. **Кейс** (`src/app/cases/<slug>/`) → серверный `page.tsx` (только `metadata` + JSON-LD + `<XxxArticle/>`), клиентский `*-article.tsx` внутри `CaseChrome`, контент — `src/data/cases/<slug>.ts` как `Record<Language, …>`. Переключение языка — на месте (без смены URL), как на `/cases`.
4. **Прочие лендинги** — по возможности переиспользуй `ServicePageShell` или, минимум, `SiteHeader` + `PageBackground` + `SiteFooter` + токены выше.

---

## 5. Чеклист создания новой страницы

1. [ ] Выбрал тип страницы из §4 и соответствующий каркас — **не начинаю с пустого `<div>`**.
2. [ ] Обёртка: `relative min-h-screen overflow-x-clip bg-slate-950 text-white` + `<PageBackground/>`.
3. [ ] Шапка — `SiteHeader`, подвал — `SiteFooter`. Ничего не хардкожу.
4. [ ] Контейнер `max-w-7xl px-6 lg:px-10`, отступы секций `py-12 lg:py-20`.
5. [ ] Заголовки/кнопки/eyebrow — по токенам §2 (H1 `font-light` + отрицательный трекинг; eyebrow через `SectionLabel`; кнопки `min-h-14 rounded-full`).
6. [ ] Три языка сразу: RU + EN + ET (§7).
7. [ ] Проверил на **мобайле (375px)** и десктопе: нет горизонтального скролла, шапка/hero/кнопки корректны, текст не обрезан.
8. [ ] SEO: `metadata` через `buildPageMetadata`/`buildLocalizedPageMetadata`; структурные данные (Article/Service/FAQ/BreadcrumbList) где уместно.
9. [ ] `npm run lint` — зелёный.
10. [ ] Прогнал через `searchfit-seo` (`seo-audit`, `on-page-seo`, `schema-markup`) и поправил замечания.

---

## 6. Мобильная адаптивность (обязательно проверять)

- База — mobile-first: сначала одноколоночная раскладка, десктоп — через `sm:`/`lg:`.
- Кнопки на мобайле — на всю ширину (`flex flex-col … sm:flex-row`), высота `min-h-14`.
- H1 обязательно уменьшается на мобайле (базовый размер `text-[34–40px]`), не оставлять десктопный размер.
- Ширина контента только через `max-w-*` + `px-6`; никогда не допускать горизонтального скролла (обёртка `overflow-x-clip`).
- Мультимедиа: `max-w-full`, изображения — `next/image` с `sizes`.
- **Шапка (`SiteHeader`):** горизонтальная «пилюля» с меню включается только с `lg` (1024px), ниже — бургер-меню. Телефон/почта в шапке показываются с `xl` (1280px). Не опускать эти брейкпоинты ниже: при `md` полная строка (логотип + «Вернуться на главную» + 5 пунктов меню + контакты + переключатель) не помещается и элементы наезжают друг на друга. При правке шапки проверять диапазон 768–1280px на странице-кейсе (там есть кнопка «Вернуться на главную» — худший случай по ширине).

---

## 7. Мультиязычность

- Все тексты — из данных (`site-content.ts`, `service-pages.ts`, `additional-service-pages.ts`, `src/data/cases/*`), не хардкодить в JSX.
- Новый контент добавляется сразу в RU + EN + ET (копия по образцу существующих объектов `Record<Language, …>`).
- Кейсы вне `[language]` переключают язык клиентски (без смены URL). Страницы под `[language]` — через сегмент маршрута.

---

## 8. Чего не делать (антипаттерны, из-за которых страницы «уплывали»)

- ❌ Хардкодить хедер/футер/языковой переключатель/телефон-почту в странице.
- ❌ Свой фон (`bg-[#070914]`, `bg-white`, самодельные градиенты) вместо `bg-slate-950` + `PageBackground`.
- ❌ Разные размеры/трекинг H1 на однотипных страницах — использовать токены §2.
- ❌ `font-semibold`/`font-display`/`tracking-normal` в hero-заголовках.
- ❌ Своё значение `tracking` для eyebrow вместо `SectionLabel`.
- ❌ `max-w-6xl` для основного контента.
- ❌ Внешние ассеты (логотипы с чужих CDN, случайные iframe) вместо брендовых компонентов.
- ❌ Одноязычная страница.
