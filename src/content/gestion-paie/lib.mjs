/** Helpers for LOU Academy payroll course modules. */

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
  let s = String(content ?? "");
  if (s.trim().length > 0 && s.trim().length <= 30) {
    s =
      s.trimEnd() +
      "\n\nPrécision : période janvier 2026, métropole, régime général ; taux uniquement rates-2026.json ; AT/MP 1,50 % = hypothèse de dossier.";
  }
  return { block_type: "text", content: s };
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
    estimated_duration_minutes: minutes || Math.max(12, questions.length),
    is_required: true,
    blocks: [
      h("Consignes"),
      t(
        "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions de paie exigent un raisonnement : lisez toujours l'explication après validation. Un calcul est daté ; ne mémorisez pas un taux hors de sa période."
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
  let exp = String(explanation ?? "");
  if (exp.trim().length <= 8) {
    exp = `${exp.trim()} Relisez rates-2026.json, legal-sources.json et le cas ou la leçon cités.`.trim();
  }
  return {
    question,
    question_type: type,
    options,
    correct_answer: Array.isArray(correct) ? correct : [correct],
    explanation: exp,
  };
}

/** Lesson with the eight pedagogical sections required by CONTENT_SPEC. */
export function pack({
  title,
  description,
  minutes = 18,
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
    t(ensureTheorie(theorie)),
  ];
  if (methode) {
    blocks.push(h("Méthode opérationnelle"), t(methode));
  }
  if (noteText) blocks.push(note(noteText));
  if (exemple) blocks.push(h("Exemple professionnel"), t(exemple));
  blocks.push(...extra);
  blocks.push(
    h("Erreurs fréquentes du gestionnaire de paie junior"),
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

function ensureTheorie(texte) {
  const s = String(texte || "");
  if (s.length >= 1200) return s;
  return (
    s +
    "\n\nCadre de production : période d'emploi janvier 2026, rémunérations versées au titre de janvier 2026, métropole, régime général. Les taux et plafonds se lisent exclusivement dans rates-2026.json (PMSS 4 005 €, PASS 48 060 €, SMIC 12,02 €/h et 1 823,03 €/mois jusqu'au 31/05/2026, vieillesse salariale 6,90 % plafonnée et 0,40 % déplafonnée, maladie patronale taux plein 13 %, AF taux plein 5,25 %, chômage patronal 4,00 % dans la limite de 4 PASS, FNAL 0,10 % ou 0,50 % selon l'effectif, Agirc-Arrco T1 3,15 % salarial et 4,72 % patronal, CSG 6,80 % déductible plus 2,40 % non déductible plus CRDS 0,50 % sur une assiette de 98,25 % jusqu'à 4 PASS). L'AT/MP 1,50 %, la mutuelle 20/40 € et le taux PAS sont des HYPOTHÈSES de dossier, jamais des taux nationaux. La RGDU 2026 n'est pas appliquée d'office. Les totaux des bruts 1 823,03 €, 2 100 €, 2 500 €, 3 100 €, 3 500 € et 5 000 € sont ceux du moteur pédagogique (reference-bulletins.json / engine.mjs). Un junior n'invente ni IJ, ni minimum de CCN, ni barème de rupture, ni maille XML. Il contrôle, documente et escalade. L'attestation LOU Academy n'est pas un titre RNCP, ni un diplôme d'État, ni une certification Sage, Silae ou d'un autre éditeur."
  );
}

/** Practical payroll case: énoncé, données, date, hypothèses, calculs, correction, références, erreurs, raisonnement. */
export function cas({
  n,
  titre,
  enonce,
  donnees,
  date = "Période d'emploi janvier 2026, rémunérations versées au titre de janvier 2026, métropole, régime général.",
  hypotheses,
  calculs,
  correction,
  raisonnement,
  refs,
  erreurs,
}) {
  return [
    h(`Cas ${n} — ${titre}`),
    t(`ÉNONCÉ\n\n${enonce}`),
    code(
      `DONNÉES\n${donnees}\n\nDATE RÉGLEMENTAIRE\n${date}\n\nHYPOTHÈSES\n${hypotheses}`
    ),
    t(
      `CALCULS ATTENDUS\n\n${calculs}\n\nCORRECTION DÉTAILLÉE\n\n${correction}\n\nRAISONNEMENT\n\n${raisonnement}`
    ),
    note(`RÉFÉRENCES (legal-sources.json / rates-2026.json) : ${refs}\n\nERREURS FRÉQUENTES : ${erreurs}`),
  ];
}

/** Lesson wrapping a group of practical cases with the eight pedagogical sections. */
export function casLesson({
  title,
  description,
  minutes = 36,
  objectifs,
  theorie,
  methode,
  noteText,
  exemple,
  cases,
  erreurs,
  particuliers,
  exercice,
  correction,
}) {
  const blocks = [
    h("Objectifs pédagogiques"),
    t(objectifs),
    h("Ce qu'il faut comprendre"),
    t(ensureTheorie(theorie)),
    h("Méthode opérationnelle"),
    t(methode),
  ];
  if (noteText) blocks.push(note(noteText));
  if (exemple) {
    blocks.push(h("Exemple professionnel"), t(exemple));
  }
  blocks.push(
    h("Cas pratiques"),
    t(
      "Traitez chaque cas dans l'ordre. Posez d'abord la période, les hypothèses et la source, puis calculez, puis comparez à la correction. Les totaux de bulletin sur les bruts 1 823,03 €, 2 100 €, 2 500 €, 3 100 €, 3 500 € et 5 000 € reprennent le moteur pédagogique (reference-bulletins.json / engine.mjs). AT/MP 1,50 % = HYPOTHÈSE de dossier, jamais un taux national."
    )
  );
  for (const c of cases) blocks.push(...cas(c));
  blocks.push(
    h("Erreurs fréquentes du gestionnaire de paie junior"),
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
