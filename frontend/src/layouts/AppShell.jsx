import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AppShell({ page, pages, children, sidebarOpen, setSidebarOpen, navigate }) {
  const activePage = pages.find((item) => item.id === page) ?? pages[0];

  return (
    <div className="app-shell">
      <Sidebar items={pages} currentPage={page} onNavigate={navigate} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Topbar title={activePage.title} subtitle={activePage.subtitle} onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
