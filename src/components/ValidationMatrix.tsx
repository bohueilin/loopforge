import { CheckCircle2, CircleAlert, ShieldCheck } from 'lucide-react'
import type { ValidationGate } from '../lib/schemas'

type ValidationMatrixProps = {
  gates: ValidationGate[]
}

export function ValidationMatrix({ gates }: ValidationMatrixProps) {
  return (
    <section className="panel" aria-labelledby="gates-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Validation Gates</p>
          <h2 id="gates-title">Deterministic safety matrix</h2>
        </div>
        <ShieldCheck size={22} aria-hidden="true" />
      </div>

      <div className="gate-matrix">
        {gates.map((gate) => (
          <article className={`gate-row ${gate.status}`} key={gate.id}>
            {gate.status === 'pass' ? (
              <CheckCircle2 size={19} aria-hidden="true" />
            ) : (
              <CircleAlert size={19} aria-hidden="true" />
            )}
            <div>
              <strong>{gate.name}</strong>
              <span>{gate.detail}</span>
            </div>
            <em>{gate.status}</em>
          </article>
        ))}
      </div>
    </section>
  )
}
