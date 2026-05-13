import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import PhoneModel from "../3d/PhoneModel";

const MobileDemoHero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Demo Mobile Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Diseñamos el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                Futuro Móvil
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg">
              Creamos aplicaciones que no solo funcionan, sino que cautivan. 
              Interactúa con nuestra demo y siente la fluidez de un desarrollo premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Solicitar Mi App
            </a>
            <button
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Ver Proyectos
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 pt-4 grayscale opacity-50"
          >
            {/* Tech Icons */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-white font-mono text-[10px] uppercase tracking-widest">Swift</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-white font-mono text-[10px] uppercase tracking-widest">Kotlin</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-white font-mono text-[10px] uppercase tracking-widest">React Native</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-white font-mono text-[10px] uppercase tracking-widest">Flutter</div>
            </div>
          </motion.div>
        </div>

        {/* 3D Phone Model Canvas */}
        <div className="relative h-[600px] md:h-full order-1 lg:order-2">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 10], fov: 45 }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <Suspense fallback={null}>
              <PhoneModel mouse={mouse} />
              <Environment preset="city" />
              <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4.5}
              />
            </Suspense>
            
            {/* Disable zoom/pan but keep nice orientation if needed */}
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>

          {/* Floating UI Indicators */}
          <div className="absolute top-1/4 right-0 md:right-10 z-20">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">+12.5%</div>
                    <div className="text-gray-400 text-[10px]">Rendimiento</div>
                  </div>
                </div>
             </motion.div>
          </div>

          <div className="absolute bottom-1/4 left-0 md:left-10 z-20">
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Cloud Sync</div>
                    <div className="text-gray-400 text-[10px]">Sincronizado</div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
        <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">Scroll para explorar</span>
      </motion.div>
    </section>
  );
};

export default MobileDemoHero;
