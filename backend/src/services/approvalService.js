import { createId } from "../utils/id.js";
import { findRecord, pushRecord } from "../utils/memoryStore.js";

export function createApprovalRequests(venture, positioningDocument, investorMatches) {
  const requests = [
    {
      id: createId(),
      type: "send_investor_outreach_email",
      title: "Approve investor outreach email",
      description: `Send outreach to matched investors for ${venture.name}.`,
      status: "pending",
      riskLevel: "high",
      relatedEntityId: venture.id
    },
    {
      id: createId(),
      type: "publish_official_report",
      title: "Approve official report publishing",
      description: `Publish the generated positioning document for ${venture.name}.`,
      status: "pending",
      riskLevel: "high",
      relatedEntityId: positioningDocument.id
    }
  ];

  requests.forEach((request) => pushRecord("approvalRequests", request));
  return requests;
}

export function updateApprovalRequest(id, nextStatus) {
  const request = findRecord("approvalRequests", id);

  if (!request) {
    return null;
  }

  request.status = nextStatus;
  request.reviewedAt = new Date().toISOString();
  return request;
}