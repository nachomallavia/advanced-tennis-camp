# System Patterns: Advanced Tennis Camp

## Architecture
- Framework: Astro (Static Site Generation).
- Language: TypeScript.
- Styles: Tailwind CSS (v4 with Vite plugin).
- Components:
  - Astro components for static structure.
  - React components for complex interactivity (e.g., Aceternity UI).
  - Custom UI library (Starwind UI) for reusable elements.

## Key Technical Decisions
- Using `@tailwindcss/vite` for styling.
- Using `@astrojs/react` for React component support.
- Using `animejs` v4 for animations (with `createScope()` for responsive animations).
- Implementing direction-aware hover effects using Anime.js v4.
- Using Anime.js v4 `onScroll` with `sync: true` for scroll-synced parallax effects.

## Component Relationships
- `BaseLayout.astro` provides the common page structure.
- Pages in `src/pages` use sections from `src/components/sections`.
- UI components in `src/components/starwind` are used throughout sections.


