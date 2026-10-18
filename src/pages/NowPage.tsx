import { Link } from 'react-router-dom'
import { NOW_CONTENT } from '../content/now'

export function NowPage() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero__label">Now — Updated {NOW_CONTENT.lastUpdated}</p>
        <h1 className="page-hero__title">What I'm Working On.</h1>
        <p className="page-hero__desc">
          A real-time snapshot of my active priorities, engineering focus, and research explorations.
          Inspired by Derek Sivers' /now page movement.
        </p>
      </div>

      <div className="now-grid">
        {/* Left Sidebar */}
        <aside className="now-sidebar">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p className="now-stat-box__label">Location</p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)' }}>
                {NOW_CONTENT.location}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--gray-6)', paddingTop: 20 }}>
              <p className="now-stat-box__label">Current Role</p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.4 }}>
                {NOW_CONTENT.currentRole}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--gray-6)', paddingTop: 20 }}>
              <p className="now-stat-box__label">Status</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <span className="status-indicator" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--black)' }}>
                  Active & Building
                </span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--gray-6)', paddingTop: 20 }}>
              <p className="now-stat-box__label">Last Confirmed</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-3)', fontFamily: 'var(--mono)' }}>
                {NOW_CONTENT.lastUpdated}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--gray-6)', paddingTop: 24 }}>
              <Link to="/contact" className="hero__cta" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Me →
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <div className="now-body">
          {/* Block 01: Current Focus */}
          <div>
            <h2 className="now-block__heading">
              01 · Current Engineering & Research Focus
            </h2>
            <ul className="now-block__list">
              {NOW_CONTENT.focus.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Block 02: Reading Stack */}
          <div>
            <h2 className="now-block__heading">
              02 · Currently Reading & Investigating
            </h2>
            <ul className="now-block__list">
              {NOW_CONTENT.reading.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Block 03: Open To */}
          <div>
            <h2 className="now-block__heading">
              03 · Open To & Collaborations
            </h2>
            <ul className="now-block__list">
              {NOW_CONTENT.openTo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '24px', background: 'var(--gray-8)', border: '1px solid var(--gray-6)', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--gray-3)', lineHeight: 1.6 }}>
              This page is maintained manually to give collaborators and peers a transparent window into my active queue.
              To suggest a discussion or collaboration, feel free to reach out directly.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
