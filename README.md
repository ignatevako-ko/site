# Do.Marketing Landing

Современный адаптивный лендинг для маркетингового агентства `Do.Marketing`, собранный на `Next.js 16` и `Tailwind CSS 4`.

## Что внутри

- `Hero`-блок с CTA
- Секции `Cases`, `Services`, `Clients`, `About`, `Contacts`
- Темный премиальный интерфейс с футуристичными акцентами
- Переключение языка `EN / ET` в хэдере
- Адаптивная верстка для мобильных устройств
- Базовая SEO-настройка через `metadata`
- Компонентная структура и отдельный словарь контента

## Структура проекта

- `src/app` - layout, страница и глобальные стили
- `src/components` - UI-компоненты и секции лендинга
- `src/data/site-content.ts` - тексты и данные для английской и эстонской версии

## Как запустить локально

1. Убедитесь, что установлен `Node.js 22+`.
2. В корне проекта выполните:

```bash
npm install
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)

## Полезные команды

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Что можно быстро заменить перед публикацией

- Контактные данные в `src/data/site-content.ts`
- Тексты кейсов, услуг и блока `About`
- `metadataBase`, `title`, `description` в `src/app/layout.tsx`
- Логотипы и реальные бренды в секции клиентов
