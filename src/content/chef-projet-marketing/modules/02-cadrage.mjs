import { pack, quizLesson, q, h, t, code } from "../lib.mjs";

export default {
  position: 2,
  title: "Cadrer un projet",
  description:
    "Transformer une intention marketing en projet tenable : besoin distinct de la solution, objectifs mesurables, note de cadrage complète et carte des parties prenantes, sans se substituer à la conformité.",
  lessons: [
    pack({
      title: "Formaliser le besoin",
      description:
        "Séparer besoin, solution, objectif et hors périmètre avant d'engager des métiers.",
      minutes: 6,
      objectifs:
        "À la fin de cette leçon, vous distinguez le besoin, la solution et l'objectif. Vous savez formuler un hors périmètre utile, et vous refusez de démarrer un projet dont le seul cadrage est une idée de moyen (« une appli », « une campagne », « une offre comme les néobanques »).",
      theorie:
        "Cadrer, c'est séparer trois objets que l'on mélange en réunion. Le besoin est l'écart entre la situation actuelle et une situation acceptable pour l'entreprise : trop peu de souscriptions sur un segment, un parcours trop long, un coût d'acquisition trop élevé. Il se formule sans le moyen. La solution est le moyen envisagé : nouvelle offre, application, campagne, partenariat, refonte d'un tunnel. L'objectif est le résultat que l'on s'engage à viser, mesurable et daté. Si vous partez de la solution, vous cadrez un projet de livraison. Si vous partez d'un slogan, vous n'avez ni besoin ni objectif.\n\nLe hors périmètre est l'autre face du cadrage. Il nomme ce que le projet ne fera pas pendant cette vague. Sans cette liste, chaque métier ajoute silencieusement sa demande. Le chef de projet n'interdit pas l'ambition ; il rend les ajouts visibles pour que le sponsor arbitrage.\n\nÀ Banque Horizon (banque de détail fictive), le besoin n'est pas « une appli néobanque ». C'est de stopper l'érosion des souscriptions 25-35 ans, dans un délai de six mois, avec un budget limité.",
      methode:
        "Dès la première demande, posez quatre questions dans cet ordre, par écrit.\n\nPremièrement : quel écart constaté rend le sujet prioritaire maintenant (volume, parcours, coût, concurrence) ? Deuxièmement : si l'on ne fait rien pendant six mois, que se passe-t-il concrètement ? Troisièmement : quelle solution est déjà dans la tête du demandeur, et pourquoi celle-là plutôt qu'une autre ? Quatrièmement : qu'est-ce qui est explicitement hors de cette vague ?\n\nInterlocuteurs : le demandeur métier, le sponsor pressenti, un représentant commercial ou réseau, le digital si le parcours est en jeu. Documents : chiffres de souscription du segment, parcours actuel, enveloppe indicatrice si elle existe. Contrôle : vous ne lancez ni atelier de conception ni brief agence tant que besoin, solution envisagée et hors périmètre ne tiennent pas en une page validée.",
      noteText:
        "Bonne pratique, pas obligation légale : une phrase de besoin sans moyen. Le chef de projet n'est pas le valideur ACPR, ni le juriste, ni le risk manager. Si le besoin touche un produit d'épargne, un crédit ou une communication financière, vous signalez conformité et juridique : vous ne « validez pas le réglementaire » dans la note.",
      exemple:
        "Banque Horizon, comité marketing. La directrice de marché déclare : « Il nous faut une offre 100 % mobile, comme les néobanques, pour juin. » Sans cadrage, le digital commence un backlog d'application, l'IT parle d'architecture, le réseau demande une plaquette. Le chef de projet reformule. Besoin : les souscriptions 25-35 ans baissent, le parcours agence plus web est long, le coût d'acquisition du segment est trop élevé. Solution envisagée (pas encore décidée) : une offre jeunes actifs avec souscription à distance. Objectif : à chiffrer au module suivant, pas un slogan. Hors périmètre de la vague : nouveau core banking, offre seniors, changement de marque, ouverture de comptes professionnels. Les métiers contestent le hors périmètre : c'est précisément le moment où le sponsor doit arbitrer, pas le moment d'empiler.",
      extra: [
        code(`BESOIN ≠ SOLUTION ≠ OBJECTIF — fiche express
Demandeur : ..................... Date : ........
Écart constaté (faits, pas d'opinion) :
  ................................................
Si on ne fait rien (6 mois) :
  ................................................
Solution déjà dans la tête du demandeur :
  ................................................
Objectif (brouillon, à SMART-iser ensuite) :
  ................................................
Hors périmètre de CETTE vague :
  ................................................
Points à signaler à conformité / juridique / risques :
  ................................................
Ce que le CP ne valide pas : règles ACPR, clauses, publicité financière.`),
      ],
      erreurs:
        "Prendre la solution du plus haut hiérarchique pour un besoin. Écrire « digitaliser » ou « innover » comme s'il s'agissait d'un écart mesurable. Oublier le hors périmètre par peur de déplaire. Laisser l'IT ou l'agence démarrer « pour avancer » avant l'écrit. Confondre urgence du comité et urgence du client. Promettre un lancement à six mois sans avoir nommé ce qui ne sera pas fait.",
      particuliers:
        "En startup, le fondateur parle souvent en solution : « on clone tel acteur ». Votre valeur est de faire dire le besoin client avant le backlog. En ETI ou grand réseau, un besoin marketing cache parfois un conflit commercial / digital : le cadrage doit le rendre visible, pas le lisser. En B2B, le besoin de l'entreprise n'est pas le besoin de l'utilisateur final : les deux se formulent. En lancement réglementé (banque, assurance), le hors périmètre inclut souvent « tout ce qui exigerait un nouveau processus d'agrément non budgété » : vous le signalez, vous ne le tranchez pas.",
      exercice:
        "Un directeur commercial d'une enseigne de services (fictive) vous dit : « On veut un programme de parrainage digital pour booster les ventes du trimestre. » En huit à dix lignes, écrivez : (1) le besoin possible, (2) la solution déjà posée, (3) un objectif encore trop vague à refuser, (4) deux éléments de hors périmètre à faire valider.",
      correction:
        "Besoin possible : les ventes du trimestre ne suivent pas la cible, le coût d'acquisition des nouveaux clients est trop élevé, ou le réseau n'a pas de levier simple pour faire venir un second client. Vous le vérifierez par des faits, vous ne l'inventez pas. Solution déjà posée : un programme de parrainage digital — c'est un moyen, pas le besoin. Objectif trop vague à refuser : « booster les ventes » ; il manque un volume, un segment, une date, un indicateur de coût. Hors périmètre à faire valider : par exemple refonte de la grille tarifaire, nouveau produit, campagne TV, ou intégration d'un outil de CRM national si ce n'est pas financé. Vous n'affirmez pas que le parrainage est la bonne solution : vous empêchez qu'on la confonde avec le besoin.",
    }),

    pack({
      title: "Objectifs SMART et indicateurs",
      description:
        "Rédiger des objectifs utilisables et distinguer réalisation et résultat.",
      minutes: 6,
      objectifs:
        "Vous rédigez un objectif SMART. Vous distinguez un indicateur de réalisation (on a livré) d'un indicateur de résultat (ça a produit l'effet visé). Vous refusez un projet dont le seul succès serait « avoir lancé ».",
      theorie:
        "Un objectif SMART est spécifique, mesurable, atteignable, réaliste au regard des moyens, et temporellement borné. Ce n'est pas un slogan de comité. « Être la banque préférée des jeunes » n'est pas SMART : on ne sait ni quoi compter, ni à quelle date, ni avec quelle ressource. « Recruter 8 000 nouveaux clients 25-35 ans dans les 12 mois suivant le lancement, avec un CAC inférieur de 20 % au CAC 2026 du segment » est spécifique, mesurable et daté. Les chiffres de ce parcours sont pédagogiques et fictifs : ils illustrent une forme, pas un marché réel.\n\nDeux familles d'indicateurs doivent coexister, sans se remplacer. Les indicateurs de réalisation décrivent ce que l'équipe livre : offre publiée, parcours mobile en production, 120 conseillers formés, campagne envoyée. Les indicateurs de résultat décrivent l'effet sur le business : souscriptions, transformation, CAC, attrition, production commerciale. Un projet peut être « vert » en réalisation et « rouge » en résultat : l'offre est sortie, les jeunes n'ont pas souscrit. Inversement, un résultat peut sembler bon pour une raison étrangère au projet (une campagne nationale d'image, un mouvement de taux). Le chef de projet pose les deux, et dit comment on évitera d'attribuer au projet ce qu'il n'a pas causé.",
      methode:
        "Pour chaque objectif, remplissez cinq champs avant de le présenter au sponsor.\n\n1. Population et offre concernées. 2. Grandeur mesurée (volume, taux, coût, délai). 3. Valeur de départ et valeur visée. 4. Date de lecture (lancement, M+6, M+12). 5. Source de la donnée (outil, responsable du chiffre).\n\nPuis vous ajoutez, pour le même objectif, au moins un indicateur de réalisation et un indicateur de résultat. Si vous n'avez que des réalisations, vous pilotez un planning, pas un développement. Si vous n'avez que des résultats, vous ne saurez pas si l'échec vient d'une non-livraison ou d'une offre mal conçue.\n\nContrôle : un objectif qui dépend d'une validation ACPR, juridique ou risques n'est pas « tenu par le CP ». Vous le datez sous réserve de ces validations, vous ne les promettez pas.",
      noteText:
        "Les cibles chiffrées de Banque Horizon dans ce parcours sont des hypothèses pédagogiques. Vous n'inventez pas un objectif « ambitieux » en comité réel sans finance et sans métier. Atteignable et réaliste se discutent avec ceux qui portent le chiffre, pas seuls dans la note.",
      exemple:
        "Banque Horizon. Objectif de réalisation : « Parcours de souscription à distance de l'offre jeunes actifs disponible en production au plus tard six mois après le go, pour les clients et prospects 25-35 ans, hors crédit immobilier. » Objectif de résultat : « 8 000 ouvertures nettes 25-35 ans sur 12 mois post-lancement, CAC segment inférieur de 20 % au CAC 2026 » (chiffres fictifs). Indicateur de réalisation associé : taux de disponibilité du parcours, nombre d'agences formées. Indicateur de résultat associé : ouvertures, taux de transformation, CAC. Ce que ce n'est pas : « une appli moderne », « plus de digital », « un NPS en hausse » sans protocole de mesure.",
      extra: [
        code(`OBJECTIF SMART — canevas
S  Population / offre : ................................
M  Grandeur + unité + source : .........................
A  Pourquoi c'est tenable (moyens, délai) : ............
R  Lien avec le besoin (pas avec la solution) : ........
T  Date de lecture : ...................................

Réalisation (on a livré) : .............................
Résultat (effet business) : ............................
Hors attribution (ce que l'on ne mettra pas au crédit du projet) : ...
Réserve réglementaire / juridique / risques : ..........`),
      ],
      erreurs:
        "Poser uniquement des livrables (« site, campagnes, kit réseau ») et appeler cela un objectif. Empiler cinq objectifs inconciliables (volume, premium, low cost, six mois, budget serré). Prendre le slogan de marque pour une cible. Mesurer le résultat trop tôt (semaine 1) ou trop tard (après que plus personne ne pilote). Attribuer au projet toute la production du segment. Promettre une date de lancement comme si conformité avait déjà dit oui.",
      particuliers:
        "En distribution physique, un objectif de réalisation « 100 % du réseau formé » est souvent plus dur qu'un écran digital : prévoyez le temps réseau. En e-commerce pur, le résultat se lit plus vite, mais l'attribution pub / produit / prix se discute. En B2B à cycle long, un résultat à 12 mois peut être trop tôt : dites-le, proposez des résultats intermédiaires (rendez-vous, pipeline qualifié) sans les faire passer pour du chiffre d'affaires. En offre réglementée, un objectif de communication grand public est conditionné : le CP calendrier, il ne « passe pas en force ».",
      exercice:
        "Requalifiez ces trois formulations pour Banque Horizon (fictive). Pour chacune : SMART ou non, réalisation ou résultat, et une version corrigée en une phrase. 1) « Améliorer l'expérience jeune. » 2) « Former les conseillers avant le lancement. » 3) « Gagner des parts de marché. »",
      correction:
        "1) Non SMART, ni réalisation ni résultat utilisable. Version : « Réduire le temps médian de souscription 25-35 ans de X minutes (parcours actuel) à Y minutes, mesuré sur l'outil digital, à M+3 du lancement » — résultat d'usage, chiffres à faire valider. 2) Réalisation, presque SMART s'il manque le volume et la date : « 120 conseillers des régions pilotes formés et habilités sur l'offre, avant la date de lancement validée. » Ce n'est pas un résultat business. 3) Non SMART, résultat trop large. Version : « 8 000 ouvertures nettes 25-35 ans sur 12 mois post-lancement » (cible pédagogique fictive), pas « des parts de marché » sans source ni périmètre. Dans les trois cas, le CP ne valide pas seul le chiffre : il le propose avec marketing et finance.",
    }),

    pack({
      title: "Rédiger la note de cadrage",
      description:
        "Produire le document unique qui aligne métiers, délai, budget et hors périmètre.",
      minutes: 8,
      objectifs:
        "Vous savez à quoi sert une note de cadrage, quelles sections elle contient, et vous savez en rédiger une version complète. Vous distinguez ce que le document décide (périmètre, objectifs proposés) de ce qu'il signale (conformité, juridique, risques).",
      theorie:
        "La note de cadrage est le document court qui transforme une intention en projet discutable par un comité. Elle n'est pas un business case : elle ne prouve pas encore la rentabilité. Elle n'est pas un cahier des charges : elle ne spécifie pas les écrans. Elle n'est pas une plaquette. Elle pose ce que l'on veut résoudre, jusqu'où l'on va, ce que l'on ne fera pas, qui est autour de la table, ce que l'on livrera, sous quelles contraintes, avec quelles hypothèses, quels risques visibles, quel calendrier et quelle gouvernance.\n\nSans note, chacun repart avec un projet différent. Le commercial a entendu une offre tarifaire. Le digital a entendu une application. L'IT a entendu un chantier de six mois « léger ». Le réseau a entendu une animation. La finance n'a rien chiffré. La conformité n'a pas été invitée. Le chef de projet se retrouve à arbitrer des malentendus.\n\nUne note utile tient en quelques pages. Trop longue, personne ne la lit. Trop courte, elle n'arbitrera rien. Les douze sections du modèle ci-dessous sont un standard pédagogique de ce parcours, pas une norme légale. Le sponsor valide le cadrage. Le CP rédige, aligne, met à jour. Il ne signe pas à la place de la conformité.",
      methode:
        "Rédigez dans cet ordre, même si vous collectez les infos dans le désordre : objet, contexte, besoin, objectifs, périmètre, hors périmètre, parties prenantes, livrables, contraintes, hypothèses, risques, planning et gouvernance. Faites relire marketing, commercial ou réseau, digital, finance, puis signalez conformité, juridique et risques. Une relecture n'est pas une validation réglementaire.\n\nVersionnez (date, auteur, statut : brouillon, à valider, validé). Une note « validée » oralement en couloir n'en est pas une. Après le go, tout changement de périmètre passe par une mise à jour, pas par un Slack.\n\nContrôle avant envoi au comité : un lecteur extérieur comprend-il ce qui est hors périmètre ? Les objectifs ont-ils un indicateur de résultat ? Les validations ACPR / juridiques sont-elles nommées comme réserves, pas comme acquises ?",
      noteText:
        "Banque Horizon est une entreprise fictive. La note ci-dessous est un modèle pédagogique. Elle ne constitue pas un dossier d'agrément, ni une position ACPR, ni un avis juridique. Un chef de projet réel s'appuie sur les équipes habilitées de son établissement.",
      exemple:
        "Sans note, Banque Horizon lance trois chantiers parallèles : un nom d'offre, une maquette d'application, une promo d'entrée. Trois mois plus tard, conformité bloque le message d'entrée, l'IT découvre un lien avec le core banking hors budget, le réseau n'a pas de script, le sponsor demande « où en est le projet ». Avec une note, ces points apparaissent aux sections hors périmètre, contraintes, risques et gouvernance, avant les dépenses de conception. Le temps de rédaction n'est pas perdu : il évite de payer trois solutions pour un besoin non partagé.",
      extra: [
        h("Modèle — note de cadrage complète"),
        t(
          "Document pédagogique pour Banque Horizon (fictive). Les volumes, dates et enveloppes sont des hypothèses d'apprentissage, pas des données de marché. Lisez les douze sections, puis reproduisez une version courte dans l'exercice (offre d'assurance, autre entreprise)."
        ),
        code(`NOTE DE CADRAGE — Banque Horizon (entreprise fictive)
Projet : offre jeunes actifs 25-35 ans
Version : 1.0 — statut : à valider en comité
Auteur : chef de projet marketing et développement
Destinataires : sponsor, marketing, commercial, digital, IT, finance,
risques, conformité, juridique, réseaux / partenaires

------------------------------------------------
1. OBJET DU PROJET
------------------------------------------------
Cadrer et préparer le lancement d'une offre de banque au quotidien
destinée aux jeunes actifs de 25 à 35 ans, afin de stopper l'érosion
des souscriptions sur ce segment et de ramener le coût d'acquisition
dans une enveloppe acceptable, dans un délai visé de six mois après
le go, avec un budget limité. Ce document ne décide pas encore de
l'investissement : il pose le cadre du travail et des validations.

------------------------------------------------
2. CONTEXTE
------------------------------------------------
Banque Horizon est une banque de détail fictive, confrontée à la
concurrence d'acteurs nés digitaux. Les souscriptions 25-35 ans
baissent. Le parcours actuel mélange agence, web et pièces
justificatives ; il est perçu comme long. Le coût d'acquisition du
segment est élevé. Le réseau demande un discours simple. Le digital
demande un parcours mobile. L'IT signale un système d'information
chargé. Conformité et juridique n'ont pas encore été saisis sur un
périmètre d'offre. Le comité veut une réponse sous six mois.

------------------------------------------------
3. BESOIN
------------------------------------------------
Le besoin n'est pas « une application néobanque » ni « une campagne
jeune ». Le besoin est de reconquérir un segment qui souscrit moins,
avec un parcours plus court et un coût d'acquisition plus maîtrisé,
sans désorganiser le réseau ni ouvrir un chantier d'information
système hors enveloppe. Si l'on ne fait rien : poursuite de la baisse
des ouvertures 25-35 ans, CAC élevé maintenu, discours commercial
inadapté face aux acteurs digitaux (scénario à chiffrer au business
case, pas dans cette note).

------------------------------------------------
4. OBJECTIFS
------------------------------------------------
Réalisation (livraison) : parcours de souscription à distance de
l'offre disponible en production au plus tard six mois après le go,
kit réseau et formation des régions pilotes livrés avant cette date,
message d'offre relu par conformité et juridique avant toute
diffusion publique.

Résultat (effet, chiffres pédagogiques fictifs) : 8 000 ouvertures
nettes 25-35 ans sur 12 mois post-lancement ; CAC du segment inférieur
de 20 % au CAC 2026 du même segment. Ces cibles seront éprouvées dans
le business case ; elles ne sont pas une promesse réglementaire.

------------------------------------------------
5. PÉRIMÈTRE INCLUS
------------------------------------------------
- Conception de l'offre banque au quotidien 25-35 ans (positionnement,
  tarification proposée, entrée en relation).
- Parcours de souscription à distance (web / mobile) pour cette offre.
- Ciblage, message et plan d'activation (digital + réseau pilote).
- Formation et outils des conseillers des régions pilotes.
- Indicateurs de suivi (ouvertures, transformation, CAC, incidents).
- Coordination des saisines : finance, IT, digital, risques,
  conformité, juridique — sans se substituer à leurs validations.

------------------------------------------------
6. HORS PÉRIMÈTRE
------------------------------------------------
- Refonte du core banking / nouveau système d'information global.
- Offre seniors, patrimoine, professionnels, crédit immobilier.
- Changement de marque de l'établissement.
- Ouverture d'agences ou recrutement massif de conseillers.
- Partenariats néobanque / white label non budgétés.
- Toute communication publique avant avis conformité et juridique.
- Décision d'agrément, de politique ACPR ou de doctrine produits :
  hors rôle du chef de projet.

Tout ajout sortant de cette liste est un changement de cadrage, à
revalider par le sponsor, pas un « petit extra » métier.

------------------------------------------------
7. PARTIES PRENANTES
------------------------------------------------
Sponsor : go / no-go, enveloppe, arbitrage de périmètre.
Marketing : proposition, ciblage, message, plan d'activation.
Commercial et réseaux : discours, scripts, charge agence, relais.
Digital : parcours, contenus, tracking.
IT : faisabilité, sécurité, délai d'intégration, run.
Finance : chiffrage, budget, lecture rentabilité.
Risques : risques opérationnels et, le cas échéant, de crédit / fraude.
Conformité : cadre d'offre et de communication (dont attentes ACPR
sur l'information client et la publicité) — validation métier
habilité, pas le CP.
Juridique : clauses, CGU, contrats partenaires.
Partenaires : prestataire parcours, agence, éventuel partenaire
distribution — sous contrat relu.

------------------------------------------------
8. LIVRABLES
------------------------------------------------
Note de cadrage validée ; business case ; dossier de comité ;
parcours cible et backlog priorisé ; kit réseau ; plan d'activation ;
tableau de bord de lancement ; journal des décisions et des réserves
conformité / juridique / risques. Les spécifications détaillées et
le plan de recette viennent après le go, pas à la place de cette note.

------------------------------------------------
9. CONTRAINTES
------------------------------------------------
Délai visé : six mois après le go (lancement, pas « idée validée »).
Budget : enveloppe limitée — tout hors périmètre IT lourd est exclu.
Réglementaire : aucune diffusion d'offre avant relectures habilitées.
Technique : pas de refonte SI. Organisationnelle : réseau à former
sans saturer le calendrier commercial. Données : tracking et ciblage
sous le cadre interne (DPO / conformité), pas « on ciblera plus tard ».

------------------------------------------------
10. HYPOTHÈSES
------------------------------------------------
H1. Le segment 25-35 ans reste prioritaire pour le comité.
H2. Une souscription à distance est faisable sans nouveau core
    (à confirmer IT).
H3. Les régions pilotes peuvent former les conseillers avant lancement.
H4. Les cibles de volume et de CAC ci-dessus sont des hypothèses
    pédagogiques, à recaler avec finance.
H5. Conformité et juridique peuvent instruire le dossier dans le
    calendrier — non promis par le CP.
Si une hypothèse tombe, la note est révisée, le planning aussi.

------------------------------------------------
11. RISQUES MAJEURS
------------------------------------------------
R1. Glissement de périmètre (appli totale, nouveau SI, offre élargie).
R2. Calendrier IT incompatible avec six mois.
R3. Message d'offre retoqué tardivement par conformité / juridique.
R4. Réseau non prêt (scripts, objections, charge).
R5. Cannibalisation d'offres existantes non anticipée.
R6. CAC réel supérieur à la cible (acquisition trop chère).
Le CP signale et organise le traitement. Il n'accepte pas seul un
risque réglementaire.

------------------------------------------------
12. PLANNING, GOUVERNANCE ET CRITÈRES DE SUCCÈS
------------------------------------------------
Jalons visés après go : cadrage validé (J0) ; business case et comité
(J0+3 semaines) ; conception offre + parcours (mois 1-3) ; recette et
formation pilote (mois 4-5) ; lancement sous réserve des avis (mois 6) ;
lecture résultat à M+6 et M+12.

Gouvernance : sponsor décideur ; CP coordonne ; comité de projet
(marketing, commercial, digital, IT, finance) ; saisines risques,
conformité, juridique avec délai de retour daté. Le CP ne tranche
pas un désaccord ACPR / juridique.

Critères de succès du CADRAGE (pas encore du projet livré) : note
validée, hors périmètre signé, objectifs de réalisation et de résultat
écrits, réserves réglementaires nommées, prochain livrable = business
case.

Prochaine étape : chiffrage des coûts, des bénéfices et de la
rentabilité (module business case), puis dossier de comité.`),
      ],
      erreurs:
        "Rédiger une note-catalogue de tout ce que les métiers ont dit, sans hors périmètre. Copier un ancien cadrage en changeant le nom de l'offre. Faire signer la note par le seul marketing. Écrire « conformité OK » alors que personne d'habilité n'a lu. Transformer la note en spécification de 40 pages que personne ne valide. Ne pas versionner : six semaines plus tard, trois notes circulent.",
      particuliers:
        "En TPE, la note tient en deux pages et le sponsor est le dirigeant : elle existe quand même, parce que l'oral change. En groupe, un modèle interne peut imposer d'autres libellés : vous les suivez, vous gardez les douze contenus. En partenariat, la note doit dire qui est maître d'ouvrage. En urgence (« il nous faut une offre pour le salon de juin »), on raccourcit, on n'omet pas hors périmètre, contraintes et réserves. Une urgence n'autorise pas à diffuser avant avis juridique et conformité.",
      exercice:
        "Vous êtes chef de projet chez Assurélia (assureur fictif). La direction veut lancer dans quatre mois une nouvelle offre « pack mobilité urbaine » (auto + habitation) pour les 25-40 ans, en concurrence d'acteurs digitaux, avec un budget limité. Rédigez une note de cadrage simplifiée : objet, contexte, besoin, un objectif de réalisation, un objectif de résultat, périmètre, hors périmètre (au moins trois items), parties prenantes, une contrainte réglementaire, une hypothèse, un risque, un jalon. N'écrivez pas que vous validez les règles ACPR / assurance.",
      correction:
        "Objet : cadrer le lancement d'un pack auto + habitation 25-40 ans sous quatre mois, budget limité. Contexte : Assurélia (fictif) perd des souscriptions urbaines au profit d'acteurs digitaux ; parcours actuel trop long. Besoin : reconquérir ce segment avec une souscription plus simple et un coût d'acquisition maîtrisé — pas « une appli clone ». Réalisation : parcours de souscription du pack disponible avant la date de lancement, documents d'information client relus par conformité et juridique. Résultat (hypothèse pédagogique) : un volume d'affaires nouvelles et un CAC cibles, à faire valider par finance — pas un slogan d'image. Périmètre : offre pack, parcours, activation digitale + réseau pilote, formation, indicateurs. Hors périmètre : nouveau système métier, offre santé, marque blanche, TV nationale, décision prudentielle. Parties prenantes : sponsor, marketing, commercial / réseaux, digital, IT, finance, risques, conformité, juridique, partenaires (courtiers, prestataire). Contrainte réglementaire : aucune publicité ni documentation d'offre avant avis des habilités ; le CP coordonne la saisine, il ne « valide pas l'ACPR ». Hypothèse : le SI actuel permet le pack sans chantier lourd (à confirmer IT). Risque : message retoqué tard, ou glissement vers une refonte SI. Jalon : comité de go avec business case avant conception lourde. Si votre copie a confondu besoin et solution, ou fait du CP le valideur réglementaire, elle n'est pas recevable.",
    }),

    pack({
      title: "Cartographier les parties prenantes",
      description:
        "Savoir qui décide, qui contribue, qui valide, et ce que le chef de projet ne tranche pas.",
      minutes: 5,
      objectifs:
        "Vous identifiez les parties prenantes d'un projet d'offre (sponsor, marketing, commercial, digital, IT, finance, risques, conformité, juridique, partenaires, réseaux). Vous savez ce que chacune décide ou apporte, et vous n'occupez pas la place du valideur réglementaire.",
      theorie:
        "Une partie prenante est une personne ou une entité dont l'accord, le travail ou le refus peut faire réussir ou échouer le projet. Les lister n'est pas de la politesse : c'est prévenir le blocage de la semaine 10. Le sponsor arbitrage périmètre, budget et go. Le marketing porte proposition et ciblage. Le commercial et les réseaux portent la vente réelle : un parcours excellent ignoré des conseillers ne produit rien. Le digital porte l'expérience et la mesure. L'IT porte la faisabilité, la sécurité et le run. La finance porte la vérité des coûts et des cibles. Les risques instruisent fraude, opérationnel, parfois crédit. La conformité et le juridique instruisent le cadre d'offre et de communication — y compris ce que l'on attend d'un établissement vis-à-vis de l'ACPR. Les partenaires (agence, prestataire, distributeur) exécutent sous contrat. Le chef de projet coordonne, écrit, relance, escalade. Il ne « valide pas les règles ACPR » tout seul, même s'il a lu une doctrine. Confondre coordination et validation réglementaire est une faute de rôle, pas un gain de temps.",
      methode:
        "Pour chaque nom, posez quatre colonnes : ce qu'il veut ; ce qu'il décide ; ce qu'il doit livrer ; quand il doit être saisi. Puis classez : décideur, contributeur, valideur habilité, informé, partenaire externe.\n\nSaisine tôt : conformité, juridique, risques, IT. Saisine trop tard = veto à J-15. Le réseau se saisit avant le kit, pas le jour du lancement. Un partenaire n'entre pas tant que juridique n'a pas le contrat.\n\nLivrable : une carte d'une page jointe à la note. Contrôle : aucun valideur réglementaire n'est remplacé par la mention « le CP a vérifié ».",
      noteText:
        "En établissement financier, l'ACPR est une autorité de supervision. Le chef de projet n'est ni l'autorité, ni la fonction conformité. Il organise le calendrier des avis. Il n'écrit pas « conforme ACPR » sous sa seule signature.",
      exemple:
        "Banque Horizon. Le marketing veut un message d'entrée « 80 € offerts, 100 % mobile, sans engagement ». Le CP n'arbitre pas si c'est tenable. Il saisit conformité et juridique avec le projet de message, finance avec le coût de l'offre, le réseau avec l'objection client, l'IT avec le parcours d'entrée. Si conformité refuse le superlatif ou le cadeau mal présenté, ce n'est pas un caprice : c'est une validation hors rôle du CP. Le sponsor tranche alors : changer le message, changer l'offre, ou reporter. Le CP documente la décision. Il ne « passe le message quand même » pour tenir juin.",
      extra: [
        code(`CARTE — projet offre 25-35 ans (Banque Horizon, fictif)
Rôle            Décide          Livre                    Saisir
Sponsor         go, budget      arbitrages               dès le besoin
Marketing       proposition     ciblage, message         J0
Commercial      priorisation    scripts, volume visé     J0
Réseaux         charge locale   formation, relais        avant kit
Digital         parcours        tracking, contenus       J0
IT              faisabilité     délai, sécu, run         J0 (pas J-15)
Finance         lecture €       BC, budget               avant comité
Risques         avis risque     points de contrôle       avant conception
Conformité      cadre offre /   avis (dont comm.)        avant toute pub
                comm. (ACPR)
Juridique       clauses, CGU    contrats, mentions       avant pub / partenaire
Partenaires     —               exécution sous contrat   après juridique
CP              rien de         note, planning,          en continu
                réglementaire   escalade`),
      ],
      erreurs:
        "Inviter tout le monde à toutes les réunions. Oublier le réseau parce que le projet est « digital ». Faire de l'IT un exécutant saisi trop tard. Demander au sponsor de valider un wording publicitaire à la place de la conformité. Promettre à un partenaire un lancement avant contrat. Parler au nom de l'ACPR. Tenir un RACI secret : les métiers découvrent leur rôle le jour du comité.",
      particuliers:
        "En startup, plusieurs casquettes tiennent sur deux personnes : écrivez quand même qui décide le go et qui relit le légal (souvent un conseil externe). En réseau coopératif ou franchisé, les « réseaux » ne reçoivent pas un ordre : ils relaient sous règles d'animation. En B2B, le commercial grands comptes est souvent plus décisif que le marketing. En partenariat de marque, deux sponsors existent : sans maître d'ouvrage unique, le cadrage double.",
      exercice:
        "Pour le pack mobilité urbaine d'Assurélia (fictif), listez en deux colonnes : (1) trois parties prenantes que vous saisissez avant toute maquette publique ; (2) une phrase que le chef de projet n'a pas le droit d'écrire seul. Justifiez.",
      correction:
        "À saisir tôt : conformité (offre d'assurance, documents d'information, publicité), juridique (clauses, partenaires, mentions), IT ou risques selon le cas (parcours, fraude, données) — et finance si une promo d'entrée engage l'économie. Phrase interdite seul : « Cette offre / cette publicité est conforme ACPR » ou « j'ai validé le réglementaire ». Le CP peut écrire : « Saisine conformité et juridique envoyée le [date] ; diffusion publique bloquée tant que l'avis n'est pas reçu. » La nuance n'est pas cosmétique : elle évite un engagement que vous n'avez pas qualité à donner.",
    }),

    quizLesson({
      title: "Quiz — Cadrer un projet",
      description:
        "Vérifier que vous séparez besoin, solution, objectifs, cadrage et validations habilitées.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Un directeur déclare : « Il nous faut une appli 100 % mobile pour les 25-35 ans d'ici juin. » En cadrage, cette phrase est d'abord :",
          options: [
            "A. Un besoin, parce qu'elle nomme une cible et une date.",
            "B. Une solution proposée (un moyen), pas encore le besoin ni un objectif SMART.",
            "C. Un objectif SMART de résultat, car juin est une échéance.",
            "D. Un hors périmètre, car le mobile exclut l'agence.",
          ],
          correct: 1,
          explanation:
            "L'application est un moyen. Le besoin serait l'écart à traiter (souscriptions, parcours, CAC). Juin sans grandeur mesurée n'est pas un objectif SMART de résultat. Le hors périmètre se décide, il ne se déduit pas du mot « mobile ».",
        }),
        q({
          question:
            "Parmi ces indicateurs, lequel est un indicateur de réalisation plutôt que de résultat ?",
          options: [
            "A. 8 000 ouvertures nettes 25-35 ans sur 12 mois.",
            "B. CAC du segment inférieur de 20 % au CAC de référence.",
            "C. 120 conseillers des régions pilotes formés avant la date de lancement.",
            "D. Taux de transformation du parcours de souscription.",
          ],
          correct: 2,
          explanation:
            "Former les conseillers est un livrable d'équipe (réalisation). Les ouvertures, le CAC et le taux de transformation mesurent un effet business (résultat). Un projet peut livrer la formation et rater le résultat.",
        }),
        q({
          question:
            "Pourquoi une note de cadrage doit-elle contenir un hors périmètre explicite ?",
          options: [
            "A. Parce que l'ACPR impose ce chapitre dans tout projet marketing.",
            "B. Pour allonger le document et montrer de la rigueur formelle.",
            "C. Pour rendre visibles les ajouts possibles et protéger délai et budget, afin que le sponsor arbitrage.",
            "D. Pour interdire au digital de travailler tant que l'IT n'a pas fini.",
          ],
          correct: 2,
          explanation:
            "Le hors périmètre n'est pas une exigence ACPR universelle ni un remplissage. Il empêche chaque métier d'ajouter silencieusement sa demande. Le digital et l'IT travaillent dans le périmètre validé, pas dans un gel réciproque.",
        }),
        q({
          question:
            "Sur un projet d'offre bancaire, qui valide que le message publicitaire respecte le cadre applicable (dont les attentes vis-à-vis de l'ACPR) ?",
          options: [
            "A. Le chef de projet, s'il a lu la doctrine et fait signer le sponsor.",
            "B. Le réseau, parce qu'il parle aux clients.",
            "C. Les fonctions habilitées (conformité, et juridique le cas échéant) ; le chef de projet coordonne la saisine et n'est pas le valideur réglementaire.",
            "D. L'agence de communication, si le contrat le prévoit.",
          ],
          correct: 2,
          explanation:
            "Le CP organise calendrier et relances. Il ne se substitue pas à la conformité ni au juridique. Le sponsor arbitrage le projet, pas la règle. L'agence exécute, elle n'endosse pas la supervision.",
        }),
        q({
          question:
            "Quelle formulation est un objectif SMART de résultat (chiffres pédagogiques fictifs) ?",
          options: [
            "A. Être la banque préférée des jeunes actifs.",
            "B. Digitaliser le parcours et innover sur le segment.",
            "C. Recruter 8 000 clients 25-35 ans dans les 12 mois suivant le lancement, avec un CAC inférieur de 20 % au CAC 2026 du segment.",
            "D. Lancer une offre moderne d'ici six mois.",
          ],
          correct: 2,
          explanation:
            "C nomme la population, la grandeur, la cible, la date et un indicateur économique. A et B sont des slogans. D est au mieux une réalisation de planning, sans résultat business.",
        }),
      ],
    }),
  ],
};
