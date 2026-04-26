import { classifySubmission } from "./classificationService.js";
import { analyzeIntelligence } from "./intelligenceService.js";
import { generateVentureConcept } from "./ventureStudioService.js";
import { generateValidationReport } from "./validationService.js";
import { generatePositioningDocument } from "./positioningService.js";
import { matchInvestors } from "./capitalMatchingService.js";
import { createApprovalRequests } from "./approvalService.js";
import { createCompletionNotification } from "./notificationService.js";
import { indexKnowledgeItems } from "./knowledgeBaseService.js";
import { store, pushRecord } from "../utils/memoryStore.js";
import { createId } from "../utils/id.js";

const stages = [
  "Received",
  "Classifying",
  "Signal Captured",
  "Intelligence Running",
  "Synthesized",
  "Venture Generated",
  "Validation Complete",
  "Positioning Generated",
  "Capital Matching Complete",
  "Stored in Knowledge Base",
  "Awaiting Human Approval",
  "Completed"
];

export async function runPipeline(submission) {
  const automationRunId = createId();
  const startedAt = new Date().toISOString();
  const logs = [];
  const steps = [];

  function addLog(stage, message, level = "info", operator = "System") {
    const createdAt = new Date().toISOString();
    const log = {
      id: createId(),
      automationRunId,
      stage,
      message,
      level,
      operator,
      createdAt
    };

    logs.push(log);
    pushRecord("workflowLogs", log);
    return log;
  }

  addLog("Received", `Submission received: ${submission.title}`);

  const profile = classifySubmission(submission);
  addLog("Classifying", `Classified as ${profile.classification}`, "info", "Classification Agent");

  const signal = {
    id: createId(),
    submissionId: submission.id,
    classification: profile.classification,
    inputType: profile.inputType,
    sourceType: profile.sourceType,
    sector: profile.sector,
    geography: profile.geography,
    urgency: profile.urgency,
    opportunityType: profile.opportunityType,
    confidence: profile.confidence,
    status: "captured",
    createdAt: new Date().toISOString()
  };
  pushRecord("signals", signal);
  addLog("Signal Captured", "Captured signal metadata and stored it.", "info", "Signal Capture Agent");

  const intelligence = await analyzeIntelligence(profile, submission.rawContent ?? submission.description ?? submission.title);
  const intelligenceBrief = {
    id: createId(),
    submissionId: submission.id,
    ...intelligence,
    keySignals: profile.signals,
    createdAt: new Date().toISOString()
  };
  pushRecord("intelligenceBriefs", intelligenceBrief);
  addLog("Intelligence Running", "Strategic analysis completed.", "info", "Policy Analyst");

  const venture = generateVentureConcept(profile, intelligenceBrief);
  const ventureRecord = {
    id: createId(),
    submissionId: submission.id,
    name: venture.name,
    problemStatement: venture.problemStatement,
    solution: venture.solution,
    targetMarket: venture.targetMarket,
    mvpPlan: venture.mvpPlan,
    revenueModel: venture.revenueModel,
    validationPlan: venture.validationPlan,
    riskMatrix: venture.riskMatrix,
    status: "generated",
    createdAt: new Date().toISOString()
  };
  pushRecord("ventures", ventureRecord);
  addLog("Venture Generated", `Generated venture concept ${ventureRecord.name}.`, "info", "Venture Architect");

  const businessModel = {
    id: createId(),
    ventureId: ventureRecord.id,
    revenueModel: venture.revenueModel,
    monetizationLevers: ["service fees", "transaction fees", "deployment retainers"],
    costDrivers: ["delivery", "operations", "customer acquisition"],
    unitEconomicsAssumptions: "Prototype assumptions only; refine after validation.",
    createdAt: new Date().toISOString()
  };
  pushRecord("businessModels", businessModel);

  const validation = generateValidationReport(profile, venture);
  const validationReport = {
    id: createId(),
    ventureId: ventureRecord.id,
    ...validation,
    createdAt: new Date().toISOString()
  };
  pushRecord("validationReports", validationReport);
  addLog("Validation Complete", "Validation assumptions and risks prepared.", "info", "Venture Architect");

  const positioning = generatePositioningDocument(profile, intelligenceBrief, ventureRecord, validationReport);
  const positioningDocument = {
    id: createId(),
    submissionId: submission.id,
    ...positioning,
    createdAt: new Date().toISOString()
  };
  pushRecord("positioningDocuments", positioningDocument);
  addLog("Positioning Generated", "Prepared executive summary, policy brief, and memo.", "info", "Policy Analyst");

  const investorMatches = matchInvestors(profile, ventureRecord, store.investors, store.investorMandates).map((match) => ({
    id: createId(),
    ventureId: ventureRecord.id,
    ...match
  }));
  investorMatches.forEach((match) => pushRecord("investorMatches", match));
  addLog("Capital Matching Complete", "Matched investors to the generated venture.", "info", "Deal Structurer");

  const knowledgeItems = indexKnowledgeItems([
    {
      type: "submission",
      refId: submission.id,
      title: submission.title,
      sector: profile.sector,
      geography: profile.geography,
      status: submission.status,
      searchableText: `${submission.title} ${submission.description}`
    },
    {
      type: "signal",
      refId: signal.id,
      title: signal.classification,
      sector: profile.sector,
      geography: profile.geography,
      status: signal.status,
      searchableText: `${signal.classification} ${signal.sector} ${signal.geography}`
    },
    {
      type: "venture",
      refId: ventureRecord.id,
      title: ventureRecord.name,
      sector: profile.sector,
      geography: profile.geography,
      status: ventureRecord.status,
      searchableText: `${ventureRecord.name} ${ventureRecord.problemStatement}`
    },
    {
      type: "positioning_document",
      refId: positioningDocument.id,
      title: "Positioning Package",
      sector: profile.sector,
      geography: profile.geography,
      status: "completed",
      searchableText: `${positioningDocument.executiveSummary} ${positioningDocument.policyBrief}`
    }
  ]);

  const report = {
    id: createId(),
    submissionId: submission.id,
    type: "positioning_package",
    title: `${ventureRecord.name} Positioning Package`,
    summary: positioningDocument.executiveSummary,
    createdAt: new Date().toISOString()
  };
  pushRecord("reports", report);

  const approvalRequests = createApprovalRequests(ventureRecord, positioningDocument, investorMatches);
  const notification = createCompletionNotification(submission);
  const automationSteps = stages.map((stage, index) => ({
    id: createId(),
    automationRunId,
    stage,
    status: stage === "Awaiting Human Approval" ? "approval-required" : "completed",
    startedAt: new Date(Date.now() - (stages.length - index) * 2 * 60 * 1000).toISOString(),
    completedAt: stage === "Awaiting Human Approval" ? null : new Date(Date.now() - (stages.length - index) * 2 * 60 * 1000 + 30000).toISOString(),
    operator:
      stage === "Classifying"
        ? "Classification Agent"
        : stage === "Intelligence Running"
          ? "Policy Analyst"
          : stage === "Venture Generated"
            ? "Venture Architect"
            : stage === "Capital Matching Complete"
              ? "Deal Structurer"
              : "System",
    note:
      stage === "Awaiting Human Approval"
        ? "Human approval required before external commitments are made."
        : `Completed ${stage.toLowerCase()} stage.`
  }));

  automationSteps.forEach((step) => pushRecord("automationSteps", step));

  const automationRun = {
    id: automationRunId,
    submissionId: submission.id,
    status: "completed",
    currentStage: "Completed",
    progress: 100,
    startedAt,
    completedAt: new Date().toISOString(),
    summary: "Autonomous workflow completed to the approval gate.",
    notificationId: notification.id
  };
  pushRecord("automationRuns", automationRun);
  addLog("Awaiting Human Approval", "Queued approval requests for external actions.", "warn", "System");
  addLog("Completed", "Autonomous processing finished and artifacts stored.", "info", "System");

  return {
    submission,
    signal,
    intelligenceBrief,
    venture: ventureRecord,
    businessModel,
    validationReport,
    positioningDocument,
    investorMatches,
    knowledgeItems,
    approvalRequests,
    notification,
    automationRun,
    automationSteps,
    logs,
    profile
  };
}