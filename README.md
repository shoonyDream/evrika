# Тестовое задание для компании Эврика

## Работа с проектом:
  https://shoonydream.github.io/evrika/

```
yarn start # dev-сервер для разработки
yarn build:prod # сборка в production-режиме
```

## Особенности и ограничения
  - Для ускорения работы и "немыльности" при рендере, был использован иконочный шрифт (иконки могут немного отличаться, так как использованы бесплатные из того же смыслового ряда).
    - Рядовая ситуация: запрос иконок у дизайнера.
    - Свг корзины в виде исключения стырила из консоли иконочного шрифта (уж очень мне понравилась) =).
  - Верстка виджета отсутствует, так как по макету непонятно его логик и местоположение в коде (в слайдере, фикс к правой стороне, меняется ли там что-то - требуются уточнения по его цели).
  - Использование другого шрифта затруднило идентификацию значений отступов (line-height, рендер шрифта). Размеры текста, заголовков, отступы соответствуют макету по perfect pixel, но с небольшим округлением до ровных значений. Например: padding-top: 13px стал 15px.
  - Смысловые блоки (section), а также их дети (header, body) обладают одинаковыми отступами (заявка на ритм).
    - Рядовая ситуация: обсуждение с дизайнером.
  - Максимальная ширина у контейнера по расчетам должна быть 1340px. Подгон по perfect pixel: корректировка до 1350px (размышления затянулись, принято решение ориентироваться на этот инструмент для верстки).
    - Рядовая ситуация: обсуждение с дизайнером.
  - Кнопка sale в меню на десктопе требует обсуждения с дизайнером (выбивается из контентной области или цветовое решение продолжения фона меню на больших экранах совпадает с цветом кнопки?).
  - Верстка на flexbox.
 - Картинка продукта на первом слайдере вызвала сомнния по неймингу. С точки зрения админки, будут ли ее туда пробрасывать?
    - Рядовая ситуация: обсуждение с коллегами.
