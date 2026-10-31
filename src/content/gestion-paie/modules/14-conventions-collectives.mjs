import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 14,
  title: "Lire et appliquer une convention collective",
  description:
    "Identifier l'IDCC, extraire classifications, minima, primes, congés, maintien, préavis et indemnités sans mémoriser une fausse grille, et comparer la méthode de lecture Syntec, métallurgie et commerce.",
  lessons: [
    pack({
      title: "Identifier la CCN applicable : IDCC, bulletin, Légifrance",
      description:
        "Trouver le texte qui s'applique au dossier, pas celui du précédent client.",
      minutes: 20,
      objectifs:
        "Vous savez ce qu'est un IDCC, où il figure, comment ouvrir la CCN sur Légifrance, et pourquoi l'activité réelle de l'établissement prime sur l'habitude du gestionnaire.",
      theorie:
        "La convention collective nationale (CCN) est un accord étendu ou non, négocié par les organisations d'employeurs et de salariés d'une branche. Elle complète le Code du travail : classifications, minima, primes, congés supplémentaires, maintien de salaire, préavis, indemnités. Elle n'existe pas « en général » : elle a un identifiant, l'IDCC (numéro à 4 chiffres), une intitulé, des avenants, parfois des annexes (cadres / ETAM / ouvriers).\n\nL'employeur applique la CCN de son activité principale, selon les règles d'appartenance à la branche (codes APE/NAF : indice, pas preuve exclusive). En cas de doute (multi-activités, holding, franchise), ce n'est pas le junior qui « choisit Syntec parce que c'est des bureaux ». RH / juridique / expert-comptable.\n\nLe bulletin doit mentionner la convention applicable (R. 3243-1). C'est votre premier contrôle : l'IDCC paramétré = l'IDCC imprimé = l'IDCC Légifrance ouvert. Un IDCC faux paie de faux minima.\n\nOù lire : Légifrance, recherche par IDCC ou par titre. Le texte consolidé + les avenants « salaires » récents. Un PDF de 2019 dans le Drive n'est pas la source. Les sites d'éditeurs aident à naviguer ; ils ne remplacent pas le texte officiel.\n\nExtension : une CCN étendue s'impose à tous les employeurs de la branche dans son champ. Non étendue : elle lie les signataires et adhérents. Vérifier sur Légifrance l'arrêté d'extension. Un junior ne déclare pas « c'est étendu » de mémoire.\n\nPériode : janvier 2026. Les minima 2026 d'une branche se lisent dans l'avenant salarial de la branche, pas dans rates-2026.json (qui n'a que SMIC 12,02 €/h et 1 823,03 €, URSSAF). Le SMIC reste le plancher légal : un minimum CCN inférieur au SMIC ne s'applique pas en dessous du SMIC.\n\nCette formation ne publie aucun minimum Syntec, métallurgie ou commerce en euros.",
      methode:
        "1. Bulletin / dossier : intitulé CCN + IDCC.\n2. SIRET, code NAF, activité réelle : cohérence ?\n3. Légifrance : IDCC → texte consolidé.\n4. Avenants salaires / classifications en vigueur au 01/01/2026.\n5. Extension ? Annexes ? Accords d'entreprise qui s'y articulent ?\n6. Paramétrage logiciel : même IDCC.\n7. Écart : stop, N+1.",
      noteText:
        "Un IDCC ne se mémorise pas comme un taux URSSAF. On le lit sur le bulletin du dossier. Si vous « savez par cœur » le minimum Syntec, vous êtes déjà en train d'inventer : les avenants bougent.",
      exemple:
        "Cabinet, nouveau client « conseil ». Le gérant dit « on est Syntec ». Lina ouvre le Kbis, le NAF, le bulletin modèle, Légifrance. Elle ne saisit aucun coefficient. Elle pose la question écrite : IDCC retenu, date, qui a tranché. Le SMIC 12,02 € reste le plancher horaire janvier 2026, quelle que soit la branche.",
      extra: [
        code(`IDENTIFICATION CCN — J+1 d'un dossier
SIRET / établissement : ........
NAF / activité réelle : ........
IDCC bulletin : ........  intitulé : ........
IDCC Légifrance ouvert : ........  URL : ........
Texte consolidé au : ........
Avenant salaires en vigueur au 01/01/2026 : n° .... date ....
Étendue : oui / non / à vérifier (arrêté)
Annexes (cadres, ETAM, ouvriers) : ........
Accord d'entreprise : oui / non  articule : ........
Paramétrage logiciel : IDCC ........  écart bulletin : oui/non
SMIC janv. 2026 (plancher légal) : 12,02 €/h — 1 823,03 € / 151,67 h
Aucun € de minimum de branche recopié de mémoire.`),
      ],
      erreurs:
        "Copier l'IDCC du dossier voisin. Croire le NAF infaillible. Utiliser un PDF Drive. Inventer l'IDCC 1486 « pour tous les bureaux ». Oublier l'avenant salarial de l'année.",
      particuliers:
        "Multi-établissements, deux CCN. Mise à disposition. Franchise. Groupement. Portage. Apprentissage : CCN de l'employeur. Un salarié « cadre Syntec » dans une société de négoce : la CCN suit l'employeur, pas le diplôme.",
      exercice:
        "Le bulletin imprime « Convention métallurgie », le logiciel est en « commerces de gros ». Trois actes. Citez la source du SMIC 2026 et expliquez pourquoi elle ne vous donne pas le minimum de branche.",
      correction:
        "1) Stop production. 2) Recouper activité, contrat, Légifrance, RH. 3) Aligner IDCC bulletin = logiciel = texte, visa N+1. Ne pas « choisir le plus simple ».\nSMIC : URSSAF / Service-Public, 12,02 € et 1 823,03 € au 01/01/2026. C'est le plancher légal, pas la grille de branche. Le minimum CCN se lit dans l'avenant de LA CCN identifiée, en euros que ce cours n'invente pas.",
    }),
    pack({
      title: "Méthode de lecture : extraire sans mémoriser",
      description:
        "Une grille d'extraction unique pour n'importe quelle CCN, y compris celles que vous voyez pour la première fois.",
      minutes: 20,
      objectifs:
        "Vous parcourez une CCN comme un document de travail : sommaire, champ, classifications, salaires, durée, absences, rupture — et vous remplissez une fiche, vous ne récitez pas.",
      theorie:
        "Une CCN se lit comme un Code : définitions, champ d'application, embauche, classification, rémunération, durée du travail, congés, maladie, formation, rupture, annexes. Le réflexe junior n'est pas de tout connaître. C'est d'ouvrir le bon chapitre le jour du fait (un arrêt, un départ, un avenant).\n\nOrdre de lecture recommandé, le premier mois d'un dossier :\n1. Champ d'application (êtes-vous dans le texte ?).\n2. Classification et périodes d'essai (RH + paie).\n3. Rémunération : minima, primes obligatoires de branche, 13e, ancienneté, majorations.\n4. Durée du travail, forfaits, RTT, HS (articulation avec L. 3121-27 et s. : la durée légale 35 h reste le déclencheur des HS légales sauf équivalence ; une durée conventionnelle inférieure se lit, elle ne s'invente pas).\n5. Congés : légal 2,5 jours ouvrables / mois, L. 3141-3, plafond 30 ouvrables ; la CCN peut être plus favorable (jours, ancienneté, fractionnement). AUCUN jour supplémentaire n'est cité ici pour Syntec, métallurgie ou commerce.\n6. Maintien maladie / AT : module 11, extraire, ne pas inventer le %.\n7. Préavis et indemnités de rupture : L. 1234-1 et s. sont un plancher ; la CCN peut allonger. Lire. Ne pas inventer un mois par année.\n\nAvenants : un chapitre « salaires » se renégocie. Un chapitre « classification » a pu être refondu (métallurgie récente : nouveau système — méthode de lecture en leçon cas). Toujours la version consolidée du jour.\n\nPériode : janvier 2026. Le SMIC a bougé au 1er janvier ; beaucoup de branches publient un avenant. Contrôler que le logiciel n'est pas resté sur 2025.",
      methode:
        "Fiche CCN du dossier (une par IDCC, pas une par salarié) :\nRemplir en 90 minutes la première semaine, viser N+1, déposer en GED. Chaque clôture : seulement les avenants nouveaux. Chaque événement : extraire l'article, photocopier la référence dans le journal.",
      exemple:
        "Maya, ETI, une seule CCN. Elle passe deux heures en janvier 2026 à remplir la fiche, Légifrance ouvert. Théo, cabinet, 5 IDCC : cinq fiches, jamais « c'est comme le client d'à côté ». Un minimum lu chez A n'est pas transposable à B.",
      extra: [
        code(`FICHE CCN — extraction (zéro € et zéro jour inventés)
IDCC / intitulé / consolidé au :
Champ d'application (1 phrase) :
Classification : article ....  grille : coefficient / groupe / échelon
Minima : avenant n° .... du ....  (MONTANT : recopier le texte, pas la mémoire)
Primes de branche (ancienneté, vacances, panier…) : art. ....
13e / gratifications : art. ....  (existe : oui/non — formule à extraire)
Durée / forfait jours / RTT : art. ....
Congés au-delà du légal : art. ....  (NOMBRE : recopier, pas « 2 jours Syntec »)
Maladie maintien : art. ....  AT : art. ....
Préavis démission / licenciement : art. ....
Indemnité de licenciement de branche : art. ....
Accord d'entreprise qui déroge : oui/non  thème : ....
SMIC 12,02 € : contrôle que minima ≥ SMIC horaire ou mensualisé applicable`),
      ],
      erreurs:
        "Lire un résumé LinkedIn. Remplir la fiche une fois en 2022. Copier les jours de CP d'un forum. Appliquer le maintien du module 11 « 90 % » sans article. Confondre CCN et accord d'entreprise.",
      particuliers:
        "CCN régionales, IDCC différents commerce alimentaire vs non alimentaire. Annexes cadres. Accords de branche sur les AT. Un texte « recommandation » non étendu n'est pas toujours obligatoire : qualifier.",
      exercice:
        "On vous donne 20 minutes. Listez dans l'ordre les 7 chapitres que vous ouvrez pour un salarié en arrêt puis en sortie le même mois. Où prenez-vous les euros de minimum ?",
      correction:
        "1 Champ (bon IDCC). 2 Classification du salarié (contrat). 3 Maintien maladie (art. CCN + D. 1226-1). 4 Congés (acquisition / solde, légal + art. CCN). 5 Préavis (légal + CCN). 6 Indemnité de rupture (légal + CCN). 7 Minima seulement si vous devez recalculer un brut ou un rappel (avenant salaires).\nEuros de minimum : uniquement l'avenant consolidé Légifrance, recopié. Pas ce quiz, pas un souvenir, pas rates-2026.json hors SMIC.",
    }),
    pack({
      title: "Classifications et minima de branche",
      description:
        "Relier le coefficient du contrat à une ligne de grille, puis au SMIC, sans forger un euro.",
      minutes: 20,
      objectifs:
        "Vous savez que la classification est un acte RH, que le minimum de branche est une ligne d'avenant, et que le SMIC 2026 reste le plancher, sans mémoriser une grille.",
      theorie:
        "La classification place le salarié dans un groupe, un coefficient, une position, un emploi-repère. Elle figure au contrat et au bulletin. La paie n'invente pas un coefficient « parce que le salaire est à 3 100 € ». Si le contrat dit position X, vous ouvrez la grille X, vous lisez le minimum, vous comparez au brut de base (hors éléments selon la CCN : certaines grilles sont des minima de base, d'autres incluent l'ancienneté — LIRE).\n\nÉcart minimum > salaire : rappel, RH, pas un silence. Écart salaire >> minimum : possible (marché), ce n'est pas une erreur. Écart minimum < SMIC : on ne paie pas sous SMIC (12,02 €/h, 1 823,03 € / 151,67 h du 01/01/2026 au 31/05/2026). Le 1er juin 2026, SMIC 12,31 € : autre période, autre contrôle.\n\nChangement de classification : avenant, pas une ligne de prime. Forfait jours : souvent une position minimale dans la CCN — à extraire, pas à inventer.\n\nCette leçon ne contient aucun coefficient Syntec, aucun groupe métallurgie, aucun échelon commerce, aucun euro de minimum. La compétence est : trouver la ligne, recopier, comparer, alerter.\n\nPMSS 4 005 € n'a rien à voir avec le minimum de branche : c'est le plafond de cotisations. Un minimum CCN à 2 000 € (chiffre fictif d'illustration INTERDITE comme vrai barème) resterait sous PMSS ; cela n'enseigne pas le barème réel.",
      methode:
        "1. Position / coefficient au contrat.\n2. Grille Légifrance avenant en vigueur janvier 2026.\n3. Minimum recopié, date, article.\n4. Comparer au salaire de base du mois.\n5. SMIC horaire si temps partiel ou horaire.\n6. Si < minimum ou < SMIC : bloquer, N+1, pas de clôture « on verra ».",
      exemple:
        "Entrée le 13 janvier 2026, 2 100 €, 35 h. Lina vérifie 2 100 > 1 823,03 (SMIC). Puis elle ouvre LA CCN du dossier, ligne de classification du contrat, minimum de janvier 2026. Si le minimum lu (non publié ici) est supérieur à 2 100, elle n'attend pas février. Elle n'utilise pas 2 100 comme « le » minimum Syntec.",
      extra: [
        code(`CONTRÔLE MINIMA — janvier 2026
Classification contrat : ........
Article + avenant : ........
Minimum de branche recopié : ........ €   ← source Légifrance, pas le cours
Salaire de base dossier : ........ €
SMIC mensuel 151,67 h : 1 823,03 € (01/01-31/05/2026)
SMIC horaire : 12,02 €
Test 1 : base ≥ SMIC applicable au temps de travail
Test 2 : base ≥ minimum de branche (si le minimum CCN s'entend hors primes :
         LIRE ce que la grille inclut)
Écart : OK / rappel / classification à revoir (RH)

INTERDIT : écrire ici 2 347 € ou tout autre « souvenir de grille ».`),
      ],
      erreurs:
        "Classer selon le salaire. Oublier le SMIC. Prendre la grille 2024. Inventer un coefficient. Croire que le PMSS est un minimum. Appliquer la grille cadres à un ETAM.",
      particuliers:
        "Forfait jours sans position minimale CCN : risque, RH. Jeunes, certificats, périodes d'adaptation : parfois un % du minimum — LIRE, ne pas inventer 80 %. Travailleurs handicapés : pas un minimum inférieur illégal. Apprentis : grille spécifique, SMIC % légaux, autre fiche, pas d'invention.",
      exercice:
        "Salaire 1 800 €, 151,67 h, janvier 2026, CCN inconnue le matin. Que pouvez-vous déjà dire ? Que ne pouvez-vous pas dire ?",
      correction:
        "Déjà : 1 800 < 1 823,03 SMIC mensuel 35 h → non-conforme au plancher légal, bloquer, indépendamment de la CCN.\nVous ne pouvez pas dire « il est au-dessus du Syntec » ou « en dessous de la métallurgie » : aucun euro de branche n'est connu sans l'avenant. Après identification IDCC, vous comparerez aussi au minimum de branche recopié.",
    }),
    pack({
      title: "Primes, ancienneté et congés dans la CCN",
      description:
        "Repérer les éléments de rémunération et de temps de repos conventionnels, sans copier un nombre de jours.",
      minutes: 18,
      objectifs:
        "Vous savez où chercher 13e mois, ancienneté, panier, vacances, RTT et congés d'ancienneté, et vous refusez tout chiffre de jours ou d'euros non recopié du texte.",
      theorie:
        "Beaucoup de CCN ajoutent au Code : une prime d'ancienneté, une prime de vacances, un 13e mois, un panier, des jours pour événements familiaux, des congés d'ancienneté, un régime de RTT. Aucun de ces ajouts n'est universel. Syntec n'est pas « le » 13e mois français. Le commerce n'est pas « deux jours de plus ». La métallurgie n'est pas « forcément un panier ».\n\nMéthode unique : article, avenant, population (ouvriers / ETAM / cadres), formule (%, base, plafond), prorata, absences. Module 12 pour l'assujettissement : par défaut soumis. Module 9 (congés) pour le légal : 2,5 jours ouvrables par mois de travail effectif, L. 3141-3, max 30 ouvrables légaux. Tout ce qui s'ajoute se LIT. Cette leçon n'écrit pas « Syntec = X jours de CP » ni « commerce = Y ».\n\nÉvénements familiaux (mariage, décès, naissance) : le Code prévoit des autorisations pour certains événements ; la CCN est souvent plus favorable. Extraire le tableau, les jours, les conditions d'ancienneté, le maintien. Ne pas poser 3 jours « comme partout ».\n\nRTT : issus d'un accord (branche ou entreprise) sur la durée. Pas un droit légal automatique de 12 jours. Compter selon l'accord, le forfait, les absences.\n\nPériode : janvier 2026. Une prime d'ancienneté CCN entre dans le brut du mois, sous PMSS 4 005 € si le total le reste. Une HYPOTHÈSE interne 93 € n'est pas une grille de branche.",
      methode:
        "Pour chaque dossier, extraire un tableau : prime / article / assiette / euros ou % recopiés / CP extra recopiés / RTT source. Mise à jour à chaque avenant. Ne jamais remplir les euros depuis ce LMS.",
      exemple:
        "Trois dossiers cabinet le même jour : un 13e de branche, un 13e contractuel, un sans 13e. Théo paie trois schémas. Il n'aligne pas. Il n'écrit pas au client B « chez A on verse 1/12, on fait pareil ».",
      extra: [
        code(`ÉLÉMENTS CCN — tableau à extraire (cases € et jours = COPIE du texte)
Prime ancienneté     art.     base     %/€ recopié     prorata absences
Prime vacances       art.     ...
13e / 14e            art.     ...
Panier / salissure   art.     ...     (souvent soumis, pas un frais)
Événements familiaux art.     jours RECOPIÉS     maintien oui/non
CP au-delà L.3141-3  art.     jours RECOPIÉS     ouvrables/ouvrés ?
RTT                  accord   ...
Jours fériés CCN     art.     (1er mai légal ; les autres : LIRE)

Légal toujours : 2,5 j ouvrables / mois, plafond 30 (L. 3141-3)
SMIC 12,02 € — PMSS 4 005 € : pas des primes de branche.`),
      ],
      erreurs:
        "12 RTT universels. 13e universel. 2 jours d'ancienneté « Syntec » de mémoire. Traiter un panier comme un TR. Oublier que les jours CCN s'ajoutent au légal ou s'y substituent selon le texte (parfois un forfait global : LIRE).",
      particuliers:
        "Fractionnement, 5e semaine, congés d'ancienneté vs RTT. Temps partiel : prorata des jours extra, selon clause. Forfait jours : CP en jours ouvrés souvent, CCN à lire. Jours fériés chômés payés : Code (1er mai) + CCN.",
      exercice:
        "Le manager : « mets-lui 2 jours pour le mariage, c'est la CCN. » Quelle phrase répondez-vous et que copiez-vous dans le journal ?",
      correction:
        "« Je recopie le tableau des autorisations d'absence de l'IDCC du salarié, avenant en vigueur, nombre de jours, condition d'ancienneté et maintien. Je ne saisis pas 2 jours de mémoire. »\nJournal : « IDCC … art. … mariage : [N jours recopiés] — source Légifrance jj/mm/2026. Si N≠2, écart avec la demande manager, visa RH. » Zéro jour inventé par le cours.",
    }),
    pack({
      title: "Maintien, préavis et indemnités : loi et CCN",
      description:
        "Articuler planchers légaux et clauses de branche, sans inventer un mois de préavis ni un % de maintien.",
      minutes: 20,
      objectifs:
        "Vous savez que préavis, indemnité de licenciement et maintien maladie ont un plancher légal et souvent une CCN plus favorable, et vous extrairez les deux avant de calculer un solde.",
      theorie:
        "Trois thèmes où la CCN se compare au Code, jamais l'inverse « on oublie la loi ».\n\n1. Maintien maladie / AT : module 11. Plancher D. 1226-1 et s. CCN : article à extraire (carence, %, durée). Pas un % inventé, pas un « 90 % métallurgie » dans cette leçon.\n\n2. Préavis : L. 1234-1 (licenciement) pose des durées selon l'ancienneté, sauf usages ou CCN plus favorables. Démission : souvent CCN ou contrat. Un junior ouvre L. 1234-1 consolidé ET l'article CCN, prend le plus favorable au salarié lorsque la règle l'exige, et ne récite pas « 3 mois cadre » comme loi universelle. Le statut cadre n'est pas, à lui seul, un préavis légal de trois mois.\n\n3. Indemnité de licenciement : plancher légal (formule du Code, ancienneté, salaire de référence — à lire L. 1234-9 et articles réglementaires, module sorties). CCN : souvent une formule plus favorable, parfois des majorations. On calcule les deux, on verse la plus favorable si c'est la règle, on ne mélange pas une ancienneté CCN avec une formule légale au hasard. Cette leçon n'invente ni 1/4 de mois ni 1/5 : le module STC détaillera le légal avec le texte. Ici : méthode de comparaison.\n\nRupture conventionnelle : régime propre (L. 1237-11 s.), indemnité spécifique ≥ légale en principe. CCN parfois un plancher. Junior : pas de calcul sans consigne et barème vérifiés (CONTENT_SPEC).\n\nPériode : janvier 2026. Un préavis non travaillé se paie (indemnité compensatrice) : c'est du salaire soumis, PMSS du mois, pas une « indemnité exonérée » par magie. Les indemnités de rupture ont un régime social/fiscal propre (limites, BOSS) — module sorties, ne pas exonérer 10 000 € de mémoire.",
      methode:
        "Solde ou arrêt :\n1. Nature (maladie, démission, licenciement, RC).\n2. Légal : article + extraction.\n3. CCN : article + extraction.\n4. Contrat / usage si plus favorable.\n5. Tableau comparatif daté.\n6. N+1 vise avant saisie.\n7. DSN de fin, régime social de l'indemnité : BOSS, pas un forum.",
      exemple:
        "Sortie cadre, 4 ans d'ancienneté, IDCC à confirmer. Lina n'écrit pas « préavis 3 mois ». Elle ouvre L. 1234-1, l'article CCN cadres, le contrat (qui peut être plus long). Elle documente. L'indemnité : légal vs CCN, deux calculs, pas un seul souvenir.",
      extra: [
        code(`COMPARAISON — modèle (durées et % = COPIE, pas mémoire)
MAINTIEN MALADIE
  Légal D.1226-1 s. : ancienneté min / carence / taux / durée  [Légifrance]
  CCN art. .... : idem champs  [Légifrance]
  Retenu : le plus favorable applicable

PRÉAVIS LICENCIEMENT
  L.1234-1 : ....  (selon ancienneté)
  CCN art. .... : ....
  Contrat : ....
  Retenu : ....

INDEMNITÉ LICENCIEMENT
  Légal : formule du Code (module STC) — ne pas l'inventer ici
  CCN art. .... : formule recopiée
  Comparer, viser N+1
  Régime social/fiscal : BOSS, pas « tout exonéré »

INTERDIT : 3 mois cadres, 90 %, 1/5 par année — s'ils ne sont pas recopiés.`),
      ],
      erreurs:
        "3 mois cadres universels. Exonérer le préavis payé. Copier l'indemnité CCN d'un autre IDCC. Appliquer le maintien légal à un AT sans lire. Calculer une RC comme un licenciement.",
      particuliers:
        "Inaptitude, économique, faute grave (préavis et indemnité : régimes distincts, RH). Salarié protégé. Préavis en arrêt maladie : articulation, pas un CSS. Usage plus favorable : preuve, RH.",
      exercice:
        "On vous dit : « c'est un cadre, 3 mois, 90 %, indemnité CCN comme d'habitude. » Rédigez le refus argumenté en 6 lignes.",
      correction:
        "Le statut cadre ne fixe pas à lui seul un préavis légal de 3 mois : L. 1234-1 + CCN + contrat. 90 % n'est pas un maintien universel : CCN art. maladie + D. 1226-1. L'indemnité « comme d'habitude » n'est pas un barème : légal vs article CCN de CET IDCC. Je n'applique aucun des trois chiffres tant qu'ils ne sont pas recopiés des textes du dossier janvier 2026. Visa N+1. Pas de saisie « cadre = pack 3 mois / 90 % ».",
    }),
    pack({
      title: "Articulation loi, CCN, accord d'entreprise et contrat",
      description:
        "Savoir quel texte gagne, et quand un accord d'entreprise peut primer.",
      minutes: 18,
      objectifs:
        "Vous ordonnez les sources, vous savez que l'ordre public ne se négocie pas, et vous n'appliquez pas un accord d'entreprise contre un plancher auquel on ne peut pas déroger.",
      theorie:
        "La paie n'applique pas « le texte le plus récent » au hasard. Elle applique une hiérarchie et des règles de dérogation.\n\nOrdre public : SMIC, durée légale déclencheuse des HS (L. 3121-27 et 28), règles de santé-sécurité, certaines égalités, bulletin (R. 3243-1), DPAE, etc. On ne déroge pas en-dessous par CCN ni par contrat.\n\nCCN : complète, souvent plus favorable. Champ et extension.\n\nAccord d'entreprise : depuis les ordonnances, peut primer sur la CCN dans de nombreux thèmes (durée, primes, etc.), avec des blocs où la branche reste prioritaire. Un junior N'INVENTE PAS la liste des thèmes verrouillés. Il lit l'accord, note le thème, et demande si la dérogation est licite. En cas de doute : N+1 / juriste. Il n'applique pas un accord « on paie sous SMIC » : nul.\n\nContrat : peut être plus favorable au salarié. Un contrat sous le minimum CCN : on remonte au minimum (et au SMIC). Un contrat plus généreux (préavis plus long, prime) : on l'applique.\n\nUsage : pratique constante, générale, fixe. Qualification juridique : RH. Le junior signale, il ne crée pas un usage en payant trois fois une prime hors texte.\n\nPériode : janvier 2026. Un accord d'entreprise de RTT n'autorise pas à oublier le SMIC 12,02 € ni le PMSS 4 005 €. Un accord de maintien 100 % maladie s'applique s'il est valide, même si la CCN dit moins — plus favorable, sous réserve de licéité.",
      methode:
        "Devant un conflit de textes :\n1. Est-ce de l'ordre public (SMIC, HS légales, bulletin) ?\n2. Branche verrouillée ou accord d'entreprise licite ? → N+1 si doute.\n3. Plus favorable au salarié ?\n4. Écrit (accord, avenant) vs mail.\n5. Tracer la décision.\n6. Paramétrer une seule règle pour tous les salariés dans le même champ, égalité.",
      exemple:
        "Accord d'entreprise : prime annuelle 500 €. CCN : pas de 13e. On verse 500, soumis, janvier ou le mois prévu. Le gérant : « la CCN n'en parle pas, on peut ne pas payer. » Faux : l'accord d'entreprise lie. Inversement, « l'accord dit 11 € de l'heure » : sous SMIC 12,02, impossible.",
      extra: [
        code(`ARBRE (simplifié, doute = N+1)
1. Ordre public (SMIC 12,02 €, mentions bulletin, DPAE, HS légales…) : s'impose
2. Accord d'entreprise licite sur le thème : souvent applicable (vérifier bloc branche)
3. CCN étendue / applicable : minima, maintien, préavis… si l'accord ne prime pas
4. Contrat plus favorable : oui
5. Usage établi : RH
6. Mail manager : jamais une source

Janvier 2026 : SMIC et PMSS = paramètres légaux/annuels, pas négociables
en-dessous / à l'écart d'invention.`),
      ],
      erreurs:
        "L'entreprise « gagne toujours ». La CCN « gagne toujours ». L'accord de 2015 oublié. Déroger au SMIC. Traiter un mail comme un accord. Inégalité : l'accord pour les uns, pas pour les autres, sans motif.",
      particuliers:
        "CSE, référendum, DUE (décision unilatérale) : régimes de mise en place distincts, juriste. Transfert L. 1224-1 : CCN peut changer après un délai, RH. Détachement. Accords de performance collective : hors autonomie.",
      exercice:
        "Classez : (a) SMIC 12,02 € ; (b) minimum de branche recopié ; (c) prime d'accord d'entreprise 500 € ; (d) « on a toujours filé 100 € en juin » ; (e) mail « enlève la mutuelle ». Source et force ?",
      correction:
        "(a) Ordre public annuel, URSSAF, s'impose.\n(b) CCN, s'impose dans son champ (sous réserve accord d'entreprise licite sur le thème, et jamais < SMIC).\n(c) Accord d'entreprise, dû, soumis.\n(d) Possible usage, RH, ne pas supprimer seul.\n(e) Sans force ; mutuelle obligatoire hors dispense BOSS/SP. Refus.",
    }),
    pack({
      title: "Cas comparés : lire Syntec, métallurgie, commerce — la méthode, pas les grilles",
      description:
        "Comparer trois familles de CCN par la façon de les ouvrir, sans un seul euro de minimum ni un seul jour de congé inventé.",
      minutes: 24,
      objectifs:
        "Vous savez quoi chercher dans une CCN de bureaux d'études, dans la métallurgie et dans le commerce, vous confirmez l'IDCC sur le bulletin, et vous n'emportez aucune grille chiffrée hors de Légifrance.",
      theorie:
        "Trois familles fréquentes en cabinet et en interne. L'objectif n'est pas de devenir « expert Syntec ». C'est de ne pas les lire avec le même réflexe, parce que leur architecture diffère. Tous les montants et tous les jours ci-dessous sont INTERDITS s'ils ne viennent pas du texte ouvert le jour J. Cette leçon compare des MÉTHODES.\n\n1. Famille Syntec / bureaux d'études techniques, cabinets d'ingénieurs-conseils, sociétés de conseils. IDCC souvent rencontré : à CONFIRMER sur le bulletin du dossier (un numéro circulant n'est pas une preuve ; vous le recopiez depuis le bulletin et Légifrance). Architecture typique à chercher : positions et coefficients, minima par position, forfait jours (cadre et parfois ETAM selon clauses), éventuellement 13e ou primes selon avenants, maintien maladie, préavis par position. Ce que vous ne faites pas : réciter un coefficient 150 = tant d'euros, réciter des RTT. Vous ouvrez l'avenant salaires janvier 2026 (ou celui en vigueur à cette date), la clause forfait, la clause maintien.\n\n2. Famille métallurgie. Branche refondue : une CCN unique s'est substituée à d'anciens textes territoriaux (IDCC de la nouvelle convention : à confirmer sur le bulletin ; un ancien IDCC territorial peut encore figurer par erreur de paramétrage — alerte). Architecture typique : groupes d'emplois, cotations, minima par groupe, distinction cadres, régimes de durée, maintien, préavis. Ce que vous ne faites pas : recycler une grille « métallurgie 2020 » territoriale. Vous identifiez si le dossier est bien passé à la nouvelle convention, vous ouvrez la classification nouvelle, l'avenant minima du 01/01/2026.\n\n3. Famille commerce. Plusieurs IDCC (détail alimentaire, non alimentaire, gros, etc.). L'erreur classique : appliquer « le commerce » comme s'il n'y en avait qu'un. Architecture typique : échelons, minima, prime d'ancienneté fréquente en branche (FRÉQUENTE n'est pas « toujours » : extraire), dimanches, jours fériés, temps partiel. Ce que vous ne faites pas : une prime d'ancienneté 3 % copiée d'un autre commerce. Vous confirmez l'IDCC alimentaire vs non alimentaire, vous ouvrez LA grille.\n\nCommun aux trois : SMIC 12,02 € plancher ; PMSS 4 005 € plafond de cotisations ; mutuelle ANI 20/40 si hypothèse catalogue ; maintien = lecture, pas un % ; CP légaux L. 3141-3, extras = texte ; IDCC sur le bulletin R. 3243-1.\n\nPériode : janvier 2026, trois dossiers fictifs, trois Légifrance, zéro grille mémorisée.",
      methode:
        "Atelier : trois onglets Légifrance, trois fiches d'extraction (leçon 2). Même salarié pédagogique 3 100 €, 4 ans d'ancienneté, arrêt 12–31 janvier, puis sortie. Pour CHAQUE famille : IDCC bulletin, classification, minimum recopié (pas écrit ici), 13e oui/non recopié, CP extra recopié, maintien recopié, préavis recopié. Comparer les MÉTHODES, pas les résultats chiffrés du cours — il n'y en a pas.",
      exemple:
        "Théo a un client Syntec, un métallurgie, un commerce alimentaire le même 24 janvier. Il ne copie pas le maintien du premier sur le troisième. Il a trois fiches. Marc lui demande le minimum du commercial : Théo lit l'avenant, il ne dit pas « comme l'autre commerce l'an dernier ».",
      extra: [
        code(`ATELIER COMPARÉ — janvier 2026 (cases chiffrées = Légifrance, pas le LMS)
                    SYNTEC / bureaux     MÉTALLURGIE           COMMERCE
IDCC bulletin       [confirmer]          [confirmer, pas     [QUEL commerce ?
                                          l'ancien territorial] alimentaire / gros…]
Où est la grille    positions /          groupes d'emplois /  échelons / emplois
                    coefficients         nouvelle CCN
Avenant minima 2026 recopier €           recopier €           recopier €
Forfait jours       clause à lire        clause à lire        plus rare : lire
13e / ancienneté    extraire             extraire             extraire (souvent
                                                               ancienneté : LIRE)
Maintien maladie    art. ≠ D.1226-1      art. ≠               art. ≠
CP au-delà légal    jours recopiés       jours recopiés       jours recopiés
Préavis             art. + L.1234-1      art. + L.1234-1      art. + L.1234-1
Piège junior        coefficient mémoire  ancienne CCN locale  mauvais IDCC commerce

SMIC 12,02 € et 1 823,03 € : commun, URSSAF, pas une CCN.
Aucun € et aucun jour de cette table n'est fourni par le cours.`),
      ],
      erreurs:
        "Un IDCC Syntec mémorisé appliqué à un éditeur logiciel sans vérifier. Métallurgie 2018. « Tous les commerces ont une prime d'ancienneté de … € ». Forfait jours sans clause. Inventer 2 jours de CP d'ancienneté pour l'atelier.",
      particuliers:
        "Syntec et forfait jours : suivi des jours, jours de repos, plafond — accord + CCN, module temps de travail. Métallurgie : cotation des emplois, RH. Commerce dimanche : majorations LIRE, pas 100 % universel. Franchise : CCN du franchiseur pas automatique.",
      exercice:
        "(1) Citez 4 champs identiques à extraire dans les trois familles. (2) Citez 3 pièges différents (un par famille). (3) Un collègue vous donne un tableau Excel « minima Syntec 2026 ». Que faites-vous avant de l'utiliser en paie ?",
      correction:
        "1. IDCC confirmé ; avenant minima en vigueur ; article maintien ; préavis vs L. 1234-1. (Classification, CP extra, 13e : aussi.)\n2. Syntec : coefficient/€ de mémoire, forfait jours. Métallurgie : ancien IDCC territorial, grille pré-refonte. Commerce : mauvais IDCC (alimentaire vs autre), prime d'ancienneté copiée.\n3. L'Excel n'est pas une source. Recouper chaque ligne avec Légifrance avenant 2026. Écart = jeter l'Excel. Aucun minimum de ce cours ne valide l'Excel. SMIC 12,02 € reste le plancher indépendant du tableau.",
    }),
    quizLesson({
      title: "Quiz — Conventions collectives",
      description:
        "Vérifier IDCC, Légifrance, interdiction des grilles inventées, articulation des textes.",
      passing_score: 70,
      questions: [
        q({
          question: "L'IDCC se trouve en premier lieu :",
          options: [
            "A. Dans un souvenir de formation « Syntec = un numéro »",
            "B. Sur le bulletin (mention CCN, R. 3243-1) et se recoupe sur Légifrance",
            "C. Dans rates-2026.json",
            "D. Sur le code NAF exclusivement",
          ],
          correct: 1,
          explanation:
            "Le bulletin mentionne la CCN. Légifrance confirme. Le NAF est un indice. rates-2026.json n'a pas les IDCC. Un numéro mémorisé n'est pas une preuve.",
        }),
        q({
          question: "Un minimum de branche inférieur au SMIC janvier 2026 :",
          options: [
            "A. S'applique, la CCN prime toujours",
            "B. Ne s'applique pas en dessous du SMIC (12,02 €/h ; 1 823,03 € / 151,67 h au 01/01/2026)",
            "C. S'applique aux cadres seulement",
            "D. Est égal au PMSS 4 005 €",
          ],
          correct: 1,
          explanation:
            "Le SMIC est un ordre public. La CCN ne descend pas dessous. Le PMSS n'est pas un minimum de salaire.",
        }),
        q({
          question: "Cette formation vous donne-t-elle le minimum Syntec 2026 en euros ?",
          options: [
            "A. Oui, à mémoriser",
            "B. Non : aucun euro de minimum de branche n'est inventé ; vous le recopieez sur Légifrance",
            "C. Oui, 3 100 €",
            "D. Oui, le SMIC",
          ],
          correct: 1,
          explanation:
            "Interdiction pédagogique. 3 100 € est un brut d'exercice, pas un minimum Syntec. Le SMIC n'est pas la grille Syntec.",
        }),
        q({
          question: "Préavis « 3 mois parce que cadre » :",
          options: [
            "A. Est la loi unique L. 1234-1 pour tous les cadres",
            "B. Se vérifie dans L. 1234-1, la CCN et le contrat ; le statut cadre ne suffit pas à lui seul",
            "C. Est interdit",
            "D. Remplace l'indemnité de licenciement",
          ],
          correct: 1,
          explanation:
            "Pas de préavis légal unique « 3 mois cadres ». Comparer les textes. Ce n'est pas l'indemnité.",
        }),
        q({
          question: "Dans le commerce, le premier réflexe est :",
          options: [
            "A. Appliquer une unique CCN « commerce »",
            "B. Identifier QUEL IDCC (détail alimentaire, gros, etc.) puis extraire SA grille",
            "C. Copier la prime d'ancienneté Syntec",
            "D. Ignorer la CCN, le SMIC suffit toujours comme salaire de marché",
          ],
          correct: 1,
          explanation:
            "Plusieurs IDCC commerce. Pas de copie inter-familles. Le SMIC est un plancher, pas le salaire de branche.",
        }),
        q({
          question: "Métallurgie : le piège de paramétrage le plus cité dans le module est :",
          options: [
            "A. Le PMSS 2025",
            "B. Conserver un ancien IDCC territorial / une grille pré-refonte au lieu de la CCN et de l'avenant en vigueur",
            "C. L'APEC",
            "D. Les titres-restaurant",
          ],
          correct: 1,
          explanation:
            "Branche refondue : vérifier l'IDCC actuel sur le bulletin et Légifrance. APEC et TR sont d'autres modules.",
        }),
        q({
          question: "Un accord d'entreprise prévoit 11 € de l'heure en janvier 2026 :",
          options: [
            "A. Il s'applique, l'accord prime",
            "B. Impossible sous le SMIC 12,02 € ; l'ordre public l'emporte",
            "C. Il s'applique aux non-cadres seulement",
            "D. Il s'applique si la CCN est Syntec",
          ],
          correct: 1,
          explanation:
            "On ne déroge pas au SMIC. Ni CCN ni accord ni statut.",
        }),
        q({
          question: "Les jours de congés supplémentaires d'une CCN :",
          options: [
            "A. Sont 2 jours pour Syntec, enseigné ici",
            "B. Se recopient dans l'article CCN ; le légal reste 2,5 jours ouvrables / mois (L. 3141-3)",
            "C. Remplacent toujours le légal par 20 jours",
            "D. N'existent jamais",
          ],
          correct: 1,
          explanation:
            "Pas de jours inventés. Légal 2,5 / 30 ouvrables. La CCN peut ajouter : extraire.",
        }),
        q({
          question: "Maintien maladie « comme la CCN métallurgie, 90 % » sans ouvrir le texte :",
          options: [
            "A. Correct, c'est connu",
            "B. Interdit : le % se LIT dans l'article de l'IDCC du salarié, comparé à D. 1226-1",
            "C. Correct si le salarié gagne 3 100 €",
            "D. Correct en cabinet seulement",
          ],
          correct: 1,
          explanation:
            "Même consigne que le module 11. 90 % mémoire = faute. 3 100 € et le cabinet ne créent pas le taux.",
        }),
        q({
          question: "Légifrance sert à :",
          options: [
            "A. Télécharger un taux URSSAF de mutuelle 20/40",
            "B. Ouvrir le texte consolidé de la CCN par IDCC et les avenants (minima, maintien, préavis)",
            "C. Remplacer la DSN",
            "D. Calculer le PAS",
          ],
          correct: 1,
          explanation:
            "Source officielle des CCN. 20/40 est une hypothèse mutuelle, pas Légifrance. DSN et PAS : autres canaux.",
        }),
      ],
    }),
  ],
};
