export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  technologies: Technology[];
  features: string[];
  overview: string;
  role: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const technologies: Record<string, Technology> = {
  react: { name: "React", color: "#61DAFB" },
  next: { name: "Next.js", color: "#000000" },
  typescript: { name: "TypeScript", color: "#3178C6" },
  tailwind: { name: "Tailwind CSS", color: "#06B6D4" },
  node: { name: "Node.js", color: "#339933" },
  express: { name: "Express", color: "#000000" },
  mongodb: { name: "MongoDB", color: "#47A248" },
  firebase: { name: "Firebase", color: "#FFCA28" },
  graphql: { name: "GraphQL", color: "#E10098" },
  aws: { name: "AWS", color: "#FF9900" },
  redux: { name: "Redux", color: "#764ABC" },
  cms: { name: "Headless CMS", color: "#FF9900" },
  python: { name: "Python", color: "#3776AB" },
  postgresql: { name: "PostgreSQL", color: "#336791" },
  mysql: { name: "MySQL", color: "#4479A1" },
  reacthookform: { name: "React Hook Form", color: "#5A67D8" },
  zod: { name: "Zod", color: "#3178C6" },
  shadcnui: { name: "shadcn/ui", color: "#000000" },
  drizzle: { name: "Drizzle", color: "#000000" },
  framermotion: { name: "Framer Motion", color: "#FF61F6" },
  storybook: { name: "Storybook", color: "#FF4785" },
  nextauth: { name: "NextAuth.js", color: "#000000" },
  trpc: { name: "tRPC", color: "#000000" },
  reactquery: { name: "React Query", color: "#000000" },
  reacttable: { name: "React Table", color: "#000000" },
  zustand: { name: "Zustand", color: "#000000" },
  tanstacktable: { name: "TanStack Table", color: "#000000" },
};

export const projects: Project[] = [
  // visa-website
  {
    id: "visa-website",
    title: "Province Immigration",
    description:
      "Province Immigration is a leading immigration consultancy based in Delhi, established in 2015. The organization specializes in providing comprehensive immigration services to individuals seeking to move abroad for career advancement, education, or permanent settlement. The consultancy has built a strong reputation for delivering professional guidance and support throughout the immigration process, helping clients achieve their international aspirations efficiently and transparently.",
    thumbnailUrl: "/projects/province/pro-im.png",
    images: [
      "/projects/province/pro-im.png",
      "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.next,
      technologies.react,
      technologies.cms,
      technologies.node,
      technologies.postgresql,
      technologies.tailwind,
      technologies.reacthookform,
      technologies.zod,
      technologies.shadcnui,
      technologies.typescript,
      technologies.drizzle,
      technologies.framermotion,
    ],
    features: [
      "Responsive web design for seamless experience across devices",
      "Custom consultation forms for eligibility assessment and onboarding",
      "Content Management System (CMS) for easy updates and scalability",
      "Service-oriented architecture for organized immigration pathways",
      "SEO optimization for improved search engine visibility",
      "Secure handling of client data with encrypted forms",
      "Performance optimization for fast loading times",
      "Integration with email marketing and CRM tools",
      "Accessibility for users with disabilities",
    ],
    overview: `Province Immigration is a leading immigration consultancy based in Delhi, established in 2015. The organization specializes in providing comprehensive immigration services to individuals seeking to move abroad for career advancement, education, or permanent settlement. The consultancy has built a strong reputation for delivering professional guidance and support throughout the immigration process, helping clients achieve their international aspirations efficiently and transparently.`,
    role: "Full-stack Developer",
    demoUrl: "https://provinceimmigration.com",
    repoUrl: "#",
  },
  // accounting website
  {
    id: "accountingWebApp",
    title: "Accounting Web App",
    description:
      "NRH Books appears to be a comprehensive business management platform designed to help businesses scale and manage their operations efficiently. The tagline Manage Your Business Effortlessly suggests it's an all-in-one solution for business administration and operations.",
    thumbnailUrl: "/projects/accounting/accounting-home.png",
    images: [
      "/projects/accounting/accounting-home.png",
      "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.next,
      technologies.typescript,
      technologies.trpc,
      technologies.reactquery,
      technologies.zustand,
      technologies.shadcnui,
      technologies.trpc,
      technologies.tanstacktable,
      technologies.postgresql,
      technologies.tailwind,
      technologies.reacthookform,
      technologies.zod,
      technologies.framermotion,
      technologies.drizzle,
      technologies.nextauth,
    ],
    features: [
      "Kanban board with drag-and-drop interface",
      "Real-time collaboration with multiple users",
      "Task assignments, due dates, and priority levels",
      "Comments and attachment support",
      "Team management and user permissions",
      "Customizable workflows and views",
    ],
    overview: `NRH Books appears to be a comprehensive business management platform designed to help businesses scale and manage their operations efficiently. The tagline "Manage Your Business Effortlessly" suggests it's an all-in-one solution for business administration and operations.`,
    role: "Full-Stack Developer",
    demoUrl: "https://nrhbooks.com",
    repoUrl: "#",
  },
  // borderly
  {
    id: "borderly",
    title: "NPM package 'Borderly'",
    description:
      "An AI-powered application that generates blog posts, marketing copy, and social media content based on user inputs.",
    thumbnailUrl: "/projects/borderly/borderly-home.png",
    images: [
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.react,
      technologies.python,
      technologies.aws,
      technologies.tailwind,
    ],
    features: [
      "Content generation for multiple formats (blog, social, email)",
      "Customizable tone and style preferences",
      "Save and organize generated content",
      "Export to various formats (Markdown, HTML, etc.)",
      "Usage analytics and content performance metrics",
      "Integration with popular CMS platforms",
    ],
    overview: `This AI content generator leverages cutting-edge language models to help creators
        produce high-quality content efficiently. The front-end is built with React for a smooth user experience,
        while the Python backend handles API interactions with various AI services. AWS Lambda functions
        process content generation requests, optimizing for both speed and cost-effectiveness.`,
    role: "Full-stack Developer & AI Integration Specialist",
    demoUrl: "https://example.com/ai-generator",
    repoUrl: "https://github.com/example/ai-content-gen",
  },
  // xpert painting
  {
    id: "xpertpainting",
    title: "The Xpert Painting",
    description:
      "A comprehensive fitness tracking application with workout plans, progress monitoring, and nutritional guidance.",
    thumbnailUrl: "/projects/xpert/xpert-home.png",
    images: [
      "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.react,
      technologies.redux,
      technologies.firebase,
      technologies.node,
    ],
    features: [
      "Customizable workout plans and exercise library",
      "Progress tracking with visual charts and metrics",
      "Nutritional planning and meal suggestions",
      "Activity and workout history",
      "Goal setting and achievement rewards",
      "Social sharing and community challenges",
    ],
    overview: `This mobile fitness application was designed to help users maintain consistency in their fitness journey.
        The app provides personalized workout plans, detailed progress tracking, and nutritional guidance.
        React Native was used to develop a cross-platform solution that works seamlessly on both iOS and Android devices.
        The backend leverages Firebase for authentication and real-time data synchronization.`,
    role: "Mobile App Developer",
    demoUrl: "https://example.com/fitness-app",
    repoUrl: "https://github.com/example/fitness-app",
  },
];
