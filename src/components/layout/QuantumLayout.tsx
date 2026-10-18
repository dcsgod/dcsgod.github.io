import { useState, useEffect, useRef } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { ExternalLink, Menu, X } from 'lucide-react'
import { Github, Linkedin } from '../icons/BrandIcons'
import { SiteFooter } from './SiteFooter'

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/research', label: 'Research' },
  { to: '/writing', label: 'Writing' },
  { to: '/about', label: 'About' },
  { to: '/now', label: 'Now' },
]

export function QuantumLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)
  const [prevPath, setPrevPath] = useState(location.pathname)

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setDrawerOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location])

  return (
    <>
      {/* Navigation HUD */}
      <header className={`nav-hud ${scrolled ? 'scrolled' : ''}`} role="banner">
        <Link to="/" className="nav-wordmark" aria-label="Ravi Kumar — Home">
          <span className="rk-badge" aria-hidden="true">RK</span>
          <span>RAVI KUMAR</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="https://github.com/dcsgod"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            aria-label="GitHub profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ravi3kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            Résumé ↗
          </a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <button
          className="nav-drawer-close"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to}>{label}</Link>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--q-accent)' }}
        >
          Résumé <ExternalLink size={14} style={{ display: 'inline' }} />
        </a>
      </div>

      <main id="main-content">
        <Outlet />
      </main>

      <SiteFooter />
    </>
  )
}
