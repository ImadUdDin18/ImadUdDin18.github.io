'use client'

import { useEffect, useState } from 'react'

const projects = [
  { title: 'AWS Auto Backup with Alerts', tag: 'AWS · Lambda · S3', text: 'Daily automated backups with CloudWatch monitoring and alerting.' },
  { title: 'Cloud Resume Challenge', tag: 'AWS · Terraform · CI/CD', text: 'A production-style cloud portfolio built to learn by shipping.' },
  { title: 'Pet Store DevOps', tag: 'Docker · Nginx · AWS', text: 'A containerized multi-service application with an automated deployment pipeline.' },
  { title: 'TaskFlow', tag: 'Flask · SQLite · UI', text: 'A focused full-stack task management experience.' },
]

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [infra, setInfra] = useState(false)
  const [terminal, setTerminal] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setTerminal(true)
      }
      if (event.key === 'Escape') setTerminal(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className={infra ? 'site infra-mode' : 'site'}>
      <nav className="nav">
        <a className="brand" href="#top"><span className="brand-mark">&gt;_</span> IMAD UD DIN</a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">MENU</button>
        <div className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={() => setMenu(false)}>WORK</a>
          <a href="#stack" onClick={() => setMenu(false)}>STACK</a>
          <a href="#about" onClick={() => setMenu(false)}>ABOUT</a>
          <a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
        <button className="infra-toggle" onClick={() => setInfra(!infra)}><span className="pulse" /> {infra ? 'INFRA: ON' : 'INFRA MODE'}</button>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">TRAINEE DEVOPS ENGINEER <span>///</span> PAKISTAN</div>
        <h1>BUILDING<br /><em>RELIABLE</em><br />SYSTEMS.</h1>
        <div className="hero-bottom"><p>I turn infrastructure into an advantage.<br />AWS, containers, automation, and a bias<br />for shipping things that work.</p><a className="arrow-link" href="#work">EXPLORE MY WORK <span>↓</span></a></div>
        <div className="hero-code" aria-hidden="true">{`{\n  "status": "shipping",\n  "focus": ["cloud", "automation"],\n  "location": "PK"\n}`}</div>
      </section>

      <section className="ticker" aria-label="Skills"><span>AWS</span><span>DOCKER</span><span>TERRAFORM</span><span>KUBERNETES</span><span>CI/CD</span><span>LINUX</span></section>

      <section className="section work" id="work"><div className="section-label">01 / SELECTED WORK</div><div className="section-heading"><h2>THINGS I&apos;VE<br /><em>SHIPPED.</em></h2><p>Small projects, real infrastructure, and plenty of lessons learned the hard way.</p></div><div className="project-grid">{projects.map((project, index) => <article className="project" key={project.title}><span className="project-number">0{index + 1}</span><div><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><a href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">VIEW REPO ↗</a></div></article>)}</div></section>

      <section className="section stack" id="stack"><div className="section-label">02 / THE TOOLBOX</div><div className="stack-layout"><h2>THE<br /><em>STACK.</em></h2><div className="stack-list">{['Cloud / AWS', 'Containers / Docker', 'IaC / Terraform', 'Orchestration / Kubernetes', 'Pipelines / GitHub Actions', 'OS / Linux'].map((item, i) => <div className="stack-row" key={item}><span>0{i + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></div></section>

      <section className="section about" id="about"><div className="section-label">03 / A LITTLE ABOUT ME</div><div className="about-layout"><h2>CURIOUS BY<br /><em>DEFAULT.</em></h2><div><p className="large-copy">I&apos;m Imad — a trainee DevOps engineer learning how to make software delivery faster, safer, and less dramatic.</p><p>When I&apos;m not breaking a Terraform plan, I&apos;m building with AWS, exploring Kubernetes, or finding a cleaner way to automate the boring stuff.</p><a className="text-link" href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">MORE ON GITHUB ↗</a></div></div></section>

      <footer className="footer"><div><span className="eyebrow">HAVE A SYSTEM TO BUILD?</span><h2>LET&apos;S MAKE<br /><em>IT SOLID.</em></h2></div><a className="contact-button" href="https://github.com/ImadUdDin18" target="_blank" rel="noreferrer">START A CONVERSATION ↗</a><div className="footer-bottom"><span>© 2026 IMAD UD DIN</span><span>BUILT WITH INTENT ///</span><button onClick={() => setTerminal(true)}>CTRL + K TERMINAL</button></div></footer>

      {terminal && <div className="terminal-backdrop" onClick={() => setTerminal(false)}><div className="terminal" onClick={(e) => e.stopPropagation()}><div className="terminal-bar"><span>imad@cloud:~</span><button onClick={() => setTerminal(false)}>×</button></div><p><b>$</b> whoami</p><p className="green">imad — trainee devops engineer</p><p><b>$</b> cat mission.txt</p><p className="muted">make infrastructure boring, repeatable, and reliable.</p><p><b>$</b> <span className="cursor">▋</span></p></div></div>}
    </main>
  )
}
