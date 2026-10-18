import { Link } from 'react-router-dom'
import { PROJECTS } from '../content/projects'

const RESEARCH_INTERESTS = [
  {
    title: 'Language Model Systems and Structured Reasoning',
    desc: 'I am interested in moving beyond linear chain-of-thought prompting toward structured, graph-based reasoning representations that can be inspected, optimised, and explained. This includes work on differentiable thought graphs (dgot) and graph neural network message-passing for reasoning-step integration.',
  },
  {
    title: 'Agent Memory and Long-Horizon Context',
    desc: 'Standard LLM context windows conflate working memory with long-term knowledge. My work on Membrane explores a principled, multi-store memory architecture — distinguishing semantic, episodic, temporal, and structured memory — with a routing layer for principled reads and writes.',
  },
  {
    title: 'Causal Inference and Decision Support',
    desc: 'Causal ML for observational data, particularly in retail and enterprise settings. Topics include lift estimation, counterfactual reasoning, graph-grounded constraint encoding, and constrained optimisation for downstream decisions.',
  },
  {
    title: 'Efficient and Compact Forecasting Models',
    desc: 'Probabilistic time-series forecasting at production scale, with interest in the accuracy/compute trade-off. My TriChronos project explores ternary-weight quantization and attention architectures for compact transformer-based forecasters.',
  },
  {
    title: 'Semantic Layers and Data Trust',
    desc: 'How governed semantic mappings, ontologies, and knowledge graphs can improve data quality, interpretability, and trust in large lakehouses. Includes work on semantic drift detection, evidence trails, and fail-closed governance.',
  },
]

// Pull verified research-status projects from the content manifest
const RESEARCH_PROJECTS = PROJECTS.filter(p => p.status === 'Research')

function ExternalIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function ResearchPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">Research</p>
          <h1 className="page-hero-title">Research Interests</h1>
          <p className="page-hero-desc">
            My research is applied and systems-oriented, sitting at the
            intersection of machine learning and software engineering. I build
            to understand, and understand to build better.
          </p>
        </div>
      </div>

      {/* Interests */}
      <section className="section" aria-labelledby="interests-heading">
        <div className="container">
          <p className="section-label" id="interests-heading">Areas of Interest</p>
          <div>
            {RESEARCH_INTERESTS.map((item) => (
              <div key={item.title} className="research-item">
                <h2 className="research-title">{item.title}</h2>
                <p className="research-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research projects */}
      <section className="section" aria-labelledby="research-projects-heading">
        <div className="container">
          <p className="section-label" id="research-projects-heading">Research Projects</p>
          <p className="body-text" style={{ marginBottom: 'var(--space-8)' }}>
            The following are research explorations — prototypes and experiments,
            not production systems. They are clearly marked as such.
          </p>
          <ul className="project-list" role="list">
            {RESEARCH_PROJECTS.map(project => (
              <li key={project.id} className="project-item">
                <div className="project-layout">
                  <div className="project-meta">
                    <h2 className="project-title">{project.title}</h2>
                    {project.year && <p className="project-year">{project.year}</p>}
                    <p className="project-status">{project.status}</p>
                  </div>
                  <div className="project-body">
                    <p className="project-tagline">{project.tagline}</p>
                    <p className="project-desc">{project.approach}</p>
                    <div className="project-tags">
                      {project.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <Link to={`/work/${project.id}`} className="project-link">Details →</Link>
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          GitHub <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publication */}
      <section className="section" aria-labelledby="pubs-heading">
        <div className="container">
          <p className="section-label" id="pubs-heading">Publications</p>
          <div className="research-item">
            <h2 className="research-title">
              Domain-Adapted LLM for Space Research Documents
            </h2>
            <p className="research-desc">
              Falcon-7B fine-tuned with QLoRA for semantic retrieval and question
              answering over ISRO System Requirements Specification corpora. Research
              conducted during the 2024 internship at ISRO URSC, Bengaluru. Work
              verified through the internship; peer-review status not confirmed.
            </p>
            <div className="research-links">
              <a
                href="https://scholar.google.com/citations?user=s4o3mJMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Google Scholar <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
