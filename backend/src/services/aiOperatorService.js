import { runOpenAiPlaceholder } from "../utils/openai.js";

const operatorMandates = {
  policy: "Policy Analyst",
  venture: "Venture Architect",
  deal: "Deal Structurer"
};

export function selectOperator(workType) {
  return operatorMandates[workType] ?? "Policy Analyst";
}

export async function runOperator({ workType, prompt }) {
  const operator = selectOperator(workType);
  const openAiText = await runOpenAiPlaceholder({
    system: `You are the ThirdSpace AI OS ${operator}.`,
    prompt
  });

  if (openAiText) {
    return {
      operator,
      mode: "openai",
      output: openAiText,
      completedAt: new Date().toISOString()
    };
  }

  const fallbackOutput =
    operator === "Policy Analyst"
      ? "Converted the submission into a policy-facing brief with risks, funding logic, and implementation framing."
      : operator === "Venture Architect"
        ? "Converted the opportunity into a venture thesis with MVP, validation, and revenue assumptions."
        : "Designed a capital structure, investor-fit notes, and outreach angle.";

  return {
    operator,
    mode: "mock",
    output: fallbackOutput,
    completedAt: new Date().toISOString()
  };
}