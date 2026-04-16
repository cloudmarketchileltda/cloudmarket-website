import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Code2, Smartphone, Settings, Target, TrendingUp, MonitorPlay } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const DesarrolloWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden flex items-center min-h-[85vh]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/movil.jpeg"
            alt="Desarrollo Web y Apps"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-deep-blue/80 to-deep-blue/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full pt-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                Desarrollo y Software
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Desarrollo Web y <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-cm-blue">
                  Aplicaciones Móviles
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                En CloudMarket Chile, diseñamos y desarrollamos soluciones digitales a medida que permiten a tu empresa crecer, optimizar sus procesos y ofrecer una experiencia moderna a tus clientes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/proyectos-moviles" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Proyectos Móviles
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="#" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Proyectos Web
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creamos soluciones que generan resultados
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creamos sitios web profesionales, plataformas digitales y aplicaciones móviles pensadas no solo para verse bien, sino para generar resultados reales: más clientes, mayor eficiencia y una presencia digital sólida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MonitorPlay className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🚀 Desarrollo Web Profesional</h3>
              <p className="text-muted-foreground mb-6">
                Construimos sitios web modernos, rápidos y totalmente adaptados a cualquier dispositivo (responsive), enfocados en la conversión y la experiencia del usuario.
              </p>
              <ul className="space-y-3 mb-6">
                {['Sitios web corporativos', 'Landing pages de alto rendimiento', 'Tiendas online (e-commerce)', 'Plataformas personalizadas', 'Integraciones con sistemas y herramientas externas'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mr-3 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border">
                <p className="font-semibold mb-3">Cada proyecto está optimizado para:</p>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-sm bg-muted px-3 py-1.5 rounded-md text-center">Velocidad de carga</span>
                  <span className="text-sm bg-muted px-3 py-1.5 rounded-md text-center">SEO</span>
                  <span className="text-sm bg-muted px-3 py-1.5 rounded-md text-center">Seguridad</span>
                  <span className="text-sm bg-muted px-3 py-1.5 rounded-md text-center">Escalabilidad</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-cm-yellow/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-cm-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-4">📱 Apps Móviles</h3>
              <p className="text-muted-foreground mb-6">
                Desarrollamos aplicaciones móviles para Android e iOS que permiten a tu negocio estar presente en el día a día de tus clientes. Ya sea una app para clientes, ventas, gestión o servicios.
              </p>
              <ul className="space-y-3 mb-6">
                {['Experiencia de usuario intuitiva', 'Alto rendimiento y estabilidad', 'Integración con sistemas web y bases de datos', 'Automatización de procesos internos'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-cm-yellow shrink-0 mr-3 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-light-blue/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-light-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⚙️ Soluciones a Medida</h3>
              <p className="text-muted-foreground mb-6">
                Entendemos que cada negocio es diferente. Por eso, desarrollamos sistemas personalizados que se adaptan a tus necesidades específicas.
              </p>
              <ul className="space-y-3 mb-6">
                {['Sistemas de gestión interna', 'Automatización de procesos', 'Paneles de control (dashboards)', 'Integraciones con APIs y plataformas externas'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-light-blue shrink-0 mr-3 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🎯 Nuestro enfoque</h3>
              <p className="text-muted-foreground mb-6">
                En CloudMarket no solo desarrollamos tecnología, sino que construimos herramientas estratégicas para tu negocio:
              </p>
              <ul className="space-y-3 mb-6">
                {['Analizamos tus necesidades reales', 'Diseñamos soluciones eficientes', 'Implementamos tecnología moderna', 'Acompañamos tu crecimiento digital'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mr-3 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-light-blue/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📈 Beneficios para tu empresa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformar tu idea en una solución digital tiene impacto directo en tu crecimiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {['Mayor presencia digital', 'Aumento de clientes y ventas', 'Procesos más eficientes', 'Reducción de tareas manuales', 'Escalabilidad del negocio'].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center"
              >
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <span className="font-medium text-sm md:text-base leading-tight">{benefit}</span>
              </motion.div>
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

export default DesarrolloWeb;
