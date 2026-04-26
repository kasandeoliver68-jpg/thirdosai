import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Activity, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import StatusPill from "../components/StatusPill";
import { liveOperatorFeed, processingStages } from "../data/prototypeData";

function readLatestRun() {
  try {
    return JSON.parse(sessionStorage.getItem("thirdspace:lastRun") ?? "null");
  } catch {
    return null;
  }
}

export default function ProcessingPage() {
  const [progress, setProgress] = useState(0);
  const [run, setRun] = useState(() => readLatestRun());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 8, 100));
      setRun(readLatestRun());
    }, 280);

    return () => window.clearInterval(timer);
  }, []);

  const activeStageIndex = useMemo(() => Math.min(Math.floor((progress / 100) * (processingStages.length - 1)), processingStages.length - 1), [progress]);

  return (
    <div className="page-stack">
      <GlassCard title="Live OS Processing" subtitle="Animated pipeline progress, operator activity feed, and final result preview.">
        <div className="processing-grid">
          <div className="pipeline-panel">
            <div className="pipeline-header">
              <StatusPill tone="live"><Activity size={12} /> Autonomous pipeline active</StatusPill>
              <strong>{progress}% complete</strong>
            </div>

            <div className="progress-track">
              <motion.div className="progress-fill" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
            </div>

            <div className="stage-list">
              {processingStages.map((stage, index) => {
                const state = index < activeStageIndex ? "done" : index === activeStageIndex ? "active" : "pending";
                return (
                  <div key={stage} className={`stage-item ${state}`}>
                    {state === "done" ? <CheckCircle2 size={16} /> : state === "active" ? <Activity size={16} /> : <Circle size={16} />}
                    <span>{stage}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="feed-panel">
            <div className="feed-head">
              <h3>AI operator activity feed</h3>
              <StatusPill tone="warning"><ShieldAlert size={12} /> Human approval pending</StatusPill>
            </div>
            <div className="activity-feed">
              {liveOperatorFeed.map((entry) => (
                <article key={entry.operator + entry.text} className={`feed-item ${entry.tone}`}>
                  <strong>{entry.operator}</strong>
                  <p>{entry.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="two-column-grid">
        <GlassCard title="Real-time simulated logs" subtitle="The prototype keeps a visible log stream while the workflow progresses.">
          <div className="log-list">
            {(run?.logs ?? []).slice(0, 5).map((log) => (
              <article key={log.id} className="log-item">
                <span>{log.stage}</span>
                <p>{log.message}</p>
              </article>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="Final result preview" subtitle="The OS stores structured artifacts and queues the approval gate.">
          {run ? (
            <div className="result-preview">
              <div>
                <strong>{run.venture?.name ?? "ThirdSpace Rural Grid"}</strong>
                <p>{run.intelligenceBrief?.strategicSummary ?? run.positioningDocument?.executiveSummary}</p>
              </div>
              <div className="preview-metrics">
                <div><span>Opportunity score</span><strong>{run.intelligenceBrief?.opportunityScore ?? 91}</strong></div>
                <div><span>Matches</span><strong>{run.investorMatches?.length ?? 4}</strong></div>
                <div><span>Approvals</span><strong>{run.approvalRequests?.length ?? 2}</strong></div>
              </div>
            </div>
          ) : (
            <p className="empty-state">Submit an intake to see the live processing result preview.</p>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
