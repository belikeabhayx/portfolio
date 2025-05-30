import { NextSeo } from "next-seo";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { useTheme } from "next-themes";
import { routes } from "@/data/navigationRoutes";
import Navbar from "@/layout/Navbar/Navbar";
import ProjectGrid from "@/components/project/ProjectGrid";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" && <Navbar routes={routes} />}
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
      <ProjectGrid />
    </>
  );
}
