import { getProjectById } from '../../content/projects'
import { CaseStudyTemplate } from '../../components/projects/CaseStudyTemplate'

export function TriChronosPage() {
  const project = getProjectById('trichronos')!
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-eyebrow">Case Study · Forecasting · ML Infrastructure</p>
          <h1 className="page-title">TriChronos</h1>
        </div>
      </div>
      <CaseStudyTemplate
        project={project}
        diagram="trichronos"
        sections={{
          problem: `Production forecasting systems must run repeatedly across hundreds or thousands of time series in real business settings, often under tight latency and cost constraints. Large transformer-based forecasters achieve competitive accuracy but are expensive to run at inference time. The question this project explores: can low-bit quantization (ternary/1-bit weights) preserve useful forecasting accuracy while substantially reducing compute requirements?`,
          designGoals: [
            'Build a transformer architecture specifically designed for probabilistic time-series forecasting.',
            'Incorporate temporal attention (within-series) and group-level attention (cross-series) as dual mechanisms.',
            'Explore ternary and low-bit weight quantization to reduce inference cost.',
            'Produce calibrated probabilistic outputs (quantile predictions) rather than point estimates.',
            'Be honest about what is an architecture experiment vs a validated, deployable system.',
          ],
          technicalApproach: [
            'Temporal attention layer: attends across time steps within a single series to capture local and seasonal patterns.',
            'Group-level attention layer: shares information across related series, useful for hierarchical or correlated time series.',
            'Ternary weight quantization experiments: weights constrained to {-1, 0, 1} to reduce memory and compute footprint.',
            'Probabilistic output head producing multiple quantile estimates for uncertainty quantification.',
            'Training experiments on standard time-series benchmarks; evaluation of accuracy/compute trade-off.',
          ],
          evaluation: `Evaluation is based on experiments documented in the repository. No claims of state-of-the-art performance are made without rigorous comparable evidence on standard benchmarks. The key metric of interest is whether ternary quantization can maintain competitive quantile accuracy relative to full-precision baselines, and at what accuracy cost. The current implementation is a research exploration; production deployment would require additional validation.`,
          tradeoffs: [
            'Ternary quantization reduces accuracy on some tasks; the practical accuracy/cost trade-off is dataset-dependent.',
            'Dual attention (temporal + group) adds complexity and requires careful hyperparameter tuning.',
            'Probabilistic output calibration requires more training data and careful loss function design vs point prediction.',
            'Group-level attention assumes series within a group share meaningful structure; this must be verified per domain.',
          ],
          lessons: [
            'The architecture exploration confirmed that ternary quantization is viable for time-series but the accuracy trade-off is non-trivial.',
            'Group-level attention provides measurable benefit for related series but requires careful grouping strategy.',
            'Probabilistic calibration is harder to achieve with quantized models; temperature scaling helps.',
            'Next: systematic evaluation on ETTh1/ETTh2/ETTm and FRED-MD benchmarks; publication of results.',
          ],
        }}
        prevProject={{ id: 'dgot', title: 'dgot' }}
        nextProject={{ id: 'decision-intelligence', title: 'Decision Intelligence' }}
      />
    </>
  )
}
