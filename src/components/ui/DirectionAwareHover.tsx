import React, { useRef } from 'react';
import { animate } from 'animejs';
import { cn } from '@/lib/utils';

interface DirectionAwareHoverProps {
  imageUrl: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  childrenClassName?: string;
  clickable?: boolean;
}

/**
 * DirectionAwareHover component using Anime.js v4.
 * Animates an overlay darkness and image zoom + slight movement based on entry direction.
 */
export const DirectionAwareHover = ({
  imageUrl,
  href,
  children,
  className,
  imageClassName,
  childrenClassName,
  clickable = true,
}: DirectionAwareHoverProps) => {
  

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  /**
   * Calculates the direction of the mouse relative to the element.
   * 0: top, 1: right, 2: bottom, 3: left
   */
  const getDirection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
    const { width, height, top, left } = obj.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * (width > height ? height / width : 1);
    const y = (e.clientY - top - height / 2) * (height > width ? width / height : 1);
    const direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
    return direction;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !overlayRef.current || !imageRef.current) return;

    const direction = getDirection(e, containerRef.current);
    
    // Image movement based on entry direction
    const movement = 15;
    const translations = [
      { x: 0, y: movement },  // top
      { x: -movement, y: 0 }, // right
      { x: 0, y: -movement }, // bottom
      { x: movement, y: 0 },  // left
    ];

    const trans = translations[direction];
    
    // Animate overlay darkness (opacity)
    animate(overlayRef.current, {
      opacity: 1,
      duration: 300,
      ease: 'outQuad'
    });

    // Animate image zoom and translation
    animate(imageRef.current, {
      scale: 1.1,
      translateX: trans.x,
      translateY: trans.y,
      duration: 300,
      ease: 'outQuad'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !overlayRef.current || !imageRef.current) return;

    // Animate overlay back to transparent
    animate(overlayRef.current, {
      opacity: 0,
      duration: 300,
      ease: 'outQuad'
    });

    // Reset image zoom and translation
    animate(imageRef.current, {
      scale: 1,
      translateX: 0,
      translateY: 0,
      duration: 300,
      ease: 'outQuad'
    });
  };

  const content = (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group/card relative w-full h-full overflow-hidden bg-transparent rounded-xs",
        clickable ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <div className="relative h-full w-full">
        <img
          ref={imageRef}
          src={imageUrl}
          alt="background"
          className={cn(
            "h-full w-full object-cover object-center transition-none",
            imageClassName
          )}
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-800/50 via-neutral-800/10 to-transparent z-10 pointer-events-none mix-blend-multiply" />
        
        {/* Animated extra dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/20 z-11 pointer-events-none opacity-0"
        />
        
        <div className={cn("absolute inset-0 z-20", childrenClassName)}>
          {children}
        </div>
      </div>
    </div>
  );

  if (href && clickable) {
    return (
      <a href={href} className="block w-full h-full no-underline">
      {content}
    </a>
  );
}

return <div className="block w-full h-full no-underline">{content}</div>;
};
