import React, { useState } from 'react';
import { Send, FileCheck2, ArrowRight, ShieldCheck, CheckCircle2, Truck, Home, Cpu, Sparkles, Activity } from 'lucide-react';
import { validateSourcingQuoteForm, SourcingQuoteFormData } from '../utils/validation';
import { FadeInSection } from './FadeInSection';

export const ProductSourcing: React.FC = () => {
  const [formData, setFormData] = useState<SourcingQuoteFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    category: 'Home & Kitchen Essentials',
    orderQuantity: '200 - 500 units',
    requirements: '',
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const categories = [
    { name: 'Home & Kitchen Essentials', icon: <Home className="w-4 h-4 text-[#6545D9]" /> },
    { name: 'Mobile & Electronics', icon: <Cpu className="w-4 h-4 text-[#6545D9]" /> },
    { name: 'Lifestyle & Utility', icon: <Sparkles className="w-4 h-4 text-[#6545D9]" /> },
    { name: 'Fitness & Personal Care', icon: <Activity className="w-4 h-4 text-[#6545D9]" /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateSourcingQuoteForm(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `FM-SRC-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedId(generatedId);
    }, 500);
  };

  return (
    <section id="sourcing-section" className="py-24 sm:py-28 bg-[#FAF9FF] text-[#181326] border-b border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInSection distance={20} duration={700}>
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6545D9] block mb-3">
              Wholesale Sourcing Desk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#181326] leading-[1.14] mb-4">
              Find the Right Products for{' '}
              <span className="font-editorial italic font-normal text-[#6545D9]">
                Your Next Move.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#625C71] leading-relaxed">
              Tell us what you need, and connect directly with our procurement team to discuss sourcing, catalog batches, and bulk supply.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Icons & Sourcing Standards with subtle scroll reveal */}
          <FadeInSection className="lg:col-span-5" delay={80} distance={24} duration={750}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#181326]">
                  Supported Product Domains
                </h3>
                <div className="space-y-2.5">
                  {categories.map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => setFormData({ ...formData, category: c.name })}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        formData.category.includes(c.name.split(' ')[0])
                          ? 'border-[#6545D9] bg-[#EAE3FF]/30 text-[#181326] font-semibold'
                          : 'border-slate-100 hover:border-slate-200 text-[#625C71]'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#FAF9FF] flex items-center justify-center shrink-0">
                        {c.icon}
                      </div>
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EAE3FF]/40 border border-[#6545D9]/15 space-y-3">
                <h4 className="text-xs font-bold text-[#160D35] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#6545D9]" />
                  <span>Procurement Guarantees</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#625C71]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                    <span>Verified manufacturing suppliers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                    <span>Clear unit economics before ordering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#6545D9] shrink-0" />
                    <span>Staged dispatch to Indian fulfillment hubs</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Right: Sourcing Inquiry Form */}
          <FadeInSection className="lg:col-span-7" delay={160} distance={24} duration={750}>
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-black/[0.06] shadow-sm">
            {submittedId ? (
              <div className="p-8 rounded-2xl bg-[#FAF9FF] border border-[#6545D9]/20 text-center animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-[#EAE3FF] text-[#6545D9] flex items-center justify-center mx-auto mb-3">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#181326] mb-1">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-[#625C71] max-w-md mx-auto mb-5 leading-relaxed">
                  Your reference is <strong className="font-mono text-[#181326] bg-[#EAE3FF] px-2 py-0.5 rounded">{submittedId}</strong>. Our procurement desk will review your requirements for <strong>{formData.category}</strong> and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmittedId(null);
                    setFormData((prev) => ({
                      ...prev,
                      fullName: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      requirements: '',
                      consent: false,
                    }));
                  }}
                  className="px-6 py-2 rounded-full text-xs font-semibold text-[#181326] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-fullName" className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="quote-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Arun Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-slate-800 focus:outline-none focus:ring-2 ${
                        formErrors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:ring-[#6545D9]/20 focus:border-[#6545D9]'
                      }`}
                    />
                    {formErrors.fullName && <p className="text-red-500 mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="quote-businessName" className="block font-semibold text-slate-700 mb-1">
                      Business / Brand Name *
                    </label>
                    <input
                      id="quote-businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Kumar Living"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-slate-800 focus:outline-none focus:ring-2 ${
                        formErrors.businessName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:ring-[#6545D9]/20 focus:border-[#6545D9]'
                      }`}
                    />
                    {formErrors.businessName && <p className="text-red-500 mt-1">{formErrors.businessName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-email" className="block font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arun@brand.in"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-slate-800 focus:outline-none focus:ring-2 ${
                        formErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:ring-[#6545D9]/20 focus:border-[#6545D9]'
                      }`}
                    />
                    {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-slate-800 focus:outline-none focus:ring-2 ${
                        formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:ring-[#6545D9]/20 focus:border-[#6545D9]'
                      }`}
                    />
                    {formErrors.phone && <p className="text-red-500 mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-category" className="block font-semibold text-slate-700 mb-1">
                      Category Selected *
                    </label>
                    <select
                      id="quote-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#6545D9]/20"
                    >
                      <option value="Home & Kitchen Essentials">Home & Kitchen Essentials</option>
                      <option value="Mobile & Electronics Accessories">Mobile & Electronics Accessories</option>
                      <option value="Lifestyle & Everyday Utility">Lifestyle & Everyday Utility</option>
                      <option value="Fitness & Personal Care">Fitness & Personal Care</option>
                      <option value="Other Category">Other / Custom Category</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-quantity" className="block font-semibold text-slate-700 mb-1">
                      Approximate Quantity *
                    </label>
                    <select
                      id="quote-quantity"
                      value={formData.orderQuantity}
                      onChange={(e) => setFormData({ ...formData, orderQuantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#6545D9]/20"
                    >
                      <option value="100 - 300 units">100 – 300 units (Sample Batch)</option>
                      <option value="300 - 1,000 units">300 – 1,000 units (Commercial Run)</option>
                      <option value="1,000 - 5,000 units">1,000 – 5,000 units (Volume)</option>
                      <option value="5,000+ units">5,000+ units (Container)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-requirements" className="block font-semibold text-slate-700 mb-1">
                    Target Marketplace & Notes (Optional)
                  </label>
                  <textarea
                    id="quote-requirements"
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="e.g. Planning to launch on Amazon or Flipkart with custom packaging."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#6545D9]/20"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 w-3.5 h-3.5 rounded text-[#6545D9] focus:ring-[#6545D9]"
                    />
                    <span className="text-[11px] text-[#777187] leading-relaxed">
                      I consent to FortuneMakers Services contacting me regarding this commercial wholesale inquiry.
                    </span>
                  </label>
                  {formErrors.consent && <p className="text-red-500 mt-1">{formErrors.consent}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-semibold text-white bg-[#160D35] hover:bg-[#39216D] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? <span>Processing Request...</span> : (
                    <>
                      <span>Request Sourcing Quote</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
