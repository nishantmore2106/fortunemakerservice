import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { FadeInSection } from './FadeInSection';

interface FinalCTAProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section
      id="contact-section"
      className="py-28 sm:py-32 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9FF 8%, #E5DCFA 32%, #8667E8 72%, #321A6B 95%, #1E0D3D 100%)',
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Editorial Container with contrast against the deep lower gradient and subtle scroll reveal */}
        <FadeInSection distance={24} duration={800}>
          <div className="p-8 sm:p-14 rounded-3xl bg-[#160D35]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#A58BFF] block mb-3">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.025em] text-white mb-4 leading-[1.12]">
              Ready for{' '}
              <span className="font-editorial italic font-normal text-[#EAE3FF]">
                What's Next?
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#EAE3FF]/85 max-w-lg mx-auto mb-8 leading-relaxed font-normal">
              Let's explore how FortuneMakers can support your marketplace operations, sourcing, and seller growth.
            </p>

          {/* Action Buttons with Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] shadow-lg shadow-black/25 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#6545D9]" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-200 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#EAE3FF]" />
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Supported Brand Logos Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-[#EAE3FF]/70">
            <span className="text-[11px] uppercase tracking-wider font-semibold">Active Across:</span>
            <div className="flex items-center gap-5 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <AmazonLogo className="h-4 w-auto" variant="light" />
              <span className="text-white/20">|</span>
              <FlipkartLogo className="h-4 w-auto" variant="light" />
              <span className="text-white/20">|</span>
              <MeeshoLogo className="h-4 w-auto" variant="light" />
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    </section>
  );
};
