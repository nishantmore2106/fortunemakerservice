import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateContrastRatio,
  meetsWcagAA,
  parseHexColor,
  calculateRelativeLuminance,
} from './contrast';

describe('Accessibility & Contrast Verification', () => {
  test('parses hex colors correctly', () => {
    assert.deepEqual(parseHexColor('#FFFFFF'), [255, 255, 255]);
    assert.deepEqual(parseHexColor('#777187'), [119, 113, 135]);
    assert.deepEqual(parseHexColor('#625C71'), [98, 92, 113]);
  });

  test('calculates luminance for black and white accurately', () => {
    assert.equal(calculateRelativeLuminance(0, 0, 0), 0);
    assert.equal(calculateRelativeLuminance(255, 255, 255), 1);
  });

  test('verifies that default #777187 falls slightly short of 4.5:1 on soft purple #FAF9FF', () => {
    const ratio = calculateContrastRatio('#777187', '#FAF9FF');
    // ~4.46:1
    assert.ok(ratio < 4.5);
    assert.equal(meetsWcagAA('#777187', '#FAF9FF', false), false);
  });

  test('verifies that refined secondary #625C71 achieves full WCAG AA (> 6.0:1) on #FAF9FF and #FFFFFF', () => {
    const ratioOnWhite = calculateContrastRatio('#625C71', '#FFFFFF');
    const ratioOnSoftPurple = calculateContrastRatio('#625C71', '#FAF9FF');

    assert.ok(ratioOnWhite >= 6.3, `Expected >= 6.3, got ${ratioOnWhite}`);
    assert.ok(ratioOnSoftPurple >= 6.0, `Expected >= 6.0, got ${ratioOnSoftPurple}`);

    assert.equal(meetsWcagAA('#625C71', '#FFFFFF'), true);
    assert.equal(meetsWcagAA('#625C71', '#FAF9FF'), true);
  });

  test('verifies that primary text #181326 delivers high-contrast WCAG AAA (> 13:1)', () => {
    const ratio = calculateContrastRatio('#181326', '#FAF9FF');
    assert.ok(ratio > 13.0);
    assert.equal(meetsWcagAA('#181326', '#FAF9FF'), true);
  });
});
