import { ExternalLink, Mail } from 'lucide-react'
import { Github, Linkedin } from '../components/icons/BrandIcons'

const CONTACT_LINKS = [
  {
    href: 'mailto:rk9128557489@gmail.com',
    label: 'Email',
    handle: 'rk9128557489@gmail.com',
    desc: 'Best for project inquiries and collaborations',
    icon: <Mail size={20} />,
    color: '#6366f1',
  },
  {
    href: 'https://www.linkedin.com/in/ravi3kr/',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/ravi3kr',
    desc: 'Professional background and announcements',
    icon: <Linkedin size={20} />,
    color: '#0ea5e9',
  },
  {
    href: 'https://github.com/dcsgod',
    label: 'GitHub',
    handle: 'github.com/dcsgod',
    desc: 'Open-source projects and code',
    icon: <Github size={20} />,
    color: '#8b5cf6',
  },
  {
    href: 'https://huggingface.co/iravikr',
    label: 'Hugging Face',
    handle: 'huggingface.co/iravikr',
    desc: 'Models and ML experiments',
    icon: <span style={{ fontSize: '1.2rem' }}>🤗</span>,
    color: '#f59e0b',
  },
  {
    href: 'https://medium.com/@rk9128557489',
    label: 'Medium',
    handle: 'medium.com/@rk9128557489',
    desc: 'Technical articles and writing',
    icon: <ExternalLink size={20} />,
    color: '#10b981',
  },
  {
    href: 'https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en',
    label: 'Google Scholar',
    handle: 'Google Scholar',
    desc: 'Research publications and citations',
    icon: <ExternalLink size={20} />,
    color: '#6366f1',
  },
]

const COLLAB_TOPICS = [
  'Applied ML systems and production AI engineering',
  'LLM systems, agent memory, and reasoning architectures',
  'Graph intelligence and knowledge graph applications',
  'Forecasting, causal ML, and decision science',
  'Model efficiency and inference optimization',
  'Open-source Python ML tooling',
]

export function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Contact</p>
          <h1 className="page-title">Let's Build<br />Something.</h1>
          <p className="page-desc">
            Open to collaboration on applied ML, LLM systems, graph intelligence,
            forecasting, model efficiency, and open-source projects.
          </p>
        </div>
      </div>

      <div className="page-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--sp-8)', marginBottom: 'var(--sp-16)' }}>
          {/* Contact links */}
          <div>
            <h2 className="cs-section-title reveal">
              <span className="cs-section-num">REACH</span>
              Get in Touch
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
              {CONTACT_LINKS.map(({ href, label, handle, desc, icon, color }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact-link-card reveal"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <span className="contact-link-icon" style={{ background: `rgba(${color === '#6366f1' ? '99,102,241' : color === '#0ea5e9' ? '14,165,233' : color === '#8b5cf6' ? '139,92,246' : color === '#f59e0b' ? '245,158,11' : '16,185,129'},0.12)`, color }}>
                    {icon}
                  </span>
                  <span>
                    <span style={{ display: 'block', fontWeight: 600, color: 'var(--q-text)', marginBottom: '0.2rem' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--q-muted)', display: 'block', marginBottom: '0.2rem' }}>{handle}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--q-muted)', opacity: 0.7 }}>{desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Collaboration topics */}
          <div>
            <h2 className="cs-section-title reveal">
              <span className="cs-section-num">TOPICS</span>
              Collaboration Areas
            </h2>
            <div style={{ marginBottom: 'var(--sp-8)' }}>
              {COLLAB_TOPICS.map((topic, i) => (
                <div key={i} className="reveal" style={{
                  animationDelay: `${i * 0.06}s`,
                  padding: 'var(--sp-3) var(--sp-4)',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--sp-3)',
                }}>
                  <span style={{ color: 'var(--q-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>→</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--q-muted)' }}>{topic}</span>
                </div>
              ))}
            </div>

            {/* Note about contact form */}
            <div style={{
              background: 'rgba(99,102,241,0.04)',
              border: '1px solid var(--q-border)',
              borderRadius: 8,
              padding: 'var(--sp-4)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--q-muted)', lineHeight: 1.7 }}>
                No contact form — email is sufficient and more reliable. For open-source
                contributions, open an issue or PR on GitHub. For professional inquiries,
                LinkedIn or email works best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
