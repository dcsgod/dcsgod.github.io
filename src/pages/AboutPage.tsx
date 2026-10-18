import { Link } from 'react-router-dom'
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILLS_BY_DOMAIN } from '../content/experience'

function ExtIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero__label">Biography & Background</p>
        <h1 className="page-hero__title">About.</h1>
        <p className="page-hero__desc">
          Data Scientist and ML Engineer. M.Tech in AI & Data Science Engineering from IIT Patna.
          Currently building enterprise semantic layers, agentic systems, and decision platforms at Celebal Technologies.
        </p>
      </div>

      {/* Hero Split: Image + Core Bio */}
      <div className="about-hero-split">
        <div className="about-hero-split__img">
          <div className="hero__portrait-wrapper">
            <div className="hero__portrait-glow" aria-hidden="true" />
            <div className="hero__portrait-frame" style={{ borderRadius: 20 }}>
              <img
                src="/images/ravi-original.png"
                alt="Ravi Kumar"
                className="about-portrait"
                style={{ width: 280, height: 340, borderRadius: 16 }}
              />
            </div>
          </div>
        </div>

        <div className="about-hero-split__text">
          <h2 className="about-statement">
            Engineering ML systems that work in the real world.
          </h2>
          <p className="about-bio-para">
            I am an applied data scientist and ML engineer with a strong systems foundation.
            My professional work is focused on building production AI/ML systems — semantic layers,
            knowledge graphs, causal ML models, and agent memory architectures — primarily on Databricks.
          </p>
          <p className="about-bio-para">
            I hold an M.Tech in AI and Data Science Engineering from IIT Patna and completed two research
            internships at the Indian Space Research Organisation (ISRO): one at URSC Bengaluru on domain-adapted
            LLMs with QLoRA, and another at NRSC Hyderabad on satellite image segmentation with deep learning.
          </p>
          <p className="about-bio-para">
            I am driven by explainability, computational efficiency, and architectural rigor.
            Beyond production engineering, I actively create and maintain open-source Python ML tooling.
          </p>
        </div>
      </div>

      {/* Section: Experience Timeline */}
      <section className="section" aria-labelledby="exp-heading">
        <div className="section__header">
          <span className="section__num">01</span>
          <span className="section__title" id="exp-heading">Work & Research Experience</span>
          <span className="section__num">Current & Past</span>
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

      {/* Section: Education */}
      <section className="section" aria-labelledby="edu-heading">
        <div className="section__header">
          <span className="section__num">02</span>
          <span className="section__title" id="edu-heading">Education</span>
          <span className="section__num">Degrees</span>
        </div>

        <div role="list">
          {EDUCATION.map((item, i) => (
            <div key={i} className="exp-row" role="listitem">
              <div>
                <p className="exp-row__period">{item.period}</p>
              </div>
              <div>
                <p className="exp-row__role">{item.role}</p>
                <p className="exp-row__org">{item.org}</p>
              </div>
              <p className="exp-row__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Technical Skills Grid */}
      <section className="section" aria-labelledby="skills-heading">
        <div className="section__header">
          <span className="section__num">03</span>
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

      {/* Section: Certifications */}
      <section className="section" aria-labelledby="cert-heading">
        <div className="section__header">
          <span className="section__num">04</span>
          <span className="section__title" id="cert-heading">Professional Certifications</span>
          <span className="section__num">Verified</span>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <span className="cert-issuer">{cert.issuer}</span>
              <p className="cert-name">{cert.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Connect CTA */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="section__header">
          <span className="section__num">05</span>
          <span className="section__title" id="contact-heading">Get In Touch</span>
          <span />
        </div>

        <div className="contact-split">
          <div className="contact-split__left">
            <div>
              <h2 className="contact-heading">
                Let's<br />connect.
              </h2>
              <p className="contact-sub">
                I am open to applied ML engineering roles, research collaborations,
                and technical advisory for intelligent systems.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/now" className="section__link">What I'm doing now →</Link>
                <Link to="/work" className="section__link">View projects →</Link>
              </div>
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
              { label: 'Google Scholar', value: 'Ravi Kumar — Citations', href: 'https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en' },
              { label: 'Location', value: 'Jaipur, India', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="contact-method">
                <p className="contact-method__label">{label}</p>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer" className="contact-method__value">{value} <ExtIcon /></a>
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
