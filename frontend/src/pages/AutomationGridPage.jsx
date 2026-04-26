import GlassCard from "../components/GlassCard";
import { automationKanban } from "../data/prototypeData";

export default function AutomationGridPage() {
  return (
    <GlassCard title="Automation Grid" subtitle="Kanban view of the autonomous workflow stages and pending approval gates.">
      <div className="kanban-grid">
        {Object.entries(automationKanban).map(([column, cards]) => (
          <section key={column} className="kanban-column">
            <h3>{column}</h3>
            <div className="kanban-cards">
              {cards.map((card) => (
                <article key={card} className="kanban-card">
                  {card}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </GlassCard>
  );
}
