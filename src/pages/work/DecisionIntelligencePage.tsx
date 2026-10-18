import { getProjectById } from '../../content/projects'
import { CaseStudyTemplate } from '../../components/projects/CaseStudyTemplate'

export function DecisionIntelligencePage() {
  const project = getProjectById('decision-intelligence')!
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Case Study · Causal ML · Enterprise · Anonymized</p>
          <h1 className="page-title">Decision Intelligence</h1>
        </div>
      </div>
      {/* Anonymization notice */}
      <div className="container" style={{ marginTop: 'var(--sp-4)' }}>
        <div style={{
          background: 'rgba(245,158,11,0.06)',
          border: '1px solid rgba(245,158,11,0.2)',
          borderLeft: '3px solid #f59e0b',
          borderRadius: 8,
          padding: 'var(--sp-4)',
          maxWidth: 720,
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            CONFIDENTIALITY NOTE
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--q-muted)', lineHeight: 1.6 }}>
            Client names, specific production metrics, internal dashboards, and proprietary data
            are omitted. This case study describes the problem category, architecture approach,
            and role only, based on verified resume content.
          </p>
        </div>
      </div>
      <CaseStudyTemplate
        project={project}
        sections={{
          problem: `Enterprise promotional and markdown decisions (pricing, trade spend, promotional events) are typically made using spreadsheet heuristics that ignore causal structure, cross-category interference effects, inventory and margin constraints, and uncertainty in forecast inputs. Decision makers receive point forecasts without confidence intervals, cannot quantify the causal lift of a proposed intervention, and have no principled way to incorporate business constraints into optimization.`,
          designGoals: [
            'Estimate causal lift of promotional interventions, not just correlation-based forecasts.',
            'Ground decision logic in a domain ontology and knowledge graph that encodes business constraints.',
            'Produce constrained optimization outputs that respect margin, inventory, and cannibalization constraints.',
            'Generate explainable recommendations — not just optimized numbers.',
            'Avoid exposing private client data, internal metrics, or production system details.',
          ],
          technicalApproach: [
            'Causal ML pipeline: uplift modeling and difference-in-differences for estimating promotional lift on observational retail data.',
            'Knowledge graph layer encoding product hierarchy, substitution relationships, and business constraints (margin floors, stock limits).',
            'Forecasting under intervention: predicting sales under proposed promotional scenarios using the causal estimates.',
            'Constrained optimization: maximizing expected gross margin subject to inventory, margin, and budget constraints.',
            'Explainability layer producing human-readable rationale for each recommendation.',
            'Role: ML modelling design, causal estimation pipeline, and knowledge graph integration. Databricks as the compute platform.',
          ],
          evaluation: `Evaluation was conducted against a holdout set of historical promotional events with known outcomes. Causal lift estimates were compared against naive forecast baselines. Specific accuracy numbers and client outcomes are not disclosed. Governance framework: recommendations are surfaced as decision support, not automated execution. Human review is required before any pricing action.`,
          tradeoffs: [
            'Causal estimation from observational data requires strong assumptions about confounding; these were documented and validated with domain experts.',
            'Knowledge graph maintenance requires ongoing data stewardship as product catalogs and business rules change.',
            'Constrained optimization can produce recommendations that feel counterintuitive to human planners; explainability is essential.',
            'The system is decision support, not autonomous decision-making: this is a deliberate design choice, not a limitation.',
          ],
          lessons: [
            'Domain knowledge encoded in a knowledge graph dramatically improves the quality of constrained optimization outputs vs purely data-driven approaches.',
            'Causal framing — "what would happen if we ran this promotion" — resonates strongly with business stakeholders vs pure forecast accuracy.',
            'Explainability is not optional in decision intelligence: the recommendation is useless if the user does not understand why.',
            'Next: tighter integration with real-time inventory signals and automated constraint updating.',
          ],
        }}
        prevProject={{ id: 'trichronos', title: 'TriChronos' }}
      />
    </>
  )
}
