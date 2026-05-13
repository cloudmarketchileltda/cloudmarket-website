import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const MobileUI = () => {
  return (
    <div className="w-[280px] h-[580px] bg-[#0f172a] rounded-[40px] overflow-hidden flex flex-col font-sans select-none border-[6px] border-[#1e293b]">
      {/* Notch */}
      <div className="h-6 w-1/3 bg-[#1e293b] mx-auto rounded-b-2xl mb-4" />
      
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg">GymTrack IA</div>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 space-y-6 overflow-y-auto no-scrollbar">
        {/* Progress Card */}
        <div className="bg-[#1e293b] p-4 rounded-2xl border border-white/5 space-y-2">
          <div className="text-gray-400 text-xs">Progreso Semanal</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-white">84%</div>
            <div className="flex gap-1 h-12 items-end">
              {[40, 70, 45, 90, 65, 84].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-2 bg-primary rounded-t-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-3">
          <div className="text-white font-semibold text-sm">Próximo Ejercicio</div>
          {[
            { name: "Press de Banca", reps: "3 x 12", color: "bg-blue-500" },
            { name: "Sentadillas", reps: "4 x 10", color: "bg-primary" },
            { name: "Remo con Barra", reps: "3 x 15", color: "bg-emerald-500" },
          ].map((ex, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
              <div className={`w-10 h-10 rounded-lg ${ex.color} flex items-center justify-center text-white`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 .83-5.5"/><path d="m12 22 1.1-11"/><path d="m6 22-.83-5.5"/><path d="M18 6h.01"/><path d="M6 6h.01"/><path d="m18 22-1.1-11"/><path d="m12 22-1.1-11"/><path d="m6 22 1.1-11"/><path d="M12 6h.01"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-white text-xs font-medium">{ex.name}</div>
                <div className="text-gray-500 text-[10px]">{ex.reps}</div>
              </div>
              <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Card */}
        <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-2xl text-white">
          <div className="text-xs opacity-80">Calorías Quemadas</div>
          <div className="text-2xl font-bold">1,240 kcal</div>
          <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-white" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="h-16 border-t border-white/5 flex items-center justify-around px-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? "text-primary bg-primary/10" : "text-gray-500"}`}>
             <div className="w-5 h-5 rounded-sm border-2 border-current" />
          </div>
        ))}
      </div>
    </div>
  );
};

const PhoneModel = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth rotation based on mouse
    const targetRotationY = mouse.x * 0.3;
    const targetRotationX = mouse.y * -0.2;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
    
    // Constant subtle floating
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Phone Case */}
      <RoundedBox
        args={[3.1, 6.2, 0.4]}
        radius={0.3}
        smoothness={4}
        ref={phoneRef as any}
      >
        <meshPhysicalMaterial
          color="#1e293b"
          roughness={0.1}
          metalness={0.8}
          transmission={0}
          thickness={0}
          envMapIntensity={1}
        />
      </RoundedBox>

      {/* Screen area */}
      <mesh position={[0, 0, 0.201]}>
        <planeGeometry args={[2.9, 6.0]} />
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* Interactive UI Embed */}
      <Html
        transform
        distanceFactor={3.1}
        position={[0, 0, 0.205]}
        rotation={[0, 0, 0]}
        occlude
      >
        <MobileUI />
      </Html>

      {/* Glowing accents around the phone */}
      <pointLight position={[2, 0, 1]} color="#10b981" intensity={0.5} distance={5} />
      <pointLight position={[-2, 2, 1]} color="#06b6d4" intensity={0.5} distance={5} />
    </group>
  );
};

export default PhoneModel;
