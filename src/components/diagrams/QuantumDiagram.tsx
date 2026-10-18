// Animated quantum computing finale visual
// Shows qubit states, entanglement, and measurement collapse

export function QuantumDiagram() {
  const qubits = [
    { cx: 80, cy: 80, state: '|ψ₀⟩', color: '#6366f1' },
    { cx: 200, cy: 50, state: '|ψ₁⟩', color: '#8b5cf6' },
    { cx: 320, cy: 90, state: '|ψ₂⟩', color: '#0ea5e9' },
    { cx: 440, cy: 60, state: '|ψ₃⟩', color: '#6366f1' },
    { cx: 560, cy: 80, state: '|1⟩', color: '#10b981' },
  ]

  return (
    <div
      style={{
        background: 'rgba(99,102,241,0.04)',
        border: '1px solid rgba(99,102,241,0.15)',
        borderRadius: '16px',
        padding: '2rem',
        marginTop: '2rem',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--q-accent)',
        marginBottom: '1rem',
      }}>
        Quantum State: AI/ML System Architecture
      </p>
      <svg
        viewBox="0 0 680 160"
        style={{ width: '100%', height: 'auto', maxHeight: 200 }}
        aria-label="Quantum computing diagram showing qubit entanglement representing interconnected ML system components"
      >
        <defs>
          <filter id="qubit-glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="entangle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6"/>
          </linearGradient>
        </defs>

        {/* Entanglement lines */}
        <path d="M 80,80 Q 140,30 200,50 Q 260,70 320,90 Q 380,110 440,60 Q 500,10 560,80"
          fill="none" stroke="url(#entangle-grad)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5"/>

        {/* Measurement rail */}
        <line x1="40" y1="130" x2="640" y2="130" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
        <text x="40" y="145" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fill: '#4b5563' }}>measure →</text>

        {/* Qubit nodes */}
        {qubits.map((q, i) => (
          <g key={i}>
            {/* Outer ring */}
            <circle cx={q.cx} cy={q.cy} r="24" fill="none" stroke={q.color} strokeWidth="1" strokeOpacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from={`0 ${q.cx} ${q.cy}`} to={`360 ${q.cx} ${q.cy}`} dur={`${6 + i}s`} repeatCount="indefinite"/>
            </circle>
            {/* Core */}
            <circle cx={q.cx} cy={q.cy} r="14" fill={q.color} fillOpacity="0.15" stroke={q.color} strokeWidth="1.5" filter="url(#qubit-glow)">
              <animate attributeName="r" values="14;16;14" dur={`${3 + i * 0.5}s`} repeatCount="indefinite"/>
            </circle>
            {/* State label */}
            <text x={q.cx} y={q.cy + 4} textAnchor="middle"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fill: q.color, fontWeight: '600' }}>
              {q.state}
            </text>
            {/* Measurement projection */}
            <line x1={q.cx} y1={q.cy + 16} x2={q.cx} y2="128" stroke={q.color} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"/>
          </g>
        ))}

        {/* Labels */}
        {[
          { x: 80, label: 'Data' },
          { x: 200, label: 'Model' },
          { x: 320, label: 'Reason' },
          { x: 440, label: 'Evaluate' },
          { x: 560, label: 'Decide' },
        ].map(({ x, label }) => (
          <text key={x} x={x} y={150} textAnchor="middle"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fill: '#4b5563', letterSpacing: '0.1em' }}>
            {label}
          </text>
        ))}

        {/* Animated qubit particle */}
        <circle r="4" fill="#6366f1" opacity="0.9" filter="url(#qubit-glow)">
          <animateMotion dur="5s" repeatCount="indefinite"
            path="M 80,80 Q 140,30 200,50 Q 260,70 320,90 Q 380,110 440,60 Q 500,10 560,80"/>
        </circle>
      </svg>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--q-muted)',
        marginTop: '0.75rem',
        textAlign: 'center',
      }}>
        Each qubit represents a system component. Entanglement represents interdependency. Measurement produces a decision.
      </p>
    </div>
  )
}
