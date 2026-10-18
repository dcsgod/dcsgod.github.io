import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../content/projects'

const CATS = ['All', 'LLM Systems', 'Graph / Knowledge Graphs', 'Forecasting', 'Causal / Decision Intelligence', 'ML Infrastructure']

function ExtIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" className="ext-icon" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
    </svg>
  )
}

export function WorkPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.categories.includes(active))

  return (
    <>
      <div className="page-hero">
        <p className="page-hero__label">Work</p>
        <h1 className="page-hero__title">Projects.</h1>
        <p className="page-hero__desc">
          Open-source packages, research explorations, and production engineering work
          across ML, LLM systems, and data infrastructure.
        </p>
      </div>

      <div className="filter-bar" role="group" aria-label="Filter by category">
        {CATS.map(cat => (
          <button
            key={cat}
            className={`filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div role="list">
        {filtered.map((project, idx) => (
          <div key={project.id} className="project-row" role="listitem">
            <span className="project-row__num">{String(idx + 1).padStart(2, '0')}</span>

            <div>
              <p className="project-row__name">{project.title}</p>
              <p className="project-row__tagline">{project.tagline}</p>
            </div>

            <p className="project-row__desc">{project.problem}</p>

            <div className="project-row__meta">
              <span className="project-row__status">{project.status}</span>
              {project.year && (
                <span className="project-row__status" style={{ marginTop: -8 }}>
                  {project.year}
                </span>
              )}
              <div className="project-row__links">
                {['nexa','membrane','dgot','trichronos','decision-intelligence'].includes(project.id) && (
                  <Link to={`/work/${project.id}`} className="project-link-btn">Details →</Link>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub <ExtIcon />
                  </a>
                )}
                {project.pypiUrl && (
                  <a href={project.pypiUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    PyPI <ExtIcon />
                  </a>
                )}
              </div>
              <div className="project-tags">
                {project.tags.slice(0, 4).map(t => (
                  <span key={t} className="ptag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p style={{ padding: '48px 40px', color: 'var(--gray-4)', fontSize: '0.875rem' }}>
            No projects in this category.
          </p>
        )}
      </div>
    </>
  )
}
