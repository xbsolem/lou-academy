import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 6,
  title: "Organisation cible, TOM et processus",
  description:
    "Esquisser une organisation cible (span of control, strates, RACI, central / local), un Target Operating Model as-is / to-be, et simplifier un processus RH avec SIPOC — sans valider une restructuration juridique.",
  lessons: [
    pack({
      title: "Concevoir une organisation cible",
      description:
        "Relier span of control, nombre de strates, RACI et arbitrage central / décentralisé, sans confondre organigramme et acte juridique.",
      minutes: 8,
      objectifs:
        "À la fin de cette leçon, vous savez lire un organigramme avec quatre leviers (éventail de contrôle, strates, RACI, central vs local), formuler une hypothèse d'organisation cible, et refuser de « valider » une restructuration au sens du droit du travail. Vous distinguez un constat d'organisation d'une décision sociale.",
      theorie:
        "Concevoir une organisation, ce n'est pas redessiner des cases. C'est décider comment le travail se coordonne : qui encadre qui, à quelle profondeur, qui tranche, et ce qui est commun ou local. Quatre leviers se tiennent.\n\nLe span of control (éventail de contrôle) est le nombre de reports directs d'un manager. Trop étroit, on multiplie managers, strates et coût. Trop large, le manager administre au lieu d'accompagner. Il n'existe pas de nombre magique : un plateau, un bureau d'études et une équipe terrain n'ont pas le même span. Chez Groupe Nova Services — groupe fictif, 1 200 salariés — on voit souvent, à titre pédagogique, un siège à 3 ou 4 reports et des opérations à 15 ou 18, sans que cela ait été choisi.\n\nLes strates mesurent la profondeur COMEX–terrain. Chaque couche ajoute délai, filtrage et coût. Les alléger est une hypothèse d'organisation, pas un plan social. Le junior ne valide pas une restructuration juridique (PSE, transfert, consultation) : il constate et renvoie à un avis social et au texte, à vérifier sur Légifrance.\n\nLa matrice RACI (Réalisateur, Approbateur, Consulté, Informé) clarifie. Une décision, un seul A. Plusieurs R possibles. Confondre C et A, c'est diluer. Centraliser ou décentraliser n'est pas un goût : on centralise l'homogène (politique, SI, conformité, reporting) et on laisse local la proximité.",
      methode:
        "Procédez par écrit, à partir de faits, pas d'un organigramme « joli ».\n1. Comptez les strates du COMEX au premier niveau opérationnel, par BU si les profondeurs diffèrent.\n2. Calculez le span réel de chaque manager (reports directs, pas « l'équipe au sens large »). Signalez les extrêmes, sans en faire une moyenne publiable comme benchmark.\n3. Listez cinq à huit décisions qui bloquent aujourd'hui (embauche, promotion, budget formation, règle d'absence, arbitrage de charge). Pour chacune, nommez un seul A, des R, des C, des I.\n4. Classez les sujets : doit être commun / peut être local / à trancher. Le « un peu des deux » est un non-choix.\n5. Formulez une hypothèse cible en une page : ce qui change, ce qui ne change pas, ce qui est hors périmètre.\n6. Dès que le to-be touche aux emplois, aux sites ou aux statuts, vous stoppez le « on décide » : vous alertez le manager de mission et vous renvoyez vers un avis social. Vous n'inventez ni délai ni seuil d'effectif.",
      noteText:
        "Un organigramme cible, un RACI ou un dimensionnement n'est pas un acte juridique. Le junior n'approuve pas un PSE, un accord, une information-consultation du CSE, ni un transfert. Il documente une hypothèse et demande l'avis habilité. Vérifier le texte sur Légifrance et l'avis social du client.",
      exemple:
        "Chez Nova Services (cas fictif), la BU Customer Care a sept strates entre le directeur général et l'agent. Trois managers de proximité encadrent chacun deux personnes ; le responsable de plateau en encadre dix-huit. Les embauches sont « validées » par le manager, le RH de BU, le contrôleur, le directeur de BU et parfois le siège — cinq A de fait, donc aucun. Le consultant ne propose pas « de supprimer deux strates la semaine prochaine ». Il montre le délai de décision, le coût d'encadrement pédagogique, le RACI actuel, et une cible : un A unique sur l'embauche non cadre, un span cible à discuter par métier, une strate de coordination à fusionner si les rôles sont redondants. La faisabilité sociale, le calendrier légal et les instances ne sont pas son visa.",
      extra: [
        code(`RACI — une décision, un seul A
Décision                         R (fait)     A (un seul)   C              I
Embauche non cadre lot 1         Manager      RHBP unique   CoE, finance   Équipe
Règle d'absence (hors CCN)       CoE RH       DRH           CSE*           Managers
Paramètre SIRH commun            CSP / SI     DRH           DSI            BU
Animation d'équipe locale        Manager      Manager       RHBP           CSP

* C = consulté au sens RACI, ce n'est PAS la consultation légale des instances.
  Le RACI ne remplace pas le CSE. Données pédagogiques, pas un modèle opposable.`),
      ],
      erreurs:
        "Coller un span « 7 ± 2 » comme vérité universelle. Compter les strates sur le slide et pas sur le reporting réel. Mettre plusieurs A « pour embarquer tout le monde ». Dessiner le to-be avant d'avoir le as-is. Confondre centralisation et prise de pouvoir du siège. Présenter un organigramme cible comme une décision déjà « validée RH ». Inventer un délai de consultation ou un seuil d'effectif. Traiter le CSE comme une case RACI parmi d'autres.",
      particuliers:
        "Dans une TPE, le RACI tient en cinq lignes : le dirigeant est souvent le seul A. Dans un groupe multi-BU, deux organisations coexistent : celle du reporting et celle du pouvoir réel (dotted lines). En international, un span étroit au siège et large au terrain n'est pas forcément une erreur : c'est parfois la distance et la langue. Dans le public, les strates et les grades ne se « fusionnent » pas comme dans un slide privé. En industrialisation d'un réseau, décentraliser l'animation et centraliser le SI est souvent plus tenable que l'inverse. Quel que soit le contexte, dès qu'il y a suppression de poste, transfert ou modification substantielle, le junior ne tranche pas.",
      exercice:
        "Nova Services, 1 200 salariés (fictif). Vous relevez : 7 strates en Customer Care, 4 au siège ; spans de 2 et de 18 ; cinq personnes « valident » chaque embauche non cadre. En cinq lignes : (1) le constat d'organisation, (2) une hypothèse cible, (3) le RACI cible de l'embauche non cadre (un seul A), (4) ce que vous centralisez vs laissez local, (5) ce que vous ne validez pas.",
      correction:
        "(1) Constat : profondeur hétérogène, spans extrêmes non choisis, décision d'embauche diluée. Ce sont des faits d'organisation, pas un jugement moral. (2) Hypothèse : réduire la redondance de coordination en Customer Care, rapprocher les spans par métier (pas une moyenne unique), un A unique sur l'embauche non cadre. (3) RACI cible : R = manager demandeur ; A = RHBP (ou DRH selon gouvernance) ; C = finance si écart au budget, CoE recrutement si cadre ou métier critique ; I = équipe et CSP. Un seul A. (4) Central : politique, SIRH, reporting, règles. Local : animation, planning d'équipe, arbitrage de charge quotidien. (5) Vous ne validez pas la suppression de strates au plan juridique, ni le calendrier social, ni l'information-consultation. Vous livrez l'hypothèse et le signal d'avis social / Légifrance.",
    }),
    pack({
      title: "Cibler un Target Operating Model",
      description:
        "Décrire un TOM sur plusieurs dimensions (processus, organisation, gouvernance, tech, data, compétences, KPI) et passer de l'as-is au to-be par écarts, pas par slogan.",
      minutes: 8,
      objectifs:
        "Vous définissez un Target Operating Model. Vous le distinguez d'un organigramme. Vous savez renseigner as-is et to-be sur sept dimensions, et transformer les écarts en questions de mission — sans en faire un plan social ni un benchmark inventé.",
      theorie:
        "Le Target Operating Model (TOM) décrit comment l'entreprise — ou la fonction RH — doit fonctionner pour tenir sa stratégie. Ce n'est pas un organigramme. L'organigramme est une coupe : qui reporte à qui. Le TOM relie plusieurs coupes. Une cible « on crée un CSP » sans processus, données, compétences ni KPI n'est pas un TOM. C'est un slogan de réorganisation.\n\nSept dimensions tiennent un junior : processus ; organisation (rôles, span, strates, central / local) ; gouvernance ; technologie (SIRH, workflow — sans prétendre ouvrir un outil que vous n'avez pas) ; données (définitions ETP, qualité) ; compétences ; KPI de fonctionnement. On peut en ajouter (lieux, prestataires) : on n'en retire pas pour aller plus vite.\n\nAs-is puis to-be. Inverser, c'est dessiner un château. L'as-is se prouve. Le to-be se décide (sponsor). Les écarts deviennent le backlog. Chez Nova Services, 1 200 salariés fictifs, la RH est fragmentée par BU : mini-RH, peu de règles communes, SIRH mal nourri. Le TOM n'est pas « tout mettre au siège ». C'est dire, dimension par dimension, ce qui change et ce qui reste. Un TOM qui implique des suppressions n'autorise rien : le junior signale, il ne vise pas.",
      methode:
        "Tenez une grille à sept lignes, deux colonnes (as-is / to-be), une colonne écart, une colonne « qui tranche ».\n1. Processus : 5 à 8 processus RH critiques (recrutement, entrée, données de paie, absences, formation, sortie). As-is = hétérogène / local / en silo. To-be = standard, exception nommée.\n2. Organisation : rôles, rattachements, span, strates — hypothèse, pas organigramme définitif.\n3. Gouvernance : comités, RACI des décisions RH, lien avec le CSE (signalé, pas instruit par vous).\n4. Tech : ce qui existe, ce qui est mal utilisé, ce que l'on n'achète pas encore.\n5. Data : définitions, maille, responsable de la qualité. Pas de « taux marché » inventé.\n6. Compétences : écart entre le rôle cible et le réel (RHBP vs administrateur).\n7. KPI : 4 à 6 indicateurs de fonctionnement (délai, qualité, charge), distincts des KPI business.\nContrôle : si une dimension est vide, le TOM n'est pas prêt. Si le to-be social n'a pas d'alerte juridique, il n'est pas honnête.",
      noteText:
        "Les chiffres de Nova Services dans ce parcours sont pédagogiques. Ils n'ont pas valeur de benchmark de marché. Un TOM n'est pas une garantie de performance, ni une certification, ni un titre.",
      exemple:
        "Nova Services veut « une RH moderne ». Sans TOM, le slide dit : CSP, SIRH, HRBP. Avec TOM, l'as-is montre : processus d'embauche différent par BU, quatre fichiers d'effectifs, pas de définition unique d'ETP, managers qui signent tout, RH de BU qui font à la fois l'admin, le recrutement et le social. Le to-be pédagogique : processus communs pour l'admin, exceptions BU documentées ; un référentiel d'effectifs ; gouvernance mensuelle DRH / BU ; SIRH nourri avant tout nouvel outil ; compétences de RHBP à construire, pas à décréter ; KPI de délai d'embauche et de qualité de dossier, pas un « NPS RH » sorti de nulle part. L'écart « quatre admin locaux → un CSP » est une hypothèse de charge et de rôle. Ce n'est pas une liste de personnes à déplacer. Le déplacement, s'il a lieu, sort du TOM junior et entre dans le social.",
      extra: [
        code(`TOM RH — grille as-is / to-be (Nova Services, fictif)
Dimension     As-is (preuves)              To-be (décidé)            Écart / question
Processus     Embauche × 4 BU              Cible unique + exceptions Qui standardise ?
Organisation  RH dans chaque BU            CSP / CoE / HRBP (esquisse) Rôles, pas noms
Gouvernance   Décisions diluées            Un A par décision clé     RACI
Tech          SIRH mal nourri              Qualité d'abord           Pas d'achat précipité
Data          4 fichiers effectifs         Un référentiel ETP        Définition unique
Compétences   RH « à tout faire »          Distinguer admin / conseil Plan d'accompagnement
KPI           Peu, non partagés            Délai, qualité, charge    Cible pédagogique

To-be ≠ organigramme nominatif. To-be ≠ visa juridique.`),
      ],
      erreurs:
        "Réduire le TOM à un organigramme. Écrire le to-be en workshop créatif sans as-is. Copier le modèle d'un autre client. Inventer un benchmark (« les entreprises de 1 200 ont toutes un CSP »). Acheter un SIRH pour « créer » le TOM. Mettre la culture en slide et rien sur les données. Oublier les KPI, donc ne jamais savoir si le to-be existe. Faire signer le TOM comme s'il autorisait les suppressions de postes.",
      particuliers:
        "À 1 200 personnes, un CSP ultra-spécialisé peut être trop lourd : un pool admin plus des HRBP mixtes est souvent plus réaliste — c'est une hypothèse, pas une norme. En croissance rapide, le to-be doit tenir la charge, pas seulement l'élégance. En multi-sites, la tech et la data communes importent plus que le lieu des personnes. Si une BU est en tension sociale, le TOM se cadencera après l'avis habilité, pas avant. En mode prestataire, le TOM du client n'est pas le vôtre : vous livrez une cible et des écarts, le client décide.",
      exercice:
        "Pour la RH de Nova Services, remplissez mentalement les sept dimensions : une phrase as-is, une phrase to-be, l'écart principal. Quelle dimension, si elle reste vide, rend le TOM inutilisable ? Que ne contient pas votre livrable ?",
      correction:
        "As-is type : processus hétérogènes, RH de BU généralistes, gouvernance diluée, SIRH incomplet, quatre fichiers, compétences admin/conseil mélangées, peu de KPI partagés. To-be type : processus communs, rôles distingués, un A par décision, donnée d'effectif unique, compétences à construire, 4 à 6 KPI de fonctionnement. L'écart principal est souvent la donnée et le processus, pas le dessin des cases. Si la data ou les processus restent vides, le TOM est un organigramme déguisé, donc inutilisable. Votre livrable ne contient pas la liste nominative des personnes à réaffecter, ni un calendrier légal de restructuration, ni un benchmark réel inventé.",
    }),
    pack({
      title: "Cartographier et simplifier un processus RH",
      description:
        "Utiliser SIPOC puis une carte simple pour réduire les allers-retours d'un processus RH, avant d'ajouter un outil ou une équipe.",
      minutes: 9,
      objectifs:
        "Vous savez construire un SIPOC, enchaîner une cartographie à gros grain, distinguer goulots, doublons et contrôles utiles, et proposer une simplification. Vous ne confondez pas carte de processus et procédure juridique.",
      theorie:
        "Un processus RH transforme une demande en résultat : embauche, entrée, absence, formation, sortie. Quand la chaîne est opaque, chacun ajoute une étape « pour être sûr ». Le délai explose, la qualité non. Cartographier rend la chaîne visible. Simplifier retire ce qui n'ajoute pas de contrôle réel.\n\nSIPOC est un cadrage, pas un diagramme. Fournisseurs, Entrées, Processus (5 à 8 étapes), Sorties, Clients. Sans SIPOC, on se perd dans les micro-tâches. Ensuite on détaille : acteur, délai pédagogique, document, système. On cherche goulots, doublons, files d'attente, contrôles fantômes (une « validation » que personne ne lit).\n\nLa simplification a un ordre : éliminer, regrouper, standardiser, puis seulement automatiser. Un workflow sur un processus tordu automatise le détour. Chez Nova Services (fictif), le recrutement non cadre a onze handoffs : le SIPOC tient en une page ; trois validations disent la même chose. Ce n'est pas une obligation légale de tout viser cinq fois. Inversement, données de paie et pièces d'entrée ne se « simplifient » pas par confort. Une carte n'est ni une procédure opposable, ni un avis URSSAF, ni une consultation d'instances.",
      methode:
        "Une séance, un processus, des preuves, une page SIPOC puis une carte.\n1. Choisissez un processus douloureux (recrutement, entrée, absence, donnée de paie). Nommez le résultat attendu.\n2. SIPOC : 3 à 5 fournisseurs, 3 à 5 entrées, 5 à 8 étapes, 3 sorties, 2 à 4 clients internes. Faites-le relire par quelqu'un qui exécute, pas seulement par le DRH.\n3. Carte : pour chaque étape, acteur, délai constaté (pédagogique), système, document. Marquez R / A si le RACI existe.\n4. Diagnostic : goulot, doublon, file d'attente, contrôle sans lecteur, exception devenue règle.\n5. Simplification : éliminer (étape sans A), regrouper (deux validations identiques), standardiser (même formulaire), automatiser en dernier. Chaque retrait a un risque : dites-le.\n6. Cible : même SIPOC, moins d'étapes, un A par décision, exceptions nommées. Mesure : délai et taux de dossier complet — chiffres du client, pas un benchmark inventé.\nInterdit : effacer une étape « sociale » ou paie parce qu'elle ralentit le slide.",
      noteText:
        "SIPOC et cartes sont des outils de diagnostic. Ils ne remplacent pas le règlement intérieur, la convention collective, les obligations d'entrée ou le dialogue social. Si une étape existe pour une obligation, vous la nommez ; vous ne l'effacez pas pour « gagner cinq jours ».",
      exemple:
        "Processus pédagogique « recrutement non cadre » chez Nova Services. SIPOC : fournisseurs = manager, RH de BU, candidat, contrôle de gestion ; entrées = besoin, fiche, CV, validation budget ; processus = exprimer le besoin → « valider » (cinq fois) → sourcer → préqualifier → entretien → offre → dossier d'entrée ; sorties = contrat signé, ligne d'effectif, dossier incomplet trop souvent ; clients = manager, paie, nouvel arrivant. La carte montre onze handoffs et un goulot : le directeur de BU signe tout, y compris les CDD de remplacement. Simplification : un A unique sous un seuil pédagogique de budget ; dossier d'entrée commencé pendant le préavis, pas après J0 ; une saisie SIRH, pas deux fichiers. On ne « simplifie » pas le contrôle des pièces d'embauche. On ne présente pas les onze handoffs comme un délai légal.",
      extra: [
        code(`SIPOC — Recrutement non cadre (Nova Services, fictif, pédagogique)
S Fournisseurs     Manager BU | RH local | Candidat | Contrôle de gestion
I Entrées          Expression de besoin | Fiche | CV | OK budget
P Processus (cible, 6 étapes — pas 11 handoffs)
                   1. Besoin cadré (manager, A = RHBP)
                   2. Sourcer / préqualifier
                   3. Entretien
                   4. Offre (A unique)
                   5. Dossier d'entrée (CSP)
                   6. J0 managérial
O Sorties          Contrat | Ligne effectif | Dossier complet
C Clients          Manager | Paie / admin | Arrivant

Puis éliminer / regrouper / standardiser / automatiser — dans cet ordre.
Une étape légale ou paie ne s'élimine pas sur un workshop.`),
      ],
      erreurs:
        "Cartographier 120 micro-tâches avant d'avoir le SIPOC. Prendre le process « officiel » et ignorer le process réel. Automatiser en premier. Supprimer un contrôle paie ou un jalon social « parce que c'est long ». Inventer un délai de marché (« un recrutement doit durer 21 jours »). Faire la carte seul dans son coin. Confondre client du processus (le manager) et client de l'entreprise. Transformer SIPOC en livrable de 40 pages.",
      particuliers:
        "Absences et paie : la simplification s'arrête où commence l'obligation de déclaration et de calcul. Recrutement cadre vs non cadre : deux processus, pas une moyenne. International : un SIPOC France n'est pas un SIPOC d'une filiale. Volume vs exception : le CSP aime le volume standard ; les métiers critiques restent en CoE ou HRBP. Si le processus alimente une instance (orientations, emplois), vous cartographiez le flux d'information, vous n'inventez pas le calendrier de consultation.",
      exercice:
        "Le DRH de Nova Services veut « un outil de recrutement pour aller plus vite ». Le processus actuel a, à titre pédagogique, 11 handoffs et 5 validations. Produisez le SIPOC en 8 lignes, nommez deux étapes à regrouper, une étape à ne pas supprimer, et la phrase que vous dites sur l'outil.",
      correction:
        "SIPOC : S = manager, RH, candidat, finance ; I = besoin, budget, CV ; P = cadrer, sourcer, entretenir, offrir, entrer, démarrer ; O = contrat, effectif, dossier ; C = manager, paie, arrivant. À regrouper : les cinq validations d'embauche non cadre en un A unique sous seuil. À ne pas supprimer : le contrôle des pièces et des données d'entrée / paie. Phrase sur l'outil : on standardise et on enlève les handoffs d'abord ; l'outil vient après, sinon il automatise les 11 allers-retours. Vous n'annoncez pas un délai légal ni un benchmark. Vous ne validez aucune suppression de poste liée à la « productivité processus ».",
    }),
    quizLesson({
      title: "Quiz — Organisation, TOM et processus",
      description:
        "Vérifier span et RACI, TOM as-is / to-be, SIPOC, et la limite juridique du junior.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Chez Nova Services, un manager de plateau encadre 18 personnes, un manager siège en encadre 3. Que pouvez-vous en conclure professionnellement ?",
          options: [
            "A. Le siège est forcément trop cher : la norme universelle est 7 reports.",
            "B. 18 est illégal : un manager ne peut pas dépasser 12 reports.",
            "C. Les spans sont hétérogènes ; la pertinence se juge par métier et par charge de management, pas par un nombre magique.",
            "D. Il faut immédiatement fusionner les strates, le junior peut viser la restructuration.",
          ],
          correct: 2,
          explanation:
            "Il n'existe pas de span légal unique ni de nombre magique. 3 et 18 sont des faits à interpréter par métier. Fusionner des strates n'est pas un visa juridique du junior.",
        }),
        q({
          question:
            "Dans un RACI d'embauche non cadre, quelle règle est correcte ?",
          options: [
            "A. Plusieurs A « pour embarquer la BU, la RH, la finance et le siège ».",
            "B. Un seul A par décision ; plusieurs R possibles ; C n'est pas une décision.",
            "C. Le CSE est le A, car toute embauche se consulte.",
            "D. Le consultant junior est le A, car il a dessiné l'organisation cible.",
          ],
          correct: 1,
          explanation:
            "Un A unique. Plusieurs R se coordonnent. C informe ou donne un avis, ce n'est pas trancher. Le CSE n'est pas une case RACI comme une autre. Le junior n'est pas le décideur du client.",
        }),
        q({
          question:
            "Un Target Operating Model RH se distingue d'un organigramme parce que :",
          options: [
            "A. Le TOM est l'organigramme to-be, simplement plus coloré.",
            "B. Le TOM relie processus, organisation, gouvernance, tech, data, compétences et KPI, en as-is puis to-be.",
            "C. Le TOM remplace le business case et le plan social.",
            "D. Le TOM n'a de valeur que s'il copie le modèle d'un grand groupe.",
          ],
          correct: 1,
          explanation:
            "L'organigramme est une coupe. Le TOM est un système à plusieurs dimensions, ancré dans l'as-is. Il ne vaut pas plan social ni copie conforme.",
        }),
        q({
          question:
            "Le DRH veut un outil pour raccourcir un recrutement à 11 handoffs. Quelle séquence est professionnelle ?",
          options: [
            "A. Acheter l'outil d'abord, le process suivra.",
            "B. SIPOC et carte, puis éliminer / regrouper / standardiser, puis seulement automatiser.",
            "C. Supprimer les contrôles d'entrée et de paie, ce sont des goulots.",
            "D. Publier un délai de 21 jours comme benchmark de marché.",
          ],
          correct: 1,
          explanation:
            "On clarifie et on simplifie avant d'automatiser. Les contrôles paie / pièces ne s'effacent pas. Aucun délai de marché n'est inventé ici.",
        }),
        q({
          question:
            "Votre organigramme cible enlève une strate de managers. Que faites-vous en tant que junior ?",
          options: [
            "A. Vous validez la restructuration : le TOM suffit.",
            "B. Vous inventez un délai de consultation CSE pour rassurer le COMEX.",
            "C. Vous livrez l'hypothèse d'organisation, vous signalez l'impact emplois / statuts, et vous renvoyez à un avis social et au texte (Légifrance). Vous ne visez pas.",
            "D. Vous présentez le RACI du CSE comme l'information-consultation légale.",
          ],
          correct: 2,
          explanation:
            "Le junior documente une hypothèse. Il ne valide pas l'acte juridique, n'invente pas les délais, et ne confond pas RACI et consultation des instances.",
        }),
      ],
    }),
  ],
};
