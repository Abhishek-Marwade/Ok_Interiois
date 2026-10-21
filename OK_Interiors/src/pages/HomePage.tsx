import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Camera, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Hero3DCanvas } from '../components/3d/Hero3DCanvas';
import { BeforeAfterSlider } from '../components/interactive/BeforeAfterSlider';
import { MaterialsExplorer } from '../components/interactive/MaterialsExplorer';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { siteConfig, getWhatsAppUrl } from '../data/siteConfig';
import { testimonials } from '../data/testimonials';

export const HomePage: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen">
      
      {/* 1. CINEMATIC 3D INTERIOR HERO */}
      <section className="relative">
        <Hero3DCanvas />
      </section>

      {/* 2. STUDIO INTRODUCTION & ARCHITECTURAL ETHOS */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: EDITORIAL INTRO */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D]">
                <Compass className="w-3.5 h-3.5" />
                Architectural Interior Practice
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#171615] leading-[1.12]">
                We shape environments that speak with <span className="italic font-normal">quiet authority</span> and timeless warmth.
              </h2>

              <p className="text-[#635C52] text-base sm:text-lg leading-relaxed font-light">
                OK Interiors was founded on the belief that a well-designed space is not about excessive ornamentation, but about the profound relationship between natural light, honest materials, and intuitive proportions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E7E2D8]">
                {siteConfig.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="block font-serif text-2xl sm:text-3xl font-light text-[#171615]">
                      {s.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#8C8477]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: CURATED IMAGE COMPOSITION */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E7E2D8] aspect-[4/5] group">
                <img
                  src="/images/projects/living_minimalist.jpg"
                  alt="Limestone architectural living room"
                  className="w-full h-full object-cover img-hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FBF9F5]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880]">
                    Signature Composition
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-light mt-1">
                    Light, Proportion & Materiality
                  </p>
                </div>
              </div>

              {/* FLOATING SUBTLE ACCENT BADGE */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#171615] text-[#FBF9F5] shadow-2xl border border-[#383430]">
                <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                <div className="text-left">
                  <span className="text-xs font-serif block">Turnkey Realization</span>
                  <span className="text-[10px] text-[#A39E95] font-mono">From Concept to Key Handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section className="py-24 sm:py-32 bg-[#F5F2EB] border-y border-[#EAE4D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-3">
                Selected Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#171615]">
                Curated Spaces Crafted With <span className="italic">Intention</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#171615] hover:text-[#A3875D] transition-colors pb-1 border-b border-[#171615]"
            >
              View Full Archive ({projects.length} Projects)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* EDITORIAL ASYMMETRIC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className={`group block space-y-4 ${idx === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#EAE4D8] border border-[#DDD5C7] shadow-sm">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#171615]/20 group-hover:bg-[#171615]/10 transition-colors" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-5 left-5 px-3.5 py-1 rounded-full bg-[#171615]/80 backdrop-blur-md text-[#FBF9F5] text-[11px] font-mono tracking-wider border border-[#C5A880]/30">
                    {project.category}
                  </div>

                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FBF9F5] text-[#171615] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="flex items-center justify-between text-xs text-[#8C8477] font-mono">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171615] font-light group-hover:text-[#A3875D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E675D] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block">
              Architectural Transformation
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#171615]">
              From Raw Space to <span className="italic">Timeless Sanctuary</span>
            </h2>
            <p className="text-[#6E675D] text-sm sm:text-base leading-relaxed">
              Experience the power of comprehensive space planning, natural daylight infusion, and bespoke joinery. Drag the interactive divider to witness the transformation.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage="/images/projects/renovation_before.jpg"
            afterImage="/images/projects/renovation_after.jpg"
            beforeLabel="Pre-Renovation Raw Condition"
            afterLabel="OK Interiors Luxury Transformation"
          />
        </div>
      </section>

      {/* 5. TACTILE MATERIALITY EXPLORER */}
      <MaterialsExplorer />

      {/* 6. SERVICES OVERVIEW */}
      <section className="py-24 sm:py-32 bg-[#171615] text-[#FBF9F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
                Disciplines & Services
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#FBF9F5] leading-tight">
                Complete Turnkey Interior <span className="italic text-[#C5A880]">Architecture</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#C5A880] hover:text-[#D8BD98] transition-colors pb-1 border-b border-[#C5A880]"
            >
              Explore All Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-[#201E1C] border border-[#332F2A] hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#292622] border border-[#3D3832] flex items-center justify-center text-[#C5A880]">
                    <Sparkles className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#FBF9F5] font-light group-hover:text-[#C5A880] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A39E95] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#2E2A25]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#8C8477]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2E2A25] flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-mono uppercase tracking-widest text-[#C5A880] hover:underline"
                  >
                    View Scope
                  </Link>
                  <a
                    href={getWhatsAppUrl(`Hello OK Interiors, I am inquiring regarding your ${service.title} services.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A39E95] hover:text-[#C5A880] flex items-center gap-1 font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C5A880]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL DESIGN METHODOLOGY */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-3">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#171615]">
              The 4-Stage Architectural <span className="italic">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Spatial Immersion & Brief",
                desc: "We analyze site orientation, daylight vectors, structural flows, and the daily rituals of the client to define an uncompromising design brief."
              },
              {
                step: "02",
                title: "3D Visualization & Finishes",
                desc: "Translating concepts into photorealistic 3D environments, curating tactile stone and timber samples to lock in the material narrative."
              },
              {
                step: "03",
                title: "Artisanal Millwork & Craft",
                desc: "Precision engineering of bespoke cabinetry, stone masonry, and lighting systems with vetted master artisans and fabricators."
              },
              {
                step: "04",
                title: "Turnkey Installation",
                desc: "Rigorous site supervision overseeing flawless acoustic treatments, MEP integration, soft furnishings, and key handover."
              }
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F5F2EB] border border-[#E7E2D8] space-y-4 hover:border-[#C5A880] transition-colors"
              >
                <span className="font-serif text-4xl text-[#A3875D] font-light block">
                  {p.step}
                </span>
                <h3 className="font-serif text-xl text-[#171615] font-light">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E675D] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT ENDORSEMENTS (Honest Sample Status clearly labeled) */}
      <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE4D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-2">
              Client Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#171615]">
              Words from Our Patrons
            </h2>
            <p className="text-[11px] font-mono text-[#8C8477] mt-1">
              [Editorial sample testimonials pending client authorization]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-6 flex flex-col justify-between shadow-sm"
              >
                <p className="font-serif text-lg sm:text-xl text-[#171615] leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#EAE4D8] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#171615]">{t.clientInitials}</span>
                  <span className="text-[#8C8477] font-mono">{t.projectType} • {t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM SHOWCASE */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] mb-2">
                <Camera className="w-3.5 h-3.5" />
                Instagram Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#171615]">
                Behind the Scenes at <span className="italic">{siteConfig.social.instagramHandle}</span>
              </h2>
            </div>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171615] text-[#FBF9F5] text-xs uppercase font-mono tracking-wider hover:bg-[#A3875D] transition-colors"
            >
              Follow On Instagram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* EDITORIAL GALLERY TILES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { img: "/images/projects/living_minimalist.jpg", title: "Living Architecture" },
              { img: "/images/projects/kitchen_luxury.jpg", title: "Calacatta Waterfall" },
              { img: "/images/projects/bedroom_suite.jpg", title: "Acoustic Retreat" },
              { img: "/images/projects/dining_sanctuary.jpg", title: "Sculptural Dining" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square bg-[#EAE4D8] border border-[#DDD5C7]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#171615]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-[#FBF9F5]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONSULTATION CTA BANNER */}
      <section className="py-20 sm:py-28 bg-[#171615] text-[#FBF9F5] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] inline-block">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
            Ready to build a space designed <span className="italic text-[#C5A880]">around you?</span>
          </h2>
          <p className="text-[#A39E95] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether embarking on a complete residential build, a modular kitchen upgrade, or a commercial space renovation, we invite you to discuss your vision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#C5A880] text-[#171615] text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-[#D8BD98] transition-all shadow-xl shadow-[#C5A880]/20 flex items-center gap-2"
            >
              Book Studio Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppUrl("Hello OK Interiors, I'd like to book an interior design consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#201E1C] border border-[#3D3832] text-[#FBF9F5] text-xs sm:text-sm uppercase tracking-widest font-medium hover:border-[#C5A880] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A880]" />
              Quick WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
