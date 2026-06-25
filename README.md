# Royal Kids Academy One-Page Website

Single-page bilingual (English + Tamil) marketing website for Royal Kids Academy, built with React + Vite and optimized for social sharing.

## Included Features

- Premium branded one-page design (navy + gold)
- Bilingual content toggle (English/Tamil)
- Course cards for all offered programs
- Contact actions: direct call and WhatsApp
- Social share metadata (Open Graph + Twitter)
- GitHub Pages deployment scripts

## Course Media Sources

- Logo image: `public/images/royal-kids-logo.jpg`
- Course brochure: `public/images/courses-brochure.jpg`
- Gallery uses free Unsplash images in `src/App.jsx`

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Update `homepage` in `package.json` with your GitHub username.
2. If your repository name is different, update `base` in `vite.config.js`.
3. Deploy:

```bash
npm run deploy
```

## Main Files

- `src/App.jsx`: page content, language toggle, sections
- `src/App.css`: visual styling and responsive layout
- `src/index.css`: global theme and typography
- `index.html`: social metadata and page title
- `vite.config.js`: GitHub Pages base path
