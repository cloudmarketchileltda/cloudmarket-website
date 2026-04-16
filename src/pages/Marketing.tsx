import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, TrendingUp, Megaphone, Target, Smartphone, Settings, BarChart3, Brain, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const Marketing = () => {
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
            src="/images/redes.jpeg"
            alt="Marketing Digital y Generación de Clientes"
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cm-yellow/20 text-cm-yellow text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                Marketing y Crecimiento
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Marketing Digital y <br className="hidden md:block" />
                <span 
                  className="text-transparent bg-clip-text" 
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(217 84% 53%) 0%, hsl(217 91% 60%) 100%)' }}
                >
                  Generación de Clientes
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                En CloudMarket Chile, diseñamos e implementamos estrategias de marketing digital enfocadas en resultados reales: atraer más clientes, aumentar tus ventas y hacer crecer tu negocio de forma sostenida.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-cm-yellow text-primary-foreground font-medium hover:bg-cm-yellow/90 transition-colors">
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
              Convertimos visitas en ventas
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              No se trata solo de estar en internet, sino de convertir visitas en oportunidades y oportunidades en ventas. Creamos estrategias personalizadas que combinan tecnología, automatización y marketing para maximizar el rendimiento de tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breakdowns */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all lg:col-span-2"
            >
              <div className="w-14 h-14 rounded-xl bg-cm-yellow/10 flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-cm-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🚀 ¿Qué hacemos por tu negocio?</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Generación de clientes potenciales (leads)',
                  'Publicidad digital (Meta Ads, Google Ads)',
                  'Gestión de redes sociales',
                  'Embudos de venta (funnels)',
                  'Email marketing automatizado',
                  'Optimización de conversiones (CRO)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-cm-yellow shrink-0 mr-3 mt-0.5" />
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
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🎯 Estrategias en resultados</h3>
              <p className="text-muted-foreground mb-6">
                Analizamos tu negocio, mercado y público objetivo para diseñar campañas que funcionen. Nos enfocamos en:
              </p>
              <ul className="space-y-4">
                {[
                  'Atraer a las personas correctas',
                  'Generar interés real en servicios',
                  'Convertir visitas en clientes',
                  'Optimizar continuamente'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mr-3 mt-0.5" />
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
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">📲 Presencia digital</h3>
              <p className="text-muted-foreground mb-6">
                Hoy tus clientes están en internet, y tu empresa debe estar a la altura. Te ayudamos a construir presencia en:
              </p>
              <ul className="space-y-4">
                {[
                  'Redes sociales (Instagram, Facebook)',
                  'Sitios web optimizados',
                  'Plataformas digitales relevantes'
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⚙️ Automatización</h3>
              <p className="text-muted-foreground mb-6">
                Integramos herramientas que permiten que el marketing trabaje incluso cuando tú no lo haces:
              </p>
              <ul className="space-y-4">
                {[
                  'Respuestas automáticas (WhatsApp)',
                  'Seguimiento automático de clientes',
                  'Flujos de ventas automatizados',
                  'Segmentación inteligente'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mr-3 mt-0.5" />
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
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">📊 Datos precisos</h3>
              <p className="text-muted-foreground mb-6">
                Todo se basa en datos. Monitoreamos constantemente y optimizamos:
              </p>
              <ul className="space-y-4">
                {[
                  'Rendimiento de campañas',
                  'Costos por cliente',
                  'Conversiones',
                  'Retorno de inversión (ROI)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mr-3 mt-0.5" />
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
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all lg:col-span-3 lg:grid lg:grid-cols-2 lg:gap-8 items-center bg-primary/5"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">🧠 Nuestro enfoque</h3>
                <p className="text-muted-foreground mb-6 lg:mb-0">
                  En CloudMarket Chile trabajamos de manera estratégica elaborando procesos comprobados.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Analizamos tu negocio',
                  'Definimos objetivos claros',
                  'Diseñamos la estrategia',
                  'Ejecutamos campañas efectivas',
                  'Medimos y optimizamos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
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
            className="mt-8 text-center flex flex-col items-center max-w-3xl mx-auto"
          >
             <Lightbulb className="w-10 h-10 text-cm-yellow mb-4" />
             <h3 className="text-xl font-bold mb-2">💡 Más que marketing, crecimiento</h3>
             <p className="text-muted-foreground">No solo hacemos campañas, creamos sistemas que permiten que tu negocio crezca de forma constante y sostenible en el tiempo.</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cm-yellow/5 rounded-full blur-[100px] -z-10"></div>
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
              📈 Beneficios para tu empresa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una estrategia digital bien ejecutada es lo que necesitas para escalar de la forma correcta.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              'Más clientes potenciales',
              'Aumento en ventas',
              'Mejor posicionamiento digital',
              'Procesos de venta más eficientes',
              'Crecimiento escalable'
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card w-48 p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center"
              >
                <TrendingUp className="w-8 h-8 text-cm-yellow mb-3" />
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

export default Marketing;
