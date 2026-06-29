import './App.css'
import { DeepDiveProvider } from './app/deepDive'
import { useLoopForgeRun } from './app/useLoopForgeRun'
import { CommandCenter } from './components/CommandCenter'
import { EvidencePack } from './components/EvidencePack'
import { FailureCluster } from './components/FailureCluster'
import { IngestPanel } from './components/IngestPanel'
import { ModelLeaderboard } from './components/ModelLeaderboard'
import { PostureStrip } from './components/PostureStrip'
import { RepairLoop } from './components/RepairLoop'
import { RootCausePanel } from './components/RootCausePanel'
import { SimulationPanel } from './components/SimulationPanel'
import { SpeedRace } from './components/SpeedRace'
import { ValidationMatrix } from './components/ValidationMatrix'
import { WorkflowDiff } from './components/WorkflowDiff'
import { incidents } from './lib/syntheticData'

function App() {
  const { run, isBusy, error, runRecorded, runLive } = useLoopForgeRun()

  return (
    <DeepDiveProvider>
    <main className="app-shell">
      <CommandCenter
        run={run}
        isBusy={isBusy}
        error={error}
        onRunRecorded={runRecorded}
        onRunLive={runLive}
      />

      <PostureStrip />

      <div className="dashboard-grid">
        <SpeedRace key={`speed-${run.runId}`} latency={run.latency} />
        <ModelLeaderboard />
        <IngestPanel ingest={run.ingest} />
        <FailureCluster run={run} incidents={incidents} />
        <RootCausePanel rootCause={run.rootCause} />
        <WorkflowDiff patch={run.patch} />
        <SimulationPanel simulations={run.simulations} />
        <RepairLoop key={`repair-${run.runId}`} repair={run.repair} />
        <ValidationMatrix gates={run.gates} />
        <EvidencePack
          evidence={run.evidencePack}
          failingGates={run.gates.filter((gate) => gate.status === 'fail').length}
        />
      </div>
    </main>
    </DeepDiveProvider>
  )
}

export default App
