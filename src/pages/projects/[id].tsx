import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import TechBadge from "@/components/project/TechBadge";
import PageTransition from "@/components/project/PageTransition";
import { projects } from "@/pages/projects/project";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Project not found</h1>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`${project.title} | Project by Abhay Chauhan`}
        description={project.description}
        canonical={`${siteMetadata.siteUrl}/projects/${project.id}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects/${project.id}`,
          title: `${project.title} | Project by Abhay Chauhan`,
          description: project.description,
          images: [
            {
              url: project.thumbnailUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
      />
      <PageTransition>
        <div className="pb-16">
          {/* Hero Section */}
          <div className="relative mb-12 h-[50vh] overflow-hidden md:h-[70vh]">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background"></div>
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                {project.title}
              </motion.h1>
            </div>
            <div className="absolute bottom-8 left-0 right-0 z-20">
              <div className="container">
                <Link
                  href="/"
                  className="flex items-center text-zinc-800/80 transition-colors hover:text-zinc-900 dark:text-zinc-200/80 dark:hover:text-zinc-100"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  <span>Back to Projects</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
                  <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
                    {project.overview}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-10"
                >
                  <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">▹</span>
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="mb-4 text-2xl font-bold">Image Gallery</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`aspect-video cursor-pointer overflow-hidden rounded-lg transition-all duration-200 ${
                          activeImage === index
                            ? "scale-[1.02] ring-2 ring-primary"
                            : "opacity-70 hover:scale-[1.02]"
                        }`}
                        onClick={() => setActiveImage(index)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="mb-4 text-xl font-bold">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                        My Role
                      </h4>
                      <p className="text-zinc-900 dark:text-zinc-100">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech.name} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-2 font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default ProjectDetail;
