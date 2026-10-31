import { pack, quizLesson, q, code, note } from "../lib.mjs";

export default {
  position: 4,
  title: "Calculer le salaire brut",
  description:
    "Construire le brut du mois : mensualisation, horaire, temps partiel, prorata, HS, heures complémentaires, primes, AEN, retenues et régularisations.",
  lessons: [
    pack({
      title: "La mensualisation",
      description: "Comprendre le salaire mensuel indépendant du nombre de jours du mois, et le lien 35 h / 151,67 h / SMIC.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous savez ce qu'est un salaire mensualisé, vous reliez 35 heures à 151,67 heures, et vous utilisez le SMIC mensuel 1 823,03 € plutôt qu'une multiplication naïve.",
      theorie:
        "La mensualisation consiste à verser un salaire mensuel stable pour un horaire habituel, indépendamment du nombre de jours calendaires du mois (28, 29, 30 ou 31). Un temps plein 35 h mensualisé à 2 500 € perçoit 2 500 € de salaire de base en janvier comme en février, s'il n'y a ni absence ni entrée/sortie ni variable. Ce n'est pas « 2 500 € pour 31 jours » ni « un 31e jour offert ». C'est un lissage du salaire annuel (souvent pensé 12 mois) sur les mois civils.\n\nLa référence d'heures mensuelle usuelle pour 35 h est 151,67 h : 35 × 52 semaines / 12 mois = 151,666… arrondi à 151,67. Cette référence sert à trouver un taux horaire (mensuel / 151,67) pour majorer des HS, proratiser certaines rubriques, contrôler un SMIC. Elle n'est pas le déclencheur hebdomadaire des HS : celui-ci reste la semaine (L. 3121-27 / L. 3121-28).\n\nSMIC janvier 2026 (01/01–31/05, URSSAF / Service-Public) : 12,02 € de l'heure et 1 823,03 € par mois pour 151,67 h. Attention : 12,02 × 151,67 = 1 823,0734… soit 1 823,07 € à l'arrondi commercial. Ce n'est pas le montant officiel. On retient 1 823,03 € comme brut de base SMIC temps plein. On ne reconstruit pas le mensuel par multiplication quand le barème mensuel existe. Au 01/06/2026, le SMIC horaire passe à 12,31 € (1 867,02 €/mois) : hors exercices janvier, à revérifier pour un dossier de juin.\n\nConséquence paie : le paramétrage « salaire de base mensuel » n'est pas recalculé chaque mois selon le calendrier. Les absences, les entrées/sorties, les HS s'ajoutent ou se retranchent autour de cette base. Un junior qui « divise par 31 en janvier et par 28 en février » pour un mois complet mensualisé sans événement casse le contrat.",
      methode:
        "1. Lire le contrat : mensuel ou horaire ? durée 35 h ?\n2. Si mensualisé temps plein : saisir le salaire de base mensuel, pas un taux × jours du mois.\n3. Taux horaire de travail (pour HS) = mensuel / 151,67, arrondi au centime selon règle du dossier.\n4. Contrôle SMIC : horaire ≥ 12,02 € et, pour un 151,67 h, base ≥ 1 823,03 € hors cas légaux.\n5. Ne pas déclencher des HS parce que 31 × 7 h > 151,67.\n6. Documenter la référence 151,67 comme convention de mensualisation, pas comme durée légale hebdomadaire.",
      extra: [
        code(`MENSUALISATION — janvier 2026 (métropole)
Durée légale          35 h / semaine          (L. 3121-27)
Référence mensuelle   35 × 52 / 12 = 151,666… → 151,67 h
SMIC horaire          12,02 €                 (01/01/2026–31/05/2026)
SMIC mensuel officiel 1 823,03 €              (ne pas remplacer par 12,02 × 151,67 = 1 823,07)

Taux horaire d'un mensuel 2 500,00 € :
  2 500,00 / 151,67 = 16,48315… → 16,48 € (arrondi au centime, règle dossier)

Mois complet sans événement :
  janvier (31 j) base = 2 500,00 €
  février (28 j) base = 2 500,00 €
  Ce n'est pas 2 500 × 28/31 en février.`),
      ],
      exemple:
        "PME, CCN à lire sans clause inventée. Un salarié dit : « Février est plus court, vous m'avez volé trois jours. » Le bulletin montre 2 100 € de base, comme en janvier. Lina explique la mensualisation : le salaire de base ne suit pas le calendrier. Les 28 jours de février ne justifient pas une retenue. Inversement, janvier ne « paie pas 31/28 de plus ».",
      erreurs:
        "Recalculer le mensuel selon 28/30/31. Utiliser 169 h (souvenir de 39 h). Prendre 1 823,07 € comme SMIC mensuel. Déclencher des HS au mois sur 151,67 h. Confondre 151,67 h avec la durée légale de L. 3121-27.",
      particuliers:
        "Forfait heures ou jours : autre mensualisation, le 151,67 n'est pas le temps réel. 13e mois : 12,5e, 12e : textes. Temps partiel mensualisé : base = mensuel contractuel, pas 151,67 h. Modulation annuelle : le lissage suit l'accord, pas le réflexe 151,67.",
      exercice:
        "(1) Calculez 35 × 52 / 12. (2) Un salarial mensualisé 1 823,03 €, mois de février 2026 complet, sans absence : quel salaire de base ? (3) Pourquoi refuse-t-on 12,02 × 151,67 comme SMIC mensuel officiel ?",
      correction:
        "1. 1 820 / 12 = 151,666… → 151,67 h.\n2. 1 823,03 € : mensualisation, février n'est pas proratisé.\n3. La multiplication donne 1 823,07 € ; le barème URSSAF / Service-Public retient 1 823,03 €. On utilise le montant officiel, pas la reconstruction.",
    }),
    pack({
      title: "Le salaire horaire",
      description: "Payer à l'heure réelle, contrôler le SMIC 12,02 €, et ne pas mensualiser un horaire par habitude.",
      minutes: 18,
      objectifs:
        "Vous distinguez contrat horaire et contrat mensualisé, vous calculez un brut d'heures, et vous refusez un taux inférieur à 12,02 € hors cas légaux.",
      theorie:
        "Certains contrats paient les heures réellement accomplies : taux horaire × heures du mois. Le brut varie avec le calendrier, les absences, les HS. Ce n'est pas la mensualisation. Extra, saisonnier, intermittent, certains temps partiels, certaines entreprises de services : le contrat le dit. Un junior ne « mensualise pour faire propre » un horaire qui n'est pas mensualisé, ni l'inverse.\n\nTaux minimal : 12,02 € / h au 01/01/2026 métropole (jusqu'au 31/05/2026). Un taux 11,80 € sur un adulte hors cas d'apprenti / jeune est bloquant. Les majorations HS s'appliquent sur le taux du salarié (ou selon méthode du dossier), pas sur un SMIC s'il est payé 16,00 €. Les heures complémentaires d'un temps partiel horaire suivent L. 3123-9, pas L. 3121-28.\n\nConséquence paie : le brut horaire exige un décompte fiable (badgeage, planning validé). Sans heures validées, on n'invente pas 151,67 h « comme les mensualisés ». Inversement, on n'applique pas un prorata calendaire 10/31 à un horaire : on paie les heures faites (et les heures dues selon le contrat).\n\nLe bulletin affiche le taux, les heures, les majorations. R. 3243-1 attend un décompte du travail. Un horaire illisible (« forfait 2 000 € » alors que le contrat est à 12,50 € × heures) est un risque.",
      methode:
        "1. Contrat : taux, durée habituelle, mensualisé oui/non.\n2. Heures de la période : source validée (manager, badge).\n3. Brut de base = taux × heures normales.\n4. + HS/HC majorées.\n5. Contrôle SMIC 12,02 € (01/2026).\n6. Si les heures manquent au gel : relance, pas d'invention.\n7. Ne pas convertir silencieusement en 151,67 h.",
      extra: [
        code(`HORAIRE — janvier 2026
Taux contractuel 13,50 €  |  heures normales validées 140,00 h  |  pas de HS
Brut de base = 13,50 × 140,00 = 1 890,00 €

Contrôle SMIC : 13,50 ≥ 12,02  OK
Si 140 h à 12,02 € : 1 682,80 €  — inférieur au SMIC mensuel 1 823,03 €
parce que ce n'est pas un temps plein 151,67 h. Le contrôle est d'abord horaire.

Cas bloquant :
Taux 11,80 € × 151,67 h affiché par le moteur d'essai → STOP
11,80 < 12,02 (URSSAF 01/01/2026). Alerte responsable, pas d'arrondi « ça passe ».`),
      ],
      exemple:
        "Entreprise de nettoyage, contrats horaires. Un manager envoie « 151,67 h pour tout le monde, comme d'habitude ». Deux salariées ont 96 h badgeées. Lina saisit 96 h × taux, pas 151,67. Mensualiser par mail du manager créerait un trop-perçu et une DSN fausse.",
      erreurs:
        "Mensualiser un horaire. Payer sous 12,02 €. Utiliser les heures du planning prévisionnel non validé. Appliquer 151,67 h à un temps partiel horaire. Oublier les majorations sur le vrai taux.",
      particuliers:
        "Heures de nuit, dimanche : majorations CCN à lire, jamais un 100 % inventé. Temps d'habillage, d'amplitude : qualification travail effectif, sous revue. Forfait anti-horaire déguisé : alerte RH, la paie ne requalifie pas seule.",
      exercice:
        "Janvier 2026. Taux 12,02 €, 120,00 h validées, pas de HS. (1) Brut ? (2) Est-ce un SMIC temps plein ? (3) Que faire si le badgeage affiche 120 h et le manager 151,67 h ?",
      correction:
        "1. 12,02 × 120,00 = 1 442,40 €.\n2. Non : le SMIC mensuel 1 823,03 € correspond à 151,67 h. Ici le contrôle est 12,02 €/h respecté.\n3. Ne pas saisir 151,67 sans pièces. Relancer, copier le responsable, gel. L'écart 31,67 h n'est pas « l'habitude ».",
    }),
    pack({
      title: "Le temps partiel : construire le brut",
      description: "Proratiser la durée contractuelle, mensualiser un temps partiel, et ne pas lui coller 151,67 h.",
      minutes: 20,
      objectifs:
        "Vous calculez un salaire de base temps partiel à partir du temps plein ou du taux horaire, et vous préparez le terrain des heures complémentaires.",
      theorie:
        "Le temps partiel a une durée écrite inférieure à la durée légale (ou conventionnelle) à temps complet. Le brut de base se calcule sur cette durée, pas sur 151,67 h. Deux présentations fréquentes : (a) salaire mensuel déjà fixé au contrat (exemple 1 200 € pour 20 h / semaine) ; (b) prorata d'un équivalent temps plein (ETP) : 2 100 € × 24/35. Dans les deux cas, on lit le contrat. On n'applique pas un pourcentage oral « 80 % » sans heures.\n\nMensualisation du temps partiel : le mensuel contractuel est stable sur un mois complet, comme au temps plein. Un 24 h / semaine mensualisé ne perd pas de salaire parce que février a 28 jours. Horaire partiel : on paie les heures faites.\n\nRéférence d'heures mensuelle d'un 24 h / semaine : 24 × 52 / 12 = 104 h. Taux horaire = mensuel / 104 si l'on a un mensuel. Contrôle SMIC : le taux horaire équivalent ≥ 12,02 €. Un « 80 % du SMIC mensuel » qui masquerait un horaire réel de 50 % est un contrôle à faire (durée réelle vs % affiché).\n\nConséquence paie : les heures au-delà de la durée contractuelle sont complémentaires (L. 3123-9), pas supplémentaires, tant que l'on reste dans le régime du temps partiel. Leur majoration n'est pas celle de L. 3121-36. Un brut temps partiel faux (calculé sur 151,67 h) fausse tout le bulletin et peut créer un trop-perçu structurel.",
      methode:
        "1. Durée contractuelle hebdo / mensuelle / répartition.\n2. Mensuel écrit ou à proratiser d'un ETP ? Formule du contrat.\n3. Référence d'heures = durée hebdo × 52 / 12.\n4. Contrôle 12,02 € / h.\n5. Variables : HC, pas HS (sauf dépassement qui rapproche du temps plein → alerte RH).\n6. Avenant manquant : on ne saisit pas un nouveau %.",
      extra: [
        code(`TEMPS PARTIEL — janvier 2026
(A) Contrat : 24 h / sem., mensuel 1 440,00 €
    Référence h = 24 × 52 / 12 = 104,00 h
    Taux = 1 440,00 / 104,00 = 13,846… → 13,85 €  ≥ 12,02 OK
    Mois complet : brut de base 1 440,00 € (mensualisé)

(B) ETP 2 100,00 € pour 35 h ; avenant 20 h / sem.
    Base = 2 100,00 × 20 / 35 = 1 200,00 €
    Référence h = 20 × 52 / 12 = 86,666… → 86,67 h
    Taux = 1 200,00 / 86,67 ≈ 13,85 €

(C) SMIC, 80,00 h dans le mois, contrat horaire
    Brut = 12,02 × 80,00 = 961,60 €
    Ce n'est pas 80 % de 1 823,03 € (qui ferait 1 458,42 €) :
    80 h ne sont pas 80 % de 151,67 h (80 / 151,67 ≈ 52,7 %).`),
      ],
      exemple:
        "ETI. Un RH écrit « passe Karim à 80 % ». Sans avenant ni heures. Lina conserve le 35 h / 2 100 € et ouvre un ticket : 80 % de quoi ? 28 h ? 4 jours ? Le brut ne se devine pas. Un 80 % mal saisi pendant six mois est six trop-perçus ou trop-peu.",
      erreurs:
        "Appliquer 151,67 h. Traiter 80 % comme 80 h. Saisir des HS au lieu d'HC. Proratiser février. Oublier le SMIC horaire parce que le mensuel « a l'air bas » alors que la durée est courte — ou l'inverse.",
      particuliers:
        "Temps partiel thérapeutique : régime maladie + temps, sous revue. Annualisation du temps partiel : accord. Complément d'heures (avenant temporaire) ≠ heures complémentaires : le premier modifie le contrat pour une période. Multi-employeurs : deux bruts, plafonds à coordonner.",
      exercice:
        "ETP 1 823,03 € (SMIC), avenant 17,50 h / semaine (mi-temps 35 h). Mois complet janvier 2026, aucune HC. Calculez la base mensualisée. Contrôlez le taux vs 12,02 €.",
      correction:
        "Base = 1 823,03 × 17,50 / 35,00 = 911,515 → 911,52 € (arrondi au centime).\nRéférence h = 17,50 × 52 / 12 = 75,833… → 75,83 h.\nTaux = 911,52 / 75,83 ≈ 12,02 €. Contrôle SMIC horaire tenu. On ne saisit pas 1 823,03 €. On ne saisit pas 75,83 × 12,02 si le contrat est mensualisé : on saisit 911,52 €.",
    }),
    pack({
      title: "Entrée et sortie en cours de mois",
      description: "Proratiser un mensuel sur les jours de présence, avec la méthode calendaire du moteur et ses limites.",
      minutes: 22,
      objectifs:
        "Vous calculez un prorata d'entrée/sortie par jours calendaires comme le moteur pédagogique, et vous savez que d'autres méthodes existent.",
      theorie:
        "Un salarié mensualisé qui n'est pas présent tout le mois (embauche le 10, départ le 20) n'a pas droit au salaire de base plein, sauf stipulation particulière. Il faut un prorata. Le moteur pédagogique de ce parcours utilise la méthode des jours calendaires : brut = mensuel × jours de présence calendaire / jours du mois civil. Exemple verrouillé : 3 100,00 × 10 / 31 = 1 000,00 € (prorataCalendar). C'est la méthode des exercices chiffrés d'entrée/sortie.\n\nIl n'existe pas une unique méthode légale universelle pour tous les prorata (entrées, sorties, et surtout absences). D'autres méthodes sont rencontrées : jours ouvrés (souvent lundi–vendredi du mois), jours ouvrables (souvent lundi–samedi), heures, trentième. La CCN, l'accord, le contrat, le paramétrage validé décident. Un junior n'impose pas le calendaire « parce que le simulateur LOU le fait », ni les ouvrés « parce que c'est plus juste ». Il applique la méthode du dossier, documentée. Le simulateur pédagogique n'est pas un clone commercial.\n\nConséquence : deux entreprises peuvent payer différemment un même embauché du 22 au 31 janvier (10 jours calendaires / 31, ou 7 ouvrés / 22, etc.). Le contrôle, c'est la cohérence avec le paramètre du dossier, pas l'alignement sur un forum. Pour les exercices de ce module, on applique le calendaire et on le dit.\n\nEntrée le 13, mois de 31 jours, mensuel 2 100 € : présence du 13 au 31 = 19 jours. 2 100 × 19 / 31 = 1 287,096… → 1 287,10 €. Sortie le 10 : 10 / 31 du mensuel. DPAE (L. 1221-10) déjà faite ; premier ou dernier bulletin ; DSN de fin le cas échéant.",
      methode:
        "1. Dates d'entrée / dernier jour (contrat, solde).\n2. Méthode du dossier (calendaire pédagogique par défaut ici).\n3. Jours de présence / jours du mois.\n4. Base = mensuel × (j présence / j mois), euro() au centime.\n5. Ajouter HS, primes de la période, AEN prorata selon contrat.\n6. Contrôler que l'on ne paie pas le mois plein « pour dépanner ».\n7. Horaire : préférer les heures réellement dues / faites, pas un 10/31 automatique.",
      extra: [
        code(`PRORATA CALENDAIRE — moteur pédagogique (prorataCalendar)
Formule : euro(mensuel × joursPrésence / joursDuMois)

3 100,00 × 10 / 31 = 1 000,00 €     ← exemple verrouillé
1 823,03 × 15 / 31 = 882,11 €
2 500,00 × 20 / 28 = 1 785,71 €     (février, 20 j calendaires)
3 100,00 × 3 / 31  = 300,00 €       (utile aussi comme illustration d'une retenue
                                      calendaire — voir leçon absences :
                                      CE N'EST PAS LA MÉTHODE UNIQUE LÉGALE)

Entrée le 13 janvier 2026, mensuel 2 100,00 €, sortie non :
jours = 31 − 12 = 19 (du 13 au 31 inclus)
2 100,00 × 19 / 31 = 1 287,096… → 1 287,10 €

Autres méthodes existantes (à lire dans le dossier, pas à inventer) :
ouvrés | ouvrables | heures | trentième | mixte CCN`),
      ],
      exemple:
        "Cabinet. Client A paramétré calendaire, client B en ouvrés. Un collaborateur applique 10/31 aux deux dossiers pour une entrée le 22 janvier. Client B réclame : son usage interne (visé) est en ouvrés. Deux méthodes, deux bruts, deux dossiers. Le junior note la méthode sur la fiche dossier, il ne « standardise » pas.",
      erreurs:
        "Payer le mois plein. Oublier le jour d'entrée (compter à partir du lendemain). Utiliser 30 jours fixes en janvier. Appliquer le calendaire à un horaire badgeé. Prétendre que le calendaire est « la » méthode légale pour toutes les absences.",
      particuliers:
        "Entrée et sortie le même mois (CDD du 13 au 31). Reprise après suspension. Mutation d'établissement au 15 : deux SIRET, deux prorata, éventuellement deux taux AT. Forfait jours : prorata en jours de forfait selon accord, pas 151,67 h.",
      exercice:
        "Mensuel 3 100,00 €, janvier 2026 (31 j). Présence du 1er au 10 inclus, sortie le 10 au soir. Calculez la base selon le moteur. Citez deux autres méthodes possibles sans les chiffrer si le dossier ne les fixe pas.",
      correction:
        "Calendaire : 3 100,00 × 10 / 31 = 1 000,00 € (prorataCalendar, exemple verrouillé).\nAutres méthodes existantes : ouvrés, ouvrables (et éventuellement heures). On ne les chiffre pas ici faute de calendrier d'ouvrés du dossier : on ne les invente pas. On documente « calendaire pédagogique » sur l'exercice.",
    }),
    pack({
      title: "Prorata : calendaire, ouvrés, ouvrables — choisir sans dogmatisme",
      description: "Comparer les logiques de prorata et refuser l'idée d'une seule méthode légale pour toutes les absences.",
      minutes: 20,
      objectifs:
        "Vous expliquez trois familles de prorata, vous appliquez le calendaire du moteur aux exercices, et vous escaladez dès que le dossier parle d'ouvrés ou d'ouvrables.",
      theorie:
        "Le mot « prorata » recouvre plusieurs dénominateurs. Calendaire : tous les jours du mois, y compris samedis, dimanches, fériés (31, 30, 28/29). Ouvrés : jours habituellement travaillés dans l'entreprise, souvent 5 par semaine, le nombre variant selon le mois (20, 21, 22…). Ouvrables : souvent 6 jours (lundi–samedi), logique proche des CP légaux en jours ouvrables (L. 3141-3). Heures : retenue ou paiement au réel des heures. Trentième : /30 quel que soit le mois, parfois rencontré, jamais érigé ici en règle nationale.\n\nPourquoi ce n'est pas interchangeable. 3 jours d'absence en janvier : calendaire 3/31 d'un mensuel 3 100 € = 300,00 €. En ouvrés, 3/21 ou 3/22 selon le mois, montant différent. Pour une entrée, 10/31 = 1 000,00 € sur 3 100 € ; 8 ouvrés / 22 ouvrés donnerait un autre brut. Appliquer la mauvaise famille, c'est un trop-perçu ou un trop-peu, parfois un contentieux.\n\nLe droit positif n'offre pas une formule unique pour toutes les absences (maladie, CP, absence injustifiée, mise à pied, grève, congé sans solde). Chaque motif a des textes, parfois une jurisprudence, parfois une CCN. Ce parcours : (1) calendaire pour les exemples chiffrés d'entrée/sortie du moteur ; (2) interdiction de présenter cette méthode comme unique et légale pour tout ; (3) junior = lire le paramétrage et le texte du motif, sinon escalader.\n\nConséquence paie : le logiciel a souvent un « type d'absence » lié à une règle de décompte. Choisir la mauvaise rubrique (CP vs absence injustifiée vs maladie) est plus grave qu'un débat 21 vs 22 ouvrés. On qualifie d'abord, on calcule ensuite.",
      methode:
        "Arbre de décision :\n1. Quel événement (entrée, sortie, CP, maladie, injustifiée, autre) ?\n2. Quelle règle écrite (contrat, CCN, accord, paramétrage visé) ?\n3. Si exercice de ce module entrée/sortie : calendaire, formule euro(M × j / J).\n4. Si absence : ne pas recopier 3/31 par réflexe ; identifier la rubrique.\n5. Si doute entre ouvrés et ouvrables : ticket responsable, extraits joints.\n6. Tracer la méthode sur le journal d'incidents dès qu'on sort du standard du dossier.",
      extra: [
        code(`MÊME FAIT, TROIS FAMILLES — illustration (mensuel 3 100,00 €, janvier)
Présence 10 jours calendaires (entrée le 22, mois 31 j)

Calendaire (moteur) : 3 100 × 10 / 31 = 1 000,00 €

Ouvrés (exemple de calendrier, HYPOTHÈSE de dénombrement, pas une norme) :
  si 8 ouvrés de présence / 22 ouvrés du mois
  3 100 × 8 / 22 = 1 127,27 €   ← résultat différent
  (on n'applique cette ligne que si le dossier compte vraiment 8 et 22)

Ouvrables (même réserve) :
  dénombrement lundi–samedi selon calendrier du mois — autre quotient.

Conclusion opérationnelle :
le chiffre 1 000,00 € est la référence pédagogique calendaire.
Il n'invalide pas un dossier paramétré en ouvrés.
Il n'est pas « plus légal » pour une absence maladie ou un CP.`),
      ],
      exemple:
        "Industrie. Mise à pied disciplinaire de 3 jours. Un junior retient 3/31 calendaires. Le responsable rappelle : le paramétrage interne (visé) est en heures de l'horaire collectif. On corrige avant clôture. Le junior n'argumente pas « le module 04 dit 3/31 » : le module 04 dit l'inverse — pas de méthode unique.",
      erreurs:
        "Dogme calendaire. Dogme ouvrés. Mélanger numérateur calendaire et dénominateur ouvrés (3/21 avec 3 jours dimanche inclus). Appliquer L. 3141-3 (CP en ouvrables) à une absence injustifiée. Changer de méthode d'un mois sur l'autre pour « arranger » un net.",
      particuliers:
        "Forfait jours (prorata en jours de forfait). Modulation. Temps partiel annualisé. Reprise à mi-mois après congé parental. Jours fériés dans la période d'entrée : le calendaire les inclut dans le dénominateur ; une méthode ouvrée les traite autrement. Toujours lire.",
      exercice:
        "On vous demande « la » méthode légale de retenue pour 3 jours d'absence. Répondez en quatre phrases, puis calculez uniquement le prorata d'entrée 3 100 € × 10 / 31.",
      correction:
        "Il n'existe pas une unique méthode légale pour toutes les absences. Il faut qualifier le motif (CP, maladie, injustifiée…), lire CCN / contrat / paramétrage. Le moteur pédagogique utilise le calendaire pour les entrées/sorties. Les méthodes ouvrées et ouvrables existent par ailleurs.\nProrata d'entrée demandé : 3 100 × 10 / 31 = 1 000,00 €. Ce 1 000,00 € n'est pas une retenue d'absence de 21 jours.",
    }),
    pack({
      title: "Heures supplémentaires : intégrer la majoration au brut",
      description: "Passer de L. 3121-28 / L. 3121-36 au montant brut, avec SMIC 12,02 € et mensuel / 151,67 h.",
      minutes: 24,
      objectifs:
        "Vous calculez un taux horaire, vous appliquez 25 % / 50 % supplétifs, vous ajoutez le résultat au brut, et vous documentez l'absence d'accord plus favorable lu.",
      theorie:
        "Les HS sont des heures au-delà de la durée légale ou équivalente (L. 3121-28), soit en pratique au-delà de 35 h dans la semaine (L. 3121-27), sauf organisation particulière lue. À défaut de convention ou d'accord, majoration 25 % pour les huit premières, 50 % au-delà (L. 3121-36). Le montant HS entre dans le brut du mois, donc dans l'assiette des cotisations (L. 242-1, principe). On ne les paie pas « net » sous la table, on ne les « compense » pas par un titre-restaurant.\n\nTaux horaire de base. Mensualisé 35 h : mensuel / 151,67. SMIC : 12,02 € (on ne redescend pas en-dessous). Horaire contractuel : le taux du contrat. Arrondi au centime : règle du dossier ; en exercices, arrondi commercial (12,02 × 1,25 = 15,025 → 15,03 €).\n\nVolume : décompte hebdomadaire. 39 h → 4 HS à 25 % si pas d'accord. 45 h → 8 HS à 25 % + 2 à 50 %. On n'utilise pas « 169 h dans le mois ». Les heures doivent être validées. Contingent, repos compensateur, exonérations éventuelles de cotisations sur HS : textes de la période, sous revue — on n'invente pas un 0 % salarial.\n\nConséquence : un oubli de majoration sous-paie le brut, donc tout le bulletin. Un excès de 50 % dès la première heure, sans accord, sur-paie. Les deux se régularisent ; mieux vaut documenter L. 3121-36 supplétif que d'imiter le BTP.",
      methode:
        "1. Semaine, heures validées, temps plein.\n2. HS = heures − 35 (sauf équivalence / accord lus).\n3. Taux de majoration : CCN/accord, sinon 25 % / 50 %.\n4. Taux horaire de base.\n5. Montant = Σ (heures × taux × (1+maj)).\n6. Ajouter au brut ; contrôler SMIC horaire des heures normales.\n7. DSN des heures. Journal si exception (contingent).",
      extra: [
        code(`HS — janvier 2026, taux légaux supplétifs (pas une CCN inventée)

Cas SMIC 12,02 €, semaine 45 h  →  10 HS
8 × (12,02 × 1,25) + 2 × (12,02 × 1,50)
12,02 × 1,25 = 15,025 → 15,03 €
12,02 × 1,50 = 18,03 €
8 × 15,03 = 120,24
2 × 18,03 =  36,06
HS brut = 156,30 €
Salaire de base SMIC mois complet 1 823,03 € + 156,30 € = 1 979,33 € de brut
(si aucune autre variable ; ce total n'a pas de net moteur dans
 reference-bulletins.json : on ne l'invente pas)

Cas mensuel 2 500,00 €, 4 HS à 25 %
Taux = 2 500,00 / 151,67 = 16,483… → 16,48 €
Heure majorée = 16,48 × 1,25 = 20,60 €
4 HS = 82,40 €
Brut du mois = 2 500,00 + 82,40 = 2 582,40 €  (mois complet par ailleurs)`),
      ],
      exemple:
        "Atelier. 12 HS déclarées sur un 35 h, sans ventilation semaine. Lina exige le détail par semaine : 12 HS peuvent être 8+4 (25 puis 50) ou 12 heures d'une seule semaine (8 à 25 + 4 à 50) ou trois semaines de 4 HS (toutes à 25 %). Le brut change. Sans ventilation, elle ne saisit pas 12 × 50 % « pour aller plus vite ».",
      erreurs:
        "Majorer 50 % dès la première. Utiliser 151,67 comme seuil hebdomadaire. Calculer sur le SMIC alors que le taux est 16,48 €. Payer les HS hors brut. Oublier la validation. Appliquer L. 3121-36 malgré un accord 30 % lu et plus favorable.",
      particuliers:
        "Forfait jours : pas ce décompte. Cadres dirigeants. Astreintes. Heures d'équivalence. Contingent dépassé : contrepartie obligatoire en repos, CCN/décret. Exonération salariale des HS : relire le dispositif en vigueur, ne pas recopier un taux de 2019.",
      exercice:
        "Mensuel 1 823,03 €, SMIC, une semaine à 43 h validées, pas d'accord. Calculez les HS de la semaine et le brut du mois (mois complet, seule variable = ces HS).",
      correction:
        "43 − 35 = 8 HS, toutes dans les 8 premières → 25 % (L. 3121-36).\n12,02 × 1,25 = 15,03 € ; 8 × 15,03 = 120,24 €.\nBrut = 1 823,03 + 120,24 = 1 943,27 €.\nOn n'applique pas 50 %. On n'invente pas le net de 1 943,27 € (hors référence moteur).",
    }),
    pack({
      title: "Heures complémentaires du temps partiel",
      description: "Les distinguer des HS, respecter L. 3123-9, et les intégrer au brut avec la majoration du texte lu.",
      minutes: 20,
      objectifs:
        "Vous saisissez des heures complémentaires, jamais des HS, sur un temps partiel, et vous alertez si le volume rapproche de 35 h.",
      theorie:
        "Les heures complémentaires sont celles d'un temps partiel au-delà de la durée contractuelle, dans les limites du contrat et de la loi (L. 3123-9). Elles ne sont pas des heures supplémentaires. Le libellé, la majoration, la DSN, le risque de requalification diffèrent. Majorations : L. 3123-21 et suivants (schéma légal souvent enseigné : 10 % pour les heures dans la limite de 10 % de la durée contractuelle, 25 % au-delà, sauf accord). Relisez Légifrance et la CCN. N'inventez pas 25 % « comme des HS » ni 50 % le samedi.\n\nLimites : le contrat peut prévoir un volume maximal ; la loi encadre pour éviter que le temps partiel soit un temps plein déguisé. Un junior qui saisit 20 HC chaque semaine sur un contrat 24 h alerte le RH : on ne « régularise pas en silence » un temps plein. Le complément d'heures (avenant temporaire) n'est pas une HC : c'est une modification de durée pour une période, écrite.\n\nConséquence brut. Taux de base du partiel × (1+maj) × nombre d'HC. Mensualisé 1 440 € pour 104 h : taux 13,85 €. 4 HC à 10 % (si le texte lu le prévoit) : 13,85 × 1,10 × 4 = 60,94 € à ajouter. Contrôle SMIC : 13,85 ≥ 12,02. Les HC majorées sont du brut soumis.\n\nJamais : transformer des HC en HS pour « donner 25 % ». Jamais : payer des HC non prévues au-delà du plafond sans alerte. Jamais : les extraire du brut.",
      methode:
        "1. Confirmer le temps partiel et la durée écrite.\n2. Heures faites vs durée contractuelle de la semaine (ou de la période de référence du contrat).\n3. HC dans les limites ? Sinon alerte + ne pas masquer.\n4. Majoration : L. 3123-21 s. et CCN, texte sous les yeux.\n5. Taux de base du partiel (mensuel / heures de référence).\n6. Ajouter au brut. Libellé « heures complémentaires », pas « HS ».\n7. Si durée ≈ 35 h : ticket requalification potentielle, juriste/RH.",
      extra: [
        code(`HC — janvier 2026 (majorations légales à relire : L. 3123-21 s.)
Contrat 24 h / sem., mensuel 1 440,00 €, référence 104 h
Taux = 1 440 / 104 = 13,846… → 13,85 €  ≥ 12,02 OK

Semaine : 26 h validées → 2 HC
Hypothèse pédagogique : ces 2 h sont dans la tranche à 10 % du schéma
supplétif (à confirmer sur le texte + CCN, pas une clause inventée)
Heure à 10 % = 13,85 × 1,10 = 15,235 → 15,24 €
2 HC = 30,48 €
Brut du mois (mois complet, seule variable) = 1 440,00 + 30,48 = 1 470,48 €

INTERDIT : 2 × 13,85 × 1,25 = 34,63 € « comme des HS L. 3121-36 »
INTERDIT : libellé « heures supplémentaires »

SMIC horaire, 2 HC à 10 % :
12,02 × 1,10 = 13,222 → 13,22 € ;  2 × 13,22 = 26,44 €`),
      ],
      exemple:
        "Services. Un manager valide 12 « HS » sur un 28 h. Lina reclasse en HC, vérifie le plafond contractuel, applique la majoration du texte (pas 25 % automatique), et écrit au RH : 28 + 12 = 40 h cette semaine, au-delà de 35 h. La requalification n'est pas son acte ; l'alerte oui.",
      erreurs:
        "Libellé HS. Majoration L. 3121-36. Ignorer le plafond. Mensualiser les HC dans le salaire de base pour « lisser ». Oublier le SMIC horaire. Inventer une clause CCN 50 %.",
      particuliers:
        "Temps partiel annualisé : HC selon l'accord. Complément d'heures écrit. Temps partiel thérapeutique : l'assurance maladie et le temps restant, sous revue. Multiples employeurs : chaque contrat a sa durée, pas une « somme HS » globale bricolée.",
      exercice:
        "Contrat 20 h / sem. SMIC 12,02 €, horaire (non mensualisé). Semaine : 22 h. Hypothèse : 2 HC à 10 % après lecture de L. 3123-21. Calculez le brut de la semaine (heures normales + HC). Quel article interdit d'appeler cela des HS ?",
      correction:
        "Heures normales : 20 × 12,02 = 240,40 €.\nHC : 2 × 12,02 × 1,10 = 2 × 13,22 = 26,44 €.\nBrut de semaine = 266,84 €.\nL. 3123-9 : heures complémentaires du temps partiel, distinctes des HS (L. 3121-28). La majoration 10 % est l'hypothèse de l'exercice après lecture du schéma légal ; en dossier réel on relit CCN et texte consolidé.",
    }),
    pack({
      title: "Primes, commissions et avantages en nature",
      description: "Qualifier l'élément, l'intégrer au brut s'il est soumis, et ne jamais inventer un forfait AEN URSSAF.",
      minutes: 22,
      objectifs:
        "Vous distinguez prime contractuelle, commission, libéralité et avantage en nature, vous les ajoutez au brut lorsqu'ils sont assujettis, et vous refusez une évaluation d'AEN hors barème.",
      theorie:
        "Une prime (ancienneté, 13e mois, vacances, exceptionnelle, d'objectif) augmente le brut du mois de versement si elle est soumise — le principe d'assiette L. 242-1 l'inclut sauf texte d'exclusion. La source (CCN, contrat, usage établi, décision unilatérale) conditionne la récurrence et le prorata d'entrée/sortie. On n'invente pas un 13e mois. On ne sort pas une « prime exceptionnelle » de l'assiette parce que le dirigeant l'a appelée cadeau.\n\nLes commissions (vente, apport d'affaires) suivent les règles d'arrêté du contrat (mois de facturation, d'encaissement). Elles sont du brut de la période de rattachement. Un décalage d'un mois se documente ; on n'attend pas six mois « le temps que ça se tasse ».\n\nL'avantage en nature (AEN) : nourriture, logement, véhicule, NTIC parfois. C'est un élément de brut évalué, qui cotise, même si le salarié ne reçoit pas l'euro correspondant en virement. L'évaluation suit les barèmes URSSAF de la période (forfait ou réel selon les cas). Ce parcours n'invente aucun forfait repas, aucun % de véhicule, aucun barème logement. Le junior ouvre la fiche URSSAF de l'année ou le paramétrage visé. Un montant sorti d'un souvenir 2023 est une faute.\n\nConséquence : brut = base ± prorata + HS/HC + primes soumises + commissions + AEN − retenues d'absence. Oublier l'AEN sous-évalue le brut, les cotisations, le NI, parfois le PAS. Inventer un AEN trop élevé l'inverse. Les frais réels remboursés sur justificatifs ne sont pas un AEN s'ils sont des frais professionnels qualifiés (BOSS) — la qualification précède le calcul.",
      methode:
        "1. Nommer l'élément (prime / commission / AEN / frais / indemnité).\n2. Source écrite ?\n3. Assujetti (L. 242-1 + BOSS) ? Si doute : pas d'exclusion.\n4. Période de rattachement.\n5. AEN : barème URSSAF de 2026 ou réel, jamais un forfait inventé.\n6. Ajouter au brut ; contrôler le net (l'AEN augmente le brut mais pas le virement d'autant — le salarié « paie des cotisations sur un avantage »).\n7. Prorata d'entrée : lire le texte de la prime (entière, prorata, condition de présence au 31/12).",
      extra: [
        code(`CONSTRUCTION DU BRUT — check
Salaire de base (mensualisé / horaire / partiel / prorata)     .......
+ HS majorées (L. 3121-36 ou accord lu)                        .......
+ HC majorées (L. 3123-9 / L. 3123-21 s.)                      .......
+ Primes soumises (source : ........)                          .......
+ Commissions (période : ........)                             .......
+ AEN (barème URSSAF 2026 / réel — pas un forfait inventé)     .......
− Retenues d'absence (méthode du MOTIF, pas 3/31 universel)    .......
= BRUT DU MOIS                                                 .......

Exemple pédagogique (AEN non chiffré : pas de barème inventé)
Base 2 500,00 + HS 82,40 + prime exceptionnelle SOUMISE 200,00
Brut = 2 782,40 €
AEN véhicule : à évaluer selon fiche URSSAF 2026 du dossier, puis à ajouter.
On n'écrit pas « 150 € comme partout ».`),
      ],
      exemple:
        "PME. Prime « 200 € à tout le monde, ils ont bien bossé » (déjà vue au module métier). Lina exige la qualification : libéralité ponctuelle soumise, versée aux présents, y compris temps partiel au prorata ? hors forfaits jours absents ? hors arrêt ? Sans cadrage, elle ne saisit pas. Une fois cadré « exceptionnelle, tous les présents du mois, soumise, pas de prorata temps partiel » (décision employeur écrite), elle ajoute 200 € au brut de chaque présent. Les absents en arrêt : la décision écrite dit s'ils sont inclus ; on n'invente pas.",
      erreurs:
        "Inventer un forfait AEN. Sortir une prime de l'assiette. Payer une commission « net » . Oublier que l'AEN gonfle le brut sans gonfler le virement d'autant. Recopier le 13e mois du dossier voisin. Appliquer un barème véhicule 2019.",
      particuliers:
        "Titres-restaurant, indus, PEE, intéressement : régimes propres, module avantages. Nourriture (hôtel-café-restaurant) : forfaits URSSAF spécifiques, à relire. Logement de fonction. NTIC : présomptions BOSS. Remboursement kilométrique barème vs AEN véhicule.",
      exercice:
        "Base 2 100,00 €, mois complet, prime soumise 150,00 €, pas d'AEN, pas de HS. Quel brut ? Pourquoi refusez-vous d'évaluer un véhicule « à 1 % du TTC » de mémoire ? Que devient ce brut s'il est le brut 2 100 du moteur plus une prime — invente-t-on le nouveau net ?",
      correction:
        "Brut = 2 100,00 + 150,00 = 2 250,00 €.\nOn refuse 1 % de mémoire : l'AEN véhicule suit le barème URSSAF (forfait selon émission / électrique, ou réel), à ouvrir pour 2026. On n'invente pas.\nOn n'invente pas le net de 2 250 € : reference-bulletins.json n'a pas ce brut. On s'arrête au brut, ou on lance le moteur pédagogique si l'exercice le demande, on n'extrapole pas à partir de 2 100 €.",
    }),
    pack({
      title: "Retenues pour absence et régularisations de brut",
      description: "Retenir le temps non travaillé sans amende, régulariser un trop-perçu ou un oubli, sans inventer la méthode.",
      minutes: 22,
      objectifs:
        "Vous qualifiez une retenue, vous refusez le 3/31 universel, et vous traitez une régularisation de brut (rappel ou trop-perçu) comme un événement documenté.",
      theorie:
        "Pas de travail, pas de salaire — principe, sous réserve des maintiens (CP, maladie selon textes, fériés selon textes, etc.). Une absence injustifiée, une mise à pied, un congé sans solde, une grève : le salaire de base mensualisé se réduit. La méthode de retenue n'est pas unique (leçon prorata) : heures de l'horaire, ouvrés, ouvrables, parfois calendaire selon paramétrage. 3 100 × 3 / 31 = 300,00 € n'est qu'une illustration calendaire, pas « la » retenue légale de 3 jours.\n\nCe n'est pas une sanction pécuniaire déguisée : on retient le temps non travaillé, on n'ajoute pas 20 % « pour apprendre ». Les saisies sur salaire, oppositions, acomptes sont d'autres retenues, encadrées, hors cette leçon de brut (elles touchent souvent le net).\n\nRégularisation de brut : oubli de 8 HS en janvier, trop-perçu d'une prime en février, rappel de salaire après avenant rétroactif. On crée une rubrique de rappel (positif) ou de régularisation négative, rattachée à la période, soumise selon les règles de la période d'emploi (taux, plafonds de la période concernée — vigilance janvier vs juin 2026 pour le SMIC). On n'efface pas un bulletin clôturé en silence. On n'étale pas un trop-perçu sans information du salarié et sans règle (échéancier, reste à vivre).\n\nConséquence : DSN, NI, PAS, cumuls bougent. Un rappel de 82,40 € de HS en février au titre de janvier est du brut de la paie de régularisation, avec un libellé clair. Un junior n'enterre pas 82,40 € dans une « prime diverse ».",
      methode:
        "Retenue :\n1. Motif et pièce.\n2. Maintien ou non (texte).\n3. Unité de décompte du dossier.\n4. Montant = base × (unité absente / unité du mois) ou heures × taux.\n5. Libellé du motif, pas « diverse ».\nRégularisation :\n1. Période d'origine.\n2. Sens (rappel / trop-perçu).\n3. Assujettissement.\n4. Information salarié, échéancier si trop-perçu.\n5. Visa responsable au-delà d'un seuil interne.\n6. Ne pas modifier un bulletin déjà remis sans process d'annule/remplace ou de rappel.",
      extra: [
        code(`RETENUE — ne pas copier-coller sans motif
Illustration calendaire seulement (moteur) :
mensuel 3 100,00 €, 3 jours, janvier 31 j
3 100 × 3 / 31 = 300,00 €
Brut restant illustratif = 3 100 − 300 = 2 800,00 €
SI ET SEULEMENT SI le dossier retient en calendaire pour CE motif.
Sinon : ouvrés / heures / ouvrables selon paramètre.

RÉGULARISATION
Janvier : 4 HS oubliées, taux 16,48 €, maj 25 % → 82,40 €
Février : rubrique « Rappel HS janvier 2026 » +82,40 € (brut soumis)
Pas de fusion avec la prime de février.
Trop-perçu prime 200 € : pas de retenue surprise le 24 du mois ;
information, échéancier, visa. Plafonds 2026 (PMSS 4 005) : un rappel
peut ouvrir une T2 — contrôler le brut total du mois de régularisation.`),
      ],
      exemple:
        "CSP. Trop-perçu de 200 € découvert en clôture. Un junior retire 200 € le jour même sur tous les motifs. Le salarié a un acompte et une saisie : le virement passe négatif. Bon geste : stopper, calculer le net résultant, appliquer le barème de saisie / politique trop-perçu, informer, viser Marc. La régularisation n'est pas une vengeance de calendrier.",
      erreurs:
        "Retenue 3/31 sur un CP. Amende 50 €. Modifier le PDF déjà envoyé. Rappel « net » sans cotisations. Régulariser sur le PAS pour « que ça se voie moins ». Ignorer le SMIC 12,31 € si la régularisation concerne une période postérieure au 01/06/2026.",
      particuliers:
        "Retenue sur un bulletin de solde (imputation CP, trop-perçu, matériel). Prescription des salaires. Annule et remplace vs bulletin complémentaire. Contrôle URSSAF : les régularisations doivent être traçables période par période, pas un solde net global.",
      exercice:
        "(1) Mensuel 3 100 €, entrée 10 jours calendaires en janvier : brut de base calendaire ? (2) Même salarié, 0 jour d'absence injustifiée. Pourquoi ne pas retenir 21/31 ? (3) En février on découvre 4 HS janvier à 25 % sur taux 16,48 €. Que saisit-on ?",
      correction:
        "1. 3 100 × 10 / 31 = 1 000,00 € (moteur).\n2. S'il a travaillé ces 10 jours, on paie 1 000,00 €, on ne retient pas 21/31 d'absence : l'entrée n'est pas une absence. Le complément 2 100 € n'est pas dû.\n3. Rubrique rappel HS janvier : 4 × 16,48 × 1,25 = 82,40 € de brut soumis en février, libellé explicite, pas une prime. Contrôler le brut de février (base février + 82,40 + autres). Visa si le process l'exige. On n'invente pas le net du nouveau brut.",
    }),
    quizLesson({
      title: "Quiz — Calculer le salaire brut",
      description: "Vérifier mensualisation, SMIC, prorata calendaire, HS, HC et limites de méthode.",
      passing_score: 70,
      questions: [
        q({
          question: "Le SMIC mensuel temps plein 151,67 h du 01/01/2026 au 31/05/2026 est :",
          options: [
            "A. 12,02 × 151,67 = 1 823,07 €, qu'on arrondit comme on veut",
            "B. 1 823,03 € (URSSAF / Service-Public), distinct de 12,02 × 151,67 = 1 823,07 €",
            "C. 1 443,11 €",
            "D. 1 867,02 € dès janvier",
          ],
          correct: 1,
          explanation:
            "Le barème mensuel officiel est 1 823,03 €. La multiplication horaire donne 1 823,07 € : on ne remplace pas le barème. 1 443,11 € est un net indicatif de communication. 1 867,02 € correspond au SMIC mensuel au 01/06/2026 (12,31 €/h).",
        }),
        q({
          question: "Un salarial mensualisé 2 500 €, février 28 jours, mois complet sans absence :",
          options: [
            "A. Base = 2 500 × 28/31",
            "B. Base = 2 500,00 € (la mensualisation ne suit pas le calendrier du mois complet)",
            "C. Base = 2 500 × 28/30",
            "D. Base = 151,67 × 12,02",
          ],
          correct: 1,
          explanation:
            "La mensualisation lisse le salaire : un mois complet sans événement se paie au mensuel contractuel, 28 ou 31 jours. 151,67 × 12,02 n'est pas son salaire.",
        }),
        q({
          question: "3 100,00 € × 10 / 31 (entrée, méthode calendaire du moteur) vaut :",
          options: [
            "A. 1 000,00 €",
            "B. 1 033,33 €",
            "C. 3 100,00 €",
            "D. 310,00 €",
          ],
          correct: 0,
          explanation:
            "prorataCalendar(3100, 10, 31) = 1 000,00 €. C'est l'exemple verrouillé. Ce n'est pas la méthode unique pour toutes les absences.",
        }),
        q({
          question: "Concernant le prorata d'absence :",
          options: [
            "A. La seule méthode légale est le calendaire 3/31",
            "B. Il n'existe pas une unique méthode légale pour tous les motifs ; calendaire, ouvrés, ouvrables, heures existent — on lit le dossier",
            "C. Seuls les jours ouvrables L. 3141-3 s'appliquent à l'absence injustifiée",
            "D. On choisit la méthode qui donne le net le plus haut",
          ],
          correct: 1,
          explanation:
            "Le parcours impose de dire que d'autres méthodes existent et qu'aucune n'est universelle. L. 3141-3 concerne les CP légaux en ouvrables, pas toute absence. On ne choisit pas selon le net.",
        }),
        q({
          question: "À défaut d'accord, 8 HS (semaine 43 h, temps plein) se majorent de :",
          options: [
            "A. 50 % dès la première (L. 3121-36)",
            "B. 25 % (huit premières, L. 3121-36 supplétif)",
            "C. 10 % comme des heures complémentaires",
            "D. 0 % si l'on est au SMIC",
          ],
          correct: 1,
          explanation:
            "L. 3121-36 : 25 % pour les 8 premières, 50 % au-delà. 43 h = 8 HS, toutes à 25 % à défaut d'accord. Les HC à 10 % concernent le temps partiel. Le SMIC n'annule pas la majoration.",
        }),
        q({
          question: "12,02 € majoré de 25 %, arrondi commercial au centime :",
          options: [
            "A. 15,00 €",
            "B. 15,03 € (12,02 × 1,25 = 15,025)",
            "C. 18,03 €",
            "D. 12,02 €, la majoration se paie à part hors brut",
          ],
          correct: 1,
          explanation:
            "15,025 s'arrondit à 15,03 €. 18,03 € est la majoration 50 %. Les HS majorées entrent dans le brut, elles ne se paient pas hors bulletin.",
        }),
        q({
          question: "Sur un contrat 24 h / semaine, 2 heures au-delà, dans les limites, sont :",
          options: [
            "A. Des HS L. 3121-28 à 25 % / 50 %",
            "B. Des heures complémentaires L. 3123-9, distinctes des HS",
            "C. Du bénévolat",
            "D. Un 13e mois",
          ],
          correct: 1,
          explanation:
            "Temps partiel : heures complémentaires, pas supplémentaires. Majorations L. 3123-21 s. et CCN, à relire, pas L. 3121-36 par analogie.",
        }),
        q({
          question: "Un avantage en nature véhicule se chiffre :",
          options: [
            "A. Toujours 150 €, forfait national 2026 de ce parcours",
            "B. Selon le barème URSSAF de la période ou le réel, jamais un forfait inventé",
            "C. Uniquement si le brut dépasse le PMSS",
            "D. Hors brut, comme un frais",
          ],
          correct: 1,
          explanation:
            "Le parcours n'invente aucun forfait AEN. L'évaluation URSSAF 2026 ou le réel s'impose. L'AEN soumis entre dans le brut (L. 242-1), ce n'est pas un frais professionnel par nature.",
        }),
        q({
          question: "Taux horaire d'un mensualisé 2 500,00 € sur 151,67 h, arrondi au centime :",
          options: [
            "A. 16,48 €",
            "B. 12,02 €",
            "C. 35,00 €",
            "D. 151,67 €",
          ],
          correct: 0,
          explanation:
            "2 500 / 151,67 ≈ 16,483 € → 16,48 €. C'est ce taux (pas le SMIC) qui sert de base aux majorations HS si le salarié est à 2 500 €.",
        }),
        q({
          question: "Un trop-perçu de prime découvert en clôture se traite :",
          options: [
            "A. En retranchant le montant sans information, quitte à rendre le net négatif",
            "B. En l'enterrant dans une rubrique « diverse »",
            "C. Par une régularisation documentée, information du salarié, visa, sans amende, en contrôlant le net résultant",
            "D. En baissant les cotisations du mois pour compenser",
          ],
          correct: 2,
          explanation:
            "La régularisation est un événement traçable, pas une sanction ni une modification d'assiette sociale. Un net négatif se bloque. Les cotisations suivent le brut régularisé, elles ne « compensent » pas.",
        }),
      ],
    }),
  ],
};
