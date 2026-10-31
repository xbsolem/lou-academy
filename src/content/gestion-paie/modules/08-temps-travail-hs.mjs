import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 8,
  title: "Temps de travail et heures supplémentaires",
  description:
    "Appliquer la durée légale de 35 heures, déclencher et majorer les heures supplémentaires, distinguer les heures complémentaires, et renvoyer à la CCN pour nuit, dimanche, fériés et forfaits.",
  lessons: [
    pack({
      title: "Durée légale : 35 heures (L. 3121-27)",
      description: "Comprendre ce que la durée légale est, et ce qu'elle n'est pas.",
      minutes: 18,
      objectifs:
        "Vous citez L. 3121-27, vous distinguez durée légale, durée contractuelle et durée conventionnelle, et vous savez pourquoi 151,67 heures mensualisent 35 heures.",
      theorie:
        "L'article L. 3121-27 du Code du travail fixe la durée légale de travail effectif des salariés à trente-cinq heures par semaine. Ce n'est pas un plafond d'heures autorisées : c'est le seuil de déclenchement des heures supplémentaires, sous réserve des durées considérées comme équivalentes. Source : legal-sources.json L3121-27, Légifrance.\n\nDurée légale ≠ durée maximale. Des heures peuvent être accomplies au-delà, dans le respect des durées maximales quotidiennes et hebdomadaires, du repos, et du contingent. Ces maxima sont d'autres articles ; un junior ne les récite pas de mémoire s'il n'a pas le texte. Il sait qu'ils existent et qu'une demande de 20 HS par semaine n'est pas « juste un taux 25 % ».\n\nDurée légale ≠ durée conventionnelle. Une CCN ou un accord peut prévoir une durée inférieure (34 h, 32 h). Cette durée plus favorable ne se confond pas automatiquement avec le seuil légal des HS : L. 3121-27 demeure le repère légal des HS légales, sauf durée équivalente. LIRE LA CCN et l'accord d'entreprise avant de paramétrer un seuil 32 h « comme des HS ». Ne pas inventer que « toute heure au-delà de 32 est une HS à 25 % ».\n\nDurée légale ≠ horaire du contrat. Un temps partiel à 24 h n'a pas de HS au-delà de 24 h : il a des heures complémentaires (leçon dédiée). Un temps plein mensualisé 35 h a un horaire contractuel 35 h, payé 151,67 h par mois en pratique de mensualisation.\n\n151,67 heures : 35 × 52 / 12 = 151,666… arrondi usuel 151,67. C'est le dénominateur de mensualisation du temps plein légal, pas une invention d'éditeur. Le SMIC mensuel URSSAF au 01/01/2026 (1 823,03 €) correspond à 35 h × 12,02 € sur cette base (fiche SMIC). Vous utilisez 151,67 et 1 823,03 comme paramètres sourcés, pas 151 ou 152 au hasard.\n\nTravail effectif : le temps pendant lequel le salarié est à la disposition de l'employeur et se conforme à ses directives (L. 3121-1). Les pauses, habillage, astreintes non travaillées ont des régimes propres : vous ne les transformez pas en HS sans texte ou CCN.\n\nNature : 35 h = obligation légale de seuil. 151,67 = pratique de mensualisation calée sur 35 h. Horaire d'atelier 8 h–17 h = organisation interne. CCN = éventuellement plus favorable, à lire.",
      methode:
        "Sur un dossier : 1) Temps plein ou partiel ? 2) Durée du contrat. 3) Durée légale 35 h. 4) Durée CCN / accord (LIRE, ne pas inventer). 5) Mode : hebdomadaire, mensualisé, annualisé, forfait. 6) Seuil de déclenchement HS dans le paramétrage, justifié par un texte.",
      extra: [
        code(`MENSUALISATION 35 H — paramètre sourcé
35 × 52 / 12 = 151,666…  →  151,67 h / mois
SMIC 01/01/2026–31/05/2026 : 12,02 € / h  et  1 823,03 € / mois (URSSAF)
1 823,03 n'est pas « 12,02 × 151 » au hasard : utilisez le mensuel officiel pour un temps plein SMIC.

L. 3121-27 : durée légale = 35 heures par semaine.`),
      ],
      exemple:
        "PME de production, « on a toujours payé 169 h » (souvenir 39 h). Le junior qui reprend 169 h comme base 2026 sans avenant ni accord recrée un horaire illicite ou des HS permanentes non déclarées. Il alerte : base légale 151,67, au-delà = HS, sauf accord d'aménagement du temps de travail lu dans le dossier.",
      erreurs:
        "Croire que 35 h est un maximum. Mensualiser à 151 h. Appliquer 169 h « comme avant 2000 ». Confondre temps partiel et réduction d'horaire de l'entreprise. Ignorer la CCN tout en inventant un seuil 32 h.",
      particuliers:
        "Cadres dirigeants : régime d'exclusion spécifique, hors du réflexe 151,67. Forfait jours : pas d'horaire 151,67 (leçon forfaits). Équivalences de certains métiers : durée d'équivalence, texte obligatoire, pas un usage d'atelier.",
      exercice:
        "Contrat 35 h, janvier 2026, taux horaire 12,02 €, aucune HS. Quel brut de base mensualisé utilisez-vous et pourquoi pas 12,02 × 150 ?",
      correction:
        "Brut de base = SMIC mensuel officiel 1 823,03 € (URSSAF, 151,67 h). 12,02 × 150 = 1 803,00 € sous-SMIC, interdit hors cas légaux. 12,02 × 151,67 = 1 823,07 approximatif : vous privilégiez le mensuel publié 1 823,03 € pour un temps plein SMIC, et vous alignez le paramètre d'heures du logiciel sur 151,67.",
    }),
    pack({
      title: "Heures supplémentaires : déclenchement (L. 3121-28)",
      description: "Qualifier une heure : au-delà de la durée légale, validée, dans le bon mois.",
      minutes: 20,
      objectifs:
        "Vous appliquez L. 3121-28 : sont des HS les heures accomplies au-delà de la durée légale (ou de la durée équivalente). Vous refusez de saisir des HS non validées.",
      theorie:
        "L'article L. 3121-28 : les heures accomplies au-delà de la durée légale hebdomadaire (35 h) ou de la durée considérée comme équivalente sont des heures supplémentaires. Source : legal-sources.json L3121-28.\n\nConséquence paie : une HS n'est pas « une heure en plus sur le planning » si elle ne dépasse pas 35 h. Un salarié mensualisé 35 h qui fait 35 h une semaine et 32 h la suivante n'a pas de HS ; selon le décompte retenu (semaine, cycle), la seconde semaine peut même être une retenue, pas un crédit. Le décompte des HS est en principe hebdomadaire, sauf aménagement du temps de travail (modulation, cycle, annualisation) prévu par accord. Un junior ne « lisse » pas 4 semaines dans un tableur personnel pour inventer 6 HS.\n\nQualité de l'heure : travail effectif, demandé ou implicitement admis. Des heures effectuées de la seule initiative du salarié, contre consigne, posent un conflit d'exécution : la paie ne les invente pas, le responsable tranche avec le manager, pièces à l'appui (badgeage, planning validé).\n\nContingent annuel d'HS : un volume au-delà duquel des contreparties (repos) s'imposent. Le chiffre du contingent relève de l'accord ou, à défaut, du niveau réglementaire. LABELLISÉ : ne pas réciter un contingent « 220 h » de mémoire sans ouvrir le texte en vigueur. Vous savez que le contingent existe ; vous le lisez.\n\nPaiement ou repos compensateur de remplacement : possible selon accord. Sans consigne écrite, le réflexe pédagogique du cours est le paiement majoré (leçon suivante), pas l'invention d'un jour de repos.\n\nMois civil vs semaine : une semaine à cheval sur deux mois se rattache selon le paramétrage (semaine du lundi, règle de l'entreprise). Vous ne coupez pas 2 HS « pour finir janvier » sans règle.\n\nNature : L. 3121-28 = obligation légale de qualification. Validation managériale = process interne. Badgeage = outil, pas la loi.",
      methode:
        "1) Collecter le décompte (badge, planning). 2) Rapporter à la semaine / au cycle prévu par l'accord. 3) Seuil 35 h légal, sauf équivalence / aménagement lu. 4) Validation dans l'outil avant gel. 5) Saisir le nombre, le taux de majoration (leçon suivante), le mois. 6) Trop tard après gel : report, pas invention.",
      exemple:
        "Atelier, semaine 36 h badgeées, manager « on n'a pas demandé ». Le junior n'efface pas le badgeage tout seul et n'ajoute pas l'heure tout seul. Il met le dossier en anomalie, pièces jointes, responsable paie + manager. Une HS contentieuse se gagne ou se perd sur la preuve, pas sur un feeling de clôture.",
      erreurs:
        "Saisir des HS au-delà de 151,67 dans le mois sans regarder les semaines (un mois de 31 jours n'est pas « 7 HS automatiques »). Transformer des heures complémentaires de temps partiel en HS. Payer des HS sur un forfait jours comme un 151,67. Inventer le contingent.",
      particuliers:
        "Forfait heures : HS au-delà du forfait, selon l'accord. Annualisation : HS au-delà de la durée annuelle légale / du programme, selon l'accord — LIRE, ne pas convertir 1 607 h en un seuil maison. Astreinte travaillée : peut être du travail effectif, donc potentiellement des HS ; l'astreinte non travaillée a un autre régime (leçon sujétions).",
      exercice:
        "Temps plein 35 h mensualisé. Semaine A : 39 h validées. Semaine B : 33 h. Pas d'accord de modulation. Combien de HS sur A ? Que faites-vous de B ?",
      correction:
        "Semaine A : 39 − 35 = 4 HS (L. 3121-28), à majorer (leçon suivante). Semaine B : 2 h en dessous, ce n'est pas un crédit d'HS ; selon le contrat mensualisé, le salaire mensuel peut rester lisse, mais vous n'inventez pas 4 − 2 = 2 HS. Pas de compensation inter-semaines sans accord d'aménagement. Vous saisissez 4 HS sur A, vous ne « lissez » pas.",
    }),
    pack({
      title: "Majorations légales supplétives 25 % / 50 % (L. 3121-36)",
      description: "À défaut de CCN ou d'accord, 25 % sur les 8 premières, 50 % au-delà, dans la semaine.",
      minutes: 22,
      objectifs:
        "Vous appliquez L. 3121-36 seulement si aucun accord ou CCN ne fixe les taux. Vous calculez 12,02 × 1,25 × 4. Vous refusez d'inventer un +10 % « usage atelier ».",
      theorie:
        "L'article L. 3121-36 : à défaut de convention ou d'accord, les HS sont majorées de 25 % pour chacune des huit premières heures supplémentaires (de la 36e à la 43e inclusive, dans le décompte hebdomadaire légal), et de 50 % pour les heures suivantes. Source : legal-sources.json L3121-36.\n\nCes taux sont supplétifs : ils s'appliquent si CCN et accord se taisent. Si la CCN prévoit 10 % ou 20 % ou 30 %, LIRE LA CCN. Le cours n'invente aucun taux conventionnel. Un « chez nous c'est +15 % » sans texte est une politique interne à risque ; vous la faites qualifier par le responsable, vous ne la saisissez pas comme du L. 3121-36.\n\nBase de calcul : le salaire horaire de la majoration. Pour un mensualisé : salaire mensuel de base / 151,67, sauf règle plus favorable écrite. Au SMIC janvier 2026 : 12,02 €. Taux majoré 25 % = 12,02 × 1,25 = 15,025 €. Quatre HS : 12,02 × 1,25 × 4 = 60,10 €. Si le logiciel arrondit le taux horaire au centime avant multiplication : 15,03 × 4 = 60,12 €. Vous appliquez la règle d'arrondi du moteur (centime à la ligne). Dans les exercices de ce module, la formule demandée est 12,02 × 1,25 × 4 = 60,10 €.\n\nLes 8 premières HS à 25 % se comptent dans la semaine, pas « 8 dans le mois ». Un salarié qui fait 4 HS chaque semaine pendant 4 semaines a 16 HS à 25 %, pas 8 à 25 % et 8 à 50 %.\n\nHS structurelles chaque semaine (39 h payées) : 4 × 25 % chaque semaine. Brut = base + HS. Les HS entrent dans l'assiette des cotisations du mois (brut soumis), sauf exonérations fiscales/sociales spécifiques des HS — régime à relire (réduction de cotisations salariales / exonération d'impôt dans les limites légales). LABELLISÉ : le détail 2026 des exonérations HS (TEPA / aménagements postérieurs) se vérifie sur BOSS / URSSAF / Légifrance avant production. Dans les bulletins de base 2 500 € du cours, il n'y a pas d'HS ; n'y greffez pas une exo inventée.\n\nNature : 25 % / 50 % = obligation légale supplétive. Taux CCN = disposition conventionnelle. 12,02 = paramètre annuel SMIC 01/01/2026–31/05/2026.",
      methode:
        "1) Y a-t-il un taux CCN / accord ? Si oui, LIRE et appliquer (sous revue si premier dossier). 2) Sinon, 25 % puis 50 % selon L. 3121-36, décompte semaine. 3) Taux horaire = base / 151,67 (temps plein mensualisé). 4) Montant = taux × (1 + majoration) × nombre. 5) Intégrer au brut du mois. 6) Contrôler que le 50 % ne s'applique pas dès la première HS du mois.",
      extra: [
        code(`CAS TRAVAILLÉ — janvier 2026
Base : 151,67 h à 12,02 €  →  brut de base = 1 823,03 € (SMIC mensuel officiel)
4 HS à 25 %, pas de CCN plus favorable lue → taux légal supplétif L. 3121-36
Montant HS = 12,02 × 1,25 × 4 = 60,10 €
Brut du mois (hors autres éléments) = 1 823,03 + 60,10 = 1 883,13 €

Rappel arrondi logiciel possible : 12,02 × 1,25 = 15,025 → 15,03 €/h × 4 = 60,12 €
Consigne des exercices : 60,10 € selon 12,02 × 1,25 × 4.

Décompte : 4 HS < 8  →  aucune à 50 % cette semaine.`),
      ],
      exemple:
        "Services, CCN non lue, le prestataire a paramétré 10 % sur toutes les HS. Le junior détecte l'écart avec L. 3121-36, n'applique pas 10 % « pour ne pas coûter ». Il ouvre la CCN : si elle dit 25 %, on aligne ; si elle dit 10 % dans les conditions de l'article, on applique 10 % parce que le texte le permet, pas parce que c'est moins cher.",
      erreurs:
        "8 premières HS du mois à 25 %. Majorations sur le brut mensuel entier. Inventer +100 %. Oublier d'intégrer les HS au brut soumis. Prendre 12,31 € en janvier (SMIC de juin 2026).",
      particuliers:
        "Repos compensateur de remplacement : l'accord peut substituer du repos au paiement. Majorations du dimanche / nuit : autre fondement, souvent CCN — ne pas empiler 25 % HS + 100 % dimanche sans texte. Cadre au forfait jours : pas ce barème horaire.",
      exercice:
        "Semaine : 45 h validées, temps plein 35 h, pas de CCN lue, taux 12,02 €. Ventilez 25 % / 50 % et calculez le montant des HS.",
      correction:
        "HS = 10 h. Les 8 premières (36e à 43e) à 25 % : 12,02 × 1,25 × 8 = 120,20 €. Les 2 suivantes à 50 % : 12,02 × 1,50 × 2 = 36,06 €. Total HS = 156,26 €. Vous n'appliquez pas 10 × 25 %. Vous n'inventez pas un taux CCN.",
    }),
    pack({
      title: "Heures complémentaires du temps partiel : ce ne sont pas des HS",
      description: "L. 3123-9 et suivants : un 24 h n'ouvre pas des HS à 25 % au-delà de 24 h.",
      minutes: 20,
      objectifs:
        "Vous distinguez heures complémentaires et heures supplémentaires. Vous sachez qu'il existe des majorations légales pour les complémentaires, et que la CCN peut dire autrement — à lire, pas à inventer.",
      theorie:
        "Le salarié à temps partiel a une durée contractuelle inférieure à la durée légale (ou conventionnelle du temps plein). Les heures qu'il accomplit au-delà de son horaire contractuel, dans les limites de la loi et du contrat, sont des heures complémentaires, non des heures supplémentaires. Source : L. 3123-9 et suivants (legal-sources.json L3123-9).\n\nConséquence : appliquer 25 % / 50 % de L. 3121-36 à un temps partiel « dès la 25e heure » est une erreur de qualification. Les majorations des heures complémentaires ont leur propre régime (L. 3123-21 et suivants). À défaut d'accord, la loi prévoit des majorations (10 % dans une première fraction, 25 % au-delà, selon les seuils du texte). LABELLISÉ pour la production : avant de saisir 10 % ou 25 %, ouvrez L. 3123-29 consolidé et la CCN. Ce cours vous apprend à ne pas traiter les complémentaires comme des HS ; il ne vous demande pas d'inventer un barème CCN.\n\nLimites : les complémentaires ne peuvent porter la durée au niveau du temps plein légal (règle anti-contournement). Un volume trop élevé, répété, expose à une requalification en temps plein — dossier juridique, pas une saisie junior isolée.\n\nAvenant de complément d'heures (dispositif distinct) : temporaire, formalisé. Ce n'est pas « 8 h en extra ce mois-ci » sur un mail.\n\nPaie : les complémentaires majorées entrent dans le brut du mois, donc dans les cotisations. Le taux horaire de base d'un temps partiel au SMIC reste 12,02 € en janvier 2026 ; le mensuel n'est pas 1 823,03 €, il est proratisé (heures contractuelles × 12,02, sans descendre sous le SMIC horaire).\n\nNature : qualification légale distincte des HS. Taux de majoration = loi supplétive ou CCN. Volume = contrat + loi. Requalification = risque, escalade.",
      methode:
        "1) Lire le contrat : durée, répartition, limite de complémentaires. 2) Heures faites vs contractuelles. 3) Si dépassement : complémentaires, pas HS, tant que temps partiel. 4) Taux : CCN puis loi, texte ouvert. 5) Si les heures approchent 35 h : alerter RH (avenant, requalification). 6) Ne jamais « passer en HS » pour faire plaisir au manager.",
      extra: [
        code(`QUALIFICATION EXPRESS
Temps plein 35 h, 39 h faites     → 4 HS (L. 3121-28 / 36)
Temps partiel 24 h, 28 h faites  → 4 HEURES COMPLÉMENTAIRES (pas des HS)
Temps partiel 24 h, 35 h faites  → alerte RH : limites légales / requalification
Forfait jours                    → ni HS 151,67 ni complémentaires horaires classiques

Taux des complémentaires : LIRE L. 3123-21 s. et la CCN. Ne pas copier 25 %/50 %.`),
      ],
      exemple:
        "Commerce, 26 h. Le magasin demande 6 h de plus le samedi. Le manager dit « mets des HS, ils seront contents du 25 % ». Le gestionnaire refuse la qualification. Il saisit des complémentaires selon le contrat, alerte si le volume est récurrent, ne promet pas 25 % légal des HS.",
      erreurs:
        "HS sur un 24 h. Oublier toute majoration des complémentaires. Dépasser en silence le temps plein. Proratiser le SMIC mensuel 1 823,03 € en oubliant le contrôle du SMIC horaire 12,02 €.",
      particuliers:
        "Temps partiel annualisé, forfait, compléments d'heures : lire l'avenant. Intermittents, extras : un autre droit. Un extra n'est pas un temps partiel « à 0 h » que l'on complète.",
      exercice:
        "Contrat 28 h, 32 h validées dans la semaine, entreprise sans CCN lue pour l'instant. Que saisissez-vous ? Que ne saisissez-vous pas ? Que relisez-vous avant le taux ?",
      correction:
        "Vous saisissez 4 heures complémentaires, pas 4 HS à 25 %/50 %. Vous ne saisissez pas 4 HS. Avant le taux : L. 3123-21 et suivants + CCN. Si le texte n'est pas ouvert, vous ne pondez pas 10 % de mémoire sur un bulletin réel ; vous faites valider la rubrique. Pédagogie : la qualification d'abord, le pourcentage ensuite.",
    }),
    pack({
      title: "Nuit, dimanche, fériés, astreintes : LIRE LA CCN",
      description: "Cadre légal d'existence, rémunération souvent conventionnelle. Ne pas inventer un « +100 % ».",
      minutes: 20,
      objectifs:
        "Vous savez que ces sujétions existent dans le Code du travail, que leur paiement est très souvent conventionnel, et que le réflexe junior est LIRE LA CCN, pas inventer une majoration.",
      theorie:
        "Le Code du travail définit le travail de nuit (repère : travail dans une plage de nuit, articles L. 3122-1 et suivants), le repos dominical (L. 3132-1 et exceptions), les jours fériés (L. 3133-1 et suivants), l'astreinte (L. 3121-9 : période pendant laquelle le salarié demeure à la disposition pour intervenir, sans être à la disposition permanente comme en travail effectif).\n\nCe que la loi pose : des définitions, des protections (contreparties au travail de nuit, repos, volontariat selon les cas), et quelques règles de rémunération d'ordre public. Exemple souvent cité : le 1er mai travaillé ouvre droit à une indemnité en plus du salaire (L. 3133-6) — relire l'article consolidé avant de saisir « × 2 ». Les autres fériés chômés payés, le « +100 % dimanche », le « +10 % nuit » sont, dans la grande majorité des dossiers, des dispositions de CCN, d'accord ou de contrat.\n\nConsigne de ce cours : pour toute majoration nuit / dimanche / férié / astreinte autre que ce que vous venez de relire dans le Code, écrivez LIRE LA CCN. N'inventez ni +15 %, ni +50 %, ni un forfait astreinte de 50 €. Un usage d'entreprise peut exister : c'est un fait à qualifier (usage, engagement unilatéral), pas une licence d'invention.\n\nAstreinte : le temps d'intervention devient du travail effectif, éventuellement des HS si le seuil 35 h est franchi. Le temps d'attente a une contrepartie (financière ou repos) selon accord / CCN. Ne pas payer l'astreinte comme 8 h de nuit à 100 % « pour faire simple ».\n\nPaie : une majoration conventionnelle s'ajoute souvent au brut, donc aux cotisations. Certaines CCN distinguent majoration (dans le brut) et indemnité (régime social à vérifier). Vous ne « sortez pas de l'assiette » une majoration nuit sans BOSS.\n\nNature : définitions = obligation légale. Taux de majoration = souvent conventionnel. 50 € d'astreinte = à sourcer ou hypothèse étiquetée, jamais un barème national.",
      methode:
        "1) Qualifier le temps (nuit ? dimanche ? férié ? astreinte ? intervention ?). 2) Ouvrir CCN + accord + contrat. 3) Si silence : demander au responsable, ne pas inventer. 4) 1er mai : relire L. 3133-6. 5) Paramétrer la rubrique une fois le texte trouvé. 6) Contrôler le brut soumis.",
      noteText:
        "Interdiction pédagogique : aucun pourcentage nuit/dimanche/férié/astreinte n'est inventé dans ce module. Si un cas chiffré est nécessaire, il sera étiqueté HYPOTHÈSE de dossier ou cité d'un article nommé. LIRE LA CCN.",
      extra: [
        code(`RÉFLEXE SUJÉTIONS
Nuit / dimanche / férié (hors 1er mai à relire) / astreinte
1. Nommer le fait
2. LIRE LA CCN + accord + contrat
3. Si taux trouvé : l'appliquer, citer l'article CCN dans le dossier
4. Si silence : escalade, pas d'invention +100 %
5. Intervention pendant astreinte = travail effectif (HS possibles)
6. Ne pas empiler les majorations sans texte (HS + nuit + dimanche)`),
      ],
      exemple:
        "Hôtellerie-restauration, service dimanche. Le junior copie +100 % d'une CCN précédente (industrie). Faux. Il ouvre la CCN HCR applicable au SIRET. Tant que le texte n'est pas lu, la ligne dimanche reste en anomalie, pas en « +100 % transitoire ».",
      erreurs:
        "Inventer +10 % nuit. Payer tous les fériés comme le 1er mai. Traiter l'astreinte comme du travail effectif intégral. Empiler HS 25 % et dimanche 100 % sans article. Sortir la majoration de l'assiette « pour arranger le net ».",
      particuliers:
        "Travail du dimanche dans le commerce, ZTI, dérogations préfectorales : le droit d'ouvrir n'est pas le droit de payer n'importe comment. Fonction publique, transport, santé : régimes spéciaux, hors improvisation. Un junior en cabinet change de CCN à chaque dossier : la mémoire du dossier A est un piège.",
      exercice:
        "Salarié 35 h, 4 HS le dimanche. Le manager : « 25 % plus 100 % dimanche, tout le monde fait ça. » Que répondez-vous, que relisez-vous, que saisissez-vous ce soir si la CCN n'est pas encore extraite ?",
      correction:
        "Vous ne saisissez pas 125 % d'invention. Vous relisez L. 3121-36 (HS, si pas d'autre taux) ET la CCN sur le dimanche. Ce soir, si gel : HS au taux légal supplétif 25 % seulement si c'est le seul texte disponible, ligne dimanche en attente / anomalie, mail au responsable. Vous n'inventez pas +100 %. Le 25 % ne « contient » pas le dimanche.",
    }),
    pack({
      title: "Forfait jours, forfait heures, annualisation",
      description: "Reconnaître le mode de décompte pour ne pas coller 151,67 h et 4 HS sur un cadre au forfait.",
      minutes: 20,
      objectifs:
        "Vous identifiez forfait jours, forfait en heures et annualisation. Vous savez ce que la paie ne calcule pas comme un horaire 35 h. Vous renvoyez à l'accord pour les jours au-delà et les majorations.",
      theorie:
        "Le forfait jours (L. 3121-58 et suivants) : convention individuelle écrite, accord collectif préalable, salarié autonome (souvent cadre, pas seulement). Le temps se décompte en jours, pas en heures. Il n'y a pas de 151,67 h, pas de HS 25 % « au-delà de 35 h ». Un dépassement se traite en jours (plafond de jours, jours de repos, suivi de la charge). Le nombre de jours du forfait et les jours de RTT associés viennent de l'accord : LIRE L'ACCORD, ne pas poser 218 jours de mémoire comme une vérité 2026 universelle si vous n'avez pas vérifié le texte applicable.\n\nForfait en heures (hebdomadaire ou mensuel) : la durée forfaitaire inclut un volume d'HS déjà rémunéré dans le forfait. Les HS au-delà du forfait se paient selon les règles, si elles existent. Vous lisez la convention de forfait, vous ne doublez pas la majoration déjà intégrée.\n\nAnnualisation / modulation / cycle : la durée se décompte sur une période supérieure à la semaine. Des heures « au-dessus de 35 h » une semaine donnée peuvent n'être pas des HS si elles s'imputent sur le programme. Les HS se constatent en fin de période ou au-delà du programme, selon l'accord. Un junior qui convertit chaque semaine en HS casse le dispositif.\n\nPaie : le brut d'un forfait jours est en général un mensuel lisse, éventuellement avec jours supplémentaires payés selon l'accord. Absentéisme : retenue en jours, pas en 1/151,67, selon le paramétrage et la jurisprudence de méthode — dossier à caler, pas à inventer le jour de l'arrêt.\n\nNature : forfait = cadre légal + accord + convention individuelle. 218 jours, 10 RTT, +10 % de jours supplémentaires : CCN/accord, LIRE. 151,67 n'est pas le dénominateur d'un forfait jours.",
      methode:
        "Dès l'entrée : type de décompte dans le contrat. Si forfait : récupérer l'accord, le plafond de jours, le suivi de charge (RH). Paramétrer le profil « forfait » dans le moteur, pas le profil « 35 h ». Interdire les rubriques HS horaires sur ce profil sauf consigne écrite.",
      extra: [
        code(`PROFILS — ne pas mélanger
35 h mensualisé     base 151,67 h    HS L. 3121-28 / 36
Temps partiel       heures contrat   complémentaires L. 3123
Forfait heures      volume forfait   HS au-delà du forfait (lire)
Forfait jours       jours / an       PAS de HS 25 % horaires
Annualisation       programme annuel HS selon l'accord, pas chaque semaine

Jours du forfait, RTT, jours supplémentaires : LIRE L'ACCORD / LA CCN.`),
      ],
      exemple:
        "ETI Syntec, cadre au forfait 218 jours. Un manager valide « 10 HS de soirée ». Le junior refuse la rubrique HS 25 %. Il oriente vers le suivi de charge et, si des jours travaillés au-delà du forfait sont prévus par l'accord, vers la rubrique prévue. Il n'invente pas un taux horaire en divisant le salaire par 151,67 pour « payer le soir ».",
      erreurs:
        "HS 25 % sur forfait jours. Retenue d'absence d'un forfait en 151,67 sans règle. Annualisation oubliée : 20 HS en haute saison alors que l'accord lisse. Copier 218 jours sur un non-cadre sans accord.",
      particuliers:
        "Cadre au 35 h horaire : il peut exister, le statut cadre ne crée pas le forfait. Forfait invalidé (autonomie insuffisante, suivi de charge absent) : risque de requalification en 35 h + HS — juridique, escalade. Modulation et chômage partiel : hors de l'improvisation.",
      exercice:
        "Trois dossiers : (A) agent de production 35 h badge ; (B) cadre forfait jours ; (C) saisonnier en modulation 1er janvier–31 décembre. Pour chacun : déclenchez-vous des HS la semaine à 40 h ? Répondez en une phrase.",
      correction:
        "A : oui, 5 HS (40−35), majoration L. 3121-36 ou CCN. B : non, pas d'HS horaires ; suivre les jours et l'accord. C : non d'office ; la 40e heure peut être dans le programme annuel ; HS selon l'accord de modulation en fin de période ou hors programme. LIRE L'ACCORD avant toute saisie sur C.",
    }),
    pack({
      title: "Cas travaillé : 151,67 h à 12,02 € et 4 HS à 25 %",
      description: "Calculer le brut du mois, l'intégrer, et préparer le contrôle sans inventer d'exonération.",
      minutes: 22,
      objectifs:
        "Vous calculez 12,02 × 1,25 × 4 = 60,10 €, vous formez le brut 1 883,13 €, et vous savez ce qui reste hors de ce module (cotisations, exo HS, CCN).",
      theorie:
        "Cas pédagogique janvier 2026, métropole, temps plein 35 h, taux horaire égal au SMIC 12,02 €, mensualisation 151,67 h, 4 HS validées dans la semaine, aucune CCN plus favorable lue, donc majoration légale supplétive 25 % (L. 3121-36). AT/MP, mutuelle, PAS, RGDU : hors de l'exercice d'heures (si l'on enchaînait un bulletin complet, AT/MP resterait une hypothèse, RGDU serait potentiellement éligible près du SMIC mais NON appliquée si le cas de base dit off).\n\nÉtape 1 — brut de base. Paramètre URSSAF : 1 823,03 € pour 151,67 h au SMIC du 01/01/2026 au 31/05/2026. Vous n'utilisez pas 12,31 € (valeur au 01/06/2026).\n\nÉtape 2 — HS. 4 < 8 donc 25 %, pas 50 %. Montant = 12,02 × 1,25 × 4 = 60,10 €. Mentionner l'arrondi alternatif 60,12 € si taux horaire majoré arrondi à 15,03 €.\n\nÉtape 3 — brut du mois = 1 823,03 + 60,10 = 1 883,13 € (hors autres primes). C'est ce brut qui, dans un moteur, alimenterait T1, CSG 98,25 %, etc. Vous ne calculez pas ici le net : le module 07 l'a enseigné sur 2 500 et 3 100. Vous pouvez cependant dire : les 60,10 € sont du brut soumis, pas un net.\n\nÉtape 4 — contrôles. Semaine réelle = 39 h ? Pièce de validation ? Profil 35 h et non forfait ? Temps plein et non complémentaires ? Janvier 2026 et non juin ?\n\nÉtape 5 — ce que vous ne faites pas. Inventer une exo de cotisations salariales sur HS sans BOSS. Inventer +10 % CCN. Transformer 4 HS en repos sans accord. Appliquer la RGDU en silence « parce que c'est le SMIC ».\n\nSi les 4 HS étaient la 9e à la 12e de la semaine (semaine à 47 h), 50 % s'appliquerait : 12,02 × 1,50 × 4 = 72,12 €. Ce n'est pas le cas travaillé.\n\nNature : 12,02 et 1 823,03 = paramètre annuel. 25 % = loi supplétive. 4 HS = fait validé. 60,10 = calcul. RGDU / exo HS = non traités dans ce cas.",
      methode:
        "Reproduire le tableau. Faire signer (simulation) le manager. Intégrer au brut. Checklist profil. Stop.",
      extra: [
        code(`CAS 4 HS — janvier 2026 — L. 3121-27 / 28 / 36
Profil          temps plein 35 h mensualisé (pas forfait, pas TP)
Heures base     151,67 h
Taux            12,02 € / h   (SMIC 01/01/2026, URSSAF)
Brut base       1 823,03 €    (SMIC mensuel officiel)
HS              4 h validées, 36e à 39e de la semaine
Majoration      25 % légal supplétif (pas de CCN lue)
Montant HS      12,02 × 1,25 × 4 = 60,10 €
Brut mois       1 823,03 + 60,10 = 1 883,13 €
50 %            non (4 < 8 dans la semaine)
RGDU            non appliquée dans ce cas
AT/MP           hors exercice ; si bulletin complet : HYPOTHÈSE étiquetée
CCN nuit/dim.   non concerné ; sinon LIRE LA CCN`),
      ],
      exemple:
        "TPE 12 personnes, pas de CCN appliquée consciemment (ce qui est déjà un risque RH : il y a toujours une CCN étendue possible). Le gestionnaire applique 25 % supplétif, note « CCN à identifier », n'invente pas 10 %. Identifier la CCN est une tâche RH/paie de fond, pas un taux fantôme.",
      erreurs:
        "1 823,03 + 12,02 × 4 sans 25 %. 4 HS à 50 %. 151,67 + 4 = 155,67 h payées toutes à 12,02. SMIC 12,31 € en janvier. Exo fiscale inventée pour « booster le net des HS ».",
      particuliers:
        "Juin 2026 : SMIC horaire 12,31 € (URSSAF) — autre période, autre brut. Heures d'équivalence, pompiers d'aéroport, etc. : textes spéciaux. Un mois avec CP : les jours de CP ne sont pas des HS ; le décompte hebdomadaire des 35 h de travail effectif exclut le temps de CP.",
      exercice:
        "Même salarié, 4 HS à 25 % (60,10 €) plus 2 heures de dimanche dont la CCN n'est pas lue. Quel brut saisissez-vous ce soir ? Quelle ligne reste ouverte ?",
      correction:
        "Brut saisi : 1 823,03 + 60,10 = 1 883,13 €, si les 4 HS ne sont pas déjà le dimanche en double emploi. Ligne dimanche : ouverte, LIRE LA CCN, pas de + inventé. Si les 4 heures SONT le dimanche, vous ne les payez pas deux fois (HS + dimanche) sans texte ; anomalie, responsable. Le 60,10 € ne clôt pas le dimanche.",
    }),
    quizLesson({
      title: "Quiz — Temps de travail et heures supplémentaires",
      description: "35 h, HS, 25 %/50 %, complémentaires, CCN, cas 12,02 €.",
      passing_score: 70,
      questions: [
        q({
          question: "La durée légale du travail (L. 3121-27) est :",
          options: [
            "A. 35 heures par semaine",
            "B. 39 heures par semaine",
            "C. 151 heures par mois exactement selon la loi",
            "D. Un maximum d'heures autorisées, au-delà duquel on ne peut plus travailler",
          ],
          correct: 0,
          explanation:
            "L. 3121-27 : 35 h. 151,67 h est la mensualisation usuelle, pas l'article. Au-delà : HS possibles, dans le respect des maxima.",
        }),
        q({
          question: "Les heures supplémentaires (L. 3121-28) sont :",
          options: [
            "A. Toute heure au-delà de l'horaire du temps partiel",
            "B. Les heures accomplies au-delà de la durée légale (ou équivalente)",
            "C. Les 151,67 premières heures du mois",
            "D. Uniquement les heures du dimanche",
          ],
          correct: 1,
          explanation:
            "L. 3121-28. Le temps partiel ouvre des heures complémentaires, pas des HS. Le dimanche est une sujétion distincte (souvent CCN).",
        }),
        q({
          question: "À défaut de CCN ou d'accord, L. 3121-36 prévoit :",
          options: [
            "A. 10 % sur toutes les HS",
            "B. 25 % pour les 8 premières HS de la semaine, 50 % au-delà",
            "C. 25 % pour les 8 premières HS du mois, 50 % au-delà",
            "D. 100 % dès la première HS",
          ],
          correct: 1,
          explanation:
            "Taux légaux supplétifs, décompte hebdomadaire. Une CCN peut prévoir autre chose : LIRE LA CCN, ne pas inventer.",
        }),
        q({
          question: "4 HS à 25 % au taux 12,02 € (janvier 2026) :",
          options: [
            "A. 12,02 × 4 = 48,08 €",
            "B. 12,02 × 1,25 × 4 = 60,10 €",
            "C. 12,02 × 1,50 × 4 = 72,12 €",
            "D. 12,31 × 1,25 × 4 (SMIC de juin)",
          ],
          correct: 1,
          explanation:
            "Formule du cas travaillé. 50 % serait au-delà de 8 HS dans la semaine. 12,31 € n'est pas le SMIC de janvier.",
        }),
        q({
          question: "Un salarié à 24 h qui en accomplit 28 dans la semaine :",
          options: [
            "A. 4 HS à 25 %",
            "B. 4 heures complémentaires (pas des HS) ; majoration selon L. 3123 et/ou la CCN, à lire",
            "C. 4 HS à 50 %",
            "D. Aucun paiement, le temps partiel n'a pas d'heures au-delà du contrat",
          ],
          correct: 1,
          explanation:
            "Heures complémentaires ≠ HS. Il existe un régime de majoration légale/conventionnelle. Le silence de paiement serait illicite.",
        }),
        q({
          question: "Majoration de nuit ou de dimanche dans un dossier CCN :",
          options: [
            "A. Toujours +100 %, c'est la loi",
            "B. Toujours +10 %",
            "C. LIRE LA CCN (et l'accord) ; ne pas inventer un pourcentage",
            "D. Incluse d'office dans les 25 % d'HS",
          ],
          correct: 2,
          explanation:
            "Hors quelques règles d'ordre public (ex. 1er mai à relire), la rémunération de ces sujétions est largement conventionnelle.",
        }),
        q({
          question: "Un cadre au forfait jours, semaine à 40 h de présence :",
          options: [
            "A. 5 HS à 25 % sur la base salaire/151,67",
            "B. Pas de HS horaires L. 3121-36 ; le décompte est en jours selon l'accord",
            "C. 5 heures complémentaires",
            "D. CET Agirc-Arrco automatique",
          ],
          correct: 1,
          explanation:
            "Le forfait jours n'est pas un horaire 35 h. La CET est un sujet de cotisations (plafond), pas de temps de travail.",
        }),
        q({
          question: "Le brut de base d'un temps plein au SMIC en janvier 2026, hors HS, est :",
          options: [
            "A. 1 823,03 € (URSSAF, 151,67 h à 12,02 €)",
            "B. 1 443,11 € (net indicatif de communication)",
            "C. 4 005 €",
            "D. 1 867,02 € (mensuel au 01/06/2026)",
          ],
          correct: 0,
          explanation:
            "SMIC mensuel 01/01–31/05/2026. Le net 1 443,11 € n'est pas une formule de brut. Juin a un autre horaire 12,31 €.",
        }),
        q({
          question: "Dans une semaine à 45 h, temps plein, pas de CCN, combien d'heures à 50 % ?",
          options: [
            "A. 10",
            "B. 8",
            "C. 2 (les heures au-delà des 8 premières HS)",
            "D. 0, tout est à 25 %",
          ],
          correct: 2,
          explanation:
            "10 HS au total : 8 à 25 %, 2 à 50 % (L. 3121-36 supplétif).",
        }),
      ],
    }),
  ],
};
