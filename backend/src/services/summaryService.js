import { store } from "../utils/memoryStore.js";

export function getDashboardSummary() {
  return {
    totalSubmissions: store.submissions.length,
    processedOpportunities: store.ventures.length,
    venturesGenerated: store.ventures.length,
    investorMatches: store.investorMatches.length,
    reportsCreated: store.reports.length,
    awaitingApproval: store.approvalRequests.filter((item) => item.status === "pending").length
  };
}
