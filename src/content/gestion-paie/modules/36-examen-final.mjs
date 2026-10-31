import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 36,
  title: "Examen final — Gérer la paie d'Atelier Lumière Paie",
  description:
    "Valider les compétences d'un gestionnaire de paie junior sur un dossier fictif de 20 salariés (janvier 2026) : cycle, bulletins, contrôles, DSN conceptuelle, journal, mails et quiz au seuil de 80 %.",
  lessons: [
    pack({
      title: "Consigne d'examen, entreprise et limites junior",
      description:
        "Comprendre ce que l'examen mesure, le dossier Atelier Lumière Paie, le seuil de 80 % et ce qu'un junior n'a pas le droit d'inventer.",
      minutes: 24,
      objectifs:
        "À la fin de cette leçon, vous savez ce que l'examen évalue, quelles hypothèses encadrent Atelier Lumière Paie, quel seuil de réussite s'applique, quelles erreurs graves font échouer la simulation, et où s'arrête l'autonomie d'un gestionnaire de paie junior.",
      theorie:
        "Cet examen clôt le parcours « Devenir gestionnaire de paie ». Il ne demande pas de mémoriser un roman d'entreprise. Il demande de produire, contrôler et justifier la paie de janvier 2026 d'Atelier Lumière Paie, société fictive de 20 salariés, métropole, régime général. La période d'emploi est janvier 2026 (rémunérations versées au titre de janvier 2026). Les taux et plafonds officiels sont ceux de rates-2026.json, vérifiés le 14/10/2026 : PMSS 4 005 €, PASS 48 060 €, SMIC 12,02 €/h et 1 823,03 €/mois du 01/01/2026 au 31/05/2026, maladie salariale 0 % (domicile fiscal France), maladie patronale taux plein 13 %, allocations familiales taux plein 5,25 %, vieillesse 6,90 % plafonnée et 0,40 % déplafonnée, Agirc-Arrco T1 7,87 % (4,72 / 3,15), CSG/CRDS sur 98,25 % dans la limite de 4 PASS.\n\nLa RGDU 2026 n'est pas appliquée sur ce dossier : vous conservez les taux pleins maladie 13 % et AF 5,25 %, et vous le dites. L'effectif est 20 personnes : le FNAL est 0,10 % sur assiette plafonnée, jamais 0,50 % ni 17,50 € sur un cadre à 3 500 €. Le taux AT/MP 1,50 % est une HYPOTHÈSE pédagogique de dossier, pas un taux Carsat national. La CCN est un IDCC à lire : aucun minimum, aucun maintien maladie, aucune indemnité de rupture n'est inventé. Les taux PAS, la mutuelle 20/40 € et l'avantage en nature repas 50 € sont des HYPOTHÈSES de dossier, étiquetées comme telles.\n\nLe seuil de réussite des quiz d'examen est 80 %. Les compétences critiques doivent être validées : distinguer obligation légale, paramètre annuel, disposition conventionnelle, paramètre d'entreprise et hypothèse pédagogique ; calculer un bulletin sourcé ; contrôler SMIC, PMSS, tranches, FNAL, PAS ; ne pas divulguer ; ne pas clôturer une erreur grave. Une erreur de paie grave non corrigée (sous-SMIC, plafond N-1, net négatif ignoré, T2 oublié, PAS d'un tiers, IJ journalière inventée, minima CCN inventés) fait échouer la simulation, même si le reste du portefeuille est « joli ».\n\nL'attestation LOU Academy certifie la réussite du parcours sur cette plateforme. Ce n'est pas un titre RNCP, ni un diplôme d'État, ni une certification Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ou Nibelis. Le simulateur pédagogique LOU n'est pas un clone commercial. Une rémunération de l'ordre de 36 000 € brut annuels est un objectif de marché, jamais une garantie d'obtention ni un effet automatique de cette formation.",
      methode:
        "Avant de composer, relisez cette consigne et le tableau des 20 dossiers. Pendant la production : (1) figer la période, l'effectif, le régime, RGDU off, AT/MP hypo ; (2) qualifier chaque événement ; (3) calculer avec les totaux moteur fournis, sans substituer un autre barème ; (4) contrôler SMIC, PMSS, T2, FNAL, PAS, nets ; (5) préparer DSN conceptuelle, journal, quatre mails ; (6) escalader ce qui sort de l'autonomie junior. Vous ne « lancez pas pour voir ». Vous justifiez.",
      noteText:
        "Limite junior : vous n'inventez pas une clause CCN, un montant d'IJSS, un taux AT/MP national, un FNAL d'effectif 80 sur un dossier à 20, une certification éditeur, ni un titre réglementé. Si le texte manque, vous documentez et vous escaladez. Un junior qui invente pour clôturer échoue l'examen.",
      exemple:
        "Atelier Lumière Paie, 20 personnes, janvier 2026. Camille Roux (ALP-05) est cadre au forfait jours à 3 500 €. Un candidat pressé recopie le dossier-05 du simulateur (effectif 80, FNAL 17,50 €). Ici l'effectif est 20 : FNAL 0,10 % plafonné, soit 3,50 € patronal, total patronal 1 439,27 €, salarial 730,25 €, NAP 2 769,75 €. Recopier 17,50 € est une erreur grave de paramètre d'effectif, pas un « détail ». C'est exactement le type d'erreur que l'examen punit.",
      extra: [
        code(`CONSIGNE D'EXAMEN — Atelier Lumière Paie (fictif)

Entreprise        Atelier Lumière Paie
Période           janvier 2026, métropole, régime général
Effectif          20  →  FNAL 0,10 % assiette plafonnée (pas 0,50 %)
AT/MP             1,50 %  = HYPOTHÈSE de dossier, pas un taux Carsat
RGDU              non appliquée (maladie p 13 % / AF 5,25 % taux pleins)
CCN               IDCC à lire — aucun minimum inventé
Moteur            totaux fournis ci-après (engine.mjs / rates-2026.json)
Seuil quiz        80 % sur chaque partie A à G
Compétences       critiques à valider (droit, calcul, DSN, compta, logiciels, cas, simulation)
Erreur grave      non corrigée = échec de la simulation
Attestation       LOU Academy  ≠  RNCP  ≠  diplôme d'État  ≠  certif éditeur
36 000 € brut     objectif de marché, pas une garantie`),
      ],
      erreurs:
        "Traiter l'examen comme un QCM de culture générale. Recopier le simulateur à 10 dossiers sans relire l'effectif 20. Appliquer la RGDU « parce que c'est 2026 ». Inventer un maintien maladie. Présenter l'attestation comme un titre RNCP. Clôturer malgré un sous-SMIC « on rattrapera ».",
      particuliers:
        "Cabinet : le client n'est pas votre N+1 métier ; une pratique non conforme s'escalade. CSP : le SLA n'autorise pas à sauter les contrôles. TPE sans responsable paie : la limite d'autonomie reste ; vous vous appuyez sur l'expert-comptable et vous tracez. Homonymie (Léa Morel / Julie Moreau, prénoms proches) : confirmer le matricule ALP-xx avant tout mail.",
      exercice:
        "Sans ouvrir encore le tableau détaillé, écrivez : (1) quatre paramètres que vous figez avant tout calcul ; (2) trois actes hors autonomie junior ; (3) deux erreurs qui font échouer la simulation même si 19 bulletins sont justes.",
      correction:
        "1. Période janvier 2026 métropole régime général ; effectif 20 / FNAL 0,10 % plafonné ; RGDU off ; AT/MP 1,50 % hypo. 2. Inventer une clause CCN, un montant d'IJ journalier, un taux AT national, déposer une DSN hors délégation, divulguer un PAS, paramétrer un organisme. 3. Sous-SMIC non corrigé ; net négatif ignoré ; T2 oublié sur ALP-06 ; PAS d'un collègue communiqué ; FNAL 17,50 € sur Camille. Un portefeuille « presque bon » n'efface pas une faute grave.",
    }),

    pack({
      title: "Les 20 dossiers d'Atelier Lumière Paie",
      description:
        "Lire le portefeuille, qualifier chaque profil, et relier chaque brut aux totaux moteur fournis.",
      minutes: 28,
      objectifs:
        "Vous identifiez les 20 matricules, vous distinguez les ancres (SMIC, 2 100, 2 500, 3 100, 3 500, 5 000) des événements (entrée, partiel, prime, mutuelle, PAS, HS, absence, maladie, sortie, AEN, rappel), et vous refusez de recycler un NAP d'ancre sur un brut modifié.",
      theorie:
        "Un portefeuille de 20 personnes n'est pas « 20 fois le même bulletin ». C'est 20 situations. Certaines reprennent une ancre du moteur pédagogique (Léa et Lucas au SMIC 1 823,03 € ; Nadia et Noah à 2 100 € ; Hugo, Yanis et Amina à 2 500 € sans événement de brut ; Camille et Chloé cadres à 3 500 €). D'autres changent le brut avant cotisations : Inès (entrée le 13, 2 100 × 19/31 = 1 287,10 €), Sofiane (temps partiel 1 458,46 €), Thomas et Emma (2 500 + 200 = 2 700 €), Marc (HS, brut 2 169,25 €), Claire (absence, brut 2 800 €), Julie (sortie le 15, 2 500 × 15/31 = 1 209,68 €), Karim (AEN repas hypo 50 €, brut 2 550 €).\n\nPaul (3 100 €, PAS 8 % hypo) et Sarah (2 500 €, mutuelle 20/40 € hypo et PAS 10 % hypo) gardent un brut d'ancre mais pas le NAP d'ancre : le PAS et la mutuelle salariale cassent l'égalité NAP = MNS. Antoine (5 000 €) ouvre T1 4 005 €, T2 995 € et CET salarial 7,00 €. Yanis (ALP-13) est en arrêt : l'hypothèse d'examen maintient le brut pédagogique 2 500 € en attendant la lecture CCN des IJ et du maintien ; le NAP retenu est celui du 2 500 €, soit 1 978,99 €, et cette hypo doit être étiquetée.\n\nVous ne sommez pas des nets d'ancres pour « aller plus vite ». Vous ne donnez pas à Inès le NAP de Nadia. Vous ne donnez pas à Sarah le NAP d'Hugo. Vous ne donnez pas à Camille le FNAL d'un effectif 80. Le JSON examen-atelier-lumiere.json est la source des faits ; les totaux ci-dessous et dans les leçons de correction sont les totaux d'examen fournis, déterministes, à ne pas substituer.\n\nIdentités fictives. Confidentialité réelle : un PAS, un arrêt, un brut ne se commentent pas en open space et ne se comparent pas entre collègues. Homonymie et prénoms proches (Morel / Moreau) : le matricule ALP-xx prime.",
      methode:
        "Pour chaque ligne : lire id, nom, profil, brut, cadre, PAS, mutuelle, événements. Poser la question : le brut est-il une ancre pleine, un prorata, un partiel, une ancre plus un élément ? Quel contrôle spécifique (SMIC, T2, APEC, FNAL 20, PAS, mutuelle, HS, calendaire, maladie étiquetée, sortie + ICP à comparer, AEN hypo) ? Cocher ensuite seulement ce que le dossier contient.",
      noteText:
        "Aucun minimum CCN n'est dans ce tableau. AT/MP 1,50 %, mutuelle 20/40 €, PAS 8 % et 10 %, AEN 50 € = HYPOTHÈSES. ALP-13 : brut maintenu 2 500 € = HYPOTHÈSE d'examen en attente de CCN, pas une règle nationale de maintien.",
      exemple:
        "En cabinet, deux dossiers « 2 500 € ». L'un est Hugo (mois plein, NAP 1 978,99 €). L'autre est Sarah (même brut, mutuelle + PAS, NAP 1 753,97 €). Recopier 1 978,99 € sur Sarah est une faute de lecture, pas un arrondi. Le recruteur d'un junior teste exactement cela : même ancre, événement différent, net différent.",
      extra: [
        code(`PORTEFEUILLE — Atelier Lumière Paie — janvier 2026 — effectif 20
AT/MP 1,50 % HYPOTHÈSE  |  RGDU off  |  CCN IDCC à lire  |  FNAL 0,10 % plafonné

ID      Nom                 Brut      Cadre  PAS   Mut   Événements
ALP-01  Léa Morel           1823,03   N      0     N     SMIC 35 h
ALP-02  Nadia Khelifi       2100,00   N      0     N     non-cadre 2100
ALP-03  Hugo Bertin         2500,00   N      0     N     ancre 2500
ALP-04  Paul Mercier        3100,00   N      8 %   N     PAS hypo 8 %
ALP-05  Camille Roux        3500,00   O      0     N     cadre forfait jours, effectif 20
ALP-06  Antoine Vidal       5000,00   N      0     N     T2 (PMSS 4005)
ALP-07  Inès Palacio        1287,10   N      0     N     entrée 13/01 (2100×19/31)
ALP-08  Sofiane Benali      1458,46   N      0     N     temps partiel (brut dossier)
ALP-09  Thomas Leroy        2700,00   N      0     N     2500 + prime 200
ALP-10  Sarah Cohen         2500,00   O      10 %  O     mutuelle 20/40 + PAS 10 % hypo
ALP-11  Marc Dupuis         2169,25   N      0     N     HS 4×25 % sur 2100 (L. 3121-36)
ALP-12  Claire Petit        2800,00   N      0     N     3100 − 3 j cal. (méthode pédagogique)
ALP-13  Yanis Haddad        2500,00   N      0     N     maladie — brut maintenu HYPO examen
ALP-14  Julie Moreau        1209,68   N      0     N     sortie 15/01 (2500×15/31) + ICP à comparer
ALP-15  Karim El Amrani     2550,00   N      0     N     2500 + AEN repas 50 HYPO
ALP-16  Emma Blanchard      2700,00   N      0     N     2500 + rappel 200
ALP-17  Noah Garcia         2100,00   N      0     N     ancre 2100
ALP-18  Chloé Martin        3500,00   O      0     N     cadre 3500, effectif 20
ALP-19  Lucas Bernard       1823,03   N      0     N     SMIC
ALP-20  Amina Traoré        2500,00   N      0     N     ancre 2500

Doublons d'ancre (mêmes totaux moteur si mêmes options) :
01 = 19  |  02 = 17  |  03 = 20 (et 13 pour le NAP, hypo maladie)  |  05 = 18  |  09 = 16 (2700)`),
      ],
      erreurs:
        "Donner 2 100 € à Inès. Coller 1 823,03 € à Sofiane. Donner le NAP d'Hugo à Sarah. Traiter Camille comme un effectif 80. Oublier que Thomas et Emma ont le même brut 2 700 € pour des faits différents (prime vs rappel) : l'assiette est la même, la pièce et la DSN ne le sont pas.",
      particuliers:
        "Prime (ALP-09) et rappel (ALP-16) : même brut pédagogique 2 700 €, même S 562,69 €, même NAP 2 137,31 €. La qualification n'est pas la même (élément du mois vs régularisation). Cadre ALP-10 : totaux d'examen fournis = 2 500 € + mutuelle + PAS 10 % (S 541,01 / NAP 1 753,97) ; vous ne substituez pas un autre moteur.",
      exercice:
        "Classez chaque ALP en : ancre pleine / brut modifié / ancre + paramètre (PAS ou mutuelle). Citez trois paires de matricules qui partagent les mêmes totaux et une paire qui partage le brut mais pas le NAP.",
      correction:
        "Ancres pleines : 01, 02, 03, 05, 06, 17, 18, 19, 20. Brut modifié : 07, 08, 09, 11, 12, 14, 15, 16. Ancre + paramètre : 04 (PAS), 10 (mutuelle+PAS), 13 (maladie hypo, brut d'ancre conservé). Paires de totaux : 01/19, 02/17, 03/20, 05/18, 09/16. Même brut pas même NAP : 03 vs 10 (2 500 € → 1 978,99 € vs 1 753,97 €).",
    }),

    pack({
      title: "Le cycle à réaliser : collecte, calcul, contrôle, DSN, écritures, reporting, mails",
      description:
        "Enchaîner les sept livrables de clôture sur Atelier Lumière Paie, dans l'ordre, sans improviser le 24.",
      minutes: 30,
      objectifs:
        "Vous savez dérouler le cycle de janvier 2026 : collecte des pièces, calcul sourcé, contrôles bloquants, DSN conceptuelle, journal 641/645/421/43x/4421, reporting d'anomalies, quatre mails. Vous savez qui vise.",
      theorie:
        "Gérer la paie d'Atelier Lumière Paie, ce n'est pas éditer 20 PDF. C'est tenir un cycle. Collecte : contrats, DPAE d'Inès, avenant de Sofiane, validation des 4 HS de Marc, pièce d'arrêt de Yanis, motif et date de sortie de Julie, qualification de la prime de Thomas et du rappel d'Emma, justificatif d'AEN de Karim, taux PAS transmis pour Paul et Sarah, affiliation ou dispense écrite de Sarah. Sans pièce, vous n'inventez pas la variable.\n\nCalcul : chaque brut de dossier entre dans le moteur pédagogique, période janvier 2026, effectif 20, RGDU off, AT/MP 1,50 % hypo. Les totaux d'examen sont fournis dans les leçons suivantes : vous les reconstituez et vous les expliquez, vous ne les « arrondissez pas pour faire joli ». Contrôle : SMIC horaire et mensuel, PMSS 4 005 €, T2 d'Antoine, FNAL 0,10 % (pas 17,50 €), APEC des cadres, CET si brut > PMSS, nets aberrants, confidentialité PAS, brut maladie étiqueté, ICP de Julie à comparer (dixième / maintien) sans indemnité CCN inventée.\n\nDSN conceptuelle : ce n'est pas un XML. C'est aligner faits, bulletins, dates (entrée 13, sortie 15, arrêt), motifs, et prévoir la lecture des CRM. Le dépôt engage : un junior prépare, un habilité dépose. Écritures : 641 = bruts de période ; 645 = patronal (AT/MP hypo inclus) ; 421 = NAP ; 43x = salarial + patronal ; 4421 = PAS. Reporting : liste d'anomalies nommées, pas un « tout vert ». Quatre mails : explication SMIC, PAS sans comparer un collègue, maladie hypo, sortie sans inventer l'indemnité.\n\nUn junior qui inverse l'ordre (payer, puis contrôler, puis collecter la DPAE) produit une clôture élégante et indéfendable. La simulation échoue sur une erreur grave non corrigée, pas sur un centime d'arrondi expliqué.",
      methode:
        "Ordre imposé : (1) ouvrir paramètres 2026 et effectif 20 ; (2) collecter et geler ; (3) calculer les 20 ; (4) contrôler la liste bloquante ; (5) corriger ou escalader ; (6) viser ; (7) éditer, préparer SEPA, DSN, journal, reporting, mails. Rien ne part à la banque avant le visa.",
      extra: [
        code(`CYCLE JANVIER 2026 — Atelier Lumière Paie (organisation interne fictive)

02/01  Ouverture. PMSS 4005, SMIC 12,02 / 1823,03, FNAL 0,10 %, RGDU off, AT/MP hypo 1,50 %.
05/01  Relance variables. Gel annoncé (date interne). DPAE Inès (entrée 13) : RH, pas « on verra ».
08/01  Pièce arrêt Yanis. Maintien / IJ : LIRE la CCN, ne pas inventer un %. DSN événement selon habilité.
13/01  Entrée Inès : dossier + premier bulletin prorata 19/31 déjà dans le brut 1 287,10 €.
18/01  Gel. HS Marc : 4 h validées ou report. Pas d'invention.
20/01  Calcul d'essai. Contrôles : SMIC Sofiane/Léa/Lucas, T2 Antoine, FNAL Camille ≠ 17,50,
       PAS Paul/Sarah confidentiels, nets, entrée, sortie, maladie étiquetée.
24/01  Clôture interne. SEPA préparé non envoyé. DSN préparée. Journal. 4 mails prêts.
       Visa responsable. Dépôt DSN par l'habilité.
Post   CRM, lettrage 43x, ICP Julie comparée (dixième/maintien), réguls à planifier.

LIVRABLES EXAMEN
[ ] 20 bulletins justifiés (totaux fournis)
[ ] Contrôles SMIC / PMSS / T2 / FNAL 20 / PAS / nets
[ ] DSN conceptuelle (mensuelle + événements 13, 15, arrêt)
[ ] Journal 641 / 645 / 421 / 43x / 4421 (totaux retracés)
[ ] Reporting d'anomalies (y compris hypo ALP-13 et AEN ALP-15)
[ ] 4 mails (SMIC, PAS, maladie, sortie)
[ ] Aucune erreur grave non corrigée`),
      ],
      exemple:
        "Le 23, le chef d'atelier veut « passer 10 HS de plus pour Marc ». Le gel est passé. Le junior ne décale pas 20 personnes. Il propose février, copie le responsable. Les 4 HS déjà validées restent ; le surplus n'existe pas. Tenir le calendrier n'est pas bloquer l'opérationnel : c'est empêcher un contentieux d'heures non validées.",
      erreurs:
        "Tout faire le 24. Calculer sans DPAE. Déposer la DSN avant le visa. Envoyer le SEPA pour « avancer ». Répondre aux 4 mails de mémoire sans bulletin. Oublier le reporting parce que « les quiz suffisent ».",
      particuliers:
        "Paiement interne le 28, DSN selon échéance du dossier relue sur net-entreprises : deux validations. Si le responsable est absent : délégation écrite, pas un junior qui « clôture quand même ». Cabinet : un cycle par SIRET, pas un cycle unique pour tous les clients.",
      exercice:
        "Classez avant calcul / après calcul / visa / post-clôture : (A) DPAE Inès ; (B) T2 Antoine ; (C) dépôt DSN ; (D) lecture CRM ; (E) pièce arrêt Yanis ; (F) file SEPA.",
      correction:
        "A et E : avant (pièces). B : après calcul (contrôle résultat). F : après visa, pas avant. C : visa / habilité. D : post-clôture. Pourquoi : inverser C et B, c'est déclarer un T2 non vu. Inverser A et le calcul, c'est un prorata orphelin.",
    }),

    pack({
      title: "Correction des bulletins ALP-01 à ALP-10",
      description:
        "Retrouver les totaux moteur de Léa à Sarah, période janvier 2026, effectif 20, RGDU off.",
      minutes: 36,
      objectifs:
        "Vous reconstituez salarial, net à payer, MNS, PAS et, le cas échéant, T2, APEC, FNAL, mutuelle pour ALP-01 à ALP-10. Vous étiquetez chaque hypo. Vous ne recyclez pas un NAP d'ancre.",
      theorie:
        "Les totaux ci-dessous sont les totaux d'examen fournis (moteur pédagogique engine.mjs, rates-2026.json, janvier 2026, métropole, régime général, AT/MP 1,50 % hypo, RGDU non appliquée, effectif 20). Vous ne les inventez pas, vous ne les remplacez pas par un net « indicatif » de communication, vous ne les arrondissez pas au euro.\n\nSur une ancre sans PAS ni mutuelle, NAP = MNS pédagogique 2026 (brut − prélèvements sociaux salariaux obligatoires, mutuelle hors formule jusqu'au 31/12/2026 selon le cadre BOSS). Dès qu'un PAS apparaît (Paul, Sarah), le NAP n'est plus le MNS : le PAS sort du net versé, pas du montant net social. Dès qu'une mutuelle salariale hypo apparaît (Sarah, 20,00 €), elle diminue le NAP ; elle n'est pas intégrée d'office dans le MNS 2026, et la part patronale 40,00 € n'y entre pas davantage (évolution 2027 = projet à revérifier, pas une règle déjà appliquée).\n\nLéa (SMIC 1 823,03 €) : S 379,94 €, NAP/MNS 1 443,09 €. Le net indicatif Service-Public 1 443,11 € est un chiffre de communication, pas une formule de bulletin (écart 0,02 € possible selon arrondis / périmètre). Nadia 2 100 € : S 437,65 €, NAP 1 662,35 €. Hugo 2 500 € : S 521,01 €, NI 2 050,22 €, NAP 1 978,99 €, patronal 1 027,15 € — ancre de référence du cours. Paul 3 100 € PAS 8 % hypo : S 646,05 €, NI 2 542,28 €, PAS 203,38 €, NAP 2 250,57 €, MNS 2 453,95 €. Camille cadre 3 500 € effectif 20 : S 730,25 €, P 1 439,27 €, NAP 2 769,75 € ; FNAL 0,10 % plafonné = 3,50 €, pas 17,50 € (17,50 € serait un effectif ≥ 50). Antoine 5 000 € : T1 4 005, T2 995, CET s 7,00 €, S 1 037,18 €, NAP 3 962,82 €.\n\nInès entrée : 2 100 × 19/31 = 1 287,10 €, S 268,23 €, NAP 1 018,87 € — pas le NAP de Nadia. Sofiane partiel : brut dossier 1 458,46 €, S 303,93 €, NAP 1 154,53 € — pas un SMIC plein. Thomas 2 700 € (prime 200) : S 562,69 €, NAP 2 137,31 €. Sarah 2 500 € mutuelle+PAS 10 % : S 541,01 € (521,01 + 20,00 mutuelle s), NI 2 050,22 €, PAS 205,02 €, MNS 1 978,99 €, NAP 1 753,97 € (= 1 978,99 − 20,00 − 205,02). Totaux d'examen fournis : vous ne substituez pas un autre moteur.",
      methode:
        "Pour chaque ALP-01 à 10 : écrire période, brut, options (cadre, PAS, mutuelle, effectif 20). Retrouver S, NAP, MNS, PAS. Contrôler un point spécifique (SMIC, FNAL 3,50 €, T2, prorata, partiel, prime soumise, mutuelle vs MNS). Cocher l'étiquette hypo.",
      extra: [
        code(`CORRECTION ALP-01 à 10 — totaux d'examen (ne pas inventer)

ID     Brut      S        NI       PAS     MNS      NAP      Point de contrôle
ALP-01 1823,03   379,94   1495,04  0       1443,09  1443,09  SMIC ; ≠ 1443,11 communication
ALP-02 2100,00   437,65   1722,19  0       1662,35  1662,35  ancre 2100
ALP-03 2500,00   521,01   2050,22  0       1978,99  1978,99  P 1027,15 — ancre cours
ALP-04 3100,00   646,05   2542,28  203,38  2453,95  2250,57  PAS 8 % hypo ; MNS ≠ NAP
ALP-05 3500,00   730,25   2869,47  0       2769,75  2769,75  cadre ; P 1439,27 ; FNAL 3,50 ≠ 17,50
ALP-06 5000,00   1037,18  4105,28  0       3962,82  3962,82  T1 4005 T2 995 CET_s 7,00
ALP-07 1287,10   268,23   1055,54  0       1018,87  1018,87  2100×19/31 ; pas 1662,35
ALP-08 1458,46   303,93   1196,08  0       1154,53  1154,53  partiel ; pas 1823,03
ALP-09 2700,00   562,69   2214,24  0       2137,31  2137,31  prime 200 soumise
ALP-10 2500,00   541,01   2050,22  205,02  1978,99  1753,97  mut. 20/40 hypo + PAS 10 % hypo

FNAL ALP-05 (effectif 20) : 0,10 % × min(3500 ; 4005) = 3,50 €  — pas 17,50 €
APEC ALP-05 : salarial 0,84 € (cadre, limite 4 PASS)
PAS ALP-04 : 2542,28 × 8 % = 203,38 €  (hypo de dossier, pas un barème national)
PAS ALP-10 : 2050,22 × 10 % = 205,02 €
NAP ALP-10 : 1978,99 − 20,00 − 205,02 = 1753,97 €
Mutuelle ALP-10 : HYPOTHÈSE 20,00 s / 40,00 p ; MNS 2026 sans part patronale d'office (BOSS)`),
      ],
      exemple:
        "Un junior livre Sarah à 1 978,99 € « comme Hugo ». Le salarié réclame 225 €. L'écart est la mutuelle 20 € plus le PAS 205,02 €. Sans étiqueter les deux hypo, on « corrige le brut ». Avec le bulletin, on explique deux lignes distinctes et on ne compare pas le taux à celui de Paul.",
      erreurs:
        "NAP SMIC 1 443,11 €. FNAL Camille 17,50 €. NAP Inès 1 662,35 €. MNS Sarah 1 753,97 €. PAS calculé sur le brut. T2 oublié. Prime Thomas exonérée « pour faire plaisir ».",
      particuliers:
        "Forfait jours Camille : pas de 4 HS à 25 % au réflexe L. 3121-36. Dispense mutuelle Sarah : pièces, pas un mail « enlevez ». Taux PAS : transmis, confidentiel, jamais aligné sur un collègue.",
      exercice:
        "Calculez de tête les écarts NAP : Hugo vs Sarah ; Nadia vs Inès ; Camille si l'on avait mis FNAL 17,50 € (le salarial change-t-il ?).",
      correction:
        "Hugo 1 978,99 − Sarah 1 753,97 = 225,02 € (20,00 mutuelle s + 205,02 PAS). Nadia 1 662,35 − Inès 1 018,87 = 643,48 € (prorata, pas une « erreur de net »). FNAL 17,50 € au lieu de 3,50 € : écart patronal 14,00 € ; le salarial 730,25 € et le NAP 2 769,75 € ne changent pas (FNAL non salarial). L'erreur reste grave : assiette déclarative et 645 faux, DSN et URSSAF fausses.",
    }),

    pack({
      title: "Correction ALP-11 à ALP-20 et anomalies de clôture",
      description:
        "HS, absence calendaire, maladie étiquetée, sortie, AEN, rappels, doublons d'ancre, et file d'anomalies bloquantes.",
      minutes: 36,
      objectifs:
        "Vous justifiez ALP-11 à 20 avec les totaux fournis. Vous nommez les anomalies (SMIC, PMSS, T2, PAS confidentiel, maladie hypo, ICP à comparer). Vous savez qu'aucun net négatif n'apparaît ici, et que l'absence de net négatif ne dispense pas du contrôle.",
      theorie:
        "ALP-11 Marc Dupuis : 4 heures supplémentaires à 25 % sur une base 2 100 €. Taux horaire pédagogique 2 100 / 151,67 = 13,85 €. Majoration légale supplétive L. 3121-36 (à défaut de convention ou accord plus favorable) : 13,85 × 1,25 × 4 = 69,25 €. Brut 2 169,25 €, S 452,09 €, NAP 1 717,16 €. Vous n'appliquez pas 10 %, vous n'appliquez pas 50 % sur les 4 premières, vous n'appliquez pas L. 3121-36 au forfait jours de Camille.\n\nALP-12 Claire Petit : 3 100 € moins 3 jours calendaires. Méthode pédagogique d'examen : 3 100 × 3 / 31 = 300,00 €, brut 2 800,00 €, S 583,53 €, NAP 2 216,47 €. Cette méthode calendaire est étiquetée pédagogique : le dossier réel peut retenir ouvrés, ouvrables, heures, selon contrat et CCN lus, pas selon un réflexe unique. ALP-13 Yanis Haddad : arrêt maladie, brut 2 500 €. Vous n'inventez pas une IJ journalière (absent de rates-2026.json). Vous lisez IJ / maintien / subrogation dans la CCN et le contrat. Hypothèse d'examen : brut maintenu 2 500 € en attente de CCN, NAP identique à l'ancre 2 500 € soit 1 978,99 € — et vous l'étiquetez HYPOTHÈSE, vous ne la présentez pas comme le droit français du maintien.\n\nALP-14 Julie Moreau : sortie le 15 janvier, 2 500 × 15/31 = 1 209,68 €, S 252,09 €, NAP 957,59 €. L'indemnité compensatrice de congés (ICP) s'ajoute après comparaison dixième (L. 3141-24) et maintien : vous retenez le plus favorable. Vous n'inventez pas une indemnité de rupture CCN, ni un préavis non écrit. Documents : bulletin de solde, certificat, attestation France Travail selon process, reçu pour solde selon encadrement interne. ALP-15 Karim : AEN repas 50 € hypo + 2 500 = 2 550 €, S 531,44 €, NAP 2 018,56 €, AEN étiqueté HYPOTHÈSE, pas un barème URSSAF recopié de mémoire.\n\nALP-16 Emma : rappel 200 € sur 2 500, brut 2 700 €, mêmes totaux que Thomas (S 562,69 / NAP 2 137,31) mais pièce et DSN de régularisation, pas une prime du mois. ALP-17 = ALP-02. ALP-18 = ALP-05 (cadre 3 500, effectif 20, FNAL 3,50 €). ALP-19 = ALP-01. ALP-20 = ALP-03. Anomalies à scanner : SMIC Léa/Lucas/Sofiane ; PMSS Antoine ; T2 ; aucun net négatif dans cette copie — le contrôle reste obligatoire ; PAS Paul et Sarah confidentiels. Une anomalie grave non corrigée échoue la simulation.",
      methode:
        "Après ALP-10, reprendre 11-20 dans l'ordre événementiel : HS, absence, maladie, sortie, AEN, rappel, puis les trois ancres de fin. Pour chaque événement : pièce, règle sourcée, brut, totaux fournis, étiquette hypo, point DSN. Puis file d'anomalies unique, datée.",
      extra: [
        code(`CORRECTION ALP-11 à 20 — totaux d'examen

ID     Brut      S        NAP      Événement et règle
ALP-11 2169,25   452,09   1717,16  HS : horaire 13,85 ; 4×25 % = 69,25 ; L. 3121-36 supplétif
ALP-12 2800,00   583,53   2216,47  absence 3100×3/31 = 300 ; méthode CALENDAIRE PÉDAGOGIQUE
ALP-13 2500,00   521,01   1978,99  maladie : IJ/maintien CCN à LIRE ; HYPO examen brut maintenu 2500
ALP-14 1209,68   252,09    957,59  sortie 15/01 : 2500×15/31 ; + ICP dixième vs maintien (pas d'indemnité CCN inventée)
ALP-15 2550,00   531,44   2018,56  AEN repas 50,00 = HYPOTHÈSE
ALP-16 2700,00   562,69   2137,31  rappel 200 (même brut que ALP-09, autre qualification)
ALP-17 2100,00   437,65   1662,35  = ALP-02
ALP-18 3500,00   730,25   2769,75  = ALP-05 (P 1439,27 ; FNAL 3,50)
ALP-19 1823,03   379,94   1443,09  = ALP-01 SMIC
ALP-20 2500,00   521,01   1978,99  = ALP-03

FILE D'ANOMALIES (clôture) — aucune n'est « trop petite »
[ ] SMIC : Léa, Lucas 1823,03 ; Sofiane horaire ≥ 12,02 (brut 1458,46 partiel, pas un SMIC plein oublié)
[ ] PMSS 4005 : Antoine T1 4005 T2 995 CET_s 7,00 — si moteur encore à 3925 = bloquant
[ ] FNAL effectif 20 : Camille/Chloé 3,50 €, pas 17,50 €
[ ] T2 présent sur ALP-06, absent sous PMSS
[ ] Net négatif : aucun dans cette copie — le contrôle a quand même été fait
[ ] PAS Paul 203,38 et Sarah 205,02 : confidentiels, jamais comparés
[ ] ALP-13 hypo maladie étiquetée ; pas d'IJ journalière inventée
[ ] ALP-14 ICP à comparer ; pas d'indemnité de rupture inventée
[ ] ALP-15 AEN hypo étiquetée
[ ] DPAE Inès / sortie Julie / HS Marc validées
Erreur grave non corrigée = échec de la simulation`),
      ],
      exemple:
        "Un stagiaire invente 45 € d'IJ journalière « pour que Yanis ait un vrai arrêt ». Le NAP n'est plus 1 978,99 €, le 43x ne lettrera pas, la DSN ment. L'examen refuse ce chiffre. La méthode : pièce, dates, retenue ou maintien LU, subrogation selon paramètre d'entreprise, hypo 2 500 € étiquetée en attendant la CCN.",
      erreurs:
        "50 % de majoration sur 4 HS. Absence en ouvrés sans le dire alors que l'examen impose le calendaire pédagogique. IJ 50 % du brut magique. Indemnité de licenciement « un mois » sur Julie. AEN 50 € présenté comme un barème national. Oublier Emma parce que « c'est comme Thomas ».",
      particuliers:
        "Aucun net négatif ici : ce n'est pas une raison pour retirer le contrôle (saisie sur salaire, trop-perçu, mutuelle peuvent le créer ailleurs). Temps partiel Sofiane : contrôler le SMIC horaire, pas coller 1 823,03 €. Sortie le 15 : le salarié existe ; le solde n'attend pas le 31 au soir.",
      exercice:
        "Pour ALP-11, 12, 13, 14, 15 : citez la règle, l'hypo s'il y en a une, le brut, le NAP fourni, et ce que vous n'inventez pas.",
      correction:
        "11 : L. 3121-36 supplétif, 13,85 × 1,25 × 4 = 69,25, brut 2 169,25, NAP 1 717,16 ; pas un accord inventé. 12 : calendaire pédagogique 300 €, brut 2 800, NAP 2 216,47 ; pas une méthode unique nationale. 13 : hypo brut maintenu 2 500, NAP 1 978,99 ; pas d'IJ inventée. 14 : 1 209,68 / 957,59 ; ICP comparée, pas d'indemnité CCN inventée. 15 : AEN 50 hypo, 2 550 / 2 018,56 ; pas un taux URSSAF « repas » sorti de mémoire.",
    }),

    pack({
      title: "DSN et CRM conceptuels de la clôture janvier 2026",
      description:
        "Relier les 20 bulletins à une DSN mensuelle et à des signalements, sans rédiger de XML et sans numéro de bloc inventé.",
      minutes: 24,
      objectifs:
        "Vous savez ce que la DSN porte pour Atelier Lumière Paie, quels événements exigent un signalement, ce qu'est un CRM, et ce qu'un junior prépare sans déposer hors délégation.",
      theorie:
        "La DSN est le canal déclaratif social issu de la paie. Elle n'est pas la DPAE, ni le virement SEPA, ni le journal 641, ni un XML à rédiger à la main, ni une certification d'éditeur. Pour Atelier Lumière Paie, janvier 2026, elle doit raconter la même vérité que les 20 bulletins : bruts, assiettes, dates d'entrée (Inès, 13 janvier) et de sortie (Julie, 15 janvier), arrêt de Yanis, PAS de Paul et Sarah, affiliation mutuelle de Sarah, HS de Marc, AEN hypo de Karim étiqueté comme élément de rémunération, rappel d'Emma distinct d'une prime de Thomas.\n\nMensuelle : le dépôt de période, après visa, par l'habilité, sur le tableau de bord du régime (net-entreprises en régime général pédagogique). Événementielle : l'arrêt, la fin de contrat, parfois l'embauche selon process et cahier — vous relisez net-entreprises / DSN-info, vous n'inventez pas un délai de mémoire, vous n'inventez pas un numéro de bloc. Un voyant vert n'est pas une garantie juridique : un fichier syntaxiquement valide peut porter une date de fin au 31 par défaut logiciel alors que Julie est sortie le 15.\n\nLes CRM (comptes rendus métier) reviennent après dépôt. Ils signalent des anomalies destinataire par destinataire (URSSAF, retraite, prévoyance, France Travail, DGFiP collecteur). Un junior les lit, les classe (bloquant / à corriger / à expliquer), et n'efface pas un CRM « pour tenir l'heure ». Corriger un bulletin sans corriger la DSN crée deux vérités. Corriger la DSN sans le bulletin casse le 43x.\n\nLe simulateur pédagogique LOU n'émet pas de DSN réelle. Cette leçon n'enseigne pas Sage, Silae ou un cahier technique périmé. Elle enseigne l'alignement faits → bulletins → DSN → CRM → organismes, et la limite : dépôt hors délégation = faute.",
      methode:
        "Checklist DSN ALP : 20 contrats présents ; dates 13 et 15 exactes ; arrêt Yanis signalé selon consigne ; PAS transmis sans être commenté ; mutuelle Sarah cohérente ; pas de forfait jours transformé en HS ; dépôt par l'habilité ; CRM le lendemain, journal d'incidents.",
      extra: [
        code(`DSN CONCEPTUELLE — Atelier Lumière Paie janvier 2026
Pas un XML. Pas un n° de bloc. Cahier officiel > souvenir.

Mensuelle (après visa)
- 20 individus, effectif déclaré cohérent (FNAL 0,10 %)
- Bruts = bruts de bulletins (y compris 1287,10 / 1209,68 / 2169,25 / 2550 / 2700)
- PAS Paul 203,38 et Sarah 205,02 (collecteur, confidentiel)
- Mutuelle Sarah : contrat hypo 20/40, pas une dispense magique

Événements à ne pas noyer dans la mensuelle « on verra »
- Entrée Inès 13/01 (DPAE déjà faite : autre obligation, L. 1221-10)
- Sortie Julie 15/01 + attestation France Travail selon process (dates exactes)
- Arrêt Yanis : signalement selon consigne habilité ; pas d'IJ inventée dans le flux

CRM — lecture junior
[ ] Identité / NIR
[ ] Contrat (début, fin, motif)
[ ] Assiettes vs bulletin
[ ] PAS
[ ] Organisme complémentaire
Bloquant : date de fin Julie au 31 par défaut, NIR, oubli d'Inès
Escalade : rejet, contrôle, paramétrage de code cotisation`),
      ],
      exemple:
        "CRM : fin de contrat Julie au 31/01. Le bulletin dit le 15. Lina ne « laisse le vert ». Elle ouvre le dossier, corrige la date, fait redéposer par Marc, alerte France Travail via le canal prévu. Un chômage calé sur le 31 lèse la salariée et l'employeur.",
      erreurs:
        "Déposer pour tenir l'heure. Inventer un bloc. Traiter la DSN le lendemain du paiement sans relecture. Croire que le vert clôt. Oublier Emma (rappel) ou Karim (AEN). Confondre DSN et DPAE.",
      particuliers:
        "MSA : autre tableau, même exigence d'alignement — hors régime de ce dossier. Multi-établissements : l'AT suit l'établissement. Portage : l'employeur déclarant n'est pas le lieu de travail. Absence de logiciel « DSN native » : pas une excuse pour ne pas déclarer.",
      exercice:
        "Citez quatre données ALP qui doivent coller entre bulletin et DSN, et deux CRM qui blochent la clôture post-dépôt.",
      correction:
        "Données : date entrée Inès 13 ; date sortie Julie 15 ; brut Antoine 5 000 et T2 ; PAS Sarah 205,02 sans le divulguer. CRM bloquants : fin au 31 au lieu du 15 ; individu Inès absent ; NIR erroné. Un CRM « cosmétique » de libellé ne bloque pas ; une date de fin si. Pourquoi : les organismes voient la DSN, pas votre Excel.",
    }),

    pack({
      title: "Journal comptable agrégé — méthode 641, 645, 421, 43x, 4421",
      description:
        "Transformer les 20 bulletins en journal équilibré, en retraçant les totaux plutôt qu'en recopiant un chiffre hors source.",
      minutes: 28,
      objectifs:
        "Vous savez quelle famille de compte porte le brut, le patronal, le net, le social et le PAS. Vous retracez les totaux d'Atelier Lumière Paie. Vous n'inventez pas un ICP dans le 641 de période.",
      theorie:
        "Le journal de paie n'est pas le net. C'est la constatation des charges et des dettes du mois, en partie double. Pédagogie PCG (legal-sources PCG-641) : débit 641 rémunérations du personnel (bruts de période, primes soumises, HS, AEN intégré au brut) ; débit 645 charges patronales (URSSAF, retraite, AT/MP hypo, mutuelle patronale hypo) ; crédit 421 nets à payer (ceux du SEPA, après PAS) ; crédit 43x organismes (salarial + patronal à reverser) ; crédit 4421 État PAS. Le plan réel de l'entreprise peut éclater 431/437/438 : la famille prime, le numéro exact se lit dans le mapping interne.\n\nMéthode d'examen : vous ne recopiez pas un total « dont on se souvient ». Vous additionnez ligne à ligne, puis vous vérifiez l'équilibre : 641 + 645 = 421 + 43x + 4421. Les bruts, salariaux et NAP sont les totaux d'examen fournis. Les patronaux utilisés pour retracer le 645 sont ceux du moteur pédagogique janvier 2026, effectif 20, AT/MP 1,50 % hypo ; pour ALP-10, 645 inclut 1 027,15 € + 40,00 € de mutuelle patronale hypo (l'ancre Hugo plus la part employeur du contrat fictif). L'ICP d'ALP-14 n'est pas dans ces bruts : elle s'ajoute après comparaison dixième/maintien, montant non inventé. Une indemnité de rupture CCN non lue n'entre pas non plus.\n\nLe salarial n'est pas une charge : il est déjà dans le 641, retenu pour le 43x. Le PAS n'est pas une cotisation : 4421, pas 645. AT/MP 1,50 % reste une hypo dans le 645 : vous ne le présentez pas comme un taux national. Un écart de 0,01 € qui casse l'import n'est pas « rien ».\n\nLe gestionnaire junior produit un fichier justifié. Il ne recode pas le plan de comptes. Il rapproche 421 et SEPA, 43x et avis / DSN, 4421 et PAS déclaré.",
      methode:
        "1) Lister brut, S, P, NAP, PAS par ALP. 2) Sommer 641, 645, 421, 43x = S+P, 4421. 3) Vérifier 641+645 = 421+43x+4421. 4) Noter les hors-journal de période (ICP à comparer, indemnité non lue). 5) Remettre le mapping interne si les numéros diffèrent.",
      extra: [
        code(`JOURNAL PÉDAGOGIQUE — Atelier Lumière Paie — janvier 2026
Comptes : logique PCG, le plan d'entreprise prime.
AT/MP 1,50 % et mutuelle 40,00 € ALP-10 = HYPOTHÈSES dans le 645.
ICP ALP-14 : hors ces totaux (dixième vs maintien, à comparer, non inventée).

Méthode
641  = somme des bruts de période (y compris prime, HS, AEN hypo, proratas)
645  = somme des patronaux moteur (effectif 20) ; ALP-10 = 1027,15 + 40,00 mut. p hypo
421  = somme des NAP d'examen
43x  = salarial + patronal
4421 = PAS ALP-04 203,38 + ALP-10 205,02

Lignes (brut / S / NAP / PAS) — totaux d'examen
ALP-01  1823,03   379,94   1443,09   0
ALP-02  2100,00   437,65   1662,35   0
ALP-03  2500,00   521,01   1978,99   0
ALP-04  3100,00   646,05   2250,57   203,38
ALP-05  3500,00   730,25   2769,75   0
ALP-06  5000,00  1037,18   3962,82   0
ALP-07  1287,10   268,23   1018,87   0
ALP-08  1458,46   303,93   1154,53   0
ALP-09  2700,00   562,69   2137,31   0
ALP-10  2500,00   541,01   1753,97   205,02
ALP-11  2169,25   452,09   1717,16   0
ALP-12  2800,00   583,53   2216,47   0
ALP-13  2500,00   521,01   1978,99   0
ALP-14  1209,68   252,09    957,59   0
ALP-15  2550,00   531,44   2018,56   0
ALP-16  2700,00   562,69   2137,31   0
ALP-17  2100,00   437,65   1662,35   0
ALP-18  3500,00   730,25   2769,75   0
ALP-19  1823,03   379,94   1443,09   0
ALP-20  2500,00   521,01   1978,99   0

Totaux retracés (vérifier, ne pas mémoriser hors retrace)
Débit  641   49 820,55
Débit  645   20 521,47   (AT/MP hypo + mutuelle patronale 40,00 ALP-10)
Crédit 421   39 012,51
Crédit 43x   30 921,11   (S 10 399,64 + P 20 521,47)
Crédit 4421     408,40
Équilibre    70 342,02 = 70 342,02

Contrôle centime : somme NAP + S + PAS = somme bruts = 49 820,55`),
      ],
      exemple:
        "L'expert-comptable d'une TPE reçoit « une ligne : salaires 39 012,51 ». C'est le 421, pas le coût. Sans 645, la trésorerie URSSAF est sous-calibrée. Lina envoie le journal à cinq familles. Le dirigeant voit enfin que le coût n'est pas le virement du 28.",
      erreurs:
        "Comptabiliser le net en charge unique. Mettre le PAS en 645. Oublier Sarah dans le 4421. Intégrer une indemnité CCN inventée au 641. Lisser 0,01 €. Créditer 512 dès le calcul, avant le virement.",
      particuliers:
        "Acomptes, saisies, titres-restaurant : sous-comptes selon mapping, pas un 641 fourre-tout. Avantage en nature : déjà dans le brut ALP-15. Mutuelle salariale : dans S et 43x, pas dans le MNS 2026. Cabinet : un journal par dossier client.",
      exercice:
        "Sans recopier, dites : (1) pourquoi S n'est pas au débit ; (2) que devient le PAS ; (3) que faire de l'ICP de Julie ; (4) que vérifie l'égalité 641 = NAP + S + PAS ici.",
      correction:
        "1. Le salarial est une retenue sur le brut déjà en 641 ; il crédite 43x. 2. PAS : crédit 4421, 408,40 €, pas une charge. 3. ICP : comparer dixième et maintien, ajouter ensuite, ne pas inventer le montant ni une indemnité de rupture. 4. NAP + S + PAS = brut : 39 012,51 + 10 399,64 + 408,40 = 49 820,55. L'égalité tient parce que la mutuelle s de Sarah est dans S 541,01. Si l'égalité casse, on retrace la ligne, on ne lisse pas.",
    }),

    pack({
      title: "Quatre mails salariés et réponses type",
      description:
        "Répondre à Léa (SMIC), Paul (PAS), Yanis (maladie) et Julie (sortie) sans divulguer, sans inventer, sans promettre l'impossible.",
      minutes: 24,
      objectifs:
        "Vous rédigez quatre réponses professionnelles : expliquer un net SMIC, refuser la comparaison des taux PAS, étiqueter l'hypothèse maladie, traiter une sortie sans inventer l'indemnité. Vous tenez le vouvoiement, le matricule et la confidentialité.",
      theorie:
        "La communication de paie n'est pas un service après-vente du net espéré. C'est une explication factuelle, sourcée, limitée au salarié, tracée. Quatre réclamations tombent typiquement en clôture d'Atelier Lumière Paie. Léa Morel (ALP-01) compare 1 823,03 € et 1 443,09 €, parfois 1 443,11 € lu sur un site grand public. Paul Mercier (ALP-04) veut comprendre « ses 8 % » et, pire, s'aligner sur un collègue. Yanis Haddad (ALP-13) ne comprend pas pourquoi l'arrêt n'a pas « tout changé » ou, à l'inverse, exige une IJ que vous n'avez pas le droit d'inventer. Julie Moreau (ALP-14) cherche son solde, ses congés, « son mois de préavis ».\n\nRègles communes. Canal professionnel, pas WhatsApp. Matricule confirmé (Morel ≠ Moreau). Bulletin de la période sous les yeux. Distinguer obligation légale, paramètre annuel (SMIC, PMSS), hypo de dossier (PAS, AT/MP, AEN, brut maladie maintenu), CCN à lire. Ne jamais citer le bulletin, le taux ou l'arrêt d'un tiers. Ne pas promettre une régularisation pour clore le mail. Si vous ne savez pas, vous le dites et vous visez le responsable.\n\nLéa : le 1 823,03 € est le brut SMIC 35 h du 01/01/2026 au 31/05/2026 (URSSAF). Le 1 443,09 € est le NAP/MNS pédagogique. Le 1 443,11 € n'est pas une formule de bulletin. Paul : le PAS 203,38 € porte sur le NI 2 542,28 € au taux transmis 8 % hypo d'examen ; vous expliquez le mécanisme, pas le choix fiscal, et vous n'ouvrez pas Sarah. Yanis : hypo d'examen brut maintenu 2 500 €, NAP 1 978,99 €, IJ et maintien CCN à lire, aucun taux journalier inventé. Julie : salaire de période 1 209,68 €, NAP 957,59 €, ICP à comparer dixième/maintien, pas d'indemnité de rupture inventée, documents de fin selon process.\n\nUn mail faux pour « calmer » devient une pièce. Un mail exact, même décevant, est une compétence junior.",
      methode:
        "Objet clair, matricule, période, une question = une réponse, source, suite (pièce, visa, délai interne), pas de copie à tout le service, pas de bulletin d'un tiers en pièce jointe.",
      extra: [
        code(`MAIL 1 — Léa Morel ALP-01 — SMIC et net
Objet : Bulletin janvier 2026 — ALP-01 — explication du net

Bonjour,
Votre brut de janvier 2026 est 1 823,03 €, SMIC mensuel base 35 h applicable du 01/01/2026
au 31/05/2026 (URSSAF). Ce n'est pas le virement. Les cotisations salariales pédagogiques
du dossier portent le salarial à 379,94 € et le net à payer / montant net social à 1 443,09 €.
Un montant 1 443,11 € parfois publié comme « net indicatif » est un chiffre de communication,
pas la formule de votre bulletin (écart possible 0,02 € selon arrondis et périmètre).
Je reste à votre disposition sur une ligne précise du bulletin de janvier.
Cordialement,

MAIL 2 — Paul Mercier ALP-04 — PAS, confidentialité
Objet : Bulletin janvier 2026 — ALP-04 — prélèvement à la source

Bonjour,
Le prélèvement à la source de janvier 2026, 203,38 €, s'applique sur votre net imposable
2 542,28 €. Le taux utilisé dans ce dossier d'examen est une HYPOTHÈSE pédagogique (8 %).
En entreprise, le taux est transmis par l'administration fiscale via la DSN ; la paie
ne le choisit pas et ne l'aligne pas sur un autre salarié. Je ne consulte pas, et je
ne communique pas, le taux d'un collègue. Pour vérifier votre taux réel, votre espace
impots.gouv.fr est le canal. Votre NAP 2 250,57 € et votre MNS 2 453,95 € sont distincts :
le PAS diminue le versé, pas le montant net social.
Cordialement,

MAIL 3 — Yanis Haddad ALP-13 — arrêt, hypo, CCN
Objet : Bulletin janvier 2026 — ALP-13 — arrêt de travail

Bonjour,
Votre dossier d'examen porte un arrêt en janvier 2026. Les IJ et le maintien de salaire
se lisent dans la CCN (IDCC à lire) et le contrat : un gestionnaire junior n'invente
pas un montant d'IJ journalière ni un pourcentage de maintien. Hypothèse d'examen,
étiquetée comme telle : brut pédagogique maintenu à 2 500,00 € en attente de cette lecture,
soit un NAP 1 978,99 € identique à l'ancre 2 500 € du dossier. Ce n'est pas une règle
nationale de maintien. Dès que la CCN et les pièces (dates, subrogation) sont lues,
le bulletin réel se recalcule. Je ne peux pas « mettre 50 % » pour clôturer.
Cordialement,

MAIL 4 — Julie Moreau ALP-14 — sortie, ICP, documents
Objet : Sortie 15 janvier 2026 — ALP-14 — éléments de solde

Bonjour,
Votre date de sortie retenue est le 15/01/2026. Le salaire de période pédagogique est
2 500 × 15/31 = 1 209,68 €, salarial 252,09 €, net à payer de période 957,59 €.
L'indemnité compensatrice de congés payés se calcule en comparant la règle du dixième
(L. 3141-24) et le maintien : on retient le plus favorable. Je n'invente pas une
indemnité de rupture conventionnelle non lue. Les documents de fin (certificat,
attestation France Travail selon process, reçu pour solde selon encadrement interne)
suivent la procédure, avec les dates d'emploi exactes. Je vous confirme le calendrier
dès visa du responsable.
Cordialement,`),
      ],
      exemple:
        "Paul écrit : « Mettez-moi le taux de Sarah, elle a dit qu'elle était à 10 % mais elle touche plus. » Deux fautes dans la phrase : divulgation entre salariés, et confusion brut/net (Sarah 1 753,97 € n'est pas « plus » que 2 250,57 €). La réponse refuse l'alignement, refuse de parler de Sarah, propose le canal fiscal. Copie responsable si la pression continue.",
      erreurs:
        "Joindre le bulletin d'Hugo à Sarah. Promettre 1 443,11 € à Léa. Inventer 46 € d'IJ. Accorder un mois de préavis à Julie « pour que ça passe ». Répondre sur WhatsApp. Tutoyer. Oublier le matricule (Morel / Moreau).",
      particuliers:
        "Salarié énervé : même contenu, phrase d'ouverture calme, pas de sarcasme. Homonyme : confirmer ALP-xx avant d'envoyer. Représentant du personnel : données nécessaires au mandat, pas le PAS nominatif d'un tiers hors cadre.",
      exercice:
        "Rédigez en huit lignes le refus d'aligner le PAS de Paul sur « un collègue », sans nommer Sarah, et l'invitation à l'espace fiscal.",
      correction:
        "« Je ne peux ni consulter ni modifier un taux d'impôt à partir d'un autre salarié. Le PAS de votre bulletin (203,38 € sur NI 2 542,28 € dans ce dossier d'examen) suit le taux transmis. Pour un taux réel, votre espace impots.gouv.fr est le canal. Je peux relire avec vous les zones NI / PAS / NAP / MNS de VOTRE bulletin de janvier 2026. » Pas de nom, pas de montant d'un tiers, pas de promesse d'annulation.",
    }),

    pack({
      title: "Grille de compétences et remédiation",
      description:
        "Repérer les compétences critiques validées ou à reprendre, et savoir quel module relire après un quiz sous 80 %.",
      minutes: 22,
      objectifs:
        "Vous savez nommer les compétences critiques du gestionnaire junior, relier un échec à un module de remédiation, et distinguer un trou de calcul d'un trou de déontologie.",
      theorie:
        "Réussir l'examen, ce n'est pas « avoir une moyenne ». C'est valider des compétences critiques au seuil de 80 % sur chaque partie, et ne pas laisser passer une erreur grave de simulation. Les compétences critiques sont : qualifier un fait social ; sourcer une règle (loi, paramètre annuel 2026, CCN lue, paramètre d'entreprise, hypo) ; calculer un bulletin déterministe ; contrôler SMIC, PMSS, tranches, FNAL selon effectif, PAS, nets ; préparer une DSN conceptuelle et lire un CRM ; retracer un journal 641/645/421/43x/4421 ; expliquer sans divulguer ; s'arrêter quand le texte manque.\n\nUn échec à la partie A (droit social) se relit dans les modules 01 (droit du travail), 02 (droit de la sécurité sociale), 08 à 11 (temps, CP, absences, maladie), 14 (CCN), 15-16 (entrée, sortie). Un échec B (calcul) : modules 03 à 07, 12, 17, 21, 30 à 33, et les leçons de correction ALP. Un échec C (DSN) : module 18, cycle 24, contrôle 23. Un échec D (compta) : module 19. Un échec E (logiciels) : module 20 — sans prétendre à une certification éditeur. Un échec F (cas pro) : 00, 22, 25, 26, 27, 29. Un échec G (simulation) : cette leçon, le portefeuille ALP, le simulateur 35 comme échauffement (10 dossiers, effectif parfois 80 sur Camille : ne pas le recopier ici).\n\nLa remédiation n'est pas « refaire le quiz tout de suite ». C'est relire la source (rates-2026.json, legal-sources.json, leçon de correction), refaire le calcul à la main, étiqueter l'hypo, puis retenter. Tentatives illimitées : un 78 % n'est pas une indignité, c'est un signal. Un 80 % obtenu en recochant au hasard sans relire n'est pas une compétence.\n\nErreur grave non corrigée (sous-SMIC, PMSS N-1, T2 oublié, FNAL 17,50 € sur effectif 20, PAS d'un tiers, IJ inventée, minima CCN inventés, net négatif ignoré, RGDU appliquée alors qu'elle est off) : la simulation échoue, même si les quiz A à F sont au-dessus du seuil. La formation prépare un junior opérationnel sous revue, pas un responsable paie, pas un titre réglementé.",
      methode:
        "Après chaque quiz : lister les questions manquées, les classer (droit / calcul / process / déontologie), ouvrir le module cité dans l'explication, écrire la règle en une phrase sourcée, recalculer si chiffre, puis retenter.",
      extra: [
        code(`GRILLE CRITIQUE — examen Atelier Lumière Paie
Compétence                         Module(s)         Seuil
Qualifier loi / paramètre / CCN / hypo   00, 01, 02, 14, 28     critique
SMIC 12,02 / 1823,03 ; PMSS 4005         04, 05, 06, 34         critique
Bulletin brut → S → NI → MNS → PAS → NAP 03, 07, 17             critique
T1/T2/CET ; FNAL selon effectif ; APEC   06, 05, 13             critique
HS L. 3121-36 supplétif ; pas le forfait 08                     critique
Prorata ; partiel ; absence étiquetée    10, 15, 16             critique
Maladie : méthode IJ, pas un montant inventé  11               critique
Prime, AEN hypo, rappel                  12                     critique
Mutuelle 2026 vs MNS (BOSS)              13, 07                 critique
PAS confidentiel                         17, 26                 critique
DSN + CRM conceptuels                    18, 23, 24             critique
Journal 641/645/421/43x/4421             19                     critique
Logiciels : cycle, pas certif éditeur    20                     critique
Clôture, anomalies, gel                  22, 23, 24             critique
Mails, confidentialité                   26                     critique
Limites junior, attestation LOU          00, 29, cette leçon    critique

Erreur grave non corrigée = échec simulation (partie G / production ALP)
Remédiation : relire, recalculer, étiqueter, retenter — pas cocher au hasard.`),
      ],
      exemple:
        "Un apprenant a 86 % en A, 92 % en C, 70 % en B. Il n'a pas validé le parcours. Il relit 05, 06, 07, les corrections ALP-04/06/10, refait T2 et PAS sur papier, puis retente B. Il ne « compense » pas avec la DSN.",
      erreurs:
        "Retenter immédiatement sans relire. Compenser un 70 % par un 100 % ailleurs. Relire seulement les QCM. Ignorer la grille parce que « j'ai compris l'idée ». Présenter un 80 % comme un titre RNCP.",
      particuliers:
        "Dyscalculie, temps additionnel : la plateforme peut permettre plusieurs tentatives ; elle n'autorise pas un taux inventé. Reconversion : un échec F (cas pro) se travaille en 00 et 26 autant qu'en calcul. Anglophone : les intitulés de comptes restent 641/421 en pédagogie française du dossier.",
      exercice:
        "Vous avez échoué B (calcul, 75 %) et G (simulation : FNAL 17,50 € sur Camille). Plan de remédiation en six lignes, modules cités.",
      correction:
        "B : relire 05 cotisations, 06 plafonds, 07 brut-net, 17 PAS ; refaire ALP-04, 05, 06, 10 sur papier avec rates-2026.json. G : relire consigne effectif 20, leçon ALP-05 (P 1 439,27, FNAL 3,50 €), module 06 FNAL <50 / ≥50 ; ne pas recopier le simulateur dossier-05 (headcount 80). Puis retenter B puis G. Ne pas toucher A si elle est déjà à 80 % pour « se rassurer » en cochant.",
    }),

    pack({
      title: "Attestation LOU Academy : ce qu'elle est, ce qu'elle n'est pas",
      description:
        "Situer l'attestation de parcours, refuser les titres usurpés, et préparer l'entretien sans promesse de salaire ni de logiciel.",
      minutes: 18,
      objectifs:
        "Vous savez formuler ce que l'attestation certifie, ce qu'elle ne certifie pas, et comment en parler à un employeur sans mensonge et sans minimisation des compétences réelles.",
      theorie:
        "L'attestation LOU Academy certifie que vous avez achevé les leçons requises et réussi les quiz de cette formation sur cette plateforme, y compris l'examen final au seuil de 80 % et la simulation Atelier Lumière Paie sans erreur grave non corrigée. Elle documente un parcours professionnalisant : lire un bulletin, calculer un brut et un net sourcés janvier 2026, traiter des événements de paie, préparer une DSN conceptuelle, retracer un journal, répondre à un salarié, tenir les limites d'un junior.\n\nElle n'est pas un titre enregistré au RNCP. Elle n'est pas un diplôme d'État. Elle n'est pas une certification professionnelle d'éditeur : Sage Paie, Silae, Cegid, ADP, SAP SuccessFactors, Workday, PayFit, Nibelis ne sont présentés dans ce cours qu'au niveau fonctionnel (positionnement, données, cycle, contrôles, DSN, limites). Le simulateur pédagogique LOU n'est pas un clone commercial. Vous ne dites pas « je suis certifié Silae » après ce parcours. Vous dites : « je sais décrire un cycle, un contrôle, une DSN ; j'apprendrai l'outil du dossier sous revue ».\n\nElle ne garantit pas une embauche, un statut cadre, ni une rémunération. Certaines offres de chargé de paie visent, selon les entreprises et les marchés, une rémunération de l'ordre de 36 000 € brut annuels, éventuellement un statut cadre. Ce sont des conditions de marché, pas un effet automatique de l'attestation, pas un SMIC, pas un droit. Mentir sur un titre, un logiciel ou un salaire déjà obtenu est une faute professionnelle, détectable en entretien technique.\n\nCe que vous pouvez affirmer : période de référence janvier 2026 sourcée (PMSS 4 005 €, SMIC 12,02 €) ; dossier de 20 personnes traité ; distinction hypo / loi / CCN ; confidentialité PAS ; limite d'autonomie. Ce que vous devez refuser d'affirmer : « titre reconnu », « équivalent RNCP », « certifié Sage », « 36 k€ garantis », « autonome sur toutes les CCN ». Un recruteur croit un junior précis. Il ne croit pas un junior décoré.",
      methode:
        "En entretien : une phrase sur l'attestation, trois preuves (cas ALP, contrôle SMIC/PMSS, mail PAS), une limite (CCN non lue, IJ, dépôt DSN), une question sur l'outil et la revue. Pas de logo éditeur usurpée. Pas de bulletin réel nominatif d'un ancien employeur.",
      extra: [
        code(`ATTESTATION LOU ACADEMY — FORMULATION LICITE

« J'ai suivi le parcours Devenir gestionnaire de paie sur LOU Academy.
L'attestation certifie la réussite des leçons et des quiz (seuil d'examen 80 %)
sur la plateforme. Ce n'est pas un titre RNCP, ni un diplôme d'État, ni une
certification Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ou Nibelis.
Je sais reconstituer un bulletin janvier 2026 (PMSS 4 005 €, SMIC 12,02 €),
traiter un portefeuille type 20 personnes (entrée, HS supplétives, PAS,
maladie sans IJ inventée, sortie avec ICP comparée), préparer une DSN
conceptuelle et un journal 641/421/43x. L'outil du poste, je l'apprendrai
sous revue. Je ne garantis ni 36 000 € ni le statut cadre. »

INTERDIT
- « Je suis certifié Silae / Sage / Cegid »
- « C'est un RNCP »
- « Diplôme d'État de gestionnaire de paie »
- « 36 k€ garantis à la sortie »
- Recopier un bulletin réel nominatif
- Inventer une CCN « Syntec à 38 k » comme salaire d'entrée`),
      ],
      exemple:
        "Offre « 26-32 k€, cabinet, formation interne Silae, revue senior ». C'est un vrai premier poste. Vous présentez l'attestation comme preuve de méthode, pas comme équivalent d'un titre. Offre « 38 k€, 5 CCN, paramétrage, autonome DSN ». Ce n'est pas un junior : vous ne forcez pas l'attestation dans ce cadre pour « viser 36 k ».",
      erreurs:
        "Mettre « RNCP » sur le CV. Promettre Sage. Garantir 36 k€. Dire « expert paie ». Cacher que l'examen est un dossier fictif (le fictif est licite ; le mensonge sur un portefeuille réel ne l'est pas).",
      particuliers:
        "Financeur, CPF, Pôle emploi / France Travail : ne jamais présenter l'attestation comme un titre réglementé. Alternance : le maître d'apprentissage n'est pas lié par cette attestation. International : le droit enseigné est français, janvier 2026, métropole, régime général.",
      exercice:
        "Rédigez cinq lignes de CV honnêtes : formation, attestation, compétences, outils (niveau), ce que vous ne revendiquez pas.",
      correction:
        "Exemple : « Formation LOU Academy — Devenir gestionnaire de paie (parcours plateforme, attestation de réussite, distincte d'un titre RNCP et d'un diplôme d'État). Compétences : bulletins janvier 2026 sourcés, contrôles SMIC/PMSS/FNAL, événements (entrée, HS L. 3121-36, PAS, maladie méthode, STC), DSN conceptuelle, journal de paie. Outils : cycle et contrôles transférables ; pas de certification éditeur. Simulation : Atelier Lumière Paie, 20 salariés, fictif. » Cinq lignes suffisent. Un bandeau « certifié Silae — RNCP » les détruit.",
    }),

    quizLesson({
      title: "Examen final — Partie A Droit social (seuil 80 %)",
      description:
        "Obligations, paramètres 2026, CCN, hypo, limites junior. Compétences critiques. Seuil 80 %.",
      passing_score: 80,
      minutes: 28,
      questions: [
        q({
          question:
            "En janvier 2026, métropole, le SMIC horaire et le SMIC mensuel base 151,67 h à retenir sont :",
          options: [
            "A. 12,02 € / h et 1 823,03 € / mois (01/01/2026 au 31/05/2026, URSSAF).",
            "B. 11,65 € / h et 1 766,92 € / mois, encore valables toute l'année 2026.",
            "C. 12,31 € / h dès le 1er janvier 2026.",
            "D. Le SMIC mensuel n'existe plus depuis la DSN.",
          ],
          correct: 0,
          explanation:
            "URSSAF / Service-Public : 12,02 € et 1 823,03 € du 01/01 au 31/05/2026 ; 12,31 € au 01/06/2026. Recopier N-1 ou avancer juin au 1er janvier est une erreur de période.",
        }),
        q({
          question: "Le PMSS applicable aux cotisations des périodes d'activité à compter du 01/01/2026 est :",
          options: [
            "A. 3 864 €",
            "B. 3 925 € (plafond souvent encore en tête, périmé pour janvier 2026)",
            "C. 4 005 € (arrêté du 22 décembre 2025, URSSAF).",
            "D. 4 800 €",
          ],
          correct: 2,
          explanation:
            "PMSS 4 005 €, PASS 48 060 €. Un moteur resté à 3 925 € est un KO bloquant de janvier.",
        }),
        q({
          question:
            "Maladie salariale et maladie patronale, régime général, domicile fiscal France, janvier 2026, RGDU non appliquée dans ce dossier :",
          options: [
            "A. Salarial 13 %, patronal 0 %",
            "B. Salarial 0 %, patronal taux plein 13 % ; AF taux plein 5,25 %.",
            "C. Salarial 5,50 % pour tous",
            "D. Patronal 7 % « taux réduit de droit commun » encore applicable sans lire le dossier",
          ],
          correct: 1,
          explanation:
            "MSA / URSSAF privé 01/01/2026 : maladie s 0 % (5,50 % si non domicilié fiscalement en France). Dossier ALP : RGDU off → taux pleins 13 % et 5,25 %. Les taux réduits de droit commun fusionnent dans la RGDU 2026 : on ne les applique pas ici « par habitude ».",
        }),
        q({
          question: "Le taux AT/MP 1,50 % d'Atelier Lumière Paie est :",
          options: [
            "A. Une HYPOTHÈSE pédagogique de dossier, pas un taux Carsat national.",
            "B. Le taux unique France 2026",
            "C. Un taux Syntec",
            "D. Un paramètre que le junior invente selon l'accidentologie du mois",
          ],
          correct: 0,
          explanation:
            "Le taux AT/MP est notifié par la Carsat. 1,50 % est étiqueté hypo dans le JSON examen. L'inventer ou le nationaliser est une faute.",
        }),
        q({
          question: "Effectif 20 : FNAL à retenir en janvier 2026 :",
          options: [
            "A. 0,50 % sur le brut (seuil 20 = grand établissement)",
            "B. 0,10 % sur assiette plafonnée (< 50 salariés).",
            "C. 17,50 € forfaitaires par cadre",
            "D. Pas de FNAL sous 50",
          ],
          correct: 1,
          explanation:
            "URSSAF : FNAL 0,10 % plafonné si < 50 ; 0,50 % si ≥ 50. Camille à 3 500 € : 3,50 €, pas 17,50 € (ce 17,50 € est le 0,50 % × 3 500 d'un effectif 80 du simulateur, autre dossier).",
        }),
        q({
          question:
            "À défaut de convention ou d'accord, les 8 premières heures supplémentaires légales se majorent de (L. 3121-36) :",
          options: [
            "A. 10 %",
            "B. 25 % (puis 50 % au-delà de 8).",
            "C. 50 % dès la première",
            "D. 0 % si le salarié est d'accord par mail",
          ],
          correct: 1,
          explanation:
            "Taux légaux supplétifs : 25 % sur les 8 premières, 50 % au-delà. Un accord peut être plus favorable ; on ne l'invente pas. Inapplicable au réflexe sur un forfait jours.",
        }),
        q({
          question: "L'indemnité compensatrice de congés payés se détermine, au minimum légal, par :",
          options: [
            "A. Un mois de salaire forfaitaire",
            "B. La comparaison dixième (L. 3141-24) et maintien : on retient le plus favorable.",
            "C. 10 % du dernier mois seulement, sans comparaison",
            "D. Rien si la sortie est le 15",
          ],
          correct: 1,
          explanation:
            "Règle du dixième à comparer au maintien. ALP-14 : on compare, on n'invente pas une indemnité de rupture CCN.",
        }),
        q({
          question: "Une clause de CCN (minimum, maintien maladie, préavis) non lue :",
          options: [
            "A. Peut être inventée « comme dans le dossier précédent »",
            "B. Doit être lue ou escaladée ; aucun minimum n'est inventé dans cet examen (IDCC à lire).",
            "C. Vaut le SMIC + 10 %",
            "D. Est remplacée par le simulateur LOU",
          ],
          correct: 1,
          explanation:
            "La CCN est une source. L'inventer est une erreur grave. L'IDCC d'Atelier Lumière Paie est à lire, pas à chiffrer de mémoire.",
        }),
        q({
          question: "La DPAE (embauche) :",
          options: [
            "A. Remplace la DSN",
            "B. Peut se faire le 24 du mois « avec le bulletin »",
            "C. Est une obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents (cadre Service-Public / L. 1221-10) — distincte de la DSN.",
            "D. Est facultative sous 20 salariés",
          ],
          correct: 2,
          explanation:
            "Inès entre le 13 : la DPAE n'attend pas la clôture. Ce n'est pas la DSN. Le junior vérifie, il n'antidatate pas.",
        }),
        q({
          question: "Le montant net social, cadre BOSS jusqu'au 31/12/2026 :",
          options: [
            "A. Est égal au virement, toujours",
            "B. Intègre d'office la part patronale de complémentaire santé (réforme 2027 déjà applicable)",
            "C. Est le revenu après prélèvements sociaux obligatoires, mentionné au bulletin ; la mutuelle patronale n'est pas intégrée d'office dans le MNS 2026 (évolution 2027 = projet à revérifier).",
            "D. Remplace le PAS",
          ],
          correct: 2,
          explanation:
            "BOSS-MNS. Sarah : MNS 1 978,99 €, NAP 1 753,97 €. Paul : MNS 2 453,95 €, NAP 2 250,57 €. Anticiper 2027 est une faute de période.",
        }),
        q({
          question: "Le taux de PAS d'un salarié :",
          options: [
            "A. Peut être aligné sur un collègue pour l'égalité de traitement",
            "B. Est confidentiel ; la paie applique le taux transmis et n'explique pas le taux d'un tiers.",
            "C. Est choisi par le gestionnaire junior selon le net souhaité",
            "D. S'applique sur le brut",
          ],
          correct: 1,
          explanation:
            "PAS sur net imposable, taux transmis, confidentialité. Paul 8 % et Sarah 10 % sont des hypo de dossier, jamais comparées entre elles dans un mail.",
        }),
        q({
          question: "Vieillesse salariale régime général janvier 2026 :",
          options: [
            "A. 6,90 % plafonnée + 0,40 % déplafonnée.",
            "B. 17,75 % unique",
            "C. 0 % comme la maladie salariale",
            "D. 10 % au-dessus du PMSS seulement",
          ],
          correct: 0,
          explanation:
            "MSA / URSSAF : 6,90 % sur T1 (min(brut, 4 005)) + 0,40 % sur la totalité. Antoine : on ne met pas 6,90 % sur 5 000 €.",
        }),
        q({
          question: "Agirc-Arrco T1 salarial janvier 2026 :",
          options: [
            "A. 8,64 %",
            "B. 3,15 % (T1 7,87 % dont 4,72 p / 3,15 s).",
            "C. 12,95 %",
            "D. Identique à la T2",
          ],
          correct: 1,
          explanation:
            "T1 7,87 % (4,72 / 3,15). T2 21,59 % (12,95 / 8,64) entre 4 005 et 8 PSS. CET 0,35 % si rémunération > T1.",
        }),
        q({
          question: "Un cadre au forfait jours (ALP-05 Camille) :",
          options: [
            "A. Doit recevoir 4 HS à 25 % comme Marc, par égalité",
            "B. N'appelle pas le réflexe L. 3121-36 des heures supplémentaires ; l'APEC est due ; le FNAL suit l'effectif 20 (0,10 % plafonné).",
            "C. Est exonéré d'APEC",
            "D. Impose le FNAL 17,50 € quel que soit l'effectif",
          ],
          correct: 1,
          explanation:
            "Forfait jours ≠ HS au réflexe. APEC 0,84 € s. FNAL 3,50 € à l'effectif 20. Recopier le dossier-05 (headcount 80) échoue la simulation.",
        }),
        q({
          question: "Cette formation et son attestation :",
          options: [
            "A. Délivrent un titre RNCP de gestionnaire de paie",
            "B. Délivrent un diplôme d'État",
            "C. Délivrent une certification officielle Sage ou Silae",
            "D. Délivrent une attestation LOU Academy de réussite du parcours, distincte d'un titre réglementé, d'un diplôme d'État et d'une certification éditeur.",
          ],
          correct: 3,
          explanation:
            "Formulation licite. 36 000 € brut n'est pas garanti. Le simulateur LOU n'est pas un clone commercial.",
        }),
        q({
          question: "Une erreur grave non corrigée (sous-SMIC, T2 oublié, PAS d'un tiers, IJ inventée) :",
          options: [
            "A. Est tolérée si 19 bulletins sur 20 sont justes",
            "B. Fait échouer la simulation d'examen, même si d'autres quiz dépassent 80 %.",
            "C. Se rattrape toujours en février sans le dire",
            "D. Ne concerne que le responsable paie, jamais le junior",
          ],
          correct: 1,
          explanation:
            "Consigne : compétences critiques + erreur grave non corrigée = échec de la simulation. Un junior documente et bloque, il ne « lisse » pas.",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie B Calcul (seuil 80 %)",
      description:
        "Totaux moteur ALP, proratas, HS, PAS, T2, FNAL. Seuil 80 %. Ne pas inventer un chiffre hors totaux fournis.",
      passing_score: 80,
      minutes: 30,
      questions: [
        q({
          question: "ALP-01 Léa, SMIC 1 823,03 € : salarial et NAP/MNS ?",
          options: [
            "A. S 379,94 € ; NAP/MNS 1 443,09 €.",
            "B. NAP 1 443,11 € (net indicatif Service-Public comme formule)",
            "C. S 521,01 € ; NAP 1 978,99 €",
            "D. NAP = brut 1 823,03 €",
          ],
          correct: 0,
          explanation:
            "Totaux d'examen. 1 443,11 € est un chiffre de communication, pas ce bulletin (écart 0,02 € possible).",
        }),
        q({
          question: "ALP-03 Hugo, brut 2 500 € : S, NI, NAP, patronal ?",
          options: [
            "A. S 437,65 ; NAP 1 662,35 ; P 862,81",
            "B. S 521,01 € ; NI 2 050,22 € ; NAP 1 978,99 € ; P 1 027,15 €.",
            "C. S 541,01 ; NAP 1 753,97",
            "D. NAP 2 500 € après RGDU",
          ],
          correct: 1,
          explanation:
            "Ancre du cours. Sarah (ALP-10) a le même brut mais pas le même NAP.",
        }),
        q({
          question: "ALP-04 Paul, 3 100 €, PAS 8 % hypo : PAS, MNS, NAP ?",
          options: [
            "A. PAS 248,00 € (8 % du brut) ; NAP = MNS",
            "B. PAS 203,38 € ; MNS 2 453,95 € ; NAP 2 250,57 € (NI 2 542,28 €).",
            "C. PAS 0 ; NAP 2 453,95 €",
            "D. PAS 205,02 € ; NAP 1 753,97 €",
          ],
          correct: 1,
          explanation:
            "PAS = 2 542,28 × 8 % = 203,38 €. MNS ≠ NAP dès qu'il y a un PAS. 205,02 € est Sarah.",
        }),
        q({
          question: "ALP-05 Camille, cadre 3 500 €, effectif 20 : patronal et FNAL ?",
          options: [
            "A. P 1 453,27 € et FNAL 17,50 € (effectif 80 recopié)",
            "B. P 1 439,27 € ; FNAL 0,10 % plafonné = 3,50 € (pas 17,50 €).",
            "C. Pas d'APEC",
            "D. FNAL 0 € sous 50",
          ],
          correct: 1,
          explanation:
            "S 730,25 € et NAP 2 769,75 € identiques au dossier 80 (FNAL non salarial) ; le patronal change (1 439,27 vs 1 453,27). Recopier 17,50 € échoue la simulation.",
        }),
        q({
          question: "ALP-06 Antoine, 5 000 € : T1, T2, CET salarial, S, NAP ?",
          options: [
            "A. T1 5 000 ; pas de T2 ; S 1 037,18 ; NAP 3 962,82",
            "B. T1 4 005 € ; T2 995 € ; CET_s 7,00 € ; S 1 037,18 € ; NAP 3 962,82 €.",
            "C. T2 995 avec APEC (non-cadre)",
            "D. Vieillesse 6,90 % sur 5 000 €",
          ],
          correct: 1,
          explanation:
            "PMSS 4 005. CET si rémunération > T1. Pas d'APEC (non-cadre). Vieillesse plafonnée sur 4 005, pas sur 5 000.",
        }),
        q({
          question: "ALP-07 Inès, entrée 13/01, contrat 2 100 € : brut pédagogique et NAP ?",
          options: [
            "A. Brut 2 100,00 ; NAP 1 662,35 (comme Nadia)",
            "B. Brut 2 100 × 19/31 = 1 287,10 € ; S 268,23 € ; NAP 1 018,87 €.",
            "C. Brut 2 100 × 13/31",
            "D. Pas de bulletin le mois d'entrée",
          ],
          correct: 1,
          explanation:
            "Présence pédagogique 19 jours (13 au 31). Recopier Nadia est une faute grave de prorata.",
        }),
        q({
          question: "ALP-08 Sofiane, temps partiel, brut dossier 1 458,46 € : NAP ?",
          options: [
            "A. 1 443,09 € (SMIC plein)",
            "B. 1 154,53 € (S 303,93 €) — on ne colle pas 1 823,03 €.",
            "C. 1 662,35 €",
            "D. 0 € (partiel = pas de cotisations)",
          ],
          correct: 1,
          explanation:
            "Brut JSON 1 458,46 €, totaux fournis. Contrôler le SMIC horaire, pas recycler le SMIC mensuel 35 h.",
        }),
        q({
          question: "ALP-09 / ALP-16, brut 2 700 € (prime ou rappel 200) : S et NAP ?",
          options: [
            "A. S 521,01 ; NAP 1 978,99 (ancre 2500, prime exonérée)",
            "B. S 562,69 € ; NAP 2 137,31 € — prime et rappel soumis dans ce moteur ; qualification DSN différente.",
            "C. S 541,01 ; NAP 1 753,97",
            "D. NAP 2 700 €",
          ],
          correct: 1,
          explanation:
            "Même totaux, pièces différentes (prime du mois vs régularisation). On n'exonère pas 200 € « pour faire plaisir ».",
        }),
        q({
          question: "ALP-10 Sarah, 2 500 €, mutuelle 20/40 hypo, PAS 10 % hypo : S, PAS, MNS, NAP ?",
          options: [
            "A. S 521,01 ; PAS 0 ; MNS = NAP = 1 978,99",
            "B. S 541,01 € ; NI 2 050,22 € ; PAS 205,02 € ; MNS 1 978,99 € ; NAP 1 753,97 €.",
            "C. MNS 1 753,97 € ; NAP 1 978,99 €",
            "D. NAP 1 978,99 − 40,00 (mutuelle patronale dans le net)",
          ],
          correct: 1,
          explanation:
            "541,01 = 521,01 + 20,00. PAS = 2 050,22 × 10 % = 205,02. NAP = 1 978,99 − 20 − 205,02 = 1 753,97. MNS 2026 sans mutuelle patronale d'office (BOSS).",
        }),
        q({
          question: "ALP-11 Marc : horaire, HS, brut, NAP ?",
          options: [
            "A. Horaire 12,02 € ; HS 48,08 € ; brut 2 148,08 €",
            "B. Horaire 2 100 / 151,67 = 13,85 € ; 4 × 25 % = 69,25 € ; brut 2 169,25 € ; S 452,09 € ; NAP 1 717,16 € (L. 3121-36 supplétif).",
            "C. 4 × 50 % d'emblée",
            "D. Pas de HS : il est cadré comme Camille",
          ],
          correct: 1,
          explanation:
            "Base 2 100 €, 4 heures dans les 8 premières → 25 %. Marc n'est pas au forfait jours.",
        }),
        q({
          question: "ALP-12 Claire : retenue pédagogique de 3 jours calendaires sur 3 100 € ?",
          options: [
            "A. 3 100 × 3 / 21 (ouvrés inventés) = 442,86 €",
            "B. 3 100 × 3 / 31 = 300,00 € ; brut 2 800,00 € ; S 583,53 € ; NAP 2 216,47 € — méthode calendaire pédagogique.",
            "C. Pas de retenue : 3 jours = tolérance",
            "D. Brut 3 100 € inchangé, NAP 2 250,57 € comme Paul",
          ],
          correct: 1,
          explanation:
            "L'examen impose le calendaire pédagogique et l'étiquette. Le dossier réel pourra lire ouvrés/heures/CCN ; on ne les invente pas ici.",
        }),
        q({
          question: "ALP-14 Julie, sortie 15/01, contrat 2 500 € : brut de période et NAP (hors ICP) ?",
          options: [
            "A. Brut 2 500,00 ; NAP 1 978,99",
            "B. Brut 2 500 × 15/31 = 1 209,68 € ; S 252,09 € ; NAP 957,59 € — plus ICP à comparer dixième/maintien, sans indemnité CCN inventée.",
            "C. Brut 2 500 × 15/30",
            "D. NAP 0 : sortie = pas de paie",
          ],
          correct: 1,
          explanation:
            "Prorata calendaire pédagogique 15/31. L'ICP n'est pas dans ce NAP ; on la compare, on n'invente pas le barème de rupture.",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie C DSN (seuil 80 %)",
      description:
        "Canal, événements ALP, CRM, limites junior. Pas de XML. Seuil 80 %.",
      passing_score: 80,
      minutes: 20,
      questions: [
        q({
          question: "La DSN est :",
          options: [
            "A. Le canal déclaratif social (et fiscal collecteur) issu de la paie, distinct de la DPAE, du SEPA et du journal.",
            "B. Un XML à rédiger à la main pour l'examen",
            "C. Une certification Silae",
            "D. Un export Excel facultatif sous 20 salariés",
          ],
          correct: 0,
          explanation:
            "Net-entreprises / cours module 18. Le simulateur LOU n'émet pas de DSN réelle. Pas de numéro de bloc inventé.",
        }),
        q({
          question: "Qui dépose la DSN d'Atelier Lumière Paie dans la consigne d'examen ?",
          options: [
            "A. Le junior, dès que le calcul est vert",
            "B. L'habilité après visa ; le junior prépare et contrôle.",
            "C. L'URSSAF automatiquement",
            "D. Léa Morel, déléguée de fait",
          ],
          correct: 1,
          explanation:
            "Dépôt hors délégation = faute. Un voyant vert n'est pas un visa.",
        }),
        q({
          question: "Date d'entrée d'Inès à porter (bulletin et DSN) :",
          options: [
            "A. 01/01/2026 par facilité de paramétrage",
            "B. 13/01/2026, cohérente avec le prorata 19/31 et la DPAE.",
            "C. 31/01/2026",
            "D. Inutile : la mensuelle suffit sans date",
          ],
          correct: 1,
          explanation:
            "Une entrée au 1er dans le logiciel et au 13 dans le contrat produit une DSN belle et fausse.",
        }),
        q({
          question: "Date de fin de Julie :",
          options: [
            "A. 31/01/2026 par défaut logiciel, acceptable",
            "B. 15/01/2026, alignée bulletin / DSN / attestation France Travail selon process.",
            "C. 01/02/2026 pour « faire un mois plein »",
            "D. Non déclarée si le STC n'est pas payé",
          ],
          correct: 1,
          explanation:
            "CRM typique : fin au 31 par défaut. KO bloquant. L'attestation chômage calée sur le 31 lèse la salariée.",
        }),
        q({
          question: "L'arrêt de Yanis dans la DSN :",
          options: [
            "A. Autorise le junior à saisir une IJ journalière de 46 € pour que le flux soit « complet »",
            "B. Suit le signalement selon consigne de l'habilité ; aucun montant d'IJ n'est inventé.",
            "C. Se noie dans la mensuelle sans événement",
            "D. Remplace le maintien CCN",
          ],
          correct: 1,
          explanation:
            "Méthode IJ, CCN lue, hypo d'examen brut 2 500 € étiquetée. Inventer l'IJ est une erreur grave.",
        }),
        q({
          question: "Un CRM DSN :",
          options: [
            "A. Est un mail interne RH",
            "B. Est un retour organisme après dépôt ; le junior le lit, classe, n'efface pas pour tenir l'heure.",
            "C. Garantit que le droit est juste dès qu'il est vert",
            "D. Remplace le bulletin",
          ],
          correct: 1,
          explanation:
            "Vert syntaxique ≠ vérité sociale. Corriger bulletin et DSN ensemble.",
        }),
        q({
          question: "Le PAS dans la DSN :",
          options: [
            "A. Est facultatif sous 20 salariés",
            "B. Alimente le collecteur (DGFiP) ; Paul 203,38 € et Sarah 205,02 € doivent coller aux bulletins, sans être commentés entre collègues.",
            "C. Se saisit au taux du voisin pour l'égalité",
            "D. Remplace le 4421 comptable",
          ],
          correct: 1,
          explanation:
            "Alignement bulletin / DSN / 4421. Confidentialité. Le 4421 constate ; la DSN déclare ; ce n'est pas le même acte.",
        }),
        q({
          question: "DPAE et DSN :",
          options: [
            "A. C'est le même flux",
            "B. La DPAE est l'embauche préalable ; la DSN ne la remplace pas.",
            "C. La DSN d'Inès dispense de DPAE",
            "D. Aucune des deux n'est due avant 50 salariés",
          ],
          correct: 1,
          explanation:
            "L. 1221-10 / cours. Contrôle avant calcul : DPAE Inès cochée, distincte du dépôt mensuel.",
        }),
        q({
          question: "Rappel d'Emma (ALP-16) vs prime de Thomas (ALP-09) en DSN :",
          options: [
            "A. Identiques : même brut 2 700 € donc même qualification",
            "B. Même assiette pédagogique, qualification différente (élément du mois vs régularisation) : on ne noie pas le rappel dans une prime.",
            "C. Le rappel ne se déclare jamais",
            "D. La prime est toujours exonérée en DSN",
          ],
          correct: 1,
          explanation:
            "Le moteur donne les mêmes S/NAP. La DSN et la pièce racontent le fait. Qualifier, ne pas fusionner.",
        }),
        q({
          question: "Le simulateur pédagogique LOU, vis-à-vis de la DSN :",
          options: [
            "A. Émet une DSN réelle net-entreprises",
            "B. N'émet pas de DSN réelle ; l'examen évalue l'alignement conceptuel, pas un XML ni une certif éditeur.",
            "C. Équivaut à une certification Silae",
            "D. Remplace net-entreprises",
          ],
          correct: 1,
          explanation:
            "CONTENT_SPEC / course.meta. En entretien : cycle et contrôles, pas « je maîtrise la DSN Silae ».",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie D Comptabilité (seuil 80 %)",
      description:
        "641, 645, 421, 43x, 4421, équilibre, PAS, mutuelle. Seuil 80 %.",
      passing_score: 80,
      minutes: 20,
      questions: [
        q({
          question: "Le 641 pédagogique porte :",
          options: [
            "A. Le net à payer",
            "B. Les rémunérations du personnel : bruts de période (primes soumises, HS, AEN intégré), pas le 421.",
            "C. Les seules charges patronales",
            "D. Le PAS",
          ],
          correct: 1,
          explanation:
            "PCG pédagogique. 641 ALP retracé : 49 820,55 € (somme des bruts fournis), hors ICP à comparer.",
        }),
        q({
          question: "Le salarial (S) se comptabilise :",
          options: [
            "A. Au débit 645 (c'est une charge patronale)",
            "B. Comme retenue : déjà dans le 641, crédit 43x (avec le patronal).",
            "C. Au débit 421",
            "D. Nulle part, la DSN suffit",
          ],
          correct: 1,
          explanation:
            "Le salarial n'est pas une charge supplémentaire. 43x ALP retracé : S + P = 30 921,11 €.",
        }),
        q({
          question: "Le PAS de Paul et Sarah :",
          options: [
            "A. Crédit 4421, 203,38 + 205,02 = 408,40 € ; ce n'est pas un 645.",
            "B. Débit 641",
            "C. Crédit 421 supplémentaire",
            "D. Charge 645 « impôt salarial »",
          ],
          correct: 0,
          explanation:
            "Collecteur État. Le 421 est le NAP déjà net de PAS. Oublier Sarah dans le 4421 casse l'équilibre.",
        }),
        q({
          question: "Égalité de contrôle sur ce dossier (hors ICP) :",
          options: [
            "A. Somme des NAP = somme des bruts",
            "B. Somme des NAP + S + PAS = somme des bruts = 49 820,55 €.",
            "C. 645 = 421",
            "D. 4421 = S",
          ],
          correct: 1,
          explanation:
            "39 012,51 + 10 399,64 + 408,40 = 49 820,55. Si l'égalité casse, on retrace la ligne, on ne lisse pas 0,01 €.",
        }),
        q({
          question: "Le 645 de ce journal inclut :",
          options: [
            "A. Uniquement le chômage",
            "B. Les charges patronales moteur (effectif 20), dont AT/MP 1,50 % hypo et, pour ALP-10, 40,00 € de mutuelle patronale hypo.",
            "C. Le PAS",
            "D. Le SMIC",
          ],
          correct: 1,
          explanation:
            "645 retracé 20 521,47 €. AT/MP et mutuelle p restent étiquetés hypo. Le plan réel peut éclater 431/437.",
        }),
        q({
          question: "Équilibre retracé 641 + 645 :",
          options: [
            "A. 49 820,55 = 39 012,51 (on oublie 645)",
            "B. 70 342,02 = 421 39 012,51 + 43x 30 921,11 + 4421 408,40.",
            "C. Jamais équilibré à cause de l'AT/MP",
            "D. 512 est crédité dès le calcul",
          ],
          correct: 1,
          explanation:
            "Partie double. La banque (512) bouge au virement, pas à la constatation.",
        }),
        q({
          question: "L'ICP d'ALP-14 dans ce journal de période :",
          options: [
            "A. Est forcée à 120,97 € (10 % de 1 209,68) sans comparaison",
            "B. N'est pas dans les 49 820,55 € ; elle s'ajoute après comparaison dixième/maintien, montant non inventé.",
            "C. Est une indemnité de licenciement d'un mois, compte 67",
            "D. Est du PAS",
          ],
          correct: 1,
          explanation:
            "Consigne examen : comparer, ne pas inventer. Un 67 « exceptionnel » pour masquer un STC est une faute.",
        }),
        q({
          question: "La mutuelle salariale 20 € de Sarah :",
          options: [
            "A. Est dans S 541,01 et le 43x ; elle diminue le NAP, pas le MNS 2026 d'office.",
            "B. Est un 641 supplémentaire de 20 €",
            "C. Est un 4421",
            "D. S'ajoute au MNS 2026 (réforme 2027 déjà en vigueur)",
          ],
          correct: 0,
          explanation:
            "BOSS jusqu'au 31/12/2026. Part patronale 40 € au 645, pas au MNS d'office.",
        }),
        q({
          question: "Le numéro 431 vs 43x :",
          options: [
            "A. 431 est obligatoire pour tous les organismes",
            "B. 43x désigne la famille pédagogique ; le mapping interne (431 URSSAF, 437 autres, etc.) prime.",
            "C. 43x est un compte d'attente illégal",
            "D. Tout passe en 641 pour simplifier",
          ],
          correct: 1,
          explanation:
            "Un junior demande le mapping J+3. Il n'invente pas un 6418 « divers paie ».",
        }),
        q({
          question: "Coût employeur pédagogique du mois (hors ICP) :",
          options: [
            "A. Égal au 421 39 012,51 €",
            "B. 641 + 645 = 70 342,02 € (bruts + patronal, AT/MP et mutuelle p hypo inclus).",
            "C. Égal au SMIC × 20",
            "D. Égal au PAS",
          ],
          correct: 1,
          explanation:
            "Le dirigeant qui « budgète le net » sous-calibre l'URSSAF. Le 645 n'est pas optionnel.",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie E Logiciels (seuil 80 %)",
      description:
        "Moteur, SIRH, cycle, éditeurs au niveau fonctionnel, pas de certification. Seuil 80 %.",
      passing_score: 80,
      minutes: 18,
      questions: [
        q({
          question: "Un moteur de paie, un SIRH et une solution intégrée TPE/PME :",
          options: [
            "A. Sont le même objet",
            "B. Se distinguent : le moteur calcule la paie ; le SIRH porte surtout le core RH ; l'intégré réunit un périmètre simplifié.",
            "C. Sont tous des clones du simulateur LOU",
            "D. Dispensent de DSN",
          ],
          correct: 1,
          explanation:
            "Module 20. Un SIRH international sans moteur France ne clôture pas janvier.",
        }),
        q({
          question: "Sage Paie, Silae, Cegid, ADP, SAP SuccessFactors, Workday, PayFit, Nibelis dans ce cours :",
          options: [
            "A. Font l'objet d'une certification officielle délivrée par LOU",
            "B. Sont présentés au niveau fonctionnel (positionnement, données, cycle, contrôles, DSN, limites), sans certification éditeur.",
            "C. Doivent être maîtrisés bouton par bouton pour valider l'examen",
            "D. Remplacent le droit social",
          ],
          correct: 1,
          explanation:
            "CONTENT_SPEC. Dire « je suis certifié Silae » après ce parcours est un mensonge.",
        }),
        q({
          question: "Le simulateur pédagogique LOU :",
          options: [
            "A. Est un clone commercial de Silae",
            "B. Calcule un bulletin pédagogique 2026 à partir d'un brut et d'options ; ce n'est pas un logiciel d'entreprise ni une DSN réelle.",
            "C. Paramètre les CCN françaises",
            "D. Garantit 36 000 € brut",
          ],
          correct: 1,
          explanation:
            "Dossiers JSON + engine.mjs. En entretien : raisonnement, pas une marque usurpée.",
        }),
        q({
          question: "Domaines fonctionnels à regarder quelle que soit la marque :",
          options: [
            "A. Uniquement le logo et la couleur du bulletin",
            "B. Données salariés, variables, calcul, contrôles, éditions, DSN, reporting, intégrations.",
            "C. Uniquement le portail congés",
            "D. Uniquement Excel",
          ],
          correct: 1,
          explanation:
            "Carte fonctionnelle du module 20. Un junior pose ces questions, il n'invente pas un écran.",
        }),
        q({
          question: "Excel en paie :",
          options: [
            "A. Remplace le moteur et la DSN",
            "B. Sert aux contrôles (variations, SMIC, PMSS, masses), pas à inventer un barème URSSAF parallèle.",
            "C. Est interdit",
            "D. Est une certification Microsoft exigée par l'examen",
          ],
          correct: 1,
          explanation:
            "Module 21. Un tableur de contrôle complète les listes d'anomalies du logiciel ; il ne les remplace pas comme vérité sociale.",
        }),
        q({
          question: "Le paramétrage d'un organisme ou d'une rubrique complexe :",
          options: [
            "A. Est l'autonomie normale d'un junior le premier jour",
            "B. Reste hors autonomie junior : saisie selon pièces, contrôles, escalade.",
            "C. Se fait d'après le dossier client voisin",
            "D. Se fait en recopiant 2025",
          ],
          correct: 1,
          explanation:
            "Un paramétrage faux produit un bulletin élégant et faux. Revue responsable.",
        }),
        q({
          question: "En entretien, la meilleure présentation des outils est :",
          options: [
            "A. « Je maîtrise Sage, Silae et Cegid, je suis certifié »",
            "B. « Je sais décrire un cycle, des contrôles et une DSN ; j'apprendrai l'outil du poste sous revue. L'attestation LOU n'est pas une certification éditeur. »",
            "C. « Les logiciels ne servent à rien, je calcule tout à la main »",
            "D. « Le simulateur LOU est l'outil de votre CSP »",
          ],
          correct: 1,
          explanation:
            "Crédibilité. Mentir sur un logiciel se vérifie en 10 minutes de test.",
        }),
        q({
          question: "Un feu vert logiciel en clôture :",
          options: [
            "A. Clôture à lui seul",
            "B. Est utile et incomplet : contrôles humains SMIC, PMSS, T2, FNAL, nets, pièces.",
            "C. Remplace le visa",
            "D. Garantit la CCN",
          ],
          correct: 1,
          explanation:
            "Module 23. ALP : un vert peut ignorer FNAL 17,50 € mal paramétré ou une date de fin au 31.",
        }),
        q({
          question: "Intégration comptable d'un logiciel de paie :",
          options: [
            "A. Dispense de comprendre 641/421/43x",
            "B. Produit un journal selon un mapping ; le junior contrôle les familles et l'équilibre, il ne recode pas le PCG seul.",
            "C. Crédite 512 automatiquement le 1er du mois",
            "D. Est identique chez tous les éditeurs, au même numéro de compte",
          ],
          correct: 1,
          explanation:
            "Mapping interne. ADP, SAP, Silae, Cegid : mêmes familles, plans différents.",
        }),
        q({
          question: "PayFit, Nibelis, Workday : dans une offre d'emploi junior, vous lisez surtout :",
          options: [
            "A. Une obligation de certification LOU sur ces marques",
            "B. Un écosystème (TPE intégrée, éditeur France, SIRH international…) à qualifier par les domaines fonctionnels, sans inventer un workflow d'écran.",
            "C. Que le droit français ne s'applique plus",
            "D. Que la DSN est facultative",
          ],
          correct: 1,
          explanation:
            "Positionnement public, utilisateurs types, qui paramètre, qui dépose la DSN. « Non vérifié » si ce n'est pas écrit.",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie F Cas professionnels (seuil 80 %)",
      description:
        "Limites junior, communication, confidentialité, marché de l'emploi. Seuil 80 %.",
      passing_score: 80,
      minutes: 22,
      questions: [
        q({
          question: "Un manager demande d'inventer 8 HS « comme d'habitude » après le gel :",
          options: [
            "A. Le junior saisit pour ne pas bloquer",
            "B. Il refuse la saisie sans pièce/validation, propose le report, copie le responsable.",
            "C. Il diminue les cotisations pour compenser",
            "D. Il avance le salaire",
          ],
          correct: 1,
          explanation:
            "Gel = date. Exception = responsable. Marc ALP-11 : 4 HS validées seulement.",
        }),
        q({
          question: "Paul demande le taux PAS de Sarah pour « s'aligner » :",
          options: [
            "A. Vous l'envoyez, égalité de traitement",
            "B. Vous refusez : confidentialité ; canal fiscal personnel ; vous n'ouvrez pas ALP-10.",
            "C. Vous calculez une moyenne 9 %",
            "D. Vous annulez le PAS des deux",
          ],
          correct: 1,
          explanation:
            "Erreur grave si vous divulguez. Mail type de la leçon 8.",
        }),
        q({
          question: "Yanis exige « 50 % du brut en IJ » :",
          options: [
            "A. Vous saisissez 1 250 €",
            "B. Vous refusez d'inventer une IJ ; vous lisez CCN/contrat ; hypo d'examen brut 2 500 € étiquetée.",
            "C. Vous mettez le NAP à 0",
            "D. Vous copiez l'arrêt d'un autre salarié",
          ],
          correct: 1,
          explanation:
            "Pas de montant d'IJ dans rates-2026.json. Méthode, pas magie.",
        }),
        q({
          question: "Un client cabinet exige une pratique non conforme :",
          options: [
            "A. Vous suivez : le client paie",
            "B. Vous n'appliquez pas ; vous alertez le responsable de dossier.",
            "C. Vous l'écrivez seulement en DSN, pas au bulletin",
            "D. Vous attendez le contrôle URSSAF",
          ],
          correct: 1,
          explanation:
            "Le client n'est pas le N+1 métier. Deux vérités bulletin/DSN = faute.",
        }),
        q({
          question: "36 000 € brut annuels :",
          options: [
            "A. Sont garantis à la fin de cette formation",
            "B. Sont un objectif de marché possible, jamais une garantie ni un effet automatique du parcours.",
            "C. Correspondent au SMIC annuel 2026",
            "D. Imposent le statut cadre",
          ],
          correct: 1,
          explanation:
            "course.meta.json. Le cadre dépend de la classification employeur. Le SMIC 1 823,03 € n'est pas 36 k€.",
        }),
        q({
          question: "Bulletin envoyé à un homonyme interne :",
          options: [
            "A. Sans importance entre collègues",
            "B. Incident de données : cesser, informer responsable / procédure RGPD, tracer, ne pas cacher.",
            "C. Un gag de clôture",
            "D. Un problème seulement si le NAP > 3 000 €",
          ],
          correct: 1,
          explanation:
            "Morel / Moreau : confirmer ALP-xx. Le montant est indifférent.",
        }),
        q({
          question: "Périmètre junior réaliste :",
          options: [
            "A. Paramétrer un organisme, qualifier un expat, déposer une DSN complexe seul",
            "B. Saisie sur pièces, contrôles de premier niveau, relances, explications factuelles, préparation DSN/journal sous revue.",
            "C. Décider une rupture",
            "D. Inventer une CCN",
          ],
          correct: 1,
          explanation:
            "Modules 00 et 29. Promettre l'expertise de responsable paie en entretien perd en crédibilité.",
        }),
        q({
          question: "AEN repas 50 € de Karim (ALP-15) :",
          options: [
            "A. Barème national URSSAF 2026 à réciter",
            "B. HYPOTHÈSE de dossier ; brut 2 550 € ; S 531,44 € ; NAP 2 018,56 € ; étiquetée.",
            "C. Exonérée d'office",
            "D. Hors bulletin si « c'est de la restauration »",
          ],
          correct: 1,
          explanation:
            "Un AEN se qualifie, s'évalue, s'étiquette. Pas un souvenir de taux.",
        }),
        q({
          question: "Réclamation de Léa sur 1 443,11 € :",
          options: [
            "A. Vous alignez le NAP sur 1 443,11 €",
            "B. Vous expliquez 1 443,09 € du bulletin vs chiffre de communication 1 443,11 €, sans modifier le brut SMIC.",
            "C. Vous supprimez la CSG",
            "D. Vous lui donnez le bulletin de Lucas « c'est pareil » en pièce jointe nominative",
          ],
          correct: 1,
          explanation:
            "Même totaux ALP-01/19, deux personnes : pas de PJ croisée. Écart 0,02 € expliqué, pas lissé en changeant le SMIC.",
        }),
        q({
          question: "Sur un CV, l'attestation LOU s'écrit :",
          options: [
            "A. « Titre RNCP gestionnaire de paie — certifié Sage / Silae »",
            "B. « Attestation de réussite du parcours plateforme, distincte d'un titre RNCP, d'un diplôme d'État et d'une certification éditeur. »",
            "C. « Diplôme d'État 2026 »",
            "D. « Autonome toutes CCN, DSN, paramétrage, 38 k€ »",
          ],
          correct: 1,
          explanation:
            "Formulation licite de la leçon 10. Le reste est un mensonge détectable.",
        }),
      ],
    }),

    quizLesson({
      title: "Examen final — Partie G Simulation Atelier Lumière Paie (seuil 80 %)",
      description:
        "Portefeuille de 20, anomalies, journal, mails, erreurs graves. Seuil 80 %. Une erreur grave non corrigée échoue la simulation.",
      passing_score: 80,
      minutes: 28,
      questions: [
        q({
          question: "Paramètres figés d'Atelier Lumière Paie :",
          options: [
            "A. Effectif 80, RGDU on, AT/MP national 1,50 %, CCN Syntec inventée",
            "B. Effectif 20, janvier 2026, RGDU off, AT/MP 1,50 % hypo, CCN IDCC à lire.",
            "C. FNAL 0,50 % parce qu'il y a 3 cadres",
            "D. PMSS 3 925 € « on verra février »",
          ],
          correct: 1,
          explanation:
            "JSON examen-atelier-lumiere.json. Recopier le simulateur (Camille hc 80) est une erreur de dossier.",
        }),
        q({
          question: "Combien de salariés, et doublons d'ancre NAP SMIC ?",
          options: [
            "A. 10 salariés ; un seul SMIC",
            "B. 20 salariés ; ALP-01 Léa et ALP-19 Lucas partagent 1 823,03 / 379,94 / 1 443,09.",
            "C. 28 salariés (Atelier Nord Paie)",
            "D. 20 salariés tous à 2 500 €",
          ],
          correct: 1,
          explanation:
            "Nord Paie (28) est une autre simulation du cours. Ici : Lumière Paie, 20.",
        }),
        q({
          question: "Camille (ALP-05) vs Chloé (ALP-18) :",
          options: [
            "A. L'une à FNAL 17,50 €, l'autre à 3,50 €",
            "B. Mêmes totaux : cadre 3 500 €, effectif 20, S 730,25 €, P 1 439,27 €, NAP 2 769,75 €.",
            "C. Chloé est non-cadre",
            "D. Pas d'APEC",
          ],
          correct: 1,
          explanation:
            "Paire 05/18. Forfait jours sur Camille dans le JSON ; HS interdites au réflexe pour les deux cadres.",
        }),
        q({
          question: "Contrôle SMIC de clôture : qui est concerné au premier chef ?",
          options: [
            "A. Antoine à 5 000 €",
            "B. Léa et Lucas (SMIC 1 823,03 €) et Sofiane (partiel 1 458,46 € : SMIC horaire ≥ 12,02 €, pas un collage du mensuel 35 h).",
            "C. Personne : effectif 20 = exonéré SMIC",
            "D. Uniquement les cadres",
          ],
          correct: 1,
          explanation:
            "Sous-SMIC non corrigé = échec. Coller 1 823,03 € à Sofiane est l'erreur inverse.",
        }),
        q({
          question: "Aucun net négatif dans cette copie :",
          options: [
            "A. On peut retirer le contrôle des nets",
            "B. Le contrôle reste obligatoire ; l'absence de net négatif se constate, elle ne se présume pas.",
            "C. C'est une anomalie grave",
            "D. On force un net négatif pour tester",
          ],
          correct: 1,
          explanation:
            "File d'anomalies : « aucun ici — le contrôle a été fait ». Ailleurs, saisie + mutuelle peuvent créer un négatif.",
        }),
        q({
          question: "ALP-13, mention à porter sur le reporting :",
          options: [
            "A. IJ = 1/730 du brut annuel, 45,89 €, comme vérité nationale",
            "B. HYPOTHÈSE d'examen : brut maintenu 2 500 €, NAP 1 978,99 €, en attente de lecture CCN (IJ / maintien / subrogation).",
            "C. NAP 0 €",
            "D. Maintien 110 % inventé",
          ],
          correct: 1,
          explanation:
            "Étiqueter. Inventer l'IJ échoue la simulation.",
        }),
        q({
          question: "4421 de clôture :",
          options: [
            "A. 0 € (effectif < 50)",
            "B. 408,40 € (Paul 203,38 + Sarah 205,02), confidentiel au nominatif.",
            "C. 203,38 € seulement",
            "D. 1 027,15 €",
          ],
          correct: 1,
          explanation:
            "Oublier Sarah casse journal et DSN collecteur. Ne pas publier les taux dans le reporting d'atelier.",
        }),
        q({
          question: "641 retracé (hors ICP) :",
          options: [
            "A. 20 × 2 500 = 50 000 €",
            "B. 49 820,55 €, somme des 20 bruts d'examen, à retracer ligne à ligne.",
            "C. 39 012,51 € (confusion avec le 421)",
            "D. 70 342,02 € (confusion avec 641+645)",
          ],
          correct: 1,
          explanation:
            "Méthode : sommer, vérifier NAP+S+PAS = brut. Ne pas mémoriser hors retrace.",
        }),
        q({
          question: "Quelle erreur, seule, fait échouer la simulation ?",
          options: [
            "A. Un écart de communication 0,02 € expliqué à Léa (1 443,09 vs 1 443,11)",
            "B. FNAL 17,50 € laissé sur Camille/Chloé, ou T2 oublié sur Antoine, ou PAS de Sarah envoyé à Paul, ou IJ inventée sur Yanis.",
            "C. Étiqueter l'AEN 50 €",
            "D. Relire la CCN avant l'ICP de Julie",
          ],
          correct: 1,
          explanation:
            "Consigne : erreur grave non corrigée = échec. L'écart 0,02 € expliqué n'en est pas une. Les quatre exemples du B si.",
        }),
        q({
          question: "Les 4 mails imposés portent sur :",
          options: [
            "A. Les 20 salariés, copie générale",
            "B. Léa (SMIC/net), Paul (PAS confidentiel), Yanis (maladie hypo / CCN), Julie (sortie, ICP comparée, pas d'indemnité inventée).",
            "C. Uniquement la direction",
            "D. Un mail unique « vos bulletins sont justes »",
          ],
          correct: 1,
          explanation:
            "Leçon 8. Vouvoiement, matricule, pas de PJ croisée Morel/Moreau.",
        }),
        q({
          question: "Hugo (ALP-03) et Amina (ALP-20) vs Sarah (ALP-10) :",
          options: [
            "A. Tous NAP 1 978,99 €",
            "B. 03 et 20 : 2 500 / 521,01 / 1 978,99 ; Sarah : même brut, NAP 1 753,97 € (mutuelle + PAS).",
            "C. Sarah a un brut 2 700 €",
            "D. Amina est en T2",
          ],
          correct: 1,
          explanation:
            "Recycler l'ancre sur Sarah est la faute de lecture la plus fréquente du portefeuille.",
        }),
        q({
          question: "Après 80 % aux parties A à G et une simulation sans erreur grave :",
          options: [
            "A. Vous êtes titulaire d'un RNCP et certifié Silae, salaire 36 k€",
            "B. Vous obtenez l'attestation LOU Academy de réussite du parcours ; ce n'est ni un titre RNCP, ni un diplôme d'État, ni une certification éditeur ; 36 k€ reste un objectif de marché, pas une garantie.",
            "C. Vous pouvez paramétrer seul toutes les CCN",
            "D. La DPAE n'est plus obligatoire dans votre future entreprise",
          ],
          correct: 1,
          explanation:
            "Clôture licite de l'examen. Les compétences sont réelles ; les titres usurpés ne le sont pas.",
        }),
      ],
    }),
  ],
};
