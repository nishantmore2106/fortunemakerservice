import React from 'react';

export interface AnimationOptions {
  isVisible: boolean;
  delay?: number; // ms
  duration?: number; // ms
  distance?: number; // px
  direction?: 'up' | 'down' | 'none';
  prefersReducedMotion?: boolean;
  easing?: string;
}

export const DEFAULT_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';
export const DEFAULT_DURATION = 700;
export const DEFAULT_DISTANCE = 24;

/**
 * Calculates CSS properties for smooth, hardware-accelerated fade-in animations.
 * Honors prefers-reduced-motion for accessibility.
 */
export function getFadeInStyle({
  isVisible,
  delay = 0,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
  direction = 'up',
  prefersReducedMotion = false,
  easing = DEFAULT_EASING,
}: AnimationOptions): React.CSSProperties {
  if (prefersReducedMotion) {
    return {
      opacity: 1,
      transform: 'none',
      transition: 'none',
    };
  }

  const getTransform = () => {
    if (isVisible || direction === 'none') {
      return 'translate3d(0, 0, 0)';
    }
    if (direction === 'up') {
      return `translate3d(0, ${distance}px, 0)`;
    }
    if (direction === 'down') {
      return `translate3d(0, -${distance}px, 0)`;
    }
    return 'translate3d(0, 0, 0)';
  };

  return {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: easing,
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };
}

export interface ObserverConfig {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
}

export function getDefaultObserverConfig(overrides?: Partial<ObserverConfig>): ObserverConfig {
  return {
    threshold: overrides?.threshold ?? 0.1,
    rootMargin: overrides?.rootMargin ?? '0px 0px -40px 0px',
    triggerOnce: overrides?.triggerOnce ?? true,
  };
}
