import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Sun, Sunset, Moon, Sparkles, Compass, Eye, ArrowRight, ArrowDown } from 'lucide-react';
import { ArchitecturalRoomScene, LightingMode, TableMaterial, WoodMaterial } from './ArchitecturalRoomScene';
import { Link } from 'react-router-dom';

interface Hero3DCanvasProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  onExploreClick,
}) => {
  const [lighting, setLighting] = useState<LightingMode>('daylight');
  const [tableMat, setTableMat] = useState<TableMaterial>('travertine');
  const [woodMat, setWoodMat] = useState<WoodMaterial>('walnut');
  const [isInteractive, setIsInteractive] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check WebGL support & screen size
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebGLSupported(supported);
    } catch {
      setWebGLSupported(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[92vh] min-h-[640px] max-h-[1050px] bg-[#141312] overflow-hidden select-none">
      
      {/* 3D Canvas or High-Performance Static Fallback */}
      {webGLSupported ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-[#171615] flex items-center justify-center">
              <div className="text-center text-[#c5a880] space-y-3">
                <div className="w-8 h-8 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs uppercase tracking-widest font-mono">Loading 3D Interior Showroom...</p>
              </div>
            </div>
          }
        >
          <Canvas
            shadows
            dpr={[1, Math.min(window.devicePixelRatio, 2)]}
            gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <PerspectiveCamera makeDefault position={[0, 1.4, 7.8]} fov={isMobile ? 55 : 46} />
            
            <ArchitecturalRoomScene
              lightingMode={lighting}
              tableMaterial={tableMat}
              woodMaterial={woodMat}
            />

            {/* Bounded Orbit Controls when interactive mode is active */}
            {isInteractive && (
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2 - 0.05}
                minPolarAngle={Math.PI / 3}
                maxAzimuthAngle={Math.PI / 6}
                minAzimuthAngle={-Math.PI / 6}
                rotateSpeed={0.5}
                dampingFactor={0.05}
              />
            )}
          </Canvas>
        </Suspense>
      ) : (
        /* Fallback for devices without WebGL */
        <div className="absolute inset-0">
          <img
            src="/images/projects/living_minimalist.jpg"
            alt="OK Interiors architectural living room showcase"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-transparent" />
        </div>
      )}

      {/* Subtle Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#171615] via-transparent to-[#171615]/40" />

      {/* TOP BADGE: 3D Experience indicator */}
      <div className="absolute top-24 left-6 sm:left-12 z-20 flex items-center gap-3 text-xs tracking-widest uppercase">
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#201e1c]/80 backdrop-blur-md border border-[#c5a880]/30 text-[#e6ded3]">
          <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
          Interactive 3D Interior Showroom
        </span>
        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-mono ${
            isInteractive
              ? 'bg-[#c5a880] text-[#171615] border-[#c5a880]'
              : 'bg-[#201e1c]/60 text-[#a39e95] border-[#383430] hover:border-[#c5a880]'
          }`}
          title="Toggle free orbit rotation"
        >
          <Compass className="w-3.5 h-3.5" />
          {isInteractive ? 'Drag to Orbit: ON' : 'Enable Orbit View'}
        </button>
      </div>

      {/* 3D SCENE CUSTOMIZER FLOATING CONTROLS (Right Side) */}
      <div className="absolute top-24 right-4 sm:right-12 z-20 flex flex-col items-end gap-2 text-xs">
        {/* Lighting Mode Selector */}
        <div className="p-1.5 rounded-2xl bg-[#1c1a18]/90 backdrop-blur-md border border-[#383430] flex items-center gap-1 shadow-2xl">
          <button
            onClick={() => setLighting('daylight')}
            className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
              lighting === 'daylight'
                ? 'bg-[#c5a880] text-[#171615] font-semibold shadow-md'
                : 'text-[#a39e95] hover:text-[#f4efeb]'
            }`}
            title="Daylight Architecture Lighting"
          >
            <Sun className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Day</span>
          </button>
          <button
            onClick={() => setLighting('sunset')}
            className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
              lighting === 'sunset'
                ? 'bg-[#ff9d5c] text-[#171615] font-semibold shadow-md'
                : 'text-[#a39e95] hover:text-[#f4efeb]'
            }`}
            title="Sunset Golden Hour"
          >
            <Sunset className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sunset</span>
          </button>
          <button
            onClick={() => setLighting('evening')}
            className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
              lighting === 'evening'
                ? 'bg-[#3b4252] text-[#f4efeb] font-semibold shadow-md border border-[#525a6c]'
                : 'text-[#a39e95] hover:text-[#f4efeb]'
            }`}
            title="Evening Ambient Warm Lamp Mode"
          >
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Night</span>
          </button>
        </div>

        {/* 3D Material Switcher */}
        <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-2xl bg-[#1c1a18]/90 backdrop-blur-md border border-[#383430]">
          <span className="px-2 text-[10px] uppercase tracking-wider text-[#8a8277]">Table Stone:</span>
          <button
            onClick={() => setTableMat('travertine')}
            className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
              tableMat === 'travertine'
                ? 'bg-[#ddd5c7] text-[#292524] font-medium shadow'
                : 'text-[#8a8277] hover:text-white'
            }`}
          >
            Travertine
          </button>
          <button
            onClick={() => setTableMat('marble')}
            className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
              tableMat === 'marble'
                ? 'bg-[#edeae4] text-[#292524] font-medium shadow'
                : 'text-[#8a8277] hover:text-white'
            }`}
          >
            Calacatta
          </button>
        </div>

        {/* Wood slats switch */}
        <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-2xl bg-[#1c1a18]/90 backdrop-blur-md border border-[#383430]">
          <span className="px-2 text-[10px] uppercase tracking-wider text-[#8a8277]">Millwork:</span>
          <button
            onClick={() => setWoodMat('walnut')}
            className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
              woodMat === 'walnut'
                ? 'bg-[#533b2c] text-[#f7f5f0] font-medium shadow'
                : 'text-[#8a8277] hover:text-white'
            }`}
          >
            Smoked Walnut
          </button>
          <button
            onClick={() => setWoodMat('oak')}
            className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
              woodMat === 'oak'
                ? 'bg-[#bf9e75] text-[#241d17] font-medium shadow'
                : 'text-[#8a8277] hover:text-white'
            }`}
          >
            Natural Oak
          </button>
        </div>
      </div>

      {/* EDITORIAL HERO CONTENT OVERLAY (Bottom-Left) */}
      <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-12 md:left-16 z-20 max-w-2xl text-left pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs uppercase tracking-widest font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          OK Interiors Architecture Studio
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#fbf9f5] leading-[1.08] mb-4 font-serif">
          Spaces Designed <br />
          <span className="italic font-normal text-[#c5a880]">Around You.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#d4cec5] leading-relaxed max-w-xl font-light mb-8">
          Thoughtfully designed interiors that bring beauty, functionality, and personality into every space.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            onClick={onExploreClick}
            className="group px-7 py-3.5 rounded-full bg-[#c5a880] text-[#171615] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#d8bd98] hover:shadow-xl hover:shadow-[#c5a880]/20 flex items-center gap-2"
          >
            Explore Our Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#201e1c]/80 backdrop-blur-md text-[#f5f2eb] border border-[#45403a] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#2d2a27] hover:border-[#c5a880] flex items-center gap-2"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      {/* SCROLL TO DISCOVER INDICATOR */}
      <div className="hidden lg:flex absolute bottom-8 right-12 z-20 flex-col items-center gap-2 text-[#9e9587] pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-mono text-[#a89f92]">Scroll to Discover</span>
        <div className="w-6 h-10 rounded-full border border-[#524c44] flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2 rounded-full bg-[#c5a880] animate-bounce" />
        </div>
      </div>
    </div>
  );
};
