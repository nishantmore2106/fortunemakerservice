import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FortuneMakersLogo } from './BrandLogos';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-4xl mx-auto flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#160D35]/90 backdrop-blur-md border border-white/15 shadow-xl shadow-[#160D35]/30'
            : 'bg-[#160D35]/65 backdrop-blur-sm border border-white/10'
        }`}
      >
        {/* FortuneMakers Brand Logo */}
        <button
          onClick={() => handleLinkClick('hero-section')}
          className="flex items-center text-left group focus:outline-none cursor-pointer"
          aria-label="FortuneMakers Services Home"
        >
          <FortuneMakersLogo variant="dark" />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-[#EAE3FF]/80">
          <button
            onClick={() => handleLinkClick('about-section')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('services-section')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={() => handleLinkClick('sourcing-section')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Product Supply
          </button>
          <button
            onClick={() => handleLinkClick('core-services-section')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Academy
          </button>
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="group inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-xs font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6545D9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-18 bg-[#160D35]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-white animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2 font-medium text-sm text-[#EAE3FF]">
            <button
              onClick={() => handleLinkClick('about-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('services-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('sourcing-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              Product Supply
            </button>
            <button
              onClick={() => handleLinkClick('core-services-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              Academy
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works-section')}
              className="text-left py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
            >
              How It Works
            </button>
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full text-xs font-semibold text-[#160D35] bg-white flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6545D9]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
