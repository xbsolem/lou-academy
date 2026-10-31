import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 7,
  title: "Mise en marché",
  description:
    "Préparer le go-to-market, vérifier la cohérence de l'offre, planifier le déploiement, accompagner le réseau et tenir un go / no-go de lancement.",
  lessons: [
    pack({
      title: "Concevoir le go-to-market",
      description:
        "Relier cible, promesse, canaux, calendrier et run : le go-to-market n'est pas un jour J, c'est un dispositif.",
      minutes: 5,
      objectifs:
        "Vous savez définir un go-to-market comme l'alignement entre l'offre, les canaux, le calendrier et le run opérationnel. Vous distinguez lancement interne, mise à disposition réseau et campagne publique.",
      theorie:
        "Le go-to-market est le dispositif qui permet à une offre d'être réellement vendue et servie : qui on vise, quelle promesse on tient, par quels canaux on distribue, dans quel ordre on active, avec quelles preuves opérationnelles. Ce n'est pas une soirée de lancement, ni une date dans un planning marketing. Une campagne brillante vers un parcours cassé, ou un outil prêt que le réseau ignore, n'est pas un go-to-market. C'est une dépense.\n\nEn banque et en assurance, le GTM a une contrainte supplémentaire : la promesse publique doit coller au produit réel et au cadre d'information du client. « Compte ouvert en 8 minutes » n'est un GTM que si le parcours, les justificatifs, le back-office et le SAV le permettent. Chez Banque Horizon — banque fictive —, l'offre jeunes actifs 25-35 ans n'est pas « lancée » tant que le conseiller, le parcours web, le tarif et le message n'ont pas la même date de vérité.\n\nTrois moments se distinguent. La mise à disposition interne (l'offre existe dans les systèmes). L'activation du réseau (les gens savent vendre et servir). L'exposition publique (campagne, relations presse, partenaires). Les inverser, c'est exposer une promesse que l'entreprise ne tient pas. Le chef de projet relie ces trois moments. Il ne remplace pas le directeur marketing sur le mix, ni la conformité sur les messages.",
      methode:
        "Rédigez une note GTM d'une à deux pages, pas un roman.\n1. Cible et moment de vie (ce que le cadrage a déjà figé).\n2. Promesse tenable, en une phrase, alignée sur le lot 1 réel.\n3. Canaux : web, agence, courtier, partenaire enseigne, centre de contacts — lesquels au lot 1, lesquels plus tard.\n4. Séquence : pilote, montée en charge, campagne. Dates liées à la recette, pas à un souhait.\n5. Preuves de run : ouverture de dossier, incident, réclamation, reporting.\n6. Conditions de go public : ce qui doit être vrai avant le premier euro média.\nFaites relire marketing, réseau, ops, IT et conformité. Les désaccords maintenant coûtent moins cher qu'un lancement incohérent.",
      noteText:
        "Annoncer une date au réseau ou à la presse avant le go / no-go revient à décider sans le dire. Le chef de projet protège la séquence : interne, puis réseau, puis public — sauf stratégie de teaser explicitement arbitrée, et encore conforme.",
      exemple:
        "Banque Horizon prévoit une campagne nationale le 2 juin. Le parcours lot 1 n'est recetté que dans 12 agences pilotes. Le GTM sérieux est : 2 juin = ouverture pilote et formation vague 1 ; campagne régionale limitée ; nationale quand le taux d'incidents du pilote est sous le seuil et que 80 % des conseillers vague 1 sont formés. Inverser — TV puis formation — produit des rendez-vous en agence sur un script que personne n'a. En distribution, un assureur qui achète une tête de gondole avant que le vendeur sache ouvrir le contrat fait la même erreur, avec un calendrier enseigne encore moins souple.",
      erreurs:
        "Confondre GTM et plan média. Fixer le jour J sur un comité de mars sans recette. Activer tous les canaux le même matin « pour l'effet waouh ». Laisser le partenaire de distribution communiquer avant le réseau interne. Oublier le run (SAV, réclamations, horaires). Faire du teaser public sur une fonctionnalité encore dans le lot 2.",
      particuliers:
        "Offre réglementée (crédit, épargne, assurance) : le GTM inclut les documents d'information et le devoir de conseil, pas seulement le visuel. B2B : le GTM peut être une force commerciale et un onboarding, sans campagne grand public. Partenariat enseigne : le GTM du distributeur (catalogue, formation vendeurs, saisonnalité) s'impose souvent au vôtre. Soft launch vs big bang : le big bang n'est rationnel que si le réseau, l'outil et le run tiennent la charge le même jour — rare pour un premier outil de souscription.",
      exercice:
        "Le sponsor de Banque Horizon veut « un vrai lancement » : campagne, 80 agences, partenaires, le même lundi. Le parcours vient d'être recetté en préprod. Listez ce que vous séquencez, et ce que vous refusez de mettre le même lundi.",
      correction:
        "Vous séquencez : recette métier en conditions réelles, formation d'une vague pilote, ouverture de l'offre dans les systèmes du pilote, mesure d'incidents, puis extension réseau, puis campagne de masse. Le même lundi, vous refusez d'empiler campagne nationale, 80 agences non formées et partenaires non briefés. Vous proposez un lundi de mise à disposition pilote, pas un lundi de promesse publique. Si le sponsor exige le big bang, vous exigez en retour les preuves (recette, formation, run) et un no-go possible jusqu'à J-3. Sans preuves, ce n'est plus un GTM, c'est un pari.",
    }),
    pack({
      title: "Vérifier la cohérence de l'offre",
      description:
        "Aligner besoin, valeur, fonctionnalités, prix, parcours, distribution, communication, promesse, opérations et cadre réglementaire.",
      minutes: 5,
      objectifs:
        "Vous savez auditer une offre sur dix dimensions et détecter une rupture de cohérence avant le lancement, en banque comme en assurance.",
      theorie:
        "Une offre n'est pas une liste de fonctionnalités. C'est un système. Si une pièce dit une chose et la suivante une autre, le client, le conseiller et le contrôleur voient trois produits. Le chef de projet n'invente pas l'offre ; il vérifie qu'elle tient debout avant qu'on la promette. Dix dimensions suffisent à un audit de cohérence : le besoin (qui, quel usage), la valeur (pourquoi celle-ci plutôt qu'une autre), les fonctionnalités du lot 1, le prix et les frais, le parcours de souscription et d'usage, la distribution, la communication, la promesse, les opérations (back-office, SAV, sinistre ou incident), le cadre réglementaire.\n\nLa rupture la plus fréquente, en banque et en assurance, se joue entre la promesse et le parcours. « Souscription en 8 minutes, 100 % digital » ne survit pas à trois justificatifs, un appel de recueil du devoir de conseil, et un délai de rétractation mal expliqué. Ce n'est pas « le réglementaire qui casse le marketing » : c'est l'offre qui a été racontée trop tôt. Autre rupture classique : un prix d'appel agressif, une distribution en agence qui n'a aucun intérêt à le vendre, une pub nationale qui arrive avant que l'outil ne soit dans le réseau.\n\nL'audit de cohérence se fait sur le lot 1 réel, pas sur la roadmap. Ce que vous ne livrez pas encore ne doit pas figurer dans la promesse. Les exemples chiffrés et nominatifs de cette leçon sont fictifs.",
      methode:
        "Tenez une grille à dix lignes, une séance, des preuves, pas des intentions.\n1. Besoin : phrase cible, moment de vie.\n2. Valeur : bénéfice client vs alternative (néobanque, concurrent, ne rien faire).\n3. Fonctionnalités : lot 1 listé, hors-lot explicite.\n4. Prix : tarif, frais, conditions, qui a validé.\n5. Parcours : happy path chronométré, deux incidents testés.\n6. Distribution : qui vend, avec quel incentive, quel outil.\n7. Communication : messages, canaux, embargo.\n8. Promesse : une phrase, prouvable par le parcours.\n9. Ops : qui traite, quels délais, quelle file d'attente.\n10. Réglementation : avis écrit, documents, mentions — pas un « on a vu la conformité ».\nUne case vide ou contradictoire = écart. Vous ne « lissez » pas. Vous arbitrez ou vous sortez la phrase de la campagne.",
      exemple:
        "Clairière Assurances (assureur fictif) lance une assurance habitation « souscrite en agence en 10 minutes, dès 9 € / mois ». L'audit : le besoin (jeunes locataires) est clair ; la valeur (prix, simplicité) aussi. Les fonctionnalités lot 1 omettent le vol hors domicile, alors que la pub l'illustre. Le prix 9 € n'inclut pas de garanties que le vendeur ajoute « pour bien conseiller ». Le parcours réel dure 22 minutes avec le recueil d'informations. La distribution (200 agences) n'a pas l'outil le jour J. La communication promet 10 minutes. Les ops sinistres n'ont pas de script pour ce produit. L'avis conformité demande de retirer « 10 minutes » et l'illustration vol. L'offre n'est pas cohérente. On retravaille promesse, visuel et lot 1, ou on ne lance pas la campagne. Chez Banque Horizon, le même exercice sur « compte opérationnel en 8 minutes » produit souvent le même écart entre slogan et entrée en relation.",
      erreurs:
        "Auditer la brochure et pas le parcours. Laisser le lot 2 « sous-entendre » dans la pub. Croire que le prix bas aligne tout le monde : le réseau peut refuser un produit sans marge. Oublier les ops (un dossier ouvert que personne ne sait clôturer). Traiter le réglementaire comme une relecture de typos. Remplir la grille tout seul, sans le réseau ni la conformité.",
      particuliers:
        "Bancassurance : deux cohérences à tenir, produit bancaire et produit d'assurance, parfois deux avis. Courtage : la cohérence passe aussi par le comparateur et la rémunération du courtier ; un produit « simple » côté siège peut être illisible dans l'outil du partenaire. Grande distribution : l'offre doit tenir dans le temps d'un vendeur non spécialiste — sinon la promesse en catalogue est déjà rompue. Offre 100 % digitale : la cohérence ops, c'est le chat, le centre de contacts et la preuve d'information, pas l'agence.",
      exercice:
        "Sur l'offre jeunes actifs Banque Horizon, la pub dit « tout est fait en 8 minutes, sans papier ». Le parcours lot 1 demande une pièce d'identité, un justificatif de domicile, et un récapitulatif à valider. Le tarif d'appel est à 0 € six mois, puis 5 €. Les agences n'ont pas encore l'écran. Repérez au moins quatre ruptures parmi les dix dimensions et proposez une reprise de la promesse.",
      correction:
        "Ruptures. Promesse vs parcours : 8 minutes et « sans papier » ne collent pas aux justificatifs. Communication vs distribution : pub nationale alors que l'écran agence n'est pas là — le canal web et le canal agence disent deux choses. Prix vs communication : 0 € six mois doit être aussi clair que le 5 € ensuite, sinon la valeur perçue est trompeuse. Ops : qui traite un dossier bloqué sur justificatif ? Réglementation : mentions et preuve d'information, avis à obtenir avant la pub. Reprise de promesse possible : « Ouvrez votre compte en ligne, avec les justificatifs habituels ; vos conseillers vous accompagnent en agence dès que l'outil y est déployé. » On retire 8 minutes et sans papier tant que le parcours ne le prouve pas. Le CP alerte ; il ne « passe » pas la pub pour tenir le calendrier.",
    }),
    pack({
      title: "Planifier le déploiement",
      description:
        "Construire un plan de mise en marché par vagues, avec jalons, rollback et checklist de lancement.",
      minutes: 6,
      objectifs:
        "Vous savez découper un déploiement en vagues, relier chaque vague à des critères d'entrée et de sortie, et utiliser une checklist de lancement plutôt qu'une liste d'envie.",
      theorie:
        "Déployer, c'est faire passer une offre ou un outil du « ça marche en recette » au « ça marche chez les gens qui vendent et qui servent ». Un plan de déploiement n'est pas le rétroplanning marketing recopié. C'est une séquence de vagues, chacune avec un périmètre géographique ou de population, des prérequis, une charge de formation, une capacité de support, et un critère pour passer à la vague suivante. Sans vagues, un incident unique devient un incident national.\n\nEn réseau d'agences ou de magasins, la géographie n'est pas un détail : fuseaux de formation, managers régionaux, charge du centre de contacts. En digital pur, les vagues peuvent être des segments de clients ou un pourcentage de trafic. Dans les deux cas, on prévoit la bascule (quand l'ancien dispositif s'arrête), le rollback (comment on revient en arrière), et le run des quatorze premiers jours (qui surveille quoi, à quelle heure, qui décide d'arrêter).\n\nLe chef de projet tient le plan et la checklist. Il ne passe pas au vert une case de conformité à la place du titulaire. Une checklist cochetée sans preuve (PV de recette, avis écrit, taux de formation) est un décor. Les exemples de vagues et de seuils de cette leçon sont pédagogiques et fictifs.",
      methode:
        "Construisez le plan à l'envers de la date de campagne, pas depuis l'enthousiasme du sponsor.\n1. Date de go public visée, puis conditions pour y arriver.\n2. Vague 0 : recette métier, run, support, rollback testé une fois.\n3. Vague 1 : pilote (agences, région, ou % de trafic), durée minimale, indicateurs d'incidents et d'adoption.\n4. Vagues suivantes : extension, avec critère d'entrée = sortie de la vague précédente.\n5. Formation et communication calées sur chaque vague, pas un e-mail unique à J-1.\n6. Checklist figée une dizaine de jours avant le go, revue chaque jour à l'approche. Une case rouge = décision go conditionnel ou no-go, pas un « on verra le matin ».",
      exemple:
        "Banque Horizon déploie le nouveau parcours jeunes actifs : vague 0 en préprod et 2 agences laboratoire ; vague 1 = 12 agences d'une région pendant deux semaines ; vague 2 = 80 agences si le taux d'incidents bloquants du pilote reste sous un seuil fixé à l'avance (exemple fictif : < 5 % des ouvertures) et si 90 % des conseillers pilotes sont formés ; campagne nationale après la vague 2, pas avant. En parallèle, un assureur qui déploie un outil de souscription en 200 agences ne les ouvre pas le même lundi : il pilote, il étend par régions, il garde une capacité de support. Le distributeur enseigne, lui, peut imposer une date unique de catalogue : alors le pilote doit avoir eu lieu avant le gel enseigne, pas après.",
      extra: [
        code(`CHECKLIST MISE EN MARCHÉ — à figer 10 jours avant le go
Projet : ..........................  Date de go visée : ../../....
Pilote : ..........................  Décideur go / no-go : ..........

OFFRE ET COHÉRENCE
[ ] Besoin cible rédigé et partagé
[ ] Promesse alignée sur le lot 1 réel (rien du lot 2 dans la pub)
[ ] Fonctionnalités lot 1 listées ; hors-lot explicite
[ ] Prix / frais / conditions validés finance + juridique
[ ] Parcours testé bout en bout (happy path + 2 incidents)
[ ] Canal de distribution prêt (agence, web, courtier, enseigne)
[ ] Messages et supports : avis conformité / juridique écrit
[ ] Ops : back-office, SAV / sinistres, réclamations, SLA
[ ] Cadre réglementaire : avis écrit, pas un « on verra »

RÉSEAU ET CONDUITE DU CHANGEMENT
[ ] Sponsors régionaux nommés
[ ] Formation des conseillers / vendeurs effectuée ou datée par vague
[ ] Argumentaire + objections livrés
[ ] Outil accessible (droits, identifiants, voie d'incident)
[ ] Support niveau 2 identifié pour J0–J14

TECHNIQUE ET RUN
[ ] Recette métier signée
[ ] Plan de bascule (heure, responsable, rollback)
[ ] Rollback testé au moins une fois
[ ] Supervision J0–J14 (qui, quels indicateurs, quelle astreinte)
[ ] Reporting : définitions des KPI d'adoption figées

GO / NO-GO
[ ] Critères écrits avant la réunion de go
[ ] Décideur unique nommé
[ ] Décision consignée (go / go conditionnel / no-go) avec motifs
[ ] Communication post-décision prête (réseau, partenaires, silence presse)

Une case conformité, juridique ou sécurité n'est cochée que par le titulaire.`),
      ],
      erreurs:
        "Un seul créneau « déploiement » dans le Gantt, sans vagues. Critères d'entrée inventés le matin du go. Checklist de 200 lignes que personne ne relit, ou checklist de 8 lignes toutes vertes par le CP. Oublier le rollback « parce que c'est trop tard pour revenir ». Former tout le réseau trois semaines trop tôt, donc tout le monde a oublié. Laisser le partenaire enseigne déployer selon son catalogue sans vague interne préalable.",
      particuliers:
        "Déploiement digital par feature flag : les vagues sont des pourcentages de trafic, le rollback est technique, mais le réseau doit quand même savoir ce que le client voit. Déploiement imposé par un distributeur (date catalogue) : votre pilote se fait avant le gel, ou vous no-go le canal enseigne. Fusion / changement d'outil en cours d'année : double run, charge SAV, communication « quel outil aujourd'hui ». Petit réseau (15 agences) : le pilote peut être de 3, pas de 12 ; le principe de vague reste.",
      exercice:
        "On vous demande de « tout déployer le 15 du mois » sur 80 agences Banque Horizon plus le web. Recette métier prévue le 12. Proposez un plan en vagues réaliste et trois cases de checklist qui, si elles sont rouges le 12, empêchent le big bang du 15.",
      correction:
        "Plan. Vague 0 jusqu'au 12 : recette, rollback, support. Vague 1 du 15 au 28 : web éventuellement en % de trafic + 8 à 12 agences pilotes déjà formées, pas 80. Vague 2 après revue des incidents. Campagne de masse après vague 2. Le 15 n'est pas un big bang national.\nCases qui bloquent un big bang le 15 si rouges le 12 : avis conformité écrit des messages ; recette métier signée (pas « ça devrait passer ») ; formation d'au moins la vague 1 (droits outils + argumentaire). Une case réseau « 80 agences informées par e-mail » ne remplace pas la formation. Le CP recommande le décalage du big bang ; le décideur de go tranche.",
    }),
    pack({
      title: "Conduire le changement dans le réseau",
      description:
        "Faire adopter un outil ou une offre par ceux qui vendent : sponsors, formation, communication de proximité, relais managériaux.",
      minutes: 5,
      objectifs:
        "Vous savez poser un plan d'adoption : qui relais, quel message, quelle formation, quel accompagnement après J0. Vous ne confondez plus e-mail de lancement et conduite du changement.",
      theorie:
        "Un déploiement technique peut être « vert » et le réseau ne pas s'en servir. La conduite du changement, dans un projet marketing et commercial, c'est le travail pour que des conseillers, des vendeurs ou des courtiers changent un geste : un écran, un script, une offre à proposer, un temps d'entretien. Ce n'est pas un slide sur les bienfaits du projet. Les gens changent si l'outil marche, si le manager local porte le sujet, si la formation arrive au bon moment, si l'incentive n'est pas contraire, et s'ils savent qui appeler quand ça bloque.\n\nLe chef de projet n'est pas DRH et n'est pas directeur de réseau. Il ne « transforme » pas 200 agences par charisme. Il met en place des relais : sponsor national, sponsors régionaux, managers d'agence, référents. Il cadence formation, communication de proximité, et présence sur le terrain ou en visio les premiers jours. Il mesure l'adoption, pas seulement l'envoi des convocations.\n\nRésistance n'est pas un diagnostic. Un réseau qui refuse a souvent une raison : temps de souscription, commission, peur de mal conseiller, double saisie, offre illisible. On écoute, on tranche, on n'injoncte pas. En assurance, le devoir de conseil rend la formation non optionnelle : un vendeur non formé n'est pas un détail d'adoption, c'est un risque. Le CP alerte ; il ne déclare pas le réseau « prêt » à la place du directeur de réseau.",
      methode:
        "1. Cartographiez les publics : siège, région, agence, partenaire, centre de contacts — messages différents.\n2. Nommez des relais avec un rôle (pas « ambassadeur » vague) : qui forme, qui contrôle le geste, qui remonte les incidents.\n3. Caler la formation sur la vague de déploiement, au plus près de J0, avec un geste réel dans l'outil, pas un PDF.\n4. Livrez un kit : argumentaire, objections, « ce qui change demain matin », voie d'escalade.\n5. Tenez un dispositif J0–J14 : hotline projet, points régionaux, présence des référents.\n6. Mesurez l'usage (première souscription, temps, erreurs), pas uniquement la présence en salle.\n7. Traitez les objections avec le directeur de réseau : incentive, temps, outil. Ce qui est un arbitrage d'offre n'est pas un « accompagnement ».",
      exemple:
        "Clairière Assurances déploie un nouvel outil de souscription. Un e-mail du siège, un webinaire de 45 minutes, et « vous êtes autonomes ». À J+10, 30 % des agences n'ont ouvert aucun contrat dans l'outil, les autres double-saisissent. Le plan qui marche : 15 agences pilotes avec un référent, formation de deux heures dans l'outil, coaching du manager à J+7, kit d'objections, hotline, puis extension régionale. Banque Horizon, pour l'offre jeunes actifs, fait la même chose avec les conseillers : sans relais régional, l'ancienne offre continue d'être vendue parce qu'elle est connue. En grande distribution, le vendeur polyvalent n'aura pas deux heures : le geste doit tenir en quinze minutes, sinon l'offre n'existe pas en rayon.",
      erreurs:
        "Un mail « c'est lancé, merci de votre engagement ». Former trop tôt. Former sans l'outil. Mesurer les convocations, pas les usages. Qualifier de résistants des gens dont l'écran plante. Oublier le centre de contacts, qui prend les clients perdus par l'agence. Promettre une prime d'incentive que la direction commerciale n'a pas validée. Déclarer le changement « terminé » à J0.",
      particuliers:
        "Courtiers indépendants : vous n'imposez pas une formation interne ; vous contractualisez l'accès à l'outil, un module court, et un intérêt économique. Réseau salarié : le manager d'agence est le vrai levier, pas le chef de projet. Télétravail / multi-sites : la formation digitale exige un contrôle du geste (mise en situation), sinon tout le monde a « cliqué présent ». Changement d'outil pendant une période commerciale chaude (rentrée, fin d'année assurance) : le no-go calendaire est parfois plus sage qu'un déploiement héroïque.",
      exercice:
        "80 agences Banque Horizon doivent vendre l'offre jeunes actifs dans un mois. Vous avez un webinaire d'une heure, un PDF, et le sponsor veut « de l'adhésion ». Proposez un dispositif minimum de conduite du changement pour une vague pilote, puis l'extension.",
      correction:
        "Pilote (8 à 12 agences) : relais régional nommé, formation de deux heures dans l'outil réel, kit argumentaire et objections, manager d'agence présent, hotline J0–J14, coaching J+7 sur dossiers réels. Mesure : au moins une souscription accompagnée par conseiller, temps moyen, incidents. Extension : on n'ouvre les 68 autres que si le pilote a ses relais et un taux d'usage minimum. Le webinaire et le PDF deviennent des supports, pas le dispositif. L'adhésion se voit à l'usage, pas à l'applaudimètre du sponsor. Si le temps de souscription reste inacceptable, c'est un arbitrage d'offre, pas un problème de « communication interne ».",
    }),
    pack({
      title: "Tenir le go / no-go",
      description:
        "Préparer des critères écrits, une décision unique, et un go conditionnel qui n'est pas un go déguisé.",
      minutes: 4,
      objectifs:
        "Vous savez préparer une réunion de go / no-go : critères figés à l'avance, preuves, options (go, go conditionnel, no-go), et communication de la décision. Vous savez que le chef de projet recommande, il ne s'auto-accorde pas le lancement.",
      theorie:
        "Le go / no-go est la décision de mettre ou non l'offre en marché, ou de passer d'une vague à la suivante. Ce n'est pas un rituel d'enthousiasme. Les critères sont écrits avant la réunion, quand tout le monde est encore capable de dire non. Le jour J, sous pression média et sponsor, on ne « sent » plus : on compare des preuves à des seuils.\n\nTrois issues honnêtes existent. Go : les critères sont tenus. Go conditionnel : on lance un périmètre réduit, avec des conditions datées et un responsable pour chacune — pas une liste de vœux. No-go : on ne lance pas, on dit pourquoi, on dit quand on réexamine. Un go conditionnel à douze conditions dont trois de conformité ouvertes n'est pas un go conditionnel : c'est un no-go que l'on n'ose pas nommer.\n\nLe décideur est celui que la gouvernance a nommé, souvent le sponsor ou un comité. Le chef de projet prépare le dossier, recommande, documente. Il ne « passe en go » parce que la salle est réservée et les journalistes invités. En banque et en assurance, une case conformité, juridique ou sécurité rouge suffit à justifier un no-go, même si le marketing est prêt. Le CP n'arbitre pas cela contre le titulaire.",
      methode:
        "Dix jours avant : figez les critères (recette, avis écrits, formation de la vague, run, rollback, cohérence de la promesse). Trois jours avant : dossier d'une page, preuves en liens, cases rouges visibles. En réunion : lecture des cases, pas un tour de table d'humeur. Décision consignée. Dans l'heure : message au réseau et gel ou lancement des communications. Si no-go : date de réexamen et actions, pas un silence gêné. Si go conditionnel : trois conditions maximum, chacune avec titulaire et date, sinon c'est un no-go.",
      noteText:
        "Inviter la presse ou le réseau à « la date de lancement » avant le go / no-go vide la décision de son sens. Le calendrier externe se réserve sous condition, ou se confirme après le go.",
      exemple:
        "Réunion banque Horizon, J-3. Recette signée, 12 agences pilotes formées, rollback testé. L'avis conformité des films publicitaires n'est pas là ; les films TV sont réservés. Recommandation du CP : go du pilote et du web, no-go de la campagne de masse jusqu'à l'avis. Go conditionnel « on lance la TV, la conformité rattrapera » : refusé. Le sponsor peut exiger d'attendre les films ; il ne peut pas demander au CP de cocher la case conformité. Chez un assureur, le même schéma vaut pour un outil agence : go pilote 15 agences, no-go des 185 autres tant que le taux d'incidents du pilote n'est pas connu.",
      erreurs:
        "Inventer les critères dans la salle. Douze conditions « et on lance quand même ». Laisser le CP décider seul pour « ne pas embêter le sponsor ». Confondre recette technique et recette métier. Oublier d'informer le réseau d'un no-go, donc laisser des agences vendre. Traiter un avis conformité tardif comme un détail de copy. Considérer que l'argent média déjà engagé oblige le go.",
      particuliers:
        "Go d'une vague, pas du projet entier : on peut go le pilote et no-go la nationale. Partenaire distributeur : deux go, le vôtre et le sien ; le plus tardif gagne. Incident le matin du lancement : le rollback préparé sert maintenant ; le CR de crise n'est pas le CR de go. Sponsor absent : pas de go improvisé par le CP, sauf délégation écrite.",
      exercice:
        "Clairière Assurances, assureur fictif, déploie un nouvel outil de souscription dans 200 agences. On vous demande, pour le comité de lancement : un plan de déploiement, la checklist, le plan de communication et de formation, trois KPI d'adoption, et une recommandation go / no-go. Traitez le cas.",
      correction:
        "Plan de déploiement. Vague 0 : recette métier, droits, rollback, hotline, scripts devoir de conseil. Vague 1 : 15 agences pilotes, deux régions, deux semaines. Vague 2 : extension par régions (environ 50 puis 80) si les critères de sortie du pilote sont tenus. Vague 3 : les 200, seulement après revue. Pas de big bang lundi matin sur 200 sites. La campagne client, s'il y en a une, suit l'adoption, elle ne la précède pas.\n\nChecklist (cases qui doivent être vertes pour le go de chaque vague). Avis conformité / juridique sur parcours et documents ; recette métier signée ; rollback testé ; kits argumentaire et objections livrés ; formation de la vague effectuée dans l'outil ; support niveau 2 nommé J0–J14 ; reporting d'adoption prêt ; décideur nommé. Le CP ne coche pas les cases conformité.\n\nCommunication. J-15 relais régionaux : calendrier des vagues, ce qui change, ce qui ne change pas. J-7 managers d'agence : kit, horaires de hotline, consigne « ne pas promettre l'ancien geste ». J-1 vague concernée : rappel du geste du lendemain. J0 : message « c'est ouvert pour vous » uniquement aux agences de la vague, pas aux 200. Silence presse tant que le go de la vague nationale n'est pas là. Partenaires courtiers : canal séparé, plus tard, avec leur propre formation.\n\nFormation. Pilote : 2 h dans l'outil sur dossiers types (dont un cas de devoir de conseil), manager présent, coaching J+7. Extension : mêmes 2 h, sessions régionales, pas un replay facultatif. Seuil pédagogique fictif : pas d'ouverture de vague suivante sous 85 % de conseillers de la vague formés et ayant réalisé au moins un geste accompagné.\n\nTrois KPI d'adoption (définis avant J0, fictifs dans leurs cibles). 1) Taux d'agences de la vague ayant réalisé au moins une souscription dans l'outil sur 7 jours. 2) Temps médian de souscription vs temps cible annoncé au réseau. 3) Taux d'incidents bloquants ou de dossiers repris par le siège. On ne mesure pas le succès au nombre de mails lus ni à la présence au webinaire. Un KPI commercial (volume de contrats) vient après, quand le geste est possible.\n\nGo / no-go. Critères écrits à J-10. Recommandation type à J-3 : go vague 1 si recette, avis, formation pilote et hotline sont verts ; no-go des 185 agences restantes ; no-go communication client nationale. Go conditionnel acceptable : ouvrir 15 agences avec une condition unique datée (ex. correctif d'un bug non bloquant sous 5 jours, titulaire IT). Inacceptable : ouvrir 200 avec « la formation suivra » ou « la conformité rattrapera ». Décideur : sponsor / comité, pas le chef de projet seul. Décision consignée, réseau informé dans l'heure.",
    }),
    quizLesson({
      title: "Quiz — Mise en marché",
      description: "Cinq questions de raisonnement sur le go-to-market, la cohérence d'offre, le déploiement et le go / no-go.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Quel énoncé décrit le mieux un go-to-market professionnel ?",
          options: [
            "A. La soirée de lancement et le plan média du jour J",
            "B. L'alignement entre offre réelle, canaux, séquence interne / réseau / public, et capacité de run",
            "C. L'autorisation de la conformité, qui remplace le reste",
            "D. La date que le sponsor a annoncée au COMEX en mars",
          ],
          correct: 1,
          explanation:
            "Le GTM est un dispositif, pas un événement. La conformité est une condition, pas le GTM. Une date de sponsor sans recette ni réseau n'est pas un plan.",
        }),
        q({
          question:
            "La pub promet une souscription « en 8 minutes, sans papier ». Le parcours demande deux justificatifs et dure 20 minutes. Que faites-vous ?",
          options: [
            "A. Vous lancez : le marketing assume, le parcours « s'améliorera »",
            "B. Vous signalez une rupture promesse / parcours / réglementation, vous retirez la phrase tant qu'elle n'est pas prouvable, vous n'arbitrez pas seul « on passe quand même »",
            "C. Vous demandez à l'IT de chronométrer 8 minutes en enlevant les mentions",
            "D. Vous laissez la pub et vous formez le réseau à s'excuser",
          ],
          correct: 1,
          explanation:
            "C'est une rupture de cohérence, souvent aussi un sujet d'information du client. Le CP alerte et propose une reprise de promesse. Enlever les mentions pour tenir un slogan n'est pas un scénario. Former le réseau à s'excuser, c'est industrialiser la rupture.",
        }),
        q({
          question:
            "Vous déployez un outil de souscription dans 200 agences. Quelle séquence est la plus professionnelle ?",
          options: [
            "A. Big bang lundi, formation en replay dans la semaine, campagne client dès samedi",
            "B. Recette et rollback, pilote d'une quinzaine d'agences, critères de sortie, puis vagues régionales, campagne quand l'adoption tient",
            "C. Campagne d'abord pour « créer l'usage », l'outil suivra",
            "D. Ouverture des 200 dès que l'IT a livré en préprod",
          ],
          correct: 1,
          explanation:
            "Les vagues et les critères d'entrée protègent le réseau et le client. La préprod n'est pas la prod. La campagne ne précède pas un geste que le réseau ne sait pas faire.",
        }),
        q({
          question:
            "Parmi ces indicateurs, lesquels mesurent vraiment l'adoption d'un outil en agence ?",
          options: [
            "A. Taux d'ouverture de l'e-mail de lancement et présence au webinaire",
            "B. Au moins une souscription réelle par site, temps de geste, taux d'incidents bloquants",
            "C. Nombre de slides du kit et note de satisfaction à chaud de la formation",
            "D. Volume de contrats du trimestre, sans regarder si l'outil a été utilisé",
          ],
          correct: 1,
          explanation:
            "L'adoption se voit au geste dans l'outil, à sa fluidité et à ses incidents. L'e-mail et le webinaire mesurent l'audience. Le volume commercial peut venir d'un contournement (double saisie, ancien process).",
        }),
        q({
          question:
            "À J-3, la recette métier est signée, la formation pilote est faite, l'avis conformité des films publicitaires manque. Quelle recommandation est tenable ?",
          options: [
            "A. Go global, y compris TV, « la conformité rattrapera »",
            "B. Go du pilote / du canal prêt ; no-go de la campagne de masse tant que l'avis écrit n'est pas là ; le CP ne coche pas la case conformité",
            "C. No-go de tout, y compris d'un pilote pourtant prêt, par principe",
            "D. Le chef de projet décide le go seul pour ne pas perdre les espaces média",
          ],
          correct: 1,
          explanation:
            "On peut go un périmètre prêt et no-go ce qui dépend d'un avis manquant. Un go qui « rattrape » la conformité n'est pas dans le mandat du CP. Un no-go total n'est pas obligatoire si le pilote est réellement prêt. Les espaces média déjà achetés n'obligent pas le go.",
        }),
      ],
    }),
  ],
};
