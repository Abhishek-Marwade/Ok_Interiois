import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export type LightingMode = 'daylight' | 'sunset' | 'evening';
export type TableMaterial = 'travertine' | 'marble';
export type WoodMaterial = 'walnut' | 'oak';

interface SceneProps {
  lightingMode: LightingMode;
  tableMaterial: TableMaterial;
  woodMaterial: WoodMaterial;
}

export const ArchitecturalRoomScene: React.FC<SceneProps> = ({
  lightingMode,
  tableMaterial,
  woodMaterial
}) => {
  const roomGroup = useRef<THREE.Group>(null);
  const lampLight = useRef<THREE.PointLight>(null);

  // Smooth mouse parallax
  useFrame((state) => {
    if (!roomGroup.current) return;
    const { pointer } = state;
    // Gentle sway based on cursor position
    roomGroup.current.rotation.y = THREE.MathUtils.lerp(
      roomGroup.current.rotation.y,
      pointer.x * 0.12,
      0.04
    );
    roomGroup.current.rotation.x = THREE.MathUtils.lerp(
      roomGroup.current.rotation.x,
      -pointer.y * 0.05,
      0.04
    );
  });

  // Dynamic Lighting parameters based on selected mode
  const lightSettings = {
    daylight: {
      sunColor: '#fff8ee',
      sunIntensity: 2.2,
      sunPos: [8, 9, 6] as [number, number, number],
      ambientIntensity: 0.9,
      ambientColor: '#f3efe8',
      lampIntensity: 0.2,
      bgWindow: '#dbeafe',
    },
    sunset: {
      sunColor: '#ff9d5c',
      sunIntensity: 2.8,
      sunPos: [9, 4, 7] as [number, number, number],
      ambientIntensity: 0.7,
      ambientColor: '#ffe8d6',
      lampIntensity: 0.6,
      bgWindow: '#fdba74',
    },
    evening: {
      sunColor: '#3b4252',
      sunIntensity: 0.3,
      sunPos: [6, 4, 4] as [number, number, number],
      ambientIntensity: 0.35,
      ambientColor: '#1a1c23',
      lampIntensity: 2.4,
      bgWindow: '#0f172a',
    }
  }[lightingMode];

  // Material color tokens
  const tableColors = {
    travertine: {
      color: '#ddd5c7',
      roughness: 0.75,
      metalness: 0.05
    },
    marble: {
      color: '#edeae4',
      roughness: 0.25,
      metalness: 0.1
    }
  }[tableMaterial];

  const woodColors = {
    walnut: {
      color: '#533b2c',
      roughness: 0.65,
    },
    oak: {
      color: '#bf9e75',
      roughness: 0.6,
    }
  }[woodMaterial];

  return (
    <>
      {/* Lighting Suite */}
      <ambientLight color={lightSettings.ambientColor} intensity={lightSettings.ambientIntensity} />
      <directionalLight
        position={lightSettings.sunPos}
        intensity={lightSettings.sunIntensity}
        color={lightSettings.sunColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      {/* Soft warm interior fill */}
      <directionalLight position={[-6, 5, -2]} intensity={0.4} color="#fbf7ee" />

      {/* Main architectural room container */}
      <group ref={roomGroup} position={[0, -1.2, 0]}>
        
        {/* FLOOR: Warm Architectural Wood Planks */}
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial
            color="#a88d74"
            roughness={0.7}
            metalness={0.02}
          />
        </mesh>

        {/* WOVEN TEXTURED RUG */}
        <mesh receiveShadow position={[0.2, 0.015, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6.8, 5.2]} />
          <meshStandardMaterial
            color="#eae4d8"
            roughness={0.95}
          />
        </mesh>

        {/* BACK WALL: Warm Limestone Plaster */}
        <mesh receiveShadow position={[0, 4, -4.5]}>
          <boxGeometry args={[16, 8, 0.4]} />
          <meshStandardMaterial color="#f2eee7" roughness={0.88} />
        </mesh>

        {/* LEFT ARCHITECTURAL WALL WITH TALL APERTURE */}
        <group position={[-5.5, 4, 0]}>
          {/* Solid wall section */}
          <mesh receiveShadow position={[0, 0, -2.5]}>
            <boxGeometry args={[0.4, 8, 4]} />
            <meshStandardMaterial color="#ece7df" roughness={0.85} />
          </mesh>

          {/* Large Architectural Window Frame */}
          <group position={[0, 0, 1.5]}>
            {/* Outer Window sill / frame */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.3, 6.2, 3.8]} />
              <meshStandardMaterial color="#222120" roughness={0.4} metalness={0.8} />
            </mesh>
            {/* Glass panel */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.05, 6.0, 3.6]} />
              <meshPhysicalMaterial
                color={lightSettings.bgWindow}
                transmission={0.9}
                opacity={0.4}
                transparent
                roughness={0.1}
                ior={1.5}
              />
            </mesh>
            {/* Window Mullions / Grids */}
            <mesh position={[0.03, 0, 0]}>
              <boxGeometry args={[0.1, 5.9, 0.08]} />
              <meshStandardMaterial color="#1a1918" metalness={0.9} roughness={0.3} />
            </mesh>
            <mesh position={[0.03, 0.8, 0]}>
              <boxGeometry args={[0.1, 0.08, 3.5]} />
              <meshStandardMaterial color="#1a1918" metalness={0.9} roughness={0.3} />
            </mesh>
            <mesh position={[0.03, -1.2, 0]}>
              <boxGeometry args={[0.1, 0.08, 3.5]} />
              <meshStandardMaterial color="#1a1918" metalness={0.9} roughness={0.3} />
            </mesh>
          </group>
        </group>

        {/* RIGHT ACCENT WALL WITH FLUTED WOOD PANELING */}
        <group position={[5.2, 4, -1]}>
          {/* Base backing */}
          <mesh receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 8, 7]} />
            <meshStandardMaterial color={woodColors.color} roughness={woodColors.roughness} />
          </mesh>
          {/* Vertical Architectural Slats / Fluting */}
          {Array.from({ length: 18 }).map((_, i) => (
            <mesh
              key={i}
              castShadow
              receiveShadow
              position={[-0.1, 0, -3.2 + i * 0.38]}
            >
              <boxGeometry args={[0.08, 7.8, 0.14]} />
              <meshStandardMaterial
                color={woodColors.color}
                roughness={woodColors.roughness}
              />
            </mesh>
          ))}
        </group>

        {/* RECESSED CEILING COVE WITH SUBTLE ARCHITECTURAL DETAIL */}
        <mesh position={[0, 7.8, 0]}>
          <boxGeometry args={[16, 0.4, 16]} />
          <meshStandardMaterial color="#f7f5f0" roughness={0.9} />
        </mesh>

        {/* MINIMALIST ARTWORK ON BACK WALL */}
        <group position={[0, 4.4, -4.25]}>
          {/* Walnut frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.2, 2.2, 0.08]} />
            <meshStandardMaterial color="#3d291e" roughness={0.6} />
          </mesh>
          {/* Canvas textured abstract piece */}
          <mesh position={[0, 0, 0.045]}>
            <boxGeometry args={[3.0, 2.0, 0.02]} />
            <meshStandardMaterial color="#dfd7cb" roughness={0.9} />
          </mesh>
          {/* Minimalist abstract arc graphic */}
          <mesh position={[-0.4, -0.1, 0.06]}>
            <cylinderGeometry args={[0.6, 0.6, 0.01, 32, 1, false, 0, Math.PI]} />
            <meshStandardMaterial color="#8c7762" roughness={0.8} />
          </mesh>
          <mesh position={[0.5, 0.3, 0.06]}>
            <boxGeometry args={[0.9, 0.04, 0.01]} />
            <meshStandardMaterial color="#2a2521" roughness={0.5} />
          </mesh>
        </group>

        {/* LUXURY LOW-PROFILE BOUCLE SOFA */}
        <group position={[-0.2, 0.38, -1.8]}>
          {/* Main Seat Base */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
            <boxGeometry args={[4.4, 0.48, 1.6]} />
            <meshStandardMaterial color="#f5efe6" roughness={0.9} />
          </mesh>
          {/* Seat Cushions */}
          <mesh castShadow receiveShadow position={[-1.05, 0.45, 0]}>
            <boxGeometry args={[2.05, 0.22, 1.5]} />
            <meshStandardMaterial color="#fcf8f2" roughness={0.92} />
          </mesh>
          <mesh castShadow receiveShadow position={[1.05, 0.45, 0]}>
            <boxGeometry args={[2.05, 0.22, 1.5]} />
            <meshStandardMaterial color="#fcf8f2" roughness={0.92} />
          </mesh>
          {/* Low Backrest */}
          <mesh castShadow receiveShadow position={[0, 0.8, -0.65]}>
            <boxGeometry args={[4.4, 0.65, 0.35]} />
            <meshStandardMaterial color="#f5efe6" roughness={0.9} />
          </mesh>
          {/* Left Armrest */}
          <mesh castShadow receiveShadow position={[-2.1, 0.6, 0]}>
            <boxGeometry args={[0.35, 0.55, 1.6]} />
            <meshStandardMaterial color="#f5efe6" roughness={0.9} />
          </mesh>
          {/* Right Armrest */}
          <mesh castShadow receiveShadow position={[2.1, 0.6, 0]}>
            <boxGeometry args={[0.35, 0.55, 1.6]} />
            <meshStandardMaterial color="#f5efe6" roughness={0.9} />
          </mesh>
          {/* Decorative Accent Throw Pillow */}
          <mesh castShadow position={[-1.4, 0.7, -0.35]} rotation={[0.1, 0.3, 0.1]}>
            <boxGeometry args={[0.65, 0.5, 0.22]} />
            <meshStandardMaterial color="#c7ab8f" roughness={0.88} />
          </mesh>
          <mesh castShadow position={[1.4, 0.7, -0.35]} rotation={[0.1, -0.25, -0.05]}>
            <boxGeometry args={[0.6, 0.48, 0.2]} />
            <meshStandardMaterial color="#4a3e35" roughness={0.85} />
          </mesh>
        </group>

        {/* MID-CENTURY SCULPTURAL ACCENT ARMCHAIR */}
        <group position={[-2.5, 0.4, 0.3]} rotation={[0, 0.55, 0]}>
          {/* Walnut legs */}
          <mesh position={[-0.45, 0, -0.45]} rotation={[0.08, 0, -0.08]}>
            <cylinderGeometry args={[0.03, 0.02, 0.75]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
          <mesh position={[0.45, 0, -0.45]} rotation={[0.08, 0, 0.08]}>
            <cylinderGeometry args={[0.03, 0.02, 0.75]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
          <mesh position={[-0.45, 0, 0.45]} rotation={[-0.08, 0, -0.08]}>
            <cylinderGeometry args={[0.03, 0.02, 0.75]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
          <mesh position={[0.45, 0, 0.45]} rotation={[-0.08, 0, 0.08]}>
            <cylinderGeometry args={[0.03, 0.02, 0.75]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
          {/* Tan Leather Seat & Back */}
          <mesh castShadow position={[0, 0.42, 0]}>
            <boxGeometry args={[1.0, 0.14, 0.95]} />
            <meshStandardMaterial color="#a77042" roughness={0.65} metalness={0.1} />
          </mesh>
          <mesh castShadow position={[0, 0.8, -0.42]} rotation={[-0.15, 0, 0]}>
            <boxGeometry args={[0.96, 0.7, 0.12]} />
            <meshStandardMaterial color="#a77042" roughness={0.65} metalness={0.1} />
          </mesh>
          {/* Walnut Armrails */}
          <mesh position={[-0.52, 0.65, 0]}>
            <boxGeometry args={[0.06, 0.04, 0.9]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
          <mesh position={[0.52, 0.65, 0]}>
            <boxGeometry args={[0.06, 0.04, 0.9]} />
            <meshStandardMaterial color="#3b2519" roughness={0.5} />
          </mesh>
        </group>

        {/* MONOLITHIC COFFEE TABLE (Interactive Material: Travertine or Marble) */}
        <group position={[0.1, 0.22, 0.1]}>
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[2.4, 0.42, 1.4]} />
            <meshStandardMaterial
              color={tableColors.color}
              roughness={tableColors.roughness}
              metalness={tableColors.metalness}
            />
          </mesh>

          {/* Table Decor: Ceramic Vessel & Architectural Books */}
          <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.05}>
            <mesh castShadow position={[-0.5, 0.38, -0.1]}>
              <cylinderGeometry args={[0.14, 0.08, 0.32, 24]} />
              <meshStandardMaterial color="#ece5dc" roughness={0.9} />
            </mesh>
          </Float>

          {/* Design Books stack */}
          <mesh castShadow position={[0.45, 0.23, 0.1]} rotation={[0, 0.12, 0]}>
            <boxGeometry args={[0.42, 0.05, 0.52]} />
            <meshStandardMaterial color="#2d2825" roughness={0.4} />
          </mesh>
          <mesh castShadow position={[0.47, 0.28, 0.12]} rotation={[0, -0.08, 0]}>
            <boxGeometry args={[0.38, 0.04, 0.46]} />
            <meshStandardMaterial color="#948575" roughness={0.5} />
          </mesh>
        </group>

        {/* ARCHITECTURAL BRASS FLOOR LAMP */}
        <group position={[3.2, 0, -2.2]}>
          {/* Heavy Stone Base */}
          <mesh position={[0, 0.06, 0]}>
            <cylinderGeometry args={[0.3, 0.34, 0.12, 32]} />
            <meshStandardMaterial color="#1a1918" roughness={0.5} />
          </mesh>
          {/* Slender Brass Stem */}
          <mesh position={[0, 2.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 4.3, 16]} />
            <meshStandardMaterial color="#c5a880" metalness={0.85} roughness={0.3} />
          </mesh>
          {/* Elegant Angled Arm */}
          <mesh position={[-0.45, 4.25, 0]} rotation={[0, 0, 0.4]}>
            <cylinderGeometry args={[0.018, 0.018, 1.1, 16]} />
            <meshStandardMaterial color="#c5a880" metalness={0.85} roughness={0.3} />
          </mesh>
          {/* Conical Lamp Shade */}
          <mesh position={[-0.85, 4.0, 0]} rotation={[0, 0, -0.2]}>
            <coneGeometry args={[0.32, 0.45, 32, 1, true]} />
            <meshStandardMaterial color="#262423" roughness={0.4} />
          </mesh>
          {/* Warm Emissive Bulb */}
          <mesh position={[-0.85, 3.92, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#fff3db" />
          </mesh>
          {/* Dynamic Point Light */}
          <pointLight
            ref={lampLight}
            position={[-0.85, 3.85, 0]}
            intensity={lightSettings.lampIntensity}
            color="#ffe1b3"
            distance={7}
            decay={2}
          />
        </group>

        {/* Contact Shadow for organic grounding */}
        <ContactShadows
          position={[0, 0.02, 0]}
          opacity={0.65}
          scale={12}
          blur={1.8}
          far={4}
        />
      </group>
    </>
  );
};
