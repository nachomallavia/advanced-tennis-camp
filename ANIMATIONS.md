# Animation Guide - Advanced Tennis Camp

This guide explains how we use [Anime.js v4](https://animejs.com) for animations throughout the Advanced Tennis Camp website.

## 📚 Table of Contents

- [Why Anime.js v4?](#why-animejs-v4)
- [Installation & Setup](#installation--setup)
- [Basic Usage](#basic-usage)
- [Animation Utilities](#animation-utilities)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)
- [Migration from Framer Motion](#migration-from-framer-motion)

---

## Why Anime.js v4?

We chose Anime.js v4 because:

- **🪶 Lightweight**: Extremely small footprint (~7kb gzipped)
- **⚡ Performance**: Optimized for modern browsers with native transforms
- **🎯 Simple API**: Intuitive object-based syntax that feels familiar to Framer Motion users
- **🔄 Robust Scroll Triggers**: The new `onScroll` helper makes viewport animations easy
- **🌐 MIT Licensed**: Completely free and open-source for all features

---

## Installation & Setup

Anime.js v4 is already installed and configured globally in our project.

### Global Setup (BaseLayout.astro)

Anime.js functions are available globally throughout the app:

```typescript
import { animate, stagger, onScroll, utils } from "animejs";

// Available globally as:
window.animate
window.stagger
window.onScroll
window.utils
```

### Using in Astro Components

```astro
<script>
  // Access globally
  const { animate } = window as any;
  
  // Or import directly
  import { animate } from "animejs";
  
  animate(".my-element", { opacity: [0, 1], duration: 300 });
</script>
```

---

## Basic Usage

### Simple Animation

```typescript
import { animate } from "animejs";

// Fade in
animate(".box", { opacity: [0, 1], duration: 300 });

// Slide in
animate(".card", { 
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 500,
  ease: "outQuad"
});
```

### Scroll Animations (v4 onScroll)

```typescript
import { animate, onScroll } from "animejs";

// Trigger when enters viewport
animate(".hero-image", { 
  opacity: [0, 1],
  translateY: [30, 0],
  autoplay: onScroll({
    target: ".hero-image",
    margin: "0px 0px -100px 0px"
  })
});
```

### Stagger Animations

```typescript
import { animate, stagger } from "animejs";

// Stagger list items
animate("li", { 
  opacity: [0, 1], 
  translateY: [20, 0],
  delay: stagger(100) // 100ms delay between each
});
```

---

## Animation Utilities

We've created reusable animation utilities in `src/lib/animations.ts`.

### Import Utilities

```typescript
import { 
  fadeIn, 
  slideInFromBottom,
  staggerFadeIn,
  animateOnScroll 
} from "@/lib/animations";
```

### Available Utilities

#### Fade Animations
- `fadeIn(targets, options?)` - Fade in element
- `fadeOut(targets, options?)` - Fade out element

#### Slide Animations
- `slideInFromBottom(targets, options?)`
- `slideInFromTop(targets, options?)`
- `slideInFromLeft(targets, options?)`
- `slideInFromRight(targets, options?)`

#### Scroll Animations
- `animateOnScroll(targets, animationParams, scrollOptions?)`
- `parallaxScroll(targets, distance?)`

---

## Best Practices

### ✅ DO

- **Use transform properties** (`translateX`, `translateY`, `scale`, `rotate`) for best performance.
- **Use milliseconds** for durations (Anime.js standard).
- **Clean up listeners** if you manually add them.
- **Use the `onScroll` helper** for viewport-based animations.

### ❌ DON'T

- **Don't animate layout properties** (`width`, `height`, `top`, `left`) - use transforms instead.
- **Don't over-animate** - subtle is often better for user experience.

---

## Migration from Framer Motion

If you are porting a block from **shadcnblocks**, mapping properties is easy:

| Framer Motion | Anime.js v4 |
| :--- | :--- |
| `animate={{ x: 100 }}` | `animate(".el", { translateX: 100 })` |
| `transition={{ duration: 0.5 }}` | `duration: 500` |
| `whileInView={{ opacity: 1 }}` | `autoplay: onScroll()` |
| `transition={{ staggerChildren: 0.1 }}` | `delay: stagger(100)` |

---

## Questions or Issues?

1. Check the [Anime.js v4 Documentation](https://animejs.com/documentation/)
2. Review existing animations in `Header.astro` for patterns
3. Use the utilities in `src/lib/animations.ts`
4. Refer to the [ANIME_QUICK_REFERENCE.md](./ANIME_QUICK_REFERENCE.md)
