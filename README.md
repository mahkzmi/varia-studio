# Varia Studio

Applied AI and geospatial engineering studio focused on agriculture, soil and environmental data.

## Stack
- React 18
- Vite 6
- Tailwind CSS 3
- lucide-react

## Local development
Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The deployable output is generated in `dist/`.

## Project structure
- `src/App.jsx` — current one-page website sections and interactions
- `src/styles.css` — site styling and responsive behavior
- `src/main.jsx` — React entry point
- `src/data/siteConfig.js` — legacy content configuration retained for reference; it does not currently drive the live App.jsx page
- `public/` — favicon, founder image, robots.txt and sitemap.xml
- `docs/` — internal company-readiness, website and sales strategy documents

## Content and claim governance
Before publishing product metrics, customer names, case studies or performance claims:
1. Confirm dataset and model provenance.
2. Document train/validation/test methodology and leakage controls.
3. Label internal benchmarks separately from independent/customer/field validation.
4. Obtain written permission for customer names, logos, quotes and data.
5. Do not imply production readiness, carbon-credit eligibility or registry-grade MRV without evidence.

## Deploy
Vercel:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

This repository contains the public website frontend. Product APIs and demos are deployed separately.
