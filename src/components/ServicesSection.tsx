import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Bot, Cloud, Megaphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo web y apps móviles",
    description: "Aplicaciones modernas, rápidas y escalables que se adaptan a las necesidades de tu negocio.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/servicios/desarrollo-web",
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    description: "Integra inteligencia artificial para automatizar tareas repetitivas y optimizar tu operación.",
    color: "text-cm-green",
    bgColor: "bg-cm-green/10",
    path: "/servicios/automatizacion-ia",
  },
  {
    icon: Cloud,
    title: "Software en la nube",
    description: "Soluciones cloud seguras y accesibles desde cualquier lugar, siempre disponibles.",
    color: "text-light-blue",
    bgColor: "bg-light-blue/10",
    path: "/servicios/software-cloud",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    description: "Estrategias de marketing y generación de clientes que impulsan el crecimiento de tu empresa.",
    color: "text-cm-yellow",
    bgColor: "bg-cm-yellow/10",
    path: "/servicios/marketing-digital",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Soluciones digitales para tu empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos un ecosistema completo de servicios tecnológicos para impulsar la transformación digital de tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );

            if (service.path) {
              return (
                <Link key={service.title} to={service.path} className="block">
                  {CardContent}
                </Link>
              );
            }

            return <div key={service.title}>{CardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
