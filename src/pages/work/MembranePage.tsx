import { getProjectById } from '../../content/projects'
import { CaseStudyTemplate } from '../../components/projects/CaseStudyTemplate'

export function MembranePage() {
  const project = getProjectById('membrane')!
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Case Study · LLM Systems · ML Infrastructure</p>
          <h1 className="page-title">Membrane</h1>
        </div>
      </div>
      <CaseStudyTemplate
        project={project}
        diagram="membrane"
        sections={{
          problem: `LLM agents forget context between turns, conflate working scratchpad memory with long-term knowledge, and have no principled way to query, update, or expire structured memory. Vector search alone is not agent memory: it has no notion of time, priority, type, or update semantics. Most agent frameworks treat memory as a single undifferentiated context window or embedding store, which breaks down for any task requiring factual recall, temporal reasoning, or multi-session continuity.`,
          designGoals: [
            'Distinguish memory types: semantic (concept-level), temporal (time-indexed), episodic (event chains), structured (schema-typed facts).',
            'Route reads and writes based on memory type and recency — not a single flat retrieval.',
            'Support memory expiry, update, and invalidation as first-class operations.',
            'Expose a clean Python API for agent developers without requiring vector store configuration.',
            'Package and distribute via PyPI for easy integration into existing agent frameworks.',
          ],
          technicalApproach: [
            'Memory router dispatches read/write operations to the appropriate store based on declared memory type.',
            'Semantic store: embedding-backed, concept-level retrieval for knowledge queries.',
            'Temporal store: time-indexed entries with recency scoring and decay.',
            'Episodic store: ordered event chains linking related interactions.',
            'Structured store: schema-typed facts with key-value and relational access patterns.',
            'Python package published to PyPI as membrane-memory for drop-in agent integration.',
          ],
          evaluation: `Evaluation is focused on behavioral correctness: does the router dispatch to the correct store for a given memory type? Does expiry and invalidation work as specified? Does retrieval return contextually relevant entries across store types? Formal benchmarks against external agent memory systems are not claimed at this stage. The package is available on PyPI and the repository documents the current implementation state and planned extensions.`,
          tradeoffs: [
            'Multi-store architecture adds coordination complexity vs a single flat retrieval system.',
            'Structured memory requires upfront schema definition; works best for well-typed agent domains.',
            'Temporal decay parameters require tuning per use case; defaults are conservative.',
            'Current implementation targets Python agents; multi-language or streaming agent support is not yet included.',
          ],
          lessons: [
            'Agents need memory with semantics, not just storage — the type system is the key insight.',
            'PyPI packaging forces API discipline: every public method must be intentionally designed.',
            'The hardest design decision is expiry: when should a memory be forgotten vs retained?',
            'Next: more sophisticated retrieval fusion across store types, and LangChain/LlamaIndex integrations.',
          ],
        }}
        prevProject={{ id: 'nexa', title: 'Nexa' }}
        nextProject={{ id: 'dgot', title: 'dgot' }}
      />
    </>
  )
}
