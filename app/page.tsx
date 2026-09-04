import Image from 'next/image';
import SideNav from './side-nav';

const skillGroups = [
  { label: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Web & applications', items: ['Django', 'Flask', 'Dash', 'PySide6', 'REST APIs'] },
  { label: 'AI & machine learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LLMs'] },
  { label: 'Data & visualization', items: ['Pandas', 'Polars', 'NumPy', 'Plotly', 'Data Analysis'] },
  { label: 'Databases', items: ['PostgreSQL', 'SQLite', 'SQLAlchemy'] },
  { label: 'Tools & workflow', items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Pytest', 'CI/CD', 'Agile', 'Scrum'] },
];

const projects = [
  {
    index: '01',
    title: 'Spacing-Based Watermark',
    label: 'MASTER’S THESIS · AI / ML',
    status: 'Ongoing',
    description: 'A research implementation for watermarking LLM-generated text by encoding information in the spacing between selected lexical events. The system combines keyed events, LDPC error correction and marker-based synchronization to support detection and payload recovery after natural text edits.',
    stack: ['Python', 'LLMs', 'Hugging Face', 'LDPC'],
    href: 'https://github.com/eliaszpiotr/Spacing-Based-Watermark',
    tone: 'green',
  },
  {
    index: '02',
    title: 'Work Scheduler',
    label: 'DESKTOP APPLICATION',
    status: 'Ongoing',
    description: 'A local-first, cross-platform application for planning and validating pharmacy work schedules. It supports Polish pharmacy coverage rules, public holidays, bilingual interfaces, PDF reporting, automated tests and multi-platform release workflows. The application is currently used in the daily operations of a pharmacy.',
    stack: ['Python', 'PySide6', 'SQLite', 'SQLAlchemy'],
    href: 'https://github.com/eliaszpiotr/Work-Schedule',
    tone: 'blue',
  },
  {
    index: '03',
    title: 'Surfing Project',
    label: 'FULL-STACK WEB APPLICATION',
    status: 'Ongoing',
    description: 'A full-stack platform for discovering surf spots and coordinating surf sessions. The application includes user profiles, session participation, community photos, private and group messaging, notifications and role-based permissions.',
    stack: ['Django', 'PostgreSQL', 'Docker', 'Pytest'],
    href: 'https://github.com/eliaszpiotr/Surfing-Project',
    tone: 'sand',
  },
  {
    index: '04',
    title: 'US Accidents Dashboard',
    label: 'DATA VISUALIZATION',
    status: 'Completed',
    description: 'An interactive dashboard for exploring US traffic accidents from 2016 to 2023. Linked maps and charts allow users to investigate severity, road features, weather conditions, geographic patterns and changes over time.',
    stack: ['Python', 'Dash', 'Plotly', 'Polars'],
    href: 'https://github.com/eliaszpiotr/US-Accidents-Visualization-Dashboard',
    tone: 'rose',
  },
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="identity" href="#top" aria-label="Eliasz Piotr — home">
            <strong>Eliasz Piotr</strong>
            <small>Portfolio</small>
          </a>
          <SideNav />
          <div className="top-links">
            <a href="/Eliasz_Piotr_CV.pdf" target="_blank" rel="noreferrer">CV ↗</a>
            <a href="https://github.com/eliaszpiotr" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/eliasz-piotr-b21330256/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </header>

      <div className="content">

        <section className="hero" id="about">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Hi, I’m Eliasz.</h1>
              <p className="intro">I’m a Computer Science graduate from Aarhus University, based in Denmark. I work primarily with Python and I’m interested in software development, data engineering and AI/ML.</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">Explore my work <span>↓</span></a>
                <a className="button secondary" href="/Eliasz_Piotr_CV.pdf" download>Download CV <span>↓</span></a>
                <a className="button secondary" href="mailto:eliasz.piotr@icloud.com">Get in touch</a>
              </div>
            </div>
            <figure className="portrait">
              <Image src="/eliasz-portrait.jpg" alt="Eliasz Piotr" width={1200} height={1600} sizes="(max-width: 760px) 82vw, 260px" priority />
              <figcaption><span>Based in</span>Aarhus, Denmark</figcaption>
            </figure>
          </div>
          <div className="quick-facts" aria-label="Quick facts">
            <div><span>Location</span><strong>Aarhus, Denmark</strong></div>
            <div><span>Education</span><strong>MSc Computer Science</strong></div>
            <div><span>Focus</span><strong>Software · Data · AI</strong></div>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading number="02" title="Technical skills" description="A practical toolkit developed through research, coursework and real applications." />
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.label}>
                <p>{group.label}</p>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading number="03" title="Selected projects" description="Research, data products and applications built around real problems." />
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className={`project-mark ${project.tone}`}><span>{project.index}</span><b>↗</b></div>
                <div className="project-copy">
                  <div className="project-meta"><p>{project.label}</p><span className={project.status === 'Ongoing' ? 'ongoing' : ''}>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <div className="project-description">{project.description}</div>
                  <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <span className="project-link">View repository <b>↗</b></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading number="04" title="Education" description="The ideas, methods and practical skills I carried forward from each programme." />
          <div className="timeline">
            <TimelineItem date="Aug 2024 — Jun 2026" title="Aarhus University" subtitle="Master’s degree, Computer Science" points={['Focused on cryptography, machine learning and artificial intelligence.', 'Explored trustworthy AI and methods for identifying machine-generated content.', 'Designed and evaluated a spacing-based watermark for LLM-generated text as my master’s thesis.', 'Worked with experimental design, model evaluation, robustness testing and research-driven software development.']} />
            <TimelineItem date="Oct 2020 — Jul 2024" title="Poznań University of Economics and Business" subtitle="Bachelor’s degree, Computer Science and Econometrics" points={['Built a foundation in software development, algorithms and relational databases.', 'Applied statistics, econometrics and data analysis to quantitative problems.', 'Combined technical work with an understanding of business and economic contexts.']} />
            <TimelineItem date="2022" title="Coders Lab" subtitle="Python Developer programme" points={['Completed an intensive, project-based Python development programme.', 'Built web applications with Django and Flask using SQL and PostgreSQL.', 'Practised object-oriented programming, testing, Git-based collaboration and web fundamentals.', 'Learned how Agile and Scrum teams plan, deliver and review work.']} />
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading number="05" title="Experience" description="Roles that strengthened my ownership, communication and ability to work under pressure." />
          <div className="experience-grid">
            <article className="experience-card">
              <div className="experience-top"><span>May 2022 — Sep 2025</span><b>Ustronie Morskie, Poland</b></div>
              <h3>Pharmacy Office Worker</h3><p>Apteka Eliasz sp. z o.o.</p>
              <ul>
                <li>Coordinated deliveries and maintained accurate operational documentation across a pharmacy chain.</li>
                <li>Monitored inventory levels and product availability to support uninterrupted daily operations.</li>
                <li>Supervised seasonal staff and helped organize workflows during peak periods.</li>
                <li>Handled customer and supplier matters while ensuring procedures were followed.</li>
              </ul>
            </article>
            <article className="experience-card">
              <div className="experience-top"><span>Jun 2018 — Aug 2021</span><b>Ustronie Morskie, Poland</b></div>
              <h3>Lifeguard</h3><p>Ustronie Morskie Commune</p>
              <ul>
                <li>Monitored beach and water conditions and enforced safety procedures.</li>
                <li>Responded to emergencies and conducted rescue operations, including as a jet-ski operator.</li>
                <li>Provided first aid and immediate medical assistance when required.</li>
                <li>Worked in a coordinated rescue team and made clear decisions under pressure.</li>
              </ul>
            </article>
          </div>
        </section>

        <div className="closing">
          <section className="contact-section" id="contact">
            <p className="eyebrow">Contact</p>
            <h2>Get in touch.</h2>
            <p>I’m currently exploring early-career opportunities in software development, data engineering and AI/ML. If my background and projects are relevant to your team, I’d be happy to hear from you.</p>
            <div className="contact-actions">
              <a className="button light" href="mailto:eliasz.piotr@icloud.com">eliasz.piotr@icloud.com <span>↗</span></a>
              <a className="text-link" href="https://www.linkedin.com/in/eliasz-piotr-b21330256/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            </div>
          </section>
          <footer><span>© 2026 Eliasz Piotr</span></footer>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="section-heading"><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div></div>;
}

function TimelineItem({ date, title, subtitle, points }: { date: string; title: string; subtitle: string; points: string[] }) {
  return <article className="timeline-item"><span className="timeline-date">{date}</span><div><h3>{title}</h3><p className="timeline-subtitle">{subtitle}</p><ul className="timeline-points">{points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>;
}
