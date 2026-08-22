'use client'

import { useEffect, useState } from 'react'

const projects = [
  { title: 'AWS Auto Backup', tag: 'AWS · LAMBDA · S3', text: 'Automated backup workflow with monitoring and alerts.' },
  { title: 'Cloud Resume Challenge', tag: 'AWS · TERRAFORM · CI/CD', text: 'A production-style cloud portfolio built by shipping real infrastructure.' },
  { title: 'Pet Store DevOps', tag: 'DOCKER · NGINX · AWS', text: 'Containerized services with an automated deployment pipeline.' },
  { title: 'TaskFlow', tag: 'FLASK · SQLITE · UI', text: 'A focused full-stack task management experience.' },
]

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [infra, setInfra] = useState(false)
  const [terminal, setTerminal] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setTerminal(true) }
      if (event.key === 'Escape') setTerminal(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className={infra ? 'site infra-mode' : 'site'}>
      <a className="skip" href="#content">Skip to content</a>
      <header className="nav">
        <a className="brand" href="#top"><span className="brand-mark">&gt;_</span> IMAD UD DIN</a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">MENU</button>
        <nav className={menu ? 'nav-links open' : 'nav-links'} aria-label="Primary">
          {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}
        </nav>
        <button className="infra-toggle" onClick={() => setInfra(!infra)}><span className="pulse" /> {infra ? 'INFRA: ON' : 'OPEN TO WORK'}</button>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">CLOUD INFRASTRUCTURE &amp; AUTOMATION</div>
            <h1>Hi, I&apos;m <em>Imad Ud Din</em></h1>
            <p className="role">I engineer as a <strong>DevOps Engineer</strong></p>
            <p className="intro">Trainee DevOps Engineer specializing in AWS, Docker, Terraform, Kubernetes, Linux, and CI/CD. I build reliable infrastructure and practical systems for ambitious products.</p>
            <div className="actions"><a className="primary-button" href="#projects">Explore My Work ↗</a><a className="secondary-button" href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">GitHub ↗</a><a className="secondary-button" href="#contact">Contact Me</a></div>
            <ul className="highlights"><li>Cloud Ready</li><li>Automation First</li><li>Reliable Systems</li></ul>
          </div>
          <div className="hero-visual"><div className="avatar-ring"><img src="https://github.com/ImadUdDin18.png?size=480" alt="Imad Ud Din GitHub profile" /></div><div className="float-card performance"><b>Performance</b><span>Automated workflows</span></div><div className="float-card secure"><b>Cloud Native</b><span>AWS · Docker · IaC</span></div><div className="code-card"><div className="code-top"><i /> <i /> <i /><span>deploy.yml</span></div><pre>{`name: ship-it\non: push\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps: [build, test, deploy]`}</pre></div></div>
        </section>

        <section className="about section" id="about"><div className="section-heading"><div><div className="section-label">GET TO KNOW ME</div><h2>Engineering Systems That <em>Deliver.</em></h2></div><p>Clean infrastructure, repeatable automation, and products that solve real problems.</p></div><div className="about-grid"><div className="about-facts"><div><span>Name</span><b>Imad Ud Din</b></div><div><span>Education</span><b>Software Engineering</b></div><div><span>Profession</span><b>Trainee DevOps Engineer</b></div><div><span>Location</span><b>Pakistan</b></div></div><p className="large-copy">I focus on making software delivery faster, safer, and less dramatic through cloud infrastructure, automation, and continuous learning.</p></div></section>
        <section className="section" id="projects"><div className="section-label">SELECTED WORK</div><h2>Things I&apos;ve <em>Shipped.</em></h2><div className="project-grid">{projects.map((project, index) => <article className="project" key={project.title}><span className="project-number">0{index + 1}</span><div><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">VIEW REPO ↗</a></div></article>)}</div></section>
        <section className="section skills" id="skills"><div className="section-label">TOOLS I USE</div><h2>My <em>Stack.</em></h2><div className="stack-list">{['AWS Cloud', 'Docker & Containers', 'Terraform & IaC', 'Kubernetes', 'GitHub Actions CI/CD', 'Linux & Bash'].map((item, i) => <div className="stack-row" key={item}><span>0{i + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></section>
        <section className="contact section" id="contact"><div className="section-label">LET&apos;S CONNECT</div><h2>Build Something <em>Reliable.</em></h2><a className="primary-button" href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">Start a Conversation ↗</a></section>
      </div>

      <footer className="footer"><span>© 2026 IMAD UD DIN</span><span>BUILT WITH INTENT ///</span><button onClick={() => setTerminal(true)}>CTRL + K TERMINAL</button></footer>
      {terminal && <div className="terminal-backdrop" onClick={() => setTerminal(false)}><div className="terminal" onClick={(e) => e.stopPropagation()}><div className="terminal-bar"><span>imad@cloud:~</span><button onClick={() => setTerminal(false)}>×</button></div><p><b>$</b> whoami</p><p className="green">imad — trainee devops engineer</p><p><b>$</b> cat mission.txt</p><p className="muted">make infrastructure boring, repeatable, and reliable.</p><p><b>$</b> <span className="cursor">▋</span></p></div></div>}
    </main>
  )
}
