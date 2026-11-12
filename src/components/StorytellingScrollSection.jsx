import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Flame, 
  Zap, 
  Layers, 
  ArrowRight, 
  PhoneCall,
  Lightbulb,
  Building,
  Home as HomeIcon,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import Mascot3DCanvas from './Mascot3DCanvas';

// Register GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

export default function StorytellingScrollSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const characterRef = useRef(null);

  // Reactive state for the 3D mascot rig
  const [characterState, setCharacterState] = useState({
    pose: 'walking',
    sparkActive: false,
    rotation: [0, 0.4, 0]
  });

  // Scene state triggers
  const [activeScene, setActiveScene] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Wire inspection layers revealed state
  const [revealedLayer, setRevealedLayer] = useState(0);

  // Lights lit up in Scene 4
  const [lightsOn, setLightsOn] = useState([false, false, false, false]);

  useEffect(() => {
    const container = containerRef.current;
    const characterEl = characterRef.current;
    if (!container || !characterEl) return;

    // Use gsap.context for React 19 cleanup safety
    const ctx = gsap.context(() => {
      // Desktop / Tablet full interactive pinned timeline
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Master pinned scroll timeline across 5 scenes
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=3600", // Smooth scrub distance
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);

              // 5 Scenes:
              // 1. Hero: 0.00 - 0.20 (Character walks in & welcomes)
              // 2. Wires: 0.20 - 0.42 (Inspects wire, reveals copper layers)
              // 3. Pipes: 0.42 - 0.64 (Carries PVC pipe across)
              // 4. Applications: 0.64 - 0.86 (Wiring activity & switches on lights)
              // 5. Contact: 0.86 - 1.00 (Waves & points to Contact Us)
              if (p < 0.18) {
                setActiveScene(1);
                setCharacterState({
                  pose: p < 0.08 ? 'walking' : 'idle',
                  sparkActive: false,
                  rotation: [0, 0.3, 0]
                });
              } else if (p >= 0.18 && p < 0.40) {
                setActiveScene(2);
                const isWalkingToWire = p >= 0.18 && p < 0.24;
                setCharacterState({
                  pose: isWalkingToWire ? 'walking' : 'inspecting',
                  sparkActive: false,
                  rotation: [0, 0.5, 0]
                });

                if (p > 0.34) {
                  setRevealedLayer(3); // Pure copper strands
                } else if (p > 0.28) {
                  setRevealedLayer(2); // FR-LSH insulation core
                } else if (p > 0.22) {
                  setRevealedLayer(1); // Outer sheath
                } else {
                  setRevealedLayer(0);
                }
              } else if (p >= 0.40 && p < 0.62) {
                setActiveScene(3);
                const isCarryingWalk = p > 0.42 && p < 0.55;
                setCharacterState({
                  pose: isCarryingWalk ? 'carrying' : 'idle',
                  sparkActive: false,
                  rotation: [0, 0.2, 0]
                });
              } else if (p >= 0.62 && p < 0.84) {
                setActiveScene(4);
                const spark = p > 0.68 && p < 0.80;
                setCharacterState({
                  pose: 'working',
                  sparkActive: spark,
                  rotation: [0, -0.4, 0]
                });

                // Sequentially switch on room light bulbs
                setLightsOn([
                  p > 0.66,
                  p > 0.71,
                  p > 0.76,
                  p > 0.81
                ]);
              } else {
                setActiveScene(5);
                setCharacterState({
                  pose: 'waving',
                  sparkActive: false,
                  rotation: [0, 0.25, 0]
                });
              }
            }
          }
        });

        // 1. SCENE 1 (HERO): Character enters and settles
        tl.fromTo(
          characterEl,
          { x: "-15vw", scale: 0.95 },
          { x: "12vw", scale: 1, duration: 1.5, ease: "power1.out" }
        );

        tl.to(".scene-1-content", { opacity: 0, y: -25, duration: 0.8, ease: "power2.in" }, "+=0.4");

        // 2. SCENE 2 (WIRES & INSPECTION)
        tl.to(characterEl, { x: "24vw", duration: 1.4, ease: "power1.inOut" });
        tl.fromTo(".scene-2-content", { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "<0.4");
        tl.fromTo(".magnifier-effect", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.5)" }, "<0.3");
        tl.fromTo(".wire-layer-callout", { opacity: 0, x: 20 }, { opacity: 1, x: 0, stagger: 0.35, duration: 1.2 }, "<0.2");
        
        tl.to([".scene-2-content", ".magnifier-effect"], { opacity: 0, y: -25, duration: 0.8, ease: "power2.in" }, "+=0.6");

        // 3. SCENE 3 (PVC PIPES)
        tl.to(characterEl, { x: "36vw", duration: 1.6, ease: "power1.inOut" });
        tl.fromTo(".scene-3-content", { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "<0.3");
        tl.fromTo(".extending-pvc-pipe", { width: "0%" }, { width: "100%", duration: 1.8, ease: "power2.inOut" }, "<0.2");
        tl.fromTo(".pipe-showcase-card", { opacity: 0, y: 25 }, { opacity: 1, y: 0, stagger: 0.25, duration: 1 }, "<0.5");

        tl.to([".scene-3-content", ".extending-pvc-pipe"], { opacity: 0, y: -25, duration: 0.8, ease: "power2.in" }, "+=0.6");

        // 4. SCENE 4 (APPLICATIONS & CIRCUIT ACTIVATION)
        tl.to(characterEl, { x: "55vw", duration: 1.5, ease: "power1.inOut" });
        tl.fromTo(".scene-4-content", { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "<0.3");
        tl.fromTo(".circuit-wire-path", { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }, "<0.2");

        tl.to(".scene-4-content", { opacity: 0, y: -25, duration: 0.8, ease: "power2.in" }, "+=0.6");

        // 5. SCENE 5 (FINAL CONTACT)
        tl.to(characterEl, { x: "36vw", scale: 1.05, duration: 1.4, ease: "power1.inOut" });
        tl.fromTo(".scene-5-content", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, "<0.2");
      });

      // Mobile setup: graceful scrolling without layout trapping
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: container,
          start: "top 70%",
          end: "bottom 30%",
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            if (p < 0.25) setActiveScene(1);
            else if (p < 0.50) setActiveScene(2);
            else if (p < 0.75) setActiveScene(3);
            else if (p < 0.90) setActiveScene(4);
            else setActiveScene(5);
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-[#0B1929] via-[#142B45] to-[#0A1625] text-white overflow-hidden min-h-[750px] lg:h-screen flex flex-col justify-between"
    >
      {/* Subtle Background Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Dynamic Background Current Line that flows along character's journey */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
        <path
          d="M 0 520 Q 300 480 600 520 T 1200 510 T 1800 520"
          stroke="#FF8E01"
          strokeWidth="3"
          strokeDasharray="8 6"
          fill="none"
        />
      </svg>

      {/* TOP BAR: Interactive Story Navigator & Progress Indicator */}
      <div className="relative z-30 w-full px-6 py-4 flex items-center justify-between border-b border-white/10 backdrop-blur-md bg-[#0B1929]/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF8E01] flex items-center justify-center font-black text-white shadow-md shadow-[#FF8E01]/30">
            ⚡
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#FF8E01] font-bold block flex items-center gap-1.5">
              <span>Interactive 3D Mascot Story</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 border border-white/20 text-gray-200">Three.js</span>
            </span>
            <span className="text-sm font-semibold text-gray-200 hidden sm:inline">
              Step {activeScene || 1} of 5: {
                activeScene === 1 ? 'Hero Welcome' :
                activeScene === 2 ? 'Wire Copper Inspection' :
                activeScene === 3 ? 'Rigid PVC Conduit Placement' :
                activeScene === 4 ? 'Energizing Live Applications' :
                'Let\'s Build Together'
              }
            </span>
          </div>
        </div>

        {/* 5-Step Scene Progress Bars */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeScene === step 
                  ? 'w-8 bg-[#FF8E01] shadow-lg shadow-[#FF8E01]/50' 
                  : (activeScene > step ? 'w-4 bg-sky-400' : 'w-2 bg-white/20')
              }`}
            />
          ))}
          <span className="text-xs font-mono text-gray-400 ml-2 hidden md:inline">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>

      {/* MAIN STAGE (Desktop Pinned Stage / Mobile Stage) */}
      <div 
        ref={trackRef}
        className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center z-10 py-10"
      >
        {/* ================================================================ */}
        {/* SCENE 1: HERO WELCOME */}
        {/* ================================================================ */}
        <div className={`scene-1-content absolute inset-0 flex flex-col justify-center max-w-2xl px-4 lg:px-8 transition-opacity duration-500 pointer-events-auto ${activeScene === 1 ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-4 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8E01] animate-ping" />
            <span className="text-gray-200">Meet Sparky • Your 3D Master Electrician</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            POWERING EVERY <br />
            <span className="text-[#FF8E01] drop-shadow-sm">CONNECTION</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium mb-4">
            Quality Electrical Wires & PVC Pipe Solutions.
          </p>

          <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-lg leading-relaxed">
            Scroll down to walk with our 3D electrician mascot through our manufacturing standards, copper conductivity tests, heavy-duty conduit placement, and turnkey installations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/wires-cables"
              className="inline-flex items-center gap-2 bg-[#FF8E01] hover:bg-[#e57e00] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#FF8E01]/30 transition-transform hover:scale-105"
            >
              <span>Explore House Wires</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
              <span className="animate-bounce text-base">↓</span>
              <span>Scroll to start 3D journey</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 2: ELECTRICAL WIRES & COPPER INSPECTION */}
        {/* ================================================================ */}
        <div className={`scene-2-content absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 transition-opacity duration-500 pointer-events-auto ${activeScene === 2 ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className="max-w-md text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>Scene 02: Copper Wire Inspection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
              Anatomy of Safe, <br />
              <span className="text-[#FF8E01]">99.97% Pure Copper</span>
            </h2>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Sparky examines every conductor strand under high magnification. Our triple-layer insulation prevents electrical leaks, resists extreme temperatures up to 105°C, and emits zero toxic halogen fumes.
            </p>

            {/* Technical Callout Badges */}
            <div className="space-y-3">
              <div className={`wire-layer-callout p-3 rounded-xl border transition-all duration-300 ${revealedLayer >= 1 ? 'bg-red-950/40 border-red-500/60' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-red-400">1. Flame Retardant Outer Sheath</span>
                  <span className="text-gray-400">IS:694 Certified</span>
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5">High oxygen index (&gt;32%) instantly self-extinguishes fire in seconds.</p>
              </div>

              <div className={`wire-layer-callout p-3 rounded-xl border transition-all duration-300 ${revealedLayer >= 2 ? 'bg-amber-950/40 border-[#FF8E01]/60' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#FF8E01]">2. FR-LSH High-Dielectric Core</span>
                  <span className="text-gray-400">Low Smoke Zero Halogen</span>
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5">Withstands 3.5 kV spark testing with 0% breakdown probability.</p>
              </div>

              <div className={`wire-layer-callout p-3 rounded-xl border transition-all duration-300 ${revealedLayer >= 3 ? 'bg-emerald-950/40 border-emerald-500/60' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-400">3. Electrolytic Pure Copper Strands</span>
                  <span className="text-gray-400">99.97% Purity</span>
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5">Multi-strand flexibility ensures minimal resistance and prevents voltage drops.</p>
              </div>
            </div>
          </div>

          {/* Interactive Magnifying Glass Visualizer */}
          <div className="magnifier-effect relative w-72 h-72 sm:w-84 sm:h-84 rounded-full bg-[#0d1e31] border-4 border-[#FF8E01] shadow-2xl shadow-[#FF8E01]/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/50 via-transparent to-white/10 pointer-events-none" />
            
            <div className="absolute w-full h-[1px] bg-sky-400/20" />
            <div className="absolute h-full w-[1px] bg-sky-400/20" />

            <div className="relative flex flex-col items-center">
              <div className="w-52 h-52 rounded-full border-4 border-red-500 bg-red-600/30 flex items-center justify-center p-3 animate-pulse">
                <div className="w-40 h-40 rounded-full border-4 border-amber-400 bg-amber-500/20 flex items-center justify-center p-2">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-600 via-orange-400 to-amber-200 shadow-md shadow-orange-500/50"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 bg-[#0B1929] border border-[#FF8E01] text-[#FF8E01] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase">
                100x Magnification • Pure ETP Copper
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 3: PVC CONDUIT PIPES */}
        {/* ================================================================ */}
        <div className={`scene-3-content absolute inset-0 flex flex-col justify-center px-4 lg:px-8 transition-opacity duration-500 pointer-events-auto ${activeScene === 3 ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className="max-w-xl text-left mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Scene 03: Heavy-Duty Conduit Placement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Engineered PVC Conduits & Pipes <br />
              <span className="text-[#FF8E01]">Zero Cracks Under Slab Loads</span>
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Sparky shoulders and lays our heavy-duty conduit pipes. Manufactured with impact modifiers and virgin resin, they survive high-pressure concrete pouring without collapsing or hairline fracturing.
            </p>
          </div>

          {/* Smooth Extending Horizontal PVC Pipe Graphic */}
          <div className="relative w-full h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center px-4 mb-8 overflow-hidden">
            <div className="extending-pvc-pipe h-6 rounded-lg bg-gradient-to-r from-gray-200 via-white to-gray-300 border border-gray-400 shadow-lg flex items-center px-4 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-sky-900 tracking-wider truncate">
                YAA-WIRES RIGID HEAVY-DUTY CONDUIT 25mm • 28 kg/cm² BURST TOLERANCE • IS:9537 PART 3
              </span>
            </div>
          </div>

          {/* 3 Product Types Transitions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="pipe-showcase-card bg-[#0d1e31]/90 border border-sky-500/30 p-4 rounded-xl shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm mb-2">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-1">Rigid Electrical Conduits</h3>
              <p className="text-xs text-gray-300">Heavy, Medium & Light series for concealed ceiling slabs and commercial wall embedding.</p>
            </div>

            <div className="pipe-showcase-card bg-[#0d1e31]/90 border border-amber-500/30 p-4 rounded-xl shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-[#FF8E01] flex items-center justify-center font-bold text-sm mb-2">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-1">CPVC Hot & Cold Water</h3>
              <p className="text-xs text-gray-300">SDR 11 & SDR 13.5 systems rated up to 93°C for residential and industrial plumbing.</p>
            </div>

            <div className="pipe-showcase-card bg-[#0d1e31]/90 border border-emerald-500/30 p-4 rounded-xl shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-2">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-1">Lead-Free UPVC Systems</h3>
              <p className="text-xs text-gray-300">Non-toxic, high flow rate drainage & potable water supply with mirror-smooth bore.</p>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 4: APPLICATIONS & LIGHTS SWITCHED ON */}
        {/* ================================================================ */}
        <div className={`scene-4-content absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 transition-opacity duration-500 pointer-events-auto ${activeScene === 4 ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className="max-w-md text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Scene 04: Powering Live Applications</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              From Blueprints to <br />
              <span className="text-[#FF8E01]">Energized Structures</span>
            </h2>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Sparky performs precision electrical wiring at the master distribution board. Watch the circuits light up across commercial high-rises and residential villas with guaranteed continuity.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <HomeIcon className="w-6 h-6 text-[#FF8E01]" />
                <div>
                  <h4 className="text-xs font-bold text-white">Residential Homes</h4>
                  <p className="text-[10px] text-gray-400">100% Shock-proof living</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Building className="w-6 h-6 text-sky-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">Commercial Towers</h4>
                  <p className="text-[10px] text-gray-400">Heavy HVAC & lift feeds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive House Blueprint with Sequentially Illuminated Bulbs */}
          <div className="relative w-80 h-72 sm:w-96 sm:h-80 bg-[#0d1e31] border border-white/20 rounded-2xl p-4 shadow-2xl flex flex-col justify-between overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320">
              <defs>
                <linearGradient id="liveCurrent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8E01" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>

              <polygon points="50,110 200,30 350,110" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
              <rect x="50" y="110" width="300" height="180" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="200" y1="110" x2="200" y2="290" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />

              <path
                className="circuit-wire-path"
                d="M 60 270 H 120 V 150 H 260 V 80 H 340 V 270"
                fill="none"
                stroke="url(#liveCurrent)"
                strokeWidth="4"
                strokeDasharray="1000"
              />
            </svg>

            {/* 4 Rooms with Light Bulbs that switch on */}
            <div className="relative z-10 grid grid-cols-2 gap-4 h-full pt-16">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/20">
                <Lightbulb className={`w-8 h-8 transition-colors duration-300 ${lightsOn[0] ? 'text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.9)] animate-bounce' : 'text-gray-600'}`} />
                <span className="text-[10px] text-gray-300 mt-1 font-bold">Living Room</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/20">
                <Lightbulb className={`w-8 h-8 transition-colors duration-300 ${lightsOn[1] ? 'text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.9)] animate-bounce' : 'text-gray-600'}`} />
                <span className="text-[10px] text-gray-300 mt-1 font-bold">Master Suite</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/20">
                <Lightbulb className={`w-8 h-8 transition-colors duration-300 ${lightsOn[2] ? 'text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.9)] animate-bounce' : 'text-gray-600'}`} />
                <span className="text-[10px] text-gray-300 mt-1 font-bold">Commercial Server</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/20">
                <Lightbulb className={`w-8 h-8 transition-colors duration-300 ${lightsOn[3] ? 'text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.9)] animate-bounce' : 'text-gray-600'}`} />
                <span className="text-[10px] text-gray-300 mt-1 font-bold">Industrial Line</span>
              </div>
            </div>

            <div className="relative z-10 text-center text-[10px] text-emerald-400 font-mono font-bold bg-[#0B1929]/80 py-1 rounded">
              ⚡ 230V STABLE VOLTAGE FEED ACTIVATED
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 5: FINAL CONTACT & CHEERFUL WELCOME */}
        {/* ================================================================ */}
        <div className={`scene-5-content absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-8 transition-opacity duration-500 pointer-events-auto ${activeScene === 5 ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8E01]/20 border border-[#FF8E01]/40 text-[#FF8E01] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Your Next Project?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 max-w-3xl">
            LET’S BUILD SOMETHING <br />
            <span className="text-[#FF8E01]">POWERFUL</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-200 max-w-xl mb-8 leading-relaxed">
            Sparky and our certified engineering team are ready to review your BOQ, deliver custom wire cuts, and provide on-site contractor support.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF8E01] hover:bg-[#e57e00] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#FF8E01]/40 transition-transform hover:scale-105"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-7 py-4 rounded-xl font-bold text-base transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-[#FF8E01]" />
              <span>Talk to Engineering</span>
            </a>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3D ELECTRICIAN MASCOT STAGE (THREE.JS + REACT THREE FIBER + GSAP) */}
        {/* ================================================================ */}
        <div 
          ref={characterRef}
          className="absolute bottom-4 left-0 z-30 w-52 h-72 sm:w-64 sm:h-88 lg:w-76 lg:h-96 pointer-events-none will-change-transform"
        >
          <Mascot3DCanvas
            pose={characterState.pose}
            sparkActive={characterState.sparkActive}
            rotation={characterState.rotation}
            className="w-full h-full"
          />
        </div>

      </div>

      {/* FOOTER OF SECTION */}
      <div className="relative z-20 w-full px-6 py-3 flex items-center justify-between text-xs text-gray-400 border-t border-white/10 bg-[#0B1929]/40 backdrop-blur-sm">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Three.js + React Three Fiber 3D Mascot Engine Active</span>
        </span>
        <span className="hidden sm:inline text-gray-400">
          Scroll down to advance the 3D story • Scroll up to reverse
        </span>
      </div>
    </section>
  );
}

