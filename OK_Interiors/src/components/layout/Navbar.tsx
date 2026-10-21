import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#171615]/95 backdrop-blur-md py-3.5 border-b border-[#2d2925] shadow-xl'
          : 'bg-gradient-to-b from-[#171615]/80 via-[#171615]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* LOGO: Monogram + Editorial Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#201e1c] border border-[#c5a880]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#c5a880] group-hover:scale-105">
            <span className="font-serif text-lg font-bold text-[#c5a880] tracking-wider">OK</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg tracking-widest text-[#fbf9f5] font-medium leading-none group-hover:text-[#c5a880] transition-colors">
              OK INTERIORS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#a39e95] mt-1 font-mono">
              Architecture & Design
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 ${
                  isActive
                    ? 'text-[#c5a880] font-medium'
                    : 'text-[#d4cec5] hover:text-[#fbf9f5]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a880] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTION BUTTONS (WhatsApp & Consultation) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#201e1c] border border-[#3b3630] text-[#c5a880] text-xs uppercase tracking-wider hover:border-[#c5a880] transition-all"
            title="Chat directly with OK Interiors on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-[#c5a880] text-[#171615] text-xs font-semibold uppercase tracking-wider hover:bg-[#d8bd98] transition-all flex items-center gap-1.5 shadow-md"
          >
            Book Consultation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#201e1c] text-[#c5a880] border border-[#38332c]"
            aria-label="WhatsApp Quick Contact"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#201e1c] border border-[#38332c] text-[#fbf9f5] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-[#171615]/98 backdrop-blur-xl border-t border-[#292622] p-6 flex flex-col justify-between z-50">
          <div className="flex flex-col space-y-4 py-6">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8a8277]">
              Navigation
            </span>
            {siteConfig.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-2xl font-serif py-2 border-b border-[#262320] flex items-center justify-between ${
                    isActive ? 'text-[#c5a880] italic' : 'text-[#fbf9f5]'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#8a8277]" />
                </Link>
              );
            })}
          </div>

          <div className="space-y-3 pt-6 border-t border-[#262320]">
            <Link
              to="/contact"
              className="w-full py-3.5 rounded-full bg-[#c5a880] text-[#171615] text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Start Consultation
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#201e1c] border border-[#3d3832] text-[#f5f2eb] text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#c5a880]" />
              Connect via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
