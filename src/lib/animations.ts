/**
 * Anime.js v4 Animation Utilities
 * 
 * Reusable animation patterns and helpers for the Advanced Tennis Camp website.
 * Uses Anime.js v4 (https://animejs.com) for performant, flexible animations.
 */

import { animate, stagger, onScroll, utils } from "animejs";

// ============================================================================
// COMMON ANIMATION OPTIONS
// ============================================================================

/**
 * Standard easing curves used throughout the site
 */
export const easings = {
  smooth: "outQuad",
  snappy: "outQuart", 
  bounce: "outElastic(1, .5)",
  linear: "linear",
} as const;

/**
 * Standard animation durations (in milliseconds for Anime.js)
 */
export const durations = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

/**
 * Fade in animation
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function fadeIn(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    {
      opacity: [0, 1],
      duration: durations.normal,
      ease: easings.smooth,
      ...options,
    }
  );
}

/**
 * Fade out animation
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function fadeOut(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    {
      opacity: [1, 0],
      duration: durations.normal,
      ease: easings.smooth,
      ...options,
    }
  );
}

// ============================================================================
// SLIDE ANIMATIONS
// ============================================================================

/**
 * Slide in from bottom
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function slideInFromBottom(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      translateY: [50, 0],
      opacity: [0, 1],
      duration: durations.slow,
      ease: easings.smooth,
      ...options,
    }
  );
}

/**
 * Slide in from top
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function slideInFromTop(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: durations.slow,
      ease: easings.smooth,
      ...options,
    }
  );
}

/**
 * Slide in from left
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function slideInFromLeft(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: durations.slow,
      ease: easings.smooth,
      ...options,
    }
  );
}

/**
 * Slide in from right
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function slideInFromRight(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      translateX: [50, 0],
      opacity: [0, 1],
      duration: durations.slow,
      ease: easings.smooth,
      ...options,
    }
  );
}

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

/**
 * Scale in animation (zoom in)
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function scaleIn(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: durations.normal,
      ease: easings.smooth,
      ...options,
    }
  );
}

/**
 * Scale out animation (zoom out)
 * @param targets - CSS selector or element(s)
 * @param options - Additional animation options
 */
export function scaleOut(
  targets: string | Element | Element[],
  options: any = {}
) {
  return animate(
    targets,
    { 
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: durations.normal,
      ease: easings.smooth,
      ...options,
    }
  );
}

// ============================================================================
// STAGGER ANIMATIONS
// ============================================================================

/**
 * Stagger fade in for multiple elements
 * @param targets - CSS selector or elements
 * @param staggerDelay - Delay between each element (in milliseconds)
 * @param options - Additional animation options
 */
export function staggerFadeIn(
  targets: string | Element[],
  staggerDelay: number = 100,
  options: any = {}
) {
  return animate(
    targets,
    {
      opacity: [0, 1],
      duration: durations.normal,
      ease: easings.smooth,
      delay: stagger(staggerDelay),
      ...options,
    }
  );
}

/**
 * Stagger slide in from bottom for multiple elements
 * @param targets - CSS selector or elements
 * @param staggerDelay - Delay between each element (in milliseconds)
 * @param options - Additional animation options
 */
export function staggerSlideInFromBottom(
  targets: string | Element[],
  staggerDelay: number = 100,
  options: any = {}
) {
  return animate(
    targets,
    { 
      translateY: [30, 0],
      opacity: [0, 1],
      duration: durations.slow,
      ease: easings.smooth,
      delay: stagger(staggerDelay),
      ...options,
    }
  );
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

/**
 * Animate element on scroll into view using Anime.js v4 onScroll
 * @param targets - CSS selector or element
 * @param animationParams - Animation parameters to apply when in view
 * @param scrollOptions - onScroll options
 */
export function animateOnScroll(
  targets: string | Element,
  animationParams: any,
  scrollOptions: any = {}
) {
  return animate(targets, {
    ...animationParams,
    autoplay: onScroll({
      target: typeof targets === 'string' ? utils.$(targets)[0] : targets,
      ...scrollOptions
    })
  });
}

/**
 * Parallax scroll effect using Anime.js v4 onScroll sync mode
 * @param targets - CSS selector or element
 * @param distance - Distance to move (in pixels)
 */
export function parallaxScroll(
  targets: string | Element,
  distance: number = 100
) {
  return animate(targets, {
    translateY: [0, distance],
    autoplay: onScroll({
      sync: true,
      target: typeof targets === 'string' ? utils.$(targets)[0] : targets,
    })
  });
}

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

/**
 * Scale on hover effect
 * @param element - Element to add hover effect to
 * @param scale - Scale amount (default 1.05)
 */
export function scaleOnHover(element: Element, scale: number = 1.05) {
  element.addEventListener("mouseenter", () => {
    animate(element, { scale, duration: durations.fast });
  });
  
  element.addEventListener("mouseleave", () => {
    animate(element, { scale: 1, duration: durations.fast });
  });
}

/**
 * Lift on hover effect (scale + shadow)
 * @param element - Element to add hover effect to
 */
export function liftOnHover(element: Element) {
  element.addEventListener("mouseenter", () => {
    animate(
      element, 
      { 
        scale: 1.03,
        translateY: -5,
        duration: durations.fast,
        ease: easings.smooth
      }
    );
  });
  
  element.addEventListener("mouseleave", () => {
    animate(
      element, 
      { 
        scale: 1,
        translateY: 0,
        duration: durations.fast,
        ease: easings.smooth
      }
    );
  });
}

// ============================================================================
// SPRING ANIMATIONS
// ============================================================================

/**
 * Spring scale animation
 * @param targets - CSS selector or element(s)
 * @param springConfig - Spring configuration string
 */
export function springScale(
  targets: string | Element | Element[],
  springConfig: string = "outElastic(1, .5)"
) {
  return animate(
    targets,
    { 
      scale: [0, 1],
      ease: springConfig
    }
  );
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Wait for a duration (useful for sequencing animations)
 * @param ms - Duration in milliseconds
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
