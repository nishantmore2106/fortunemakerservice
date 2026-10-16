import React, { useEffect, useRef, useState } from 'react';
import { getFadeInStyle, DEFAULT_DURATION, DEFAULT_DISTANCE } from '../utils/animation';

export interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'none';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  as?: React.ElementType;
  id?: string;
  style?: React.CSSProperties;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
  direction = 'up',
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  as: Component = 'div',
  id,
  style: userStyle,
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener?.('change', handleChange);
      return () => mediaQuery.removeEventListener?.('change', handleChange);
    }
  }, []);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Fallback if IntersectionObserver is unavailable
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const animationStyle = getFadeInStyle({
    isVisible,
    delay,
    duration,
    distance,
    direction,
    prefersReducedMotion,
  });

  return (
    <Component
      ref={elementRef}
      id={id}
      className={className}
      style={{
        ...animationStyle,
        ...userStyle,
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Custom hook for components that prefer attaching visibility directly to an existing ref
 */
export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce !== false) {
            observer.unobserve(el);
          }
        } else if (options?.triggerOnce === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.08,
        rootMargin: options?.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
}
