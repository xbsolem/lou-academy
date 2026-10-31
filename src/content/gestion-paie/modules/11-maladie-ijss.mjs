import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 11,
  title: "Arrêts de travail, IJSS, maintien et subrogation",
  description:
    "Traiter un arrêt du certificat à la DSN : conditions IJSS, carence, lecture du maintien CCN et du plancher légal, subrogation, AT/MP, maternité, paternité, adoption et temps partiel thérapeutique, sans inventer un taux journalier 2026.",
  lessons: [
    pack({
      title: "L'arrêt de travail : pièces, délais, qualification paie",
      description:
        "Ouvrir un dossier d'arrêt avant de parler d'indemnités journalières.",
      minutes: 20,
      objectifs:
        "Vous savez quels documents ouvrir un arrêt, quelle nature poser (maladie, AT, MP, maternité, etc.), quels délais relancer, et ce qu'un junior ne décide pas seul.",
      theorie:
        "Un arrêt de travail est un fait médical et un fait social. La paie ne « diagnostique » pas. Elle reçoit un avis d'arrêt, des dates, une nature (maladie, accident du travail, maladie professionnelle, maternité, paternité, adoption, temps partiel thérapeutique), et elle en déduit : maintien ou non de salaire, IJSS, subrogation, DSN, titres-restaurant, CP.\n\nPièce centrale : l'avis d'arrêt de travail (cerfa), volet employeur. Le salarié adresse en principe les volets destinés à la caisse dans les délais du Code de la sécurité sociale ; l'employeur reçoit le volet qui lui est destiné. Les délais précis (souvent cités à 48 heures pour l'employeur) se relisent dans le texte et sur Ameli / Service-Public au jour J : un junior ne les récite pas de mémoire si le dossier est contentieux, il les vérifie et relance.\n\nQualification : la case AT/MP n'est pas une commodité de paramétrage. Un accident de trajet, un accident du travail, une maladie ordinaire n'ont pas le même régime d'IJ, de carence, de tarif AT, de protection contre le licenciement. Si le salarié écrit « je me suis fait mal chez moi » et que le manager code AT, vous stoppez et vous alertez.\n\nPériode d'emploi : janvier 2026 dans les exercices. Un arrêt commencé en décembre et toujours ouvert en janvier est un dossier de reprise, pas un premier arrêt. Les dates d'arrêt, de prolongation, de reprise anticipée, de temps partiel thérapeutique, doivent coller à la DSN et au bulletin.\n\nContrôle médical employeur : existe dans un cadre légal ; ce n'est pas le junior qui le déclenche. Contre-visite, arrêt de trop longue durée, suspicion : RH / responsable paie.\n\nSecret médical : le bulletin ne porte pas le diagnostic. Le motif détaillé ne circule pas dans l'open space. Vous traitez des dates et une nature administrative.\n\nObligation légale : déclaration des arrêts selon les canaux (DSN signalement, attestation de salaire pour le calcul des IJ — souvent via DSN). Paramètre d'entreprise : subrogation ou non, délai interne de saisie. Disposition conventionnelle : maintien. Hypothèse pédagogique : tout montant d'IJ chiffré dans ce module est une illustration de MÉTHODE, à recouper sur Ameli pour 2026, jamais un taux journalier officiel inventé.",
      methode:
        "1. Réceptionner le volet employeur, dater l'arrivée.\n2. Nature : maladie / AT / MP / maternité / paternité / adoption / autre.\n3. Dates : premier jour, dernier jour, prolongation ou initial.\n4. Ancienneté à la veille de l'arrêt (pour le maintien).\n5. Subrogation déjà en place ? Mandat ? CCN ?\n6. Signalement DSN selon process du responsable.\n7. Attestation de salaire / DSN pour IJ : pièces de rémunération des périodes de référence.\n8. Ne pas calculer un maintien avant d'avoir ouvert la CCN et le plancher légal.",
      noteText:
        "Limite : un junior n'antidate pas un AT « pour rendre service », n'invente pas une reprise, et n'affiche pas de diagnostic. Un arrêt sans pièce au gel des variables se traite comme absence à instruire (module absences), pas comme maladie définitive.",
      exemple:
        "Atelier Nord Paie, 8 janvier 2026. Arrêt maladie de Léo, début 6 janvier, reçu le 8. Lina ouvre le dossier : nature maladie (pas AT), premier arrêt, ancienneté 2 ans à confirmer par RH, CCN Bois à LIRE pour le maintien (aucun pourcentage inventé), subrogation du dossier client = oui, hypothèse interne. Elle prépare le signalement, elle ne saisit pas 50 % d'IJ « au hasard ».",
      extra: [
        code(`OUVERTURE DOSSIER ARRÊT
Salarié / nature (maladie AT MP mat. pat. adoption TPT) : ........
Dates arrêt : du ........ au ........   initial / prolongation
Date réception employeur : ........
Ancienneté veille d'arrêt : ........  (RH)
CCN / IDCC : ........  article maintien : à extraire, pas à inventer
Subrogation : oui / non / à confirmer
IJ : attestation / DSN — périodes de salaire de référence : ........
Carence IJSS : à déterminer selon nature (leçon carence)
Maintien employeur : CCN + D. 1226-1 s. — LIRE
Pièce médicale : volet employeur  oui / non
DSN : signalement  fait / à faire  par : ........`),
      ],
      erreurs:
        "Coder AT par défaut. Calculer les IJ avant d'avoir les salaires de référence. Appliquer le maintien « 100 % comme partout ». Laisser un arrêt hors DSN. Discuter le diagnostic avec le manager.",
      particuliers:
        "Arrêt à l'étranger, hospitalisation, temps partiel, multi-employeurs : la caisse et le responsable paie. Accident de trajet : régime AT pour les IJ, règles propres. Reprise anticipée : pièce, DSN, ne pas payer un jour d'arrêt et un jour travaillé en double sans contrôle.",
      exercice:
        "Vous recevez le 20 janvier un mail : « Sophie est malade depuis le 12, elle amènera le papier plus tard, mets-la en arrêt. » Que saisissez-vous le 20 ? Que relancez-vous ? Que ne faites-vous pas ?",
      correction:
        "Le 20 : nature provisoire « absence à instruire / arrêt annoncé non reçu », relance tracée salarié + manager, alerte responsable (dates, DSN). Vous ne codez pas un AT. Vous ne calculez pas d'IJ. Vous ne maintenez pas 100 % sans texte. Si la clôture est le 24 et qu'aucune pièce n'arrive : consigne du responsable (retenue d'absence vs maintien sous réserve). Un mail manager n'est pas un avis d'arrêt.",
    }),
    pack({
      title: "IJSS maladie : conditions d'ouverture et méthode de calcul",
      description:
        "Savoir comment se construit une indemnité journalière sans mémoriser un montant 2026 inventé.",
      minutes: 24,
      objectifs:
        "Vous citez les grandes conditions d'ouverture des IJ maladie, vous savez de quels salaires part la caisse, et vous appliquez une MÉTHODE (SJR, taux, plafond, carence) en étiquetant tout euro comme pédagogique à vérifier sur Ameli.",
      theorie:
        "Les indemnités journalières de sécurité sociale (IJSS) maladie sont versées par l'assurance maladie, pas par l'employeur, lorsque les conditions d'ouverture des droits sont réunies. L'employeur déclare les salaires qui permettent à la caisse de calculer. Le gestionnaire de paie doit comprendre la méthode pour contrôler un maintien, une subrogation, un trop-perçu, un net, pas pour « remplacer la CPAM ».\n\nConditions d'ouverture (principe, à relire sur Ameli / Code de la sécurité sociale au jour J) : affiliation, activité minimale ou cotisations minimales sur une période de référence, arrêt prescrit, transmission des volets dans les délais. Les seuils d'heures ou de cotisations évoluent : un junior les vérifie, il ne les invente pas dans un dossier réel. Temps partiel, entrée récente, chômage précédent : cas à risque, escalade.\n\nMéthode de calcul, à connaître comme MÉTHODE, pas comme montant 2026 gravé :\n1. Identifier les périodes de salaire de référence (souvent les trois mois civils précédant l'arrêt, ou une logique de 12 mois si salaires irréguliers — confirmer Ameli).\n2. Construire le salaire journalier de référence (SJR) : masse de ces salaires divisée par un dénominateur journalier officiel (souvent cité : 91,25 pour trois mois — À VÉRIFIER sur Ameli pour la période).\n3. Appliquer le taux d'IJ maladie prévu par les textes (souvent cité : 50 % du SJR — À VÉRIFIER, des majorations existent selon situation familiale dans certains cadres historiques : ne pas les inventer).\n4. Plafonner le SJR ou l'IJ selon le plafond en vigueur (souvent lié à un multiple du SMIC) : LIRE Ameli 2026. Le SMIC horaire janvier 2026 est 12,02 € (URSSAF) ; cela ne vous autorise pas à fabriquer le plafond d'IJ « à la main » si Ameli n'est pas ouvert.\n5. Déduire le délai de carence maladie (leçon suivante) : les premiers jours peuvent ne pas être indemnisés par la caisse.\n6. Les IJ maladie sont en principe journalières, y compris dimanches et fériés après carence, selon les règles de la caisse — à confirmer, ne pas compter « seulement les ouvrés » par habitude d'absence.\n\nCe module ne publie aucun « taux journalier officiel 2026 de l'IJ maladie » en euros. Tout chiffrage ci-dessous est une HYPOTHÈSE pédagogique de parcours de méthode, source à recouper : Ameli, indemnités journalières, période 2026.",
      methode:
        "Pour contrôler un dossier :\n1. Ouvrir Ameli + notice de la période (2026).\n2. Noter : formule du SJR, dénominateur, taux, plafond, carence, majorations éventuelles.\n3. Reprendre les bruts des mois de référence (attention 13e mois, primes : inclusion selon règle Ameli, pas selon votre intuition).\n4. Recalculer le SJR et l'IJ brute journalière.\n5. Comparer à ce que la caisse / le flux subrogation a versé.\n6. Écart : pièce, régularisation, jamais « on aligne le bulletin sur un chiffre entendu à la machine à café ».\n7. Documenter : « calcul pédagogique vs calcul caisse ».",
      noteText:
        "Jamais de taux IJ 2026 inventé. Si Ameli n'est pas consulté, vous enseignez et vous appliquez la méthode, et tout euro est étiqueté HYPOTHÈSE pédagogique. Un vrai bulletin d'arrêt se contrôle avec le flux caisse ou l'attestation, pas avec un souvenir de formation.",
      exemple:
        "Salarié à 3 100,00 € brut stables, arrêt maladie le 12 janvier 2026. Les trois mois civils précédents, sous HYPOTHÈSE que la caisse retient octobre–décembre 2025 à 3 100,00 € chacun, donnent 9 300,00 €. Si (À VÉRIFIER Ameli) le dénominateur est 91,25 et le taux 50 % sans plafond atteint : SJR = 9 300 / 91,25 ≈ 101,92 € ; IJ brute journalière hypothèse = 50,96 €. Ce 50,96 € N'EST PAS le taux officiel 2026. C'est le résultat d'une méthode classique à confirmer, éventuellement plafonnée.",
      extra: [
        code(`MÉTHODE IJ MALADIE — HYPOTHÈSE PÉDAGOGIQUE (source à recouper : Ameli 2026)
Salaires de référence (hyp.)     3 × 3 100,00 = 9 300,00 €
Dénominateur (hyp. classique)    91,25          ← VÉRIFIER Ameli
SJR                              9 300 / 91,25 ≈ 101,9178 €
Taux IJ maladie (hyp. classique) 50 %           ← VÉRIFIER Ameli
IJ brute journalière (hyp.)      50,96 €
Plafond SJR / IJ 2026            NE PAS INVENTER — ouvrir Ameli
                                 (souvent un multiple du SMIC ; SMIC 12,02 €/h
                                 au 01/01/2026 ne suffit pas à forger le plafond)
Carence maladie IJSS             en principe 3 jours (leçon dédiée, vérifier)
IJ du 12/01 au 31/01             ≠ 20 × 50,96 € si carence et si dimanches inclus
                                 Compter les jours INDEMNISÉS, pas les ouvrés.

Étiquette obligatoire sur tout euro d'IJ de cette formation :
« HYPOTHÈSE pédagogique — source à vérifier : Ameli, IJ 2026 ».`),
      ],
      erreurs:
        "Mémoriser 50,96 € comme « l'IJ 2026 ». Oublier le plafond. Prendre 3 100 / 30 comme IJ. Inclure ou exclure une prime au feeling. Compter 22 IJ parce que le mois a 22 ouvrés. Utiliser le PMSS 4 005 € comme plafond d'IJ maladie sans source (le PMSS sert surtout d'autres assiettes ; le plafond d'IJ maladie se lit sur Ameli).",
      particuliers:
        "Salaires irréguliers, commissions, 13e mois versé en décembre, entrée récente : la période de référence change. Temps partiel : salaires de référence plus faibles, IJ plus faibles. Multi-employeurs : chaque attestation. Non-cadres / cadres : pas un taux IJ maladie différent du seul fait du statut cadre ; le brut de référence change.",
      exercice:
        "Avec la méthode hypothèse 91,25 et 50 %, salaires 3 × 2 500,00 €, calculez SJR et IJ journalière pédagogique. Puis écrivez la phrase de vigilance que vous mettrez dans le dossier réel avant de maintenir un salaire.",
      correction:
        "Masse = 7 500,00 €. SJR hyp. = 7 500 / 91,25 ≈ 82,1918 €. IJ hyp. = 41,10 € (50 %, arrondi au centime à confirmer selon règle d'arrondi caisse).\nPhrase : « IJ 41,10 € / j = HYPOTHÈSE de méthode (3 mois / 91,25, 50 %). Avant maintien et subrogation du dossier réel, recouper la formule, le plafond et la carence sur Ameli période 2026, puis le flux caisse. Ne pas saisir 41,10 € comme barème national. »",
    }),
    pack({
      title: "Délai de carence : IJSS, employeur, natures d'arrêt",
      description:
        "Ne plus confondre carence caisse, carence maintien, et absence de carence selon la nature.",
      minutes: 18,
      objectifs:
        "Vous distinguez les carences, vous savez que la maladie IJSS n'a pas le même schéma que l'AT ou la maternité, et vous comptez les jours indemnisés sans inventer un euro.",
      theorie:
        "Le mot « carence » désigne plusieurs objets. Les mélanger produit des bulletins où le salarié est à zéro trois jours de trop, ou payé trois jours de trop.\n\n1. Carence des IJSS maladie : l'assurance maladie n'indemnise en principe pas les premiers jours d'un arrêt maladie ordinaire. Le délai classiquement enseigné est de trois jours. Relisez Ameli / CSS pour la période : des exceptions existent (certaines ALD, arrêts rapprochés, dispositifs particuliers). Un junior ne « saute » pas la carence parce que le salarié est cadre, et ne l'allonge pas à sept jours parce que le maintien légal a, lui, une autre carence.\n\n2. Carence du maintien employeur (plancher légal D. 1226-1 et s., ou CCN) : c'est un autre compteur. Le maintien légal historique comporte un délai de carence propre, souvent plus long que les trois jours IJSS. Vous le lisez dans le décret ou dans la CCN. Vous ne le supposez pas égal à la carence IJ.\n\n3. AT / MP : les IJ AT/MP n'ont en principe pas la même carence que la maladie ordinaire (souvent indemnisation dès le lendemain de l'accident pour les IJ, jour de l'accident à la charge employeur — schéma classique à confirmer Ameli). Ne pas coller trois jours de carence maladie sur un AT.\n\n4. Maternité, paternité, adoption : pas de carence IJSS du type maladie ordinaire. Les IJ courent selon les dates du congé. Vérifier Ameli.\n\n5. CCN : certaines conventions réduisent ou compensent la carence employeur (maintien dès le premier jour). C'est une disposition conventionnelle. Vous la lisez. Vous n'inventez pas « Syntec = 0 jour » de mémoire.\n\nConséquence paie : pendant la carence IJ, le salarié peut n'avoir que le maintien employeur, ou rien, ou 100 % CCN. Le net du premier bulletin d'arrêt n'est pas un calque du bulletin sain. Expliquer la carence évite la réclamation « on m'a volé trois jours ».\n\nPériode : janvier 2026. Un arrêt du 12 au 31 janvier : si carence IJ maladie de 3 jours (12, 13, 14), les IJ caisse, sous cette hypothèse, commencent le 15. Le nombre de jours calendaires d'arrêt n'est pas le nombre d'IJ.",
      methode:
        "Pour chaque arrêt :\n1. Nature.\n2. Carence IJSS applicable (Ameli) — exceptions ?\n3. Carence maintien CCN.\n4. Carence maintien légal si CCN absente ou moins favorable.\n5. Calendrier jour par jour sur le mois (grille).\n6. Ne jamais appliquer la carence d'un autre salarié « du même service ».",
      exemple:
        "Maladie 12–31 janvier 2026, 20 jours calendaires d'arrêt. HYPOTHÈSE carence IJSS 3 jours : 17 jours d'IJ caisse dans le mois, pas 20, pas 14 ouvrés. Si la CCN (lue) maintient dès le 1er jour à un certain taux : l'employeur complète dès le 12. Si seul le plancher légal s'applique, une carence employeur peut laisser des jours sans maintien — LIRE D. 1226-1. Le junior pose la grille, il ne « met 90 % partout ».",
      extra: [
        code(`GRILLE JANVIER 2026 — arrêt maladie du 12 au 31 (exemple)
Jour    Type        IJSS (hyp. carence 3 j)    Maintien (à remplir APRÈS lecture CCN)
12 lun  arrêt       carence                    ?
13 mar  arrêt       carence                    ?
14 mer  arrêt       carence                    ?
15 jeu  arrêt       IJ (hyp.)                  ?
...
31 sam  arrêt       IJ (hyp.)                  ?
1er jan férié hors arrêt : sans objet ici

IJ hyp. journalière : NE PAS INVENTER un barème 2026.
Si vous illustrez : 17 × [IJ hyp. étiquetée], source Ameli à confirmer.
Jour de l'AT (autre nature) : ne pas copier cette grille maladie.`),
      ],
      erreurs:
        "Trois jours de carence sur un AT. Sept jours de carence IJSS parce que le maintien légal parle de sept jours. Carence en jours ouvrés alors que la caisse compte en calendaires (à confirmer, ne pas inverser par habitude CP). Oublier une exception ALD. Appliquer la carence deux fois (caisse + « encore 3 jours employeur » hors texte).",
      particuliers:
        "Deux arrêts maladie rapprochés : la carence IJ peut ne pas se redéclencher dans des cas prévus — Ameli. Prolongation : ce n'est pas un nouvel arrêt pour la carence déjà courue. Rechute AT : régime AT, pas maladie. Temps partiel thérapeutique : pas une carence maladie classique sur les jours travaillés.",
      exercice:
        "Arrêt maladie du 28 janvier au 4 février 2026. Carence IJSS hyp. 3 jours. Combien de jours d'IJ en janvier ? en février ? Pourquoi le dénominateur de retenue d'absence du module 10 ne règle pas cette question ?",
      correction:
        "Janvier : 28, 29, 30, 31 = 4 jours d'arrêt. Carence 28-29-30 : 1 jour potentiellement indemnisé par la caisse en janvier (le 31), sous hypothèse 3 jours et sans exception. Février : 1–4 = 4 jours, plus de carence : 4 IJ en février. Total 5 IJ sur 8 jours d'arrêt.\nLa retenue d'absence du module 10 concerne les absences non maintenues. Ici, maladie : IJ + maintien se substituent au salaire selon les textes. On ne fait pas 3 100 × 8 / 31 « comme un CSS » sans avoir lu maintien et IJ. Deux mécaniques distinctes.",
    }),
    pack({
      title: "Maintien de salaire : lire la CCN et le plancher légal",
      description:
        "Apprendre à extraire un maintien sans inventer un pourcentage conventionnel.",
      minutes: 22,
      objectifs:
        "Vous savez dans quel ordre lire les sources du maintien, quels champs extraire (ancienneté, carence, taux, durée, déduction des IJ), et vous refusez tout pourcentage CCN non lu dans le texte.",
      theorie:
        "Le maintien de salaire en maladie n'est pas un usage national à 100 % ni à 90 %. C'est un empilement de sources.\n\nOrdre de lecture :\n1. Convention collective applicable (IDCC du bulletin) : chapitre maladie, absences, garanties, annexes. Vous extrairez : condition d'ancienneté, délai de carence, pourcentage du brut ou du net, durée en jours ou en mois selon ancienneté, maintien brut ou net, déduction des IJSS, subrogation, délai de franchise entre deux arrêts, traitement des AT/MP distinct ou non.\n2. Accord d'entreprise ou usage plus favorable, s'il est établi.\n3. Contrat de travail s'il promet un maintien.\n4. Plancher légal : articles L. 1226-1 et D. 1226-1 et suivants du Code du travail (garantie de rémunération en cas d'absence maladie ou accident, hors AT/MP selon le texte). Ce plancher s'applique notamment à défaut de dispositions conventionnelles plus favorables, dans les conditions du décret (ancienneté minimale, carence, taux, durées croissantes avec l'ancienneté, déduction des IJ). VOUS OUVREZ Légifrance. Vous ne récitez pas un « 90 % puis 66 % » entendu en formation interne comme s'il était forcément le texte consolidé du jour, et vous n'appliquez JAMAIS un pourcentage CCN inventé.\n\nCe que le junior cherche dans D. 1226-1 et s. (méthode de lecture, pas barème recopié de mémoire) :\n- quelle ancienneté minimale ?\n- quelle carence employeur ?\n- quels taux, sur quelle assiette (brut que le salarié aurait perçu, déduction IJ) ?\n- quelles durées par palier d'ancienneté ?\n- le régime AT/MP est-il dans le même article ou ailleurs ?\n\nComparaison CCN / loi : on ne choisit pas « ce qui arrange l'entreprise ». Le plancher légal protège. Une CCN plus favorable s'applique. Une CCN moins favorable ne descend pas sous le plancher lorsque celui-ci est dû. L'analyse « plus favorable » peut être globale (taux × durée × carence) : en cas de doute, responsable paie / juriste, pas un tableur improvisé.\n\nAT/MP : souvent un maintien CCN différent (plus favorable). Encore une fois : lire, ne pas copier le chapitre maladie ordinaire.\n\nPériode : janvier 2026. Aucun euro de minimum Syntec, métallurgie ou commerce n'est cité. Aucun « 90 % Syntec » n'est enseigné. La compétence est de TROUVER l'article.",
      methode:
        "Fiche d'extraction (à photocopier mentalement) :\n1. IDCC + intitulé CCN + avenant de maintien en vigueur.\n2. Article et date du texte.\n3. Champ : maladie / AT / MP / maternité (souvent des articles distincts).\n4. Ancienneté du salarié à la date d'arrêt.\n5. Carence, taux, durée, assiette, IJ déduites oui/non, net ou brut.\n6. Plancher D. 1226-1 : extraire les mêmes champs depuis Légifrance.\n7. Décision : quelle garantie s'applique.\n8. Si le texte est ambigu : stop, N+1.",
      noteText:
        "INTERDICTION PÉDAGOGIQUE : inventer un pourcentage de maintien CCN. Si le texte n'est pas sous les yeux, vous écrivez « maintien : à extraire, IDCC … article … ». Un faux 80 % enseigné ici serait une faute, pas une simplification.",
      exemple:
        "Cabinet, dossier IDCC à confirmer sur le bulletin. Arrêt maladie, ancienneté 14 mois. La junior ouvre Légifrance, CCN, cherche « indemnisation », « maladie », « maintien ». Elle trouve un tableau ancienneté / durée / pourcentage. Elle le recopie dans le dossier avec le n° d'article. Elle ouvre D. 1226-1 et compare. Elle n'utilise pas le tableau d'un autre client « assez proche ». Le client qui dit « on fait toujours 100 % pendant un mois » : soit c'est un usage/accord écrit, soit c'est une libéralité à faire valider, soit c'est faux.",
      extra: [
        code(`FICHE MAINTIEN — à remplir, jamais à pré-remplir d'un %
IDCC / CCN : .....................  article : .......... avenant du : ......
Nature d'arrêt : maladie / AT / MP / autre
Ancienneté veille d'arrêt : ......
CCN : carence ......  taux ......  durée ......  assiette brut/net ......
      IJ déduites : oui/non   subrogation prévue : oui/non
Légal D. 1226-1 s. (Légifrance, texte consolidé du jour) :
      ancienneté min ......  carence ......  taux ......  durée ......
Plus favorable : CCN / légal / accord entreprise / contrat
Décision appliquée : ................................
Validé par : ..................... date : ......
% saisi dans le logiciel : uniquement celui de cette fiche.`),
      ],
      erreurs:
        "Appliquer 100 % « humanité ». Copier le % du précédent employeur. Confondre maintien net (IJ + complément = net habituel) et maintien brut. Oublier de déduire les IJ alors que le texte le dit (double paiement). Appliquer le maintien légal à un salarié sans l'ancienneté minimale du décret. Inventer un % « métallurgie » ou « Syntec ».",
      particuliers:
        "Ancienneté < seuil légal et CCN muette : peut-être aucun maintien employeur, seulement IJ si droits ouverts — à confirmer. Cadres dirigeants, VRP, forfaits : lire les annexes. Prévoirance (indemnité complémentaire organisme) : ce n'est pas la CCN maintien employeur, c'est un contrat (module 13). Les deux peuvent se cumuler selon les clauses : lire, ne pas additionner deux fois le même complément.",
      exercice:
        "On vous dit : « Mets 90 % comme d'habitude, tout le monde sait que c'est le légal. » Rédigez votre réponse au responsable (5 lignes) et listez les 6 champs que vous allez extraire de D. 1226-1 et de la CCN avant toute saisie.",
      correction:
        "Réponse : « Je n'applique pas 90 % de mémoire. Je lis D. 1226-1 consolidé et l'article maintien de l'IDCC du salarié. Le chiffre 90 % n'est saisi que s'il sort du texte applicable à CET arrêt, CETTE ancienneté, CETTE nature. »\nSix champs : ancienneté minimale ; carence employeur ; taux ; durée / paliers ; assiette (brut/net, éléments inclus) ; sort des IJ (déduites ou non) + éventuellement AT vs maladie. Sans ces champs, pas de ligne de paie.",
    }),
    pack({
      title: "Subrogation : qui touche les IJ, qui paie le salarié",
      description:
        "Comprendre le flux financier et le bulletin lorsque l'employeur perçoit les IJ.",
      minutes: 18,
      objectifs:
        "Vous expliquez la subrogation, ses conditions de principe, son effet sur le bulletin et la DSN, et vous évitez le double paiement ou le zéro injustifié.",
      theorie:
        "Sans subrogation, la caisse verse les IJ au salarié, l'employeur verse le complément de maintien s'il est dû (maintien − IJ, selon le texte). Le salarié reçoit deux flux. Le bulletin montre souvent le salaire maintenu, la retenue de l'absence, le complément, et parfois l'IJ en information.\n\nAvec subrogation, l'employeur perçoit les IJ à la place du salarié et verse au salarié le maintien convenu (souvent le salaire maintenu, IJ incluses dans la trésorerie employeur). Le salarié n'a en principe qu'un flux : l'employeur. Cela simplifie le net du salarié et impose à la paie un suivi d'IJ à recevoir (compte d'attente, lettrage avec les virements CPAM).\n\nLa subrogation n'est pas automatique pour tout dossier. Elle suppose en pratique un maintien au moins égal aux IJ, et un cadre (mandat, accord du salarié, CCN, usage, paramétrage DSN). Les conditions précises se lisent dans le CSS et les notices net-entreprises / Ameli. Un junior n'active pas la subrogation « pour voir ».\n\nBulletin : distinguer brut soumis, maintien, IJ (souvent non soumises aux cotisations de Sécurité sociale dans les limites, régime à relire BOSS / URSSAF — les IJSS maladie ont un régime social spécifique, CSG/CRDS possible selon les cas). Ne pas assujettir les IJ comme un salaire si le régime dit le contraire, et ne pas les oublier dans le net si elles passent par le bulletin.\n\nRisques : double versement (caisse + employeur du brut plein + IJ au salarié). Ou l'inverse : subrogation cochée, maintien 0, IJ pas encore reçues, net nul. Suivi d'en-cours IJ. Régularisation lorsque la caisse paie avec un mois de décalage — fréquent.\n\nPériode : janvier 2026. Les montants d'IJ du bulletin restent des HYPOTHÈSES de méthode, source Ameli. La subrogation ne crée pas le droit à IJ ; elle déplace le créancier.",
      methode:
        "1. Le dossier a-t-il la subrogation (contrat, CCN, case DSN, mandat) ?\n2. Le maintien prévu est-il ≥ IJ ?\n3. Paramétrage : IJ en recette employeur, salaire maintenu au salarié.\n4. Grille des jours (carence / IJ / maintien).\n5. Après clôture : rapprocher virement CPAM / MSA et compte d'attente.\n6. Si la caisse paie quand même le salarié : trop-perçu à gérer, pas à ignorer.\n7. Expliquer au salarié : « vous ne recevrez pas de virement CPAM, l'employeur est subrogé » — seulement si c'est vrai.",
      exemple:
        "ETI, subrogation posée. Arrêt du 12 au 31 janvier, carence 3 jours, 17 IJ. HYPOTHÈSE pédagogique IJ 50,96 €/j (méthode 3 100 € / 91,25 / 50 %, à vérifier Ameli) : 17 × 50,96 = 866,32 € d'IJ hyp. à recevoir par l'employeur. Si la CCN lue maintient du brut, le salarié voit un brut maintenu, pas 866 € en plus sur son compte perso. Comptabilité : créance IJ 866,32 € (hyp.). Si Ameli donne une autre IJ, le lettrage écartera 866,32 : c'est précisément pourquoi on étiquette l'hypothèse.",
      extra: [
        code(`DEUX SCHÉMAS (même arrêt, même maintien LU dans la CCN)
A. Sans subrogation
   CPAM → salarié (IJ)
   Employeur → salarié (complément maintien)
   Risque : salarié croît que le complément est le salaire plein.

B. Avec subrogation
   CPAM → employeur (IJ)
   Employeur → salarié (maintien)
   Paie : suivre IJ à recevoir ≠ IJ calculées en hyp.
   Comptabilité : lettrage 43x / 64 selon paramétrage interne.

HYPOTHÈSE pédagogique IJ : 50,96 €/j × 17 j = 866,32 €
Source à vérifier : Ameli 2026. Ne pas saisir 866,32 comme barème.`),
      ],
      erreurs:
        "Cocher subrogation et laisser la caisse payer le salarié. Maintenir 100 % ET laisser les IJ au salarié en plus. Assujettir les IJ au régime complet du salaire sans lire le BOSS. Annoncer au salarié un montant d'IJ 2026 inventé. Oublier le lettrage comptable.",
      particuliers:
        "Subrogation partielle, changement de caisse, AT (caisse AT, taux IJ différents — méthode Ameli, pas un euro inventé), MJPM, saisie sur salaire : le saisissable se calcule sur les éléments prévus, les IJ ont un régime de saisissabilité à vérifier. MSA vs régime général : même prudence de source.",
      exercice:
        "Sans subrogation, maintien CCN lu = salaire de base moins IJ. IJ hyp. 50,96 € × 17. Salaire de base 3 100,00 €, 20 jours d'arrêt dont 3 de carence sans IJ. Quels flux le salarié reçoit-il ? Quel risque si on paie quand même 3 100 € pleins ?",
      correction:
        "Flux 1 : IJ caisse, 17 × 50,96 = 866,32 € (hyp., Ameli à confirmer). Flux 2 : complément employeur selon la CCN LUE. Si la CCN dit « maintien du brut, IJ déduites », le complément théorique de méthode = 3 100 − 866,32 = 2 233,68 €, SOUS RÉSERVE que le maintien porte sur tout le mois et que la carence CCN soit 0 — ce qui doit sortir du texte, pas de cette phrase. Si on verse 3 100 en plus des 866 au salarié, trop-perçu d'IJ non déduites. D'où la lecture obligatoire de la clause « IJ déduites ».",
    }),
    pack({
      title: "Accident du travail et maladie professionnelle",
      description:
        "Changer de régime : carence, IJ, maintien, tarif AT, sans copier la maladie ordinaire.",
      minutes: 20,
      objectifs:
        "Vous savez pourquoi un AT/MP ne se paie pas comme une maladie, quelles pièces et déclarations distinguent les deux, et comment appliquer la MÉTHODE d'IJ AT sans forger un taux 2026.",
      theorie:
        "L'accident du travail, l'accident de trajet et la maladie professionnelle relèvent d'un risque distinct. Conséquences paie : taux d'IJ différent de la maladie, carence différente, souvent maintien CCN plus favorable, protection de l'emploi, imputation du risque AT/MP de l'établissement (taux notifié Carsat — HYPOTHÈSE pédagogique catalogue 1,50 %, jamais un taux national).\n\nDéclaration : l'employeur déclare l'AT dans les délais (DAT). Ce n'est pas une « DSN comme un arrêt maladie ». Le junior alerte le jour même, il ne recode pas en maladie pour éviter un malus AT. Recoder est une faute.\n\nIJ AT/MP : méthode à lire sur Ameli (période 2026). Schéma classiquement enseigné : pourcentage du SJR plus élevé que la maladie, souvent palier (ex. un taux les premiers jours, un taux ensuite), plafond différent (souvent lié au PMSS, distinct du plafond maladie lié au SMIC). Ces éléments sont une MÉTHODE de lecture. Cette formation ne publie pas un euro d'IJ AT 2026. Toute illustration chiffrée est une hypothèse étiquetée.\n\nJour de l'accident : souvent payé par l'employeur (journée entière), les IJ commençant au lendemain — confirmer Ameli. Ne pas appliquer 3 jours de carence maladie.\n\nMaintien : article CCN AT, pas l'article maladie. Plancher légal maladie (D. 1226-1) n'est pas à copier-coller. Lire.\n\nTarif AT/MP : assiette des cotisations AT sur les salaires du dossier ; le taux est notifié. Un arrêt AT n'annule pas le taux ; il peut peser sur la sinistralité future, hors autonomie junior.\n\nCP : l'AT/MP est en principe assimilé à du travail effectif pour les droits à congés dans les conditions du Code (y compris évolutions 2024 sur la maladie : vérifier L. 3141-5 et s. consolidés). Ne pas inventer un nombre de jours. Méthode : ouvrir le texte, qualifier l'assimilation.",
      methode:
        "1. Nature confirmée (AT / trajet / MP / maladie).\n2. DAT / déclaration MP : qui, quand (RH, HSE, paie).\n3. Ameli : IJ AT, carence, SJR, plafond — recopier la formule 2026, ne pas la deviner.\n4. CCN chapitre AT.\n5. Subrogation AT : même prudence.\n6. DSN : nature AT, pas maladie.\n7. Taux AT dossier : notification, pas 1,50 % « parce que le catalogue » sauf hypothèse pédagogique déclarée.",
      exemple:
        "Industrie, salarié blessé sur presse le 9 janvier 2026, sortie le jour même. Lina ne code pas « maladie ». HSE fait la DAT. Paie : journée du 9 maintenue (schéma classique à confirmer), arrêt à partir du 10. IJ AT : méthode Ameli, pas 50 % maladie par défaut. CCN métallurgie du dossier : LIRE le maintien AT, aucun % dans cette leçon. Taux AT établissement : notification Carsat, pas l'hypothèse 1,50 % du moteur pédagogique si le dossier réel a un autre taux.",
      extra: [
        code(`AT vs MALADIE — réflexe (à confirmer sources, pas des euros)
                 MALADIE                    AT / MP
Carence IJSS     souvent 3 jours            schéma distinct (souvent 0 j IJ
                 (Ameli)                    + jour accident employeur)
Taux IJ          méthode Ameli maladie      méthode Ameli AT (paliers)
Plafond          souvent lié SMIC           souvent lié PMSS — LIRE Ameli
Maintien         art. CCN maladie           art. CCN AT (souvent autre)
                + D. 1226-1                 ne pas copier D. 1226-1 sans lire
DSN / DAT        arrêt maladie              AT + DAT
Taux cotis. AT   inchangé                   sinistralité / notification Carsat
Recoder AT→mal.  INTERDIT                   INTERDIT

PMSS janv. 2026 = 4 005 € (URSSAF) : utile si Ameli dit un plafond IJ AT
lié au PMSS. Ce n'est PAS l'IJ du jour.`),
      ],
      erreurs:
        "Trois jours de carence sur AT. IJ maladie sur un AT. Cacher un AT. Appliquer le % maladie CCN. Inventer 60 % / 80 % comme chiffres 2026 officiels sans ouvrir Ameli (même si ces ordres de grandeur sont souvent cités : la source du jour prime). Utiliser 1,50 % comme taux AT légal national.",
      particuliers:
        "Faute inexcusable, contestation de prise en charge, accident de trajet vs mission : juridique. Rechute. MP avec enquête. Intérimaire : employeur de paie = ETT, déclaration coordonnée. Un junior documente et escalade.",
      exercice:
        "Le manager : « Mets-le en maladie, l'AT va nous faire monter le taux. » Trois actions que vous faites, une que vous refusez. Quelle source pour l'IJ AT ?",
      correction:
        "Vous faites : 1) refuser le recodage ; 2) alerter responsable paie + HSE pour DAT ; 3) ouvrir Ameli IJ AT 2026 + article CCN AT.\nVous refusez : coder maladie.\nSource IJ : Ameli (et notice CSS), pas un pourcentage souvenir, pas le PMSS lui-même, pas le 50 % maladie. Tout euro d'illustration resterait une hypothèse.",
    }),
    pack({
      title: "Maternité, paternité, adoption : congés et IJ",
      description:
        "Traiter les congés familiaux par les textes du jour, sans inventer une durée ni un taux IJ 2026.",
      minutes: 20,
      objectifs:
        "Vous savez que ces congés ont un régime d'IJ et de dates distinct de la maladie, vous savez où lire les durées, et vous préparez la paie (maintien CCN, DSN, CP) sans barème inventé.",
      theorie:
        "Le congé de maternité, le congé de paternité et d'accueil de l'enfant, le congé d'adoption, sont des suspensions du contrat avec un régime propre d'IJ de sécurité sociale. Ils n'ont pas la carence des IJ maladie. Les durées légales (semaines de maternité, jours de paternité, adoption, naissances multiples, situations pathologiques) se lisent sur Service-Public et dans le Code du travail / CSS consolidés au jour J. Cette formation n'invente pas une durée « 16 semaines » ou « 25 jours » comme vérité éternelle : vous ouvrez la fiche en vigueur en 2026 avant de poser les dates. Un avenant législatif récent se raterait si vous mémorisez un chiffre de 2021.\n\nIJ : méthode Ameli (salaire de référence, taux, plafond propres à la maternité / paternité / adoption). Souvent un pourcentage du SJR plus élevé que la maladie, avec un plafond. PAS d'euro 2026 inventé. HYPOTHÈSE de méthode seulement, étiquetée, source Ameli.\n\nMaintien employeur : très fréquent en CCN (maintien du net ou du brut, IJ déduites). LIRE la CCN. Certaines entreprises maintiennent à 100 % par accord. Pas de pourcentage inventé. Le plancher D. 1226-1 est un texte maladie/accident : ne pas l'appliquer mécaniquement à la maternité sans lire.\n\nPaie : le congé n'est pas un CSS. Pas de retenue d'inexécution « calendaire 3/31 » à la place des IJ. Subrogation fréquente. DSN : nature maternité / paternité / adoption, dates, pas un arrêt maladie.\n\nCP : ces périodes sont en principe assimilées à du travail effectif pour les congés payés dans les conditions du Code. Vérifier L. 3141-5. Ne pas inventer le nombre de jours acquis : appliquer les règles d'acquisition du dossier (2,5 jours ouvrables légaux par mois de travail effectif, L. 3141-3, CCN plus favorable possible).\n\nPériode pédagogique : janvier 2026. Un congé qui chevauche décembre–janvier : deux bulletins, une seule nature, IJ à cheval, plafond annuel, pas deux carences maladie.",
      methode:
        "1. Qualité du congé (maternité, paternité, adoption) + pièces (certificat, acte).\n2. Service-Public + CCN : dates de début/fin, fractionnement paternité le cas échéant.\n3. Ameli : formule IJ 2026.\n4. CCN maintien.\n5. Subrogation.\n6. DSN et bulletin : libellés propres.\n7. Acquisition CP : assimilation à vérifier, pas une retenue d'absence.",
      exemple:
        "Services, salariée en congé maternité à compter du 20 janvier 2026. Lina n'écrit pas « 16 semaines » de mémoire : elle ouvre Service-Public, pose les dates validées par RH. IJ : méthode Ameli, aucun euro inventé. CCN : article maternité à extraire. Subrogation du dossier = oui. Le manager qui demande de « poser des CP pour rallonger » : les CP autour d'une maternité ont des règles, ce n'est pas un CSS, RH.",
      extra: [
        code(`CONGÉS FAMILIAUX — méthode paie (pas de durées inventées)
1. Lire la durée légale du jour : Service-Public / Code
2. Lire la CCN (maintien, congés supplémentaires éventuels)
3. Lire Ameli (IJ, plafond, SJR) — aucun € 2026 fabriqué ici
4. Poser les dates RH (pathologique, multiple, adoption)
5. DSN nature dédiée
6. CP : assimilation L. 3141-5 à confirmer, pas module 10 CSS

HYPOTHÈSE si vous DEVEZ chiffrer un exercice interne :
« IJ maternité hyp. = [formule Ameli appliquée aux 3 × 3 100 €]
étiquette : pédagogique, source Ameli 2026, pas un barème du cours. »`),
      ],
      erreurs:
        "Carence 3 jours sur maternité. Coder maladie. Inventer 25 jours de paternité sans fiche. Retenue calendaire comme un CSS. Oublier le second bulletin si le congé dépasse le mois. Appliquer le maintien maladie.",
      particuliers:
        "Pathologique, pré-natal, décès, hospitalisation de l'enfant, parents homosexuels / accueil de l'enfant : les textes ont été enrichis. Vous ne filtreez pas « qui a droit » au feeling. RH + Service-Public. International, détachement : hors autonomie.",
      exercice:
        "Le salarié demande 4 jours de paternité en janvier « comme un collègue l'année dernière ». Que vérifiez-vous avant saisie ? Calculez-vous une retenue 3 100 × 4 / 31 ?",
      correction:
        "Vous vérifiez : droit actuel (durée, délais, fractionnement) sur Service-Public 2026 ; pièce ; dates RH ; IJ et maintien CCN ; DSN paternité. Vous ne recopiez pas « l'année dernière ».\nRetenue 3 100 × 4 / 31 : non, ce n'est pas un CSS. C'est un congé avec IJ (et souvent maintien). La méthode calendaire du module 10 ne s'applique pas à la place du régime maternité/paternité.",
    }),
    pack({
      title: "Temps partiel thérapeutique, CP pendant arrêt, paie et déclarations",
      description:
        "Boucler le dossier : TPT, congés, bulletin, DSN, sans inventer les IJ du TPT.",
      minutes: 22,
      objectifs:
        "Vous savez ce qu'est un temps partiel thérapeutique, comment articuler salaire des heures faites et IJ, quel réflexe avoir sur les CP pendant arrêt depuis la réforme, et quelles déclarations clôturent le mois.",
      theorie:
        "Le temps partiel thérapeutique (TPT) est une reprise ou un aménagement prescrit : le salarié travaille une partie du temps, la caisse peut verser des IJ pour le reliquat, dans des conditions Ameli / CSS. Ce n'est ni un temps partiel contractuel définitif, ni un CSS, ni un arrêt total. La paie paie les heures (ou jours) réellement travaillés selon le contrat aménagé ; les IJ TPT suivent la MÉTHODE Ameli 2026, aucun euro inventé ici. Un avenant ou une prescription avec quotité (ex. 50 %) doit être au dossier. Le SMIC horaire 12,02 € (janvier 2026) s'applique aux heures faites. Ne pas mensualiser 3 100 € pleins si la quotité travaillée est 50 % sans texte de maintien.\n\nCP et maladie : le droit a évolué sous l'influence du droit de l'UE et de la loi (reprise 2024 dans le Code du travail). Des périodes de maladie ouvrent des droits à congés dans des limites et des modalités prévues par les articles L. 3141-5 et suivants consolidés. AT/MP : assimilation souvent plus complète. Un junior N'INVENTE PAS « 2,5 jours comme si présent » ni « 0 jour ». Il ouvre le texte du jour, identifie la nature de l'absence, applique le plafond éventuel, et fait valider le paramétrage CP. Les reports, les délais de prescription, les informations au salarié, sont des sujets sensibles : responsable paie.\n\nPaie d'un mois mixte (travaillé + arrêt + TPT) : plusieurs rubriques, pas une retenue unique module 10. Contrôler : heures, maintien, IJ (hyp. jusqu'au flux caisse), AEN, TR (jours travaillés), mutuelle forfaitaire (souvent due), PAS sur le net imposable du bulletin (les IJ ont un régime fiscal propre, à ne pas inventer : BOSS / impots.gouv).\n\nDéclarations : DSN mensuelle (rémunération, absences, natures), signalements d'arrêt, attestations de salaire pour IJ si encore requises hors flux, DAT si AT. CRM : lire. Un rejet « dates d'arrêt incohérentes » se corrige, il ne se ignore pas.\n\nPériode : janvier 2026, métropole, régime général. RGDU non appliquée sauf cas qui la demande. Mutuelle : hypothèse catalogue 20 € S / 40 € P si le dossier pédagogique l'utilise. MNS : la part patronale mutuelle n'est pas dans le MNS jusqu'au 31/12/2026 (BOSS).",
      methode:
        "Clôture d'un mois avec arrêt :\n1. Grille jour par jour (travaillé, carence, IJ, TPT, CP, férié).\n2. Heures payées au contrat / SMIC 12,02 €.\n3. Maintien selon fiche CCN + D. 1226-1.\n4. IJ : formule Ameli 2026 + flux réel ; écart = régularisation.\n5. CP : assimilation selon L. 3141-5 s., paramétrage validé.\n6. TR, AEN, mutuelle.\n7. DSN natures et dates.\n8. Explication salarié en vouvoiement, sans diagnostic médical.",
      exemple:
        "Janvier 2026 : 3 100,00 € de référence, arrêt maladie 12–25, reprise TPT 50 % les 26–30 (prescription au dossier), 31 samedi non travaillé habituel 35 h. Lina construit la grille. Elle ne fait pas 3 100 × 14 / 31 en CSS. Elle paie les jours/heures TPT, elle applique le maintien LU sur la période d'arrêt, elle laisse l'IJ TPT à la méthode Ameli (pas d'euro inventé). CP du mois : elle ne solde pas 2,5 jours sans avoir lu l'assimilation maladie 2024/2026.",
      extra: [
        code(`MOIS MIXTE — canevas janvier 2026 (pas d'IJ en € officiel)
1-11   travaillé     salaire de base prorata HEURES/JOURS du dossier
12-14  carence IJ    maintien = CCN ou D.1226-1 (LU) ; pas d'IJ caisse hyp. 3 j
15-25  arrêt         IJ maladie MÉTHODE Ameli + complément maintien
26-30  TPT 50 %      salaire des heures faites (SMIC 12,02 €/h si applicable)
                     + IJ TPT MÉTHODE Ameli (source à vérifier)
31     selon horaire
CP     L. 3141-5 s. consolidé : assimilation / plafond — LIRE, pas 0 d'office
DSN    arrêt + reprise + TPT : dates cohérentes
TR     titres sur jours TRavaillés seulement (règle d'attribution)
Mutuelle hyp. 20/40 si dossier catalogue — forfait souvent maintenu

Tout € d'IJ : HYPOTHÈSE pédagogique, Ameli 2026 à confirmer.`),
      ],
      erreurs:
        "Mensualité pleine + IJ TPT. TPT sans pièce. Zéro CP sur un long arrêt sans lire la réforme. DSN maladie sur un TPT mal daté. Inventer l'IJ TPT 2026. Appliquer la retenue calendaire du module 10 à tout le mois « pour faire propre ».",
      particuliers:
        "Invalidité, inaptitude, avis de reprise avec aménagements, visites de reprise : administration du personnel + paie. Contrôle CPAM, trop-perçu IJ : ne pas compenser sauvagement sur le net suivant sans règle. Année de bascule MNS 2027 (projet part patronale santé) : hors janvier 2026, à ne pas anticiper (BOSS : part patronale non dans MNS jusqu'au 31/12/2026).",
      exercice:
        "Cas 3 100 €, arrêt 12–31 janvier maladie, méthode calendaire d'un collègue qui a retenu 3 100 × 20 / 31 = 2 000,00 € et payé 1 100,00 € sans IJ ni maintien. En 8 lignes : pourquoi c'est faux, que relire, que dire au collègue, que faire du bulletin.",
      correction:
        "Faux parce que la maladie n'est pas un CSS : on n'applique pas une retenue d'inexécution unique à la place du couple IJSS + maintien. 1 100 € n'ont aucune base (ni 3/31, ni carence, ni CCN). À relire : Ameli IJ 2026 (méthode, carence, SJR — pas un euro mémoire), CCN maintien + D. 1226-1, subrogation, DSN. Dire au collègue : « tu as traité un arrêt comme une absence injustifiée. » Bulletin : reprendre, grille 12–31, carence, IJ hyp. puis flux, complément, ne pas clôturer 1 100 €. Escalade Marc. Le 300,00 € du module 10 (3 jours CSS) n'est pas transposable à 20 jours de maladie.",
    }),
    quizLesson({
      title: "Quiz — Arrêts, IJSS et maintien",
      description:
        "Vérifier carence, méthode IJ, lecture du maintien, subrogation, AT et TPT.",
      passing_score: 70,
      questions: [
        q({
          question: "Quel est le bon réflexe sur un montant d'IJ maladie 2026 en euros ?",
          options: [
            "A. Utiliser 50,96 € / jour comme taux officiel national 2026",
            "B. Appliquer la MÉTHODE (salaires de référence, SJR, taux, plafond, carence) et recouper Ameli ; tout euro d'exercice est une hypothèse pédagogique",
            "C. Prendre 3 100 / 30 = 103,33 €",
            "D. Utiliser le PMSS 4 005 € comme IJ quotidienne",
          ],
          correct: 1,
          explanation:
            "Aucun taux journalier officiel 2026 n'est inventé dans ce cours. 50,96 € n'était qu'une illustration de méthode (3 100 × 3 / 91,25 × 50 %). Ameli fait foi. Le PMSS n'est pas une IJ.",
        }),
        q({
          question: "La carence des IJSS maladie se confond-elle avec la carence du maintien employeur ?",
          options: [
            "A. Oui, toujours 3 jours pour les deux",
            "B. Non : carence caisse et carence maintien (légal ou CCN) sont des compteurs distincts à lire chacun",
            "C. Oui, toujours 7 jours pour les deux",
            "D. Il n'y a jamais de carence en maladie",
          ],
          correct: 1,
          explanation:
            "IJ maladie : souvent 3 jours (Ameli, exceptions). Maintien légal : autre carence dans D. 1226-1. CCN : encore une autre, à lire. Les mélanger fausse le bulletin.",
        }),
        q({
          question: "Un pourcentage de maintien « 90 % comme tout le monde » :",
          options: [
            "A. Est le taux unique 2026 pour toutes les CCN",
            "B. Peut être saisi si le manager le demande par mail",
            "C. Ne se saisit que s'il sort du texte applicable (CCN lue, accord, ou plancher D. 1226-1 consolidé)",
            "D. Remplace les IJSS",
          ],
          correct: 2,
          explanation:
            "Interdiction d'inventer un % CCN. Le légal se LIT dans D. 1226-1, il ne se récite pas. Les IJSS restent un flux caisse, distinct du complément employeur.",
        }),
        q({
          question: "Sur un accident du travail, coller 3 jours de carence maladie est :",
          options: [
            "A. Correct, la carence est universelle",
            "B. Incorrect : l'AT a un schéma d'IJ et de carence distinct, à lire sur Ameli ; le recodage maladie est interdit",
            "C. Correct si l'on veut éviter la hausse du taux AT",
            "D. Correct pour les cadres seulement",
          ],
          correct: 1,
          explanation:
            "Régime AT distinct. Recoder pour le taux AT est une faute. Pas de privilège cadre sur la carence IJ maladie/AT.",
        }),
        q({
          question: "La subrogation consiste à :",
          options: [
            "A. Annuler les IJ",
            "B. Faire percevoir les IJ par l'employeur, qui verse le maintien au salarié, lorsque les conditions sont réunies",
            "C. Payer le salaire plein ET laisser les IJ au salarié par principe",
            "D. Un dispositif fiscal du PAS",
          ],
          correct: 1,
          explanation:
            "Déplacement du créancier des IJ. Pas une annulation. Le double paiement est l'erreur à éviter. Ce n'est pas le PAS.",
        }),
        q({
          question: "Congé de paternité en janvier 2026 : vous calculez 3 100 × jours / 31 comme un CSS ?",
          options: [
            "A. Oui, c'est la seule méthode",
            "B. Non : régime d'IJ (Ameli) et souvent maintien CCN ; les durées se lisent sur Service-Public, on n'invente pas les jours",
            "C. Oui si le salarié est non-cadre",
            "D. Non, on ne paie jamais rien pendant la paternité",
          ],
          correct: 1,
          explanation:
            "Pas un CSS. Durées à jour sur Service-Public, IJ Ameli, maintien lu. Ni retenue calendaire systématique, ni zéro automatique.",
        }),
        q({
          question: "Temps partiel thérapeutique : que paie en premier la paie ?",
          options: [
            "A. Le brut plein 3 100 € plus une IJ inventée de 50 €/j",
            "B. Les heures ou jours réellement travaillés, plus les IJ TPT selon méthode Ameli 2026 (euros à vérifier), selon prescription",
            "C. Rien, c'est un CSS",
            "D. Uniquement les IJ, jamais les heures",
          ],
          correct: 1,
          explanation:
            "Le TPT articule salaire du travail réduit et IJ du reliquat. Pas un CSS. Pas de brut plein automatique. Pas d'IJ 2026 inventée.",
        }),
        q({
          question: "Les droits à CP pendant un arrêt maladie :",
          options: [
            "A. Sont toujours zéro",
            "B. Sont toujours 2,5 jours ouvrables par mois comme un présent, sans lire le Code",
            "C. Se déterminent en lisant L. 3141-5 et s. consolidés (réforme, assimilation, plafonds possibles) selon la nature d'arrêt",
            "D. Disparaissent si l'on code l'arrêt en CSS",
          ],
          correct: 2,
          explanation:
            "Plus de réflexe « maladie = 0 CP ». Pas d'invention du quota. Lire le Code. Coder CSS pour tuer des CP est une faute.",
        }),
        q({
          question:
            "Dans l'hypothèse pédagogique 3 × 3 100 €, dénominateur 91,25, taux 50 %, le SJR approximatif est :",
          options: [
            "A. 101,92 €, et l'IJ 50,96 €/j reste une HYPOTHÈSE à recouper sur Ameli, éventuellement plafonnée",
            "B. 4 005 €, le PMSS",
            "C. 12,02 €, le SMIC horaire",
            "D. 300 €, comme la retenue d'absence du module 10",
          ],
          correct: 0,
          explanation:
            "9 300 / 91,25 ≈ 101,92 ; 50 % ≈ 50,96. Étiquette pédagogique obligatoire. PMSS, SMIC et 300 € d'absence sont d'autres objets.",
        }),
        q({
          question: "Qui déclare un accident du travail ?",
          options: [
            "A. Personne, la DSN maladie suffit",
            "B. L'employeur, dans le canal et les délais de la DAT, distincts d'un simple arrêt maladie",
            "C. Le salarié uniquement, par mail au gestionnaire",
            "D. L'URSSAF, automatiquement via le taux 1,50 %",
          ],
          correct: 1,
          explanation:
            "DAT employeur. La DSN maladie ne remplace pas. Le 1,50 % est une hypothèse pédagogique de taux AT, pas un organisme déclarant.",
        }),
      ],
    }),
  ],
};
