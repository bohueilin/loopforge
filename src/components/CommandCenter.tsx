import {
  Activity,
  BadgeCheck,
  Database,
  Play,
  RadioTower,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react'
import type { LoopForgeRun } from '../lib/schemas'

type CommandCenterProps = {
  run: LoopForgeRun
  modeLabel: string
  isBusy: boolean
  error: string | null
  onRunRecorded: () => void
  onRunLive: () => void
}

export function CommandCenter({
  run,
  modeLabel,
  isBusy,
  error,
  onRunRecorded,
  onRunLive,
}: CommandCenterProps) {
  const passCount = run.gates.filter((gate) => gate.status === 'pass').length
  const failCount = run.gates.filter((gate) => gate.status === 'fail').length

  return (
    <section className="command-center" aria-labelledby="command-center-title">
      <div className="command-copy">
        <div className="eyebrow">
          <RadioTower size={16} aria-hidden="true" />
          LoopForge
          <span>{modeLabel}</span>
        </div>
        <h1 id="command-center-title">Enterprise Agent Repair OS</h1>
        <p className="thesis">From production failure to validated enterprise agent fix in seconds.</p>
        <div className="run-actions" aria-label="Run controls">
          <button className="primary-action" type="button" onClick={onRunRecorded} disabled={isBusy}>
            <Play size={18} aria-hidden="true" />
            {isBusy ? 'Running' : 'Run demo'}
          </button>
          <button className="secondary-action" type="button" onClick={onRunLive} disabled={isBusy}>
            <Database size={18} aria-hidden="true" />
            Run live (beta)
          </button>
        </div>
        {error ? (
          <div className="safe-message" role="status">
            <TriangleAlert size={18} aria-hidden="true" />
            {error}
          </div>
        ) : null}
      </div>

      <div className="ops-strip" aria-label="Run summary">
        <div>
          <Activity size={18} aria-hidden="true" />
          <span>Cluster</span>
          <strong>{run.cluster.volume}</strong>
        </div>
        <div>
          <ShieldCheck size={18} aria-hidden="true" />
          <span>Risk</span>
          <strong>{run.cluster.riskTier}</strong>
        </div>
        <div>
          <BadgeCheck size={18} aria-hidden="true" />
          <span>Gates</span>
          <strong>
            {passCount}/{run.gates.length}
          </strong>
        </div>
        <div className={failCount > 0 ? 'stat-danger' : ''}>
          <TriangleAlert size={18} aria-hidden="true" />
          <span>Fails</span>
          <strong>{failCount}</strong>
        </div>
      </div>
    </section>
  )
}
