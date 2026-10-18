import { getProjectById } from '../../content/projects'
import { CaseStudyTemplate } from '../../components/projects/CaseStudyTemplate'

export function NexaPage() {
  const project = getProjectById('nexa')!
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Case Study · LLM Systems · Graph / Knowledge Graphs</p>
          <h1 className="page-title">Nexa</h1>
        </div>
      </div>
      <CaseStudyTemplate
        project={project}
        diagram="nexa"
        sections={{
          problem: `Data analysts in large Databricks environments work with inconsistent naming conventions, ambiguous column semantics, and tribal knowledge spread across hundreds of tables. There is no structured layer that explains what a table or column actually means, why a mapping was chosen, or how semantic understanding drifts as data and usage evolve. This makes data discovery unreliable, query generation brittle, and governance opaque.`,
          designGoals: [
            'Separate technical discovery (what exists) from governed semantic meaning (what it means).',
            'Make every mapping decision explainable with evidence — not just a string match.',
            'Detect and surface semantic drift when column definitions change over time.',
            'Support fail-closed governance: ambiguous or low-confidence mappings should not silently propagate.',
            'Enable counterfactual previews — show what would change if a threshold or mapping were adjusted.',
            'Integrate with Databricks Genie and SQL generation workflows.',
          ],
          technicalApproach: [
            'Technical knowledge graph indexing table, column, and type metadata from Unity Catalog.',
            'Governed semantic mapping layer that assigns meaning with evidence trails (source document, rationale, confidence).',
            'Semantic drift detection: comparing mapping states across time using diff-style output.',
            'Counterfactual engine: simulates mapping/threshold changes before committing them.',
            'Explainability layer surfacing the reasoning behind each mapping decision.',
            'Fail-closed defaults: unmapped or ambiguous entities are blocked from query generation rather than guessed.',
          ],
          evaluation: `Evaluation focuses on mapping precision (whether a resolved mapping is correct given its stated evidence), drift detection coverage (whether changed columns are flagged), and governance behavior (whether ambiguous inputs trigger fail-closed behavior rather than silent best-guess). No fabricated accuracy metrics are presented; the evaluation approach is qualitative and inspection-based at this stage.`,
          tradeoffs: [
            'Richer evidence trails require more structured metadata from data owners; sparse catalogs reduce mapping quality.',
            'Fail-closed governance is safer but increases friction for exploratory queries on unmapped entities.',
            'Drift detection depends on stable column-level versioning; Unity Catalog version support varies.',
            'Counterfactual previews add computational overhead and are currently scoped to mapping-level changes.',
          ],
          lessons: [
            'Semantic governance requires explicit design: it does not emerge from keyword search or embedding similarity alone.',
            'Evidence trails are the most requested feature from data consumers — knowing why a mapping was made is as important as the mapping itself.',
            'Fail-closed defaults are uncomfortable to implement but critical for trust in production AI-driven analytics.',
            'Next: tighter Genie integration, richer drift history UI, and support for cross-catalog semantic consistency.',
          ],
        }}
        nextProject={{ id: 'membrane', title: 'Membrane' }}
      />
    </>
  )
}
