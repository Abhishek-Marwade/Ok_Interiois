import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { getWhatsAppUrl } from '../data/siteConfig';
import { BeforeAfterSlider } from '../components/interactive/BeforeAfterSlider';
import { ImageLightbox } from '../components/interactive/ImageLightbox';
import { ArrowLeft, ArrowRight, MessageCircle, Calendar, MapPin, Maximize2, Layers } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  const openLightbox = (index: number) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* BACK BREADCRUMB */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C] hover:text-[#171615] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Projects Archive
          </Link>
        </div>

        {/* PROJECT HERO HEADER */}
        <div className="max-w-4xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#A3875D]">
            <span className="px-3 py-1 rounded-full bg-[#EAE4D8] text-[#544E45]">
              {project.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {project.year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {project.location}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#171615] leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-[#635C52] text-lg sm:text-xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* HERO IMAGE (Clickable to Lightbox) */}
        <div
          onClick={() => openLightbox(0)}
          className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-[#EAE4D8] border border-[#DDD5C7] mb-16 shadow-xl cursor-pointer group"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover img-hover-scale"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center">
            <div className="px-4 py-2 rounded-full bg-[#171615]/80 backdrop-blur-md text-[#FBF9F5] text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-[#C5A880]" />
              View High-Resolution Image
            </div>
          </div>
        </div>

        {/* PROJECT SPECS & EDITORIAL NARRATIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-20">
          
          {/* LEFT: BRIEF & DESIGN APPROACH */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-3">
                01 / The Design Brief
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171615] mb-4">
                Vision & Spatial Objectives
              </h3>
              <p className="text-[#595247] text-base sm:text-lg leading-relaxed font-light">
                {project.designBrief}
              </p>
            </div>

            <div className="pt-8 border-t border-[#E7E2D8]">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-3">
                02 / Architectural Approach
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171615] mb-4">
                Materiality & Execution
              </h3>
              <p className="text-[#595247] text-base sm:text-lg leading-relaxed font-light">
                {project.designApproach}
              </p>
            </div>

            {/* MATERIALS PALETTE CALLOUT */}
            <div className="pt-8 border-t border-[#E7E2D8]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] mb-4">
                <Layers className="w-3.5 h-3.5" />
                Curated Materials & Finishes
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-[#EAE4D8] border border-[#DDD5C7] text-xs font-medium text-[#292524]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: PROJECT FACTS & QUICK ENQUIRY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD4] space-y-6 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#171615] pb-3 border-b border-[#EAE4D8]">
                Project Specifications
              </h4>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#8C8477] block uppercase text-[10px]">Built Area</span>
                  <span className="text-sm font-semibold text-[#171615]">{project.specs.area}</span>
                </div>
                <div>
                  <span className="text-[#8C8477] block uppercase text-[10px]">Execution Timeline</span>
                  <span className="text-sm font-semibold text-[#171615]">{project.specs.timeline}</span>
                </div>
                <div>
                  <span className="text-[#8C8477] block uppercase text-[10px]">Scope of Works</span>
                  <span className="text-sm font-semibold text-[#171615]">{project.specs.scope}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE4D8] space-y-3">
                <a
                  href={getWhatsAppUrl(`Hello OK Interiors, I am admiring your project "${project.title}" and would like to discuss a similar project for my space.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#171615] text-[#FBF9F5] text-xs uppercase font-mono tracking-wider font-semibold hover:bg-[#A3875D] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  Inquire This Style
                </a>

                <Link
                  to="/contact"
                  className="w-full py-3 rounded-full bg-[#EAE4D8] text-[#292524] text-xs uppercase font-mono tracking-wider text-center block hover:bg-[#DDD5C7] transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BEFORE & AFTER SLIDER (If applicable) */}
        {project.hasBeforeAfter && (
          <div className="mb-20 pt-12 border-t border-[#E7E2D8]">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block">
                Renovation Benchmark
              </span>
              <h3 className="text-3xl font-serif font-light text-[#171615]">
                Before & After Comparison
              </h3>
            </div>
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Pre-Existing Raw Condition"
              afterLabel="OK Interiors Transformed Space"
            />
          </div>
        )}

        {/* GALLERY MOSAIC */}
        {project.galleryImages.length > 1 && (
          <div className="mb-20 pt-12 border-t border-[#E7E2D8]">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D] block mb-2">
                Visual Documentation
              </span>
              <h3 className="text-3xl font-serif font-light text-[#171615]">
                Project Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#EAE4D8] border border-[#DDD5C7] cursor-pointer group shadow-sm"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-[#FBF9F5]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RELATED PROJECTS */}
        <div className="pt-16 border-t border-[#E7E2D8]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-serif font-light text-[#171615]">
              Explore Other Spaces
            </h3>
            <Link
              to="/projects"
              className="text-xs font-mono uppercase tracking-widest text-[#A3875D] hover:underline"
            >
              All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/projects/${rel.slug}`}
                className="group flex flex-col sm:flex-row gap-6 items-center p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#C5A880] transition-colors"
              >
                <div className="w-full sm:w-44 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover img-hover-scale" />
                </div>
                <div className="space-y-1 text-left flex-1">
                  <span className="text-[10px] font-mono uppercase text-[#A3875D]">{rel.category}</span>
                  <h4 className="font-serif text-xl text-[#171615] group-hover:text-[#A3875D] transition-colors">{rel.title}</h4>
                  <p className="text-xs text-[#6E675D] line-clamp-2">{rel.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#8C8477] group-hover:translate-x-1 transition-transform shrink-0 hidden sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      <ImageLightbox
        images={project.galleryImages}
        currentIndex={activePhotoIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActivePhotoIdx((prev) => (prev + 1) % project.galleryImages.length)}
        onPrev={() => setActivePhotoIdx((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length)}
        title={project.title}
      />
    </div>
  );
};
