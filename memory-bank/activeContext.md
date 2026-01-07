# Active Context: Advanced Tennis Camp

## Current Work Focus
- Completed the direction-aware hover effect implementation using Anime.js v4.

## Recent Changes
- Removed Raleway font import and updated font stack to use Archivo only for improved performance.
- Updated all Tailwind `neutral-*` color classes across the codebase.
- Updated hardcoded RGBA values in `src/components/Header.astro` to match the `neutral-100` color for smooth background animations.
- Extracted `CampHero.astro` component from `src/pages/en/the-camp.astro` and `src/pages/le-camp.astro`.
- Centralized camp hero structure and added `data-` attributes for future animations.
- Updated both English and French "The Camp" pages to use the new `CampHero` component, ensuring consistency by adding the hero image to the French version.
- Refactored Hero parallax animations to use Anime.js v4 `createScope()` for responsive behavior.
- Implemented media query-aware animations with `isSmall` (max-width: 768px) and `reduceMotion` queries.
- Hero animations now adapt automatically: smaller scale/translateY values on mobile, respect user motion preferences.
- Implemented a parallax scroll effect in `src/components/sections/Hero.astro` using Anime.js v4 `onScroll` (sync mode).
- Created `src/components/sections/Hero.astro` to modularize the landing page hero section.

## Next Steps
- Implement animations in `CampHero.astro` using Anime.js v4.
- Verify the animation smoothness on the live site or preview.

## Active Decisions
- Used `animate` from `animejs` v4 as per project conventions in `ANIME_QUICK_REFERENCE.md`.
- Stored the component in `src/components/ui/` as per user preference.
