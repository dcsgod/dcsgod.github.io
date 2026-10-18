// Animated SVG system diagrams for project architecture visualization

interface SystemDiagramProps {
  type: 'nexa' | 'membrane' | 'dgot' | 'trichronos'
}

const NODE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  fill: '#e2e8f0',
}

export function SystemDiagram({ type }: SystemDiagramProps) {
  if (type === 'nexa') return <NexaDiagram />
  if (type === 'membrane') return <MembraneDiagram />
  if (type === 'dgot') return <DgotDiagram />
  if (type === 'trichronos') return <TriChronosDiagram />
  return null
}

function NexaDiagram() {
  return (
    <svg viewBox="0 0 560 240" className="diagram-svg" aria-label="Nexa system diagram: user intent flows through knowledge graph to semantic mapping, drift detection, and SQL execution">
      <defs>
        <marker id="arrow-nexa" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6366f1" opacity="0.7" />
        </marker>
        <filter id="glow-nexa">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Nodes */}
      {[
        { x: 20, y: 95, w: 100, h: 50, label: 'User Intent', sub: 'natural language', color: '#6366f1' },
        { x: 160, y: 95, w: 110, h: 50, label: 'Knowledge Graph', sub: 'semantic index', color: '#8b5cf6' },
        { x: 320, y: 60, w: 110, h: 50, label: 'Governed Mapping', sub: 'evidence-backed', color: '#6366f1' },
        { x: 320, y: 130, w: 110, h: 50, label: 'Drift Detection', sub: 'semantic diff', color: '#f59e0b' },
        { x: 450, y: 95, w: 100, h: 50, label: 'SQL / Genie', sub: 'execution', color: '#10b981' },
      ].map((node, i) => (
        <g key={i}>
          <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="6"
            fill="rgba(99,102,241,0.08)" stroke={node.color} strokeWidth="1" strokeOpacity="0.5" />
          <text x={node.x + node.w / 2} y={node.y + 22} textAnchor="middle"
            style={{ ...NODE_STYLE, fill: '#e2e8f0', fontWeight: '600', fontSize: '10px' }}>
            {node.label}
          </text>
          <text x={node.x + node.w / 2} y={node.y + 36} textAnchor="middle"
            style={{ ...NODE_STYLE, fill: '#6b7280', fontSize: '9px' }}>
            {node.sub}
          </text>
        </g>
      ))}

      {/* Arrows */}
      <line x1="120" y1="120" x2="158" y2="120" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-nexa)" />
      <line x1="270" y1="110" x2="318" y2="90" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-nexa)" />
      <line x1="270" y1="130" x2="318" y2="150" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-nexa)" />
      <line x1="430" y1="85" x2="448" y2="110" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-nexa)" />
      <line x1="430" y1="155" x2="448" y2="135" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-nexa)" />

      {/* Animated data pulse */}
      <circle r="3" fill="#6366f1" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 120,120 L 160,120 L 270,110 L 320,85 L 450,120" />
      </circle>
    </svg>
  )
}

function MembraneDiagram() {
  return (
    <svg viewBox="0 0 560 280" className="diagram-svg" aria-label="Membrane memory architecture: agent connects to memory router which dispatches to semantic, temporal, episodic and structured memory stores">
      <defs>
        <marker id="arrow-mem" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0ea5e9" opacity="0.7" />
        </marker>
      </defs>

      {/* Agent */}
      <rect x="220" y="15" width="120" height="50" rx="8"
        fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="280" y="38" textAnchor="middle" style={{ ...NODE_STYLE, fontWeight: '700', fontSize: '11px' }}>AI Agent</text>
      <text x="280" y="54" textAnchor="middle" style={{ ...NODE_STYLE, fill: '#6b7280', fontSize: '9px' }}>read / write</text>

      {/* Router */}
      <rect x="195" y="100" width="170" height="50" rx="8"
        fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1.5" />
      <text x="280" y="123" textAnchor="middle" style={{ ...NODE_STYLE, fontWeight: '700', fontSize: '11px', fill: '#a5b4fc' }}>Memory Router</text>
      <text x="280" y="139" textAnchor="middle" style={{ ...NODE_STYLE, fill: '#6b7280', fontSize: '9px' }}>dispatch by type + recency</text>

      {/* Arrow: agent → router */}
      <line x1="280" y1="65" x2="280" y2="98" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.7" markerEnd="url(#arrow-mem)" />

      {/* Memory stores */}
      {[
        { x: 20, y: 195, label: 'Semantic', sub: 'vector + concept', color: '#8b5cf6' },
        { x: 155, y: 195, label: 'Temporal', sub: 'time-indexed', color: '#0ea5e9' },
        { x: 290, y: 195, label: 'Episodic', sub: 'event chains', color: '#f59e0b' },
        { x: 420, y: 195, label: 'Structured', sub: 'schema-typed', color: '#10b981' },
      ].map((store, i) => (
        <g key={i}>
          <rect x={store.x} y={store.y} width="120" height="55" rx="6"
            fill="rgba(255,255,255,0.03)" stroke={store.color} strokeWidth="1" strokeOpacity="0.6" />
          <text x={store.x + 60} y={store.y + 22} textAnchor="middle"
            style={{ ...NODE_STYLE, fill: '#e2e8f0', fontWeight: '600', fontSize: '10px' }}>
            {store.label}
          </text>
          <text x={store.x + 60} y={store.y + 37} textAnchor="middle"
            style={{ ...NODE_STYLE, fill: '#6b7280', fontSize: '9px' }}>
            {store.sub}
          </text>
          {/* Router → store arrows */}
          <line
            x1="280" y1="150"
            x2={store.x + 60} y2={store.y - 2}
            stroke={store.color} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 3"
          />
        </g>
      ))}
    </svg>
  )
}

function DgotDiagram() {
  return (
    <svg viewBox="0 0 560 200" className="diagram-svg" aria-label="dgot pipeline: prompt to thought graph to GNN message passing to path extraction to answer">
      <defs>
        <marker id="arrow-dgot" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" opacity="0.7" />
        </marker>
      </defs>
      {[
        { x: 10, label: 'Prompt /\nCompiler', color: '#6366f1' },
        { x: 130, label: 'Thought\nGraph', color: '#8b5cf6' },
        { x: 250, label: 'GNN Message\nPassing', color: '#7c3aed' },
        { x: 380, label: 'Path\nExtraction', color: '#0ea5e9' },
        { x: 490, label: 'Answer /\nExplanation', color: '#10b981' },
      ].map((node, i) => (
        <g key={i}>
          <rect x={node.x} y="65" width="110" height="70" rx="6"
            fill="rgba(99,102,241,0.07)" stroke={node.color} strokeWidth="1" strokeOpacity="0.6" />
          {node.label.split('\n').map((line, li) => (
            <text key={li} x={node.x + 55} y={88 + li * 16} textAnchor="middle"
              style={{ ...NODE_STYLE, fontWeight: li === 0 ? '600' : '400', fontSize: li === 0 ? '10px' : '9px', fill: li === 1 ? '#6b7280' : '#e2e8f0' }}>
              {line}
            </text>
          ))}
          {i < 4 && (
            <line x1={node.x + 110} y1="100" x2={node.x + 128} y2="100"
              stroke={node.color} strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-dgot)" />
          )}
        </g>
      ))}
      <circle r="3" fill="#8b5cf6" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 65,100 L 185,100 L 305,100 L 435,100 L 545,100" />
      </circle>
    </svg>
  )
}

function TriChronosDiagram() {
  return (
    <svg viewBox="0 0 560 200" className="diagram-svg" aria-label="TriChronos: time series input through temporal and group attention layers to quantized model producing probabilistic quantile outputs">
      <defs>
        <marker id="arrow-tc" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" opacity="0.7" />
        </marker>
      </defs>
      {[
        { x: 10, label: 'Time\nSeries Input', color: '#6366f1' },
        { x: 130, label: 'Temporal\nAttention', color: '#8b5cf6' },
        { x: 250, label: 'Group\nAttention', color: '#f59e0b' },
        { x: 370, label: 'Quantized\nWeights (1-bit)', color: '#0ea5e9' },
        { x: 480, label: 'Quantile\nOutputs', color: '#10b981' },
      ].map((node, i) => (
        <g key={i}>
          <rect x={node.x} y="65" width="110" height="70" rx="6"
            fill="rgba(245,158,11,0.05)" stroke={node.color} strokeWidth="1" strokeOpacity="0.6" />
          {node.label.split('\n').map((line, li) => (
            <text key={li} x={node.x + 55} y={88 + li * 16} textAnchor="middle"
              style={{ fontFamily: 'var(--font-mono)', fontSize: li === 0 ? '10px' : '9px', fill: li === 0 ? '#e2e8f0' : '#6b7280', fontWeight: li === 0 ? '600' : '400' }}>
              {line}
            </text>
          ))}
          {i < 4 && (
            <line x1={node.x + 110} y1="100" x2={node.x + 128} y2="100"
              stroke={node.color} strokeWidth="1.5" strokeOpacity="0.6" markerEnd="url(#arrow-tc)" />
          )}
        </g>
      ))}
    </svg>
  )
}
