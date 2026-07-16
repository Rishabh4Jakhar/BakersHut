# BakersHut

One-page family bakery website built with Next.js, TypeScript, Tailwind CSS, and Embla Carousel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Embla Carousel
- next/image

## Routes

- `/` Single-page home with anchor sections
- `/about`, `/menu`, `/gallery`, `/contact` redirect into the matching anchor section

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run lint` runs ESLint

## Content source

- Shared bakery content, navigation, and design tokens live in `src/lib/site.ts`.
- The hero, about, menu, gallery, reviews, and visit sections are all on `src/app/page.tsx`.
- Reusable UI pieces live in `src/components/`.
- Reviews are served from `src/app/api/reviews/route.ts`.
- SEO routes are implemented in `src/app/robots.ts` and `src/app/sitemap.ts`.
