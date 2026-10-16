import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateMarketplaceDiagnostic } from './calculator.ts';

test('diagnostic gives accurate program recommendation for new sellers', () => {
  const result = evaluateMarketplaceDiagnostic({
    marketplace: 'amazon',
    monthlyRevenueTier: 'new',
    primaryBottleneck: 'starting_out',
    activeCatalogCount: 5,
  });

  assert.equal(result.recommendedProgram, 'FortuneMakers Academy');
  assert.equal(result.riskCategory, 'High Friction');
  assert.ok(result.overallHealthScore < 50);
  assert.ok(result.keyActionItems.length >= 3);
});

test('diagnostic scales estimated operations hours for multi-marketplace catalogs', () => {
  const single = evaluateMarketplaceDiagnostic({
    marketplace: 'amazon',
    monthlyRevenueTier: '500k-2m',
    primaryBottleneck: 'high_acos',
    activeCatalogCount: 120,
  });

  const multi = evaluateMarketplaceDiagnostic({
    marketplace: 'multi',
    monthlyRevenueTier: '500k-2m',
    primaryBottleneck: 'high_acos',
    activeCatalogCount: 120,
  });

  assert.ok(multi.estimatedOperationsTimeSavedHoursMonthly > single.estimatedOperationsTimeSavedHoursMonthly);
  assert.equal(single.recommendedProgram, 'Marketplace Management');
});
