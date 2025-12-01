# Vibe – Health Care Desk Landing Page

A single-page marketing site that promotes Health Care Desk’s line of research-backed, all-natural supplements. The experience is built with React 19, TypeScript, and Tailwind CSS 4 on top of Vite 7 for fast local development and deploy-ready static builds.

## Highlights

- Hero, marketing copy, and CTA built with reusable UI primitives.
- Dynamic sections for nutrition pillars, best sellers, trust markers, feature narratives, charitable efforts, and testimonials.
- Centralized product data and imagery sourced from `public/products`.
- Responsive layout that relies on Tailwind CSS utility classes for consistent spacing, typography, and gradients.

## Tech Stack

- React 19 + TypeScript
- Vite 7 with hot-module reloading
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Radix UI primitives (`@radix-ui/react-*`), `class-variance-authority`, and `tailwind-merge`
- Lucide icons for scalable SVG iconography

## Project Structure

```
.
├── public/                 # Static assets referenced at runtime
├── src/
│   ├── components/         # Page sections + UI primitives
│   ├── assets/             # Local SVGs used by Vite
│   ├── App.tsx             # Page composition
│   ├── main.tsx            # React bootstrap
│   └── App.css / index.css # Tailwind layer overrides
├── package.json
└── vite.config.ts
```

Key sections live inside `src/components`:

- `Header`, `HeroSection`, `Footer`: shared chrome and global CTAs.
- `NutritionSolutions`, `BestSellers`, `TrustSection`: product education blocks.
- `FeatureSection`: configurable content block reused four times in `App.tsx`.
- `CharitableInitiatives`, `Testimonials`: social proof.

## Getting Started

Prerequisites: Node.js ≥ 18 and npm ≥ 10.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

## Available Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `npm run dev`  | Start Vite dev server with HMR               |
| `npm run build`| Type-check via `tsc -b` and emit production build |
| `npm run preview` | Serve the built assets for smoke testing |
| `npm run lint` | Run ESLint across the codebase               |

## Customization Tips

- **Copy & Content**: Update copy blocks directly in the component files. Long-form marketing text lives inside `App.tsx`, `HeroSection`, and `NutritionSolutions`.
- **Product catalog**: Modify the `products` array inside `BestSellers.tsx` and replace/append images inside `public/products`.
- **Branding**: Swap logos or illustration assets in `public/`. Paths referenced in JSX must include the leading slash (e.g., `/logo.png`) so Vite resolves them from the public root.
- **Styling**: Tailwind utility classes are embedded in each component. Adjust or extend base styles in `src/index.css` and `src/App.css`.
- **Feature blocks**: `FeatureSection` accepts `title`, `subtitle`, `description`, `image`, and `imagePosition`. Reuse it to add new narrative sections without duplicating markup.

## Deployment

1. Run `npm run build` to produce the optimized assets under `dist/`.
2. Upload the `dist` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).
3. Configure the host to fallback to `index.html` for SPA routing (Vite’s default output is already SPA-ready).

## Troubleshooting

- **Blank images**: Ensure the file exists in `public/` and the JSX `src` starts with `/`.
- **Tailwind classes not applied**: Restart `npm run dev` after editing Tailwind config layers or upgrading plugins so Vite reloads the PostCSS pipeline.
- **Type errors on build**: `npm run build` runs `tsc -b`; fix any reported issues before deploying to guarantee parity between dev and production.
