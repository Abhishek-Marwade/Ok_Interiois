import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = "/images/projects/renovation_before.jpg",
  afterImage = "/images/projects/renovation_after.jpg",
  beforeLabel = "Original Raw Condition",
  afterLabel = "Transformed by OK Interiors",
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 select-none">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[340px] sm:h-[480px] md:h-[560px] w-full overflow-hidden rounded-3xl cursor-ew-resize border border-[#DCD5C9] shadow-xl group"
      >
        {/* AFTER IMAGE (Background, Full) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER LABEL */}
        <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-[#171615]/80 backdrop-blur-md text-[#FBF9F5] text-xs uppercase font-mono tracking-wider border border-[#C5A880]/40">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
          {/* BEFORE LABEL */}
          <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-[#171615]/80 backdrop-blur-md text-[#E7E2D8] text-xs uppercase font-mono tracking-wider border border-[#78716C]/40">
            {beforeLabel}
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Vertical hairline */}
          <div className="w-[2px] h-full bg-[#FBF9F5] shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

          {/* Central Handle */}
          <div className="absolute w-10 h-10 rounded-full bg-[#171615] border-2 border-[#C5A880] text-[#C5A880] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* QUICK PRESET BUTTONS FOR KEYBOARD / TOUCH ACCESS */}
      <div className="flex items-center justify-between text-xs text-[#7A7266] font-mono px-2">
        <span>Drag slider to compare transformation</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSliderPos(20)}
            className="px-2.5 py-1 rounded bg-[#EAE4D8] hover:bg-[#DCD5C9] text-[#292524] transition-colors"
          >
            Show Before
          </button>
          <button
            onClick={() => setSliderPos(50)}
            className="px-2.5 py-1 rounded bg-[#EAE4D8] hover:bg-[#DCD5C9] text-[#292524] transition-colors"
          >
            Split 50/50
          </button>
          <button
            onClick={() => setSliderPos(80)}
            className="px-2.5 py-1 rounded bg-[#EAE4D8] hover:bg-[#DCD5C9] text-[#292524] transition-colors"
          >
            Show After
          </button>
        </div>
      </div>
    </div>
  );
};
