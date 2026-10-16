import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, GraduationCap, BookOpen, Download } from 'lucide-react';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';

interface AcademyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AcademyModal: React.FC<AcademyModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [inquired, setInquired] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');

  if (!isOpen) return null;

  const curriculum = [
    {
      module: 'Module 01',
      title: 'E-Commerce Foundations & Commercial Setup',
      desc: 'Seller registration legalities, fee structures, and profit margin models across Indian marketplaces.',
    },
    {
      module: 'Module 02',
      title: 'Marketplace Algorithms & Organic SEO',
      desc: 'Indexing mechanics, keyword research, backend search terms, and ranking factors.',
    },
    {
      module: 'Module 03',
      title: 'High-Converting Listing Architecture',
      desc: 'Title structuring, bullet point psychology, image standards, and rich A+/EBC modules.',
    },
    {
      module: 'Module 04',
      title: 'Sponsored Advertising (PPC) Strategy',
      desc: 'Sponsored Products, Sponsored Brands, negative keyword harvesting, and ROAS management.',
    },
    {
      module: 'Module 05',
      title: 'Wholesale Sourcing & Logistics',
      desc: 'Bulk procurement, sample inspection checklists, drop-tested packaging, and warehouse shipping plans.',
    },
  ];

  const handleSyllabusRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentEmail && studentEmail.includes('@')) {
      setInquired(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="academy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160D35]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#160D35] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close Academy modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-[#A58BFF] mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Seller Education</span>
          </div>
          <h3 id="academy-modal-title" className="text-xl sm:text-2xl font-bold text-white">
            FortuneMakers Academy
          </h3>
          <p className="text-xs text-[#EAE3FF]/80 mt-1">
            Develop practical mastery across India's top marketplaces with guided training, practical workflows, and real-case studies.
          </p>

          {/* Platform coverage */}
          <div className="mt-3 flex items-center gap-2.5 text-[11px] text-[#EAE3FF]/70">
            <span>Marketplace tracks:</span>
            <div className="inline-flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <AmazonLogo className="h-3.5 w-auto" variant="light" />
              <span className="text-white/20">|</span>
              <FlipkartLogo className="h-3.5 w-auto" variant="light" />
              <span className="text-white/20">|</span>
              <MeeshoLogo className="h-3.5 w-auto" variant="light" />
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-2.5 mb-6 max-h-60 overflow-y-auto pr-1">
          {curriculum.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A58BFF] font-mono flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-[#A58BFF]" />
                  {item.module}
                </span>
                <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Core Curriculum
                </span>
              </div>
              <h4 className="text-xs font-bold text-white mb-0.5">{item.title}</h4>
              <p className="text-[11px] text-[#EAE3FF]/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Area */}
        {inquired ? (
          <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center mb-4">
            <p className="text-xs font-semibold text-white flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Curriculum guide & batch details sent to {studentEmail}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSyllabusRequest} className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4 flex flex-col sm:flex-row items-center gap-2 text-xs">
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              placeholder="Enter your email to receive syllabus PDF"
              className="w-full sm:flex-1 px-3.5 py-2 rounded-lg bg-[#160D35] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#A58BFF]"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] transition-colors shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#6545D9]" />
              <span>Get Syllabus</span>
            </button>
          </form>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
          <span className="text-[11px] text-[#EAE3FF]/60">
            Structured learning & mentorship
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="font-bold text-white hover:text-[#A58BFF] flex items-center gap-1 cursor-pointer"
          >
            <span>Discuss Admissions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
