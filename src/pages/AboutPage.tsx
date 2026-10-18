import { Link } from 'react-router-dom'
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILLS_BY_DOMAIN } from '../content/experience'

export function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">About</p>
          <h1 className="page-hero-title">Ravi Kumar</h1>
          <p className="page-hero-desc">
            Data Scientist and ML Engineer. M.Tech in AI and Data Science Engineering
            from IIT Patna. Currently at Celebal Technologies, Jaipur.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section" aria-labelledby="intro-heading">
        <div className="container">
          <p className="section-label" id="intro-heading">Background</p>
          <div className="about-intro">
            <p>
              I am a data scientist and ML engineer with a background spanning
              applied machine learning, language model systems, graph intelligence,
              and statistical forecasting. I hold an M.Tech in AI and Data Science
              Engineering from IIT Patna and a B.Tech in Computer Science from
              Rajasthan Technical University.
            </p>
            <p>
              My professional work is focused on building production ML systems —
              semantic layers, agentic pipelines, causal ML models, and knowledge
              graph infrastructure — primarily on Databricks. I am also an active
              open-source contributor with published Python packages and ongoing
              research explorations.
            </p>
            <p>
              I previously completed two research internships at ISRO: one at URSC
              Bengaluru on LLM fine-tuning for domain-specific Q&amp;A, and one at
              NRSC Hyderabad on deep learning for satellite image segmentation.
            </p>
            <p>
              Outside of work, I think about mechanistic interpretability, efficient
              transformers, causal inference for observational data, and structured
              reasoning systems. I write occasionally at Medium and publish
              experiments on GitHub and Hugging Face.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" aria-labelledby="skills-heading">
        <div className="container">
          <p className="section-label" id="skills-heading">Technical Skills</p>
          <div className="skills-grid">
            {SKILLS_BY_DOMAIN.map(({ domain, skills }) => (
              <div key={domain}>
                <p className="skill-group-label">{domain}</p>
                <p className="skill-list-text">{skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" aria-labelledby="exp-heading">
        <div className="container">
          <p className="section-label" id="exp-heading">Experience</p>
          <ul className="exp-list" role="list">
            {EXPERIENCE.map((item, i) => (
              <li key={i} className="exp-item">
                <div className="exp-layout">
                  <div>
                    <p className="exp-period">{item.period}</p>
                    <p className="exp-org">{item.org}</p>
                  </div>
                  <div>
                    <p className="exp-role">{item.role}</p>
                    <p className="exp-desc">{item.description}</p>
                    {item.skills && (
                      <div className="exp-skills">
                        {item.skills.map(s => (
                          <span key={s} className="tag">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="section" aria-labelledby="edu-heading">
        <div className="container">
          <p className="section-label" id="edu-heading">Education</p>
          <ul className="exp-list" role="list">
            {EDUCATION.map((item, i) => (
              <li key={i} className="exp-item">
                <div className="exp-layout">
                  <div>
                    <p className="exp-period">{item.period}</p>
                    <p className="exp-org">{item.org}</p>
                  </div>
                  <div>
                    <p className="exp-role">{item.role}</p>
                    <p className="exp-desc">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" aria-labelledby="cert-heading">
        <div className="container">
          <p className="section-label" id="cert-heading">Certifications</p>
          <ul className="cert-list" role="list">
            {CERTIFICATIONS.map((c, i) => (
              <li key={i} className="cert-item">
                <span className="cert-name">{c.name}</span>
                <span className="cert-issuer">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connect */}
      <section className="section" aria-labelledby="connect-heading">
        <div className="container">
          <p className="section-label" id="connect-heading">Connect</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:rk9128557489@gmail.com" className="contact-value link">
                rk9128557489@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Hugging Face</span>
              <a href="https://huggingface.co/iravikr" target="_blank" rel="noopener noreferrer" className="contact-value link">
                huggingface.co/iravikr
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Scholar</span>
              <a href="https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="contact-value link">
                Google Scholar
              </a>
            </div>
          </div>
          <p style={{ marginTop: 'var(--space-8)', fontSize: 'var(--text-sm)' }}>
            <Link to="/now" className="link">See what I am working on now →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
