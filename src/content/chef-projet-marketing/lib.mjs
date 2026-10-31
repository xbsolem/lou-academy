/** Helpers — Chef de projet marketing et développement (5 h). */

export function lesson({ title, description, minutes, blocks, required = true }) {
  return {
    title,
    description,
    lesson_type: "lesson",
    estimated_duration_minutes: minutes,
    is_required: required,
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
    estimated_duration_minutes: minutes,
    is_required: true,
    blocks: [
      h("Consignes"),
      t(
        "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
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

export function pack({
  title,
  description,
  minutes,
  required = true,
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
    h("Méthode opérationnelle"),
    t(methode),
  ];
  if (noteText) blocks.push(note(noteText));
  if (exemple) blocks.push(h("Exemple professionnel"), t(exemple));
  blocks.push(...extra);
  blocks.push(
    h("Erreurs fréquentes du chef de projet débutant"),
    t(erreurs),
    h("Situations particulières"),
    t(particuliers),
    h("Mise en pratique"),
    t(exercice),
    h("Correction détaillée"),
    t(correction)
  );
  return lesson({ title, description, minutes, required, blocks });
}
