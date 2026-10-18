import { Link } from 'react-router-dom'
import { BookOpen, FileText, Mail } from 'lucide-react'
import { Github, Linkedin } from '../icons/BrandIcons'

const SOCIAL_LINKS = [
  { href: 'https://github.com/dcsgod', label: 'GitHub', icon: <Github size={14} /> },
  { href: 'https://www.linkedin.com/in/ravi3kr/', label: 'LinkedIn', icon: <Linkedin size={14} /> },
  { href: 'https://huggingface.co/iravikr', label: 'Hugging Face', icon: <span style={{ fontSize: '0.8rem' }}>🤗</span> },
  { href: 'https://medium.com/@rk9128557489', label: 'Medium', icon: <BookOpen size={14} /> },
  { href: 'https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en', label: 'Scholar', icon: <FileText size={14} /> },
  { href: 'mailto:rk9128557489@gmail.com', label: 'Email', icon: <Mail size={14} /> },
]

const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {CURRENT_YEAR} Ravi Kumar · Jaipur, India ·{' '}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--q-accent)' }}>
              AI/ML Engineering
            </span>
          </p>
          <nav className="footer-links" aria-label="Social links">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                {icon}
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--q-border)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--q-muted)' }}>
            Built with React + Vite · Deployed on GitHub Pages
          </p>
          <Link
            to="/now"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--q-muted)', textDecoration: 'none' }}
          >
            /now — current focus →
          </Link>
        </div>
      </div>
    </footer>
  )
}
