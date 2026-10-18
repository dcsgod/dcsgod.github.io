import { getProjectById } from '../../content/projects'
import { CaseStudyTemplate } from '../../components/projects/CaseStudyTemplate'

export function DgotPage() {
  const project = getProjectById('dgot')!
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Case Study · LLM Systems · Graph / Knowledge Graphs</p>
          <h1 className="page-title">dgot</h1>
        </div>
      </div>
      <CaseStudyTemplate
        project={project}
        diagram="dgot"
        sections={{
          problem: `Chain-of-thought prompting produces linear reasoning traces that cannot be optimized across steps, inspected as structured graphs, or improved via gradient-like signals over the reasoning structure itself. Each reasoning step is treated as an independent token prediction, with no mechanism to propagate information across non-adjacent reasoning branches or to differentially weight paths based on their contribution to the final answer.`,
          designGoals: [
            'Represent reasoning as a directed graph — nodes are thoughts, edges are logical dependencies.',
            'Enable cross-step information flow via graph neural network message passing.',
            'Extract interpretable reasoning paths as explanations for final outputs.',
            'Keep the approach provider-agnostic: work with any LLM API.',
            'Maintain this as an honest research exploration, not a production system with validated performance claims.',
          ],
          technicalApproach: [
            'Prompt compiler decomposes a reasoning task into an initial set of thought nodes.',
            'Thought graph construction: nodes represent reasoning steps, edges represent logical dependencies and information flow.',
            'GNN message passing: node representations are updated by aggregating information from neighboring thought nodes across graph layers.',
            'Path extraction: the most influential reasoning paths are identified and surfaced as explanations.',
            'Provider-agnostic LLM integration for thought generation and final answer synthesis.',
          ],
          evaluation: `This is a research exploration. The conceptual pipeline is implemented and documented. No independent empirical benchmarks against established chain-of-thought or tree-of-thought baselines are claimed. Evaluation at this stage is architectural: does the graph representation support more flexible information flow than linear chains? Do extracted paths correspond to interpretable reasoning steps? Rigorous empirical evaluation against established benchmarks is a stated next step.`,
          tradeoffs: [
            'Graph construction overhead vs standard chain-of-thought: more computation per token of reasoning.',
            'GNN message passing benefits depend on the quality of dependency edge construction, which is currently heuristic.',
            'Path extraction interpretability is not formally validated against human judgments.',
            'Provider-agnostic design limits use of provider-specific structured output features.',
          ],
          lessons: [
            'The insight that reasoning traces can be graphs — not chains — opens interesting optimization possibilities even if current implementation is exploratory.',
            'Differentiable reasoning over graphs requires cleaner separation between the graph construction phase and the message-passing phase.',
            'Next: rigorous comparison with Tree-of-Thought and Graph-of-Thought baselines on established benchmarks.',
          ],
        }}
        prevProject={{ id: 'membrane', title: 'Membrane' }}
        nextProject={{ id: 'trichronos', title: 'TriChronos' }}
      />
    </>
  )
}
