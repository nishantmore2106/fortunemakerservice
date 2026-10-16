import React from 'react';
import { ArrowUpRight, Compass, Sliders, CalendarCheck, Zap } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      icon: <Compass className="w-4 h-4 text-[#6545D9]" />,
      title: 'Discover',
      desc: 'Understand your business model, catalog scale, and marketplace objectives.',
    },
    {
      number: '02',
      icon: <Sliders className="w-4 h-4 text-[#6545D9]" />,
      title: 'Assess',
      desc: 'Evaluate catalog gaps, advertising efficiency, and sourcing margin feasibility.',
    },
    {
      number: '03',
      icon: <CalendarCheck className="w-4 h-4 text-[#6545D9]" />,
      title: 'Plan',
      desc: 'Define operational deliverables, timelines, and measurable channel benchmarks.',
    },
    {
      number: '04',
      icon: <Zap className="w-4 h-4 text-[#6545D9]" />,
      title: 'Execute',
      desc: 'Deploy daily marketplace operations, listing optimization, and supplier coordination.',
    },
  ];

  return (
    <section id="how-it-works-section" className="py-24 sm:py-28 bg-white text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInSection className="max-w-2xl mb-12 sm:mb-14" distance={20} duration={700}>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#181326] leading-[1.14] mb-4">
            A Clear Path from{' '}
            <span className="font-editorial italic font-normal text-[#6545D9]">
              Inquiry to Execution.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#777187] leading-relaxed max-w-xl">
            From preliminary channel assessment to daily catalog maintenance and supplier management, every phase is engineered for momentum.
          </p>
        </FadeInSection>

        {/* Four Concise Steps Grid with Dedicated Icons and Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, idx) => (
            <FadeInSection
              key={step.number}
              delay={idx * 90}
              distance={22}
              duration={750}
            >
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold font-mono text-[#6545D9]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9FF] border border-black/[0.04] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#181326]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#777187] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Minimal Link */}
        <FadeInSection delay={360} distance={16} duration={700}>
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-xs">
            <span className="text-[#777187]">Ready to begin with Step 01?</span>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
