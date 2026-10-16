import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, ArrowUpRight, User, Mail, Phone, Clock, Layers } from 'lucide-react';
import { validateConsultationForm, ConsultationFormData } from '../utils/validation';
import { AmazonLogo, FlipkartLogo, MeeshoLogo } from './BrandLogos';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultPlan,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    marketplace: 'Amazon India',
    currentStage: 'Active Store (Under ₹5L monthly)',
    primaryGoal: defaultPlan || 'Comprehensive Marketplace Support',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preferredDate, setPreferredDate] = useState<string>('Tomorrow, Morning (11:00 AM IST)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateConsultationForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const bookingRef = `FM-CONS-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setConfirmedBookingId(bookingRef);
    }, 500);
  };

  const handleReset = () => {
    setConfirmedBookingId(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      marketplace: 'Amazon India',
      currentStage: 'Active Store (Under ₹5L monthly)',
      primaryGoal: 'Comprehensive Marketplace Support',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  const marketplaceOptions = [
    { id: 'Amazon India', logo: <AmazonLogo className="h-4 w-auto" variant="light" /> },
    { id: 'Flipkart', logo: <FlipkartLogo className="h-4 w-auto" variant="light" /> },
    { id: 'Meesho', logo: <MeeshoLogo className="h-4 w-auto" variant="light" /> },
    { id: 'Multi-Marketplace', label: 'All 3 Channels' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#160D35] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBookingId ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#6545D9]/20 border border-[#A58BFF]/40 text-[#A58BFF] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">Consultation Booked</h3>
            <p className="text-xs text-[#EAE3FF]/80 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your confirmation reference is:
            </p>

            <div className="py-2 px-4 rounded-xl bg-white/10 border border-white/15 inline-block font-mono text-sm text-[#EAE3FF] font-bold">
              {confirmedBookingId}
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs space-y-2 mt-4 text-[#EAE3FF]/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A58BFF] shrink-0" />
                <span>Our lead marketplace strategist will connect via Google Meet / WhatsApp.</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A58BFF] shrink-0" />
                <span>Scheduled for: <strong className="text-white">{preferredDate}</strong></span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full text-xs font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A58BFF] block mb-1">
                Direct Consultation
              </span>
              <h3 id="consultation-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                Let's Talk
              </h3>
              <p className="text-xs text-[#EAE3FF]/80 mt-1">
                Tell us about your business, product ideas, or operational hurdles. We'll outline a practical approach.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-name" className="block font-semibold text-[#EAE3FF] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                    <input
                      id="modal-name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Arun Kumar"
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-red-400' : 'border-white/15 focus:ring-[#A58BFF]'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block font-semibold text-[#EAE3FF] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                    <input
                      id="modal-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arun@brand.in"
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-400' : 'border-white/15 focus:ring-[#A58BFF]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-phone" className="block font-semibold text-[#EAE3FF] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                    <input
                      id="modal-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-400' : 'border-white/15 focus:ring-[#A58BFF]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="modal-time" className="block font-semibold text-[#EAE3FF] mb-1">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                    <select
                      id="modal-time"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#160D35] border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-[#A58BFF]"
                    >
                      <option value="Tomorrow, Morning (11:00 AM IST)">Tomorrow, Morning (11 AM)</option>
                      <option value="Tomorrow, Afternoon (3:00 PM IST)">Tomorrow, Afternoon (3 PM)</option>
                      <option value="Tomorrow, Evening (6:00 PM IST)">Tomorrow, Evening (6 PM)</option>
                      <option value="Next 2 Business Days">Next 2 Business Days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Marketplace Visual Selector with Logos */}
              <div>
                <label className="block font-semibold text-[#EAE3FF] mb-1.5">
                  Target Marketplace Focus *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {marketplaceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, marketplace: opt.id })}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.marketplace === opt.id
                          ? 'bg-[#6545D9]/40 border-[#A58BFF] text-white shadow-sm'
                          : 'bg-white/5 border-white/10 hover:border-white/25 text-[#EAE3FF]/70'
                      }`}
                    >
                      {opt.logo ? (
                        <div className="h-5 flex items-center justify-center mb-1">
                          {opt.logo}
                        </div>
                      ) : (
                        <span className="text-xs font-semibold">{opt.label}</span>
                      )}
                      <span className="text-[10px] opacity-75">{opt.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="modal-stage" className="block font-semibold text-[#EAE3FF] mb-1">
                  Current Business Stage *
                </label>
                <div className="relative">
                  <Layers className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                  <select
                    id="modal-stage"
                    value={formData.currentStage}
                    onChange={(e) => setFormData({ ...formData, currentStage: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#160D35] border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-[#A58BFF]"
                  >
                    <option value="New Seller (Planning first launch)">Planning First Launch</option>
                    <option value="Active Store (Under ₹5L monthly)">Active Store (Under ₹5L/mo)</option>
                    <option value="Scaling Brand (₹5L - ₹20L monthly)">Scaling Brand (₹5L – ₹20L/mo)</option>
                    <option value="Established Enterprise (₹20L+ monthly)">Established Enterprise (₹20L+/mo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block font-semibold text-[#EAE3FF] mb-1">
                  Primary Goal or Operational Question (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Account health review, sponsored ads optimization, or new category launch."
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#A58BFF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-semibold text-[#160D35] bg-white hover:bg-[#FAF9FF] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <>
                      <span>Confirm Consultation Request</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#6545D9]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
