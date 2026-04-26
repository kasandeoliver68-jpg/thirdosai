import { ArrowRight, Layers3, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { osLayers, workflowStages } from "../data/prototypeData";

export default function LandingPage({ onLaunch }) {
  return (
    <div className="landing-page">
      <section className="hero-panel">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">Institutionalizing intelligence</p>
          <h1>Submit once. ThirdSpace AI OS orchestrates the rest.</h1>
          <p className="hero-lead">
            ThirdSpace AI OS is an autonomous institutional command center for turning tenders, donor calls, policies, budgets, and market signals into ventures, positioning documents, investor matches, and approval-ready workflows.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={onLaunch}>
              Launch Autonomous OS <ArrowRight size={16} />
            </button>
            <div className="hero-badges">
              <span><Layers3 size={14} /> Seven OS layers</span>
              <span><Workflow size={14} /> Autonomous workflow</span>
            </div>
          </div>
        </motion.div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>1</strong>
            <span>Submission</span>
          </div>
          <div className="hero-stat">
            <strong>12</strong>
            <span>Workflow stages</span>
          </div>
          <div className="hero-stat">
            <strong>3</strong>
            <span>Core operators</span>
          </div>
        </div>
      </section>

      <GlassCard title="Seven OS Layers" subtitle="Each layer performs a specific autonomous function and hands off to the next stage.">
        <div className="layer-grid">
          {osLayers.map((layer) => (
            <article key={layer.title} className="layer-card">
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>
      </GlassCard>

      <GlassCard title="Autonomous Workflow" subtitle="The user submits once. The OS runs the rest without manual stage-by-stage operation.">
        <div className="workflow-strip">
          {workflowStages.map((stage, index) => (
            <div key={stage} className="workflow-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
