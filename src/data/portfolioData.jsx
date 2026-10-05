export const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Redux",
    "Context API",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "XML APIs",
    "JWT",
    "Middleware",
    "MVC",
    "Axios",
  ],

  Database: [
    "MongoDB",
    "Mongoose ODM",
    "Schema Design",
    "Aggregation Pipelines",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Zoho Catalyst",
    "npm",
    "Webpack",
    "ESLint",
    "Chrome DevTools",
  ],
};

export const experience = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Graspcorn Technology",

    points: [
      "Enterprise integrations and full-stack applications using Node.js, React.js and REST/XML APIs.",
      "Sage Intacct to CINC financial integration for invoice and payment synchronization.",
      "Zoho Catalyst cron automation for scheduled daily payment synchronization.",
      "REST + XML API integration, data mapping and validation.",
      "ACH payment handling and approval workflow automation.",
    ],
  },

  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Ultratech Cement Ltd.",

    points: [
      "Enterprise React interfaces serving 1,000+ internal users.",
      "Reusable React components using Hooks and Context API, reducing UI development time by 30%.",
      "99% application uptime through error handling, monitoring and debugging.",
      "REST API integration with Node.js/Express.js backends.",
      "Code-splitting, lazy loading and memoization for performance.",
    ],
  },

  {
    period: "2022 — 2023",
    role: "Frontend Developer Intern",
    company: "Codsoft",

    points: [
      "Built and deployed 10+ responsive web pages and SPAs.",
      "Interactive UI components for 100+ end users.",
      "Third-party API integration with Axios and Fetch API.",
      "Git workflows, pull requests and collaborative development.",
    ],
  },
];

export const projects = [
  {
    n: "01",
    title: "Sage Intacct → CINC Integration",

    desc: "Automated financial integration for invoice and payment synchronization using REST/XML APIs and scheduled Zoho Catalyst automation.",

    tech: ["Node.js", "Axios", "REST", "XML", "Zoho Catalyst"],

    featured: true,
  },

  {
    n: "02",
    title: "Countries Explorer",

    desc: "Single-page country explorer with search, region filtering, React Router, dark/light theme and responsive design.",

    tech: ["React.js", "REST API", "React Router", "CSS"],
  },

  {
    n: "03",
    title: "Expense Tracker",

    desc: "Full-stack finance application with transaction CRUD, monthly charts and JWT-based personalized data.",

    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
  },

  {
    n: "04",
    title: "Task Management Dashboard",

    desc: "Multi-user task system with role-based access, drag-and-drop Kanban and backend validation.",

    tech: ["React.js", "Node.js", "Express", "MongoDB"],
  },
];

export const navigation = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];
