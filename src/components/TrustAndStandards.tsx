import React from 'react';
import { Lock, FileText, CalendarCheck, Users, ShieldCheck, Scale } from 'lucide-react';

export const TrustAndStandards: React.FC = () => {
  const standards = [
    {
      icon: <Lock className="w-4 h-4" />,
      title: 'Credential Safety & Delegation',
      desc: 'We never request root account passwords. Store access is managed strictly via standard marketplace Child/Secondary User permissions.',
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: 'Mutual Non-Disclosure',
      desc: 'Your catalog data, vendor relationships, pricing margins, and store analytics are protected under mutual NDA terms.',
    },
    {
      icon: <CalendarCheck className="w-4 h-4" />,
      title: 'Weekly Sprint Reporting',
      desc: 'Transparent logs documenting every catalog fix, search term adjustment, sponsored bid change, and account health metric.',
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: 'Dedicated Account Lead',
      desc: 'A single point of operational contact coordinating your daily support tickets, listing resolutions, and campaign sprints.',
    },
    {
      icon: <Scale className="w-4 h-4" />,
      title: 'Zero Artificial Claims',
      desc: 'We do not promise unrealistic "guaranteed revenue" or "instant reinstatements". We focus entirely on sound commercial execution.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: 'Monthly Scope Milestones',
      desc: 'No restrictive multi-year lock-ins. Scopes are structured in clear monthly milestones aligned with your active catalog priorities.',
    },
  ];

  return (
    <section id="standards-section" className="py-28 bg-[#F8F9FD] text-[#11142D] border-b border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#494BFF] block mb-3">
            Service Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#11142D] leading-[1.14] mb-4">
            How We Work Together:{' '}
            <span className="font-editorial italic font-normal text-[#494BFF]">
              Trust & Transparency.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#676B84] leading-relaxed">
            E-commerce operations require confidentiality, clear scopes, and dependable communication.
          </p>
        </div>

        {/* 6 Standards Grid with Hair-Thin Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#494BFF]/10 text-[#494BFF] flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-[#11142D] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#676B84] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] font-semibold text-emerald-600">
                Verified Operating Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
