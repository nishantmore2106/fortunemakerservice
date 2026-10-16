import React from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160D35]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#160D35] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close legal modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A58BFF] block mb-1">
          {type === 'privacy' ? 'Data & Privacy Protocol' : 'Terms of Engagement'}
        </span>

        <h3 id="policy-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-4">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h3>

        <div className="text-xs text-[#EAE3FF]/80 space-y-3.5 max-h-80 overflow-y-auto pr-2 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Information Collection:</strong> FortuneMakers Services collects contact details (name, business email, phone number) and business specifications submitted through our consultation and sourcing inquiry forms solely for communicating with you and delivering our advisory services.
              </p>
              <p>
                <strong>2. Confidentiality:</strong> All seller central data, financial performance metrics, proprietary product ideas, and wholesale supplier identities shared during consultations or operational engagements are treated as strictly confidential under mutual non-disclosure.
              </p>
              <p>
                <strong>3. Child Account Security:</strong> We enforce safe account access through standard marketplace Child/Secondary User delegation. We never request your primary root account login or payment credentials.
              </p>
              <p>
                <strong>4. Data Retention:</strong> You may request deletion or export of your inquiry records at any time by contacting contact@fortunemakersservices.com.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Scope of Services:</strong> FortuneMakers Services provides independent third-party e-commerce marketplace management, wholesale product sourcing coordination, and seller education. We are an independent service provider and are not officially affiliated with or endorsed by Amazon, Flipkart, or Meesho.
              </p>
              <p>
                <strong>2. Commercial Ethics:</strong> While our team applies rigorous optimization practices and continuous catalog monitoring, online sales depend on external marketplace algorithms, buyer demand, category competition, and seller stock levels. We do not make misleading claims of guaranteed revenues or guaranteed account reinstatements.
              </p>
              <p>
                <strong>3. Sourcing & Quotations:</strong> Sourcing estimates and MOQs provided on this website are commercial guidelines. Binding price quotes and lead-time schedules are issued through formal proforma invoices following factory verification.
              </p>
              <p>
                <strong>4. Governance:</strong> All engagements are governed by mutual scope agreements and standard commercial regulations in the jurisdiction of Maharashtra, India.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 mt-5 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
