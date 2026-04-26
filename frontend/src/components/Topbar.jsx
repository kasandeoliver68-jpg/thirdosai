import { Menu, Rocket, ShieldCheck } from "lucide-react";

export default function Topbar({ title, subtitle, onOpenSidebar, modeLabel = "Autonomous mode" }) {
  return (
    <header className="topbar">
      <button type="button" className="icon-button mobile-only" onClick={onOpenSidebar} aria-label="Open navigation">
        <Menu size={18} />
      </button>

      <div className="topbar-copy">
        <p>{subtitle}</p>
        <h1>{title}</h1>
      </div>

      <div className="topbar-status">
        <span className="status-indicator" />
        <span>{modeLabel}</span>
        <ShieldCheck size={16} />
      </div>
    </header>
  );
}
