import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { AppProject } from "@/data/mockPortfolios";
import { MobileMockupCarousel } from "./MobileMockupCarousel";
import { VideoModal } from "./VideoModal";

interface AppCardProps {
  project: AppProject;
  index: number;
}

export const AppCard = ({ project, index }: AppCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="flex flex-col items-center group"
    >
      <div className="w-full mb-8 flex justify-center group-hover:scale-[1.05] transition-transform duration-500 drop-shadow-2xl">
        <MobileMockupCarousel images={project.images} />
      </div>

      <div className="flex flex-col w-full text-center px-4">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};


