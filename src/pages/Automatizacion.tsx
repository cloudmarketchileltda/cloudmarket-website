import { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Bot, Share2, Workflow, Cpu, MessageSquare, BarChart, Settings, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";

const Automatizacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const automationServices = [
    {
      title: "Workflows con n8n",
      icon: <Workflow className="w-8 h-8 text-primary" />,
      description: "Conectamos todas tus herramientas (CRM, Email, Sheets) mediante flujos lógicos potentes y escalables.",
      details: ["Integración de APIs", "Webhooks", "Transformación de Datos", "Self-hosted"]
    },
    {
      title: "Agentes de IA",
      icon: <Bot className="w-8 h-8 text-primary" />,
      description: "Desarrollamos bots inteligentes que no solo responden, sino que ejecutan acciones basadas en lenguaje natural.",
      details: ["OpenAI / Anthropic", "LangChain", "RAG (Knowledge Base)", "Autogestión"]
    },
    {
      title: "RRSS & Marketing",
      icon: <Share2 className="w-8 h-8 text-primary" />,
      description: "Automatizamos la publicación, respuesta y análisis de tus redes sociales para una presencia 24/7.",
      details: ["Meta API", "Instagram Automation", "Content Scheduling", "Auto-reply"]
    }
  ];

  const benefits = [
    {
      title: "Ahorro de Tiempo",
      text: "Elimina hasta el 90% de las tareas manuales repetitivas de tu equipo.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cero Errores",
      text: "La automatización no se cansa ni comete errores de digitación.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Escalabilidad",
      text: "Procesa miles de solicitudes simultáneamente sin aumentar costos fijos.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Atención Inmediata",
      text: "Responde a tus clientes en segundos, incluso fuera de horario laboral.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/auto.jpeg"
            alt="Automatización inteligente"
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
              <Zap className="w-4 h-4" />
              Eficiencia Operativa
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Automatización Inteligente <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-cm-blue">Sin Límites</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Transformamos procesos manuales en flujos de trabajo autónomos utilizando n8n, IA de última generación y conectividad total.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-tight italic">"Si se puede repetir, se puede automatizar"</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              En la era de la IA, el tiempo es el recurso más valioso. Ayudamos a las empresas a liberar su talento humano de la carga operativa, delegando en sistemas inteligentes la ejecución de procesos críticos en ventas, marketing y operaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-primary/30 hover:shadow-xl transition-all group shadow-sm"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.details.map(detail => (
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

      {/* n8n Special Section - Dark Blue */}
      <section className="py-32 relative overflow-hidden bg-[#0f172a]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/n8n-automation.png"
                alt="n8n Automation Workflow"
                className="rounded-[3rem] border border-white/10 shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Potencia tu negocio con <br />
                <span className="text-light-blue">n8n Workflow Engine</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                n8n es la herramienta de automatización más flexible del mercado. A diferencia de Zapier, nos permite crear lógicas complejas sin límites de pasos y con un control total sobre tus datos.
              </p>
              <ul className="space-y-4">
                {["Conexión con +400 apps", "Lógica condicional avanzada", "Procesamiento de archivos en tiempo real", "Integración nativa con nodos de IA"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Automation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Automatización de Redes Sociales</h2>
              <p className="text-slate-500">Haz que tu marca trabaje por ti mientras descansas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <MessageSquare className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Respuestas Inteligentes</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Configuramos agentes de IA que responden comentarios y mensajes directos en Instagram y Facebook, calificando leads y agendando citas automáticamente.
                </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <Share2 className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Contenido Autónomo</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sistemas que generan borradores de contenido basados en tendencias y los programan en tus canales digitales sin intervención manual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary">
                  {benefit.icon}
                </div>
                <h5 className="text-slate-900 font-bold text-lg">{benefit.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.text}</p>
              </div>
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
