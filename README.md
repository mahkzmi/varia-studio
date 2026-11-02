# Varia Studio — Version 2.0

A highly customized, responsive single-page studio website built with React, Vite, Tailwind CSS, and lucide-react.

## Run locally

Requires Node.js 18+.

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

## Customize the entire website

**Most content and brand settings live in one file:**

`src/data/siteConfig.js`

You can edit:
- Brand name, monogram, positioning and footer
- Theme colors
- Navigation labels and anchors
- Hero headline, description and CTA labels
- Intro copy
- All product names, descriptions, statuses, metrics, methodologies, caveats, stack tags and links
- Method steps and capability tags
- Founder bio and statement
- Contact email and social links

Theme values are applied as CSS variables at runtime. Tailwind utility colors also map to those variables.

## Product details

Each project card opens an interactive detail panel. The product data is driven by `siteConfig.js`; add, remove, or edit product objects there.

## Important launch checklist

1. Replace the LinkedIn homepage URL with the founder's actual profile URL.
2. Confirm the Varia Vision public URL.
3. Add a public Trait-Bridge research or product URL when ready.
4. Verify all model metrics, dataset descriptions, validation protocols, and claims before publication.
5. Consider adding a custom domain and a real Open Graph preview image before launch.

## Deploy

Vercel / Netlify:
- Build command: `npm run build`
- Output directory: `dist`

This is a static frontend. No backend or database is required.
