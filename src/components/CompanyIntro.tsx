import React from 'react';
import { ArrowRight, Layers, PackageCheck, GraduationCap } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface CompanyIntroProps {
  onDiscover: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onDiscover }) => {
  const pillars = [
    {
      icon: <Layers className="w-4 h-4 text-[#6545D9]" />,
      title: 'Marketplace Operations',
      desc: 'Day-to-day catalog, advertising, and compliance on Amazon, Flipkart, and Meesho.',
    },
    {
      icon: <PackageCheck className="w-4 h-4 text-[#6545D9]" />,
      title: 'Wholesale Sourcing',
      desc: 'Reliable supplier access and verified product batches for seller inventory.',
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-[#6545D9]" />,
      title: 'Seller Academy',
      desc: 'Real operational methods and playbook guidance for growing brand owners.',
    },
  ];

  return (
    <section id="about-section" className="py-24 sm:py-28 bg-white text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left Column: Headline with subtle fade */}
          <FadeInSection className="md:col-span-5" distance={20} duration={700}>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
              About FortuneMakers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#181326] leading-[1.14] mb-4">
              Everything You Need to{' '}
              <span className="font-editorial italic font-normal text-[#6545D9]">
                Move Forward.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#625C71] leading-relaxed">
              Growing an e-commerce business requires more than just listing products. It takes disciplined operations, reliable supply, and continuous marketplace knowledge.
            </p>
          </FadeInSection>

          {/* Right Column: Three Pillars with Clean Icons and Staggered Fade */}
          <FadeInSection className="md:col-span-7 space-y-6" delay={120} distance={20} duration={750}>
            <div className="space-y-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-[#FAF9FF] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAE3FF] flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#181326]">{p.title}</h3>
                    <p className="text-xs text-[#625C71] mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 pl-3.5">
              <button
                onClick={onDiscover}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#6545D9] hover:text-[#39216D] transition-colors cursor-pointer"
              >
                <span>Explore the Three Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
