import { ok, badRequest } from "../utils/http.js";
import { listCollection, findRecord } from "../utils/memoryStore.js";

export function listApprovals(request, response) {
  return ok(response, { items: listCollection("approvalRequests") });
}

export function updateApproval(request, response) {
  const approval = findRecord("approvalRequests", request.params.id);

  if (!approval) {
    return response.status(404).json({ message: "Approval request not found" });
  }

  const { status, note } = request.body ?? {};
  if (!status || !["approved", "rejected", "changes_requested"].includes(status)) {
    return badRequest(response, "Status must be approved, rejected, or changes_requested");
  }

  approval.status = status;
  approval.reviewNote = note ?? null;
  approval.reviewedAt = new Date().toISOString();

  return ok(response, { item: approval });
}
