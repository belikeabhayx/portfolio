import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "./project";


const ProjectGrid = () => {

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of my most significant work, showcasing my skills and experience in building modern web applications."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
