import { AlertCircle, MessageSquareText } from 'lucide-react'
import type { Incident, LoopForgeRun } from '../lib/schemas'

type FailureClusterProps = {
  run: LoopForgeRun
  incidents: Incident[]
}

export function FailureCluster({ run, incidents }: FailureClusterProps) {
  return (
    <section className="panel" aria-labelledby="cluster-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Failure Cluster</p>
          <h2 id="cluster-title">{run.cluster.name}</h2>
        </div>
        <span className="risk-chip">{run.cluster.riskTier}</span>
      </div>

      <p className="cluster-impact">{run.cluster.impactEstimate}</p>

      <div className="incident-list">
        {incidents.slice(0, 5).map((incident) => (
          <article className="incident-row" key={incident.id}>
            <div className="incident-icon">
              <MessageSquareText size={18} aria-hidden="true" />
            </div>
            <div>
              <div className="incident-meta">
                <strong>{incident.id}</strong>
                <span>{incident.chargeStatus}</span>
                <span>{incident.severity}</span>
              </div>
              <p>{incident.quote}</p>
              <small>
                <AlertCircle size={14} aria-hidden="true" />
                {incident.qaFlag}
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
