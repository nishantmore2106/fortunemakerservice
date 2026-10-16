import React from 'react';
import {
  ArrowRight,
  UserCheck,
  Layers,
  HeartPulse,
  Search,
  TrendingUp,
  Truck,
  Headphones,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { FadeInSection } from './FadeInSection';

interface MarketplaceDeepDiveProps {
  onOpenConsultation: () => void;
}

export const MarketplaceDeepDive: React.FC<MarketplaceDeepDiveProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      num: '01',
      icon: <UserCheck className="w-4 h-4 text-[#6545D9]" />,
      title: 'Seller account setup',
      desc: 'Registration, GST verification, brand authorization, and category gating clearance.',
    },
    {
      num: '02',
      icon: <Layers className="w-4 h-4 text-[#6545D9]" />,
      title: 'Product listing & catalog management',
      desc: 'Structured parent-child variations, attribute mapping, and conversion-focused content.',
    },
    {
      num: '03',
      icon: <HeartPulse className="w-4 h-4 text-[#6545D9]" />,
      title: 'Account health support',
      desc: 'Continuous surveillance of Order Defect Rate (ODR), policy warnings, and listing suppressions.',
    },
    {
      num: '04',
      icon: <Search className="w-4 h-4 text-[#6545D9]" />,
      title: 'Product research',
      desc: 'Competitor demand analysis, review sentiment gaps, and realistic unit economic feasibility.',
    },
    {
      num: '05',
      icon: <TrendingUp className="w-4 h-4 text-[#6545D9]" />,
      title: 'Sponsored advertising support',
      desc: 'Disciplined ad spend management, negative keyword pruning, and ROAS-focused campaign structure.',
    },
    {
      num: '06',
      icon: <Truck className="w-4 h-4 text-[#6545D9]" />,
      title: 'Logistics coordination',
      desc: 'FBA and warehouse shipment staging, carrier scheduling, and inventory buffer planning.',
    },
    {
      num: '07',
      icon: <Headphones className="w-4 h-4 text-[#6545D9]" />,
      title: 'Customer service operations',
      desc: 'SLA-compliant buyer inquiry resolution and negative review root-cause analysis.',
    },
    {
      num: '08',
      icon: <ShieldCheck className="w-4 h-4 text-[#6545D9]" />,
      title: 'Brand protection',
      desc: 'Brand Registry enrollment, unauthorized seller alerts, and intellectual property rights enforcement.',
    },
    {
      num: '09',
      icon: <BarChart3 className="w-4 h-4 text-[#6545D9]" />,
      title: 'Performance analytics',
      desc: 'Weekly sprint summaries covering sales velocity, advertising returns, and reorder cycles.',
    },
  ];

  return (
    <section id="services-section" className="py-24 sm:py-28 bg-white text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInSection distance={20} duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
                Operations Directory
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#181326] leading-[1.14] mb-4">
                Better Operations Start with the{' '}
                <span className="font-editorial italic font-normal text-[#6545D9]">
                  Right Support.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#625C71] leading-relaxed">
                A disciplined catalog, advertising, and compliance framework deployed daily across India's three dominant marketplaces.
              </p>
            </div>

            {/* Channels active badge with logos */}
            <div className="flex items-center gap-3 bg-[#FAF9FF] px-3.5 py-1.5 rounded-xl border border-black/[0.04] text-[#181326] shrink-0 self-start md:self-auto">
              <span className="text-[11px] font-medium text-[#625C71]">Active On:</span>
              <AmazonLogo className="h-4 w-auto" variant="monochrome" />
              <FlipkartLogo className="h-4 w-auto" variant="monochrome" />
              <MeeshoLogo className="h-4 w-auto" variant="monochrome" />
            </div>
          </div>
        </FadeInSection>

        {/* Two-Column Editorial List with Purposeful Icons and Fade In */}
        <FadeInSection delay={120} distance={24} duration={750}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 divide-y md:divide-y-0 divide-slate-100">
            {services.map((s) => (
              <div key={s.num} className="pt-6 md:pt-0 flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#FAF9FF] border border-black/[0.04] flex items-center justify-center shrink-0 group-hover:bg-[#EAE3FF] transition-colors mt-0.5">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#6545D9]">
                      {s.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#181326]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#625C71] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Consultation Trigger */}
        <FadeInSection delay={240} distance={16} duration={700}>
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#625C71]">
              Need support across multiple channels or a customized scope of work?
            </p>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
            >
              <span>Discuss Your Operations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
