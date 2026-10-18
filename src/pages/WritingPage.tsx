import { ExternalLink } from 'lucide-react'
import { ARTICLES, WRITING_COMING_SOON, MEDIUM_URL } from '../content/writing'

export function WritingPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Writing</p>
          <h1 className="page-title">Articles &<br />Notes</h1>
          <p className="page-desc">
            Technical writing on ML systems, LLM engineering, graph intelligence,
            and production AI. Published on Medium and external platforms.
          </p>
        </div>
      </div>

      <div className="page-content">
        {WRITING_COMING_SOON || ARTICLES.length === 0 ? (
          <div style={{ maxWidth: 600 }}>
            <div style={{
              background: 'rgba(99,102,241,0.04)',
              border: '1px solid var(--q-border)',
              borderRadius: 12,
              padding: 'var(--sp-8)',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--q-accent)', letterSpacing: '0.2em', marginBottom: 'var(--sp-4)' }}>
                WRITING IN PROGRESS
              </p>
              <p style={{ color: 'var(--q-muted)', lineHeight: 1.7, marginBottom: 'var(--sp-6)' }}>
                Articles and technical notes are being migrated and verified. Until then,
                you can find published writing directly on Medium.
              </p>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <ExternalLink size={14} /> Read on Medium
              </a>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--q-muted)', marginTop: 'var(--sp-6)', lineHeight: 1.6 }}>
              To add articles: edit{' '}
              <code style={{ color: 'var(--q-accent)', background: 'rgba(99,102,241,0.1)', padding: '0.1rem 0.4rem', borderRadius: 3 }}>
                src/content/writing.ts
              </code>{' '}
              — no layout changes required.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
            {ARTICLES.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="philosophy-card reveal"
                style={{ textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--sp-4)' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--q-muted)', marginBottom: 'var(--sp-2)' }}>
                      {article.platform} · {article.date}
                      {article.readingTime && ` · ${article.readingTime} read`}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--q-text)', marginBottom: 'var(--sp-2)' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--q-muted)', lineHeight: 1.6 }}>
                      {article.description}
                    </p>
                  </div>
                  <ExternalLink size={16} style={{ color: 'var(--q-muted)', flexShrink: 0 }} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
