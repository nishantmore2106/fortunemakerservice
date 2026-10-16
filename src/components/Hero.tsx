import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';
import { FadeInSection } from './FadeInSection';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[78vh] lg:min-h-[85vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 sm:pb-24 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #241044 0%, #442B96 32%, #7B60E2 60%, #D6CDFA 82%, #FAF9FF 94%, #FFFFFF 100%)',
      }}
    >
      {/* Central Typography Composition — Pure, Editorial, No Boxed Text */}
      <FadeInSection
        className="relative max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center my-auto"
        distance={16}
        duration={800}
        delay={50}
      >
        {/* Hero Editorial Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-extrabold tracking-[-0.03em] text-white leading-[1.08] mb-6">
          Build Your
          <br />
          <span className="font-editorial italic font-normal text-[#FAF9FF] tracking-[-0.015em]">
            E-commerce Future.
          </span>
        </h1>

        {/* Short, Readable Supporting Text */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#FAF9FF]/90 font-normal leading-relaxed mb-8">
          Marketplace management, product sourcing, and seller education — helping businesses move forward with clarity.
        </p>

        {/* CTA Buttons with Purposeful Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] shadow-lg shadow-[#160D35]/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#6545D9]" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#EAE3FF]" />
            <span>Explore Services</span>
          </button>
        </div>

        {/* Dedicated Supported Brands Row with Real Logos */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#FAF9FF]/80">
            Dedicated Operations For:
          </span>
          <div className="flex items-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/15">
            <AmazonLogo className="h-4.5 w-auto" variant="light" />
            <span className="text-white/30">|</span>
            <FlipkartLogo className="h-4.5 w-auto" variant="light" />
            <span className="text-white/30">|</span>
            <MeeshoLogo className="h-4.5 w-auto" variant="light" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
