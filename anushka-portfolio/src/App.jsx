
import {
  useState,
} from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  ExternalLink,
  Layers3,
  Mail,
  Monitor,
  PencilRuler,
  Terminal,
} from "lucide-react";

import "./App.css";



const projects = [
  {
    number: "01",
    name: "Claims Management Platform",
    type: "FULL STACK / MERN",
    description:
      "A full-stack health insurance claims application with patient and insurer dashboards, secure document uploads, JWT authentication, and claim approval workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://claims-app-demo.vercel.app/",
    github: "https://github.com/Anushka1205",
  },
  {
    number: "02",
    name: "EduTrack — Delivery Analytics",
    type: "DATA SCIENCE / MACHINE LEARNING",
    description:
      "A Python analytics application that explores delivery patterns, engineers operational features, and predicts SLA compliance using Logistic Regression.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    live: "https://sw2627-python-deliverypatternanalytics.onrender.com/",
    github: "https://github.com/Anushka1205",
  },
];


const services = [
  {
    icon: Monitor,
    name: "FULL STACK",
    description: "Building responsive interfaces and useful web applications.",
  },
  {
    icon: Braces,
    name: "AI APPLICATIONS",
    description: "Connecting AI models and APIs to real-world experiences.",
  },
  {
    icon: Layers3,
    name: "BACKEND SYSTEMS",
    description: "Designing APIs, database models and application logic.",
  },
  {
    icon: PencilRuler,
    name: "UI ENGINEERING",
    description: "Turning creative ideas into thoughtful digital interfaces.",
  },
];


const skills = [
  "React.js",
  "JavaScript",
  "HTML / CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "LangChain",
  "RAG",
  "Prompt Engineering",
  "Git / GitHub",
  "Docker",
  "Salesforce",
  "Apex",
  "Lightning Web Components",
];


function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function App() {
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState(
    "Welcome to Anushka's developer lab.\nType help to explore."
  );

  function runCommand(event) {
    event.preventDefault();

    const input = command.trim().toLowerCase();
    const responses = {
      help: "Available commands: about, skills, projects, contact, clear",
      about: "Curious developer. Creative thinker. Builder of digital things.",
      skills: skills.join(" / "),
      projects: projects.map((project) => project.name).join(" / "),
      contact: "Find me on GitHub or LinkedIn below.",
      clear: "",
    };

    setTerminalOutput(
      `> ${command}\n${responses[input] ?? "Command not found. Type help."}`
    );
    setCommand("");
  }

  return (
    <main className="portfolio">
      <div className="topline">
        <a href="#home" className="wordmark">
          AB<span>®</span>
        </a>
        <span className="topline-center">INDEPENDENT DEVELOPER / INDIA</span>
        <a href="#contact" className="topline-link">
          LET'S TALK <ArrowUpRight size={13} />
        </a>
      </div>

      <section className="hero section-grid" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <p className="hero-intro">HELLO, WORLD. I'M</p>
          <h1>
            ANUSHKA
            <br />
            <span className="outline-text">BHATT.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Software developer blending
              <br />
              logic, creativity & a little AI magic.
            </p>
            <a href="#work" className="round-link" aria-label="Explore projects">
              <ArrowDown size={19} />
            </a>
          </div>

          <span className="hero-coordinate">26°N / 75°E — INDIA</span>
        </div>

        <div className="hero-visual">
          <div className="photo-frame hero-photo">
            <img
              src="/images/front portrait.jpeg"
              alt="Portrait of Anushka Bhatt"
            />
          </div>

          <span className="floating-tag tag-one">CREATIVE</span>
          <span className="floating-tag tag-two">DEVELOPER ↗</span>

          <div className="hero-stamp">
            <span className="stamp-icon">✳</span>
            <span>
              HUMAN
              <br />
              CREATIVITY
              <br />
              + MACHINE
              <br />
              INTELLIGENCE
            </span>
          </div>

          <div className="visual-index">FIG. 001 — THE DEVELOPER</div>
        </div>
      </section>

      <section className="intro-strip">
        <span>DESIGN-LED THINKING</span>
        <span className="strip-symbol">✳</span>
        <span>ENGINEERING MINDS</span>
        <span className="strip-symbol">✳</span>
        <span>BUILDING WHAT'S NEXT</span>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading">
          <div>
            <SectionLabel>02 / PROFESSIONAL EXPERIENCE</SectionLabel>
            <h2>
              WORK <span className="outline-small">EXPERIENCE</span>
            </h2>
          </div>
          <span className="side-note">MAY — JUL 2026</span>
        </div>

        <article className="experience-card">
          <div className="experience-top">
            <div>
              <span className="eyebrow">MTX / SALESFORCE</span>
              <h3>Salesforce Developer Intern</h3>
              <p className="experience-duration">
                May 2026 — July 2026 · 3 months
              </p>
            </div>

            <div className="experience-icon">
              <Code2 size={26} strokeWidth={1.3} />
            </div>
          </div>

          <p className="experience-description">
            Contributed to a cloud-based examination platform designed
            to manage exams, questions, student assessments, and automated
            result evaluation.
          </p>

          <ul className="experience-points">
            <li>
              Built Salesforce components using Lightning Web Components
              (LWC) and Apex for exam and question management.
            </li>
            <li>
              Worked on assessment workflows and automated result processing.
            </li>
            <li>
              Tested and integrated components using Jest and Postman.
            </li>
          </ul>

          <div className="experience-bottom">
            <div className="tag-list">
              <span className="tech-tag">Salesforce</span>
              <span className="tech-tag">Apex</span>
              <span className="tech-tag">LWC</span>
              <span className="tech-tag">Jest</span>
              <span className="tech-tag">Postman</span>
            </div>

            <a
              className="text-link"
              href="https://github.com/Anushka1205"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB PROFILE <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      </section>


      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <SectionLabel>02 / SELECTED PROJECTS</SectionLabel>
            <h2>
              MY WORK<span className="heading-mark"> ☺</span>
            </h2>
          </div>
          <p className="section-note">
            A few things I've built,
            <br />
            broken, learned and improved.
          </p>
        </div>

        <div className="work-feature">
          <div className="work-image">
            <div className="image-grid-pattern" />
            <div className="floating-code">
              <span>const future = {"{"}</span>
              <span> &nbsp; creativity: true,</span>
              <span> &nbsp; intelligence: "human + AI"</span>
              <span>{"}"}</span>
              <span className="code-cursor">_</span>
            </div>
            <span className="image-caption">A STUDY IN DIGITAL CREATION</span>
          </div>

          <div className="work-description">
            <span className="eyebrow">SELECTED WORK / 2026</span>
            <h3>Ideas into interfaces.</h3>
            <p>
              I build digital experiences where useful engineering meets
              thoughtful design. Every project is an opportunity to learn
              something new and solve a real problem.
            </p>
            <div className="mini-stats">
              <div>
                <strong>01</strong>
                <span>EXPLORE</span>
              </div>
              <div>
                <strong>02</strong>
                <span>ENGINEER</span>
              </div>
              <div>
                <strong>03</strong>
                <span>ITERATE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>

              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="project-link"
                href={project.live || project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name}`}
              >
                <ArrowUpRight size={20} />
              </a>

            </article>
          ))}
        </div>

        <a
          className="text-link"
          href="https://github.com/Anushka1205"
          target="_blank"
          rel="noreferrer"
        >
          EXPLORE MORE ON GITHUB <ExternalLink size={14} />
        </a>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <SectionLabel>03 / WHAT I DO</SectionLabel>
            <h2>
              SERVICES <span className="outline-small">I OFFER</span>
            </h2>
          </div>
          <span className="side-note">THINK IT. BUILD IT.</span>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-item" key={service.name}>
                <Icon size={29} strokeWidth={1.3} />
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow">↗</span>
              </article>
            );
          })}
        </div>

        <div className="skills-block">
          <span className="eyebrow">MY DIGITAL TOOLKIT</span>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="lab section-pad" id="lab">
        <div className="section-heading">
          <div>
            <SectionLabel>04 / EXPERIMENTAL ZONE</SectionLabel>
            <h2>
              DEVELOPER <span className="outline-small">LAB_</span>
            </h2>
          </div>
          <Cpu size={30} strokeWidth={1.2} />
        </div>

        <div className="lab-panel">
          <div className="terminal-top">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span>anushka@portfolio:~</span>
            <Terminal size={15} />
          </div>

          <div className="terminal-body">
            <div className="terminal-aside">
              <span className="eyebrow">INTERACTIVE TERMINAL</span>
              <p>
                A tiny corner of the internet where you can talk to my
                portfolio.
              </p>
              <span className="terminal-version">BUILD 001.26</span>
            </div>

            <div className="terminal-console" aria-live="polite">
              <pre>{terminalOutput}</pre>
              <form onSubmit={runCommand}>
                <label htmlFor="terminal-command">&gt;</label>
                <input
                  id="terminal-command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  placeholder="type help..."
                  autoComplete="off"
                />
                <button type="submit" aria-label="Run terminal command">
                  <ArrowUpRight size={17} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-grid" id="contact">
        <div className="contact-photo photo-frame">
          <img
            src="/images/back portrait.jpeg"
            alt="Anushka Bhatt, software developer"
            loading="lazy"
          />
          <span className="contact-photo-label">END OF PAGE / BEGINNING OF IDEAS</span>
        </div>

        <div className="contact-content">
          <SectionLabel>05 / YOUR TURN</SectionLabel>
          <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
          <h2>
            LET'S BUILD
            <br />
            <span className="outline-text">SOMETHING.</span>
          </h2>
          <p className="contact-copy">
            Have an interesting idea, an opportunity, or just want to talk
            about technology? My inbox is open.
          </p>

          <a className="contact-cta" href="mailto:YOUR_EMAIL@example.com">
            CONNECT WITH ME <ArrowUpRight size={17} />
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Anushka1205"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/anushka-bhatt-03205a299/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} /> LINKEDIN
            </a>
            <a href="mailto:YOUR_EMAIL@example.com">
              <Mail size={16} /> EMAIL
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="wordmark">
          AB<span>®</span>
        </a>
        <span>DESIGNED WITH INTENTION. BUILT WITH CODE.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
