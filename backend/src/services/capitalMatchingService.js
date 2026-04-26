function computeMatchScore(profile, investor, mandate) {
  let score = 40;

  if (investor.sectorFocus.includes(profile.sector)) score += 28;
  if (investor.geographyFocus.some((item) => profile.geography.includes(item))) score += 18;
  if (profile.opportunityType.includes("PPP") && mandate.capitalStructurePreference.includes("PPP")) score += 10;
  if (profile.urgency === "high") score += 4;

  return Math.min(score, 99);
}

export function matchInvestors(profile, venture, investors, investorMandates) {
  return investors.map((investor) => {
    const mandate = investorMandates.find((item) => item.investorId === investor.id);
    const score = computeMatchScore(profile, investor, mandate);

    return {
      investorId: investor.id,
      investorName: investor.name,
      ventureId: venture.id,
      matchScore: score,
      mandateFit:
        score >= 90
          ? "Excellent fit on sector, geography, and capital structure."
          : score >= 80
            ? "Strong fit with a clear mandate overlap."
            : "Potential fit with mandate refinement required.",
      investorFitNotes: investor.notes,
      recommendedOutreachAngle:
        score >= 90
          ? "Lead with donor support, site-level deployment readiness, and policy alignment."
          : "Lead with the opportunity thesis, validation plan, and staged capital ask.",
      capitalStructureSuggestion: mandate?.capitalStructurePreference ?? "Equity + grant blend",
      ticketSize: {
        min: investor.ticketSizeMin,
        max: investor.ticketSizeMax
      },
      geography: investor.geographyFocus.join(", "),
      mandateId: mandate?.id ?? null,
      createdAt: new Date().toISOString()
    };
  });
}