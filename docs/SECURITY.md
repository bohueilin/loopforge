# Security And Privacy Notes

LoopForge is built for a hackathon demo with enterprise security posture in mind.

## Data

- All incidents, policies, traces, simulations, and recorded runs are synthetic.
- No real customer data is included.
- Synthetic IDs are labeled with `synthetic_` prefixes where they resemble customer or charge identifiers.

## Secrets

- Provider keys are read only by the local Vite middleware.
- The React browser bundle does not receive `CEREBRAS_API_KEY`, baseline keys, or source env file contents.
- Missing live-mode setup messages name only the missing variable.
- `.gitignore` excludes `.env*`, local env files, logs, and recordings.

## Model Output

The model proposes structured artifacts, but deterministic TypeScript gates make the safety decision. The validation harness checks identity handling, tool payload shape, pending-charge blocking, fraud routing, high-dollar escalation, prompt-injection handling, disclosure language, and regression behavior.

## Known Demo Boundary

The local Vite middleware is appropriate for a hackathon demo and local review. A production deployment should move provider calls to a hardened backend with authentication, request logging redaction, rate limits, audit storage, and service-owned secret management.
