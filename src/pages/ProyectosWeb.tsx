import { useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

import { mockWebProjects } from "@/data/mockWebPortfolios";
import { WebCard } from "@/components/portfolio/WebCard";

const ProyectosWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden flex items-center min-h-[60vh]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/movil01.jpeg"
            alt="Portafolio de Proyectos Web"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-deep-blue/80 to-deep-blue/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              <Monitor className="w-4 h-4" />
              Portafolio de Desarrollo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestros Proyectos de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-cm-blue">
                Desarrollo Web
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Soluciones web desarrolladas para distintos clientes. Descubre cómo transformamos ideas en plataformas funcionales, modernas y preparadas para escalar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockWebProjects.map((project, index) => (
              <WebCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProyectosWeb;
