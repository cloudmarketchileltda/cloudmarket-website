import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, TrendingUp, Cloud, Settings, ShieldCheck, Link2, Target, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const SoftwareCloud = () => {
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
            src="/images/cloud.jpeg"
            alt="Software en la Nube"
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-blue/20 text-light-blue text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                Software y Plataformas Cloud
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Software en la <br className="hidden md:block" />
                <span 
                  className="text-transparent bg-clip-text" 
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(217 84% 53%) 0%, hsl(217 91% 60%) 100%)' }}
                >
                  Nube
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                En CloudMarket Chile, desarrollamos e implementamos soluciones en la nube que permiten a tu empresa operar de forma moderna, segura y sin límites geográficos. Lleva tu negocio a un entorno digital.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-light-blue text-primary-foreground font-medium hover:bg-light-blue/90 transition-colors">
                  Proyectos
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
              ¿Qué es el software en la nube?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              El software en la nube (cloud) permite que tus sistemas y datos no dependan de un computador físico o servidor local, sino que estén alojados en infraestructura segura accesible a través de internet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Tu oficina', 'Tu casa', 'Tu celular', 'Cualquier parte del mundo'].map((item, i) => (
                <div key={i} className="bg-muted px-4 py-3 rounded-lg text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-8">
              Esto significa que puedes gestionar tu negocio desde cualquiera de estos lugares con total libertad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breakdowns */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⚙️ Soluciones que ofrecemos</h3>
              <p className="text-muted-foreground mb-6">
                En CloudMarket creamos soluciones cloud adaptadas a las necesidades de cada empresa:
              </p>
              <ul className="space-y-4">
                {[
                  'Sistemas de gestión empresarial (ERP)',
                  'Plataformas de ventas y control de clientes',
                  'Paneles de administración (dashboards)',
                  'Sistemas de inventario y control de stock',
                  'Herramientas internas personalizadas',
                  'Plataformas web conectadas a bases de datos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm">{item}</span>
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
              <div className="w-14 h-14 rounded-xl bg-cm-green/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-cm-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🔐 Seguridad y confianza</h3>
              <p className="text-muted-foreground mb-6">
                Sabemos que la información de tu empresa es crítica. Por eso nuestras soluciones incluyen:
              </p>
              <ul className="space-y-4">
                {[
                  'Protección de datos',
                  'Accesos seguros y controlados',
                  'Copias de seguridad automáticas',
                  'Alta disponibilidad (siempre online)',
                  'Infraestructura confiable y escalable'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-cm-green shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm">{item}</span>
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
                <Link2 className="w-7 h-7 text-light-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🔗 Integración total</h3>
              <p className="text-muted-foreground mb-6">
                Nuestras soluciones en la nube pueden integrarse con y crear un solo ecosistema digital:
              </p>
              <ul className="space-y-4">
                {['Sitios web', 'Aplicaciones móviles', 'Sistemas de automatización', 'CRM y herramientas de marketing', 'Plataformas externas'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-light-blue shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🎯 Nuestro enfoque</h3>
              <p className="text-muted-foreground mb-6">
                En CloudMarket trabajamos estrechamente contigo para:
              </p>
              <ul className="space-y-4">
                {[
                  'Entender tu operación actual',
                  'Diseñar una solución cloud a medida',
                  'Implementar el sistema de forma segura',
                  'Acompañar su crecimiento y evolución'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center flex flex-col items-center max-w-3xl mx-auto"
          >
             <Brain className="w-10 h-10 text-primary mb-4" />
             <h3 className="text-xl font-bold mb-2">🧠 Tecnología que impulsa tu crecimiento</h3>
             <p className="text-muted-foreground">El uso de software en la nube no solo moderniza tu empresa, sino que te permite tomar decisiones basadas en datos en tiempo real y mejorar la eficiencia de todos tus procesos.</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-light-blue/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📈 Beneficios de un software Cloud
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mayor eficiencia, menor costo operativo y más agilidad para escalar tu negocio cómodamente.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Acceso 24/7 desde cualquier dispositivo',
              'Reducción de costos en infraestructura',
              'Información centralizada y organizada',
              'Mayor control de tu negocio',
              'Escalabilidad según el crecimiento de tu empresa',
              'Actualizaciones constantes sin interrupciones'
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center"
              >
                <TrendingUp className="w-8 h-8 text-light-blue mb-3" />
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

export default SoftwareCloud;
