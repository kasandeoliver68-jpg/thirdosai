import GlassCard from "../components/GlassCard";
import { reports } from "../data/prototypeData";

export default function ReportsPage() {
  return (
    <div className="page-stack">
      <GlassCard title="Reports" subtitle="Generated reports, report preview, and export placeholders.">
        <div className="report-grid">
          <div className="report-list">
            {reports.map((report) => (
              <article key={report.title} className="report-card">
                <h3>{report.title}</h3>
                <p>{report.summary}</p>
                <span>{report.status}</span>
              </article>
            ))}
          </div>
          <article className="report-preview">
            <span>Report preview</span>
            <strong>Uganda Mini-Grid PPP Opportunity Memo</strong>
            <p>
              The positioning package frames the opportunity as a policy-native infrastructure venture with donor support, capital fit, and an approval gate for high-risk actions.
            </p>
            <button type="button" className="ghost-button">Export PDF placeholder</button>
          </article>
        </div>
      </GlassCard>
    </div>
  );
}
