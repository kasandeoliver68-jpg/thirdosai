import { createId } from "../utils/id.js";
import { pushRecord } from "../utils/memoryStore.js";

export function createCompletionNotification(submission) {
  const notification = {
    id: createId(),
    title: "Pipeline completed",
    message: `${submission.title} was processed by ThirdSpace AI OS and queued for human approval where needed.`,
    type: "success",
    read: false,
    createdAt: new Date().toISOString(),
    submissionId: submission.id
  };

  pushRecord("notifications", notification);
  return notification;
}