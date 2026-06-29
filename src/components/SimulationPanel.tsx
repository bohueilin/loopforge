import { FlaskConical, Route } from 'lucide-react'
import { DeepDiveButton, useDeepDive } from '../app/deepDive'
import type { Simulation } from '../lib/schemas'

type SimulationPanelProps = {
  simulations: Simulation[]
}

export function SimulationPanel({ simulations }: SimulationPanelProps) {
  const { open } = useDeepDive()
  return (
    <section className="panel" aria-labelledby="sim-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Simulation Generator</p>
          <h2 id="sim-title">{simulations.length} adversarial probes</h2>
        </div>
        <div className="panel-head-actions">
          <DeepDiveButton
            onClick={() =>
              open({
                title: 'Adversarial simulations',
                subtitle: `${simulations.length} probes — the exact cases the Guardian validates`,
                data: simulations,
              })
            }
          />
          <FlaskConical size={22} aria-hidden="true" />
        </div>
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
