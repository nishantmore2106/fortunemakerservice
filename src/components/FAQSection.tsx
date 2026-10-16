import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id]);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq-section" className="py-28 bg-white text-[#11142D] border-b border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#494BFF] block mb-3">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#11142D] leading-[1.14] mb-4">
            Frequently Asked{' '}
            <span className="font-editorial italic font-normal text-[#494BFF]">
              Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#676B84] leading-relaxed">
            Direct information about our marketplace support, bulk sourcing, and seller academy.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-slate-100">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#494BFF] cursor-pointer group"
                >
                  <span className="font-bold text-base sm:text-lg text-[#11142D] group-hover:text-[#494BFF] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#494BFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="pt-3 text-xs sm:text-sm text-[#676B84] leading-relaxed pr-6 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer note */}
        <div className="pt-10 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#676B84]">
            Have a question about your specific catalog or account status?
          </p>
          <button
            onClick={onOpenConsultation}
            className="text-xs font-semibold text-[#494BFF] hover:underline underline-offset-4 cursor-pointer"
          >
            Speak with an E-commerce Specialist →
          </button>
        </div>
      </div>
    </section>
  );
};
