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
      className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center shadow-sm hover:shadow-glow-lg transition-all duration-300 group"
    >
      <div className="w-full mb-6 flex justify-center group-hover:scale-[1.02] transition-transform duration-500">
        <MobileMockupCarousel images={project.images} />
      </div>

      <div className="flex flex-col flex-1 w-full mt-2 text-center">
        <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm flex-1 leading-relaxed max-w-sm mx-auto">
          {project.description}
        </p>

        <div className="mt-6 w-full flex justify-center">
          <VideoModal
            videoUrl={project.videoUrl}
            trigger={
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center">
                <Play className="w-4 h-4 fill-current" />
                Ver video
              </button>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};
