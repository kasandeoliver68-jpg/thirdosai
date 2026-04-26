import { detectGeography, detectInputType, detectOpportunityType, detectSector, detectSourceType, detectUrgency } from "../utils/rules.js";

export function classifySubmission(input) {
  const rawText = `${input.title ?? ""} ${input.description ?? ""} ${input.rawContent ?? ""}`.trim();
  const inputType = detectInputType(rawText, input.inputType);
  const sourceType = detectSourceType(input.source);
  const sector = detectSector(rawText, input.sector);
  const geography = detectGeography(rawText, input.geography);
  const urgency = detectUrgency(rawText, input.urgency);
  const opportunityType = detectOpportunityType(rawText);

  return {
    classification: `${sector} / ${opportunityType}`,
    confidence: sector === "Renewable Energy" ? 0.94 : 0.78,
    inputType,
    sourceType,
    sector,
    geography,
    urgency,
    opportunityType,
    signals: [sector, geography, urgency, opportunityType].filter(Boolean)
  };
}