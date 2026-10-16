import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  BarChart,
  HelpCircle,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { evaluateMarketplaceDiagnostic, MarketplaceAuditInput } from '../utils/calculator';

interface InteractiveAuditProps {
  onOpenConsultationWithPlan: (planName: string) => void;
}

export const InteractiveAudit: React.FC<InteractiveAuditProps> = ({ onOpenConsultationWithPlan }) => {
  const [auditInput, setAuditInput] = useState<MarketplaceAuditInput>({
    marketplace: 'amazon',
    monthlyRevenueTier: '500k-2m',
    primaryBottleneck: 'high_acos',
    activeCatalogCount: 45,
  });

  const recommendation = useMemo(() => {
    return evaluateMarketplaceDiagnostic(auditInput);
  }, [auditInput]);

  return (
    <section id="audit-section" className="py-24 bg-[#080B24] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#494BFF]/15 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#D9DEFF] block mb-3">
            Interactive Diagnostic
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-white leading-[1.14] mb-4">
            Assess Your Store's{' '}
            <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D9DEFF] via-white to-[#A36BFF]">
              Operational Friction.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D9DEFF]/80 leading-relaxed max-w-xl mx-auto">
            Select your platform details and current hurdle to view an illustrative operations score and customized roadmap.
          </p>
        </div>

        {/* 2-Column Diagnostic Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Input Form Controls */}
          <div className="lg:col-span-6 bg-[#0E1238]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#825BFF]">
                  1. Configure Store Profile
                </span>
                <span className="text-[11px] text-[#D9DEFF]/60 flex items-center gap-1">
                  <Sliders className="w-3 h-3" /> Live Calculation
                </span>
              </div>

              {/* Input 1: Marketplace */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#EAE3FF] mb-2.5">
                  Primary Marketplace Channel
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setAuditInput({ ...auditInput, marketplace: 'amazon' })}
                    className={`py-2.5 px-3 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      auditInput.marketplace === 'amazon'
                        ? 'bg-[#6545D9] border-[#A58BFF]/50 text-white shadow-md shadow-[#6545D9]/40'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <AmazonLogo className="h-4 w-auto" variant="light" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuditInput({ ...auditInput, marketplace: 'flipkart' })}
                    className={`py-2.5 px-3 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      auditInput.marketplace === 'flipkart'
                        ? 'bg-[#6545D9] border-[#A58BFF]/50 text-white shadow-md shadow-[#6545D9]/40'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <FlipkartLogo className="h-4 w-auto" variant="light" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuditInput({ ...auditInput, marketplace: 'meesho' })}
                    className={`py-2.5 px-3 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      auditInput.marketplace === 'meesho'
                        ? 'bg-[#6545D9] border-[#A58BFF]/50 text-white shadow-md shadow-[#6545D9]/40'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <MeeshoLogo className="h-4 w-auto" variant="light" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuditInput({ ...auditInput, marketplace: 'multi' as any })}
                    className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold transition-all cursor-pointer border ${
                      auditInput.marketplace === ('multi' as any)
                        ? 'bg-[#6545D9] border-[#A58BFF]/50 text-white shadow-md shadow-[#6545D9]/40'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-[#A58BFF]" />
                    <span className="text-[11px]">Omnichannel</span>
                  </button>
                </div>
              </div>

              {/* Input 2: Primary Bottleneck */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#D9DEFF] mb-2">
                  Current Core Bottleneck
                </label>
                <select
                  value={auditInput.primaryBottleneck}
                  onChange={(e) => setAuditInput({ ...auditInput, primaryBottleneck: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#494BFF]"
                >
                  <option value="high_acos" className="bg-[#080B24] text-white">High Advertising ACOS / Wasted Ad Spend</option>
                  <option value="catalog_suppression" className="bg-[#080B24] text-white">Listing Suppressions & Catalog Errors</option>
                  <option value="inventory_stockout" className="bg-[#080B24] text-white">Wholesale Inventory Stockouts & Lead Times</option>
                  <option value="policy_compliance" className="bg-[#080B24] text-white">Account Health Warnings & Policy Friction</option>
                  <option value="starting_out" className="bg-[#080B24] text-white">Starting Out & Need Complete Onboarding</option>
                </select>
              </div>

              {/* Input 3: Monthly Volume Tier */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#D9DEFF] mb-2">
                  Current Monthly Volume Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'new', label: 'Pre-launch' },
                    { id: '100k-500k', label: '₹1L – ₹5L' },
                    { id: '500k-2m', label: '₹5L – ₹20L' },
                    { id: '2m-10m', label: '₹20L – ₹1Cr' },
                    { id: '10m+', label: '₹1Cr+' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setAuditInput({ ...auditInput, monthlyRevenueTier: tier.id as any })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        auditInput.monthlyRevenueTier === tier.id
                          ? 'bg-[#825BFF] text-white shadow-md shadow-[#825BFF]/40'
                          : 'bg-white/5 text-[#D9DEFF]/70 hover:bg-white/10'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 4: Catalog Size Range */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#D9DEFF]">
                    Active SKU Count in Store
                  </label>
                  <span className="text-xs font-mono font-bold text-[#825BFF]">
                    {auditInput.activeCatalogCount} SKUs
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="350"
                  step="5"
                  value={auditInput.activeCatalogCount}
                  onChange={(e) => setAuditInput({ ...auditInput, activeCatalogCount: Number(e.target.value) })}
                  className="w-full accent-[#494BFF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#D9DEFF]/50 mt-1">
                  <span>5 (Focused Launch)</span>
                  <span>100 (Growing Brand)</span>
                  <span>350+ (Large Catalog)</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#D9DEFF]/50 mt-6 pt-4 border-t border-white/10">
              *All calculations are illustrative indicators derived from marketplace operational benchmarks.
            </p>
          </div>

          {/* Right Column: Computed Diagnostic Roadmap */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#141A4F] to-[#0A0D2E] rounded-3xl p-6 sm:p-8 border border-[#494BFF]/30 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header result row */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  2. Diagnostic Assessment
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                  Tier: {recommendation.catalogEfficiencyRating}
                </span>
              </div>

              {/* Health Score Gauge */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#D9DEFF]/70 block mb-1">Estimated Health Index</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {recommendation.overallHealthScore}
                    </span>
                    <span className="text-sm text-[#D9DEFF]/50">/ 100</span>
                  </div>
                  <span className="text-xs font-semibold text-[#825BFF] block mt-1">
                    Status: {recommendation.riskCategory}
                  </span>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#494BFF]/20 border border-[#494BFF]/40 text-[#D2B8FF] text-xs font-bold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{recommendation.estimatedOperationsTimeSavedHoursMonthly}h / mo</span>
                  </div>
                  <p className="text-[10px] text-[#D9DEFF]/60">Operations Time Saved</p>
                </div>
              </div>

              {/* Recommended Track */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9DEFF]/70 block mb-2">
                  Recommended Support Pathway:
                </span>
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#494BFF]/20 to-[#825BFF]/20 border border-[#494BFF]/40">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#825BFF]" />
                    {recommendation.recommendedProgram}
                  </h4>
                  <p className="text-xs text-[#D9DEFF]/80 mt-1 leading-relaxed">
                    Designed specifically for accounts experiencing {auditInput.primaryBottleneck.replace('_', ' ')}.
                  </p>
                </div>
              </div>

              {/* Priority Action Items */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9DEFF]/70 block mb-2.5">
                  Priority 30-Day Sprint Actions:
                </span>
                <div className="space-y-2">
                  {recommendation.keyActionItems.map((action, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#D9DEFF]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA to act on this diagnostic */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenConsultationWithPlan(recommendation.recommendedProgram)}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#494BFF] via-[#7056FF] to-[#825BFF] hover:opacity-95 shadow-lg shadow-[#494BFF]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Consultation for {recommendation.recommendedProgram}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
