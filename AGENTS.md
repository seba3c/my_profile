# Agent Instructions: projects-portfolio-template

Agent-focused guide for working with this Astro portfolio template.

---

## Project Identity

- **Name**: `projects-portfolio-template`
- **Description**: A responsive Astro starter portfolio template designed to be easy to customize as a reusable template.
- **Author**: Masoud Soleymani
- **License**: MIT

---

## Tech Stack & Versions

| Technology | Version | Notes |
|------------|---------|-------|
| Astro | `^6.3.1` | Static output (`output: 'static'`), ClientRouter for view transitions |
| Tailwind CSS | `^4.2.2` | Via `@tailwindcss/vite` plugin; uses `@theme` and `@layer` directives |
| TypeScript | `^5.9.3` | Strict mode (`astro/tsconfigs/strict`) |
| Node.js | `>=22.12.0` | Hard engine requirement |
| astro-icon | `^1.1.5` | Phosphor icons (`@iconify-json/ph`) |
| Fonts | fontsource | Inter Variable, Space Grotesk Variable, JetBrains Mono |

---

## Directory Structure

```
├── data/                  # ALL editable content lives here
│   ├── site.ts            # Hero, about, experience, projects, contact data
│   └── nav.ts             # Navigation links for side nav
├── public/                # Static assets (images, favicons)
├── src/
│   ├── components/        # Reusable Astro components (UI building blocks)
│   ├── layouts/           # Layout templates with SEO meta tags
│   ├── pages/             # Routes (index.astro, projects.astro)
│   ├── styles/            # Global CSS (global.css — Tailwind entry + themes)
│   └── config.ts          # Global site config (theme selector)
├── astro.config.mjs       # Astro config (static, tailwind vite plugin, icon integration)
├── tsconfig.json          # Strict TS, path aliases
└── eslint.config.js       # ESLint flat config (JS, TS, Astro)
```

---

## Path Aliases

| Alias | Maps To | Usage |
|-------|---------|-------|
| `@/*` | `src/*` | Components, layouts, styles |
| `@data/*` | `data/*` | Content data files |

---

## Development Workflow

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:4321)
pnpm dev

# Build for production → ./dist/
pnpm build

# Preview production build locally
pnpm preview

# Astro type-check (astro check)
pnpm check

# Lint all source files
pnpm lint

# Auto-fix lint issues
pnpm lint:fix
```

---

## Coding Conventions

### Astro Components

- **Props**: Always define an `interface Props` in the frontmatter.
- **Scripts**: Use `is:inline` for inline scripts that need to run immediately (e.g., theme init, intersection observers). Use standard `<script>` for hydrated/island scripts.
- **Styles**: Use `<style>` for component-scoped styles. Use `<style is:global>` only when necessary (e.g., keyframe animations shared across components). Prefer Tailwind utility classes for layout/styling.
- **Images**: Always use `loading="lazy"` and `decoding="async"` on `<img>` tags.

### Tailwind CSS v4

- **Entry**: `src/styles/global.css` imports `tailwindcss`.
- **Custom theme**: Define custom colors and fonts inside `@theme` block using CSS custom properties (e.g., `--color-accent: var(--color-accent)`).
- **Components layer**: Reusable utility combos live in `@layer components` (e.g., `.nav-link`, `.body-copy`, `.panel-card`).
- **Base layer**: Global resets, animations, and theme CSS variable definitions live in `@layer base`.

### TypeScript

- Strict mode enabled (`astro/tsconfigs/strict`).
- Use `as const` assertions on data objects in `data/` for strong typing.
- Export derived types from `data/site.ts` (e.g., `ProjectArchiveRow`, `FeaturedProject`).

### Content-Driven Approach

> **Critical**: This template is designed so users customize content by editing files in `data/`, **not** by modifying components.

- **`data/site.ts`**: Edit to change all page text (hero, about, experience, projects, contact).
- **`data/nav.ts`**: Edit to change navigation links.
- **`public/`**: Replace images and favicons here.
- **`src/config.ts`**: Change `baseTheme` to switch color palettes.

---

## Theme System

Themes are CSS-only, controlled by a `data-theme` attribute on `<html>`.

### How It Works

1. `src/config.ts` exports `SITE_CONFIG.baseTheme` (e.g., `'default'`).
2. `Layout.astro` / `ArchiveLayout.astro` compute `defaultTheme = \`${baseTheme}-dark\``.
3. An inline script reads `localStorage.getItem('theme')` and sets `document.documentElement.setAttribute('data-theme', ...)`. Falls back to `defaultTheme`.
4. `global.css` defines color variables per `[data-theme="..."]` selector.

### Available Themes

| Theme Key | `data-theme` Value | Accent Color | Background |
|-----------|--------------------|--------------|------------|
| `default` | `default-dark` | `#EAB308` (yellow) | `#121212` |
| `strategic` | `strategic-dark` | `#38BDF8` (sky) | `#0F172A` |
| `innovator` | `innovator-dark` | `#BEF264` (lime) | `#0B0F0E` |
| `midnight` | `midnight-dark` | `#A78BFA` (violet) | `#0F0D29` |
| `impress` | `impress-dark` | `#e35f5f` (red/coral) | `#150303` |

### Adding a New Theme

1. Add a new `[data-theme="yourtheme-dark"]` block in `src/styles/global.css` with `--color-background`, `--color-accent`, `--color-maintext`, `--color-subtext`, `--color-textrain`.
2. Update the allowed values comment in `src/config.ts`.
3. Set `baseTheme` to your new key.

---

## Accessibility & Performance

- **Semantic HTML**: Sections have `aria-labelledby`, nav has `aria-label`, tables have `scope="col"`.
- **Reduced Motion**: `prefers-reduced-motion: reduce` disables animations and view transitions.
- **SEO**: Open Graph tags, canonical URLs, Twitter card meta, semantic headings.
- **Performance**: Static-first, font preloading, lazy images, optimized asset delivery.

---

## Linting & Type Checking

- **ESLint 9** flat config:
  - JS recommended
  - TS recommended (`typescript-eslint`)
  - Astro recommended (`eslint-plugin-astro`)
  - Custom rule: `astro/no-set-html-directive: error`
  - `env.d.ts` disables `@typescript-eslint/triple-slash-reference`
- **Ignored paths**: `dist/`, `.astro/`, `node_modules/`
- **Linted globs**: `src/**/*.{ts,astro,mjs}`, `data/**/*.ts`, `astro.config.mjs`, `eslint.config.js`

---

## VS Code Setup

- **Recommended extensions**: `astro-build.astro-vscode`, `dbaeumer.vscode-eslint`
- **Debug config**: `launch.json` provides a "Development server" configuration that runs `./node_modules/.bin/astro dev`

---

## Common Tasks for Agents

| Task | Where to Change |
|------|-----------------|
| Update page text / content | `data/site.ts` |
| Update navigation links | `data/nav.ts` |
| Change theme colors | `src/config.ts` → `baseTheme`, or add new theme in `src/styles/global.css` |
| Replace images / favicon | `public/` |
| Add a new page | `src/pages/*.astro` + new layout if needed |
| Modify global styles | `src/styles/global.css` |
| Add new component | `src/components/*.astro` |
| Update SEO meta | `src/layouts/Layout.astro` or `ArchiveLayout.astro` |

---

## Deployment Notes

- Output is fully static (`./dist/`).
- Compatible with any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).
- No server-side rendering or API routes.
