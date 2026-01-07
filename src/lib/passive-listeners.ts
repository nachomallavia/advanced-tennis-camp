/**
 * Patches addEventListener to make scroll-blocking events passive by default
 * This prevents the browser warning:
 * "[Violation] Added non-passive event listener to a scroll-blocking event"
 */

// Store the original addEventListener
const originalAddEventListener = EventTarget.prototype.addEventListener;

// List of events that should be passive by default
const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove', 'mousewheel'];

// Override addEventListener
EventTarget.prototype.addEventListener = function(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  // Check if this is a scroll-blocking event
  const shouldBePassive = passiveEvents.includes(type);
  
  if (shouldBePassive) {
    // Convert options to object format if needed
    let optionsObj: AddEventListenerOptions;
    
    if (typeof options === 'boolean') {
      optionsObj = { capture: options, passive: true };
    } else if (options) {
      // If passive is explicitly set to false, respect that
      // Otherwise, default to true
      optionsObj = { ...options, passive: options.passive !== false };
    } else {
      optionsObj = { passive: true };
    }
    
    return originalAddEventListener.call(this, type, listener, optionsObj);
  }
  
  // For non-scroll events, use original behavior
  return originalAddEventListener.call(this, type, listener, options);
};

export { };


