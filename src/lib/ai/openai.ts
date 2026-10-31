import { missingOpenAiKeyMessage } from "./access";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o";

export function hasOpenAiKey(): boolean {
  return Boolean(OPENAI_API_KEY);
}

export async function completeJson(
  systemPrompt: string,
  userPrompt: string
): Promise<{ result: unknown } | { error: string; status: number }> {
  if (!OPENAI_API_KEY) {
    return { error: missingOpenAiKeyMessage(), status: 503 };
  }

  const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    return { error: `Le fournisseur IA a renvoyé une erreur (${res.status}).`, status: 502, detail: errorBody } as {
      error: string;
      status: number;
    };
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return { error: "Réponse IA vide.", status: 502 };

  try {
    return { result: JSON.parse(content) };
  } catch {
    return { error: "Réponse IA non valide (JSON attendu).", status: 502 };
  }
}

export async function completeChat(
  messages: { role: "system" | "user" | "assistant"; content: string }[]
): Promise<{ response: string } | { error: string; status: number }> {
  if (!OPENAI_API_KEY) {
    return { error: missingOpenAiKeyMessage(), status: 503 };
  }

  const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  if (!res.ok) {
    return { error: `Le fournisseur IA a renvoyé une erreur (${res.status}).`, status: 502 };
  }

  const data = await res.json();
  return { response: data.choices?.[0]?.message?.content || "…" };
}
