import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { WebProject } from "@/data/mockWebPortfolios";
import { VideoModal } from "./VideoModal";

interface WebCardProps {
  project: WebProject;
  index: number;
}

export const WebCard = ({ project, index }: WebCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-glow-lg transition-all duration-300 group"
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
        <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <VideoModal
            videoUrl={project.videoUrl}
            trigger={
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm">
                <Play className="w-4 h-4 fill-current" />
                Ver demo
              </button>
            }
          />
          <button className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-xl font-semibold hover:bg-muted transition-colors text-sm">
            <ExternalLink className="w-4 h-4" />
            Visitar
          </button>
        </div>
      </div>
    </motion.div>
  );
};
