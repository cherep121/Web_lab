# $${\color{#ff00ff}Web-lab }$$

## Лабороторная работа №3
  📌 ${\color{#FF69B4}Тема: \ Процессоры стилей}$

## 🛠 Стек
- **HTML5** — семантическая разметка
- **SCSS (Sass)** — модульная архитектура стилей
- **JavaScript (jQuery)** — интерактив: карусель, модальное окно, форма
- **Node.js / npm** — сборка проекта
- **БЭМ** — методология именования классов
- **Git**

## 📁 Структура
```
Web_lab/
├─ index.html
├─ scss/ <-- исходники стилей
│ ├─ utils/ <-- переменные, функции, миксины
│ │ ├─ _variables.scss
│ │ ├─ _functions.scss
│ │ ├─ _mixins.scss
│ │ └─ _index.scss
│ ├─ base/ <-- reset и типографика
│ │ ├─ _reset.scss
│ │ ├─ _typography.scss
│ │ └─ _index.scss
│ ├─ layout/ <-- каркас страницы
│ │ ├─ _header.scss
│ │ ├─ _hero.scss
│ │ ├─ _sections.scss
│ │ ├─ _footer.scss
│ │ └─ _index.scss
│ ├─ components/ <-- переиспользуемые компоненты
│ │ ├─ _button.scss
│ │ ├─ _card.scss
│ │ ├─ _modal.scss
│ │ ├─ _form.scss
│ │ ├─ _carousel.scss
│ │ ├─ _scroll-top.scss
│ │ └─ _index.scss
│ ├─ themes/ <-- светлая и тёмная темы
│ │ ├─ _light.scss
│ │ ├─ _dark.scss
│ │ └─ _index.scss
│ └─ main.scss <-- точка входа
├─ dist/ <-- собранный CSS (генерируется)
│ └─ css/
│ └─ main.css
├─ js/
│ └─ script.js <-- динамика на jQuery
├─ data/
│ └─ portfolio.json <-- данные для галереи
├─ images/
│ ├─ avatar.png
│ ├─ image.png
│ ├─ image2.png
│ ├─ image3.png
│ └─ image4.png
├─ node_modules/ <-- зависимости (в .gitignore)
├─ package.json <-- скрипты и зависимости
├─ package-lock.json
├─ README.md
└─ .gitignore
```
**Описание:**
- `index.html` — основная страница-визитка
- `scss/` — исходники стилей на препроцессоре Sass
  - `utils/` — переменные, функции, миксины
  - `base/` — сброс стилей и типографика
  - `layout/` — крупные блоки страницы (хедер, hero, футер)
  - `components/` — переиспользуемые компоненты (кнопка, карточка, модалка)
  - `themes/` — генерация CSS-переменных для светлой и тёмной темы
  - `main.scss` — точка входа, собирает все модули
- `dist/css/main.css` — собранный CSS (генерируется командой `npm run build`)
- `js/script.js` — весь JS-код на jQuery (меню, галерея, форма, карусель, подсветка меню, кнопка «Вверх», переключатель темы)
- `data/portfolio.json` — данные о работах для динамической галереи
- `images/` — аватар и скриншоты проектов
- `package.json` — скрипты сборки (`sass:dev`, `build`) и зависимости
- `README.md` — документация проекта
- `.gitignore` — исключения для Git (`node_modules/`, `dist/`)
