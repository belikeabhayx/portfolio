import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "../../pages/projects/project";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <div className="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-60"></div>
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors">
              {project.title}
            </h3>
            <span className="text-foreground-subtle transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="text-foreground-subtle mt-2 line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <TechBadge key={tech.name} tech={tech} size="sm" />
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-background-muted text-foreground-subtle rounded-full px-2 py-1 text-xs">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
