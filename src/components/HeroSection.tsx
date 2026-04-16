import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center pt-20">
      {/* Dynamic Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-primary/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0], 
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] rounded-full bg-light-blue/20 blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 40, -40, 0], 
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-deep-blue/15 blur-[160px]" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cm-green animate-pulse" />
              <span className="text-sm font-medium text-light-gray">
                Transformación digital para PYMEs
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary-foreground">Transforma tu negocio con </span>
              <span className="text-gradient">tecnología e inteligencia artificial</span>
            </h1>

            <p className="text-lg md:text-xl text-light-gray/80 mb-8 max-w-lg leading-relaxed">
              Automatiza procesos, aumenta tus ventas y escala tu empresa con soluciones digitales a medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-glow flex items-center justify-center gap-2 group"
              >
                Solicitar asesoría
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="glass text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300 text-center"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              {[
                { value: "50+", label: "Clientes activos" },
                { value: "98%", label: "Satisfacción" },
                { value: "3x", label: "ROI promedio" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-light-gray/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow" />
              <img
                src="/images/imagenfondo.jpeg"
                alt="Tecnología e inteligencia artificial para empresas"
                className="relative rounded-2xl shadow-2xl animate-float w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
