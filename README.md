# Praxis Learning & Consulting

Official website for **Praxis Learning & Consulting** — specialists in organisational learning, academic quality, workforce development, and performance improvement.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Install dependencies
```bash
npm install
```

### Run locally (development)
```bash
npm run dev
```
Opens at **http://localhost:3000** with hot-reload.

### Build for production
```bash
npm run build
```
Output goes to the `dist/` folder — ready to deploy.

### Preview the production build
```bash
npm run preview
```
Opens at **http://localhost:4173**

---

## 📁 Project Structure

```
praxis-learning/
├── index.html          # Main HTML file (single-page site)
├── vite.config.js      # Vite bundler configuration
├── package.json        # Project metadata & scripts
├── .gitignore          # Files excluded from Git
├── public/             # Static assets copied as-is to dist/
│   └── favicon.ico     # (add your favicon here)
├── src/                # Optional: extracted CSS / JS modules
└── dist/               # Production build output (git-ignored)
```

---

## 🌐 Deploying to GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```

3. Set the `base` in `vite.config.js` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```

4. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 🌐 Deploying to Netlify / Vercel

| Platform | Settings |
|----------|----------|
| **Netlify** | Build command: `npm run build` · Publish dir: `dist` |
| **Vercel** | Framework: `Vite` · Output dir: `dist` |

---

## 🔧 Pushing to GitHub

```bash
# Initialise Git (first time only)
git init
git add .
git commit -m "Initial commit — Praxis Learning & Consulting website"

# Connect to your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/praxis-learning.git
git branch -M main
git push -u origin main
```

---

## ✏️ Making Changes

All content, styles, and scripts live in **`index.html`** (single-file site).

To split into separate files in future:
- Move `<style>` contents → `src/style.css`
- Move `<script>` contents → `src/main.js`
- Link them in `index.html`:
  ```html
  <link rel="stylesheet" href="/src/style.css">
  <script type="module" src="/src/main.js"></script>
  ```

---

## 📄 Licence

© 2025 Praxis Learning & Consulting. All rights reserved.
