import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { getFadeInStyle, getDefaultObserverConfig } from './animation';

describe('Animation Utilities', () => {
  test('returns hidden state with subtle downward offset when isVisible is false', () => {
    const style = getFadeInStyle({ isVisible: false, distance: 20 });
    assert.equal(style.opacity, 0);
    assert.equal(style.transform, 'translate3d(0, 20px, 0)');
    assert.equal(style.transitionDuration, '700ms');
    assert.equal(style.transitionTimingFunction, 'cubic-bezier(0.16, 1, 0.3, 1)');
  });

  test('returns visible state at origin when isVisible is true', () => {
    const style = getFadeInStyle({ isVisible: true, distance: 20 });
    assert.equal(style.opacity, 1);
    assert.equal(style.transform, 'translate3d(0, 0, 0)');
    assert.equal(style.willChange, 'auto');
  });

  test('handles direction none with pure opacity fade', () => {
    const styleHidden = getFadeInStyle({ isVisible: false, direction: 'none' });
    assert.equal(styleHidden.opacity, 0);
    assert.equal(styleHidden.transform, 'translate3d(0, 0, 0)');
  });

  test('handles direction down properly', () => {
    const styleHidden = getFadeInStyle({ isVisible: false, direction: 'down', distance: 16 });
    assert.equal(styleHidden.opacity, 0);
    assert.equal(styleHidden.transform, 'translate3d(0, -16px, 0)');
  });

  test('respects prefersReducedMotion by disabling transform and transitions', () => {
    const style = getFadeInStyle({ isVisible: false, prefersReducedMotion: true });
    assert.equal(style.opacity, 1);
    assert.equal(style.transform, 'none');
    assert.equal(style.transition, 'none');
  });

  test('applies custom delay and duration', () => {
    const style = getFadeInStyle({ isVisible: true, delay: 150, duration: 900 });
    assert.equal(style.transitionDelay, '150ms');
    assert.equal(style.transitionDuration, '900ms');
  });

  test('generates sensible default observer configuration', () => {
    const config = getDefaultObserverConfig();
    assert.equal(config.threshold, 0.1);
    assert.equal(config.rootMargin, '0px 0px -40px 0px');
    assert.equal(config.triggerOnce, true);

    const custom = getDefaultObserverConfig({ threshold: 0.25 });
    assert.equal(custom.threshold, 0.25);
    assert.equal(custom.rootMargin, '0px 0px -40px 0px');
  });
});
