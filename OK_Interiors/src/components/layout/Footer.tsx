import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Camera, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-[#a8a196] border-t border-[#262320] pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#24211e]">
          
          {/* COL 1 & 2: BRAND STATEMENT */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1c1a18] border border-[#c5a880]/40 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-[#c5a880]">OK</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl tracking-widest text-[#fbf9f5] font-medium leading-none">
                  OK INTERIORS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8f887c] mt-1 font-mono">
                  SPACES THAT MOVE YOU
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#8c8477] leading-relaxed max-w-sm">
              Thoughtfully designed interiors that bring beauty, functionality, and personality into every space. Bespoke residential, modular kitchens, and architectural renovations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1c1a18] border border-[#332f2a] flex items-center justify-center text-[#e6ded3] hover:text-[#c5a880] hover:border-[#c5a880] transition-all"
                aria-label="OK Interiors Instagram Profile"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1c1a18] border border-[#332f2a] flex items-center justify-center text-[#e6ded3] hover:text-[#c5a880] hover:border-[#c5a880] transition-all"
                aria-label="Direct WhatsApp message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-10 h-10 rounded-full bg-[#1c1a18] border border-[#332f2a] flex items-center justify-center text-[#e6ded3] hover:text-[#c5a880] hover:border-[#c5a880] transition-all"
                aria-label="Email OK Interiors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 3: NAVIGATION */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#fbf9f5] font-mono font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[#9e9587] hover:text-[#c5a880] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: SERVICES */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#fbf9f5] font-mono font-medium">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link to="/services" className="text-[#9e9587] hover:text-[#c5a880] transition-colors">
                  Residential Interiors
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#9e9587] hover:text-[#c5a880] transition-colors">
                  Modular Kitchen Suites
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#9e9587] hover:text-[#c5a880] transition-colors">
                  Living & Dining Sanctuaries
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#9e9587] hover:text-[#c5a880] transition-colors">
                  Boutique Commercial
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#9e9587] hover:text-[#c5a880] transition-colors">
                  Full Spatial Renovations
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 5: STUDIO CONTACT */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#fbf9f5] font-mono font-medium">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#9e9587]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#c5a880] transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#c5a880] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] hover:underline"
                >
                  Follow {siteConfig.social.instagramHandle} on Instagram
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT & BACK-TO-TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e675d]">
          <p>© {new Date().getFullYear()} OK Interiors. All rights reserved. Designed with architectural precision.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono">
              Static Portfolio Edition
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#a8a196] hover:text-[#c5a880] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
