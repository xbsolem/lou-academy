import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 12,
  title: "Primes, avantages en nature, titres-restaurant et frais",
  description:
    "Qualifier primes et avantages, les assujettir, appliquer la méthode d'exonération des titres-restaurant et des AEN sans inventer un plafond URSSAF 2026 absent du fichier des taux.",
  lessons: [
    pack({
      title: "Qualifier une prime avant de la saisir",
      description:
        "Contractuelle, conventionnelle, exceptionnelle : trois régimes de décision, un même réflexe d'assiette.",
      minutes: 18,
      objectifs:
        "Vous distinguez l'origine d'une prime, vous savez ce qui est dû et ce qui est une libéralité, et vous refusez une saisie sans qualification (soumise, prorata, absences, départ).",
      theorie:
        "Une prime n'est pas « une ligne en plus ». C'est un élément de rémunération dont l'origine commande le droit, le prorata, le sort en absence, le sort en sortie, parfois l'usage. Trois familles :\n\n1. Prime contractuelle : le contrat (ou un avenant) la prévoit (montant, formule, périodicité, conditions). Elle est due dans les termes du contrat. Modifier ou supprimer : avenant, pas un mail de manager.\n\n2. Prime conventionnelle : la CCN ou un accord la prévoit (ancienneté, vacances, panier, salissure, 13e mois, etc.). Vous lisez l'article. Vous n'inventez pas le montant. Un minimum CCN n'est jamais recité de mémoire dans cette formation.\n\n3. Prime exceptionnelle / libéralité : versée sans texte préexistant. Une fois versée, elle est de la rémunération du mois, en principe soumise (CSS L. 242-1), sauf régime d'exonération expressément prévu par un texte (intéressement, PPV, etc. — à lire, pas à improviser). Répétée, elle peut devenir un usage. Le junior signale la répétition ; il ne décide pas qu'un usage est né.\n\nAssiette : par défaut, une prime en contrepartie du travail entre dans le brut soumis (cotisations, CSG/CRDS, PAS sur le net imposable). Les exceptions sont des régimes nommés (frais, certains avantages, dispositifs exonérés). L'absence de ligne dans rates-2026.json n'autorise pas à inventer une exonération.\n\nProrata : maladie, entrée, sortie, temps partiel. Le texte de la prime dit souvent si elle est due « au prorata du temps de présence » ou « si présent le jour du versement ». Sans clause, le responsable paie tranche. Un 13e mois n'a pas les mêmes règles qu'une prime de vacances CCN.\n\nPériode : janvier 2026. Une prime de 200,00 € sur un salarial à 3 100,00 € donne un brut 3 300,00 €, toujours sous PMSS 4 005 €. Cotisations T1 sur 3 300. Ce n'est pas un « net cadeau » : le coût employeur inclut les patronales (maladie 13 % taux plein, AF 5,25 % si RGDU non demandée).\n\nObligation légale : assiette L. 242-1, mentions du bulletin. Disposition conventionnelle : barème CCN à lire. Paramètre d'entreprise : libéralité validée. Hypothèse pédagogique : montants d'exemple.",
      methode:
        "1. Origine écrite (contrat, CCN, accord, décision datée) ?\n2. Formule, assiette, plafond, prorata, absences, départ.\n3. Régime social : soumis par défaut ; exonération seulement si texte nommé et conditions.\n4. Régime fiscal : souvent aligné, exceptions (PPV, intéressement) à lire.\n5. Rubrique, DSN, journal.\n6. Si « prime pour tout le monde sauf X » : égalité de traitement, RH.",
      noteText:
        "Une prime « non soumise » demandée par un gérant n'existe pas hors texte. Vous n'occultez pas 500 €. Vous expliquez l'assiette et vous escaladez.",
      exemple:
        "PME 42 personnes. Mail direction : « 200 € à tout le monde, ils ont bien bossé. » Lina demande : qui (arrêt, entrée le 31, forfait jours) ? Soumise : oui par défaut. Libellé : prime exceptionnelle janvier 2026. Le salarié en CSS trois jours : la décision dit-elle prorata ? Si silence, N+1. Elle ne sort pas 200 € « net » en bricolant les cotisations.",
      extra: [
        code(`QUALIFICATION PRIME
Origine : contrat / CCN art. / accord / usage possible / libéralité
Montant ou formule : ................ (pas de barème CCN inventé)
Périodicité : mensuelle / trimestrielle / annuelle / unique
Prorata entrée-sortie : oui / non / à lire
Absences : due / prorata / condition de présence
Social : soumis (défaut) / exonéré SI texte = ........
Fiscal : idem, source ........
Validée par : ........  date : ........
Janvier 2026 : PMSS 4 005 € — la prime entre dans le brut du mois.`),
      ],
      erreurs:
        "Saisir net. Oublier le salarié en arrêt. Inventer une exonération « prime transport ». Copier le 13e mois d'un autre dossier. Payer une prime CCN sans ouvrir l'article.",
      particuliers:
        "PPV, intéressement, participation : régimes propres, plafonds, dates, DSN. Hors autonomie si vous n'avez pas le texte. Prime d'impatriation, clause de non-concurrence : juridique. Avantages en nature : leçon dédiée, ce ne sont pas des primes.",
      exercice:
        "Trois demandes : (a) 150 € prévus au contrat chaque janvier ; (b) prime d'ancienneté CCN « selon la grille » ; (c) 400 € « offerts » ce mois, gérant, « hors cotisations ». Pour chacune : origine, saisie, ce que vous refusez.",
      correction:
        "(a) Contractuelle, due, soumise, 150 € en brut janvier, prorata si le contrat le dit.\n(b) Conventionnelle : OUVRIR la grille CCN, aucun euro inventé ; soumise en principe.\n(c) Libéralité : 400 € en brut soumis, pas hors cotisations. Refus d'occulter. Information : coût patronal en plus (taux pleins 13 % / 5,25 % si pas de RGDU). Validation direction tracée, égalité de traitement.",
    }),
    pack({
      title: "Le 13e mois : droit, prorata, assiette, mois de versement",
      description:
        "Calculer un 13e mois selon sa source, sans coller une formule unique à toutes les entreprises.",
      minutes: 20,
      objectifs:
        "Vous identifiez si un 13e mois existe (contrat, CCN, usage), vous en extrairez la base et le prorata, et vous le positionnez sur le bon mois sans le confondre avec une provision comptable.",
      theorie:
        "Le 13e mois n'est pas une obligation légale générale. Il naît d'une CCN, d'un accord, d'un contrat ou d'un usage. Donc : 1) existe-t-il dans CE dossier ? 2) quelle base (salaire de base, brut moyen, 12 mois, hors variables) ? 3) quel prorata (présence, entrée, sortie, absences) ? 4) quelle date de versement (décembre, juin/décembre, mensualisé 1/12) ?\n\nMensualisation du 13e : 1/12 chaque mois, souvent pour lisser le net et les charges. Ce n'est pas « 13 salaires légaux ». C'est un étalement. En sortie, on solde le droit acquis selon la clause (trop-perçu possible si versé d'avance).\n\nAbsences : certaines clauses proratisent maladie et CSS ; d'autres maintiennent. LIRE. Ne pas appliquer la retenue calendaire du module 10 sur le 13e « par analogie » sans clause.\n\nAssiette sociale : le 13e mois est en principe du salaire, soumis le mois de versement (ou chaque mois s'il est étalé). Il entre dans le brut du mois, donc dans le PMSS du mois : un 13e versé en décembre peut basculer de la T1 vers la T2 si base + 13e > 4 005 € (PMSS 2026). En janvier, un salarial à 3 100 € + 13e de 3 100 € = 6 200 € : T1 = 4 005, T2 = 2 195, CET dû (rémunération > T1). Ce n'est pas un détail : le net de décembre/janvier « 13e » n'est pas 13 fois le net de mars.\n\nComptabilité : provision de 13e mois (compte de charges / provisions) ≠ paie. La paie comptabilise au versement (ou à l'étalement réel). Ne pas « payer la provision ».\n\nPériode pédagogique : on peut verser un 13e en janvier (usage rare mais contrat possible) ou enseigner l'effet plafond sur un versement unique. Hypothèse d'exercice : 13e égal au salaire de base, clause de prorata présence calendaire — étiquetée comme clause de dossier, pas comme loi.",
      methode:
        "1. Source écrite.\n2. Base et formule.\n3. Prorata 2025 ou 2026 selon la période de référence de la clause.\n4. Mois de versement vs étalement.\n5. Simulation plafond 4 005 €.\n6. Sortie : solde, trop-perçu.\n7. DSN : rémunération, pas une prime exonérée.",
      exemple:
        "Dossier fictif, clause : 13e = salaire de base, versé en une fois, prorata calendaire du temps de présence sur l'année civile. Salarié 3 100,00 €, présent 12 mois, versement janvier 2026 (hypothèse de calendrier interne). Brut du mois = 3 100 + 3 100 = 6 200. T1 4 005, T2 2 195. CET salarial 0,14 % sur T1+T2 = 6 200 × 0,0014 = 8,68 €. Sans 13e, CET = 0. Le junior qui « met 3 100 en net » casse T2 et CET.",
      extra: [
        code(`13e MOIS — HYPOTHÈSE de clause de dossier (pas une obligation légale)
Salaire de base              3 100,00 €
13e (présent 12/12)          3 100,00 €
Brut janvier 2026            6 200,00 €
PMSS                         4 005,00 €
T1                           4 005,00 €
T2                           2 195,00 €
CET salarial 0,14 %          6 200 × 0,0014 = 8,68 €  (dû car > T1)
ARRCO T1 sal. 3,15 %         4 005 × 0,0315 = 126,16 €
ARRCO T2 sal. 8,64 %         2 195 × 0,0864 = 189,65 €

Autre clause fréquente : 1/12 chaque mois = 258,33 € / mois
Brut courant                 3 100 + 258,33 = 3 358,33 €  (sous PMSS, pas de T2)

Sans la clause sous les yeux, aucun de ces deux schémas n'est « la loi ».`),
      ],
      erreurs:
        "Croire le 13e légal pour tous. L'exonérer. L'oublier au plafond de décembre. Le mensualiser dans un dossier où il est annuel, ou l'inverse. Prorater un départ sans clause. Confondre 13e et prime de vacances CCN.",
      particuliers:
        "Année incomplète, temps partiel, forfait jours, suspension. 14e mois, prime de fin d'année, « gratifications ». Plusieurs libellés, une seule méthode : lire. Intéressement n'est pas un 13e.",
      exercice:
        "Clause : 13e = base, prorata calendaire, versé en décembre. Entrée le 1er octobre 2025, sortie le 31 janvier 2026, base 3 100 €. Quel droit de 13e au titre de 2025 si l'on verse le solde en janvier ? Quel effet T1/T2 si l'on verse ce solde + le salaire de janvier le même mois ? (Présence 2025 : oct.-déc. = 92 jours ; 2025 non bissextile = 365 j ; étiquette pédagogique de prorata calendaire de CLAUSE, pas formule légale unique.)",
      correction:
        "Droit 2025 hyp. clause calendaire : 3 100 × 92 / 365 ≈ 781,37 € (à verser selon la date prévue, souvent décembre, ici solde janvier). Janvier 2026 : salaire 3 100 + 781,37 = 3 881,37 €, encore < 4 005 : pas de T2, pas de CET. Si le 13e 2025 complet (3 100) était versé en janvier avec le salaire : 6 200, T2 et CET comme ci-dessus — d'où l'importance du mois réel de versement.\nLe 92/365 n'est pas une formule légale universelle de 13e ; c'est l'application de LA clause calendaire de l'exercice.",
    }),
    pack({
      title: "Primes d'ancienneté, d'objectifs et variables d'activité",
      description:
        "Lire une grille d'ancienneté, un bonus d'objectifs, sans inventer le barème CCN.",
      minutes: 18,
      objectifs:
        "Vous traitez une prime d'ancienneté comme un texte à extraire, un bonus d'objectifs comme un élément soumis conditionnel, et vous datez l'ancienneté correctement.",
      theorie:
        "Prime d'ancienneté : presque toujours conventionnelle ou contractuelle. La CCN fixe souvent un pourcentage du salaire de base après N années, parfois plafonné, parfois par échelons. Cette formation ne publie aucun pourcentage ni aucun euro de grille Syntec, métallurgie ou commerce. Méthode : IDCC → chapitre rémunération / ancienneté → avenant en vigueur → coefficient du salarié → montant ou %. Date d'ancienneté : reprise éventuelle (contrat, CCN), absences non assimilées (CSS, parfois). Un junior qui « met 3 % après 3 ans parce que c'est classique » commet une faute.\n\nPrime d'objectifs / bonus / variable : définie par contrat, accord, politique. Conditions : objectifs, présence au jour du versement, validation manager. Contentieux fréquent si les objectifs n'étaient pas fixés. La paie saisit le montant validé par qui de droit, soumis, dans le mois de versement. Elle ne recalcule pas le % d'atteinte « au feeling ».\n\nPrime de vacances, 13e, ancienneté : trois objets. Une CCN peut avoir les trois. On ne fusionne pas.\n\nAssujettissement : par défaut soumis. Exception : seulement un dispositif nommé (intéressement, etc.).\n\nPériode : janvier 2026. Ancienneté au 1er janvier, ou à la date d'anniversaire selon CCN (à lire). Une prime d'ancienneté de 93,00 € (HYPOTHÈSE de dossier, pas une CCN) sur 3 100 € → brut 3 193 €, sous PMSS.\n\nCSG : la prime entre dans l'assiette 98,25 % dans la limite de 4 PASS.",
      methode:
        "Ancienneté : 1) date de début et reprises ; 2) article CCN ; 3) base de calcul (base hors primes ?) ; 4) palier atteint en janvier 2026 ; 5) saisie. Objectifs : 1) qui valide le montant ; 2) mois de versement ; 3) soumis ; 4) documenter la décision.",
      exemple:
        "Commerce, IDCC à confirmer sur le bulletin. RH : « il a 6 ans, mets la prime d'ancienneté. » Lina n'a pas la grille en tête — et ne doit pas. Elle ouvre Légifrance, extrait le %, la base, le plafond. Elle calcule. Elle fait viser. Le bonus T4 validé à 800 € se verse en janvier, soumis, distinct de l'ancienneté.",
      extra: [
        code(`ANCIENNETÉ — extraction (zéro euro CCN inventé)
IDCC : ........  art. : ........
Date d'ancienneté retenue : ........  (reprises : oui/non, texte)
Palier : ........ ans → % ou € : [copier le texte]
Base : salaire de base / autre : ........
Montant janvier 2026 : ........
HYPOTHÈSE d'exercice SI le texte du dossier fictif dit 3 % de 3 100 :
  3 100 × 0,03 = 93,00 €  ← seulement si LE dossier l'écrit
Sinon : ne pas saisir 93,00 €.

BONUS OBJECTIFS
Montant validé (pièce) : ........  mois de versement : ........
Soumis : oui (défaut)`),
      ],
      erreurs:
        "Grille blog. Ancienneté à la date d'embauche hors reprises CCN. Verser le bonus à un sorti contre la clause. Exonérer « c'est du variable ». Cumuler deux paliers d'ancienneté.",
      particuliers:
        "Changement de classification : la base de la prime d'ancienneté change. Fusion, transfer TU : ancienneté reprise souvent, L. 1224-1 — RH. Objectifs collectifs / intéressement : autre régime.",
      exercice:
        "Le logiciel propose 120 € d'ancienneté. La CCN du PDF interne date de 2018. Que faites-vous avant clôture janvier 2026 ?",
      correction:
        "Vous ne saisissez pas 120 €. Vous ouvrez la CCN consolidée Légifrance / avenant minima et ancienneté en vigueur en janvier 2026. Vous comparez palier, base, montant. Écart : paramétrage à corriger, N+1. Un PDF 2018 est une piste, pas la source. Aucun barème de cette leçon ne se substitue à l'avenant.",
    }),
    pack({
      title: "Commissions et rémunérations variables commerciales",
      description:
        "Intégrer des commissions dans le brut du bon mois, avec les régularisations et le SMIC.",
      minutes: 18,
      objectifs:
        "Vous rattachez une commission à une période, vous la soumettez, vous contrôlez le SMIC sur la période de référence, et vous n'inventez pas un décalage « pour lisser le PAS ».",
      theorie:
        "La commission est un élément de salaire lié à un résultat (vente, marge, production). Contrat ou avenant : taux, assiette (CA HT, marge), date d'acquisition (commande, facture, encaissement), date de versement, reprises sur impayés.\n\nMois de rattachement : le mois où elle est due selon la clause, pas le mois où « ça arrange le net ». Un décalage contractuel (commissions de janvier versées en février) est fréquent et licite s'il est écrit. Un décalage improvisé pour éviter la T2 ou le PAS est une faute.\n\nAssujettissement : soumis. PMSS du mois de versement. Des commissions élevées créent de la T2 (21,59 % Agirc-Arrco dont 8,64 % salarial, barème 2026) et le CET si > T1.\n\nSMIC : la rémunération mensuelle (base + commissions + primes soumises, selon règles) ne peut descendre, pour le temps de travail, sous le SMIC (12,02 €/h et 1 823,03 € / 151,67 h du 01/01/2026 au 31/05/2026, URSSAF). Un commercial « tout commission » sans plancher contractuel reste protégé par le SMIC pour les heures. Contrôle de clôture.\n\nAbsences : une clause peut prorater ; une maladie n'efface pas les commissions déjà acquises. LIRE.\n\nFrais vs commission : un « 10 % pour essence » peut être du salaire déguisé si ce n'est pas un remboursement de frais réels dans les règles. Leçon frais.\n\nPériode : janvier 2026. Exemple : base 2 100 € + commissions 1 400 € = 3 500 €, sous PMSS 4 005 €. Si commissions 3 000 € : brut 5 100 €, T2 = 1 095 €.",
      methode:
        "1. Clause : acquisition, versement, reprises.\n2. Listing validé (manager, CRM) = pièce.\n3. Mois de paie = mois contractuel de versement.\n4. Brut, plafond, SMIC.\n5. Reprises : rubrique négative, pas un « oubli ».\n6. DSN.",
      exemple:
        "Cabinet, dossier commercial. Listing janvier validé : 1 400,00 €, versement février selon contrat. Lina ne les met pas en janvier « pour faire plaisir ». Contrôle SMIC janvier sur la base seule si les commissions ne sont pas encore dues : 2 100 € > 1 823,03 €. Février : 2 100 + 1 400 = 3 500, T1 pleine, pas de CET.",
      extra: [
        code(`COMMISSIONS — janvier/février 2026
Base mensuelle                 2 100,00 €
SMIC 151,67 h janv. 2026       1 823,03 €  (plancher, URSSAF)
Commissions acquises janv.     1 400,00 €  (listing)
Versement selon contrat        février 2026
Brut février                   3 500,00 €
PMSS                           4 005,00 €  → pas de T2

Si versement le mois d'acquisition (autre clause) :
Brut janvier                   3 500,00 €  (même arithmétique)

Reprise impayé : −200,00 € sur le mois prévu par la clause,
soumise en négatif, pas un « net à part ».`),
      ],
      erreurs:
        "Verser hors listing. Lisser pour le PAS. Oublier le SMIC d'un mois sans commission. Traiter la commission comme des frais. Reprise d'impayé en cash occulté.",
      particuliers:
        "VRP statutaire : annexes, commissions, congés, rupture — CCN VRP et statut, hors improvisation. Agents commerciaux (non salariés) : pas un bulletin. Clawback, objectifs collectifs.",
      exercice:
        "Base 1 700 €, zéro commission en janvier 2026, 35 h. Que contrôlez-vous avant clôture ? Le gérant veut « laisser 1 700, on rattrapera en mars ».",
      correction:
        "1 700,00 < 1 823,03 € SMIC mensuel 151,67 h (01/01/2026–31/05/2026). Vous bloquez. Complément SMIC (ou avance sur commissions si le contrat le permet de façon licite — N+1). Vous ne « laissez » pas un mois sous SMIC. Le rattrapage mars ne répare pas janvier : le SMIC est mensuel pour ce temps de travail.",
    }),
    pack({
      title: "Avantages en nature : véhicule, logement, repas",
      description:
        "Évaluer un AEN par la méthode BOSS/URSSAF, sans inventer le barème 2026 s'il n'est pas dans rates-2026.json.",
      minutes: 22,
      objectifs:
        "Vous identifiez un avantage en nature, vous savez choisir forfait ou réel selon les notices, et vous refusez tout montant de barème 2026 qui ne sort pas d'URSSAF/BOSS ou du fichier des taux.",
      theorie:
        "Un avantage en nature (AEN) est la fourniture par l'employeur d'un bien ou service (véhicule utilisé à titre privé, logement, repas, logement de fonction, outil avec usage privé). C'est de la rémunération : il entre dans le brut pour les cotisations, dans le net imposable selon les règles, même s'il n'y a pas de flux cash. Omettre un AEN, c'est sous-déclarer.\n\nÉvaluation : le BOSS et l'URSSAF publient des barèmes (forfait véhicule selon CV fiscaux et carburant, forfait logement selon rémunération, repas, etc.) et admettent parfois les dépenses réelles. rates-2026.json ne contient PAS ces barèmes. Donc cette formation n'invente AUCUN euro 2026 de forfait véhicule, logement ou repas. Méthode obligatoire :\n1. Ouvrir URSSAF / BOSS, barème AEN de la période (janvier 2026).\n2. Qualifier l'usage (privé / professionnel / mixte).\n3. Choisir forfait ou réel selon les conditions du barème (options, 5 CV, 6-7 CV, etc. — les tranches se recopient depuis la source, pas depuis un souvenir 2024).\n4. Inscrire le montant sur le bulletin (gain + retenue si l'avantage n'est pas laissé en plus du net : souvent AEN ajouté au brut puis déduit du net à payer pour revenir au cash).\n5. DSN : AEN renseignés.\n\nVéhicule : usage privé = AEN. Véhicule strictement professionnel avec carnet et interdiction d'usage privé : souvent pas d'AEN, sous conditions de preuve. Ne pas croire « tous les commerciaux ont 200 € d'AEN » : 200 € serait une HYPOTHÈSE de dossier, pas le barème 2026.\n\nLogement : forfait selon tranches de rémunération, ou réel. Une chambre de 12 m² n'a pas le même forfait qu'un T3 — barème à ouvrir.\n\nRepas : cantine, titre-restaurant (leçon suivante), repas fourni. Barème unitaire URSSAF à ouvrir. Ne pas coller un souvenir 9,90 € ou tout autre chiffre.\n\nPériode : janvier 2026. SMIC et PMSS sont dans le fichier des taux ; les AEN non. Distinction CONTENT_SPEC : paramètre annuel (barème à aller chercher) vs hypothèse pédagogique vs obligation (assujettir l'AEN).",
      methode:
        "1. Y a-t-il usage privé ?\n2. Source BOSS/URSSAF période 2026 ouverte, copie d'écran ou PDF au dossier de paramétrage.\n3. Forfait vs réel.\n4. Bulletin : +AEN brut, −AEN net à payer si non monétaire.\n5. Contrôle annuel : changement de CV, de loyer, de quotité.\n6. Si barème introuvable le jour J : pas d'invention, N+1, note « AEN en attente de barème ».",
      noteText:
        "rates-2026.json ne contient pas les barèmes AEN. Tout euro de véhicule/logement/repas cité dans un exercice interne doit être étiqueté HYPOTHÈSE de dossier fictif, jamais « barème URSSAF 2026 ». Le vrai montant se recopie depuis URSSAF/BOSS.",
      exemple:
        "Cadre, véhicule de fonction, usage privé. Lina n'écrit pas 250 €. Elle ouvre le barème URSSAF véhicule 2026, identifie la tranche de CV, carburant pris en charge ou non, forfait mensuel, saisit CE montant. HYPOTHÈSE d'entraînement : si le dossier fictif posait 260,00 €, le brut passerait de 3 500 à 3 760, le net à payer se verrait retirer 260 après cotisations sur 3 760. 260 n'est pas le barème officiel.",
      extra: [
        code(`AEN — MÉTHODE (janvier 2026)
Source à ouvrir : URSSAF / BOSS « avantages en nature » période 2026
rates-2026.json : NE CONTIENT PAS ces forfaits → ne pas les inventer

Véhicule  1. CV fiscaux  2. carburant employeur oui/non  3. forfait ou réel
Logement  1. nb de pièces  2. tranche de rémunération  3. forfait ou réel
Repas     1. nombre  2. cantine / repas fourni  3. valeur unitaire OFFICIELLE

HYPOTHÈSE pédagogique de dossier fictif (NON barème national) :
  AEN véhicule  260,00 €
  Brut avant    3 500,00 €
  Brut soumis   3 760,00 €
  Retenue AEN   −260,00 € sur le net à payer (l'avantage n'est pas du cash)
Étiquette : HYPOTHÈSE. Remplacer 260 par le forfait URSSAF 2026 du dossier réel.

SMIC 12,02 €/h et PMSS 4 005 € : officiels. L'AEN 260 € : non.`),
      ],
      erreurs:
        "Omettre l'AEN. Inventer 150 €. Laisser l'AEN hors brut « pour le net ». Oublier de retrancher l'AEN du net à payer (le salarié serait payé cash + avantage). Recopier le barème 2024. Traiter un titre-restaurant comme un AEN repas forfaitaire sans lire la fiche TR.",
      particuliers:
        "Outils Téléphone / ordinateur : usage privé minime parfois toléré selon doctrine — BOSS, ne pas généraliser. NTIC. Logement de gardien. Expatriation. Prêt de personnel. Un junior ne « solde » pas un AEN à 0 parce que le salarié est en arrêt : souvent l'avantage continue (véhicule gardé) — à analyser.",
      exercice:
        "Le gérant : « mets 200 € d'AEN voiture, c'est ce que faisait l'ancienne collab. » Barème URSSAF non ouvert. Que répondez-vous ? Si vous devez faire un exercice chiffré interne, comment l'étiquetez-vous ?",
      correction:
        "Réponse : « 200 € n'est pas une source. J'ouvre le barème URSSAF/BOSS janvier 2026, CV et carburant, je saisis le forfait officiel. 200 € de mémoire est interdit. »\nExercice interne : « HYPOTHÈSE pédagogique 200,00 € — à remplacer par le barème URSSAF 2026. Ce n'est pas un paramètre de rates-2026.json. »",
    }),
    pack({
      title: "Titres-restaurant : attribution et méthode d'exonération",
      description:
        "Attribuer un titre par jour travaillé et tester l'exonération URSSAF sans inventer le plafond 2026 en euros.",
      minutes: 20,
      objectifs:
        "Vous savez à quels jours un titre est dû selon la règle du dossier, vous appliquez la MÉTHODE d'exonération (part employeur, proportion, plafond officiel à aller chercher), et vous n'écrivez aucun montant d'exonération 2026 comme s'il était dans le fichier des taux.",
      theorie:
        "Le titre-restaurant (TR) n'est pas un droit légal universel pour tout salarié. C'est un dispositif d'entreprise (ou CCN / usage) : un titre par jour de travail effectif avec repas à la charge du salarié, en principe, selon les notices URSSAF. Jours non travaillés (CP, maladie, CSS, AT, télétravail selon politique et doctrine du moment) : souvent pas de titre. LIRE la politique et l'URSSAF « titres-restaurant » de la période. Un jour d'arrêt maladie en janvier : en principe 0 TR, distinct du maintien de salaire.\n\nValeur faciale = part employeur + part salarié. La part employeur est un avantage. Elle est exonérée de cotisations seulement dans les limites officielles de la période : un montant maximal en euros par titre ET une proportion de la valeur faciale (historiquement une fourchette type 50 %–60 % — la proportion exacte 2026 se LIT sur URSSAF, elle n'est pas dans rates-2026.json). L'excédent est assujetti.\n\nINTERDICTION : publier ici un plafond 2026 en euros (du type « 7,xx € ») comme s'il était vérifié. Il n'est pas dans rates-2026.json. Méthode :\n1. Ouvrir URSSAF titres-restaurant, barème / limite d'exonération de janvier 2026.\n2. Noter : plafond € / titre, proportion min/max de participation employeur.\n3. Comparer la part employeur réelle du dossier.\n4. Si dans les clous : exonération de la part employeur.\n5. Sinon : assujettir l'excédent (et traiter l'effet bulletin / DSN).\n\nHYPOTHÈSE pédagogique (NON plafond officiel) : titre de 10,00 €, part employeur 5,00 €, 18 jours travaillés en janvier. Part employeur du mois = 90,00 €. Vous ne pouvez conclure à l'exonération des 90 € qu'après lecture du plafond 2026. 5,00 € n'est PAS présenté comme la limite 2026.\n\nPériode : janvier 2026. 3 jours de CSS (module 10) : 3 titres en moins si la règle est « jour travaillé ».",
      methode:
        "1. Règle d'attribution (jours travaillés, télétravail, formation).\n2. Compter les jours du mois.\n3. Valeur faciale, split S/P.\n4. URSSAF 2026 : limites.\n5. Exonération ou assujettissement de l'excédent.\n6. Précompte part salarié sur le net.\n7. DSN / prestataire (Edenred, etc. — fonctionnel, pas une certif).",
      noteText:
        "Jamais de montant d'exonération TR 2026 inventé. rates-2026.json ne le contient pas. URSSAF/BOSS de la période = seule source du plafond en euros et de la proportion.",
      exemple:
        "Atelier Nord Paie, 18 jours travaillés, 3 CSS, 10 CP déjà posés ailleurs : TR = 18 si la règle = présence travaillée (les CP : souvent 0 TR). Part S 5 €, part P 5 €, faciale 10 € — HYPOTHÈSE de contrat, pas un barème. Lina ouvre URSSAF avant de cocher « exonéré ». Elle n'écrit pas « plafond 7,18 € » de mémoire 2025.",
      extra: [
        code(`TITRES-RESTAURANT — MÉTHODE janvier 2026
Jours travaillés (règle dossier)     ........
Valeur faciale                       ........  (contrat prestataire)
Part employeur                       ........
Part salarié (précompte net)         ........

LIMITES D'EXONÉRATION 2026
  Source : URSSAF « titres-restaurant » / BOSS  — OUVRIR
  Plafond € / titre 2026 : [à recopier, INTERDIT de l'inventer ici]
  Proportion part employeur : [à recopier]
  Test : part P ≤ plafond € ET dans la fourchette de % ?
  Oui → part P exonérée
  Non → assujettir l'excédent

HYPOTHÈSE pédagogique (pas le plafond 2026) :
  Faciale 10,00 € | Employeur 5,00 € | Salarié 5,00 € | 18 titres
  Avantage employeur mois = 90,00 €
  Conclusion exonération : IMPOSSIBLE sans la fiche URSSAF 2026
  5,00 € n'est pas un barème national.`),
      ],
      erreurs:
        "Inventer 7,xx €. Attribuer un TR par jour calendaire y compris CSS. Laisser la part employeur hors DSN. Oublier le précompte salarié (net trop élevé). Recopier 2025. Offrir 22 titres « pour le moral » hors règle, inégalitaire.",
      particuliers:
        "Télétravail : doctrine URSSAF à relire (évolution possible). Horaires de nuit, double vacation. Titres dématérialisés. Salarié à temps partiel : un titre si jour travaillé avec repas, pas un demi-titre inventé sauf règle. Dirigeant TNS : autre régime, pas ce bulletin.",
      exercice:
        "3 100 €, janvier 2026, 3 jours CSS calendaires (12–14), 19 autres jours ouvrés travaillés hyp. Règle TR = jour travaillé. Combien de titres ? Peut-on dire que 5 € employeur sont exonérés ?",
      correction:
        "Titres : 19, pas 22, pas 31, pas 16 (si 19 ouvrés travaillés hors CSS — à compter sur le calendrier réel du salarié, férié 1er janvier : jour non travaillé, 0 TR). Les 3 CSS : 0 TR.\nExonération des 5 € : on ne peut PAS le dire dans ce cours. Il faut le plafond € et la proportion URSSAF 2026. 5 € est une hypothèse de split, pas la limite officielle. Phrase du dossier : « part P 5,00 € / titre — test d'exonération selon URSSAF 2026 à joindre. »",
    }),
    pack({
      title: "Frais professionnels, remboursements et régime social / fiscal",
      description:
        "Séparer frais d'entreprise et salaire, appliquer indemnités kilométriques et forfaits selon BOSS, sans barème 2026 inventé.",
      minutes: 20,
      objectifs:
        "Vous distinguez remboursement de frais réels, allocations forfaitaires, et salaire déguisé ; vous savez où lire les barèmes ; vous posez l'effet bulletin (soumis ou non).",
      theorie:
        "Les frais professionnels sont des dépenses engagées pour le travail. Leur remboursement n'est pas du salaire s'il reste dans le cadre BOSS/URSSAF (justificatifs au réel, ou allocations forfaitaires dans les limites : repas, grand déplacement, indemnités kilométriques barème fiscal, télétravail dans les conditions de la doctrine). Au-delà, l'excédent est assujetti.\n\nrates-2026.json ne contient pas le barème kilométrique ni les forfaits repas de déplacement 2026. Donc : aucun euro officiel de kilométrage ou de grand déplacement n'est inventé ici. Méthode : ouvrir BOSS « frais professionnels » et le barème IK (souvent repris du barème fiscal) pour l'année concernée.\n\nRemboursement au réel : pièce (note de frais, facture, objet, date). Pas de cotisations si professionnel et justifié. Un restaurant sans nom ni motif est un risque.\n\nAllocation forfaitaire : exonérée dans la limite officielle, sous conditions (effectif, non-cadre parfois pour certains forfaits repas — LIRE le BOSS, les conditions changent). Ne pas appliquer un forfait « 20 € repas » de mémoire.\n\nVéhicule personnel : IK selon CV et km, barème à ouvrir. Cumul AEN véhicule de fonction + IK sur le même véhicule : incohérence à analyser.\n\nRégime social vs fiscal : souvent alignés, pas toujours (CSG sur certains éléments, net imposable, MNS). Les frais exonérés n'entrent en principe pas dans le net imposable ni dans le MNS comme du salaire. Les primes soumises, oui. Distinguer sur le bulletin.\n\nPériode : janvier 2026. Une note de frais de 180,00 € de trains justifiés : hors brut. Une « indemnité essence 200 € » sans règle : salaire soumis, comme une prime.\n\nPPV, intéressement : pas des frais. Mutuelle : module 13.",
      methode:
        "1. Nature : réel / forfait / salaire ?\n2. Pièces.\n3. BOSS + barème 2026.\n4. Limite : exonéré vs excédent soumis.\n5. Rubriques distinctes (641 vs 625 en compta pédagogique, paramétrage interne).\n6. PAS : seulement sur le net imposable, pas sur les frais exonérés.\n7. Si doute : soumis jusqu'à analyse N+1, jamais « on sort du brut pour le net ».",
      exemple:
        "ETI, commercial. 1 240 km janvier, véhicule perso, 6 CV. Lina n'invente pas 0,50 €/km. Elle ouvre le barème IK 2026, calcule, verse en non soumis si dans le cadre. Le même salarié a un véhicule de fonction (AEN) : elle alerte, pas de double indemnisation. Prime de 200 € « pour l'essence » en plus : soumise, pas un frais.",
      extra: [
        code(`FRAIS vs SALAIRE — janvier 2026
RÉEL justifié (train, hôtel mission)     hors brut  | pièces au dossier
FORFAIT dans limite BOSS 2026            hors brut  | limite = OUVRIR BOSS
EXCÉDENT de forfait                      soumis
« Indemnité » sans frais                 soumis (prime)
IK véhicule perso                        barème 2026 à ouvrir, 0 € inventé ici
AEN véhicule de fonction                 soumis (leçon AEN), barème URSSAF

HYPOTHÈSE pédagogique (NON barème IK) :
  1 240 km × 0,50 € = 620,00 €  ← étiquette HYPOTHÈSE
  Remplacer 0,50 par le barème officiel du CV pour 2026.

MNS (BOSS) : les frais exonérés ne se comportent pas comme du salaire.
Part mutuelle patronale : PAS dans le MNS jusqu'au 31/12/2026 (BOSS).`),
      ],
      erreurs:
        "Inventer 0,518 €/km. Exonérer 400 € d'essence forfaitaire. Mélanger AEN et IK. Oublier les pièces. Mettre les frais dans le brut « pour simplifier » (surcotisation). Les sortir tous « pour le net » (sous-déclaration).",
      particuliers:
        "Télétravail : allocation forfaitaire, conditions BOSS, pas un droit inventé en euros. Grand déplacement, expatriation, chantiers : annexes BOSS. Titres-restaurant + forfait repas le même jour : non-cumul fréquent, LIRE. CSE, chèques cadeaux : plafonds URSSAF événementiels, autre fiche, pas d'euro inventé.",
      exercice:
        "Quatre lignes à classer (soumis / non soumis si conditions / à instruire) : (1) 180 € SNCF mission, billet au dossier ; (2) 200 € « essence » mail gérant, 0 km ; (3) IK 800 km véhicule perso, barème non encore ouvert ; (4) 18 TR part employeur 5 €, URSSAF 2026 non ouvert.",
      correction:
        "(1) Non soumis si mission professionnelle justifiée.\n(2) Soumis : prime déguisée, pas de frais.\n(3) À instruire : ouvrir barème IK 2026, puis non soumis dans la limite, excédent soumis. 0 € inventé en attendant.\n(4) À instruire : méthode TR, plafond 2026 à ouvrir ; 5 € n'est pas le plafond. En attendant, ne pas affirmer l'exonération.\nLe point commun : pas d'invention d'un barème absent de rates-2026.json.",
    }),
    quizLesson({
      title: "Quiz — Primes, AEN, titres-restaurant et frais",
      description:
        "Vérifier qualification, 13e mois et plafond, interdiction d'inventer les barèmes 2026 TR/AEN.",
      passing_score: 70,
      questions: [
        q({
          question: "Une prime exceptionnelle de 400 € demandée « hors cotisations » :",
          options: [
            "A. S'occulte du brut si le gérant le demande",
            "B. Est en principe du salaire soumis (L. 242-1), sauf régime d'exonération nommé par un texte",
            "C. Est toujours de la PPV",
            "D. N'existe pas en janvier",
          ],
          correct: 1,
          explanation:
            "Défaut = soumis. L'exonération suppose un dispositif (PPV, intéressement, etc.) aux conditions. Un mail ne crée pas l'exonération.",
        }),
        q({
          question:
            "3 100 € de base + 3 100 € de 13e le même mois (janvier 2026). Conséquence plafond ?",
          options: [
            "A. Rien, le 13e est hors PMSS",
            "B. Brut 6 200 € : T1 = 4 005 €, T2 = 2 195 €, CET dû (barème Agirc-Arrco 2026)",
            "C. T2 seulement au-delà de 48 060 € dans le mois",
            "D. On exonère 2 195 € pour rester sous plafond",
          ],
          correct: 1,
          explanation:
            "PMSS mensuel 4 005 €. Le 13e est du salaire du mois de versement. PASS 48 060 € est annuel. On n'exonère pas pour « rester sous plafond ».",
        }),
        q({
          question: "Le plafond d'exonération 2026 de la part employeur des titres-restaurant :",
          options: [
            "A. Est 5,00 €, chiffre de ce cours",
            "B. Se lit sur URSSAF/BOSS pour la période ; il n'est pas dans rates-2026.json et ne doit pas être inventé",
            "C. Est égal au SMIC horaire 12,02 €",
            "D. N'existe plus depuis la DSN",
          ],
          correct: 1,
          explanation:
            "5,00 € n'était qu'un split pédagogique. Le plafond officiel 2026 s'ouvre sur URSSAF. Ni SMIC ni disparition DSN.",
        }),
        q({
          question: "Un avantage en nature véhicule se traite ainsi :",
          options: [
            "A. On invente 200 €, c'est l'usage",
            "B. On ouvre le barème URSSAF/BOSS 2026 (CV, carburant), on assujettit, on retire l'AEN du net à payer s'il n'est pas cash",
            "C. On l'ignore s'il n'y a pas de flux bancaire",
            "D. On le met uniquement en net imposable, jamais en brut social",
          ],
          correct: 1,
          explanation:
            "Barème officiel, brut soumis, retrait du cash. Pas d'omission. 200 € mémoire interdit. rates-2026.json ne contient pas ce barème.",
        }),
        q({
          question: "Prime d'ancienneté :",
          options: [
            "A. 3 % après 3 ans, universel",
            "B. Se lit dans la CCN ou le contrat du dossier ; aucun euro de grille n'est inventé dans cette formation",
            "C. Est exonérée",
            "D. Remplace le 13e mois légal",
          ],
          correct: 1,
          explanation:
            "Pas de grille universelle. Pas d'exonération de principe. Pas de 13e légal général.",
        }),
        q({
          question: "Commercial, base 1 700 €, 0 commission, 151,67 h, janvier 2026 :",
          options: [
            "A. Conforme, on rattrapera en mars",
            "B. Sous SMIC mensuel 1 823,03 € : bloquer, complément ou clause licite, pas de mois sous SMIC",
            "C. Conforme car le SMIC 2026 est 1 700 €",
            "D. Les commerciaux n'ont pas le SMIC",
          ],
          correct: 1,
          explanation:
            "SMIC 1 823,03 € (URSSAF 01/01–31/05/2026). Le statut commercial ne l'écarte pas pour un salarié. Pas de rattrapage qui efface janvier.",
        }),
        q({
          question: "Remboursement SNCF 180 €, billet mission au dossier :",
          options: [
            "A. Prime soumise",
            "B. Frais professionnels au réel, hors brut si conditions BOSS",
            "C. AEN repas",
            "D. Titre-restaurant",
          ],
          correct: 1,
          explanation:
            "Réel justifié = frais, pas un salaire, pas un AEN, pas un TR.",
        }),
        q({
          question: "Trois jours de CSS en janvier, règle TR = jour travaillé :",
          options: [
            "A. On laisse les TR, le CSS est payé",
            "B. Pas de titre sur ces trois jours",
            "C. On double les TR pour compenser",
            "D. On convertit les TR en AEN véhicule",
          ],
          correct: 1,
          explanation:
            "Le CSS n'est pas du travail effectif. La compensation par des TR supplémentaires est une inégalité / un hors règle. Pas de conversion en AEN.",
        }),
        q({
          question: "HYPOTHÈSE pédagogique AEN véhicule 260 € sur brut 3 500 €. Brut soumis ?",
          options: [
            "A. 3 500 €, l'AEN est hors cotisations",
            "B. 3 760 €, et 260 € est une HYPOTHÈSE à remplacer par le barème URSSAF 2026",
            "C. 4 005 €, on aligne sur le PMSS",
            "D. 260 € seulement",
          ],
          correct: 1,
          explanation:
            "AEN dans le brut. 3 500+260=3 760. 260 n'est pas le barème officiel. On n'aligne pas sur le PMSS.",
        }),
        q({
          question: "Le 13e mois est :",
          options: [
            "A. Une obligation légale pour tout salarié français",
            "B. Un droit d'origine CCN, accord, contrat ou usage, soumis le mois de versement, avec un effet possible sur T1/T2",
            "C. Exonéré s'il est versé en janvier",
            "D. Identique à la PPV",
          ],
          correct: 1,
          explanation:
            "Pas d'obligation légale générale. Assujetti. Effet plafond. Distinct de la PPV.",
        }),
      ],
    }),
  ],
};
