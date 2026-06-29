import { FlaskConical, Route } from 'lucide-react'
import type { Simulation } from '../lib/schemas'

type SimulationPanelProps = {
  simulations: Simulation[]
}

export function SimulationPanel({ simulations }: SimulationPanelProps) {
  return (
    <section className="panel" aria-labelledby="sim-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Simulation Generator</p>
          <h2 id="sim-title">{simulations.length} deterministic probes</h2>
        </div>
        <FlaskConical size={22} aria-hidden="true" />
      </div>

      <div className="simulation-grid">
        {simulations.map((simulation) => (
          <article className="simulation-row" key={simulation.id}>
            <div>
              <strong>{simulation.title}</strong>
              <p>{simulation.input}</p>
            </div>
            <div className="route-chip">
              <Route size={15} aria-hidden="true" />
              {simulation.expectedRoute}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
