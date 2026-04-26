export async function runOpenAiPlaceholder({ system, prompt }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    // keep request guarded and tolerant of network failures
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timeout = 15_000;
    let timeoutId;
    if (controller) {
      timeoutId = setTimeout(() => controller.abort(), timeout);
    }

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
      }),
      signal: controller ? controller.signal : undefined
    });
    if (!response.ok) {
      // log for diagnostics and return null so callers use fallback
      try { console.error('OpenAI request failed', response.status, await response.text()); } catch (e) {}
      return null;
    }

    const data = await response.json().catch(() => null);
    if (!data) return null;
    const text = data.output_text ?? data.output?.[0]?.content?.[0]?.text ?? null;
    return text;
  } catch {
    return null;
  }
}
