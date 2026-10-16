import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketplaceStrip } from './components/MarketplaceStrip';
import { CompanyIntro } from './components/CompanyIntro';
import { CorePaths } from './components/CorePaths';
import { MarketplaceDeepDive } from './components/MarketplaceDeepDive';
import { ProductSourcing } from './components/ProductSourcing';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { AcademyModal } from './components/AcademyModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlanForConsultation, setSelectedPlanForConsultation] = useState<string | undefined>(undefined);
  const [isAcademyOpen, setIsAcademyOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = (planName?: string) => {
    setSelectedPlanForConsultation(planName);
    setIsConsultationOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCorePathAction = (actionId: string) => {
    if (actionId === 'academy-modal') {
      setIsAcademyOpen(true);
    } else {
      handleNavigate(actionId);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#181326] flex flex-col font-sans selection:bg-[#6545D9]/20 selection:text-[#160D35]">
      {/* NAVIGATION */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* HERO SECTION — PURPLE AND WHITE GRADIENT */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={() => handleNavigate('services-section')}
        />

        {/* SECTION A — MARKETPLACE CREDIBILITY */}
        <MarketplaceStrip
          onOpenConsultation={(marketplace) => handleOpenConsultation(marketplace)}
          onSelectMarketplace={() => handleNavigate('services-section')}
        />

        {/* SECTION B — INTRODUCTION */}
        <CompanyIntro
          onDiscover={() => handleNavigate('core-services-section')}
        />

        {/* SECTION C — CORE SERVICES */}
        <CorePaths
          onSelectAction={handleCorePathAction}
        />

        {/* SECTION D — MARKETPLACE SERVICES */}
        <MarketplaceDeepDive
          onOpenConsultation={() => handleOpenConsultation('Marketplace Operations')}
        />

        {/* SECTION E — PRODUCT SUPPLY */}
        <ProductSourcing />

        {/* SECTION F — HOW IT WORKS */}
        <HowItWorks
          onOpenConsultation={() => handleOpenConsultation('Inquiry Discussion')}
        />

        {/* SECTION G — FINAL CTA */}
        <FinalCTA
          onOpenConsultation={() => handleOpenConsultation('Next Step Consultation')}
          onExploreServices={() => handleNavigate('services-section')}
        />
      </main>

      {/* SECTION H — FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
      />

      {/* MODALS */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultPlan={selectedPlanForConsultation}
      />

      <AcademyModal
        isOpen={isAcademyOpen}
        onClose={() => setIsAcademyOpen(false)}
        onOpenConsultation={() => handleOpenConsultation('FortuneMakers Academy Admissions')}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
