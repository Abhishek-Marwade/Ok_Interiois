import React, { useState } from 'react';
import { materials, MaterialItem } from '../../data/materials';
import { Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MaterialsExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(materials[0].id);
  const activeMaterial: MaterialItem = materials.find((m) => m.id === selectedId) || materials[0];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EB] text-[#292524] relative overflow-hidden">
      {/* Background architectural watermarks */}
      <div className="absolute top-10 right-10 text-[180px] font-serif font-light text-[#ece6dc] select-none pointer-events-none -z-0">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] mb-3">
            <Layers className="w-3.5 h-3.5" />
            Tactile Materiality
          </div>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-[#171615] leading-[1.15] mb-5">
            The Philosophy of <span className="italic">Raw & Refined</span> Textures
          </h2>
          <p className="text-[#686259] text-base sm:text-lg leading-relaxed">
            We believe an extraordinary interior is felt before it is understood. Explore our foundational palette of natural stones, smoked hardwoods, woven linens, and hand-patinated bronzes.
          </p>
        </div>

        {/* MATERIAL PALETTE TABS */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 border-b border-[#ded7cc] pb-6">
          {materials.map((mat) => {
            const isSelected = mat.id === selectedId;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedId(mat.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#171615] text-[#FBF9F5] shadow-lg scale-105'
                    : 'bg-[#EAE4D8] text-[#544E45] hover:bg-[#DDD5C7]'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: mat.colorCode }}
                />
                <span>{mat.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
              </button>
            );
          })}
        </div>

        {/* ACTIVE MATERIAL SHOWCASE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#FAF8F5] rounded-3xl border border-[#E5DFD4] p-6 sm:p-10 shadow-sm">
          
          {/* LEFT: IMAGE PREVIEW */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[440px] group">
            <img
              src={activeMaterial.visualPreview}
              alt={activeMaterial.name}
              className="w-full h-full object-cover img-hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880]">
                  Architectural Specimen
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FBF9F5] font-light">
                  {activeMaterial.name}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#171615]/70 backdrop-blur-md border border-[#C5A880]/30 text-[11px] text-[#E7E2D8]">
                {activeMaterial.origin}
              </div>
            </div>
          </div>

          {/* RIGHT: SPECIFICATIONS & SENSORY PROFILE */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#A3875D] mb-2">
                <span>Category: {activeMaterial.category}</span>
                <span>•</span>
                <span>Finish: {activeMaterial.finish}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-serif text-[#171615] font-light mb-3">
                {activeMaterial.subheading}
              </h4>

              <p className="text-[#595247] leading-relaxed text-sm sm:text-base mb-6">
                {activeMaterial.description}
              </p>

              {/* TACTILE SENSATION CALLOUT */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EBE2] border border-[#E0D8CB] space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171615]">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  Tactile & Sensory Feel
                </div>
                <p className="text-xs sm:text-sm text-[#5C5449] italic">
                  "{activeMaterial.tactileSensory}"
                </p>
              </div>

              {/* RECOMMENDED APPLICATIONS */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#736B60] block">
                  Recommended Architectural Application:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeMaterial.bestUsedFor.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#EAE4D8] text-[#36312A] text-xs font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="pt-6 border-t border-[#E5DFD4] flex items-center justify-between">
              <span className="text-xs text-[#7A7266] italic">
                Care: {activeMaterial.careNotes}
              </span>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-widest text-[#171615] hover:text-[#A3875D] font-medium"
              >
                Inquire Samples
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
