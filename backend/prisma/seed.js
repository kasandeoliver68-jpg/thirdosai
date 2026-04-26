import { PrismaClient } from "@prisma/client";
import { createInitialState } from "../src/utils/seedData.js";

const prisma = new PrismaClient();

function serializeList(value) {
  return Array.isArray(value) ? JSON.stringify(value) : String(value ?? "");
}

function toDate(value) {
  return new Date(value);
}

async function main() {
  const data = createInitialState();

  await prisma.$transaction([
    prisma.notification.deleteMany(),
    prisma.workflowLog.deleteMany(),
    prisma.approvalRequest.deleteMany(),
    prisma.aIOperator.deleteMany(),
    prisma.report.deleteMany(),
    prisma.knowledgeItem.deleteMany(),
    prisma.automationStep.deleteMany(),
    prisma.automationRun.deleteMany(),
    prisma.investorMatch.deleteMany(),
    prisma.investorMandate.deleteMany(),
    prisma.investor.deleteMany(),
    prisma.positioningDocument.deleteMany(),
    prisma.validationReport.deleteMany(),
    prisma.businessModel.deleteMany(),
    prisma.venture.deleteMany(),
    prisma.intelligenceBrief.deleteMany(),
    prisma.signal.deleteMany(),
    prisma.submission.deleteMany(),
    prisma.user.deleteMany(),
    prisma.organization.deleteMany()
  ]);

  await prisma.organization.createMany({
    data: data.organizations.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.user.createMany({
    data: data.users.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.submission.createMany({
    data: data.submissions.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.updatedAt)
    }))
  });

  await prisma.signal.createMany({
    data: data.signals.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.intelligenceBrief.createMany({
    data: data.intelligenceBriefs.map((item) => ({
      ...item,
      keySignals: serializeList(item.keySignals),
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.venture.createMany({
    data: data.ventures.map((item) => ({
      ...item,
      revenueModel: data.businessModels.find((b) => b.ventureId === item.id)?.revenueModel ?? "",
      mvpPlan: serializeList(item.mvpPlan),
      riskMatrix: serializeList(item.riskMatrix),
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.businessModel.createMany({
    data: data.businessModels.map((item) => ({
      ...item,
      monetizationLevers: serializeList(item.monetizationLevers),
      costDrivers: serializeList(item.costDrivers),
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.validationReport.createMany({
    data: data.validationReports.map((item) => ({
      ...item,
      assumptions: serializeList(item.assumptions),
      validationPlan: serializeList(item.validationPlan),
      risks: serializeList(item.risks),
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.positioningDocument.createMany({
    data: data.positioningDocuments.map((item) => ({
      id: item.id,
      submissionId: item.submissionId,
      executiveSummary: item.executiveSummary,
      policyBrief: item.policyBrief,
      investmentMemo: item.investmentMemo,
      pitchDeckOutline: serializeList(item.pitchDeckOutline),
      marketPositioningStatement: item.marketPositioning ?? item.marketPositioningStatement,
      exportStatus: item.exportStatus ?? "Export placeholder enabled for PDF, deck, and memo outputs.",
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.investor.createMany({
    data: data.investors.map((item) => ({
      ...item,
      sectorFocus: serializeList(item.sectorFocus),
      geographyFocus: serializeList(item.geographyFocus),
      createdAt: toDate(item.createdAt ?? new Date().toISOString()),
      updatedAt: toDate(item.createdAt ?? new Date().toISOString())
    }))
  });

  await prisma.investorMandate.createMany({
    data: data.investorMandates.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt ?? new Date().toISOString()),
      updatedAt: toDate(item.createdAt ?? new Date().toISOString())
    }))
  });

  await prisma.investorMatch.createMany({
    data: data.investorMatches.map((item) => {
      const investor = data.investors.find((entry) => entry.id === item.investorId);
      const mandate = data.investorMandates.find((entry) => entry.investorId === item.investorId);

      return {
        id: item.id,
        ventureId: item.ventureId,
        investorId: item.investorId,
        matchScore: item.matchScore,
        mandateFit: item.mandateFit,
        investorFitNotes: investor?.notes ?? item.mandateFit,
        recommendedOutreachAngle: item.outreachAngle,
        capitalStructureSuggestion: item.capitalStructureSuggestion,
        ticketSizeMin: investor?.ticketSizeMin ?? mandate?.ticketSizeMin ?? 0,
        ticketSizeMax: investor?.ticketSizeMax ?? mandate?.ticketSizeMax ?? 0,
        geography: investor?.geographyFocus?.join(", ") ?? mandate?.geography ?? "",
        createdAt: toDate(item.createdAt),
        updatedAt: toDate(item.createdAt)
      };
    })
  });

  await prisma.automationRun.createMany({
    data: data.automationRuns.map((item) => ({
      ...item,
      startedAt: toDate(item.startedAt),
      completedAt: item.completedAt ? toDate(item.completedAt) : null,
      createdAt: toDate(item.startedAt),
      updatedAt: toDate(item.completedAt ?? item.startedAt)
    }))
  });

  await prisma.automationStep.createMany({
    data: data.automationSteps.map((item) => ({
      ...item,
      startedAt: toDate(item.startedAt),
      completedAt: item.completedAt ? toDate(item.completedAt) : null,
      createdAt: toDate(item.startedAt),
      updatedAt: toDate(item.completedAt ?? item.startedAt)
    }))
  });

  await prisma.knowledgeItem.createMany({
    data: data.knowledgeItems.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.report.createMany({
    data: data.reports.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.aIOperator.createMany({
    data: data.operators.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt ?? new Date().toISOString()),
      updatedAt: toDate(item.createdAt ?? new Date().toISOString())
    }))
  });

  await prisma.approvalRequest.createMany({
    data: data.approvalRequests.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt ?? new Date().toISOString()),
      updatedAt: toDate(item.createdAt ?? new Date().toISOString())
    }))
  });

  await prisma.workflowLog.createMany({
    data: data.workflowLogs.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  await prisma.notification.createMany({
    data: data.notifications.map((item) => ({
      ...item,
      createdAt: toDate(item.createdAt),
      updatedAt: toDate(item.createdAt)
    }))
  });

  console.log("Seeded ThirdSpace AI OS prototype data into SQLite.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
