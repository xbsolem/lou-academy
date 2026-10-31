import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 27,
  title: "Cas complexes : établissements, statuts, régularisations, saisies",
  description:
    "Traiter multi-établissements, multi-CCN, forfaits, temps partiel, alternance, stagiaires, mobilité, rappels, saisies et trop-perçus, en tenant toujours les limites d’un junior.",
  lessons: [
    pack({
      title: "Multi-établissements : SIRET, AT/MP, DSN et dossiers",
      description:
        "Ne jamais fusionner deux établissements par facilité de clôture.",
      minutes: 22,
      objectifs:
        "Vous identifiez l’employeur et l’établissement d’affectation, vous savez quels paramètres peuvent changer (AT/MP, parfois CCN, DSN), et vous savez qu’un junior n’invente pas un taux AT.",
      theorie:
        "Un même salarié peut travailler pour un employeur unique à plusieurs établissements, ou changer de SIRET en cours d’année, ou être géré dans un portefeuille qui mélange des sociétés d’un groupe. L’établissement n’est pas un centre de coût cosmétique. Il porte un SIRET, souvent un taux AT/MP notifié par la Carsat, parfois une convention, un versement mobilité différent, une médecine du travail, une DSN. Fusionner deux établissements « parce que c’est le même Excel » produit des DSN fausses, des taux AT faux, des lettrages comptables faux.\n\nLe taux AT/MP n’est jamais un taux national unique. Dans ce parcours, tout taux AT est une hypothèse de dossier fictif, sauf si une notification réelle est au dossier. Un junior ne « recopie le 1,50 % du voisin ». Un transfert d’établissement a une date d’effet : avant, les paramètres A ; après, les paramètres B. Un prorata de mois, un changement de caisse, un signalement DSN : sous revue.\n\nLe groupe n’est pas un employeur unique. Une mobilité société A → société B est souvent une sortie et une entrée (DPAE, solde, nouveau contrat), pas un simple changement de rubrique. Un junior qui « continue le matricule » sans instruction RH crée un contrat fantôme.\n\nLes plafonds (PMSS 4 005 € en janvier 2026, arrêté du 22 décembre 2025) se gèrent dans le respect des règles de rattachement et de prorata propres aux multi-employeurs / multi-contrats : vous ne reconstituez pas un plafond à la main sans consigne et sans texte. En cas de plusieurs contrats le même mois, vous alertez : le plafonnement n’est pas un bricolage junior.",
      methode:
        "Pour chaque salarié : SIRET employeur, SIRET établissement, date d’affectation, CCN, taux AT notifié (pièce), organisme, journal comptable. Changement : avenant ou acte RH, date, DPAE si nouvel employeur, pas de fusion de dossiers. Contrôle clôture : un fichier DSN par établissement selon paramétrage, totaux AT par SIRET.",
      noteText:
        "Limite junior : vous ne choisissez pas l’établissement « le moins cher en AT », vous ne compensationnez pas des taux, vous n’unifiez pas des DSN. Mutation intra-groupe, portage, mise à disposition : escalade pour identifier l’employeur social.",
      exemple:
        "ETI 3 usines, 3 SIRET, 3 taux AT notifiés différents (hypothèses de dossier, pas un barème national). Un salarié passe de l’usine A à B au 12 janvier 2026. Le junior qui laisse tout le mois sur A fausse l’AT et parfois le versement mobilité. Le junior qui coupe au 12 sans pièce RH invente une mutation. La bonne voie : acte RH, date, paramétrage A jusqu’au 11, B à compter du 12, revue du responsable, DSN selon consignes.",
      extra: [
        code(`CONTRÔLE MULTI-ÉTABLISSEMENTS — JANVIER 2026

Matricule | SIRET étab. | CCN (à lire) | AT (notification) | DSN | Journal
M-102     |  ...001     |  dossier     | pièce Carsat      | A   | A
M-102 ?   |  ...002     |  ?           | NE PAS copier A   | ?   | ?

Règle : un « ? » = pas de clôture sur ce matricule.
PMSS période : 4 005 € (arrêté 22/12/2025) — ne pas bricoler le plafond
parce que deux SIRET apparaissent dans le mois : alerter.`),
      ],
      erreurs:
        "Un seul taux AT pour tout le groupe. Un seul journal. Oublier le versement mobilité d’un site. Garder le matricule après changement de société. Recalculer un plafond multi-employeurs au crayon.",
      particuliers:
        "Établissement unique, lieux de travail multiples : ce n’est pas toujours un second SIRET. Travail à l’étranger : autre leçon, escalade. CSE central / établissements : hors paie junior.",
      exercice:
        "Portefeuille : 40 salariés sur 2 SIRET. Le directeur : « mets tout le monde sur le SIRET du siège, l’AT est plus bas. » Que répondez-vous ?",
      correction:
        "Refus. L’affectation suit la réalité et l’acte RH, le taux AT suit la notification Carsat de l’établissement. Optimiser l’AT en déplaçant des SIRET fictifs est une fausse déclaration. Vous alertez le responsable. Vous n’exécutez pas.",
    }),
    pack({
      title: "Multi-CCN : lire, ne pas transposer, ne pas inventer",
      description:
        "Chaque dossier a sa convention ; le réflexe du dossier A est un risque pour le dossier B.",
      minutes: 20,
      objectifs:
        "Vous savez identifier la CCN applicable, ce qu’elle peut modifier (minima, HS, maintien, CP), et que vous ne citez jamais une clause de mémoire.",
      theorie:
        "La convention collective n’est pas un décor. Elle peut fixer des minima de salaire, des classifications, des majorations d’heures au-delà ou en deçà du supplétif légal, un maintien de salaire maladie, des congés supplémentaires, un 13e mois, des RTT, des indemnités de rupture plus favorables. La loi reste le plancher (sauf dispositions spécifiques). Un usage d’entreprise ou un accord peut encore s’ajouter. Rien de cela ne s’invente. Rien de cela ne se « transpire » d’un précédent employeur ou d’un autre client de cabinet.\n\nEn cabinet et en CSP multi-dossiers, le risque majeur du junior est la transposition : « dans la métallurgie on faisait comme ça, donc ici aussi ». Ici, on ouvre le texte applicable au SIRET, on vérifie l’IDCC, on lit l’article, on date la version. Si le texte est muet ou ambigu, on n’applique pas le souvenir : on interroge le responsable. Les minima 2026 d’une CCN ne sont pas dans rates-2026.json : vous ne les inventez pas dans un exercice ni en poste.\n\nLe légal supplétif des HS (L. 3121-36 : 25 % puis 50 % à défaut d’accord) ne s’applique que si aucun accord ou CCN plus précis ne s’applique. Vous ne « mettez 25 % partout » par confort. Vous ne « mettez 50 % partout » par générosité.",
      methode:
        "Fiche dossier : IDCC, intitulé, avenant de salaires en vigueur, chapitres à lire pour ce mois (HS, maladie, CP, rupture). Toute rubrique conventionnelle dans le logiciel doit pointer vers un article, pas vers « usage junior ». Contrôle : un salarié, une CCN paramétrée, cohérente avec le contrat.",
      noteText:
        "Limite : un junior ne paramètre pas une CCN entière, ne choisit pas l’IDCC « le plus simple », ne promet pas un 13e mois absent du texte. Ambiguïté = escalade.",
      exemple:
        "Cabinet, 8 dossiers, 5 CCN. Théo applique un maintien maladie « 90 % dès le 1er jour » vu chez le client métallurgie au client Syntec. Les bulletins sont élégants et faux. Le responsable doit reprendre. La compétence n’était pas la vitesse : c’était l’ouverture du bon texte.",
      extra: [
        code(`AVANT D'APPLIQUER UNE RUBRIQUE « CCN »

[ ] IDCC du dossier = IDCC du contrat / paramètre
[ ] Article lu, version datée (pas un PDF de 2014 sans vérif)
[ ] Nature : minimum / HS / maintien / CP / prime / rupture
[ ] Plus favorable que le légal ? ou simple précision ?
[ ] Présent dans le logiciel sous le bon code ?
[ ] Si doute : pas de saisie, question écrite au responsable

Interdit : « tout le monde sait que dans cette branche... »`),
      ],
      erreurs:
        "Citer un minimum CCN de mémoire. Mélanger deux IDCC d’un groupe. Appliquer le légal en ignorant un accord plus favorable déjà paramétré, ou l’inverse. Paramétrer « au feeling » un 13e mois.",
      particuliers:
        "Salarié détaché sur un site d’une autre CCN : qualification RH, pas un choix paie. Multi-employeurs : chaque contrat sa CCN. Accord d’entreprise vs CCN : hiérarchie et plus favorable, sous revue.",
      exercice:
        "Deux salariés, même métier apparent, deux sociétés du groupe, deux IDCC. Le DRH groupe : « aligne les primes sur la CCN A, c’est plus simple. » Que faites-vous ?",
      correction:
        "Vous n’alignez pas. Chaque contrat et chaque IDCC s’appliquent. Un alignement est une décision sociale (avenants, accord), pas une saisie de clôture. Vous documentez l’écart, vous refusez la simplification, vous escaladez.",
    }),
    pack({
      title: "Cadres, non-cadres et forfait jours",
      description:
        "Le statut n’est pas un agrément du gestionnaire ; le forfait n’est pas une astuce anti-HS.",
      minutes: 22,
      objectifs:
        "Vous distinguez statut, APEC, forfait jours et horaire, et vous savez ce que vous ne transformez pas pour « simplifier ».",
      theorie:
        "Cadre / non-cadre est une classification issue du contrat et de la CCN, pas d’un sentiment de responsabilité. Le statut cadre a des effets de paie : cotisation APEC (taux dans rates-2026.json : 0,024 % salarial, 0,036 % patronal — paramètre annuel Agirc-Arrco / APEC, à n’appliquer que si le statut cadre est établi), parfois régime de prévoyance différent, parfois forfait. Il n’augmente pas magiquement le net. Il n’est pas dû parce que l’on vise 36 000 € sur le marché. Un junior n’accorde pas le statut cadre.\n\nLe forfait jours (cadres, et certains non-cadres dans les conditions légales) remplace le décompte horaire par un forfait annuel en jours, sous conditions (accord, autonomie, suivi, entretien). Les heures supplémentaires légales au sens des 35 h ne se déversent pas « en plus » comme pour un horaire 151,67 h. Un jour d’absence d’un forfait n’est pas « 7 heures d’atelier ». Un junior qui convertit un forfait en heures pour coller à un planning d’usine casse le régime.\n\nÀ l’inverse, appeler « forfait jours » un salarié horaire pour ne plus payer les HS est un détournement. Sans accord et sans contrat valides, ce n’est pas un forfait. Le responsable et souvent le juriste qualifient ; la paie n’invente pas.\n\nNon-cadre horaire : durée légale 35 h (L. 3121-27), HS au-delà (L. 3121-28), majorations selon CCN ou supplétif 25 % / 50 % (L. 3121-36). Cadre horaire (il en existe) : ce n’est pas automatiquement un forfait. Lisez le contrat.",
      methode:
        "Extraire du contrat : statut, modalité de temps (horaire / forfait jours / forfait heures), nombre de jours, rémunération. Vérifier APEC si cadre. Vérifier que les rubriques HS sont inactives sur un vrai forfait jours, et actives sur un horaire. Absence : code adapté au régime. Doute sur la validité du forfait : ne pas « réparer » en silence, alerter.",
      noteText:
        "Limite : vous ne créez pas un forfait, vous ne le détruisez pas, vous ne promettez pas le statut cadre en entretien d’embauche interne. APEC uniquement si cadre avéré.",
      exemple:
        "PME Syntec. Deux « responsables » : l’un cadre au forfait 218 jours (contrat), l’autre non-cadre 35 h qui fait 45 h. Le directeur : « mets-les pareil, ils font le même boulot. » La paie ne les met pas pareil. Le second a des HS à qualifier et à valider ; le premier a un suivi de jours. L’équité se discute en RH (classification, avenant), pas en rubrique unique.",
      extra: [
        code(`STATUT × TEMPS DE TRAVAIL — CE QUE LA PAIE APPLIQUE

                    Horaire 35 h              Forfait jours
Non-cadre           HS / HC selon contrat     Seulement si conditions légales
                    APEC : non                (rare) — ne pas inventer
Cadre               HS si horaire réel        Jours, pas HS 25/50
                    APEC : oui (taux 2026     APEC : oui
                    rates-2026.json)          Absence ≠ 7 h

APEC 2026 (si cadre) : 0,024 % s / 0,036 % p (rates-2026.json).
Ne pas appliquer APEC à un non-cadre « pour faire propre ».`),
      ],
      erreurs:
        "HS sur un forfait jours. APEC sur un non-cadre. Conversion 1 jour = 7 h par habitude. Promettre le cadre pour un net. Oublier que le CET Agirc-Arrco dépend du dépassement du PMSS, pas du statut cadre.",
      particuliers:
        "Forfait heures hebdomadaire ou mensuel : encore un autre régime, à lire. Cadre dirigeant : hors HS, qualification stricte, pas un copier-coller. Passage cadre en cours de mois : avenant, APEC au prorata selon consignes, revue.",
      exercice:
        "Salarié non-cadre, contrat 35 h, 20 HS validées en janvier 2026. Mail : « on le passe forfait jours ce mois pour pas payer les HS. » Que saisissez-vous ?",
      correction:
        "Les 20 HS selon le régime horaire et les majorations du dossier (CCN ou supplétif légal). Pas de forfait jours rétroactif improvisé. Un passage au forfait exige accord, avenant, conditions, date d’effet future ou visée RH. Vous refusez la substitution du mois. Escalade.",
    }),
    pack({
      title: "Temps partiel : contrat, prorata, heures complémentaires",
      description:
        "Ne jamais traiter un temps partiel comme un temps plein réduit au feeling.",
      minutes: 20,
      objectifs:
        "Vous appliquez la durée contractuelle, vous distinguez heures complémentaires et supplémentaires, vous proratisez ce qui doit l’être.",
      theorie:
        "Le temps partiel est une durée inférieure à la durée légale ou conventionnelle comparable, écrite au contrat (répartition, heures). Le brut mensuel d’un 80 % n’est pas « le brut 35 h moins 20 % de tickets ». Il est proportionnel selon le contrat. Les compteurs de CP, certains avantages, la mutuelle (parfois forfaitaire — contrat collectif du dossier) ne se proratisent pas tous de la même façon : on lit, on n’applique pas un unique coefficient 0,8.\n\nLes heures au-delà de la durée contractuelle, dans les limites légales et contractuelles, sont des heures complémentaires (L. 3123-9 et suivants), majorées selon les textes, pas des heures supplémentaires du régime 35 h. Les confondre, c’est appliquer 25 % / 50 % au mauvais objet, ou l’inverse. Un dépassement qui ramènerait le salarié au temps plein pose un problème de requalification : le junior n’en décide pas, il alerte quand les heures complémentaires explosent tous les mois.\n\nSMIC : l’horaire du temps partiel ne peut pas descendre sous 12,02 €/h en janvier 2026 (01/01 au 31/05, URSSAF). Un brut mensuel « qui a l’air d’un SMIC plein » sur 80 % peut être sous SMIC horaire. Contrôle horaire, pas seulement mensuel.\n\nLes absences d’un temps partiel se décomptent selon la répartition (jours travaillés du contrat), pas selon un calendrier 5 jours d’un temps plein.",
      methode:
        "Lire durée, répartition, rémunération, clause de complément. Saisir la base contractuelle. Heures au-delà : rubrique complémentaires, limites, majorations lues. Contrôler SMIC horaire 12,02 € (janvier 2026). Alerter si complément récurrent proche du temps plein. Ne pas « arrondir à 151,67 h ».",
      noteText:
        "Limite : vous n’imposez pas un temps partiel, vous n’écrivez pas la répartition, vous ne requalifiez pas. Avenant avant toute baisse de durée.",
      exemple:
        "Commerce, 22 h/semaine contractuelles. Le manager ajoute 10 h « comme en décembre ». Sans vérifier plafonds d’heures complémentaires et majorations, le junior saisit 10 HS à 25 %. Mauvais régime, mauvais taux, risque de dépassement. Il aurait fallu : contrat, volume déjà fait dans le mois, limites, rubrique complémentaires, visa si proche du temps plein.",
      extra: [
        code(`TEMPS PARTIEL — CONTRÔLE DE CLÔTURE

Durée contrat : ...... h / semaine ou mois
Répartition (jours) : ................
Brut contrat : ........ €
Heures du mois au-delà : ...... → COMPLÉMENTAIRES (pas HS 35 h)
SMIC horaire janv. 2026 : 12,02 € (URSSAF, jusqu'au 31/05/2026)
Taux horaire bulletin : ........ €  (>= 12,02 ?)
Complémentaires récurrentes ?  alerter RH / responsable
Avenant en attente ?  ne pas appliquer l'oral`),
      ],
      erreurs:
        "Prorata unique sur tout (mutuelle, CP, tickets, brut). HS au lieu de complémentaires. SMIC mensuel 1 823,03 € appliqué tel quel à un 50 %. Répartition ignorée pour les absences.",
      particuliers:
        "Temps partiel thérapeutique : circuit médical / RH, maintien, IJ, pas un simple 50 % saisi. Annualisation : encore un régime, sous revue. Cadre temps partiel : possible, contrat, pas un forfait jours réduit au hasard.",
      exercice:
        "Temps plein équivalent 2 400 € / 151,67 h. Salarié 80 %. Janvier 2026, 8 heures au-delà du contrat, validées. Quelles questions posez-vous avant saisie ?",
      correction:
        "Le brut de base est-il bien 80 % de 2 400 selon le contrat ? Les 8 h sont-elles dans les limites d’heures complémentaires du contrat et de la loi ? Quelle majoration (texte, pas 25 % par réflexe HS) ? Le taux horaire reste-t-il ≥ 12,02 € ? Y a-t-il récurrence qui approche le temps plein ? Rubrique complémentaires, pas HS. Si une réponse manque : pas de saisie, escalade.",
    }),
    pack({
      title: "Alternants, apprentis et stagiaires",
      description:
        "Trois régimes distincts ; la gratification de stage se calcule après lecture du seuil 2026, sans montant inventé.",
      minutes: 24,
      objectifs:
        "Vous distinguez contrat d’apprentissage, contrat de professionnalisation et stage ; vous savez où lire une gratification ; vous n’inventez pas le minimum 2026 s’il n’est pas dans le fichier de taux.",
      theorie:
        "Apprenti, alternant en contrat de professionnalisation, stagiaire : trois natures juridiques. Les deux premiers sont des salariés (contrat, DPAE, bulletin, DSN, CP). Le stagiaire n’est pas un salarié : convention de stage, gratification le cas échéant, pas un CDI déguisé, pas des HS comme un 35 h. Un junior qui « met le stagiaire comme un CDD SMIC » crée un faux contrat et un faux régime social.\n\nApprentissage et professionnalisation : rémunérations minimales souvent exprimées en % du SMIC (ou du minimum conventionnel selon âge et année). Le SMIC horaire de référence en janvier 2026 est 12,02 €, mensuel 1 823,03 € base 151,67 h (URSSAF, jusqu’au 31/05/2026 ; 12,31 €/h au 01/06/2026). Le pourcentage applicable se lit dans les textes et barèmes URSSAF / Service-Public de la période, et dans la CCN si plus favorable. Vous ne sortez pas un % d’un souvenir. Les exonérations propres à l’apprentissage se paramètrent sous revue : un junior n’active pas une exonération « parce que c’est un apprenti » sans consigne du dossier. Temps de formation : ce n’est pas une absence injustifiée.\n\nStagiaire : la gratification minimale légale n’est pas dans rates-2026.json. Vous n’inventez donc pas un montant 2026 en euros. Méthode : (1) vérifier si la durée du stage atteint le seuil qui rend la gratification obligatoire (lire URSSAF et Service-Public, texte en vigueur à la date du stage) ; (2) lire le mode de calcul officiel (référence usuelle : fraction du plafond horaire de la sécurité sociale) ; (3) le plafond horaire 2026 est 30 € (arrêté du 22 décembre 2025, rates-2026.json) — ce plafond n’est pas à lui seul le montant de la gratification ; (4) appliquer le pourcentage et les règles du texte vérifié, puis la convention de stage si plus favorable ; (5) régime social de la gratification : franchises et seuils à relire sur URSSAF pour la période, sans les inventer. Si vous n’avez pas ouvert URSSAF / Service-Public ce jour-là, vous ne payez pas « un chiffre de forum ».\n\nUn stage n’ouvre pas les mêmes droits qu’un contrat de travail (CP légaux salariés, HS, licenciement). Les avantages volontaires de l’entreprise restent de l’entreprise. La requalification d’un stage en contrat est un sujet juridique : escalade, pas une rubrique.",
      methode:
        "Identifier la pièce : contrat d’apprentissage / pro / convention de stage. Dates, organisme de formation, temps travail / formation. Rémunération : barème officiel de la date + CCN. Stage : seuil de durée et formule sur URSSAF / Service-Public 2026, puis convention. Paramétrage exonérations : responsable. Premier bulletin : contrôle que ce n’est pas un SMIC plein par erreur.",
      noteText:
        "Limite junior : vous ne choisissez pas le type de contrat, vous n’inventez pas la gratification minimale 2026, vous n’activez pas une exonération apprentissage seul, vous ne « salarisez » pas un stagiaire dans le moteur pour passer la DSN. Doute = responsable + source ouverte.",
      exemple:
        "PME, janvier 2026. On vous dit : « le stagiaire, 600 €, comme l’an dernier. » Vous n’enregistrez pas 600 €. Vous ouvrez la convention (durée, dates, gratification prévue), vous ouvrez URSSAF / Service-Public pour le seuil de durée et la formule 2026, vous comparez, vous faites viser. 600 € peut être trop bas, trop haut, ou hors assiette : vous ne le saurez pas sans le texte. Le plafond horaire 30 € vous sert d’ingrédient si la formule officielle s’y réfère, pas de résultat magique.",
      extra: [
        code(`MÉTHODE GRATIFICATION DE STAGE — NE PAS INVENTER LE MINIMUM 2026

1. Nature : convention de stage, pas un CDI, pas un apprentissage.
2. Durée : le seuil d'obligation se LIT (URSSAF / Service-Public, date du stage).
   Ne pas réciter un nombre de jours de mémoire en production.
3. Formule officielle : la relire (souvent liée au plafond horaire SS).
   Plafond horaire 2026 = 30 € (arrêté 22/12/2025) — INGRÉDIENT, pas le minimum.
4. Montant conventionnel si plus favorable.
5. Régime social : franchise / assiette = URSSAF de la période, pas un forum.
6. Visa responsable avant premier versement.

Interdit : recopier 3,90 €/h ou tout autre souvenir d'année antérieure
comme s'il était le minimum 2026.`),
      ],
      erreurs:
        "SMIC plein sur un apprenti. Stagiaire paramétré CDD. Gratification 2024 gardée en 2026. Exonération cochée sans dossier. Formation comptée en absence. Oublier la DPAE de l’apprenti.",
      particuliers:
        "Mineur apprenti : règles de durée du travail, RH. Stagiaire étranger : convention + titre, escalade. Gratification versée irrégulièrement : régularisation, pas un « on verra à la fin ».",
      exercice:
        "Stage du 5 janvier au 15 avril 2026, 35 h, convention silencieuse sur le montant. Quels documents ouvrez-vous et quel chiffre n’écrivez-vous pas encore ?",
      correction:
        "Vous ouvrez la convention (dates, durée, heures), URSSAF et Service-Public (seuil d’obligation 2026, formule, régime social), le plafond horaire 30 € comme ingrédient si la formule s’y réfère, le responsable pour visa. Vous n’écrivez pas encore un minimum en euros dans le bulletin : ce montant n’est pas dans rates-2026.json et ne se récite pas. Après lecture, vous calculez, vous comparez à la convention, vous saisissez. Si les sources ne sont pas accessibles ce jour-là, vous n’inventez pas, vous reporter le versement plutôt qu’un faux chiffre.",
    }),
    pack({
      title: "Salariés étrangers, détachement et expatriation",
      description:
        "Tenir les pièces et les dates ; ne jamais qualifier seul un régime de sécurité sociale international.",
      minutes: 22,
      objectifs:
        "Vous savez ce qu’un junior contrôle (titre, dates, DPAE) et ce qu’il escalade (détachement, expatriation, pluri-activité transnationale).",
      theorie:
        "Un salarié étranger en France n’est pas un régime de paie « à part » du seul fait de sa nationalité : s’il est affilié au régime général, les taux janvier 2026 du dossier s’appliquent (maladie salariale 0 % si domicilié fiscalement en France ; 5,50 % si non domicilié fiscalement en France — rates-2026.json / MSA-URSSAF). La résidence fiscale n’est pas un sentiment : pièce et paramètre, pas un stéréotype. Le titre de séjour et l’autorisation de travail, quand ils sont exigés, sont des pièces RH à dates de validité. Un junior alerte avant l’échéance ; il n’interprète pas un visa, il ne « prolonge pas » un contrat pour dépanner, il ne conseille pas une procédure préfecture.\n\nDétachement (salarié d’un employeur étranger venant en France, ou salarié français envoyé, selon les cas) et expatriation : le cœur est l’affiliation de sécurité sociale (quel État, formulaire de détachement, éventuel contrat local). Un mauvais choix crée des cotisations indues ou un défaut d’assurance. Ce n’est pas un paramètre junior. LIMITE IMPÉRATIVE : vous n’inventez pas un « taux expat », vous ne décidez pas d’exonérer l’URSSAF, vous ne construisez pas un package (logement, impôt égalisé, CFE) seul. Vous identifiez le cas, vous bloquez le calcul de routine s’il est inadapté, vous remontez au responsable, au juriste ou au cabinet spécialisé.\n\nPluri-activité France / autre État, télétravail transfrontalier, « digital nomad » : encore plus hors autonomie. La DSN française n’est pas un outil d’optimisation internationale.\n\nDocuments : passeport n’est pas un titre de travail. Une copie d’identité se conserve selon finalité et durée CNIL / textes, pas dans un chat.",
      methode:
        "Checklist junior : nationalité / titre / dates / DPAE / résidence fiscale déclarée / régime (général ou autre) / alerte échéance. Si les mots détachement, expat, détaché, INSEE, formulaire A1, CFE, égalisation fiscale apparaissent : STOP, dossier écrit au responsable, pas de bulletin « comme les autres ».",
      noteText:
        "LIMITE JUNIOR — DÉTACHEMENT / EXPAT : vous n’êtes pas habilité à qualifier l’État d’affiliation ni à paramétrer une exonération internationale. Escalade obligatoire. Produire un bulletin français standard sur un expat mal qualifié est une faute, pas une diligence.",
      exemple:
        "Startup. Un « freelance » américain travaille 4 mois à Paris, le fondateur : « mets-le en paie SMIC, on verra le visa. » Le junior refuse : nature du contrat (salariat ?), titre, DPAE, régime. Il n’émet pas un bulletin pour « régulariser après ». Il alerte RH. Un SMIC sur un faux CDD n’arrange ni l’URSSAF ni le droit des étrangers.",
      extra: [
        code(`STOP LIST — À ESCALADER AVANT TOUT CALCUL

[ ] Formulaire de détachement / A1 / certificat d'assujettissement
[ ] Contrat local à l'étranger + maintien contrat français
[ ] Package : logement, véhicule, tax equalisation, CFE
[ ] Télétravail depuis un autre État > quelques jours (selon politique)
[ ] Demande d'« exonérer l'URSSAF, il paie déjà ailleurs »
[ ] Titre de séjour expiré ou absent alors que le travail continue

Acte junior : tracer, dater, transmettre, ne pas « avancer le net ».`),
      ],
      erreurs:
        "Maladie 0 % alors que non-résident fiscal (paramètre 5,50 %). Ignorer un titre périmé. Paramétrer un expat comme un CDI 35 h. Conseiller un visa. Copier un package d’un forum.",
      particuliers:
        "UE / hors UE : pièces différentes, même discipline d’escalade sur l’affiliation. Asile, autorisation provisoire : RH. Sanctions employeur pour travail irrégulier : hors « on fermera les yeux ce mois ».",
      exercice:
        "Mail : « Notre cadre part 18 mois à Casablanca, garde son contrat français, logé sur place, tu coupes l’URSSAF. » Que faites-vous dans les 24 h ?",
      correction:
        "Vous ne coupez pas l’URSSAF. Vous ouvrez un ticket responsable / juriste : détachement ou expatriation, affiliation, formulaires, impôt, avantages en nature logement, DSN. Vous notez la date de départ prévue. Vous n’émettez pas de bulletin « sans cotisations » en attendant. LIMITE : qualification internationale hors autonomie junior. Un silence de 18 mois serait un risque massif.",
    }),
    pack({
      title: "Rappels et régularisations rétroactives",
      description:
        "Corriger le passé par un calcul daté, pas par un net bricolé du mois courant.",
      minutes: 22,
      objectifs:
        "Vous savez qualifier un rappel, le rattacher à une période, mesurer l’impact charges et DSN, et ne pas réécrire l’histoire en silence.",
      theorie:
        "Un rappel est un élément dû au titre d’une période antérieure, versé maintenant : augmentation rétroactive, HS oubliées, prime validée tard, revalorisation SMIC non appliquée. Une régularisation peut aussi diminuer (trop-perçu — leçon suivante). Le principe : on identifie la période d’origine, la règle alors applicable (taux, plafond, SMIC de cette période), on calcule l’écart, on le verse ou le reprend selon le cadre, on déclare.\n\nJanvier 2026 n’applique pas les taux 2025 à un rappel 2026 de salaire de janvier. En revanche, un rappel au titre de décembre 2025 peut poser la question du rattachement (période d’emploi vs date de versement) : vous ne tranchez pas une subtilité d’assiette rétroactive seul. Vous documentez, vous appliquez la consigne du responsable / la doctrine BOSS-URSSAF relue. Le PMSS 4 005 € vaut pour les cotisations dues au titre des périodes d’activité à compter du 01/01/2026 (arrêté du 22 décembre 2025). Un rappel « au titre de 2025 » n’est pas l’occasion d’inventer un plafond.\n\nLes cotisations du rappel suivent en principe la nature de l’élément. Un « 200 € net rétro » sans charges est une faute. Le PAS s’applique selon les règles du versement. La DSN de régularisation n’est pas un second bulletin caché : elle suit le process net-entreprises du dossier, sous revue.\n\nUn rappel massif (toute une équipe, plusieurs mois) change le calendrier, la trésorerie, parfois les plafonds T2 / CET. Un junior prépare le tableau, il ne le lance pas la veille du SEPA sans visa.",
      methode:
        "Tableau : matricule, mois d’origine, élément, brut écart, hypothèses de taux de la période d’origine (sourcées), net estimé, PAS, DSN, visa. Communication au salarié avant le bulletin surprise. Comptabilité : mois de constat vs mois d’origine. Contrôle plafonds si le rappel fait franchir le PMSS du mois de versement — question à poser, pas à trancher au crayon.",
      noteText:
        "Limite : vous n’antidater pas un avenant pour « tout mettre en rappel », vous n’appliquez pas les taux 2026 à une période 2025 sans consigne, vous ne déposez pas une DSN de régularisation complexe seul.",
      exemple:
        "SMIC 12,02 € au 01/01/2026. Un temps partiel est resté à 11,90 €/h sur janvier. Le 10 février, constat. Ce n’est pas « 20 € en net en février ». C’est un rappel de brut d’heures × 0,12 €, cotisations janvier 2026, DSN, information du salarié, contrôle que février est déjà au 12,02. Cause racine : paramètre non mis à jour au 1er janvier.",
      extra: [
        code(`TABLEAU DE RAPPEL (extrait)

Matricule | Période origine | Élément        | Brut écart | Taux/plafond utilisés
S-12      | 2026-01         | SMIC horaire   | à calculer | SMIC 12,02 ; PMSS 4005
S-18      | 2025-12         | HS oubliées    | à calculer | barème 2025 à VÉRIFIER
                                                      | ne pas coller 2026 par réflexe

Colonne obligatoire : SOURCE (URSSAF, avenant, liste HS, BOSS).
Colonne : DSN régul (oui/non, qui dépose).
Colonne : mail salarié (date).`),
      ],
      erreurs:
        "Net forfaitaire. Oublier le PAS du rappel. Réécrire les bulletins PDF déjà remis sans trace. Mélanger 2025 et 2026 dans un seul taux. Lancer 40 rappels sans visa.",
      particuliers:
        "Salarié sorti : rappel quand même dû, solde complémentaire, DSN. Saisie sur salaire en cours : le rappel peut entrer dans l’assiette saisissable, alerter. Prescription : ne pas inventer un délai, demander au responsable si le passé est trop ancien.",
      exercice:
        "Augmentation +100 € brut mensuel décidée le 15 mars avec effet rétroactif au 1er janvier 2026 (avenant signé). Quels mois, quel calcul de principe, qui vise ?",
      correction:
        "Rappel de 100 € × mois de janvier et février déjà clôturés, plus application 100 € sur mars. Cotisations selon nature salaire, période 2026 (PMSS 4 005, taux 2026). PAS sur le versement. DSN selon process. Information des salariés. Visa responsable (masse, rétroactivité). Vous n’écrasez pas les PDF de janvier en secret : vous émettez un rappel tracé.",
    }),
    pack({
      title: "Saisies sur salaire : principes, barème à vérifier, reste à vivre",
      description:
        "L’employeur est tiers saisi ; le junior applique une méthode, il n’invente pas le barème 2026 en euros.",
      minutes: 24,
      objectifs:
        "Vous comprenez la fraction saisissable, le caractère impératif du reste à vivre, le rôle du tiers saisi, et vous savez où lire le barème sans le forger.",
      theorie:
        "Une saisie des rémunérations (et procédures voisines : paiement direct de pension alimentaire, avis à tiers détenteur / avis à tiers saisi selon les dispositifs en vigueur) oblige l’employeur à retenir une part du salaire et à la reverser au créancier ou à l’organisme désigné. Ce n’est pas une faveur au salarié, ni une punition de la paie. L’employeur est tiers saisi : s’il ne retient pas alors qu’il est régulièrement informé, il s’expose. Un junior ne « laisse passer » une saisie par sympathie.\n\nPrincipe légal : seule une fraction du salaire est saisissable. Cette fraction est progressive selon des tranches de rémunération, après un abattement lié aux personnes à charge selon les textes. Une somme reste insaisissable : le reste à vivre, calé sur un minimum (référence légale liée au RSA / socle d’insaisissabilité — vous relisez le texte en vigueur, vous n’inventez pas le montant 2026). Les pensions alimentaires bénéficient souvent d’un régime plus sévère pour le débiteur (possibilité de retenir davantage, selon le dispositif). Plusieurs créanciers : des règles de rang et de concours existent ; on ne « partage à l’amiable » au crayon.\n\nLe barème en euros (tranches) est un paramètre périodiquement révisé, publié (Service-Public / Légifrance / textes d’exécution). Il n’est pas dans rates-2026.json. Vous n’inventez donc aucun plafond en euros pour 2026 dans cette leçon. MÉTHODE : (1) qualifier l’acte (saisie, pension, avis) ; (2) vérifier qu’il est exécutoire et à jour (signification, mainlevée) ; (3) ouvrir le barème officiel de la date de paie ; (4) déterminer l’assiette saisissable selon le Code du travail / procédures civiles d’exécution (éléments de salaire concernés, déductions prévues) ; (5) appliquer tranches et insaisissable ; (6) contrôler que le net après saisie n’écrase pas le minimum légal ; (7) reverser, déclarer, tracer ; (8) confidentialité maximale.\n\nUn net négatif ou un net sous le minimum insaisissable est un signal d’alarme : on ne laisse pas partir le SEPA. Mutuelle, acompte, trop-perçu concurrent : ordre des retenues sous revue, pas un empilement sauvage.",
      methode:
        "Dès réception : classer l’acte, date, créancier, montant, type. Habilitation restreinte (pas un commentaire d’équipe). Ouvrir le barème de la période sur source officielle. Préparer le calcul, faire viser la première application. Paramétrer le logiciel seulement après visa. Chaque mois : nouvel acte ? mainlevée ? changement de net ? Recalcul. Fin : mainlevée au dossier, arrêt de la retenue.",
      noteText:
        "Limite junior : vous n’inventez pas les tranches en euros, vous n’accordez pas un « délai » au salarié contre l’acte, vous ne prévenez pas le manager du montant, vous ne confondez pas pension alimentaire et saisie ordinaire. Première saisie du portefeuille = binôme obligatoire. Barème 2026 inconnu du fichier de taux = lecture Service-Public / Légifrance le jour du calcul.",
      exemple:
        "PME. Acte de saisie reçu le 8 janvier 2026. Le junior applique 30 % du net « pour faire simple ». C’est illégal au regard du barème par tranches et de l’insaisissable. La bonne voie : acte au responsable, barème officiel janvier 2026 ouvert, calcul visé, information du salarié sur le principe (retenue, pas le récit de sa dette), reversement. Aucun euro de tranche n’est récité ici : ils se lisent.",
      extra: [
        code(`MÉTHODE SAISIE — JANVIER 2026 (SANS BARÈME INVENTÉ)

1. Nature de l'acte : saisie des rémunérations / pension / autre avis.
2. Validité : signification, dates, mainlevée ?
3. Assiette : relire les textes (pas « tout le net » par réflexe).
4. Barème des tranches : source officielle du jour (Légifrance / Service-Public).
   INTERDIT : recopier des euros d'un article de blog ou d'une année N-1.
5. Personnes à charge : pièces, selon texte.
6. Insaisissable / reste à vivre : texte en vigueur, montant LU, pas inventé.
7. Concours de créanciers : pas de partage amateur — responsable.
8. Bulletin : libellé discret, pas « dettes huissier » voyant.
9. Reversement et traces comptables.
10. Confidentialité : habilités seulement.

Si le barème 2026 n'est pas sous les yeux : NE PAS CALCULER, escalader.`),
      ],
      erreurs:
        "Pourcentage unique inventé. Empiler saisie + trop-perçu + mutuelle jusqu’à net zéro. Parler de la saisie en réunion. Ignorer une mainlevée. Appliquer un barème 2024 en 2026. Conseiller le salarié sur sa procédure (hors explication de la ligne).",
      particuliers:
        "Acompte déjà versé : l’assiette du mois change, recalcul. Rappel : peut augmenter la fraction. Démission en cours de saisie : information du créancier selon process, solde. Trop-perçu vs saisie : ordre, responsable. Pension alimentaire : régime propre, encore moins d’improvisation.",
      exercice:
        "Net avant saisie apparent 1 900 €, acte de saisie ordinaire, 1 personne à charge mentionnée. Quel calcul produisez-vous aujourd’hui si vous n’avez pas le barème 2026 imprimé ?",
      correction:
        "Aucun euro de retenue définitif. Vous classez l’acte, vous ouvrez Légifrance / Service-Public (barème de la date, insaisissable, personnes à charge), vous préparez le calcul, vous faites viser. Inventer une retenue de 300 € ou de 30 % serait une faute. Le chiffre 1 900 € n’est qu’un net de travail : l’assiette légale peut différer. Junior : méthode + verify, pas un barème maison.",
    }),
    pack({
      title: "Trop-perçus et variables : récupérer, geler, ne pas improviser",
      description:
        "Qualifier l’indu, le récupérer dans le cadre, et tenir les variables hors favoritisme.",
      minutes: 20,
      objectifs:
        "Vous distinguez trop-perçu, variable tardive et libéralité ; vous savez geler ; vous n’inventez pas une retenue.",
      theorie:
        "Le trop-perçu est un indu : salaire ou élément versé sans cause (absence non saisie, double paie, prime indue, mauvais taux). L’employeur a en principe le droit de récupérer, dans le respect des règles de retenue sur salaire et de l’information du salarié. On n’écrase pas un net. On n’attend pas six mois en silence. On n’« oublie » pas 2 000 € sans décision d’abandon habilitée (souvent direction / comptable, pas le junior).\n\nLes modalités (échelonnement, plafond de retenue) se lisent dans les textes et la jurisprudence de principe sur les retenues : vous ne fabriquez pas un échéancier punitif, vous proposez un échéancier raisonnable visé, surtout si le reste à vivre ou une saisie coexiste. La DSN et les cotisations déjà déclarées peuvent exiger une régularisation : sous revue.\n\nLes variables (primes, HS, commissions) n’existent en paie que validées avant gel, ou en exception visée, ou en rappel le mois suivant. Un junior qui « glisse une prime » après gel pour un ami et refuse la même au voisin crée une inégalité et un contentieux. Les commissions sur objectif : contrat et règlement, pas un mail du manager le 27. Les avantages en nature : évaluation selon BOSS / barèmes officiels, hypothèses de dossier si non sourcés, jamais un chiffre de convenance.\n\nGel : date, heure, conséquence. Exception : responsable paie, écrite, tracée. Post-gel : file de régularisation, pas un deuxième calcul clandestin.",
      methode:
        "Trop-perçu : constater, chiffrer brut/net/charges, informer, proposer modalité, viser, régulariser, DSN, compta. Variable : liste gelée, écarts = rappel M+1 ou exception. Contrôle d’égalité de traitement sur les primes discrétionnaires (signalement RH si favoritisme manifeste).",
      noteText:
        "Limite : abandon de créance, échéancier long, concours avec saisie, salarié sorti : responsable. Vous ne retenez pas « tout le net de février » pour solde d’un indu de 1 500 € sans cadre.",
      exemple:
        "Double virement accidentel 2 180 €. Le salarié a dépensé. Le junior qui recrédite intégralement le mois suivant laisse un net à zéro, éventuellement sous insaisissable, et un conflit. Le responsable cadre information, récupération échelonnée, éventuellement juridique si refus. La paie prépare les lignes, elle ne joue pas à la banque.",
      extra: [
        code(`VARIABLES ET INDU — DISCIPLINE DE CLÔTURE

GEL 18/01/2026 12h
- Listes HS / primes / absences figées
- Après : exception écrite responsable OU rappel février
- Interdit : prime d'un seul matricule « en douce »

TROP-PERÇU
- Information salarié
- Chiffrage
- Modalités visées (pas un filet à zéro improvisé)
- DSN / journal comptable
- Confidentialité (pas de commentaire d'équipe)`),
      ],
      erreurs:
        "Retenue surprise. Prime post-gel pour un ami. Abandon junior de 400 €. Oublier les charges du trop-perçu. Confondre variable contractuelle et libéralité du directeur du 24.",
      particuliers:
        "Salarié sorti : trop-perçu encore dû, relance, parfois juridique, pas un oubli. Décès : circuit succession, RH. Commission négative (« recovers ») : contrat, pas une saisie déguisée. Titres-restaurant indus : règle d’attribution, pas une faveur.",
      exercice:
        "Prime exceptionnelle 300 € validée le 19 janvier, gel le 18. Trop-perçu 60 € sur le même salarié (ticket indu). Que passe en janvier, que passe en février, qui décide une exception ?",
      correction:
        "Janvier : pas la prime (post-gel) sauf exception écrite du responsable paie. Le trop-perçu 60 € : pas une retenue improvisée le 19 si le calcul est déjà lancé sans consigne ; dossier de récupération visé, souvent février, avec information. On n’« annule » pas la prime et le trop-perçu entre eux sans qualification. Deux objets, deux règles. L’exception de gel n’appartient qu’au responsable.",
    }),
    quizLesson({
      title: "Quiz — Cas complexes",
      description: "Établissements, CCN, statuts, stage, mobilité, rappels, saisies, variables.",
      passing_score: 70,
      questions: [
        q({
          question: "Le directeur demande de tout déclarer sur le SIRET au taux AT le plus bas. Vous :",
          options: [
            "A. Exécutez pour réduire les charges",
            "B. Refusez : l’AT suit la notification de l’établissement réel ; vous alertez",
            "C. Faites une moyenne des taux",
            "D. Appliquez 1,50 % national",
          ],
          correct: 1,
          explanation:
            "Le taux AT n’est pas un levier d’optimisation junior. 1,50 % n’est qu’une hypothèse pédagogique ailleurs dans le parcours, pas un taux national.",
        }),
        q({
          question: "Heures au-delà de la durée d’un contrat temps partiel, dans les limites :",
          options: [
            "A. Heures supplémentaires 25 % / 50 % par réflexe 35 h",
            "B. Heures complémentaires, régime propre (L. 3123-9 s.)",
            "C. Forfait jours automatique",
            "D. Non payées si le brut mensuel « a l’air suffisant »",
          ],
          correct: 1,
          explanation:
            "Complémentaires ≠ supplémentaires. Le réflexe 35 h est une erreur classique.",
        }),
        q({
          question: "Gratification minimale de stage 2026 en euros dans cette formation :",
          options: [
            "A. 4,05 €/h, chiffre à mémoriser ici",
            "B. Non fournie dans rates-2026.json : on lit URSSAF / Service-Public, on utilise le plafond horaire 30 € seulement si la formule officielle s’y réfère",
            "C. Égale au SMIC 12,02 €",
            "D. Toujours 600 € par mois",
          ],
          correct: 1,
          explanation:
            "Consigne du parcours : ne pas inventer le minimum 2026. Méthode + sources. Le plafond horaire 30 € est un ingrédient sourcé, pas le résultat.",
        }),
        q({
          question: "Détachement / expatriation : limite junior ?",
          options: [
            "A. Le junior coupe l’URSSAF sur mail du directeur",
            "B. Escalade obligatoire : pas de qualification d’affiliation internationale ni d’exonération inventée",
            "C. Il applique le bulletin français standard dans tous les cas",
            "D. Il paramètre un taux « expat » de 10 %",
          ],
          correct: 1,
          explanation:
            "Stop list. Un bulletin standard ou une exonération bricolée sont deux fautes symétriques.",
        }),
        q({
          question: "Barème de saisie sur salaire 2026 en euros dans rates-2026.json :",
          options: [
            "A. Oui, 152,25 € de reste à vivre à mémoriser",
            "B. Absent : méthode + lecture Légifrance / Service-Public ; on n’invente pas les tranches",
            "C. 30 % du net pour tous",
            "D. Tout le net est saisissable",
          ],
          correct: 1,
          explanation:
            "Principes (fraction, insaisissable, tiers saisi) oui ; euros du barème 2026 non inventés.",
        }),
        q({
          question: "APEC en 2026 s’applique :",
          options: [
            "A. À tous les salariés pour faire propre",
            "B. Aux cadres, aux taux du fichier (0,024 % s / 0,036 % p), si le statut est établi",
            "C. Uniquement aux forfaits jours",
            "D. Jamais, c’est supprimé",
          ],
          correct: 1,
          explanation:
            "Statut cadre avéré + taux rates-2026.json. Pas un cadeau paramétrique.",
        }),
        q({
          question: "Un rappel au titre de janvier 2026 versé en mars :",
          options: [
            "A. Se verse en net sans charges",
            "B. Suit la nature de l’élément, avec cotisations, PAS, DSN selon process, information du salarié",
            "C. S’impute sur le PMSS 2025",
            "D. Se cache dans une prime exceptionnelle non déclarée",
          ],
          correct: 1,
          explanation:
            "Période d’activité 2026 : cadre 2026 (PMSS 4 005 notamment). Pas de net magique.",
        }),
        q({
          question: "Transposer le maintien maladie du dossier A sur le dossier B (autre IDCC) :",
          options: [
            "A. Est efficace en cabinet",
            "B. Est une faute : on lit la CCN du dossier B",
            "C. Est obligatoire pour l’égalité de traitement du cabinet",
            "D. Remplace le BOSS",
          ],
          correct: 1,
          explanation:
            "Multi-CCN : zéro transposition. L’égalité de traitement ne s’apprécie pas entre deux employeurs clients.",
        }),
        q({
          question: "Maladie salariale d’un salarié du régime général non domicilié fiscalement en France, barème 2026 :",
          options: [
            "A. 0 % comme tout le monde",
            "B. 5,50 % selon le fichier de taux, si ce cas est établi — on ne le présume pas",
            "C. 13 % (taux patronal)",
            "D. 20 %",
          ],
          correct: 1,
          explanation:
            "Le 0 % suppose le cas domicile France. Le 5,50 % n’est pas un stéréotype de nationalité. Le 13 % est patronal maladie taux plein.",
        }),
        q({
          question: "Prime validée le 19, gel le 18 :",
          options: [
            "A. Le junior la glisse pour rendre service",
            "B. Report M+1 ou exception écrite du responsable paie, pas une saisie clandestine",
            "C. Paiement en tickets-restaurant",
            "D. Compensation d’un trop-perçu d’un collègue",
          ],
          correct: 1,
          explanation:
            "Discipline de gel. Ni faveur, ni compensation croisée.",
        }),
      ],
    }),
  ],
};
