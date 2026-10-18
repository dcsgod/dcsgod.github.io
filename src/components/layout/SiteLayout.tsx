import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { Github, Linkedin } from '../icons/BrandIcons'

const NAV_LINKS = [
  { to: '/work',     label: 'Work' },
  { to: '/research', label: 'Research' },
  { to: '/writing',  label: 'Writing' },
  { to: '/about',    label: 'About' },
  { to: '/now',      label: 'Now' },
]

const CURRENT_YEAR = new Date().getFullYear()

export function SiteLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── NAV ── */}
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
        <Link to="/" className="nav__logo" aria-label="Ravi Kumar — home">
          Ravi Kumar
        </Link>

        <nav className="nav__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="mailto:rk9128557489@gmail.com"
            className="nav__resume"
            aria-label="Email Ravi Kumar"
          >
            Get in touch
          </a>
          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
            }
          </button>
        </div>

        {/* Mobile drawer */}
        <nav
          className={`nav__mobile${menuOpen ? ' open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <a href="mailto:rk9128557489@gmail.com" className="nav__link" style={{ marginTop: 8 }}>
            Get in touch
          </a>
        </nav>
      </header>

      <main className="page-main" id="main-content">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo">
        <p className="footer__copy">
          © {CURRENT_YEAR} Ravi Kumar · Jaipur, India
        </p>
        <div className="footer__links">
          <a href="https://github.com/dcsgod" target="_blank" rel="noopener noreferrer" className="footer__link">
            <Github size={11} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ravi3kr/" target="_blank" rel="noopener noreferrer" className="footer__link">
            <Linkedin size={11} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
            LinkedIn
          </a>
          <a href="https://huggingface.co/iravikr" target="_blank" rel="noopener noreferrer" className="footer__link">Hugging Face</a>
          <a href="https://medium.com/@rk9128557489" target="_blank" rel="noopener noreferrer" className="footer__link">Medium</a>
          <a href="https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="footer__link">Scholar</a>
          <Link to="/now" className="footer__link">/now</Link>
        </div>
      </footer>
    </>
  )
}
