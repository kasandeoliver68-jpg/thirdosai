import { randomUUID } from "node:crypto";

const sampleSubmissionText =
  "Uganda Ministry of Energy has announced a renewable energy mini-grid PPP opportunity targeting rural electrification with donor support.";

function timestamp(minutesAgo) {
  return new Date(Date.now() - minutesAgo * 60 * 1000).toISOString();
}

function createAutomationSteps() {
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

  return stages.map((stage, index) => ({
    id: randomUUID(),
    stage,
    status: index < stages.length - 1 ? "completed" : "approval-required",
    startedAt: timestamp(90 - index * 6),
    completedAt: index < stages.length - 1 ? timestamp(84 - index * 6) : null,
    operator: ["Intake Router", "Classification Agent", "Policy Analyst", "Venture Architect", "Deal Structurer"][index % 5],
    note:
      stage === "Awaiting Human Approval"
        ? "High-risk actions queued for human review."
        : `Prototype automation finished ${stage.toLowerCase()}.`
  }));
}

export function createInitialState() {
  const userId = randomUUID();
  const organizationId = randomUUID();
  const submissionId = randomUUID();
  const signalId = randomUUID();
  const intelligenceBriefId = randomUUID();
  const ventureId = randomUUID();
  const validationReportId = randomUUID();
  const positioningDocumentId = randomUUID();
  const reportId = randomUUID();
  const automationRunId = randomUUID();

  const investorAlphaId = randomUUID();
  const investorBetaId = randomUUID();
  const investorGammaId = randomUUID();
  const investorDeltaId = randomUUID();

  const investors = [
    {
      id: investorAlphaId,
      name: "Helios Impact Capital",
      sectorFocus: ["Renewable Energy", "Infrastructure"],
      geographyFocus: ["East Africa", "Uganda", "Kenya"],
      ticketSizeMin: 250000,
      ticketSizeMax: 2000000,
      riskProfile: "Growth",
      notes: "Looks for blended-finance opportunities with policy tailwinds."
    },
    {
      id: investorBetaId,
      name: "Amani Frontier Partners",
      sectorFocus: ["Climate", "Energy Access", "Fintech"],
      geographyFocus: ["Africa"],
      ticketSizeMin: 100000,
      ticketSizeMax: 750000,
      riskProfile: "Catalytic",
      notes: "Prefers pilot-ready ventures with donor support and measurable impact."
    },
    {
      id: investorGammaId,
      name: "Kijiji Energy Fund",
      sectorFocus: ["Mini-grids", "Distributed Energy"],
      geographyFocus: ["Uganda", "Tanzania", "Rwanda"],
      ticketSizeMin: 500000,
      ticketSizeMax: 3500000,
      riskProfile: "Infrastructure",
      notes: "Finances rural electrification platforms and PPP structures."
    },
    {
      id: investorDeltaId,
      name: "Savannah Public-Private Growth",
      sectorFocus: ["PPP", "Energy", "Public Services"],
      geographyFocus: ["East Africa", "Africa"],
      ticketSizeMin: 300000,
      ticketSizeMax: 1500000,
      riskProfile: "Balanced",
      notes: "Targets public-private contracts with clear concession logic."
    }
  ];

  const investorMandates = investors.map((investor) => ({
    id: randomUUID(),
    investorId: investor.id,
    sector: investor.sectorFocus[0],
    geography: investor.geographyFocus[0],
    ticketSizeMin: investor.ticketSizeMin,
    ticketSizeMax: investor.ticketSizeMax,
    riskProfile: investor.riskProfile,
    capitalStructurePreference: investor.riskProfile === "Infrastructure" ? "PPP" : "Equity + Grant Blend",
    thesis: investor.notes
  }));

  const submission = {
    id: submissionId,
    userId,
    organizationId,
    title: "Uganda renewable energy mini-grid PPP",
    inputType: "policy document",
    sourceType: "government announcement",
    sector: "Renewable Energy",
    geography: "Uganda / East Africa",
    urgency: "high",
    opportunityType: "PPP / donor-backed infrastructure",
    description: sampleSubmissionText,
    rawContent: sampleSubmissionText,
    status: "completed",
    createdAt: timestamp(95),
    updatedAt: timestamp(5)
  };

  const signal = {
    id: signalId,
    submissionId,
    classification: "Policy + Infrastructure Opportunity",
    inputType: "policy document",
    sourceType: "government announcement",
    sector: "Renewable Energy",
    geography: "Uganda / East Africa",
    urgency: "high",
    opportunityType: "PPP / donor-backed infrastructure",
    confidence: 0.94,
    status: "captured",
    createdAt: timestamp(92)
  };

  const intelligenceBrief = {
    id: intelligenceBriefId,
    submissionId,
    strategicSummary:
      "A donor-supported rural electrification PPP creates a narrow but actionable window to structure a mini-grid venture around concessional capital, local deployment partners, and government alignment.",
    opportunityGap:
      "There is an implementation gap between policy intent and field deployment, especially in last-mile asset financing, community onboarding, and revenue collection infrastructure.",
    policyRelevance:
      "High. The opportunity sits directly inside energy access policy, rural development priorities, and public-private infrastructure execution.",
    riskAnalysis:
      "Execution risk is moderate to high due to regulatory approvals, site acquisition, demand uncertainty, and tariff sensitivity. Political and donor timing risks are material.",
    opportunityScore: 91,
    recommendedVentureAngle:
      "Create a mini-grid platform that packages site acquisition, concession structuring, community billing, and donor-linked capital into a repeatable deployment model.",
    keySignals: ["PPP", "Donor support", "Rural electrification", "Mini-grid", "Uganda"],
    createdAt: timestamp(91)
  };

  const businessModel = {
    id: randomUUID(),
    ventureId,
    revenueModel: "Hybrid concession fee + energy sales + maintenance contract",
    monetizationLevers: ["Connection fees", "Metered electricity sales", "Operations and maintenance retainers", "PPP advisory fees"],
    costDrivers: ["Hardware deployment", "Local permitting", "Field operations", "Customer acquisition"],
    unitEconomicsAssumptions:
      "Assume $450-$650 average connection cost, 65%-75% gross margin on energy sales after stabilization, and payback within 24-36 months under donor support.",
    createdAt: timestamp(80)
  };

  const venture = {
    id: ventureId,
    submissionId,
    name: "ThirdSpace Rural Grid",
    problemStatement:
      "Rural communities need reliable electrification, but projects fail when capital, policy, and deployment partners are not orchestrated together.",
    solution:
      "A deployment platform that structures mini-grid PPPs, bundles donor support, and coordinates technical delivery, billing, and local operator management.",
    targetMarket: "Off-grid and under-electrified rural districts in Uganda and neighboring East African markets.",
    mvpPlan:
      "Pilot one concession site, validate customer demand, install metering and billing workflows, and secure a local implementation partner and donor anchor.",
    validationPlan:
      "Validate site economics, community willingness to pay, regulatory readiness, and partner capacity before scaling to a multi-site portfolio.",
    riskMatrix: [
      { risk: "Regulatory delay", severity: "High", mitigation: "Pre-clear with ministry and local authority stakeholders." },
      { risk: "Demand shortfall", severity: "Medium", mitigation: "Pre-subscribe anchor customers and anchor loads." },
      { risk: "Equipment logistics", severity: "Medium", mitigation: "Use local deployment partners and spare inventory." }
    ],
    status: "generated",
    createdAt: timestamp(78)
  };

  const validationReport = {
    id: validationReportId,
    ventureId,
    assumptions: [
      "Donor support lowers early capital burden.",
      "Tariff design remains within public policy tolerance.",
      "At least one implementation partner has field reach.",
      "Rural demand can be validated through anchor clients."
    ],
    validationPlan: [
      "Map eligible sites.",
      "Run willingness-to-pay interviews.",
      "Test collection model with a pilot cohort.",
      "Model capex and opex sensitivity across deployment scenarios."
    ],
    risks: [
      "Policy volatility",
      "Revenue collection risk",
      "Asset vandalism",
      "Permitting delay"
    ],
    unitEconomicsAssumptions:
      "Prototype economics assume phased capex release, donor-linked grant tranching, and a blended revenue stack from electricity sales and service fees.",
    createdAt: timestamp(76)
  };

  const positioningDocument = {
    id: positioningDocumentId,
    submissionId,
    executiveSummary:
      "ThirdSpace AI OS identified a donor-backed mini-grid PPP in Uganda and converted it into a venture-ready infrastructure thesis with capital pathways and risk controls.",
    policyBrief:
      "This opportunity supports rural electrification, distributed generation, and public-private delivery acceleration. The policy case is strongest where concession terms and community outcomes align.",
    investmentMemo:
      "The deal offers catalytic upside with blended capital, moderate execution risk, and a clear policy anchor. Investors should prioritize structuring support and milestone-linked capital deployment.",
    pitchDeckOutline: [
      "Problem and policy context",
      "Why now",
      "Solution architecture",
      "Market opportunity",
      "Business model",
      "Deployment roadmap",
      "Risk mitigation",
      "Capital ask"
    ],
    marketPositioning:
      "A policy-native infrastructure venture platform for East African energy access opportunities.",
    createdAt: timestamp(74)
  };

  const reports = [
    {
      id: reportId,
      submissionId,
      type: "investment_memo",
      title: "Uganda Mini-Grid PPP Opportunity Memo",
      summary:
        "Synthetic investment memo summarizing the opportunity, venture thesis, capital fit, and approval requirements.",
      createdAt: timestamp(73)
    }
  ];

  const investorMatches = investors.map((investor, index) => ({
    id: randomUUID(),
    ventureId,
    investorId: investor.id,
    investorName: investor.name,
    matchScore: [96, 89, 94, 91][index],
    mandateFit:
      index === 0
        ? "Strong fit on climate infrastructure and blended capital."
        : index === 1
          ? "Good fit for catalytic deployment capital and donor alignment."
          : index === 2
            ? "Excellent fit for mini-grid infrastructure and Uganda geography."
            : "Strong fit for PPP structuring and East Africa mandate.",
    outreachAngle:
      index === 0
        ? "Lead with donor-supported infrastructure and policy tailwind."
        : index === 1
          ? "Lead with catalytic pilot and measurable rural access impact."
          : index === 2
            ? "Lead with rural mini-grid concession and deployment-ready pipeline."
            : "Lead with public-private structuring and revenue-linked concession design.",
    capitalStructureSuggestion: index === 2 ? "PPP equity + grant support" : "Convertible equity + grant blend",
    createdAt: timestamp(72 - index)
  }));

  const approvalRequests = [
    {
      id: randomUUID(),
      type: "send_investor_outreach_email",
      title: "Approve investor outreach email",
      description: "High-risk outbound communication to investor contacts for the generated venture.",
      status: "pending",
      riskLevel: "high",
      createdAt: timestamp(70)
    },
    {
      id: randomUUID(),
      type: "publish_official_report",
      title: "Approve official report publishing",
      description: "Release the positioning document as an external report.",
      status: "pending",
      riskLevel: "high",
      createdAt: timestamp(69)
    }
  ];

  const notifications = [
    {
      id: randomUUID(),
      title: "Pipeline completed",
      message: "ThirdSpace AI OS processed the Uganda mini-grid PPP submission and queued approval actions.",
      type: "success",
      read: false,
      createdAt: timestamp(68)
    }
  ];

  const workflowLogs = createAutomationSteps().map((step) => ({
    id: randomUUID(),
    automationRunId,
    message: step.note,
    level: step.status === "approval-required" ? "warn" : "info",
    createdAt: step.startedAt,
    operator: step.operator,
    stage: step.stage
  }));

  const knowledgeItems = [
    {
      id: randomUUID(),
      type: "submission",
      refId: submission.id,
      title: submission.title,
      sector: submission.sector,
      geography: submission.geography,
      status: submission.status,
      searchableText: `${submission.title} ${submission.description}`,
      createdAt: submission.createdAt
    },
    {
      id: randomUUID(),
      type: "signal",
      refId: signal.id,
      title: signal.classification,
      sector: signal.sector,
      geography: signal.geography,
      status: signal.status,
      searchableText: `${signal.classification} ${signal.sector} ${signal.geography}`,
      createdAt: signal.createdAt
    },
    {
      id: randomUUID(),
      type: "venture",
      refId: venture.id,
      title: venture.name,
      sector: submission.sector,
      geography: submission.geography,
      status: venture.status,
      searchableText: `${venture.name} ${venture.problemStatement} ${venture.solution}`,
      createdAt: venture.createdAt
    },
    {
      id: randomUUID(),
      type: "investor",
      refId: investorAlphaId,
      title: investors[0].name,
      sector: investors[0].sectorFocus[0],
      geography: investors[0].geographyFocus[0],
      status: "matched",
      searchableText: `${investors[0].name} ${investors[0].notes}`,
      createdAt: timestamp(71)
    },
    {
      id: randomUUID(),
      type: "workflow_log",
      refId: automationRunId,
      title: "Awaiting Human Approval",
      sector: submission.sector,
      geography: submission.geography,
      status: "logged",
      searchableText: "Queued approval requests for external actions.",
      createdAt: timestamp(70)
    }
  ];

  const operators = [
    {
      id: randomUUID(),
      name: "Policy Analyst",
      mandate: "Decode policy, donor, and public-sector inputs into actionable briefs.",
      inputType: "tenders, donor calls, policy documents, budgets",
      outputType: "policy briefs, risk notes, opportunity summaries",
      recentActivity: "Produced the Uganda mini-grid policy brief.",
      status: "active"
    },
    {
      id: randomUUID(),
      name: "Venture Architect",
      mandate: "Turn opportunities into venture concepts, MVP plans, and validation frames.",
      inputType: "market opportunities, policy signals, investor mandates",
      outputType: "venture concepts, MVP plans, revenue models",
      recentActivity: "Generated ThirdSpace Rural Grid.",
      status: "active"
    },
    {
      id: randomUUID(),
      name: "Deal Structurer",
      mandate: "Design PPP, blended finance, and capital matching structures.",
      inputType: "capital mandates, venture profiles, risk matrices",
      outputType: "capital structures, outreach angles, investor-fit notes",
      recentActivity: "Matched the venture against four investor mandates.",
      status: "active"
    }
  ];

  return {
    users: [
      {
        id: userId,
        email: "demo@thirdspace.ai",
        name: "Demo Operator",
        passwordHash: "demo-password",
        role: "admin",
        organizationId,
        createdAt: timestamp(120)
      }
    ],
    organizations: [
      {
        id: organizationId,
        name: "ThirdSpace Intelligence Lab",
        sector: "Institutional Intelligence",
        geography: "Global / Africa",
        approvalMode: "human_required_for_high_risk",
        createdAt: timestamp(120)
      }
    ],
    submissions: [submission],
    signals: [signal],
    intelligenceBriefs: [intelligenceBrief],
    ventures: [venture],
    businessModels: [businessModel],
    validationReports: [validationReport],
    positioningDocuments: [positioningDocument],
    investors,
    investorMandates,
    investorMatches,
    automationRuns: [
      {
        id: automationRunId,
        submissionId,
        status: "completed",
        currentStage: "Completed",
        progress: 100,
        startedAt: timestamp(90),
        completedAt: timestamp(65),
        summary: "Autonomous pipeline completed with approval requests queued."
      }
    ],
    automationSteps: createAutomationSteps().map((step) => ({
      ...step,
      automationRunId
    })),
    knowledgeItems,
    reports,
    operators,
    approvalRequests,
    workflowLogs,
    notifications,
    sampleSubmissionText
  };
}
