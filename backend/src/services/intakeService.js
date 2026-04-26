import { createId } from "../utils/id.js";
import { pushRecord } from "../utils/memoryStore.js";
import { runPipeline } from "./pipelineOrchestrator.js";

export async function receiveIntake(input) {
  const submission = {
    id: createId(),
    userId: input.userId ?? null,
    organizationId: input.organizationId ?? null,
    title: input.title,
    inputType: input.inputType,
    source: input.source,
    sourceType: input.source,
    sector: input.sector ?? null,
    geography: input.geography ?? null,
    description: input.description ?? "",
    rawContent: input.content ?? input.description ?? input.title,
    status: "received",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  pushRecord("submissions", submission);
  const result = await runPipeline(submission);

  const completedSubmission = {
    ...submission,
    status: "completed",
    updatedAt: new Date().toISOString()
  };

  return {
    submission: completedSubmission,
    ...result
  };
}