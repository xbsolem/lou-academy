export type AiAction = "generate_curriculum" | "lesson_content" | "tutor" | "revision_sheet";

export const STAFF_AI_ACTIONS: AiAction[] = ["generate_curriculum", "lesson_content"];
export const LEARNER_AI_ACTIONS: AiAction[] = ["tutor", "revision_sheet"];

export function isStaffRole(role: string | null | undefined): boolean {
  return role === "admin" || role === "creator";
}

export function isKnownAiAction(value: unknown): value is AiAction {
  return (
    value === "generate_curriculum" ||
    value === "lesson_content" ||
    value === "tutor" ||
    value === "revision_sheet"
  );
}

export function authorizeAiAction(input: {
  action: unknown;
  role: string | null | undefined;
  enrolled: boolean;
}): { ok: true; action: AiAction } | { ok: false; status: number; error: string } {
  if (!isKnownAiAction(input.action)) {
    return { ok: false, status: 400, error: "Action inconnue." };
  }
  if (STAFF_AI_ACTIONS.includes(input.action)) {
    if (!isStaffRole(input.role)) {
      return { ok: false, status: 403, error: "Cette action est réservée aux formateurs et administrateurs." };
    }
    return { ok: true, action: input.action };
  }
  if (!isStaffRole(input.role) && !input.enrolled) {
    return {
      ok: false,
      status: 403,
      error: "Vous devez être inscrit à cette formation pour utiliser cette fonction.",
    };
  }
  return { ok: true, action: input.action };
}

export const REVISION_RATE_LIMIT = 8;
export const REVISION_RATE_WINDOW_MS = 60 * 60 * 1000;

export function isRateLimited(countInWindow: number, limit = REVISION_RATE_LIMIT): boolean {
  return countInWindow >= limit;
}

export function missingOpenAiKeyMessage(): string {
  return "La génération IA n'est pas configurée : la variable OPENAI_API_KEY est absente côté serveur. Ajoutez-la dans les variables d'environnement (Vercel / .env.local), sans la placer dans le code.";
}
