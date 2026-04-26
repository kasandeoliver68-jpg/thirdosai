export const osLayers = [
  {
    title: "Signal Capture",
    description: "Receives submissions, classifies source type, sector, geography, urgency, and opportunity type."
  },
  {
    title: "Intelligence Engine",
    description: "Turns signals into strategy, opportunity scoring, gap detection, and risk analysis."
  },
  {
    title: "Knowledge Base",
    description: "Stores submissions, signals, ventures, approvals, reports, and workflow logs in searchable form."
  },
  {
    title: "Automation Grid",
    description: "Runs the workflow, tracks status, and exposes approval gates for high-risk actions."
  },
  {
    title: "Positioning Engine",
    description: "Produces executive summaries, policy briefs, memos, and pitch outlines."
  },
  {
    title: "Venture Studio",
    description: "Generates venture concepts, MVP plans, revenue models, validation plans, and risk matrices."
  },
  {
    title: "Capital Engine",
    description: "Matches ventures to investor mandates, ticket sizes, geography, and risk profiles."
  }
];

export const workflowStages = [
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

export const inputTypes = [
  "tender document",
  "donor funding call",
  "policy document",
  "public budget",
  "market opportunity",
  "startup idea",
  "investor mandate",
  "business proposal",
  "sector report",
  "pasted text",
  "uploaded file placeholder",
  "URL placeholder"
];

export const sources = [
  "Government",
  "Donor",
  "Investor",
  "Founder",
  "Research",
  "Uploaded file placeholder",
  "URL placeholder"
];

export const sampleSubmission = {
  title: "Uganda Ministry of Energy mini-grid PPP",
  inputType: "policy document",
  source: "Government announcement",
  sector: "Renewable Energy",
  geography: "Uganda / East Africa",
  description:
    "Uganda Ministry of Energy has announced a renewable energy mini-grid PPP opportunity targeting rural electrification with donor support.",
  content:
    "Uganda Ministry of Energy has announced a renewable energy mini-grid PPP opportunity targeting rural electrification with donor support."
};

export const dashboardMetrics = [
  { label: "Total Submissions", value: 128, delta: "+12 this week" },
  { label: "Processed Opportunities", value: 84, delta: "+8 this week" },
  { label: "Ventures Generated", value: 31, delta: "+4 this week" },
  { label: "Investor Matches", value: 57, delta: "+11 this week" },
  { label: "Reports Created", value: 22, delta: "+6 this week" },
  { label: "Awaiting Approval", value: 7, delta: "Human review required" }
];

export const sectorChartData = [
  { name: "Renewable Energy", value: 38 },
  { name: "Policy", value: 21 },
  { name: "Fintech", value: 16 },
  { name: "Health", value: 12 },
  { name: "Agriculture", value: 9 },
  { name: "Other", value: 4 }
];

export const pipelineChartData = [
  { name: "Received", count: 128 },
  { name: "Classified", count: 109 },
  { name: "Venture", count: 31 },
  { name: "Capital", count: 57 },
  { name: "Approval", count: 7 },
  { name: "Completed", count: 84 }
];

export const investorScoreData = [
  { name: "Helios", score: 96 },
  { name: "Amani", score: 89 },
  { name: "Kijiji", score: 94 },
  { name: "Savannah", score: 91 }
];

export const recentActivity = [
  {
    stage: "Signal Capture",
    message: "Captured Uganda mini-grid PPP from policy document.",
    operator: "Classification Agent",
    time: "2m ago"
  },
  {
    stage: "Intelligence Engine",
    message: "Scored opportunity at 91 and flagged high policy relevance.",
    operator: "Policy Analyst",
    time: "4m ago"
  },
  {
    stage: "Capital Engine",
    message: "Matched four investor mandates and queued approval requests.",
    operator: "Deal Structurer",
    time: "6m ago"
  }
];

export const signalRows = [
  {
    id: "SIG-001",
    classification: "Policy + Infrastructure Opportunity",
    sector: "Renewable Energy",
    geography: "Uganda / East Africa",
    urgency: "High",
    status: "Captured"
  },
  {
    id: "SIG-002",
    classification: "Donor-backed market gap",
    sector: "Health",
    geography: "Kenya / East Africa",
    urgency: "Medium",
    status: "Captured"
  },
  {
    id: "SIG-003",
    classification: "Investor mandate / climate capital",
    sector: "Climate",
    geography: "Africa",
    urgency: "High",
    status: "Captured"
  }
];

export const intelligenceBrief = {
  strategicSummary:
    "A donor-supported rural electrification PPP creates a narrow but actionable window to structure a mini-grid venture around concessional capital, local deployment partners, and government alignment.",
  opportunityGap:
    "The gap is not policy intent but delivery: field operations, last-mile financing, tariff design, and partner coordination remain under-structured.",
  policyRelevance:
    "High. The opportunity sits directly inside energy access policy, rural development priorities, and public-private infrastructure execution.",
  riskAnalysis:
    "Execution risk is moderate to high due to regulatory approvals, site acquisition, demand uncertainty, and tariff sensitivity. Political and donor timing risks are material.",
  opportunityScore: 91,
  recommendedVentureAngle:
    "Create a mini-grid platform that packages site acquisition, concession structuring, community billing, and donor-linked capital into a repeatable deployment model."
};

export const automationKanban = {
  Received: ["Uganda mini-grid PPP"],
  Classifying: ["Energy access calls"],
  Synthesizing: ["Policy relevance scoring"],
  Validating: ["Pilot assumptions"],
  Positioning: ["Executive memo drafts"],
  "Matching Capital": ["Investor shortlist"],
  "Awaiting Approval": ["Investor outreach email", "Official report publishing"],
  Completed: ["Pipeline completed"]
};

export const ventureProfile = {
  name: "ThirdSpace Rural Grid",
  problemStatement:
    "Rural communities need reliable electrification, but projects fail when capital, policy, and deployment partners are not orchestrated together.",
  solution:
    "A deployment platform that structures mini-grid PPPs, bundles donor support, and coordinates technical delivery, billing, and local operator management.",
  targetMarket: "Off-grid and under-electrified rural districts in Uganda and neighboring East African markets.",
  mvpPlan: [
    "Select one pilot concession site",
    "Run community demand validation",
    "Secure a local implementation partner",
    "Map capex and donor contribution",
    "Deploy a metered pilot and measure collection"
  ],
  revenueModel: "Hybrid model: energy sales, concession services, deployment fees, and maintenance contracts.",
  validationPlan:
    "Validate site economics, willingness to pay, tariff tolerance, and local operating partner capacity before scaling.",
  riskMatrix: [
    { risk: "Regulatory delay", severity: "High", mitigation: "Pre-clear with public stakeholders." },
    { risk: "Demand shortfall", severity: "Medium", mitigation: "Test anchor-user demand and pre-commitments." },
    { risk: "Capital structure mismatch", severity: "Medium", mitigation: "Align with donor, investor, and PPP mandates early." }
  ]
};

export const positioningPackage = {
  executiveSummary:
    "ThirdSpace AI OS converted a donor-backed rural mini-grid PPP into a venture-ready deployment thesis with a clear policy case and investor pathway.",
  policyBrief:
    "The policy logic is strong: the opportunity supports public objectives, but requires structured execution, governance, and milestone control.",
  investmentMemo:
    "Investment case: 91/100 score, clear deployment wedge, and an attractive blended-capital story with high strategic relevance.",
  pitchDeckOutline: [
    "Problem and policy context",
    "Why now",
    "Opportunity signal",
    "Solution and operating model",
    "Market and geography",
    "Revenue and unit economics",
    "Validation plan",
    "Capital ask and next step"
  ]
};

export const investorCards = [
  {
    name: "Helios Impact Capital",
    score: 96,
    mandateFit: "Strong fit on climate infrastructure and blended capital.",
    ticketSize: "$250k - $2M",
    geography: "East Africa",
    outreachAngle: "Lead with donor-supported infrastructure and policy tailwind."
  },
  {
    name: "Amani Frontier Partners",
    score: 89,
    mandateFit: "Good fit for catalytic deployment capital and donor alignment.",
    ticketSize: "$100k - $750k",
    geography: "Africa",
    outreachAngle: "Lead with catalytic pilot and measurable rural access impact."
  },
  {
    name: "Kijiji Energy Fund",
    score: 94,
    mandateFit: "Excellent fit for mini-grid infrastructure and Uganda geography.",
    ticketSize: "$500k - $3.5M",
    geography: "Uganda, Tanzania, Rwanda",
    outreachAngle: "Lead with rural mini-grid concession and deployment-ready pipeline."
  },
  {
    name: "Savannah Public-Private Growth",
    score: 91,
    mandateFit: "Strong fit for PPP structuring and East Africa mandate.",
    ticketSize: "$300k - $1.5M",
    geography: "East Africa",
    outreachAngle: "Lead with public-private structuring and revenue-linked concession design."
  }
];

export const knowledgeItems = [
  { type: "submission", title: "Uganda mini-grid PPP", sector: "Renewable Energy", geography: "Uganda / East Africa", status: "Completed" },
  { type: "signal", title: "Policy + Infrastructure Opportunity", sector: "Renewable Energy", geography: "Uganda / East Africa", status: "Captured" },
  { type: "venture", title: "ThirdSpace Rural Grid", sector: "Renewable Energy", geography: "Uganda / East Africa", status: "Generated" },
  { type: "report", title: "Uganda Mini-Grid PPP Opportunity Memo", sector: "Renewable Energy", geography: "Uganda / East Africa", status: "Ready" },
  { type: "investor", title: "Helios Impact Capital", sector: "Infrastructure", geography: "East Africa", status: "Matched" },
  { type: "workflow_log", title: "Awaiting Human Approval", sector: "Operations", geography: "Global", status: "Logged" }
];

export const approvalRequests = [
  {
    title: "Approve investor outreach email",
    description: "High-risk outbound communication to investor contacts for the generated venture.",
    status: "Pending"
  },
  {
    title: "Approve official report publishing",
    description: "Release the positioning document as an external report.",
    status: "Pending"
  },
  {
    title: "Approve partnership proposal",
    description: "Authorize a high-stakes external partnership commitment.",
    status: "Pending"
  }
];

export const aiOperators = [
  {
    name: "Policy Analyst",
    mandate: "Decode policy, donor, and public-sector inputs into actionable briefs.",
    inputType: "tenders, donor calls, policy documents, budgets",
    outputType: "policy briefs, risk notes, opportunity summaries",
    recentActivity: "Produced the Uganda mini-grid policy brief."
  },
  {
    name: "Venture Architect",
    mandate: "Turn opportunities into venture concepts, MVP plans, and validation frames.",
    inputType: "market opportunities, policy signals, investor mandates",
    outputType: "venture concepts, MVP plans, revenue models",
    recentActivity: "Generated ThirdSpace Rural Grid."
  },
  {
    name: "Deal Structurer",
    mandate: "Design PPP, blended finance, and capital matching structures.",
    inputType: "capital mandates, venture profiles, risk matrices",
    outputType: "capital structures, outreach angles, investor-fit notes",
    recentActivity: "Matched the venture against four investor mandates."
  }
];

export const reports = [
  {
    title: "Uganda Mini-Grid PPP Opportunity Memo",
    summary:
      "Synthetic investment memo summarizing the opportunity, venture thesis, capital fit, and approval requirements.",
    status: "Ready for review"
  },
  {
    title: "Policy Brief",
    summary: "Generated policy brief for the East Africa renewable energy opportunity.",
    status: "Draft"
  }
];

export const settings = {
  organization: {
    name: "ThirdSpace Intelligence Lab",
    sector: "Institutional Intelligence",
    geography: "Global / Africa",
    approvalMode: "Human approval required for high-risk actions"
  },
  automationRules: [
    "Classify all submissions automatically",
    "Generate venture concepts for high-scoring opportunities",
    "Queue human approval before investor outreach",
    "Never move money, sign contracts, or publish official reports without approval"
  ]
};

export const processingStages = [
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

export const liveOperatorFeed = [
  {
    operator: "Intake Router",
    text: "Submission received and queued for autonomous processing.",
    tone: "info"
  },
  {
    operator: "Classification Agent",
    text: "Detected policy document, Renewable Energy, Uganda / East Africa.",
    tone: "info"
  },
  {
    operator: "Policy Analyst",
    text: "Generated policy brief and opportunity gap analysis.",
    tone: "info"
  },
  {
    operator: "Venture Architect",
    text: "Created a venture concept and MVP validation plan.",
    tone: "info"
  },
  {
    operator: "Deal Structurer",
    text: "Queued investor outreach and official publishing for approval.",
    tone: "warn"
  }
];
