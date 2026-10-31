import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rates = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "rates-2026.json"), "utf8")
);

export { rates };

export function euro(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

function line(code, label, base, rate, employee, employer, source, kind = "legal") {
  return {
    code,
    label,
    base: euro(base),
    rate,
    employee: euro(employee),
    employer: euro(employer),
    source,
    kind,
  };
}

/**
 * Bulletin pédagogique déterministe — janvier 2026, régime général, métropole.
 * Options: { brut, cadre=false, headcount=20, pasRate=0, includeMutuelle=false, atmpRate }
 */
export function computeBulletin({
  brut,
  cadre = false,
  headcount = 20,
  pasRate = 0,
  includeMutuelle = false,
  atmpRate,
} = {}) {
  const B = euro(brut);
  const pmss = rates.pmss;
  const t1 = Math.min(B, pmss);
  const t2 = Math.min(Math.max(B - pmss, 0), pmss * 7);
  const fourPass = pmss * rates.csg_abattement_limit_pass;
  const csgBaseAbattue = euro(B * (1 - rates.csg_abattement));
  const csgBase = B <= fourPass ? csgBaseAbattue : euro(fourPass * (1 - rates.csg_abattement) + (B - fourPass));
  const e = rates.employee;
  const p = rates.employer;
  const at = atmpRate == null ? rates.hypotheses_pedagogiques.atmp.rate : atmpRate;
  const fnalRate = headcount < 50 ? p.fnal_lt50_plafonne : p.fnal_gte50;
  const fnalBase = headcount < 50 ? t1 : B;

  const lines = [
    line("MAL_S", "Maladie, maternité, invalidité, décès (salarial)", B, e.maladie, B * e.maladie, 0, "MSA-BAREME-2026 / URSSAF"),
    line("MAL_P", "Maladie, maternité, invalidité, décès (patronal, taux plein 13 %)", B, p.maladie_plein, 0, B * p.maladie_plein, "URSSAF-TAUX-PRIVE-2026"),
    line("CSA", "Contribution solidarité autonomie", B, p.csa, 0, B * p.csa, "URSSAF-TAUX-PRIVE-2026"),
    line("VIE_PLAF", "Vieillesse plafonnée", t1, e.vieillesse_plafonnee, t1 * e.vieillesse_plafonnee, t1 * p.vieillesse_plafonnee, "MSA-BAREME-2026 / URSSAF"),
    line("VIE_DEPL", "Vieillesse déplafonnée", B, e.vieillesse_deplafonnee, B * e.vieillesse_deplafonnee, B * p.vieillesse_deplafonnee, "MSA-BAREME-2026 / URSSAF"),
    line("AF", "Allocations familiales (taux plein 5,25 %)", B, p.allocations_familiales_plein, 0, B * p.allocations_familiales_plein, "URSSAF-TAUX-PRIVE-2026"),
    line("ATMP", "Accidents du travail / maladies professionnelles", B, at, 0, B * at, "HYPOTHÈSE pédagogique Carsat", "hypothesis"),
    line("FNAL", headcount < 50 ? "FNAL (< 50 salariés, assiette plafonnée)" : "FNAL (≥ 50 salariés)", fnalBase, fnalRate, 0, fnalBase * fnalRate, "URSSAF-TAUX-PRIVE-2026"),
    line("CHOM", "Assurance chômage (limite 4 PASS)", Math.min(B, fourPass), p.chomage, 0, Math.min(B, fourPass) * p.chomage, "URSSAF-TAUX-PRIVE-2026"),
    line("AGS", "AGS (garantie des salaires)", Math.min(B, fourPass), p.ags, 0, Math.min(B, fourPass) * p.ags, "URSSAF-TAUX-PRIVE-2026"),
    line("DS", "Contribution au dialogue social", B, p.dialogue_social, 0, B * p.dialogue_social, "URSSAF-TAUX-PRIVE-2026"),
    line("ARRCO_T1", "Retraite complémentaire Agirc-Arrco T1", t1, e.arrco_t1, t1 * e.arrco_t1, t1 * p.arrco_t1, "AGIRC-ARRCO-2026"),
    line("CEG_T1", "CEG T1", t1, e.ceg_t1, t1 * e.ceg_t1, t1 * p.ceg_t1, "AGIRC-ARRCO-2026"),
  ];

  if (t2 > 0) {
    lines.push(line("ARRCO_T2", "Retraite complémentaire Agirc-Arrco T2", t2, e.arrco_t2, t2 * e.arrco_t2, t2 * p.arrco_t2, "AGIRC-ARRCO-2026"));
    lines.push(line("CEG_T2", "CEG T2", t2, e.ceg_t2, t2 * e.ceg_t2, t2 * p.ceg_t2, "AGIRC-ARRCO-2026"));
  }
  if (B > pmss) {
    const cetBase = t1 + t2;
    lines.push(line("CET", "CET (si rémunération > PMSS)", cetBase, e.cet, cetBase * e.cet, cetBase * p.cet, "AGIRC-ARRCO-2026"));
  }
  if (cadre) {
    const apecBase = Math.min(B, fourPass);
    lines.push(line("APEC", "APEC (cadres, limite 4 PASS)", apecBase, e.apec, apecBase * e.apec, apecBase * p.apec, "AGIRC-ARRCO-2026 / MSA APECITA"));
  }

  lines.push(line("CSG_D", "CSG déductible", csgBase, e.csg_deductible, csgBase * e.csg_deductible, 0, "MSA-BAREME-2026"));
  lines.push(line("CSG_ND", "CSG non déductible", csgBase, e.csg_non_deductible, csgBase * e.csg_non_deductible, 0, "MSA-BAREME-2026"));
  lines.push(line("CRDS", "CRDS", csgBase, e.crds, csgBase * e.crds, 0, "MSA-BAREME-2026"));

  if (includeMutuelle) {
    const ms = rates.hypotheses_pedagogiques.mutuelle_salarie.amount;
    const me = rates.hypotheses_pedagogiques.mutuelle_employeur.amount;
    lines.push({
      code: "MUT",
      label: "Complémentaire santé (hypothèse de dossier)",
      base: 0,
      rate: null,
      employee: euro(ms),
      employer: euro(me),
      source: "HYPOTHÈSE pédagogique",
      kind: "hypothesis",
    });
  }

  const employeeTotal = euro(lines.reduce((s, l) => s + l.employee, 0));
  const employerTotal = euro(lines.reduce((s, l) => s + l.employer, 0));
  const deductible = euro(
    lines
      .filter((l) => !["CSG_ND", "CRDS", "MUT"].includes(l.code))
      .reduce((s, l) => s + l.employee, 0)
  );
  const netImposable = euro(B - deductible);
  const pas = euro(netImposable * pasRate);
  const netAvantImpot = euro(B - employeeTotal);
  const netAPayer = euro(netAvantImpot - pas);
  // MNS pédagogique 2026 : brut − cotisations/contributions salariales obligatoires (y compris CSG/CRDS).
  // Mutuelle salariale : déduite du net à payer ; jusqu'au 31/12/2026 la part patronale n'est pas ajoutée au MNS (BOSS).
  const mnsPedagogique = euro(B - lines.filter((l) => l.code !== "MUT").reduce((s, l) => s + l.employee, 0));

  return {
    period: rates.period,
    period_label: rates.period_label,
    brut: B,
    t1: euro(t1),
    t2: euro(t2),
    csgBase: euro(csgBase),
    lines,
    employeeTotal,
    employerTotal,
    netImposable,
    netAvantImpot,
    pas,
    pasRate,
    netAPayer,
    montantNetSocial: mnsPedagogique,
    notes: [
      "RGDU non appliquée dans ce bulletin de base (à activer dans les cas qui le demandent).",
      "Taux AT/MP : hypothèse de dossier sauf si atmpRate est fourni.",
      "MNS : formule pédagogique 2026 = brut − prélèvements sociaux salariaux obligatoires. Vérifier le BOSS pour les éléments facultatifs.",
    ],
  };
}

export function prorataCalendar(monthly, daysWorked, daysInMonth) {
  return euro((monthly * daysWorked) / daysInMonth);
}

export function overtimeRate(hourSmicOrBase, percent) {
  return euro(hourSmicOrBase * (1 + percent));
}

/** Heures supplémentaires légales supplétives : 25 % sur les 8 premières, 50 % au-delà (L. 3121-36 à défaut d'accord). */
export function overtimeLegalSupplemental(hourlyRate, extraHours) {
  const h = Number(extraHours);
  const first = Math.min(h, 8);
  const rest = Math.max(h - 8, 0);
  const amount25 = euro(hourlyRate * 1.25 * first);
  const amount50 = euro(hourlyRate * 1.5 * rest);
  return {
    hours: h,
    first,
    rest,
    amount25,
    amount50,
    total: euro(amount25 + amount50),
    source: "L. 3121-36 — taux légaux supplétifs à défaut de convention ou accord",
  };
}

/** Indemnité de congés : règle du dixième (L. 3141-24). À comparer au maintien. */
export function cpTenth(grossReferencePeriod) {
  return euro(Number(grossReferencePeriod) / 10);
}

export function cpBestOf(tenth, maintien) {
  const a = euro(tenth);
  const b = euro(maintien);
  return { tenth: a, maintien: b, retained: Math.max(a, b), method: a >= b ? "dixieme" : "maintien" };
}
