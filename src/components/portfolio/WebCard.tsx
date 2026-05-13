import { motion } from "framer-motion";
import { Play, ExternalLink, ShoppingCart, LayoutDashboard, GraduationCap, Users, Rocket, Calendar, Store, Boxes } from "lucide-react";
import { WebProject } from "@/data/mockWebPortfolios";

interface WebCardProps {
  project: WebProject;
  index: number;
}

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "e-commerce": return <ShoppingCart className="w-5 h-5" />;
    case "dashboard": return <LayoutDashboard className="w-5 h-5" />;
    case "plataforma educativa": return <GraduationCap className="w-5 h-5" />;
    case "sistema crm": return <Users className="w-5 h-5" />;
    case "landing page corporativa": return <Rocket className="w-5 h-5" />;
    case "portal de reservas": return <Calendar className="w-5 h-5" />;
    case "marketplace b2b": return <Store className="w-5 h-5" />;
    case "sistema de inventarios": return <Boxes className="w-5 h-5" />;
    default: return <LayoutDashboard className="w-5 h-5" />;
  }
};

export const WebCard = ({ project, index }: WebCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-glow-lg transition-all duration-300 group h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
            {getIcon(project.type)}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary/80">{project.type}</span>
        </div>

        <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
          <span className="text-foreground font-bold block text-lg mb-1 tracking-tight">{project.title}</span>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground border border-border font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


