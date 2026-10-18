import { Link } from 'react-router-dom'
import { PROJECTS } from '../content/projects'
import { EXPERIENCE, SKILLS_BY_DOMAIN } from '../content/experience'

const FEATURED = PROJECTS.slice(0, 4)

const TICKER_ITEMS = [
  'Data Science', '·', 'LLM Systems', '·', 'Graph Intelligence', '·',
  'Causal Inference', '·', 'Forecasting', '·', 'Machine Learning', '·',
  'Knowledge Graphs', '·', 'MLOps', '·', 'Agent Memory', '·',
  'Data Science', '·', 'LLM Systems', '·', 'Graph Intelligence', '·',
  'Causal Inference', '·', 'Forecasting', '·', 'Machine Learning', '·',
  'Knowledge Graphs', '·', 'MLOps', '·', 'Agent Memory', '·',
]

function ExtIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO — FULL SCREEN
          ════════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero__main">
          <p className="hero__role">Data Scientist · AI/ML Engineer · IIT Patna M.Tech</p>

          <h1 className="hero__name" id="hero-name">
            Ravi<br />Kumar.
          </h1>

          <div className="hero__bottom">
            {/* Left: bio */}
            <p className="hero__desc">
              Building intelligent systems from data, models, and reasoning. I work across
              LLM applications, graph intelligence, causal inference, and production ML — with a focus
              on systems that are reliable and explainable.
            </p>

            {/* Center: portrait */}
            <div className="hero__portrait-cell">
              <img
                src="/images/ravi-nobg.png"
                alt="Ravi Kumar"
                className="hero__portrait"
                width="120"
                height="120"
                loading="eager"
              />
            </div>

            {/* Right: actions */}
            <div className="hero__actions">
              <Link to="/work" className="hero__cta">View Work →</Link>
              <a
                href="mailto:rk9128557489@gmail.com"
                className="hero__cta hero__cta--ghost"
              >
                Get in Touch
              </a>
              <div className="hero__social">
                <a
                  href="https://github.com/dcsgod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label="GitHub"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/ravi3kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label="LinkedIn"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TICKER
          ════════════════════════════════════════════ */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ABOUT
          ════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="about-heading">
        <div className="section__header">
          <span className="section__num">01</span>
          <span className="section__title" id="about-heading">About</span>
          <Link to="/about" className="section__link">Full bio →</Link>
        </div>

        <div className="about-split">
          <div className="about-split__left">
            <p className="about-split__statement">
              Engineering ML systems that work in the real world.
            </p>
            <div className="about-split__tags">
              {['LLM Systems', 'Graph ML', 'Causal ML', 'Forecasting', 'Agent Memory', 'MLOps', 'Databricks', 'PyTorch'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-split__right">
            <p className="about-split__para">
              I am a data scientist and ML engineer currently at Celebal Technologies, building
              production AI systems — semantic layers, agentic workflows, and knowledge graph
              infrastructure on Databricks.
            </p>
            <p className="about-split__para">
              I hold an M.Tech in AI and Data Science Engineering from IIT Patna and completed
              two research internships at ISRO: one on LLM fine-tuning for domain-specific Q&amp;A,
              and another on computer vision for satellite imagery.
            </p>
            <p className="about-split__para">
              My open-source work spans structured agent memory (Membrane), semantic layers
              for data lakehouses (Nexa), differentiable graph-of-thought reasoning (dgot),
              and compact time-series transformers (TriChronos).
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SELECTED WORK
          ════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="work-heading">
        <div className="section__header">
          <span className="section__num">02</span>
          <span className="section__title" id="work-heading">Selected Work</span>
          <Link to="/work" className="section__link">All projects →</Link>
        </div>

        <div role="list">
          {FEATURED.map((project, idx) => (
            <div key={project.id} className="project-row" role="listitem">
              <span className="project-row__num">0{idx + 1}</span>

              <div>
                <p className="project-row__name">{project.title}</p>
                <p className="project-row__tagline">{project.tagline}</p>
              </div>

              <p className="project-row__desc">
                {project.problem}
              </p>

              <div className="project-row__meta">
                <span className="project-row__status">{project.status}</span>
                <div className="project-row__links">
                  <Link to={`/work/${project.id}`} className="project-link-btn">
                    Details →
                  </Link>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      GitHub <ExtIcon />
                    </a>
                  )}
                </div>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="ptag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="exp-heading">
        <div className="section__header">
          <span className="section__num">03</span>
          <span className="section__title" id="exp-heading">Experience</span>
          <Link to="/about" className="section__link">Full timeline →</Link>
        </div>

        <div role="list">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="exp-row" role="listitem">
              <div>
                <p className="exp-row__period">{item.period}</p>
              </div>
              <div>
                <p className="exp-row__role">{item.role}</p>
                <p className="exp-row__org">{item.org}</p>
                {item.skills && (
                  <div className="exp-row__skills">
                    {item.skills.map(s => <span key={s} className="ptag">{s}</span>)}
                  </div>
                )}
              </div>
              <p className="exp-row__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SKILLS
          ════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="skills-heading">
        <div className="section__header">
          <span className="section__num">04</span>
          <span className="section__title" id="skills-heading">Technical Skills</span>
          <span />
        </div>

        <div className="skills-grid">
          {SKILLS_BY_DOMAIN.map(({ domain, skills }) => (
            <div key={domain} className="skill-col">
              <p className="skill-col__label">{domain}</p>
              <div className="skill-col__items">
                {skills.map(s => (
                  <span key={s} className="skill-item">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTACT CTA
          ════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="section__header">
          <span className="section__num">05</span>
          <span className="section__title" id="contact-heading">Contact</span>
          <span />
        </div>

        <div className="contact-split">
          <div className="contact-split__left">
            <div>
              <h2 className="contact-heading">
                Let's<br />talk.
              </h2>
              <p className="contact-sub">
                I am open to ML engineering roles, research collaborations, and
                open-source contributions in Python ML tooling.
              </p>
            </div>
            <a
              href="mailto:rk9128557489@gmail.com"
              className="contact-email-link"
            >
              rk9128557489@gmail.com →
            </a>
          </div>

          <div className="contact-split__right">
            {[
              { label: 'LinkedIn', value: 'linkedin.com/in/ravi3kr', href: 'https://www.linkedin.com/in/ravi3kr/' },
              { label: 'GitHub', value: 'github.com/dcsgod', href: 'https://github.com/dcsgod' },
              { label: 'Hugging Face', value: 'huggingface.co/iravikr', href: 'https://huggingface.co/iravikr' },
              { label: 'Location', value: 'Jaipur, India', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="contact-method">
                <p className="contact-method__label">{label}</p>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer" className="contact-method__value">{value}</a>
                  : <span className="contact-method__value" style={{ cursor: 'default' }}>{value}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
