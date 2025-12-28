# Active Context: Advanced Tennis Camp

## Current Work Focus
- Completed the direction-aware hover effect implementation using Anime.js v4.

## Recent Changes
- Implemented a parallax scroll effect in `src/components/sections/Hero.astro` using Anime.js v4 `onScroll` (sync mode).
- The hero video background now scales (1.1x) and moves at a different rate than the text content during scroll.
- Created `src/components/sections/Hero.astro` to modularize the landing page hero section.

## Next Steps
- Verify the animation smoothness on the live site or preview.
- Consider applying the same effect to other sections if requested.

## Active Decisions
- Used `animate` from `animejs` v4 as per project conventions in `ANIME_QUICK_REFERENCE.md`.
- Stored the component in `src/components/ui/` as per user preference.
