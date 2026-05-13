import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Standard Page Format */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden flex items-center min-h-[50vh]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/redes.jpeg"
            alt="Contacto CloudMarket"
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-white text-sm font-medium mb-8">
              <Mail className="w-4 h-4" />
              Ponte en Contacto
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-cm-blue">Empezar?</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a transformar tu negocio con tecnología e inteligencia artificial. Cuéntanos tu visión y la haremos realidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
