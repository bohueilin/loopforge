import { ClipboardCheck, FileCheck2, ShieldAlert } from 'lucide-react'
import type { EvidencePack as EvidencePackType } from '../lib/schemas'

type EvidencePackProps = {
  evidence: EvidencePackType
  failingGates?: number
}

export function EvidencePack({ evidence, failingGates = 0 }: EvidencePackProps) {
  const blocked = failingGates > 0

  return (
    <section className="panel evidence-panel" aria-labelledby="evidence-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Evidence Pack</p>
          <h2 id="evidence-title">Approval-ready rollout packet</h2>
        </div>
        <FileCheck2 size={22} aria-hidden="true" />
      </div>

      {blocked ? (
        <div className="evidence-blocked" role="status">
          <ShieldAlert size={16} aria-hidden="true" />
          Rollout blocked — {failingGates} gate{failingGates === 1 ? '' : 's'} still failing. The
          Guardian holds this patch until every control passes.
        </div>
      ) : null}

      <div className="evidence-strip" aria-label="Evidence pack status">
        <span>Issue isolated</span>
        <span>Patch simulated</span>
        <span>{blocked ? 'Rollout held' : 'Rollout gated'}</span>
      </div>

      <div className="evidence-body">
        <div>
          <h3>Issue summary</h3>
          <p>{evidence.issueSummary}</p>
        </div>
        <div>
          <h3>Validation summary</h3>
          <p>{evidence.validationSummary}</p>
        </div>
        <div>
          <h3>Rollout recommendation</h3>
          <p>{evidence.rolloutRecommendation}</p>
        </div>
      </div>

      <div className="decision-row">
        {evidence.reviewerDecisionOptions.map((option) => (
          <span key={option}>
            <ClipboardCheck size={15} aria-hidden="true" />
            {option}
          </span>
        ))}
      </div>
    </section>
  )
}
