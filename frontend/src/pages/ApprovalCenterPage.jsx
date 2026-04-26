import GlassCard from "../components/GlassCard";
import StatusPill from "../components/StatusPill";
import { approvalRequests } from "../data/prototypeData";

export default function ApprovalCenterPage() {
  return (
    <GlassCard title="Human Approval Center" subtitle="High-risk actions require human approval before they are executed.">
      <div className="approval-list">
        {approvalRequests.map((approval) => (
          <article key={approval.title} className="approval-card">
            <div>
              <h3>{approval.title}</h3>
              <p>{approval.description}</p>
            </div>
            <div className="approval-actions">
              <StatusPill tone="warning">{approval.status}</StatusPill>
              <div className="approval-buttons">
                <button type="button" className="primary-button small">Approve</button>
                <button type="button" className="ghost-button small">Reject</button>
                <button type="button" className="ghost-button small">Request Changes</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
