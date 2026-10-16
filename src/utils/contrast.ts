/**
 * Color and contrast utilities for verifying WCAG 2.1 accessibility standards
 */

export function calculateRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const sRGB = val / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function parseHexColor(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    return [
      parseInt(cleanHex[0] + cleanHex[0], 16),
      parseInt(cleanHex[1] + cleanHex[1], 16),
      parseInt(cleanHex[2] + cleanHex[2], 16),
    ];
  }
  return [
    parseInt(cleanHex.slice(0, 2), 16),
    parseInt(cleanHex.slice(2, 4), 16),
    parseInt(cleanHex.slice(4, 6), 16),
  ];
}

export function calculateContrastRatio(foregroundHex: string, backgroundHex: string): number {
  const [r1, g1, b1] = parseHexColor(foregroundHex);
  const [r2, g2, b2] = parseHexColor(backgroundHex);

  const l1 = calculateRelativeLuminance(r1, g1, b1);
  const l2 = calculateRelativeLuminance(r2, g2, b2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

export function meetsWcagAA(foregroundHex: string, backgroundHex: string, isLargeText = false): boolean {
  const ratio = calculateContrastRatio(foregroundHex, backgroundHex);
  const minRatio = isLargeText ? 3.0 : 4.5;
  return ratio >= minRatio;
}
