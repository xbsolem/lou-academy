import { NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o";

async function callAI(systemPrompt: string, userPrompt: string) {
  if (!OPENAI_API_KEY) {
    return { error: "Le fournisseur IA n'est pas encore configure. Ajoutez OPENAI_API_KEY dans .env.local" };
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
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    return { error: `Erreur API IA: ${res.status} - ${errorBody}` };
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return { error: "Reponse IA vide" };

  try {
    return { result: JSON.parse(content) };
  } catch {
    return { error: "Reponse IA non valide (JSON attendu)" };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === "generate_curriculum") {
      const { subject, audience, level, durationHours, objectives, instructions } = body;

      const system = `Tu es un concepteur pedagogique expert. Tu crees des programmes de formation structures.
Tu reponds UNIQUEMENT en JSON valide avec cette structure exacte:
{
  "title": "string",
  "description": "string",
  "objectives": ["string"],
  "modules": [
    {
      "title": "string",
      "description": "string",
      "lessons": [
        { "title": "string", "type": "lesson|quiz", "estimatedDuration": number }
      ]
    }
  ]
}
Chaque module doit avoir entre 2 et 6 lecons. Ajoute un quiz a la fin de chaque module.
La langue du contenu doit etre le francais.`;

      const user = `Cree un programme de formation:
Sujet: ${subject}
Public: ${audience || "Non precise"}
Niveau: ${level}
Duree souhaitee: ${durationHours} heures
Objectifs: ${objectives || "Non precises"}
Instructions: ${instructions || "Aucune"}`;

      const result = await callAI(system, user);
      if (result.error) return NextResponse.json({ error: result.error }, { status: 500 });
      return NextResponse.json({ curriculum: result.result });
    }

    if (action === "lesson_content") {
      const { lessonTitle, aiAction, existingContent } = body;

      const actionPrompts: Record<string, string> = {
        generate: `Genere le contenu pedagogique complet pour la lecon "${lessonTitle}".`,
        improve: `Ameliore ce contenu pedagogique:\n${existingContent}`,
        simplify: `Simplifie ce contenu pour le rendre plus accessible:\n${existingContent}`,
        expand: `Developpe et enrichis ce contenu avec plus de details:\n${existingContent}`,
        add_examples: `Ajoute des exemples concrets et pratiques a ce contenu:\n${existingContent}`,
        generate_quiz: `Genere un quiz de 5 questions pour tester la comprehension de cette lecon "${lessonTitle}".`,
      };

      const system = `Tu es un formateur expert. Tu crees du contenu pedagogique de haute qualite.
Tu reponds UNIQUEMENT en JSON valide avec cette structure:
{
  "blocks": [
    { "type": "heading|text|callout|code", "content": "string" }
  ]
}
Utilise heading pour les titres, text pour les paragraphes, callout pour les points importants, code pour les exemples de code.
La langue du contenu doit etre le francais.`;

      const user = actionPrompts[aiAction] || `Genere du contenu pour: ${lessonTitle}`;

      const result = await callAI(system, user);
      if (result.error) return NextResponse.json({ error: result.error }, { status: 500 });
      return NextResponse.json({ blocks: result.result?.blocks || [] });
    }

    if (action === "tutor") {
      const { courseTitle, lessonTitle, lessonContent, question, history } = body;

      const system = `Tu es un tuteur pedagogique bienveillant pour la plateforme LOU Academy.
Tu aides les apprenants a comprendre les concepts sans donner directement la reponse.
Tu privilegies: 1) l'explication, 2) les indices, 3) les pistes, 4) les exemples differents.
Tu es patient, encourageant et precis.
Contexte actuel:
- Formation: ${courseTitle || "Non precisee"}
- Lecon: ${lessonTitle || "Non precisee"}
- Contenu de la lecon: ${lessonContent ? lessonContent.substring(0, 2000) : "Non disponible"}
Reponds en francais.`;

      const messagesForAi = [
        { role: "system" as const, content: system },
        ...(history || []).map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        { role: "user" as const, content: question },
      ];

      if (!OPENAI_API_KEY) {
        return NextResponse.json({ error: "Le fournisseur IA n'est pas encore configure." });
      }

      const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${OPENAI_API_KEY}` },
        body: JSON.stringify({ model: OPENAI_MODEL, messages: messagesForAi, temperature: 0.7, max_tokens: 1000 }),
      });

      if (!res.ok) {
        return NextResponse.json({ error: `Erreur API IA: ${res.status}` }, { status: 500 });
      }

      const data = await res.json();
      return NextResponse.json({ response: data.choices?.[0]?.message?.content || "..." });
    }

    return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
  } catch (err) {
    console.error("AI API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
