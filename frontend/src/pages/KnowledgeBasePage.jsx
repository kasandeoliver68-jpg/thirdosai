import { useMemo, useState } from "react";
import GlassCard from "../components/GlassCard";
import StatusPill from "../components/StatusPill";
import { knowledgeItems } from "../data/prototypeData";

export default function KnowledgeBasePage() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const items = useMemo(() => knowledgeItems.filter((item) => {
    const queryMatch = query.trim().length === 0 || [item.type, item.title, item.sector, item.geography, item.status]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const sectorMatch = sectorFilter === "all" || item.sector === sectorFilter;
    const statusMatch = statusFilter === "all" || item.status === statusFilter;
    return queryMatch && typeMatch && sectorMatch && statusMatch;
  }), [query, typeFilter, sectorFilter, statusFilter]);

  return (
    <GlassCard title="Knowledge Base" subtitle="Searchable storage for submissions, signals, ventures, reports, investors, and workflow logs.">
      <div className="filter-row search-row">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search submissions, ventures, investors, logs..." />
      </div>
      <div className="filter-row">
        <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
          <option value="all">All types</option>
          <option value="submission">Submissions</option>
          <option value="signal">Signals</option>
          <option value="venture">Ventures</option>
          <option value="report">Reports</option>
        </select>
        <select value={sectorFilter} onChange={(event) => setSectorFilter(event.target.value)}>
          <option value="all">All sectors</option>
          <option value="Renewable Energy">Renewable Energy</option>
          <option value="Climate">Climate</option>
          <option value="Health">Health</option>
        </select>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="all">All statuses</option>
          <option value="Completed">Completed</option>
          <option value="Captured">Captured</option>
          <option value="Generated">Generated</option>
          <option value="Ready">Ready</option>
        </select>
      </div>

      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Sector</th>
              <th>Geography</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.type}-${item.title}`}>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.sector}</td>
                <td>{item.geography}</td>
                <td><StatusPill tone="success">{item.status}</StatusPill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
