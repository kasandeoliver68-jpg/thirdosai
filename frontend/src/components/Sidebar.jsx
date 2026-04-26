import { motion } from "framer-motion";
import { ChevronRight, Command } from "lucide-react";

export default function Sidebar({ items, currentPage, onNavigate, open, onClose }) {
  return (
    <motion.aside className={`sidebar ${open ? "open" : ""}`} initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <div className="sidebar-brand">
        <div className="brand-mark">
          <Command size={18} />
        </div>
        <div>
          <p>THIRDSPACE</p>
          <strong>AI OS</strong>
        </div>
      </div>

      <p className="sidebar-tagline">Submit once. ThirdSpace AI OS orchestrates the rest.</p>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <button key={item.id} type="button" className={currentPage === item.id ? "active" : ""} onClick={() => onNavigate(item.id)}>
            <span>{item.label}</span>
            <ChevronRight size={14} />
          </button>
        ))}
      </nav>

      <button type="button" className="sidebar-close ghost-button" onClick={onClose}>
        Close panel
      </button>
    </motion.aside>
  );
}
