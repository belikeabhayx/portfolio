import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Makeup Website",
    href: "/projects",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/makeup.webp",
      DARK: "/images/projects/makeup.webp",
    },
  },
  {
    index: 1,
    title: "Travelling Website",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "MDX", "Swiper", "Vercel"],
    image: {
      LIGHT: "/images/projects/travel.webp",
      DARK: "/images/projects/travel.webp",
    },
  },
  {
    index: 2,
    title: "My Portfolio",
    href: "/projects",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Framer motion", "Vercel"],
    image: {
      LIGHT: "/images/projects/dark.webp",
      DARK: "/images/projects/light.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Makeup Website",
    favicon: "/images/projects/logos/makeup.ico",
    imageUrl: ["/images/projects/makeup.webp"],
    description:
      "A makeup website highlighting various services. Built with Next.js, TypeScript, and Tailwind CSS, it's a simple platform to explore different makeup styles and connect with the services. I'm proud of this project and eager for you to take a look!",
    liveWebsiteHref: "https://glamourytouch.com",
  },
  {
    name: "Travel Website",
    favicon: "/images/projects/logos/travel.ico",
    imageUrl: ["/images/projects/travel.webp"],
    description:
      "Created this travel website for a client, utilizing Next.js, Tailwind CSS and MDX. The goal was to design a user-friendly platform that simplifies travel planning and sparks wanderlust. With a focus on simplicity and functionality.",
    liveWebsiteHref: "https://samedaytajtour.com",
  },
  {
    name: "My Portfolio",
    favicon: "/images/projects/logos/portfolio.ico",
    imageUrl: ["/images/projects/light.webp", "/images/projects/dark.webp"],
    description:
      "My personal portfolio website created using Next.js, Tailwind CSS, and Framer Motion for a sleek and dynamic presentation.",
    liveWebsiteHref: "https://kd25.vercel.app",
  },
];
