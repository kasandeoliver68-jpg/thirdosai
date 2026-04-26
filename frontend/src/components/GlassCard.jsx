import { motion } from "framer-motion";

export default function GlassCard({ title, subtitle, children, className = "" }) {
  return (
    <motion.section className={`glass-card ${className}`.trim()} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      {title ? (
        <header className="section-header">
          <div>
            <p className="section-kicker">ThirdSpace AI OS</p>
            <h2>{title}</h2>
          </div>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </motion.section>
  );
}
