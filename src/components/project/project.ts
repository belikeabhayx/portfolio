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
  year: number;
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
  docker: { name: "Docker", color: "#2496ED" },
  python: { name: "Python", color: "#3776AB" },
  django: { name: "Django", color: "#092E20" },
  vue: { name: "Vue.js", color: "#4FC08D" },
  angular: { name: "Angular", color: "#DD0031" },
  redux: { name: "Redux", color: "#764ABC" },
  svelte: { name: "Svelte", color: "#FF3E00" },
};

export const projects: Project[] = [
  {
    id: "visa-website",
    title: "Province Immigration",
    description:
      "A full-featured e-commerce platform with dynamic product listings, cart functionality, and secure checkout process.",
    thumbnailUrl:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.react,
      technologies.node,
      technologies.mongodb,
      technologies.redux,
      technologies.tailwind,
    ],
    features: [
      "Responsive product catalog with filtering and sorting",
      "User authentication and account management",
      "Shopping cart with persistent storage",
      "Secure checkout process with multiple payment options",
      "Order history and tracking",
      "Admin dashboard for inventory management",
    ],
    overview: `This full-stack e-commerce platform was built to provide a seamless shopping experience.
        The application features a responsive design, intuitive navigation, and fast performance
        even with large product catalogs. The backend is built with Node.js and Express,
        with MongoDB for data storage. User authentication is handled securely with JWT,
        and the entire application follows best practices for web accessibility and SEO.`,
    role: "Full-stack Developer",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/e-commerce",
    year: 2023,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team assignments, and progress tracking.",
    thumbnailUrl:
      "https://images.pexels.com/photos/5717414/pexels-photo-5717414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/5717414/pexels-photo-5717414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    technologies: [
      technologies.next,
      technologies.typescript,
      technologies.firebase,
      technologies.tailwind,
    ],
    features: [
      "Kanban board with drag-and-drop interface",
      "Real-time collaboration with multiple users",
      "Task assignments, due dates, and priority levels",
      "Comments and attachment support",
      "Team management and user permissions",
      "Customizable workflows and views",
    ],
    overview: `This task management application was designed to help teams collaborate more effectively.
        Built with Next.js and TypeScript, it provides a robust foundation for complex state management.
        Firebase was used for real-time database capabilities, enabling instant updates across all connected clients.
        The UI was implemented with Tailwind CSS for a clean, responsive design that works across devices.`,
    role: "Front-end Developer & UI Designer",
    demoUrl: "https://example.com/task-demo",
    repoUrl: "https://github.com/example/task-manager",
    year: 2023,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates blog posts, marketing copy, and social media content based on user inputs.",
    thumbnailUrl:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    year: 2024,
  },
  {
    id: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description:
      "A comprehensive fitness tracking application with workout plans, progress monitoring, and nutritional guidance.",
    thumbnailUrl:
      "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    year: 2022,
  },
];
