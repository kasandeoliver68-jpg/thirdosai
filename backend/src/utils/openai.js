export async function runOpenAiPlaceholder({ system, prompt }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
        input: [
          { role: "system", content: system },
          { role: "user", content: prompt }
        ]
      })
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const text = data.output_text ?? data.output?.[0]?.content?.[0]?.text ?? null;
    return text;
  } catch {
    return null;
  }
}
