'use client'

import { useEffect, useState } from 'react'

const projects = [
  ['aws-auto-backup-with-alerts', 'AWS Auto Backup with Alerts', 'Daily automatic backups to AWS S3 with Lambda and CloudWatch alerts.', 'AWS / Lambda / S3'],
  ['cloud-resume-challenge', 'Cloud Resume Challenge', 'Production-style cloud portfolio built around AWS infrastructure and automation.', 'AWS / Cloud'],
  ['pet-store-devops', 'Pet Store DevOps', 'Dockerized multi-service application with Nginx, CI/CD, and AWS deployment.', 'Docker / CI/CD'],
  ['TaskFlow', 'TaskFlow', 'Full-stack task management application built with Flask and SQLite.', 'Flask / SQLite'],
  ['integrated-library-managment-system', 'Library Management System', 'A practical management system from Imad’s public GitHub work.', 'Application'],
  ['Nothing', 'Nothing', 'A public repository from Imad Ud Din’s GitHub profile.', 'GitHub'],
]

const skillGroups = { Backend: ['Python', 'PHP'], Cloud: ['AWS', 'Docker', 'Terraform', 'Kubernetes'], Tools: ['Linux', 'GitHub Actions', 'Git'], Database: ['SQLite', 'MySQL'] }

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menu, setMenu] = useState(false)
  const [role, setRole] = useState(0)
  const roles = ['DevOps Engineer', 'AWS Cloud Practitioner', 'Automation Builder']
  useEffect(() => { const timer = setInterval(() => setRole((value) => (value + 1) % roles.length), 2800); return () => clearInterval(timer) }, [])
  return <main className={dark ? 'site' : 'site light'}>
    <a className="skip" href="#about">Skip to content</a>
    <header className="nav"><a className="logo" href="#home"><img src="https://github.com/ImadUdDin18.png?size=160" alt="Imad Ud Din"/><span>IMAD UD DIN</span></a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button><nav className={menu ? 'links open' : 'links'} aria-label="Primary">{['Home','About','Education','Skills','Projects','Experience','Services','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}</nav><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☼' : '☾'}</button></header>
    <section className="hero" id="home"><div className="hero-copy"><span className="pill">AWS · DEVOPS · CI/CD · CLOUD AUTOMATION</span><h1>Hi, I&apos;m <b>Imad Ud Din</b></h1><h3>I&apos;m a <strong key={role} className="role-swap">{roles[role]}</strong></h3><p>I design reliable cloud workflows, automate infrastructure, and build production-minded software. My public work is focused on AWS, Docker, Terraform, Kubernetes, Linux, and CI/CD.</p><div className="buttons"><a href="#projects" className="primary">Explore My Work →</a><a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer" className="outline">Visit GitHub ↗</a><a href="/resume.html" download="Imad-Ud-Din-Resume.html" className="resume-button">Download Resume ↓</a><a href="#contact" className="outline">Contact Me</a></div><div className="checks"><span>✓ AWS infrastructure</span><span>✓ DevOps automation</span><span>✓ Open source projects</span></div></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="profile"><img src="https://github.com/ImadUdDin18.png?size=600" alt="Imad Ud Din GitHub profile"/><span>IMADUDDIN18 · GITHUB</span></div><div className="badge performance"><b>AWS / DEVOPS</b><small>Building reliable systems</small></div><div className="badge secure"><b>OPEN TO LEARN</b><small>Cloud-first mindset</small></div><div className="code"><div><i/><i/><i/><span>deployment.yml</span></div><pre>{`name: imad-cloud

pipeline:
  - terraform
  - docker
  - kubernetes

status: shipping`}</pre></div></div></section>
    <section className="intro section" id="about"><div><span className="label">ABOUT ME</span><h2>Engineering Systems That <b>Keep Moving.</b></h2></div><div><p>I&apos;m Imad Ud Din, a DevOps Engineer from Pakistan. I work with cloud infrastructure, automation, containers, and software projects that turn repeatable processes into dependable delivery.</p><a className="textlink" href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">View Imad&apos;s GitHub →</a></div></section>
    <section className="section education" id="education"><span className="label">EDUCATION</span><h2>Learning Through <b>Practice.</b></h2><article><span className="icon">□</span><div><h3>Software Engineering</h3><p>Developing a strong foundation across software development, systems, databases, cloud, and infrastructure.</p><small>Continuous learner · Pakistan</small></div><em>Learning</em></article></section>
    <section className="section" id="skills"><span className="label">SKILLS</span><h2>The Stack Behind <b>My Work.</b></h2><div className="skill-grid">{Object.entries(skillGroups).map(([group, items]) => <article key={group}><span className="skill-dot"/><h3>{group}</h3><p>{items.join(' · ')}</p><div className="skill-bars">{items.map((item) => <span key={item}><i style={{ width: `${70 + item.length * 2}%` }}/>{item}</span>)}</div></article>)}</div></section>
    <section className="section projects" id="projects"><span className="label">SELECTED GITHUB PROJECTS</span><h2>Work That Speaks for <b>Itself.</b></h2><div className="project-grid">{projects.map(([slug, title, description, stack], i) => <article key={slug}><div className="project-image"><span>{String(i + 1).padStart(2, '0')}</span><div className="scan-line"/><div className="project-mark">{i % 2 ? '⌘' : '>'}</div></div><div className="project-body"><span className="tag">{stack}</span><h3>{title}</h3><p>{description}</p><a href={`https://github.com/ImadUdDin18/${slug}`} target="_blank" rel="noreferrer">Open Repository ↗</a></div></article>)}</div></section>
    <section className="section experience" id="experience"><span className="label">EXPERIENCE</span><h2>Growing Through <b>Real Projects.</b></h2><article><span className="icon">⌘</span><div><h3>DevOps Engineer</h3><p>AWS · Docker · CI/CD · Terraform · Kubernetes</p><small>Building practical cloud and automation projects through continuous hands-on work.</small></div><em>Current focus</em></article></section>
    <section className="section" id="services"><span className="label">CORE EXPERTISE BUILT FOR GROWTH</span><h2>What I Like <b>Building.</b></h2><div className="service-grid">{['AWS Cloud Infrastructure','Docker & Containerization','CI/CD Automation','Infrastructure as Code','Kubernetes Foundations','Linux & Reliability'].map((service, i) => <article key={service}><span>0{i + 1}</span><h3>{service}</h3><p>Practical, repeatable foundations for reliable engineering workflows.</p></article>)}</div></section>
    <section className="cta section" id="contact"><span className="label">LET&apos;S CONNECT</span><a className="resume-link" href="/resume.html" download="Imad-Ud-Din-Resume.html">Download my professional resume →</a><h2>Let&apos;s Build Something <b>Reliable Together.</b></h2><p>Have a cloud project, automation challenge, or collaboration idea? Reach out.</p><div className="contact-grid"><a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer"><small>GitHub</small><b>ImadUdDin18</b></a><a href="mailto:iamimaduddin20@gmail.com"><small>Email</small><b>iamimaduddin20@gmail.com</b></a><div><small>Location</small><b>Islamabad, Pakistan</b></div></div><form onSubmit={(event) => event.preventDefault()}><input required placeholder="Name"/><input required type="email" placeholder="Email"/><input required placeholder="Subject"/><textarea required placeholder="Message" rows={5}/><button className="primary">Send Message →</button></form></section>
    <footer><a className="logo" href="#home"><span>ID</span><small>IMAD UD DIN</small></a><div><h4>Quick Links</h4><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a></div><div><h4>Connect</h4><a href="https://github.com/ImadUdDin18">GitHub</a><a href="mailto:imaduddin@example.com">Email</a></div></footer>
  </main>
}
