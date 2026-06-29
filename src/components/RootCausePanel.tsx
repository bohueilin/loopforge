import { Brain, CheckCircle2, CircleDashed } from 'lucide-react'
import type { RootCauseAnalysis } from '../lib/schemas'

type RootCausePanelProps = {
  rootCause: RootCauseAnalysis
}

export function RootCausePanel({ rootCause }: RootCausePanelProps) {
  return (
    <section className="panel" aria-labelledby="root-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Root Cause</p>
          <h2 id="root-title">{rootCause.primaryClass}</h2>
        </div>
        <Brain size={22} aria-hidden="true" />
      </div>

      <p className="root-summary">{rootCause.summary}</p>

      <div className="cause-grid">
        {rootCause.classes.map((cause) => (
          <div className={cause.applies ? 'cause active' : 'cause'} key={cause.type}>
            {cause.applies ? (
              <CheckCircle2 size={18} aria-hidden="true" />
            ) : (
              <CircleDashed size={18} aria-hidden="true" />
            )}
            <div>
              <strong>{cause.type}</strong>
              <span>{Math.round(cause.confidence * 100)}% confidence</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
