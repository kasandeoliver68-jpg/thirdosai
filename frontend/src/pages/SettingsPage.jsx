import GlassCard from "../components/GlassCard";
import { settings } from "../data/prototypeData";

export default function SettingsPage() {
  return (
    <div className="page-stack">
      <GlassCard title="Settings" subtitle="API keys, organization profile, automation rules, and human approval settings.">
        <div className="settings-grid">
          <article className="settings-card">
            <span>OpenAI API key placeholder</span>
            <input value="sk-********************************" readOnly />
          </article>
          <article className="settings-card">
            <span>Organization profile</span>
            <strong>{settings.organization.name}</strong>
            <p>{settings.organization.sector}</p>
            <p>{settings.organization.geography}</p>
          </article>
          <article className="settings-card wide">
            <span>Automation rules</span>
            <ul>
              {settings.automationRules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </article>
          <article className="settings-card">
            <span>Human approval settings</span>
            <p>{settings.organization.approvalMode}</p>
          </article>
        </div>
      </GlassCard>
    </div>
  );
}
