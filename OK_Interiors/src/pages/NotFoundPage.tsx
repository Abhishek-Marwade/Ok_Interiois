import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#171615] text-[#FBF9F5] min-h-screen flex items-center justify-center px-6 py-24 select-none">
      <div className="max-w-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#201E1C] border border-[#3D3832] text-[#C5A880] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] block">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#FBF9F5]">
          Space Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#A39E95] leading-relaxed">
          The architectural plan or page you are looking for may have been relocated, renovated, or does not exist in our archive.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-7 py-3.5 rounded-full bg-[#C5A880] text-[#171615] text-xs uppercase font-mono tracking-wider font-semibold hover:bg-[#D8BD98] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Studio Home
          </Link>

          <Link
            to="/projects"
            className="px-7 py-3.5 rounded-full bg-[#201E1C] border border-[#3D3832] text-[#FBF9F5] text-xs uppercase font-mono tracking-wider hover:border-[#C5A880] transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
