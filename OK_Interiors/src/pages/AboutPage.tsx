import React from 'react';
import { Compass, Sparkles, HeartHandshake, Eye, ShieldCheck, ArrowRight, Camera } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* EDITORIAL HERO */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D]">
            <Compass className="w-3.5 h-3.5" />
            Studio Introduction
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#171615] leading-[1.1]">
            Architecture of Stillness, Warmth & <span className="italic">Purpose</span>
          </h1>
          <p className="text-[#686259] text-base sm:text-xl leading-relaxed font-light">
            OK Interiors is an interior architecture practice dedicated to shaping bespoke residential sanctuaries, sculptural kitchens, and refined commercial environments.
          </p>
        </div>

        {/* HERO IMAGE BANNER */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-[#EAE4D8] border border-[#DDD5C7] mb-20 shadow-xl">
          <img
            src="/images/projects/living_minimalist.jpg"
            alt="OK Interiors architectural design philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171615]/80 via-[#171615]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 sm:left-12 max-w-lg text-[#FBF9F5]">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C5A880]">
              The Core Belief
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light mt-2">
              "Spaces Designed Around You."
            </h3>
          </div>
        </div>

        {/* THREE CORE PRINCIPLES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-4">
            <Eye className="w-7 h-7 text-[#A3875D]" />
            <h3 className="text-2xl font-serif font-light text-[#171615]">
              Proportion & Light
            </h3>
            <p className="text-xs sm:text-sm text-[#635C52] leading-relaxed">
              We shape walls, apertures, and ceilings to sculpt daylight. A room with balanced natural light reduces visual tension and fosters emotional tranquility throughout the day.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-4">
            <Sparkles className="w-7 h-7 text-[#A3875D]" />
            <h3 className="text-2xl font-serif font-light text-[#171615]">
              Honest Materiality
            </h3>
            <p className="text-xs sm:text-sm text-[#635C52] leading-relaxed">
              We reject fleeting decorative trends in favor of materials with geological and biological integrity: French limestone, vein-cut travertine, smoked walnut, and natural linen.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-4">
            <HeartHandshake className="w-7 h-7 text-[#A3875D]" />
            <h3 className="text-2xl font-serif font-light text-[#171615]">
              Bespoke Individuality
            </h3>
            <p className="text-xs sm:text-sm text-[#635C52] leading-relaxed">
              No two clients live alike. We avoid repetitive design templates, instead creating tailored layouts and bespoke millwork that organically reflect how you cook, gather, and rest.
            </p>
          </div>
        </div>

        {/* FOUNDER & STUDIO ETHOS SECTION */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#171615] text-[#FBF9F5] mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
              From the Studio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light leading-snug">
              "We don't merely decorate rooms. We curate the stage where life unfolds."
            </h2>
            <p className="text-[#A39E95] text-sm sm:text-base leading-relaxed">
              Every curve of a millwork fluting, every grain alignment in a marble slab, and every concealed LED reveal is calibrated with singular focus: to create spaces that move you.
            </p>
            <div className="pt-4 border-t border-[#332F2A] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#201E1C] border border-[#C5A880]/40 flex items-center justify-center font-serif text-lg text-[#C5A880] font-bold">
                OK
              </div>
              <div>
                <span className="font-serif text-lg block text-[#FBF9F5]">OK Interiors</span>
                <span className="text-xs font-mono text-[#8C8477]">Design Direction & Architecture</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square border border-[#383430]">
            <img
              src="/images/projects/dining_sanctuary.jpg"
              alt="Architectural detailing at OK Interiors"
              className="w-full h-full object-cover img-hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#C5A880]">
              Sculptural Dining Pavilion • Private Commission
            </div>
          </div>
        </div>

        {/* INSTAGRAM CONNECT */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3875D]">
            <Camera className="w-4 h-4" />
            Connect With Our Work
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171615]">
            Follow Our Architectural Journey
          </h3>
          <p className="text-xs sm:text-sm text-[#6E675D]">
            Follow <span className="font-semibold text-[#171615]">{siteConfig.social.instagramHandle}</span> on Instagram for daily studio sketches, material selection trips, and on-site construction updates.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#171615] text-[#FBF9F5] text-xs uppercase font-mono tracking-wider hover:bg-[#A3875D] transition-colors"
            >
              Open Instagram Profile
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
