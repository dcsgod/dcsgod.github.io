import { NOW_CONTENT } from '../content/now'

export function NowPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Now — {NOW_CONTENT.lastUpdated}</p>
          <h1 className="page-title">What I'm<br />Working On</h1>
          <p className="page-desc">
            A snapshot of current focus. Updated manually — no automated "active" labels
            without a human confirming the status.
          </p>
        </div>
      </div>

      <div className="page-content" style={{ maxWidth: 760 }}>
        <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap', marginBottom: 'var(--sp-8)' }}>
          {[
            { label: 'Location', value: NOW_CONTENT.location },
            { label: 'Current Role', value: NOW_CONTENT.currentRole },
            { label: 'Last Updated', value: NOW_CONTENT.lastUpdated },
          ].map(({ label, value }) => (
            <div key={label} style={{ padding: 'var(--sp-4)', border: '1px solid var(--q-border)', borderRadius: 8, flex: 1, minWidth: 200 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--q-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</p>
              <p style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: 'var(--q-text)' }}>{value}</p>
            </div>
          ))}
        </div>

        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">FOCUS</span>
            Current Focus
          </h2>
          <ul className="cs-list">
            {NOW_CONTENT.focus.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">READ</span>
            Currently Reading / Investigating
          </h2>
          <ul className="cs-list">
            {NOW_CONTENT.reading.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">OPEN</span>
            Open To
          </h2>
          <ul className="cs-list">
            {NOW_CONTENT.openTo.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div style={{ padding: 'var(--sp-4)', background: 'rgba(99,102,241,0.04)', border: '1px solid var(--q-border)', borderRadius: 8 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--q-muted)', lineHeight: 1.6 }}>
            To update this page: edit{' '}
            <code style={{ color: 'var(--q-accent)', background: 'rgba(99,102,241,0.1)', padding: '0.1rem 0.4rem', borderRadius: 3 }}>
              src/content/now.ts
            </code>{' '}
            — no layout changes required. Inspired by nownownow.com.
          </p>
        </div>
      </div>
    </>
  )
}
