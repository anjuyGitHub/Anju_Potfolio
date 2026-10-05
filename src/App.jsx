import React, { useState } from "react";

const skills = {
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

const experience = [
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

const projects = [
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

function App() {
  const [menu, setMenu] = useState(false);

  const close = () => setMenu(false);

  const navigation = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="site-navbar">
        <div className="navbar-inner">
          <a className="logo" href="#home" onClick={close}>
            <b>A</b>

            <span>
              Anju<span className="accent">.</span>
            </span>
          </a>

          {/* Mobile Menu Button */}

          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? "✕" : "☰"}
          </button>

          {/* Navigation */}

          <nav className={menu ? "site-nav open" : "site-nav"}>
            {navigation.map((item) => (
              <a key={item} href={`#${item}`} onClick={close}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main>
        {/* ================= HERO ================= */}

        <section id="home" className="hero section">
          <div className="container-fluid portfolio-container px-0">
            <div className="row align-items-center g-5">
              {/* LEFT */}

              <div className="col-12 col-lg-7">
                <p className="eyebrow">HELLO, I'M ANJU KUMARI</p>

                <h1>
                  Frontend
                  <br />
                  Developer
                  <br />
                  <span className="gradient">
                    building
                    <br />
                    useful digital
                    <br />
                    experiences.
                  </span>
                </h1>

                <p className="hero-text">
                  I build responsive web applications with React.js and Node.js,
                  focusing on clean UI, reliable APIs and production-ready
                  solutions.
                </p>

                <div className="actions">
                  <a className="btn primary" href="#projects">
                    View My Work ↗
                  </a>

                  <a className="btn" href="#contact">
                    Let's Connect
                  </a>
                </div>

                <div className="tags">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>JavaScript</span>
                  <span>REST APIs</span>
                </div>
              </div>

              {/* RIGHT */}

              <div className="col-12 col-lg-5">
                <div className="code-card">
                  <div className="bar">● ● ● &nbsp; anju.js</div>

                  <pre>
                    {`const developer = {
  name: "Anju Kumari",
  role: "Frontend Developer",
  stack: ["React", "Node.js"],
  mindset: "Build • Learn • Improve"
};`}
                  </pre>

                  <small>● available for opportunities</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section">
          <div className="container-fluid portfolio-container px-0">
            <Head
              n="01"
              label="ABOUT ME"
              title={
                <>
                  Turning ideas into{" "}
                  <span className="accent">working products.</span>
                </>
              }
            />

            <div className="row g-5 align-items-center">
              <div className="col-12 col-lg-7">
                <p className="large">
                  I’m a Frontend Developer with hands-on experience building
                  scalable web applications using React.js and Node.js.
                </p>

                <p>
                  My experience includes enterprise integrations, REST/XML APIs,
                  reusable React components, authentication, database-backed
                  applications and performance optimization.
                </p>
              </div>

              <div className="col-12 col-lg-5">
                <div className="stats">
                  <div>
                    <b>6+</b>
                    <span>Months hands-on experience</span>
                  </div>

                  <div>
                    <b>1,000+</b>
                    <span>Internal users served</span>
                  </div>

                  <div>
                    <b>10+</b>
                    <span>Responsive pages built</span>
                  </div>

                  <div>
                    <b>99%</b>
                    <span>Application uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section section-dark">
          <div className="container-fluid portfolio-container px-0">
            <Head
              n="02"
              label="TECHNICAL SKILLS"
              title={
                <>
                  My <span className="accent">toolbox.</span>
                </>
              }
            />

            <div className="row g-3">
              {Object.entries(skills).map(([name, list]) => (
                <div className="col-12 col-sm-6 col-lg-3" key={name}>
                  <article className="card h-100">
                    <i>{name[0]}</i>

                    <h3>{name}</h3>

                    <div className="tags">
                      {list.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section">
          <div className="container-fluid portfolio-container px-0">
            <Head
              n="03"
              label="EXPERIENCE"
              title={
                <>
                  Where I've <span className="accent">worked.</span>
                </>
              }
            />

            <div className="timeline">
              {experience.map((job) => (
                <article className="job" key={job.company}>
                  <div className="dot"></div>

                  <div className="job-period">
                    <time>{job.period}</time>
                  </div>

                  <div>
                    <h3>{job.role}</h3>

                    <h4>{job.company}</h4>

                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section section-dark">
          <div className="container-fluid portfolio-container px-0">
            <Head
              n="04"
              label="KEY PROJECTS"
              title={
                <>
                  Things I've <span className="accent">built.</span>
                </>
              }
            />

            <div className="row g-3">
              {projects.map((project) => (
                <div className="col-12 col-lg-6" key={project.title}>
                  <article
                    className={
                      project.featured
                        ? "project featured h-100"
                        : "project h-100"
                    }
                  >
                    <div className="project-top">
                      <span>{project.n}</span>

                      <span>↗</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.desc}</p>

                    <div className="tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section id="education" className="section">
          <div className="container-fluid portfolio-container px-0">
            <Head
              n="05"
              label="EDUCATION"
              title={
                <>
                  My <span className="accent">academic journey.</span>
                </>
              }
            />

            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <article className="card h-100">
                  <small>2022 — 2024</small>

                  <h3>MCA</h3>

                  <p>RGPV University</p>

                  <span>
                    Advanced Algorithms · Web Technologies · DBMS · Software
                    Engineering
                  </span>
                </article>
              </div>

              <div className="col-12 col-lg-6">
                <article className="card h-100">
                  <small>2019 — 2022</small>

                  <h3>B.Sc. Computer Science</h3>

                  <p>DAVV University</p>

                  <span>
                    Programming · Data Structures · Computer Networks · OOP
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">06 — CONTACT</p>

            <h2>
              Let's build something <span className="gradient">great.</span>
            </h2>

            <p>
              I'm open to frontend and full-stack opportunities where I can
              contribute, learn and grow.
            </p>

            <a className="btn primary" href="mailto:your-email@example.com">
              Get In Touch ↗
            </a>

            <div className="links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:your-email@example.com">Email</a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <span>© {new Date().getFullYear()} Anju Kumari</span>

        <span>Designed & built with React.js</span>
      </footer>
    </div>
  );
}

/* =========================
   SECTION HEADING
========================= */

function Head({ n, label, title }) {
  return (
    <div className="heading">
      <span>{n}</span>

      <div>
        <p className="eyebrow">{label}</p>

        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default App;
