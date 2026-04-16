import { motion } from "framer-motion";
import { Clock, Zap, TrendingUp, Expand } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Automatiza procesos manuales y dedica tu tiempo a lo que realmente importa.",
    metric: "70%",
    metricLabel: "menos tiempo en tareas repetitivas",
  },
  {
    icon: Zap,
    title: "Mayor eficiencia",
    description: "Optimiza cada área de tu negocio con tecnología inteligente y procesos automatizados.",
    metric: "3x",
    metricLabel: "más productividad operativa",
  },
  {
    icon: TrendingUp,
    title: "Incremento en ventas",
    description: "Estrategias digitales y herramientas que convierten visitantes en clientes reales.",
    metric: "150%",
    metricLabel: "incremento promedio en leads",
  },
  {
    icon: Expand,
    title: "Escalabilidad",
    description: "Infraestructura en la nube que crece contigo, sin límites ni interrupciones.",
    metric: "∞",
    metricLabel: "capacidad de crecimiento",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cm-green/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
            ¿Por qué elegir CloudMarket?
          </h2>
          <p className="text-light-gray/70 max-w-2xl mx-auto text-lg">
            Resultados reales para empresas que buscan crecer con tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-1">{benefit.metric}</div>
              <div className="text-xs text-light-gray/50 mb-3">{benefit.metricLabel}</div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{benefit.title}</h3>
              <p className="text-light-gray/60 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
