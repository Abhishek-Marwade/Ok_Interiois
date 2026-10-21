import React, { useState } from 'react';
import { Mail, Phone, MapPin, Camera, MessageCircle, Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/siteConfig';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Interior',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone format.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your space or requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Because this is a static site without an external form provider endpoint configured yet,
    // we generate a formatted WhatsApp message or provide external endpoint integration instructions.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback gracefully
      }
    }, 800);
  };

  const sendViaWhatsApp = () => {
    const formattedMsg = `*New Design Consultation Request*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Project Type:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(formData.location || 'N/A')}%0A*Details:* ${encodeURIComponent(formData.message)}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${formattedMsg}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D]">
            <Sparkles className="w-3.5 h-3.5" />
            Studio Consultations
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#171615] leading-[1.1]">
            Let's Discuss Your <span className="italic">Vision</span>
          </h1>
          <p className="text-[#686259] text-base sm:text-lg leading-relaxed">
            Every project begins with a conversation. Share the details of your apartment, villa, or commercial space to schedule an architectural consultation.
          </p>
        </div>

        {/* OWNER CONFIGURATION NOTICE (Marked clearly for gift handover) */}
        {!siteConfig.contact.isContactVerified && (
          <div className="mb-12 p-4 rounded-2xl bg-[#EFECE6] border border-[#DDD5C7] flex items-start gap-3 text-xs text-[#595247]">
            <Info className="w-5 h-5 text-[#A3875D] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#171615] block mb-0.5">Note for OK Interiors Studio:</span>
              Contact numbers, email, and address currently use editable placeholders in <code className="bg-[#E2DDD3] px-1.5 py-0.5 rounded font-mono text-[#171615]">src/data/siteConfig.ts</code>. You can easily update them with verified numbers anytime.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: CONTACT DETAILS & CHANNELS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl font-light text-[#171615]">
                Direct Studio Channels
              </h3>

              <div className="space-y-5 text-xs">
                {/* WHATSAPP */}
                <a
                  href={getWhatsAppUrl("Hello OK Interiors, I would like to schedule a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F0EBE2] hover:bg-[#E5DFD4] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171615] text-[#C5A880] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A7266] block">
                      Fastest Response
                    </span>
                    <span className="text-sm font-semibold text-[#171615] group-hover:text-[#A3875D] transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>

                {/* PHONE */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0EBE2]">
                  <div className="w-10 h-10 rounded-xl bg-[#171615] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A7266] block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-semibold text-[#171615] hover:text-[#A3875D] transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0EBE2]">
                  <div className="w-10 h-10 rounded-xl bg-[#171615] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A7266] block">
                      Direct Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-[#171615] hover:text-[#A3875D] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* ADDRESS & HOURS */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0EBE2]">
                  <div className="w-10 h-10 rounded-xl bg-[#171615] text-[#C5A880] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A7266] block">
                      Studio Location & Hours
                    </span>
                    <p className="text-xs font-semibold text-[#171615]">
                      {siteConfig.contact.address}, {siteConfig.contact.city}
                    </p>
                    <p className="text-[11px] text-[#78716C] mt-1 font-mono">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* INSTAGRAM BADGE */}
              <div className="pt-4 border-t border-[#EAE4D8]">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#171615] text-[#FBF9F5] hover:bg-[#A3875D] transition-colors text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#C5A880]" />
                    <span>Follow {siteConfig.social.instagramHandle}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A39E95]">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONSULTATION ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A3875D] block mb-1">
                  Enquiry Request
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#171615]">
                  Schedule an Initial Design Session
                </h3>
              </div>

              {submitStatus === 'success' ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#EAE4D8] text-[#A3875D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-[#171615]">Thank You, {formData.name}</h4>
                    <p className="text-xs sm:text-sm text-[#6E675D] max-w-md mx-auto leading-relaxed">
                      Your consultation request has been prepared. For instant response, click below to send your details directly via WhatsApp to our team.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={sendViaWhatsApp}
                      className="px-6 py-3.5 rounded-full bg-[#171615] text-[#FBF9F5] text-xs uppercase font-mono tracking-wider font-semibold hover:bg-[#A3875D] transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                      Send Details via WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-3.5 rounded-full bg-[#EAE4D8] text-[#292524] text-xs uppercase font-mono tracking-wider hover:bg-[#DDD5C7] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border text-sm text-[#171615] placeholder-[#8F887C] focus:bg-[#FAF8F5] transition-all ${
                        errors.name ? 'border-red-500' : 'border-[#DDD5C7]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* PHONE & EMAIL ROW */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                        Phone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border text-sm text-[#171615] placeholder-[#8F887C] focus:bg-[#FAF8F5] transition-all ${
                          errors.phone ? 'border-red-500' : 'border-[#DDD5C7]'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border text-sm text-[#171615] placeholder-[#8F887C] focus:bg-[#FAF8F5] transition-all ${
                          errors.email ? 'border-red-500' : 'border-[#DDD5C7]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* PROJECT TYPE & LOCATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                        Project Scope / Discipline
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border border-[#DDD5C7] text-sm text-[#171615] focus:bg-[#FAF8F5] transition-all"
                      >
                        <option>Residential Interior</option>
                        <option>Modular Kitchen Suite</option>
                        <option>Living & Dining Renovation</option>
                        <option>Master Suite & Bedroom</option>
                        <option>Commercial Studio / Office</option>
                        <option>Full Architectural Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                        Project City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. South Delhi, Gurugram"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border border-[#DDD5C7] text-sm text-[#171615] placeholder-[#8F887C] focus:bg-[#FAF8F5] transition-all"
                      >
                      </input>
                    </div>
                  </div>

                  {/* MESSAGE / VISION */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#544E45] mb-2">
                      About Your Space & Vision <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share approximate square footage, timeline expectations, or specific design aesthetics you wish to explore..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F0EBE2] border text-sm text-[#171615] placeholder-[#8F887C] focus:bg-[#FAF8F5] transition-all ${
                        errors.message ? 'border-red-500' : 'border-[#DDD5C7]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* PRIVACY STATEMENT */}
                  <p className="text-[11px] text-[#7A7266] leading-relaxed">
                    By submitting, you agree to allow OK Interiors to contact you regarding your interior design enquiry. We treat your personal details with absolute confidentiality.
                  </p>

                  {/* ACTION BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#171615] text-[#FBF9F5] text-xs uppercase font-mono tracking-widest font-semibold hover:bg-[#A3875D] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>Processing Consultation...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A880]" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
