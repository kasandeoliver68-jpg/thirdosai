export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="section-header compact">
      <div>
        <p className="section-kicker">ThirdSpace AI OS</p>
        <h2>{title}</h2>
      </div>
      <div className="section-action">
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {action}
      </div>
    </div>
  );
}
