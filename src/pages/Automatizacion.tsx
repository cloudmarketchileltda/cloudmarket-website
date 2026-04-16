import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, TrendingUp, Bot, Settings, Brain, Link2, Target, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const Automatizacion = () => {
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
            src="/images/auto.jpeg"
            alt="Automatización con Inteligencia Artificial"
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cm-green/20 text-cm-green text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                Automatización e IA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Automatización con <br className="hidden md:block" />
                <span 
                  className="text-transparent bg-clip-text" 
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(217 84% 53%) 0%, hsl(217 91% 60%) 100%)' }}
                >
                  Inteligencia Artificial
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                En CloudMarket Chile, ayudamos a tu empresa a dar el siguiente paso en su evolución digital. Elimina tareas repetitivas, optimiza procesos y permite que tu negocio funcione de forma más eficiente, rápida y escalable.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-cm-green text-white font-medium hover:bg-cm-green/90 transition-colors">
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
              ¿Qué es la automatización con IA?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              La automatización con inteligencia artificial consiste en utilizar tecnología avanzada para que ciertos procesos de tu empresa se ejecuten de manera automática, sin intervención manual constante.
            </p>
            <p className="text-lg text-muted-foreground">
              Esto permite que tu equipo se enfoque en lo realmente importante: <span className="font-semibold text-foreground">hacer crecer el negocio</span>.
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
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⚙️ ¿Qué procesos podemos automatizar?</h3>
              <p className="text-muted-foreground mb-6">
                En CloudMarket desarrollamos soluciones adaptadas a cada empresa. Algunas de las automatizaciones más comunes incluyen:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Atención automática de clientes (chatbots y WhatsApp)',
                  'Respuestas inteligentes en redes sociales',
                  'Gestión de leads y seguimiento de clientes',
                  'Automatización de ventas y embudos comerciales',
                  'Envío de correos automáticos (email marketing)',
                  'Integración entre plataformas (CRM, formularios, páginas web, etc.)',
                  'Procesos internos y administrativos'
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
              <div className="w-14 h-14 rounded-xl bg-cm-yellow/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-cm-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🧠 Inteligencia que aprende</h3>
              <p className="text-muted-foreground mb-6">
                No se trata solo de automatizar, sino de optimizar continuamente. Implementamos sistemas que:
              </p>
              <ul className="space-y-4">
                {[
                  'Analizan datos',
                  'Aprenden del comportamiento de los usuarios',
                  'Mejoran las respuestas y procesos con el tiempo'
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
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-light-blue/10 flex items-center justify-center mb-6">
                <Link2 className="w-7 h-7 text-light-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🔗 Integración total</h3>
              <p className="text-muted-foreground mb-6">
                Conectamos todas tus plataformas para que trabajen en conjunto de manera sincronizada y automática:
              </p>
              <ul className="space-y-3">
                {['Sitio web', 'WhatsApp', 'Redes sociales', 'CRM', 'Sistemas internos'].map((item, i) => (
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
                Trabajamos contigo para implementar soluciones reales:
              </p>
              <ul className="space-y-3">
                {[
                  'Analizamos tu operación actual',
                  'Detectamos oportunidades de automatización',
                  'Diseñamos la solución ideal',
                  'Implementamos y optimizamos'
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">💡 Casos de uso reales</h3>
              <ul className="space-y-4">
                {[
                  'Empresas que responden a clientes en segundos.',
                  'Negocios que generan ventas incluso fuera de horario.',
                  'Procesos internos de horas que ahora toman minutos.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mr-3 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cm-green/5 rounded-full blur-[100px] -z-10"></div>
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
              📈 Beneficios para tu negocio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La automatización no es el futuro, es el presente que aumenta tu competitividad.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Reducción de tareas manuales',
              'Ahorro de tiempo y costos',
              'Atención al cliente 24/7',
              'Mayor velocidad en procesos',
              'Incremento en conversiones y ventas',
              'Mejor experiencia para tus clientes'
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center"
              >
                <TrendingUp className="w-8 h-8 text-cm-green mb-3" />
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

export default Automatizacion;
