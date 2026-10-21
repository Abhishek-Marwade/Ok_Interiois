import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* TOP BAR */}
      <div
        className="w-full flex items-center justify-between text-[#e6ded3] max-w-7xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {title && <h4 className="font-serif text-lg sm:text-xl text-[#fbf9f5]">{title}</h4>}
          <span className="text-xs font-mono text-[#a39e95]">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#201e1c] text-[#fbf9f5] hover:text-[#c5a880] border border-[#3b3630] transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* MAIN IMAGE VIEWPORT */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={title || `Gallery photograph ${currentIndex + 1}`}
          className="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl border border-[#2b2724]"
        />

        {/* PREVIOUS BUTTON */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1a18]/90 text-[#fbf9f5] hover:text-[#c5a880] border border-[#383430] backdrop-blur-md transition-all shadow-xl"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* NEXT BUTTON */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c1a18]/90 text-[#fbf9f5] hover:text-[#c5a880] border border-[#383430] backdrop-blur-md transition-all shadow-xl"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* BOTTOM THUMBNAIL ROW */}
      <div
        className="max-w-2xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx > currentIndex) {
                for (let i = currentIndex; i < idx; i++) onNext();
              } else if (idx < currentIndex) {
                for (let i = currentIndex; i > idx; i--) onPrev();
              }
            }}
            className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
              idx === currentIndex ? 'border-[#c5a880] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
