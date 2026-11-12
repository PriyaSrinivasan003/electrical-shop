import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural Stylized 3D Electrician Mascot Mesh & Rig
 * 
 * Features:
 * - Yellow Safety Helmet with front peak, crest ridge, and flashlight mount
 * - Friendly face with smiling mouth, stylized eyes, and ears
 * - Navy Blue uniform (#142B45) with reflective hi-vis orange/silver safety stripes
 * - Leather tool belt (#78350F) with brass buckle, screwdriver, pliers, and multimeter
 * - Heavy-duty safety boots
 * - Props:
 *   - Flexible copper wire coil & magnifying glass for Wires scene
 *   - 25mm PVC conduit pipe across shoulder for Pipes scene
 *   - Wire tool with spark particles for Applications scene
 *   - Raised waving hand for Contact scene
 * 
 * Synchronized with GSAP scroll timeline via pose / progress props!
 */
export default function MascotCharacter({
  pose = 'walking', // 'idle' | 'walking' | 'inspecting' | 'carrying' | 'working' | 'waving'
  progress = 0,
  sparkActive = false
}) {
  const group = useRef();
  const leftLeg = useRef();
  const rightLeg = useRef();
  const leftArm = useRef();
  const rightArm = useRef();
  const head = useRef();
  const sparkRef = useRef();

  // Materials with Cream, Navy, Safety Orange (#FF8E01), and Leather tones
  const materials = useMemo(() => {
    return {
      helmet: new THREE.MeshStandardMaterial({
        color: '#FFAA00',
        roughness: 0.25,
        metalness: 0.1,
      }),
      helmetLight: new THREE.MeshStandardMaterial({
        color: '#38BDF8',
        emissive: '#0284C7',
        emissiveIntensity: 0.6,
        roughness: 0.2,
      }),
      skin: new THREE.MeshStandardMaterial({
        color: '#FBCFE8', // Stylized warm peach skin
        roughness: 0.6,
      }),
      skinWarm: new THREE.MeshStandardMaterial({
        color: '#F4B084',
        roughness: 0.5,
      }),
      uniform: new THREE.MeshStandardMaterial({
        color: '#142B45', // Brand Navy
        roughness: 0.7,
      }),
      vestStripe: new THREE.MeshStandardMaterial({
        color: '#FF8E01', // Brand Safety Orange
        roughness: 0.3,
        emissive: '#FF8E01',
        emissiveIntensity: 0.2,
      }),
      silverStripe: new THREE.MeshStandardMaterial({
        color: '#E2E8F0',
        roughness: 0.2,
        metalness: 0.8,
      }),
      belt: new THREE.MeshStandardMaterial({
        color: '#78350F', // Leather brown
        roughness: 0.6,
      }),
      brass: new THREE.MeshStandardMaterial({
        color: '#F59E0B',
        metalness: 0.8,
        roughness: 0.3,
      }),
      boots: new THREE.MeshStandardMaterial({
        color: '#1E293B',
        roughness: 0.8,
      }),
      eyes: new THREE.MeshStandardMaterial({
        color: '#0F172A',
        roughness: 0.1,
      }),
      copper: new THREE.MeshStandardMaterial({
        color: '#EA580C',
        metalness: 0.85,
        roughness: 0.25,
      }),
      pipe: new THREE.MeshStandardMaterial({
        color: '#F8FAFC',
        roughness: 0.3,
        metalness: 0.1,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: '#BAE6FD',
        transparent: true,
        opacity: 0.55,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 0.5,
      }),
    };
  }, []);

  // Frame animation loop to update limbs based on pose and scroll stride
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    // Subtle breathing / idle floating
    group.current.position.y = Math.sin(t * 2) * 0.04;

    if (pose === 'walking') {
      // Dynamic walk stride: legs & arms swing alternately
      const stride = Math.sin(t * 7);
      if (leftLeg.current) leftLeg.current.rotation.x = stride * 0.6;
      if (rightLeg.current) rightLeg.current.rotation.x = -stride * 0.6;
      if (leftArm.current) leftArm.current.rotation.x = -stride * 0.55;
      if (rightArm.current) rightArm.current.rotation.x = stride * 0.55;
      if (head.current) head.current.rotation.y = Math.sin(t * 3.5) * 0.08;
    } else if (pose === 'inspecting') {
      // Character leans forward slightly, holding wire and glass
      if (leftLeg.current) leftLeg.current.rotation.x = -0.1;
      if (rightLeg.current) rightLeg.current.rotation.x = 0.15;
      if (leftArm.current) {
        leftArm.current.rotation.x = -1.2;
        leftArm.current.rotation.z = 0.3;
      }
      if (rightArm.current) {
        rightArm.current.rotation.x = -1.35;
        rightArm.current.rotation.z = -0.35;
      }
      if (head.current) {
        head.current.rotation.x = 0.25;
        head.current.rotation.y = 0.2;
      }
    } else if (pose === 'carrying') {
      // Arms raised to shoulder level balancing horizontal PVC pipe
      if (leftLeg.current) leftLeg.current.rotation.x = Math.sin(t * 4) * 0.3;
      if (rightLeg.current) rightLeg.current.rotation.x = -Math.sin(t * 4) * 0.3;
      if (leftArm.current) {
        leftArm.current.rotation.x = -1.5;
        leftArm.current.rotation.z = 0.2;
      }
      if (rightArm.current) {
        rightArm.current.rotation.x = -1.6;
        rightArm.current.rotation.z = -0.25;
      }
      if (head.current) {
        head.current.rotation.x = 0.05;
        head.current.rotation.y = 0.1;
      }
    } else if (pose === 'working') {
      // Quick agile tool movements with spark action
      const workJitter = Math.sin(t * 14) * 0.08;
      if (leftLeg.current) leftLeg.current.rotation.x = -0.15;
      if (rightLeg.current) rightLeg.current.rotation.x = 0.1;
      if (leftArm.current) {
        leftArm.current.rotation.x = -1.2 + workJitter;
        leftArm.current.rotation.z = 0.4;
      }
      if (rightArm.current) {
        rightArm.current.rotation.x = -1.3 - workJitter;
        rightArm.current.rotation.z = -0.4;
      }
      if (head.current) head.current.rotation.x = 0.2;

      // Animate live spark pulsing
      if (sparkRef.current) {
        const s = 0.8 + Math.random() * 0.6;
        sparkRef.current.scale.set(s, s, s);
      }
    } else if (pose === 'waving') {
      // Cheerful wave: right arm raised high and rocking hand
      const wave = Math.sin(t * 6) * 0.35;
      if (leftLeg.current) leftLeg.current.rotation.x = 0;
      if (rightLeg.current) rightLeg.current.rotation.x = 0;
      if (leftArm.current) {
        leftArm.current.rotation.x = 0.1;
        leftArm.current.rotation.z = 0.15;
      }
      if (rightArm.current) {
        rightArm.current.rotation.x = -2.6; // Arm straight up
        rightArm.current.rotation.z = -0.4 + wave; // Waving side to side
      }
      if (head.current) {
        head.current.rotation.x = -0.1;
        head.current.rotation.y = -0.2;
      }
    } else {
      // Idle
      if (leftLeg.current) leftLeg.current.rotation.x = 0;
      if (rightLeg.current) rightLeg.current.rotation.x = 0;
      if (leftArm.current) leftArm.current.rotation.x = 0;
      if (rightArm.current) rightArm.current.rotation.x = 0;
      if (head.current) head.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <group ref={group} dispose={null} scale={[1.1, 1.1, 1.1]}>
      {/* --- PELVIS & LOWER BODY --- */}
      <mesh position={[0, 0.95, 0]} castShadow receiveShadow material={materials.uniform}>
        <cylinderGeometry args={[0.3, 0.26, 0.35, 16]} />
      </mesh>

      {/* Heavy-Duty Tool Belt */}
      <mesh position={[0, 1.1, 0]} material={materials.belt}>
        <cylinderGeometry args={[0.33, 0.33, 0.12, 16]} />
      </mesh>
      {/* Belt Buckle (Brass) */}
      <mesh position={[0, 1.1, 0.33]} material={materials.brass}>
        <boxGeometry args={[0.14, 0.14, 0.04]} />
      </mesh>
      {/* Belt Pouches & Tools */}
      <mesh position={[-0.32, 1.05, 0.05]} material={materials.belt}>
        <boxGeometry args={[0.1, 0.18, 0.14]} />
      </mesh>
      {/* Screwdriver (Yellow handle sticking out) */}
      <mesh position={[-0.32, 1.18, 0.05]} material={materials.helmet}>
        <cylinderGeometry args={[0.02, 0.02, 0.14, 8]} />
      </mesh>
      {/* Pliers (Orange) */}
      <mesh position={[0.32, 1.05, 0.05]} material={materials.vestStripe}>
        <boxGeometry args={[0.08, 0.16, 0.1]} />
      </mesh>

      {/* --- TORSO & JACKET --- */}
      <group position={[0, 1.45, 0]}>
        {/* Main Navy Uniform Torso */}
        <mesh castShadow receiveShadow material={materials.uniform}>
          <cylinderGeometry args={[0.36, 0.3, 0.65, 16]} />
        </mesh>

        {/* Hi-Vis Reflective Safety Vest Stripes (Orange + Silver) */}
        {/* Left vertical orange stripe */}
        <mesh position={[-0.16, 0.02, 0.28]} material={materials.vestStripe}>
          <boxGeometry args={[0.07, 0.55, 0.04]} />
        </mesh>
        {/* Right vertical orange stripe */}
        <mesh position={[0.16, 0.02, 0.28]} material={materials.vestStripe}>
          <boxGeometry args={[0.07, 0.55, 0.04]} />
        </mesh>
        {/* Horizontal silver reflective waistband */}
        <mesh position={[0, -0.15, 0]} material={materials.silverStripe}>
          <cylinderGeometry args={[0.32, 0.32, 0.06, 16]} />
        </mesh>

        {/* Company Chest Badge */}
        <mesh position={[-0.15, 0.15, 0.32]} material={materials.uniform}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
        </mesh>
        <mesh position={[-0.15, 0.15, 0.335]} material={materials.vestStripe}>
          <boxGeometry args={[0.06, 0.02, 0.01]} />
        </mesh>
      </group>

      {/* --- HEAD, FACE & SAFETY HELMET --- */}
      <group ref={head} position={[0, 1.95, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.12, 0]} material={materials.skinWarm}>
          <cylinderGeometry args={[0.12, 0.14, 0.16, 12]} />
        </mesh>

        {/* Head Sphere */}
        <mesh position={[0, 0.08, 0]} castShadow material={materials.skinWarm}>
          <sphereGeometry args={[0.26, 24, 24]} />
        </mesh>

        {/* Friendly Eyes */}
        <mesh position={[-0.09, 0.12, 0.22]} material={materials.eyes}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>
        <mesh position={[0.09, 0.12, 0.22]} material={materials.eyes}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>

        {/* Cheerful Smile */}
        <mesh position={[0, 0.02, 0.24]} rotation={[0.2, 0, 0]} material={materials.eyes}>
          <torusGeometry args={[0.06, 0.016, 8, 16, Math.PI]} />
        </mesh>

        {/* Rosy Cheeks */}
        <mesh position={[-0.14, 0.06, 0.2]} material={materials.skin}>
          <sphereGeometry args={[0.03, 10, 10]} />
        </mesh>
        <mesh position={[0.14, 0.06, 0.2]} material={materials.skin}>
          <sphereGeometry args={[0.03, 10, 10]} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.26, 0.08, 0]} rotation={[0, 0, 0.2]} material={materials.skinWarm}>
          <sphereGeometry args={[0.05, 10, 10]} />
        </mesh>
        <mesh position={[0.26, 0.08, 0]} rotation={[0, 0, -0.2]} material={materials.skinWarm}>
          <sphereGeometry args={[0.05, 10, 10]} />
        </mesh>

        {/* 3D YELLOW SAFETY HELMET */}
        <group position={[0, 0.18, 0]}>
          {/* Helmet Main Shell */}
          <mesh castShadow material={materials.helmet}>
            <sphereGeometry args={[0.29, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
          </mesh>
          {/* Helmet Ridge / Crest on Top */}
          <mesh position={[0, 0.26, 0]} material={materials.helmet}>
            <boxGeometry args={[0.06, 0.06, 0.44]} />
          </mesh>
          {/* Helmet Front Brim / Visor Peak */}
          <mesh position={[0, -0.04, 0.12]} rotation={[0.3, 0, 0]} material={materials.helmet}>
            <cylinderGeometry args={[0.31, 0.31, 0.04, 20, 1, false, 0, Math.PI]} />
          </mesh>
          {/* Integrated Headlamp / Safety Emblem */}
          <mesh position={[0, 0.06, 0.28]} material={materials.uniform}>
            <boxGeometry args={[0.1, 0.07, 0.04]} />
          </mesh>
          <mesh position={[0, 0.06, 0.3]} material={materials.helmetLight}>
            <sphereGeometry args={[0.03, 12, 12]} />
          </mesh>
        </group>
      </group>

      {/* --- LEGS --- */}
      {/* Left Leg */}
      <group ref={leftLeg} position={[-0.16, 0.8, 0]}>
        <mesh position={[0, -0.35, 0]} castShadow material={materials.uniform}>
          <cylinderGeometry args={[0.11, 0.1, 0.7, 12]} />
        </mesh>
        {/* Knee safety stripe */}
        <mesh position={[0, -0.28, 0.02]} material={materials.vestStripe}>
          <cylinderGeometry args={[0.115, 0.115, 0.05, 12]} />
        </mesh>
        {/* Left Work Boot */}
        <mesh position={[0, -0.74, 0.06]} castShadow material={materials.boots}>
          <boxGeometry args={[0.15, 0.16, 0.28]} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLeg} position={[0.16, 0.8, 0]}>
        <mesh position={[0, -0.35, 0]} castShadow material={materials.uniform}>
          <cylinderGeometry args={[0.11, 0.1, 0.7, 12]} />
        </mesh>
        {/* Knee safety stripe */}
        <mesh position={[0, -0.28, 0.02]} material={materials.vestStripe}>
          <cylinderGeometry args={[0.115, 0.115, 0.05, 12]} />
        </mesh>
        {/* Right Work Boot */}
        <mesh position={[0, -0.74, 0.06]} castShadow material={materials.boots}>
          <boxGeometry args={[0.15, 0.16, 0.28]} />
        </mesh>
      </group>

      {/* --- ARMS & PROPS --- */}
      {/* Left Arm */}
      <group ref={leftArm} position={[-0.38, 1.7, 0]}>
        <mesh position={[0, -0.3, 0]} castShadow material={materials.uniform}>
          <cylinderGeometry args={[0.09, 0.08, 0.55, 12]} />
        </mesh>
        {/* Glove */}
        <mesh position={[0, -0.6, 0]} material={materials.skinWarm}>
          <sphereGeometry args={[0.08, 12, 12]} />
        </mesh>

        {/* Prop: Electrical wire sample held in left hand during inspection */}
        {pose === 'inspecting' && (
          <group position={[0.15, -0.6, 0.35]}>
            <mesh material={materials.vestStripe}>
              <torusGeometry args={[0.16, 0.03, 10, 24]} />
            </mesh>
            {/* Exposed pure copper wire tip */}
            <mesh position={[0.16, 0, 0]} rotation={[0, 0, 1.57]} material={materials.copper}>
              <cylinderGeometry args={[0.025, 0.025, 0.14, 8]} />
            </mesh>
          </group>
        )}
      </group>

      {/* Right Arm */}
      <group ref={rightArm} position={[0.38, 1.7, 0]}>
        <mesh position={[0, -0.3, 0]} castShadow material={materials.uniform}>
          <cylinderGeometry args={[0.09, 0.08, 0.55, 12]} />
        </mesh>
        {/* Glove */}
        <mesh position={[0, -0.6, 0]} material={materials.skinWarm}>
          <sphereGeometry args={[0.08, 12, 12]} />
        </mesh>

        {/* Prop: Magnifying Glass in hand for Wire scene */}
        {pose === 'inspecting' && (
          <group position={[-0.05, -0.65, 0.35]} rotation={[0.4, 0.2, -0.3]}>
            {/* Handle */}
            <mesh position={[0, -0.15, 0]} material={materials.belt}>
              <cylinderGeometry args={[0.02, 0.02, 0.22, 8]} />
            </mesh>
            {/* Golden Rim */}
            <mesh material={materials.brass}>
              <torusGeometry args={[0.14, 0.02, 12, 24]} />
            </mesh>
            {/* Glass Lens */}
            <mesh material={materials.glass}>
              <cylinderGeometry args={[0.13, 0.13, 0.015, 20]} />
            </mesh>
          </group>
        )}

        {/* Prop: PVC Conduit Pipe carried across shoulder */}
        {pose === 'carrying' && (
          <group position={[-0.3, 0.1, 0]} rotation={[0.1, 0.2, 0]}>
            <mesh castShadow material={materials.pipe}>
              <cylinderGeometry args={[0.08, 0.08, 3.2, 16]} rotation={[0, 0, 1.57]} />
            </mesh>
            {/* Bell-mouth coupling */}
            <mesh position={[1.4, 0, 0]} material={materials.pipe} rotation={[0, 0, 1.57]}>
              <cylinderGeometry args={[0.095, 0.095, 0.24, 16]} />
            </mesh>
          </group>
        )}

        {/* Prop: Wiring tool with live sparks for Applications scene */}
        {pose === 'working' && (
          <group position={[-0.2, -0.6, 0.3]}>
            <mesh material={materials.brass} rotation={[0, 0, 0.8]}>
              <boxGeometry args={[0.04, 0.18, 0.04]} />
            </mesh>
            {/* Electrical Spark */}
            <group ref={sparkRef} position={[-0.05, -0.1, 0.05]}>
              <pointLight color="#38BDF8" intensity={sparkActive ? 3.5 : 1} distance={2.5} />
              <mesh>
                <octahedronGeometry args={[0.08, 0]} />
                <meshBasicMaterial color="#67E8F9" />
              </mesh>
            </group>
          </group>
        )}
      </group>
    </group>
  );
}

