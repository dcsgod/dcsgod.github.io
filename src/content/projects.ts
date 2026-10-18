// =========================================================
// PROJECTS CONTENT — Source of truth for all project data
// =========================================================

export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  approach: string
  status: 'Open Source' | 'Research' | 'Prototype' | 'Production Experience'
  categories: string[]
  tags: string[]
  repoUrl?: string
  pypiUrl?: string
  huggingFaceUrl?: string
  docsUrl?: string
  demoUrl?: string
  year?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'nexa',
    title: 'Nexa',
    tagline: 'Semantic Intelligence for Databricks',
    problem: 'Data analysts work with inconsistent naming conventions and tribal knowledge across sprawling lakehouses. There is no structured layer that explains what a table or column means, why a mapping was chosen, or how semantics drift over time.',
    approach: 'Explainable semantic layer backed by a technical knowledge graph. Governed mappings with evidence trails, semantic drift detection and diff, counterfactual previews of threshold changes, and fail-closed governance for ambiguous mappings.',
    status: 'Open Source',
    categories: ['LLM Systems', 'Graph / Knowledge Graphs', 'ML Infrastructure'],
    tags: ['Databricks', 'Knowledge Graph', 'Semantic Layer', 'Explainability', 'Python'],
    repoUrl: 'https://github.com/dcsgod/nexa',
    year: '2025',
  },
  {
    id: 'membrane',
    title: 'Membrane',
    tagline: 'Programmable Memory Layer for AI Agents',
    problem: 'LLM agents forget context between turns, conflate working scratchpad with long-term knowledge, and have no principled way to query, update, or expire structured memory. Vector search alone is not agent memory.',
    approach: 'Structured, queryable memory layer with distinct stores for semantic, temporal, episodic, and structured memory. A memory router dispatches reads and writes based on memory type and recency. Available as a Python package on PyPI.',
    status: 'Open Source',
    categories: ['LLM Systems', 'ML Infrastructure'],
    tags: ['Agent Memory', 'LLM', 'Python', 'PyPI', 'Retrieval'],
    repoUrl: 'https://github.com/dcsgod/membrane',
    pypiUrl: 'https://pypi.org/project/membrane-memory/',
    year: '2025',
  },
  {
    id: 'dgot',
    title: 'dgot',
    tagline: 'Differentiable Graph-of-Thought Reasoning',
    problem: 'Chain-of-thought prompting produces linear reasoning traces that cannot be optimized, inspected as graphs, or improved via gradient-like signals over the reasoning structure itself.',
    approach: 'Thought graph representation where reasoning steps are nodes and dependencies are edges. GNN message-passing for cross-step information flow, path extraction for explanation, and provider-agnostic integrations. A research exploration into structured, differentiable reasoning.',
    status: 'Research',
    categories: ['LLM Systems', 'Graph / Knowledge Graphs'],
    tags: ['GNN', 'Reasoning', 'Graph', 'LLM', 'Python'],
    repoUrl: 'https://github.com/dcsgod',
    year: '2025',
  },
  {
    id: 'trichronos',
    title: 'TriChronos',
    tagline: 'Compact Time-Series Transformer',
    problem: 'Production forecasting systems must balance accuracy with inference cost. Large transformer-based forecasters are expensive to run repeatedly on many time series in real business settings.',
    approach: 'Probabilistic forecasting architecture combining temporal attention, group-level attention, and low-bit (ternary) model quantization experiments. Designed to explore the accuracy/compute trade-off in time-series transformers with quantized weights.',
    status: 'Research',
    categories: ['Forecasting', 'ML Infrastructure'],
    tags: ['Time Series', 'Transformer', 'Quantization', 'Probabilistic', 'Python'],
    repoUrl: 'https://github.com/dcsgod',
    year: '2025',
  },
  {
    id: 'decision-intelligence',
    title: 'Decision Intelligence Platform',
    tagline: 'Causal ML and Graph-Based Enterprise Decision Support',
    problem: 'Enterprise promotional decisions (pricing, markdown, trade spend) are made with spreadsheet heuristics, ignoring causal structure, inventory constraints, and cross-category interference effects.',
    approach: 'Causal ML pipeline for lift estimation, ontology and knowledge graph grounding for domain constraints, forecasting under intervention, and constrained optimization for final recommendations. Role: design, ML modelling, and graph layer. Client details anonymized.',
    status: 'Production Experience',
    categories: ['Forecasting', 'Causal / Decision Intelligence', 'Graph / Knowledge Graphs'],
    tags: ['Causal ML', 'Knowledge Graph', 'Optimization', 'Forecasting', 'Databricks'],
    year: '2025',
  },
  {
    id: 'isro-gyan',
    title: 'ISRO Gyan AI',
    tagline: 'Domain-Adapted LLM for Space Research Documents',
    problem: 'ISRO researchers needed semantic retrieval and Q&A over highly technical System Requirements Specification (SRS) documents that general LLMs mishandle due to domain vocabulary mismatch.',
    approach: 'Falcon-7B fine-tuned with QLoRA for domain adaptation on SRS corpora. Semantic retrieval pipeline for grounded question answering over space research documentation. Research internship at ISRO URSC, Bengaluru.',
    status: 'Research',
    categories: ['LLM Systems'],
    tags: ['LLM', 'QLoRA', 'Fine-tuning', 'RAG', 'ISRO'],
    year: '2024',
  },
]

export const FEATURED_PROJECTS = PROJECTS.slice(0, 4)

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id)
}
