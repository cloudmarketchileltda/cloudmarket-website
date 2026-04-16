import { motion } from "framer-motion";
import { Search, Wrench, Bot, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico", description: "Analizamos tu negocio, identificamos oportunidades y diseñamos una estrategia a medida.", number: "01" },
  { icon: Wrench, title: "Implementación", description: "Desarrollamos e integramos las soluciones tecnológicas que necesitas.", number: "02" },
  { icon: Bot, title: "Automatización", description: "Automatizamos procesos clave con inteligencia artificial y herramientas cloud.", number: "03" },
  { icon: Rocket, title: "Escalamiento", description: "Optimizamos y escalamos tu operación para un crecimiento sostenible.", number: "04" },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso claro y eficiente para llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative mx-auto w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cm-yellow text-deep-blue text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
