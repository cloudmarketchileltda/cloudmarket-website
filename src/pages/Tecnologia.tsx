import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Smartphone, Brain, Zap, Shield, Database, Cloud, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const Tecnologia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    {
      title: "Desarrollo Web",
      icon: <Globe className="w-8 h-8 text-primary" />,
      description: "Utilizamos Next.js 15 y React 19 para crear plataformas web ultrarrápidas, escalables y optimizadas para SEO.",
      details: ["TypeScript", "Tailwind CSS", "Node.js", "GraphQL"]
    },
    {
      title: "Apps Móviles",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      description: "Desarrollamos aplicaciones nativas y multiplataforma con Flutter, garantizando alto rendimiento y UX premium.",
      details: ["Dart", "Firebase", "State Management", "Local DB"]
    },
    {
      title: "Infraestructura Cloud",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      description: "Implementamos soluciones robustas sobre AWS y Supabase para garantizar seguridad y disponibilidad 24/7.",
      details: ["PostgreSQL", "Edge Functions", "S3 Storage", "IAM Security"]
    }
  ];

  const aiUseCases = [
    {
      title: "Análisis Predictivo",
      description: "Utilizamos modelos estadísticos avanzados para anticipar tendencias de mercado y comportamiento de usuarios.",
      icon: <Database className="w-6 h-6 text-light-blue" />
    },
    {
      title: "NLP & Chatbots",
      description: "Implementamos interfaces conversacionales que entienden y procesan el lenguaje humano con precisión quirúrgica.",
      icon: <Brain className="w-6 h-6 text-light-blue" />
    },
    {
      title: "Visión Artificial",
      description: "Procesamiento de imágenes para automatizar el control de calidad y la seguridad perimetral.",
      icon: <Shield className="w-6 h-6 text-light-blue" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análisis & Diseño",
      text: "Evaluamos las necesidades tecnológicas y diseñamos la arquitectura ideal para el escalamiento."
    },
    {
      step: "02",
      title: "Desarrollo Ágil",
      text: "Iteraciones rápidas con feedback constante, utilizando integración continua (CI/CD)."
    },
    {
      step: "03",
      title: "Integración de IA",
      text: "Inyectamos capas de inteligencia en los procesos clave para optimizar la operación."
    },
    {
      step: "04",
      title: "Despliegue & Mejora",
      text: "Lanzamiento en entornos cloud seguros y optimización basada en datos reales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Matched with Proyectos Web */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden flex items-center min-h-[60vh]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloud.jpeg"
            alt="Tecnología e inteligencia artificial"
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
              <Cpu className="w-4 h-4" />
              Nuestra Tecnología
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Innovación impulsada por <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-cm-blue">Inteligencia Artificial</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Construimos el futuro digital combinando los frameworks más modernos de desarrollo con el poder transformador de la IA y la automatización inteligente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-tight">Más que código, soluciones inteligentes</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              En CloudMarket, no solo escribimos software; diseñamos ecosistemas digitales que aprenden y evolucionan. Nuestra filosofía se basa en la convergencia de la robustez del desarrollo tradicional con la agilidad de los algoritmos modernos de IA.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section - Soft Light Gray Background */}
      <section className="py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stack Tecnológico Premium</h2>
            <p className="text-slate-500">Herramientas de clase mundial para resultados excepcionales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-primary/30 hover:shadow-xl transition-all group shadow-sm"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.details.map(detail => (
                    <span key={detail} className="text-[10px] px-2 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-200 uppercase tracking-tighter">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases - White Background */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {aiUseCases.map((useCase, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all group">
                <div className="p-4 bg-primary/5 rounded-full mb-6 group-hover:bg-primary/10 transition-colors">
                  {useCase.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process - Light Blue Tint */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Nuestro Proceso de Implementación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-black text-slate-900/5 absolute -top-8 -left-4 group-hover:text-primary/10 transition-colors">{step.step}</div>
                <div className="relative z-10 space-y-4">
                  <h5 className="text-xl font-bold text-slate-900">{step.title}</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation Section - Dark Blue Theme */}
      <section className="py-32 relative overflow-hidden bg-[#0f172a]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  IA Aplicada a la <span className="text-light-blue">Eficiencia Real</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  No implementamos IA porque sea tendencia; lo hacemos porque genera valor medible. Nuestras soluciones de automatización inteligente permiten a las empresas reducir costos operativos hasta en un 40%.
                </p>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Brain className="w-8 h-8 text-light-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">IA en el Core Estratégico</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">Integramos modelos de lenguaje avanzados (LLMs) y procesamiento de lenguaje natural (NLP) para potenciar la toma de decisiones.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-light-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Automatización de Procesos Críticos</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">Diseñamos flujos de trabajo inteligentes que automatizan tareas repetitivas.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img
                src="/images/auto.jpeg"
                alt="Automatización IA"
                className="rounded-[3rem] border border-white/10 relative z-10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Values Section - Slate 50 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 uppercase tracking-wider">Nuestros Compromisos Tecnológicos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Shield className="w-10 h-10 text-primary mx-auto" />
              <h5 className="text-slate-900 font-bold text-lg">Seguridad Total</h5>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Encriptación de punto a punto</p>
            </div>
            <div className="space-y-4">
              <Zap className="w-10 h-10 text-primary mx-auto" />
              <h5 className="text-slate-900 font-bold text-lg">Velocidad Extrema</h5>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Tiempos de carga &lt; 1s</p>
            </div>
            <div className="space-y-4">
              <Database className="w-10 h-10 text-primary mx-auto" />
              <h5 className="text-slate-900 font-bold text-lg">Escalabilidad Cloud</h5>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Crecimiento sin límites</p>
            </div>
            <div className="space-y-4">
              <Brain className="w-10 h-10 text-primary mx-auto" />
              <h5 className="text-slate-900 font-bold text-lg">Inteligencia Nativa</h5>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Aprendizaje continuo</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tecnologia;
