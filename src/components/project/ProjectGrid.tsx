import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects, technologies } from "./project";


const ProjectGrid = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((project) =>
        project.technologies.some(
          (tech) => tech.name === technologies[filter]?.name,
        ),
      )
    : projects;

  const techFilters = Object.keys(technologies).slice(0, 5); // Limit to most common technologies

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of my most significant work, showcasing my skills and experience in building modern web applications."
          align="center"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          <button
            onClick={() => setFilter(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === null
                ? "bg-primary text-white"
                : "bg-background-subtle text-foreground-subtle hover:text-foreground"
            }`}
          >
            All
          </button>
          {techFilters.map((techKey) => (
            <button
              key={techKey}
              onClick={() => setFilter(techKey)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === techKey
                  ? "bg-primary text-white"
                  : "bg-background-subtle text-foreground-subtle hover:text-foreground"
              }`}
            >
              {technologies[techKey].name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
