export function generateValidationReport(profile, venture) {
  return {
    assumptions: [
      "The opportunity has enough policy or market momentum to justify a structured venture response.",
      "A pilot site or anchor customer can be validated without full-scale deployment.",
      "Capital can be staged through donor or investor tranches.",
      "Delivery partners are available in the target geography."
    ],
    validationPlan: venture.mvpPlan.map((step) => `Validate: ${step.toLowerCase()}`),
    risks: venture.riskMatrix.map((item) => `${item.risk} (${item.severity})`),
    unitEconomicsAssumptions:
      profile.sector === "Renewable Energy"
        ? "Prototype economics assume phased capex release, 65%+ stabilized margin, and a 24-36 month payback period under concessional support."
        : "Unit economics remain provisional until the first market test confirms demand, conversion, and cost-to-serve.",
    assumptionsHeadline: "Validation assumptions and commercial guardrails for autonomous prototype mode."
  };
}