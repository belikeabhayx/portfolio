import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import DarkHero from "@/components/DarkHero/DarkHero";
import { useTheme } from "next-themes";
import ProjectGrid from "@/components/project/ProjectGrid";
import Contact from "@/components/contact";


const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 z-10 h-full w-full"
      />
      <NextSeo
        title="About Abhay Chauhan | Full Stack Developer"
        description="Learn more about Abhay Chauhan, a dedicated Full Stack Developer with 2 years of experience, I humbly invite you to explore the journey, skills, and passion that fuel my commitment to crafting innovative and user-friendly web solutions."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Learn About Abhay Chauhan - Full Stack Developer",
          description:
            "Dive into my journey as a Full Stack Developer, where I share my experiences, skills, and the passion that drives my commitment to delivering exceptional web solutions.",
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
      {theme === "dark" ? <DarkHero /> : <Hero />}
      <Skills />
      {/* <Project projects={PROJECT_SHOWCASE} /> */}
      <ProjectGrid />
      <Contact/>
    </>
  );
}
