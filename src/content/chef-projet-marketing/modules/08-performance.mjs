import { pack, h, t, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 8,
  title: "Performance et entretiens",
  description:
    "Mesurer les résultats d'un projet, construire un reporting utile à la décision, capitaliser par le REX, et préparer un entretien d'embauche de chef de projet marketing et développement.",
  lessons: [
    pack({
      title: "Mesurer la performance",
      description:
        "Sélectionner des KPI pertinents : conversion, souscriptions, CA, adoption, satisfaction, CAC, rentabilité, budget et planning.",
      minutes: 5,
      objectifs:
        "À la fin de cette leçon, vous savez choisir un nombre limité d'indicateurs liés aux objectifs du cadrage, les calculer sans double comptage, et distinguer un KPI de pilotage d'un indicateur de vanité. Vous reliez chaque chiffre à un propriétaire et à une décision.",
      theorie:
        "Mesurer n'est pas empiler des graphiques. Un KPI est une grandeur suivie parce qu'elle dit si l'objectif du projet est atteint, et parce qu'elle permet d'agir. Un indicateur de vanité (visites, likes, « notoriété ressentie ») gonfle un slide sans changer une décision.\n\nTrois familles. Commerciaux : souscriptions, conversion du parcours, chiffre d'affaires attribué, revenu moyen. Usage : taux d'utilisation (parmi les équipés, qui se sert du service) et d'adoption (parmi la cible, qui a souscrit ou activé). Qualité et économie : satisfaction (enquête ou réclamations, pas un NPS inventé comme vérité de marché), CAC, rentabilité du flux, respect du budget et du planning.\n\nLe CAC = dépenses d'acquisition attribuables / clients acquis, même période, règle d'attribution écrite. La conversion = souscriptions / entrées dans le parcours, même périmètre. Le CA d'un lancement n'est pas le CA de toute la banque. La rentabilité reprend le business case : réalisé vs réalisé, pas un « ROI ressenti ».\n\nSélectionner, c'est restreindre. Cinq à huit KPI liés aux critères de réussite valent mieux que vingt courbes. Chaque KPI a une définition, une source, une fréquence, un propriétaire, une cible et un seuil d'alerte. Sans cela, le reporting devient une conversation.",
      methode:
        "1) Reprendre les critères de réussite du cadrage. 2) Pour chaque critère, nommer un KPI mesurable. 3) Écrire la formule, la source, le périmètre, la fréquence. 4) Nommer un propriétaire (marketing, digital, finance, réseau). 5) Fixer la cible et le seuil d'alerte. 6) Écarter tout indicateur sans décision associée. 7) Vérifier l'absence de double comptage (CA déjà compté dans un autre projet, souscriptions « brutes » vs nettes après rétractation). 8) Faire valider les définitions par finance avant le premier comité de suivi.",
      noteText:
        "Les volumes, parts de marché et CAC de Banque Horizon et de ses concurrents dans ce cours sont fictifs, étiquetés comme tels. Vous n'inventez pas un benchmark national. Le chef de projet ne « valide » pas un indicateur réglementaire à la place de la conformité.",
      exemple:
        "Banque Horizon (fictive), offre 25-35 ans. Le cadrage visait : simplifier le parcours, baisser le CAC, remonter les souscriptions. KPI retenus : conversion parcours (cible 28 % vs 18 % actuel), souscriptions nettes 25-35, CAC, CA année 1 du flux, taux d'activation carte à 30 jours, réclamations pour 1 000 dossiers, écart budget, écart jalon. Écartés : likes de la campagne, « notoriété spontanée » sans enquête, trafic site non rattaché au parcours. Le propriétaire de la conversion est le digital ; celui du CAC est marketing + finance ; celui des réclamations est qualité / conformité opérationnelle.",
      extra: [
        h("Familles d'indicateurs — formules pédagogiques"),
        code(`KPI COMMERCIAUX
Taux de conversion parcours = souscriptions finalisées / sessions démarrées
  Horizon (fictif, 12 mois) : 8 400 / 46 667 ≈ 18,0 %
Souscriptions nettes = souscriptions − rétractations / dossiers incomplets clos
CA attribué année 1 = souscriptions nettes × revenu moyen année 1
  8 400 × 95 € = 798 000 € (fictif)

KPI D'USAGE
Taux d'activation (30 j) = clients ayant fait au moins 1 paiement carte / souscripteurs
Taux d'utilisation (90 j) = clients actifs 90 j / clients équipés
Adoption cible = souscripteurs du segment / population visée (si la base est connue)

KPI QUALITÉ ET ÉCONOMIE
CAC = dépenses d'acquisition attribuables / clients acquis
  Horizon (fictif) : 1 554 000 € / 8 400 ≈ 185 €
Satisfaction : enquête post-souscription ou taux de réclamation — pas un NPS « marché »
Écart budget = réalisé − voté (et commentaire : périmètre, glissement, imprévu)
Écart planning = date réelle du jalon − date de référence du cadrage

RÈGLE DE SÉLECTION
Si vous ne savez pas quelle décision le chiffre change, ce n'est pas un KPI du projet.`),
      ],
      erreurs:
        "Prendre le trafic pour de la conversion. Compter les souscriptions commencées comme des ventes. Oublier les rétractations. Attribuer tout le CA de la banque au projet. Publier un CAC sans dire ce qui est dans le numérateur. Inventer un NPS de marché. Suivre vingt indicateurs et n'en lire aucun en comité. Laisser finance découvrir la formule le jour du COMEX.",
      particuliers:
        "En B2B, le « nombre de souscriptions » devient souvent le nombre de contrats signés et le revenu récurrent : la formule change, le principe (définition écrite) reste. En assurance, une « souscription » n'est pas toujours un encaissement : distinguerez production, pièces, et mise en vigueur. En distribution, le taux d'utilisation d'un outil commercial n'est pas le CA. Un projet de partenariat compte le volume généré ET la quote-part reversée, sinon le CA est surévalué.",
      exercice:
        "Le sponsor Horizon veut « un dashboard avec tout : likes, trafic, CA groupe, NPS marché, et le ROI ». Proposez 6 KPI maximum, chacun avec formule, propriétaire et décision associée. Écartez explicitement 3 indicateurs de vanité.",
      correction:
        "Six KPI défendables : conversion parcours (digital — simplifier l'étape justificatifs si < 22 %) ; souscriptions nettes 25-35 (marketing — intensité acquisition vs offre) ; CAC (marketing + finance — arbitrer le mix canal) ; CA année 1 du flux (finance — comparer au business case) ; activation carte 30 j (digital / réseau — relance d'équipement) ; écart budget (chef de projet + finance — arbitrage de périmètre). Vanité à écarter : likes ; trafic non rattaché ; NPS « de marché » inventé. Le CA groupe n'est pas un KPI de ce projet : il noie le signal. Le ROI se calcule en clôture ou à date, avec les coûts totaux, pas en temps réel sur un slide marketing.",
    }),

    pack({
      title: "Construire un reporting",
      description:
        "Structurer un reporting de comité : résultats, objectifs, écarts, explications, risques, actions, décisions attendues — avec un tableau de bord Horizon.",
      minutes: 4,
      objectifs:
        "Vous produisez un reporting lisible en cinq minutes par un décideur : le réalisé, la cible, l'écart, la cause, le risque, l'action, et la décision demandée. Vous n'enterrez pas une alerte au milieu d'un commentaire de campagne.",
      theorie:
        "Le reporting n'est pas un recueil de nouvelles. C'est un outil d'arbitrage. Un comité qui reçoit quinze pages de captures d'écran n'arbitre pas : il feuillette. La structure utile est toujours la même, quel que soit l'outil (slide, tableur, intranet) : résultats, objectifs, écarts, explications, risques, actions correctives, décisions attendues.\n\nLe résultat est un fait mesuré selon la définition validée. L'objectif est celui du cadrage ou du business case, pas une cible réécrite le matin du comité pour « passer au vert ». L'écart est la différence, en unité et en pourcentage quand c'est lisible. L'explication distingue cause (parcours, canal, saison, incident, hypothèse fausse) et symptôme. Le risque dit ce qui se passe si l'on n'agit pas. L'action a un propriétaire et une date. La décision attendue est formulée pour le sponsor ou le comité : reporter un jalon, débloquer un budget, réduire un périmètre, lancer un plan B.\n\nUn tableau de bord de projet n'est pas le tableau de bord de l'entreprise. Il ne contient que les KPI du cadrage, l'avancement des jalons, le budget, les risques ouverts, et trois messages. Le vert / orange / rouge n'a de sens que si les seuils sont écrits avant le premier écart. Colorier au feeling n'est pas du pilotage.",
      methode:
        "Avant le comité : 1) actualiser les KPI à la date de gel convenue avec finance. 2) Calculer les écarts. 3) Rédiger une phrase de cause par écart significatif. 4) Relier chaque écart à un risque du registre ou à une nouvelle ligne. 5) Proposer une action et, si besoin, une décision. 6) Faire relire le chiffre par le propriétaire de la donnée. En séance : trois messages, puis le détail. Après : compte rendu avec décisions, pas un copier-coller du slide.",
      noteText:
        "Vous ne « maquillez » pas un rouge en orange pour protéger le climat. Un écart expliqué est professionnel. Un écart caché se paie au comité suivant, souvent plus cher. Le chef de projet n'est pas le valideur des chiffres réglementaires.",
      exemple:
        "Comité mensuel Horizon, mois 2 après lancement du pilote (données fictives). Conversion 21 % vs cible 24 % à ce stade. Cause : 40 % des abandons restent à l'étape justificatifs. Action : digital réduit l'étape de 6 pièces à 4, sous avis conformité. Décision demandée : autoriser le lot 2 de simplification, 18 k€, ou accepter la cible revue. Le sponsor tranche ; le chef de projet n'invente pas l'avis ACPR.",
      extra: [
        h("Exemple de tableau de bord — Banque Horizon (fictif)"),
        code(`TABLEAU DE BORD PROJET — Banque Horizon — Offre 25-35
Date de gel : 15 du mois    Comité : 18    Chef de projet : [nom]
Périmètre : pilote digital + 12 agences    Mois projet : M2 post-pilote

KPI                  Réalisé    Cible    Écart     Seuil alerte    Propriétaire
Conversion parcours  21 %       24 %     −3 pts    < 20 %          Digital
Souscriptions nettes 620        700      −80       < 600           Marketing
CAC                  172 €      150 €    +22 €     > 180 €         Marketing + finance
CA flux année 1      58,9 k€    66,5 k€  −7,6 k€   —               Finance
Activation 30 j      61 %       70 %     −9 pts    < 55 %          Réseau + digital
Réclamations / 1 000 14         10       +4        > 20            Qualité
Budget investi       96 k€      110 k€   −14 k€    > voté          Chef de projet
Jalon « lot 2 UX »   12 j de retard vs référence cadrage           Digital + IT

MESSAGES (3)
1. Conversion sous cible : friction justificatifs. Lot 2 UX prêt, avis conformité en cours.
2. CAC encore haut : mix trop paid social. Arbitrage mix à demander.
3. Budget sous-consommé : pas une bonne nouvelle si le lot 2 n'est pas lancé.

RISQUES OUVERTS
R12 Conformité — délai avis lot 2 — impact lancement national — mitigation : gel publicité tant que l'avis manque.
R07 Réseau — activation faible — formation relance J+7.

DÉCISIONS ATTENDUES
D1. Autoriser lot 2 UX (18 k€) sous réserve de l'avis conformité, ou revoir la cible conversion.
D2. Plafonner le paid social à 40 % du mix acquisition jusqu'au prochain comité.

CE QUE CE DASHBOARD N'EST PAS
Ni le reporting groupe, ni un avis réglementaire, ni une prévision de part de marché.`),
      ],
      erreurs:
        "Envoyer le fichier brut des 40 KPI. Changer la cible le matin pour rester au vert. Commenter la campagne au lieu de l'écart. Omettre la décision demandée. Présenter un CAC sans numérateur. Faire parler le chef de projet à la place de la finance sur un chiffre non gelé.",
      particuliers:
        "En ETI sans « comité de projet », le même fond tient en une page au COMEX mensuel. En startup, le reporting hebdomadaire existe : la structure (écart, cause, décision) ne change pas, seule la fréquence change. Si l'outil de BI n'est pas prêt, un tableur daté et gelé vaut mieux qu'un slide approximatif.",
      exercice:
        "À partir du dashboard Horizon ci-dessus, rédigez en huit lignes la synthèse orale d'ouverture du comité (trois messages, une décision prioritaire, un risque conformité).",
      correction:
        "« Conversion 21 % contre 24 % : la friction justificatifs explique l'essentiel de l'abandon. Le lot 2 UX est prêt ; il n'est pas déployé tant que l'avis conformité n'est pas rendu — je ne contourne pas cette étape. CAC 172 € contre 150 € : le mix paid social pèse trop. Budget sous-consommé de 14 k€, lié au lot 2 non lancé. Je demande aujourd'hui d'autoriser le lot 2 pour 18 k€ sous réserve de l'avis, et de plafonner le paid social à 40 % du mix. Si l'avis tarde au-delà du 30, je reviendrai avec une cible conversion revue plutôt qu'avec une promesse de rattrapage. » Une synthèse qui cache le rouge conformité ou qui promet le lot 2 « on verra l'avis plus tard » est une faute professionnelle.",
    }),

    pack({
      title: "REX et amélioration continue",
      description:
        "Conduire un retour d'expérience : écarts, causes, actions, capitalisation et amélioration des processus, sans procès d'intention.",
      minutes: 3,
      objectifs:
        "Vous organisez un REX factuel après un jalon ou une clôture : ce qui était prévu, ce qui s'est produit, pourquoi, ce que l'on change, et où cela s'écrit pour le projet suivant. Vous séparez la capitalisation du blâme.",
      theorie:
        "L'amélioration continue n'est pas un slogan de fin de slide. C'est la capacité à transformer un écart en règle de travail. Le retour d'expérience (REX) est le rituel qui rend cela possible. Il n'attend pas la fin du projet : un REX de jalon (après un pilote, après un comité raté, après un incident) évite de répéter la même erreur jusqu'à la clôture.\n\nLe REX suit une chaîne : écart (fait vs référence), causes (pas un coupable), actions correctives (propriétaire, délai), capitalisation (ce que l'on inscrit dans un standard, un modèle, une check-list), amélioration de processus (ce que l'organisation change, au-delà du projet). Sans la dernière étape, le REX est un exutoire.\n\nLes causes se cherchent du côté des hypothèses du business case, du cadrage, des dépendances, de la charge, de la qualité de donnée, de la gouvernance — rarement du seul « manque d'agilité ». Un écart de conversion peut venir d'une cible irréaliste, d'un parcours, d'un mix d'acquisition, ou d'une offre mal positionnée. Traiter le symptôme (plus de publicité) sans la cause (friction KYC) aggrave le CAC.\n\nLe chef de projet anime. Il ne rédige pas un réquisitoire. Les faits sont datés. Les opinions sont marquées comme telles. Les actions non tenues du REX précédent sont le premier point de l'ordre du jour.",
      methode:
        "1) Fixer le périmètre du REX (jalon, incident, clôture). 2) Rappeler la référence (cadrage, BC, planning). 3) Lister les écarts chiffrés. 4) Faire exprimer les causes par les propriétaires, puis recouper. 5) Trancher trois à cinq actions, pas vingt vœux. 6) Décider ce qui entre dans la bibliothèque de modèles (check-list, RACI, seuil d'alerte). 7) Publier le compte rendu sous cinq jours. 8) Revoir les actions au comité suivant.",
      noteText:
        "Un REX n'est pas une enquête disciplinaire. Si un manquement de conformité apparaît, il sort du REX et entre dans le circuit risques / conformité / juridique. Le chef de projet n'enterre pas un incident réglementaire dans une « leçon apprise » informelle.",
      exemple:
        "Après le pilote Horizon (12 agences, données fictives), le REX constate : activation 61 % vs 70 %, cause principale = les conseillers n'avaient pas le script de relance J+7 ; action = script + créneau de 20 minutes dans le rituel d'agence ; capitalisation = la check-list de lancement inclut désormais « script relance + propriétaire réseau ». Une cause écartée : « les jeunes n'aiment pas les banques ». Ce n'est pas une cause actionnable.",
      extra: [
        h("Canevas de REX (à copier)"),
        code(`REX — [nom du projet] — [jalon ou clôture] — date
Référence : note de cadrage du [date] / BC version [n]
Participants : sponsor, chef de projet, métiers concernés
1. FAITS ET ÉCARTS (chiffres, jalons, budget, qualité)
2. CAUSES RETENUES (max 5, actionnables)
3. CAUSES ÉCARTÉES (et pourquoi)
4. ACTIONS (propriétaire, date, critère de done)
5. CAPITALISATION (modèle / check-list / seuil à mettre à jour)
6. ALERTES SORTANT DU REX (conformité, juridique, risques — circuit dédié)
7. CE QUE L'ON NE CHANGERA PAS (décision assumée)`),
      ],
      erreurs:
        "Faire le REX six mois trop tard. Confondre cause et coupable. Produire vingt actions sans propriétaire. Recolorer les cibles a posteriori pour « réussir » le projet. Transformer un incident de conformité en anecdote. Ne jamais mettre à jour les modèles.",
      particuliers:
        "Projet arrêté : le REX est encore plus nécessaire (coûts irrécupérables, hypothèses à ne pas recycler). Projet « succès commercial, échec d'adoption » : deux écarts, deux plans. Projet multi-pays : un REX local ne remplace pas la capitalisation groupe, et inversement.",
      exercice:
        "CAC Horizon à 172 € vs 150 €. Marketing veut « plus de budget pubs ». Rédigez les trois questions de causes que vous posez en REX avant d'arbitrer le budget.",
      correction:
        "1) Le numérateur a-t-il changé (nouveaux postes dans le CAC) ou le dénominateur (moins de souscriptions nettes) ? 2) La conversion parcours a-t-elle baissé — auquel cas plus de publicité alimente un entonnoir percé ? 3) Le mix canal a-t-il dérivé vers le plus cher, et que dit le CAC par canal ? Si la cause est la friction justificatifs, l'action est le lot UX + avis conformité, pas 20 k€ de paid social. Demander plus de budget avant ces trois questions est une erreur de REX.",
    }),

    pack({
      title: "Réussir un entretien pour le poste",
      description:
        "Quinze questions d'entretien de chef de projet marketing et développement, avec réponses modèles argumentées : métier, méthodes, arbitrages, limites.",
      minutes: 5,
      objectifs:
        "Vous répondez à un oral de recrutement par une méthode, un exemple (Horizon ou un cas comparable), une limite d'autonomie, et une distinction nette entre votre rôle et celui de la conformité, du juridique, de la finance et du sponsor. Vous ne vendez pas un titre que cette formation ne délivre pas.",
      theorie:
        "Un recruteur de chef de projet marketing et développement n'achète pas un vocabulaire (« je suis agile, data-driven, customer-centric »). Il teste si vous savez cadrer, chiffrer, arbitrer, coordonner et mesurer — et si vous savez où s'arrête votre mandat. Les questions techniques et comportementales visent le même fond : le raisonnement sous contrainte (budget, délai, conformité, parties prenantes).\n\nUne réponse modèle tient en quatre temps : 1) définir ce que l'on vous demande, 2) donner la méthode dans l'ordre, 3) illustrer par un cas fictif ou réel non confidentiel, 4) poser la limite (vous ne validez pas un avis ACPR, vous ne signez pas un budget, vous n'inventez pas un chiffre de marché). Trois minutes par réponse suffisent. Le roman de votre personnalité n'est pas un business case.\n\nCette formation prépare des méthodes. L'attestation LOU Academy certifie un parcours sur cette plateforme. Ce n'est pas un titre RNCP, ni un diplôme d'État, ni une habilitation réglementaire. En entretien, vous parlez de ce que vous savez faire, pas d'un statut que vous n'avez pas.",
      methode:
        "Avant l'entretien : relire vos cinq preuves (un cadrage, un mini BC, un comité, un risque conformité, un REX). Préparer les quinze questions ci-dessous à voix haute. Préparer trois questions au recruteur (gouvernance réelle, qui valide le BC, place de la conformité dans les projets). Pendant : une idée par phrase, un chiffre seulement s'il est sourcé ou étiqueté fictif / interne. Après : noter les questions surprises pour le prochain oral.",
      noteText:
        "Ne divulguez aucun chiffre réel d'un employeur précédent. Utilisez des cas fictifs (Banque Horizon) ou des ordres de grandeur anonymisés selon consigne. Ne promettez pas de « faire valider la conformité vous-même ».",
      exemple:
        "Question : « Comment choisissez-vous entre deux scénarios au même ROI ? » Réponse courte entendue comme professionnelle : « Je sors du seul ROI. Je compare délai, faisabilité, risques — surtout conformité et dépendance — et alignement stratégique. Sur Horizon, A et B peuvent être défendables ; je recommande B seulement si l'avis conformité, le MVP à six mois et le budget tiennent. Sinon je recommande A. »",
      extra: [
        h("Comment utiliser les quinze questions"),
        t(
          "Travaillez à voix haute, 1 min 30 à 3 minutes par réponse. La formulation ci-dessous n'est pas la seule possible ; c'est un standard professionnel : vouvoiement, méthode, limite, pas de statistique inventée. Les entreprises citées (Horizon, NéoPulse, Lumen) sont fictives."
        ),
        h("Questions 1 à 5 — Métier, marché, business case"),
        code(`Q1. Quel est le rôle d'un chef de projet marketing et développement ?
Réponse modèle. Le rôle est de faire passer une opportunité d'offre, de parcours, de partenariat ou d'outil commercial d'un besoin flou à une décision, puis à un déploiement mesuré. Je cadre (objectifs, périmètre, parties prenantes, livrables), je fais construire le business case avec la finance, je prépare l'arbitrage, je pilote jalons et risques, je coordonne marketing, commercial, digital, IT, finance, risques, conformité, juridique et réseaux, je prépare la mise en marché, je mesure. Je ne suis pas le directeur marketing, ni le chef de produit seul propriétaire de l'offre, ni le valideur réglementaire. Ma valeur, c'est la tenue du dossier et des dates que j'annonce, pas un titre.

Q2. Comment analysez-vous une opportunité de marché ?
Réponse modèle. Je commence par le problème client et les faits internes (volumes, conversion, CAC, réclamations), pas par l'idée du sponsor. Je liste les informations manquantes. Je pose un diagnostic : tendance, concurrence (ici fictive : néobanques vs réseau), barrières, capacités. Je formule une problématique métier et des critères pour dire si l'opportunité mérite un business case. Je n'invente pas une part de marché. Si les données manquent, je le dis et je propose le recueil minimum, je ne remplis pas les trous par de l'optimisme.

Q3. Comment réalisez-vous un benchmark ?
Réponse modèle. Je définis d'abord les critères (offre, prix, parcours, délai de souscription, services, distribution, promesse), le périmètre (qui est comparable, qui ne l'est pas) et la date. Je recueille des faits observables, pas des rumeurs. Je distingue ce qui est public de ce qui est hypothèse. Sur Horizon, comparer le parcours à une néobanque fictive sur le nombre d'étapes et le délai, ce n'est pas affirmer une part de marché. Un benchmark sert à décider un écart à combler ou à assumer, pas à copier.

Q4. Comment construisez-vous un business case ?
Réponse modèle. Je sépare hypothèses, coûts, bénéfices, risques, scénarios et recommandation. Je distingue le BC du budget projet et du business plan d'entreprise. Je fais chiffrer avec la finance : investissement, run, revenus, bénéfices non financiers à part. Je refuse le double comptage. Je présente au moins un scénario de référence sans projet. Je date les hypothèses. Un BC sans risques ni limites n'est pas un BC, c'est une plaquette.

Q5. Comment évaluez-vous la rentabilité d'un projet ?
Réponse modèle. Formules d'abord. Coûts totaux = investissement + runs. Bénéfice net = revenus − coûts totaux. ROI = bénéfice net / coûts totaux. Payback simple = délai pour récupérer l'investissement sur les flux nets. Cas pédagogique du cours : 120 k€ + 3 × 30 k€ = 210 k€ de coûts ; 3 × 90 k€ = 270 k€ de CA ; bénéfice 60 k€ ; ROI 28,6 % ; payback 2 ans de l'investissement. VAN : introduction avec un taux étiqueté hypothèse, pas une vérité unique. Ces chiffres ne valident pas seuls un projet : délai, conformité, faisabilité pèsent autant.`),
        h("Questions 6 à 10 — Scénarios, comité, roadmap, risques, retard"),
        code(`Q6. Comment choisissez-vous entre plusieurs scénarios ?
Réponse modèle. Je construis une grille : investissement, bénéfices, ROI, délai, faisabilité, risques (dont conformité et dépendance), impact client, alignement stratégique. Le scénario au ROI le plus élevé n'est pas automatiquement le bon. Sur Horizon, C (partenariat) peut afficher un ROI supérieur et rester moins défendable si le tiers n'est pas maîtrisé. Je recommande, je ne décide pas : le comité décide. Je dis aussi dans quel cas je changerais de recommandation.

Q7. Comment préparez-vous un comité de pilotage ?
Réponse modèle. Un pack court : synthèse, écarts, risques, décisions demandées. Chiffres gelés avec la finance. Pas de surprise réglementaire en séance : les alertes conformité sont déjà dans le circuit. Je fais relire le slide de recommandation par le sponsor. En séance, trois messages, puis le détail. Après, un compte rendu de décisions, pas un roman. Un comité n'est pas une réunion d'information déguisée.

Q8. Comment construisez-vous une roadmap ?
Réponse modèle. Je pars des livrables et des dépendances, pas d'un rétroplanning magique à partir de la date politique. Jalons vérifiables (cadrage validé, avis conformité, pilote, go/no-go, lancement, REX). Responsables nommés. Chemin critique visible (souvent IT + conformité). Sur Horizon, six mois n'autorisent qu'un MVP : compte, carte, parcours simplifié — pas une place de marché de quinze partenaires. Si la date est intenable, je l'écris avant de « tenir le planning » sur le papier.

Q9. Comment identifiez-vous les risques ?
Réponse modèle. Je parcours les familles : marché, offre, IT, données, juridique, conformité, opérationnel, financier, partenaires, adoption réseau. Pour chacun : cause, impact, probabilité qualitative, détection, mitigation, responsable, indicateur d'alerte. Je ne confonds pas un risque (événement incertain) et un problème (déjà là). Un risque de conformité non escaladé n'est pas « géré » : il est caché. Je ne cote pas seul un risque réglementaire à la place de la fonction risques.

Q10. Comment gérez-vous un retard projet ?
Réponse modèle. Je mesure l'écart de jalon, j'identifie la cause (charge, dépendance, périmètre, qualité, décision non prise), je propose des leviers : réduire le périmètre, ajouter du temps, ajouter des moyens, séquencer, arrêter. Je n'annonce pas un rattrapage sans levier. Si le retard vient d'un avis conformité, je ne « presse » pas la conformité : je recale le lancement public. Un retard expliqué tôt est un arbitrage. Un retard révélé la veille est une perte de confiance.`),
        h("Questions 11 à 15 — Coordination, conflit, lancement, mesure, budget"),
        code(`Q11. Comment coordonnez-vous plusieurs directions ?
Réponse modèle. Par un RACI lisible, un rituel unique, des livrables nommés, et un escalade claire vers le sponsor. Marketing n'est pas IT, IT n'est pas conformité, le réseau n'est pas un canal d'exécution muet. Je prépare les arbitrages de priorité. Je ne fais pas dix réunions parallèles qui se contredisent. En cas de conflit de ressource, j'écris l'impact sur le jalon et je fais trancher, je ne « débrouille » pas en silence.

Q12. Comment gérez-vous un désaccord avec un contributeur ?
Réponse modèle. Je recadre sur les faits du cadrage et sur le RACI. Si le désaccord est métier, on documente les options. Si c'est un avis de conformité ou juridique, je ne le neutralise pas par un vote marketing. Si c'est une question de priorité, j'escalade au sponsor avec l'impact délai / coût / risque. Je ne personnalise pas. Je ne contourne pas un expert en allant « directement au COMEX » sans le dire.

Q13. Comment préparez-vous un lancement commercial ?
Réponse modèle. Go/no-go sur des conditions : offre cohérente (promesse, tarif, parcours, capacité, contraintes), avis des fonctions de contrôle, réseau formé, scripts, outils, plan de com, indicateurs, dispositif d'incident. Un lancement « techniquement prêt » sans formation réseau n'est pas un lancement. Je sépare pilote et généralisation. Je ne pousse pas une publicité nationale si le parcours casse encore.

Q14. Comment mesurez-vous la réussite d'un projet ?
Réponse modèle. Par les critères de réussite écrits au cadrage, pas par l'ambiance du cocktail de lancement. Souscriptions nettes, conversion, CAC, adoption, qualité, budget, jalons. Un projet peut « sortir à la date » et rater l'adoption : c'est un échec partiel, à traiter en REX. Je compare au scénario de référence sans projet, pas seulement à l'année précédente. Je ne déclare pas le succès avant la fenêtre de mesure convenue.

Q15. Comment réagissez-vous lorsqu'un projet dépasse son budget ?
Réponse modèle. J'arrête de dépenser dans le flou. Je recalcule l'écart (quoi, pourquoi : périmètre, prix, charge, imprévu). Je propose un arbitrage : réduire le lot, décaler, financer un avenant avec un BC révisé, ou arrêter. Je n'absorbe pas l'écart en silence. Je n'annonce pas un ROI inchangé. Si l'écart vient d'une exigence de conformité tardive, c'est un coût de sécurisation, pas une « mauvaise surprise marketing » à contourner.

PIÈGE D'ORAL À ÉVITER
« Grâce à LOU je suis certifié chef de projet RNCP. » Faux. L'attestation de parcours n'est pas un titre RNCP ni un diplôme d'État.`),
      ],
      erreurs:
        "Réciter des anglicismes. Inventer un chiffre de marché. Promettre de valider la conformité. Dire que le ROI le plus élevé gagne toujours. Cacher un retard. Présenter l'attestation LOU comme un diplôme. Divulguer un BC réel nominatif d'un ancien employeur.",
      particuliers:
        "Entretien chez un assureur : on vous testera sur la mise en vigueur et le parcours, pas seulement sur le CAC. En ETI industrielle B2B : « souscription » = contrat, cycle long, peu de digital grand public — la méthode (cadrage, BC, risques) reste. Si l'on vous demande un salaire : fourchette selon l'offre, pas une garantie liée à cette formation.",
      exercice:
        "En 90 secondes à voix haute, répondez à Q6 sur Horizon (A / B / C) puis à Q15. Chronométrez. Relisez ensuite les réponses modèles : avez-vous cité la conformité et le fait que vous recommandez sans décider ?",
      correction:
        "Une réponse orale réussie à Q6 nomme la grille (pas seulement le ROI), dit que C peut être séduisant et risqué, et conditionne B (conformité, MVP six mois, budget). Une réponse réussie à Q15 commence par figer l'écart, propose un arbitrage, et refuse le silence. Si vous avez dit « on lance quand même, on verra la conformité » ou « le plus rentable gagne », recommencez : ce sont des réponses éliminatoires sur ce métier.",
    }),

    quizLesson({
      title: "Quiz — Performance, reporting et entretien",
      description:
        "Cinq questions : sélection de KPI, structure de reporting, REX, posture d'entretien, écart budget. Seuil 70 %.",
      passing_score: 70,
      minutes: 3,
      questions: [
        q({
          question:
            "Le sponsor veut un tableau de bord « avec le trafic, les likes, le CA de toute la banque et un NPS de marché ». Quelle sélection est professionnelle ?",
          options: [
            "A. Conserver trafic, likes et CA groupe : un comité a besoin de visibilité large.",
            "B. Retenir un nombre limité de KPI liés aux critères de réussite (conversion, souscriptions nettes, CAC, CA du flux, adoption, écart budget), écarter les indicateurs de vanité, et n'inventer aucun NPS de marché.",
            "C. Publier uniquement le ROI ressenti par le marketing, plus rapide à produire.",
            "D. Recopier le tableau de bord groupe : cela évite de définir des formules.",
          ],
          correct: 1,
          explanation:
            "Un KPI change une décision et s'appuie sur une définition. Trafic, likes et CA groupe noient le signal du projet. Un NPS de marché inventé n'est pas une donnée. Le ROI « ressenti » n'est pas un calcul.",
        }),
        q({
          question:
            "Sur Horizon (données fictives), le CAC passe de 150 € à 172 € et la conversion parcours est sous cible. Quelle lecture est la plus solide ?",
          options: [
            "A. Demander immédiatement plus de budget publicitaire pour compenser.",
            "B. Recalculer le CAC plus tard, quand les volumes seront plus jolis.",
            "C. Distinguer numérateur et dénominateur, vérifier si l'entonnoir est percé (conversion), et n'arbitrer le mix ou le budget qu'après les causes — pas avant.",
            "D. Ignorer le CAC : seul le nombre de likes de la campagne compte au lancement.",
          ],
          correct: 2,
          explanation:
            "Plus de publicité dans un parcours qui convertit mal aggrave souvent le CAC. Le REX commence par les causes. Les likes ne sont pas un KPI de ce projet.",
        }),
        q({
          question: "Un reporting de comité utile contient surtout :",
          options: [
            "A. Résultats, objectifs, écarts, explications, risques, actions, décisions attendues — avec des chiffres gelés.",
            "B. Un roman de la campagne et des captures d'écran de l'outil de pub.",
            "C. Uniquement les indicateurs au vert, pour protéger le climat.",
            "D. L'avis de conformité rédigé par le chef de projet, qui « valide pour gagner du temps ».",
          ],
          correct: 0,
          explanation:
            "Le comité arbitre. Cacher les rouges ou usurper la conformité sont des fautes. Le pack de campagne n'est pas un reporting de projet.",
        }),
        q({
          question: "Un REX de pilote sert d'abord à :",
          options: [
            "A. Désigner un coupable pour rassurer le sponsor.",
            "B. Recolorer les cibles a posteriori afin de déclarer le succès.",
            "C. Établir les écarts, des causes actionnables, des actions avec propriétaire, et une capitalisation dans les modèles — en sortant un incident de conformité vers le circuit dédié.",
            "D. Remplacer l'avis juridique par des « leçons apprises » informelles.",
          ],
          correct: 2,
          explanation:
            "Le REX capitalise. Il n'est ni un procès, ni un maquillage, ni un substitut aux fonctions de contrôle.",
        }),
        q({
          question:
            "En entretien, on vous demande comment vous réagissez à un dépassement de budget. Quelle réponse est attendue ?",
          options: [
            "A. « J'absorbe l'écart en silence pour ne pas inquiéter ; le ROI restera le même. »",
            "B. « Je fige l'écart, j'en identifie la cause, je propose un arbitrage (réduire, décaler, financer, arrêter) et je ne contourne pas une exigence de conformité même si elle coûte. »",
            "C. « Je lance quand même : le comité n'aime pas les mauvaises nouvelles. »",
            "D. « Je présente l'attestation LOU Academy comme un titre RNCP, cela couvre l'écart. »",
          ],
          correct: 1,
          explanation:
            "Silence, ROI inchangé, lancement malgré tout, usurpation de titre : réponses éliminatoires. L'attestation n'est ni un RNCP ni un diplôme d'État.",
        }),
      ],
    }),
  ],
};
