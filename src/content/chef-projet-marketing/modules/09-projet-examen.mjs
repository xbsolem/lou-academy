import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

function sit(num, title, context, problem, question, options, reco, justif, risks, errors, xref) {
  const blocks = [h(`S${String(num).padStart(2, "0")} — ${title}`)];
  if (xref) blocks.push(note(`Renvoi : ${xref}`));
  blocks.push(
    t(
      `CONTEXTE\n\n${context}\n\nPROBLÈME\n\n${problem}\n\nQUESTION\n${question}\n\n${options}`
    ),
    note(
      `CONDUITE RECOMMANDÉE\n\n${reco}\n\nJUSTIFICATION\n\n${justif}\n\nRISQUES\n\n${risks}\n\nERREURS À ÉVITER\n\n${errors}`
    )
  );
  return blocks;
}

function mdl(num, title, objectif, quand, champs, consignes, exemple) {
  return [
    h(`Modèle ${num} — ${title}`),
    t(
      `Objectif. ${objectif}\n\nQuand l'utiliser. ${quand}\n\nInformations à renseigner. ${champs}\n\nConsignes d'utilisation. ${consignes}`
    ),
    code(exemple),
  ];
}

export default {
  position: 9,
  title: "Projet final et évaluation",
  description:
    "Mobiliser le parcours sur Banque Horizon : diagnostic, cadrage, trois scénarios chiffrés, recommandation, roadmap, risques, déploiement, synthèse exécutive, puis examen (seuil 80 %).",
  lessons: [
    lesson({
      title: "Projet fil rouge — Banque Horizon",
      description:
        "Huit livrables sur une banque fictive : diagnostic, cadrage, business case à trois scénarios, recommandation, feuille de route, risques, déploiement, synthèse pour le comité.",
      minutes: 12,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous traitez de bout en bout un dossier d'offre 25-35 ans pour Banque Horizon (fictive) : diagnostiquer, cadrer, comparer trois scénarios chiffrés, recommander, planifier, sécuriser, préparer le lancement et rédiger une synthèse exécutive. Vous assumez que plusieurs scénarios peuvent être défendables, et que sauter la conformité est une erreur grave."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Banque Horizon est une banque de réseau fictive. Elle vise les jeunes actifs de 25 à 35 ans. La direction constate une concurrence des néobanques (également fictives dans ce cours), une baisse des nouvelles souscriptions, une satisfaction perfectible, un parcours de souscription complexe et un coût d'acquisition élevé. Elle envisage une offre comprenant compte, carte, services digitaux, avantages partenaires et parcours simplifié. Budget limité. Lancement visé à six mois. Contributeurs : marketing, commercial, digital, informatique, finance, risques, conformité, juridique, réseaux.\n\nVotre rôle : chef de projet marketing et développement. Vous préparez la recommandation. Vous ne validez pas l'avis conformité, vous ne signez pas le budget, vous n'êtes pas l'ACPR. Les chiffres ci-dessous sont pédagogiques et fictifs. Les formules sont exactes."
        ),
        h("Méthode opérationnelle"),
        t(
          "Traitez les huit parties dans l'ordre. Ne remplissez pas un trou de donnée par de l'optimisme. Étiquetez toute hypothèse. Pour le business case, calculez coûts totaux, CA, bénéfice, ROI sur coûts totaux, payback de l'investissement. Une VAN n'est qu'une introduction : taux pédagogique 8 %, hypothèse, pas une vérité unique. La recommandation cite les conditions d'échec (conformité, réalisme à six mois, budget)."
        ),
        note(
          "Toutes les entreprises et tous les volumes de ce dossier (Horizon, NéoPulse, Banque Lumen) sont fictifs. Ne les citez pas comme des faits de marché. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
        ),
        h("Dossier — faits internes (fictifs, 12 mois glissants)"),
        code(`BANQUE HORIZON — SEGMENT 25-35 ANS (FICTIF)
Souscriptions nettes N   : 8 400
Souscriptions nettes N-2 : 11 200   soit −25 %
Conversion parcours      : 18 %     (abandon 82 %, pic à l'étape justificatifs)
CAC                      : 185 €
Revenu moyen année 1     : 95 €
CA flux année 1          : 8 400 × 95 € = 798 000 €
Satisfaction (enquête interne pédagogique) : note 6,4 / 10
Parcours actuel          : 9 écrans + 6 pièces justificatives
Offre actuelle           : « Horizon Essentiel » (compte + carte, peu de digital)
Enveloppe projet         : 400 000 € d'investissement + 150 000 € de run annuel
Calendrier politique     : lancement national visé à 6 mois
Contrainte               : pas de recrutement IT supplémentaire cette année

CONCURRENCE CITÉE (FICTIVE, PAS DES PARTS DE MARCHÉ)
NéoPulse  : souscription 4 écrans, CAC annoncé interne 110 € (hypothèse non vérifiée)
Banque Lumen : offre jeunes + cashback partenaires, délai souscription 48 h

CE QUI MANQUE (À NE PAS INVENTER)
Volume exact d'abandons par étape (on a le pic, pas le détail exhaustif)
Élasticité prix de la carte
Capacité réelle IT en jours-homme (fourchette « tendue » seulement)
Avis conformité / juridique : non rendus à ce stade`),
        h("Trois scénarios à comparer — données pédagogiques fictives"),
        code(`Horizon d'analyse : 3 ans. Hors fiscalité. Hors actualisation sauf VAN pédagogique.

SCÉNARIO A — Améliorer l'offre existante (UX + formation réseau)
Investissement     180 000 €
Run annuel         60 000 €
Coûts 3 ans        180 + 3×60 = 360 000 €
Souscriptions incr. 1 200 / 1 800 / 2 000
ARPU année 1       90 €
CA 3 ans           108 + 162 + 180 = 450 000 €
Bénéfice net       450 − 360 = 90 000 €
ROI / coûts totaux 90 / 360 = 25,0 %
Flux nets annuels  48 / 102 / 120 k€  → payback investissement ≈ 2 ans et 3 mois
Délai              4 mois
Faisabilité 6 mois haute
Différenciation    faible vs néobanques
Conformité         allégée (évolution de parcours, pas nouveau produit)

SCÉNARIO B — Nouvelle offre digitale « Horizon Start » (compte + carte + parcours 4 écrans + 2 services)
Investissement     380 000 €
Run annuel         120 000 €
Coûts 3 ans        380 + 3×120 = 740 000 €
Souscriptions incr. 2 800 / 4 200 / 4 800
ARPU année 1       100 €
CA 3 ans           280 + 420 + 480 = 1 180 000 €
Bénéfice net       1 180 − 740 = 440 000 €
ROI / coûts totaux 440 / 740 = 59,5 %
Flux nets annuels  160 / 300 / 360 k€  → payback investissement ≈ 1 an et 9 mois
Délai              6 mois en MVP / 9 à 12 mois si place de marché de 15 partenaires
Faisabilité 6 mois moyenne, seulement en MVP
Différenciation    forte si le parcours tient
Conformité         élevée (nouvelle offre, publicité, CG, KYC) — avis indispensables
Budget             380 k€ dans l'enveloppe 400 k€ : aucune campagne TV

SCÉNARIO C — Partenariat avec NéoPulse (fintech fictive) : marque blanche partielle
Investissement     250 000 €
Run annuel         90 000 € + 25 % du CA incrémental reversé au partenaire
CA brut 3 ans      4 000×85 + 5 500×85 + 6 000×85 = 1 317 500 €
Quote-part 25 %    329 375 €
CA net 3 ans       988 125 €
Coûts 3 ans        250 + 3×90 = 520 000 €
Bénéfice net       988 − 520 = 468 000 € (arrondi)
ROI / coûts totaux 468 / 520 ≈ 90,0 %
Flux nets          165 / 261 / 293 k€  → payback investissement ≈ 1 an et 4 mois
Délai              5 à 8 mois (contrat + API + avis sur le tiers)
Faisabilité 6 mois moyenne (juridique partenaire souvent plus long)
Différenciation    forte mais marque partagée
Conformité         élevée (tiers, données, publicité, sortie)
Dépendance         haute

VAN PÉDAGOGIQUE (taux 8 % HYPOTHÈSE, pas une vérité unique)
A ≈ +47 k€    B ≈ +311 k€    C ≈ +358 k€
La VAN ne tranche pas seule : C reste le plus exposé au tiers.`),
        h("Mise en pratique — huit livrables"),
        t(
          "Rédigez, puis comparez à la correction :\n1) Diagnostic : problèmes, opportunités, informations manquantes, analyses à lancer.\n2) Cadrage : objectifs, périmètre, parties prenantes, livrables.\n3) Business case : recalculer A / B / C (coûts, CA, bénéfice, ROI, payback), risques, délais, faisabilité.\n4) Recommandation : un scénario, justifié, avec conditions d'abandon.\n5) Pilotage : feuille de route simplifiée, jalons, responsabilités.\n6) Risques : principaux risques et mesures de maîtrise.\n7) Déploiement : conditions de lancement, communication, formation, KPI.\n8) Comité : synthèse exécutive (contexte, recommandation, justification, risques, décision attendue).\n\nPlusieurs scénarios peuvent être défendables. Une recommandation qui contourne la conformité n'est pas défendable."
        ),
        h("Correction détaillée — lecture d'ensemble"),
        t(
          "Il n'existe pas une seule solution correcte. A est défendable si l'appétit au risque est faible, si l'IT est saturée, ou si l'enveloppe est en réalité inférieure à 400 k€. C est défendable si la banque assume une dépendance, si la due diligence du tiers est positive, et si le juridique tient le calendrier. B est le modèle recommandé dans cette correction, avec trois conditions : avis conformité et juridique avant toute publicité ; réalisme à six mois = MVP (pas quinze partenaires) ; budget d'investissement plafonné à 380 k€.\n\nPourquoi B plutôt que C malgré un ROI et une VAN inférieurs : le contrôle du parcours et de la marque, la maîtrise interne des avis, et un délai à six mois plus tenable sans contrat de dépendance. Pourquoi B plutôt que A : A ne répond que faiblement à la concurrence perçue et au CAC ; B attaque le parcours, qui est le fait le plus solide du diagnostic. Si l'IT chiffre B à 520 k€ ou à neuf mois, la recommandation bascule vers A, pas vers un B « on verra »."
        ),
        h("Correction — parties 1 et 2"),
        code(`PARTIE 1 — DIAGNOSTIC
Problèmes : souscriptions −25 % ; conversion 18 % ; CAC 185 € ; parcours 9 écrans ; satisfaction 6,4.
Opportunités : simplifier le parcours (pic justificatifs) ; reconstruire une offre lisible 25-35 ; le réseau existe encore (capacité de conseil, pas seulement du paid).
Manquant : détail d'abandon par étape ; charge IT réelle ; avis conformité ; élasticité prix.
Analyses à lancer : cartographie du parcours ; atelier conformité / juridique « ce qui est un nouveau produit » ; charge IT en jours ; test d'offre (pas un lancement).
Erreur : inventer une part de marché NéoPulse.

PARTIE 2 — CADRAGE
Objectifs (ex.) : conversion 28 % à 12 mois ; CAC ≤ 150 € ; souscriptions nettes +2 800 en année 1 si B.
Périmètre in : compte, carte, parcours 4 écrans, 2 services digitaux, 12 agences pilotes puis national.
Périmètre out : place de marché 15 partenaires, TV, refonte du SI cœur, nouveau crédit.
Parties prenantes : sponsor marketing, finance, digital, IT, conformité, juridique, risques, réseau, commercial.
Livrables : note de cadrage, BC, pack comité, avis formalisés, MVP, plan de déploiement, dashboard, REX pilote.`),
        h("Correction — parties 3 et 4"),
        code(`PARTIE 3 — BUSINESS CASE (recalcul)
A : coûts 360 k€ ; CA 450 k€ ; bénéfice 90 k€ ; ROI 25,0 % ; payback ≈ 2,25 ans. Faisable à 4 mois. Peu différenciant.
B : coûts 740 k€ ; CA 1 180 k€ ; bénéfice 440 k€ ; ROI 59,5 % ; payback ≈ 1,75 an. 6 mois seulement en MVP.
C : coûts 520 k€ ; CA net 988 k€ ; bénéfice 468 k€ ; ROI ≈ 90 % ; payback ≈ 1,33 an. Dépendance + avis tiers.
Contrôles : 8 400 × 95 = 798 000 (état actuel). Ne pas additionner le CA actuel au CA incrémental des scénarios (double comptage).
VAN 8 % : introduction, hypothèse, pas un critère unique.

PARTIE 4 — RECOMMANDATION MODÈLE
Recommander B « Horizon Start » MVP, sous conditions :
1) Conformité / juridique / risques : pas de lancement public sans avis. Le chef de projet n'écrit pas l'avis.
2) Six mois : compte + carte + parcours 4 écrans + 2 services. Pas 15 partenaires.
3) Budget : 380 k€ d'investissement, 120 k€ de run. Si IT > 400 k€ ou > 6 mois, bascule vers A.
On n'élimine pas A ni C : on les garde comme plan B (A) et comme option stratégique si due diligence partenaire positive (C), pas comme lancement « en cachette ».`),
        h("Correction — parties 5 à 8"),
        code(`PARTIE 5 — PILOTAGE (jalons types)
M0 Cadrage + BC v1 validés (chef de projet, finance, sponsor)
M1 Avis conformité / juridique sur le MVP (fonctions de contrôle)
M2 Build parcours 4 écrans + scripts réseau (digital, IT, réseau)
M3 Pilote 12 agences + 100 % digital (go/no-go)
M4 REX pilote + correctifs
M5 Lancement national sous conditions du go
M6 Dashboard + REX de lancement
Chemin critique : avis + IT. RACI : sponsor décide, CP coordonne, conformité valide son avis.

PARTIE 6 — RISQUES (extrait)
R1 Avis conformité tardif — impact date — mitigation : saisir dès M0, gel pub.
R2 Charge IT sous-estimée — impact budget/délai — re-chiffrage à M1, bascule A.
R3 Réseau non formé — impact activation — formation avant go national.
R4 CAC paid social — impact rentabilité — plafond de mix.
R5 Périmètre (15 partenaires) — impact 6 mois — freeze du backlog.
C : risque tiers / données / sortie — due diligence, clause de réversibilité.

PARTIE 7 — DÉPLOIEMENT
Conditions de lancement : avis rendus, parcours testé, scripts, formation, dispositif d'incident, KPI gelés.
Communication : ciblée 25-35, promesse = parcours simple, pas de claim non sourcé.
Formation : 20 min rituel agence + e-learning ; pas de national sans pilote réseau.
KPI : conversion, souscriptions nettes, CAC, activation 30 j, réclamations / 1 000, écart budget, jalons.

PARTIE 8 — SYNTHÈSE EXÉCUTIVE (modèle)
Contexte : −25 % de souscriptions 25-35, conversion 18 %, CAC 185 €, parcours 9 écrans.
Recommandation : B MVP « Horizon Start », 380 k€, 6 mois.
Justification : attaque le fait le plus solide (parcours) ; ROI 59,5 % ; reste dans l'enveloppe ; contrôle interne de la conformité.
Risques : avis, charge IT, freeze du périmètre. C plus rentable sur le papier, plus dépendant.
Décision attendue : valider B sous les 3 conditions, ou basculer vers A si IT/avis ne tiennent pas. Ne pas lancer sans avis.`),
        h("Erreurs fréquentes du chef de projet débutant"),
        t(
          "Choisir C uniquement parce que le ROI est le plus élevé. Inventer la part de marché de NéoPulse. Additionner le CA actuel au CA incrémental. Promettre quinze partenaires à six mois. Écrire « la conformité validera, je m'en charge ». Recolorer les cibles pour faire passer B. Oublier le scénario sans projet comme référence qualitative (ne rien faire maintient le −25 %)."
        ),
        h("Situations particulières"),
        t(
          "Si le sponsor exige C dès lundi : due diligence, pas un contrat signé dans la semaine. Si finance refuse tout investissement > 200 k€ : A devient la recommandation, B un dossier N+1. Si l'avis conformité est négatif sur le KYC allégé : on recadre le parcours, on ne publie pas « 4 écrans » comme une promesse déjà tenue."
        ),
      ],
    }),

    lesson({
      title: "Outils de correction — roadmap, risques, synthèse, grille",
      description:
        "Modèles complets de feuille de route, matrice des risques, synthèse exécutive, et grille de notation alignée sur les dix compétences du parcours.",
      minutes: 8,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous disposez de quatre outils réutilisables pour juger votre dossier Horizon et, plus tard, un dossier réel : une roadmap à jalons, une matrice des risques, une synthèse exécutive d'une page, et une grille qui relie les dix compétences du parcours à des preuves observables. Aucune compétence n'est « acquise » par la seule lecture d'un cours."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La correction d'un projet professionnel n'est pas un barème de récitation. Elle teste si le raisonnement tient : les chiffres sont justes, les hypothèses sont nommées, la recommandation est conditionnelle, la conformité n'est pas sautée, le comité sait quoi décider. Un dossier élégant qui lance sans avis est un échec. Un dossier plus prudent (A) qui assume ses limites peut être professionnellement supérieur à un B « magique ».\n\nLes dix compétences du parcours couvrent le cadrage d'offres, le business case, les dossiers de choix, la gouvernance, la coordination transverse, la sécurisation coûts-délais-risques, l'analyse de marché, les supports de gouvernance, la mise en marché, et la cohérence offre / tarif / parcours / expérience / déploiement. La grille ci-dessous les rend visibles sur le livrable Horizon."
        ),
        h("Méthode opérationnelle"),
        t(
          "1) Recalculez A/B/C avant de lire la « bonne reco ». 2) Comparez votre recommandation aux conditions (conformité, six mois, budget), pas au seul nom du scénario. 3) Vérifiez que votre roadmap a un chemin critique. 4) Vérifiez que chaque risque a un propriétaire hors « tout le monde ». 5) Lisez votre synthèse à voix haute : un décideur doit pouvoir trancher en trois minutes. 6) Cochez la grille des dix compétences : une case vide = une lacune, pas un détail."
        ),
        note(
          "Grave : toute recommandation qui propose de lancer, d'annoncer ou de former le réseau sur une fonctionnalité non revue par la conformité / le juridique. En examen, ces réponses sont les distracteurs à écarter."
        ),
        h("Exemple professionnel"),
        t(
          "Un comité Horizon de 25 minutes : 5 minutes de synthèse, 10 minutes d'arbitrage B vs A si l'IT dérape, 10 minutes de décisions (enveloppe, freeze de backlog, date de go/no-go). Le pack trop long est renvoyé. Le pack sans décision attendue est renvoyé. Le pack qui « valide la conformité » à la place de la fonction est arrêté."
        ),
        h("Feuille de route modèle — Horizon Start MVP"),
        code(`FEUILLE DE ROUTE — Horizon Start (scénario B MVP) — 6 mois
Mois 0  Cadrage v1 + BC v1 + registre des risques v1
        Responsable : chef de projet | Décision : sponsor | Finance : gèle les définitions
Mois 1  Dossier d'avis conformité / juridique / risques (périmètre MVP)
        Freeze backlog : 0 partenaire externe au lancement
        Re-chiffrage IT (seuil de bascule A : > 400 k€ ou > 6 mois)
Mois 2  Build parcours 4 écrans + KYC selon avis + scripts réseau + formation pilote
Mois 3  Pilote : 100 % digital + 12 agences (cible conversion pilote 24 %)
        Go / no-go : avis tenus, incidents < seuil, activation 30 j ≥ 55 %
Mois 4  REX pilote + correctifs (lot UX si friction justificatifs encore > 30 % des abandons)
Mois 5  Lancement national sous conditions du go (com, formation, dispositif d'incident)
Mois 6  Dashboard gelé + REX de lancement + décision run N+1

CHEMIN CRITIQUE : avis de contrôle → build IT → pilote → go national
HORS CHEMIN (ne pas laisser déborder) : 15 partenaires, TV, nouveau crédit, refonte SI cœur

RACI SIMPLIFIÉ
Cadrage / reco     : R chef de projet   A sponsor        C finance, métiers   I COMEX
Avis réglementaire : R conformité/jur.  A responsable de la fonction   C CP   I sponsor
Build parcours     : R digital/IT       A DSI            C conformité         I réseau
Formation réseau   : R réseau           A dir. commerciale C CP, marketing    I
Go / no-go         : R chef de projet   A sponsor        C contrôle, finance  I`),
        h("Matrice des risques modèle"),
        code(`MATRICE DES RISQUES — Horizon Start MVP
ID  Risque                         P    I    Détection              Mitigation                         Propriétaire
R1  Avis conformité tardif         M    H    Suivi hebdo avis       Saisir dès M0 ; gel publicité      Conformité (R) / CP (suivi)
R2  Charge IT > enveloppe          M    H    Re-chiffrage M1        Bascule A si >400 k€ ou >6 mois    DSI / finance
R3  Glissement 15 partenaires      H    H    Backlog gelé           Freeze écrit ; tout ajout = avenant CP / sponsor
R4  Réseau non formé               M    H    Taux formation pilote  Pas de national sans seuil         Réseau
R5  CAC paid social                M    M    CAC par canal          Plafond 40 % du mix                Marketing
R6  Double comptage CA             F    H    Revue finance          CA incrémental seulement           Finance
R7  Incident KYC en pilote         M    H    Réclamations / 1 000   Seuil no-go ; pas de « on verra »  Risques + conformité
R8  Promesse pub non tenue         M    H    Relecture claims       Juridique signe les claims         Juridique
R9  Sponsor date politique         M    H    Écart jalon > 10 j     Reco de report, pas de rattrapage fictif  CP
R10 Données partenaire (si C)      H    H    Due diligence          C n'est pas lancé sans clause      Juridique + DPO métier

P/I : F faible / M moyen / H élevé — qualitative, à faire challenger par la fonction risques.
Un risque de conformité n'est pas « clôturé » par un commentaire marketing.`),
        h("Synthèse exécutive modèle"),
        code(`SYNTHÈSE EXÉCUTIVE — COMITÉ DE DÉCISION — 1 page
Banque Horizon (fictive) — Offre 25-35 — [date] — Chef de projet : [nom]

CONTEXTE
Souscriptions 25-35 : 8 400 (−25 % vs N-2). Conversion 18 %. CAC 185 €. Parcours 9 écrans.

RECOMMANDATION
Scénario B MVP « Horizon Start » : 380 k€ d'investissement, 120 k€ de run, 6 mois.
Conditions : avis conformité/juridique/risques avant publicité ; freeze partenaires ; bascule A si IT dépasse.

JUSTIFICATION
Le diagnostic le plus solide est le parcours, pas un slogan « il faut innover ».
B attaque ce parcours, reste dans l'enveloppe, ROI 59,5 %, payback ≈ 1 an et 9 mois.
A (ROI 25 %) est le plan B de faisabilité. C (ROI ≈ 90 %) reste une option stratégique, pas un raccourci : dépendance et avis tiers.

RISQUES
Avis tardif, charge IT, glissement de périmètre, réseau non formé. Aucun lancement sans go.

DÉCISION ATTENDUE
1. Valider B sous conditions, enveloppe 380 k€.
2. Nommer le sponsor et le rituel mensuel.
3. Autoriser la saisine conformité dès cette séance.
4. Trancher dès maintenant : pas de TV, pas de 15 partenaires au lancement.

ANNEXES (non lues en séance si le temps manque) : BC détaillé, RACI, matrice des risques.`),
        h("Grille de notation — dix compétences"),
        code(`GRILLE HORIZON — 40 points. 32/40 = dossier professionnel. Une erreur grave de conformité = plafond 20/40.

C1 Cadrer évolutions d'offres / partenariats / outils (modules 02, 09)
    Preuve : périmètre in/out, acteurs, livrables, contraintes 6 mois.  0 / 2 / 4
C2 Études d'opportunité, BC, scénarios, risques, reco (modules 03, 09)
    Preuve : A/B/C recalculés, hypothèses, reco conditionnelle.         0 / 2 / 4
C3 Dossiers de choix et supports d'arbitrage (modules 04, 09)
    Preuve : pack comité, décision attendue, pas de roman.              0 / 2 / 4
C4 Gouvernance, roadmap, jalons, indicateurs (modules 05, 08, 09)
    Preuve : jalons vérifiables, KPI définis, chemin critique.          0 / 2 / 4
C5 Coordination transverse (modules 05, 06, 09)
    Preuve : RACI, conformité et réseau nommés, escalade sponsor.       0 / 2 / 4
C6 Sécuriser coûts, délais, qualité, risques, arbitrages (modules 06, 09)
    Preuve : écarts, bascule A, pas de rattrapage fictif.               0 / 2 / 4
C7 Analyses de marché, benchmarks, diagnostics (modules 01, 09)
    Preuve : faits internes + concurrence fictive étiquetée, manques.  0 / 2 / 4
C8 Supports destinés aux instances (modules 04, 08, 09)
    Preuve : synthèse 1 page, dashboard, pas d'avis usurpé.             0 / 2 / 4
C9 Mise en marché, déploiement, conduite du changement (modules 07, 09)
    Preuve : go/no-go, formation, com, pilote avant national.           0 / 2 / 4
C10 Cohérence Pdv / tarif / parcours / XP / déploiement (modules 07, 08, 09)
    Preuve : promesse = 4 écrans tenus ; pas de claim hors avis.        0 / 2 / 4

ERREUR GRAVE (plafond 20/40, indépendamment du reste)
- Lancer, publier ou former sur une offre sans avis des fonctions de contrôle.
- Inventer une part de marché ou un avis ACPR.
- Présenter l'attestation LOU comme un titre RNCP ou un diplôme d'État.

Preuves de maîtrise attendues : le dossier lui-même, pas la consultation des leçons.`),
        h("Erreurs fréquentes du chef de projet débutant"),
        t(
          "Remplir la grille tout seul à 40/40. Omettre C10 (promesse vs parcours réel). Traiter C5 comme « j'envoie des mails ». Mettre la conformité en « informé » au lieu de responsable de son avis."
        ),
        h("Situations particulières"),
        t(
          "Dossier A bien argumenté : peut scorer 32/40, meilleur qu'un B sans conditions. Dossier C avec due diligence, clause de sortie et calendrier juridique honnête : défendable. Dossier B sans freeze de backlog : C4 et C6 faibles."
        ),
        h("Mise en pratique"),
        t(
          "Notez votre livrable Horizon avec la grille. Si vous avez recommandé B sans les trois conditions, retirez 8 points (C2, C6, C10). Si vous avez contourné la conformité, appliquez le plafond 20."
        ),
        h("Correction détaillée"),
        t(
          "Le corrigé modèle (B sous conditions) vise 36/40 : il calcule, il conditionne, il nomme le chemin critique, il refuse le lancement sans avis. Il perd éventuellement 4 points si la synthèse dépasse une page ou si le RACI oublie le réseau. Un 40/40 sans doute n'existe pas : il manquera toujours une donnée (charge IT exacte) — l'écrire est une preuve, pas une faiblesse."
        ),
      ],
    }),

    quizLesson({
      title: "Examen final — Chef de projet marketing et développement",
      description:
        "Huit connaissances, cinq raisonnements, deux situations complexes, un cas Horizon. Seuil 80 %. Tentatives illimitées. L'attestation n'est pas un titre RNCP ni un diplôme d'État.",
      passing_score: 80,
      minutes: 15,
      questions: [
        q({
          question:
            "[Connaissance] Business case, budget projet et business plan d'entreprise : quelle distinction est exacte ?",
          options: [
            "A. Les trois mots désignent le même fichier, au choix du chef de projet.",
            "B. Le business case justifie une décision (hypothèses, coûts, bénéfices, risques, scénarios, reco) ; le budget projet est l'enveloppe de dépenses du projet ; le business plan décrit l'entreprise. On ne les confond pas.",
            "C. Le business case est un budget sur cinq ans signé par la conformité.",
            "D. Le budget projet remplace le business case dès que le ROI dépasse 20 %.",
          ],
          correct: 1,
          explanation:
            "Module 03. Un ROI, même pédagogique, ne dissout pas les documents. La conformité ne signe pas un BC à la place de la finance et du sponsor.",
        }),
        q({
          question:
            "[Connaissance] Cas pédagogique : investissement 120 k€, run 30 k€ / an, CA 90 k€ / an, 3 ans, hors fiscalité et hors actualisation. Quels résultats sont exacts ?",
          options: [
            "A. Coûts 150 k€, CA 90 k€, bénéfice −60 k€, ROI négatif, payback impossible.",
            "B. Coûts 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur coûts totaux, payback 2 ans de l'investissement (flux net annuel 60 k€ après run).",
            "C. Coûts 120 k€ seulement, ROI 225 %, payback immédiat.",
            "D. VAN obligatoire à 2 % : c'est la seule vérité financière du cours.",
          ],
          correct: 1,
          explanation:
            "120 + 3×30 = 210 ; 3×90 = 270 ; 60/210 ≈ 28,6 % ; 120/60 = 2 ans. La VAN n'est qu'une introduction à taux étiqueté hypothèse.",
        }),
        q({
          question: "[Connaissance] Une matrice RACI sert principalement à :",
          options: [
            "A. Classer les risques par couleur.",
            "B. Calculer le ROI.",
            "C. Clarifier qui est responsable, qui approuve, qui est consulté, qui est informé — notamment pour ne pas laisser la conformité en simple « informé » sur un avis qui lui appartient.",
            "D. Remplacer le comité de décision.",
          ],
          correct: 2,
          explanation:
            "Module 05. RACI = rôles. L'avis de contrôle n'est pas une information en pied de mail.",
        }),
        q({
          question: "[Connaissance] Un jalon de projet est :",
          options: [
            "A. Une date politique que l'on inscrit pour rassurer le COMEX, même sans livrable.",
            "B. Un événement vérifiable (livrable, décision, avis, go/no-go) qui permet de savoir si le chemin tient.",
            "C. Un KPI de vanité (likes, trafic brut).",
            "D. La signature du chef de projet sur un avis ACPR.",
          ],
          correct: 1,
          explanation:
            "Un jalon sans critère de done n'est pas un jalon. Le chef de projet n'est pas l'autorité de contrôle.",
        }),
        q({
          question:
            "[Connaissance] Sur un projet d'offre bancaire, le chef de projet marketing et développement :",
          options: [
            "A. Valide lui-même la conformité pour gagner deux semaines.",
            "B. Remplace l'ACPR lorsque le délai est court.",
            "C. Coordonne, prépare les saisines, intègre les avis, et n'écrit pas l'avis des fonctions de contrôle.",
            "D. Peut ignorer le juridique si le ROI du scénario C est le plus élevé.",
          ],
          correct: 2,
          explanation:
            "Limite d'autonomie, rappelée dans tout le parcours. Contourner un avis est une erreur grave.",
        }),
        q({
          question: "[Connaissance] Un KPI de projet se distingue d'un indicateur de vanité parce que :",
          options: [
            "A. Il est lié à un objectif du cadrage, a une formule, un propriétaire, une cible, et change une décision.",
            "B. Il est toujours un NPS de marché national.",
            "C. Il agrège le CA de toute l'entreprise, plus visible en comité.",
            "D. Il se choisit le matin du comité selon les courbes les plus vertes.",
          ],
          correct: 0,
          explanation:
            "Module 08. Trafic, likes, CA groupe et NPS inventé ne pilotent pas Horizon.",
        }),
        q({
          question: "[Connaissance] Le sponsor d'un projet :",
          options: [
            "A. Est le chef de projet sous un autre nom.",
            "B. Porte la décision et l'arbitrage de ressources ; le chef de projet prépare et coordonne.",
            "C. Valide les avis de conformité à la place de la fonction.",
            "D. N'existe que dans les projets digitaux.",
          ],
          correct: 1,
          explanation:
            "Module 00 / 05. Confondre sponsor et CP, ou sponsor et conformité, casse la gouvernance.",
        }),
        q({
          question:
            "[Connaissance] Double comptabilisation dans un business case, exemple exact :",
          options: [
            "A. Distinguer bénéfices financiers et non financiers.",
            "B. Additionner au CA incrémental du scénario le CA déjà réalisé par l'offre actuelle, ou compter deux fois le même gain de parcours.",
            "C. Étiqueter une VAN à 8 % comme hypothèse.",
            "D. Séparer investissement et run.",
          ],
          correct: 1,
          explanation:
            "Module 03. A, C et D sont de bonnes pratiques, pas du double comptage.",
        }),
        q({
          question:
            "[Raisonnement] Deux scénarios ont un ROI voisin. Quelle conduite est la plus solide ?",
          options: [
            "A. Choisir au hasard : le ROI a déjà tranché.",
            "B. Choisir automatiquement le plus rapide.",
            "C. Trancher sur délai, faisabilité, risques (dont conformité et dépendance), impact client et alignement — et documenter dans quel cas on changerait.",
            "D. Lancer les deux en parallèle sans enveloppe.",
          ],
          correct: 2,
          explanation:
            "Le ROI n'est pas un vote unique. C'est le cœur de Q6 d'entretien et du cas Horizon (B vs C).",
        }),
        q({
          question:
            "[Raisonnement] Les données manquent pour un business case complet. Que faites-vous ?",
          options: [
            "A. Vous remplissez les trous par des hypothèses non étiquetées « pour avancer ».",
            "B. Vous listez les manques, vous posez des hypothèses étiquetées, vous proposez le recueil minimum, et vous refusez une reco définitive si l'incertitude est bloquante.",
            "C. Vous lancez sans BC : le marché dira vrai.",
            "D. Vous copiez le ROI pédagogique 28,6 % du cas 120/30/90, « c'est toujours ça ».",
          ],
          correct: 1,
          explanation:
            "Situation 4. Recopier 28,6 % n'a aucun lien avec Horizon. Lancer sans BC n'est pas un test de marché, c'est une fuite.",
        }),
        q({
          question:
            "[Raisonnement] L'IT annonce un retard qui fait basculer B de 6 à 9 mois. Quelle reco tenez-vous ?",
          options: [
            "A. Maintenir la date politique et « rattraper » sans levier.",
            "B. Cacher le retard jusqu'au comité de lancement.",
            "C. Recalculer : réduire le MVP, décaler, basculer vers A, ou arrêter — et faire trancher le sponsor. Ne pas lancer la pub nationale à la date fantôme.",
            "D. Passer à C le jour même, sans due diligence, pour sauver les six mois.",
          ],
          correct: 2,
          explanation:
            "Situations 5 et 6. C en urgence sans due diligence est une fuite vers un autre risque grave.",
        }),
        q({
          question:
            "[Raisonnement] Sur Horizon, C affiche ≈ 90 % de ROI et B 59,5 %. Pourquoi le corrigé peut-il néanmoins recommander B ?",
          options: [
            "A. Parce que le ROI le plus faible est toujours plus prudent, par principe.",
            "B. Parce que B combine attaque du parcours (fait solide), contrôle interne des avis, enveloppe 380 k€ et MVP à 6 mois ; C dépend d'un tiers et d'avis sur ce tiers — le ROI ne suffit pas.",
            "C. Parce que C est interdit dans une banque.",
            "D. Parce que la VAN pédagogique à 8 % est une vérité unique qui favorise B.",
          ],
          correct: 1,
          explanation:
            "A n'est pas un principe. C n'est pas interdit. La VAN à 8 % favorise plutôt C et n'est qu'une hypothèse. B est conditionnel.",
        }),
        q({
          question:
            "[Raisonnement] Après validation, les coûts augmentent. Conduite professionnelle :",
          options: [
            "A. Absorber en silence et garder le ROI du dossier voté.",
            "B. Figer l'écart, en nommer la cause, proposer réduire / décaler / financer / arrêter, et ne pas contourner une exigence de contrôle même si elle coûte.",
            "C. Annoncer que le comité « n'aime pas les mauvaises nouvelles », donc on lance.",
            "D. Transférer l'écart sur une autre ligne budgétaire sans le dire à la finance.",
          ],
          correct: 1,
          explanation:
            "Q15 d'entretien, situations 11-12. Silence et maquillage sont des fautes. Un coût de conformité n'est pas une « mauvaise surprise » à contourner.",
        }),
        q({
          question:
            "[Situation complexe] La conformité bloque une fonctionnalité du parcours (KYC allégé). Le sponsor veut « lancer quand même, on régularisera ». Que faites-vous ?",
          options: [
            "A. Lancer : le sponsor décide, vous exécutez, l'avis suivra.",
            "B. Recadrer le périmètre, geler la publicité et le claim, escalader par écrit, et refuser de présenter un go national sans avis — le chef de projet n'est pas le valideur, il n'est pas non plus l'exécutant d'un contournement.",
            "C. Rédiger vous-même un « avis conformité » d'une page pour débloquer.",
            "D. Basculer la fonctionnalité en partenariat NéoPulse pour sortir du périmètre interne.",
          ],
          correct: 1,
          explanation:
            "Erreur grave = A, C, D. Situation 7. Un partenariat ne lave pas un KYC. Un avis forgé par le CP est une usurpation.",
        }),
        q({
          question:
            "[Situation complexe] Le parcours est techniquement prêt. Les équipes commerciales n'ont pas été formées. Le comité de lancement est demain. Quelle décision préparez-vous ?",
          options: [
            "A. Go national : la technique suffit, le réseau « apprendra sur le tas ».",
            "B. No-go national, go limité au digital déjà testé si les conditions de contrôle sont tenues, plan de formation daté, nouveau go réseau — un lancement « prêt IT » sans capacité commerciale n'est pas un lancement.",
            "C. Doubler la publicité TV pour compenser l'absence de scripts.",
            "D. Demander au juridique de former le réseau pendant le comité.",
          ],
          correct: 1,
          explanation:
            "Situation 19, compétence 9. La pub nationale sans formation aggrave réclamations et claims. Le juridique n'est pas un organisme de formation réseau.",
        }),
        q({
          question:
            "[Cas Horizon] Diagnostic : quels faits sont les plus solides pour décider, parmi les données fictives du dossier ?",
          options: [
            "A. La part de marché réelle de NéoPulse, que l'on peut extraire du CAC 110 €.",
            "B. La baisse des souscriptions (−25 %), la conversion 18 %, le CAC 185 €, le parcours à 9 écrans — et le manque d'avis / de charge IT, à ne pas inventer.",
            "C. Le NPS de marché national des néobanques, vérité unique du secteur.",
            "D. Le slogan « il faut innover », suffisant pour choisir C.",
          ],
          correct: 1,
          explanation:
            "Les parts de marché et NPS nationaux ne sont pas dans le dossier. Le CAC 110 € de NéoPulse est une rumeur interne non vérifiée. Le diagnostic se tient sur les faits Horizon.",
        }),
        q({
          question:
            "[Cas Horizon] Quelle recommandation est alignée sur le corrigé modèle, sachant que plusieurs scénarios restent défendables ?",
          options: [
            "A. C uniquement, parce que ROI ≈ 90 % et VAN pédagogique plus haute.",
            "B. B MVP sous trois conditions (avis de contrôle avant pub, réalisme 6 mois sans 15 partenaires, budget 380 k€) ; A comme plan B si l'IT dépasse ; C seulement après due diligence — jamais un lancement sans avis.",
            "C. A uniquement, parce qu'un ROI de 25 % est « plus honnête ».",
            "D. Lancer B et C ensemble dès le mois 1, pour « maximiser l'apprentissage ».",
          ],
          correct: 1,
          explanation:
            "Le corrigé ne déclare pas A ou C illégitimes. Il refuse le ROI comme vote unique, le double lancement hors enveloppe, et tout go sans avis.",
        }),
        q({
          question:
            "[Cas Horizon] Le pack comité propose d'annoncer « Horizon Start, 4 écrans, souscription 10 minutes » alors que l'avis conformité n'est pas rendu. C'est :",
          options: [
            "A. Une bonne pratique de tension constructive sur la conformité.",
            "B. Une erreur grave : claim public et lancement (même en communication) sans avis des fonctions de contrôle. On gèle, on recadre, on n'annonce pas.",
            "C. Acceptable si le ROI de B reste 59,5 %.",
            "D. Acceptable en interne seulement, les salariés n'étant pas des clients.",
          ],
          correct: 1,
          explanation:
            "Erreur grave de conformité. Le ROI ne lave pas un claim. Une annonce interne non maîtrisée fuit. Compétence 10 : cohérence promesse / parcours / contrôle.",
        }),
        q({
          question:
            "[Cas Horizon] Dans la synthèse exécutive, la décision attendue du comité doit surtout :",
          options: [
            "A. Raconter la campagne créative sur trois pages.",
            "B. Demander explicitement de valider B sous conditions (enveloppe, freeze, saisine conformité) ou de basculer vers A — pas un « pour information ».",
            "C. Confier au chef de projet la rédaction de l'avis ACPR.",
            "D. Fixer une part de marché cible à 12 %, chiffre non sourcé.",
          ],
          correct: 1,
          explanation:
            "Un comité sans décision demandée n'est pas un comité. Inventer 12 % de part de marché ou usurper l'ACPR sont des fautes. La campagne n'est pas le dossier d'arbitrage.",
        }),
      ],
    }),

    lesson({
      required: false,
      minutes: 0,
      title: "Bibliothèque facultative — 20 situations",
      description:
        "Vingt situations professionnelles : contexte, problème, options, conduite, justification, risques, erreurs. Hors quota des 5 heures.",
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Hors parcours obligatoire, vous vous entraînez sur vingt situations du métier. Chaque fiche pose un contexte, un problème, une question, des options, une conduite, une justification, des risques et des erreurs. Celles déjà travaillées dans les modules 00 à 08 sont rappelées avec un renvoi ; elles restent utilisables comme révision."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Une situation professionnelle n'a pas toujours une unique bonne réponse chiffrée. Elle a une conduite défendable : faits, mandat, fonctions de contrôle, escalade, écrit. Les distracteurs séduisants sont toujours les mêmes : plaire au sponsor, sauver la date, contourner un avis, maquiller un écart, choisir le ROI le plus élevé sans le reste."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez, choisissez, comparez. Qualifiez : bonne pratique, politique interne, exigence d'une fonction de contrôle, limite d'autonomie du chef de projet. Aucune de ces fiches ne remplace un avis réel de conformité ou de juridique."
        ),
        note(
          "Ressource facultative (is_required : false, 0 minute). Elle ne compte pas dans les 300 minutes. L'examen du module 10 s'appuie toutefois sur les mêmes réflexes."
        ),
        ...sit(
          1,
          "Lancer une offre sans étude de marché",
          "Banque Horizon. Le directeur marketing veut « une offre jeunes dès le trimestre », sans diagnostic ni benchmark. Il a vu une néobanque fictive en conférence.",
          "Décision de lancer sans faits internes (volumes, conversion, CAC) ni recueil minimum.",
          "Que faites-vous avant tout brief agence ?",
          "A. Lancer le brief créatif, l'étude suivra.\nB. Refuser tout lancement, et quitter la réunion.\nC. Poser un diagnostic minimum (faits internes, manques, 3 hypothèses), et refuser de transformer l'idée en promesse publique tant que ce socle n'existe pas.\nD. Copier l'offre vue en conférence, c'est un benchmark.",
          "C.",
          "Une étude n'a pas à être un traité. Elle a à exister. Copier un concurrent fictif n'est pas un benchmark.",
          "Offre hors besoin, claims infondés, budget brûlé, rebuffade conformité plus tard.",
          "Plaire. Inventer une part de marché. Confondre conférence et dossier.",
          "Module 01 — marché et opportunités."
        ),
        ...sit(
          2,
          "Le budget demandé dépasse l'enveloppe",
          "B est chiffré à 520 k€. Enveloppe votée : 400 k€. Le digital veut « demander 120 k€ de plus, le COMEX comprendra ».",
          "Écart d'investissement avant même le build.",
          "Quelle reco portez-vous au sponsor ?",
          "A. Demander 120 k€ sans recalculer le périmètre.\nB. Recouper le chiffrage, proposer un MVP dans l'enveloppe ou une bascule A, et ne pas promettre B intégral à 400 k€.\nC. Lancer à 400 k€ en taisant le reste, avenant plus tard.\nD. Couper la ligne conformité pour rentrer dans l'enveloppe.",
          "B.",
          "Un avenant caché n'est pas un budget. Couper la conformité est une erreur grave.",
          "Dérive, arrêt en cours, offre inaboutie, incident de contrôle.",
          "Taire l'écart. Couper les lignes de contrôle. Promettre le scope plein.",
          "Modules 03 et 04 — business case et décision."
        ),
        ...sit(
          3,
          "Deux scénarios au ROI similaire",
          "Une ETI de services (hors banque) : scénario « nouveau pack » ROI 31 %, scénario « amélioration parcours » ROI 29 %. Risques et délais très différents.",
          "Le sponsor veut « le plus rentable, c'est simple ».",
          "Que répondez-vous ?",
          "A. 31 % gagne.\nB. Grille complète (délai, faisabilité, risques, client, alignement) et reco argumentée, éventuellement contre le ROI max.\nC. Moyenne des deux scénarios.\nD. Lancer les deux sans arbitrage.",
          "B.",
          "Le ROI n'est pas un vote. C'est le cœur du module 03 et de Q6.",
          "Mauvais projet « rentable », saturation des équipes, incohérence client.",
          "ROI unique. Double lancement hors capacité.",
          "Module 03."
        ),
        ...sit(
          4,
          "Données insuffisantes pour le business case",
          "Assurance fictive « Ciel Couvert ». On ignore le taux de mise en vigueur et le coût IT. On vous demande un ROI « pour mercredi ».",
          "Pression de chiffre unique.",
          "Conduite ?",
          "A. Poser 40 % de mise en vigueur « comme d'habitude » sans étiquette.\nB. Recopier 28,6 % du cas pédagogique 120/30/90.\nC. Livrer un BC à hypothèses étiquetées, fourchettes, et reco non définitive si un paramètre est bloquant.\nD. Refuser tout document.",
          "C.",
          "Un BC honnête bat un faux ROI. Le 28,6 % n'a aucun lien avec Ciel Couvert.",
          "Décision sur un nombre creux. Perte de crédit finance.",
          "Hypothèses invisibles. Recopie pédagogique.",
          "Module 03."
        ),
        ...sit(
          5,
          "Le sponsor demande un lancement irréaliste",
          "Horizon : « national dans six semaines, 15 partenaires, TV ». IT et conformité disent non.",
          "Date politique vs chemin critique.",
          "Que faites-vous ?",
          "A. Dire oui, rattraper ensuite.\nB. Écrire l'écart, proposer un MVP tenable ou un report, faire signer le risque si le sponsor maintient — et ne pas lancer la TV.\nC. Contourner la conformité « le temps du lancement ».\nD. Démissionner du projet sans écrit.",
          "B.",
          "L'écrit protège l'entreprise. Contourner un avis est une erreur grave. Partir sans laisser de trace n'aide personne.",
          "Claims, incident, réseau pris au dépourvu, budget brûlé.",
          "Oui pour plaire. Silence. Contournement.",
          "Modules 04 et 07."
        ),
        ...sit(
          6,
          "L'IT annonce un retard",
          "Jalons M2. L'IT glisse de six semaines. Le marketing a déjà réservé un espace pub.",
          "Dépendance critique.",
          "Conduite ?",
          "A. Maintenir la pub, « ça mettra la pression à l'IT ».\nB. Recaler pub et jalon, chiffrer les leviers (scope, délai, moyens), faire arbitrer.\nC. Cacher le retard au sponsor jusqu'à la veille.\nD. Outsourcer le cœur de parcours à NéoPulse dans la semaine, sans due diligence.",
          "B.",
          "La pub n'est pas un levier de build. Le partenaire express recrée un risque de contrôle.",
          "Claim orphelin, coût d'espace, incident KYC si C express.",
          "Pression magique. Silence. Fuite vers un tiers.",
          "Modules 05 et 06."
        ),
        ...sit(
          7,
          "La conformité bloque une fonctionnalité",
          "Le KYC allégé à 2 pièces est refusé. Le parcours « 4 écrans » du claim ne tient plus.",
          "Avis vs promesse marketing.",
          "Conduite ?",
          "A. Lancer le claim, régulariser plus tard.\nB. Recadrer le parcours et le claim, geler la pub, conserver un go seulement sur le périmètre avisable.\nC. Rédiger un avis à la place de la conformité.\nD. Demander au réseau de « ne pas trop demander de pièces ».",
          "B.",
          "Erreur grave = A, C, D. Le CP intègre l'avis, il ne le forge pas, il ne le dilue pas en agence.",
          "Sanction, réclamations, perte de confiance interne.",
          "Contourner. Usurper. Consigne orale au réseau.",
          "Modules 06 et 07 — erreur grave d'examen."
        ),
        ...sit(
          8,
          "Le juridique demande une modification",
          "Les CG de l'offre Start doivent changer une phrase de cashback. Les créas sont déjà en relecture « finale ».",
          "Dépendance juridique tardive, fréquente.",
          "Conduite ?",
          "A. Ignorer : ce n'est « qu'une phrase ».\nB. Intégrer la modification, recaler les créas, ne pas publier l'ancienne version.\nC. Publier puis corriger en ligne « si quelqu'un lit les CG ».\nD. Négocier avec le juridique un délai après la TV.",
          "B.",
          "Une phrase de CG n'est pas un détail créatif. Publier l'ancienne version est un claim.",
          "Publicité trompeuse, rappel de créas, coût.",
          "Minimiser. Publier d'abord.",
          "Module 07."
        ),
        ...sit(
          9,
          "Le réseau refuse le déploiement",
          "12 directeurs d'agence pilotes : « encore une offre, pas le temps ». L'activation 30 j est déjà un KPI.",
          "Adoption interne, pas seulement client.",
          "Conduite ?",
          "A. Forcer le national pour « créer l'usage ».\nB. Comprendre la charge, ajuster le rituel (20 min, script, propriétaire), conditionner le go national à un seuil de formation / activation.\nC. Remplacer le réseau par de la pub uniquement.\nD. Abandonner le projet sans REX.",
          "B.",
          "Compétence 9. Un outil non adopté n'est pas déployé. La pub ne forme pas un conseiller.",
          "Activation basse, réclamations, CAC gaspillé.",
          "Passage en force. Abandon silencieux.",
          "Module 07."
        ),
        ...sit(
          10,
          "Le partenaire ne respecte pas ses engagements",
          "NéoPulse (fictif) livrera l'API « le mois prochain » pour la troisième fois. Aucune clause de pénalité activée.",
          "Dépendance externe.",
          "Conduite ?",
          "A. Attendre encore, le comité n'aime pas les conflits.\nB. Constat écrit, clause, plan B interne (B MVP sans le partenaire), information sponsor et juridique.\nC. Menacer publiquement sur LinkedIn.\nD. Payer un avenant immédiat sans recadrage de livrable.",
          "B.",
          "Le partenaire n'est pas un membre de l'équipe. L'écrit et le plan B, pas le post public.",
          "Date, données, marque, coût d'avenant vain.",
          "Silence. Avenant sans livrable. Communication publique.",
          "Module 06."
        ),
        ...sit(
          11,
          "Le projet dépasse son budget",
          "Réalisé 430 k€ vs 380 k€. Cause mixte : 2 partenaires ajoutés + jours IT.",
          "Écart post-lancement pilote.",
          "Conduite ?",
          "A. Taire jusqu'à la clôture annuelle.\nB. Figer, expliquer, proposer freeze partenaires + stop spend + reco A/B révisée, finance en séance.\nC. Garder le ROI 59,5 % du dossier voté.\nD. Demander au marketing de « trouver » 50 k€ sur une autre campagne, sans trace.",
          "B.",
          "Q15. Le ROI voté est mort si les coûts ont changé. Transfert occulte = faute.",
          "Arrêt tardif, perte de crédit, audit interne.",
          "Silence. ROI fantôme. Vases communicants.",
          "Modules 06 et 08."
        ),
        ...sit(
          12,
          "Les coûts augmentent après validation",
          "Avis conformité : pièces supplémentaires = +40 k€ IT. Le dossier voté ne les avait pas.",
          "Coût de sécurisation tardif.",
          "Conduite ?",
          "A. Contester l'avis pour sauver le budget.\nB. Intégrer le coût, réviser le BC, arbitrer MVP vs report vs A — ne pas contourner l'avis.\nC. Lancer sans les pièces, « on verra les réclamations ».\nD. Imputer les 40 k€ au run marketing pour ne pas toucher l'investissement.",
          "B.",
          "Un avis n'est pas une option d'optimisation. C est une erreur grave.",
          "Incident KYC, rappel d'offre, ROI mensonger.",
          "Contester pour budget. Lancer sans pièces. Reclassement cosmétique.",
          "Erreur grave d'examen."
        ),
        ...sit(
          13,
          "Pas d'accord sur les priorités",
          "Digital veut le parcours. Réseau veut un outil d'entretien. Finance veut le dashboard. Tout « pour le même comité ».",
          "Backlog politique.",
          "Conduite ?",
          "A. Faire les trois au rabais.\nB. Revenir au cadrage, faire trancher le sponsor sur 1 priorité de chemin critique, documenter les reports.\nC. Laisser chaque direction faire sa route.\nD. Prioriser ce qui est le plus visible en COMEX (le dashboard), même si le parcours casse.",
          "B.",
          "Sans arbitrage, tout le monde est en retard. Le dashboard ne répare pas 9 écrans.",
          "Éparpillement, qualité, date.",
          "Rabais généralisé. Routes parallèles. Visible ≠ critique.",
          "Modules 05 et 06."
        ),
        ...sit(
          14,
          "Le comité refuse la recommandation",
          "Vous recommandiez B. Le comité vote A. On vous demande de « défendre B quand même auprès du réseau ».",
          "Décision vs conviction.",
          "Conduite ?",
          "A. Saboter A pour prouver que B avait raison.\nB. Exécuter A, tracer les critères de réouverture de B, aligner le discours réseau sur A.\nC. Relancer un comité pirate avec le digital.\nD. Annoncer B au réseau « ils comprendront plus tard ».",
          "B.",
          "Vous recommandez, vous ne décidez pas. Un double discours réseau est un claim interne.",
          "Confusion commerciale, perte de sponsor, incident de com.",
          "Sabotage. Comité parallèle. Annonce non votée.",
          "Module 04."
        ),
        ...sit(
          15,
          "La direction change les objectifs",
          "En M3, nouvel objectif : « aussi le crédit conso 25-35 ». Le MVP Start n'y est pas.",
          "Changement de cadrage en cours.",
          "Conduite ?",
          "A. Ajouter le crédit dans le sprint, six mois inchangés.\nB. Re-cadrer par écrit : nouveau périmètre, nouveau BC, nouveau délai, nouveau circuit d'avis — le crédit n'entre pas en silence.\nC. Promettre le crédit « en communication », le livrer plus tard.\nD. Ignorer la direction.",
          "B.",
          "Un nouvel objectif est un nouveau projet ou un avenant. Un claim crédit sans produit est une erreur grave de cohérence (C10).",
          "Surcharge, avis crédit non saisi, publicité trompeuse.",
          "Ajout silencieux. Claim orphelin.",
          "Modules 02 et 07."
        ),
        ...sit(
          16,
          "Pilote sous les attentes",
          "Conversion pilote 19 % vs 24 %. Activation 52 % vs 55 % (seuil no-go 55 %). Sponsor : « on généralise, les volumes arrangeront les % ».",
          "Go/no-go sous pression.",
          "Conduite ?",
          "A. Généraliser : la loi des grands nombres.\nB. No-go national, REX, correctifs, second pilote ou cible revue votée — les volumes n'arrangent pas un parcours percé.\nC. Changer la cible à 19 % le matin du comité.\nD. Couper le pilote agence et ne garder que le digital pour « embellir ».",
          "B.",
          "Maquiller le seuil n'est pas du pilotage. Un % ne se dilue pas par magie.",
          "CAC national gaspillé, réseau décrédibilisé.",
          "Généralisation magique. Cible reculée en silence. Biais d'échantillon.",
          "Modules 07 et 08."
        ),
        ...sit(
          17,
          "Les utilisateurs n'adoptent pas l'outil",
          "Outil d'aide à la vente déployé en réseau d'une enseigne de distribution fictive. 18 % d'utilisateurs hebdo vs 60 % cible.",
          "Adoption, pas livraison technique.",
          "Conduite ?",
          "A. Fermer le projet, « ils ne veulent pas changer ».\nB. Diagnostiquer friction (temps, double saisie, management), former, simplifier, relier à un rituel managérial, mesurer à nouveau.\nC. Rendre l'outil obligatoire sans rien changer au design.\nD. Ajouter des KPI de vanité (connexions unique le jour de la formation).",
          "B.",
          "L'adoption se conçoit. L'obligation brute sans design crée du shadow Excel.",
          "Ombre, qualité de donnée, CA non vu.",
          "Fatalisme. Obligation sèche. Vanité.",
          "Modules 07 et 08."
        ),
        ...sit(
          18,
          "Ventes inférieures aux prévisions",
          "M3 post-lancement Horizon Start : 1 100 souscriptions vs 1 400. CAC 168 € vs 150 €. Conversion 22 % vs 28 %.",
          "Écart commercial à expliquer.",
          "Conduite ?",
          "A. Plus de paid social immédiatement.\nB. Décomposer : parcours vs mix vs offre vs saison vs claim. Agir d'abord sur la cause (souvent conversion), pas sur le budget d'acquisition.\nC. Déclarer le succès : 1 100 c'est « déjà bien ».\nD. Recolorer la prévision à 1 100.",
          "B.",
          "Module 08. Alimenter un entonnoir percé aggrave le CAC. Recolorer n'est pas un REX.",
          "Budget brûlé, BC discrédité.",
          "Pub d'abord. Succès proclamé. Cible reculée.",
          "Module 08."
        ),
        ...sit(
          19,
          "Prêt techniquement, réseau non formé",
          "IT : go. Formation : 30 % des conseillers. Pub nationale réservée J+3.",
          "Fausse readiness.",
          "Conduite ?",
          "A. Go national.\nB. Reporter la pub nationale, go borné si les avis le permettent, former, nouveau jalon réseau.\nC. Envoyer un PDF et considérer la formation faite.\nD. Demander à la conformité d'animer les sessions pour « faire d'une pierre deux coups ».",
          "B.",
          "Situation d'examen. Un PDF n'est pas une formation. La conformité n'est pas un organisme de formation commerciale.",
          "Réclamations, claims, activation basse.",
          "Go magique. PDF. Mauvaise RACI.",
          "Module 07 — examen."
        ),
        ...sit(
          20,
          "Risque majeur quelques jours avant le lancement",
          "J−4. Fuite potentielle de données de test clients fictifs chez un prestataire de parcours. La DSI et le juriste sont saisis. Le sponsor veut « ne pas rater la date COMEX ».",
          "Incident vs date.",
          "Conduite ?",
          "A. Lancer : ce ne sont que des données de test.\nB. Stop lancement, circuit incident (DSI, juridique, risques, sponsor), communication factuelle interne, nouvelle date après confinement — la date COMEX n'est pas un argument de sécurité.\nC. Minimiser dans le reporting (« risque faible, on surveille »).\nD. Reporter seulement la pub, garder le parcours ouvert « pour les clients déjà dans l'entonnoir ».",
          "B.",
          "Même pédagogiques, les données de test peuvent être personnelles. Minimiser un incident est une faute. Un entonnoir ouvert n'est pas plus sûr.",
          "Incident, confiance, régulateur, date sauvée pour une semaine perdue ensuite.",
          "Lancer malgré tout. Reporting cosmétique. Demi-mesure.",
          "Module 06 — erreur grave si l'on lance."
        ),
        h("Erreurs fréquentes du chef de projet débutant"),
        t(
          "Traiter ces vingt fiches comme des QCM à tricher. Plaire. Sauver la date. Forger un avis. Recolorer une cible. Choisir le ROI max. Publier un claim orphelin."
        ),
        h("Situations particulières"),
        t(
          "Hors banque : les mêmes schémas (retard IT, adoption, budget, comité) tiennent en assurance, distribution, B2B. Seuls changent les vocabulaire (mise en vigueur, contrat, rayon) et les fonctions de contrôle."
        ),
        h("Mise en pratique"),
        t(
          "Choisissez S07, S12, S19 et S20. Écrivez en une ligne la conduite et le nom de l'erreur grave évitée. Comparez aux fiches."
        ),
        h("Correction détaillée"),
        t(
          "S07 et S12 : ne pas contourner un avis, même pour le budget. S19 : pas de go national sans formation. S20 : la date COMEX ne pèse pas contre un incident. Si vous avez lancé « quand même » une seule fois, relisez les consignes d'examen : c'est le distracteur récurrent."
        ),
      ],
    }),

    lesson({
      required: false,
      minutes: 0,
      title: "Bibliothèque facultative — 25 modèles",
      description:
        "Vingt-cinq documents copiables : diagnostic, benchmark, SWOT, opportunité, cadrage, parties prenantes, BC, scénarios, ROI, risques, dossiers, RACI, roadmap, reporting, déploiement, go/no-go, bilan, REX. Exemples Horizon. Hors quota des 5 heures.",
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous disposez de vingt-cinq modèles utilisables en entreprise. Chaque fiche indique l'objectif, le moment, les champs, les consignes, et un exemple Horizon (fictif, court). Ce ne sont pas des fichiers vides. Adaptez les libellés à votre politique interne ; n'inventez pas de parts de marché."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un modèle n'est pas une preuve de maîtrise. La preuve, c'est le modèle rempli avec des faits, des hypothèses étiquetées, un propriétaire, une date. Le chef de projet n'y écrit pas un avis de conformité. Les exemples Horizon sont pédagogiques."
        ),
        h("Méthode opérationnelle"),
        t(
          "Copiez le bloc code. Remplissez. Faites relire le chiffre par son propriétaire. Archivez la version et la date. Un modèle non daté n'est pas un livrable de comité."
        ),
        note(
          "Ressource facultative (0 minute, non requise). Hors 300 minutes. Formats : texte copiable (le LMS n'impose pas de téléchargement)."
        ),
        ...mdl(
          1,
          "Diagnostic marketing",
          "Photographier problèmes, opportunités, manques, avant toute idée d'offre.",
          "Module 01, entrée d'un projet, avant le BC.",
          "Faits internes, client, concurrence (étiquetée), capacités, manques, problématique.",
          "Pas de part de marché inventée. Séparer fait / hypothèse / manque.",
          `DIAGNOSTIC — Banque Horizon 25-35 — [date]
FAITS : souscriptions 8 400 (−25 %) ; conversion 18 % ; CAC 185 € ; 9 écrans.
CLIENT : friction justificatifs (pic d'abandon). Satisfaction 6,4/10 (enquête interne).
CONCURRENCE (fictive) : NéoPulse 4 écrans ; Lumen cashback — PAS des parts de marché.
CAPACITÉS : réseau présent ; IT sans recrutement cette année.
MANQUES : charge IT j/h ; avis conformité ; détail d'abandon par étape.
PROBLÉMATIQUE : comment remonter souscriptions et baisser le CAC sans promettre un parcours que le contrôle ne permet pas ?`
        ),
        ...mdl(
          2,
          "Grille de benchmark concurrentiel",
          "Comparer sur des critères observables, à une date.",
          "Étude d'opportunité, revue d'offre.",
          "Critères, périmètre, sources, date, écarts à combler ou à assumer.",
          "Faits publics ou internes. Hypothèses marquées. Pas de rumeur de CAC concurrent présentée comme un fait.",
          `BENCHMARK (FICTIF) — date [ ]
Critère              Horizon actuel    NéoPulse (fictif)    Lumen (fictif)
Étapes souscription  9                 4                    n.d.
Pièces               6                 n.d.                 n.d.
Délai annoncé        n.d.              n.d.                 48 h (claim public fictif)
CAC                  185 € (interne)   110 € (rumeur interne, NON VÉRIFIÉE)
ÉCART À TRAITER : nombre d'étapes. ÉCART À NE PAS COPIER : rumeur de CAC.`
        ),
        ...mdl(
          3,
          "Analyse SWOT",
          "Structurer forces, faiblesses, opportunités, menaces pour un comité court.",
          "Diagnostic, pack d'arbitrage.",
          "4 cases, faits sourcés, pas de slogan.",
          "Une faiblesse interne n'est pas une menace. Une rumeur n'est pas une opportunité.",
          `SWOT — Horizon 25-35
S Réseau + marque banque (fictive)    W Parcours 9 écrans, CAC 185 €, −25 %
O Simplifier KYC sous avis            T Néobanques fictives, date 6 mois, IT tendue
Usage : ouverture de comité, pas un substitut au BC.`
        ),
        ...mdl(
          4,
          "Fiche d'étude d'opportunité",
          "Décider si l'idée mérite un BC.",
          "Sortie de diagnostic, avant cadrage lourd.",
          "Problème, cible, option, effort, risques, go étude / stop.",
          "Stop est une décision honorable. « Go pub » n'est pas une opportunité.",
          `OPPORTUNITÉ — Horizon Start
Problème : conversion 18 %, CAC 185 €.
Option : MVP compte+carte+4 écrans.
Effort : 380 k€ / 6 mois (hyp. B).
Risque clé : avis conformité.
Décision demandée : autoriser le BC détaillé B vs A vs C.`
        ),
        ...mdl(
          5,
          "Note de cadrage",
          "Figer objectifs, périmètre, acteurs, livrables, contraintes.",
          "Après go étude, avant build.",
          "Contexte, problématique, objectifs, bénéfices, périmètre in/out, livrables, parties prenantes, contraintes, risques initiaux, budget, calendrier, critères de réussite.",
          "Tout ajout ultérieur = avenant. Le crédit conso n'entre pas en silence.",
          `CADRAGE — Horizon Start MVP — v1 — [date]
Objectifs : conversion 28 % à 12 mois ; CAC ≤ 150 € ; +2 800 souscriptions an 1 (si B).
In : compte, carte, 4 écrans, 2 services, pilote 12 agences.
Out : 15 partenaires, TV, crédit, refonte SI.
Contrainte : 6 mois, 400 k€, pas de recrutement IT.
Critères : avis rendus, go/no-go pilote, KPI module 08.
Sponsor : dir. marketing    CP : [nom]`
        ),
        ...mdl(
          6,
          "Matrice des parties prenantes",
          "Cartographier pouvoir, intérêt, mode de relation.",
          "Cadrage, gouvernance.",
          "Acteur, rôle, intérêt, pouvoir, risque, canal.",
          "La conformité n'est pas un « bloquant à gérer », c'est une fonction de contrôle.",
          `ACTEUR            INTÉRÊT     POUVOIR    CANAL
Sponsor marketing  offre       décision   rituel hebdo
Finance            BC/budget   veto €     gel des chiffres
Conformité         avis        veto offre saisine formelle
IT                 charge      chemin     re-chiffrage M1
Réseau             charge      adoption   formation pilote
Juridique          CG/claims   veto pub   relecture créas`
        ),
        ...mdl(
          7,
          "Business case",
          "Justifier une décision : hypothèses, coûts, bénéfices, risques, scénarios, reco.",
          "Avant comité d'arbitrage.",
          "Les blocs du module 03. Séparer financier / non financier.",
          "Pas de double comptage. VAN étiquetée si utilisée. CP + finance.",
          `BC v1 — Horizon — 3 ans — hors fiscalité
Hypothèses : ARPU, volumes, run — voir scénarios A/B/C du dossier.
A 360 k€ coûts / 450 k€ CA / +90 k€ / ROI 25,0 % / payback 2,25 ans
B 740 / 1 180 / +440 / 59,5 % / 1,75 an
C 520 / 988 net / +468 / ≈90 % / 1,33 an
VAN 8 % HYPOTHÈSE : A +47 / B +311 / C +358 k€ — pas une vérité unique
Reco : B MVP sous conditions (avis, 6 mois, 380 k€)`
        ),
        ...mdl(
          8,
          "Tableau de comparaison des scénarios",
          "Mettre A/B/C (ou prudent/central/ambitieux) sur la même grille.",
          "Leçon scénarios, comité.",
          "Investissement, run, ROI, délai, faisabilité, risques, client, dépendance.",
          "Le max ROI n'est pas pré-coché.",
          `            A améliorer     B Start MVP      C partenariat
Invest.     180 k€          380 k€           250 k€
ROI 3 ans   25,0 %          59,5 %           ≈90 %
Délai       4 mois          6 mois MVP       5-8 mois
Faisable 6m haute           moyenne          moyenne
Contrôle    interne         interne          tiers
Reco modèle                 OUI sous cond.   option stratégique`
        ),
        ...mdl(
          9,
          "Calcul du ROI",
          "Rendre le calcul reproductible.",
          "BC, REX financier, oral d'entretien.",
          "Investissement, runs, revenus, formule, limites.",
          "ROI = (revenus − coûts totaux) / coûts totaux. Payback sur l'investissement, pas sur les coûts totaux (sauf si vous le dites).",
          `CAS PÉDAGOGIQUE COURS
Invest. 120 k€ + run 3×30 = coûts 210 k€ ; CA 3×90 = 270 ; bénéfice 60
ROI 60/210 ≈ 28,6 % ; flux net 60 k€/an ; payback invest. 2 ans
CAS B HORIZON
Coûts 740 ; CA 1 180 ; bénéfice 440 ; ROI 440/740 ≈ 59,5 %
Limite : hors fiscalité, hors actualisation (VAN 8 % = hypothèse)`
        ),
        ...mdl(
          10,
          "Matrice des risques",
          "Rendre les risques actionnables.",
          "Cadrage, chaque comité, avant go.",
          "ID, cause, P, I, détection, mitigation, propriétaire.",
          "Un risque de contrôle n'est pas clôturé par un commentaire marketing. Voir leçon correction 8 min.",
          `Voir matrice R1-R10 dans la leçon « Outils de correction ».
Minimum comité : R1 avis, R2 IT, R3 périmètre, R4 réseau, R7 KYC.`
        ),
        ...mdl(
          11,
          "Dossier d'aide à la décision",
          "Pack complet d'arbitrage.",
          "COMEX / comité de choix.",
          "Les 10 blocs du module 05 : synthèse, contexte, opportunité, objectifs, scénarios, finance, risques, impacts, reco, décision.",
          "20 pages max, 8 mieux. Décision formulée.",
          `DOSSIER DÉCISION — Horizon Start
1 Synthèse (modèle 12)
2-4 Contexte / opportunité / objectifs (cadrage)
5 Scénarios A/B/C (modèle 8)
6 Finance (modèles 7 et 9)
7 Risques (modèle 10)
8 Impacts : IT, réseau, claims
9 Reco B sous conditions
10 Décisions : enveloppe, freeze, saisine, rituel`
        ),
        ...mdl(
          12,
          "Synthèse exécutive",
          "Permettre un arbitrage en 3 minutes.",
          "Première page de tout pack.",
          "Contexte, reco, justification, risques, décision attendue.",
          "Une page. Pas d'avis usurpé. Voir leçon correction.",
          `Voir le bloc SYNTHÈSE EXÉCUTIVE de la leçon « Outils de correction » — à copier tel quel puis dater.`
        ),
        ...mdl(
          13,
          "Support de comité de pilotage",
          "Suivre, pas relancer le BC entier.",
          "Rituel mensuel post-arbitrage.",
          "3 messages, dashboard, risques ouverts, décisions.",
          "Chiffres gelés. Pas de surprise de contrôle en séance.",
          `COPIL M2 — Horizon
Messages : conversion −3 pts ; CAC +22 € ; budget sous-consommé car lot 2 gelé.
Dashboard : voir module 08.
Décisions : lot 2 UX 18 k€ sous avis ; plafond paid social 40 %.`
        ),
        ...mdl(
          14,
          "Matrice RACI",
          "Éviter que tout le monde croie que l'autre s'en charge.",
          "Cadrage, kickoff, changement d'acteur.",
          "Livrables × R/A/C/I.",
          "Avis de contrôle : R et A = la fonction, pas le CP.",
          `Livrable           R              A         C                 I
Reco / cadrage     CP             Sponsor    Finance, métiers   COMEX
Avis conformité    Conformité     Resp. fct  CP                 Sponsor
Claims pub         Juridique      Resp. fct  Marketing, CP      Réseau
Go / no-go         CP (prépare)   Sponsor    Contrôle, finance  Équipes`
        ),
        ...mdl(
          15,
          "Feuille de route projet",
          "Rendre le chemin critique visible.",
          "Après décision, à chaque glissement.",
          "Jalons, dates, responsables, hors-scope.",
          "Une date politique sans livrable n'est pas un jalon. Voir leçon correction.",
          `Voir FEUILLE DE ROUTE M0-M6 dans « Outils de correction ».`
        ),
        ...mdl(
          16,
          "Planning avec jalons",
          "Décliner la roadmap en dates vérifiables.",
          "Pilotage opérationnel.",
          "Jalon, date référence, date réelle, écart, commentaire.",
          "L'écart s'écrit tôt.",
          `Jalon                 Réf.     Réel      Écart    Commentaire
Avis v1 saisi        S+2 sem  —         —        Chemin critique
Pilote start         M3       —         —        12 agences + digital
Go/no-go             M3+3 sem —         —        Seuils écrits
National             M5       —         —        Sous go`
        ),
        ...mdl(
          17,
          "Tableau de suivi des actions",
          "Sortir les actions du compte rendu oral.",
          "Après chaque rituel.",
          "Action, propriétaire, date, statut, critère de done.",
          "Pas d'action « tout le monde ». Max 10 ouvertes.",
          `ID  Action                    Qui        Date     Done si
A12 Saisine conformité MVP    CP         [j+2]    Accusé + interlocuteur
A13 Freeze backlog écrit      Sponsor    [comité] Mail de décision
A14 Scripts relance J+7       Réseau     [M2]     100 % pilote formés`
        ),
        ...mdl(
          18,
          "Compte rendu de réunion projet",
          "Tracer décisions, pas les discussions.",
          "Chaque rituel.",
          "Présents, décisions, actions, alertes, prochaine date.",
          "Un CR sans décision est un journal. Diffusion limitée, pas de données clients nominatives.",
          `CR — COPIL Horizon — [date]
Décisions : freeze 15 partenaires ; saisine conformité confirmée.
Alertes : IT re-chiffrage M1 (seuil bascule A).
Actions : A12 A13.
Prochain : [date] — chiffres gelés J−3 par finance.`
        ),
        ...mdl(
          19,
          "Tableau de bord des KPI",
          "Voir le réalisé vs la cible vs l'action.",
          "Chaque comité de suivi, REX.",
          "KPI, formule, réalisé, cible, écart, propriétaire, décision.",
          "Module 08. Pas de likes. Pas de CA groupe.",
          `Voir dashboard M2 (conversion, souscriptions, CAC, CA flux, activation, réclamations, budget, jalon) dans le module Performance.`
        ),
        ...mdl(
          20,
          "Plan de déploiement",
          "Passer du build au réel (canaux, vagues, support).",
          "Avant pilote et avant national.",
          "Vagues, critères d'entrée, support, rollback.",
          "Pas de national si le pilote rate les seuils.",
          `VAGUE 0  Digital interne test
VAGUE 1  12 agences + 100 % digital (pilote)
VAGUE 2  National sous go
Rollback : couper la pub, figer les souscriptions nouvelles, script d'incident
Support : hotline interne, FAQ, propriétaire qualité`
        ),
        ...mdl(
          21,
          "Checklist de lancement",
          "Empêcher un go magique.",
          "J−10 et J−1 du lancement visé.",
          "Cases datées, nommées. Avis, formation, claims, KPI, incident.",
          "Une case vide = no-go, pas « on verra lundi ».",
          `CHECKLIST GO HORIZON
[ ] Avis conformité / juridique / risques rendus et intégrés
[ ] Claims signés juridique
[ ] Parcours testé (seuil conversion pilote)
[ ] Formation réseau ≥ seuil
[ ] Dashboard gelé
[ ] Dispositif d'incident nommé
[ ] Sponsor a signé le go
INTERDIT : cocher « avis » à la place de la fonction`
        ),
        ...mdl(
          22,
          "Plan de conduite du changement",
          "Faire adopter (réseau, outils, clients).",
          "Dès le cadrage si l'adoption est un critère, pas la veille.",
          "Cibles, messages, rituels, relais, mesures d'adoption.",
          "Un e-learning seul n'est pas un plan. Relier au rituel managérial.",
          `CIBLE : conseillers 25-35 + directeurs d'agence pilotes
MESSAGE : parcours 4 écrans, script relance J+7, ce qui change vs Essentiel
RELAIS : 12 directeurs pilotes
RITUEL : 20 min / semaine, 6 semaines
MESURE : % formés, activation 30 j, usage outil`
        ),
        ...mdl(
          23,
          "Grille go / no-go",
          "Rendre le lancement binaire et honnête.",
          "Fin de pilote, J−4 national.",
          "Critères, seuils, statut, dérogation (sponsor + contrôle, écrite).",
          "Pas de dérogation orale sur un avis de contrôle.",
          `CRITÈRE                 SEUIL          STATUT
Avis contrôle           rendus          [ ]
Conversion pilote       ≥ 24 %          [ ]
Activation 30 j         ≥ 55 %          [ ]
Formation réseau        ≥ 90 % pilote   [ ]
Incidents KYC           < seuil risques [ ]
DÉROGATION : seulement écrite, sponsor + fonction concernée. Jamais sur un avis négatif.`
        ),
        ...mdl(
          24,
          "Bilan projet",
          "Clôturer : prévu vs réalisé, décisions, suite.",
          "Clôture ou arrêt.",
          "Objectifs, coûts, délais, qualité, bénéfices, leçons, suite (run, stop, N+1).",
          "Ne pas recolorer les cibles. Un arrêt a droit à un bilan.",
          `BILAN — Horizon Start — [date]
Prévu B : 380 k€, 6 mois, conversion 28 % à 12 mois
Réalisé : [à remplir]
Bénéfices vs BC : [CA incrémental, pas CA groupe]
Suite : run 120 k€ / stop partenaires / dossier crédit = autre cadrage`
        ),
        ...mdl(
          25,
          "Retour d'expérience",
          "Transformer un écart en standard.",
          "Après jalon, incident, clôture.",
          "Faits, causes, actions, capitalisation, alertes hors REX.",
          "Module 08. Un incident de contrôle sort du REX vers le circuit dédié.",
          `REX pilote Horizon
Écart : activation 61 % vs 70 %
Cause retenue : pas de script J+7
Cause écartée : « les jeunes n'aiment pas les banques »
Action : script + rituel 20 min (réseau, [date])
Capitalisation : checklist lancement + ligne « script relance »
Alerte hors REX : aucune si pas d'incident de données`
        ),
        h("Erreurs fréquentes du chef de projet débutant"),
        t(
          "Laisser les modèles vides. Datation absente. Avis de conformité tapé dans le RACI du CP. Parts de marché fictives recopiées comme des faits. Dashboard à 40 KPI."
        ),
        h("Situations particulières"),
        t(
          "Hors banque : remplacez « souscription » par contrat, mise en vigueur, ou commande. La structure des 25 modèles ne change pas. Politique interne : un modèle groupe prime sur celui-ci s'il est licite et plus précis."
        ),
        h("Mise en pratique"),
        t(
          "Remplissez les modèles 5, 8, 12 et 23 pour Horizon sans regarder la correction du projet. Comparez ensuite : périmètre out, ROI, décision, cases go/no-go."
        ),
        h("Correction détaillée"),
        t(
          "Une note de cadrage juste a un out explicite (15 partenaires, TV, crédit). Un tableau de scénarios juste ne pré-coche pas C. Une synthèse juste demande une décision. Une grille go/no-go juste refuse la dérogation orale sur un avis négatif. Si ces quatre points tiennent, les autres modèles s'alignent."
        ),
      ],
    }),
  ],
};
