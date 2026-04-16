import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Lleva tu negocio al{" "}
            <span className="text-gradient">siguiente nivel</span>
          </h2>
          <p className="text-light-gray/70 text-lg max-w-xl mx-auto mb-10">
            Agenda una asesoría gratuita y descubre cómo la tecnología puede transformar tu empresa.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-glow-lg group"
          >
            Comienza ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
