import GlassCard from "../components/GlassCard";
import StatusPill from "../components/StatusPill";
import { signalRows } from "../data/prototypeData";

export default function SignalCapturePage() {
  return (
    <GlassCard title="Signal Capture" subtitle="Captured signals, classification result, sector, geography, urgency, and status.">
      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>Submission</th>
              <th>Classification</th>
              <th>Sector</th>
              <th>Geography</th>
              <th>Urgency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {signalRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.classification}</td>
                <td>{row.sector}</td>
                <td>{row.geography}</td>
                <td>{row.urgency}</td>
                <td><StatusPill tone="success">{row.status}</StatusPill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
