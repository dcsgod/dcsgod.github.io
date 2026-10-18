import { MEDIUM_URL } from '../content/writing'

const ARTICLES = [
  {
    date: 'OCT 2025',
    title: 'Architecting Multi-Store Memory for Autonomous AI Agents',
    description: 'Why single vector databases fail at agent memory. How decoupling semantic, temporal, episodic, and structured stores with an intelligent router enables verifiable long-horizon context.',
    platform: 'Medium',
    readTime: '8 min read',
    url: 'https://medium.com/@rk9128557489',
  },
  {
    date: 'AUG 2025',
    title: 'Building an Explainable Semantic Layer on Databricks Lakehouse',
    description: 'How knowledge graph groundings, semantic drift detection, and fail-closed governance bring trust and lineage to enterprise lakehouses.',
    platform: 'Medium',
    readTime: '11 min read',
    url: 'https://medium.com/@rk9128557489',
  },
  {
    date: 'JUN 2025',
    title: 'Differentiable Graph-of-Thought Reasoning with Graph Neural Networks',
    description: 'Moving beyond linear chain-of-thought prompting into inspectable DAGs with GNN message-passing across reasoning steps.',
    platform: 'Research Note',
    readTime: '10 min read',
    url: 'https://github.com/dcsgod',
  },
  {
    date: 'APR 2025',
    title: 'Ternary-Weight Quantization for Production Time-Series Forecasters',
    description: 'Empirical analysis of accuracy vs inference compute trade-offs in quantized attention architectures across high-volume forecasting loads.',
    platform: 'Technical Note',
    readTime: '7 min read',
    url: 'https://github.com/dcsgod',
  },
  {
    date: 'NOV 2024',
    title: 'Domain Adaptation of Open LLMs with QLoRA for Specialized Technical Corpora',
    description: 'Lessons from fine-tuning Falcon-7B on aerospace System Requirements Specification documents at ISRO URSC.',
    platform: 'Case Study',
    readTime: '9 min read',
    url: 'https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en',
  },
]

function ExtIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function WritingPage() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero__label">Publications & Insights</p>
        <h1 className="page-hero__title">Writing.</h1>
        <p className="page-hero__desc">
          Technical deep-dives into production ML systems, agent memory architectures,
          graph intelligence, and data engineering on Databricks.
        </p>
      </div>

      {/* Section 01: Articles List */}
      <section className="section" aria-labelledby="articles-heading">
        <div className="section__header">
          <span className="section__num">01</span>
          <span className="section__title" id="articles-heading">Selected Technical Articles</span>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="section__link"
          >
            Medium Profile <ExtIcon />
          </a>
        </div>

        <div role="list">
          {ARTICLES.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-row"
              role="listitem"
            >
              <div className="writing-row__date">
                <span style={{ display: 'block', fontWeight: 700 }}>{article.date}</span>
                <span style={{ color: 'var(--gray-4)', fontSize: '0.65rem' }}>{article.platform}</span>
              </div>

              <div>
                <p className="writing-row__title" style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                  {article.title}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-2)', lineHeight: 1.6, maxWidth: '64ch' }}>
                  {article.description}
                </p>
                <span style={{ display: 'inline-block', marginTop: 10, fontSize: '0.7rem', color: 'var(--gray-4)', fontFamily: 'var(--mono)' }}>
                  {article.readTime}
                </span>
              </div>

              <span className="writing-row__arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Section 02: Medium & External Channels */}
      <section className="section" aria-labelledby="channels-heading">
        <div className="section__header">
          <span className="section__num">02</span>
          <span className="section__title" id="channels-heading">Publishing Channels</span>
          <span />
        </div>

        <div className="about-split">
          <div className="about-split__left">
            <p className="about-split__statement">
              Writing to synthesize, explain, and share production lessons.
            </p>
            <div className="about-split__tags">
              {['Medium', 'Google Scholar', 'System Design', 'ML Architecture', 'Databricks', 'Open Source'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-split__right" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta"
                style={{ width: 'fit-content' }}
              >
                Read on Medium <ExtIcon />
              </a>
              <p style={{ fontSize: '0.92rem', color: 'var(--gray-3)', lineHeight: 1.7, maxWidth: '48ch' }}>
                I write technical essays covering real-world Lakehouse patterns, agentic LLM failure modes,
                and lessons from deploying machine learning systems in production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
