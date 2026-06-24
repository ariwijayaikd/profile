# Portofolio ariwijayaikd

Portofolio pribadi sederhana yang di-deploy ke GitHub Pages.

## Tech Stack

- React 19
- TypeScript
- Vite

## Development

```bash
npm install
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy ke GitHub Pages

1. Di repo GitHub, buka **Settings → Pages**
2. Set **Source** ke **GitHub Actions**
3. Push ke branch `main` — workflow akan build dan deploy otomatis

Custom domain: `ariwijayaikd.me` (via `public/CNAME`)

## Struktur

```
src/
  components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
  data/         # Data proyek & keahlian
  App.tsx       # Layout utama
  main.tsx      # Entry point
  styles.css    # Global styles
```
