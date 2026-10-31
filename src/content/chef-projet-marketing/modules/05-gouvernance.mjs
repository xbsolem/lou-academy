import { pack, quizLesson, q, code, h } from "../lib.mjs";

export default {
  position: 5,
  title: "Gouvernance et pilotage",
  description:
    "Installer une gouvernance RACI, une roadmap, un planning (WBS, Gantt, chemin critique, jalons), un suivi d'avancement et des KPI de pilotage distincts de la performance commerciale. Cas fil rouge : Banque Horizon (fictive).",
  lessons: [
    pack({
      title: "Gouvernance et matrice RACI",
      description:
        "Nommer qui fait, qui tranche, qui est consulté, qui est informé — avec un RACI rempli sur le fil rouge.",
      minutes: 6,
      objectifs:
        "Vous savez construire une matrice RACI lisible, n'avoir qu'un A par ligne, et placer le chef de projet du bon côté de la frontière réglementaire : saisine, jamais validation conformité, juridique ou ACPR.",
      theorie:
        "La gouvernance d'un projet, ce n'est pas un organigramme décoratif. C'est la réponse, pour chaque décision et chaque livrable, à quatre questions : qui fait (R, Responsible), qui tranche et rend des comptes (A, Accountable), qui est consulté avant (C, Consulted), qui est informé après (I, Informed).\n\nR exécute. A décide — une seule personne par ligne, sinon personne n'est responsable. C donne un avis que l'on prend le temps d'entendre. I apprend la décision, il n'a pas à la rediscuter le lendemain. Un RACI utile tient sur une page, au niveau des workstreams et des décisions, pas au niveau de chaque ticket.\n\nLe piège junior est de se mettre A partout « pour que ça avance ». Le chef de projet est souvent R sur le pilotage (planning, reporting, animation des instances) et A sur la qualité du dossier de décision. Il n'est pas A sur l'avis de conformité, ni sur le paramétrage SI, ni sur la cible commerciale. À Banque Horizon (banque fictive), l'offre 25-35 ans traverse marketing, commercial, digital, IT, finance, risques, conformité, juridique, réseaux. Si le CP signe pour la conformité, il sort de son rôle et il crée un risque pour l'entreprise.\n\nUn RACI se valide en COPIL, pas dans un tableur solitaire. Il se révise à chaque changement de workstream, pas toutes les semaines. Il ne remplace pas le sponsor : le sponsor est A sur la poursuite ou l'arrêt du projet.",
      methode:
        "Étapes : (1) lister 8 à 12 lignes — workstreams et décisions, pas 40 tâches ; (2) nommer des rôles, pas des prénoms trop vite, puis rattacher les personnes ; (3) un seul A par ligne ; (4) le CP n'est A que sur le pilotage et la qualité des dossiers ; (5) conformité, juridique, risques sont A sur leurs avis ; (6) faire relire au sponsor ; (7) présenter au COPIL de lancement.\n\nTest de lecture : pour chaque ligne, une personne externe doit pouvoir dire qui relancer vendredi. Si la réponse est « un peu tout le monde », le RACI est faux.",
      noteText:
        "RACI est une bonne pratique de pilotage, pas une obligation légale. La frontière réglementaire, elle, n'est pas optionnelle : le chef de projet saisit conformité, juridique et risques ; il n'émet pas l'avis, il ne « valide pas l'ACPR ».",
      exemple:
        "Banque Horizon (fictive). Sans RACI, le wording de l'offre circule entre marketing et réseau, le digital construit un tunnel, la conformité découvre le libellé deux semaines avant le lancement. Avec RACI : marketing est R sur la proposition de valeur, le sponsor est A sur le GO d'offre, la conformité est A sur l'avis, le CP est R sur la saisine et I sur l'avis. Le tunnel n'entre pas en production avant le jalon d'avis.",
      extra: [
        h("Exemple professionnel — RACI rempli, Banque Horizon (fictive)"),
        code(`RACI — OFFRE JEUNES ACTIFS 25-35 ANS — BANQUE HORIZON (fictive)
Légende : R fait | A tranche (un seul par ligne) | C consulté | I informé
Rôles : CP chef de projet | SP sponsor | MK marketing | COM commercial
        DIG digital | IT | FIN finance | RIS risques | CONF conformité
        JUR juridique | RES réseaux

Ligne                              CP  SP  MK  COM DIG IT  FIN RIS CONF JUR RES
Pilotage, planning, reporting      A   I   I   I   I   I   I   I   I    I   I
Dossier de décision / BC           R   A   C   C   C   C   R   C   C    C   I
GO / NO GO du projet               C   A   I   I   I   I   C   C   C    C   I
Proposition de valeur / offre      C   A   R   C   C   I   I   C   C    C   C
Parcours de souscription digital   C   I   C   C   R   A   I   C   C    I   I
Paramétrage SI / sécurité          I   I   I   I   C   A   I   C   C    I   I
Avis conformité                    I   I   C   I   C   I   I   C   A    C   I
Avis juridique                     I   I   C   I   I   I   I   I   C    A   I
Avis risques                       I   I   C   I   C   I   C   A   C    I   I
Saisine des avis (organisation)    A   I   I   I   I   I   I   C   C    C   I
Business case, suivi budget        R   A   I   I   I   I   R   I   I    I   I
Préparation réseau / argumentaire  C   I   C   R   I   I   I   I   C    I   A
Campagne d'acquisition             C   I   A   C   R   I   C   I   C    I   C
Lancement commercial               C   A   R   R   C   C   I   C   C    I   R

LECTURE
— Un A et un seul par ligne.
— Le CP est A sur le pilotage et sur l'organisation de la saisine, pas sur l'avis.
— CONF / JUR / RIS sont A sur leurs avis. Le CP n'y figure pas en A.
— Le sponsor est A sur le GO du projet et sur l'offre. Le CP ne s'y substitue pas.`),
      ],
      erreurs:
        "Deux A sur la même ligne « pour impliquer ». Mettre le CP en A sur la conformité. Remplir le RACI avec des prénoms qui partent en congés sans suppléant. Faire 40 lignes. Ne jamais le montrer au COPIL. Confondre C et I : consulter après coup, ou informer trop tôt une salle entière qui se croit décideuse.",
      particuliers:
        "PME : le sponsor, le DAF et le responsable conformité peuvent être trois casquettes sur deux personnes ; le RACI reste utile pour ne pas mélanger les casquettes. Startup : un RACI de 6 lignes suffit. Cabinet / agence : le client est souvent A sur le GO, l'agence R sur la campagne ; le contrat dit qui est A sur le budget. Distribution : le réseau est A sur la préparation des points de vente, pas le CP parisien.",
      exercice:
        "Sur le RACI Banque Horizon ci-dessus, corrigez ces trois propositions d'un junior : (1) « Je me mets A sur l'avis conformité, comme ça ça n'attend pas. » (2) « Marketing et réseau en A tous les deux sur la campagne, pour co-construire. » (3) « Le sponsor en I seulement, il n'a pas le temps. » Pour chaque, dites la ligne juste et pourquoi.",
      correction:
        "1. Faux. Avis conformité : CONF en A, CP en I (et A seulement sur l'organisation de la saisine). Le CP n'émet pas l'avis. 2. Faux. Un A par ligne. Campagne d'acquisition : MK en A, COM et RES en C, DIG en R si production. La co-construction se joue en C, pas en double A. 3. Faux. Le sponsor est A sur le GO du projet et sur l'offre. Le mettre en I, c'est gouverner sans décideur. S'il n'a pas le temps, on a un problème de sponsor, pas un RACI à alléger.",
    }),
    pack({
      title: "Roadmap : la séquence de valeur",
      description:
        "Construire une feuille de route lisible par un non-planificateur, avec un exemple complet sur six mois.",
      minutes: 7,
      objectifs:
        "Vous savez distinguer une roadmap d'un Gantt, y faire figurer des livraisons de valeur et des jalons de décision, et produire une feuille de route complète pour un lancement à 6 mois.",
      theorie:
        "Une roadmap (feuille de route) n'est pas un planning détaillé. C'est la séquence des intentions de valeur dans le temps, lisible par un sponsor, un COPIL, un réseau. Elle dit : que livrons-nous, dans quel ordre, pour quelle décision, à quelle maille de mois — pas qui fait la tâche 247 mardi.\n\nTrois objets : les workstreams (offre, parcours, conformité, réseau, campagne) ; les jalons de décision (GO cadrage, saisine, gel de périmètre, GO lancement) ; les fenêtres de livraison (MVP, pilote, campagne). Pas de liste de tickets. Pas de promesse « leadership 25-35 ans au T3 » : Banque Horizon est fictive, une part de marché inventée n'a rien à faire ici.\n\nLa roadmap aligne. Le planning exécute. Un Gantt seul perd les métiers en COPIL. Une roadmap sans planning empêche l'IT de s'engager. Les deux coexistent. La roadmap se décide en COPIL. Elle se révise quand un arbitrage change l'ordre de la valeur, pas à chaque glissement de deux jours.\n\nLancement visé à 6 mois, budget limité : cadrer, construire le minimum qui réduit la complexité du parcours, saisir la conformité, former un pilote réseau, lancer. Le reste est tentation de périmètre.",
      methode:
        "Une page, six colonnes (M1 à M6), cinq lignes (workstreams). Dans chaque case : un résultat visible, pas une activité (« parcours MVP testable », pas « travail IT »). Les jalons se dessinent en vertical, communs à plusieurs lignes : ils forcent les dépendances à se voir.\n\nRègle : chaque jalon a un propriétaire A (RACI) et une instance. Un jalon « lancement » sans avis conformité daté est un vœu.\n\nRelecture : sponsor (ordre de la valeur), IT (faisabilité grossière), conformité (fenêtre de saisine), réseau (fenêtre de formation). Ensuite COPIL. Pas l'inverse.",
      noteText:
        "La roadmap n'autorise pas à démarrer une campagne avant l'avis. Le chef de projet y fait figurer la saisine, pas une case « conformité validée par le CP ».",
      exemple:
        "Banque Horizon (fictive), offre 25-35 ans. La première roadmap du junior était une liste : « M1 études, M2-M5 réalisation, M6 lancement ». Inutile : aucune décision, aucune dépendance. La roadmap retenue tient sur une page : M1 cadrage d'offre, M2 gel de périmètre + saisine, M3-M4 parcours MVP, M4-M5 formation pilote 15 agences, M5 recette, M6 lancement sous GO sponsor. La campagne nationale n'apparaît qu'après le jalon d'avis et le jalon réseau.",
      extra: [
        h("Exemple complet — roadmap 6 mois, Banque Horizon (fictive)"),
        code(`ROADMAP — OFFRE JEUNES ACTIFS 25-35 ANS — BANQUE HORIZON (fictive)
Horizon : 6 mois    Enveloppe : 120 k€    Instance de tenue : COPIL mensuel

              M1           M2            M3           M4           M5           M6
Offre         Cible et     Gel wording   Ajustements  Argumentaire Argumentaire Figée
              promesse     + bénéfices   post-saisine réseau       réseau
Parcours      Cadrage      Specs MVP     Build        Build+recette Recette     En prod
digital       tunnels                    tunnels      interne       métier
Conformité    Dossier de   SAISINE       Instruction  Avis attendu  —           —
risques jur.  saisine      (jalon)       (hors CP)
Réseau /      Charge et    Supports      Formation    Formation     Pilote      Extension
commercial    15 agences   brouillon     pilote       pilote        15 agences  selon GO
Campagne      Intentions   Mix dans      Production   Production    Gel avant   Lancement
              (pas d'achat) enveloppe    sous réserve sous réserve  avis        public

JALONS VERTICAUX (décision, pas « on avance »)
J1 fin M1  GO cadrage offre                         A : sponsor     Instance : COPIL
J2 fin M2  Saisine conformité/risques/juridique     A : CP (orga)   Instance : comité projet
           Avis : A conformité / juridique / risques — hors CP
J3 fin M2  Gel de périmètre MVP                     A : sponsor     Instance : COPIL
J4 fin M4  Parcours MVP testable                    A : IT          Instance : comité projet
J5 fin M5  GO lancement (avis reçu, pilote prêt)    A : sponsor     Instance : COPIL
J6 M6      Lancement public                         A : sponsor     Instance : COPIL

CE QUE CETTE ROADMAP REFUSE
Part de marché inventée. Campagne avant avis. « Conformité validée par le CP ».
Un Gantt de 80 lignes présenté comme feuille de route.`),
      ],
      erreurs:
        "Confondre roadmap et Gantt. Mettre des activités (« réunions », « travail ») au lieu de résultats. Oublier les jalons de décision. Promettre une part de marché. Lancer la campagne en M4 « pour ne pas perdre le média ». Réécrire la roadmap chaque semaine sans arbitrage.",
      particuliers:
        "B2B : la roadmap s'aligne sur un cycle commercial (salons, rentrée), pas sur un sprint IT seul. Distribution : un palier « 12 magasins puis 40 » est une roadmap, un planning magasin par magasin est autre chose. Startup : 3 colonnes suffisent (now / next / later) si les jalons de décision y sont. Assurance (fictive) : la fenêtre de saisine occupe souvent une colonne entière, visible, pas une mention en bas de page.",
      exercice:
        "Le marketing de Banque Horizon (fictive) veut faire figurer en M3 « leadership sur les 25-35 ans » et démarrer l'achat média en M2, avant la saisine. Dites ce que vous gardez, ce que vous refusez, et comment vous modifiez la roadmap en 8 lignes.",
      correction:
        "Vous refusez le « leadership 25-35 ans » : objectif de comm' inventé, pas un livrable, et une part de marché fictive n'a rien à faire ici. Vous refusez l'achat média en M2 : il précède le jalon de saisine et le gel de wording ; c'est un risque réglementaire et un gaspillage si l'avis impose une reprise. Vous gardez une ligne « intentions média » en M1-M2, production sous réserve en M3-M4, gel avant avis en M5, lancement public en M6. Vous ajoutez J2 (saisine) et J5 (GO lancement) en vertical. Vous portez le refus en COPIL, pas en bilatéral marketing.",
    }),
    pack({
      title: "Planning : WBS, Gantt, chemin critique, jalons",
      description:
        "Découper le travail, introduire le Gantt et le chemin critique, et poser des jalons qui décident vraiment.",
      minutes: 7,
      objectifs:
        "Vous savez produire une structure de découpage (WBS), lire un Gantt simple, expliquer le chemin critique, et distinguer un jalon d'une tâche. Vous reliez ces outils à cinq workstreams dépendants.",
      theorie:
        "Le planning transforme la roadmap en travail ordonnancé. Trois outils, à intensité junior : on les comprend, on ne joue pas au logiciel de 400 lignes.\n\nLa WBS (work breakdown structure, structure de découpage du projet) casse le projet en workstreams, lots, livrables. Un lot a un résultat, un R, une date. « Marketing » n'est pas un lot. « Proposition de valeur v1 validée par le sponsor » en est un.\n\nLe Gantt pose les lots sur un calendrier, barres et dépendances (fin-début le plus souvent). C'est une hypothèse datée, tenue à jour. Un Gantt jamais mis à jour ment plus qu'une feuille blanche.\n\nLe chemin critique est la chaîne dont le glissement décale la fin. À Banque Horizon (fictive) : cadrage d'offre → specs parcours → build → recette → lancement. La formation réseau peut l'être si la campagne en dépend. Introduire le chemin critique, c'est demander : « si ce lot glisse d'une semaine, la date glisse-t-elle ? » Si oui, il est critique. Sinon, il a de la marge.\n\nUn jalon n'est pas une barre. C'est une date binaire : prêt / pas prêt, GO / pas GO. « Travail sur le tunnel » n'en est pas un. « Parcours MVP testable » et « GO lancement » en sont. Peu de jalons au COPIL ; les micro-jalons restent au comité projet.",
      methode:
        "Ordre de construction : WBS (quoi) → dépendances (dans quel ordre) → durées réalistes avec les R → chemin critique → jalons de COPIL → Gantt de communication (une page) et Gantt de travail (équipe).\n\nDépendances à écrire explicitement, pas « en même temps tout le monde ». Tests : une saisine avant un wording public ; une formation avant une campagne réseau ; un gel de périmètre avant un build qui n'accepte plus de changement.\n\nTenue : une mise à jour hebdomadaire en comité projet, un extrait jalons + chemin critique en COPIL. Pas 80 lignes au CODIR.",
      noteText:
        "Introduction : le chemin critique se calcule formellement (dates au plus tôt / au plus tard, marge nulle). Au niveau de ce parcours, le test qualitatif « si ça glisse, la fin glisse » suffit. Un logiciel ne remplace pas ce test. Le CP n'est pas A sur les durées IT : il les fait dire par l'IT, puis il les fige.",
      exemple:
        "Banque Horizon (fictive). WBS à 5 workstreams : offre, parcours digital, saisine conformité/risques/juridique, préparation réseau, campagne. Dépendance critique : l'offre précède le parcours ; le parcours et l'avis précèdent le lancement ; la formation précède la campagne réseau. Le junior avait mis « conformité » en parallèle sans jalon : le wording partait trop tôt. Le Gantt d'une page montre les 5 barres, 6 jalons, et la chaîne critique en gras.",
      extra: [
        h("WBS, dépendances critiques et jalons — fil rouge"),
        code(`WBS — 5 WORKSTREAMS — BANQUE HORIZON (fictive)
WS1 Offre et proposition de valeur
    Lots : cible 25-35 | promesse | wording v1 | gel wording
WS2 Parcours de souscription digital
    Lots : specs MVP | build | recette interne | recette métier
WS3 Saisine conformité / risques / juridique
    Lots : dossier de saisine | dépôt | instruction (hors CP) | avis
WS4 Préparation réseau et commercial
    Lots : argumentaire | formation 15 agences | pilote
WS5 Campagne d'acquisition
    Lots : mix dans enveloppe | production | gel avant avis | lancement public

DÉPENDANCES (fin → début, sauf mention)
WS1 cadrage  →  WS2 specs
WS1 wording v1  →  WS3 saisine
WS2 specs  →  WS2 build  →  WS2 recettes
WS3 avis  →  WS5 lancement public          (porte, pas une option)
WS4 formation  →  WS5 campagne réseau
WS2 MVP testable  →  WS4 pilote (le réseau s'exerce sur le vrai parcours)

CHEMIN CRITIQUE (hypothèse de travail, à revalider avec l'IT)
WS1 cadrage → WS2 specs → WS2 build → WS2 recette → WS5 lancement
WS3 est une PORTE sur WS5 : si l'avis glisse, le lancement glisse,
même si WS3 n'est pas une barre aussi longue que le build.
WS5 production média a de la marge tant qu'elle ne démarre pas trop tard.

JALONS COPIL
J1 GO cadrage     J2 saisine déposée     J3 gel périmètre
J4 MVP testable   J5 GO lancement        J6 lancement public`),
      ],
      erreurs:
        "Appeler jalon une tâche de trois semaines. Faire la WBS par métiers (« l'IT, le marketing ») sans livrable. Oublier que l'avis est une porte. Calculer un chemin critique tout seul sans les durées des R. Présenter 200 lignes de Gantt en COPIL. Tenir le Gantt à jour une fois par trimestre.",
      particuliers:
        "PME : un tableau à 5 lignes et 6 jalons suffit ; le mot Gantt n'est pas obligatoire. ETI : un outil (MS Project, Jira, tableur) selon la politique interne. Prestataire externe : les dépendances contractuelles (recette, GO) deviennent des jalons, pas des « on se tient au courant ». Campagne média avec délai de réservation : la marge de WS5 peut disparaître — alors WS5 rejoint le chemin critique.",
      exercice:
        "Banque Horizon (fictive). On vous confie les 5 workstreams ci-dessus, lancement visé 6 mois, enveloppe 120 k€. Livrables à produire : (1) les jalons COPIL datés M1–M6 ; (2) la roadmap d'une page (résultats, pas activités) ; (3) le RACI des 5 workstreams + avis conformité ; (4) les dépendances critiques, y compris la porte d'avis ; (5) un tableau de suivi (workstream, R, A, jalon suivant, statut, écart). Rédigez les cinq livrables. Servez-vous des exemples du module, sans inventer de parts de marché, sans mettre le CP en A sur l'avis.",
      correction:
        "1. Jalons : M1 GO cadrage (sponsor, COPIL) ; M2 saisine déposée (CP orga) + gel périmètre (sponsor) ; M4 MVP testable (IT) ; M5 GO lancement (sponsor, avis reçu, pilote prêt) ; M6 lancement public. 2. Roadmap : cinq lignes (offre, parcours, saisine, réseau, campagne), résultats par mois, campagne publique seulement en M6. 3. RACI : CP = A pilotage et saisine orga ; sponsor = A GO projet et offre ; IT = A paramétrage / parcours ; MK = A campagne ; RES = A préparation réseau ; CONF/JUR/RIS = A chacun sur son avis ; CP = I sur les avis. 4. Critique : cadrage → specs → build → recette → lancement ; avis = porte sur le lancement public ; formation → campagne réseau. 5. Tableau : une ligne par WS, R et A nommés, jalon suivant, statut vert/orange/rouge, écart délai en semaines, écart budget en k€ sur 120 k€, commentaire d'arbitrage. Échec si le CP « valide la conformité », si la campagne précède l'avis, si deux A figurent sur l'avis, si les jalons sont des tâches (« travail IT M2-M5 »).",
    }),
    pack({
      title: "Suivre l'avancement : statut, budget, écarts",
      description:
        "Rendre compte avec un statut lisible, un budget consommé vs prévu, et des écarts qui appellent un arbitrage.",
      minutes: 6,
      objectifs:
        "Vous savez produire un point d'avancement en une page : statut, budget, écarts de délai, de coût et de périmètre, et la décision que cela exige — sans transformer le reporting en roman.",
      theorie:
        "Piloter, c'est comparer l'actuel à une référence, puis décider. Sans référence (roadmap, jalons, enveloppe), un « on avance bien » n'est pas un statut. Trois lectures, toujours ensemble.\n\nLe statut dit si l'on tient le chemin que l'on a promis. Une maille simple : vert (jalon suivant tenable sans arbitrage), orange (jalon menacé, arbitrage en cours ou à prendre), rouge (jalon manqué ou certain d'être manqué sans décision). Le statut se pose par workstream et global. Un global vert avec un workstream critique rouge est un mensonge de consolidation.\n\nLe budget dit ce qui est consommé, engagé, restant, sur l'enveloppe. À Banque Horizon (fictive) : 120 k€ d'investissement. Un point utile : prévu à date, réel à date, écart, projection à fin. 70 k€ dépensés « donc ça va » est faux si l'on est en M2 et que le prévu à date était 35 k€. Inversement, 20 k€ dépensés en M5 peut signaler un projet qui n'a pas lancé les lots, pas une économie vertueuse.\n\nLes écarts nomment l'écart de délai (semaines sur le chemin critique), l'écart de coût (k€ vs enveloppe), l'écart de périmètre (lot coupé, lot ajouté). Un écart n'est pas une faute. Un écart non décidé est une faute de gouvernance : on a laissé le triangle bouger tout seul. L'avancement se présente au comité projet chaque semaine, au COPIL chaque mois, avec la fiche d'arbitrage s'il y a orange ou rouge.",
      methode:
        "Une page, même canevas : (1) statut global et par workstream ; (2) jalon suivant, date, confiance ; (3) budget prévu / réel / projection ; (4) écarts délai, coût, périmètre ; (5) décisions demandées cette séance ; (6) risques qui ont bougé. Dix minutes de lecture maximum.\n\nRègle du feu : celui qui tient le R du workstream propose le statut, le CP le challenge, le COPIL le voit. Le CP ne « met pas au vert » pour protéger le moral.\n\nBudget : une ligne par grand poste (parcours IT, média, formation, presta), pas 80 factures. Le DAF approfondit en annexe s'il le veut.",
      noteText:
        "Le statut n'est pas un KPI commercial. « Les souscriptions du stock actuel » ne disent pas si le projet d'offre 25-35 ans tient son jalon. Distinguer : on le verra au pack KPI. Ici, on parle du projet.",
      exemple:
        "Banque Horizon (fictive), COPIL de M3. Statut global orange : le build parcours a deux semaines de glissement (chemin critique), le budget est à 48 k€ vs 45 k€ prévus (écart mineur), la saisine est déposée (vert), le réseau n'a pas commencé la formation (orange, pas encore critique). Décision demandée : couper le parcours « ouverture instantanée » pour revenir au vert de délai, plutôt que décaler M6. Le COPIL vote la coupe. Le compte rendu écrit l'écart de périmètre. Sans cela, le prochain COPIL « oublierait » que l'on a réduit l'offre.",
      extra: [
        h("Tableau de suivi — canevas d'une page"),
        code(`AVANCEMENT — BANQUE HORIZON (fictive) — COPIL M3
Enveloppe 120 k€    Lancement visé M6    Chemin critique : parcours digital

WS              R     A     Jalon suivant     Statut  Écart délai   Écart budget
Pilotage        CP    CP    COPIL M3          Vert    0             0
Offre           MK    SP    Gel wording M2    Vert    0 (gel tenu)  0
Parcours        DIG   IT    MVP testable M4   Orange  +2 sem.       +3 k€
Saisine         CP    CONF* Avis (porte M5)   Vert    0             0
                            *A de l'avis = CONF, pas le CP
Réseau          COM   RES   Formation M4      Orange  pas démarré   0 (sous-conso)
Campagne        MK    MK    Prod. sous réserve Vert   marge         0

BUDGET                     Prévu à date   Réel    Écart    Projection fin
Parcours IT                30             33      +3       62
Média (pas d'achat M3)     8              5       −3       28
Formation réseau           5              2       −3       10
Presta / autres            2              8       +6       18
Total                      45             48      +3       118 / 120

ÉCARTS À DÉCIDER
Délai : +2 sem. sur le critique → option coupe « ouverture instantanée » (reco)
        ou décalage M6.
Périmètre : si coupe, l'écrire ; ne pas « tenir M6 » en silence.
Coût : +3 k€, tenable si l'on ne rajoute pas de presta.

DÉCISION DEMANDÉE AU COPIL
Couper le parcours « ouverture instantanée » pour tenir M6. GO / NO GO.`),
      ],
      erreurs:
        "Statut global vert alors que le chemin critique est rouge. Raconter les réunions au lieu des écarts. Concevoir le budget comme « il reste de l'argent ». Oublier l'écart de périmètre (la date tient parce que l'on a vidé l'offre). Mettre le CP en A sur un statut conformité. Envoyer 20 slides d'avancement.",
      particuliers:
        "Startup : un tableau dans un doc partagé, hebdo, suffit. ETI : un outil de reporting imposé (politique interne) n'autorise pas à masquer un rouge. Prestataire : le statut « chez le client » et « chez nous » se séparent, sinon chacun accuse l'autre. Campagne déjà achetée : le budget engagé n'est plus un « restant disponible » — l'écart se lit en engagé, pas en facturé.",
      exercice:
        "Reprenez le tableau M3 ci-dessus. Le COPIL refuse la coupe de périmètre et exige M6. En 10 lignes : nouveau statut global, écarts, instance suivante si le glissement se confirme, et ce que vous écrivez sur la conformité (saisine vs avis).",
      correction:
        "Statut global rouge ou orange foncé : le chemin critique a +2 sem. et l'option de coupe est refusée, donc M6 n'est plus tenable sans autre levier (charge IT, décalage). Écart délai : +2 sem. assumé ou à porter en décalage de jalon. Écart périmètre : 0 (le COPIL refuse la coupe). Écart coût : +3 k€, à surveiller si l'on achète de la charge (alors comité d'investissement). Instance suivante : sponsor immédiat, COPIL extraordinaire, pas un silence jusqu'au COPIL M4. Conformité : la saisine reste verte ; l'avis n'est pas « validé par le CP » ; si M6 glisse, le jalon d'avis reste une porte sur le lancement public, on ne lance pas pour « tenir la com ». Vous documentez le refus de coupe : c'est une décision d'instance, pas un échec personnel.",
    }),
    pack({
      title: "KPI de pilotage et performance commerciale",
      description:
        "Séparer les indicateurs qui disent si le projet avance de ceux qui disent si l'offre performe.",
      minutes: 4,
      objectifs:
        "Vous savez choisir quelques KPI de pilotage de projet, les distinguer des KPI de performance commerciale, et ne pas juger un projet en construction avec des ventes qu'il n'a pas encore le droit de produire.",
      theorie:
        "Un indicateur répond à une question. Mélanger les questions produit des réunions où l'on parle de CAC pendant que le jalon de saisine glisse — ou l'inverse.\n\nLes KPI de pilotage disent si le projet tient : jalons tenus / prévus, marge du chemin critique, budget vs enveloppe 120 k€, charge des R critiques, décisions prises vs reportées. Ils se lisent avant et pendant le lancement.\n\nLes KPI de performance commerciale disent si l'offre tient sa promesse : souscriptions 25-35 ans, transformation du parcours, CAC. À Banque Horizon (fictive), le problème de départ est là : souscriptions en baisse, parcours complexe, CAC élevé. Ces KPI deviennent le cœur du COPIL après le lancement, pas le substitut du planning en M2.\n\nAvant le lancement, un signal d'offre (test d'utilisabilité, complétion du MVP, avis d'un pilote de 15 agences) peut exister. Il ne se confond pas avec les ouvertures du stock actuel, qui mesurent l'existant.\n\nQuatre à six indicateurs suffisent. Chaque KPI a une source, une maille, un propriétaire, un seuil. Le chef de projet possède les KPI de pilotage. Marketing, commercial et finance possèdent les KPI commerciaux, selon le RACI.",
      methode:
        "Deux cartouches distincts dans le COPIL : « Santé du projet » (pilotage) et, seulement si le jalon le permet, « Signaux de l'offre » (performance ou pré-performance). Jamais une seule ligne « ça se passe bien ».\n\nAvant M6 : jalons, chemin critique, budget, saisine, préparation réseau. Après M6 : souscriptions de l'offre, transformation du parcours, CAC, plus le run du projet (reste à dépenser, lots de post-lancement).\n\nSeuil d'alerte écrit : exemple — marge du chemin critique < 1 semaine = orange ; projection budget > 120 k€ = escalade comité d'investissement ; avis non reçu à J-15 du lancement public = rouge, campagne gelée.",
      noteText:
        "Vous n'inventez pas un benchmark de CAC « du marché ». Vous comparez l'offre à elle-même (avant/après) et aux objectifs du business case (CA 270 k€ sur 3 ans, bénéfice 60 k€). Une part de marché inventée n'est pas un KPI.",
      exemple:
        "Banque Horizon (fictive), COPIL de M2. Le marketing arrive avec le CAC du trimestre sur le stock actuel. Le CP sépare : ce CAC décrit l'existant, il motive le projet, il ne dit pas si J2 (saisine) et J3 (gel) sont tenus. Santé du projet : jalons M1 tenus, saisine dans 10 jours, budget 22 k€ vs 20 k€. Signaux d'offre : aucun volume, un test d'utilisabilité du prototype prévu M4. Le COPIL arrête de « suivre le CAC » comme statut de projet.",
      extra: [
        code(`DEUX CARTOUCHES — NE PAS FUSIONNER
SANTÉ DU PROJET (KPI de pilotage) — propriétaire : CP
Jalons tenus / prévus
Marge du chemin critique (semaines)
Budget réel vs prévu à date vs enveloppe 120 k€
Décisions COPIL prises / reportées
Saisine : déposée / avis reçu (porte) — avis hors validation CP
Préparation réseau : 15 agences formées / prévues

SIGNAUX DE L'OFFRE (KPI de performance) — propriétaires : MK / COM / FIN
Avant lancement : complétion du MVP, avis pilote, pas le volume du stock
Après lancement : souscriptions offre 25-35 ans, transformation parcours, CAC
Business case de référence : CA 270 k€ / 3 ans, bénéfice 60 k€, ROI 28,6 %
Interdit : part de marché inventée ; juger M2 avec des ventes de M6`),
      ],
      erreurs:
        "Juger le projet en M3 sur les souscriptions de l'existant. 30 KPI. Pas de seuil. Le CP propriétaire du CAC. Un vert de planning qui cache un CAC hors business case après lancement. Inventer un benchmark marché.",
      particuliers:
        "B2B : le KPI commercial peut être un pipeline d'affaires, pas des ouvertures de compte ; le principe de séparation reste. Distribution : trafic magasin n'est pas l'avancement du déploiement. Post-lancement : le COPIL bascule progressivement ; garder au moins un cartouche « reste à livrer » tant qu'il reste de l'enveloppe 120 k€.",
      exercice:
        "On vous demande une slide unique « KPI Banque Horizon » avec : jalons, CAC du trimestre (stock actuel), part de marché 25-35 ans (chiffre inventé par un stagiaire), budget 120 k€, souscriptions visées à 3 ans. Que gardez-vous dans quel cartouche, que retirez-vous, que dites-vous au COPIL ?",
      correction:
        "Cartouche pilotage : jalons, budget 120 k€ (consommé vs prévu). Cartouche performance : souscriptions visées du business case (CA 270 k€, bénéfice 60 k€) comme cible après lancement, pas comme statut M2. Retirer : la part de marché inventée (entreprise fictive, chiffre non sourcé). Déplacer : le CAC du stock actuel en « motif du projet / baseline », pas en santé du projet. Phrase au COPIL : « Nous ne fusionnons pas. Aujourd'hui nous pilotons jalons, chemin critique et enveloppe. Le CAC existant justifie le projet ; il ne dit pas si M6 est tenable. »",
    }),
    quizLesson({
      title: "Quiz — Gouvernance et pilotage",
      description:
        "RACI, roadmap, planning, avancement et KPI. Cinq questions de raisonnement, seuil 70.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Sur une ligne RACI « avis de conformité », qui est Accountable ?",
          options: [
            "A. Le chef de projet, pour que ça n'attende pas",
            "B. Le responsable conformité, le CP étant informé (et responsable de l'organisation de la saisine, pas de l'avis)",
            "C. Marketing et conformité ensemble, pour co-construire",
            "D. Le sponsor uniquement, car il paie",
          ],
          correct: 1,
          explanation:
            "Un A par ligne, et ce A est le métier qui émet l'avis. Le CP organise la saisine, il n'émet pas l'avis, il ne valide pas l'ACPR. Deux A « pour co-construire » vident la responsabilité.",
        }),
        q({
          question: "Quelle est la différence utile entre roadmap et Gantt ?",
          options: [
            "A. Aucune : ce sont deux noms pour le planning détaillé",
            "B. La roadmap est la séquence de valeur et de jalons de décision, lisible par le COPIL ; le Gantt ordonnance les lots dans le calendrier pour exécuter",
            "C. La roadmap est réservée à l'IT, le Gantt au marketing",
            "D. Le Gantt remplace le RACI",
          ],
          correct: 1,
          explanation:
            "Les deux coexistent. La roadmap aligne l'intention et les décisions. Le Gantt exécute. Ni l'un ni l'autre ne remplace le RACI.",
        }),
        q({
          question:
            "À Banque Horizon (fictive), l'avis conformité glisse de deux semaines. Que se passe-t-il pour le lancement public ?",
          options: [
            "A. Rien : la conformité n'est pas sur le chemin critique, on lance quand même",
            "B. Le chef de projet valide l'avis à la place, pour tenir M6",
            "C. L'avis est une porte sur le lancement public : si l'avis glisse, le lancement public glisse, même si le build est fini",
            "D. On avance l'achat média pour « ne pas perdre le budget »",
          ],
          correct: 2,
          explanation:
            "Une porte n'a pas besoin d'être la barre la plus longue pour décaler la fin. Le CP n'émet pas l'avis. Lancer ou acheter du média avant l'avis est une faute de gouvernance, pas une astuce de planning.",
        }),
        q({
          question:
            "Un COPIL voit un statut global vert alors que le workstream critique (parcours digital) est rouge. Que dites-vous ?",
          options: [
            "A. Que le global vert est correct, la moyenne des workstreams compte",
            "B. Que c'est un mensonge de consolidation : le statut global suit le chemin critique, pas la moyenne",
            "C. Que le rouge IT ne concerne pas le marketing, donc le projet est vert",
            "D. Que le budget restant prouve que tout va bien",
          ],
          correct: 1,
          explanation:
            "On ne moyenne pas un chemin critique. Un lot critique rouge rend le projet orange ou rouge. Le budget restant ne dit pas le délai.",
        }),
        q({
          question:
            "En M2, avant lancement, quel jeu d'indicateurs est le plus professionnel ?",
          options: [
            "A. Uniquement le CAC du stock actuel et une part de marché inventée",
            "B. Jalons, marge du chemin critique, budget vs enveloppe 120 k€ ; le CAC existant comme baseline, pas comme statut du projet",
            "C. Trente KPI commerciaux, le planning suivra",
            "D. Aucun KPI : le sentiment du sponsor suffit",
          ],
          correct: 1,
          explanation:
            "Avant lancement, on pilote le projet (jalons, critique, budget). Le CAC de l'existant motive le projet, il ne mesure pas M2. Une part de marché inventée n'est pas un indicateur. Trente KPI remplacent le choix.",
        }),
      ],
    }),
  ],
};
