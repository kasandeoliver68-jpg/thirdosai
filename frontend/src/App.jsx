import { useMemo, useState } from "react";
import AppShell from "./layouts/AppShell";
import { useHashPage } from "./hooks/useHashPage";
import { submitToOs } from "./services/osApi";
import LandingPage from "./pages/LandingPage";
import IntakePage from "./pages/IntakePage";
import ProcessingPage from "./pages/ProcessingPage";
import DashboardPage from "./pages/DashboardPage";
import SignalCapturePage from "./pages/SignalCapturePage";
import IntelligencePage from "./pages/IntelligencePage";
import AutomationGridPage from "./pages/AutomationGridPage";
import VentureStudioPage from "./pages/VentureStudioPage";
import PositioningPage from "./pages/PositioningPage";
import CapitalPage from "./pages/CapitalPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import ApprovalCenterPage from "./pages/ApprovalCenterPage";
import OperatorsPage from "./pages/OperatorsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

const pages = [
  { id: "dashboard", label: "Dashboard", title: "Dashboard", subtitle: "Command center overview of the autonomous OS." },
  { id: "intake", label: "Autonomous Intake", title: "Autonomous Intake", subtitle: "One submission starts the full workflow." },
  { id: "processing", label: "Live OS Processing", title: "Live OS Processing", subtitle: "Animated pipeline, logs, and result preview." },
  { id: "signals", label: "Signal Capture", title: "Signal Capture", subtitle: "Captured signals and classification results." },
  { id: "intelligence", label: "Intelligence Engine", title: "Intelligence Engine", subtitle: "Strategic analysis and opportunity scoring." },
  { id: "automation", label: "Automation Grid", title: "Automation Grid", subtitle: "Kanban view of the autonomous workflow." },
  { id: "ventures", label: "Venture Studio", title: "Venture Studio", subtitle: "Generated venture concepts and MVP plans." },
  { id: "positioning", label: "Positioning Engine", title: "Positioning Engine", subtitle: "Executive and investment outputs." },
  { id: "capital", label: "Capital Engine", title: "Capital Engine", subtitle: "Investor matching and outreach guidance." },
  { id: "knowledge", label: "Knowledge Base", title: "Knowledge Base", subtitle: "Searchable institutional memory." },
  { id: "approvals", label: "Human Approval", title: "Human Approval Center", subtitle: "Approval-gated high-risk actions." },
  { id: "operators", label: "AI Operators", title: "AI Operators", subtitle: "Policy Analyst, Venture Architect, and Deal Structurer." },
  { id: "reports", label: "Reports", title: "Reports", subtitle: "Generated memos and export placeholders." },
  { id: "settings", label: "Settings", title: "Settings", subtitle: "API keys, rules, and organization profile." }
];

export default function App() {
  const [page, navigate] = useHashPage("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [processingNonce, setProcessingNonce] = useState(0);

  const activePage = useMemo(() => pages.find((item) => item.id === page) ?? pages[0], [page]);

  async function handleSubmitToOs(form) {
    const result = await submitToOs(form);
    sessionStorage.setItem("thirdspace:lastRun", JSON.stringify(result));
    setProcessingNonce((value) => value + 1);
    navigate("processing");
  }

  function handleLaunch() {
    navigate("intake");
  }

  if (page === "landing") {
    return <LandingPage onLaunch={handleLaunch} />;
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <DashboardPage />;
      case "intake":
        return <IntakePage onSubmit={handleSubmitToOs} />;
      case "processing":
        return <ProcessingPage key={processingNonce} />;
      case "signals":
        return <SignalCapturePage />;
      case "intelligence":
        return <IntelligencePage />;
      case "automation":
        return <AutomationGridPage />;
      case "ventures":
        return <VentureStudioPage />;
      case "positioning":
        return <PositioningPage />;
      case "capital":
        return <CapitalPage />;
      case "knowledge":
        return <KnowledgeBasePage />;
      case "approvals":
        return <ApprovalCenterPage />;
      case "operators":
        return <OperatorsPage />;
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <AppShell
      page={page}
      pages={pages}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      navigate={(nextPage) => {
        navigate(nextPage);
        setSidebarOpen(false);
      }}
    >
      {renderPage()}
    </AppShell>
  );
}
