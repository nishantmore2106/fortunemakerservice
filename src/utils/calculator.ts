/**
 * Interactive Diagnostic & Marketplace Operations Estimator
 * Computes illustrative operational health scores and tailored roadmap tracks.
 */

export interface MarketplaceAuditInput {
  marketplace: 'amazon' | 'flipkart' | 'meesho' | 'multi';
  monthlyRevenueTier: 'new' | '100k-500k' | '500k-2m' | '2m-10m' | '10m+';
  primaryBottleneck: 'catalog_suppression' | 'high_acos' | 'inventory_stockout' | 'policy_compliance' | 'starting_out';
  activeCatalogCount: number;
}

export interface AuditRecommendation {
  overallHealthScore: number; // 0 - 100
  riskCategory: 'High Friction' | 'Moderate Optimization Needed' | 'Growth Ready';
  recommendedProgram: 'Marketplace Management' | 'Sourcing & Catalog Build' | 'FortuneMakers Academy' | 'End-to-End Enterprise';
  keyActionItems: string[];
  estimatedOperationsTimeSavedHoursMonthly: number;
  catalogEfficiencyRating: string;
}

export function evaluateMarketplaceDiagnostic(input: MarketplaceAuditInput): AuditRecommendation {
  let baseScore = 65;
  let timeSavedHours = 40;

  // Bottleneck adjustments
  switch (input.primaryBottleneck) {
    case 'starting_out':
      baseScore = 40;
      timeSavedHours = 55;
      break;
    case 'catalog_suppression':
      baseScore = 52;
      timeSavedHours = 35;
      break;
    case 'high_acos':
      baseScore = 58;
      timeSavedHours = 45;
      break;
    case 'inventory_stockout':
      baseScore = 60;
      timeSavedHours = 30;
      break;
    case 'policy_compliance':
      baseScore = 48;
      timeSavedHours = 50;
      break;
  }

  // Active catalog count factor
  if (input.activeCatalogCount > 200) {
    timeSavedHours += 25;
  } else if (input.activeCatalogCount > 50) {
    timeSavedHours += 15;
  }

  // Multi-marketplace adjustment
  if (input.marketplace === 'multi') {
    timeSavedHours = Math.round(timeSavedHours * 1.35);
  }

  let riskCategory: AuditRecommendation['riskCategory'] = 'Moderate Optimization Needed';
  if (baseScore < 50) {
    riskCategory = 'High Friction';
  } else if (baseScore >= 70) {
    riskCategory = 'Growth Ready';
  }

  let recommendedProgram: AuditRecommendation['recommendedProgram'] = 'Marketplace Management';
  const keyActionItems: string[] = [];

  if (input.primaryBottleneck === 'starting_out') {
    recommendedProgram = 'FortuneMakers Academy';
    keyActionItems.push('Seller onboarding & KYC verification compliance');
    keyActionItems.push('Core product research & initial 10-SKU launch plan');
    keyActionItems.push('Marketplace algorithm indexing & basic SEO setup');
  } else if (input.primaryBottleneck === 'inventory_stockout') {
    recommendedProgram = 'Sourcing & Catalog Build';
    keyActionItems.push('Wholesale supply pipeline stabilization');
    keyActionItems.push('Lead-time buffer forecasting & reorder threshold setup');
    keyActionItems.push('Multi-vendor bulk sourcing review');
  } else if (input.primaryBottleneck === 'high_acos') {
    recommendedProgram = 'Marketplace Management';
    keyActionItems.push('Negative keyword audit and bid price restructuring');
    keyActionItems.push('Listing conversion rate optimization (A+ content & image gallery)');
    keyActionItems.push('Sponsored brand & display ads budget reallocation');
  } else if (input.primaryBottleneck === 'catalog_suppression') {
    recommendedProgram = 'Marketplace Management';
    keyActionItems.push('Backend attribute remediation & category node mapping');
    keyActionItems.push('Variation theme alignment and suppression appeal');
    keyActionItems.push('Automated listing error monitoring');
  } else {
    recommendedProgram = input.monthlyRevenueTier === '10m+' ? 'End-to-End Enterprise' : 'Marketplace Management';
    keyActionItems.push('Account health policy metric audit (ODR & VTR)');
    keyActionItems.push('Dedicated brand registry & counterfeit protection');
    keyActionItems.push('Bi-weekly sprint reviews and operational SLA tracking');
  }

  let catalogRating = 'Needs Standardization';
  if (input.activeCatalogCount > 50) catalogRating = 'Scaling Tier';
  if (input.activeCatalogCount > 200) catalogRating = 'High-Volume Enterprise';

  return {
    overallHealthScore: baseScore,
    riskCategory,
    recommendedProgram,
    keyActionItems,
    estimatedOperationsTimeSavedHoursMonthly: timeSavedHours,
    catalogEfficiencyRating: catalogRating,
  };
}
