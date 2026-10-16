import React from 'react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface MarketplaceStripProps {
  onSelectMarketplace?: (marketplace: string) => void;
  onOpenConsultation?: (marketplace: string) => void;
}

export const MarketplaceStrip: React.FC<MarketplaceStripProps> = ({
  onSelectMarketplace,
  onOpenConsultation,
}) => {
  const handleMarketplaceClick = (id: string, name: string) => {
    if (onSelectMarketplace) {
      onSelectMarketplace(id);
    } else if (onOpenConsultation) {
      onOpenConsultation(`${name} Management`);
    }
  };

  const marketplaces = [
    {
      id: 'amazon',
      name: 'Amazon India',
      channelBadge: 'FBA & Brand Registry',
      component: (
        <AmazonLogo
          className="h-8 w-auto text-[#181326] group-hover:text-[#6545D9] transition-colors duration-200"
          variant="monochrome"
        />
      ),
      description: 'Prime fulfillment coordination, A+ brand content, and Sponsored Advertising.',
      features: ['FBA & Buy Box Strategy', 'Brand Registry & A+ Setup', 'Sponsored Products Optimization'],
    },
    {
      id: 'flipkart',
      name: 'Flipkart',
      channelBadge: 'Assured & PLA Campaigns',
      component: (
        <FlipkartLogo
          className="h-8 w-auto text-[#181326] group-hover:text-[#6545D9] transition-colors duration-200"
          variant="monochrome"
        />
      ),
      description: 'Flipkart Assured badge compliance, catalog health, and performance ads.',
      features: ['Flipkart Assured Readiness', 'Smart Catalog Management', 'Product Listing Ads (PLA)'],
    },
    {
      id: 'meesho',
      name: 'Meesho',
      channelBadge: '0% Commission Tier',
      component: (
        <MeeshoLogo
          className="h-8 w-auto text-[#181326] group-hover:text-[#6545D9] transition-colors duration-200"
          variant="monochrome"
        />
      ),
      description: 'High-volume value pricing, catalog optimization, and SLA dispatch management.',
      features: ['Zero Commission Navigation', 'Price Recommendation Engine', 'Next-Day Dispatch Workflow'],
    },
  ];

  return (
    <section id="marketplace-strip-section" className="py-16 sm:py-20 bg-white text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with Subtle Fade In */}
        <FadeInSection className="text-center mb-12 sm:mb-14" distance={20} duration={700}>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
            Marketplace Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#181326] tracking-[-0.025em] leading-[1.14] mb-4">
            Built Around the{' '}
            <span className="font-editorial italic font-normal text-[#6545D9]">
              Marketplaces That Matter.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#625C71] max-w-xl mx-auto leading-relaxed">
            Operational execution, listing compliance, and growth management across India's three dominant commerce channels.
          </p>
        </FadeInSection>

        {/* Clean, Monochrome, Consistent Brand Row with Staggered Fade-in */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {marketplaces.map((m, idx) => (
            <FadeInSection
              key={m.id}
              delay={idx * 120}
              distance={24}
              duration={750}
              className="h-full"
            >
              <div
                onClick={() => handleMarketplaceClick(m.id, m.name)}
                className="group flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-[#FAF9FF] border border-black/[0.05] hover:border-[#6545D9]/35 hover:bg-white hover:shadow-lg hover:shadow-[#6545D9]/5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Channel Header: Monochrome Logo & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-5 border-b border-black/[0.05]">
                    <div className="h-9 flex items-center justify-start transition-transform duration-200 group-hover:scale-[1.03]">
                      {m.component}
                    </div>
                    <span className="text-[11px] font-semibold text-[#625C71] group-hover:text-[#6545D9] bg-white group-hover:bg-[#6545D9]/10 px-2.5 py-1 rounded-full border border-black/[0.04] transition-colors">
                      {m.channelBadge}
                    </span>
                  </div>

                  {/* Brief Editorial Description */}
                  <p className="text-xs sm:text-[13px] text-[#625C71] leading-relaxed mb-5">
                    {m.description}
                  </p>

                  {/* Core Capabilities */}
                  <div className="space-y-2 mb-6">
                    {m.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#181326]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link with Arrow */}
                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-semibold text-[#6545D9]">
                  <span>Explore {m.name} Operations</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Independent Advisory Disclaimer with Shield Icon */}
        <FadeInSection delay={360} distance={16} duration={700}>
          <div className="flex items-center justify-center gap-2 mt-10 text-[11px] sm:text-xs text-[#625C71] text-center">
            <ShieldCheck className="w-4 h-4 text-[#6545D9] shrink-0" />
            <span>Independent third-party marketplace execution and operational advisory. Amazon, Flipkart, and Meesho are registered trademarks of their respective owners.</span>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
