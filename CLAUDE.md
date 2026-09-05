# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start Next.js dev server
- `pnpm build` — production build
- `pnpm lint` — Biome (lint + format)
- No test framework is configured

## Architecture

Personal portfolio/blog built with **Next.js 16 (App Router)** and **TypeScript**.

### Routing

- `/` — home page (`src/app/page.tsx`): bio, article listing
- `/[slug]` — article pages (`src/app/[slug]/page.tsx`): dynamically generated from markdown files

All pages use **server components** and articles are statically generated at build time via `generateStaticParams()`.

### Content Pipeline

Articles live as markdown files in `src/articles/` with YAML frontmatter (`title`, `age`, `year`). Processing chain:

1. `gray-matter` extracts frontmatter
2. `remark` / `rehype` converts markdown to HTML (with heading slugs, raw HTML support)
3. Table of contents auto-generated from h2 headings
4. Rendered via `dangerouslySetInnerHTML`

Metadata extraction is in `src/utils/getMetadata.ts`.

### Styling

- **CSS Modules + SCSS** — every component has a co-located `.module.scss` file
- **Global styles** in `src/styles/globals.scss` (element resets)
- **Fonts** loaded via `next/font/google` (Inter, Space Grotesk) in `src/app/layout.tsx`
- **Variables/mixins** in `src/styles/variables.scss`:
  - `@mixin dark` / `@mixin light` — theme switching via `[data-theme]` attribute
  - `@mixin mobile` — responsive breakpoint at 768px
  - `@mixin link` — standard link color (#155FDD)
- SCSS files use `@use` (not `@import`) for variable includes
- No external CSS framework (no Tailwind, etc.)

### SVG Handling

SVGs are imported as React components via `@svgr/webpack` (configured in `next.config.mjs` for both Turbopack and webpack).

### Path Aliases

Configured in `tsconfig.json`: `@/*` maps to `src/*`, with additional aliases for `@/components/*`, `@/styles/*`, `@/utils/*`.

### Components

Barrel-exported from `src/components/index.ts`. Key components: `Page` (article wrapper with fixed nav), `Link` (Next.js link wrapper), `Subtle` (secondary text), `ExternalLink` (new-tab links).
