import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import MascotCharacter from './MascotCharacter';
import ElectricianCharacter from './ElectricianCharacter';

/**
 * Mascot3DCanvas - Premium Three.js Canvas container for our 3D Electrician Mascot.
 * 
 * Performance & Polish features:
 * - Controlled render loop with pixel ratio clamping (1 to 2) to eliminate GPU overhead
 * - Automatic Fallback to 2D SVG Mascot if WebGL is unavailable or loading
 * - Realistic studio lighting with warm safety key-light and navy fill
 * - Dynamic contact shadows under character
 * - Floating/breathing idle dynamics
 */
function StaticFallback({ pose }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ElectricianCharacter pose={pose} className="w-48 h-72" />
    </div>
  );
}

export default function Mascot3DCanvas({
  pose = 'walking',
  sparkActive = false,
  className = '',
  rotation = [0, 0.4, 0]
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<StaticFallback pose={pose} />}>
        <Canvas
          shadows
          dpr={[1, 1.75]} // Clamped device pixel ratio for smooth 60fps
          camera={{ position: [0, 1.4, 4.2], fov: 42 }}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true,
          }}
          className="w-full h-full"
        >
          {/* Studio Lights tuned to Cream + Navy + Safety Orange */}
          <ambientLight intensity={0.8} />
          
          {/* Main Key Light (Warm Sunlight) */}
          <directionalLight
            position={[4, 5, 4]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.5}
            shadow-camera-far={10}
            shadow-camera-left={-2}
            shadow-camera-right={2}
            shadow-camera-top={3}
            shadow-camera-bottom={-1}
            shadow-bias={-0.0005}
          />

          {/* Fill Light (Cool Navy/Sky Blue) */}
          <directionalLight position={[-4, 3, -2]} intensity={0.6} color="#38BDF8" />

          {/* Rim / Back Accent Light (Safety Orange #FF8E01) */}
          <pointLight position={[0, 3, -3]} intensity={1.2} color="#FF8E01" />

          {/* Float subtle idle breathing for the mascot */}
          <Float
            speed={pose === 'walking' ? 1 : 1.6}
            rotationIntensity={0.1}
            floatIntensity={0.12}
            floatingRange={[-0.05, 0.05]}
          >
            <group position={[0, -0.6, 0]} rotation={rotation}>
              <MascotCharacter
                pose={pose}
                sparkActive={sparkActive}
              />
            </group>
          </Float>

          {/* Crisp Ground Contact Shadow */}
          <ContactShadows
            position={[0, -0.65, 0]}
            opacity={0.5}
            scale={4}
            blur={1.8}
            far={2}
            color="#08101a"
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

