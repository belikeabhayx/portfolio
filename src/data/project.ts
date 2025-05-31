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
  next: { name: "Next.js", color: "#8E44AD" }, // Purple-ish
  typescript: { name: "TypeScript", color: "#3178C6" },
  tailwind: { name: "Tailwind CSS", color: "#06B6D4" },
  node: { name: "Node.js", color: "#339933" },
  express: { name: "Express", color: "#E67E22" }, // Orange
  mongodb: { name: "MongoDB", color: "#47A248" },
  cms: { name: "Headless CMS", color: "#FF9900" },
  postgresql: { name: "PostgreSQL", color: "#336791" },
  reacthookform: { name: "React Hook Form", color: "#5A67D8" },
  zod: { name: "Zod", color: "#0A9396" }, // Teal
  shadcnui: { name: "shadcn/ui", color: "#FF7F50" }, // Coral
  drizzle: { name: "Drizzle", color: "#9B59B6" }, // Purple
  framermotion: { name: "Framer Motion", color: "#FF61F6" },
  nextauth: { name: "NextAuth.js", color: "#F39C12" }, // Golden
  trpc: { name: "tRPC", color: "#16A34A" }, // Green
  reactquery: { name: "React Query", color: "#E11D48" }, // Red
  zustand: { name: "Zustand", color: "#F97316" }, // Orange
  tanstacktable: { name: "TanStack Table", color: "#3B82F6" }, // Blue
  python: { name: "Python", color: "#3776AB" }, // Python Blue
  aws: { name: "AWS", color: "#FF9900" }, // AWS Orange
  rollup: { name: "Rollup", color: "#FF5733" }, // Red-Orange
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
      technologies.typescript,
      technologies.tailwind,
      technologies.rollup,
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
      "The Xpert Painting is a professional painting service provider, specializing in residential and commercial painting projects. The company emphasizes a customer-centric approach, delivering quality workmanship and ensuring client satisfaction throughout the painting process. Their services are available in locations such as Agra, and they are recognized for their reliability, efficiency, and attention to detail.",
    thumbnailUrl: "/projects/xpert/xpert-home.png",
    images: [
      "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
      technologies.shadcnui,
    ],
    features: [
      "Customizable workout plans with dynamic exercise library integration using RESTful APIs and responsive UI components",
      "Progress tracking implemented with interactive data visualizations using charting libraries like D3.js or Chart.js for real-time analytics",
      "Nutritional planning module featuring algorithm-driven meal suggestions and macro tracking with database-backed user profiles",
      "Activity and workout history stored securely in cloud databases with efficient querying and offline synchronization support",
      "Goal setting system with real-time achievement tracking and gamification elements using push notifications and badge rewards",
      "Social sharing and community challenges integrated via social media APIs and real-time messaging frameworks for enhanced user engagement",
    ],
    overview: `The Xpert Painting is a professional painting service provider, specializing in residential and commercial painting projects. The company emphasizes a customer-centric approach, delivering quality workmanship and ensuring client satisfaction throughout the painting process. Their services are available in locations such as Agra, and they are recognized for their reliability, efficiency, and attention to detail.`,
    role: "Frontend Developer",
    demoUrl: "https://www.thexpertpainting.com",
    repoUrl: "#",
  },
  // glamourytouch
  {
    id: "glamourytouch",
    title: "Glamoury Touch",
    description:
      "Glamoury Touch is a professional cleaning service provider offering a range of residential and commercial cleaning solutions. The website serves as a digital platform for customers to explore services, book appointments, and manage their interactions seamlessly. The frontend is designed for optimal user experience, ensuring accessibility, responsiveness, and interactive engagement throughout the booking and service management process.",
    thumbnailUrl: "/projects/glamoury/makeup.webp",
    images: [
      "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
      technologies.shadcnui,
    ],
    features: [
      "Intuitive online appointment booking interface built with React, featuring real-time calendar integration and form validation for seamless scheduling",
      "Dynamic, filterable service catalog implemented with state management (e.g., Redux or Context API) for responsive browsing of cleaning packages",
      "Responsive design using CSS frameworks (e.g., Tailwind CSS or Bootstrap) to ensure optimal viewing across all devices and screen sizes",
      "Secure client login and dashboard with JWT-based authentication and protected routes for personalized user experiences",
      "Interactive service tracking and feedback forms using AJAX/Fetch API for real-time updates without page reloads",
      "Integrated payment and invoicing UI with third-party payment gateway SDKs for smooth and secure transactions",
      "Automated notifications and reminders via modals, toasts, and email/SMS triggers to enhance user engagement and retention",
    ],
    overview: `Glamoury Touch is a professional cleaning service provider offering a range of residential and commercial cleaning solutions. The website serves as a digital platform for customers to explore services, book appointments, and manage their interactions seamlessly. The frontend is designed for optimal user experience, ensuring accessibility, responsiveness, and interactive engagement throughout the booking and service management process.`,
    role: "Frontend Developer",
    demoUrl: "https://www.glamourytouch.com",
    repoUrl: "#",
  },
  // A-star Tours
  {
    id: "samedaytajtour",
    title: "A-star Tours",
    description:
      "A-star Tours is a travel booking platform specializing in curated, single-day excursions from Delhi to Agra, with a focus on the Taj Mahal and Agra Fort. The website provides users with detailed tour information, seamless booking options, and an engaging presentation of travel packages. The frontend is designed to deliver a responsive, visually appealing, and intuitive user experience, catering to both domestic and international travelers seeking efficient and memorable day trips.",
    thumbnailUrl: "/projects/taj/travel.webp",
    images: [
      "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.next,
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
      technologies.shadcnui,
      technologies.framermotion,
    ],
    features: [
      "Responsive and mobile-first UI built with modern CSS frameworks (e.g., Tailwind CSS, Bootstrap) to ensure optimal experience across devices",
      "Interactive tour package listing with dynamic filtering and sorting, implemented using React state management or vanilla JavaScript",
      "Integrated booking form with real-time validation and user feedback, leveraging controlled components and form libraries",
      "Engaging image galleries and sliders for destinations, utilizing libraries like Swiper.js or lightGallery.js for smooth visual presentation",
      "Client testimonial and review section with dynamic rendering from backend APIs to build trust and social proof",
      "Comprehensive service information pages with modular components for easy content updates and scalability",
      "Call-to-action buttons and sticky navigation for improved user flow and higher conversion rates",
      "Accessibility best practices, including semantic HTML, ARIA labels, and keyboard navigation support for inclusive design",
    ],
    overview: `The Xpert Painting is a professional painting service provider, specializing in residential and commercial painting projects. The company emphasizes a customer-centric approach, delivering quality workmanship and ensuring client satisfaction throughout the painting process. Their services are available in locations such as Agra, and they are recognized for their reliability, efficiency, and attention to detail.`,
    role: "Frontend Developer",
    demoUrl: "https://www.samedaytajtour.com",
    repoUrl: "#",
  },
];
