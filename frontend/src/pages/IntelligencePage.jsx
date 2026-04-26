import GlassCard from "../components/GlassCard";
import { intelligenceBrief } from "../data/prototypeData";

export default function IntelligencePage() {
  return (
    <div className="page-stack">
      <GlassCard title="Intelligence Engine" subtitle="Strategic summary, opportunity gap, policy relevance, risk analysis, and opportunity score.">
        <div className="insight-grid">
          <article className="insight-card large">
            <span>Strategic summary</span>
            <p>{intelligenceBrief.strategicSummary}</p>
          </article>
          <article className="insight-card">
            <span>Opportunity gap</span>
            <p>{intelligenceBrief.opportunityGap}</p>
          </article>
          <article className="insight-card">
            <span>Policy relevance</span>
            <p>{intelligenceBrief.policyRelevance}</p>
          </article>
          <article className="insight-card">
            <span>Risk analysis</span>
            <p>{intelligenceBrief.riskAnalysis}</p>
          </article>
          <article className="insight-card score">
            <span>Opportunity score</span>
            <strong>{intelligenceBrief.opportunityScore}</strong>
          </article>
          <article className="insight-card">
            <span>Recommended venture angle</span>
            <p>{intelligenceBrief.recommendedVentureAngle}</p>
          </article>
        </div>
      </GlassCard>
    </div>
  );
}
