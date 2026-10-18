import { Link } from 'react-router-dom'
import { PROJECTS } from '../content/projects'

const RESEARCH_INTERESTS = [
  {
    num: '01',
    title: 'Differentiable Graph-of-Thought Reasoning',
    desc: 'Moving beyond linear chain-of-thought prompting toward inspectable, directed acyclic graph representations. We explore graph neural network (GNN) message-passing across reasoning nodes to propagate evidence and optimize multi-step deduction.',
    badge: 'Reasoning Graphs',
  },
  {
    num: '02',
    title: 'Multi-Store Memory for Autonomous Agents',
    desc: 'Resolving the conflation of working scratchpad context with long-term episodic knowledge. Exploring decoupled memory stores (semantic, episodic, temporal, and structured) with recency and relevance routing in Membrane.',
    badge: 'Agent Memory',
  },
  {
    num: '03',
    title: 'Causal Inference & Observational Decision Support',
    desc: 'Estimating true intervention effects from observational enterprise and retail logs. Combining causal ML (double machine learning, uplift modeling) with domain knowledge graph constraints and mathematical optimization.',
    badge: 'Causal ML',
  },
  {
    num: '04',
    title: 'Low-Bit Quantization for Time-Series Transformers',
    desc: 'Exploring the compute-accuracy frontier for production forecasting. Investigating ternary-weight quantization and structured temporal attention in TriChronos to run thousands of parallel time-series inferences economically.',
    badge: 'Efficient ML',
  },
  {
    num: '05',
    title: 'Governed Semantic Layers & Knowledge Graphs',
    desc: 'Bridging tribal data knowledge and automated data agents through formal ontologies. Studying semantic drift detection, verifiable evidence trails, and fail-closed governance across enterprise lakehouses (Nexa).',
    badge: 'Knowledge Graphs',
  },
  {
    num: '06',
    title: 'Mechanistic Interpretability & Model Alignment',
    desc: 'Investigating internal representations of fine-tuned language models. Exploring sparse autoencoders and activation steering to ensure safety, domain fidelity, and interpretability in critical environments.',
    badge: 'Interpretability',
  },
]

const RESEARCH_PROJECTS = PROJECTS.filter(p => p.status === 'Research' || p.categories.includes('Graph / Knowledge Graphs'))

function ExtIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function ResearchPage() {
  return (
    <>
      <div className="page-hero">
        <p className="page-hero__label">Research & Systems Foundations</p>
        <h1 className="page-hero__title">Research.</h1>
        <p className="page-hero__desc">
          Applied and systems-oriented research at the intersection of machine learning,
          structured reasoning representations, agent memory, and efficient transformers.
        </p>
      </div>

      {/* Section 01: Areas of Inquiry */}
      <section className="section" aria-labelledby="inquiry-heading">
        <div className="section__header">
          <span className="section__num">01</span>
          <span className="section__title" id="inquiry-heading">Active Inquiries & Focus Areas</span>
          <span className="section__num">6 Areas</span>
        </div>

        <div className="research-grid">
          {RESEARCH_INTERESTS.map((item) => (
            <div key={item.title} className="research-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span className="research-card__num">{item.num}</span>
                <span className="research-badge">{item.badge}</span>
              </div>
              <h2 className="research-card__title">{item.title}</h2>
              <p className="research-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02: Research Projects */}
      <section className="section" aria-labelledby="projects-heading">
        <div className="section__header">
          <span className="section__num">02</span>
          <span className="section__title" id="projects-heading">Research Projects & Prototypes</span>
          <Link to="/work" className="section__link">All work →</Link>
        </div>

        <div role="list">
          {RESEARCH_PROJECTS.map((project, idx) => (
            <div key={project.id} className="project-row" role="listitem">
              <span className="project-row__num">0{idx + 1}</span>

              <div>
                <p className="project-row__name">{project.title}</p>
                <p className="project-row__tagline">{project.tagline}</p>
              </div>

              <p className="project-row__desc">
                {project.approach}
              </p>

              <div className="project-row__meta">
                <span className="project-row__status">{project.status}</span>
                {project.year && (
                  <span className="project-row__status" style={{ marginTop: -8 }}>
                    {project.year}
                  </span>
                )}
                <div className="project-row__links">
                  {['nexa', 'membrane', 'dgot', 'trichronos', 'decision-intelligence'].includes(project.id) && (
                    <Link to={`/work/${project.id}`} className="project-link-btn">
                      Details →
                    </Link>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      GitHub <ExtIcon />
                    </a>
                  )}
                </div>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="ptag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Publications & Internships */}
      <section className="section" aria-labelledby="pubs-heading">
        <div className="section__header">
          <span className="section__num">03</span>
          <span className="section__title" id="pubs-heading">Publications & Academic Work</span>
          <a
            href="https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="section__link"
          >
            Google Scholar <ExtIcon />
          </a>
        </div>

        <div className="about-split">
          <div className="about-split__left">
            <p className="about-split__statement">
              Applied research grounded in real mission and production constraints.
            </p>
            <div className="about-split__tags">
              {['ISRO URSC', 'ISRO NRSC', 'IIT Patna', 'Falcon-7B', 'QLoRA', 'Remote Sensing'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-split__right">
            <div style={{ borderBottom: '1px solid var(--gray-6)', paddingBottom: 28 }}>
              <span className="research-badge" style={{ marginBottom: 12 }}>ISRO URSC Bengaluru · 2024</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 8 }}>
                Domain-Adapted LLM for Space Research Documents
              </h3>
              <p className="about-split__para">
                Fine-tuned Falcon-7B using QLoRA for domain-adapted semantic retrieval and grounded question answering over ISRO System Requirements Specification (SRS) technical documentation corpora.
              </p>
            </div>

            <div style={{ paddingTop: 8 }}>
              <span className="research-badge" style={{ marginBottom: 12 }}>ISRO NRSC Hyderabad · 2023</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 8 }}>
                Deep Learning for Satellite Road Network Extraction
              </h3>
              <p className="about-split__para">
                Semantic segmentation architectures applied to multi-spectral satellite imagery for automated road-network extraction and geospatial mapping workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
