import GlassCard from "../components/GlassCard";
import { aiOperators } from "../data/prototypeData";

export default function OperatorsPage() {
  return (
    <GlassCard title="AI Operators" subtitle="Policy Analyst, Venture Architect, and Deal Structurer work as specialized autonomous agents.">
      <div className="operator-grid">
        {aiOperators.map((operator) => (
          <article key={operator.name} className="operator-card">
            <h3>{operator.name}</h3>
            <p>{operator.mandate}</p>
            <dl>
              <div><dt>Input type</dt><dd>{operator.inputType}</dd></div>
              <div><dt>Output type</dt><dd>{operator.outputType}</dd></div>
              <div><dt>Recent activity</dt><dd>{operator.recentActivity}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
