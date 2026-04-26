export function generatePositioningDocument(profile, intelligence, venture, validationReport) {
  return {
    executiveSummary:
      profile.sector === "Renewable Energy"
        ? "ThirdSpace AI OS converted a donor-backed rural mini-grid PPP into a venture-ready deployment thesis with a clear policy case and investor pathway."
        : `ThirdSpace AI OS converted the ${profile.sector.toLowerCase()} opportunity into a venture-ready position with execution logic and capital alignment.`,
    policyBrief:
      profile.sourceType.includes("government") || profile.sourceType.includes("donor")
        ? "The policy logic is strong: the opportunity supports public objectives, but requires structured execution, governance, and milestone control."
        : "The policy case is secondary, but the opportunity still benefits from regulatory awareness and institutional framing.",
    investmentMemo:
      `Investment case: ${intelligence.opportunityScore}/100 score, clear deployment wedge, and an attractive blended-capital story with high strategic relevance.`,
    pitchDeckOutline: [
      "Problem and policy context",
      "Why now",
      "Opportunity signal",
      "Solution and operating model",
      "Market and geography",
      "Revenue and unit economics",
      "Validation plan",
      "Capital ask and next step"
    ],
    marketPositioningStatement:
      profile.sector === "Renewable Energy"
        ? "A policy-native infrastructure venture platform for East African energy access opportunities."
        : `A ${profile.sector.toLowerCase()} venture platform built for institutional speed and execution clarity.`,
    exportStatus: "Export placeholder enabled for PDF, deck, and memo outputs.",
    validationReference: validationReport.assumptionsHeadline
  };
}