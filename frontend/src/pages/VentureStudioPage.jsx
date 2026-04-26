import GlassCard from "../components/GlassCard";
import { ventureProfile } from "../data/prototypeData";

export default function VentureStudioPage() {
  return (
    <div className="page-stack">
      <GlassCard title="Venture Studio" subtitle="Automatically generated venture profile, MVP plan, revenue model, validation plan, and risk matrix.">
        <div className="venture-grid">
          <article className="venture-highlight">
            <span>Venture name</span>
            <strong>{ventureProfile.name}</strong>
          </article>
          <article className="venture-card">
            <span>Problem statement</span>
            <p>{ventureProfile.problemStatement}</p>
          </article>
          <article className="venture-card">
            <span>Solution</span>
            <p>{ventureProfile.solution}</p>
          </article>
          <article className="venture-card">
            <span>Target market</span>
            <p>{ventureProfile.targetMarket}</p>
          </article>
          <article className="venture-card">
            <span>MVP plan</span>
            <ul>
              {ventureProfile.mvpPlan.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="venture-card">
            <span>Revenue model</span>
            <p>{ventureProfile.revenueModel}</p>
          </article>
          <article className="venture-card">
            <span>Validation plan</span>
            <p>{ventureProfile.validationPlan}</p>
          </article>
          <article className="venture-card">
            <span>Risk matrix</span>
            <ul>
              {ventureProfile.riskMatrix.map((item) => <li key={item.risk}>{item.risk} - {item.severity}: {item.mitigation}</li>)}
            </ul>
          </article>
        </div>
      </GlassCard>
    </div>
  );
}
