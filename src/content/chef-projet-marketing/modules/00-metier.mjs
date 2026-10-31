import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 0,
  title: "Comprendre le métier et le cycle de vie d'un projet",
  description:
    "Situer le chef de projet marketing et développement parmi les autres métiers, reconnaître les projets que l'on pilote vraiment, et parcourir le cycle de vie de l'opportunité à la mesure — cas Banque Horizon.",
  lessons: [
    pack({
      title: "Le rôle du chef de projet marketing et développement",
      description:
        "Distinguer chef de projet, chef de produit, digital, marketing ops et marketing stratégique, et poser les limites de décision.",
      minutes: 6,
      objectifs:
        "À la fin de cette leçon, vous savez définir le métier par le résultat commercial daté que vous pilotez, le distinguer du chef de produit, du digital, du marketing ops et du marketing stratégique, et nommer ce que vous ne validez jamais à la place de la conformité, du juridique ou des risques.",
      theorie:
        "Le chef de projet marketing et développement pilote un résultat commercial daté : une offre lancée, un parcours souscrit, un partenariat activé, un outil adopté. Il n'est ni le propriétaire du produit dans la durée, ni le décideur unique, ni le garant réglementaire.\n\nLe chef de produit porte la vision et le backlog dans la durée. Le chef de projet digital orchestre surtout un livrable technique (site, application, tunnel). Le marketing ops industrialise outils, données et campagnes. Le marketing stratégique pose le positionnement et l'allocation des moyens. Vous reliez ces métiers : intention en plan, arbitrages visibles, livrable dans un triangle délai–budget–périmètre.\n\nLes limites de décision s'écrivent. Vous proposez cadrage, planning, risques et go/no-go. Vous ne validez pas une communication au sens de l'ACPR, vous ne signez pas un avis conformité, vous n'engagez pas l'entreprise à la place du juridique. Conformité, juridique, risques et finance tranchent dans leur champ. Votre métier est de les faire parler assez tôt pour que le projet ne se brise pas à J-15.\n\nÀ Banque Horizon (banque de détail fictive), l'offre 25-35 ans n'est pas une campagne : c'est offre, parcours, distribution et preuves. Réécrire le positionnement sans mandat, bloquer « au nom de la conformité » sans avis, ou livrer un écran sans offre vendable, ce n'est plus du pilotage.",
      methode:
        "Dès qu'un sujet vous est confié, écrivez quatre lignes avant toute réunion :\n1. Quel résultat commercial daté (pas « améliorer l'image ») ?\n2. Qui est le sponsor, qui décide le go/no-go, qui valide le réglementaire ?\n3. Qu'est-ce qui est déjà décidé (cible, budget, calendrier) et qu'est-ce qui ne l'est pas ?\n4. Quel est votre mandat : cadrer, piloter, livrer — pas inventer l'offre, pas signer l'avis conformité.\n\nEnsuite, vous cartographiez les voisins : produit, digital, marketing ops, stratégique, commercial, IT, finance, risques, conformité, juridique, réseaux. Vous ne les animez pas tous de la même façon. Vous les faites parler au bon moment, avec une question précise, pas un « on vous tient au courant ».",
      noteText:
        "Rappel de posture : le chef de projet n'est pas le valideur réglementaire. ACPR, conformité, juridique et risques tranchent dans leur champ. Votre valeur est d'anticiper leurs questions, pas de les remplacer.",
      exemple:
        "La directrice marketing d'Horizon envoie : « Il nous faut une offre 25-35 ans pour Q2, les néobanques nous prennent nos clients, lance une campagne Instagram et un nouveau livret. » Sans rôle clair, un junior commande des visuels, un autre ouvre un ticket IT, un troisième promet un livret au réseau. Trois mois plus tard : une campagne sans offre éligible, un livret bloqué en conformité, un réseau mécontent.\n\nLe même brief, tenu : vous reformulez le résultat (« souscriptions nettes 25-35 sur une offre cadrée, dans six mois, budget limité »), vous séparez ce qui relève du produit, du parcours, de la communication et de l'avis conformité, et vous demandez un sponsor et un comité d'arbitrage avant d'engager l'IT.",
      erreurs:
        "Accepter le titre « chef de projet » comme un droit de tout décider. Confondre urgence du sponsor et mandat écrit. « Valider » une pub ou une offre parce que personne d'autre n'était en salle. Se prendre pour le chef de produit et réécrire le positionnement. Se retrancher derrière « ce n'est pas moi, c'est la conformité » sans avoir jamais posé la question à temps.",
      particuliers:
        "Dans une PME, vous pouvez porter à la fois le cadrage et une partie du digital : le cumul d'activités n'élargit pas vos droits réglementaires. Dans un groupe bancaire, le RACI est dense : votre métier est de le rendre lisible, pas de le contourner. En agence ou cabinet, le client reste le décideur ; vous livrez une méthode et des options, pas une signature à sa place.",
      exercice:
        "La CMO d'Horizon écrit : « Tu es chef de projet, donc tu valides le message, le tarif et le parcours, on n'a pas le temps de passer en conformité. » En cinq lignes : (1) ce que vous acceptez de piloter ; (2) ce que vous refusez de valider ; (3) à qui vous parlez dans les 48 heures.",
      correction:
        "1. Vous pilotez le cadrage, le calendrier, l'alignement des métiers et la préparation du comité : message, tarif et parcours sont des objets du projet, pas des décisions que vous prenez seul.\n2. Vous ne validez ni le message au sens de l'ACPR, ni le tarif (finance / produit), ni l'éligibilité de l'offre (conformité, juridique, risques). L'absence de créneau n'est pas un mandat.\n3. Dans les 48 heures : le sponsor (CMO) pour reformuler le mandat ; conformité et juridique pour un avis de principe sur le type d'offre ; produit et finance pour le tarif ; digital/IT pour la faisabilité du parcours. Vous tracez la demande et le refus de « valider sans filière ».",
    }),
    pack({
      title: "Les projets que vous pilotez vraiment",
      description:
        "Reconnaître un projet marketing et développement : offre, assurance, partenariat, parcours, outil commercial, distribution, expérience client.",
      minutes: 5,
      objectifs:
        "Vous savez nommer les familles de projets que pilote un chef de projet marketing et développement, et vous savez dire, pour chacune, quel résultat commercial se mesure — au-delà d'une « campagne » ou d'un « site ». Vous distinguez un projet d'une tâche récurrente.",
      theorie:
        "On vous appellera chef de projet pour des objets très différents. Ce n'est pas « tout ce qui n'est pas le quotidien ». Un projet a un début, une fin, un résultat, des parties prenantes, un budget. Une campagne e-mail hebdomadaire n'en est pas un. Un lancement d'offre, si.\n\nEn banque et services financiers, les projets typiques se regroupent. Une offre bancaire (compte, livret, crédit) : vous pilotez le lancement, pas la vie du produit. Une offre d'assurance (protection, habitation, affinitaire) : mêmes réflexes, avec un régime d'information client souvent plus exigeant. Un partenariat (néobanque, enseigne, école, fintech) : le projet est un contrat + un parcours + une distribution, pas un logo. Un parcours de souscription : le résultat est un taux de complétion et un délai, pas un « nouveau tunnel ». Un outil commercial (argumentaire, configurateur, tablette agence) : le résultat est l'adoption par le réseau, pas la mise en ligne. Un projet de distribution (ouverture d'un canal, refonte du parcours agence / mobile) change qui vend et comment. Un projet d'expérience client (CX) traite un irritant mesurable — abandon, délai, incompréhension — pas « l'amour de la marque ».\n\nCes familles se croisent. L'offre jeunes actifs d'Horizon est à la fois offre, parcours, distribution et CX. Si vous ne nommez qu'une famille, vous oublierez une partie prenante et un livrable.",
      methode:
        "Face à une demande, classez-la en une minute :\n- Est-ce un projet (début, fin, résultat) ou du run (campagne récurrente, reporting) ?\n- Quelle famille dominante : offre, assurance, partenariat, parcours, outil commercial, distribution, CX ?\n- Quel résultat se mesure 90 jours après le lancement ?\n- Qui devra changer son métier (réseau, IT, conformité, partenaire) ?\n- Qu'est-ce qui n'est PAS dans le projet (la refonte de toute la banque, le rebranding, le plan média annuel) ?\nVous proposez ensuite un nom de projet en une phrase : verbe + objet + cible + horizon. « Lancer l'offre 25-35 ans sur mobile et en agence, souscription en moins de 8 minutes, d'ici six mois » est un projet. « Booster les jeunes » n'en est pas un.",
      noteText:
        "Les exemples d'enseignes concurrentes, de parts de marché et de délais cités dans ce parcours sont fictifs et pédagogiques, sauf mention contraire. Ils servent à s'entraîner, pas à décrire un acteur réel.",
      exemple:
        "Trois demandes arrivent le même lundi à Horizon. A : « On refait la plaquette du livret A. » B : « Un comparateur veut afficher notre compte 25-35 et envoyer des leads. » C : « Les conseillers n'arrivent pas à expliquer le découvert sur tablette. » A est du run (outil commercial mineur, pas un projet). B est un partenariat + un parcours de souscription : contrat, éligibilité, leads, conformité. C est un outil commercial + CX : argumentaire, maquette, formation réseau. Traiter les trois comme « trois campagnes » produit trois échecs différents.",
      extra: [
        code(`FAMILLES DE PROJETS — repère (Banque Horizon, fictif)
Famille              Résultat 90 jours              Parties prenantes typiques
Offre bancaire       Souscriptions nettes, mix      Produit, finance, conformité, digital, réseaux
Assurance            Contrats, taux d'équipement    Produit assurance, juridique, réseaux
Partenariat          Leads / ventes via partenaire  Juridique, digital, partenaire, risques
Parcours souscription Taux de complétion, délai     Digital, IT, CX, conformité, risques
Outil commercial     Adoption réseau, qualité RDV   Commercial, formation, digital
Distribution         Mix canal, productivité        Réseaux, digital, immobilier/IT
CX                   Irritant mesuré en baisse      CX, digital, opérations, relation client

Une demande peut cumuler deux ou trois familles. Nommez-les, ne les diluez pas.`),
      ],
      erreurs:
        "Appeler projet toute tâche un peu nouvelle. Oublier le réseau dans un « projet digital ». Traiter un partenariat comme une pub. Mesurer le succès d'un outil commercial au nombre de slides, pas à l'usage. Promettre une offre d'assurance « comme un compte » sans filière dédiée.",
      particuliers:
        "En B2B (offre entreprises, convention de partenariat), le cycle de vente allonge le projet : le cadrage doit inclure qui signe chez le client. En distribution physique, un outil non formé est un projet mort. En CX, un irritant « ressenti en COMEX » n'est pas encore un projet : il faut un fait (taux d'abandon, délai, réclamation).",
      exercice:
        "Classez ces quatre demandes Horizon : (1) partenariat avec une école de commerce pour un compte étudiant puis offre 25-35 ; (2) envoi mensuel de la newsletter ; (3) réduction de 18 à 8 minutes du parcours d'ouverture de compte ; (4) nouveau script d'entretien pour les conseillers sur le découvert. Pour chacune : projet ou run ; famille ; résultat mesurable.",
      correction:
        "1. Projet — partenariat + offre + parcours. Résultat : comptes ouverts via l'école, puis bascule vers l'offre 25-35, avec contrat et avis conformité. 2. Run — communication récurrente, pas un projet. 3. Projet — parcours de souscription (+ CX). Résultat : délai médian, taux de complétion, abandon par étape. 4. Projet léger — outil commercial. Résultat : usage du script, qualité des RDV, pas « le PDF est prêt ». Un junior qui traite 2 et 4 comme le même objet (un document) manque le critère d'adoption.",
    }),
    pack({
      title: "Le cycle de vie d'un projet : de l'opportunité à la mesure",
      description:
        "Parcourir opportunité, faisabilité, business case, arbitrage, cadrage, réalisation, déploiement et mesure — modes linéaire, itératif et hybride.",
      minutes: 5,
      objectifs:
        "Vous savez énoncer les huit étapes du cycle de vie, expliquer ce que chacune produit, et choisir un mode de conduite (linéaire, itératif, hybride) sans en faire une religion. Vous situez où se trouve aujourd'hui le projet Horizon.",
      theorie:
        "Un projet marketing et développement n'est pas une suite de réunions. C'est un enchaînement d'états, chacun avec un livrable qui autorise — ou non — l'étape suivante.\n\nL'opportunité nomme un signal et une hypothèse de valeur (« les souscriptions 25-35 baissent, un parcours plus simple pourrait les reprendre »). La faisabilité teste si l'on peut : technique, réglementaire, commerciale, RH. Le business case chiffre coûts, recettes, risques et alternatives. L'arbitrage est un go, un no-go ou un go conditionnel en comité : ce n'est pas un « on avance et on verra ». Le cadrage fige périmètre, jalons, rôles, budget et critères de succès. La réalisation exécute (lots ou sprints), avec revues et gestion des écarts. Le déploiement bascule vers les utilisateurs réels : formation, communication, hypercare. La mesure compare le réel aux critères : adoption, conversion, CAC, qualité — et décide de corriger, d'industrialiser ou d'arrêter.\n\nTrois modes existent. Linéaire : les étapes s'enchaînent, le cadrage gèle tôt ; utile quand le réglementaire impose un dossier figé. Itératif : on apprend par lots (MVP parcours, puis offre, puis partenariat) ; utile quand l'usage est incertain. Hybride : cadrage et conformité plutôt linéaires, parcours digital en itérations. En banque, l'hybride est souvent le réel. Le mode n'absout pas l'arbitrage : un MVP n'est pas un droit de dépenser sans go.",
      methode:
        "Pour tout nouveau sujet, posez trois questions avant de « lancer des ateliers » :\n1. À quelle étape sommes-nous vraiment (opportunité, ou déjà un cadrage improvisé) ?\n2. Quel livrable manque pour prétendre passer à l'étape suivante ?\n3. Quel mode : linéaire si le dossier réglementaire domine ; itératif si l'usage est le risque principal ; hybride si les deux.\n\nVous affichez ensuite le cycle en une page, avec un statut (fait / en cours / bloqué) et un propriétaire par étape. Vous n'inventez pas d'étape « créa » au milieu : la communication est un lot de la réalisation ou du déploiement, pas un cycle parallèle secret.",
      noteText:
        "Le business case et l'arbitrage font l'objet de modules dédiés. Ici, vous apprenez seulement à ne pas les sauter. Un planning de réalisation sans go est un risque, pas de l'agilité.",
      exemple:
        "Horizon veut « l'offre 25-35 en six mois ». Un junior part directement en réalisation : maquettes, brief agence, tickets IT. La faisabilité réglementaire arrive à J-20 : pièces d'identité, devoir de conseil, publicité. Le comité découvre le coût réel. On recule de quatre mois.\n\nLe même projet, tenu : opportunité documentée (baisse des souscriptions, CAC élevé, parcours à 18 minutes) ; faisabilité (IT, conformité, réseau) ; business case ; arbitrage go conditionnel (budget plafonné, MVP parcours d'abord) ; cadrage ; réalisation itérative du tunnel ; déploiement réseaux + mobile ; mesure à 30, 60, 90 jours. Le délai de six mois devient un cadrage honnête, pas un slogan.",
      extra: [
        code(`CYCLE DE VIE — repère pédagogique (Banque Horizon, fictif)

1. Opportunité      signal + hypothèse de valeur
2. Faisabilité      peut-on ? (IT, réglementaire, commercial, RH)
3. Business case    coûts, recettes, risques, alternatives
4. Arbitrage        go / no-go / go conditionnel
5. Cadrage          périmètre, jalons, RACI, budget, succès
6. Réalisation      lots ou sprints, revues, écarts
7. Déploiement      formation, bascule, communication, hypercare
8. Mesure           adoption, conversion, CAC, qualité, suite

Linéaire  : étapes dans l'ordre, cadrage gelé tôt.
Itératif  : lots qui apprennent (MVP puis enrichissement).
Hybride   : dossier et conformité plutôt linéaires ; parcours digital itératif.
En banque, l'hybride est souvent le réel. Un MVP n'autorise pas à sauter l'arbitrage.`),
      ],
      erreurs:
        "Partir en réalisation parce que « le COMEX a dit six mois ». Confondre un atelier de cadrage avec un go. Appeler « agile » l'absence de business case. Mesurer uniquement le respect du planning, pas l'effet commercial. Oublier le déploiement : un parcours en production non formé au réseau est un projet inachevé.",
      particuliers:
        "Un partenariat impose souvent un linéaire juridique (contrat) et un itératif d'intégration technique. Une refonte CX purement digitale peut être itérative, mais l'information client et la publicité restent soumises à un avis. Un projet arrêté après un no-go n'est pas un échec personnel : c'est le cycle qui a fonctionné.",
      exercice:
        "Projet fictif Banque Horizon — offre jeunes actifs 25-35 ans, lancement visé 6 mois, budget limité, concurrence néobanques, souscriptions en baisse, parcours complexe, CAC élevé. Équipes : marketing, commercial, digital, IT, finance, risques, conformité, juridique, réseaux.\n\nLivrez :\n(1) les huit étapes du cycle, avec pour chacune UN livrable concret ;\n(2) les parties prenantes à embarquer à l'opportunité, au cadrage et au déploiement (pas les mêmes) ;\n(3) le mode de conduite que vous proposez (linéaire, itératif ou hybride) et pourquoi ;\n(4) ce que vous refusez de faire dès la semaine 1.",
      correction:
        "1. Livrables types. Opportunité : note d'une page (signal, hypothèse, cible 25-35). Faisabilité : avis IT + conformité de principe + capacité réseau. Business case : coûts, recettes, risques, alternatives (ne rien faire, partenariat, seul parcours). Arbitrage : décision go/no-go/conditionnel datée. Cadrage : périmètre, hors-périmètre, jalons, RACI, budget, critères (délai souscription, conversion, CAC). Réalisation : lots (MVP parcours mobile, offre, outil conseiller). Déploiement : kit réseau, bascule, hypercare. Mesure : tableau 30/60/90 jours.\n2. Opportunité : marketing, digital, un sponsor, un éclairage finance. Cadrage : toutes les filières (y compris risques, conformité, juridique, IT, réseaux) pour figer ce qui engage. Déploiement : réseaux et relation client en premier, digital/IT en soutien, communication validée — pas un e-mail surprise aux conseillers.\n3. Mode hybride : le dossier d'offre et l'avis conformité restent plutôt linéaires ; le parcours de souscription s'itère (MVP délai, puis pièces, puis avantages). Un linéaire pur arriverait trop tard sur l'usage ; un itératif pur ferait construire avant le go.\n4. Semaine 1 : vous ne briefez pas une agence créa, vous ne promettez pas un tarif, vous ne « validez » pas un message, vous n'ouvrez pas tout le backlog IT. Vous documentez l'opportunité et vous calendriez faisabilité et comité.",
    }),
    quizLesson({
      title: "Quiz — Métier et cycle de vie d'un projet",
      description: "Vérifier que vous situez le métier, les familles de projets et le cycle de vie.",
      passing_score: 70,
      minutes: 4,
      questions: [
        q({
          question:
            "Quelle phrase décrit le mieux le chef de projet marketing et développement, par rapport au chef de produit ?",
          options: [
            "A. Il possède le backlog du produit dans la durée et décide du positionnement",
            "B. Il pilote un résultat commercial daté (lancement, parcours, partenariat, outil) dans un triangle délai–budget–périmètre",
            "C. Il signe les avis conformité et les communications au nom de l'ACPR",
            "D. Il remplace le marketing stratégique lorsque le COMEX est pressé",
          ],
          correct: 1,
          explanation:
            "Le chef de produit porte le produit dans la durée. Le chef de projet pilote un résultat daté. Il ne signe pas l'avis réglementaire et ne se substitue pas à la stratégie.",
        }),
        q({
          question:
            "La CMO vous demande de « valider le message et le tarif, on n'a pas le temps de passer en conformité ». Que faites-vous ?",
          options: [
            "A. Vous validez, le titre de chef de projet vous y autorise",
            "B. Vous validez le message mais pas le tarif",
            "C. Vous refusez de valider à la place de la conformité, du juridique et de la finance, et vous organisez leurs avis",
            "D. Vous bloquez tout le projet jusqu'à l'année suivante",
          ],
          correct: 2,
          explanation:
            "Le chef de projet n'est pas le valideur réglementaire ni le décideur tarifaire. L'urgence n'est pas un mandat. Vous organisez les avis, vous ne les inventez pas. Bloquer un an n'est pas une méthode.",
        }),
        q({
          question:
            "Parmi ces demandes, laquelle est un projet de parcours de souscription plutôt qu'une tâche de run ?",
          options: [
            "A. L'envoi mensuel de la newsletter Horizon",
            "B. La mise à jour d'un tarif déjà décidé, sans changement de parcours",
            "C. Réduire l'ouverture de compte de 18 à 8 minutes, avec un taux de complétion cible",
            "D. Répondre à une réclamation client isolée",
          ],
          correct: 2,
          explanation:
            "Un projet a un début, une fin et un résultat mesurable. Le parcours d'ouverture est un projet. Newsletter, MAJ tarif mineure et réclamation isolée relèvent du run ou de l'opérationnel.",
        }),
        q({
          question: "Dans le cycle de vie enseigné ici, que doit produire l'arbitrage avant le cadrage de réalisation ?",
          options: [
            "A. Un moodboard et un brief agence",
            "B. Un go, un no-go ou un go conditionnel, sur la base d'un business case",
            "C. La formation complète du réseau",
            "D. Le paramétrage IT de toute l'offre, pour « gagner du temps »",
          ],
          correct: 1,
          explanation:
            "L'arbitrage décide. Le cadrage fige ensuite le périmètre. Créa, formation et paramétrage IT complet avant le go sont des fuites en réalisation.",
        }),
        q({
          question:
            "Banque Horizon doit lancer une offre 25-35 ans en six mois, avec un parcours digital incertain et un dossier réglementaire. Quel mode de conduite est le plus cohérent ?",
          options: [
            "A. Uniquement linéaire : tout geler, y compris les écrans, avant le premier test d'usage",
            "B. Uniquement itératif : commencer les sprints sans business case, « c'est agile »",
            "C. Hybride : avis et dossier d'offre plutôt linéaires ; parcours de souscription en itérations après un go",
            "D. Pas de cycle : livrer une campagne Instagram et ajuster ensuite",
          ],
          correct: 2,
          explanation:
            "En banque, l'hybride est souvent le réel : le réglementaire ne s'itère pas comme un écran, mais l'usage du parcours s'apprend. L'agilité n'autorise pas à sauter l'arbitrage. Une campagne n'est pas un cycle de projet.",
        }),
      ],
    }),
  ],
};
