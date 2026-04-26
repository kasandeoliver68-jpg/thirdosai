import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import GlassCard from "../components/GlassCard";
import MetricCard from "../components/MetricCard";
import { dashboardMetrics, investorScoreData, pipelineChartData, recentActivity, sectorChartData } from "../data/prototypeData";

const chartColors = ["#7dd3fc", "#38bdf8", "#60a5fa", "#22d3ee", "#fbbf24", "#a78bfa"];

export default function DashboardPage() {
  return (
    <div className="page-stack">
      <section className="metric-grid">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <div className="chart-grid">
        <GlassCard title="Signals by sector" subtitle="Where the OS is seeing the strongest opportunity density.">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={sectorChartData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={4}>
                {sectorChartData.map((entry, index) => (
                  <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard title="Pipeline status" subtitle="Current autonomous flow distribution across the command center.">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={pipelineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" tick={{ fill: "#a4b3d1" }} />
              <YAxis tick={{ fill: "#a4b3d1" }} />
              <Tooltip />
              <Area type="monotone" dataKey="count" stroke="#7dd3fc" fill="rgba(125, 211, 252, 0.24)" />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <div className="chart-grid wide">
        <GlassCard title="Investor match scores" subtitle="Mandate alignment computed by the Capital Engine.">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={investorScoreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" tick={{ fill: "#a4b3d1" }} />
              <YAxis tick={{ fill: "#a4b3d1" }} />
              <Tooltip />
              <Bar dataKey="score" fill="#38bdf8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard title="Recent automation activity" subtitle="The last autonomous actions performed by the OS.">
          <div className="activity-list">
            {recentActivity.map((entry) => (
              <article key={entry.message} className="activity-card">
                <span>{entry.stage}</span>
                <strong>{entry.operator}</strong>
                <p>{entry.message}</p>
                <small>{entry.time}</small>
              </article>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
