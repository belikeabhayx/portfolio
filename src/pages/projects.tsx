import { NextSeo } from "next-seo";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="About Abhay Chauhan | Full Stack Developer"
        description="Discover a collection of projects curated by Abhay Chauhan, , a seasoned Full Stack Developer. From innovative web applications to responsive interfaces, explore the breadth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Abhay Chauhan - Full Stack Developer",
          description:
            "Explore a showcase of projects crafted by Abhay Chauhan, a Full Stack Developer. Embark on a journey where creativity meets technology in the realm of web development.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, Nextjs Developer, Frontend Developer, Web Developer, JavaScript, typescript, tailwind, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
          <div className="my-2">
            <span className="text-sm">
              Below are couple of the projects I&apos;d like to share:
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Currently, I&apos;m working on building new projects and expanding
              my skill set by delving more into backend development.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Thank you for taking the time to explore my latest work , I hope
              you like it!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
