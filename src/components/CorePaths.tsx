import React from 'react';
import { ArrowRight, Layers, PackageCheck, GraduationCap, CheckCircle2 } from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { FadeInSection } from './FadeInSection';

interface CorePathsProps {
  onSelectAction: (actionId: string) => void;
}

export const CorePaths: React.FC<CorePathsProps> = ({ onSelectAction }) => {
  return (
    <section id="core-services-section" className="py-24 sm:py-28 bg-[#FAF9FF] text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInSection className="max-w-2xl mb-12 sm:mb-14" distance={20} duration={700}>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
            Three Core Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#181326] leading-[1.14] mb-4">
            Structured Support for{' '}
            <span className="font-editorial italic font-normal text-[#6545D9]">
              Every Stage.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#625C71] leading-relaxed max-w-xl">
            Hands-on channel operations, wholesale product procurement, and practical seller education built for sustainable brand expansion.
          </p>
        </FadeInSection>

        {/* Sophisticated Editorial Layout */}
        <div className="space-y-6">
          {/* Item 1: Marketplace Management (Hero Feature) */}
          <FadeInSection delay={80} distance={24} duration={750}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-sm hover:border-[#6545D9]/25 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EAE3FF] flex items-center justify-center text-[#6545D9] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#6545D9]">01 / SERVICE</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#181326]">
                    Marketplace Management
                  </h3>
                </div>
              </div>

              {/* Supported Brand Logos */}
              <div className="flex items-center gap-4 bg-[#FAF9FF] px-4 py-2 rounded-xl border border-black/[0.04] text-[#181326]">
                <AmazonLogo className="h-5 w-auto" variant="monochrome" />
                <span className="text-slate-300">|</span>
                <FlipkartLogo className="h-5 w-auto" variant="monochrome" />
                <span className="text-slate-300">|</span>
                <MeeshoLogo className="h-5 w-auto" variant="monochrome" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#625C71] leading-relaxed max-w-2xl mb-6">
              Complete hands-on operational management covering seller account onboarding, catalog maintenance, sponsored ads, account health surveillance, and carrier coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#181326] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                <span>Full-cycle listing & variants</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#181326] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                <span>ROAS ad management</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#181326] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                <span>Health & ODR protection</span>
              </div>
            </div>

            <button
              onClick={() => onSelectAction('services-section')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
            >
              <span>Explore Marketplace Services Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          </FadeInSection>

          {/* Items 2 & 3: Two Balanced Editorial Panels with Fade In */}
          <FadeInSection delay={180} distance={24} duration={750}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 2: Product Sourcing & Bulk Supply */}
              <div className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:border-[#6545D9]/25 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#EAE3FF] flex items-center justify-center text-[#6545D9] shrink-0">
                      <PackageCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#6545D9]">02 / SUPPLY</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181326]">
                        Product Sourcing & Bulk Supply
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#625C71] leading-relaxed mb-5">
                    Direct verified supplier access, bulk purchasing arrangements, and catalog unit economic feasibility for fast-moving categories.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-[#625C71]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                      <span>Kitchen, Lifestyle & Daily Essentials</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#625C71]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                      <span>Low MOQs & custom batch quotes</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectAction('sourcing-section')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
                >
                  <span>Request Sourcing Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Item 3: Seller Education */}
              <div className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:border-[#6545D9]/25 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#EAE3FF] flex items-center justify-center text-[#6545D9] shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#6545D9]">03 / ACADEMY</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181326]">
                        Seller Education
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#625C71] leading-relaxed mb-5">
                    Actionable playbooks, seller diagnostics, and step-by-step training for founders navigating marketplace algorithms and policy rules.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-[#625C71]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                      <span>Amazon & Flipkart seller modules</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#625C71]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                      <span>Listing SEO & PPC optimization</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectAction('academy-modal')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
                >
                  <span>View Academy Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
