// =========================================================
// EXPERIENCE & EDUCATION CONTENT
// =========================================================

export interface ExperienceItem {
  period: string
  role: string
  org: string
  type: 'work' | 'internship' | 'education'
  description: string
  skills?: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'May 2025 – Present',
    role: 'Data Scientist',
    org: 'Celebal Technologies',
    type: 'work',
    description: 'Building production AI/ML systems including semantic layers, agentic workflows, and enterprise decision intelligence platforms on Databricks.',
    skills: ['Databricks', 'LLM Systems', 'MLOps', 'Knowledge Graphs', 'Causal ML'],
  },
  {
    period: '2024',
    role: 'Research Intern — LLM / Domain Adaptation',
    org: 'ISRO URSC, Bengaluru',
    type: 'internship',
    description: 'Domain adaptation of Falcon-7B with QLoRA for semantic retrieval and question answering over ISRO System Requirements Specification documents.',
    skills: ['LLM Fine-tuning', 'QLoRA', 'RAG', 'Falcon-7B'],
  },
  {
    period: '2023',
    role: 'Research Intern — Remote Sensing / CV',
    org: 'ISRO NRSC, Hyderabad',
    type: 'internship',
    description: 'Deep-learning segmentation models for road-network extraction from satellite imagery. Work in computer vision, semantic segmentation, and remote sensing data pipelines.',
    skills: ['Computer Vision', 'Segmentation', 'Remote Sensing', 'Deep Learning'],
  },
]

export const EDUCATION: ExperienceItem[] = [
  {
    period: '2023 – 2025',
    role: 'M.Tech — AI and Data Science Engineering',
    org: 'IIT Patna',
    type: 'education',
    description: 'Specialization in machine learning, deep learning, NLP, and statistical modelling. Research focus on LLM systems, graph ML, and efficient transformers.',
  },
  {
    period: '2019 – 2023',
    role: 'B.Tech — Computer Science Engineering',
    org: 'Rajasthan Technical University',
    type: 'education',
    description: 'Core CS curriculum: algorithms, systems, databases, and software engineering foundations.',
  },
]

export const CERTIFICATIONS = [
  { name: 'Databricks Certified Associate Developer for Apache Spark', issuer: 'Databricks' },
  { name: 'Neo4j Certified Professional', issuer: 'Neo4j' },
  { name: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft' },
]

export const SKILLS_BY_DOMAIN = [
  {
    domain: 'LLM & Language Systems',
    skills: ['LLM Fine-tuning', 'QLoRA / LoRA', 'RAG', 'Agentic Systems', 'Prompt Engineering', 'Evaluation'],
  },
  {
    domain: 'Graph & Knowledge',
    skills: ['Knowledge Graphs', 'Neo4j', 'Graph ML', 'GNN', 'Semantic Layers', 'Ontology'],
  },
  {
    domain: 'Forecasting & Decision Science',
    skills: ['Time Series', 'Causal ML', 'Probabilistic Forecasting', 'Optimization', 'Statistical Modelling'],
  },
  {
    domain: 'ML Engineering & Infrastructure',
    skills: ['Databricks', 'MLOps', 'Unity Catalog', 'Model Evaluation', 'Python', 'PyTorch'],
  },
]
