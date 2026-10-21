import React from 'react';
import { services } from '../data/services';
import { getWhatsAppUrl } from '../data/siteConfig';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck, Clock, Hammer } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D]">
            <Sparkles className="w-3.5 h-3.5" />
            Core Disciplines
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#171615] leading-[1.1]">
            Turnkey Architecture & <span className="italic">Interior Solutions</span>
          </h1>
          <p className="text-[#686259] text-base sm:text-lg leading-relaxed">
            From down-to-studs architectural renovations to bespoke modular kitchen systems and luxury residential styling, we bring meticulous craftsmanship to every square foot.
          </p>
        </div>

        {/* SERVICES DETAILED LIST */}
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] shadow-sm ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE */}
              <div className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#EAE4D8] border border-[#DDD5C7] group ${
                idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-[#FBF9F5]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880]">
                    Discipline 0{service.order}
                  </span>
                  <h4 className="font-serif text-xl font-light">
                    {service.title}
                  </h4>
                </div>
              </div>

              {/* DETAILS */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A3875D] block mb-2">
                    Scope & Methodology
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#171615] leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#595247] text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* DELIVERABLES */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7A7266] block">
                    Key Deliverables:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#453F36]">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A3875D] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IDEAL FOR CALLOUT */}
                <div className="p-4 rounded-xl bg-[#F0EBE2] border border-[#E0D8CB] text-xs text-[#5C5449] space-y-1">
                  <span className="font-semibold uppercase tracking-wider text-[#171615] block">
                    Ideal For:
                  </span>
                  <p>{service.idealFor}</p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppUrl(`Hello OK Interiors, I would like to consult regarding your "${service.title}" service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#171615] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#A3875D] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                    Inquire via WhatsApp
                  </a>

                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-full bg-[#EAE4D8] text-[#292524] text-xs font-mono uppercase tracking-wider hover:bg-[#DDD5C7] transition-colors"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GUARANTEES / COMMITMENT */}
        <div className="mt-24 p-10 sm:p-14 rounded-3xl bg-[#171615] text-[#FBF9F5] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Clock className="w-8 h-8 text-[#C5A880]" />
            <h4 className="font-serif text-xl font-light">Milestone Timelines</h4>
            <p className="text-xs text-[#A39E95] leading-relaxed">
              Transparent project scheduling with documented weekly site progress updates and strict milestone compliance.
            </p>
          </div>
          <div className="space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A880]" />
            <h4 className="font-serif text-xl font-light">Authentic Materials</h4>
            <p className="text-xs text-[#A39E95] leading-relaxed">
              Direct quarry and mill sourcing ensuring only calibrated stone, sustainable hardwoods, and verified hardware are utilized.
            </p>
          </div>
          <div className="space-y-3">
            <Hammer className="w-8 h-8 text-[#C5A880]" />
            <h4 className="font-serif text-xl font-light">Single-Point Accountability</h4>
            <p className="text-xs text-[#A39E95] leading-relaxed">
              Complete turnkey project oversight from conceptual drawings to installation and aftercare maintenance support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
