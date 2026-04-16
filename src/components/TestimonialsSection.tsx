import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TiendaFácil",
    text: "CloudMarket transformó completamente nuestro e-commerce. Aumentamos nuestras ventas en un 200% en solo 3 meses gracias a la automatización.",
    rating: 5,
  },
  {
    name: "Carlos Muñoz",
    role: "Director, Logística Express",
    text: "La automatización con IA que implementaron nos ahorró más de 40 horas semanales en procesos operativos. Increíble equipo.",
    rating: 5,
  },
  {
    name: "Andrea López",
    role: "Fundadora, Salud Digital",
    text: "Desde que trabajamos con CloudMarket, nuestra captación de pacientes se triplicó. Su enfoque en resultados es lo que los diferencia.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cm-yellow text-cm-yellow" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
