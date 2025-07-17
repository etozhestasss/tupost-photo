# 🧠 Шкала тупости по фото

VK Mini App на базе Vite + React + VKUI.

## 🚀 Возможности

- Получение имени и аватарки пользователя ВКонтакте
- Полностью готова к деплою на GitHub Pages
- Базовая структура для будущей обработки фото

---

## 🛠 Установка

```bash
npm install
npm run dev
```

---

## 🌐 Деплой на GitHub Pages

### 1. Добавь в `vite.config.js`:

```js
base: '/tupost-photo/',
```

(уже добавлено)

### 2. Добавь в `package.json`:

```json
"homepage": "https://<твое_имя>.github.io/tupost-photo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

(уже добавлено)

### 3. Установи gh-pages:

```bash
npm install gh-pages --save-dev
```

### 4. Выполни деплой:

```bash
npm run deploy
```

---

## 📦 Стек

- Vite
- React 18
- VKUI
- VK Bridge
