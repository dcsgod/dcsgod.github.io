import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p className="not-found-code" aria-hidden="true">404</p>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-desc">
        This route doesn't exist. The qubit collapsed to an undefined state.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn-primary">Go home</Link>
        <Link to="/work" className="btn-secondary">View work</Link>
      </div>
    </div>
  )
}
