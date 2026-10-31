import { pack, quizLesson, q, h, t, note, code } from "../lib.mjs";

export default {
  position: 35,
  title: "Simulateur pédagogique — 10 dossiers de janvier 2026",
  description:
    "Examiner un dossier, identifier les manques, déterminer les règles, calculer, construire le bulletin, contrôler, détecter les erreurs et justifier — sur dix dossiers de janvier 2026. Le simulateur LOU n'est pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis.",
  lessons: [
    pack({
      title: "Ce qu'est le simulateur pédagogique (et ce qu'il n'est pas)",
      description:
        "Positionner l'espace d'entraînement, la méthode en huit actes, et les limites face aux moteurs du marché.",
      minutes: 28,
      objectifs:
        "À la fin de cette leçon, vous savez dire ce que calcule le simulateur LOU, ce qu'il n'est pas, et vous appliquez la méthode en huit actes avant tout chiffre : examiner, lister les manques, déterminer les règles, calculer, construire le bulletin, contrôler, trouver les erreurs, justifier.",
      theorie:
        "Le simulateur pédagogique LOU Academy est un espace d'entraînement déterministe. Il s'appuie sur dix dossiers fictifs (dossier-01.json à dossier-10.json) dont les champs {brut, cadre, headcount, pasRate, includeMutuelle, atmpRate, period} correspondent aux arguments de computeBulletin (engine.mjs). La période unique est janvier 2026 (2026-01), métropole, régime général. Les totaux des bruts d'ancre 1 823,03 €, 2 100 €, 2 500 €, 3 100 €, 3 500 € et 5 000 € sont ceux de reference-bulletins.json. Les autres bruts (1 287,10 €, 1 458,46 €, 2 700 €) suivent les mêmes formules : vieillesse plafonnée 6,90 % × min(brut, 4 005), CSG/CRDS sur 98,25 % du brut dans la limite de 4 PASS, maladie patronale 13 %, AF 5,25 %. Aucun taux URSSAF, PMSS, SMIC ou Agirc-Arrco n'est inventé.\n\nCe n'est pas un logiciel de paie d'entreprise. Ce n'est pas Sage Paie, Silae, Cegid, ADP, SAP SuccessFactors (paie associée), Workday, PayFit ni Nibelis. Il n'y a ni clone d'interface, ni DSN réelle, ni CRM net-entreprises, ni paramétrage CCN. Le module logiciels a présenté ces moteurs au niveau fonctionnel : données, cycle, contrôles, DSN, limites. Ici, vous apprenez le raisonnement qu'un moteur, commercial ou pédagogique, exécute mal dès que les faits sont faux ou que la règle est mal qualifiée.\n\nLe geste à automatiser n'est pas « cliquer pour voir le net ». C'est une chaîne de huit actes : (1) examiner le dossier ; (2) identifier les informations manquantes ; (3) déterminer les règles applicables — obligation légale, paramètre annuel 2026, disposition conventionnelle non lue donc non inventée, paramètre d'entreprise, hypothèse pédagogique ; (4) calculer ; (5) construire le bulletin ; (6) contrôler ; (7) trouver les erreurs ; (8) justifier par écrit. Sans cette chaîne, un NAP exact n'est qu'un copier-coller.\n\nL'AT/MP 1,50 % est une HYPOTHÈSE de dossier, jamais un taux national Carsat. La mutuelle 20/40 € et les taux PAS 8 % et 10 % sont des HYPOTHÈSES. La RGDU 2026 n'est pas appliquée : maladie patronale 13 % et AF 5,25 % (URSSAF-TAUX-PRIVE-2026). L'attestation de réussite est une attestation LOU Academy : ce n'est pas un titre RNCP, ni un diplôme d'État, ni une certification éditeur. 36 000 € brut / statut cadre restent un objectif de marché, pas un résultat du simulateur.",
      methode:
        "Pour chaque dossier, dans cet ordre, sans sauter une étape :\n1. Examiner : identité, contrat, temps, brut JSON, statut, effectif, PAS, mutuelle, événements, notes.\n2. Identifier les manques : DPAE, NIR, RIB, IDCC ouvert, CRM PAS réel, notification Carsat, affiliation mutuelle, HS visées. Distinguer bloquant métier et suffisant pour le moteur pédagogique.\n3. Déterminer les règles : période janvier 2026 ; SMIC 12,02 € / 1 823,03 € ; PMSS 4 005 € ; FNAL selon headcount ; APEC si cadre ; T2/CET si brut > PMSS ; prorata déjà dans le brut d'Inès ; partiel déjà dans le brut de Sofiane ; prime déjà dans le brut de Thomas.\n4. Calculer : reprendre les totaux moteur des notes JSON, jamais un pourcentage « à vue ».\n5. Construire le bulletin : gabarit commenté (brut, lignes, trois nets, étiquettes hypo).\n6. Contrôler : T1 = min(brut, 4 005) ; maladie s = 0 ; AT/MP hypo étiquetée ; APEC seulement cadre ; FNAL selon effectif ; CET seulement si brut > PMSS ; PAS sur le net imposable.\n7. Trouver les erreurs : coller un NAP d'ancre sur un autre brut, caler 1 443,11 €, ajouter 200 € au net, coller le SMIC mensuel à un partiel.\n8. Justifier : brut, ligne, source, trois nets, suite — vouvoiement, sans données d'un tiers.\nVous ne « lancez » pas un calcul pour voir. Vous préparez les faits, puis vous calculez, puis vous contrôlez, puis vous écrivez.",
      noteText:
        "Le simulateur pédagogique LOU n'est PAS Sage Paie, PAS Silae, PAS Cegid, PAS ADP, PAS SAP, PAS Workday, PAS PayFit, PAS Nibelis. Résultats déterministes pour janvier 2026, régime général, métropole. AT/MP 1,50 % = HYPOTHÈSE de dossier, jamais un taux France. Attestation LOU Academy ≠ titre RNCP ≠ diplôme d'État ≠ certification éditeur.",
      exemple:
        "En cabinet, un collaborateur junior se présente en entretien : « J'ai travaillé dix dossiers pédagogiques sourcés janvier 2026, je sais contrôler un brut 2 500 € à 1 978,99 € de net à payer et expliquer pourquoi Sarah, même brut, vire 1 753,97 €. Je n'ai pas « maîtrisé Silae ». » Cette phrase est crédible. « Je suis certifié Sage grâce à LOU » ne l'est pas. Le recruteur teste le raisonnement, pas le logo d'un éditeur.",
      extra: [
        h("Contrats d'entrée du moteur et registre des dix dossiers"),
        code(`computeBulletin({ brut, cadre, headcount, pasRate, includeMutuelle, atmpRate })
Période JSON : "2026-01" — rémunérations versées au titre de janvier 2026
AT/MP 0,015 = HYPOTHÈSE pédagogique (Carsat réelle = notification)
Mutuelle 20/40 € = HYPOTHÈSE si includeMutuelle true
PAS = HYPOTHÈSE de CRM pédagogique, pas un barème national
RGDU non appliquée : maladie p 13 % / AF 5,25 % (URSSAF-TAUX-PRIVE-2026)

REGISTRE — janvier 2026 — AT/MP 1,50 % HYPOTHÈSE
ID  Nom              Brut      Cadre  Eff.  PAS   Mut.  Fait structurant
01  Léa Morel        1823,03     N     20    0     N    SMIC 35 h
02  Nadia Khelifi    2100,00     N     20    0     N    Employée 35 h
03  Hugo Bertin      2500,00     N     20    0     N    Ancre bulletin
04  Paul Mercier     3100,00     N     20    8 %   N    PAS hypo 8 %
05  Camille Roux     3500,00     O     80    0     N    Cadre forfait jours
06  Antoine Vidal    5000,00     N     20    0     N    T2 995 + CET
07  Inès Palacio     1287,10     N     20    0     N    Entrée 13/01, 2100×19/31
08  Sofiane Benali   1458,46     N     20    0     N    80 %, SMIC 12,02 €
09  Thomas Leroy     2700,00     N     20    0     N    2500 + prime 200 soumise
10  Sarah Cohen      2500,00     N     20   10 %   O    Mutuelle 20/40 + PAS 10 %

CCN : IDCC à lire — aucun minimum inventé.
Logiciel : moteur LOU, PAS un clone commercial.`),
      ],
      erreurs:
        "Se présenter comme utilisateur Silae, Sage, Cegid, ADP, SAP, Workday, PayFit ou Nibelis. Croire que le JSON remplace le contrat réel. Recopier un NAP d'ancre sur un autre brut. Traiter l'AT/MP 1,50 % comme un taux national. Confondre attestation LOU et titre RNCP.",
      particuliers:
        "En poste, le moteur commercial aura plus de rubriques (titres-restaurant, prévoyance, saisie sur salaire, acomptes). Le geste reste le même : source, assiette, contrôle, justification. Headcount 80 sur Camille seul est un levier pédagogique (FNAL 0,50 % et APEC), étiqueté dans le JSON, pas une contradiction de roman d'entreprise.",
      exercice:
        "Rédigez quatre phrases : (1) ce que le simulateur calcule ; (2) ce qu'il n'est pas, en citant les huit noms d'éditeurs ; (3) les huit actes de la méthode ; (4) ce que vous direz en entretien sur l'attestation.",
      correction:
        "1. Un bulletin pédagogique janvier 2026 à partir d'un brut et d'options (cadre, effectif, PAS, mutuelle, AT/MP hypo), totaux déterministes engine.mjs / notes JSON.\n2. Ce n'est pas Sage Paie, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis ; pas une DSN ; pas un clone commercial.\n3. Examiner, lister les manques, déterminer les règles, calculer, construire le bulletin, contrôler, trouver les erreurs, justifier.\n4. Attestation LOU Academy de réussite du parcours, distincte d'un titre RNCP, d'un diplôme d'État et d'une certification éditeur.",
    }),
    pack({
      title: "Dossiers 01 et 02 — Léa (SMIC) et Nadia (2 100 €)",
      description:
        "Parcours complet : ouvrière au SMIC 1 823,03 € et employée à 2 100 €, janvier 2026.",
      minutes: 36,
      objectifs:
        "Vous examinez les dossiers Léa et Nadia, vous nommez les manques, vous appliquez les règles 2026, vous calculez aux totaux moteur, vous construisez les deux bulletins, vous contrôlez, vous refusez le net 1 443,11 €, vous justifiez les deux NAP.",
      theorie:
        "Léa Morel (dossier-01) est ouvrière, CDI 35 h, non-cadre, payée au SMIC mensuel de janvier 2026. Du 01/01/2026 au 31/05/2026, le SMIC horaire métropole est 12,02 € et le mensuel 35 h est 1 823,03 € (12,02 × 151,67 h, URSSAF-SMIC-2026). Effectif paramétré 20 : FNAL 0,10 % sur assiette plafonnée. Pas de PAS, pas de mutuelle, pas d'APEC. AT/MP 1,50 % = HYPOTHÈSE. Le moteur donne : salarial 379,94 €, patronal 749,02 €, net imposable 1 495,04 €, net à payer et MNS 1 443,09 €. Service-Public publie un net indicatif 1 443,11 € : chiffre de communication, écart 0,02 € possible selon arrondis et périmètre. Ce n'est pas la formule du bulletin. Vous ne calez jamais 1 443,11 €.\n\nNadia Khelifi (dossier-02) est employée administrative, CDI 35 h, brut contractuel 2 100 €, non-cadre, même effectif 20, sans PAS, sans mutuelle. Le taux horaire de référence pour d'éventuelles HS est 2 100 / 151,67 ≈ 13,85 € ; aucune HS n'est visée dans le JSON. Référence moteur : salarial 437,65 €, net imposable 1 722,19 €, NAP et MNS 1 662,35 €. AT/MP 1,50 % HYPOTHÈSE = 31,50 € patronaux.\n\nLes deux dossiers partagent le régime : janvier 2026, métropole, régime général, RGDU non appliquée (maladie patronale 13 %, AF 5,25 %), maladie salariale 0 % (domicile fiscal France), PMSS 4 005 € non atteint, pas de T2, pas de CET, pas d'APEC. La CCN est un IDCC à lire : aucun minimum conventionnel n'est inventé. Si le minimum de branche, une fois lu, dépasse 1 823,03 € ou 2 100 €, le brut JSON cesserait d'être le brut dû — ce n'est pas le cas tant que le texte n'est pas ouvert.\n\nLe junior qui « applique 22 % pour trouver un net » sur Nadia obtient environ 1 638 €, qui n'est ni 1 662,35 € ni un bulletin. Le simulateur n'est pas un comparateur grand public. Il n'est pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis.",
      methode:
        "Pour Léa puis Nadia : ouvrir le JSON ; lister faits / manques / hypo / interdit ; citer la période et les sources (URSSAF-SMIC-2026, URSSAF-TAUX-PRIVE-2026, MSA-BAREME-2026, AGIRC-ARRCO-2026, BOSS-MNS) ; poser l'assiette ; reprendre les totaux des notes ; remplir le gabarit ; contrôler maladie s = 0, T2 absent, NAP = MNS ; rédiger une justification de cinq lignes. Ne pas traiter Nadia comme un SMIC, ni Léa comme 2 100 €.",
      noteText:
        "AT/MP 1,50 % = HYPOTHÈSE de dossier fictif, pas un taux national. Net indicatif 1 443,11 € = communication Service-Public, pas le moteur. Simulateur LOU ≠ clone commercial.",
      exemple:
        "PME de menuiserie, 22 salariés. Le chargé de paie compare le bulletin SMIC de Léa au « net SMIC » lu sur un site grand public. Écart de 0,02 €. Il « corrige » le moteur pour coller à 1 443,11 €. Le responsable reprend : on ne cale pas un bulletin sur un chiffre de communication. Le même junior, sur Nadia, avait écrit « 22 % comme partout » : 1 638 € au lieu de 1 662,35 €.",
      extra: [
        h("Dossier-01 — Léa Morel — parcours en huit actes"),
        t(
          "EXAMINER. Ouvrière, CDI 35 h, SMIC janvier 2026, non-cadre, ancienneté pédagogique 2 ans, pas de HS visées. Brut JSON 1 823,03 €. Effectif 20. PAS 0. Mutuelle non. AT/MP 0,015. Période 2026-01.\n\nMANQUES. Bloquants métier réel : contrat signé, NIR, RIB, DPAE si entrée récente (ici ancienneté 2 ans : DPAE déjà faite, à vérifier au dossier). Non bloquants pédagogiques : IDCC ouvert (aucun minimum inventé), notification Carsat réelle, compteur CP. Suffisant pour le moteur : oui.\n\nRÈGLES. Obligation : SMIC 12,02 €/h et 1 823,03 €/mois jusqu'au 31/05/2026. Paramètre annuel : PMSS 4 005 €, vieillesse 6,90 % plafonnée, maladie p 13 %, AF 5,25 %, Arrco T1 3,15 % s. Paramètre d'entreprise : effectif 20 → FNAL 0,10 % plafonné. Hypothèse : AT/MP 1,50 %. CCN : IDCC à lire, non chiffrée.\n\nCALCULER / CONTRÔLER. Vieillesse plaf. s 1 823,03 × 0,069 = 125,79 €. Arrco T1 s 57,43 €. CSG base 1 823,03 × 0,9825 = 1 791,13 €. Total salarial 379,94 €. Patronal 749,02 € dont AT/MP hypo 27,35 €. NI 1 495,04 €. NAP = MNS = 1 443,09 €. Contrôle : 1 823,03 − 379,94 = 1 443,09. Interdit : 1 443,11.\n\nERREURS. Caler 1 443,11 €. Traiter 379,94 € comme un taux unique. Mettre de l'AT/MP salarial. Coller le NAP de Nadia.\n\nJUSTIFIER. « Votre brut est le SMIC 1 823,03 € de janvier 2026. Les cotisations salariales s'élèvent à 379,94 €. Le net à payer et le montant net social sont 1 443,09 €. Le chiffre 1 443,11 € parfois publié est indicatif ; il n'est pas la formule de votre bulletin. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Léa Morel — janvier 2026
CDI 35 h, 151,67 h, non-cadre, effectif 20, PAS 0, mutuelle non
AT/MP 1,50 % = HYPOTHÈSE    RGDU non appliquée
BRUT                                              1 823,03 €
Salarial (moteur)                                   379,94 €
Patronal (moteur)                                   749,02 €
Net imposable                                     1 495,04 €
Net à payer = MNS                                 1 443,09 €
INTERDIT : 1 443,11 € (communication, pas le bulletin)
Source : reference-bulletins.json clé smic / notes dossier-01`),
        h("Dossier-02 — Nadia Khelifi — parcours en huit actes"),
        t(
          "EXAMINER. Employée administrative, CDI 35 h, 2 100 €, non-cadre, classification RH, pas d'APEC. Brut JSON 2 100,00 €. Effectif 20. PAS 0. Mutuelle non. AT/MP 0,015.\n\nMANQUES. Classification écrite, IDCC ouvert, éventuelles HS visées (aucune dans le JSON : vous n'inventez pas 4 HS). CRM PAS réel (ici 0 pédagogique).\n\nRÈGLES. Même barème 2026 que Léa. Brut contractuel 2 100 € > SMIC : le SMIC n'est plus le brut, il reste le plancher. Taux horaire 13,85 € seulement si HS visées. Pas d'APEC (non-cadre).\n\nCALCULER / CONTRÔLER. Salarial 437,65 €. NI 1 722,19 €. NAP/MNS 1 662,35 €. AT/MP hypo 2 100 × 0,015 = 31,50 €. Maladie p 273,00 €. Contrôle : 2 100,00 − 437,65 = 1 662,35. T2 absent (2 100 < 4 005).\n\nERREURS. Appliquer 22 %. Recopier 1 443,09 €. Recopier 1 978,99 € (Hugo). Inventer des HS.\n\nJUSTIFIER. « Votre salaire de base est 2 100,00 €. Cotisations salariales 437,65 €. Net à payer et MNS 1 662,35 €, période janvier 2026, hors PAS et hors mutuelle. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Nadia Khelifi — janvier 2026
CDI 35 h, non-cadre, effectif 20, PAS 0, mutuelle non
AT/MP 1,50 % = HYPOTHÈSE    RGDU non appliquée
BRUT                                              2 100,00 €
Salarial (moteur)                                   437,65 €
Net imposable                                     1 722,19 €
Net à payer = MNS                                 1 662,35 €
Taux horaire HS (si HS visées) : 13,85 € — aucune HS dans ce JSON
Source : reference-bulletins.json clé brut_2100 / notes dossier-02`),
      ],
      erreurs:
        "Caler Léa sur 1 443,11 €. Appliquer 22 % à Nadia. Fusionner les deux NAP. Traiter l'AT/MP 1,50 % comme un taux France. Inventer un minimum CCN. Présenter le simulateur comme Silae.",
      particuliers:
        "Temps partiel : ce n'est pas Léa ( Sofiane, dossier-08). Entrée en cours de mois : ce n'est pas Nadia (Inès, dossier-07). Un SMIC à 11,90 €/h est illégal en janvier 2026 : vous bloquez, vous n'arrondissez pas.",
      exercice:
        "Un salarié au SMIC écrit : « Service-Public dit 1 443,11 €, vous me versez 1 443,09 €. » En parallèle, Nadia demande « pourquoi je n'ai pas 2 100 − 22 % ». Répondez aux deux en cinq lignes chacune, avec les totaux moteur.",
      correction:
        "Léa : brut SMIC 1 823,03 €, salarial 379,94 €, NAP/MNS 1 443,09 €. Le 1 443,11 € est un chiffre de communication, pas une dette de 0,02 €. Vous ne calez pas le bulletin.\nNadia : salarial 437,65 €, NI 1 722,19 €, NAP/MNS 1 662,35 €. « 22 % » n'est pas une formule de bulletin. Vous expliquez les lignes, vous ne promettez pas un forfait.",
    }),
    pack({
      title: "Dossiers 03 et 04 — Hugo (2 500 €) et Paul (PAS 8 %)",
      description:
        "Bulletin d'ancre 2 500 €, puis agent de maîtrise 3 100 € avec PAS hypothèse 8 %.",
      minutes: 36,
      objectifs:
        "Vous maîtrisez le bulletin commenté 2 500 € (Hugo) et vous distinguez, sur Paul, salarial, net imposable, PAS, net avant impôt, NAP et MNS.",
      theorie:
        "Hugo Bertin (dossier-03) est le bulletin commenté de référence du parcours : technicien, CDI 35 h, 2 500 €, non-cadre, effectif 20, sans PAS, sans mutuelle. Notes JSON et reference-bulletins.json : CSG base 2 456,25 €, vieillesse plafonnée salariale 172,50 €, Arrco T1 salariale 78,75 €, salarial 521,01 €, patronal 1 027,15 €, net imposable 2 050,22 €, NAP et MNS 1 978,99 €. AT/MP hypo 2 500 × 0,015 = 37,50 €. FNAL < 50 : 2,50 €. Pas de T2, pas de CET, pas d'APEC. Ce bulletin sert de gabarit : pour les autres bruts d'ancre, vous changez les montants, pas la structure.\n\nPaul Mercier (dossier-04) est agent de maîtrise, 3 100 €, non-cadre, effectif 20, sans mutuelle, PAS 8 % = HYPOTHÈSE de CRM pédagogique, pas un barème national. Salarial 646,05 €, NI 2 542,28 €, PAS 203,38 € (2 542,28 × 8 %), net avant impôt 2 453,95 €, NAP 2 250,57 €, MNS 2 453,95 €. Le MNS n'est pas le NAP : l'impôt sort du virement, pas du net social pédagogique 2026. Le taux PAS est confidentiel : vous ne le comparez pas à celui d'un collègue, vous ne le dictez pas à un manager.\n\nSur Hugo, l'erreur classique est d'assiette CSG : 2 500 × 0,9825 = 2 456,25 €, pas 2 500 €. Sur Paul, l'erreur classique est d'appliquer 8 % au brut (248 €) au lieu du net imposable (203,38 €). Les cotisations sociales de Paul ne « augmentent » pas à cause du PAS : 646,05 € resterait le salarial d'un mois sans PAS ; c'est le virement qui diminue.\n\nPériode janvier 2026, métropole, régime général, RGDU non appliquée. AT/MP 1,50 % HYPOTHÈSE. Le simulateur LOU n'est pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis. Vous n'envoyez pas une capture d'écran d'éditeur pour « prouver » un net.",
      methode:
        "Hugo : remplir le gabarit ligne à ligne (maladie p 325,00 €, AF 131,25 €, CSG base 2 456,25 €, salarial 521,01 €). Paul : calculer d'abord le bulletin social (comme Hugo, autre brut), puis le PAS sur le NI, puis séparer NAP et MNS. Contrôle Paul : 3 100 − 646,05 = 2 453,95 (net avant impôt = MNS) ; 2 453,95 − 203,38 = 2 250,57 (NAP). Confidentialité du taux : canal DGFiP pour le modifier, pas la paie.",
      noteText:
        "PAS 8 % = HYPOTHÈSE de CRM pédagogique, pas un taux national. AT/MP 1,50 % = HYPOTHÈSE. MNS pédagogique 2026 = brut − prélèvements sociaux salariaux obligatoires (BOSS-MNS, modèle provisoire jusqu'au 31/12/2026).",
      exemple:
        "ETI de services, 180 salariés. Paul appelle : « on m'a trop cotisé, mon virement a baissé. » La junior ouvre le bulletin, montre que le salarial 646,05 € est inchangé, et que 203,38 € sont du PAS sur NI 2 542,28 €. Elle ne dit pas le taux à voix haute dans l'open space. Elle oriente vers le service des impôts pour une question de taux, pas vers une « correction paie ».",
      extra: [
        h("Dossier-03 — Hugo Bertin — parcours en huit actes"),
        t(
          "EXAMINER. Technicien, CDI 35 h, 2 500 €, non-cadre, effectif 20, PAS 0, mutuelle non, AT/MP hypo.\n\nMANQUES. Classification, IDCC, éventuelles variables du mois (aucune dans le JSON).\n\nRÈGLES. Barème 2026 taux pleins. Brut ≤ PMSS : pas de T2 ni CET. Non-cadre : pas d'APEC. Effectif 20 : FNAL 0,10 % × 2 500 = 2,50 €.\n\nCALCULER. CSG base 2 456,25 €. VIE_PLAF s 172,50 €. ARRCO_T1 s 78,75 €. Salarial 521,01 €. Patronal 1 027,15 €. NI 2 050,22 €. NAP/MNS 1 978,99 €. AT/MP hypo 37,50 €.\n\nCONTRÔLER. 2 500 − 521,01 = 1 978,99. Maladie s = 0. T2 = 0.\n\nERREURS. CSG sur 2 500. Recopier 1 978,99 € sur Thomas (2 700 €) ou Sarah (mutuelle+PAS).\n\nJUSTIFIER. Bulletin commenté : brut 2 500 €, salarial 521,01 €, NI 2 050,22 €, NAP 1 978,99 €, période janvier 2026."
        ),
        code(`BULLETIN PÉDAGOGIQUE — Hugo Bertin — janvier 2026
BRUT                                              2 500,00 €
Maladie p 13 %                                      325,00 €
AF 5,25 %                                           131,25 €
AT/MP 1,50 % HYPOTHÈSE                               37,50 €
FNAL 0,10 % plaf.                                     2,50 €
VIE_PLAF s                                          172,50 €
ARRCO_T1 s                                           78,75 €
CSG base (98,25 %)                                2 456,25 €
TOTAL salarial                                      521,01 €
TOTAL patronal                                    1 027,15 €
Net imposable                                     2 050,22 €
NAP = MNS                                         1 978,99 €
Source : reference-bulletins.json clé brut_2500 / notes dossier-03`),
        h("Dossier-04 — Paul Mercier — parcours en huit actes"),
        t(
          "EXAMINER. Agent de maîtrise, 3 100 €, non-cadre, effectif 20, PAS 8 % hypo, mutuelle non.\n\nMANQUES. CRM PAS réel (ici hypo pédagogique 8 %), classification maîtrise, IDCC. Confidentialité : ne pas afficher le taux sur un écran partagé.\n\nRÈGLES. Même barème social qu'Hugo. PAS = taux CRM × net imposable, pas × brut. MNS ≠ NAP dès qu'il y a du PAS.\n\nCALCULER. Salarial 646,05 €. NI 2 542,28 €. PAS 2 542,28 × 0,08 = 203,38 €. Net avant impôt 2 453,95 €. NAP 2 250,57 €. MNS 2 453,95 €.\n\nCONTRÔLER. 8 % × 3 100 = 248,00 € → FAUX. 2 453,95 − 203,38 = 2 250,57 → OK. APEC absente (non-cadre). T2 absente (3 100 < 4 005).\n\nERREURS. PAS sur le brut. Confondre MNS et NAP. Dire « on vous a trop cotisé » alors que l'écart est fiscal.\n\nJUSTIFIER. « Vos cotisations sociales salariales sont 646,05 €. Le prélèvement à la source, 203,38 €, s'applique sur le net imposable 2 542,28 € selon le taux transmis (hypothèse pédagogique 8 % dans cet exercice). Net social 2 453,95 €, virement 2 250,57 €. Pour le taux : administration fiscale, pas le gestionnaire de paie. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Paul Mercier — janvier 2026
BRUT                                              3 100,00 €
Salarial (moteur)                                   646,05 €
Net imposable                                     2 542,28 €
PAS 8 % HYPOTHÈSE CRM (sur NI)                      203,38 €
Net avant impôt = MNS                             2 453,95 €
Net à payer                                       2 250,57 €
INTERDIT : 8 % × 3 100 = 248,00 €
Source : reference-bulletins.json clé brut_3100_pas_8pct / notes dossier-04`),
      ],
      erreurs:
        "CSG d'Hugo sur 2 500 € au lieu de 2 456,25 €. PAS de Paul sur le brut. Recopier NAP 1 978,99 € sur Paul. Divulguer le taux PAS. Oublier que MNS Paul = 2 453,95 € ≠ NAP.",
      particuliers:
        "Taux PAS réel : flux DSN / CRM, jamais un « 8 % moyen ». Taux neutre, personnalisé, non personnalisé : vous appliquez celui qui est transmis. Un junior n'invente pas 8 % « parce que le simulateur le fait » sur un dossier réel.",
      exercice:
        "Calculez l'écart de virement entre Hugo et Paul. Dites s'il s'explique par « plus de cotisations » ou par le PAS. Donnez NI, PAS, NAP, MNS de Paul.",
      correction:
        "Hugo NAP 1 978,99 €, Paul NAP 2 250,57 € : l'écart de virement n'est pas un diagnostic. Sur Paul, le salarial 646,05 € est le social ; l'impôt 203,38 € sort ensuite. NI 2 542,28 €, PAS 203,38 €, NAP 2 250,57 €, MNS 2 453,95 €. Ce n'est pas « plus de cotisations » au sens URSSAF.",
    }),
    pack({
      title: "Dossiers 05 et 06 — Camille (cadre, forfait jours) et Antoine (T2)",
      description:
        "Cadre 3 500 € effectif 80, APEC et FNAL 0,50 % ; non-cadre 5 000 €, T1/T2 et CET.",
      minutes: 36,
      objectifs:
        "Vous refusez le réflexe 25 % HS sur un forfait jours, vous calculez APEC 0,84 € et FNAL 17,50 € pour Camille, et vous plafonnez Antoine : T1 4 005, T2 995, CET salarial 7,00 €.",
      theorie:
        "Camille Roux (dossier-05) est cadre au forfait jours, brut 3 500 €, effectif paramétré 80, sans PAS, sans mutuelle. Le forfait jours n'est pas un horaire 151,67 h : vous n'appliquez pas le réflexe des 8 premières heures supplémentaires à 25 % (L. 3121-36, taux légaux supplétifs à défaut d'accord). Un dépassement de forfait se lit dans l'accord, le contrat, le décompte des jours, pas dans une grille HS d'ouvrier. Effectif 80 ≥ 50 : FNAL 0,50 % sur le brut = 17,50 € (pas 3,50 € d'un FNAL 0,10 % plafonné). Cadre : APEC salariale 0,84 €, patronale 1,26 € (limite 4 PASS). Salarial 730,25 €, NAP et MNS 2 769,75 €. Brut 3 500 < PMSS 4 005 : pas de T2, pas de CET. AT/MP 1,50 % HYPOTHÈSE = 52,50 € patronaux. CCN : IDCC à lire, aucun minimum inventé.\n\nAntoine Vidal (dossier-06) est non-cadre au-dessus du PMSS : brut 5 000 €, effectif 20, sans PAS, sans mutuelle. T1 = 4 005 €, T2 = 995 €. CET salarial 7,00 € (0,14 % × 5 000, due parce que le brut dépasse le PMSS). Arrco T2 salarial 85,97 €. Salarial 1 037,18 €, NI 4 105,28 €, NAP et MNS 3 962,82 €. FNAL < 50 : 4,01 € (0,10 % × 4 005, assiette plafonnée). Pas d'APEC : non-cadre. AT/MP hypo 75,00 €. L'erreur mortelle est d'appliquer 6,90 % de vieillesse plafonnée à 5 000 € au lieu de 4 005 € (276,35 €, pas 345,00 €).\n\nT2 n'est pas le statut cadre. Camille est cadre sans T2. Antoine est T2 sans être cadre. Confondre les deux produit une DSN incohérente (APEC sur un non-cadre, ou oubli d'APEC sur un cadre). Headcount 80 sur Camille seul est un levier pédagogique, étiqueté dans le JSON.\n\nPériode janvier 2026, RGDU non appliquée. Simulateur LOU ≠ Sage, Silae, Cegid, ADP, SAP, Workday, PayFit, Nibelis.",
      methode:
        "Camille : (1) lire « cadre » et « forfait jours » avant toute HS ; (2) APEC oui ; (3) FNAL 0,50 % × 3 500 = 17,50 € ; (4) vérifier 3 500 < 4 005. Antoine : (1) poser T1 4 005 et T2 995 avant toute cotisation plafonnée ; (2) CET oui ; (3) APEC non ; (4) FNAL 0,10 % × T1. Contrôle croisé : si votre gabarit inverse APEC et CET, le paramètre statut ou PMSS est faux.",
      noteText:
        "AT/MP 1,50 % = HYPOTHÈSE. Forfait jours : pas de réflexe HS 25 %. FNAL 17,50 € tient à l'effectif 80, paramètre d'entreprise pédagogique, pas à un taux national unique.",
      exemple:
        "CSP, portefeuille cadres. Un junior saisit 8 HS à 25 % sur Camille « comme les non-cadres de l'atelier ». Le net bouge, le salarié cadre réclame, le responsable doit défaire la rubrique, relire l'accord de forfait, et expliquer qu'une heure supplémentaire légale supplétive n'est pas le régime du forfait jours. Le même junior, sur Antoine, avait coché « cadre » parce que « 5 000 € ça fait cadre » : APEC indue.",
      extra: [
        h("Dossier-05 — Camille Roux — parcours en huit actes"),
        t(
          "EXAMINER. Cadre, forfait jours, 3 500 €, effectif 80, PAS 0, mutuelle non, AT/MP hypo.\n\nMANQUES. Avenant forfait jours, nombre de jours, décompte, classification cadre, accord. Sans avenant, le forfait n'est pas « présumé ».\n\nRÈGLES. APEC si cadre (0,024 % s / 0,036 % p, limite 4 PASS). FNAL ≥ 50 : 0,50 % sur brut. Pas de L. 3121-36 au réflexe 25 %. Pas de T2 (3 500 < 4 005).\n\nCALCULER. FNAL 17,50 €. APEC s 0,84 € p 1,26 €. Salarial 730,25 €. NAP/MNS 2 769,75 €.\n\nCONTRÔLER. 3 500 − 730,25 = 2 769,75. CET absent. HS 25 % absentes.\n\nERREURS. 8 HS à 25 %. FNAL 3,50 € (réflexe < 50). Oubli APEC. Coller le NAP d'Antoine.\n\nJUSTIFIER. « Vous êtes cadre au forfait jours : les heures supplémentaires à 25 % ne s'appliquent pas par réflexe. APEC salariale 0,84 €. Net à payer 2 769,75 €. Un dépassement de forfait se traite avec RH et l'accord, pas par une grille HS ouvrier. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Camille Roux — janvier 2026
Cadre, forfait jours, effectif 80, PAS 0, mutuelle non
AT/MP 1,50 % HYPOTHÈSE    RGDU non appliquée
BRUT                                              3 500,00 €
FNAL 0,50 % (≥ 50)                                   17,50 €  patronal
APEC s / p                                        0,84 / 1,26 €
Salarial (moteur)                                   730,25 €
NAP = MNS                                         2 769,75 €
INTERDIT : 8 HS à 25 % (forfait jours)
Source : reference-bulletins.json clé cadre_3500_effectif_80 / notes dossier-05`),
        h("Dossier-06 — Antoine Vidal — parcours en huit actes"),
        t(
          "EXAMINER. Non-cadre, 5 000 €, effectif 20, PAS 0, mutuelle non. Au-dessus du PMSS.\n\nMANQUES. Classification (confirmer non-cadre), IDCC, éventuelle part variable. Ne pas « requalifier cadre » parce que le brut est élevé.\n\nRÈGLES. T1 = min(5 000, 4 005) = 4 005. T2 = 995. CET due car brut > PMSS, base T1+T2. Vieillesse plafonnée sur T1 seulement. APEC non. FNAL 0,10 % × 4 005 = 4,01 €.\n\nCALCULER. CET s 7,00 €. ARRCO_T2 s 85,97 €. Salarial 1 037,18 €. NI 4 105,28 €. NAP/MNS 3 962,82 €. AT/MP hypo 75,00 €. Vieillesse plaf. s 4 005 × 0,069 = 276,35 €.\n\nCONTRÔLER. 5 000 − 1 037,18 = 3 962,82. APEC = 0. T2 = 995.\n\nERREURS. 6,90 % × 5 000. CET oublié. APEC ajoutée. Ratio magique « 79 % de 5 000 ».\n\nJUSTIFIER. « Votre brut 5 000 € dépasse le PMSS 4 005 € de janvier 2026. Tranche 2 = 995 €. CET salariale 7,00 €. Cotisations salariales 1 037,18 €. Net à payer 3 962,82 €. Vous n'êtes pas affilié APEC (non-cadre). »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Antoine Vidal — janvier 2026
Non-cadre, effectif 20, PAS 0, mutuelle non
AT/MP 1,50 % HYPOTHÈSE    RGDU non appliquée
BRUT                                              5 000,00 €
T1 / T2                                       4 005,00 / 995,00 €
CET s                                                 7,00 €
ARRCO_T2 s                                           85,97 €
FNAL < 50 (assiette T1)                               4,01 €  patronal
Salarial (moteur)                                 1 037,18 €
Net imposable                                     4 105,28 €
NAP = MNS                                         3 962,82 €
INTERDIT : vieillesse 6,90 % sur 5 000 € ; APEC
Source : reference-bulletins.json clé brut_5000_t2 / notes dossier-06`),
      ],
      erreurs:
        "HS 25 % sur Camille. FNAL 3,50 € au lieu de 17,50 €. Oubli APEC 0,84 €. Vieillesse 6,90 % sur 5 000 € d'Antoine. Confondre T2 et statut cadre. CET sur Camille (3 500 < 4 005).",
      particuliers:
        "Si Camille passait en effectif 20, le FNAL deviendrait 3,50 € patronal ; l'APEC 0,84 € et le NAP 2 769,75 € resteraient (FNAL non salarial). Si Antoine était cadre, l'APEC s'ajouterait : ce n'est pas le JSON. Vous ne « corrigez » pas le statut pour faire joli.",
      exercice:
        "Camille demande 8 HS à 25 %. Antoine demande « pourquoi une ligne CET alors que je ne suis pas cadre ». Répondez avec les chiffres moteur.",
      correction:
        "Camille : forfait jours, pas de réflexe L. 3121-36 à 25 %. APEC 0,84 € due. FNAL 17,50 € patronal (effectif 80). NAP 2 769,75 €. Escalade RH/accord si dépassement de forfait.\nAntoine : CET due parce que 5 000 > PMSS 4 005, pas parce que cadre. T2 995 €. CET s 7,00 €. Salarial 1 037,18 €. NAP 3 962,82 €. APEC = 0.",
    }),
    pack({
      title: "Dossiers 07 et 08 — Inès (entrée prorata) et Sofiane (temps partiel)",
      description:
        "Entrée le 13 janvier 2026 (2 100 × 19/31) et temps partiel 80 % au SMIC horaire 12,02 €.",
      minutes: 36,
      objectifs:
        "Vous proratisez Inès à 1 287,10 € sans recycler le NAP de Nadia, vous vérifiez la DPAE, et vous contrôlez Sofiane au SMIC horaire 12,02 € sans coller 1 823,03 €.",
      theorie:
        "Inès Palacio (dossier-07) entre le 13 janvier 2026, contrat 2 100 € mois plein, même emploi type que Nadia. Janvier a 31 jours. Présence calendaire du 13 au 31 inclus = 19 jours. Brut de période = 2 100 × 19/31 = 1 287,10 € (prorataCalendar, engine.mjs). Le JSON contient déjà ce brut : vous ne recalculez pas 2 100 € plein, vous ne « laissez » pas le mois par sympathie. Moteur sur 1 287,10 € : salarial 268,23 €, NI 1 055,54 €, NAP et MNS 1 018,87 €. Interdit : recycler 1 662,35 € (NAP de Nadia mois plein). Avant paie, DPAE (L. 1221-10) à vérifier : le moteur pédagogique calcule un bulletin ; le métier réel ne vire pas sans DPAE, contrat, NIR, RIB. Classification RH, CCN IDCC à lire, aucun minimum inventé.\n\nSofiane Benali (dossier-08) est à temps partiel 80 % (28 h). Brut SMIC partiel pédagogique : 12,02 × 121,336 ≈ 1 458,46 € (engine.euro ; 151,67 × 80 % = 121,336 h). Le contrôle prioritaire est le SMIC horaire 12,02 €, pas le mensuel 1 823,03 € qui suppose 151,67 h. Les heures complémentaires relèvent de L. 3123-9, ce ne sont pas des heures supplémentaires. Moteur computeBulletin(1 458,46) : salarial 303,93 €, patronal 599,23 €, NI 1 196,08 €, NAP et MNS 1 154,53 €. AT/MP 1,50 % HYPOTHÈSE. CCN IDCC à lire, aucun minimum inventé.\n\nLa méthode de prorata du moteur est calendaire. Ce n'est pas la seule méthode rencontrée en entreprise (ouvrés, ouvrables, trentième). Un junior n'impose pas le calendaire « parce que LOU le fait » : il applique la méthode du dossier, documentée. Ici, le dossier impose 19/31.\n\nPériode janvier 2026, RGDU non appliquée, effectif 20, non-cadres, PAS 0, mutuelle non. Simulateur LOU ≠ Sage, Silae, Cegid, ADP, SAP, Workday, PayFit, Nibelis.",
      methode:
        "Inès : (1) date d'entrée 13/01 ; (2) jours de présence 19 / 31 ; (3) brut 2 100 × 19/31 = 1 287,10 € ; (4) computeBulletin sur ce brut, pas sur 2 100 ; (5) case DPAE. Sofiane : (1) quotité 80 % ; (2) heures 121,336 ; (3) 12,02 × 121,336 = 1 458,46 € ; (4) refuser 1 823,03 € ; (5) complémentaires ≠ HS. Les deux : lister les manques avant de parler net.",
      noteText:
        "DPAE = obligation d'embauche (L. 1221-10), distincte de la DSN et du bulletin. AT/MP 1,50 % = HYPOTHÈSE. SMIC partiel = contrôle horaire 12,02 € jusqu'au 31/05/2026.",
      exemple:
        "TPE industrielle. Inès démarre le 13. Le gérant dit : « paie-la 2 100, elle a besoin ». Le junior qui obéit crée un trop-perçu et un usage. Sofiane, 80 %, apparaît à 1 823,03 € dans un copier-coller SMIC temps plein : sous-quotité fausse, charges fausses, SMIC horaire masqué. Les deux erreurs se voient avant le moteur, à la lecture du contrat.",
      extra: [
        h("Dossier-07 — Inès Palacio — parcours en huit actes"),
        t(
          "EXAMINER. Entrée 13/01/2026, contrat 2 100 € mois plein, brut JSON 1 287,10 €, non-cadre, effectif 20, PAS 0, mutuelle non.\n\nMANQUES P1 (bloquants métier) : DPAE, contrat signé, NIR, RIB, classification. P2 : CCN, mutuelle/dispense, visite médicale (ADP, pas la paie seule). Moteur pédagogique : calculable (brut déjà proratisé). Métier réel : pas de virement sans DPAE.\n\nRÈGLES. Prorata calendaire du moteur : 2 100 × 19/31. Barème 2026 sur 1 287,10 €. Ne pas inventer d'heures non travaillées. Ne pas copier Nadia.\n\nCALCULER. 2 100 × 19 / 31 = 1 287,10 €. Salarial 268,23 €. NI 1 055,54 €. NAP/MNS 1 018,87 €.\n\nCONTRÔLER. 1 287,10 − 268,23 = 1 018,87. NAP ≠ 1 662,35.\n\nERREURS. Mois plein 2 100. NAP Nadia. Antidater la DPAE. Inventer un minimum CCN.\n\nJUSTIFIER. « Vous êtes entrée le 13 janvier 2026. Sur 31 jours, 19 jours de présence. Brut de période 2 100 × 19/31 = 1 287,10 €. Cotisations salariales 268,23 €. Net à payer 1 018,87 €. Ce n'est pas le bulletin d'un mois complet à 2 100 €. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Inès Palacio — janvier 2026
Entrée 13/01/2026 — DPAE (L. 1221-10) à vérifier avant paie
Contrat mois plein 2 100,00 €    Présence 19/31
BRUT  2100 × 19/31                                    1 287,10 €
Salarial (moteur)                                       268,23 €
Net imposable                                         1 055,54 €
NAP = MNS                                             1 018,87 €
INTERDIT : NAP 1 662,35 € (Nadia, mois plein)
AT/MP 1,50 % HYPOTHÈSE
Source : notes dossier-07 / prorataCalendar(2100, 19, 31)`),
        h("Dossier-08 — Sofiane Benali — parcours en huit actes"),
        t(
          "EXAMINER. Temps partiel 80 % (28 h), brut JSON 1 458,46 €, non-cadre, effectif 20, PAS 0, mutuelle non.\n\nMANQUES. Avenant temps partiel, distribution des horaires, heures complémentaires visées (aucune dans le JSON), IDCC.\n\nRÈGLES. SMIC horaire 12,02 € (01/01/2026–31/05/2026). Mensuel 1 823,03 € inapplicable tel quel. Heures complémentaires : L. 3123-9, pas L. 3121-36. Brut pédagogique 12,02 × 121,336 ≈ 1 458,46 €.\n\nCALCULER. Salarial 303,93 €. Patronal 599,23 €. NI 1 196,08 €. NAP/MNS 1 154,53 €.\n\nCONTRÔLER. Taux horaire 1 458,46 / 121,336 ≈ 12,02 €. NAP ≠ 1 443,09 (Léa temps plein).\n\nERREURS. Coller 1 823,03 €. Traiter des complémentaires comme des HS 25 %. Recopier Léa ou Inès.\n\nJUSTIFIER. « Votre contrat est à 80 %. Le SMIC se contrôle à l'heure : 12,02 € en janvier 2026. Brut 1 458,46 €. Cotisations salariales 303,93 €. Net à payer 1 154,53 €. Les heures complémentaires, si elles sont visées, ne sont pas des heures supplémentaires. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Sofiane Benali — janvier 2026
Temps partiel 80 % (28 h) — 121,336 h mensualisées pédagogiques
SMIC horaire 12,02 € (pas le mensuel 1 823,03 €)
BRUT  12,02 × 121,336                                 1 458,46 €
Salarial (moteur)                                       303,93 €
Patronal (moteur)                                       599,23 €
Net imposable                                         1 196,08 €
NAP = MNS                                             1 154,53 €
Heures complémentaires : L. 3123-9 — aucune dans ce JSON
AT/MP 1,50 % HYPOTHÈSE
Source : notes dossier-08 / computeBulletin(1458.46)`),
      ],
      erreurs:
        "Payer Inès 2 100 €. Recyclage NAP 1 662,35 €. Oublier la DPAE. Coller 1 823,03 € à Sofiane. Transformer des heures complémentaires en HS. Antidater une DPAE « pour que le bulletin sorte ».",
      particuliers:
        "Entrée le 31 janvier : le salarié existe, le prorata n'est pas zéro. Sortie : autre module, autre brut. Temps partiel thérapeutique, forfait jours réduit : hors de ces deux JSON, à ne pas inventer. Méthode de prorata du dossier réel si elle n'est pas calendaire : documenter, ne pas imposer le simulateur.",
      exercice:
        "On vous dit : « Inès veut 2 100 €, Sofiane est au SMIC donc 1 823,03 €. » Produisez les deux bruts justes, les deux NAP moteur, et la pièce bloquante d'Inès.",
      correction:
        "Inès : brut 1 287,10 €, salarial 268,23 €, NAP 1 018,87 €. Pièce bloquante : DPAE (L. 1221-10). Sofiane : brut 1 458,46 € (12,02 × 121,336), salarial 303,93 €, NAP 1 154,53 €. 1 823,03 € est le SMIC temps plein 35 h, pas le sien.",
    }),
    pack({
      title: "Dossiers 09 et 10 — Thomas (prime soumise) et Sarah (mutuelle et PAS)",
      description:
        "Prime exceptionnelle 200 € dans un brut 2 700 € ; même brut 2 500 € qu'Hugo, plus mutuelle 20/40 et PAS 10 %.",
      minutes: 36,
      objectifs:
        "Vous refusez NAP 1 978,99 + 200 sur Thomas, vous calculez 2 137,31 €, et vous séparez sur Sarah salarial 541,01 €, NI 2 050,22 €, PAS 205,02 €, MNS 1 978,99 €, NAP 1 753,97 €.",
      theorie:
        "Thomas Leroy (dossier-09) a une base 2 500 € plus une prime exceptionnelle soumise 200 €. Le brut JSON est 2 700 € : la prime est déjà dans le brut, elle n'est pas un « plus » après cotisations. Qualification : CSS L. 242-1, pas d'exonération inventée (pas de prime de partage de la valeur auto-proclamée, pas de « geste » hors assiette). Moteur sur 2 700 € : salarial 562,69 €, patronal 1 109,32 €, NI 2 214,24 €, NAP et MNS 2 137,31 €. AT/MP hypo 40,50 €. Interdit : 1 978,99 + 200 = 2 178,99 €. Ajouter 200 € au net d'Hugo ignore que la prime entre dans toutes les assiettes (vieillesse, Arrco, CSG, AT/MP hypo). L'écart 2 178,99 − 2 137,31 = 41,68 € n'est pas un détail : c'est le social de 200 € de brut.\n\nSarah Cohen (dossier-10) a le même brut 2 500 € qu'Hugo, plus une mutuelle HYPOTHÈSE 20 € salarial / 40 € patronal, plus un PAS HYPOTHÈSE 10 %. Le salarial moteur 541,01 € inclut les 20 € de mutuelle (521,01 + 20). NI 2 050,22 € : identique à Hugo, la mutuelle salariale n'est pas déduite du net imposable dans le moteur (code MUT hors déductible fiscal pédagogique). PAS 205,02 € = 2 050,22 × 10 %. MNS 1 978,99 € : mutuelle salariale hors MNS 2026 ; part patronale 40 € hors MNS jusqu'au 31/12/2026 (BOSS-MNS). NAP 1 753,97 € = 1 978,99 − 20 − 205,02. Dispense mutuelle : pièces, pas un mail. Confidentialité du PAS.\n\nMême brut, deux NAP : Hugo 1 978,99 €, Sarah 1 753,97 €. L'écart 225,02 € = mutuelle 20 + PAS 205,02. Le MNS est identique (1 978,99 €). Un junior qui n'a qu'« un net » ne peut pas répondre à Sarah.\n\nPériode janvier 2026, RGDU non appliquée, AT/MP 1,50 % HYPOTHÈSE. Simulateur LOU ≠ Sage, Silae, Cegid, ADP, SAP, Workday, PayFit, Nibelis.",
      methode:
        "Thomas : qualifier la prime (soumise), l'intégrer au brut, lancer computeBulletin(2700), refuser toute addition au NAP d'Hugo. Sarah : partir du bulletin Hugo, ajouter MUT 20/40 hypo, calculer PAS sur NI, séparer les trois nets. Contrôle Sarah : 1 978,99 − 20 − 205,02 = 1 753,97 ; salarial 521,01 + 20 = 541,01 ; NI inchangé 2 050,22.",
      noteText:
        "Mutuelle 20/40 € = HYPOTHÈSE de contrat collectif fictif. PAS 10 % = HYPOTHÈSE de CRM, pas un barème national. AT/MP 1,50 % = HYPOTHÈSE. Jusqu'au 31/12/2026, ne pas intégrer d'office la mutuelle patronale dans le MNS (BOSS).",
      exemple:
        "PME 35 salariés. Le directeur dit : « ajoute 200 € net à Thomas, et aligne Sarah sur Hugo, c'est le même salaire. » Les deux consignes sont fausses. 200 € net exigeraient un brut supérieur (gross-up), jamais une exonération inventée. Aligner Sarah sur Hugo ignore mutuelle et PAS. Le junior reformule : prime soumise dans le brut, ou décision écrite d'un autre dispositif sourcé ; bulletin Sarah distinct, taux PAS confidentiel.",
      extra: [
        h("Dossier-09 — Thomas Leroy — parcours en huit actes"),
        t(
          "EXAMINER. Base 2 500 € + prime exceptionnelle 200 € déjà dans le brut 2 700 €. Non-cadre, effectif 20, PAS 0, mutuelle non. Note : DPAE entrée 20/01 à vérifier selon scénario atelier.\n\nMANQUES. Décision écrite de la prime (qui, pourquoi, soumise ou dispositif sourcé), pièces DPAE si entrée. Pas d'exonération sans texte.\n\nRÈGLES. CSS L. 242-1 : en l'absence de dispositif d'exonération applicable et documenté, la prime est assujettie. Brut de calcul = 2 700 €. Barème 2026 identique à Hugo, autre assiette.\n\nCALCULER. Salarial 562,69 €. Patronal 1 109,32 €. NI 2 214,24 €. NAP/MNS 2 137,31 €. AT/MP hypo 40,50 €.\n\nCONTRÔLER. 2 700 − 562,69 = 2 137,31. 1 978,99 + 200 = 2 178,99 → FAUX.\n\nERREURS. Addition au net. Inventer une PPV. Recopier Hugo.\n\nJUSTIFIER. « La prime de 200 € entre dans le brut 2 700 € et dans les cotisations. Net à payer 2 137,31 €, pas 1 978,99 + 200. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Thomas Leroy — janvier 2026
Base 2 500,00 + prime exceptionnelle soumise 200,00
BRUT                                              2 700,00 €
Salarial (moteur)                                   562,69 €
Patronal (moteur)                                 1 109,32 €
Net imposable                                     2 214,24 €
NAP = MNS                                         2 137,31 €
AT/MP 1,50 % HYPOTHÈSE                               40,50 €
INTERDIT : 1 978,99 + 200 = 2 178,99 €
Source : notes dossier-09 / computeBulletin(2700)`),
        h("Dossier-10 — Sarah Cohen — parcours en huit actes"),
        t(
          "EXAMINER. Brut 2 500 € (même Hugo), mutuelle hypo 20/40, PAS hypo 10 %, non-cadre, effectif 20.\n\nMANQUES. Adhésion mutuelle ou pièces de dispense (un mail ne suffit pas). CRM PAS réel (ici 10 % hypo). Confidentialité du taux.\n\nRÈGLES. Complémentaire santé : hypothèse de dossier, pas un barème national. MNS 2026 : mutuelle s hors MNS ; part p 40 € hors MNS jusqu'au 31/12/2026 (BOSS). PAS sur NI. NI = celui d'Hugo.\n\nCALCULER. Salarial 541,01 € (521,01 + 20). NI 2 050,22 €. PAS 205,02 €. MNS 1 978,99 €. NAP 1 753,97 € (1 978,99 − 20 − 205,02).\n\nCONTRÔLER. NAP ≠ 1 978,99. MNS = Hugo. NI = Hugo. 2 050,22 × 10 % = 205,02.\n\nERREURS. Un seul net. Dispense par mail. Joindre le bulletin d'Hugo. PAS sur le brut (250 €).\n\nJUSTIFIER. « Même brut 2 500 € qu'un bulletin sans mutuelle ni PAS. Mutuelle salariale 20 € (hypothèse). PAS 205,02 € sur net imposable 2 050,22 € (hypothèse 10 %). Montant net social 1 978,99 €. Net à payer 1 753,97 €. La part patronale 40 € n'entre pas dans le MNS jusqu'au 31/12/2026. »"
        ),
        code(`BULLETIN PÉDAGOGIQUE — Sarah Cohen — janvier 2026
Même brut qu'Hugo, plus mutuelle HYPOTHÈSE 20/40 et PAS HYPOTHÈSE 10 %
BRUT                                              2 500,00 €
Salarial social (comme Hugo)                        521,01 €
Mutuelle s HYPOTHÈSE                                 20,00 €
TOTAL salarial                                      541,01 €
Mutuelle p HYPOTHÈSE                                 40,00 €  (hors MNS jusqu'au 31/12/2026)
Net imposable                                     2 050,22 €
PAS 10 % HYPOTHÈSE                                  205,02 €
MNS                                               1 978,99 €
NAP  1978,99 − 20 − 205,02                        1 753,97 €
INTERDIT : recopier NAP Hugo 1 978,99 €
Source : notes dossier-10 / computeBulletin includeMutuelle + pasRate 0.1`),
      ],
      erreurs:
        "NAP Thomas = 1 978,99 + 200. Inventer une exonération. NAP Sarah = 1 978,99. PAS 10 % × 2 500. Intégrer 40 € patronaux au MNS 2026. Dispense mutuelle sans pièce. Divulguer le taux PAS.",
      particuliers:
        "Gross-up (« 200 € net ») : calcul inverse, décision écrite, jamais une ligne magique. Dispense mutuelle : cas légaux, pièces, dates. Évolution MNS 2027 (part patronale complémentaire santé) : projet à revérifier, non appliqué ici. DPAE Thomas si entrée 20/01 : flag métier, le brut 2 700 € ne la remplace pas.",
      exercice:
        "Écart NAP Hugo vs Thomas ? Écart NAP Hugo vs Sarah ? Quel net est identique entre Hugo et Sarah ?",
      correction:
        "Hugo 1 978,99 vs Thomas 2 137,31 : écart 158,32 €, pas +200, parce que 200 € sont soumis. Hugo 1 978,99 vs Sarah 1 753,97 : écart 225,02 € = 20 + 205,02. Identique : MNS 1 978,99 € et NI 2 050,22 €.",
    }),
    pack({
      title: "Contrôle croisé et anomalies volontaires à détecter",
      description:
        "Mini-clôture des dix dossiers : sentinelles, NAP/MNS, erreurs que quelqu'un calerait exprès ou par habitude.",
      minutes: 32,
      objectifs:
        "Vous contrôlez les dix bulletins les uns par les autres, vous nommez les anomalies volontaires (1 443,11 €, 1 978,99 + 200, recyclage de NAP), et vous tenez une file avant paiement.",
      theorie:
        "Le contrôle croisé n'est pas une relecture floue. C'est comparer des dossiers qui se ressemblent pour faire apparaître l'écart justifié et l'écart fautif. Hugo et Sarah partagent le brut 2 500 € : NI identique 2 050,22 €, MNS identique 1 978,99 €, NAP différent (1 978,99 vs 1 753,97). Nadia et Inès partagent le contrat 2 100 € : brut et NAP différents (2 100 / 1 662,35 vs 1 287,10 / 1 018,87). Léa et Sofiane partagent le SMIC comme plancher : l'une au mensuel 1 823,03 €, l'autre à l'horaire 12,02 €. Thomas et Hugo partagent 2 500 € de base : la prime 200 € change le brut, donc toutes les lignes, donc le NAP n'est pas une addition.\n\nLes anomalies volontaires à détecter sont celles qu'un junior calerait « pour que ça tombe juste » ou par analogie paresseuse. Caler Léa sur 1 443,11 € (communication Service-Public). Ajouter 200 au NAP d'Hugo pour Thomas (2 178,99 € au lieu de 2 137,31 €). Recopier 1 662,35 € sur Inès. Recopier 1 823,03 € sur Sofiane. Recopier 1 978,99 € sur Sarah. Appliquer 8 % au brut de Paul (248 € au lieu de 203,38 €). Saisir 8 HS à 25 % sur Camille. Appliquer 6,90 % à 5 000 € chez Antoine. Oublier APEC 0,84 € ou FNAL 17,50 €. Traiter l'AT/MP 1,50 % comme un taux France.\n\nUne mini-clôture pédagogique additionne des bulletins justes, dossier par dossier, sans lisser 0,01 € globalement. File d'anomalies : DPAE Inès (et Thomas selon scénario), forfait Camille, CET Antoine, confidentialité PAS Paul et Sarah, SMIC horaire Sofiane, prime Thomas soumise, écart communication Léa, pièces mutuelle Sarah.\n\nLe simulateur LOU reste déterministe et pédagogique. Il n'est pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis. Ce tableau n'est pas une DSN. AT/MP 1,50 % reste une HYPOTHÈSE sur les dix dossiers.",
      methode:
        "1) Tableau 10 lignes : brut, salarial, NI, PAS, NAP, MNS, flags. 2) Paires : Hugo/Sarah, Nadia/Inès, Léa/Sofiane, Hugo/Thomas, Camille/Antoine (APEC vs CET). 3) Sentinelles : maladie s = 0 ; T2 seulement Antoine ; APEC seulement Camille ; PAS seulement Paul et Sarah ; mutuelle seulement Sarah ; FNAL 17,50 € seulement Camille. 4) Toute case qui copie un NAP d'ancre sur un autre brut = anomalie. 5) Journal : 641 = somme des bruts JSON ; 421 = somme des NAP ; PAS Paul+Sarah ; mutuelle s 20 € Sarah. 6) Stop si une ancre (Léa, Nadia, Hugo, Paul, Camille, Antoine) est fausse.",
      noteText:
        "Anomalie volontaire = écart que l'on peut nommer avant le virement. AT/MP 1,50 % = HYPOTHÈSE sur tout le portefeuille pédagogique. Simulateur ≠ clone commercial, tableau ≠ DSN.",
      exemple:
        "Cabinet, 10 bulletins clients pédagogiques. Le collaborateur livre un classeur où Léa est à 1 443,11 € « comme sur internet », Thomas à 2 178,99 € « 200 de plus qu'Hugo », Sarah à 1 978,99 € « même salaire qu'Hugo ». Le responsable refuse la clôture en trois lignes. Ce n'est pas de la sévérité : c'est le métier. Chaque analogie avait l'air raisonnable ; chacune est fausse.",
      extra: [
        h("Mini-clôture — totaux moteur des dix dossiers"),
        code(`CONTRÔLE CROISÉ — janvier 2026 — AT/MP 1,50 % HYPOTHÈSE — RGDU non appliquée
LOU ≠ Sage / Silae / Cegid / ADP / SAP / Workday / PayFit / Nibelis

ID  Nom        Brut      Salarial    NI        PAS      NAP       MNS
01  Léa        1823,03    379,94   1495,04      0     1443,09   1443,09
02  Nadia      2100,00    437,65   1722,19      0     1662,35   1662,35
03  Hugo       2500,00    521,01   2050,22      0     1978,99   1978,99
04  Paul       3100,00    646,05   2542,28   203,38   2250,57   2453,95
05  Camille    3500,00    730,25   2869,47      0     2769,75   2769,75
06  Antoine    5000,00   1037,18   4105,28      0     3962,82   3962,82
07  Inès       1287,10    268,23   1055,54      0     1018,87   1018,87
08  Sofiane    1458,46    303,93   1196,08      0     1154,53   1154,53
09  Thomas     2700,00    562,69   2214,24      0     2137,31   2137,31
10  Sarah      2500,00    541,01   2050,22   205,02   1753,97   1978,99

SENTINELLES
- Maladie s = 0 partout (domicile fiscal FR)
- T2 + CET : Antoine seulement (T2 995, CET s 7,00)
- APEC s 0,84 / FNAL 17,50 : Camille seulement (cadre, effectif 80)
- PAS : Paul 203,38 et Sarah 205,02 seulement
- Mutuelle 20/40 : Sarah seulement
- MNS ≠ NAP : Paul et Sarah seulement

ANOMALIES VOLONTAIRES À COCHER (faux)
[ ] Léa calée à 1 443,11 €
[ ] Thomas = 1 978,99 + 200 = 2 178,99 €
[ ] Inès = NAP Nadia 1 662,35 €
[ ] Sofiane = SMIC mensuel 1 823,03 €
[ ] Sarah = NAP Hugo 1 978,99 €
[ ] Paul PAS = 8 % × 3 100 = 248,00 €
[ ] Camille : 8 HS à 25 %
[ ] Antoine : 6,90 % × 5 000
[ ] AT/MP 1,50 % présenté comme taux national
[ ] DPAE Inès ignorée parce que le JSON a déjà un brut

FILE MÉTIER : DPAE Inès ; forfait Camille ; CET Antoine ;
confidentialité PAS Paul/Sarah ; SMIC horaire Sofiane ;
prime Thomas soumise ; pièces mutuelle Sarah ; 1 443,11 Léa.`),
      ],
      erreurs:
        "Un seul NAP « moyen ». Lisser 0,01 € sur le portefeuille. Clôturer Inès sans flag DPAE. Dire que le tableau est une DSN. Présenter LOU comme un clone Silae. Laisser 1 443,11 € « pour la paix ».",
      particuliers:
        "Deux dossiers ont MNS ≠ NAP : Paul (PAS) et Sarah (PAS + mutuelle s sur le NAP seulement). Si un troisième apparaît, c'est une anomalie de construction. Headcount 80 sur Camille seul : le rappeler dans le journal, ne pas appliquer FNAL 17,50 € aux neuf autres.",
      exercice:
        "Parmi les dix anomalies de la checklist, choisissez-en trois, donnez le chiffre faux, le chiffre moteur, et la règle violée.",
      correction:
        "Exemple attendu : (1) Léa 1 443,11 € faux / 1 443,09 € moteur / on ne cale pas un bulletin sur un chiffre de communication. (2) Thomas 2 178,99 € faux / 2 137,31 € moteur / prime soumise, pas une addition au net. (3) Sarah 1 978,99 € NAP faux / 1 753,97 € moteur / mutuelle 20 + PAS 205,02. Toute autre anomalie de la liste, chiffrée de même, convient.",
    }),
    pack({
      title: "Justifier par écrit un bulletin (modèle)",
      description:
        "Gabarit de réponse salarié / note N+1 : brut, lignes, sources, trois nets, suite, vouvoiement.",
      minutes: 30,
      objectifs:
        "Vous rédigez une justification de bulletin utilisable : structure fixe, totaux moteur, hypothèses étiquetées, sans jargon vide et sans données d'un tiers.",
      theorie:
        "Justifier un bulletin, c'est relier chaque total à une source et à une décision, par écrit, de façon opposable. Le salarié n'a pas à entendre « c'est le logiciel ». Le N+1 n'a pas à entendre « j'ai cliqué ». Le simulateur LOU n'est pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis : vous ne joignez pas une capture d'éditeur, vous joignez des lignes nommées, des taux sourcés, des hypothèses étiquetées.\n\nLa structure minimale, toujours la même, est : (1) période et identité du bulletin ; (2) brut et sa composition (base, prime, prorata, quotité) ; (3) cotisations salariales totales et une ou deux lignes qui expliquent l'écart discuté ; (4) les trois nets — imposable, montant net social, net à payer — même lorsqu'ils sont égaux, pour habituer le réflexe ; (5) PAS et mutuelle s'ils existent, avec le mot HYPOTHÈSE lorsqu'ils ne sont pas un taux national ; (6) AT/MP 1,50 % étiqueté HYPOTHÈSE ; (7) ce que vous ne ferez pas (caler 1 443,11 €, ajouter 200 au net, verser un mois plein à une entrée) ; (8) la suite (pièce manquante, canal DGFiP, escalade RH, DPAE).\n\nLe vouvoiement est professionnel, pas froid. Vous ne comparez pas le salarié à un collègue. Vous ne divulguez pas un taux PAS. Vous ne promettez pas un titre RNCP, un salaire de 36 000 €, ni une « maîtrise Silae ». Vous datez la règle (janvier 2026). Un chiffre hors période est un chiffre mort.\n\nCinq situations couvrent l'essentiel du portefeuille : SMIC et 1 443,09 € (Léa) ; PAS et MNS ≠ NAP (Paul) ; forfait jours (Camille) ; prorata d'entrée (Inès) ; mutuelle + PAS (Sarah). Le modèle ci-dessous s'adapte aux cinq autres dossiers sans changer de colonnes.\n\nLimite junior : un contentieux, une retenue, un trop-perçu non qualifié, une dispense mutuelle douteuse passent par le responsable. Le simulateur entraîne à écrire juste, pas à plaider.",
      methode:
        "1) Ouvrir le JSON et les totaux moteur. 2) Remplir le gabarit sans phrase creuse. 3) Relire : chaque nombre a une source ; chaque hypo est étiquetée ; les trois nets sont nommés ; aucune donnée d'un tiers. 4) Version salarié (cinq à dix lignes) et version N+1 (mêmes chiffres, plus la file : DPAE, CCN non lue, confidentialité). 5) Ne pas envoyer en réel un texte d'exercice sans revue si le sujet est fiscal, disciplinaire ou médical.",
      noteText:
        "Modèle pédagogique. Pas un clone d'éditeur. AT/MP, mutuelle, PAS : HYPOTHÈSE lorsqu'ils ne sont pas des taux nationaux. Confidentialité : jamais le bulletin d'Hugo joint à Sarah « pour comparer ».",
      exemple:
        "Sarah écrit : « Mon collègue Hugo a le même brut et touche plus ; votre mutuelle me pompe ; le MNS n'est pas ce que je reçois. » Sans modèle, un junior répond en trois lignes défensives. Avec le modèle : il sépare NI 2 050,22 €, MNS 1 978,99 €, NAP 1 753,97 €, mutuelle 20 € hypo, PAS 205,02 € hypo, part patronale 40 € hors MNS 2026, et il refuse de parler d'Hugo.",
      extra: [
        h("Modèle — justification écrite d'un bulletin"),
        code(`JUSTIFICATION DE BULLETIN — modèle pédagogique (vouvoiement)
À adapter, pas à copier-coller vers un salarié réel sans revue.

Période d'emploi : janvier 2026 (rémunérations versées au titre de janvier 2026)
Métropole, régime général. RGDU non appliquée (maladie p 13 %, AF 5,25 %).
Simulateur LOU : outil pédagogique, pas Sage / Silae / Cegid / ADP / SAP / Workday / PayFit / Nibelis.

Salarié : [Nom]     Dossier : [01 à 10]
Contrat / temps : [CDI 35 h / forfait jours / 80 % / entrée jj/mm]
Brut de période : [montant] €
  dont base : [...] €
  dont prime / prorata / quotité : [...] €  (qualifier : soumise, calendaire, SMIC horaire)

Cotisations salariales (moteur) : [S] €
Ligne discutée : [libellé, assiette, taux, source]
AT/MP 1,50 % : HYPOTHÈSE de dossier, pas un taux national Carsat.

Net imposable : [NI] €
Montant net social (BOSS-MNS, pédagogique 2026) : [MNS] €
PAS : [0 ou montant] € — taux [x %] = HYPOTHÈSE de CRM pédagogique / ou taux transmis
Mutuelle s/p : [0 ou 20/40] € = HYPOTHÈSE  (part p hors MNS jusqu'au 31/12/2026)
Net à payer : [NAP] €

Ce que ce bulletin n'est pas :
- un net de communication (1 443,11 €)
- une addition au net d'un autre dossier (1 978,99 + 200)
- une certification éditeur ou un titre RNCP

Suite : [DPAE / pièce mutuelle / canal DGFiP / escalade RH / néant]
Pièces jointes : bulletin du salarié demandeur uniquement.`),
        h("Cinq justifications types du portefeuille"),
        code(`1) Léa — 1 443,09 € vs 1 443,11 €
Brut SMIC 1 823,03 €, salarial 379,94 €, NAP/MNS 1 443,09 €.
Le 1 443,11 € est un chiffre de communication Service-Public, pas la formule du bulletin.

2) Paul — « on m'a trop cotisé »
Salarial 646,05 € (social). PAS 203,38 € sur NI 2 542,28 € (hypo 8 %).
MNS 2 453,95 €. NAP 2 250,57 €. Taux : DGFiP, pas la paie.

3) Camille — « je veux mes 8 HS »
Forfait jours : pas de 25 % L. 3121-36 au réflexe. APEC s 0,84 €.
FNAL 17,50 € patronal (effectif 80). NAP 2 769,75 €. Escalade RH/accord.

4) Inès — « je veux 2 100 € »
Entrée 13/01, 19/31, brut 1 287,10 €, salarial 268,23 €, NAP 1 018,87 €.
DPAE à confirmer. Pas le bulletin Nadia (1 662,35 €).

5) Sarah — « mon MNS n'est pas ce que je touche »
MNS 1 978,99 € (social, comme Hugo). Mutuelle s 20 € hypo + PAS 205,02 € hypo.
NAP 1 753,97 €. Part p 40 € hors MNS jusqu'au 31/12/2026. Confidentialité PAS.
Salarial 541,01 € (dont 20 € mutuelle). NI 2 050,22 €.`),
      ],
      erreurs:
        "Répondre « c'est le logiciel ». Joindre le bulletin d'un collègue. Promettre de retirer le PAS. Payer 8 HS de Camille. Verser 2 100 € à Inès. Caler 0,02 € sur Léa. Oublier d'étiqueter AT/MP, mutuelle, PAS. Signer une maîtrise Sage.",
      particuliers:
        "Mail salarié : cinq à dix lignes, un seul destinataire, pas de copie large. Note N+1 : mêmes chiffres + file (DPAE, CCN non lue, dispense). Contentieux : pack responsable, le modèle n'est pas une écriture d'avocat. Open space : pas de taux PAS à voix haute.",
      exercice:
        "Rédigez la justification complète de Sarah (modèle rempli) et, en cinq lignes, celle de Thomas refusant 1 978,99 + 200. Vouvoiement.",
      correction:
        "Sarah : période janvier 2026, brut 2 500,00 €, salarial 541,01 € dont mutuelle HYPOTHÈSE 20,00 €, NI 2 050,22 €, PAS HYPOTHÈSE 10 % = 205,02 €, MNS 1 978,99 €, NAP 1 753,97 €, mutuelle p 40 € hors MNS jusqu'au 31/12/2026, AT/MP 1,50 % HYPOTHÈSE. Suite : pièces de dispense si alléguées ; canal DGFiP pour le taux. Pas de comparaison avec Hugo.\nThomas : brut 2 700,00 € (2 500 + prime 200 soumise, CSS L. 242-1, pas d'exonération inventée), salarial 562,69 €, NAP/MNS 2 137,31 €. 1 978,99 + 200 n'est pas un bulletin. La prime entre dans les assiettes.",
    }),
    quizLesson({
      title: "Quiz — Simulateur pédagogique, 10 dossiers de janvier 2026",
      description:
        "Méthode, limites face aux éditeurs, totaux moteur des dix dossiers, anomalies à refuser.",
      passing_score: 70,
      questions: [
        q({
          question:
            "Le simulateur pédagogique LOU Academy est :",
          options: [
            "A. Un espace d'entraînement déterministe (engine.mjs / dossiers JSON), pas Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ni Nibelis, et pas une certification éditeur",
            "B. Une certification officielle Silae",
            "C. Un titre RNCP de gestionnaire de paie",
            "D. Un dépôt DSN sur net-entreprises",
          ],
          correct: 0,
          explanation:
            "Le simulateur calcule des bulletins pédagogiques janvier 2026. Il n'est pas un clone commercial. L'attestation LOU Academy n'est ni un titre RNCP, ni un diplôme d'État, ni une certification Sage/Silae/Cegid/ADP/SAP/Workday/PayFit/Nibelis.",
        }),
        q({
          question:
            "Net à payer de Léa Morel (dossier-01, SMIC 1 823,03 €, janvier 2026) :",
          options: [
            "A. 1 443,09 €",
            "B. 1 443,11 €",
            "C. 1 495,04 €",
            "D. 1 823,03 €",
          ],
          correct: 0,
          explanation:
            "Moteur / notes dossier-01 : salarial 379,94 €, NAP et MNS 1 443,09 €. 1 443,11 € est un chiffre de communication Service-Public, pas la formule du bulletin. 1 495,04 € est le net imposable.",
        }),
        q({
          question:
            "Nadia Khelifi (dossier-02, brut 2 100 €) : salarial et net à payer moteur ?",
          options: [
            "A. 437,65 € et 1 662,35 €",
            "B. 521,01 € et 1 978,99 €",
            "C. 379,94 € et 1 443,09 €",
            "D. 22 % du brut, soit environ 1 638 €",
          ],
          correct: 0,
          explanation:
            "Notes dossier-02 / reference-bulletins.json clé brut_2100. 521,01 € / 1 978,99 € sont Hugo. 379,94 € / 1 443,09 € sont Léa. « 22 % » n'est pas une formule de bulletin.",
        }),
        q({
          question:
            "Hugo Bertin (dossier-03, brut 2 500 €) : salarial, net imposable, NAP ?",
          options: [
            "A. 521,01 € ; 2 050,22 € ; 1 978,99 €",
            "B. 541,01 € ; 2 050,22 € ; 1 753,97 €",
            "C. 646,05 € ; 2 542,28 € ; 2 250,57 €",
            "D. 521,01 € ; 1 978,99 € ; 2 050,22 €",
          ],
          correct: 0,
          explanation:
            "Notes dossier-03 : CSG base 2 456,25 €, salarial 521,01 €, patronal 1 027,15 €, NI 2 050,22 €, NAP/MNS 1 978,99 €. 541,01 / 1 753,97 sont Sarah (mutuelle + PAS). 646,05 / 2 250,57 sont Paul.",
        }),
        q({
          question:
            "Paul Mercier (dossier-04, brut 3 100 €, PAS 8 % hypo) : PAS, NAP et MNS ?",
          options: [
            "A. PAS 203,38 € ; NAP 2 250,57 € ; MNS 2 453,95 €",
            "B. PAS 248,00 € (8 % du brut) ; NAP 2 250,57 € ; MNS 2 250,57 €",
            "C. PAS 203,38 € ; NAP 2 453,95 € ; MNS 2 250,57 €",
            "D. PAS 0 € ; NAP 2 453,95 € ; MNS 2 453,95 €",
          ],
          correct: 0,
          explanation:
            "PAS = 8 % × NI 2 542,28 € = 203,38 €, pas 8 % × 3 100. Net avant impôt = MNS = 2 453,95 €. NAP = 2 250,57 €. Le taux 8 % est une HYPOTHÈSE de CRM pédagogique, confidentiel.",
        }),
        q({
          question:
            "Camille Roux (dossier-05, cadre 3 500 €, effectif 80, forfait jours) :",
          options: [
            "A. FNAL 17,50 €, APEC salarial 0,84 €, salarial 730,25 €, NAP 2 769,75 € — pas de réflexe HS 25 %",
            "B. FNAL 3,50 € (effectif < 50) et 8 HS à 25 %",
            "C. Pas d'APEC parce que le forfait jours remplace la retraite complémentaire",
            "D. T2 et CET, comme tout cadre",
          ],
          correct: 0,
          explanation:
            "Notes dossier-05 / référence cadre_3500_effectif_80. Effectif 80 → FNAL 0,50 % = 17,50 €. APEC s 0,84 €. Forfait jours : pas de L. 3121-36 au réflexe 25 %. 3 500 < 4 005 : pas de T2 ni CET. T2 n'est pas le statut cadre.",
        }),
        q({
          question:
            "Antoine Vidal (dossier-06, brut 5 000 €, non-cadre) : T1, T2, CET salarial, salarial, NAP ?",
          options: [
            "A. T1 4 005 € ; T2 995 € ; CET s 7,00 € ; salarial 1 037,18 € ; NAP 3 962,82 €",
            "B. T1 5 000 € ; T2 0 € ; CET 0 € (non-cadre) ; salarial 1 037,18 €",
            "C. Vieillesse plafonnée 6,90 % × 5 000 € = 345,00 €",
            "D. APEC 0,84 € parce que 5 000 € « ça fait cadre »",
          ],
          correct: 0,
          explanation:
            "Notes dossier-06 : T1 4 005, T2 995, CET s 7,00, ARRCO_T2 s 85,97, salarial 1 037,18, NAP/MNS 3 962,82. CET due parce que brut > PMSS, pas parce que cadre. Pas d'APEC. Vieillesse 6,90 % sur T1 seulement (276,35 €).",
        }),
        q({
          question:
            "Inès Palacio (dossier-07) et Sofiane Benali (dossier-08) : quels bruts et quels NAP, et quelle obligation d'embauche ?",
          options: [
            "A. Inès 1 287,10 € (2 100 × 19/31) NAP 1 018,87 € + DPAE (L. 1221-10) ; Sofiane 1 458,46 € NAP 1 154,53 €, SMIC horaire 12,02 €",
            "B. Inès 2 100 € NAP 1 662,35 € ; Sofiane 1 823,03 € NAP 1 443,09 €",
            "C. Inès temps partiel 80 % ; Sofiane entrée le 13/01",
            "D. Les deux au SMIC mensuel 1 823,03 €, DSN = DPAE",
          ],
          correct: 0,
          explanation:
            "Inès : entrée 13/01, prorata calendaire 19/31, salarial 268,23 €, NAP 1 018,87 € ; DPAE à vérifier, distincte de la DSN. Sofiane : 80 %, 12,02 × 121,336 ≈ 1 458,46 €, salarial 303,93 €, NAP 1 154,53 €. Heures complémentaires ≠ HS. Interdit de recycler Nadia ou Léa.",
        }),
        q({
          question:
            "Thomas Leroy (dossier-09, brut 2 700 € = 2 500 + prime 200 soumise) : net à payer ?",
          options: [
            "A. 2 137,31 € — jamais 1 978,99 + 200",
            "B. 2 178,99 € (1 978,99 + 200)",
            "C. 1 978,99 € (la prime est nette)",
            "D. 2 369,75 € (comme un cadre)",
          ],
          correct: 0,
          explanation:
            "Moteur 2 700 € : salarial 562,69 €, patronal 1 109,32 €, NI 2 214,24 €, NAP/MNS 2 137,31 €. CSS L. 242-1 : pas d'exonération inventée. Ajouter 200 € au NAP d'Hugo ignore l'assiette sociale de la prime.",
        }),
        q({
          question:
            "Sarah Cohen (dossier-10, brut 2 500 €, mutuelle hypo 20/40, PAS hypo 10 %) :",
          options: [
            "A. Salarial 541,01 € (dont 20 € mutuelle) ; NI 2 050,22 € ; PAS 205,02 € ; MNS 1 978,99 € ; NAP 1 753,97 €",
            "B. NAP = MNS = 1 978,99 € comme Hugo",
            "C. PAS = 10 % × 2 500 = 250,00 €",
            "D. Part patronale 40 € intégrée au MNS dès janvier 2026",
          ],
          correct: 0,
          explanation:
            "Notes dossier-10 : 541,01 = 521,01 + 20 ; NI identique à Hugo ; PAS 2 050,22 × 10 % = 205,02 ; MNS 1 978,99 (mutuelle s hors MNS 2026, part p 40 € hors MNS jusqu'au 31/12/2026 BOSS) ; NAP 1 978,99 − 20 − 205,02 = 1 753,97. Dispense : pièces, pas un mail. Confidentialité du PAS.",
        }),
      ],
    }),
  ],
};
