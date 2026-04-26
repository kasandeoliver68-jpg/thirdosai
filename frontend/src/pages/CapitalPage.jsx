import GlassCard from "../components/GlassCard";
import StatusPill from "../components/StatusPill";
import { investorCards } from "../data/prototypeData";

export default function CapitalPage() {
  return (
    <GlassCard title="Capital Engine" subtitle="Investor cards, match scores, mandate fit, ticket size, geography, and outreach angle.">
      <div className="capital-grid">
        {investorCards.map((investor) => (
          <article key={investor.name} className="investor-card">
            <div className="investor-head">
              <div>
                <h3>{investor.name}</h3>
                <StatusPill tone="success">Match score {investor.score}</StatusPill>
              </div>
              <span>{investor.ticketSize}</span>
            </div>
            <p>{investor.mandateFit}</p>
            <dl>
              <div><dt>Geography</dt><dd>{investor.geography}</dd></div>
              <div><dt>Outreach angle</dt><dd>{investor.outreachAngle}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
