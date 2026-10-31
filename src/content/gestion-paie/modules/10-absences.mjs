import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 10,
  title: "Traiter les absences rémunérées et non rémunérées",
  description:
    "Qualifier une absence, choisir une méthode de retenue justifiable, calculer un brut après retenue et en mesurer les effets sur les cotisations, sans inventer une formule légale unique.",
  lessons: [
    pack({
      title: "Qualifier une absence avant de toucher au brut",
      description:
        "Distinguer absence rémunérée, absence non rémunérée, maintien, et simple irrégularité d'horaire.",
      minutes: 20,
      objectifs:
        "À la fin de cette leçon, vous savez qualifier un événement d'absence avant toute saisie : rémunérée ou non, assimilée ou non à du travail effectif, disciplinaire ou simplement économique, et vous savez qui décide de la qualification.",
      theorie:
        "Une absence n'est pas une ligne magique du logiciel. C'est un fait social que vous traduisez en paie : le salarié n'a pas fourni tout ou partie de sa prestation. Avant de retenir un euro, vous posez la nature du fait.\n\nAbsence rémunérée : le contrat, la loi, la CCN ou un accord maintient tout ou partie de la rémunération, ou substitue une indemnité (congés payés, certain jour férié, délégation, formation sur temps de travail, autorisation d'absence payée prévue par un texte). Vous ne « laissez le salaire » par sympathie : vous appliquez un droit identifiable.\n\nAbsence non rémunérée : aucune règle n'impose le maintien. Exemples fréquents : congé sans solde accepté, absence injustifiée, mise à pied disciplinaire (à distinguer de la mise à pied conservatoire, qui a un régime propre), parfois un retard non récupéré selon la politique et le contrat. La retenue n'est pas une sanction : c'est la contrepartie de la non-exécution. La sanction, si elle existe, est un acte RH distinct.\n\nVous distinguez aussi : travail effectif (déclenche CP, ancienneté, RTT selon règles) ; assimilé à du travail effectif par un texte (certaines absences listées au Code du travail pour les CP) ; non assimilé (souvent le congé sans solde, l'absence injustifiée). Cette distinction ne se devine pas : elle se lit.\n\nObligation légale : payer le travail fourni, ne pas retenir au-delà de ce qui correspond à l'inexécution, ne pas inventer une amende déguisée. Paramètre d'entreprise : le code d'absence du logiciel, le circuit de validation manager. Disposition conventionnelle : autorisations d'absence (mariage, décès, enfant malade) dont la durée et le maintien se lisent dans la CCN du dossier, jamais dans une grille mémorisée. Hypothèse pédagogique : tout chiffre d'exemple de ce module, hors SMIC et PMSS 2026 sourcés, est un dossier fictif.\n\nUn junior qui saisit « absence » sans nature produit un brut faux, une DSN fausse et parfois un contentieux. La qualification précède le calcul.",
      methode:
        "Ordre obligatoire :\n1. Quel salarié, quelle période d'emploi (janvier 2026 dans les exercices) ?\n2. Quelle pièce (badgeuse, demande d'absence, certificat, mail manager, CSS signé) ?\n3. Quelle nature (CP, RTT, maladie, CSS, injustifiée, retard, formation, délégation, mise à pied) ?\n4. Quel texte maintient ou non (loi, CCN, accord, contrat, usage, politique validée) ?\n5. L'absence est-elle assimilée à du travail effectif pour les CP / l'ancienneté ?\n6. Quelle méthode de retenue le dossier utilise-t-il déjà (calendaire, ouvrés, ouvrables, horaire) ?\n7. Qui valide la qualification si elle est contestable (RH, responsable paie) ?\nVous ne changez pas de méthode « pour que ça tombe juste ».",
      noteText:
        "Limite d'autonomie : un junior ne requalifie pas une absence injustifiée en CP « pour arranger », ni un CSS en maladie sans certificat. Il ne choisit pas une sanction. Si le manager écrit « enlève-lui deux jours, ça lui apprendra », vous reformulez : retenue pour inexécution d'une part, procédure disciplinaire d'autre part, et vous escaladez.",
      exemple:
        "PME de services, 35 salariés, moteur de paie générique. Le chef d'équipe signale : « Léa n'était pas là lundi et mardi. » Sans pièce, Lina ouvre le dossier : pas de demande CP, pas d'arrêt, pas de CSS. Elle ne retient pas encore. Elle relance Léa et le manager par un canal tracé, copie RH. Le mercredi, un arrêt maladie arrive avec début lundi : la nature bascule. Si Lina avait saisi deux jours injustifiés le lundi soir, elle aurait créé une retenue, une anomalie DSN et une régularisation. Le métier, c'est d'attendre la pièce tout en tenant le calendrier de relance.",
      extra: [
        code(`GRILLE DE QUALIFICATION — à joindre au dossier
Salarié / matricule : ................................
Période : ........ / 2026
Fait : dates, heures, jours de la semaine : ..........
Pièce : oui / non — type : ...........................
Nature provisoire : ..................................
Texte de maintien (loi / CCN art. / accord / contrat / aucun) :
Assimilation travail effectif (CP, ancienneté) : oui / non / à lire
Méthode de retenue du dossier : calendaire / 30es / ouvrés / ouvrables / horaire
Décision RH distincte (disciplinaire) : oui / non / hors paie junior
Qui a validé : ......................... Date : ......`),
      ],
      erreurs:
        "Saisir « absence » générique. Transformer un trou de badgeuse en retenue sans recoupement. Appliquer le réflexe du précédent employeur. Confondre jour férié chômé et absence. Traiter une mise à pied comme un CSS. Croire que « le logiciel connaît la CCN ».",
      particuliers:
        "Forfait jours : l'absence se compte souvent en jours, pas en heures ; la retenue suit une logique de jours de forfait, à lire dans l'accord et la CCN, pas à inventer. Temps partiel : le jour non travaillé habituel n'est pas une absence. Multi-contrats : l'absence sur le contrat A ne se reporte pas sur B. Entrée/sortie du mois : on ne retient que sur la période d'emploi.",
      exercice:
        "Cinq faits, janvier 2026. Qualifiez (rémunérée / non rémunérée / à instruire) et dites si vous saisissez seul : (1) CP posés et validés ; (2) mardi sans pièce ; (3) CSS écrit signé du 15 au 16 ; (4) formation obligatoire sur site ; (5) mail du manager « elle est en retard tous les jours, vire-lui 100 € ».",
      correction:
        "1. Rémunérée (indemnité de CP, déjà vue au module congés) — saisie selon stock et validation.\n2. À instruire — pas de retenue définitive sans nature ; relance + calendrier.\n3. Non rémunérée si le CSS est valablement accepté — retenue selon la méthode du dossier.\n4. Rémunérée si formation sur temps de travail — pas une absence à retenir.\n5. Vous ne « virez » pas 100 €. Une retenue forfaitaire punitive n'est pas une méthode de paie. Retard : mesurer le temps non travaillé, appliquer la méthode d'horaire du dossier, et laisser le disciplinaire à la RH. Escalade.",
    }),
    pack({
      title: "Retards, sorties anticipées et absences de courte durée",
      description:
        "Mesurer un temps non travaillé sans transformer la paie en amende.",
      minutes: 18,
      objectifs:
        "Vous savez traiter un retard ou une sortie anticipée comme une inexécution mesurable, choisir l'unité (heure, minute, jour) prévue par le dossier, et refuser toute retenue forfaitaire sans lien avec le temps.",
      theorie:
        "Le retard n'est pas, en soi, une « absence injustifiée de la journée ». C'est un temps de travail non fourni. La paie retient, le cas échéant, la contrepartie de ce temps. Le droit disciplinaire (avertissement, mise à pied) est un autre registre, instruit par la RH selon une procédure. Un junior qui « punit » sur le bulletin commet une faute professionnelle.\n\nLa mesure doit être objective : badgeage, feuille d'émargement, déclaration manager recoupée. Une estimation « il arrive toujours à 9 h 20 » ne fonde pas une retenue. La tolérance d'entreprise (cinq minutes, flexibilité d'horaire) est une politique interne : si elle existe, vous l'appliquez de façon égale. Ce n'est pas une obligation légale universelle.\n\nMéthode de conversion : le plus souvent, retenue horaire (taux horaire du mensuel × heures ou minutes non travaillées). Le taux horaire d'un mensualisé à 35 h se calcule classiquement sur 151,67 heures (durée légale mensuelle de référence, L. 3121-27 et usage de conversion 35 × 52 / 12). Ce 151,67 est un paramètre de conversion largement utilisé ; une durée conventionnelle différente se lit dans le contrat. Vous ne changez pas le dénominateur pour alourdir la retenue.\n\nUne retenue qui dépasse le temps réellement non travaillé s'analyse comme une sanction pécuniaire, en principe prohibée. Inversement, « laisser passer » des heures de façon inégalitaire crée un usage et un risque d'inégalité de traitement.\n\nConséquence cotisations : moins de brut soumis, donc moins de cotisations salariales et patronales sur le mois, sous réserve des règles de plafond et d'exonération du dossier. Un retard de 0,50 h sur 3 100 € n'est pas « négligeable » si vous le traitez vingt fois sans règle : c'est un contentieux en formation.\n\nPériode de référence des exercices : janvier 2026, métropole, régime général. SMIC horaire 12,02 € (URSSAF, 01/01/2026 au 31/05/2026). Une retenue ne peut pas faire passer le salaire horaire des heures réellement faites sous le SMIC : on retient le non-travail, on ne dégrade pas le taux des heures faites.",
      methode:
        "1. Recueillir l'heure théorique et l'heure réelle, source datée.\n2. Déduire la flexibilité écrite du dossier, pas une tolérance orale d'un seul manager.\n3. Convertir en heures (et centièmes ou minutes selon paramétrage).\n4. Calculer le taux horaire du mensuel : brut mensuel de référence / horaire mensuel contractuel (souvent 151,67).\n5. Retenue = taux × temps non travaillé, arrondie au centime, même méthode que les autres variables du dossier.\n6. Nature DSN / rubrique : absence courte ou heure non faite, pas « sanction ».\n7. Si récurrence : signaler à la RH, ne pas alourdir la retenue.",
      noteText:
        "Le SMIC 12,02 €/h (période janvier 2026, URSSAF) protège les heures travaillées. Il n'interdit pas de retenir les heures non faites. Il interdit de « taxer » le salarié en descendant le taux des heures accomplies.",
      exemple:
        "ETI industrielle, horaire 8 h – 16 h, pause non rémunérée selon accord. Karim, 2 500,00 € brut, 151,67 h. Le 12 janvier 2026, badgeage 8 h 45, sans flexibilité écrite. Temps non fait : 0,75 h. Taux = 2 500 / 151,67 ≈ 16,4832 €. Retenue = 16,4832 × 0,75 ≈ 12,36 €. Brut du jour de paie diminué d'autant. Le manager demandait « enlève-lui 50 € pour l'exemple » : refusé, tracé, RH informée pour le volet disciplinaire.",
      extra: [
        code(`RETARD — janvier 2026 (métropole)
Brut mensuel de référence     2 500,00 €
Horaire mensuel               151,67 h   (conversion 35 h, à confirmer au contrat)
Taux horaire                  2 500,00 / 151,67 ≈ 16,4832 €
Temps non travaillé           0,75 h     (pièce badgeuse)
Retenue                       16,4832 × 0,75 = 12,36 €
Brut après retenue            2 487,64 €  (si aucune autre variable)

HYPOTHÈSE : pas d'autre absence, pas de prime, RGDU non demandée.
Ce n'est pas une amende. C'est 0,75 heure non fournie.`),
      ],
      erreurs:
        "Arrondir un retard à la demi-journée « pour simplifier ». Appliquer une retenue forfaitaire du règlement intérieur comme si c'était du droit de la paie. Oublier la flexibilité écrite. Utiliser 169 h (ancien 39 h) sur un contrat 35 h. Retenir un jour entier pour un retard de vingt minutes.",
      particuliers:
        "Horaires variables / annualisation : le retard se lit dans le décompte du cycle, pas au mois isolé, selon l'accord. Télétravail : l'absence de connexion n'est pas automatiquement un retard ; pièce et manager. Cadre au forfait jours : un « retard » d'heure n'a souvent pas d'objet ; une demi-journée non travaillée, oui. Astreinte : ne pas confondre délai d'intervention et heure de prise de poste.",
      exercice:
        "Salarié mensualisé 3 100,00 €, 151,67 h, janvier 2026. Trois retards badgeés : 20 min, 15 min, 25 min. Flexibilité écrite : 10 min par jour, non cumulable. Calculez le temps retenu et la retenue, au centime. Le manager veut 100 € forfaitaires.",
      correction:
        "Temps brut : 20 + 15 + 25 = 60 min. Flexibilité : 10 min par jour sur 3 jours = 30 min si la politique dit bien « par jour, non cumulable ». Temps retenu : 30 min = 0,50 h.\nTaux = 3 100 / 151,67 ≈ 20,4391 €.\nRetenue = 20,4391 × 0,50 = 10,22 €.\nLes 100 € forfaitaires sont refusés : pas de lien avec le temps, risque de sanction pécuniaire. RH pour la récurrence. Arrondi : 3 100 / 151,67 = 20,439111… × 0,50 = 10,21955 → 10,22 € au centime.",
    }),
    pack({
      title: "Le congé sans solde : accord, paie, cotisations",
      description:
        "Traiter un CSS comme une absence non rémunérée consentie, jamais comme un arrêt ni comme des CP.",
      minutes: 18,
      objectifs:
        "Vous savez ce qu'est un congé sans solde, quelles pièces exiger, comment retenir, et quels effets collatéraux (CP, ancienneté, mutuelle, DSN) vous devez signaler sans les inventer.",
      theorie:
        "Le congé sans solde (CSS) est une suspension du contrat, en principe par accord entre l'employeur et le salarié. Ce n'est pas un droit général automatique, hors dispositifs particuliers (certains congés pour événement, création d'entreprise, etc., qui ont un régime propre à lire dans le Code du travail). Un junior n'accorde pas un CSS : il vérifie l'écrit, les dates, la signature, et il paie en conséquence.\n\nPendant le CSS, la rémunération n'est pas due pour la période couverte. La retenue suit la méthode du dossier (calendaire, ouvrés, ouvrables, horaire), la même que pour les autres absences non rémunérées, sauf clause contraire écrite. Changer de méthode le mois du CSS du directeur est une inégalité.\n\nLe CSS n'est généralement pas du travail effectif : il n'ouvre pas, à lui seul, de droits à congés payés légaux pour la période non travaillée, sauf texte plus favorable. L'ancienneté peut être traitée différemment selon CCN : vous lisez, vous n'assimilez pas d'office.\n\nProtection sociale : l'absence de brut réduit l'assiette. Un CSS long peut avoir des effets sur la mutuelle (dispense, maintien, cotisation forfaitaire — à lire le contrat collectif et le BOSS, pas à déduire). Les IJ maladie ne sont pas dues « à la place » d'un CSS : si un arrêt arrive pendant un CSS, la qualification se recoupe avec la CPAM et le responsable paie. Un junior ne transforme pas un CSS en maladie pour « sauver » des IJ.\n\nDSN : l'absence est déclarée selon les blocs prévus (type d'absence, dates). Vous ne créez pas un signalement d'arrêt de travail pour un CSS.\n\nPériode pédagogique : janvier 2026. Un CSS de trois jours calendaires sur un mensuel 3 100,00 € n'a pas « une » retenue légale unique : voir la leçon méthodes. Obligation légale : ne payer que le travail et les absences légalement ou conventionnellement maintenues. Paramètre d'entreprise : circuit d'approbation du CSS. Disposition conventionnelle : certaines CCN encadrent le CSS (délai, durée, ancienneté) — à lire.",
      methode:
        "1. Pièce : demande + acceptation datées, périmètre (jours calendaires ou ouvrés ? dates de début/fin, reprise).\n2. Vérifier le chevauchement avec CP, RTT, jours fériés, arrêt.\n3. Appliquer la méthode de retenue déjà utilisée dans le dossier.\n4. Contrôler le brut, le net, le plafond (PMSS 4 005 € en janvier 2026 si le brut reste sous plafond, pas d'enjeu T2).\n5. Vérifier mutuelle / prévoyance : cotisation forfaitaire souvent maintenue — lire le contrat collectif (hypothèse pédagogique du catalogue : 20 € S / 40 € P si le dossier l'a posée ; ce n'est pas un barème national).\n6. DSN : type CSS, pas AT/maladie.\n7. Informer le salarié du brut avant paiement si la retenue est inhabituelle.",
      noteText:
        "Un CSS n'est pas un outil pour « éviter un licenciement » ni pour « faire baisser les charges ». Si la direction l'utilise comme substitut à une procédure, vous alertez le responsable paie. Ce n'est plus de la paie opérationnelle, c'est du risque social.",
      exemple:
        "Cabinet d'expertise, dossier client 18 salariés, CCN à lire (aucun minimum inventé ici). Un salarié demande un CSS du 19 au 21 janvier 2026 pour un déménagement. Accord écrit. Méthode du dossier : calendaire. Janvier a 31 jours. Brut de référence 2 100,00 €. Retenue pédagogique calendaire = 2 100 × 3 / 31 = 203,23 €. Brut = 1 896,77 €. La collaboratrice junior n'applique pas la méthode « ouvrés » du dossier voisin. Le client qui demande « mets-le en CP, il lui en reste » se voit opposer : les CP se posent selon les règles de pose, pas pour maquiller un CSS.",
      extra: [
        code(`CSS — EXEMPLE PÉDAGOGIQUE janvier 2026
Brut de référence                 2 100,00 €
Dates                             19, 20, 21 janvier 2026 (3 j calendaires)
Méthode du dossier                calendaire (justifiée par usage écrit interne)
Formule                           2 100,00 × 3 / 31
Retenue                           203,2258… → 203,23 €
Brut soumis du mois               1 896,77 €
Mutuelle (si contrat collectif
du catalogue pédagogique)         20,00 € S / 40,00 € P — HYPOTHÈSE, souvent
                                  maintenue si le contrat le dit : LIRE le contrat
DSN                               absence CSS, pas arrêt de travail

Cette formule n'est pas « la » formule légale unique. Elle est celle du dossier.`),
      ],
      erreurs:
        "Saisir un CSS sans écrit. Le coder en maladie. Le payer « on verra ». Changer de méthode de retenue. Suspendre la mutuelle sans lire le contrat. Oublier le jour férié inclus dans la période (1er janvier : le CSS ne « mange » pas un férié déjà chômé de la même façon — analyser les dates).",
      particuliers:
        "CSS d'un jour entre deux jours de CP : risque de requalification, voir RH. CSS pendant préavis : le préavis est en principe travaillé ou payé ; un CSS n'est pas un outil de fin de contrat. Temps partiel thérapeutique + CSS : hors autonomie, responsable paie. Dirigeant assimilé salarié : le CSS ne se « copie » pas depuis le bulletin ouvrier.",
      exercice:
        "Mensualisé 3 100,00 €, CSS accepté les 28, 29 et 30 janvier 2026. Le dossier applique la méthode calendaire. Calculez retenue et brut. Pourquoi 31 et pas 30 ? Que faites-vous du 31 janvier (samedi en 2026 — à traiter comme jour calendaire du mois, pas comme jour travaillé) ?",
      correction:
        "Janvier 2026 a 31 jours calendaires. Méthode calendaire du dossier : retenue = 3 100 × 3 / 31 = 300,00 € exactement (9 300 / 31 = 300). Brut = 2 800,00 €.\nOn divise par 31 parce que la méthode retenue est calendaire sur le mois civil réel, pas par 30 (autre méthode, autre résultat : 310,00 €). Le 31 janvier 2026 est un samedi : en calendaire, ce n'est pas une « absence du samedi à retenir en plus » ; les trois jours de CSS sont déjà 28-29-30. On ne retire pas un quatrième jour « parce que le mois se termine un samedi ». Si le dossier était en jours ouvrés, les dates 28-29-30 (mercredi à vendredi) seraient trois ouvrés : le résultat chiffré changerait. Ici, la consigne est calendaire.",
    }),
    pack({
      title: "Absences injustifiées : retenue, RH, preuves",
      description:
        "Retenir le non-travail sans instruire seul le licenciement ni inventer une pénalité.",
      minutes: 18,
      objectifs:
        "Vous séparez clairement retenue de paie et procédure disciplinaire, vous documentez l'absence injustifiée, et vous calculez une retenue selon la méthode du dossier.",
      theorie:
        "Une absence est injustifiée lorsque le salarié n'a fourni ni prestation ni motif valable dans les délais et formes exigés (certificat, autorisation, cas de force majeure apprécié par l'employeur). Ce n'est pas au gestionnaire de paie junior de prononcer la qualification définitive s'il y a contestation : il alerte la RH, conserve la trace, et applique la consigne écrite.\n\nLa retenue correspond aux jours ou heures non travaillés. Elle n'est pas une amende. Elle n'est pas un « 200 € de retenue disciplinaire ». Elle utilise la même famille de méthodes que le CSS ou le retard : calendaire, 30es, ouvrés, ouvrables, horaire — méthode du dossier, cohérente, justifiable.\n\nPreuve : planning, badgeage, relances, absence de pièce à la date de clôture. Si l'arrêt arrive après clôture, vous régularisez le mois suivant (maladie vs injustifié) : c'est fréquent, ce n'est pas une honte, c'est un process. Bloquer un net « jusqu'à ce qu'il justifie » sans règle de retenue claire est plus risqué qu'une retenue justifiée suivie d'une régularisation.\n\nEffets collatéraux : en principe pas d'acquisition de CP légaux sur une période d'absence injustifiée non assimilée ; pas d'IJ ; possible impact sur la prime d'assiduité si une prime contractuelle ou conventionnelle le prévoit (lire la clause, ne pas inventer la perte de prime). Titres-restaurant : en principe pas de titre pour un jour non travaillé — règle d'attribution du dossier, à lire.\n\nAbandon de poste : régime spécifique (mise en demeure, présomption de démission dans un cadre légal encadré). Un junior ne code pas « démission » sur un bulletin parce que le salarié n'est pas venu. RH + responsable paie.\n\nPériode : janvier 2026. Cotisations : le brut après retenue est l'assiette du mois, avec PMSS 4 005 €, taux pleins maladie 13 % et AF 5,25 % si la RGDU n'est pas demandée par le cas (CONTENT_SPEC).",
      methode:
        "1. Constater le fait (dates, heures) et l'absence de pièce à une date de relance.\n2. Copier RH / responsable paie : qualification « injustifiée provisoire ».\n3. Appliquer la méthode de retenue du dossier, pas une pénalité.\n4. Couper les avantages liés à la présence selon les règles écrites (TR, panier), pas « au feeling ».\n5. Préparer la régularisation si une pièce arrive.\n6. Ne jamais mentionner sur le bulletin un libellé infamant (« faute », « abandon »). Libellé factuel : absence non rémunérée / absence injustifiée selon paramétrage.\n7. Journal d'incidents.",
      noteText:
        "Confidentialité : une absence injustifiée n'est pas un sujet de pause café. Santé éventuelle (maladie non encore justifiée) = donnée sensible. Canal habilité seulement.",
      exemple:
        "CSP, 120 bulletins. Salarié en 3 100,00 €, absent les 7, 8 et 9 janvier 2026 sans pièce au gel du 18. RH confirme : injustifiée à ce stade. Méthode du dossier : calendaire. Retenue = 3 100 × 3 / 31 = 300,00 €. Brut 2 800,00 €. Le 22 janvier, un arrêt arrive avec reprise de causalité au 7 janvier. Le junior n'a pas clôturé en silence : il a une ligne d'incident. Marc décide la régularisation (maladie, carence IJ, maintien CCN à LIRE). La retenue calendaire n'était pas « fausse » au 18 ; elle devient à reprendre. Mieux vaut une reprise documentée qu'une absence de retenue « au cas où ».",
      erreurs:
        "Licencier par le bulletin. Retenir 10 % du brut « pour la forme ». Publier l'absence sur un tableau d'équipe. Refuser de régulariser un arrêt arrivé tard. Cumuler retenue calendaire ET retenue horaire sur les mêmes jours.",
      particuliers:
        "Salarié protégé : toute mesure au-delà de la stricte retenue du non-travail sort de l'autonomie (IRP, médecin). Grève : régime propre (retenue du temps de grève, pas de sanction pécuniaire déguisée) — responsable paie. Retenue et saisie sur salaire : le non-travail réduit le brut ; la saisie s'applique sur le saisissable après, barème à jour, pas d'invention.",
      exercice:
        "3 100,00 €, 3 jours calendaires injustifiés en janvier 2026, méthode calendaire du dossier. (1) Retenue et brut. (2) Le N+1 veut ajouter 150 € « de pénalité règlement intérieur ». (3) Un arrêt arrive le 2 février couvrant les 3 jours. Que faites-vous pour février ?",
      correction:
        "1. 3 100 × 3 / 31 = 300,00 €. Brut janvier = 2 800,00 €. Méthode pédagogique calendaire, justifiable seulement si c'est bien la méthode du dossier.\n2. Refus de la pénalité de 150 € : pas une retenue d'inexécution. Escalade RH. Le règlement intérieur ne crée pas une amende de paie.\n3. Février : régularisation — annuler la nature injustifiée, requalifier en maladie, recalculer maintien / IJ / subrogation selon CCN et loi (module suivant), DSN rectificative selon process. Vous ne « laissez » pas janvier faux parce que c'est clôturé : vous ouvrez un dossier de reprise.",
    }),
    pack({
      title: "Méthodes de retenue : calendaire, ouvrés, ouvrables, 30es, horaire",
      description:
        "Comparer les méthodes, comprendre pourquoi aucune n'est « la » formule légale universelle, et exiger cohérence et justification.",
      minutes: 24,
      objectifs:
        "Vous savez présenter plusieurs méthodes de retenue, calculer chacune sur un même cas, expliquer l'écart, et justifier celle du dossier sans prétendre qu'elle est imposée par un article unique pour toutes les absences non rémunérées.",
      theorie:
        "Il n'existe pas de formule légale unique, universelle et obligatoire, qui imposerait pour toute absence non rémunérée de tout salarié mensualisé le rapport « salaire × jours d'absence / 30 » ou « / 31 » ou « / nombre d'ouvrés ». La jurisprudence et la pratique ont connu plusieurs modes de calcul. Ce que le droit exige, c'est que la retenue corresponde à l'inexécution, qu'elle ne soit pas une sanction pécuniaire, qu'elle soit cohérente, et qu'elle puisse se justifier par le contrat, la CCN, un accord, un usage régulier ou une méthode d'équivalence raisonnable — pas par l'humeur du mois.\n\nFamilles de méthodes, à connaître pour les reconnaître dans un paramétrage :\n\n1. Calendaire (mois civil réel) : retenue = brut de référence × nombre de jours calendaires d'absence / nombre de jours calendaires du mois. En janvier 2026, dénominateur 31. En février 2026, 28 (année non bissextile). Cette méthode suit le mois réel. Elle n'est pas « plus légale » qu'une autre par nature ; elle est pédagogique, fréquente, lisible.\n\n2. Trentièmes : dénominateur 30, quel que soit le mois. Retenue = brut × jours / 30. Simple, parfois prévue par usage ou paramétrage. En janvier, elle est plus lourde que le calendaire réel (3/30 > 3/31).\n\n3. Jours ouvrés : dénominateur = nombre de jours ouvrés du mois (souvent lundi–vendredi, fériés travaillés ou non selon le dossier). Numérateur = ouvrés d'absence. Un absence du samedi n'entre pas. Un mois à 22 ouvrés n'est pas un mois à 20. Vous comptez, vous n'inventez pas « 21 tous les mois ».\n\n4. Jours ouvrables : souvent lundi–samedi. Le dénominateur et le numérateur suivent cette convention. Confondre ouvrable et ouvré est l'erreur junior la plus classique, y compris parce que les CP légaux se comptent souvent en ouvrables.\n\n5. Horaire : retenue = (brut / horaire mensuel, souvent 151,67) × heures d'absence. Adaptée aux retards et aux absences en heures. Sur plusieurs jours pleins, elle peut diverger fortement du calendaire si l'on convertit 7 h × n jours.\n\nAucune de ces méthodes ne doit être présentée au salarié comme « c'est la loi, article unique ». Vous dites : « C'est la méthode appliquée dans l'entreprise, cohérente avec les autres dossiers, justifiée par (contrat / CCN / usage / paramétrage validé). » Si deux salariés identiques ont deux méthodes, c'est un risque.\n\nLe brut de référence : salaire de base mensualisé, parfois hors éléments variables selon la clause ; parfois avec. Lire le paramétrage. Un 13e mois mensualisé n'est pas toujours dans la base de retenue. Ne pas inventer la composition de la base.\n\nPériode : janvier 2026, 31 jours calendaires. Cas travaillé du module : 3 100,00 €, 3 jours calendaires non rémunérés → en méthode calendaire, 3 100 × 3 / 31 = 300,00 €. Ce 300,00 € est un résultat pédagogique de cette méthode, pas un barème national d'absence.",
      methode:
        "Devant un dossier :\n1. Identifier la méthode déjà paramétrée (rubrique, dossier social, note interne).\n2. Vérifier qu'elle est écrite quelque part (contrat, accord, usage constant, CCN).\n3. Si rien n'est écrit : ne pas improviser ; demander au responsable paie. Documenter.\n4. Compter correctement numérateur ET dénominateur dans la même unité.\n5. Recalculer hors logiciel une fois par type d'absence et par mois de 28, 29, 30, 31 jours.\n6. Contrôler qu'on ne mélange pas CP (ouvrables) et retenue d'absence (peut être calendaire).\n7. Tracer le calcul dans le journal du mois.",
      noteText:
        "Il n'y a PAS de formule légale unique universelle pour toutes les retenues d'absence non rémunérée. Un blog, un ancien collègue ou un paramétrage d'un autre client ne font pas loi. Cohérence + justification contractuelle ou conventionnelle + proportionnalité à l'inexécution.",
      exemple:
        "Même salarié, même mois, trois méthodes, pour voir l'écart — dossier fictif, janvier 2026, 3 100,00 €, 3 jours calendaires d'absence non rémunérée (lundi 12, mardi 13, mercredi 14 janvier 2026). Le responsable paie de l'ETI « Atelier Nord Paie » (dossier pédagogique) a choisi le calendaire par note interne. Le junior présente l'écart au N+1, il ne « teste » pas les trois sur le bulletin réel.",
      extra: [
        code(`CAS TRAVAILLÉ — janvier 2026 (31 jours calendaires)
Brut de référence     3 100,00 €
Absence               3 jours NON RÉMUNÉRÉS (CSS ou injustifiés — même arithmétique)
Période               12-14 janvier 2026 (lun.-mer.)

MÉTHODE A — calendaire (MÉTHODE PÉDAGOGIQUE du dossier, pas formule légale unique)
  Retenue = 3 100,00 × 3 / 31 = 300,00 €
  Brut    = 3 100,00 − 300,00 = 2 800,00 €

MÉTHODE B — trentièmes (autre méthode possible, pédagogique)
  Retenue = 3 100,00 × 3 / 30 = 310,00 €
  Brut    = 2 790,00 €

MÉTHODE C — horaire 151,67 h, HYPOTHÈSE 7 h / jour d'absence
  Taux    = 3 100,00 / 151,67 ≈ 20,4391 €
  Heures  = 21,00 h
  Retenue = 20,4391 × 21 = 429,22 €
  Brut    = 2 670,78 €

MÉTHODE D — jours ouvrés : numérateur 3 ouvrés (12-14 janv. sont lun.-mer.).
  Dénominateur = nombre d'ouvrés du mois de janvier 2026 DANS LE DOSSIER
  (lundi-vendredi, férié du 1er janvier : à compter selon la règle interne).
  Vous NE mémorisez PAS un dénominateur « 21 » universel. Vous comptez.
  Retenue = 3 100 × 3 / (ouvrés du mois)  → résultat différent de 300,00 €.

ÉCART A vs C : plus de 129 €. D'où l'interdiction d'improviser la méthode.
La formation retient l'exemple A (300,00 €) comme illustration calendaire
étiquetée pédagogique, parce que le dossier fictif l'a choisie et qu'elle
est arithmétiquement exacte : 3 100 × 3 / 31 = 300,00.`),
      ],
      erreurs:
        "Diviser par 30 en janvier et par 31 en mars sans règle. Diviser par 21 « comme tout le monde ». Utiliser les ouvrables des CP pour une absence injustifiée. Choisir la méthode qui arrange le net du dirigeant. Présenter 300,00 € comme « le montant légal 2026 de 3 jours d'absence ».",
      particuliers:
        "Mois d'entrée : le dénominateur peut être les jours de la période d'emploi, pas le mois entier — lire le paramétrage du prorata d'entrée, ne pas empiler deux proratas. Forfait jours : retenue en jours de forfait / jours de la période de forfait, selon accord. Temps partiel mercredi off : une absence mercredi n'existe pas. 29 février : seulement les années bissextiles ; 2026 n'en est pas une.",
      exercice:
        "Reproduisez sur 3 100,00 €, 3 jours, janvier 2026 : (1) calendaire ; (2) 30es ; (3) horaire 21 h sur 151,67. (4) En une phrase, pourquoi vous refusez de dire au salarié « c'est la loi, 300 € ».",
      correction:
        "1. 3 100 × 3 / 31 = 300,00 €. Brut 2 800,00 €.\n2. 3 100 × 3 / 30 = 310,00 €. Brut 2 790,00 €.\n3. 3 100 / 151,67 × 21 ≈ 20,4391 × 21 = 429,22 €. Brut 2 670,78 €.\n4. Parce qu'il n'existe pas de formule légale unique universelle pour toute retenue d'absence non rémunérée. 300,00 € est le résultat de la méthode calendaire choisie et justifiée par le dossier pédagogique. Une autre méthode écrite produirait un autre centime. Vous expliquez la méthode, sa source interne, et le calcul, pas « la loi des 300 € ».",
    }),
    pack({
      title: "Conséquences sur les cotisations, le plafond, les CP et la DSN",
      description:
        "Comprendre ce que la retenue change — et ce qu'elle ne change pas — dans l'assiette sociale.",
      minutes: 20,
      objectifs:
        "Vous anticipez l'effet d'une absence non rémunérée sur le brut soumis, les plafonds, la RGDU, les CP, les avantages liés à la présence, et vous savez ce que la DSN doit refléter.",
      theorie:
        "La retenue d'absence non rémunérée diminue le salaire brut du mois. L'assiette des cotisations de Sécurité sociale (CSS L. 242-1) suit en principe ce brut diminué, sous réserve des éléments qui restent dus (avantages en nature, primes acquises, retenue qui n'annule pas un AEN). Moins de brut, moins de cotisations salariales et patronales, toutes choses égales par ailleurs.\n\nPlafond : en janvier 2026, PMSS = 4 005 € (arrêté du 22 décembre 2025, URSSAF). Un salarial à 3 100 € reste sous plafond après une retenue de 300 € (2 800 €). La retenue ne « crée » pas de tranche 2. En revanche, un salarial à 4 200 € qui a une grosse absence peut redescendre sous le PMSS : la T2 du mois diminue. Le prorata de plafond en entrée/sortie ou temps partiel est un autre sujet (module plafonds) : une absence non rémunérée d'un temps plein présent tout le mois ne se traite pas comme un prorata d'embauche. Ne pas improviser un plafond réduit « parce qu'il a été absent » hors les cas prévus (entrée, sortie, temps partiel, certaines absences selon règles URSSAF de proratisation — à relire, pas à inventer).\n\nRGDU 2026 : le moteur pédagogique ne l'applique que si le cas le demande. Sinon, taux pleins maladie 13 % et AF 5,25 % (URSSAF privé 01/01/2026). Une baisse de brut rapproche du SMIC et peut, dans un dossier réel, modifier le coefficient d'allègement : vous ne recalculez pas la RGDU au doigt, vous contrôlez le moteur et vous escaladez. SMIC mensuel 1 823,03 € (01/01/2026–31/05/2026).\n\nCSG/CRDS : assiette 98,25 % du brut dans la limite de 4 PASS, puis 100 % (MSA barème 2026 / doctrine habituelle). Un brut plus faible = CSG plus faible. Taux 6,80 % déductible + 2,40 % non déductible + 0,50 % CRDS.\n\nAgirc-Arrco : T1 7,87 % dont 3,15 % salarial jusqu'à 4 005 € (barème 2026). Sur 2 800 €, T1 salariale = 2 800 × 0,0315 = 88,20 €, contre 97,65 € sur 3 100 €.\n\nCP : une absence non assimilée n'ouvre en principe pas de droit légal ; une maladie a un régime spécifique (module IJSS / congés). CSS et injustifiée : pas d'assimilation d'office.\n\nDSN : les jours d'absence, leur type, les dates, alimentent les blocs. Un CSS n'est pas un arrêt. Une injustifiée n'est pas un CP. Le CRM DSN après retenue « bizarre » se lit, on ne le ferme pas.\n\nAT/MP : taux d'établissement (HYPOTHÈSE pédagogique catalogue 1,50 %, jamais un taux national). L'assiette suit le brut soumis selon les règles AT, à ne pas confondre avec un taux que vous inventeriez.",
      methode:
        "Après calcul de la retenue :\n1. Recalculer le brut total du mois (base + primes − absence + HS…).\n2. Vérifier le plafond 4 005 € : toujours, T2, CET.\n3. Comparer cotisations N / N-1 : la baisse doit coller à la baisse de brut.\n4. Contrôler mutuelle forfaitaire (souvent inchangée — HYPOTHÈSE 20/40 du catalogue si le dossier l'utilise).\n5. Contrôler TR / panier du mois (présence).\n6. Préparer l'explication salarié : brut, méthode, jours, pas « vos charges ont augmenté » (elles ont en général baissé).\n7. DSN : type d'absence correct.",
      exemple:
        "Atelier Nord Paie, janvier 2026, 3 100,00 €, 3 jours CSS, méthode calendaire pédagogique. Brut 2 800,00 €. Effectif < 50, non-cadre, pas de mutuelle dans ce mini-cas, RGDU non demandée, AT/MP 1,50 % hypothèse si l'on affiche les patronales. Le salarié écrit : « j'ai moins de net, vous m'avez mis plus de cotisations. » Réponse factuelle : le brut a baissé de 300,00 € ; les cotisations salariales baissent aussi ; le net baisse surtout parce que le brut a baissé. Vous joignez le calcul 3 100 × 3 / 31 = 300,00.",
      extra: [
        code(`EFFET D'ASSIETTE — illustration pédagogique (non-cadre, janv. 2026)
                    Avant absence     Après CSS calendaire
Brut                3 100,00          2 800,00
PMSS                4 005,00          4 005,00   (reste sous plafond)
ARRCO T1 sal. 3,15 %   97,65            88,20
Vieillesse plaf. 6,90 % 213,90          193,20
CET                 0                 0          (brut < T1)

Les montants de cotisations ci-dessus sont des produits de taux 2026
sourcés (Agirc-Arrco, URSSAF vieillesse) sur l'assiette brute du cas.
Ils ne dispensent pas du bulletin complet (CSG, CRDS, patronales).
RGDU : non appliquée (consigne pédagogique).`),
      ],
      erreurs:
        "Proratiser le PMSS « parce qu'il a été absent 3 jours » hors cas URSSAF de prorata. Dire au salarié que les cotisations ont augmenté. Laisser la mutuelle forfaitaire s'annuler sans contrat. Coder l'absence en CP pour ne pas perdre de droits. Oublier la DSN.",
      particuliers:
        "Deux absences de natures différentes dans le mois : deux rubriques, une seule méthode de retenue pour l'inexécution non payée, plus les CP à part. Saisie sur salaire + absence : le saisissable change. AEN repas : un jour d'absence n'ouvre en principe pas l'AEN repas du jour. Régularisation d'un trop-perçu d'absence mal calculée : dossier, information, étalement possible selon règles, pas de « rattrapage sauvage » du net suivant.",
      exercice:
        "Cas 3 100,00 €, retenue calendaire 300,00 €, janvier 2026. Calculez la cotisation salariale Agirc-Arrco T1 (3,15 %) avant et après. Le CET est-il dû ? La RGDU est-elle à appliquer dans cet exercice ? Un collègue veut proratiser le PMSS à 4 005 × 28/31.",
      correction:
        "T1 salariale avant : 3 100 × 0,0315 = 97,65 €. Après : 2 800 × 0,0315 = 88,20 €.\nCET : non, rémunération du mois ≤ 4 005 € (T1). Barème Agirc-Arrco 2026 : CET seulement si salaire > T1.\nRGDU : non, le cas ne la demande pas ; taux pleins maladie / AF si l'on affiche les patronales.\nProrata PMSS 28/31 : non dans ce schéma (temps plein présent au contrat tout le mois, simple absence). Le plafond mensuel reste 4 005 €. Un prorata de plafond se lit dans les cas prévus (entrée, sortie, etc.), module plafonds, source URSSAF. Le junior n'invente pas un plafond 3 617,42 €.",
    }),
    pack({
      title: "Cas de clôture : trois jours non payés sur 3 100 € en janvier 2026",
      description:
        "Enchaîner qualification, méthode, calcul, contrôles et explication salarié.",
      minutes: 22,
      objectifs:
        "Vous menez un dossier d'absence de bout en bout, avec le cas chiffré du module, et vous rédigez une explication que le salarié peut comprendre sans jargon vide.",
      theorie:
        "La clôture d'un mois avec absence non rémunérée se joue en cinq actes : qualifier, choisir (retrouver) la méthode, calculer, contrôler les collatéraux, expliquer. Le cas de référence de ce module est volontairement simple pour verrouiller l'arithmétique : brut de base 3 100,00 €, janvier 2026 (31 jours), trois jours calendaires non rémunérés, méthode calendaire retenue par le dossier fictif.\n\n3 100 × 3 / 31 = 300,00 €. Ce n'est pas un hasard pédagogique approximatif : 9 300 / 31 = 300 exactement. Vous devez pouvoir le refaire à la main, puis le retrouver dans le logiciel. Si le logiciel affiche 310,00 €, il est en 30es. Si ind 429,22 €, il convertit probablement des heures. Vous ne « forcez » pas 300 pour faire plaisir à la formation : vous identifiez la méthode réelle, et si le dossier a choisi calendaire, vous exigez 300,00.\n\nLibellé bulletin : factuel, compréhensible, période. « Absence non rémunérée 12 au 14/01/2026 » vaut mieux que « ABS » ou « retenue diverse ». Mentions du bulletin : R. 3243-1, CCN, période, brut.\n\nExplication salarié : vous donnez la nature (CSS accepté, ou injustifiée confirmée par RH), les dates, la méthode, la formule, le brut avant/après. Vous ne dites pas « c'est la loi des 31es ». Vous dites « l'entreprise applique une retenue au prorata des jours calendaires du mois, soit 3/31 de 3 100 € ». Si le salarié conteste la méthode, ce n'est plus un calcul, c'est une question RH/juridique : usage, égalité, contrat.\n\nContrôles de clôture : brut 2 800,00 ; pas de double retenue ; mutuelle forfaitaire selon contrat ; TR non attribués sur les 3 jours si règle de présence ; DSN dates 12-14 ; journal d'incidents si la nature a bougé.\n\nPériode réglementaire : janvier 2026, métropole, régime général. Paramètres sourcés utilisés en collatéral : PMSS 4 005 €, SMIC 12,02 €/h, Agirc-Arrco T1 salarial 3,15 %. Hypothèses de dossier : AT/MP, mutuelle, PAS — jamais comme taux nationaux.",
      methode:
        "Checklist du cas :\n1. Pièces (CSS ou dossier injustifié RH) au dossier GED.\n2. Dates 12-14 janvier 2026, 3 calendaires.\n3. Méthode : calendaire, note interne du dossier fictif.\n4. 3 100 × 3 / 31 = 300,00. Brut 2 800,00.\n5. Contrôle moteur vs Excel.\n6. Avantages présence.\n7. DSN.\n8. Phrase d'explication prête avant le jour de paiement.",
      exemple:
        "Lina, Atelier Nord Paie, 24 janvier 2026. Le logiciel sort 310,00 € de retenue. Elle ouvre le paramétrage : dénominateur 30. Elle n'édite pas le bulletin. Elle alerte Marc : soit on aligne le paramétrage sur la note interne calendaire (300,00), soit on met à jour la note interne si l'usage réel est le 30es — mais alors TOUS les salariés, pas seulement celui-ci. Le 25, Marc tranche : calendaire, correction 300,00. Lina documente. C'est ça, le métier.",
      extra: [
        code(`FICHE DOSSIER — Absence janvier 2026
Salarié              : [fictif]  matricule 1042
Brut de base         : 3 100,00 €
Nature               : CSS accepté le 08/01/2026  (ou injustifiée RH — ne pas mélanger)
Dates                : 12, 13, 14 janvier 2026
Unité                : jours calendaires
Méthode              : calendaire  (note interne — MÉTHODE PÉDAGOGIQUE)
Calcul               : 3 100,00 × 3 / 31 = 300,00 €
Brut du mois         : 2 800,00 €  (hors autres variables)
PMSS                 : 4 005,00 €  (sous plafond)
Libellé bulletin     : Absence non rémunérée du 12 au 14/01/2026
DSN                  : type CSS (ou absence injustifiée), dates 12-14
TR                   : 0 titre sur ces 3 jours si règle = jour travaillé
Mutuelle             : selon contrat (hyp. catalogue 20/40 si posée)
Validation           : responsable paie 25/01/2026

MAIL SALARIÉ (ton professionnel, vouvoiement)
Objet : Bulletin janvier 2026 — absence 12-14/01
« Votre bulletin intègre une retenue de 300,00 € correspondant à trois jours
non rémunérés (12 au 14 janvier). Calcul : 3 100,00 × 3 / 31. L'entreprise
applique le prorata des jours calendaires du mois. Cette méthode est celle
du dossier ; ce n'est pas une pénalité. Pour la nature de l'absence, votre
interlocuteur RH est … »`),
      ],
      erreurs:
        "Laisser 310 € parce que « c'est presque 300 ». Expliquer « article du Code : diviser par 31 ». Corriger le paramétrage pour un seul salarié. Envoyer le détail du dossier disciplinaire dans le mail de paie.",
      particuliers:
        "Si les 3 jours étaient 30, 31 janvier et 1er février : deux mois, deux retenues, deux dénominateurs (31 et 28 en 2026). Si un des jours est le 1er janvier (férié) : analyser si le férié était dû ; un CSS qui « englobe » un férié déjà chômé ne se traite pas au kilo. Sortie le 14 janvier + absence 12-14 : coordonner prorata de sortie et absence, sans double retenue — responsable paie.",
      exercice:
        "Rédigez les 5 lignes du journal d'incidents du 24 janvier (logiciel à 310 €, note interne calendaire) et donnez le brut final validé. Calculez aussi, pour le N+1, ce qu'aurait donné le 30es, afin qu'il tranche en connaissance.",
      correction:
        "Journal : « 24/01/2026 — matricule 1042 — retenue absence moteur = 310,00 (base 30) — note interne = calendaire — écart 10,00 — pas d'édition — alerte Marc — attente arbitrage méthode collective. »\n25/01 : « Décision Marc : calendaire pour tout le dossier. Correction 300,00. Brut 2 800,00. Paramétrage à aligner avant février. »\n30es : 310,00 €, brut 2 790,00 €. L'écart de 10 € n'est pas un arrondi, c'est une autre règle. Le brut final pédagogique de ce module, méthode calendaire choisie : 2 800,00 €.",
    }),
    quizLesson({
      title: "Quiz — Absences et retenues",
      description:
        "Vérifier la qualification, l'absence de formule unique, le cas 3 100 € et les effets d'assiette.",
      passing_score: 70,
      questions: [
        q({
          question:
            "Quelle affirmation est exacte sur la retenue d'une absence non rémunérée d'un mensualisé ?",
          options: [
            "A. Le Code du travail impose pour tous les dossiers la formule salaire × jours / 30",
            "B. Il n'existe pas de formule légale unique universelle ; la méthode doit être cohérente et justifiable (contrat, CCN, usage, équivalence raisonnable)",
            "C. On retient toujours 7 heures × taux SMIC, quelle que soit la rémunération",
            "D. On peut retenir n'importe quel forfait prévu « pour l'exemple » par le manager",
          ],
          correct: 1,
          explanation:
            "Pas de formule statutaire unique pour toute retenue d'absence non payée. Cohérence et justification. Le SMIC ne sert pas de base de retenue du salarial à 3 100 €. Un forfait punitif n'est pas une méthode de paie.",
        }),
        q({
          question:
            "Mensualisé 3 100,00 €, 3 jours calendaires non rémunérés, janvier 2026 (31 jours), méthode calendaire pédagogique du dossier. Retenue ?",
          options: [
            "A. 300,00 €  (3 100 × 3 / 31)",
            "B. 310,00 € uniquement, parce que « on divise toujours par 30 »",
            "C. 3 100,00 €, le mois est perdu",
            "D. 0 €, un mensualisé ne peut jamais avoir de retenue",
          ],
          correct: 0,
          explanation:
            "3 100 × 3 / 31 = 300,00 € exactement. C'est la méthode calendaire étiquetée pédagogique. Le 30es donnerait 310,00 € : autre méthode, pas « la » loi.",
        }),
        q({
          question: "Un manager demande d'enlever 100 € à un salarié « pour ses retards ». Vous :",
          options: [
            "A. Saisissez 100 € en retenue diverse",
            "B. Mesurez le temps non travaillé, appliquez le taux horaire du dossier, et laissez le disciplinaire à la RH",
            "C. Doublez la retenue horaire pour que ça « se voie »",
            "D. Transformez les retards en CP pour lisser le net",
          ],
          correct: 1,
          explanation:
            "La paie retient l'inexécution mesurée. 100 € forfaitaires ressemblent à une sanction pécuniaire. Les CP ne maquillent pas un retard.",
        }),
        q({
          question: "Le congé sans solde se code en DSN comme :",
          options: [
            "A. Un arrêt de travail maladie, c'est plus simple",
            "B. Un congé payé, s'il reste du stock",
            "C. Une absence de type CSS / non rémunérée, selon le paramétrage, jamais un arrêt maladie de substitution",
            "D. Rien : le CSS est interdit en France",
          ],
          correct: 2,
          explanation:
            "Le CSS n'est pas un arrêt. Il n'est pas un CP. Il n'est pas interdit par principe : c'est un accord. La DSN doit porter la bonne nature.",
        }),
        q({
          question:
            "Après une retenue calendaire de 300 € sur 3 100 € en janvier 2026, le PMSS à retenir pour un temps plein présent tout le mois (hors cas de prorata d'entrée/sortie) est :",
          options: [
            "A. 4 005 × 28/31",
            "B. 4 005 € (PMSS janvier 2026) ; la simple absence non rémunérée ne s'improvise pas en prorata de plafond",
            "C. 3 100 €",
            "D. 2 800 €",
          ],
          correct: 1,
          explanation:
            "PMSS 4 005 € (arrêté 22/12/2025). On ne proratise pas le plafond au prétexte de 3 jours d'absence hors règles URSSAF de prorata (entrée, sortie, etc.).",
        }),
        q({
          question: "Quelle est la meilleure distinction retenue / discipline ?",
          options: [
            "A. La retenue est la contrepartie du non-travail ; la sanction est une procédure RH distincte",
            "B. Plus la retenue est élevée, plus la faute est prouvée",
            "C. Le bulletin peut porter le mot « faute grave »",
            "D. L'absence injustifiée interdit toute retenue jusqu'aux prud'hommes",
          ],
          correct: 0,
          explanation:
            "Deux registres. La paie n'instruit pas la faute. L'absence de pièce permet une retenue d'inexécution, pas un libellé infamant.",
        }),
        q({
          question:
            "Même cas 3 100 €, 3 jours, janvier 2026. Pourquoi la méthode horaire 7 h × 3 / 151,67 donne-t-elle un résultat différent de 300,00 € ?",
          options: [
            "A. Parce que le SMIC a changé",
            "B. Parce que l'unité (heures sur 151,67) n'est pas le prorata des 31 jours calendaires ; les méthodes ne sont pas équivalentes",
            "C. Parce que 151,67 est faux en 2026",
            "D. Parce qu'il faut toujours retenir 50 % du brut",
          ],
          correct: 1,
          explanation:
            "21 h × (3 100/151,67) ≈ 429,22 €. Autre unité, autre résultat. 151,67 reste la conversion usuelle du 35 h mensuel. Pas de retenue légale à 50 %.",
        }),
        q({
          question: "Sur 2 800 € de brut après retenue, la cotisation salariale Agirc-Arrco T1 2026 (3,15 %) est :",
          options: [
            "A. 88,20 €",
            "B. 97,65 € (c'est le chiffre sur 3 100 €, pas sur 2 800 €)",
            "C. 0 €, la retraite s'arrête pendant une absence",
            "D. 4,72 % salarial",
          ],
          correct: 0,
          explanation:
            "2 800 × 0,0315 = 88,20 €. 97,65 € = 3 100 × 3,15 %. Le 4,72 % est le taux patronal T1, pas salarial. L'absence réduit l'assiette, elle n'annule pas le régime.",
        }),
        q({
          question: "Vous découvrez que le logiciel divise par 30 alors que la note interne dit calendaire. Vous :",
          options: [
            "A. Laissez faire, 10 € d'écart ce n'est rien",
            "B. Corrigez uniquement le salarié qui s'est plaint",
            "C. Alertez le responsable : écart de méthode collective, pas d'édition tant que l'arbitrage n'est pas tranché",
            "D. Inversez la note interne en silence",
          ],
          correct: 2,
          explanation:
            "C'est un paramétrage, pas un arrondi. L'égalité de traitement impose un arbitrage pour tout le dossier. Un junior n'aligne pas « à la tête du client ».",
        }),
        q({
          question: "Quelle absence est en principe rémunérée sans que vous ayez à « décider de faire un geste » ?",
          options: [
            "A. Un CSS accepté",
            "B. Une absence injustifiée confirmée par la RH",
            "C. Des congés payés validés, indemnisés selon les règles de CP",
            "D. Un retard badgeé hors flexibilité",
          ],
          correct: 2,
          explanation:
            "Les CP ont une indemnité. CSS et injustifiée : non rémunérés. Retard : retenue du temps. Le geste unilatéral n'est pas une règle de paie.",
        }),
      ],
    }),
  ],
};
