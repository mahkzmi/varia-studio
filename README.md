# Varia Studio

Varia Studio is an independent, founder-led applied AI and geospatial engineering studio focused on agriculture, soil and environmental data.

## Positioning
The studio works with AgTech product teams, drone and geospatial firms, and soil/environment consultancies on scoped technical engagements involving:
- Computer vision and machine-learning evaluation/integration
- Geospatial data engineering and remote-sensing workflows
- Soil and environmental data pipelines
- Backend APIs, dashboards and decision-support software

Varia Vision and Varia Carbon are internal technical assets at different validation stages. They are not represented as independently field-validated production products.

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
- `src/App.jsx` — website sections and interactions
- `src/styles.css` — brand system, layout and responsive styles
- `src/main.jsx` — React entry point
- `public/` — favicon, founder image, robots.txt and sitemap.xml

## Evidence and claim governance
- Internal model benchmarks must never be presented as independent or customer-field validation.
- Customer names, logos, quotes, datasets and results require permission.
- Varia Carbon is not currently offered for MRV, carbon-credit issuance or high-stakes soil decisions.
- Varia Vision is an experimental prototype; production readiness and field performance are not claimed.
- Do not publish customer outcomes until they are documented and approved.

## Deploy
Vercel:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

Product APIs and demos are deployed separately from this public website.
