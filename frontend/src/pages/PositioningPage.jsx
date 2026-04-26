import GlassCard from "../components/GlassCard";
import { positioningPackage } from "../data/prototypeData";

export default function PositioningPage() {
  return (
    <div className="page-stack">
      <GlassCard title="Positioning Engine" subtitle="Executive summary, policy brief, investment memo, and pitch deck outline preview cards.">
        <div className="positioning-grid">
          <article className="position-card large">
            <span>Executive summary</span>
            <p>{positioningPackage.executiveSummary}</p>
          </article>
          <article className="position-card">
            <span>Policy brief</span>
            <p>{positioningPackage.policyBrief}</p>
          </article>
          <article className="position-card">
            <span>Investment memo</span>
            <p>{positioningPackage.investmentMemo}</p>
          </article>
          <article className="position-card">
            <span>Pitch deck outline</span>
            <ul>
              {positioningPackage.pitchDeckOutline.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
        <div className="export-placeholder">Export placeholder: PDF, memo, and deck outputs can be wired here.</div>
      </GlassCard>
    </div>
  );
}
