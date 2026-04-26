const sectorRules = [
  { keywords: ["energy", "mini-grid", "solar", "electrification"], sector: "Renewable Energy" },
  { keywords: ["donor", "grant", "funding", "aid"], sector: "Public Finance" },
  { keywords: ["policy", "regulation", "ministry", "budget"], sector: "Policy / Public Sector" },
  { keywords: ["startup", "venture", "product", "market"], sector: "Venture / Innovation" }
];

const geographyRules = [
  { keywords: ["uganda"], geography: "Uganda / East Africa" },
  { keywords: ["kenya"], geography: "Kenya / East Africa" },
  { keywords: ["tanzania"], geography: "Tanzania / East Africa" },
  { keywords: ["africa"], geography: "Africa" }
];

export function toLowerText(value) {
  return String(value ?? "").toLowerCase();
}

export function detectInputType(text, declaredType = "") {
  const value = `${declaredType} ${text}`.toLowerCase();

  if (value.includes("tender")) return "tender document";
  if (value.includes("donor")) return "donor funding call";
  if (value.includes("policy") || value.includes("ministry") || value.includes("budget")) return "policy document";
  if (value.includes("market opportunity")) return "market opportunity";
  if (value.includes("startup")) return "startup idea";
  if (value.includes("investor")) return "investor mandate";
  if (value.includes("proposal")) return "business proposal";
  if (value.includes("report")) return "sector report";
  if (value.includes("url")) return "url placeholder";
  if (value.includes("file")) return "uploaded file placeholder";
  return declaredType || "pasted text";
}

export function detectSector(text, declaredSector = "") {
  if (declaredSector) {
    return declaredSector;
  }

  const value = toLowerText(text);
  const rule = sectorRules.find((entry) => entry.keywords.some((keyword) => value.includes(keyword)));
  return rule?.sector ?? "Cross-Sector";
}

export function detectGeography(text, declaredGeography = "") {
  if (declaredGeography) {
    return declaredGeography;
  }

  const value = toLowerText(text);
  const rule = geographyRules.find((entry) => entry.keywords.some((keyword) => value.includes(keyword)));
  return rule?.geography ?? "Global";
}

export function detectUrgency(text, declaredUrgency = "") {
  if (declaredUrgency) {
    return declaredUrgency;
  }

  const value = toLowerText(text);
  if (value.includes("urgent") || value.includes("immediately") || value.includes("announced")) return "high";
  if (value.includes("upcoming") || value.includes("soon")) return "medium";
  return "medium";
}

export function detectOpportunityType(text) {
  const value = toLowerText(text);

  if (value.includes("ppp")) return "PPP / blended finance";
  if (value.includes("tender")) return "procurement opportunity";
  if (value.includes("donor")) return "donor-backed opportunity";
  if (value.includes("startup")) return "venture opportunity";
  if (value.includes("budget")) return "public-sector allocation opportunity";
  return "strategic opportunity";
}

export function detectSourceType(source = "") {
  const value = toLowerText(source);

  if (value.includes("government")) return "government announcement";
  if (value.includes("ministry")) return "public-sector source";
  if (value.includes("donor")) return "donor source";
  if (value.includes("investor")) return "investor mandate";
  return source || "pasted text";
}

export function scoreOpportunity(profile) {
  let score = 60;

  if (profile.sector === "Renewable Energy") score += 16;
  if (profile.geography.includes("East Africa")) score += 8;
  if (profile.urgency === "high") score += 6;
  if (profile.opportunityType.includes("PPP")) score += 7;
  if (profile.sourceType.includes("government") || profile.sourceType.includes("donor")) score += 5;

  return Math.min(score, 97);
}
