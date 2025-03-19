import Image from "next/image";
import { NextSeo } from "next-seo";
// import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import ShowCaseList from "@/components/ShowCaseList";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { EXPERIENCE } from "@/data/experience";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Abhay Chauhan | Full Stack Developer"
        description="Learn more about Abhay Chauhan, a dedicated Full Stack Developer with 2 years of experience, I humbly invite you to explore the journey, skills, and passion that fuel my commitment to crafting innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
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
      <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={"/images/heroProfile.png"}
                width={100}
                height={100}
                className="h-auto w-full px-0 xl:px-16"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting" duration={0.6}>
              <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-6xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Abhay Chauhan
              </h1>
            </FadeUp>
            <FadeUp key="description-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                I transform ideas into digital realities through coding,
                infusing each project with a dedication to exceptional design
                and user-focused solutions.
              </p>
            </FadeUp>
            <FadeUp key="description-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Feel free to browse through my recent projects to see how
                I&apos;ve utilized React.js, Next.js, JavaScript, TypeScript,
                and web development. I&apos;m always learning and improving, and
                I&apos;d love to share my journey with you.
              </p>
            </FadeUp>
            {/* <FadeRight
              key="hero-location"
              duration={0.6}
              delay={0.8}
              className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="Indian flag"
                  src="https://flagcdn.com/in.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium">Uttar Pradesh, India</span>
            </FadeRight> */}
          </AnimatePresence>
        </div>
      </div>
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      <ShowCaseList title="Education" details={EDUCATION} />
    </>
  );
}
