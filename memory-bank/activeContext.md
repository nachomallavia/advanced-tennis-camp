# Active Context: Advanced Tennis Camp

## Current Work Focus
- Completed the direction-aware hover effect implementation using Anime.js v4.

## Recent Changes
- Refactored Hero parallax animations to use Anime.js v4 `createScope()` for responsive behavior.
- Implemented media query-aware animations with `isSmall` (max-width: 768px) and `reduceMotion` queries.
- Hero animations now adapt automatically: smaller scale/translateY values on mobile, respect user motion preferences.
- Implemented a parallax scroll effect in `src/components/sections/Hero.astro` using Anime.js v4 `onScroll` (sync mode).
- Created `src/components/sections/Hero.astro` to modularize the landing page hero section.

## Next Steps
- Verify the animation smoothness on the live site or preview.
- Consider applying the same effect to other sections if requested.

## Active Decisions
- Used `animate` from `animejs` v4 as per project conventions in `ANIME_QUICK_REFERENCE.md`.
- Stored the component in `src/components/ui/` as per user preference.
