import React from 'react';
import {
  Compass,
  Layers,
  ShoppingBag,
  GraduationCap,
  Sliders,
  Target,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface WhyFortuneMakersProps {
  onOpenConsultation: () => void;
}

export const WhyFortuneMakers: React.FC<WhyFortuneMakersProps> = ({ onOpenConsultation }) => {
  const advantages = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Multiple Support Pathways',
      desc: 'Whether you need hands-on daily account operations, bulk product inventory, or training to manage your own store, our distinct pathways match your stage.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Marketplace-Focused Operational Depth',
      desc: 'We concentrate specifically on marketplace algorithm dynamics, catalog categorization rules, and policy compliance rather than generic marketing promises.',
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: 'Vetted Sourcing & Wholesale Opportunities',
      desc: 'Direct access to manufacturing hubs, drop-tested packaging requirements, and commercial MOQ parameters to build a differentiated product catalog.',
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Practical Seller Education & Mentorship',
      desc: 'Curricula developed from frontline seller workflows, giving founders and operational staff actionable competence instead of theoretical buzzwords.',
    },
    {
      icon: <Sliders className="w-5 h-5" />,
      title: 'Tailored to Business Requirements',
      desc: 'Every catalog, profit margin structure, and operational bottleneck is distinct. We calibrate scope and execution sprints around your concrete goals.',
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: 'Clarity, Execution & Accountability',
      desc: 'Transparent sprint updates, structured deliverable trackers, and proactive policy surveillance so you always know where your store stands.',
    },
  ];

  return (
    <section id="why-us-section" className="py-24 bg-white text-[#11142D] border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Stance */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
              Operational Integrity
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#160D35] leading-[1.14] mb-4">
              Practical Expertise.{' '}
              <span className="font-editorial italic font-normal text-[#6545D9]">
                Clear Direction.
              </span>{' '}
              Better Operations.
            </h2>

            <p className="text-sm sm:text-base text-[#777187] leading-relaxed mb-6">
              We believe sustainable e-commerce growth is built on operational competence, catalog hygiene, and inventory reliability—never guesswork or false shortcuts.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF9FF] border border-purple-100 mb-8 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#181326]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero fabricated metrics or unrealistic promises</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#181326]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Independent seller advisory & operational execution</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#181326]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent weekly reporting and dedicated specialist</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#6545D9] hover:bg-[#5235B8] shadow-lg shadow-[#6545D9]/25 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Discuss Your Store Operations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: 6 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9FF] hover:bg-white rounded-2xl p-6 border border-purple-100 hover:border-[#6545D9]/40 hover:shadow-lg hover:shadow-[#6545D9]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#6545D9] border border-purple-100/80 flex items-center justify-center mb-4 shadow-sm">
                    {adv.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#160D35] mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-[#777187] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-100/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#6545D9]">
                  <CheckCircle2 className="w-3 h-3 text-[#6545D9]" />
                  <span>FortuneMakers Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
