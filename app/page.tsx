'use client'

import { useEffect, useState } from 'react'

const repositories = [
  { name: 'aws-auto-backup-with-alerts', type: 'AWS / DevOps', description: 'Automated AWS backup workflow with alerting and operational reliability.' },
  { name: 'cloud-resume-challenge', type: 'Cloud Architecture', description: 'Cloud resume challenge project focused on deployment, infrastructure, and automation.' },
  { name: 'TaskFlow', type: 'Web Application', description: 'A task management experience built around clear workflows and productive interfaces.' },
  { name: 'integrated-library-managment-system', type: 'Laravel / PHP', description: 'Library management system for cataloguing, members, and daily operations.' },
  { name: 'The-Universal-Textile-Manufacturing', type: 'Business Platform', description: 'A digital platform concept for textile manufacturing workflows and operations.' },
  { name: 'Nothing', type: 'GitHub Repository', description: 'A repository from Imad Ud Din’s public GitHub profile.' },
]

const skills = ['AWS', 'Docker', 'Terraform', 'Kubernetes', 'Linux', 'GitHub Actions', 'Laravel', 'PHP', 'JavaScript', 'MySQL']

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(true)
  const [role, setRole] = useState(0)
  const [sent, setSent] = useState(false)
  const roles = ['DevOps Engineer', 'Cloud Engineer', 'Full Stack Developer']

  useEffect(() => {
    const timer = setInterval(() => setRole((current) => (current + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className={dark ? 'site' : 'site light'}>
      <a className="skip" href="#about">Skip to content</a>
      <header className="nav"><a className="logo" href="#home"><span>ID</span><small>IMAD UD DIN</small></a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button><nav className={menu ? 'links open' : 'links'}>{['Home','About','Education','Skills','Projects','Experience','Services','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}</nav><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☼' : '☾'}</button></header>
      <section className="hero" id="home"><div className="hero-copy"><span className="pill">SOFTWARE ENGINEERING &amp; CLOUD SOLUTIONS</span><h1>Hi, I&apos;m <b>Imad Ud Din</b></h1><h3>I engineer as a <strong key={role} className="role-swap">{roles[role]}</strong></h3><p>Software Engineer and cloud-focused developer building reliable applications, automated infrastructure, and thoughtful digital experiences. Explore the work and technologies behind my public GitHub profile.</p><div className="buttons"><a href="#projects" className="primary">Explore My Work →</a><a href="https://github.com/ImadUdDin18" className="outline" target="_blank" rel="noreferrer">View GitHub ↗</a><a href="#contact" className="outline">Contact Me</a></div><div className="checks"><span>✓ Cloud &amp; DevOps</span><span>✓ Full Stack Development</span><span>✓ Open Source Projects</span></div></div><div className="hero-art"><div className="profile"><img src="https://github.com/ImadUdDin18.png?size=500" alt="Imad Ud Din GitHub profile"/><span>⌁ &nbsp; ImadUdDin18 · GitHub</span></div><div className="badge performance">⚡ <b>Automation</b><small>Reliable workflows</small></div><div className="badge secure">◈ <b>Cloud Ready</b><small>AWS infrastructure</small></div><div className="code"><div><i/><i/><i/><span>ImadUdDin18.yml</span></div><pre>{`name: imad-ud-din\n\nstack:\n  - AWS\n  - Docker\n  - Terraform\n  - Laravel\n\nstatus: building-impact`}</pre></div></div></section>
      <section className="intro section" id="about"><div><span className="label">ABOUT ME</span><h2>Engineering Software That <b>Delivers Impact.</b></h2></div><div><p>I&apos;m Imad Ud Din, a Software Engineer from Pakistan. My work combines cloud infrastructure, DevOps automation, Laravel, PHP, JavaScript, and database engineering to create dependable products and useful systems.</p><a className="textlink" href="#projects">View My GitHub Work →</a></div></section>
      <section className="section education" id="education"><span className="label">EDUCATION</span><h2>Building a Strong <b>Foundation.</b></h2><article><span className="icon">▣</span><div><h3>Software Engineering</h3><p>Academic and practical foundation in software development, systems, databases, and cloud technology.</p><small>Continuous learner · Pakistan</small></div><em>Foundation</em></article></section>
      <section className="section" id="skills"><span className="label">SKILLS</span><h2>Tools I Use to <b>Build.</b></h2><div className="skill-grid">{skills.map((skill) => <article key={skill}><span className="skill-dot"/><h3>{skill}</h3><p>Applied in real projects and continuous learning.</p></article>)}</div></section>
      <section className="section projects" id="projects"><span className="label">PUBLIC GITHUB PROJECTS</span><h2>Work That Speaks for <b>Itself.</b></h2><div className="project-grid">{repositories.map((repo, i) => <article key={repo.name}><div className="project-image"><span>{String(i + 1).padStart(2, '0')}</span><div className="scan-line"/></div><div className="project-body"><span className="tag">{repo.type}</span><h3>{repo.name}</h3><p>{repo.description}</p><a href={`https://github.com/ImadUdDin18/${repo.name}`} target="_blank" rel="noreferrer">Open Repository ↗</a></div></article>)}</div></section>
      <section className="section experience" id="experience"><span className="label">EXPERIENCE</span><h2>Growing Through <b>Experience.</b></h2><article><span className="icon">⌘</span><div><h3>Software Engineer &amp; Cloud Practitioner</h3><p>Application Engineering · Infrastructure · Automation</p><small>Building with AWS, DevOps tools, Laravel, PHP, JavaScript, and modern engineering practices.</small></div><em>Professional</em></article></section>
      <section className="section" id="services"><span className="label">CORE EXPERTISE BUILT FOR GROWTH</span><h2>How I Can <b>Help.</b></h2><div className="service-grid">{['Cloud & AWS Solutions','DevOps Automation','Laravel & PHP Development','REST API Development','Infrastructure as Code','Full Stack Web Applications'].map((service, i) => <article key={service}><span>0{i + 1}</span><h3>{service}</h3><p>Practical, maintainable solutions designed around real product and workflow goals.</p></article>)}</div></section>
      <section className="cta section" id="contact"><span className="label">LET&apos;S CONNECT</span><h2>Let&apos;s Build Something <b>Exceptional Together.</b></h2><p>Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p><div className="contact-grid"><a href="mailto:imaduddin@example.com"><small>Email</small><b>imaduddin@example.com</b></a><a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer"><small>GitHub</small><b>ImadUdDin18</b></a><div><small>Location</small><b>Pakistan</b></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input required placeholder="Name"/><input required type="email" placeholder="Email"/><input required placeholder="Subject"/><textarea required placeholder="Message" rows={5}/><button className="primary">{sent ? 'Message Sent' : 'Send Message →'}</button></form></section>
      <footer><a className="logo" href="#home"><span>ID</span><small>IMAD UD DIN</small></a><div><h4>Quick Links</h4><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a></div><div><h4>Connect</h4><a href="https://github.com/ImadUdDin18">GitHub</a><a href="mailto:imaduddin@example.com">Email</a></div></footer>
    </main>
  )
}
