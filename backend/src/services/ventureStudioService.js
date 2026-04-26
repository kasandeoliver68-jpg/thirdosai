function buildName(profile) {
  if (profile.sector === "Renewable Energy") {
    return "ThirdSpace Rural Grid";
  }

  if (profile.sector === "Policy / Public Sector") {
    return "ThirdSpace Policy Forge";
  }

  return `ThirdSpace ${profile.sector.replace(/\s+/g, " ")}`.slice(0, 40);
}

export function generateVentureConcept(profile, intelligence) {
  const ventureName = buildName(profile);

  return {
    name: ventureName,
    problemStatement:
      profile.sector === "Renewable Energy"
        ? "Rural energy access projects stall when policy, capital, and field operations are not orchestrated as one deployment system."
        : `The ${profile.sector.toLowerCase()} opportunity needs a venture wrapper that converts fragmented signals into execution readiness.`,
    solution:
      profile.sector === "Renewable Energy"
        ? "A mini-grid venture platform that structures PPP opportunities, coordinates donor support, and manages community deployment workflows."
        : "A focused venture platform that packages the opportunity into an executable operating model.",
    targetMarket:
      profile.geography === "Uganda / East Africa"
        ? "Uganda, East Africa, and adjacent rural electrification markets"
        : `${profile.geography} opportunity owners and deployment partners`,
    mvpPlan:
      profile.sector === "Renewable Energy"
        ? [
            "Select one pilot concession site",
            "Run community demand validation",
            "Secure a local implementation partner",
            "Map capex and donor contribution",
            "Deploy a metered pilot and measure collection"
          ]
        : [
            "Define one market entry wedge",
            "Validate demand with anchor users",
            "Build an operations prototype",
            "Test the revenue loop",
            "Prepare investor-facing collateral"
          ],
    revenueModel:
      profile.sector === "Renewable Energy"
        ? "Hybrid model: energy sales, concession services, deployment fees, and maintenance contracts."
        : "Primary revenue from product or service delivery, with optional advisory or platform fees.",
    validationPlan:
      profile.sector === "Renewable Energy"
        ? "Validate site economics, willingness to pay, tariff tolerance, and local operating partner capacity before scaling."
        : intelligence.recommendedVentureAngle,
    riskMatrix: [
      { risk: "Regulatory delay", severity: "High", mitigation: "Pre-clear with public stakeholders." },
      { risk: "Demand shortfall", severity: "Medium", mitigation: "Test anchor-user demand and pre-commitments." },
      { risk: "Capital structure mismatch", severity: "Medium", mitigation: "Align with donor, investor, and PPP mandates early." }
    ]
  };
}