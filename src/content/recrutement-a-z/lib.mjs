/** Helpers for LOU Academy recruitment course modules. */

export function lesson({ title, description, minutes = 18, blocks }) {
  return {
    title,
    description,
    lesson_type: "lesson",
    estimated_duration_minutes: minutes,
    is_required: true,
    blocks,
  };
}

export function h(content) {
  return { block_type: "heading", content };
}

export function t(content) {
  return { block_type: "text", content };
}

export function note(content) {
  return { block_type: "callout", content };
}

export function code(content) {
  return { block_type: "code", content };
}

export function quizLesson({ title, description, passing_score = 70, minutes, questions }) {
  return {
    title,
    description: description || title,
    lesson_type: "quiz",
    estimated_duration_minutes: minutes || Math.max(10, questions.length),
    is_required: true,
    blocks: [
      h("Consignes"),
      t(
        "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
      ),
    ],
    quiz: {
      title,
      passing_score,
      max_attempts: null,
      questions,
    },
  };
}

export function q({ question, options, correct, explanation, type = "single_choice" }) {
  return {
    question,
    question_type: type,
    options,
    correct_answer: Array.isArray(correct) ? correct : [correct],
    explanation,
  };
}

/** Lesson with the eight pedagogical sections required by CONTENT_SPEC. */
export function pack({
  title,
  description,
  minutes = 16,
  objectifs,
  theorie,
  methode,
  noteText,
  exemple,
  extra = [],
  erreurs,
  particuliers,
  exercice,
  correction,
}) {
  const blocks = [
    h("Objectifs pédagogiques"),
    t(objectifs),
    h("Ce qu'il faut comprendre"),
    t(theorie),
  ];
  if (methode) {
    blocks.push(h("Méthode opérationnelle"), t(methode));
  }
  if (noteText) blocks.push(note(noteText));
  if (exemple) blocks.push(h("Exemple professionnel"), t(exemple));
  blocks.push(...extra);
  blocks.push(
    h("Erreurs fréquentes du recruteur junior"),
    t(erreurs),
    h("Situations particulières"),
    t(particuliers),
    h("Mise en pratique"),
    t(exercice),
    h("Correction détaillée"),
    t(correction)
  );
  return lesson({ title, description, minutes, blocks });
}
