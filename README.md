# Varia Studio

Varia Studio is an independent applied agricultural technology studio connecting agricultural science, research, data, AI and software.

## Positioning
The studio works with agricultural businesses, AgTech companies, research institutions and technology partners through three engagement paths: a Data & Feasibility Sprint, an Applied Prototype Sprint, and milestone-based Technical Delivery Partnerships. Its work may involve:
- Computer vision and machine-learning evaluation/integration
- Geospatial data engineering and remote-sensing workflows
- Soil and environmental data pipelines
- Backend APIs, dashboards and decision-support software

## Engagement principles
- Start with a bounded paid assessment when the problem or data readiness is uncertain.
- Define deliverables, acceptance criteria, timeline, fee, assumptions and exclusions before implementation.
- Do not promise field validation, production readiness or model performance without evidence.
- Varia is founder-led and based in Iran. International engagements require case-by-case legal, client and payment-provider eligibility checks.

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
