# Portfolio — Aravind Kompalli

A modern, responsive portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Quick Start

```bash
npm install
npm run dev          # → http://localhost:3000
```

## How to Edit Content

**All site content lives in one file:**  `src/data/site.ts`

| What to change | Where |
|---|---|
| Name, title, tagline, links | `siteConfig` object |
| About paragraph & strengths | `about` object |
| Projects (cards + case studies) | `projects` array |
| Skills | `skillGroups` array |
| Experience | `experience` array |
| Education | `education` array |
| Filter options | `projectFilters` |

### Adding a New Project

Add an entry to the `projects` array in `src/data/site.ts`:

```ts
{
  slug: "my-new-project",          // URL-safe slug
  title: "Project Title",
  subtitle: "Short subtitle",
  tags: ["RAG", "Data Engineering"],  // must match projectFilters
  featured: true,                     // show on homepage?
  problem: "...",
  approach: "...",
  results: ["Bullet 1", "Bullet 2"],
  techStack: ["Python", "Docker"],
  metrics: [{ label: "Metric", value: "99%" }],
  links: [{ label: "GitHub", url: "https://..." }],
}
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, theme)
│   ├── page.tsx                # Home (single-page sections)
│   ├── globals.css             # Tailwind + base styles
│   └── projects/
│       ├── page.tsx            # All projects + filter
│       └── [slug]/page.tsx     # Case study template
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── ProjectCard.tsx
│   ├── MetricsBar.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── FeaturedProjects.tsx
│       ├── Skills.tsx
│       ├── Timeline.tsx
│       └── Contact.tsx
└── data/
    └── site.ts                 # ← ALL content here
```

## Features

- Light / dark mode, system-aware, with a manual toggle
- Responsive, mobile-first layout
- Semantic HTML, visible keyboard focus states, aria labels
- SEO-ready: Open Graph, Twitter cards, robots meta
- Project filters: All, RAG, BI, Data Engineering, Full-Stack
- Case study pages at `/projects/[slug]` (Problem, Approach, Results)
- Draft Terms of Use and Privacy Policy pages at `/terms` and `/privacy`

## Deploy

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new).

### GitHub Pages

Add to `next.config.ts`:

```ts
const nextConfig = { output: "export" };
```

Then `npm run build` and deploy the `out/` directory.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4, with design tokens defined in `src/app/globals.css`
- System font stack (no webfonts loaded)
- Hand-drawn SVG icons in `src/components/icons.tsx` (no icon library)
- next-themes (dark mode)
