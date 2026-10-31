import { pack, quizLesson, q, h, t, code } from "../lib.mjs";

export default {
  position: 8,
  title: "Finance RH, dimensionnement et livrables de conseil",
  description:
    "Chiffrer une masse salariale et un coût employeur sans inventer un taux légal, construire un ROI RH pédagogique, dimensionner une charge, et produire des slides et une synthèse exécutive sans faux benchmark. Power BI : modèle et mesures, pas une certification DAX.",
  lessons: [
    pack({
      title: "Masse salariale, coût employeur, ROI et business case RH",
      description:
        "Distinguer brut, masse salariale et coût employeur, puis chiffrer un mini business case RH avec des hypothèses étiquetées.",
      minutes: 8,
      objectifs:
        "Vous séparez masse salariale et coût employeur. Vous calculez un ROI RH sur un exemple numérique petit et cohérent, étiqueté pédagogique. Vous savez ce qu'un business case RH éclaire, et ce qu'il n'autorise pas (CSE, GEPP, juridique). Vous n'inventez aucun taux de charges « France ».",
      theorie:
        "La masse salariale, au sens pédagogique de ce parcours, est la somme des rémunérations brutes du périmètre retenu : salaires de base, variables déjà versés, primes intégrées au brut. Ce n'est pas le coût complet pour l'employeur. Le coût employeur ajoute ce que l'entreprise paie en plus du brut : cotisations et contributions à sa charge, et, selon le cadrage finance, d'autres postes (prévoyance employeur, épargne, etc.). Un junior ne possède pas « le » taux France. Les assiettes, régimes, allègements, conventions et effectifs font varier le réel. Écrire « les charges patronales = 45 % » comme vérité légale est une faute.\n\nLe ROI d'un projet RH mesure un écart par rapport au sans projet : (bénéfice incrémental − coût du projet) / coût du projet, sur un horizon écrit. Le bénéfice n'existe que s'il est sourcé (départs évités, heures évitées, ETP non embauchés). Le « coût d'un départ » n'est pas un benchmark marché : c'est une hypothèse d'entreprise (recrutement, formation, perte de productivité) que finance et RH recalent. Un business case RH éclaire un go / no-go / go sous conditions. Il ne contourne pas le CSE, une obligation GEPP, ni un avis social. Un projet rentable sur tableur peut rester non lançable.",
      methode:
        "Avant tout chiffre : périmètre (quels contrats, quels sites, quelle période), source (SIRH, paie, finance), et étiquette hypothèse vs fait.\n\n1) Effectif en têtes (HC) et en ETP. Rappel : 35 h = 1 ETP pédagogique ; 28 h = 0,8 ETP. 2) Masse salariale = Σ bruts du périmètre. 3) Coût employeur = masse × coefficient validé par finance, ou ligne à ligne si paie le fournit — jamais un taux inventé « de place ». 4) Sans projet : que se passe-t-il si l'on ne dépense rien. 5) Coût du projet (une fois + annuel). 6) Bénéfice incrémental, une seule fois (anti-double compte). 7) Net, ROI, sensibilité (au moins deux valeurs du coût de remplacement ou du volume évité). 8) Recommandation conditionnelle, et liste de validations hors chiffre (social, SIRH, métiers).\n\nContrôle : si le coefficient 1,42 du cas ci-dessous sort de votre slide comme « taux légal », le livrable est faux.",
      noteText:
        "Tous les montants de ce module (28 000 €, 1,42, 0,35, 24 000 €) sont un cas pédagogique unique, fictif, pour Groupe Nova Services. Ils n'illustrent ni un taux URSSAF, ni un coût de remplacement « secteur services », ni un salaire de marché. L'attestation LOU Academy n'est pas une certification Excel / Power BI ni un titre RNCP.",
      exemple:
        "Nova, équipe pédagogique de 10 conseillers relation client. Huit à 35 h, deux à 28 h : 9,6 ETP. Brut annuel pédagogique 28 000 € par ETP. Masse 268 800 €. Finance n'a pas encore sorti le coût réel : le manager veut « 45 % de charges ». Vous refusez le 45 % magique. Vous posez une hypothèse 1,42, écrite comme telle, et vous demandez le recalage paie. Sur cette base, coût employeur 381 696 €, soit 39 760 € par ETP. Un programme rétention à 24 000 € est proposé. Sans hypothèse de départs évités, il n'y a pas de ROI : il y a une dépense.",
      extra: [
        h("Cas d'école — 10 conseillers Nova (fictif, petits nombres)"),
        t(
          "Un seul exemple numérique, réutilisé dans les exercices. Vérifiez chaque ligne. Horizon : 12 mois. Hors fiscalité, hors actualisation."
        ),
        code(`CAS PÉDAGOGIQUE — 10 CONSEILLERS NOVA (FICTIF)
Périmètre          8 personnes à 35 h (1 ETP) + 2 à 28 h (0,8 ETP)
ETP                8 + 1,6 = 9,6 ETP
Brut / ETP         28 000 € / an          ← hypothèse pédagogique, pas un marché
Masse salariale    9,6 × 28 000 = 268 800 €
Coefficient coût   1,42                   ← HYPOTHÈSE, pas un taux légal
Coût employeur     268 800 × 1,42 = 381 696 €
Coût / ETP         381 696 / 9,6 = 39 760 €

Programme rétention (coaching managers + parcours 90 jours) : 24 000 € une fois
Turnover actuel pédagogique sur les 10 : 3 départs / 10 = 30 %
Hypothèse « avec projet » : 1 départ / 10 = 10 %   → 2 départs évités
Coût de remplacement     0,35 × 39 760 = 13 916 €  ← HYPOTHÈSE, pas un benchmark
Bénéfice incrémental     2 × 13 916 = 27 832 €
Net                      27 832 − 24 000 = 3 832 €
ROI                      3 832 / 24 000 ≈ 16,0 %

SENSIBILITÉ (obligatoire avant un CODIR)
1 départ évité : bénéfice 13 916 − 24 000 = −10 084 €  → ROI négatif
3 départs évités : 41 748 − 24 000 = 17 748 €          → ROI ≈ 74 %
Le signe du ROI dépend de l'hypothèse, pas d'une « vérité secteur ».

CE QUE LE BC NE FAIT PAS
Il n'autorise pas à ignorer le CSE, une GEPP, un avis social.
Il ne prouve pas que 36 000 € brut annuel junior « sera » votre salaire.`),
      ],
      erreurs:
        "Confondre brut, net, masse et coût employeur. Poser 42 % ou 45 % « parce que tout le monde le dit ». Présenter 16 % de ROI comme une preuve de marché. Oublier le sans projet. Compter les départs évités et, en plus, « toute la masse des 10 » comme bénéfice. Promettre un ROI sans sensibilité. Faire signer le BC à la place du juridique. Citer ce 0,35 comme coût de remplacement France.",
      particuliers:
        "Si paie fournit le coût employeur ligne à ligne : vous l'utilisez, vous jetez le 1,42. Si le projet touche un effectif, un site ou des conditions de travail : le chiffre n'éteint pas l'information-consultation ; le junior escalade. En groupe multi-pays : le coefficient français n'est pas transposable. Un « quick win » à 24 k€ sans sponsor finance n'est pas un BC, c'est une envie.",
      exercice:
        "Sur le cas des 10 conseillers : (1) recalculez ETP, masse, coût employeur, coût / ETP. (2) Si le coefficient réel paie est 1,38 et non 1,42, que deviennent coût / ETP et ROI à 2 départs évités (coût de remplacement toujours 0,35 × coût / ETP) ? (3) Le manager veut publier « ROI 16 %, benchmark services ». Que répondez-vous ?",
      correction:
        "(1) 9,6 ETP ; 268 800 € ; 381 696 € ; 39 760 €. (2) Coût employeur 268 800 × 1,38 = 370 944 € ; / ETP = 38 640 € ; remplacement 0,35 × 38 640 = 13 524 € ; bénéfice 27 048 € ; net 3 048 € ; ROI 3 048 / 24 000 = 12,7 %. Le ROI a bougé sans que le programme change : c'est exactement pourquoi l'hypothèse doit rester visible. (3) Vous refusez le mot benchmark. 16 % est le résultat d'un cas fictif à 1,42 et 0,35. Vous pouvez dire : « Sur nos hypothèses écrites, le net est positif à 2 départs évités, négatif à 1. Décision : piloter 12 mois et recalculer, pas afficher un taux secteur. »",
    }),

    pack({
      title: "Dimensionner la charge et la capacité",
      description:
        "Passer d'un volume d'activité à un besoin d'ETP, lire un écart, et ne pas transformer un calcul en plan social.",
      minutes: 8,
      objectifs:
        "Vous calculez une charge (volume × temps unitaire), une capacité (ETP × heures disponibles × taux productif étiqueté), et un écart. Vous savez que l'écart n'est pas un licenciement, ni une embauche automatique. Vous refusez les heures « magiques » non sourcées.",
      theorie:
        "Dimensionner, c'est relier le travail à faire et les personnes disponibles, dans la même unité de temps. La charge est la quantité de travail : somme, pour chaque type d'acte, du volume prévu multiplié par le temps unitaire. La capacité est ce que l'équipe peut absorber : ETP × heures de présence convertibles en travail, éventuellement multipliées par un taux productif (part du temps réellement sur l'acte). Ce taux n'est pas un taux légal d'absentéisme. L'absentéisme se mesure dans l'entreprise ; on ne lui invente pas une norme nationale unique.\n\nL'écart = besoin d'ETP − ETP actuels (ou charge − capacité, puis reconverti). Un écart positif dit « il manque des heures », pas « il faut licencier » ni « il faut 12 CDI lundi ». Les leviers sont plusieurs : volume, temps unitaire, mix de compétences, sous-traitance, heures, recrutement, report de charge, outil. Un junior qui saute du tableur à l'organigramme cible sans métier, sans social et sans SWP produit une reco fragile.\n\nLes heures : dans ce parcours, 1 personne à 35 h = 1 ETP ; 28 h = 0,8. Un mois pédagogique peut être posé à 151,67 h (35 × 52 / 12) ou, pour un cas d'école, à 100 h productives / ETP / mois si cette convention est écrite. La convention, pas le mythe.",
      methode:
        "1) Nommer l'acte (dossier, appel, intervention terrain, dossier paie). 2) Volume : source, période, brut vs net d'annulation. 3) Temps unitaire : chronométrage interne, échantillon, ou hypothèse étiquetée — jamais « le marché fait 8 minutes ». 4) Charge = volume × temps, convertie en heures. 5) Capacité : ETP du périmètre × heures productives retenues. 6) Écart en heures puis en ETP. 7) Trois leviers, pas un seul (productivité, volume, ressources). 8) Sensibilité : ±20 % sur le temps unitaire.\n\nLivrable junior : un tableau à cinq colonnes (acte, volume, temps, heures, ETP) + trois phrases de limite. Contrôle : si vous ne savez pas d'où vient le temps unitaire, vous n'avez pas dimensionné, vous avez rêvé.",
      noteText:
        "Les 3 200 dossiers, 30 minutes et 100 h productives / ETP / mois sont un cas d'école Nova, pas une norme de centre de contacts. Ne les citez pas en mission réelle comme « les standards du cours LOU ».",
      exemple:
        "Nova, file « réclamations simples » (sous-ensemble pédagogique, pas les 320 conseillers). Volume 3 200 dossiers / mois. Temps unitaire interne 30 min (échantillon de 80 dossiers, pas un benchmark). Charge 1 600 h. Convention : 100 h productives / ETP / mois. Besoin 16 ETP. Équipe actuelle 14 ETP. Écart +2 ETP. Le directeur veut « deux CDI et on n'en parle plus ». Vous posez : le temps unitaire est-il stable si l'outil change ? Une partie des 3 200 est-elle évitable (qualité amont) ? 2 ETP en CDD de projet, en heures, ou en recrutement : trois options pour le SWP, pas un organigramme improvisé.",
      extra: [
        h("Cas d'école — file réclamations (fictif)"),
        code(`DIMENSIONNEMENT — FILE RÉCLAMATIONS NOVA (FICTIF)
Acte                 Réclamation simple (périmètre écrit)
Volume               3 200 / mois          (extrait SIRH pédagogique)
Temps unitaire       30 min                (échantillon interne, n = 80)
Charge               3 200 × 30 = 96 000 min = 1 600 h / mois
Heures productives   100 h / ETP / mois    ← CONVENTION PÉDAGOGIQUE
Besoin               1 600 / 100 = 16 ETP
Actuel               14 ETP
Écart                +2 ETP  (manque de capacité)

SENSIBILITÉ TEMPS UNITAIRE
24 min (−20 %)  charge 1 280 h  besoin 12,8 ETP  → surplus 1,2
36 min (+20 %)  charge 1 920 h  besoin 19,2 ETP  → manque 5,2
L'écart 2 ETP n'est solide que si le 30 min l'est.

LEVIERS (MECE, sans décider seul un plan social)
Volume     : réduire les réclamations évitables (qualité, process)
Temps      : outillage, scripts, formation — mesurer après, pas avant
Ressources : recrutement, mobilité interne, heures, prestataire, report
Social     : si le levier touche l'emploi, le junior n'invente pas la procédure
             CSE / GEPP ; il alerte le manager de mission et le social client.`),
      ],
      erreurs:
        "Prendre le HC pour de l'ETP. Oublier les temps partiels (28 h = 0,8). Inventer 7 % d'absentéisme « légal ». Publier un besoin d'ETP au CODIR sans sensibilité. Transformer +2 ETP en organigramme avec noms. Utiliser un temps unitaire « Gartner » non fourni. Confondre heures payées et heures productives sans le dire.",
      particuliers:
        "Activité 24/7 : le calendrier (couverture, week-ends) change la capacité, pas seulement l'ETP calendaire ; un junior demande le modèle d'équipe, il n'invente pas un coefficient nuit. Terrain : le temps de trajet fait partie de la charge si le métier le subit. Après fusion : deux temps unitaires distincts jusqu'à preuve d'un process unique. Pic saisonnier : on dimensionne le pic et le creux, pas la moyenne qui ment.",
      exercice:
        "Même file. Volume passe à 3 600 / mois, temps toujours 30 min, 14 ETP, 100 h productives. (1) Nouveau besoin et écart. (2) Combien de dossiers en moins (qualité amont) pour revenir à l'équilibre à 14 ETP ? (3) Le client dit « le secteur tient 22 minutes ». Que faites-vous ?",
      correction:
        "(1) Charge 3 600 × 0,5 h = 1 800 h ; besoin 18 ETP ; écart +4 ETP. (2) Capacité 14 × 100 = 1 400 h ; 1 400 / 0,5 = 2 800 dossiers : il faut éviter 800 dossiers / mois, ou baisser le temps unitaire, ou ajouter des ETP — les trois leviers restent ouverts. (3) Vous n'adoptez pas 22 min. Sans étude sourcée, périmètre, date, c'est un faux benchmark. Vous proposez un échantillon Nova (chronométrage) et une sensibilité 22 / 30 / 36, pas un slogan secteur.",
    }),

    pack({
      title: "Livrables de conseil : pyramide, synthèse, slides — et la limite des benchmarks",
      description:
        "Écrire pour un CODIR : conclusion d'abord, titres conclusifs, synthèse d'une page, dashboard. Enseigner la méthode du benchmark et ses limites. Power BI : modèle et mesures, pas une certif DAX.",
      minutes: 9,
      objectifs:
        "Vous structurez une communication de conseil (pyramide, exec summary, titres de slides qui concluent). Vous savez construire un mini modèle de données et nommer une mesure, sans prétendre certifier Power BI ou DAX. Vous refusez d'inventer un benchmark réel.",
      theorie:
        "Un livrable de conseil n'est pas un compte rendu d'analyse. C'est un outil de décision. La pyramide (principe de Minto) pose d'abord la réponse, puis les arguments groupés de façon MECE, puis les faits. Le décideur qui a trois minutes doit pouvoir trancher. La synthèse exécutive tient en une page : contexte, recommandation, justification, risques, décision attendue. Les slides ont des titres conclusifs : pas « Turnover », mais ce que le turnover change à la décision. Les annexes portent les tableaux ; le corps porte le message.\n\nLe benchmark est une comparaison sourcée, datée, au bon périmètre. Ce n'est pas un chiffre entendu dans un open space, ni « le secteur est à 12 % ». Une étude payante a un échantillon, une date, des définitions (turnover, ETP, France / monde). Sans cela, vous enseignez l'écart interne (Nova vs Nova N-1, site vs site) et vous marquez « donnée manquante ». Inventer un taux de place pour rassurer un CODIR est une faute éthique, pas un manque de slide.\n\nPower BI, dans ce parcours, est un concept : un modèle (tables de faits, dimensions, relations), des mesures (formules évaluées selon le filtre : DIVIDE des départs par l'effectif moyen). Ce cours n'ouvre pas Power BI. Il ne délivre aucune certification DAX. Coller une mesure trouvée sur un forum n'est pas une compétence certifiée.",
      methode:
        "Rédaction. 1) Question de décision en une phrase. 2) Réponse en une phrase (reco). 3) Trois arguments maximum, chacun sourcé. 4) Risques et conditions. 5) Décision demandée (go, no-go, go sous conditions, demande de donnée).\n\nSlides. Titre = phrase complète. Une idée par slide. Chiffre : unité, période, source, « fictif / interne / étude nommée ». Interdit : axe tronqué pour dramatiser, mix de définitions, benchmark sans fiche.\n\nBenchmark, méthode et limites. a) Définition identique (turnover = départs / effectif moyen, même période). b) Périmètre (pays, métier, taille). c) Date. d) Source primaire. e) Si a–d manquent : ne pas inventer, documenter le trou, proposer un protocole de collecte interne.\n\nPower BI (concept). Fait : une ligne par mois × métier (HC, ETP, départs). Dimensions : métier, mois, site. Mesure Turnover := DIVIDE( SUM(departs), AVERAGE(effectif_moyen) ). Pas une colonne calculée recopiée 12 fois. Export CSV pédagogique ; pas de fichier .pbix dans ce cours.",
      noteText:
        "Groupe Nova Services et tous les taux de ce module sont fictifs. Un titre de slide qui affirme « le secteur services est à 12 % de turnover » sans étude fournie par le client est un faux. L'attestation LOU n'est pas une certification Power BI / DAX / Excel, ni un titre RNCP.",
      exemple:
        "CODIR Nova, 20 minutes. Mauvaise ouverture : « On a beaucoup travaillé, voici 40 slides de pyramide des âges. » Bonne ouverture : « Nous recommandons un plan rétention conseillers sous conditions, pas une réorg RH globale lundi : 90 des 213 départs pédagogiques du groupe sont dans ce métier, soit 42 %. » Le DRH demande « et vs le marché ? ». Réponse junior : « Nous n'avons pas d'étude sourcée au bon périmètre. Inventer 12 % serait un faux benchmark. Voici Nova vs Nova, et un protocole si vous financez une étude. »",
      extra: [
        h("Titres conclusifs vs titres descriptifs"),
        code(`FAIBLE                         CONCLUSIF (message)
Turnover                       90 départs conseillers = 42 % des départs groupe
Pyramide des âges              62 techniciens 55+ : risque de charge, pas un plan social
Masse salariale                Cas 10 conseillers : 268 800 € de brut, 381 696 € de coût
                               (coeff. 1,42 = hypothèse, pas un taux légal)
Organisation RH                3 SIRH + 45 HC RH : d'abord un diagnostic process, pas
                               une fusion d'équipes improvisée
Next steps                     Décision demandée : pilote rétention 24 k€ / 12 mois,
                               recalage paie du 1,42, pas de benchmark inventé`),
        h("Synthèse exécutive — squelette"),
        code(`SYNTHÈSE EXÉCUTIVE — 1 PAGE — CODIR
Nova Services (fictif) — [date] — Consultant junior : [nom] — Manager de mission : [nom]

CONTEXTE (3 lignes, faits internes)
RECOMMANDATION (1 phrase, conditionnelle)
JUSTIFICATION (3 arguments sourcés, MECE)
LIMITES (données manquantes, hypothèses, ce qui n'est pas un benchmark)
RISQUES (dont social : le junior n'écrit pas l'avis CSE / GEPP)
DÉCISION ATTENDUE (numérotée : valider, reporter, financer une donnée, saisir le social)
ANNEXES : tableur, définitions KPI, CSV, pas 20 slides lues en séance`),
        h("Power BI — modèle et mesures (concept, pas une certif)"),
        t(
          "Vous décrivez un modèle. Vous n'affirmez pas « je suis certifié DAX ». Une mesure n'est pas un chiffre tapé dans une cellule : elle se recalcule selon le filtre (année, métier). Une colonne calculée fige une valeur dans la table ; on ne s'en sert pas pour un ratio qui doit réagir au filtre. Ce parcours fournit un CSV pédagogique. Il n'installe pas Power BI Desktop et ne prépare aucun examen éditeur."
        ),
        code(`MODÈLE CONCEPTUEL (pas un .pbix)
fait_effectifs     mois, id_metier, hc, etp, departs, entrees, effectif_moyen
dim_metier         id_metier, libelle, famille
dim_mois           mois, annee, trimestre
Relation           fait_effectifs[id_metier] → dim_metier[id_metier]

MESURES (intention, pas une certification DAX)
ETP := SUM( fait_effectifs[etp] )
Departs := SUM( fait_effectifs[departs] )
Turnover := DIVIDE( [Departs], AVERAGE(fait_effectifs[effectif_moyen]) )
  Rappel pédagogique : turnover = départs / effectif moyen, même période.

CSV PÉDAGOGIQUE (extrait, fictif)
mois,metier,hc,etp,departs
2026-01,Conseillers relation client,320,288,7
2026-01,Techniciens terrain,280,274,3

INTERDIT
« Mesure officielle Gartner du turnover services 2026 = 12 % » — non sourcé = faux.
« Cette formation certifie Power BI / DAX. » — faux.`),
      ],
      erreurs:
        "Titres de slides = noms de dossiers (« Analyse », « Data », « Next steps »). 40 slides pour 20 minutes. Benchmark inventé pour « faire sérieux ». Confondre Power BI et Excel sans le dire. Coller un DAX de forum et le signer. Présenter l'attestation LOU comme une certif éditeur. Cacher une hypothèse 1,42 dans un graphique 3D. Usurper l'avis CSE.",
      particuliers:
        "Comité 10 minutes : une page + 3 slides, le reste en annexe. Comité social : le consultant junior prépare des faits d'effectifs ; il n'écrit pas la stratégie de consultation. Client qui exige un benchmark demain matin : vous livrez un protocole et des écarts internes, pas un chiffre fabriqué. Pas d'accès Power BI chez le client : Excel + CSV, mêmes définitions de mesures.",
      exercice:
        "Le sponsor Nova veut un slide unique : « Turnover groupe vs marché, et on vise le 1er quartile. » Vous n'avez aucune étude. Rédigez : (1) le titre conclusif que vous refusez ; (2) le titre que vous présentez ; (3) les trois lignes du corps ; (4) la phrase sur Power BI si l'on vous demande « tu nous fais ça en DAX certifié ».",
      correction:
        "(1) Refusé : « Le marché est à 12 %, Nova à 18 %, objectif 1er quartile. » (2) Acceptable : « 213 départs / 1 200 HC = 17,8 % en interne ; aucun benchmark marché sourcé à ce jour. » (3) Corps : définition (départs / effectif moyen) ; 90 départs conseillers = 42 % du total pédagogique ; décision = protocole d'étude ou écarts internes, pas un quartile inventé. (4) « Je peux décrire le modèle (fait effectifs, mesure DIVIDE) et un CSV. Ce parcours ne certifie ni DAX ni Power BI ; un junior ne s'invente pas une badge éditeur. »",
    }),

    quizLesson({
      title: "Quiz — Finance, dimensionnement et livrables",
      description:
        "Cinq questions. Seuil 70 %. Masse vs coût employeur, ROI à hypothèses, charge/capacité, titres conclusifs, éthique du benchmark et limite Power BI.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Sur le cas pédagogique des 10 conseillers Nova (8 à 35 h, 2 à 28 h, brut 28 000 € / ETP, coefficient 1,42 hypothèse), quels résultats sont exacts ?",
          options: [
            "A. 10 ETP, masse 280 000 €, coût employeur = masse, car le brut « inclut déjà les charges ».",
            "B. 9,6 ETP ; masse 268 800 € ; coût employeur 381 696 € ; 39 760 € / ETP. Le 1,42 n'est pas un taux légal.",
            "C. 9,6 ETP mais masse 224 000 €, parce que les temps partiels ne comptent pas dans la masse.",
            "D. Coefficient 1,42 = taux URSSAF 2026 officiel enseigné dans ce cours.",
          ],
          correct: 1,
          explanation:
            "35 h = 1 ETP, 28 h = 0,8. 8 + 1,6 = 9,6. 9,6 × 28 000 = 268 800. × 1,42 = 381 696. Le 1,42 est une hypothèse pédagogique, pas un taux légal.",
        }),
        q({
          question:
            "Un ROI RH de 16 % sur le programme rétention à 24 000 € (2 départs évités, coût de remplacement 0,35 × coût ETP) signifie surtout que :",
          options: [
            "A. Le secteur services a un ROI RH de 16 % : vous pouvez le citer en benchmark.",
            "B. À ces hypothèses écrites, le net est positif ; à 1 départ évité il devient négatif. Le ROI ne remplace ni sensibilité, ni avis social.",
            "C. Le projet est obligatoire, le CSE n'a plus à être informé.",
            "D. Votre salaire junior de 36 000 € brut annuel est désormais garanti.",
          ],
          correct: 1,
          explanation:
            "Le 16 % est local au cas. Sensibilité obligatoire. Un BC n'éteint pas le social. 36 k€ est un objectif de marché, jamais une garantie. L'attestation n'est pas un RNCP.",
        }),
        q({
          question:
            "File réclamations : 3 200 dossiers, 30 min, 100 h productives / ETP / mois, 14 ETP actuels. Quel dimensionnement est juste ?",
          options: [
            "A. Charge 1 600 h, besoin 16 ETP, écart +2 ETP — et cet écart n'est pas, à lui seul, un plan de recrutement ou un plan social.",
            "B. Besoin 32 ETP, car on compte les heures en minutes.",
            "C. Écart nul : 14 personnes = 14 ETP = 14 × 151,67 h, le 100 h est illégal.",
            "D. Il manque 2 ETP : on licencie ailleurs pour financer, dès lundi, sans social.",
          ],
          correct: 0,
          explanation:
            "3 200 × 0,5 h = 1 600 ; 1 600 / 100 = 16 ; 16 − 14 = 2. La convention 100 h est pédagogique. L'écart ouvre des leviers ; le junior n'invente pas la procédure sociale.",
        }),
        q({
          question:
            "Quel titre de slide est professionnellement acceptable pour un CODIR Nova ?",
          options: [
            "A. « Turnover ».",
            "B. « Le marché est à 12 % (benchmark) » — sans étude fournie.",
            "C. « 90 départs conseillers = 42 % des départs groupe (données internes fictives du cas) ; aucun benchmark marché sourcé ».",
            "D. « Pyramide des âges et next steps Power BI certifié DAX ».",
          ],
          correct: 2,
          explanation:
            "Un titre conclusif porte le message et la limite. Inventer 12 % est un faux benchmark. Power BI / DAX ne sont pas certifiés par ce parcours. « Turnover » ne décide rien.",
        }),
        q({
          question:
            "À propos de Power BI dans ce parcours, quelle affirmation est exacte ?",
          options: [
            "A. La réussite au quiz équivaut à une certification Power BI / DAX de l'éditeur.",
            "B. On décrit un modèle (faits, dimensions, relations) et des mesures (ex. DIVIDE départs / effectif moyen) ; on n'ouvre pas l'outil ; on ne s'invente pas une certif.",
            "C. Une mesure DAX copiée sur un forum peut être présentée comme « standard officiel Gartner ».",
            "D. Power BI remplace le SIRH et le CSE pour les données de licenciement.",
          ],
          correct: 1,
          explanation:
            "Concept : modèle + mesures. Pas d'outil ouvert, pas de badge éditeur, pas de benchmark inventé, pas d'usurpation social / SIRH.",
        }),
      ],
    }),
  ],
};
