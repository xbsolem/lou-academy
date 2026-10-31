import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 16,
  title: "Sortie du salarié et solde de tout compte",
  description:
    "Traiter une rupture jusqu'au solde : motifs, préavis légal, indemnités du Code du travail, CP, prorata du dernier mois, documents, DSN de fin et contrôles.",
  lessons: [
    pack({
      title: "Typologie des ruptures : ce que la paie doit savoir avant de calculer",
      description:
        "Qualifier le motif de sortie : démission, licenciement, rupture conventionnelle, fin de CDD, retraite, essai — et refuser de calculer dans le flou.",
      minutes: 20,
      objectifs:
        "Vous savez nommer les régimes de rupture, identifier ce qui change dans le solde, et lister les pièces que la paie exige avant toute saisie d'indemnité.",
      theorie:
        "Le solde de tout compte n'est pas « le dernier bulletin plus une ligne ». C'est la liquidation des droits nés du contrat et de sa rupture. Le motif commande des indemnités différentes, un préavis différent, des documents différents, parfois un régime social et fiscal différent. Un junior qui saisit « prime de départ 3 000 € » sans qualifier le motif prépare un contentieux et une DSN fausse.\n\nLa démission est une rupture à l'initiative du salarié. Elle ouvre en principe le salaire jusqu'à la fin du préavis travaillé ou l'indemnité compensatrice de préavis si le préavis est dû et non effectué selon les règles applicables, les congés payés restants, les éléments dus. Elle n'ouvre pas l'indemnité légale de licenciement.\n\nLe licenciement est une rupture à l'initiative de l'employeur. Hors faute grave ou lourde, un préavis peut être dû (L. 1234-1, legal-sources). Une indemnité légale de licenciement peut être due (L. 1234-9 : CDI, ancienneté d'au moins 8 mois ininterrompus, sauf faute grave ; modalités réglementaires). La faute grave ou lourde change le préavis et souvent l'indemnité : vous ne les qualifiez pas seul.\n\nLa rupture conventionnelle du CDI (L. 1237-11 et suivants, legal-sources) est un régime propre : consentement, entretien(s), convention, homologation (ou autorisation pour les salariés protégés). L'indemnité spécifique de rupture conventionnelle ne peut être inférieure à l'indemnité légale de licenciement. Un junior ne « convertit » pas un licenciement en rupture conventionnelle pour faire plaisir, et ne calcule pas un multiple conventionnel inventé.\n\nLa fin de CDD à terme : salaire, CP, et, lorsque les conditions du Code du travail sont réunies, une indemnité de fin de contrat destinée à compenser la précarité (principe L. 1243-8 : 10 % de la rémunération totale brute versée, sauf cas d'exclusion prévus notamment à L. 1243-10 — relire le texte, ne pas inventer une liste de mémoire). Un CDD qui se poursuit en CDI n'ouvre pas cette indemnité de précarité.\n\nLa retraite (départ volontaire ou mise à la retraite) a des indemnités et des procédures distinctes. Vous ne recyclez pas un barème de licenciement sans consigne et sans texte.\n\nLa rupture pendant la période d'essai n'est pas un licenciement. Le préavis d'essai n'est pas celui de L. 1234-1. Vous lisez le contrat et les dispositions du Code du travail relatives à l'essai. Vous n'appliquez pas deux mois « comme un CDI confirmé ».\n\nDans tous les cas : date de notification, date de fin du contrat, préavis effectué ou non, CP, primes, acomptes, trop-perçus, avantages en nature jusqu'au dernier jour, portabilité éventuelle des couvertures. Sans ces faits, pas de solde.",
      methode:
        "Avant toute rubrique : 1) pièce de rupture (lettre, convention homologuée, terme du CDD) ; 2) motif retenu par RH, pas par le manager oral ; 3) date de fin de contrat ; 4) préavis : durée, exécuté, dispensé, non dû ; 5) compteurs CP et repos ; 6) éléments variables du dernier mois ; 7) qui valide les indemnités. Vous saisissez ensuite, vous ne qualifiez pas le droit.",
      noteText:
        "Limite d'autonomie : un junior ne choisit pas entre licenciement et rupture conventionnelle, ne qualifie pas la faute grave, ne fixe pas une indemnité transactionnelle. Il calcule ce qui est écrit, sourcé, validé. L. 1237-11 : régime propre, homologation.",
      exemple:
        "PME 40 personnes. Un directeur dit : « On se sépare de Karim, mets-lui deux mois et l'indemnité, comme une rupture conv. » Aucune convention, aucune homologation. Lina refuse la rubrique « indemnité spécifique de rupture conventionnelle ». Elle demande à RH le véritable motif et les pièces. Un solde anticipé sur un mot du directeur est un faux.",
      extra: [
        code(`MOTIF → CE QUE LA PAIE NE CONFOND PAS

Démission              Salaire, préavis selon CCN/contrat, CP, pas d'indemnité légale de licenciement
Licenciement           Préavis L. 1234-1 (planchers), indemnité L. 1234-9 / R. 1234-2 si conditions, CP
Faute grave / lourde   Qualification RH/juriste ; préavis et indemnité légale généralement non dus
Rupture conv. CDI      L. 1237-11 s. ; indemnité spécifique ≥ légale ; homologation
Fin CDD                Salaire, CP, indemnité de fin 10 % si due (L. 1243-8 / exclusions L. 1243-10)
Essai                  Pas L. 1234-1 ; délai de prévenance d'essai à lire
Retraite               Régime propre ; ne pas recycler un barème sans texte

Sans pièce de rupture = pas d'indemnité saisie.`),
      ],
      erreurs:
        "Saisir une « prime de rupture » générique. Traiter une rupture conventionnelle non homologuée. Oublier que la démission n'ouvre pas L. 1234-9. Appliquer un licenciement à un CDD arrivé à terme. Clôturer le dossier le jour de l'annonce, pas le jour de fin de contrat.",
      particuliers:
        "Salarié protégé : autorisation, pas seulement homologation. Transaction : texte distinct, validation juriste. Décès : règles de paiement aux ayants droit, hors improvisation. Abandon de poste / présomption de démission : suivre la procédure RH, ne pas requalifier seul.",
      exercice:
        "Classez et dites la première question paie : (1) mail « je m'en vais vendredi » ; (2) CDD qui s'arrête le 31 sans avenant ; (3) convention de rupture signée, homologation non reçue ; (4) lettre de licenciement pour motif personnel, ancienneté 3 ans.",
      correction:
        "1. Démission ? Date, préavis CCN/contrat, pièce écrite. 2. Fin de CDD : indemnité de fin si due, CP, documents. 3. Pas d'indemnité spécifique tant que l'homologation n'est pas obtenue selon process ; date de rupture liée à l'homologation. 4. Licenciement : préavis L. 1234-1 (au moins 2 mois d'ancienneté ≥ 2 ans, sauf plus favorable), indemnité légale si 8 mois et pas faute grave, CP. Pourquoi : le motif précède le chiffre.",
    }),
    pack({
      title: "Préavis : planchers de L. 1234-1, CCN plus favorable, indemnité compensatrice",
      description:
        "Appliquer les durées légales de préavis de licenciement sans inventer des mois, et distinguer préavis travaillé et indemnité compensatrice.",
      minutes: 22,
      objectifs:
        "Vous savez restituer les planchers de L. 1234-1, chercher une durée plus favorable, et calculer une indemnité compensatrice de préavis lorsque le préavis n'est pas exécuté.",
      theorie:
        "Lorsque le licenciement n'est pas motivé par une faute grave, le salarié a droit à un préavis dont L. 1234-1 (legal-sources) fixe des planchers selon l'ancienneté de services continus chez le même employeur. Inférieure à six mois : la durée est déterminée par la loi, la convention ou l'accord collectif ou, à défaut, par les usages de la localité et de la profession — vous n'inventez pas « deux semaines ». Comprise entre six mois et moins de deux ans : un mois. D'au moins deux ans : deux mois. Les 2° et 3° ne s'appliquent que si la loi, la CCN, l'accord, le contrat ou les usages ne prévoient pas un préavis ou une ancienneté plus favorables au salarié.\n\nCes durées sont des planchers de licenciement. Elles ne sont pas le préavis de démission (souvent conventionnel ou contractuel : lisez la CCN, ne récitez pas « un mois / trois mois cadres » comme une loi). Elles ne sont pas le délai de prévenance de l'essai.\n\nLe préavis peut être travaillé : le contrat continue, le salaire est dû, les cotisations aussi, les CP continuent de s'acquérir selon les règles. Il peut être dispensé par l'employeur : le contrat s'achève à la date prévue de fin de préavis ou selon les règles applicables à la dispense ; une indemnité compensatrice de préavis est due, d'un montant égal au salaire qu'aurait perçu le salarié (L. 1234-5 — relire le texte pour les modalités). Cette indemnité a en principe le caractère de salaire : elle entre dans le brut du solde, elle supporte cotisations selon le régime social applicable. Vous ne la versez pas « hors bulletin pour aller plus vite ».\n\nL'ancienneté s'apprécie selon les règles du texte (notification, services continus). Un junior ne « saute » pas de six mois à deux mois parce que le salarié est cadre. Le statut cadre n'est pas dans L. 1234-1. Si la CCN cadres prévoit trois mois, c'est une disposition conventionnelle plus favorable : on la lit, on ne l'invente pas.\n\nEn paie, deux dates doivent être justes : dernier jour travaillé (présence, avantages, tickets selon règles) et date de fin de contrat (préavis, droits, DSN). Elles ne coïncident pas toujours.",
      methode:
        "1) Motif (licenciement hors faute grave ?). 2) Ancienneté à la date prévue par les textes / RH. 3) Plancher L. 1234-1. 4) Lire CCN, contrat, usage — retenir le plus favorable au salarié pour le licenciement. 5) Préavis travaillé, dispensé, ou non dû. 6) Si dispensé : indemnité compensatrice = rémunération qui aurait été perçue pendant le préavis, selon éléments habituels (consigne responsable pour les variables). 7) Saisir dates de présence et date de fin distinctement.",
      extra: [
        code(`PRÉAVIS DE LICENCIEMENT — PLANCHERS L. 1234-1
(hors faute grave ; plus favorable CCN/contrat/usage prime)

Ancienneté services continus     Plancher légal
< 6 mois                         Loi / CCN / accord / à défaut usages — NE PAS INVENTER
6 mois ≤ ancienneté < 2 ans      1 mois
≥ 2 ans                          2 mois

Ce n'est PAS :
- le préavis de démission (CCN / contrat)
- le délai de prévenance d'essai
- « 3 mois cadres » comme règle nationale

Indemnité compensatrice de préavis (si due, préavis non exécuté)
= salaire qui aurait été perçu pendant le préavis (caractère salarial, bulletin)
Hypothèse pédagogique : 2 500 € / mois, préavis 2 mois dispensé
→ 2 × 2 500 = 5 000 € brut d'ICP (hors autres éléments à intégrer selon dossier)`),
      ],
      exemple:
        "Licenciement, ancienneté 18 mois, CCN du dossier muette dans l'extrait fourni au junior, contrat silencieux. Plancher L. 1234-1 2° : un mois. Le manager dit « on lui met trois mois, c'est un cadre ». Le contrat ne dit pas cadre. Lina applique un mois sauf instruction écrite RH s'appuyant sur un texte. Elle n'invente pas trois mois « pour la paix sociale » sans décision d'employeur tracée (qui serait alors une politique plus favorable, pas un plancher légal).",
      erreurs:
        "Appliquer L. 1234-1 à une démission. Inventer 15 jours sous six mois. Confondre dernier jour travaillé et fin de contrat. Verser le préavis hors cotisations. Oublier que le préavis travaillé continue d'ouvrir des CP.",
      particuliers:
        "Inaptitude, procédures particulières : des textes spécifiques peuvent aménager le préavis ; le junior ne mélange pas avec L. 1234-1 sans consigne. Préavis non effectué du fait du salarié : analyse RH, pas une retenue improvisée. Maladie pendant préavis : maintien et dates selon règles, escalade.",
      exercice:
        "Licenciement hors faute grave, salaire de référence pédagogique 2 500 € brut mensuel. (A) ancienneté 4 mois, CCN et contrat silencieux, pas d'usage connu. (B) ancienneté 11 mois. (C) ancienneté 5 ans, dispense totale de préavis. Que posez-vous comme durée minimale, et pour C le brut d'indemnité compensatrice pédagogique ?",
      correction:
        "A. Pas de durée inventée : vous cherchez loi spéciale / CCN / usage ; à défaut vous n'écrivez pas « 15 jours » dans le solde. Escalade RH. B. Plancher 1 mois (L. 1234-1 2°), sauf plus favorable. C. Plancher 2 mois (L. 1234-1 3°) ; dispense : indemnité compensatrice pédagogique 2 × 2 500 = 5 000 € brut, à cotiser comme du salaire selon le régime, plus les autres éléments du solde. Pourquoi : les mois de C sont dans le texte ; A n'y est pas chiffré.",
    }),
    pack({
      title: "Indemnité légale de licenciement : principes L. 1234-9 et formule R. 1234-2",
      description:
        "Enseigner le droit à l'indemnité, le salaire de référence réglementaire et le 1/4 puis 1/3 de mois, sans inventer un multiple CCN.",
      minutes: 26,
      objectifs:
        "Vous savez quand l'indemnité légale est due, comment se calcule le minimum réglementaire, et vous savez que la CCN peut être plus favorable sans que vous en inventiez le taux.",
      theorie:
        "L'article L. 1234-9 du Code du travail pose le principe : le salarié en CDI, licencié, qui compte 8 mois d'ancienneté ininterrompus au service du même employeur, a droit, sauf faute grave, à une indemnité de licenciement. Les modalités (taux, salaire de référence) sont renvoyées au réglementaire. Vous citez L. 1234-9 pour le droit, et vous lisez R. 1234-1 et suivants pour le calcul. Vous ne inventez pas « un mois par année » ni « 1/5e ».\n\nL'article R. 1234-2, dans sa rédaction issue du décret du 25 septembre 2017, applicable aux licenciements prononcés postérieurement, fixe le minimum : un quart de mois de salaire par année d'ancienneté pour les années jusqu'à dix ans ; un tiers de mois de salaire par année d'ancienneté pour les années à partir de dix ans. Les années incomplètes se comptent au prorata (R. 1234-1 s. — relire le détail des mois). Ce minimum n'est pas un plafond : la CCN, le contrat, un usage plus favorable s'appliquent s'ils existent. Un junior n'invente pas « 1/2 mois cadres » : il lit la CCN ou il demande.\n\nLe salaire de référence est réglementé (R. 1234-4 notamment) : on retient en pratique la formule la plus favorable entre la moyenne des douze derniers mois précédant le licenciement et le tiers des trois derniers mois, en retraitant les primes exceptionnelles de la courte période. Dans nos exercices, lorsque nous donnons un « salaire de référence pédagogique » déjà chiffré, nous ne refaisons pas les deux moyennes : nous l'étiquetons.\n\nRégime social et fiscal de l'indemnité de licenciement : des exonérations existent dans des limites (Sécurité sociale, impôt). Elles dépendent du montant, du caractère, parfois du PSE. Un junior n'applique pas « tout net, tout défiscalisé » par défaut. Il suit le paramétrage validé et le BOSS / instructions de la période. Dans les cas de ce module, sauf mention contraire, nous montrerons le calcul du brut d'indemnité légale, et nous indiquerons que le régime social se paramètre sous revue.\n\nFaute grave : pas d'indemnité légale (L. 1234-9). Faute lourde : même logique d'exclusion de l'indemnité de licenciement, qualification juriste. Inaptitude professionnelle : des majorations légales existent dans des cas précis — vous ne les appliquez pas sans texte sous les yeux.",
      methode:
        "1) CDI + licenciement + ≥ 8 mois + pas faute grave. 2) Ancienneté en années et mois. 3) Salaire de référence (plus favorable des moyennes, ou chiffre pédagogique donné). 4) Tranche 1 : min(ancienneté, 10) × 1/4 × salaire. 5) Tranche 2 : max(ancienneté − 10, 0) × 1/3 × salaire. 6) Comparer à la CCN lue. 7) Faire valider le régime social. 8) Saisir distinctement de l'ICP et des CP.",
      extra: [
        code(`INDEMNITÉ LÉGALE DE LICENCIEMENT
Sources : L. 1234-9 (droit, 8 mois, CDI, sauf faute grave)
         R. 1234-2 (minimum : 1/4 mois / an jusqu'à 10 ans, puis 1/3)

Formule (années complètes + prorata des mois, à relire sur Légifrance)
  IL = S × (1/4 × A1 + 1/3 × A2)
  A1 = années (et fractions) jusqu'à 10 ans
  A2 = années (et fractions) au-delà de 10 ans
  S  = salaire de référence réglementaire (plus favorable 12 mois / 3 mois)

CAS 1 — pédagogique
S = 2 500,00 €   ancienneté = 5 ans 0 mois
IL = 2 500 × 1/4 × 5 = 3 125,00 €

CAS 2 — pédagogique
S = 2 500,00 €   ancienneté = 12 ans 0 mois
A1 = 10 × 1/4 = 2,50 mois
A2 =  2 × 1/3 = 0,666… mois
IL = 2 500 × (2,50 + 2/3) = 2 500 × 3,1666… = 7 916,67 €

CAS 3 — pédagogique (prorata de mois, 8 mois pile, seuil L. 1234-9)
S = 2 500,00 €   ancienneté = 8 mois = 8/12 an
IL = 2 500 × 1/4 × 8/12 = 2 500 × 1/6 = 416,67 €

Ne PAS inventer : 1/2 mois par an, 1 mois cadre, 1/5e ancien barème.`),
      ],
      exemple:
        "Industrie, licenciement économique individuel, 9 ans d'ancienneté, salaire de référence pédagogique 2 500 €. Légale : 2 500 × 1/4 × 9 = 5 625 €. La CCN n'est pas extraite dans le dossier junior. Lina calcule 5 625 €, signale « CCN non comparée », n'ajoute pas 20 % « comme l'an dernier ». Marc lit la CCN et, si un barème supérieur existe, c'est ce barème qui se paie. Le junior a fait son métier : légal sourcé, conventionnel non inventé.",
      erreurs:
        "Utiliser 1 an d'ancienneté minimale (ancien seuil) au lieu de 8 mois. Oublier le 1/3 après 10 ans. Prendre le net comme salaire de référence. Fusionner IL et préavis. Appliquer l'exonération sociale sans consigne. Recopier un simulateur grand public sans R. 1234-2.",
      particuliers:
        "Temps partiel / temps plein successifs : règles de reconstitution du salaire de référence, à lire. Licenciement pendant un arrêt : l'indemnité n'est pas « le maintien maladie ». Pluralité de contrats chez le même employeur : ancienneté à faire confirmer par RH.",
      exercice:
        "CDI, licenciement hors faute grave, S pédagogique 3 000 €. Calculez l'indemnité légale minimale R. 1234-2 pour : (1) 3 ans ; (2) 10 ans ; (3) 15 ans. Citez les articles.",
      correction:
        "1) 3 000 × 1/4 × 3 = 2 250,00 €. 2) 3 000 × 1/4 × 10 = 7 500,00 €. 3) 10 ans à 1/4 = 2,5 mois + 5 ans à 1/3 = 1,666… mois → 4,1666… mois × 3 000 = 12 500,00 €. Droit : L. 1234-9 (8 mois, CDI, sauf faute grave). Taux : R. 1234-2. Salaire S donné comme pédagogique ; en dossier réel, comparer 12 mois et 3 mois (R. 1234-4).",
    }),
    pack({
      title: "Rupture conventionnelle, fin de CDD, essai, retraite : régimes propres",
      description:
        "Ne pas recycler le licenciement : homologation, précarité de CDD, prévenance d'essai, indemnités de départ à la retraite.",
      minutes: 20,
      objectifs:
        "Vous distinguez les calculs et les pièces de quatre sorties qui ne sont pas un licenciement, et vous savez ce qui reste hors autonomie.",
      theorie:
        "La rupture conventionnelle (L. 1237-11 et suivants) n'est ni une démission ni un licenciement. Elle suppose une convention, un délai, une homologation administrative (ou une autorisation pour salarié protégé). La date de rupture n'est pas « le vendredi où l'on s'est dit d'accord ». L'indemnité spécifique est au moins égale à l'indemnité légale de licenciement (renvoi au même minimum R. 1234-2 / L. 1234-9). Un montant supérieur peut être négocié : c'est une décision d'employeur, pas un barème junior. Tant que l'homologation n'est pas obtenue, vous ne clôturez pas le dossier comme une sortie certaine. Le régime social de la fraction exonérée suit des règles propres : sous revue.\n\nLa fin de CDD à terme ouvre, lorsque les relations ne se poursuivent pas en CDI et hors exclusions légales, une indemnité de fin de contrat égale à 10 % de la rémunération totale brute versée (L. 1243-8). Cette indemnité s'ajoute au dernier salaire, figure sur les documents de fin. Les exclusions (L. 1243-10 et textes liés : saisonnier, usage, refus d'un CDI, faute grave, jeune en certains parcours, etc.) se relisent sur Légifrance : vous n'appliquez pas 10 % « toujours » ni 0 % « parce que CDD d'un mois ». L'indemnité compensatrice de CP reste due selon L. 3141-24 indépendamment de la précarité.\n\nLa période d'essai : rupture libre dans les limites du détournement, avec un délai de prévenance distinct de L. 1234-1. Vous lisez les dispositions du Code du travail sur l'essai et le contrat. Pas d'indemnité légale de licenciement. Salaire jusqu'au terme du délai, CP acquis le cas échéant.\n\nRetraite : départ volontaire et mise à la retraite ne se paient pas avec le même automatisme. Des indemnités légales ou conventionnelles existent selon le cas. Un junior demande le motif exact (âge, mise à la retraite par l'employeur, départ) et le texte. Il ne saisit pas 1/4 de mois « comme un licenciement » sans vérification.",
      methode:
        "Pièce → date de rupture opposable → barème légal minimum si le régime y renvoie → CCN lue → régime social sous revue → documents. Pour la RC : numéro / preuve d'homologation dans le dossier. Pour le CDD : total des bruts versés du contrat × 10 % si l'indemnité est due.",
      extra: [
        code(`FIN DE CDD — INDEMNITÉ DE FIN (si due)
Source : L. 1243-8 (10 %) ; exclusions : relire L. 1243-10
Hypothèse pédagogique : CDD 6 mois, bruts versés cumulés 15 000,00 €
Indemnité de fin = 10 % × 15 000 = 1 500,00 €
+ ICP selon L. 3141-24 sur les CP restants
Pas de 10 % si poursuite en CDI (principe L. 1243-8)

RUPTURE CONVENTIONNELLE
Indemnité spécifique ≥ indemnité légale (même formule R. 1234-2)
Exemple : 5 ans, S = 2 500 € → plancher 3 125,00 €
Un montant 5 000 € négocié : décision tracée, pas un barème junior
Homologation : sans elle, pas de solde « RC »`),
      ],
      exemple:
        "Cabinet. Client : « CDD saisonnier, mets la précarité, ils vont râler sinon. » Lina lit L. 1243-10 : certains CDD saisonniers sont exclus du 10 %. Elle n'applique pas le 10 % contre le texte pour la paix sociale. Elle documente, le responsable tranche avec le client. Le junior n'est pas un commercial du net.",
      erreurs:
        "Payer une RC avant homologation. Oublier le 10 % de CDD ou l'appliquer malgré une exclusion. Traiter l'essai comme un licenciement avec deux mois. Recopier l'indemnité de mise à la retraite sur un départ volontaire.",
      particuliers:
        "CDD + poursuite de fait au-delà du terme : risque de requalification, RH/juriste, pas une ligne « prolongement ». RC du salarié protégé : autorisation, pas le circuit standard. Rupture d'un commun accord hors L. 1237-11 : ce n'est pas une RC ; le juriste qualifie.",
      exercice:
        "CDD 4 mois, bruts versés 8 400 €, terme atteint, pas de CDI proposé, pas de motif d'exclusion dans le dossier pédagogique. CP : 10 jours ouvrables restants (ICP vue à la leçon suivante). Calculez l'indemnité de fin. Le licenciement L. 1234-9 s'applique-t-il ?",
      correction:
        "Indemnité de fin = 10 % × 8 400 = 840,00 € (L. 1243-8), si aucune exclusion L. 1243-10. Le licenciement et L. 1234-9 ne s'appliquent pas à une fin de CDD à terme. Les CP se liquident à part (L. 3141-24). Pourquoi : deux régimes, deux lignes, deux sources.",
    }),
    pack({
      title: "Congés payés restants et indemnité compensatrice",
      description:
        "Liquider le compteur : maintien versus dixième (L. 3141-24), sans inventer un 26e national.",
      minutes: 22,
      objectifs:
        "Vous savez que les CP non pris se paient à la rupture, vous comparez les deux méthodes légales, et vous étiquetez toute conversion en 26e ou 30e.",
      theorie:
        "À la rupture, les congés payés acquis et non pris donnent lieu à une indemnité compensatrice. L'article L. 3141-24 (legal-sources) impose que l'indemnité de congés ne soit pas inférieure au dixième de la rémunération brute de la période de référence, ni au salaire qui aurait été perçu pendant le congé. On calcule les deux, on retient le plus favorable. Cette comparaison vaut pour l'indemnité de congés ; à la sortie, vous l'appliquez au stock restant, selon les règles de décompte de l'entreprise (ouvrable, ouvré) déjà utilisées en cours d'année.\n\nLe droit d'acquisition légal est de 2,5 jours ouvrables par mois de travail effectif, dans la limite de 30 jours ouvrables (L. 3141-3), sauf CCN plus favorable. Vous n'inventez pas 2,08 jours ouvrés comme « la » loi : 2,08 est une conversion fréquente en ouvrés, pas le texte de L. 3141-3.\n\nPour convertir un salaire mensuel en indemnité de maintien, les entreprises utilisent souvent un 26e (jours ouvrables) ou un 21,67e / 22e (ouvrés), parfois un 30e. Aucune de ces conversions n'est un taux URSSAF. Dans nos cas, nous étiquetons : hypothèse pédagogique de maintien à 1/26e du brut mensuel par jour ouvrable. En dossier réel, vous appliquez la règle déjà utilisée pour les absences CP, par cohérence.\n\nL'assiette du dixième : rémunération brute de la période de référence, y compris certains éléments (HS, primes selon règles). Un junior trop étroit (salaire de base seul) sous-évalue le dixième ; un junior trop large (remboursements de frais) le fausse. En cas de doute, liste BOSS / CCN / responsable.\n\nL'ICP a le caractère de salaire : cotisations sur le brut d'ICP, PAS sur le net imposable qui en résulte, DSN. Elle se cumule avec le salaire du dernier mois, l'éventuelle indemnité de préavis, l'indemnité de licenciement (dont le régime social peut différer).",
      methode:
        "1) Compteur RH : acquis, pris, restant, unité (ouvrable / ouvré). 2) Maintien : salaire journalier de la règle d'entreprise × jours restants. 3) Dixième : 1/10 de la rémunération de référence, ramené au stock (30e ouvrable légal de référence souvent). 4) Max des deux. 5) Intégrer au brut du solde. 6) Ne pas « oublier » les CP d'une N-1 encore ouverts.",
      extra: [
        code(`ICP — CAS PÉDAGOGIQUE JANVIER 2026
Sortie le 15 janvier 2026. Compteur : 8 jours ouvrables restants.
Brut mensuel hors solde : 2 500,00 €
Période de référence pédagogique : rémunération brute 30 000,00 €
  (hypothèse de dossier pour le dixième, pas un extrait réel)

Méthode maintien (HYPOTHÈSE 26e, pas une norme nationale)
  2 500 / 26 × 8 = 96,153… × 8 = 769,23 €

Méthode du dixième (L. 3141-24)
  1/10 × 30 000 = 3 000,00 € pour 30 jours ouvrables
  3 000 / 30 × 8 = 100,00 × 8 = 800,00 €

Comparaison : max(769,23 ; 800,00) = 800,00 € → ICP retenue
Source : L. 3141-24. Le 26e est une HYPOTHÈSE de conversion.

Si le compteur était en ouvrés, vous ne mélangerez pas 8 ouvrables et un 21,67e.`),
      ],
      exemple:
        "Services. Le SIRH affiche « 8 ». Personne ne sait si c'est ouvrable ou ouvré. Lina ne multiplie pas. Elle demande le paramétrage du compteur, aligne le 26e ou le 21,67e, calcule les deux méthodes, documente 800,00 € dans le cas ci-dessus. Un compteur ambigu est un risque de trop-perçu ou d'insuffisance.",
      erreurs:
        "Payer les CP au net. Oublier la comparaison L. 3141-24. Utiliser 2 500 / 30 × 8 sans le dire. Prendre 2,5 jours pour le mois de sortie sans règle d'acquisition du mois incomplet. Inventer 10 % du dernier mois comme « dixième ».",
      particuliers:
        "Maladie et acquisition de CP : le droit a évolué ; un junior applique le paramétrage à jour et la consigne, il n'invente pas un arrêt de la Cour. Congés d'ancienneté CCN : en plus du légal s'ils existent. RTT : ce ne sont pas des CP ; liquidation selon accord, pas L. 3141-24 par analogie automatique.",
      exercice:
        "Même méthode. 10 jours ouvrables restants, brut 2 500 €, dixième sur 30 000 € annuels pédagogiques, maintien 26e. Calculez les deux montants et l'ICP retenue.",
      correction:
        "Maintien : 2 500 / 26 × 10 = 961,54 €. Dixième : 3 000 / 30 × 10 = 1 000,00 €. ICP = 1 000,00 € (L. 3141-24, plus favorable). Le 26e reste une hypothèse. En dossier réel, l'assiette 30 000 € se justifie par les bruts de la période de référence, pas par un forfait.",
    }),
    pack({
      title: "Dernier mois : prorata, primes, avantages, régularisations",
      description:
        "Construire le brut de sortie : salaire du mois incomplet, variables, trop-perçus, acomptes.",
      minutes: 22,
      objectifs:
        "Vous savez proratiser le dernier salaire, y ajouter les éléments dus, et traiter une régularisation sans retenue illégale.",
      theorie:
        "Le dernier mois se calcule comme un mois incomplet, de la même famille que l'entrée. Dans ce parcours, sans autre précision du dossier, nous utilisons le prorata calendaire pédagogique : brut mensuel × jours calendaires de contrat dans le mois / jours du mois. Sortie le 15 janvier 2026, 2 500 €, janvier = 31 jours, présence du 1er au 15 inclus = 15 jours. Brut salaire = 2 500 × 15 / 31 = 1 209,68 €. Les cotisations du salaire (hors indemnités à régime particulier) suivent le moteur sur l'assiette de période, pas un pourcentage du bulletin de décembre.\n\nS'y ajoutent : heures supplémentaires du mois, primes devenues exigibles (13e mois au prorata si le texte le prévoit — on lit, on n'invente pas 1/12 automatique comme loi), avantages en nature jusqu'au dernier jour, commissions selon les règles d'acquisition, ICP, indemnité de préavis, indemnité de licenciement ou de RC ou de fin de CDD.\n\nS'en déduisent, seulement s'il existe une base : acomptes déjà versés, trop-perçus avec information du salarié et respect des règles de retenue sur salaire (plafonds de saisissabilité, pas une compensation sauvage de 100 % du net), avances, matériel non rendu selon une politique écrite et proportionnée — souvent contentieux, donc responsable.\n\nUn trop-perçu de novembre ne s'efface pas « dans le STC, il ne dira rien ». Vous le documentez, vous calculez le net d'impact, vous respectez les limites de retenue, vous faites valider. Un net de solde à zéro ou négatif est un signal d'alarme, pas une élégance comptable.\n\nLes titres-restaurant, le 1 % logement, les notes de frais du mois : règles d'attribution jusqu'au dernier jour travaillé, pas jusqu'à la fin de préavis non effectué si le salarié n'est plus présent — selon le dispositif. Vous ne « laissez » pas dix tickets par sympathie.",
      methode:
        "Feuille de liquidation : (a) salaire prorata ; (b) variables du mois ; (c) ICP ; (d) indemnités de rupture ; (e) avantages ; (f) retenues justifiées. Puis calcul, puis contrôle de chaque famille de cotisations. Distinguer les rubriques à régime social particulier (souvent indemnités de rupture) des rubriques salarialisées (préavis, ICP, salaire).",
      extra: [
        code(`LIQUIDATION PÉDAGOGIQUE — SORTIE 15 JANVIER 2026
Mensuel 2 500,00 €   méthode calendaire PÉDAGOGIQUE

Salaire 1er–15 janvier     2 500 × 15/31 = 1 209,68 €
ICP 8 j (cas leçon CP)                   800,00 €
Indemnité légale licenciement 5 ans
  (S = 2 500, R. 1234-2)               3 125,00 €
Préavis : travaillé jusqu'au 15, pas de
  dispensé dans ce cas                      0,00 €
Prime exceptionnelle due (hypothèse
  dossier, soumise)                       200,00 €
Acompte janvier déjà versé               −400,00 €
                                      ------------
Brut salarialisé (hors IL si régime
  particulier) à décomposer par rubrique

Salaire + ICP + prime = 1 209,68 + 800,00 + 200,00 = 2 209,68 €
  → cotisations « salaire » sur cette assiette selon moteur
IL 3 125,00 € → régime social sous revue (pas « tout soumis » par réflexe)

Cotisations sur le seul salaire prorata 1 209,68 € (moteur, hors RGDU) :
  salarial 252,09 €  patronal 497,01 €  net imposable 992,05 €
  net à payer 957,59 €   (PAS = 0 dans cet extrait)
L'ICP et la prime s'ajoutent à l'assiette si soumises : on relance le moteur
sur le brut salarialisé réel, on ne multiplie pas 957,59 €.`),
      ],
      exemple:
        "Le manager : « garde-lui le mois plein, c'est déjà assez dur. » Sans décision d'employeur écrite (complément, générosité, transaction), Lina proratise. Un mois plein non travaillé est un élément de rémunération à qualifier (libéralité, maintien, préavis). Ce n'est pas le junior qui l'offre.",
      erreurs:
        "Prorata 15/30 par habitude alors que le dossier est calendaire 31. Oublier l'acompte. Soumettre l'indemnité de licenciement comme du salaire sans consigne, ou l'exonérer en totalité sans consigne. Retenir 100 % du net pour un ordinateur non rendu.",
      particuliers:
        "Saisie-arrêt en cours : le solde reste saisissable dans les limites ; coordination huissier / responsable. Avantage véhicule rendu le 5 du mois : prorata d'avantage. Actions gratuites, intéressement, participation : calendriers spécifiques, pas le STC du jour.",
      exercice:
        "Sortie 31 janvier 2026, 2 500 €, mois complet travaillé, ICP 800 €, pas d'indemnité de rupture (démission), acompte 0. Quel est le brut salarialisé pédagogique du mois ? Lance-t-on un prorata 31/31 ?",
      correction:
        "Présence 31/31 : salaire 2 500,00 €, pas de prorata d'incomplétude. Brut salarialisé = 2 500 + 800 = 3 300,00 € (ICP soumise). Démission : pas d'indemnité L. 1234-9. On calcule les cotisations sur 3 300 € via le moteur, on ne reprend pas le bulletin de décembre. Pourquoi : le 31 n'est pas une sortie « partielle » calendaire.",
    }),
    pack({
      title: "Documents de fin de contrat et DSN de fin",
      description:
        "Remettre les documents dus et aligner la déclaration, sans inventer un numéro de bloc DSN.",
      minutes: 18,
      objectifs:
        "Vous savez quels documents l'employeur remet à la fin du contrat, ce qu'ils doivent refléter, et comment la DSN de fin s'articule avec le solde.",
      theorie:
        "La fin du contrat impose la remise de documents prévus par le Code du travail. Trois pièces structurent la pratique : le certificat de travail, l'attestation destinée à France Travail (assurance chômage), le reçu pour solde de tout compte. Relisez les articles du chapitre relatif aux conséquences de la rupture et la fiche pratique institutionnelle : vous n'inventez pas un délai de remise de « 48 heures » ou de « 8 jours » si vous ne l'avez pas sous les yeux. La bonne pratique professionnelle est de les préparer avec le solde, de les remettre au moment du paiement du STC, et de conserver des copies.\n\nLe certificat de travail atteste notamment de l'emploi, des dates d'entrée et de sortie. Il n'a pas à commenter la qualité du salarié ni le motif. L'attestation France Travail alimente les droits éventuels à l'allocation : les dates, les salaires, le motif de rupture doivent coller au bulletin et à la DSN. Un motif « autre » bricolé pour « l'aider » est une fausse déclaration. Le reçu pour solde de tout compte liste les sommes versées ; le salarié peut le signer ; des règles encadrent sa contestation. Vous n'exigez pas la signature comme chantage au virement. Vous n'écrivez pas « pour solde de tout compte » sur un bulletin incomplet.\n\nLa DSN de fin n'est pas un XML que le junior rédige à la main. C'est un signalement et/ou la DSN mensuelle portant la fin de contrat, selon le cahier technique officiel et le motif. Vous utilisez les libellés conceptuels : individu, contrat, fin de contrat, versement, assiette. Vous n'inventez pas un numéro de bloc. Les échéances se lisent sur net-entreprises (legal-sources : DSN-NET-ENTREPRISES), pas dans une légende de formation. Un CRM d'anomalie se traite : une fin mal datée casse l'attestation et parfois les droits du salarié.\n\nPortabilité de la mutuelle / prévoyance : des dispositifs existent (notamment au titre du Code de la Sécurité sociale). Le junior suit le process organisme (information, DSN, durée selon conditions). Il n'annonce pas « 12 mois offerts » de mémoire.",
      methode:
        "1) Dates figées (entrée, sortie, dernier jour travaillé). 2) Motif de rupture RH. 3) Montants du STC = bulletin = documents. 4) Génération des documents depuis l'outil, relecture. 5) DSN : event de fin selon process + mensuelle. 6) Remise tracée (main propre, LRAR, coffre). 7) Archivage RGPD, habilitations.",
      extra: [
        code(`COHÉRENCE DOCUMENTS — CONTRÔLE JUNIOR

                    Bulletin STC    Certificat    Attestation FT    DSN fin
Date entrée         03/03/2021      identique     identique         identique
Date fin contrat    15/01/2026      identique     identique         identique
Motif               (interne)       non commenté  motif officiel    motif cahier
Salaire / ICP       lignes          —             salaires déclarés versements
Indemnités          lignes          —             selon nature      selon nature

Interdit : motif « démission » sur l'attestation et « licenciement » en DSN.`),
      ],
      exemple:
        "CSP. Le STC part le 28, l'attestation France Travail le 10 du mois suivant « on manquait de temps ». Le salarié ne peut pas déposer son dossier. Le SLA interne n'autorise pas ce décalage. Lina prépare l'attestation avec le solde, Marc valide, remise le jour du paiement. La vitesse de clôture ne prime pas la pièce chômage.",
      erreurs:
        "Antidater un certificat. Inventer un motif plus « favorable » au chômage. Oublier la DSN de fin en croyant que la mensuelle suffira toujours. Exiger une décharge « je ne réclamerai jamais ». Envoyer les documents au manager du salarié par facilité (données personnelles).",
      particuliers:
        "Décès : destinataires ayants droit, circuit RH. Dispute sur le motif : documents selon la qualification employeur du moment, pas selon l'humeur du jour. Multi-contrats : un certificat par relation de travail selon la réalité juridique.",
      exercice:
        "Le bulletin de STC indique une sortie au 15 janvier, le certificat au 31 « on a laissé le mois ». Que faites-vous avant remise et DSN ?",
      correction:
        "Vous alignez. Une seule date de fin de contrat. Si le préavis court jusqu'au 31, le certificat et la DSN portent le 31, et le bulletin doit rémunérer jusqu'au 31 (préavis). Si le contrat s'arrête le 15, le certificat ne peut pas porter le 31. Vous bloquez la remise, vous tranchez avec RH, puis vous déclarez. Pourquoi : l'attestation France Travail et la DSN recopient cette date.",
    }),
    pack({
      title: "Contrôler un solde de tout compte : cas chiffré et checklist",
      description:
        "Enchaîner prorata du dernier mois, ICP, indemnité légale, documents et points de blocage junior.",
      minutes: 28,
      objectifs:
        "Vous savez liquider un cas complet de licenciement au 15 janvier 2026 et dire ce que vous validez seul, ce que vous faites revoir, ce que vous refusez.",
      theorie:
        "Le contrôle d'un STC est un contrôle de cohérence, pas une relecture esthétique. Chaque euro a une source : contrat, compteur, L. 1234-1, L. 1234-9 / R. 1234-2, L. 3141-24, pièce de rupture. Chaque date a un document. Chaque indemnité a un régime social assumé.\n\nCas de synthèse pédagogique. Licenciement hors faute grave, CDI, ancienneté 5 ans, salaire de référence et brut mensuel 2 500,00 €, sortie 15 janvier 2026, préavis travaillé jusqu'au 15 (pas de dispensé dans ce cas), 8 jours ouvrables de CP, dixième pédagogique 800,00 € retenu, pas de prime, pas d'acompte, PAS à 0, non-cadre, effectif < 50, hors RGDU, AT/MP 1,50 % hypothèse, mutuelle non activée.\n\nSalaire du mois : 2 500 × 15/31 = 1 209,68 € (prorata calendaire pédagogique). ICP : 800,00 €. Indemnité légale : 2 500 × 1/4 × 5 = 3 125,00 €. Brut salarialisé soumis selon hypothèse de ce cas (salaire + ICP) = 2 009,68 €. L'indemnité de licenciement est isolée pour le régime social : vous ne la mélangez pas dans computeBulletin comme du salaire sans consigne. Sur 1 209,68 € de seul salaire, le moteur donne salarial 252,09 €, patronal 497,01 €, net imposable 992,05 €, net 957,59 €. L'ICP 800 € s'ajoute à l'assiette salariale : le gestionnaire relance un calcul sur 2 009,68 € (ou laisse le logiciel agréger les rubriques), il ne fait pas 957,59 + 800.\n\nVous contrôlez : PMSS 4 005 € non atteint par le seul mois ; documents datés du 15 ; motif licenciement partout ; pas d'indemnité de RC ; pas de 10 % CDD ; journal pour la comptabilité (641, 645, 421, 43x, éventuellement comptes d'indemnités selon plan d'entreprise).\n\nCe que le junior refuse : un STC signé blanc, un motif DSN différent, un mois plein offert sans écrit, un multiple CCN sorti d'un souvenir, un net arrondi « pour que ça se termine bien ».",
      methode:
        "Checklist ci-dessous, dans l'ordre, coches datées, revue N+1 obligatoire sur tout STC (règle pédagogique de ce parcours, bonne pratique, pas un article du Code). Paiement distinct éventuellement, mais un seul livrable documentaire.",
      extra: [
        code(`STC PÉDAGOGIQUE — LICENCIEMENT 15/01/2026
Ancienneté 5 ans   S = 2 500,00 €   non-cadre

Salaire 15/31 calendaire     1 209,68 €     prorata pédagogique
ICP 8 j ouvrables              800,00 €     L. 3141-24 (dixième retenu)
Indemnité légale             3 125,00 €     L. 1234-9 + R. 1234-2
Préavis dispensé                 0,00 €     préavis travaillé jusqu'au 15
Total à qualifier ligne à ligne

CHECKLIST CONTRÔLE STC
[ ] Pièce de rupture et motif RH
[ ] Date fin = bulletin = certificat = attestation = DSN
[ ] Préavis : plancher L. 1234-1 lu, CCN non inventée
[ ] IL : 8 mois, CDI, pas faute grave, formule R. 1234-2
[ ] ICP : deux méthodes, max, unité du compteur
[ ] Prorata du mois (ici 15/31)
[ ] Primes / acomptes / avantages
[ ] Régime social des indemnités sous revue
[ ] Net non négatif ; retenues plafonnées
[ ] Documents générés, relus, canal de remise
[ ] DSN de fin préparée, dépôt responsable
[ ] Pas de numéro de bloc DSN inventé
[ ] Journal d'incidents si écart

MAIL TYPE (interne, pas au salarié — données)
Objet : Revue STC — salarié X — sortie 15/01/2026
« Licenciement hors faute grave, 5 ans. Salaire 1 209,68 (15/31).
ICP 800,00 (dixième). IL 3 125,00 (1/4×5×2500). Préavis travaillé.
Merci de valider régime social IL et DSN motif avant paiement. »`),
      ],
      exemple:
        "Le salarié appelle : « mes collègues ont eu 1/2 mois par an. » Lina ne cède pas. Elle montre L. 1234-9 / R. 1234-2, indique que la CCN n'a pas été trouvée plus favorable dans l'extrait, transmet à RH si une clause existe. L'égalité de traitement se joue sur le texte, pas sur la rumeur d'atelier.",
      erreurs:
        "Additionner 1 209,68 + 800 + 3 125 dans une seule rubrique « brut » soumise. Oublier l'ICP parce que « il n'a pas posé de congés en janvier ». Signer le reçu à la place du salarié. Payer avant revue du motif DSN.",
      particuliers:
        "STC + saisie sur salaire + mutuelle : net très bas, responsable. Transfert d'entreprise (L. 1224-1) : ce n'est pas une sortie. Départ négocié mal qualifié : bloquer.",
      exercice:
        "Reprenez le cas. On vous demande d'ajouter 2 mois de préavis dispensé (5 000 €) « pour que ça passe mieux », sans avenant ni lettre de dispense. Que calculez-vous ? Que refusez-vous ? Quel est le plancher L. 1234-1 pour 5 ans ?",
      correction:
        "Plancher L. 1234-1 3° : 2 mois (≥ 2 ans), sauf plus favorable. Si le préavis a été travaillé jusqu'au 15, on ne cumule pas une dispensé fantôme de 2 mois sans décision. Si l'employeur dispense par écrit le reliquat de préavis, l'indemnité compensatrice se calcule sur la période de préavis non effectuée, pas « 2 mois en plus du travaillé » par générosité orale. Vous refusez 5 000 € sur un oral. Salaire 1 209,68 + ICP 800 + IL 3 125 restent le socle sourcé du cas. Pourquoi : le préavis se déduit des dates réelles, pas d'un confort managérial.",
    }),
    quizLesson({
      title: "Quiz — Sortie et solde de tout compte",
      description: "Motifs, préavis, indemnités légales, ICP, prorata, documents, DSN.",
      passing_score: 70,
      questions: [
        q({
          question: "L'indemnité légale de licenciement (L. 1234-9) suppose notamment :",
          options: [
            "A. Un CDD arrivé à terme",
            "B. Un CDI, un licenciement, 8 mois d'ancienneté ininterrompus, hors faute grave",
            "C. Une démission avec 2 ans d'ancienneté",
            "D. Un essai rompu par l'employeur",
          ],
          correct: 1,
          explanation:
            "L. 1234-9 vise le CDI licencié, 8 mois, sauf faute grave. Fin de CDD, démission et essai : autres régimes.",
        }),
        q({
          question: "Selon R. 1234-2, le minimum légal est :",
          options: [
            "A. 1 mois de salaire par année dès la première année",
            "B. 1/5e de mois par année (ancien barème, à ne pas recycler)",
            "C. 1/4 de mois par année jusqu'à 10 ans, puis 1/3 au-delà",
            "D. 1/2 mois par année pour tout cadre",
          ],
          correct: 2,
          explanation:
            "R. 1234-2 : 1/4 puis 1/3. Le 1/5e est un souvenir d'ancien barème. Le 1/2 mois cadres n'est pas une règle nationale ; une CCN peut être plus favorable, à lire.",
        }),
        q({
          question: "Licenciement, S pédagogique 2 500 €, 5 ans. Indemnité légale minimale :",
          options: [
            "A. 2 500,00 €",
            "B. 3 125,00 €",
            "C. 5 000,00 €",
            "D. 12 500,00 €",
          ],
          correct: 1,
          explanation:
            "2 500 × 1/4 × 5 = 3 125,00 € (R. 1234-2). 5 000 € serait 2 mois de préavis, un autre objet.",
        }),
        q({
          question: "Préavis de licenciement, ancienneté 11 mois, hors faute grave, CCN non plus favorable :",
          options: [
            "A. 15 jours (on invente sous 1 an)",
            "B. 1 mois (L. 1234-1 2°)",
            "C. 2 mois (L. 1234-1 3°)",
            "D. 3 mois parce que le salarié le demande",
          ],
          correct: 1,
          explanation:
            "Entre 6 mois et moins de 2 ans : un mois, sauf plus favorable. Deux mois commencent à 2 ans. On n'invente pas 15 jours.",
        }),
        q({
          question: "Sortie le 15 janvier 2026, 2 500 €, prorata calendaire pédagogique. Salaire du mois :",
          options: [
            "A. 2 500,00 €",
            "B. 1 250,00 € (moitié)",
            "C. 1 209,68 € (15/31)",
            "D. 1 209,68 € nets",
          ],
          correct: 2,
          explanation:
            "2 500 × 15 / 31 = 1 209,68 € brut de salaire. Ce n'est pas la moitié d'un mois de 31 jours, ni un net.",
        }),
        q({
          question: "L. 3141-24 impose, pour l'indemnité de congés :",
          options: [
            "A. Uniquement le dixième",
            "B. Uniquement le maintien",
            "C. De retenir le plus favorable entre dixième et maintien",
            "D. 10 % du dernier mois civil, toujours",
          ],
          correct: 2,
          explanation:
            "Comparaison des deux méthodes. 10 % du dernier mois n'est pas le dixième de la période de référence.",
        }),
        q({
          question: "Indemnité de fin de CDD due (L. 1243-8), bruts versés 8 400 € :",
          options: [
            "A. 840,00 € (10 %)",
            "B. 3 125,00 € (barème licenciement)",
            "C. 0 € toujours pour un CDD de moins d'un an",
            "D. 1/4 × 8 400",
          ],
          correct: 0,
          explanation:
            "10 % × 8 400 = 840 € si l'indemnité est due et hors exclusions L. 1243-10. L. 1234-9 ne s'applique pas à la fin de CDD à terme.",
        }),
        q({
          question: "Une rupture conventionnelle L. 1237-11 :",
          options: [
            "A. Se saisit dès l'accord oral du manager",
            "B. Exige notamment une convention et une homologation ; l'indemnité spécifique est au moins égale au légal de licenciement",
            "C. Interdit toute indemnité",
            "D. Utilise le préavis L. 1234-1 obligatoire de 2 mois",
          ],
          correct: 1,
          explanation:
            "Régime propre, homologation, plancher = indemnité légale. Pas de saisie sur un oral. Le préavis de licenciement n'est pas le régime de la RC.",
        }),
        q({
          question: "Le délai de prévenance de l'essai :",
          options: [
            "A. Est celui de L. 1234-1 (1 ou 2 mois)",
            "B. Est distinct ; on lit les règles d'essai et le contrat, on n'applique pas L. 1234-1 par défaut",
            "C. N'existe jamais",
            "D. Vaut 8 jours calendaires pour tout le monde (chiffre inventé unique)",
          ],
          correct: 1,
          explanation:
            "L'essai n'est pas un licenciement. On ne recycle pas L. 1234-1. On n'invente pas un délai unique de mémoire si le texte n'est pas sous les yeux.",
        }),
        q({
          question: "Certificat de travail, attestation France Travail et DSN de fin doivent :",
          options: [
            "A. Pouvoir porter des dates de fin différentes « selon l'usage »",
            "B. Être alignés sur les mêmes dates et un motif cohérent ; on n'invente pas un numéro de bloc DSN",
            "C. Attendre 90 jours pour l'attestation",
            "D. Être envoyés au manager du salarié par WhatsApp",
          ],
          correct: 1,
          explanation:
            "Cohérence bulletin / documents / DSN. Échéances DSN : net-entreprises, pas un délai inventé. Données personnelles : canal prévu.",
        }),
        q({
          question: "Dans le cas pédagogique, l'ICP retenue pour 8 jours (maintien 769,23 € vs dixième 800,00 €) est :",
          options: [
            "A. 769,23 € parce que le 26e est officiel",
            "B. 800,00 € (plus favorable, L. 3141-24) ; le 26e est une hypothèse",
            "C. 1 569,23 € (somme des deux)",
            "D. 0 € en cas de licenciement",
          ],
          correct: 1,
          explanation:
            "On retient le max. Le 26e n'est pas un taux national. Le licenciement n'annule pas les CP.",
        }),
        q({
          question: "Un junior face à un STC :",
          options: [
            "A. Qualifie la faute grave et fixe l'indemnité transactionnelle",
            "B. Calcule à partir des pièces et des textes, isole les régimes sociaux, fait revoir motif et indemnités, refuse les multiples CCN inventés",
            "C. Arrondit le net pour clôturer",
            "D. Recopie le STC du précédent départ",
          ],
          correct: 1,
          explanation:
            "Production sourcée, revue, pas de qualification juridique complexe ni d'arrondi de confort.",
        }),
      ],
    }),
  ],
};
