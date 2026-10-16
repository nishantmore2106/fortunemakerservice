import React from 'react';
import { ArrowUp, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FortuneMakersLogo } from './BrandLogos';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#160D35] text-[#EAE3FF]/70 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <FortuneMakersLogo variant="dark" />

            <p className="text-xs text-[#EAE3FF]/70 leading-relaxed max-w-sm pt-1">
              Helping businesses build, manage, and grow successful e-commerce operations through marketplace management, bulk wholesale product supply, and practical seller education.
            </p>

            <p className="text-[11px] text-[#A58BFF] font-medium pt-1">
              Independent E-Commerce Seller Advisory & Operations
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About FortuneMakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Marketplace Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sourcing-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Product Sourcing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('core-services-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Seller Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Contact (4 cols) */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2">
              Contact Desk
            </h4>
            <div className="flex items-center gap-2 text-[#EAE3FF]/85">
              <Mail className="w-3.5 h-3.5 text-[#A58BFF] shrink-0" />
              <span>contact@fortunemakersservices.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#EAE3FF]/65 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#A58BFF] shrink-0" />
              <span>Maharashtra, India</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#A58BFF] transition-colors cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A58BFF]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EAE3FF]/50">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} FortuneMakers Services. All rights reserved.</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors px-2.5 py-1 rounded bg-white/5 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
