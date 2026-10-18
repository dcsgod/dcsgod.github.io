// Shared case study template — used by all project detail pages
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../../content/projects'
import { SystemDiagram } from '../diagrams/SystemDiagram'

interface CaseStudyProps {
  project: Project
  diagram?: 'nexa' | 'membrane' | 'dgot' | 'trichronos'
  sections: {
    problem?: string
    approach?: string
    designGoals?: string[]
    technicalApproach?: string[]
    evaluation?: string
    tradeoffs?: string[]
    lessons?: string[]
  }
  prevProject?: { id: string; title: string }
  nextProject?: { id: string; title: string }
}

export function CaseStudyTemplate({ project, diagram, sections, prevProject, nextProject }: CaseStudyProps) {
  return (
    <div className="page-content">
      {/* Hero card */}
      <div className="case-study-hero reveal">
        <p className="case-study-label">{project.status} · {project.year}</p>
        <h1 className="case-study-title">{project.title}</h1>
        <p className="case-study-thesis">{project.tagline} — {project.problem.slice(0, 160)}...</p>
        <div className="case-study-meta">
          <div className="meta-item">
            <p className="meta-label">Status</p>
            <p className="meta-value">{project.status}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Categories</p>
            <p className="meta-value">{project.categories.join(', ')}</p>
          </div>
          {project.year && (
            <div className="meta-item">
              <p className="meta-label">Year</p>
              <p className="meta-value">{project.year}</p>
            </div>
          )}
        </div>
        <div className="project-card-tags" style={{ marginTop: 'var(--sp-4)' }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      {/* Links */}
      {(project.repoUrl || project.pypiUrl || project.huggingFaceUrl || project.docsUrl || project.demoUrl) && (
        <div className="cs-links-row reveal">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="cs-link-btn primary">
              <ExternalLink size={12} /> GitHub Repo
            </a>
          )}
          {project.pypiUrl && (
            <a href={project.pypiUrl} target="_blank" rel="noopener noreferrer" className="cs-link-btn">
              <ExternalLink size={12} /> PyPI Package
            </a>
          )}
          {project.huggingFaceUrl && (
            <a href={project.huggingFaceUrl} target="_blank" rel="noopener noreferrer" className="cs-link-btn">
              <ExternalLink size={12} /> Hugging Face
            </a>
          )}
        </div>
      )}

      {/* System diagram */}
      {diagram && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">DIAGRAM</span>
            System Architecture
          </h2>
          <div className="system-diagram-container">
            <SystemDiagram type={diagram} />
          </div>
        </div>
      )}

      {/* Problem */}
      {sections.problem && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">01</span>
            Problem
          </h2>
          <div className="cs-body"><p>{sections.problem}</p></div>
        </div>
      )}

      {/* Design goals */}
      {sections.designGoals && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">02</span>
            Design Goals
          </h2>
          <ul className="cs-list">
            {sections.designGoals.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </div>
      )}

      {/* Technical approach */}
      {sections.technicalApproach && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">03</span>
            Technical Approach
          </h2>
          <ul className="cs-list">
            {sections.technicalApproach.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}

      {/* Evaluation */}
      {sections.evaluation && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">04</span>
            Evaluation
          </h2>
          <div className="cs-body"><p>{sections.evaluation}</p></div>
        </div>
      )}

      {/* Trade-offs */}
      {sections.tradeoffs && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">05</span>
            Trade-offs and Constraints
          </h2>
          <ul className="cs-list">
            {sections.tradeoffs.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      )}

      {/* Lessons */}
      {sections.lessons && (
        <div className="cs-section reveal">
          <h2 className="cs-section-title">
            <span className="cs-section-num">06</span>
            Lessons and Next Steps
          </h2>
          <ul className="cs-list">
            {sections.lessons.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      )}

      {/* Project nav */}
      <div className="project-nav">
        {prevProject ? (
          <Link to={`/work/${prevProject.id}`} className="project-nav-link prev">
            <p className="project-nav-dir">← Previous</p>
            <p className="project-nav-name">{prevProject.title}</p>
          </Link>
        ) : <div />}
        {nextProject ? (
          <Link to={`/work/${nextProject.id}`} className="project-nav-link next">
            <p className="project-nav-dir">Next →</p>
            <p className="project-nav-name">{nextProject.title}</p>
          </Link>
        ) : <div />}
      </div>

      <div style={{ marginTop: 'var(--sp-8)', textAlign: 'center' }}>
        <Link to="/work" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--q-muted)', textDecoration: 'none' }}>
          ← Back to all projects
        </Link>
      </div>
    </div>
  )
}
