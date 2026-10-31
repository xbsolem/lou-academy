import { describe, expect, it } from "vitest";
import {
  computeBulletin,
  cpBestOf,
  cpTenth,
  euro,
  overtimeLegalSupplemental,
  prorataCalendar,
  rates,
} from "./engine.mjs";

describe("Paramètres 2026 sourcés", () => {
  it("verrouille PMSS, PASS et SMIC officiels", () => {
    expect(rates.pmss).toBe(4005);
    expect(rates.pass).toBe(48060);
    expect(rates.pmss_day).toBe(220);
    expect(rates.smic_hour).toBe(12.02);
    expect(rates.smic_month_151_67).toBe(1823.03);
    expect(rates.employee.vieillesse_plafonnee).toBe(0.069);
    expect(rates.employee.vieillesse_deplafonnee).toBe(0.004);
    expect(rates.employer.maladie_plein).toBe(0.13);
    expect(rates.employer.allocations_familiales_plein).toBe(0.0525);
    expect(rates.employee.arrco_t1).toBe(0.0315);
    expect(rates.employer.arrco_t1).toBe(0.0472);
    expect(rates.period).toBe("2026-01");
  });

  it("étiquette AT/MP et mutuelle comme hypothèses", () => {
    expect(rates.hypotheses_pedagogiques.atmp.label).toMatch(/HYPOTHÈSE/i);
    expect(rates.hypotheses_pedagogiques.mutuelle_salarie.label).toMatch(/HYPOTHÈSE/i);
  });
});

describe("computeBulletin — janvier 2026, non-cadre, < 50 salariés", () => {
  const b = computeBulletin({ brut: 2500, cadre: false, headcount: 20, pasRate: 0 });

  it("est déterministe", () => {
    const b2 = computeBulletin({ brut: 2500, cadre: false, headcount: 20, pasRate: 0 });
    expect(b2).toEqual(b);
  });

  it("calcule assiettes T1 et CSG 98,25 %", () => {
    expect(b.t1).toBe(2500);
    expect(b.t2).toBe(0);
    expect(b.csgBase).toBe(euro(2500 * 0.9825));
    expect(b.csgBase).toBe(2456.25);
  });

  it("applique vieillesse et Agirc-Arrco T1", () => {
    const viePlaf = b.lines.find((l) => l.code === "VIE_PLAF");
    const arrco = b.lines.find((l) => l.code === "ARRCO_T1");
    expect(viePlaf?.employee).toBe(172.5);
    expect(viePlaf?.employer).toBe(213.75);
    expect(arrco?.employee).toBe(78.75);
    expect(arrco?.employer).toBe(118);
    expect(b.lines.find((l) => l.code === "ARRCO_T2")).toBeUndefined();
    expect(b.lines.find((l) => l.code === "CET")).toBeUndefined();
    expect(b.lines.find((l) => l.code === "APEC")).toBeUndefined();
  });

  it("étiquette AT/MP hypothèse 1,50 %", () => {
    const at = b.lines.find((l) => l.code === "ATMP");
    expect(at?.kind).toBe("hypothesis");
    expect(at?.employer).toBe(37.5);
  });

  it("reconstruit net imposable, net à payer et MNS", () => {
    expect(b.employeeTotal).toBeGreaterThan(500);
    expect(b.netImposable).toBe(euro(b.brut - b.lines.filter((l) => !["CSG_ND", "CRDS", "MUT"].includes(l.code)).reduce((s, l) => s + l.employee, 0)));
    expect(b.netAPayer).toBe(euro(b.brut - b.employeeTotal - b.pas));
    expect(b.montantNetSocial).toBe(euro(b.brut - b.lines.filter((l) => l.code !== "MUT").reduce((s, l) => s + l.employee, 0)));
    expect(b.netAPayer).toBe(b.montantNetSocial);
  });
});

describe("Tranches et cadres", () => {
  it("ouvre T2 et CET au-dessus du PMSS", () => {
    const b = computeBulletin({ brut: 5000, cadre: false, headcount: 20 });
    expect(b.t1).toBe(4005);
    expect(b.t2).toBe(995);
    expect(b.lines.find((l) => l.code === "ARRCO_T2")?.employee).toBe(euro(995 * 0.0864));
    expect(b.lines.find((l) => l.code === "CET")).toBeDefined();
  });

  it("ajoute APEC uniquement pour un cadre", () => {
    const cadre = computeBulletin({ brut: 3500, cadre: true, headcount: 80 });
    const nonCadre = computeBulletin({ brut: 3500, cadre: false, headcount: 80 });
    expect(cadre.lines.find((l) => l.code === "APEC")?.employee).toBe(euro(3500 * 0.00024));
    expect(nonCadre.lines.find((l) => l.code === "APEC")).toBeUndefined();
    const fnal = cadre.lines.find((l) => l.code === "FNAL");
    expect(fnal?.rate).toBe(0.005);
    expect(fnal?.base).toBe(3500);
  });
});

describe("Prorata et PAS", () => {
  it("proratise un mensuel sur jours calendaires", () => {
    expect(prorataCalendar(3100, 10, 31)).toBe(1000);
  });

  it("applique le PAS sur le net imposable, pas sur le brut", () => {
    const b = computeBulletin({ brut: 2500, pasRate: 0.1 });
    expect(b.pas).toBe(euro(b.netImposable * 0.1));
    expect(b.netAPayer).toBe(euro(b.netAvantImpot - b.pas));
  });
});

describe("HS légales supplétives et congés", () => {
  it("majore 25 % les 8 premières heures puis 50 %", () => {
    const r = overtimeLegalSupplemental(12.02, 10);
    expect(r.first).toBe(8);
    expect(r.rest).toBe(2);
    expect(r.amount25).toBe(euro(12.02 * 1.25 * 8));
    expect(r.amount50).toBe(euro(12.02 * 1.5 * 2));
    expect(r.total).toBe(euro(r.amount25 + r.amount50));
  });

  it("retient le plus favorable entre dixième et maintien", () => {
    expect(cpTenth(24000)).toBe(2400);
    expect(cpBestOf(2400, 2100).method).toBe("dixieme");
    expect(cpBestOf(1800, 2100).retained).toBe(2100);
  });
});
