import { Eye, ScanText, ShieldAlert, Zap } from 'lucide-react'
import { formatMs, formatNumber } from '../lib/latency'
import type { Ingest } from '../lib/schemas'

type IngestPanelProps = {
  ingest?: Ingest
}

export function IngestPanel({ ingest }: IngestPanelProps) {
  if (!ingest) {
    return null
  }

  return (
    <section className="panel ingest-panel" aria-labelledby="ingest-title">
      <div className="panel-heading">
        <div>
          <p className="section-kicker">Multimodal Ingest</p>
          <h2 id="ingest-title">Screenshot → structured incident</h2>
        </div>
        <div className="ingest-badge">
          <Eye size={16} aria-hidden="true" />
          Gemma 4 vision
        </div>
      </div>

      <p className="ingest-caption">{ingest.caption}</p>

      <div className="ingest-body">
        <figure className="ingest-shot">
          <img src={`/${ingest.source}`} alt="Support console screenshot ingested by Gemma 4" />
          <figcaption>
            <ScanText size={13} aria-hidden="true" />
            {ingest.source}
          </figcaption>
        </figure>

        <div className="ingest-extract">
          <div className="ingest-stats">
            <span>
              <Zap size={13} aria-hidden="true" />
              {formatNumber(ingest.imageTokens)} image tokens
            </span>
            <span>{formatMs(ingest.inferenceMs)} on Cerebras</span>
            <span>{ingest.model}</span>
          </div>
          <dl className="ingest-fields">
            {ingest.fields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <footer className="ingest-footer">
        <ShieldAlert size={15} aria-hidden="true" />
        {ingest.note}
      </footer>
    </section>
  )
}
