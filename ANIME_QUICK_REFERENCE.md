# Anime.js v4 Quick Reference Guide

This guide provides a quick overview of how to use **Anime.js v4** for animations in this project. Anime.js v4 is our primary animation library, replacing Motion.js.

## 🚀 Getting Started

### 1. Using Pre-built Utilities (Recommended)

Most common animations are already wrapped in `src/lib/animations.ts`.

```typescript
import { fadeIn, slideInFromBottom, staggerFadeIn } from "@/lib/animations";

// Simple fade
fadeIn(".element");

// Staggered entrance on scroll
staggerFadeIn(".grid-item", 100, {
  autoplay: onScroll({ target: ".grid-container" })
});
```

### 2. Framer Motion to Anime.js v4 Translation

If you're coming from Framer Motion (used in shadcnblocks), use this guide:

| Framer Motion (React) | Anime.js v4 (Vanilla) |
| :--- | :--- |
| `<motion.div animate={{ x: 100 }}>` | `animate(".el", { translateX: 100 })` |
| `transition={{ duration: 0.5 }}` | `{ duration: 500 }` (Note: ms, not s) |
| `whileInView={{ opacity: 1 }}` | `autoplay: onScroll()` |
| `viewport={{ margin: "-100px" }}` | `onScroll({ margin: "-100px" })` |
| `variants={{ ... }}` | Use standard object mapping |
| `transition={{ staggerChildren: 0.1 }}` | `delay: stagger(100)` |

---

## 🛠 Basic Animation Syntax

### Standard Animation
```javascript
import { animate } from "animejs";

animate(".box", {
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800,
  ease: 'outQuart'
});
```

### Staggering
```javascript
import { animate, stagger } from "animejs";

animate(".item", {
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: stagger(100), // 100ms between each element
  duration: 500,
  ease: 'outQuad'
});
```

---

## 🖱 Scroll Animations (v4)

Anime.js v4 introduces a powerful `onScroll` helper.

### Enter/Leave Triggers
```javascript
import { animate, onScroll } from "animejs";

animate(".element", {
  opacity: [0, 1],
  translateY: [20, 0],
  autoplay: onScroll({
    target: ".element",
    margin: "0px 0px -100px 0px"
  })
});
```

### Scroll Sync (Parallax/Scrubbing)
```javascript
import { animate, onScroll } from "animejs";

animate(".parallax-bg", {
  translateY: [0, 100],
  autoplay: onScroll({
    sync: true, // Animates based on scroll position
    target: ".section"
  })
});
```

---

## 🎨 Common Properties Mapping

*   **Positions**: `translateX`, `translateY`, `translateZ`
*   **Scale**: `scale`, `scaleX`, `scaleY`
*   **Rotation**: `rotate`, `rotateX`, `rotateY`, `rotateZ`
*   **Skew**: `skewX`, `skewY`
*   **Opacity**: `opacity`
*   **Colors**: `backgroundColor`, `color`, `borderColor`

---

## 📱 Responsive Animations with Scope

Anime.js v4 introduces Scopes for media-query aware animations.

### Creating a Scope
```javascript
import { animate, onScroll, createScope } from "animejs";

createScope({
  mediaQueries: {
    isSmall: '(max-width: 768px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
}).add((self) => {
  if (!self) return;
  
  const { isSmall, reduceMotion } = self.matches;
  
  // Animations automatically react to media query changes
  animate('.element', {
    translateY: [0, isSmall ? 50 : 100],
    duration: reduceMotion ? 0 : 800,
  });
});
```

**Benefits:**
- Animations automatically re-initialize on media query changes
- Centralized responsive animation logic
- Built-in support for motion preferences
- Batch revert/refresh capabilities

---

## 💡 Best Practices

1.  **Use Milliseconds**: Unlike Framer Motion/CSS, Anime.js uses milliseconds for durations and delays.
2.  **Use CamelCase**: For CSS properties (`backgroundColor` instead of `background-color`).
3.  **Global Access**: For small inline scripts, `animate`, `stagger`, and `onScroll` are available on the `window` object.
4.  **Hardware Acceleration**: Prefer `translate`, `scale`, and `rotate` over `top`, `left`, `width`, or `height`.

---

## 🔗 Resources
- [Official Anime.js v4 Documentation](https://animejs.com/documentation/)
- [Project Animation Utilities Source](./src/lib/animations.ts)
