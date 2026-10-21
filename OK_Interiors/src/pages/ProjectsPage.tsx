import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories, Project } from '../data/projects';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");

  const filteredProjects: Project[] = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FBF9F5] text-[#292524] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* EDITORIAL HERO HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A3875D]">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Architecture & Interiors
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#171615] leading-[1.1]">
            Curated Portfolio of <span className="italic">Distinguished</span> Spaces
          </h1>
          <p className="text-[#686259] text-base sm:text-lg leading-relaxed">
            Each project is an architectural study in balance—grounded in honest materiality, natural light, and bespoke craftsmanship tailored to each client's way of living.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 border-b border-[#E7E2D8] no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8C8477] pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#A3875D]" />
            Filter:
          </div>

          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#171615] text-[#FBF9F5] shadow-md'
                    : 'bg-[#EAE4D8] text-[#595247] hover:bg-[#DDD5C7]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block space-y-4"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#EAE4D8] border border-[#DDD5C7] shadow-sm">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#171615]/20 group-hover:bg-[#171615]/10 transition-colors" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171615]/80 backdrop-blur-md text-[#FBF9F5] text-[11px] font-mono tracking-wider border border-[#C5A880]/30">
                  {project.category}
                </div>

                {project.hasBeforeAfter && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#C5A880] text-[#171615] text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Before / After
                  </div>
                )}

                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FBF9F5] text-[#171615] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1 px-1">
                <div className="flex items-center justify-between text-xs text-[#8C8477] font-mono">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#171615] font-light group-hover:text-[#A3875D] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E675D] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.materials.slice(0, 3).map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#EAE4D8] text-[10px] text-[#544E45] font-mono"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
