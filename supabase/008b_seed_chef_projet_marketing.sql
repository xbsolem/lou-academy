-- LOU Academy — 008b PARTIE 2/2 — chef-projet-marketing-developpement
-- Modules restants (positions 5–9).
-- Exécuter APRÈS 008a.

BEGIN;


DO $seed$
DECLARE
  payload        jsonb := $coursejsonb$
{
  "slug": "chef-projet-marketing-developpement",
  "title": "Chef de projet marketing et développement",
  "description": "De l'analyse d'opportunité au déploiement opérationnel d'un projet marketing et commercial.\n\nParcours de 5 heures (300 minutes) pour débutants et profils intermédiaires : identifier une opportunité, cadrer un projet, construire un business case, préparer un comité, piloter, déployer et mesurer. Cas fil rouge : Banque Horizon, offre jeunes actifs 25-35 ans. Exemples complémentaires : assurance, services, distribution, B2B et B2C.\n\nCe parcours enseigne des méthodes applicables. Il ne remplace pas l'expérience nécessaire au pilotage autonome de projets complexes. L'attestation LOU Academy certifie la réussite dans cette plateforme : ce n'est pas un diplôme d'État ni une certification professionnelle enregistrée au RNCP.\n\nPublic : reconversion, juniors marketing/commercial, chefs de projet en prise de poste. Durée : 5 heures. Niveau : débutant à intermédiaire. Catégorie : Marketing et développement.",
  "level": "debutant",
  "category": "Marketing et développement",
  "icon": "fa-diagram-project",
  "gradient": "linear-gradient(135deg, #4f46e5, #db2777)",
  "estimated_duration_minutes": 300,
  "modules": [
    {
      "position": 5,
      "title": "Gouvernance et pilotage",
      "description": "Installer une gouvernance RACI, une roadmap, un planning (WBS, Gantt, chemin critique, jalons), un suivi d'avancement et des KPI de pilotage distincts de la performance commerciale. Cas fil rouge : Banque Horizon (fictive).",
      "lessons": [
        {
          "title": "Gouvernance et matrice RACI",
          "description": "Nommer qui fait, qui tranche, qui est consulté, qui est informé — avec un RACI rempli sur le fil rouge.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire une matrice RACI lisible, n'avoir qu'un A par ligne, et placer le chef de projet du bon côté de la frontière réglementaire : saisine, jamais validation conformité, juridique ou ACPR."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La gouvernance d'un projet, ce n'est pas un organigramme décoratif. C'est la réponse, pour chaque décision et chaque livrable, à quatre questions : qui fait (R, Responsible), qui tranche et rend des comptes (A, Accountable), qui est consulté avant (C, Consulted), qui est informé après (I, Informed).\n\nR exécute. A décide — une seule personne par ligne, sinon personne n'est responsable. C donne un avis que l'on prend le temps d'entendre. I apprend la décision, il n'a pas à la rediscuter le lendemain. Un RACI utile tient sur une page, au niveau des workstreams et des décisions, pas au niveau de chaque ticket.\n\nLe piège junior est de se mettre A partout « pour que ça avance ». Le chef de projet est souvent R sur le pilotage (planning, reporting, animation des instances) et A sur la qualité du dossier de décision. Il n'est pas A sur l'avis de conformité, ni sur le paramétrage SI, ni sur la cible commerciale. À Banque Horizon (banque fictive), l'offre 25-35 ans traverse marketing, commercial, digital, IT, finance, risques, conformité, juridique, réseaux. Si le CP signe pour la conformité, il sort de son rôle et il crée un risque pour l'entreprise.\n\nUn RACI se valide en COPIL, pas dans un tableur solitaire. Il se révise à chaque changement de workstream, pas toutes les semaines. Il ne remplace pas le sponsor : le sponsor est A sur la poursuite ou l'arrêt du projet."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Étapes : (1) lister 8 à 12 lignes — workstreams et décisions, pas 40 tâches ; (2) nommer des rôles, pas des prénoms trop vite, puis rattacher les personnes ; (3) un seul A par ligne ; (4) le CP n'est A que sur le pilotage et la qualité des dossiers ; (5) conformité, juridique, risques sont A sur leurs avis ; (6) faire relire au sponsor ; (7) présenter au COPIL de lancement.\n\nTest de lecture : pour chaque ligne, une personne externe doit pouvoir dire qui relancer vendredi. Si la réponse est « un peu tout le monde », le RACI est faux."
            },
            {
              "block_type": "callout",
              "content": "RACI est une bonne pratique de pilotage, pas une obligation légale. La frontière réglementaire, elle, n'est pas optionnelle : le chef de projet saisit conformité, juridique et risques ; il n'émet pas l'avis, il ne « valide pas l'ACPR »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). Sans RACI, le wording de l'offre circule entre marketing et réseau, le digital construit un tunnel, la conformité découvre le libellé deux semaines avant le lancement. Avec RACI : marketing est R sur la proposition de valeur, le sponsor est A sur le GO d'offre, la conformité est A sur l'avis, le CP est R sur la saisine et I sur l'avis. Le tunnel n'entre pas en production avant le jalon d'avis."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel — RACI rempli, Banque Horizon (fictive)"
            },
            {
              "block_type": "code",
              "content": "RACI — OFFRE JEUNES ACTIFS 25-35 ANS — BANQUE HORIZON (fictive)\nLégende : R fait | A tranche (un seul par ligne) | C consulté | I informé\nRôles : CP chef de projet | SP sponsor | MK marketing | COM commercial\n        DIG digital | IT | FIN finance | RIS risques | CONF conformité\n        JUR juridique | RES réseaux\n\nLigne                              CP  SP  MK  COM DIG IT  FIN RIS CONF JUR RES\nPilotage, planning, reporting      A   I   I   I   I   I   I   I   I    I   I\nDossier de décision / BC           R   A   C   C   C   C   R   C   C    C   I\nGO / NO GO du projet               C   A   I   I   I   I   C   C   C    C   I\nProposition de valeur / offre      C   A   R   C   C   I   I   C   C    C   C\nParcours de souscription digital   C   I   C   C   R   A   I   C   C    I   I\nParamétrage SI / sécurité          I   I   I   I   C   A   I   C   C    I   I\nAvis conformité                    I   I   C   I   C   I   I   C   A    C   I\nAvis juridique                     I   I   C   I   I   I   I   I   C    A   I\nAvis risques                       I   I   C   I   C   I   C   A   C    I   I\nSaisine des avis (organisation)    A   I   I   I   I   I   I   C   C    C   I\nBusiness case, suivi budget        R   A   I   I   I   I   R   I   I    I   I\nPréparation réseau / argumentaire  C   I   C   R   I   I   I   I   C    I   A\nCampagne d'acquisition             C   I   A   C   R   I   C   I   C    I   C\nLancement commercial               C   A   R   R   C   C   I   C   C    I   R\n\nLECTURE\n— Un A et un seul par ligne.\n— Le CP est A sur le pilotage et sur l'organisation de la saisine, pas sur l'avis.\n— CONF / JUR / RIS sont A sur leurs avis. Le CP n'y figure pas en A.\n— Le sponsor est A sur le GO du projet et sur l'offre. Le CP ne s'y substitue pas."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Deux A sur la même ligne « pour impliquer ». Mettre le CP en A sur la conformité. Remplir le RACI avec des prénoms qui partent en congés sans suppléant. Faire 40 lignes. Ne jamais le montrer au COPIL. Confondre C et I : consulter après coup, ou informer trop tôt une salle entière qui se croit décideuse."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "PME : le sponsor, le DAF et le responsable conformité peuvent être trois casquettes sur deux personnes ; le RACI reste utile pour ne pas mélanger les casquettes. Startup : un RACI de 6 lignes suffit. Cabinet / agence : le client est souvent A sur le GO, l'agence R sur la campagne ; le contrat dit qui est A sur le budget. Distribution : le réseau est A sur la préparation des points de vente, pas le CP parisien."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sur le RACI Banque Horizon ci-dessus, corrigez ces trois propositions d'un junior : (1) « Je me mets A sur l'avis conformité, comme ça ça n'attend pas. » (2) « Marketing et réseau en A tous les deux sur la campagne, pour co-construire. » (3) « Le sponsor en I seulement, il n'a pas le temps. » Pour chaque, dites la ligne juste et pourquoi."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Faux. Avis conformité : CONF en A, CP en I (et A seulement sur l'organisation de la saisine). Le CP n'émet pas l'avis. 2. Faux. Un A par ligne. Campagne d'acquisition : MK en A, COM et RES en C, DIG en R si production. La co-construction se joue en C, pas en double A. 3. Faux. Le sponsor est A sur le GO du projet et sur l'offre. Le mettre en I, c'est gouverner sans décideur. S'il n'a pas le temps, on a un problème de sponsor, pas un RACI à alléger."
            }
          ],
          "position": 0
        },
        {
          "title": "Roadmap : la séquence de valeur",
          "description": "Construire une feuille de route lisible par un non-planificateur, avec un exemple complet sur six mois.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez distinguer une roadmap d'un Gantt, y faire figurer des livraisons de valeur et des jalons de décision, et produire une feuille de route complète pour un lancement à 6 mois."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une roadmap (feuille de route) n'est pas un planning détaillé. C'est la séquence des intentions de valeur dans le temps, lisible par un sponsor, un COPIL, un réseau. Elle dit : que livrons-nous, dans quel ordre, pour quelle décision, à quelle maille de mois — pas qui fait la tâche 247 mardi.\n\nTrois objets : les workstreams (offre, parcours, conformité, réseau, campagne) ; les jalons de décision (GO cadrage, saisine, gel de périmètre, GO lancement) ; les fenêtres de livraison (MVP, pilote, campagne). Pas de liste de tickets. Pas de promesse « leadership 25-35 ans au T3 » : Banque Horizon est fictive, une part de marché inventée n'a rien à faire ici.\n\nLa roadmap aligne. Le planning exécute. Un Gantt seul perd les métiers en COPIL. Une roadmap sans planning empêche l'IT de s'engager. Les deux coexistent. La roadmap se décide en COPIL. Elle se révise quand un arbitrage change l'ordre de la valeur, pas à chaque glissement de deux jours.\n\nLancement visé à 6 mois, budget limité : cadrer, construire le minimum qui réduit la complexité du parcours, saisir la conformité, former un pilote réseau, lancer. Le reste est tentation de périmètre."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une page, six colonnes (M1 à M6), cinq lignes (workstreams). Dans chaque case : un résultat visible, pas une activité (« parcours MVP testable », pas « travail IT »). Les jalons se dessinent en vertical, communs à plusieurs lignes : ils forcent les dépendances à se voir.\n\nRègle : chaque jalon a un propriétaire A (RACI) et une instance. Un jalon « lancement » sans avis conformité daté est un vœu.\n\nRelecture : sponsor (ordre de la valeur), IT (faisabilité grossière), conformité (fenêtre de saisine), réseau (fenêtre de formation). Ensuite COPIL. Pas l'inverse."
            },
            {
              "block_type": "callout",
              "content": "La roadmap n'autorise pas à démarrer une campagne avant l'avis. Le chef de projet y fait figurer la saisine, pas une case « conformité validée par le CP »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), offre 25-35 ans. La première roadmap du junior était une liste : « M1 études, M2-M5 réalisation, M6 lancement ». Inutile : aucune décision, aucune dépendance. La roadmap retenue tient sur une page : M1 cadrage d'offre, M2 gel de périmètre + saisine, M3-M4 parcours MVP, M4-M5 formation pilote 15 agences, M5 recette, M6 lancement sous GO sponsor. La campagne nationale n'apparaît qu'après le jalon d'avis et le jalon réseau."
            },
            {
              "block_type": "heading",
              "content": "Exemple complet — roadmap 6 mois, Banque Horizon (fictive)"
            },
            {
              "block_type": "code",
              "content": "ROADMAP — OFFRE JEUNES ACTIFS 25-35 ANS — BANQUE HORIZON (fictive)\nHorizon : 6 mois    Enveloppe : 120 k€    Instance de tenue : COPIL mensuel\n\n              M1           M2            M3           M4           M5           M6\nOffre         Cible et     Gel wording   Ajustements  Argumentaire Argumentaire Figée\n              promesse     + bénéfices   post-saisine réseau       réseau\nParcours      Cadrage      Specs MVP     Build        Build+recette Recette     En prod\ndigital       tunnels                    tunnels      interne       métier\nConformité    Dossier de   SAISINE       Instruction  Avis attendu  —           —\nrisques jur.  saisine      (jalon)       (hors CP)\nRéseau /      Charge et    Supports      Formation    Formation     Pilote      Extension\ncommercial    15 agences   brouillon     pilote       pilote        15 agences  selon GO\nCampagne      Intentions   Mix dans      Production   Production    Gel avant   Lancement\n              (pas d'achat) enveloppe    sous réserve sous réserve  avis        public\n\nJALONS VERTICAUX (décision, pas « on avance »)\nJ1 fin M1  GO cadrage offre                         A : sponsor     Instance : COPIL\nJ2 fin M2  Saisine conformité/risques/juridique     A : CP (orga)   Instance : comité projet\n           Avis : A conformité / juridique / risques — hors CP\nJ3 fin M2  Gel de périmètre MVP                     A : sponsor     Instance : COPIL\nJ4 fin M4  Parcours MVP testable                    A : IT          Instance : comité projet\nJ5 fin M5  GO lancement (avis reçu, pilote prêt)    A : sponsor     Instance : COPIL\nJ6 M6      Lancement public                         A : sponsor     Instance : COPIL\n\nCE QUE CETTE ROADMAP REFUSE\nPart de marché inventée. Campagne avant avis. « Conformité validée par le CP ».\nUn Gantt de 80 lignes présenté comme feuille de route."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Confondre roadmap et Gantt. Mettre des activités (« réunions », « travail ») au lieu de résultats. Oublier les jalons de décision. Promettre une part de marché. Lancer la campagne en M4 « pour ne pas perdre le média ». Réécrire la roadmap chaque semaine sans arbitrage."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "B2B : la roadmap s'aligne sur un cycle commercial (salons, rentrée), pas sur un sprint IT seul. Distribution : un palier « 12 magasins puis 40 » est une roadmap, un planning magasin par magasin est autre chose. Startup : 3 colonnes suffisent (now / next / later) si les jalons de décision y sont. Assurance (fictive) : la fenêtre de saisine occupe souvent une colonne entière, visible, pas une mention en bas de page."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le marketing de Banque Horizon (fictive) veut faire figurer en M3 « leadership sur les 25-35 ans » et démarrer l'achat média en M2, avant la saisine. Dites ce que vous gardez, ce que vous refusez, et comment vous modifiez la roadmap en 8 lignes."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez le « leadership 25-35 ans » : objectif de comm' inventé, pas un livrable, et une part de marché fictive n'a rien à faire ici. Vous refusez l'achat média en M2 : il précède le jalon de saisine et le gel de wording ; c'est un risque réglementaire et un gaspillage si l'avis impose une reprise. Vous gardez une ligne « intentions média » en M1-M2, production sous réserve en M3-M4, gel avant avis en M5, lancement public en M6. Vous ajoutez J2 (saisine) et J5 (GO lancement) en vertical. Vous portez le refus en COPIL, pas en bilatéral marketing."
            }
          ],
          "position": 1
        },
        {
          "title": "Planning : WBS, Gantt, chemin critique, jalons",
          "description": "Découper le travail, introduire le Gantt et le chemin critique, et poser des jalons qui décident vraiment.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez produire une structure de découpage (WBS), lire un Gantt simple, expliquer le chemin critique, et distinguer un jalon d'une tâche. Vous reliez ces outils à cinq workstreams dépendants."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le planning transforme la roadmap en travail ordonnancé. Trois outils, à intensité junior : on les comprend, on ne joue pas au logiciel de 400 lignes.\n\nLa WBS (work breakdown structure, structure de découpage du projet) casse le projet en workstreams, lots, livrables. Un lot a un résultat, un R, une date. « Marketing » n'est pas un lot. « Proposition de valeur v1 validée par le sponsor » en est un.\n\nLe Gantt pose les lots sur un calendrier, barres et dépendances (fin-début le plus souvent). C'est une hypothèse datée, tenue à jour. Un Gantt jamais mis à jour ment plus qu'une feuille blanche.\n\nLe chemin critique est la chaîne dont le glissement décale la fin. À Banque Horizon (fictive) : cadrage d'offre → specs parcours → build → recette → lancement. La formation réseau peut l'être si la campagne en dépend. Introduire le chemin critique, c'est demander : « si ce lot glisse d'une semaine, la date glisse-t-elle ? » Si oui, il est critique. Sinon, il a de la marge.\n\nUn jalon n'est pas une barre. C'est une date binaire : prêt / pas prêt, GO / pas GO. « Travail sur le tunnel » n'en est pas un. « Parcours MVP testable » et « GO lancement » en sont. Peu de jalons au COPIL ; les micro-jalons restent au comité projet."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ordre de construction : WBS (quoi) → dépendances (dans quel ordre) → durées réalistes avec les R → chemin critique → jalons de COPIL → Gantt de communication (une page) et Gantt de travail (équipe).\n\nDépendances à écrire explicitement, pas « en même temps tout le monde ». Tests : une saisine avant un wording public ; une formation avant une campagne réseau ; un gel de périmètre avant un build qui n'accepte plus de changement.\n\nTenue : une mise à jour hebdomadaire en comité projet, un extrait jalons + chemin critique en COPIL. Pas 80 lignes au CODIR."
            },
            {
              "block_type": "callout",
              "content": "Introduction : le chemin critique se calcule formellement (dates au plus tôt / au plus tard, marge nulle). Au niveau de ce parcours, le test qualitatif « si ça glisse, la fin glisse » suffit. Un logiciel ne remplace pas ce test. Le CP n'est pas A sur les durées IT : il les fait dire par l'IT, puis il les fige."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). WBS à 5 workstreams : offre, parcours digital, saisine conformité/risques/juridique, préparation réseau, campagne. Dépendance critique : l'offre précède le parcours ; le parcours et l'avis précèdent le lancement ; la formation précède la campagne réseau. Le junior avait mis « conformité » en parallèle sans jalon : le wording partait trop tôt. Le Gantt d'une page montre les 5 barres, 6 jalons, et la chaîne critique en gras."
            },
            {
              "block_type": "heading",
              "content": "WBS, dépendances critiques et jalons — fil rouge"
            },
            {
              "block_type": "code",
              "content": "WBS — 5 WORKSTREAMS — BANQUE HORIZON (fictive)\nWS1 Offre et proposition de valeur\n    Lots : cible 25-35 | promesse | wording v1 | gel wording\nWS2 Parcours de souscription digital\n    Lots : specs MVP | build | recette interne | recette métier\nWS3 Saisine conformité / risques / juridique\n    Lots : dossier de saisine | dépôt | instruction (hors CP) | avis\nWS4 Préparation réseau et commercial\n    Lots : argumentaire | formation 15 agences | pilote\nWS5 Campagne d'acquisition\n    Lots : mix dans enveloppe | production | gel avant avis | lancement public\n\nDÉPENDANCES (fin → début, sauf mention)\nWS1 cadrage  →  WS2 specs\nWS1 wording v1  →  WS3 saisine\nWS2 specs  →  WS2 build  →  WS2 recettes\nWS3 avis  →  WS5 lancement public          (porte, pas une option)\nWS4 formation  →  WS5 campagne réseau\nWS2 MVP testable  →  WS4 pilote (le réseau s'exerce sur le vrai parcours)\n\nCHEMIN CRITIQUE (hypothèse de travail, à revalider avec l'IT)\nWS1 cadrage → WS2 specs → WS2 build → WS2 recette → WS5 lancement\nWS3 est une PORTE sur WS5 : si l'avis glisse, le lancement glisse,\nmême si WS3 n'est pas une barre aussi longue que le build.\nWS5 production média a de la marge tant qu'elle ne démarre pas trop tard.\n\nJALONS COPIL\nJ1 GO cadrage     J2 saisine déposée     J3 gel périmètre\nJ4 MVP testable   J5 GO lancement        J6 lancement public"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Appeler jalon une tâche de trois semaines. Faire la WBS par métiers (« l'IT, le marketing ») sans livrable. Oublier que l'avis est une porte. Calculer un chemin critique tout seul sans les durées des R. Présenter 200 lignes de Gantt en COPIL. Tenir le Gantt à jour une fois par trimestre."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "PME : un tableau à 5 lignes et 6 jalons suffit ; le mot Gantt n'est pas obligatoire. ETI : un outil (MS Project, Jira, tableur) selon la politique interne. Prestataire externe : les dépendances contractuelles (recette, GO) deviennent des jalons, pas des « on se tient au courant ». Campagne média avec délai de réservation : la marge de WS5 peut disparaître — alors WS5 rejoint le chemin critique."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). On vous confie les 5 workstreams ci-dessus, lancement visé 6 mois, enveloppe 120 k€. Livrables à produire : (1) les jalons COPIL datés M1–M6 ; (2) la roadmap d'une page (résultats, pas activités) ; (3) le RACI des 5 workstreams + avis conformité ; (4) les dépendances critiques, y compris la porte d'avis ; (5) un tableau de suivi (workstream, R, A, jalon suivant, statut, écart). Rédigez les cinq livrables. Servez-vous des exemples du module, sans inventer de parts de marché, sans mettre le CP en A sur l'avis."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Jalons : M1 GO cadrage (sponsor, COPIL) ; M2 saisine déposée (CP orga) + gel périmètre (sponsor) ; M4 MVP testable (IT) ; M5 GO lancement (sponsor, avis reçu, pilote prêt) ; M6 lancement public. 2. Roadmap : cinq lignes (offre, parcours, saisine, réseau, campagne), résultats par mois, campagne publique seulement en M6. 3. RACI : CP = A pilotage et saisine orga ; sponsor = A GO projet et offre ; IT = A paramétrage / parcours ; MK = A campagne ; RES = A préparation réseau ; CONF/JUR/RIS = A chacun sur son avis ; CP = I sur les avis. 4. Critique : cadrage → specs → build → recette → lancement ; avis = porte sur le lancement public ; formation → campagne réseau. 5. Tableau : une ligne par WS, R et A nommés, jalon suivant, statut vert/orange/rouge, écart délai en semaines, écart budget en k€ sur 120 k€, commentaire d'arbitrage. Échec si le CP « valide la conformité », si la campagne précède l'avis, si deux A figurent sur l'avis, si les jalons sont des tâches (« travail IT M2-M5 »)."
            }
          ],
          "position": 2
        },
        {
          "title": "Suivre l'avancement : statut, budget, écarts",
          "description": "Rendre compte avec un statut lisible, un budget consommé vs prévu, et des écarts qui appellent un arbitrage.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez produire un point d'avancement en une page : statut, budget, écarts de délai, de coût et de périmètre, et la décision que cela exige — sans transformer le reporting en roman."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Piloter, c'est comparer l'actuel à une référence, puis décider. Sans référence (roadmap, jalons, enveloppe), un « on avance bien » n'est pas un statut. Trois lectures, toujours ensemble.\n\nLe statut dit si l'on tient le chemin que l'on a promis. Une maille simple : vert (jalon suivant tenable sans arbitrage), orange (jalon menacé, arbitrage en cours ou à prendre), rouge (jalon manqué ou certain d'être manqué sans décision). Le statut se pose par workstream et global. Un global vert avec un workstream critique rouge est un mensonge de consolidation.\n\nLe budget dit ce qui est consommé, engagé, restant, sur l'enveloppe. À Banque Horizon (fictive) : 120 k€ d'investissement. Un point utile : prévu à date, réel à date, écart, projection à fin. 70 k€ dépensés « donc ça va » est faux si l'on est en M2 et que le prévu à date était 35 k€. Inversement, 20 k€ dépensés en M5 peut signaler un projet qui n'a pas lancé les lots, pas une économie vertueuse.\n\nLes écarts nomment l'écart de délai (semaines sur le chemin critique), l'écart de coût (k€ vs enveloppe), l'écart de périmètre (lot coupé, lot ajouté). Un écart n'est pas une faute. Un écart non décidé est une faute de gouvernance : on a laissé le triangle bouger tout seul. L'avancement se présente au comité projet chaque semaine, au COPIL chaque mois, avec la fiche d'arbitrage s'il y a orange ou rouge."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une page, même canevas : (1) statut global et par workstream ; (2) jalon suivant, date, confiance ; (3) budget prévu / réel / projection ; (4) écarts délai, coût, périmètre ; (5) décisions demandées cette séance ; (6) risques qui ont bougé. Dix minutes de lecture maximum.\n\nRègle du feu : celui qui tient le R du workstream propose le statut, le CP le challenge, le COPIL le voit. Le CP ne « met pas au vert » pour protéger le moral.\n\nBudget : une ligne par grand poste (parcours IT, média, formation, presta), pas 80 factures. Le DAF approfondit en annexe s'il le veut."
            },
            {
              "block_type": "callout",
              "content": "Le statut n'est pas un KPI commercial. « Les souscriptions du stock actuel » ne disent pas si le projet d'offre 25-35 ans tient son jalon. Distinguer : on le verra au pack KPI. Ici, on parle du projet."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), COPIL de M3. Statut global orange : le build parcours a deux semaines de glissement (chemin critique), le budget est à 48 k€ vs 45 k€ prévus (écart mineur), la saisine est déposée (vert), le réseau n'a pas commencé la formation (orange, pas encore critique). Décision demandée : couper le parcours « ouverture instantanée » pour revenir au vert de délai, plutôt que décaler M6. Le COPIL vote la coupe. Le compte rendu écrit l'écart de périmètre. Sans cela, le prochain COPIL « oublierait » que l'on a réduit l'offre."
            },
            {
              "block_type": "heading",
              "content": "Tableau de suivi — canevas d'une page"
            },
            {
              "block_type": "code",
              "content": "AVANCEMENT — BANQUE HORIZON (fictive) — COPIL M3\nEnveloppe 120 k€    Lancement visé M6    Chemin critique : parcours digital\n\nWS              R     A     Jalon suivant     Statut  Écart délai   Écart budget\nPilotage        CP    CP    COPIL M3          Vert    0             0\nOffre           MK    SP    Gel wording M2    Vert    0 (gel tenu)  0\nParcours        DIG   IT    MVP testable M4   Orange  +2 sem.       +3 k€\nSaisine         CP    CONF* Avis (porte M5)   Vert    0             0\n                            *A de l'avis = CONF, pas le CP\nRéseau          COM   RES   Formation M4      Orange  pas démarré   0 (sous-conso)\nCampagne        MK    MK    Prod. sous réserve Vert   marge         0\n\nBUDGET                     Prévu à date   Réel    Écart    Projection fin\nParcours IT                30             33      +3       62\nMédia (pas d'achat M3)     8              5       −3       28\nFormation réseau           5              2       −3       10\nPresta / autres            2              8       +6       18\nTotal                      45             48      +3       118 / 120\n\nÉCARTS À DÉCIDER\nDélai : +2 sem. sur le critique → option coupe « ouverture instantanée » (reco)\n        ou décalage M6.\nPérimètre : si coupe, l'écrire ; ne pas « tenir M6 » en silence.\nCoût : +3 k€, tenable si l'on ne rajoute pas de presta.\n\nDÉCISION DEMANDÉE AU COPIL\nCouper le parcours « ouverture instantanée » pour tenir M6. GO / NO GO."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Statut global vert alors que le chemin critique est rouge. Raconter les réunions au lieu des écarts. Concevoir le budget comme « il reste de l'argent ». Oublier l'écart de périmètre (la date tient parce que l'on a vidé l'offre). Mettre le CP en A sur un statut conformité. Envoyer 20 slides d'avancement."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Startup : un tableau dans un doc partagé, hebdo, suffit. ETI : un outil de reporting imposé (politique interne) n'autorise pas à masquer un rouge. Prestataire : le statut « chez le client » et « chez nous » se séparent, sinon chacun accuse l'autre. Campagne déjà achetée : le budget engagé n'est plus un « restant disponible » — l'écart se lit en engagé, pas en facturé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Reprenez le tableau M3 ci-dessus. Le COPIL refuse la coupe de périmètre et exige M6. En 10 lignes : nouveau statut global, écarts, instance suivante si le glissement se confirme, et ce que vous écrivez sur la conformité (saisine vs avis)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Statut global rouge ou orange foncé : le chemin critique a +2 sem. et l'option de coupe est refusée, donc M6 n'est plus tenable sans autre levier (charge IT, décalage). Écart délai : +2 sem. assumé ou à porter en décalage de jalon. Écart périmètre : 0 (le COPIL refuse la coupe). Écart coût : +3 k€, à surveiller si l'on achète de la charge (alors comité d'investissement). Instance suivante : sponsor immédiat, COPIL extraordinaire, pas un silence jusqu'au COPIL M4. Conformité : la saisine reste verte ; l'avis n'est pas « validé par le CP » ; si M6 glisse, le jalon d'avis reste une porte sur le lancement public, on ne lance pas pour « tenir la com ». Vous documentez le refus de coupe : c'est une décision d'instance, pas un échec personnel."
            }
          ],
          "position": 3
        },
        {
          "title": "KPI de pilotage et performance commerciale",
          "description": "Séparer les indicateurs qui disent si le projet avance de ceux qui disent si l'offre performe.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez choisir quelques KPI de pilotage de projet, les distinguer des KPI de performance commerciale, et ne pas juger un projet en construction avec des ventes qu'il n'a pas encore le droit de produire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un indicateur répond à une question. Mélanger les questions produit des réunions où l'on parle de CAC pendant que le jalon de saisine glisse — ou l'inverse.\n\nLes KPI de pilotage disent si le projet tient : jalons tenus / prévus, marge du chemin critique, budget vs enveloppe 120 k€, charge des R critiques, décisions prises vs reportées. Ils se lisent avant et pendant le lancement.\n\nLes KPI de performance commerciale disent si l'offre tient sa promesse : souscriptions 25-35 ans, transformation du parcours, CAC. À Banque Horizon (fictive), le problème de départ est là : souscriptions en baisse, parcours complexe, CAC élevé. Ces KPI deviennent le cœur du COPIL après le lancement, pas le substitut du planning en M2.\n\nAvant le lancement, un signal d'offre (test d'utilisabilité, complétion du MVP, avis d'un pilote de 15 agences) peut exister. Il ne se confond pas avec les ouvertures du stock actuel, qui mesurent l'existant.\n\nQuatre à six indicateurs suffisent. Chaque KPI a une source, une maille, un propriétaire, un seuil. Le chef de projet possède les KPI de pilotage. Marketing, commercial et finance possèdent les KPI commerciaux, selon le RACI."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Deux cartouches distincts dans le COPIL : « Santé du projet » (pilotage) et, seulement si le jalon le permet, « Signaux de l'offre » (performance ou pré-performance). Jamais une seule ligne « ça se passe bien ».\n\nAvant M6 : jalons, chemin critique, budget, saisine, préparation réseau. Après M6 : souscriptions de l'offre, transformation du parcours, CAC, plus le run du projet (reste à dépenser, lots de post-lancement).\n\nSeuil d'alerte écrit : exemple — marge du chemin critique < 1 semaine = orange ; projection budget > 120 k€ = escalade comité d'investissement ; avis non reçu à J-15 du lancement public = rouge, campagne gelée."
            },
            {
              "block_type": "callout",
              "content": "Vous n'inventez pas un benchmark de CAC « du marché ». Vous comparez l'offre à elle-même (avant/après) et aux objectifs du business case (CA 270 k€ sur 3 ans, bénéfice 60 k€). Une part de marché inventée n'est pas un KPI."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), COPIL de M2. Le marketing arrive avec le CAC du trimestre sur le stock actuel. Le CP sépare : ce CAC décrit l'existant, il motive le projet, il ne dit pas si J2 (saisine) et J3 (gel) sont tenus. Santé du projet : jalons M1 tenus, saisine dans 10 jours, budget 22 k€ vs 20 k€. Signaux d'offre : aucun volume, un test d'utilisabilité du prototype prévu M4. Le COPIL arrête de « suivre le CAC » comme statut de projet."
            },
            {
              "block_type": "code",
              "content": "DEUX CARTOUCHES — NE PAS FUSIONNER\nSANTÉ DU PROJET (KPI de pilotage) — propriétaire : CP\nJalons tenus / prévus\nMarge du chemin critique (semaines)\nBudget réel vs prévu à date vs enveloppe 120 k€\nDécisions COPIL prises / reportées\nSaisine : déposée / avis reçu (porte) — avis hors validation CP\nPréparation réseau : 15 agences formées / prévues\n\nSIGNAUX DE L'OFFRE (KPI de performance) — propriétaires : MK / COM / FIN\nAvant lancement : complétion du MVP, avis pilote, pas le volume du stock\nAprès lancement : souscriptions offre 25-35 ans, transformation parcours, CAC\nBusiness case de référence : CA 270 k€ / 3 ans, bénéfice 60 k€, ROI 28,6 %\nInterdit : part de marché inventée ; juger M2 avec des ventes de M6"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Juger le projet en M3 sur les souscriptions de l'existant. 30 KPI. Pas de seuil. Le CP propriétaire du CAC. Un vert de planning qui cache un CAC hors business case après lancement. Inventer un benchmark marché."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "B2B : le KPI commercial peut être un pipeline d'affaires, pas des ouvertures de compte ; le principe de séparation reste. Distribution : trafic magasin n'est pas l'avancement du déploiement. Post-lancement : le COPIL bascule progressivement ; garder au moins un cartouche « reste à livrer » tant qu'il reste de l'enveloppe 120 k€."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous demande une slide unique « KPI Banque Horizon » avec : jalons, CAC du trimestre (stock actuel), part de marché 25-35 ans (chiffre inventé par un stagiaire), budget 120 k€, souscriptions visées à 3 ans. Que gardez-vous dans quel cartouche, que retirez-vous, que dites-vous au COPIL ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Cartouche pilotage : jalons, budget 120 k€ (consommé vs prévu). Cartouche performance : souscriptions visées du business case (CA 270 k€, bénéfice 60 k€) comme cible après lancement, pas comme statut M2. Retirer : la part de marché inventée (entreprise fictive, chiffre non sourcé). Déplacer : le CAC du stock actuel en « motif du projet / baseline », pas en santé du projet. Phrase au COPIL : « Nous ne fusionnons pas. Aujourd'hui nous pilotons jalons, chemin critique et enveloppe. Le CAC existant justifie le projet ; il ne dit pas si M6 est tenable. »"
            }
          ],
          "position": 4
        },
        {
          "title": "Quiz — Gouvernance et pilotage",
          "description": "RACI, roadmap, planning, avancement et KPI. Cinq questions de raisonnement, seuil 70.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Gouvernance et pilotage",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Sur une ligne RACI « avis de conformité », qui est Accountable ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le chef de projet, pour que ça n'attende pas",
                  "B. Le responsable conformité, le CP étant informé (et responsable de l'organisation de la saisine, pas de l'avis)",
                  "C. Marketing et conformité ensemble, pour co-construire",
                  "D. Le sponsor uniquement, car il paie"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un A par ligne, et ce A est le métier qui émet l'avis. Le CP organise la saisine, il n'émet pas l'avis, il ne valide pas l'ACPR. Deux A « pour co-construire » vident la responsabilité."
              },
              {
                "question": "Quelle est la différence utile entre roadmap et Gantt ?",
                "question_type": "single_choice",
                "options": [
                  "A. Aucune : ce sont deux noms pour le planning détaillé",
                  "B. La roadmap est la séquence de valeur et de jalons de décision, lisible par le COPIL ; le Gantt ordonnance les lots dans le calendrier pour exécuter",
                  "C. La roadmap est réservée à l'IT, le Gantt au marketing",
                  "D. Le Gantt remplace le RACI"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les deux coexistent. La roadmap aligne l'intention et les décisions. Le Gantt exécute. Ni l'un ni l'autre ne remplace le RACI."
              },
              {
                "question": "À Banque Horizon (fictive), l'avis conformité glisse de deux semaines. Que se passe-t-il pour le lancement public ?",
                "question_type": "single_choice",
                "options": [
                  "A. Rien : la conformité n'est pas sur le chemin critique, on lance quand même",
                  "B. Le chef de projet valide l'avis à la place, pour tenir M6",
                  "C. L'avis est une porte sur le lancement public : si l'avis glisse, le lancement public glisse, même si le build est fini",
                  "D. On avance l'achat média pour « ne pas perdre le budget »"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Une porte n'a pas besoin d'être la barre la plus longue pour décaler la fin. Le CP n'émet pas l'avis. Lancer ou acheter du média avant l'avis est une faute de gouvernance, pas une astuce de planning."
              },
              {
                "question": "Un COPIL voit un statut global vert alors que le workstream critique (parcours digital) est rouge. Que dites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Que le global vert est correct, la moyenne des workstreams compte",
                  "B. Que c'est un mensonge de consolidation : le statut global suit le chemin critique, pas la moyenne",
                  "C. Que le rouge IT ne concerne pas le marketing, donc le projet est vert",
                  "D. Que le budget restant prouve que tout va bien"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On ne moyenne pas un chemin critique. Un lot critique rouge rend le projet orange ou rouge. Le budget restant ne dit pas le délai."
              },
              {
                "question": "En M2, avant lancement, quel jeu d'indicateurs est le plus professionnel ?",
                "question_type": "single_choice",
                "options": [
                  "A. Uniquement le CAC du stock actuel et une part de marché inventée",
                  "B. Jalons, marge du chemin critique, budget vs enveloppe 120 k€ ; le CAC existant comme baseline, pas comme statut du projet",
                  "C. Trente KPI commerciaux, le planning suivra",
                  "D. Aucun KPI : le sentiment du sponsor suffit"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Avant lancement, on pilote le projet (jalons, critique, budget). Le CAC de l'existant motive le projet, il ne mesure pas M2. Une part de marché inventée n'est pas un indicateur. Trente KPI remplacent le choix."
              }
            ]
          },
          "position": 5
        }
      ]
    },
    {
      "position": 6,
      "title": "Parties prenantes et risques",
      "description": "Coordonner les contributeurs, tenir une communication de projet lisible, cartographier les risques et arbitrer les dépendances sans se substituer à la conformité ni au juridique.",
      "lessons": [
        {
          "title": "Coordonner les contributeurs",
          "description": "Faire livrer marketing, réseau, IT, finance, risques, conformité et partenaires, sans confondre animation et autorité hiérarchique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez dresser une carte des contributeurs par livrable, distinguer responsable, contributeur, consulté et valideur, et embarquer à temps les fonctions qui ont un droit de veto. Vous savez aussi ce que le chef de projet ne valide pas seul."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un projet marketing et commercial n'avance pas parce que le chef de projet exécute toutes les tâches. Il avance parce que des contributeurs, qui n'ont ni le même métier, ni le même calendrier, ni le même droit de dire non, livrent chacun une part du résultat. Chez Banque Horizon — banque fictive — l'offre jeunes actifs 25-35 ans mobilise le marketing, le digital, le commercial, le réseau d'agences, l'IT, la finance, les risques, la conformité et le juridique. Un oubli suffit à bloquer la mise en marché : un parcours web sans le réseau, une campagne sans avis de conformité, un tarif sans la finance.\n\nCoordonner, c'est rendre visible qui fait quoi, pour quand, avec quelle dépendance, et qui valide. Ce n'est pas donner des ordres : le chef de projet n'est généralement pas le supérieur hiérarchique des contributeurs. Ce n'est pas non plus se substituer à la conformité, au juridique ou aux risques. Ces fonctions conservent leur veto métier, y compris vis-à-vis du régulateur. Votre rôle est de les embarquer assez tôt pour que le veto, s'il arrive, arrive avant la campagne, pas la veille du lancement.\n\nLa coordination se joue sur les livrables, pas sur l'organigramme. On ne convie pas tout le monde à toutes les réunions. On relie un livrable à un responsable unique, à des contributeurs nommés, à un valideur, et à une date liée aux autres livrables."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Procédez dans cet ordre, par écrit, dès que le cadrage est stable.\n1. Listez les livrables de mise en marché (parcours, tarif, argumentaire, formation réseau, recette IT, avis conformité, supports juridiques, plan média, run SAV).\n2. Pour chacun, nommez un responsable unique, les contributeurs, le valideur, la date, et la dépendance amont.\n3. Séparez les veto (conformité, juridique, risques, finance sur le budget) des simples avis. Un avis n'est pas une décision.\n4. Fixez un rythme court avec les contributeurs critiques, pas un comité plénier hebdomadaire.\n5. Dès qu'un contributeur glisse, reformulez l'impact sur la date, le périmètre ou le coût, puis demandez un arbitrage. Ne « poussez » pas seul contre un veto métier.\n6. Tenez à jour la carte quand quelqu'un part, quand un partenaire entre, ou quand un livrable est scindé."
            },
            {
              "block_type": "callout",
              "content": "Le chef de projet anime, alerte et documente. Il n'approuve pas à la place de la conformité, du juridique ou des risques. Un lancement « validé par le CP » sans avis du titulaire n'est pas une décision professionnelle."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Banque Horizon (cas fictif), le marketing veut lancer une campagne d'acquisition six semaines avant que l'IT livre le parcours de souscription simplifié. Le réseau n'a pas été associé : les conseillers continueraient de vendre l'ancienne offre. La coordination correcte consiste à figer trois livrables liés — parcours lot 1, argumentaire réseau, campagne — avec un responsable chacun, une date commune, et un avis conformité sur les messages avant réservation média. Sans cette carte, chacun avance dans son silo et le lancement devient un assemblage de last minute."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Confondre coordination et autorité hiérarchique, et « affecter » des tâches à des gens qui ne vous reportent pas, sans accord de leur manager. Inviter tout le monde à chaque point, ce qui vide les réunions. Consulter la conformité après les créas. Oublier le réseau, le SAV ou un partenaire de distribution. Valider soi-même un point réglementaire « pour gagner du temps ». Laisser un livrable sans responsable unique (« c'est l'équipe digitale »)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En assurance, un réseau de courtiers n'est pas un réseau d'agences salariées : le courtier est un partenaire, pas un exécutant. Vous coordonnez par contrat, formation et outils, pas par note de service. En distribution (corner en grande surface, partenariat enseigne), le calendrier du distributeur — catalogue, tête de gondole, formation des vendeurs — devient un contributeur critique. Un chef de projet junior qui traite le distributeur comme un « canal marketing » découvre trop tard que le listing a une date de gel. En mode prestataire, vous coordonnez aussi le client : un interlocuteur marketing unique n'engage pas la DSI ni la conformité du client."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour l'offre jeunes actifs de Banque Horizon, vous devez livrer en parallèle : parcours web de souscription, grille tarifaire, argumentaire conseiller, formation des 80 agences, avis conformité des messages, campagne d'acquisition. Pour chaque livrable, indiquez responsable, contributeurs, valideur, et une dépendance. Qui n'est pas le valideur ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Parcours web : responsable IT/digital, contributeurs marketing et réseau (recette métier), valideur métier + sécurité selon politique interne. Grille tarifaire : responsable finance/pricing, contributeurs marketing, valideur finance (et parfois risques). Argumentaire : responsable marketing, contributeurs commercial et conformité, valideur conformité/juridique sur les mentions, pas le chef de projet. Formation agences : responsable direction du réseau, contributeurs marketing et formation, valideur réseau. Avis messages : responsable conformité, contributeur marketing, le CP organise le jalon mais ne signe pas l'avis. Campagne : responsable marketing, contributeurs agence média et digital, valideur marketing sous réserve de l'avis conformité déjà obtenu. Le chef de projet n'est le valideur d'aucun de ces six livrables, sauf si la gouvernance l'a nommé responsable d'un livrable d'exécution (planning, reporting). Il tient la carte et les dates."
            }
          ],
          "position": 0
        },
        {
          "title": "Communication de projet",
          "description": "Tenir une communication interne claire : qui informe qui, à quel rythme, et comment figer une décision dans un compte rendu.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez concevoir un plan de communication projet simple (destinataires, rythme, canal, niveau de détail) et rédiger un compte rendu professionnel : décisions, actions nominatives, points ouverts, diffusion limitée."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La communication de projet n'est pas un journal d'équipe ni une collection d'e-mails. C'est un dispositif qui permet à chaque contributeur de savoir où en est le projet, ce qui a été décidé, ce qui lui est demandé, et ce qui reste ouvert. Sans cela, chacun reconstruit sa propre version : le sponsor croit que l'on lance à la date, l'IT croit que le périmètre a bougé, le réseau n'a rien vu venir.\n\nTrois niveaux se mélangent trop souvent. L'information descendante (où l'on en est, prochain jalon) n'est pas la décision (qui a tranché quoi). La décision n'est pas l'action (qui fait quoi, pour quelle date). Un message « on avance bien, merci à tous » ne contient ni l'un ni l'autre. Le chef de projet vise la justesse : assez de faits pour décider, assez court pour être lu, assez nominatif pour engager.\n\nLe compte rendu de réunion est un acte de gouvernance, pas une politesse. Il fige les décisions, les actions, les absents, les points hors périmètre. Un silence de 48 heures après diffusion peut valoir accord, si la gouvernance l'a dit ; sinon, vous demandez une validation explicite sur les décisions sensibles. Les sujets de conformité, de juridique et de risques ne sont actés que si le titulaire était présent ou a donné un avis écrit.\n\nLa communication externe n'est pas le même canal. Un projet interne mal tenu produit souvent une promesse publique trop tôt."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Construisez un plan en une page, puis tenez-le.\n1. Destinataires : sponsor, comité, contributeurs, réseau, partenaires — pas une liste unique.\n2. Rythme : flash hebdo factuel (cinq lignes), comité selon gouvernance, CR après chaque réunion de décision.\n3. Canal : l'outil du projet pour le suivi, l'e-mail pour les décisions qui doivent laisser une trace, la réunion pour l'arbitrage. Évitez le chat comme seul lieu de décision.\n4. Niveau de détail : le sponsor veut écarts et décisions ; le contributeur veut ses actions ; le réseau veut la date à laquelle il devra vendre.\n5. Rédigez le CR dans les 24 heures, avec décisions numérotées, actions à responsable unique, parking des hors-sujets.\n6. Diffusez en liste nominative. Un CR « à toute la banque » n'est plus un document de projet."
            },
            {
              "block_type": "callout",
              "content": "Un compte rendu n'est pas le procès-verbal d'une instance réglementaire. Il documente le projet. Les avis conformité et juridiques restent des livrables signés par leurs auteurs, annexés ou référencés, jamais « résumés de mémoire » par le chef de projet."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Point d'avancement Banque Horizon, mardi 10 h. Sans méthode, le CR dit : « Échanges riches sur le parcours. L'IT va voir. Le marketing réfléchit au ton. » Une semaine plus tard, personne n'est engagé. Avec méthode, le CR porte : décision D1 — le lot 1 se limite à la souscription web, l'application mobile passe au lot 2 (sponsor, 12/03) ; action A1 — marketing livre les maquettes mentions légales à la conformité pour le 18/03, responsable Léa Martin ; point ouvert — le partenaire fintech n'a pas confirmé l'API. La réunion a duré 40 minutes. Le projet, lui, a avancé."
            },
            {
              "block_type": "code",
              "content": "COMPTE RENDU DE RÉUNION PROJET\nConfidentiel interne — diffusion limitée aux destinataires nommés\n\nProjet : ........................................  Réf. : ....................\nRéunion n° : ....   Date : ../../....   Lieu / visio : .......................\nDurée prévue : ....     Durée réelle : ....\nAnimateur : .....................   Rédacteur du CR : .....................\nProchaine réunion : ../../.... à ....\n\nParticipants\nNom                 Entité / rôle              Présent  Excusé  Pouvoir\n.................   .......................    [ ]      [ ]     ..........\n.................   .......................    [ ]      [ ]     ..........\n\nOrdre du jour (validé en ouverture)\n1.\n2.\n3.\n\nDécisions (formulation ferme : qui, quoi, dès quand)\nD1. ......................................................................\n    Responsable : ...............   Échéance : ../../....   Statut : décidé\nD2. ......................................................................\n    Responsable : ...............   Échéance : ../../....   Statut : décidé\n\nActions (un responsable nommé — jamais « l'équipe »)\nN°   Libellé                               Resp.        Échéance    Dépend de\nA1   ...................................   ..........   ../../..    ........\nA2   ...................................   ..........   ../../..    ........\n\nPoints ouverts / risques signalés\n- Description | Impact pressenti | Propriétaire | Date de revue\n\nParking (hors périmètre, à ne pas traiter dans ce projet)\n-\n\nPièces / liens\n-\n\nDiffusion nominative : ........................................................\nDélai de remarque sur le CR : 48 h. Silence = accord, sauf décision de\nconformité, juridique ou risques : alors avis écrit du titulaire obligatoire.\n\nRappel : le chef de projet rédige et diffuse. Il n'acte pas un avis\nréglementaire à la place du titulaire absent."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Rédiger le CR trois semaines plus tard. Attribuer les actions à « l'équipe », « l'IT » ou « le marketing ». Transformer le CR en roman de débat. Omettre les absents, donc laisser croire qu'une décision de conformité a été prise sans la conformité. Mettre le sponsor en copie de chaque micro-échange. Annoncer une date de lancement au réseau avant que le comité l'ait tranchée. Utiliser le chat comme archive unique des arbitrages."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Comité formel (COMEX, comité offre) : le secrétariat et le format peuvent être imposés par la gouvernance. Vous préparez l'annexe, vous n'imposez pas votre modèle. Projet avec partenaire distributeur : deux CR, deux listes de diffusion, deux niveaux de confidentialité — le partenaire ne reçoit pas vos débats de marge. Crise (fuite presse, incident de parcours) : la communication projet cède le pas au dispositif de crise de l'entreprise ; vous alimentez les faits, vous ne devenez pas porte-parole."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Après un point de 35 minutes sur l'offre jeunes actifs, vous avez entendu : l'IT « pense » livrer le 22, le marketing « aimerait » réserver les espaces média la semaine suivante, la conformité n'était pas là, un directeur d'agence a demandé une option de découvert. Rédigez le squelette du CR : une décision possible, une action, un point ouvert, un item de parking. Que ne décidez-vous pas ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Décision possible uniquement si le sponsor ou le titulaire concerné a tranché : par exemple D1 « ne pas réserver les espaces média avant avis conformité écrit et date IT confirmée » — sinon ce n'est pas une décision, c'est un point ouvert. Action A1 : IT confirme par écrit date de recette métier du parcours lot 1, responsable nommé, échéance sous 48 h. Point ouvert : absence de la conformité, aucun avis sur les messages. Parking : option de découvert, hors périmètre de l'offre jeunes actifs telle que cadrée. Vous ne décidez pas d'un argumentaire, d'un avis réglementaire, ni d'une date de campagne. Vous documentez l'absence et vous programmez le jalon avec le titulaire."
            }
          ],
          "position": 1
        },
        {
          "title": "Cartographier et traiter les risques",
          "description": "Tenir une matrice probabilité × impact, nommer un propriétaire, choisir une réponse, et escalader sans valider seul la conformité.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez distinguer aléa, problème et risque, remplir une matrice probabilité × impact, choisir une réponse (éviter, réduire, transférer, accepter) et alerter au bon niveau. Vous savez pourquoi le chef de projet ne clôt pas seul un risque de conformité."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un risque est un événement incertain qui, s'il survient, écarte le projet de ses objectifs de délai, de coût, de périmètre, de qualité ou de conformité. Ce n'est pas un problème déjà réalisé : le problème se gère, le risque se surveille et se traite avant. Ce n'est pas non plus un aléa vague (« le marché est difficile ») : un risque s'écrit avec une cause, un événement, un impact, un propriétaire, et une date de revue.\n\nLa matrice probabilité × impact sert à prioriser, pas à prédire l'avenir. Une échelle simple (1 à 4) suffit à un chef de projet marketing : l'enjeu est de comparer les risques entre eux et de savoir lesquels montent au comité. Un score élevé n'autorise personne à « valider le risque » à la place du titulaire métier. En banque et en assurance, un risque de non-conformité, de devoir de conseil, de publicité trompeuse ou d'entrée en relation mal cadrée n'est pas un risque que le chef de projet accepte dans son coin. Il le cartographie, il alerte, il demande l'avis. L'appétit au risque appartient à l'entreprise, pas au planning.\n\nQuatre réponses classiques : éviter (changer de périmètre), réduire (plan d'actions), transférer (assurance, partenaire, clause), accepter (en connaissance de cause, par le bon décideur). « On verra » n'est pas une réponse. Les scores et exemples de cette leçon sont pédagogiques et fictifs : ils n'engagent aucune institution réelle."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tenez un registre court, revu à chaque point d'avancement.\n1. Formulez : si [cause], alors [événement], ce qui [impact sur date / coût / offre / client / conformité].\n2. Notez la probabilité et l'impact (1 à 4), calculez le score, indiquez le propriétaire — une personne, pas une direction abstraite.\n3. Choisissez une réponse et une action datée. Un risque sans action est un affichage.\n4. Fixez un seuil d'escalade (exemple pédagogique : score ≥ 9 au comité, ≥ 12 au sponsor sous 48 h).\n5. Séparez clairement les risques projet (délai IT, partenaire, budget) des risques de conformité et juridiques : même matrice, décideurs différents.\n6. Quand le risque se réalise, il sort de la matrice et entre dans le suivi des problèmes. Vous ne continuez pas à le « surveiller » comme s'il était encore hypothétique."
            },
            {
              "block_type": "callout",
              "content": "Le chef de projet ne valide pas seul la conformité, un avis ACPR interne, un argumentaire réglementé ni un écart au devoir de conseil. Il peut proposer un scénario. Le titulaire signe. Sans avis écrit, vous n'écrivez pas « risque accepté » dans le CR."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictif) identifie le risque suivant : si l'IT livre le parcours de souscription avec trois semaines de retard, alors la campagne d'acquisition partira vers un parcours ancien, ce qui fera monter le CAC et les réclamations. Probabilité 3, impact 4, score 12. Propriétaire : responsable IT du lot, avec le CP pour l'arbitrage de périmètre. Réponse : réduire, en scindant un lot 1 web. Ce n'est pas au CP d'accepter, en parallèle, un risque de mentions publicitaires incomplètes : ce second risque va à la conformité, même si son score est plus bas. Mélanger les deux dans une seule « acceptation projet » est une faute de rôle."
            },
            {
              "block_type": "code",
              "content": "MATRICE DES RISQUES — Banque Horizon, offre jeunes actifs 25-35 ans\nCas fictif, scores pédagogiques. Échelle P et I : 1 (faible) à 4 (très élevé).\nScore = Probabilité × Impact.\nSeuil d'escalade pédagogique : score ≥ 9 → comité ; ≥ 12 → sponsor sous 48 h.\nLe chef de projet tient la matrice. Il n'approuve pas seul un risque de\nconformité, juridique ou d'appétit au risque.\n\nID  Risque (formulation courte)                 P  I  Sc  Propriétaire     Réponse\nR1  Retard IT du parcours de souscription       3  4  12  IT + CP          Réduire : lot 1 web, lot 2 app\nR2  Avis conformité défavorable sur messages    3  4  12  Conformité       Réduire : revue dès le brief créa\nR3  Refus partiel du réseau d'agences           2  4   8  Dir. réseau      Transférer : sponsors régionaux\nR4  Dépassement du budget d'acquisition         3  3   9  Marketing        Réduire : plafonner le CAC\nR5  Partenaire fintech / API en retard          2  3   6  Partenariats     Accepter avec plan B sans partenaire\nR6  Mentions / preuve d'information incomplètes 2  4   8  Juridique        Réduire : checklist dès maquettes\nR7  Fuite du positionnement avant lancement     2  2   4  Communication    Réduire : embargo interne\nR8  Sponsor accélère la date sans moyens        3  3   9  Sponsor + CP     Escalader : arbitrage scope vs date\nR9  Charge SAV sous-dimensionnée à J+30         2  3   6  Ops / réseau     Réduire : file d'attente + script\nR10 Distributeur (corner enseigne) gèle trop tôt 2  3  6  Partenariats     Éviter : date de gel dans le contrat\n\nRevue : chaque point d'avancement. R2 et R6 : pas de « accepté par le CP ».\nR5 : accepter n'est légitime que si le plan B est réel et connu du sponsor."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Tenir une liste d'inquiétudes sans propriétaire ni score. Mettre 20 risques au même niveau, donc n'en traiter aucun. Accepter un risque de conformité « pour tenir la date ». Confondre le risque (incertain) et le problème (déjà là). Oublier les risques de distribution : réseau qui ne s'approprie pas, courtier qui ne référence pas, enseigne qui décale. Croire que la matrice remplace le jugement : un score 6 de non-conformité n'est pas « moins urgent » qu'un score 9 de budget média."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Assurance : le devoir de conseil et l'information précontractuelle créent des risques spécifiques. Un parcours « en trois clics » peut être un risque de conformité élevé même si le marketing l'adore. Distribution : le refus d'un réseau n'est pas un risque IT, c'est un risque d'adoption ; on le traite par sponsor régional, formation et outil, pas par un mail de lancement. Projet multi-entités d'un groupe : chaque entité peut avoir son appétit au risque ; le CP ne fusionne pas les avis. Risque déjà réalisé (l'IT a officiellement décalé) : sortez-le de la matrice, ouvrez un arbitrage de scénarios."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Trois lignes vous sont proposées. Dites pour chacune si c'est un risque, un problème, ou un hors-sujet, puis proposez propriétaire et réponse.\nA. « La conformité n'a pas encore rendu son avis sur l'argument de « compte opérationnel en 8 minutes ». »\nB. « L'IT a confirmé ce matin un retard de trois semaines. »\nC. « Les néobanques sont agressives. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "A. Risque (l'avis n'est pas encore là) : événement = avis défavorable ou demandant une reprise majeure ; impact = reprise créa, délai campagne, voire no-go. Propriétaire : conformité, avec le CP pour le jalon. Réponse : réduire, en obtenant une revue intermédiaire maintenant, pas « on attend la fin ». Le CP n'accepte pas ce risque à la place de la conformité.\nB. Problème, plus un risque : l'événement est réalisé. On ouvre des scénarios (lot 1, report, campagne différée) et on alerte le sponsor. La matrice peut garder un risque résiduel (nouveau dérapage) mais le retard actuel se gère comme un écart.\nC. Hors-sujet en l'état : trop vague. On le reformule ou on l'abandonne. Exemple utile : « Si le concurrent fictif NeoPay lance une offre 25-35 à 0 € de tenue de compte avant nous, alors notre acquisition digitale voit son CAC augmenter de X, ce qui pèse sur le business case. » Alors seulement : propriétaire marketing, réponse à chiffrer."
            }
          ],
          "position": 2
        },
        {
          "title": "Dépendances et arbitrages",
          "description": "Traiter les dépendances typiques (IT, conformité, partenaire, budget, sponsor, feature, réseau) par des scénarios, pas par l'optimisme.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez nommer une dépendance, mesurer son impact sur la date, le périmètre et le coût, construire deux ou trois scénarios comparables, et rédiger une alerte sponsor qui demande une décision, pas une compassion."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une dépendance est un livrable ou une décision dont votre projet a besoin et que vous ne maîtrisez pas seul : un lot IT, un avis de conformité, un partenaire, un gel budgétaire, un accord du réseau. Tant que la dépendance n'est pas datée et appropriée, votre planning est un souhait. Le chef de projet ne « motive » pas l'IT pour qu'elle aille plus vite : il rend visible l'écart, les options, et le décideur.\n\nLes arbitrages reviennent presque toujours à trois leviers : la date, le périmètre, les moyens. On ne tient pas les trois quand une dépendance majeure glisse. Accélérer sans retirer de contenu ni ajouter de moyens, c'est transférer le risque sur la qualité, le réseau ou la conformité. Ajouter une fonctionnalité « petite » en fin de course, c'est souvent recréer une dépendance IT et une revue de conformité.\n\nLes situations types se répètent. Retard IT. Demande de conformité qui change le parcours. Partenaire en défaut. Dépassement de budget. Sponsor qui accélère. Feature hors lot demandée tard. Réseau qui refuse de vendre. Chacune se traite par scénarios écrits, pas par une réunion d'humeur. Le CP recommande. Le sponsor, ou le titulaire du veto, décide. En banque comme en assurance, un scénario qui « saute » la conformité n'est pas un scénario : c'est un risque que vous n'avez pas le mandat d'accepter."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès qu'une dépendance glisse ou qu'une demande nouvelle apparaît :\n1. Figez le fait (qui a dit quoi, quelle date, quel écart) par écrit.\n2. Qualifiez l'impact : délai, périmètre, coût, qualité perçue, conformité, adoption réseau.\n3. Proposez deux ou trois scénarios comparables (tenir la date / tenir le contenu / compromis), chacun avec effets et conditions.\n4. Écartez explicitement le scénario illégitime (lancer sans avis, promettre au réseau un produit non prêt).\n5. Recommandez un scénario, avec la date à laquelle la décision doit tomber, faute de quoi le scénario par défaut s'applique.\n6. Alertez le sponsor sur le canal prévu par la gouvernance, en une page : fait, impact, options, recommandation, décision demandée."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un assureur fictif, Clairière Assurances, dépend d'un partenaire comparateur pour 40 % des souscriptions auto. Le partenaire annonce un gel de son catalogue pendant six semaines. Trois scénarios : A — reporter le lancement produit ; B — lancer sur le réseau d'agences seulement, sans le comparateur ; C — lancer aussi en ligne en propre, avec un budget d'acquisition de substitution. Le CP ne « pousse » pas le partenaire. Il chiffre B et C, alerte le sponsor, et prévient le réseau pour ne pas promettre le canal comparateur. La dépendance est traitée. L'optimisme (« ils vont se dégeler ») ne l'est pas."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Cacher un retard IT jusqu'à la semaine du lancement. Présenter un seul scénario (« il faut reporter ») sans alternative. Ajouter la feature du sponsor sans recalculer conformité et IT. Négocier un avis de conformité « en off ». Promettre au réseau une date que le comité n'a pas tranchée. Traiter le refus du réseau comme de la résistance au changement sans écouter l'objection métier (outil, commission, temps de souscription). Demander au sponsor d'accélérer sans dire ce que l'on retire."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Sponsor qui accélère : vous reformulez « date avancée = tel périmètre retiré ou tels moyens ajoutés ». Feature tardive : parking, sauf si le sponsor retire autre chose et que la conformité a le temps. Budget dépassé : repli sur les leviers d'acquisition les plus mesurables, pas une coupe aveugle de la formation réseau. Refus du réseau : diagnostic (outil, offre, incentive, calendrier commercial) avant l'injonction. Conformité : si l'avis exige une reprise majeure, le scénario « on lance le visuel actuel » n'existe pas. Multi-partenaires de distribution : une défaillance n'est un plan B que si le plan B a été préparé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon vise le lancement de l'offre jeunes actifs dans 6 semaines : campagne d'acquisition, formation des agences, parcours de souscription simplifié. L'IT confirme un retard de +3 semaines sur le parcours. La conformité demande une modification majeure : retirer l'argument « compte opérationnel en 8 minutes » et allonger le parcours d'entrée en relation (justificatifs, mentions, parcours trop compressé). On vous demande les risques, les impacts, les scénarios, une recommandation, et une alerte sponsor. Traitez le cas par écrit."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Faits. Date visée : J+6 semaines. Écart IT : +3 semaines sur le parcours cible. Conformité : reprise majeure du message et du parcours — ce n'est pas une retouche de copy. Ces deux faits sont liés : même si l'IT tenait la date, le parcours actuel n'est pas lançable tel quel.\n\nRisques. R-IT : lancer la campagne vers l'ancien parcours (CAC, réclamations, promesse non tenue). R-conformité : lancer un argumentaire non conforme (risque que le CP n'a pas le mandat d'accepter). R-réseau : former les agences sur un parcours qui va encore changer. R-sponsor : tenir une date publique devenue intenable. R-budget : médias réservés perdus ou mal ciblés.\n\nImpacts. Date : +3 semaines au mieux sur le parcours cible, davantage si la reprise conformité n'est pas spécifiée tout de suite. Périmètre : l'argument « 8 minutes » sort ; le lot 1 ne peut plus être « tout digital ultra-court ». Coût : créas, média, formation à reprendre. Qualité : un lancement à date avec l'ancien parcours casse la promesse jeunes actifs.\n\nScénarios comparables.\nS1 — Tenir la date des 6 semaines, campagne + réseau, ancien parcours, argumentaire non repris. Écarté : ignore l'avis de conformité et la dépendance IT. Ce n'est pas une option professionnelle.\nS2 — Reporter l'ensemble (campagne, réseau, promesse) de 3 semaines, le temps du parcours IT et de la reprise conformité. Cohérent, coût média et fenêtre concurrentielle à chiffrer.\nS3 — Soft launch à 6 semaines sans campagne de masse : agences pilotes, messages conformes, ancien parcours assumé, sans l'argument des 8 minutes ; campagne nationale calée sur la recette du nouveau parcours.\nS4 — Tenir une campagne digitale à 6 semaines sur un lot 1 réduit déjà recetté (si un sous-parcours conforme existe), et décaler le reste. Seulement si l'IT et la conformité confirment par écrit qu'un lot 1 existe. Sinon S4 n'est pas réel.\n\nRecommandation pédagogique. S3 par défaut, ou S2 si le sponsor a déjà annoncé publiquement une promesse que le soft launch contredirait. S4 si et seulement si un lot 1 conforme est démontré. Recommandation à confirmer avec IT (date de recette), conformité (cahier des reprises sous 5 jours) et réseau (capacité à former deux fois).\n\nAlerte sponsor (structure). Objet : décision sous 5 jours — date vs contenu, offre jeunes actifs. Fait : IT +3 semaines ; conformité exige une reprise majeure du parcours et interdit l'argument 8 minutes. Impact : lancement J+6 tel que conçu n'est plus tenable sans casser la promesse ou la conformité. Options : S2 report global ; S3 soft launch puis campagne ; S4 lot 1 si preuve écrite. Recommandation : S3, campagne nationale calée sur recette. Décision demandée : choisir S2 ou S3 avant vendredi, geler les réservations média non conformes, mandater la conformité pour le cahier de reprise. Vous ne demandez pas au sponsor d'« accepter le risque conformité »."
            }
          ],
          "position": 3
        },
        {
          "title": "Quiz — Parties prenantes et risques",
          "description": "Cinq questions de raisonnement sur la coordination, la communication, les risques et les arbitrages.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Parties prenantes et risques",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Sur l'offre jeunes actifs, qui valide l'argumentaire réglementé (mentions, promesse, preuve) ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le chef de projet, puisqu'il est responsable de la mise en marché",
                  "B. Le titulaire conformité / juridique selon le dispositif interne, le chef de projet organisant le jalon",
                  "C. Le sponsor, qui « assume le risque » en réunion de projet",
                  "D. L'agence de publicité, qui connaît les codes du public 25-35 ans"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le chef de projet coordonne et alerte. Il n'est pas le valideur réglementaire. Le sponsor n'efface pas un avis de conformité par une phrase en comité. L'agence exécute un brief, elle ne signe pas l'avis interne."
              },
              {
                "question": "Dans un compte rendu de projet, quelle formulation est professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. « L'équipe IT va regarder le sujet rapidement. »",
                  "B. « A3 — Karim Benali (IT) confirme par écrit la date de recette métier du lot 1, échéance 18/03, dépendance : maquettes marketing livrées le 14/03. »",
                  "C. « Débat riche et constructif sur le parcours, suite au prochain point. »",
                  "D. « Décision : on lance, la conformité rattrapera les mentions après la campagne. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Une action a un responsable nommé, une date et une dépendance. « L'équipe » n'engage personne. Un roman de débat n'est pas un CR. Reporter la conformité après la campagne n'est pas une décision que le CP peut acter."
              },
              {
                "question": "Un risque de non-conformité a un score 8, un risque de dépassement média un score 9. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous traitez uniquement le 9, la matrice a parlé",
                  "B. Vous acceptez le 8 vous-même pour tenir la date, et vous montez le 9 au comité",
                  "C. Vous conservez les deux, vous escaladez le média selon le seuil, et vous soumettez le risque de conformité au titulaire, quel que soit le score",
                  "D. Vous fusionnez les deux lignes pour simplifier le registre"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "La matrice priorise, elle ne change pas les rôles. Un risque de conformité n'est pas « moins urgent » parce que son score est inférieur. Le CP ne l'accepte pas seul. Fusionner les lignes brouille le propriétaire."
              },
              {
                "question": "L'IT annonce +3 semaines et la conformité veut une reprise majeure du parcours, 6 semaines avant la date visée. Quelle option n'est pas un scénario recevable ?",
                "question_type": "single_choice",
                "options": [
                  "A. Reporter campagne et promesse le temps du parcours et de la reprise",
                  "B. Soft launch réseau sans campagne de masse, messages conformes, campagne nationale plus tard",
                  "C. Lancer à date avec l'argument actuel, « on corrigera si la conformité insiste »",
                  "D. Lot 1 réduit, seulement s'il existe une recette et un avis écrits"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Un scénario qui ignore un avis de conformité n'est pas une option, c'est un risque hors mandat du chef de projet. Les autres scénarios arbitrent date, périmètre et moyens, ce qui est le cœur du métier."
              },
              {
                "question": "Un directeur de réseau refuse de former ses agences tant que le temps de souscription dépasse 25 minutes. Quelle lecture est la plus juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. C'est de la résistance au changement : il faut un mail du sponsor",
                  "B. C'est une dépendance d'adoption : vous diagnostiquez l'objection (outil, offre, temps, incentive), vous en faites un risque ou un arbitrage, vous ne promettez pas la date au réseau tant que ce n'est pas tranché",
                  "C. C'est un veto de conformité : le projet s'arrête",
                  "D. C'est hors projet marketing : le réseau se débrouillera à J0"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le refus du réseau est une dépendance classique de mise en marché. On la traite par le diagnostic et l'arbitrage, pas par l'injonction ni par le déni. Ce n'est pas, en soi, un avis de conformité."
              }
            ]
          },
          "position": 4
        }
      ]
    },
    {
      "position": 7,
      "title": "Mise en marché",
      "description": "Préparer le go-to-market, vérifier la cohérence de l'offre, planifier le déploiement, accompagner le réseau et tenir un go / no-go de lancement.",
      "lessons": [
        {
          "title": "Concevoir le go-to-market",
          "description": "Relier cible, promesse, canaux, calendrier et run : le go-to-market n'est pas un jour J, c'est un dispositif.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez définir un go-to-market comme l'alignement entre l'offre, les canaux, le calendrier et le run opérationnel. Vous distinguez lancement interne, mise à disposition réseau et campagne publique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le go-to-market est le dispositif qui permet à une offre d'être réellement vendue et servie : qui on vise, quelle promesse on tient, par quels canaux on distribue, dans quel ordre on active, avec quelles preuves opérationnelles. Ce n'est pas une soirée de lancement, ni une date dans un planning marketing. Une campagne brillante vers un parcours cassé, ou un outil prêt que le réseau ignore, n'est pas un go-to-market. C'est une dépense.\n\nEn banque et en assurance, le GTM a une contrainte supplémentaire : la promesse publique doit coller au produit réel et au cadre d'information du client. « Compte ouvert en 8 minutes » n'est un GTM que si le parcours, les justificatifs, le back-office et le SAV le permettent. Chez Banque Horizon — banque fictive —, l'offre jeunes actifs 25-35 ans n'est pas « lancée » tant que le conseiller, le parcours web, le tarif et le message n'ont pas la même date de vérité.\n\nTrois moments se distinguent. La mise à disposition interne (l'offre existe dans les systèmes). L'activation du réseau (les gens savent vendre et servir). L'exposition publique (campagne, relations presse, partenaires). Les inverser, c'est exposer une promesse que l'entreprise ne tient pas. Le chef de projet relie ces trois moments. Il ne remplace pas le directeur marketing sur le mix, ni la conformité sur les messages."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédigez une note GTM d'une à deux pages, pas un roman.\n1. Cible et moment de vie (ce que le cadrage a déjà figé).\n2. Promesse tenable, en une phrase, alignée sur le lot 1 réel.\n3. Canaux : web, agence, courtier, partenaire enseigne, centre de contacts — lesquels au lot 1, lesquels plus tard.\n4. Séquence : pilote, montée en charge, campagne. Dates liées à la recette, pas à un souhait.\n5. Preuves de run : ouverture de dossier, incident, réclamation, reporting.\n6. Conditions de go public : ce qui doit être vrai avant le premier euro média.\nFaites relire marketing, réseau, ops, IT et conformité. Les désaccords maintenant coûtent moins cher qu'un lancement incohérent."
            },
            {
              "block_type": "callout",
              "content": "Annoncer une date au réseau ou à la presse avant le go / no-go revient à décider sans le dire. Le chef de projet protège la séquence : interne, puis réseau, puis public — sauf stratégie de teaser explicitement arbitrée, et encore conforme."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon prévoit une campagne nationale le 2 juin. Le parcours lot 1 n'est recetté que dans 12 agences pilotes. Le GTM sérieux est : 2 juin = ouverture pilote et formation vague 1 ; campagne régionale limitée ; nationale quand le taux d'incidents du pilote est sous le seuil et que 80 % des conseillers vague 1 sont formés. Inverser — TV puis formation — produit des rendez-vous en agence sur un script que personne n'a. En distribution, un assureur qui achète une tête de gondole avant que le vendeur sache ouvrir le contrat fait la même erreur, avec un calendrier enseigne encore moins souple."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Confondre GTM et plan média. Fixer le jour J sur un comité de mars sans recette. Activer tous les canaux le même matin « pour l'effet waouh ». Laisser le partenaire de distribution communiquer avant le réseau interne. Oublier le run (SAV, réclamations, horaires). Faire du teaser public sur une fonctionnalité encore dans le lot 2."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Offre réglementée (crédit, épargne, assurance) : le GTM inclut les documents d'information et le devoir de conseil, pas seulement le visuel. B2B : le GTM peut être une force commerciale et un onboarding, sans campagne grand public. Partenariat enseigne : le GTM du distributeur (catalogue, formation vendeurs, saisonnalité) s'impose souvent au vôtre. Soft launch vs big bang : le big bang n'est rationnel que si le réseau, l'outil et le run tiennent la charge le même jour — rare pour un premier outil de souscription."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le sponsor de Banque Horizon veut « un vrai lancement » : campagne, 80 agences, partenaires, le même lundi. Le parcours vient d'être recetté en préprod. Listez ce que vous séquencez, et ce que vous refusez de mettre le même lundi."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous séquencez : recette métier en conditions réelles, formation d'une vague pilote, ouverture de l'offre dans les systèmes du pilote, mesure d'incidents, puis extension réseau, puis campagne de masse. Le même lundi, vous refusez d'empiler campagne nationale, 80 agences non formées et partenaires non briefés. Vous proposez un lundi de mise à disposition pilote, pas un lundi de promesse publique. Si le sponsor exige le big bang, vous exigez en retour les preuves (recette, formation, run) et un no-go possible jusqu'à J-3. Sans preuves, ce n'est plus un GTM, c'est un pari."
            }
          ],
          "position": 0
        },
        {
          "title": "Vérifier la cohérence de l'offre",
          "description": "Aligner besoin, valeur, fonctionnalités, prix, parcours, distribution, communication, promesse, opérations et cadre réglementaire.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez auditer une offre sur dix dimensions et détecter une rupture de cohérence avant le lancement, en banque comme en assurance."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une offre n'est pas une liste de fonctionnalités. C'est un système. Si une pièce dit une chose et la suivante une autre, le client, le conseiller et le contrôleur voient trois produits. Le chef de projet n'invente pas l'offre ; il vérifie qu'elle tient debout avant qu'on la promette. Dix dimensions suffisent à un audit de cohérence : le besoin (qui, quel usage), la valeur (pourquoi celle-ci plutôt qu'une autre), les fonctionnalités du lot 1, le prix et les frais, le parcours de souscription et d'usage, la distribution, la communication, la promesse, les opérations (back-office, SAV, sinistre ou incident), le cadre réglementaire.\n\nLa rupture la plus fréquente, en banque et en assurance, se joue entre la promesse et le parcours. « Souscription en 8 minutes, 100 % digital » ne survit pas à trois justificatifs, un appel de recueil du devoir de conseil, et un délai de rétractation mal expliqué. Ce n'est pas « le réglementaire qui casse le marketing » : c'est l'offre qui a été racontée trop tôt. Autre rupture classique : un prix d'appel agressif, une distribution en agence qui n'a aucun intérêt à le vendre, une pub nationale qui arrive avant que l'outil ne soit dans le réseau.\n\nL'audit de cohérence se fait sur le lot 1 réel, pas sur la roadmap. Ce que vous ne livrez pas encore ne doit pas figurer dans la promesse. Les exemples chiffrés et nominatifs de cette leçon sont fictifs."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tenez une grille à dix lignes, une séance, des preuves, pas des intentions.\n1. Besoin : phrase cible, moment de vie.\n2. Valeur : bénéfice client vs alternative (néobanque, concurrent, ne rien faire).\n3. Fonctionnalités : lot 1 listé, hors-lot explicite.\n4. Prix : tarif, frais, conditions, qui a validé.\n5. Parcours : happy path chronométré, deux incidents testés.\n6. Distribution : qui vend, avec quel incentive, quel outil.\n7. Communication : messages, canaux, embargo.\n8. Promesse : une phrase, prouvable par le parcours.\n9. Ops : qui traite, quels délais, quelle file d'attente.\n10. Réglementation : avis écrit, documents, mentions — pas un « on a vu la conformité ».\nUne case vide ou contradictoire = écart. Vous ne « lissez » pas. Vous arbitrez ou vous sortez la phrase de la campagne."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Clairière Assurances (assureur fictif) lance une assurance habitation « souscrite en agence en 10 minutes, dès 9 € / mois ». L'audit : le besoin (jeunes locataires) est clair ; la valeur (prix, simplicité) aussi. Les fonctionnalités lot 1 omettent le vol hors domicile, alors que la pub l'illustre. Le prix 9 € n'inclut pas de garanties que le vendeur ajoute « pour bien conseiller ». Le parcours réel dure 22 minutes avec le recueil d'informations. La distribution (200 agences) n'a pas l'outil le jour J. La communication promet 10 minutes. Les ops sinistres n'ont pas de script pour ce produit. L'avis conformité demande de retirer « 10 minutes » et l'illustration vol. L'offre n'est pas cohérente. On retravaille promesse, visuel et lot 1, ou on ne lance pas la campagne. Chez Banque Horizon, le même exercice sur « compte opérationnel en 8 minutes » produit souvent le même écart entre slogan et entrée en relation."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Auditer la brochure et pas le parcours. Laisser le lot 2 « sous-entendre » dans la pub. Croire que le prix bas aligne tout le monde : le réseau peut refuser un produit sans marge. Oublier les ops (un dossier ouvert que personne ne sait clôturer). Traiter le réglementaire comme une relecture de typos. Remplir la grille tout seul, sans le réseau ni la conformité."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Bancassurance : deux cohérences à tenir, produit bancaire et produit d'assurance, parfois deux avis. Courtage : la cohérence passe aussi par le comparateur et la rémunération du courtier ; un produit « simple » côté siège peut être illisible dans l'outil du partenaire. Grande distribution : l'offre doit tenir dans le temps d'un vendeur non spécialiste — sinon la promesse en catalogue est déjà rompue. Offre 100 % digitale : la cohérence ops, c'est le chat, le centre de contacts et la preuve d'information, pas l'agence."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sur l'offre jeunes actifs Banque Horizon, la pub dit « tout est fait en 8 minutes, sans papier ». Le parcours lot 1 demande une pièce d'identité, un justificatif de domicile, et un récapitulatif à valider. Le tarif d'appel est à 0 € six mois, puis 5 €. Les agences n'ont pas encore l'écran. Repérez au moins quatre ruptures parmi les dix dimensions et proposez une reprise de la promesse."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ruptures. Promesse vs parcours : 8 minutes et « sans papier » ne collent pas aux justificatifs. Communication vs distribution : pub nationale alors que l'écran agence n'est pas là — le canal web et le canal agence disent deux choses. Prix vs communication : 0 € six mois doit être aussi clair que le 5 € ensuite, sinon la valeur perçue est trompeuse. Ops : qui traite un dossier bloqué sur justificatif ? Réglementation : mentions et preuve d'information, avis à obtenir avant la pub. Reprise de promesse possible : « Ouvrez votre compte en ligne, avec les justificatifs habituels ; vos conseillers vous accompagnent en agence dès que l'outil y est déployé. » On retire 8 minutes et sans papier tant que le parcours ne le prouve pas. Le CP alerte ; il ne « passe » pas la pub pour tenir le calendrier."
            }
          ],
          "position": 1
        },
        {
          "title": "Planifier le déploiement",
          "description": "Construire un plan de mise en marché par vagues, avec jalons, rollback et checklist de lancement.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez découper un déploiement en vagues, relier chaque vague à des critères d'entrée et de sortie, et utiliser une checklist de lancement plutôt qu'une liste d'envie."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Déployer, c'est faire passer une offre ou un outil du « ça marche en recette » au « ça marche chez les gens qui vendent et qui servent ». Un plan de déploiement n'est pas le rétroplanning marketing recopié. C'est une séquence de vagues, chacune avec un périmètre géographique ou de population, des prérequis, une charge de formation, une capacité de support, et un critère pour passer à la vague suivante. Sans vagues, un incident unique devient un incident national.\n\nEn réseau d'agences ou de magasins, la géographie n'est pas un détail : fuseaux de formation, managers régionaux, charge du centre de contacts. En digital pur, les vagues peuvent être des segments de clients ou un pourcentage de trafic. Dans les deux cas, on prévoit la bascule (quand l'ancien dispositif s'arrête), le rollback (comment on revient en arrière), et le run des quatorze premiers jours (qui surveille quoi, à quelle heure, qui décide d'arrêter).\n\nLe chef de projet tient le plan et la checklist. Il ne passe pas au vert une case de conformité à la place du titulaire. Une checklist cochetée sans preuve (PV de recette, avis écrit, taux de formation) est un décor. Les exemples de vagues et de seuils de cette leçon sont pédagogiques et fictifs."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Construisez le plan à l'envers de la date de campagne, pas depuis l'enthousiasme du sponsor.\n1. Date de go public visée, puis conditions pour y arriver.\n2. Vague 0 : recette métier, run, support, rollback testé une fois.\n3. Vague 1 : pilote (agences, région, ou % de trafic), durée minimale, indicateurs d'incidents et d'adoption.\n4. Vagues suivantes : extension, avec critère d'entrée = sortie de la vague précédente.\n5. Formation et communication calées sur chaque vague, pas un e-mail unique à J-1.\n6. Checklist figée une dizaine de jours avant le go, revue chaque jour à l'approche. Une case rouge = décision go conditionnel ou no-go, pas un « on verra le matin »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon déploie le nouveau parcours jeunes actifs : vague 0 en préprod et 2 agences laboratoire ; vague 1 = 12 agences d'une région pendant deux semaines ; vague 2 = 80 agences si le taux d'incidents bloquants du pilote reste sous un seuil fixé à l'avance (exemple fictif : < 5 % des ouvertures) et si 90 % des conseillers pilotes sont formés ; campagne nationale après la vague 2, pas avant. En parallèle, un assureur qui déploie un outil de souscription en 200 agences ne les ouvre pas le même lundi : il pilote, il étend par régions, il garde une capacité de support. Le distributeur enseigne, lui, peut imposer une date unique de catalogue : alors le pilote doit avoir eu lieu avant le gel enseigne, pas après."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST MISE EN MARCHÉ — à figer 10 jours avant le go\nProjet : ..........................  Date de go visée : ../../....\nPilote : ..........................  Décideur go / no-go : ..........\n\nOFFRE ET COHÉRENCE\n[ ] Besoin cible rédigé et partagé\n[ ] Promesse alignée sur le lot 1 réel (rien du lot 2 dans la pub)\n[ ] Fonctionnalités lot 1 listées ; hors-lot explicite\n[ ] Prix / frais / conditions validés finance + juridique\n[ ] Parcours testé bout en bout (happy path + 2 incidents)\n[ ] Canal de distribution prêt (agence, web, courtier, enseigne)\n[ ] Messages et supports : avis conformité / juridique écrit\n[ ] Ops : back-office, SAV / sinistres, réclamations, SLA\n[ ] Cadre réglementaire : avis écrit, pas un « on verra »\n\nRÉSEAU ET CONDUITE DU CHANGEMENT\n[ ] Sponsors régionaux nommés\n[ ] Formation des conseillers / vendeurs effectuée ou datée par vague\n[ ] Argumentaire + objections livrés\n[ ] Outil accessible (droits, identifiants, voie d'incident)\n[ ] Support niveau 2 identifié pour J0–J14\n\nTECHNIQUE ET RUN\n[ ] Recette métier signée\n[ ] Plan de bascule (heure, responsable, rollback)\n[ ] Rollback testé au moins une fois\n[ ] Supervision J0–J14 (qui, quels indicateurs, quelle astreinte)\n[ ] Reporting : définitions des KPI d'adoption figées\n\nGO / NO-GO\n[ ] Critères écrits avant la réunion de go\n[ ] Décideur unique nommé\n[ ] Décision consignée (go / go conditionnel / no-go) avec motifs\n[ ] Communication post-décision prête (réseau, partenaires, silence presse)\n\nUne case conformité, juridique ou sécurité n'est cochée que par le titulaire."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Un seul créneau « déploiement » dans le Gantt, sans vagues. Critères d'entrée inventés le matin du go. Checklist de 200 lignes que personne ne relit, ou checklist de 8 lignes toutes vertes par le CP. Oublier le rollback « parce que c'est trop tard pour revenir ». Former tout le réseau trois semaines trop tôt, donc tout le monde a oublié. Laisser le partenaire enseigne déployer selon son catalogue sans vague interne préalable."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Déploiement digital par feature flag : les vagues sont des pourcentages de trafic, le rollback est technique, mais le réseau doit quand même savoir ce que le client voit. Déploiement imposé par un distributeur (date catalogue) : votre pilote se fait avant le gel, ou vous no-go le canal enseigne. Fusion / changement d'outil en cours d'année : double run, charge SAV, communication « quel outil aujourd'hui ». Petit réseau (15 agences) : le pilote peut être de 3, pas de 12 ; le principe de vague reste."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous demande de « tout déployer le 15 du mois » sur 80 agences Banque Horizon plus le web. Recette métier prévue le 12. Proposez un plan en vagues réaliste et trois cases de checklist qui, si elles sont rouges le 12, empêchent le big bang du 15."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Plan. Vague 0 jusqu'au 12 : recette, rollback, support. Vague 1 du 15 au 28 : web éventuellement en % de trafic + 8 à 12 agences pilotes déjà formées, pas 80. Vague 2 après revue des incidents. Campagne de masse après vague 2. Le 15 n'est pas un big bang national.\nCases qui bloquent un big bang le 15 si rouges le 12 : avis conformité écrit des messages ; recette métier signée (pas « ça devrait passer ») ; formation d'au moins la vague 1 (droits outils + argumentaire). Une case réseau « 80 agences informées par e-mail » ne remplace pas la formation. Le CP recommande le décalage du big bang ; le décideur de go tranche."
            }
          ],
          "position": 2
        },
        {
          "title": "Conduire le changement dans le réseau",
          "description": "Faire adopter un outil ou une offre par ceux qui vendent : sponsors, formation, communication de proximité, relais managériaux.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez poser un plan d'adoption : qui relais, quel message, quelle formation, quel accompagnement après J0. Vous ne confondez plus e-mail de lancement et conduite du changement."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un déploiement technique peut être « vert » et le réseau ne pas s'en servir. La conduite du changement, dans un projet marketing et commercial, c'est le travail pour que des conseillers, des vendeurs ou des courtiers changent un geste : un écran, un script, une offre à proposer, un temps d'entretien. Ce n'est pas un slide sur les bienfaits du projet. Les gens changent si l'outil marche, si le manager local porte le sujet, si la formation arrive au bon moment, si l'incentive n'est pas contraire, et s'ils savent qui appeler quand ça bloque.\n\nLe chef de projet n'est pas DRH et n'est pas directeur de réseau. Il ne « transforme » pas 200 agences par charisme. Il met en place des relais : sponsor national, sponsors régionaux, managers d'agence, référents. Il cadence formation, communication de proximité, et présence sur le terrain ou en visio les premiers jours. Il mesure l'adoption, pas seulement l'envoi des convocations.\n\nRésistance n'est pas un diagnostic. Un réseau qui refuse a souvent une raison : temps de souscription, commission, peur de mal conseiller, double saisie, offre illisible. On écoute, on tranche, on n'injoncte pas. En assurance, le devoir de conseil rend la formation non optionnelle : un vendeur non formé n'est pas un détail d'adoption, c'est un risque. Le CP alerte ; il ne déclare pas le réseau « prêt » à la place du directeur de réseau."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Cartographiez les publics : siège, région, agence, partenaire, centre de contacts — messages différents.\n2. Nommez des relais avec un rôle (pas « ambassadeur » vague) : qui forme, qui contrôle le geste, qui remonte les incidents.\n3. Caler la formation sur la vague de déploiement, au plus près de J0, avec un geste réel dans l'outil, pas un PDF.\n4. Livrez un kit : argumentaire, objections, « ce qui change demain matin », voie d'escalade.\n5. Tenez un dispositif J0–J14 : hotline projet, points régionaux, présence des référents.\n6. Mesurez l'usage (première souscription, temps, erreurs), pas uniquement la présence en salle.\n7. Traitez les objections avec le directeur de réseau : incentive, temps, outil. Ce qui est un arbitrage d'offre n'est pas un « accompagnement »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Clairière Assurances déploie un nouvel outil de souscription. Un e-mail du siège, un webinaire de 45 minutes, et « vous êtes autonomes ». À J+10, 30 % des agences n'ont ouvert aucun contrat dans l'outil, les autres double-saisissent. Le plan qui marche : 15 agences pilotes avec un référent, formation de deux heures dans l'outil, coaching du manager à J+7, kit d'objections, hotline, puis extension régionale. Banque Horizon, pour l'offre jeunes actifs, fait la même chose avec les conseillers : sans relais régional, l'ancienne offre continue d'être vendue parce qu'elle est connue. En grande distribution, le vendeur polyvalent n'aura pas deux heures : le geste doit tenir en quinze minutes, sinon l'offre n'existe pas en rayon."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Un mail « c'est lancé, merci de votre engagement ». Former trop tôt. Former sans l'outil. Mesurer les convocations, pas les usages. Qualifier de résistants des gens dont l'écran plante. Oublier le centre de contacts, qui prend les clients perdus par l'agence. Promettre une prime d'incentive que la direction commerciale n'a pas validée. Déclarer le changement « terminé » à J0."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Courtiers indépendants : vous n'imposez pas une formation interne ; vous contractualisez l'accès à l'outil, un module court, et un intérêt économique. Réseau salarié : le manager d'agence est le vrai levier, pas le chef de projet. Télétravail / multi-sites : la formation digitale exige un contrôle du geste (mise en situation), sinon tout le monde a « cliqué présent ». Changement d'outil pendant une période commerciale chaude (rentrée, fin d'année assurance) : le no-go calendaire est parfois plus sage qu'un déploiement héroïque."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "80 agences Banque Horizon doivent vendre l'offre jeunes actifs dans un mois. Vous avez un webinaire d'une heure, un PDF, et le sponsor veut « de l'adhésion ». Proposez un dispositif minimum de conduite du changement pour une vague pilote, puis l'extension."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Pilote (8 à 12 agences) : relais régional nommé, formation de deux heures dans l'outil réel, kit argumentaire et objections, manager d'agence présent, hotline J0–J14, coaching J+7 sur dossiers réels. Mesure : au moins une souscription accompagnée par conseiller, temps moyen, incidents. Extension : on n'ouvre les 68 autres que si le pilote a ses relais et un taux d'usage minimum. Le webinaire et le PDF deviennent des supports, pas le dispositif. L'adhésion se voit à l'usage, pas à l'applaudimètre du sponsor. Si le temps de souscription reste inacceptable, c'est un arbitrage d'offre, pas un problème de « communication interne »."
            }
          ],
          "position": 3
        },
        {
          "title": "Tenir le go / no-go",
          "description": "Préparer des critères écrits, une décision unique, et un go conditionnel qui n'est pas un go déguisé.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez préparer une réunion de go / no-go : critères figés à l'avance, preuves, options (go, go conditionnel, no-go), et communication de la décision. Vous savez que le chef de projet recommande, il ne s'auto-accorde pas le lancement."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le go / no-go est la décision de mettre ou non l'offre en marché, ou de passer d'une vague à la suivante. Ce n'est pas un rituel d'enthousiasme. Les critères sont écrits avant la réunion, quand tout le monde est encore capable de dire non. Le jour J, sous pression média et sponsor, on ne « sent » plus : on compare des preuves à des seuils.\n\nTrois issues honnêtes existent. Go : les critères sont tenus. Go conditionnel : on lance un périmètre réduit, avec des conditions datées et un responsable pour chacune — pas une liste de vœux. No-go : on ne lance pas, on dit pourquoi, on dit quand on réexamine. Un go conditionnel à douze conditions dont trois de conformité ouvertes n'est pas un go conditionnel : c'est un no-go que l'on n'ose pas nommer.\n\nLe décideur est celui que la gouvernance a nommé, souvent le sponsor ou un comité. Le chef de projet prépare le dossier, recommande, documente. Il ne « passe en go » parce que la salle est réservée et les journalistes invités. En banque et en assurance, une case conformité, juridique ou sécurité rouge suffit à justifier un no-go, même si le marketing est prêt. Le CP n'arbitre pas cela contre le titulaire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dix jours avant : figez les critères (recette, avis écrits, formation de la vague, run, rollback, cohérence de la promesse). Trois jours avant : dossier d'une page, preuves en liens, cases rouges visibles. En réunion : lecture des cases, pas un tour de table d'humeur. Décision consignée. Dans l'heure : message au réseau et gel ou lancement des communications. Si no-go : date de réexamen et actions, pas un silence gêné. Si go conditionnel : trois conditions maximum, chacune avec titulaire et date, sinon c'est un no-go."
            },
            {
              "block_type": "callout",
              "content": "Inviter la presse ou le réseau à « la date de lancement » avant le go / no-go vide la décision de son sens. Le calendrier externe se réserve sous condition, ou se confirme après le go."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Réunion banque Horizon, J-3. Recette signée, 12 agences pilotes formées, rollback testé. L'avis conformité des films publicitaires n'est pas là ; les films TV sont réservés. Recommandation du CP : go du pilote et du web, no-go de la campagne de masse jusqu'à l'avis. Go conditionnel « on lance la TV, la conformité rattrapera » : refusé. Le sponsor peut exiger d'attendre les films ; il ne peut pas demander au CP de cocher la case conformité. Chez un assureur, le même schéma vaut pour un outil agence : go pilote 15 agences, no-go des 185 autres tant que le taux d'incidents du pilote n'est pas connu."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Inventer les critères dans la salle. Douze conditions « et on lance quand même ». Laisser le CP décider seul pour « ne pas embêter le sponsor ». Confondre recette technique et recette métier. Oublier d'informer le réseau d'un no-go, donc laisser des agences vendre. Traiter un avis conformité tardif comme un détail de copy. Considérer que l'argent média déjà engagé oblige le go."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Go d'une vague, pas du projet entier : on peut go le pilote et no-go la nationale. Partenaire distributeur : deux go, le vôtre et le sien ; le plus tardif gagne. Incident le matin du lancement : le rollback préparé sert maintenant ; le CR de crise n'est pas le CR de go. Sponsor absent : pas de go improvisé par le CP, sauf délégation écrite."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Clairière Assurances, assureur fictif, déploie un nouvel outil de souscription dans 200 agences. On vous demande, pour le comité de lancement : un plan de déploiement, la checklist, le plan de communication et de formation, trois KPI d'adoption, et une recommandation go / no-go. Traitez le cas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Plan de déploiement. Vague 0 : recette métier, droits, rollback, hotline, scripts devoir de conseil. Vague 1 : 15 agences pilotes, deux régions, deux semaines. Vague 2 : extension par régions (environ 50 puis 80) si les critères de sortie du pilote sont tenus. Vague 3 : les 200, seulement après revue. Pas de big bang lundi matin sur 200 sites. La campagne client, s'il y en a une, suit l'adoption, elle ne la précède pas.\n\nChecklist (cases qui doivent être vertes pour le go de chaque vague). Avis conformité / juridique sur parcours et documents ; recette métier signée ; rollback testé ; kits argumentaire et objections livrés ; formation de la vague effectuée dans l'outil ; support niveau 2 nommé J0–J14 ; reporting d'adoption prêt ; décideur nommé. Le CP ne coche pas les cases conformité.\n\nCommunication. J-15 relais régionaux : calendrier des vagues, ce qui change, ce qui ne change pas. J-7 managers d'agence : kit, horaires de hotline, consigne « ne pas promettre l'ancien geste ». J-1 vague concernée : rappel du geste du lendemain. J0 : message « c'est ouvert pour vous » uniquement aux agences de la vague, pas aux 200. Silence presse tant que le go de la vague nationale n'est pas là. Partenaires courtiers : canal séparé, plus tard, avec leur propre formation.\n\nFormation. Pilote : 2 h dans l'outil sur dossiers types (dont un cas de devoir de conseil), manager présent, coaching J+7. Extension : mêmes 2 h, sessions régionales, pas un replay facultatif. Seuil pédagogique fictif : pas d'ouverture de vague suivante sous 85 % de conseillers de la vague formés et ayant réalisé au moins un geste accompagné.\n\nTrois KPI d'adoption (définis avant J0, fictifs dans leurs cibles). 1) Taux d'agences de la vague ayant réalisé au moins une souscription dans l'outil sur 7 jours. 2) Temps médian de souscription vs temps cible annoncé au réseau. 3) Taux d'incidents bloquants ou de dossiers repris par le siège. On ne mesure pas le succès au nombre de mails lus ni à la présence au webinaire. Un KPI commercial (volume de contrats) vient après, quand le geste est possible.\n\nGo / no-go. Critères écrits à J-10. Recommandation type à J-3 : go vague 1 si recette, avis, formation pilote et hotline sont verts ; no-go des 185 agences restantes ; no-go communication client nationale. Go conditionnel acceptable : ouvrir 15 agences avec une condition unique datée (ex. correctif d'un bug non bloquant sous 5 jours, titulaire IT). Inacceptable : ouvrir 200 avec « la formation suivra » ou « la conformité rattrapera ». Décideur : sponsor / comité, pas le chef de projet seul. Décision consignée, réseau informé dans l'heure."
            }
          ],
          "position": 4
        },
        {
          "title": "Quiz — Mise en marché",
          "description": "Cinq questions de raisonnement sur le go-to-market, la cohérence d'offre, le déploiement et le go / no-go.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Mise en marché",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quel énoncé décrit le mieux un go-to-market professionnel ?",
                "question_type": "single_choice",
                "options": [
                  "A. La soirée de lancement et le plan média du jour J",
                  "B. L'alignement entre offre réelle, canaux, séquence interne / réseau / public, et capacité de run",
                  "C. L'autorisation de la conformité, qui remplace le reste",
                  "D. La date que le sponsor a annoncée au COMEX en mars"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le GTM est un dispositif, pas un événement. La conformité est une condition, pas le GTM. Une date de sponsor sans recette ni réseau n'est pas un plan."
              },
              {
                "question": "La pub promet une souscription « en 8 minutes, sans papier ». Le parcours demande deux justificatifs et dure 20 minutes. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous lancez : le marketing assume, le parcours « s'améliorera »",
                  "B. Vous signalez une rupture promesse / parcours / réglementation, vous retirez la phrase tant qu'elle n'est pas prouvable, vous n'arbitrez pas seul « on passe quand même »",
                  "C. Vous demandez à l'IT de chronométrer 8 minutes en enlevant les mentions",
                  "D. Vous laissez la pub et vous formez le réseau à s'excuser"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est une rupture de cohérence, souvent aussi un sujet d'information du client. Le CP alerte et propose une reprise de promesse. Enlever les mentions pour tenir un slogan n'est pas un scénario. Former le réseau à s'excuser, c'est industrialiser la rupture."
              },
              {
                "question": "Vous déployez un outil de souscription dans 200 agences. Quelle séquence est la plus professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Big bang lundi, formation en replay dans la semaine, campagne client dès samedi",
                  "B. Recette et rollback, pilote d'une quinzaine d'agences, critères de sortie, puis vagues régionales, campagne quand l'adoption tient",
                  "C. Campagne d'abord pour « créer l'usage », l'outil suivra",
                  "D. Ouverture des 200 dès que l'IT a livré en préprod"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les vagues et les critères d'entrée protègent le réseau et le client. La préprod n'est pas la prod. La campagne ne précède pas un geste que le réseau ne sait pas faire."
              },
              {
                "question": "Parmi ces indicateurs, lesquels mesurent vraiment l'adoption d'un outil en agence ?",
                "question_type": "single_choice",
                "options": [
                  "A. Taux d'ouverture de l'e-mail de lancement et présence au webinaire",
                  "B. Au moins une souscription réelle par site, temps de geste, taux d'incidents bloquants",
                  "C. Nombre de slides du kit et note de satisfaction à chaud de la formation",
                  "D. Volume de contrats du trimestre, sans regarder si l'outil a été utilisé"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'adoption se voit au geste dans l'outil, à sa fluidité et à ses incidents. L'e-mail et le webinaire mesurent l'audience. Le volume commercial peut venir d'un contournement (double saisie, ancien process)."
              },
              {
                "question": "À J-3, la recette métier est signée, la formation pilote est faite, l'avis conformité des films publicitaires manque. Quelle recommandation est tenable ?",
                "question_type": "single_choice",
                "options": [
                  "A. Go global, y compris TV, « la conformité rattrapera »",
                  "B. Go du pilote / du canal prêt ; no-go de la campagne de masse tant que l'avis écrit n'est pas là ; le CP ne coche pas la case conformité",
                  "C. No-go de tout, y compris d'un pilote pourtant prêt, par principe",
                  "D. Le chef de projet décide le go seul pour ne pas perdre les espaces média"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On peut go un périmètre prêt et no-go ce qui dépend d'un avis manquant. Un go qui « rattrape » la conformité n'est pas dans le mandat du CP. Un no-go total n'est pas obligatoire si le pilote est réellement prêt. Les espaces média déjà achetés n'obligent pas le go."
              }
            ]
          },
          "position": 5
        }
      ]
    },
    {
      "position": 8,
      "title": "Performance et entretiens",
      "description": "Mesurer les résultats d'un projet, construire un reporting utile à la décision, capitaliser par le REX, et préparer un entretien d'embauche de chef de projet marketing et développement.",
      "lessons": [
        {
          "title": "Mesurer la performance",
          "description": "Sélectionner des KPI pertinents : conversion, souscriptions, CA, adoption, satisfaction, CAC, rentabilité, budget et planning.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez choisir un nombre limité d'indicateurs liés aux objectifs du cadrage, les calculer sans double comptage, et distinguer un KPI de pilotage d'un indicateur de vanité. Vous reliez chaque chiffre à un propriétaire et à une décision."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Mesurer n'est pas empiler des graphiques. Un KPI est une grandeur suivie parce qu'elle dit si l'objectif du projet est atteint, et parce qu'elle permet d'agir. Un indicateur de vanité (visites, likes, « notoriété ressentie ») gonfle un slide sans changer une décision.\n\nTrois familles. Commerciaux : souscriptions, conversion du parcours, chiffre d'affaires attribué, revenu moyen. Usage : taux d'utilisation (parmi les équipés, qui se sert du service) et d'adoption (parmi la cible, qui a souscrit ou activé). Qualité et économie : satisfaction (enquête ou réclamations, pas un NPS inventé comme vérité de marché), CAC, rentabilité du flux, respect du budget et du planning.\n\nLe CAC = dépenses d'acquisition attribuables / clients acquis, même période, règle d'attribution écrite. La conversion = souscriptions / entrées dans le parcours, même périmètre. Le CA d'un lancement n'est pas le CA de toute la banque. La rentabilité reprend le business case : réalisé vs réalisé, pas un « ROI ressenti ».\n\nSélectionner, c'est restreindre. Cinq à huit KPI liés aux critères de réussite valent mieux que vingt courbes. Chaque KPI a une définition, une source, une fréquence, un propriétaire, une cible et un seuil d'alerte. Sans cela, le reporting devient une conversation."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Reprendre les critères de réussite du cadrage. 2) Pour chaque critère, nommer un KPI mesurable. 3) Écrire la formule, la source, le périmètre, la fréquence. 4) Nommer un propriétaire (marketing, digital, finance, réseau). 5) Fixer la cible et le seuil d'alerte. 6) Écarter tout indicateur sans décision associée. 7) Vérifier l'absence de double comptage (CA déjà compté dans un autre projet, souscriptions « brutes » vs nettes après rétractation). 8) Faire valider les définitions par finance avant le premier comité de suivi."
            },
            {
              "block_type": "callout",
              "content": "Les volumes, parts de marché et CAC de Banque Horizon et de ses concurrents dans ce cours sont fictifs, étiquetés comme tels. Vous n'inventez pas un benchmark national. Le chef de projet ne « valide » pas un indicateur réglementaire à la place de la conformité."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), offre 25-35 ans. Le cadrage visait : simplifier le parcours, baisser le CAC, remonter les souscriptions. KPI retenus : conversion parcours (cible 28 % vs 18 % actuel), souscriptions nettes 25-35, CAC, CA année 1 du flux, taux d'activation carte à 30 jours, réclamations pour 1 000 dossiers, écart budget, écart jalon. Écartés : likes de la campagne, « notoriété spontanée » sans enquête, trafic site non rattaché au parcours. Le propriétaire de la conversion est le digital ; celui du CAC est marketing + finance ; celui des réclamations est qualité / conformité opérationnelle."
            },
            {
              "block_type": "heading",
              "content": "Familles d'indicateurs — formules pédagogiques"
            },
            {
              "block_type": "code",
              "content": "KPI COMMERCIAUX\nTaux de conversion parcours = souscriptions finalisées / sessions démarrées\n  Horizon (fictif, 12 mois) : 8 400 / 46 667 ≈ 18,0 %\nSouscriptions nettes = souscriptions − rétractations / dossiers incomplets clos\nCA attribué année 1 = souscriptions nettes × revenu moyen année 1\n  8 400 × 95 € = 798 000 € (fictif)\n\nKPI D'USAGE\nTaux d'activation (30 j) = clients ayant fait au moins 1 paiement carte / souscripteurs\nTaux d'utilisation (90 j) = clients actifs 90 j / clients équipés\nAdoption cible = souscripteurs du segment / population visée (si la base est connue)\n\nKPI QUALITÉ ET ÉCONOMIE\nCAC = dépenses d'acquisition attribuables / clients acquis\n  Horizon (fictif) : 1 554 000 € / 8 400 ≈ 185 €\nSatisfaction : enquête post-souscription ou taux de réclamation — pas un NPS « marché »\nÉcart budget = réalisé − voté (et commentaire : périmètre, glissement, imprévu)\nÉcart planning = date réelle du jalon − date de référence du cadrage\n\nRÈGLE DE SÉLECTION\nSi vous ne savez pas quelle décision le chiffre change, ce n'est pas un KPI du projet."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Prendre le trafic pour de la conversion. Compter les souscriptions commencées comme des ventes. Oublier les rétractations. Attribuer tout le CA de la banque au projet. Publier un CAC sans dire ce qui est dans le numérateur. Inventer un NPS de marché. Suivre vingt indicateurs et n'en lire aucun en comité. Laisser finance découvrir la formule le jour du COMEX."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En B2B, le « nombre de souscriptions » devient souvent le nombre de contrats signés et le revenu récurrent : la formule change, le principe (définition écrite) reste. En assurance, une « souscription » n'est pas toujours un encaissement : distinguerez production, pièces, et mise en vigueur. En distribution, le taux d'utilisation d'un outil commercial n'est pas le CA. Un projet de partenariat compte le volume généré ET la quote-part reversée, sinon le CA est surévalué."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le sponsor Horizon veut « un dashboard avec tout : likes, trafic, CA groupe, NPS marché, et le ROI ». Proposez 6 KPI maximum, chacun avec formule, propriétaire et décision associée. Écartez explicitement 3 indicateurs de vanité."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Six KPI défendables : conversion parcours (digital — simplifier l'étape justificatifs si < 22 %) ; souscriptions nettes 25-35 (marketing — intensité acquisition vs offre) ; CAC (marketing + finance — arbitrer le mix canal) ; CA année 1 du flux (finance — comparer au business case) ; activation carte 30 j (digital / réseau — relance d'équipement) ; écart budget (chef de projet + finance — arbitrage de périmètre). Vanité à écarter : likes ; trafic non rattaché ; NPS « de marché » inventé. Le CA groupe n'est pas un KPI de ce projet : il noie le signal. Le ROI se calcule en clôture ou à date, avec les coûts totaux, pas en temps réel sur un slide marketing."
            }
          ],
          "position": 0
        },
        {
          "title": "Construire un reporting",
          "description": "Structurer un reporting de comité : résultats, objectifs, écarts, explications, risques, actions, décisions attendues — avec un tableau de bord Horizon.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous produisez un reporting lisible en cinq minutes par un décideur : le réalisé, la cible, l'écart, la cause, le risque, l'action, et la décision demandée. Vous n'enterrez pas une alerte au milieu d'un commentaire de campagne."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le reporting n'est pas un recueil de nouvelles. C'est un outil d'arbitrage. Un comité qui reçoit quinze pages de captures d'écran n'arbitre pas : il feuillette. La structure utile est toujours la même, quel que soit l'outil (slide, tableur, intranet) : résultats, objectifs, écarts, explications, risques, actions correctives, décisions attendues.\n\nLe résultat est un fait mesuré selon la définition validée. L'objectif est celui du cadrage ou du business case, pas une cible réécrite le matin du comité pour « passer au vert ». L'écart est la différence, en unité et en pourcentage quand c'est lisible. L'explication distingue cause (parcours, canal, saison, incident, hypothèse fausse) et symptôme. Le risque dit ce qui se passe si l'on n'agit pas. L'action a un propriétaire et une date. La décision attendue est formulée pour le sponsor ou le comité : reporter un jalon, débloquer un budget, réduire un périmètre, lancer un plan B.\n\nUn tableau de bord de projet n'est pas le tableau de bord de l'entreprise. Il ne contient que les KPI du cadrage, l'avancement des jalons, le budget, les risques ouverts, et trois messages. Le vert / orange / rouge n'a de sens que si les seuils sont écrits avant le premier écart. Colorier au feeling n'est pas du pilotage."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant le comité : 1) actualiser les KPI à la date de gel convenue avec finance. 2) Calculer les écarts. 3) Rédiger une phrase de cause par écart significatif. 4) Relier chaque écart à un risque du registre ou à une nouvelle ligne. 5) Proposer une action et, si besoin, une décision. 6) Faire relire le chiffre par le propriétaire de la donnée. En séance : trois messages, puis le détail. Après : compte rendu avec décisions, pas un copier-coller du slide."
            },
            {
              "block_type": "callout",
              "content": "Vous ne « maquillez » pas un rouge en orange pour protéger le climat. Un écart expliqué est professionnel. Un écart caché se paie au comité suivant, souvent plus cher. Le chef de projet n'est pas le valideur des chiffres réglementaires."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Comité mensuel Horizon, mois 2 après lancement du pilote (données fictives). Conversion 21 % vs cible 24 % à ce stade. Cause : 40 % des abandons restent à l'étape justificatifs. Action : digital réduit l'étape de 6 pièces à 4, sous avis conformité. Décision demandée : autoriser le lot 2 de simplification, 18 k€, ou accepter la cible revue. Le sponsor tranche ; le chef de projet n'invente pas l'avis ACPR."
            },
            {
              "block_type": "heading",
              "content": "Exemple de tableau de bord — Banque Horizon (fictif)"
            },
            {
              "block_type": "code",
              "content": "TABLEAU DE BORD PROJET — Banque Horizon — Offre 25-35\nDate de gel : 15 du mois    Comité : 18    Chef de projet : [nom]\nPérimètre : pilote digital + 12 agences    Mois projet : M2 post-pilote\n\nKPI                  Réalisé    Cible    Écart     Seuil alerte    Propriétaire\nConversion parcours  21 %       24 %     −3 pts    < 20 %          Digital\nSouscriptions nettes 620        700      −80       < 600           Marketing\nCAC                  172 €      150 €    +22 €     > 180 €         Marketing + finance\nCA flux année 1      58,9 k€    66,5 k€  −7,6 k€   —               Finance\nActivation 30 j      61 %       70 %     −9 pts    < 55 %          Réseau + digital\nRéclamations / 1 000 14         10       +4        > 20            Qualité\nBudget investi       96 k€      110 k€   −14 k€    > voté          Chef de projet\nJalon « lot 2 UX »   12 j de retard vs référence cadrage           Digital + IT\n\nMESSAGES (3)\n1. Conversion sous cible : friction justificatifs. Lot 2 UX prêt, avis conformité en cours.\n2. CAC encore haut : mix trop paid social. Arbitrage mix à demander.\n3. Budget sous-consommé : pas une bonne nouvelle si le lot 2 n'est pas lancé.\n\nRISQUES OUVERTS\nR12 Conformité — délai avis lot 2 — impact lancement national — mitigation : gel publicité tant que l'avis manque.\nR07 Réseau — activation faible — formation relance J+7.\n\nDÉCISIONS ATTENDUES\nD1. Autoriser lot 2 UX (18 k€) sous réserve de l'avis conformité, ou revoir la cible conversion.\nD2. Plafonner le paid social à 40 % du mix acquisition jusqu'au prochain comité.\n\nCE QUE CE DASHBOARD N'EST PAS\nNi le reporting groupe, ni un avis réglementaire, ni une prévision de part de marché."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Envoyer le fichier brut des 40 KPI. Changer la cible le matin pour rester au vert. Commenter la campagne au lieu de l'écart. Omettre la décision demandée. Présenter un CAC sans numérateur. Faire parler le chef de projet à la place de la finance sur un chiffre non gelé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En ETI sans « comité de projet », le même fond tient en une page au COMEX mensuel. En startup, le reporting hebdomadaire existe : la structure (écart, cause, décision) ne change pas, seule la fréquence change. Si l'outil de BI n'est pas prêt, un tableur daté et gelé vaut mieux qu'un slide approximatif."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du dashboard Horizon ci-dessus, rédigez en huit lignes la synthèse orale d'ouverture du comité (trois messages, une décision prioritaire, un risque conformité)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Conversion 21 % contre 24 % : la friction justificatifs explique l'essentiel de l'abandon. Le lot 2 UX est prêt ; il n'est pas déployé tant que l'avis conformité n'est pas rendu — je ne contourne pas cette étape. CAC 172 € contre 150 € : le mix paid social pèse trop. Budget sous-consommé de 14 k€, lié au lot 2 non lancé. Je demande aujourd'hui d'autoriser le lot 2 pour 18 k€ sous réserve de l'avis, et de plafonner le paid social à 40 % du mix. Si l'avis tarde au-delà du 30, je reviendrai avec une cible conversion revue plutôt qu'avec une promesse de rattrapage. » Une synthèse qui cache le rouge conformité ou qui promet le lot 2 « on verra l'avis plus tard » est une faute professionnelle."
            }
          ],
          "position": 1
        },
        {
          "title": "REX et amélioration continue",
          "description": "Conduire un retour d'expérience : écarts, causes, actions, capitalisation et amélioration des processus, sans procès d'intention.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous organisez un REX factuel après un jalon ou une clôture : ce qui était prévu, ce qui s'est produit, pourquoi, ce que l'on change, et où cela s'écrit pour le projet suivant. Vous séparez la capitalisation du blâme."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'amélioration continue n'est pas un slogan de fin de slide. C'est la capacité à transformer un écart en règle de travail. Le retour d'expérience (REX) est le rituel qui rend cela possible. Il n'attend pas la fin du projet : un REX de jalon (après un pilote, après un comité raté, après un incident) évite de répéter la même erreur jusqu'à la clôture.\n\nLe REX suit une chaîne : écart (fait vs référence), causes (pas un coupable), actions correctives (propriétaire, délai), capitalisation (ce que l'on inscrit dans un standard, un modèle, une check-list), amélioration de processus (ce que l'organisation change, au-delà du projet). Sans la dernière étape, le REX est un exutoire.\n\nLes causes se cherchent du côté des hypothèses du business case, du cadrage, des dépendances, de la charge, de la qualité de donnée, de la gouvernance — rarement du seul « manque d'agilité ». Un écart de conversion peut venir d'une cible irréaliste, d'un parcours, d'un mix d'acquisition, ou d'une offre mal positionnée. Traiter le symptôme (plus de publicité) sans la cause (friction KYC) aggrave le CAC.\n\nLe chef de projet anime. Il ne rédige pas un réquisitoire. Les faits sont datés. Les opinions sont marquées comme telles. Les actions non tenues du REX précédent sont le premier point de l'ordre du jour."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Fixer le périmètre du REX (jalon, incident, clôture). 2) Rappeler la référence (cadrage, BC, planning). 3) Lister les écarts chiffrés. 4) Faire exprimer les causes par les propriétaires, puis recouper. 5) Trancher trois à cinq actions, pas vingt vœux. 6) Décider ce qui entre dans la bibliothèque de modèles (check-list, RACI, seuil d'alerte). 7) Publier le compte rendu sous cinq jours. 8) Revoir les actions au comité suivant."
            },
            {
              "block_type": "callout",
              "content": "Un REX n'est pas une enquête disciplinaire. Si un manquement de conformité apparaît, il sort du REX et entre dans le circuit risques / conformité / juridique. Le chef de projet n'enterre pas un incident réglementaire dans une « leçon apprise » informelle."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Après le pilote Horizon (12 agences, données fictives), le REX constate : activation 61 % vs 70 %, cause principale = les conseillers n'avaient pas le script de relance J+7 ; action = script + créneau de 20 minutes dans le rituel d'agence ; capitalisation = la check-list de lancement inclut désormais « script relance + propriétaire réseau ». Une cause écartée : « les jeunes n'aiment pas les banques ». Ce n'est pas une cause actionnable."
            },
            {
              "block_type": "heading",
              "content": "Canevas de REX (à copier)"
            },
            {
              "block_type": "code",
              "content": "REX — [nom du projet] — [jalon ou clôture] — date\nRéférence : note de cadrage du [date] / BC version [n]\nParticipants : sponsor, chef de projet, métiers concernés\n1. FAITS ET ÉCARTS (chiffres, jalons, budget, qualité)\n2. CAUSES RETENUES (max 5, actionnables)\n3. CAUSES ÉCARTÉES (et pourquoi)\n4. ACTIONS (propriétaire, date, critère de done)\n5. CAPITALISATION (modèle / check-list / seuil à mettre à jour)\n6. ALERTES SORTANT DU REX (conformité, juridique, risques — circuit dédié)\n7. CE QUE L'ON NE CHANGERA PAS (décision assumée)"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Faire le REX six mois trop tard. Confondre cause et coupable. Produire vingt actions sans propriétaire. Recolorer les cibles a posteriori pour « réussir » le projet. Transformer un incident de conformité en anecdote. Ne jamais mettre à jour les modèles."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Projet arrêté : le REX est encore plus nécessaire (coûts irrécupérables, hypothèses à ne pas recycler). Projet « succès commercial, échec d'adoption » : deux écarts, deux plans. Projet multi-pays : un REX local ne remplace pas la capitalisation groupe, et inversement."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "CAC Horizon à 172 € vs 150 €. Marketing veut « plus de budget pubs ». Rédigez les trois questions de causes que vous posez en REX avant d'arbitrer le budget."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Le numérateur a-t-il changé (nouveaux postes dans le CAC) ou le dénominateur (moins de souscriptions nettes) ? 2) La conversion parcours a-t-elle baissé — auquel cas plus de publicité alimente un entonnoir percé ? 3) Le mix canal a-t-il dérivé vers le plus cher, et que dit le CAC par canal ? Si la cause est la friction justificatifs, l'action est le lot UX + avis conformité, pas 20 k€ de paid social. Demander plus de budget avant ces trois questions est une erreur de REX."
            }
          ],
          "position": 2
        },
        {
          "title": "Réussir un entretien pour le poste",
          "description": "Quinze questions d'entretien de chef de projet marketing et développement, avec réponses modèles argumentées : métier, méthodes, arbitrages, limites.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous répondez à un oral de recrutement par une méthode, un exemple (Horizon ou un cas comparable), une limite d'autonomie, et une distinction nette entre votre rôle et celui de la conformité, du juridique, de la finance et du sponsor. Vous ne vendez pas un titre que cette formation ne délivre pas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un recruteur de chef de projet marketing et développement n'achète pas un vocabulaire (« je suis agile, data-driven, customer-centric »). Il teste si vous savez cadrer, chiffrer, arbitrer, coordonner et mesurer — et si vous savez où s'arrête votre mandat. Les questions techniques et comportementales visent le même fond : le raisonnement sous contrainte (budget, délai, conformité, parties prenantes).\n\nUne réponse modèle tient en quatre temps : 1) définir ce que l'on vous demande, 2) donner la méthode dans l'ordre, 3) illustrer par un cas fictif ou réel non confidentiel, 4) poser la limite (vous ne validez pas un avis ACPR, vous ne signez pas un budget, vous n'inventez pas un chiffre de marché). Trois minutes par réponse suffisent. Le roman de votre personnalité n'est pas un business case.\n\nCette formation prépare des méthodes. L'attestation LOU Academy certifie un parcours sur cette plateforme. Ce n'est pas un titre RNCP, ni un diplôme d'État, ni une habilitation réglementaire. En entretien, vous parlez de ce que vous savez faire, pas d'un statut que vous n'avez pas."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant l'entretien : relire vos cinq preuves (un cadrage, un mini BC, un comité, un risque conformité, un REX). Préparer les quinze questions ci-dessous à voix haute. Préparer trois questions au recruteur (gouvernance réelle, qui valide le BC, place de la conformité dans les projets). Pendant : une idée par phrase, un chiffre seulement s'il est sourcé ou étiqueté fictif / interne. Après : noter les questions surprises pour le prochain oral."
            },
            {
              "block_type": "callout",
              "content": "Ne divulguez aucun chiffre réel d'un employeur précédent. Utilisez des cas fictifs (Banque Horizon) ou des ordres de grandeur anonymisés selon consigne. Ne promettez pas de « faire valider la conformité vous-même »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Question : « Comment choisissez-vous entre deux scénarios au même ROI ? » Réponse courte entendue comme professionnelle : « Je sors du seul ROI. Je compare délai, faisabilité, risques — surtout conformité et dépendance — et alignement stratégique. Sur Horizon, A et B peuvent être défendables ; je recommande B seulement si l'avis conformité, le MVP à six mois et le budget tiennent. Sinon je recommande A. »"
            },
            {
              "block_type": "heading",
              "content": "Comment utiliser les quinze questions"
            },
            {
              "block_type": "text",
              "content": "Travaillez à voix haute, 1 min 30 à 3 minutes par réponse. La formulation ci-dessous n'est pas la seule possible ; c'est un standard professionnel : vouvoiement, méthode, limite, pas de statistique inventée. Les entreprises citées (Horizon, NéoPulse, Lumen) sont fictives."
            },
            {
              "block_type": "heading",
              "content": "Questions 1 à 5 — Métier, marché, business case"
            },
            {
              "block_type": "code",
              "content": "Q1. Quel est le rôle d'un chef de projet marketing et développement ?\nRéponse modèle. Le rôle est de faire passer une opportunité d'offre, de parcours, de partenariat ou d'outil commercial d'un besoin flou à une décision, puis à un déploiement mesuré. Je cadre (objectifs, périmètre, parties prenantes, livrables), je fais construire le business case avec la finance, je prépare l'arbitrage, je pilote jalons et risques, je coordonne marketing, commercial, digital, IT, finance, risques, conformité, juridique et réseaux, je prépare la mise en marché, je mesure. Je ne suis pas le directeur marketing, ni le chef de produit seul propriétaire de l'offre, ni le valideur réglementaire. Ma valeur, c'est la tenue du dossier et des dates que j'annonce, pas un titre.\n\nQ2. Comment analysez-vous une opportunité de marché ?\nRéponse modèle. Je commence par le problème client et les faits internes (volumes, conversion, CAC, réclamations), pas par l'idée du sponsor. Je liste les informations manquantes. Je pose un diagnostic : tendance, concurrence (ici fictive : néobanques vs réseau), barrières, capacités. Je formule une problématique métier et des critères pour dire si l'opportunité mérite un business case. Je n'invente pas une part de marché. Si les données manquent, je le dis et je propose le recueil minimum, je ne remplis pas les trous par de l'optimisme.\n\nQ3. Comment réalisez-vous un benchmark ?\nRéponse modèle. Je définis d'abord les critères (offre, prix, parcours, délai de souscription, services, distribution, promesse), le périmètre (qui est comparable, qui ne l'est pas) et la date. Je recueille des faits observables, pas des rumeurs. Je distingue ce qui est public de ce qui est hypothèse. Sur Horizon, comparer le parcours à une néobanque fictive sur le nombre d'étapes et le délai, ce n'est pas affirmer une part de marché. Un benchmark sert à décider un écart à combler ou à assumer, pas à copier.\n\nQ4. Comment construisez-vous un business case ?\nRéponse modèle. Je sépare hypothèses, coûts, bénéfices, risques, scénarios et recommandation. Je distingue le BC du budget projet et du business plan d'entreprise. Je fais chiffrer avec la finance : investissement, run, revenus, bénéfices non financiers à part. Je refuse le double comptage. Je présente au moins un scénario de référence sans projet. Je date les hypothèses. Un BC sans risques ni limites n'est pas un BC, c'est une plaquette.\n\nQ5. Comment évaluez-vous la rentabilité d'un projet ?\nRéponse modèle. Formules d'abord. Coûts totaux = investissement + runs. Bénéfice net = revenus − coûts totaux. ROI = bénéfice net / coûts totaux. Payback simple = délai pour récupérer l'investissement sur les flux nets. Cas pédagogique du cours : 120 k€ + 3 × 30 k€ = 210 k€ de coûts ; 3 × 90 k€ = 270 k€ de CA ; bénéfice 60 k€ ; ROI 28,6 % ; payback 2 ans de l'investissement. VAN : introduction avec un taux étiqueté hypothèse, pas une vérité unique. Ces chiffres ne valident pas seuls un projet : délai, conformité, faisabilité pèsent autant."
            },
            {
              "block_type": "heading",
              "content": "Questions 6 à 10 — Scénarios, comité, roadmap, risques, retard"
            },
            {
              "block_type": "code",
              "content": "Q6. Comment choisissez-vous entre plusieurs scénarios ?\nRéponse modèle. Je construis une grille : investissement, bénéfices, ROI, délai, faisabilité, risques (dont conformité et dépendance), impact client, alignement stratégique. Le scénario au ROI le plus élevé n'est pas automatiquement le bon. Sur Horizon, C (partenariat) peut afficher un ROI supérieur et rester moins défendable si le tiers n'est pas maîtrisé. Je recommande, je ne décide pas : le comité décide. Je dis aussi dans quel cas je changerais de recommandation.\n\nQ7. Comment préparez-vous un comité de pilotage ?\nRéponse modèle. Un pack court : synthèse, écarts, risques, décisions demandées. Chiffres gelés avec la finance. Pas de surprise réglementaire en séance : les alertes conformité sont déjà dans le circuit. Je fais relire le slide de recommandation par le sponsor. En séance, trois messages, puis le détail. Après, un compte rendu de décisions, pas un roman. Un comité n'est pas une réunion d'information déguisée.\n\nQ8. Comment construisez-vous une roadmap ?\nRéponse modèle. Je pars des livrables et des dépendances, pas d'un rétroplanning magique à partir de la date politique. Jalons vérifiables (cadrage validé, avis conformité, pilote, go/no-go, lancement, REX). Responsables nommés. Chemin critique visible (souvent IT + conformité). Sur Horizon, six mois n'autorisent qu'un MVP : compte, carte, parcours simplifié — pas une place de marché de quinze partenaires. Si la date est intenable, je l'écris avant de « tenir le planning » sur le papier.\n\nQ9. Comment identifiez-vous les risques ?\nRéponse modèle. Je parcours les familles : marché, offre, IT, données, juridique, conformité, opérationnel, financier, partenaires, adoption réseau. Pour chacun : cause, impact, probabilité qualitative, détection, mitigation, responsable, indicateur d'alerte. Je ne confonds pas un risque (événement incertain) et un problème (déjà là). Un risque de conformité non escaladé n'est pas « géré » : il est caché. Je ne cote pas seul un risque réglementaire à la place de la fonction risques.\n\nQ10. Comment gérez-vous un retard projet ?\nRéponse modèle. Je mesure l'écart de jalon, j'identifie la cause (charge, dépendance, périmètre, qualité, décision non prise), je propose des leviers : réduire le périmètre, ajouter du temps, ajouter des moyens, séquencer, arrêter. Je n'annonce pas un rattrapage sans levier. Si le retard vient d'un avis conformité, je ne « presse » pas la conformité : je recale le lancement public. Un retard expliqué tôt est un arbitrage. Un retard révélé la veille est une perte de confiance."
            },
            {
              "block_type": "heading",
              "content": "Questions 11 à 15 — Coordination, conflit, lancement, mesure, budget"
            },
            {
              "block_type": "code",
              "content": "Q11. Comment coordonnez-vous plusieurs directions ?\nRéponse modèle. Par un RACI lisible, un rituel unique, des livrables nommés, et un escalade claire vers le sponsor. Marketing n'est pas IT, IT n'est pas conformité, le réseau n'est pas un canal d'exécution muet. Je prépare les arbitrages de priorité. Je ne fais pas dix réunions parallèles qui se contredisent. En cas de conflit de ressource, j'écris l'impact sur le jalon et je fais trancher, je ne « débrouille » pas en silence.\n\nQ12. Comment gérez-vous un désaccord avec un contributeur ?\nRéponse modèle. Je recadre sur les faits du cadrage et sur le RACI. Si le désaccord est métier, on documente les options. Si c'est un avis de conformité ou juridique, je ne le neutralise pas par un vote marketing. Si c'est une question de priorité, j'escalade au sponsor avec l'impact délai / coût / risque. Je ne personnalise pas. Je ne contourne pas un expert en allant « directement au COMEX » sans le dire.\n\nQ13. Comment préparez-vous un lancement commercial ?\nRéponse modèle. Go/no-go sur des conditions : offre cohérente (promesse, tarif, parcours, capacité, contraintes), avis des fonctions de contrôle, réseau formé, scripts, outils, plan de com, indicateurs, dispositif d'incident. Un lancement « techniquement prêt » sans formation réseau n'est pas un lancement. Je sépare pilote et généralisation. Je ne pousse pas une publicité nationale si le parcours casse encore.\n\nQ14. Comment mesurez-vous la réussite d'un projet ?\nRéponse modèle. Par les critères de réussite écrits au cadrage, pas par l'ambiance du cocktail de lancement. Souscriptions nettes, conversion, CAC, adoption, qualité, budget, jalons. Un projet peut « sortir à la date » et rater l'adoption : c'est un échec partiel, à traiter en REX. Je compare au scénario de référence sans projet, pas seulement à l'année précédente. Je ne déclare pas le succès avant la fenêtre de mesure convenue.\n\nQ15. Comment réagissez-vous lorsqu'un projet dépasse son budget ?\nRéponse modèle. J'arrête de dépenser dans le flou. Je recalcule l'écart (quoi, pourquoi : périmètre, prix, charge, imprévu). Je propose un arbitrage : réduire le lot, décaler, financer un avenant avec un BC révisé, ou arrêter. Je n'absorbe pas l'écart en silence. Je n'annonce pas un ROI inchangé. Si l'écart vient d'une exigence de conformité tardive, c'est un coût de sécurisation, pas une « mauvaise surprise marketing » à contourner.\n\nPIÈGE D'ORAL À ÉVITER\n« Grâce à LOU je suis certifié chef de projet RNCP. » Faux. L'attestation de parcours n'est pas un titre RNCP ni un diplôme d'État."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Réciter des anglicismes. Inventer un chiffre de marché. Promettre de valider la conformité. Dire que le ROI le plus élevé gagne toujours. Cacher un retard. Présenter l'attestation LOU comme un diplôme. Divulguer un BC réel nominatif d'un ancien employeur."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Entretien chez un assureur : on vous testera sur la mise en vigueur et le parcours, pas seulement sur le CAC. En ETI industrielle B2B : « souscription » = contrat, cycle long, peu de digital grand public — la méthode (cadrage, BC, risques) reste. Si l'on vous demande un salaire : fourchette selon l'offre, pas une garantie liée à cette formation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "En 90 secondes à voix haute, répondez à Q6 sur Horizon (A / B / C) puis à Q15. Chronométrez. Relisez ensuite les réponses modèles : avez-vous cité la conformité et le fait que vous recommandez sans décider ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Une réponse orale réussie à Q6 nomme la grille (pas seulement le ROI), dit que C peut être séduisant et risqué, et conditionne B (conformité, MVP six mois, budget). Une réponse réussie à Q15 commence par figer l'écart, propose un arbitrage, et refuse le silence. Si vous avez dit « on lance quand même, on verra la conformité » ou « le plus rentable gagne », recommencez : ce sont des réponses éliminatoires sur ce métier."
            }
          ],
          "position": 3
        },
        {
          "title": "Quiz — Performance, reporting et entretien",
          "description": "Cinq questions : sélection de KPI, structure de reporting, REX, posture d'entretien, écart budget. Seuil 70 %.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Performance, reporting et entretien",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Le sponsor veut un tableau de bord « avec le trafic, les likes, le CA de toute la banque et un NPS de marché ». Quelle sélection est professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Conserver trafic, likes et CA groupe : un comité a besoin de visibilité large.",
                  "B. Retenir un nombre limité de KPI liés aux critères de réussite (conversion, souscriptions nettes, CAC, CA du flux, adoption, écart budget), écarter les indicateurs de vanité, et n'inventer aucun NPS de marché.",
                  "C. Publier uniquement le ROI ressenti par le marketing, plus rapide à produire.",
                  "D. Recopier le tableau de bord groupe : cela évite de définir des formules."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un KPI change une décision et s'appuie sur une définition. Trafic, likes et CA groupe noient le signal du projet. Un NPS de marché inventé n'est pas une donnée. Le ROI « ressenti » n'est pas un calcul."
              },
              {
                "question": "Sur Horizon (données fictives), le CAC passe de 150 € à 172 € et la conversion parcours est sous cible. Quelle lecture est la plus solide ?",
                "question_type": "single_choice",
                "options": [
                  "A. Demander immédiatement plus de budget publicitaire pour compenser.",
                  "B. Recalculer le CAC plus tard, quand les volumes seront plus jolis.",
                  "C. Distinguer numérateur et dénominateur, vérifier si l'entonnoir est percé (conversion), et n'arbitrer le mix ou le budget qu'après les causes — pas avant.",
                  "D. Ignorer le CAC : seul le nombre de likes de la campagne compte au lancement."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Plus de publicité dans un parcours qui convertit mal aggrave souvent le CAC. Le REX commence par les causes. Les likes ne sont pas un KPI de ce projet."
              },
              {
                "question": "Un reporting de comité utile contient surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. Résultats, objectifs, écarts, explications, risques, actions, décisions attendues — avec des chiffres gelés.",
                  "B. Un roman de la campagne et des captures d'écran de l'outil de pub.",
                  "C. Uniquement les indicateurs au vert, pour protéger le climat.",
                  "D. L'avis de conformité rédigé par le chef de projet, qui « valide pour gagner du temps »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le comité arbitre. Cacher les rouges ou usurper la conformité sont des fautes. Le pack de campagne n'est pas un reporting de projet."
              },
              {
                "question": "Un REX de pilote sert d'abord à :",
                "question_type": "single_choice",
                "options": [
                  "A. Désigner un coupable pour rassurer le sponsor.",
                  "B. Recolorer les cibles a posteriori afin de déclarer le succès.",
                  "C. Établir les écarts, des causes actionnables, des actions avec propriétaire, et une capitalisation dans les modèles — en sortant un incident de conformité vers le circuit dédié.",
                  "D. Remplacer l'avis juridique par des « leçons apprises » informelles."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le REX capitalise. Il n'est ni un procès, ni un maquillage, ni un substitut aux fonctions de contrôle."
              },
              {
                "question": "En entretien, on vous demande comment vous réagissez à un dépassement de budget. Quelle réponse est attendue ?",
                "question_type": "single_choice",
                "options": [
                  "A. « J'absorbe l'écart en silence pour ne pas inquiéter ; le ROI restera le même. »",
                  "B. « Je fige l'écart, j'en identifie la cause, je propose un arbitrage (réduire, décaler, financer, arrêter) et je ne contourne pas une exigence de conformité même si elle coûte. »",
                  "C. « Je lance quand même : le comité n'aime pas les mauvaises nouvelles. »",
                  "D. « Je présente l'attestation LOU Academy comme un titre RNCP, cela couvre l'écart. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Silence, ROI inchangé, lancement malgré tout, usurpation de titre : réponses éliminatoires. L'attestation n'est ni un RNCP ni un diplôme d'État."
              }
            ]
          },
          "position": 4
        }
      ]
    },
    {
      "position": 9,
      "title": "Projet final et évaluation",
      "description": "Mobiliser le parcours sur Banque Horizon : diagnostic, cadrage, trois scénarios chiffrés, recommandation, roadmap, risques, déploiement, synthèse exécutive, puis examen (seuil 80 %).",
      "lessons": [
        {
          "title": "Projet fil rouge — Banque Horizon",
          "description": "Huit livrables sur une banque fictive : diagnostic, cadrage, business case à trois scénarios, recommandation, feuille de route, risques, déploiement, synthèse pour le comité.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous traitez de bout en bout un dossier d'offre 25-35 ans pour Banque Horizon (fictive) : diagnostiquer, cadrer, comparer trois scénarios chiffrés, recommander, planifier, sécuriser, préparer le lancement et rédiger une synthèse exécutive. Vous assumez que plusieurs scénarios peuvent être défendables, et que sauter la conformité est une erreur grave."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon est une banque de réseau fictive. Elle vise les jeunes actifs de 25 à 35 ans. La direction constate une concurrence des néobanques (également fictives dans ce cours), une baisse des nouvelles souscriptions, une satisfaction perfectible, un parcours de souscription complexe et un coût d'acquisition élevé. Elle envisage une offre comprenant compte, carte, services digitaux, avantages partenaires et parcours simplifié. Budget limité. Lancement visé à six mois. Contributeurs : marketing, commercial, digital, informatique, finance, risques, conformité, juridique, réseaux.\n\nVotre rôle : chef de projet marketing et développement. Vous préparez la recommandation. Vous ne validez pas l'avis conformité, vous ne signez pas le budget, vous n'êtes pas l'ACPR. Les chiffres ci-dessous sont pédagogiques et fictifs. Les formules sont exactes."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Traitez les huit parties dans l'ordre. Ne remplissez pas un trou de donnée par de l'optimisme. Étiquetez toute hypothèse. Pour le business case, calculez coûts totaux, CA, bénéfice, ROI sur coûts totaux, payback de l'investissement. Une VAN n'est qu'une introduction : taux pédagogique 8 %, hypothèse, pas une vérité unique. La recommandation cite les conditions d'échec (conformité, réalisme à six mois, budget)."
            },
            {
              "block_type": "callout",
              "content": "Toutes les entreprises et tous les volumes de ce dossier (Horizon, NéoPulse, Banque Lumen) sont fictifs. Ne les citez pas comme des faits de marché. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            },
            {
              "block_type": "heading",
              "content": "Dossier — faits internes (fictifs, 12 mois glissants)"
            },
            {
              "block_type": "code",
              "content": "BANQUE HORIZON — SEGMENT 25-35 ANS (FICTIF)\nSouscriptions nettes N   : 8 400\nSouscriptions nettes N-2 : 11 200   soit −25 %\nConversion parcours      : 18 %     (abandon 82 %, pic à l'étape justificatifs)\nCAC                      : 185 €\nRevenu moyen année 1     : 95 €\nCA flux année 1          : 8 400 × 95 € = 798 000 €\nSatisfaction (enquête interne pédagogique) : note 6,4 / 10\nParcours actuel          : 9 écrans + 6 pièces justificatives\nOffre actuelle           : « Horizon Essentiel » (compte + carte, peu de digital)\nEnveloppe projet         : 400 000 € d'investissement + 150 000 € de run annuel\nCalendrier politique     : lancement national visé à 6 mois\nContrainte               : pas de recrutement IT supplémentaire cette année\n\nCONCURRENCE CITÉE (FICTIVE, PAS DES PARTS DE MARCHÉ)\nNéoPulse  : souscription 4 écrans, CAC annoncé interne 110 € (hypothèse non vérifiée)\nBanque Lumen : offre jeunes + cashback partenaires, délai souscription 48 h\n\nCE QUI MANQUE (À NE PAS INVENTER)\nVolume exact d'abandons par étape (on a le pic, pas le détail exhaustif)\nÉlasticité prix de la carte\nCapacité réelle IT en jours-homme (fourchette « tendue » seulement)\nAvis conformité / juridique : non rendus à ce stade"
            },
            {
              "block_type": "heading",
              "content": "Trois scénarios à comparer — données pédagogiques fictives"
            },
            {
              "block_type": "code",
              "content": "Horizon d'analyse : 3 ans. Hors fiscalité. Hors actualisation sauf VAN pédagogique.\n\nSCÉNARIO A — Améliorer l'offre existante (UX + formation réseau)\nInvestissement     180 000 €\nRun annuel         60 000 €\nCoûts 3 ans        180 + 3×60 = 360 000 €\nSouscriptions incr. 1 200 / 1 800 / 2 000\nARPU année 1       90 €\nCA 3 ans           108 + 162 + 180 = 450 000 €\nBénéfice net       450 − 360 = 90 000 €\nROI / coûts totaux 90 / 360 = 25,0 %\nFlux nets annuels  48 / 102 / 120 k€  → payback investissement ≈ 2 ans et 3 mois\nDélai              4 mois\nFaisabilité 6 mois haute\nDifférenciation    faible vs néobanques\nConformité         allégée (évolution de parcours, pas nouveau produit)\n\nSCÉNARIO B — Nouvelle offre digitale « Horizon Start » (compte + carte + parcours 4 écrans + 2 services)\nInvestissement     380 000 €\nRun annuel         120 000 €\nCoûts 3 ans        380 + 3×120 = 740 000 €\nSouscriptions incr. 2 800 / 4 200 / 4 800\nARPU année 1       100 €\nCA 3 ans           280 + 420 + 480 = 1 180 000 €\nBénéfice net       1 180 − 740 = 440 000 €\nROI / coûts totaux 440 / 740 = 59,5 %\nFlux nets annuels  160 / 300 / 360 k€  → payback investissement ≈ 1 an et 9 mois\nDélai              6 mois en MVP / 9 à 12 mois si place de marché de 15 partenaires\nFaisabilité 6 mois moyenne, seulement en MVP\nDifférenciation    forte si le parcours tient\nConformité         élevée (nouvelle offre, publicité, CG, KYC) — avis indispensables\nBudget             380 k€ dans l'enveloppe 400 k€ : aucune campagne TV\n\nSCÉNARIO C — Partenariat avec NéoPulse (fintech fictive) : marque blanche partielle\nInvestissement     250 000 €\nRun annuel         90 000 € + 25 % du CA incrémental reversé au partenaire\nCA brut 3 ans      4 000×85 + 5 500×85 + 6 000×85 = 1 317 500 €\nQuote-part 25 %    329 375 €\nCA net 3 ans       988 125 €\nCoûts 3 ans        250 + 3×90 = 520 000 €\nBénéfice net       988 − 520 = 468 000 € (arrondi)\nROI / coûts totaux 468 / 520 ≈ 90,0 %\nFlux nets          165 / 261 / 293 k€  → payback investissement ≈ 1 an et 4 mois\nDélai              5 à 8 mois (contrat + API + avis sur le tiers)\nFaisabilité 6 mois moyenne (juridique partenaire souvent plus long)\nDifférenciation    forte mais marque partagée\nConformité         élevée (tiers, données, publicité, sortie)\nDépendance         haute\n\nVAN PÉDAGOGIQUE (taux 8 % HYPOTHÈSE, pas une vérité unique)\nA ≈ +47 k€    B ≈ +311 k€    C ≈ +358 k€\nLa VAN ne tranche pas seule : C reste le plus exposé au tiers."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique — huit livrables"
            },
            {
              "block_type": "text",
              "content": "Rédigez, puis comparez à la correction :\n1) Diagnostic : problèmes, opportunités, informations manquantes, analyses à lancer.\n2) Cadrage : objectifs, périmètre, parties prenantes, livrables.\n3) Business case : recalculer A / B / C (coûts, CA, bénéfice, ROI, payback), risques, délais, faisabilité.\n4) Recommandation : un scénario, justifié, avec conditions d'abandon.\n5) Pilotage : feuille de route simplifiée, jalons, responsabilités.\n6) Risques : principaux risques et mesures de maîtrise.\n7) Déploiement : conditions de lancement, communication, formation, KPI.\n8) Comité : synthèse exécutive (contexte, recommandation, justification, risques, décision attendue).\n\nPlusieurs scénarios peuvent être défendables. Une recommandation qui contourne la conformité n'est pas défendable."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée — lecture d'ensemble"
            },
            {
              "block_type": "text",
              "content": "Il n'existe pas une seule solution correcte. A est défendable si l'appétit au risque est faible, si l'IT est saturée, ou si l'enveloppe est en réalité inférieure à 400 k€. C est défendable si la banque assume une dépendance, si la due diligence du tiers est positive, et si le juridique tient le calendrier. B est le modèle recommandé dans cette correction, avec trois conditions : avis conformité et juridique avant toute publicité ; réalisme à six mois = MVP (pas quinze partenaires) ; budget d'investissement plafonné à 380 k€.\n\nPourquoi B plutôt que C malgré un ROI et une VAN inférieurs : le contrôle du parcours et de la marque, la maîtrise interne des avis, et un délai à six mois plus tenable sans contrat de dépendance. Pourquoi B plutôt que A : A ne répond que faiblement à la concurrence perçue et au CAC ; B attaque le parcours, qui est le fait le plus solide du diagnostic. Si l'IT chiffre B à 520 k€ ou à neuf mois, la recommandation bascule vers A, pas vers un B « on verra »."
            },
            {
              "block_type": "heading",
              "content": "Correction — parties 1 et 2"
            },
            {
              "block_type": "code",
              "content": "PARTIE 1 — DIAGNOSTIC\nProblèmes : souscriptions −25 % ; conversion 18 % ; CAC 185 € ; parcours 9 écrans ; satisfaction 6,4.\nOpportunités : simplifier le parcours (pic justificatifs) ; reconstruire une offre lisible 25-35 ; le réseau existe encore (capacité de conseil, pas seulement du paid).\nManquant : détail d'abandon par étape ; charge IT réelle ; avis conformité ; élasticité prix.\nAnalyses à lancer : cartographie du parcours ; atelier conformité / juridique « ce qui est un nouveau produit » ; charge IT en jours ; test d'offre (pas un lancement).\nErreur : inventer une part de marché NéoPulse.\n\nPARTIE 2 — CADRAGE\nObjectifs (ex.) : conversion 28 % à 12 mois ; CAC ≤ 150 € ; souscriptions nettes +2 800 en année 1 si B.\nPérimètre in : compte, carte, parcours 4 écrans, 2 services digitaux, 12 agences pilotes puis national.\nPérimètre out : place de marché 15 partenaires, TV, refonte du SI cœur, nouveau crédit.\nParties prenantes : sponsor marketing, finance, digital, IT, conformité, juridique, risques, réseau, commercial.\nLivrables : note de cadrage, BC, pack comité, avis formalisés, MVP, plan de déploiement, dashboard, REX pilote."
            },
            {
              "block_type": "heading",
              "content": "Correction — parties 3 et 4"
            },
            {
              "block_type": "code",
              "content": "PARTIE 3 — BUSINESS CASE (recalcul)\nA : coûts 360 k€ ; CA 450 k€ ; bénéfice 90 k€ ; ROI 25,0 % ; payback ≈ 2,25 ans. Faisable à 4 mois. Peu différenciant.\nB : coûts 740 k€ ; CA 1 180 k€ ; bénéfice 440 k€ ; ROI 59,5 % ; payback ≈ 1,75 an. 6 mois seulement en MVP.\nC : coûts 520 k€ ; CA net 988 k€ ; bénéfice 468 k€ ; ROI ≈ 90 % ; payback ≈ 1,33 an. Dépendance + avis tiers.\nContrôles : 8 400 × 95 = 798 000 (état actuel). Ne pas additionner le CA actuel au CA incrémental des scénarios (double comptage).\nVAN 8 % : introduction, hypothèse, pas un critère unique.\n\nPARTIE 4 — RECOMMANDATION MODÈLE\nRecommander B « Horizon Start » MVP, sous conditions :\n1) Conformité / juridique / risques : pas de lancement public sans avis. Le chef de projet n'écrit pas l'avis.\n2) Six mois : compte + carte + parcours 4 écrans + 2 services. Pas 15 partenaires.\n3) Budget : 380 k€ d'investissement, 120 k€ de run. Si IT > 400 k€ ou > 6 mois, bascule vers A.\nOn n'élimine pas A ni C : on les garde comme plan B (A) et comme option stratégique si due diligence partenaire positive (C), pas comme lancement « en cachette »."
            },
            {
              "block_type": "heading",
              "content": "Correction — parties 5 à 8"
            },
            {
              "block_type": "code",
              "content": "PARTIE 5 — PILOTAGE (jalons types)\nM0 Cadrage + BC v1 validés (chef de projet, finance, sponsor)\nM1 Avis conformité / juridique sur le MVP (fonctions de contrôle)\nM2 Build parcours 4 écrans + scripts réseau (digital, IT, réseau)\nM3 Pilote 12 agences + 100 % digital (go/no-go)\nM4 REX pilote + correctifs\nM5 Lancement national sous conditions du go\nM6 Dashboard + REX de lancement\nChemin critique : avis + IT. RACI : sponsor décide, CP coordonne, conformité valide son avis.\n\nPARTIE 6 — RISQUES (extrait)\nR1 Avis conformité tardif — impact date — mitigation : saisir dès M0, gel pub.\nR2 Charge IT sous-estimée — impact budget/délai — re-chiffrage à M1, bascule A.\nR3 Réseau non formé — impact activation — formation avant go national.\nR4 CAC paid social — impact rentabilité — plafond de mix.\nR5 Périmètre (15 partenaires) — impact 6 mois — freeze du backlog.\nC : risque tiers / données / sortie — due diligence, clause de réversibilité.\n\nPARTIE 7 — DÉPLOIEMENT\nConditions de lancement : avis rendus, parcours testé, scripts, formation, dispositif d'incident, KPI gelés.\nCommunication : ciblée 25-35, promesse = parcours simple, pas de claim non sourcé.\nFormation : 20 min rituel agence + e-learning ; pas de national sans pilote réseau.\nKPI : conversion, souscriptions nettes, CAC, activation 30 j, réclamations / 1 000, écart budget, jalons.\n\nPARTIE 8 — SYNTHÈSE EXÉCUTIVE (modèle)\nContexte : −25 % de souscriptions 25-35, conversion 18 %, CAC 185 €, parcours 9 écrans.\nRecommandation : B MVP « Horizon Start », 380 k€, 6 mois.\nJustification : attaque le fait le plus solide (parcours) ; ROI 59,5 % ; reste dans l'enveloppe ; contrôle interne de la conformité.\nRisques : avis, charge IT, freeze du périmètre. C plus rentable sur le papier, plus dépendant.\nDécision attendue : valider B sous les 3 conditions, ou basculer vers A si IT/avis ne tiennent pas. Ne pas lancer sans avis."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Choisir C uniquement parce que le ROI est le plus élevé. Inventer la part de marché de NéoPulse. Additionner le CA actuel au CA incrémental. Promettre quinze partenaires à six mois. Écrire « la conformité validera, je m'en charge ». Recolorer les cibles pour faire passer B. Oublier le scénario sans projet comme référence qualitative (ne rien faire maintient le −25 %)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le sponsor exige C dès lundi : due diligence, pas un contrat signé dans la semaine. Si finance refuse tout investissement > 200 k€ : A devient la recommandation, B un dossier N+1. Si l'avis conformité est négatif sur le KYC allégé : on recadre le parcours, on ne publie pas « 4 écrans » comme une promesse déjà tenue."
            }
          ],
          "position": 0
        },
        {
          "title": "Outils de correction — roadmap, risques, synthèse, grille",
          "description": "Modèles complets de feuille de route, matrice des risques, synthèse exécutive, et grille de notation alignée sur les dix compétences du parcours.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous disposez de quatre outils réutilisables pour juger votre dossier Horizon et, plus tard, un dossier réel : une roadmap à jalons, une matrice des risques, une synthèse exécutive d'une page, et une grille qui relie les dix compétences du parcours à des preuves observables. Aucune compétence n'est « acquise » par la seule lecture d'un cours."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La correction d'un projet professionnel n'est pas un barème de récitation. Elle teste si le raisonnement tient : les chiffres sont justes, les hypothèses sont nommées, la recommandation est conditionnelle, la conformité n'est pas sautée, le comité sait quoi décider. Un dossier élégant qui lance sans avis est un échec. Un dossier plus prudent (A) qui assume ses limites peut être professionnellement supérieur à un B « magique ».\n\nLes dix compétences du parcours couvrent le cadrage d'offres, le business case, les dossiers de choix, la gouvernance, la coordination transverse, la sécurisation coûts-délais-risques, l'analyse de marché, les supports de gouvernance, la mise en marché, et la cohérence offre / tarif / parcours / expérience / déploiement. La grille ci-dessous les rend visibles sur le livrable Horizon."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Recalculez A/B/C avant de lire la « bonne reco ». 2) Comparez votre recommandation aux conditions (conformité, six mois, budget), pas au seul nom du scénario. 3) Vérifiez que votre roadmap a un chemin critique. 4) Vérifiez que chaque risque a un propriétaire hors « tout le monde ». 5) Lisez votre synthèse à voix haute : un décideur doit pouvoir trancher en trois minutes. 6) Cochez la grille des dix compétences : une case vide = une lacune, pas un détail."
            },
            {
              "block_type": "callout",
              "content": "Grave : toute recommandation qui propose de lancer, d'annoncer ou de former le réseau sur une fonctionnalité non revue par la conformité / le juridique. En examen, ces réponses sont les distracteurs à écarter."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un comité Horizon de 25 minutes : 5 minutes de synthèse, 10 minutes d'arbitrage B vs A si l'IT dérape, 10 minutes de décisions (enveloppe, freeze de backlog, date de go/no-go). Le pack trop long est renvoyé. Le pack sans décision attendue est renvoyé. Le pack qui « valide la conformité » à la place de la fonction est arrêté."
            },
            {
              "block_type": "heading",
              "content": "Feuille de route modèle — Horizon Start MVP"
            },
            {
              "block_type": "code",
              "content": "FEUILLE DE ROUTE — Horizon Start (scénario B MVP) — 6 mois\nMois 0  Cadrage v1 + BC v1 + registre des risques v1\n        Responsable : chef de projet | Décision : sponsor | Finance : gèle les définitions\nMois 1  Dossier d'avis conformité / juridique / risques (périmètre MVP)\n        Freeze backlog : 0 partenaire externe au lancement\n        Re-chiffrage IT (seuil de bascule A : > 400 k€ ou > 6 mois)\nMois 2  Build parcours 4 écrans + KYC selon avis + scripts réseau + formation pilote\nMois 3  Pilote : 100 % digital + 12 agences (cible conversion pilote 24 %)\n        Go / no-go : avis tenus, incidents < seuil, activation 30 j ≥ 55 %\nMois 4  REX pilote + correctifs (lot UX si friction justificatifs encore > 30 % des abandons)\nMois 5  Lancement national sous conditions du go (com, formation, dispositif d'incident)\nMois 6  Dashboard gelé + REX de lancement + décision run N+1\n\nCHEMIN CRITIQUE : avis de contrôle → build IT → pilote → go national\nHORS CHEMIN (ne pas laisser déborder) : 15 partenaires, TV, nouveau crédit, refonte SI cœur\n\nRACI SIMPLIFIÉ\nCadrage / reco     : R chef de projet   A sponsor        C finance, métiers   I COMEX\nAvis réglementaire : R conformité/jur.  A responsable de la fonction   C CP   I sponsor\nBuild parcours     : R digital/IT       A DSI            C conformité         I réseau\nFormation réseau   : R réseau           A dir. commerciale C CP, marketing    I\nGo / no-go         : R chef de projet   A sponsor        C contrôle, finance  I"
            },
            {
              "block_type": "heading",
              "content": "Matrice des risques modèle"
            },
            {
              "block_type": "code",
              "content": "MATRICE DES RISQUES — Horizon Start MVP\nID  Risque                         P    I    Détection              Mitigation                         Propriétaire\nR1  Avis conformité tardif         M    H    Suivi hebdo avis       Saisir dès M0 ; gel publicité      Conformité (R) / CP (suivi)\nR2  Charge IT > enveloppe          M    H    Re-chiffrage M1        Bascule A si >400 k€ ou >6 mois    DSI / finance\nR3  Glissement 15 partenaires      H    H    Backlog gelé           Freeze écrit ; tout ajout = avenant CP / sponsor\nR4  Réseau non formé               M    H    Taux formation pilote  Pas de national sans seuil         Réseau\nR5  CAC paid social                M    M    CAC par canal          Plafond 40 % du mix                Marketing\nR6  Double comptage CA             F    H    Revue finance          CA incrémental seulement           Finance\nR7  Incident KYC en pilote         M    H    Réclamations / 1 000   Seuil no-go ; pas de « on verra »  Risques + conformité\nR8  Promesse pub non tenue         M    H    Relecture claims       Juridique signe les claims         Juridique\nR9  Sponsor date politique         M    H    Écart jalon > 10 j     Reco de report, pas de rattrapage fictif  CP\nR10 Données partenaire (si C)      H    H    Due diligence          C n'est pas lancé sans clause      Juridique + DPO métier\n\nP/I : F faible / M moyen / H élevé — qualitative, à faire challenger par la fonction risques.\nUn risque de conformité n'est pas « clôturé » par un commentaire marketing."
            },
            {
              "block_type": "heading",
              "content": "Synthèse exécutive modèle"
            },
            {
              "block_type": "code",
              "content": "SYNTHÈSE EXÉCUTIVE — COMITÉ DE DÉCISION — 1 page\nBanque Horizon (fictive) — Offre 25-35 — [date] — Chef de projet : [nom]\n\nCONTEXTE\nSouscriptions 25-35 : 8 400 (−25 % vs N-2). Conversion 18 %. CAC 185 €. Parcours 9 écrans.\n\nRECOMMANDATION\nScénario B MVP « Horizon Start » : 380 k€ d'investissement, 120 k€ de run, 6 mois.\nConditions : avis conformité/juridique/risques avant publicité ; freeze partenaires ; bascule A si IT dépasse.\n\nJUSTIFICATION\nLe diagnostic le plus solide est le parcours, pas un slogan « il faut innover ».\nB attaque ce parcours, reste dans l'enveloppe, ROI 59,5 %, payback ≈ 1 an et 9 mois.\nA (ROI 25 %) est le plan B de faisabilité. C (ROI ≈ 90 %) reste une option stratégique, pas un raccourci : dépendance et avis tiers.\n\nRISQUES\nAvis tardif, charge IT, glissement de périmètre, réseau non formé. Aucun lancement sans go.\n\nDÉCISION ATTENDUE\n1. Valider B sous conditions, enveloppe 380 k€.\n2. Nommer le sponsor et le rituel mensuel.\n3. Autoriser la saisine conformité dès cette séance.\n4. Trancher dès maintenant : pas de TV, pas de 15 partenaires au lancement.\n\nANNEXES (non lues en séance si le temps manque) : BC détaillé, RACI, matrice des risques."
            },
            {
              "block_type": "heading",
              "content": "Grille de notation — dix compétences"
            },
            {
              "block_type": "code",
              "content": "GRILLE HORIZON — 40 points. 32/40 = dossier professionnel. Une erreur grave de conformité = plafond 20/40.\n\nC1 Cadrer évolutions d'offres / partenariats / outils (modules 02, 09)\n    Preuve : périmètre in/out, acteurs, livrables, contraintes 6 mois.  0 / 2 / 4\nC2 Études d'opportunité, BC, scénarios, risques, reco (modules 03, 09)\n    Preuve : A/B/C recalculés, hypothèses, reco conditionnelle.         0 / 2 / 4\nC3 Dossiers de choix et supports d'arbitrage (modules 04, 09)\n    Preuve : pack comité, décision attendue, pas de roman.              0 / 2 / 4\nC4 Gouvernance, roadmap, jalons, indicateurs (modules 05, 08, 09)\n    Preuve : jalons vérifiables, KPI définis, chemin critique.          0 / 2 / 4\nC5 Coordination transverse (modules 05, 06, 09)\n    Preuve : RACI, conformité et réseau nommés, escalade sponsor.       0 / 2 / 4\nC6 Sécuriser coûts, délais, qualité, risques, arbitrages (modules 06, 09)\n    Preuve : écarts, bascule A, pas de rattrapage fictif.               0 / 2 / 4\nC7 Analyses de marché, benchmarks, diagnostics (modules 01, 09)\n    Preuve : faits internes + concurrence fictive étiquetée, manques.  0 / 2 / 4\nC8 Supports destinés aux instances (modules 04, 08, 09)\n    Preuve : synthèse 1 page, dashboard, pas d'avis usurpé.             0 / 2 / 4\nC9 Mise en marché, déploiement, conduite du changement (modules 07, 09)\n    Preuve : go/no-go, formation, com, pilote avant national.           0 / 2 / 4\nC10 Cohérence Pdv / tarif / parcours / XP / déploiement (modules 07, 08, 09)\n    Preuve : promesse = 4 écrans tenus ; pas de claim hors avis.        0 / 2 / 4\n\nERREUR GRAVE (plafond 20/40, indépendamment du reste)\n- Lancer, publier ou former sur une offre sans avis des fonctions de contrôle.\n- Inventer une part de marché ou un avis ACPR.\n- Présenter l'attestation LOU comme un titre RNCP ou un diplôme d'État.\n\nPreuves de maîtrise attendues : le dossier lui-même, pas la consultation des leçons."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Remplir la grille tout seul à 40/40. Omettre C10 (promesse vs parcours réel). Traiter C5 comme « j'envoie des mails ». Mettre la conformité en « informé » au lieu de responsable de son avis."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Dossier A bien argumenté : peut scorer 32/40, meilleur qu'un B sans conditions. Dossier C avec due diligence, clause de sortie et calendrier juridique honnête : défendable. Dossier B sans freeze de backlog : C4 et C6 faibles."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Notez votre livrable Horizon avec la grille. Si vous avez recommandé B sans les trois conditions, retirez 8 points (C2, C6, C10). Si vous avez contourné la conformité, appliquez le plafond 20."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le corrigé modèle (B sous conditions) vise 36/40 : il calcule, il conditionne, il nomme le chemin critique, il refuse le lancement sans avis. Il perd éventuellement 4 points si la synthèse dépasse une page ou si le RACI oublie le réseau. Un 40/40 sans doute n'existe pas : il manquera toujours une donnée (charge IT exacte) — l'écrire est une preuve, pas une faiblesse."
            }
          ],
          "position": 1
        },
        {
          "title": "Examen final — Chef de projet marketing et développement",
          "description": "Huit connaissances, cinq raisonnements, deux situations complexes, un cas Horizon. Seuil 80 %. Tentatives illimitées. L'attestation n'est pas un titre RNCP ni un diplôme d'État.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Examen final — Chef de projet marketing et développement",
            "passing_score": 80,
            "max_attempts": null,
            "questions": [
              {
                "question": "[Connaissance] Business case, budget projet et business plan d'entreprise : quelle distinction est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Les trois mots désignent le même fichier, au choix du chef de projet.",
                  "B. Le business case justifie une décision (hypothèses, coûts, bénéfices, risques, scénarios, reco) ; le budget projet est l'enveloppe de dépenses du projet ; le business plan décrit l'entreprise. On ne les confond pas.",
                  "C. Le business case est un budget sur cinq ans signé par la conformité.",
                  "D. Le budget projet remplace le business case dès que le ROI dépasse 20 %."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Module 03. Un ROI, même pédagogique, ne dissout pas les documents. La conformité ne signe pas un BC à la place de la finance et du sponsor."
              },
              {
                "question": "[Connaissance] Cas pédagogique : investissement 120 k€, run 30 k€ / an, CA 90 k€ / an, 3 ans, hors fiscalité et hors actualisation. Quels résultats sont exacts ?",
                "question_type": "single_choice",
                "options": [
                  "A. Coûts 150 k€, CA 90 k€, bénéfice −60 k€, ROI négatif, payback impossible.",
                  "B. Coûts 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur coûts totaux, payback 2 ans de l'investissement (flux net annuel 60 k€ après run).",
                  "C. Coûts 120 k€ seulement, ROI 225 %, payback immédiat.",
                  "D. VAN obligatoire à 2 % : c'est la seule vérité financière du cours."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "120 + 3×30 = 210 ; 3×90 = 270 ; 60/210 ≈ 28,6 % ; 120/60 = 2 ans. La VAN n'est qu'une introduction à taux étiqueté hypothèse."
              },
              {
                "question": "[Connaissance] Une matrice RACI sert principalement à :",
                "question_type": "single_choice",
                "options": [
                  "A. Classer les risques par couleur.",
                  "B. Calculer le ROI.",
                  "C. Clarifier qui est responsable, qui approuve, qui est consulté, qui est informé — notamment pour ne pas laisser la conformité en simple « informé » sur un avis qui lui appartient.",
                  "D. Remplacer le comité de décision."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Module 05. RACI = rôles. L'avis de contrôle n'est pas une information en pied de mail."
              },
              {
                "question": "[Connaissance] Un jalon de projet est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une date politique que l'on inscrit pour rassurer le COMEX, même sans livrable.",
                  "B. Un événement vérifiable (livrable, décision, avis, go/no-go) qui permet de savoir si le chemin tient.",
                  "C. Un KPI de vanité (likes, trafic brut).",
                  "D. La signature du chef de projet sur un avis ACPR."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un jalon sans critère de done n'est pas un jalon. Le chef de projet n'est pas l'autorité de contrôle."
              },
              {
                "question": "[Connaissance] Sur un projet d'offre bancaire, le chef de projet marketing et développement :",
                "question_type": "single_choice",
                "options": [
                  "A. Valide lui-même la conformité pour gagner deux semaines.",
                  "B. Remplace l'ACPR lorsque le délai est court.",
                  "C. Coordonne, prépare les saisines, intègre les avis, et n'écrit pas l'avis des fonctions de contrôle.",
                  "D. Peut ignorer le juridique si le ROI du scénario C est le plus élevé."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Limite d'autonomie, rappelée dans tout le parcours. Contourner un avis est une erreur grave."
              },
              {
                "question": "[Connaissance] Un KPI de projet se distingue d'un indicateur de vanité parce que :",
                "question_type": "single_choice",
                "options": [
                  "A. Il est lié à un objectif du cadrage, a une formule, un propriétaire, une cible, et change une décision.",
                  "B. Il est toujours un NPS de marché national.",
                  "C. Il agrège le CA de toute l'entreprise, plus visible en comité.",
                  "D. Il se choisit le matin du comité selon les courbes les plus vertes."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Module 08. Trafic, likes, CA groupe et NPS inventé ne pilotent pas Horizon."
              },
              {
                "question": "[Connaissance] Le sponsor d'un projet :",
                "question_type": "single_choice",
                "options": [
                  "A. Est le chef de projet sous un autre nom.",
                  "B. Porte la décision et l'arbitrage de ressources ; le chef de projet prépare et coordonne.",
                  "C. Valide les avis de conformité à la place de la fonction.",
                  "D. N'existe que dans les projets digitaux."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Module 00 / 05. Confondre sponsor et CP, ou sponsor et conformité, casse la gouvernance."
              },
              {
                "question": "[Connaissance] Double comptabilisation dans un business case, exemple exact :",
                "question_type": "single_choice",
                "options": [
                  "A. Distinguer bénéfices financiers et non financiers.",
                  "B. Additionner au CA incrémental du scénario le CA déjà réalisé par l'offre actuelle, ou compter deux fois le même gain de parcours.",
                  "C. Étiqueter une VAN à 8 % comme hypothèse.",
                  "D. Séparer investissement et run."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Module 03. A, C et D sont de bonnes pratiques, pas du double comptage."
              },
              {
                "question": "[Raisonnement] Deux scénarios ont un ROI voisin. Quelle conduite est la plus solide ?",
                "question_type": "single_choice",
                "options": [
                  "A. Choisir au hasard : le ROI a déjà tranché.",
                  "B. Choisir automatiquement le plus rapide.",
                  "C. Trancher sur délai, faisabilité, risques (dont conformité et dépendance), impact client et alignement — et documenter dans quel cas on changerait.",
                  "D. Lancer les deux en parallèle sans enveloppe."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le ROI n'est pas un vote unique. C'est le cœur de Q6 d'entretien et du cas Horizon (B vs C)."
              },
              {
                "question": "[Raisonnement] Les données manquent pour un business case complet. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous remplissez les trous par des hypothèses non étiquetées « pour avancer ».",
                  "B. Vous listez les manques, vous posez des hypothèses étiquetées, vous proposez le recueil minimum, et vous refusez une reco définitive si l'incertitude est bloquante.",
                  "C. Vous lancez sans BC : le marché dira vrai.",
                  "D. Vous copiez le ROI pédagogique 28,6 % du cas 120/30/90, « c'est toujours ça »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Situation 4. Recopier 28,6 % n'a aucun lien avec Horizon. Lancer sans BC n'est pas un test de marché, c'est une fuite."
              },
              {
                "question": "[Raisonnement] L'IT annonce un retard qui fait basculer B de 6 à 9 mois. Quelle reco tenez-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Maintenir la date politique et « rattraper » sans levier.",
                  "B. Cacher le retard jusqu'au comité de lancement.",
                  "C. Recalculer : réduire le MVP, décaler, basculer vers A, ou arrêter — et faire trancher le sponsor. Ne pas lancer la pub nationale à la date fantôme.",
                  "D. Passer à C le jour même, sans due diligence, pour sauver les six mois."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Situations 5 et 6. C en urgence sans due diligence est une fuite vers un autre risque grave."
              },
              {
                "question": "[Raisonnement] Sur Horizon, C affiche ≈ 90 % de ROI et B 59,5 %. Pourquoi le corrigé peut-il néanmoins recommander B ?",
                "question_type": "single_choice",
                "options": [
                  "A. Parce que le ROI le plus faible est toujours plus prudent, par principe.",
                  "B. Parce que B combine attaque du parcours (fait solide), contrôle interne des avis, enveloppe 380 k€ et MVP à 6 mois ; C dépend d'un tiers et d'avis sur ce tiers — le ROI ne suffit pas.",
                  "C. Parce que C est interdit dans une banque.",
                  "D. Parce que la VAN pédagogique à 8 % est une vérité unique qui favorise B."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "A n'est pas un principe. C n'est pas interdit. La VAN à 8 % favorise plutôt C et n'est qu'une hypothèse. B est conditionnel."
              },
              {
                "question": "[Raisonnement] Après validation, les coûts augmentent. Conduite professionnelle :",
                "question_type": "single_choice",
                "options": [
                  "A. Absorber en silence et garder le ROI du dossier voté.",
                  "B. Figer l'écart, en nommer la cause, proposer réduire / décaler / financer / arrêter, et ne pas contourner une exigence de contrôle même si elle coûte.",
                  "C. Annoncer que le comité « n'aime pas les mauvaises nouvelles », donc on lance.",
                  "D. Transférer l'écart sur une autre ligne budgétaire sans le dire à la finance."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Q15 d'entretien, situations 11-12. Silence et maquillage sont des fautes. Un coût de conformité n'est pas une « mauvaise surprise » à contourner."
              },
              {
                "question": "[Situation complexe] La conformité bloque une fonctionnalité du parcours (KYC allégé). Le sponsor veut « lancer quand même, on régularisera ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Lancer : le sponsor décide, vous exécutez, l'avis suivra.",
                  "B. Recadrer le périmètre, geler la publicité et le claim, escalader par écrit, et refuser de présenter un go national sans avis — le chef de projet n'est pas le valideur, il n'est pas non plus l'exécutant d'un contournement.",
                  "C. Rédiger vous-même un « avis conformité » d'une page pour débloquer.",
                  "D. Basculer la fonctionnalité en partenariat NéoPulse pour sortir du périmètre interne."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Erreur grave = A, C, D. Situation 7. Un partenariat ne lave pas un KYC. Un avis forgé par le CP est une usurpation."
              },
              {
                "question": "[Situation complexe] Le parcours est techniquement prêt. Les équipes commerciales n'ont pas été formées. Le comité de lancement est demain. Quelle décision préparez-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Go national : la technique suffit, le réseau « apprendra sur le tas ».",
                  "B. No-go national, go limité au digital déjà testé si les conditions de contrôle sont tenues, plan de formation daté, nouveau go réseau — un lancement « prêt IT » sans capacité commerciale n'est pas un lancement.",
                  "C. Doubler la publicité TV pour compenser l'absence de scripts.",
                  "D. Demander au juridique de former le réseau pendant le comité."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Situation 19, compétence 9. La pub nationale sans formation aggrave réclamations et claims. Le juridique n'est pas un organisme de formation réseau."
              },
              {
                "question": "[Cas Horizon] Diagnostic : quels faits sont les plus solides pour décider, parmi les données fictives du dossier ?",
                "question_type": "single_choice",
                "options": [
                  "A. La part de marché réelle de NéoPulse, que l'on peut extraire du CAC 110 €.",
                  "B. La baisse des souscriptions (−25 %), la conversion 18 %, le CAC 185 €, le parcours à 9 écrans — et le manque d'avis / de charge IT, à ne pas inventer.",
                  "C. Le NPS de marché national des néobanques, vérité unique du secteur.",
                  "D. Le slogan « il faut innover », suffisant pour choisir C."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les parts de marché et NPS nationaux ne sont pas dans le dossier. Le CAC 110 € de NéoPulse est une rumeur interne non vérifiée. Le diagnostic se tient sur les faits Horizon."
              },
              {
                "question": "[Cas Horizon] Quelle recommandation est alignée sur le corrigé modèle, sachant que plusieurs scénarios restent défendables ?",
                "question_type": "single_choice",
                "options": [
                  "A. C uniquement, parce que ROI ≈ 90 % et VAN pédagogique plus haute.",
                  "B. B MVP sous trois conditions (avis de contrôle avant pub, réalisme 6 mois sans 15 partenaires, budget 380 k€) ; A comme plan B si l'IT dépasse ; C seulement après due diligence — jamais un lancement sans avis.",
                  "C. A uniquement, parce qu'un ROI de 25 % est « plus honnête ».",
                  "D. Lancer B et C ensemble dès le mois 1, pour « maximiser l'apprentissage »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le corrigé ne déclare pas A ou C illégitimes. Il refuse le ROI comme vote unique, le double lancement hors enveloppe, et tout go sans avis."
              },
              {
                "question": "[Cas Horizon] Le pack comité propose d'annoncer « Horizon Start, 4 écrans, souscription 10 minutes » alors que l'avis conformité n'est pas rendu. C'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne pratique de tension constructive sur la conformité.",
                  "B. Une erreur grave : claim public et lancement (même en communication) sans avis des fonctions de contrôle. On gèle, on recadre, on n'annonce pas.",
                  "C. Acceptable si le ROI de B reste 59,5 %.",
                  "D. Acceptable en interne seulement, les salariés n'étant pas des clients."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Erreur grave de conformité. Le ROI ne lave pas un claim. Une annonce interne non maîtrisée fuit. Compétence 10 : cohérence promesse / parcours / contrôle."
              },
              {
                "question": "[Cas Horizon] Dans la synthèse exécutive, la décision attendue du comité doit surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. Raconter la campagne créative sur trois pages.",
                  "B. Demander explicitement de valider B sous conditions (enveloppe, freeze, saisine conformité) ou de basculer vers A — pas un « pour information ».",
                  "C. Confier au chef de projet la rédaction de l'avis ACPR.",
                  "D. Fixer une part de marché cible à 12 %, chiffre non sourcé."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un comité sans décision demandée n'est pas un comité. Inventer 12 % de part de marché ou usurper l'ACPR sont des fautes. La campagne n'est pas le dossier d'arbitrage."
              }
            ]
          },
          "position": 2
        },
        {
          "title": "Bibliothèque facultative — 20 situations",
          "description": "Vingt situations professionnelles : contexte, problème, options, conduite, justification, risques, erreurs. Hors quota des 5 heures.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 0,
          "is_required": false,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Hors parcours obligatoire, vous vous entraînez sur vingt situations du métier. Chaque fiche pose un contexte, un problème, une question, des options, une conduite, une justification, des risques et des erreurs. Celles déjà travaillées dans les modules 00 à 08 sont rappelées avec un renvoi ; elles restent utilisables comme révision."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une situation professionnelle n'a pas toujours une unique bonne réponse chiffrée. Elle a une conduite défendable : faits, mandat, fonctions de contrôle, escalade, écrit. Les distracteurs séduisants sont toujours les mêmes : plaire au sponsor, sauver la date, contourner un avis, maquiller un écart, choisir le ROI le plus élevé sans le reste."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez, choisissez, comparez. Qualifiez : bonne pratique, politique interne, exigence d'une fonction de contrôle, limite d'autonomie du chef de projet. Aucune de ces fiches ne remplace un avis réel de conformité ou de juridique."
            },
            {
              "block_type": "callout",
              "content": "Ressource facultative (is_required : false, 0 minute). Elle ne compte pas dans les 300 minutes. L'examen du module 10 s'appuie toutefois sur les mêmes réflexes."
            },
            {
              "block_type": "heading",
              "content": "S01 — Lancer une offre sans étude de marché"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 01 — marché et opportunités."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nBanque Horizon. Le directeur marketing veut « une offre jeunes dès le trimestre », sans diagnostic ni benchmark. Il a vu une néobanque fictive en conférence.\n\nPROBLÈME\n\nDécision de lancer sans faits internes (volumes, conversion, CAC) ni recueil minimum.\n\nQUESTION\nQue faites-vous avant tout brief agence ?\n\nA. Lancer le brief créatif, l'étude suivra.\nB. Refuser tout lancement, et quitter la réunion.\nC. Poser un diagnostic minimum (faits internes, manques, 3 hypothèses), et refuser de transformer l'idée en promesse publique tant que ce socle n'existe pas.\nD. Copier l'offre vue en conférence, c'est un benchmark."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nC.\n\nJUSTIFICATION\n\nUne étude n'a pas à être un traité. Elle a à exister. Copier un concurrent fictif n'est pas un benchmark.\n\nRISQUES\n\nOffre hors besoin, claims infondés, budget brûlé, rebuffade conformité plus tard.\n\nERREURS À ÉVITER\n\nPlaire. Inventer une part de marché. Confondre conférence et dossier."
            },
            {
              "block_type": "heading",
              "content": "S02 — Le budget demandé dépasse l'enveloppe"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 03 et 04 — business case et décision."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nB est chiffré à 520 k€. Enveloppe votée : 400 k€. Le digital veut « demander 120 k€ de plus, le COMEX comprendra ».\n\nPROBLÈME\n\nÉcart d'investissement avant même le build.\n\nQUESTION\nQuelle reco portez-vous au sponsor ?\n\nA. Demander 120 k€ sans recalculer le périmètre.\nB. Recouper le chiffrage, proposer un MVP dans l'enveloppe ou une bascule A, et ne pas promettre B intégral à 400 k€.\nC. Lancer à 400 k€ en taisant le reste, avenant plus tard.\nD. Couper la ligne conformité pour rentrer dans l'enveloppe."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nUn avenant caché n'est pas un budget. Couper la conformité est une erreur grave.\n\nRISQUES\n\nDérive, arrêt en cours, offre inaboutie, incident de contrôle.\n\nERREURS À ÉVITER\n\nTaire l'écart. Couper les lignes de contrôle. Promettre le scope plein."
            },
            {
              "block_type": "heading",
              "content": "S03 — Deux scénarios au ROI similaire"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 03."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nUne ETI de services (hors banque) : scénario « nouveau pack » ROI 31 %, scénario « amélioration parcours » ROI 29 %. Risques et délais très différents.\n\nPROBLÈME\n\nLe sponsor veut « le plus rentable, c'est simple ».\n\nQUESTION\nQue répondez-vous ?\n\nA. 31 % gagne.\nB. Grille complète (délai, faisabilité, risques, client, alignement) et reco argumentée, éventuellement contre le ROI max.\nC. Moyenne des deux scénarios.\nD. Lancer les deux sans arbitrage."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nLe ROI n'est pas un vote. C'est le cœur du module 03 et de Q6.\n\nRISQUES\n\nMauvais projet « rentable », saturation des équipes, incohérence client.\n\nERREURS À ÉVITER\n\nROI unique. Double lancement hors capacité."
            },
            {
              "block_type": "heading",
              "content": "S04 — Données insuffisantes pour le business case"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 03."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAssurance fictive « Ciel Couvert ». On ignore le taux de mise en vigueur et le coût IT. On vous demande un ROI « pour mercredi ».\n\nPROBLÈME\n\nPression de chiffre unique.\n\nQUESTION\nConduite ?\n\nA. Poser 40 % de mise en vigueur « comme d'habitude » sans étiquette.\nB. Recopier 28,6 % du cas pédagogique 120/30/90.\nC. Livrer un BC à hypothèses étiquetées, fourchettes, et reco non définitive si un paramètre est bloquant.\nD. Refuser tout document."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nC.\n\nJUSTIFICATION\n\nUn BC honnête bat un faux ROI. Le 28,6 % n'a aucun lien avec Ciel Couvert.\n\nRISQUES\n\nDécision sur un nombre creux. Perte de crédit finance.\n\nERREURS À ÉVITER\n\nHypothèses invisibles. Recopie pédagogique."
            },
            {
              "block_type": "heading",
              "content": "S05 — Le sponsor demande un lancement irréaliste"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 04 et 07."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nHorizon : « national dans six semaines, 15 partenaires, TV ». IT et conformité disent non.\n\nPROBLÈME\n\nDate politique vs chemin critique.\n\nQUESTION\nQue faites-vous ?\n\nA. Dire oui, rattraper ensuite.\nB. Écrire l'écart, proposer un MVP tenable ou un report, faire signer le risque si le sponsor maintient — et ne pas lancer la TV.\nC. Contourner la conformité « le temps du lancement ».\nD. Démissionner du projet sans écrit."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nL'écrit protège l'entreprise. Contourner un avis est une erreur grave. Partir sans laisser de trace n'aide personne.\n\nRISQUES\n\nClaims, incident, réseau pris au dépourvu, budget brûlé.\n\nERREURS À ÉVITER\n\nOui pour plaire. Silence. Contournement."
            },
            {
              "block_type": "heading",
              "content": "S06 — L'IT annonce un retard"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 05 et 06."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nJalons M2. L'IT glisse de six semaines. Le marketing a déjà réservé un espace pub.\n\nPROBLÈME\n\nDépendance critique.\n\nQUESTION\nConduite ?\n\nA. Maintenir la pub, « ça mettra la pression à l'IT ».\nB. Recaler pub et jalon, chiffrer les leviers (scope, délai, moyens), faire arbitrer.\nC. Cacher le retard au sponsor jusqu'à la veille.\nD. Outsourcer le cœur de parcours à NéoPulse dans la semaine, sans due diligence."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nLa pub n'est pas un levier de build. Le partenaire express recrée un risque de contrôle.\n\nRISQUES\n\nClaim orphelin, coût d'espace, incident KYC si C express.\n\nERREURS À ÉVITER\n\nPression magique. Silence. Fuite vers un tiers."
            },
            {
              "block_type": "heading",
              "content": "S07 — La conformité bloque une fonctionnalité"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 06 et 07 — erreur grave d'examen."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLe KYC allégé à 2 pièces est refusé. Le parcours « 4 écrans » du claim ne tient plus.\n\nPROBLÈME\n\nAvis vs promesse marketing.\n\nQUESTION\nConduite ?\n\nA. Lancer le claim, régulariser plus tard.\nB. Recadrer le parcours et le claim, geler la pub, conserver un go seulement sur le périmètre avisable.\nC. Rédiger un avis à la place de la conformité.\nD. Demander au réseau de « ne pas trop demander de pièces »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nErreur grave = A, C, D. Le CP intègre l'avis, il ne le forge pas, il ne le dilue pas en agence.\n\nRISQUES\n\nSanction, réclamations, perte de confiance interne.\n\nERREURS À ÉVITER\n\nContourner. Usurper. Consigne orale au réseau."
            },
            {
              "block_type": "heading",
              "content": "S08 — Le juridique demande une modification"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 07."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nLes CG de l'offre Start doivent changer une phrase de cashback. Les créas sont déjà en relecture « finale ».\n\nPROBLÈME\n\nDépendance juridique tardive, fréquente.\n\nQUESTION\nConduite ?\n\nA. Ignorer : ce n'est « qu'une phrase ».\nB. Intégrer la modification, recaler les créas, ne pas publier l'ancienne version.\nC. Publier puis corriger en ligne « si quelqu'un lit les CG ».\nD. Négocier avec le juridique un délai après la TV."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nUne phrase de CG n'est pas un détail créatif. Publier l'ancienne version est un claim.\n\nRISQUES\n\nPublicité trompeuse, rappel de créas, coût.\n\nERREURS À ÉVITER\n\nMinimiser. Publier d'abord."
            },
            {
              "block_type": "heading",
              "content": "S09 — Le réseau refuse le déploiement"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 07."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\n12 directeurs d'agence pilotes : « encore une offre, pas le temps ». L'activation 30 j est déjà un KPI.\n\nPROBLÈME\n\nAdoption interne, pas seulement client.\n\nQUESTION\nConduite ?\n\nA. Forcer le national pour « créer l'usage ».\nB. Comprendre la charge, ajuster le rituel (20 min, script, propriétaire), conditionner le go national à un seuil de formation / activation.\nC. Remplacer le réseau par de la pub uniquement.\nD. Abandonner le projet sans REX."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nCompétence 9. Un outil non adopté n'est pas déployé. La pub ne forme pas un conseiller.\n\nRISQUES\n\nActivation basse, réclamations, CAC gaspillé.\n\nERREURS À ÉVITER\n\nPassage en force. Abandon silencieux."
            },
            {
              "block_type": "heading",
              "content": "S10 — Le partenaire ne respecte pas ses engagements"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 06."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nNéoPulse (fictif) livrera l'API « le mois prochain » pour la troisième fois. Aucune clause de pénalité activée.\n\nPROBLÈME\n\nDépendance externe.\n\nQUESTION\nConduite ?\n\nA. Attendre encore, le comité n'aime pas les conflits.\nB. Constat écrit, clause, plan B interne (B MVP sans le partenaire), information sponsor et juridique.\nC. Menacer publiquement sur LinkedIn.\nD. Payer un avenant immédiat sans recadrage de livrable."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nLe partenaire n'est pas un membre de l'équipe. L'écrit et le plan B, pas le post public.\n\nRISQUES\n\nDate, données, marque, coût d'avenant vain.\n\nERREURS À ÉVITER\n\nSilence. Avenant sans livrable. Communication publique."
            },
            {
              "block_type": "heading",
              "content": "S11 — Le projet dépasse son budget"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 06 et 08."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nRéalisé 430 k€ vs 380 k€. Cause mixte : 2 partenaires ajoutés + jours IT.\n\nPROBLÈME\n\nÉcart post-lancement pilote.\n\nQUESTION\nConduite ?\n\nA. Taire jusqu'à la clôture annuelle.\nB. Figer, expliquer, proposer freeze partenaires + stop spend + reco A/B révisée, finance en séance.\nC. Garder le ROI 59,5 % du dossier voté.\nD. Demander au marketing de « trouver » 50 k€ sur une autre campagne, sans trace."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nQ15. Le ROI voté est mort si les coûts ont changé. Transfert occulte = faute.\n\nRISQUES\n\nArrêt tardif, perte de crédit, audit interne.\n\nERREURS À ÉVITER\n\nSilence. ROI fantôme. Vases communicants."
            },
            {
              "block_type": "heading",
              "content": "S12 — Les coûts augmentent après validation"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Erreur grave d'examen."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nAvis conformité : pièces supplémentaires = +40 k€ IT. Le dossier voté ne les avait pas.\n\nPROBLÈME\n\nCoût de sécurisation tardif.\n\nQUESTION\nConduite ?\n\nA. Contester l'avis pour sauver le budget.\nB. Intégrer le coût, réviser le BC, arbitrer MVP vs report vs A — ne pas contourner l'avis.\nC. Lancer sans les pièces, « on verra les réclamations ».\nD. Imputer les 40 k€ au run marketing pour ne pas toucher l'investissement."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nUn avis n'est pas une option d'optimisation. C est une erreur grave.\n\nRISQUES\n\nIncident KYC, rappel d'offre, ROI mensonger.\n\nERREURS À ÉVITER\n\nContester pour budget. Lancer sans pièces. Reclassement cosmétique."
            },
            {
              "block_type": "heading",
              "content": "S13 — Pas d'accord sur les priorités"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 05 et 06."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nDigital veut le parcours. Réseau veut un outil d'entretien. Finance veut le dashboard. Tout « pour le même comité ».\n\nPROBLÈME\n\nBacklog politique.\n\nQUESTION\nConduite ?\n\nA. Faire les trois au rabais.\nB. Revenir au cadrage, faire trancher le sponsor sur 1 priorité de chemin critique, documenter les reports.\nC. Laisser chaque direction faire sa route.\nD. Prioriser ce qui est le plus visible en COMEX (le dashboard), même si le parcours casse."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nSans arbitrage, tout le monde est en retard. Le dashboard ne répare pas 9 écrans.\n\nRISQUES\n\nÉparpillement, qualité, date.\n\nERREURS À ÉVITER\n\nRabais généralisé. Routes parallèles. Visible ≠ critique."
            },
            {
              "block_type": "heading",
              "content": "S14 — Le comité refuse la recommandation"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 04."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nVous recommandiez B. Le comité vote A. On vous demande de « défendre B quand même auprès du réseau ».\n\nPROBLÈME\n\nDécision vs conviction.\n\nQUESTION\nConduite ?\n\nA. Saboter A pour prouver que B avait raison.\nB. Exécuter A, tracer les critères de réouverture de B, aligner le discours réseau sur A.\nC. Relancer un comité pirate avec le digital.\nD. Annoncer B au réseau « ils comprendront plus tard »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nVous recommandez, vous ne décidez pas. Un double discours réseau est un claim interne.\n\nRISQUES\n\nConfusion commerciale, perte de sponsor, incident de com.\n\nERREURS À ÉVITER\n\nSabotage. Comité parallèle. Annonce non votée."
            },
            {
              "block_type": "heading",
              "content": "S15 — La direction change les objectifs"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 02 et 07."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nEn M3, nouvel objectif : « aussi le crédit conso 25-35 ». Le MVP Start n'y est pas.\n\nPROBLÈME\n\nChangement de cadrage en cours.\n\nQUESTION\nConduite ?\n\nA. Ajouter le crédit dans le sprint, six mois inchangés.\nB. Re-cadrer par écrit : nouveau périmètre, nouveau BC, nouveau délai, nouveau circuit d'avis — le crédit n'entre pas en silence.\nC. Promettre le crédit « en communication », le livrer plus tard.\nD. Ignorer la direction."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nUn nouvel objectif est un nouveau projet ou un avenant. Un claim crédit sans produit est une erreur grave de cohérence (C10).\n\nRISQUES\n\nSurcharge, avis crédit non saisi, publicité trompeuse.\n\nERREURS À ÉVITER\n\nAjout silencieux. Claim orphelin."
            },
            {
              "block_type": "heading",
              "content": "S16 — Pilote sous les attentes"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 07 et 08."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nConversion pilote 19 % vs 24 %. Activation 52 % vs 55 % (seuil no-go 55 %). Sponsor : « on généralise, les volumes arrangeront les % ».\n\nPROBLÈME\n\nGo/no-go sous pression.\n\nQUESTION\nConduite ?\n\nA. Généraliser : la loi des grands nombres.\nB. No-go national, REX, correctifs, second pilote ou cible revue votée — les volumes n'arrangent pas un parcours percé.\nC. Changer la cible à 19 % le matin du comité.\nD. Couper le pilote agence et ne garder que le digital pour « embellir »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nMaquiller le seuil n'est pas du pilotage. Un % ne se dilue pas par magie.\n\nRISQUES\n\nCAC national gaspillé, réseau décrédibilisé.\n\nERREURS À ÉVITER\n\nGénéralisation magique. Cible reculée en silence. Biais d'échantillon."
            },
            {
              "block_type": "heading",
              "content": "S17 — Les utilisateurs n'adoptent pas l'outil"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Modules 07 et 08."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nOutil d'aide à la vente déployé en réseau d'une enseigne de distribution fictive. 18 % d'utilisateurs hebdo vs 60 % cible.\n\nPROBLÈME\n\nAdoption, pas livraison technique.\n\nQUESTION\nConduite ?\n\nA. Fermer le projet, « ils ne veulent pas changer ».\nB. Diagnostiquer friction (temps, double saisie, management), former, simplifier, relier à un rituel managérial, mesurer à nouveau.\nC. Rendre l'outil obligatoire sans rien changer au design.\nD. Ajouter des KPI de vanité (connexions unique le jour de la formation)."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nL'adoption se conçoit. L'obligation brute sans design crée du shadow Excel.\n\nRISQUES\n\nOmbre, qualité de donnée, CA non vu.\n\nERREURS À ÉVITER\n\nFatalisme. Obligation sèche. Vanité."
            },
            {
              "block_type": "heading",
              "content": "S18 — Ventes inférieures aux prévisions"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 08."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nM3 post-lancement Horizon Start : 1 100 souscriptions vs 1 400. CAC 168 € vs 150 €. Conversion 22 % vs 28 %.\n\nPROBLÈME\n\nÉcart commercial à expliquer.\n\nQUESTION\nConduite ?\n\nA. Plus de paid social immédiatement.\nB. Décomposer : parcours vs mix vs offre vs saison vs claim. Agir d'abord sur la cause (souvent conversion), pas sur le budget d'acquisition.\nC. Déclarer le succès : 1 100 c'est « déjà bien ».\nD. Recolorer la prévision à 1 100."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nModule 08. Alimenter un entonnoir percé aggrave le CAC. Recolorer n'est pas un REX.\n\nRISQUES\n\nBudget brûlé, BC discrédité.\n\nERREURS À ÉVITER\n\nPub d'abord. Succès proclamé. Cible reculée."
            },
            {
              "block_type": "heading",
              "content": "S19 — Prêt techniquement, réseau non formé"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 07 — examen."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nIT : go. Formation : 30 % des conseillers. Pub nationale réservée J+3.\n\nPROBLÈME\n\nFausse readiness.\n\nQUESTION\nConduite ?\n\nA. Go national.\nB. Reporter la pub nationale, go borné si les avis le permettent, former, nouveau jalon réseau.\nC. Envoyer un PDF et considérer la formation faite.\nD. Demander à la conformité d'animer les sessions pour « faire d'une pierre deux coups »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nSituation d'examen. Un PDF n'est pas une formation. La conformité n'est pas un organisme de formation commerciale.\n\nRISQUES\n\nRéclamations, claims, activation basse.\n\nERREURS À ÉVITER\n\nGo magique. PDF. Mauvaise RACI."
            },
            {
              "block_type": "heading",
              "content": "S20 — Risque majeur quelques jours avant le lancement"
            },
            {
              "block_type": "callout",
              "content": "Renvoi : Module 06 — erreur grave si l'on lance."
            },
            {
              "block_type": "text",
              "content": "CONTEXTE\n\nJ−4. Fuite potentielle de données de test clients fictifs chez un prestataire de parcours. La DSI et le juriste sont saisis. Le sponsor veut « ne pas rater la date COMEX ».\n\nPROBLÈME\n\nIncident vs date.\n\nQUESTION\nConduite ?\n\nA. Lancer : ce ne sont que des données de test.\nB. Stop lancement, circuit incident (DSI, juridique, risques, sponsor), communication factuelle interne, nouvelle date après confinement — la date COMEX n'est pas un argument de sécurité.\nC. Minimiser dans le reporting (« risque faible, on surveille »).\nD. Reporter seulement la pub, garder le parcours ouvert « pour les clients déjà dans l'entonnoir »."
            },
            {
              "block_type": "callout",
              "content": "CONDUITE RECOMMANDÉE\n\nB.\n\nJUSTIFICATION\n\nMême pédagogiques, les données de test peuvent être personnelles. Minimiser un incident est une faute. Un entonnoir ouvert n'est pas plus sûr.\n\nRISQUES\n\nIncident, confiance, régulateur, date sauvée pour une semaine perdue ensuite.\n\nERREURS À ÉVITER\n\nLancer malgré tout. Reporting cosmétique. Demi-mesure."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Traiter ces vingt fiches comme des QCM à tricher. Plaire. Sauver la date. Forger un avis. Recolorer une cible. Choisir le ROI max. Publier un claim orphelin."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Hors banque : les mêmes schémas (retard IT, adoption, budget, comité) tiennent en assurance, distribution, B2B. Seuls changent les vocabulaire (mise en vigueur, contrat, rayon) et les fonctions de contrôle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Choisissez S07, S12, S19 et S20. Écrivez en une ligne la conduite et le nom de l'erreur grave évitée. Comparez aux fiches."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "S07 et S12 : ne pas contourner un avis, même pour le budget. S19 : pas de go national sans formation. S20 : la date COMEX ne pèse pas contre un incident. Si vous avez lancé « quand même » une seule fois, relisez les consignes d'examen : c'est le distracteur récurrent."
            }
          ],
          "position": 3
        },
        {
          "title": "Bibliothèque facultative — 25 modèles",
          "description": "Vingt-cinq documents copiables : diagnostic, benchmark, SWOT, opportunité, cadrage, parties prenantes, BC, scénarios, ROI, risques, dossiers, RACI, roadmap, reporting, déploiement, go/no-go, bilan, REX. Exemples Horizon. Hors quota des 5 heures.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 0,
          "is_required": false,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous disposez de vingt-cinq modèles utilisables en entreprise. Chaque fiche indique l'objectif, le moment, les champs, les consignes, et un exemple Horizon (fictif, court). Ce ne sont pas des fichiers vides. Adaptez les libellés à votre politique interne ; n'inventez pas de parts de marché."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un modèle n'est pas une preuve de maîtrise. La preuve, c'est le modèle rempli avec des faits, des hypothèses étiquetées, un propriétaire, une date. Le chef de projet n'y écrit pas un avis de conformité. Les exemples Horizon sont pédagogiques."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Copiez le bloc code. Remplissez. Faites relire le chiffre par son propriétaire. Archivez la version et la date. Un modèle non daté n'est pas un livrable de comité."
            },
            {
              "block_type": "callout",
              "content": "Ressource facultative (0 minute, non requise). Hors 300 minutes. Formats : texte copiable (le LMS n'impose pas de téléchargement)."
            },
            {
              "block_type": "heading",
              "content": "Modèle 1 — Diagnostic marketing"
            },
            {
              "block_type": "text",
              "content": "Objectif. Photographier problèmes, opportunités, manques, avant toute idée d'offre.\n\nQuand l'utiliser. Module 01, entrée d'un projet, avant le BC.\n\nInformations à renseigner. Faits internes, client, concurrence (étiquetée), capacités, manques, problématique.\n\nConsignes d'utilisation. Pas de part de marché inventée. Séparer fait / hypothèse / manque."
            },
            {
              "block_type": "code",
              "content": "DIAGNOSTIC — Banque Horizon 25-35 — [date]\nFAITS : souscriptions 8 400 (−25 %) ; conversion 18 % ; CAC 185 € ; 9 écrans.\nCLIENT : friction justificatifs (pic d'abandon). Satisfaction 6,4/10 (enquête interne).\nCONCURRENCE (fictive) : NéoPulse 4 écrans ; Lumen cashback — PAS des parts de marché.\nCAPACITÉS : réseau présent ; IT sans recrutement cette année.\nMANQUES : charge IT j/h ; avis conformité ; détail d'abandon par étape.\nPROBLÉMATIQUE : comment remonter souscriptions et baisser le CAC sans promettre un parcours que le contrôle ne permet pas ?"
            },
            {
              "block_type": "heading",
              "content": "Modèle 2 — Grille de benchmark concurrentiel"
            },
            {
              "block_type": "text",
              "content": "Objectif. Comparer sur des critères observables, à une date.\n\nQuand l'utiliser. Étude d'opportunité, revue d'offre.\n\nInformations à renseigner. Critères, périmètre, sources, date, écarts à combler ou à assumer.\n\nConsignes d'utilisation. Faits publics ou internes. Hypothèses marquées. Pas de rumeur de CAC concurrent présentée comme un fait."
            },
            {
              "block_type": "code",
              "content": "BENCHMARK (FICTIF) — date [ ]\nCritère              Horizon actuel    NéoPulse (fictif)    Lumen (fictif)\nÉtapes souscription  9                 4                    n.d.\nPièces               6                 n.d.                 n.d.\nDélai annoncé        n.d.              n.d.                 48 h (claim public fictif)\nCAC                  185 € (interne)   110 € (rumeur interne, NON VÉRIFIÉE)\nÉCART À TRAITER : nombre d'étapes. ÉCART À NE PAS COPIER : rumeur de CAC."
            },
            {
              "block_type": "heading",
              "content": "Modèle 3 — Analyse SWOT"
            },
            {
              "block_type": "text",
              "content": "Objectif. Structurer forces, faiblesses, opportunités, menaces pour un comité court.\n\nQuand l'utiliser. Diagnostic, pack d'arbitrage.\n\nInformations à renseigner. 4 cases, faits sourcés, pas de slogan.\n\nConsignes d'utilisation. Une faiblesse interne n'est pas une menace. Une rumeur n'est pas une opportunité."
            },
            {
              "block_type": "code",
              "content": "SWOT — Horizon 25-35\nS Réseau + marque banque (fictive)    W Parcours 9 écrans, CAC 185 €, −25 %\nO Simplifier KYC sous avis            T Néobanques fictives, date 6 mois, IT tendue\nUsage : ouverture de comité, pas un substitut au BC."
            },
            {
              "block_type": "heading",
              "content": "Modèle 4 — Fiche d'étude d'opportunité"
            },
            {
              "block_type": "text",
              "content": "Objectif. Décider si l'idée mérite un BC.\n\nQuand l'utiliser. Sortie de diagnostic, avant cadrage lourd.\n\nInformations à renseigner. Problème, cible, option, effort, risques, go étude / stop.\n\nConsignes d'utilisation. Stop est une décision honorable. « Go pub » n'est pas une opportunité."
            },
            {
              "block_type": "code",
              "content": "OPPORTUNITÉ — Horizon Start\nProblème : conversion 18 %, CAC 185 €.\nOption : MVP compte+carte+4 écrans.\nEffort : 380 k€ / 6 mois (hyp. B).\nRisque clé : avis conformité.\nDécision demandée : autoriser le BC détaillé B vs A vs C."
            },
            {
              "block_type": "heading",
              "content": "Modèle 5 — Note de cadrage"
            },
            {
              "block_type": "text",
              "content": "Objectif. Figer objectifs, périmètre, acteurs, livrables, contraintes.\n\nQuand l'utiliser. Après go étude, avant build.\n\nInformations à renseigner. Contexte, problématique, objectifs, bénéfices, périmètre in/out, livrables, parties prenantes, contraintes, risques initiaux, budget, calendrier, critères de réussite.\n\nConsignes d'utilisation. Tout ajout ultérieur = avenant. Le crédit conso n'entre pas en silence."
            },
            {
              "block_type": "code",
              "content": "CADRAGE — Horizon Start MVP — v1 — [date]\nObjectifs : conversion 28 % à 12 mois ; CAC ≤ 150 € ; +2 800 souscriptions an 1 (si B).\nIn : compte, carte, 4 écrans, 2 services, pilote 12 agences.\nOut : 15 partenaires, TV, crédit, refonte SI.\nContrainte : 6 mois, 400 k€, pas de recrutement IT.\nCritères : avis rendus, go/no-go pilote, KPI module 08.\nSponsor : dir. marketing    CP : [nom]"
            },
            {
              "block_type": "heading",
              "content": "Modèle 6 — Matrice des parties prenantes"
            },
            {
              "block_type": "text",
              "content": "Objectif. Cartographier pouvoir, intérêt, mode de relation.\n\nQuand l'utiliser. Cadrage, gouvernance.\n\nInformations à renseigner. Acteur, rôle, intérêt, pouvoir, risque, canal.\n\nConsignes d'utilisation. La conformité n'est pas un « bloquant à gérer », c'est une fonction de contrôle."
            },
            {
              "block_type": "code",
              "content": "ACTEUR            INTÉRÊT     POUVOIR    CANAL\nSponsor marketing  offre       décision   rituel hebdo\nFinance            BC/budget   veto €     gel des chiffres\nConformité         avis        veto offre saisine formelle\nIT                 charge      chemin     re-chiffrage M1\nRéseau             charge      adoption   formation pilote\nJuridique          CG/claims   veto pub   relecture créas"
            },
            {
              "block_type": "heading",
              "content": "Modèle 7 — Business case"
            },
            {
              "block_type": "text",
              "content": "Objectif. Justifier une décision : hypothèses, coûts, bénéfices, risques, scénarios, reco.\n\nQuand l'utiliser. Avant comité d'arbitrage.\n\nInformations à renseigner. Les blocs du module 03. Séparer financier / non financier.\n\nConsignes d'utilisation. Pas de double comptage. VAN étiquetée si utilisée. CP + finance."
            },
            {
              "block_type": "code",
              "content": "BC v1 — Horizon — 3 ans — hors fiscalité\nHypothèses : ARPU, volumes, run — voir scénarios A/B/C du dossier.\nA 360 k€ coûts / 450 k€ CA / +90 k€ / ROI 25,0 % / payback 2,25 ans\nB 740 / 1 180 / +440 / 59,5 % / 1,75 an\nC 520 / 988 net / +468 / ≈90 % / 1,33 an\nVAN 8 % HYPOTHÈSE : A +47 / B +311 / C +358 k€ — pas une vérité unique\nReco : B MVP sous conditions (avis, 6 mois, 380 k€)"
            },
            {
              "block_type": "heading",
              "content": "Modèle 8 — Tableau de comparaison des scénarios"
            },
            {
              "block_type": "text",
              "content": "Objectif. Mettre A/B/C (ou prudent/central/ambitieux) sur la même grille.\n\nQuand l'utiliser. Leçon scénarios, comité.\n\nInformations à renseigner. Investissement, run, ROI, délai, faisabilité, risques, client, dépendance.\n\nConsignes d'utilisation. Le max ROI n'est pas pré-coché."
            },
            {
              "block_type": "code",
              "content": "            A améliorer     B Start MVP      C partenariat\nInvest.     180 k€          380 k€           250 k€\nROI 3 ans   25,0 %          59,5 %           ≈90 %\nDélai       4 mois          6 mois MVP       5-8 mois\nFaisable 6m haute           moyenne          moyenne\nContrôle    interne         interne          tiers\nReco modèle                 OUI sous cond.   option stratégique"
            },
            {
              "block_type": "heading",
              "content": "Modèle 9 — Calcul du ROI"
            },
            {
              "block_type": "text",
              "content": "Objectif. Rendre le calcul reproductible.\n\nQuand l'utiliser. BC, REX financier, oral d'entretien.\n\nInformations à renseigner. Investissement, runs, revenus, formule, limites.\n\nConsignes d'utilisation. ROI = (revenus − coûts totaux) / coûts totaux. Payback sur l'investissement, pas sur les coûts totaux (sauf si vous le dites)."
            },
            {
              "block_type": "code",
              "content": "CAS PÉDAGOGIQUE COURS\nInvest. 120 k€ + run 3×30 = coûts 210 k€ ; CA 3×90 = 270 ; bénéfice 60\nROI 60/210 ≈ 28,6 % ; flux net 60 k€/an ; payback invest. 2 ans\nCAS B HORIZON\nCoûts 740 ; CA 1 180 ; bénéfice 440 ; ROI 440/740 ≈ 59,5 %\nLimite : hors fiscalité, hors actualisation (VAN 8 % = hypothèse)"
            },
            {
              "block_type": "heading",
              "content": "Modèle 10 — Matrice des risques"
            },
            {
              "block_type": "text",
              "content": "Objectif. Rendre les risques actionnables.\n\nQuand l'utiliser. Cadrage, chaque comité, avant go.\n\nInformations à renseigner. ID, cause, P, I, détection, mitigation, propriétaire.\n\nConsignes d'utilisation. Un risque de contrôle n'est pas clôturé par un commentaire marketing. Voir leçon correction 8 min."
            },
            {
              "block_type": "code",
              "content": "Voir matrice R1-R10 dans la leçon « Outils de correction ».\nMinimum comité : R1 avis, R2 IT, R3 périmètre, R4 réseau, R7 KYC."
            },
            {
              "block_type": "heading",
              "content": "Modèle 11 — Dossier d'aide à la décision"
            },
            {
              "block_type": "text",
              "content": "Objectif. Pack complet d'arbitrage.\n\nQuand l'utiliser. COMEX / comité de choix.\n\nInformations à renseigner. Les 10 blocs du module 05 : synthèse, contexte, opportunité, objectifs, scénarios, finance, risques, impacts, reco, décision.\n\nConsignes d'utilisation. 20 pages max, 8 mieux. Décision formulée."
            },
            {
              "block_type": "code",
              "content": "DOSSIER DÉCISION — Horizon Start\n1 Synthèse (modèle 12)\n2-4 Contexte / opportunité / objectifs (cadrage)\n5 Scénarios A/B/C (modèle 8)\n6 Finance (modèles 7 et 9)\n7 Risques (modèle 10)\n8 Impacts : IT, réseau, claims\n9 Reco B sous conditions\n10 Décisions : enveloppe, freeze, saisine, rituel"
            },
            {
              "block_type": "heading",
              "content": "Modèle 12 — Synthèse exécutive"
            },
            {
              "block_type": "text",
              "content": "Objectif. Permettre un arbitrage en 3 minutes.\n\nQuand l'utiliser. Première page de tout pack.\n\nInformations à renseigner. Contexte, reco, justification, risques, décision attendue.\n\nConsignes d'utilisation. Une page. Pas d'avis usurpé. Voir leçon correction."
            },
            {
              "block_type": "code",
              "content": "Voir le bloc SYNTHÈSE EXÉCUTIVE de la leçon « Outils de correction » — à copier tel quel puis dater."
            },
            {
              "block_type": "heading",
              "content": "Modèle 13 — Support de comité de pilotage"
            },
            {
              "block_type": "text",
              "content": "Objectif. Suivre, pas relancer le BC entier.\n\nQuand l'utiliser. Rituel mensuel post-arbitrage.\n\nInformations à renseigner. 3 messages, dashboard, risques ouverts, décisions.\n\nConsignes d'utilisation. Chiffres gelés. Pas de surprise de contrôle en séance."
            },
            {
              "block_type": "code",
              "content": "COPIL M2 — Horizon\nMessages : conversion −3 pts ; CAC +22 € ; budget sous-consommé car lot 2 gelé.\nDashboard : voir module 08.\nDécisions : lot 2 UX 18 k€ sous avis ; plafond paid social 40 %."
            },
            {
              "block_type": "heading",
              "content": "Modèle 14 — Matrice RACI"
            },
            {
              "block_type": "text",
              "content": "Objectif. Éviter que tout le monde croie que l'autre s'en charge.\n\nQuand l'utiliser. Cadrage, kickoff, changement d'acteur.\n\nInformations à renseigner. Livrables × R/A/C/I.\n\nConsignes d'utilisation. Avis de contrôle : R et A = la fonction, pas le CP."
            },
            {
              "block_type": "code",
              "content": "Livrable           R              A         C                 I\nReco / cadrage     CP             Sponsor    Finance, métiers   COMEX\nAvis conformité    Conformité     Resp. fct  CP                 Sponsor\nClaims pub         Juridique      Resp. fct  Marketing, CP      Réseau\nGo / no-go         CP (prépare)   Sponsor    Contrôle, finance  Équipes"
            },
            {
              "block_type": "heading",
              "content": "Modèle 15 — Feuille de route projet"
            },
            {
              "block_type": "text",
              "content": "Objectif. Rendre le chemin critique visible.\n\nQuand l'utiliser. Après décision, à chaque glissement.\n\nInformations à renseigner. Jalons, dates, responsables, hors-scope.\n\nConsignes d'utilisation. Une date politique sans livrable n'est pas un jalon. Voir leçon correction."
            },
            {
              "block_type": "code",
              "content": "Voir FEUILLE DE ROUTE M0-M6 dans « Outils de correction »."
            },
            {
              "block_type": "heading",
              "content": "Modèle 16 — Planning avec jalons"
            },
            {
              "block_type": "text",
              "content": "Objectif. Décliner la roadmap en dates vérifiables.\n\nQuand l'utiliser. Pilotage opérationnel.\n\nInformations à renseigner. Jalon, date référence, date réelle, écart, commentaire.\n\nConsignes d'utilisation. L'écart s'écrit tôt."
            },
            {
              "block_type": "code",
              "content": "Jalon                 Réf.     Réel      Écart    Commentaire\nAvis v1 saisi        S+2 sem  —         —        Chemin critique\nPilote start         M3       —         —        12 agences + digital\nGo/no-go             M3+3 sem —         —        Seuils écrits\nNational             M5       —         —        Sous go"
            },
            {
              "block_type": "heading",
              "content": "Modèle 17 — Tableau de suivi des actions"
            },
            {
              "block_type": "text",
              "content": "Objectif. Sortir les actions du compte rendu oral.\n\nQuand l'utiliser. Après chaque rituel.\n\nInformations à renseigner. Action, propriétaire, date, statut, critère de done.\n\nConsignes d'utilisation. Pas d'action « tout le monde ». Max 10 ouvertes."
            },
            {
              "block_type": "code",
              "content": "ID  Action                    Qui        Date     Done si\nA12 Saisine conformité MVP    CP         [j+2]    Accusé + interlocuteur\nA13 Freeze backlog écrit      Sponsor    [comité] Mail de décision\nA14 Scripts relance J+7       Réseau     [M2]     100 % pilote formés"
            },
            {
              "block_type": "heading",
              "content": "Modèle 18 — Compte rendu de réunion projet"
            },
            {
              "block_type": "text",
              "content": "Objectif. Tracer décisions, pas les discussions.\n\nQuand l'utiliser. Chaque rituel.\n\nInformations à renseigner. Présents, décisions, actions, alertes, prochaine date.\n\nConsignes d'utilisation. Un CR sans décision est un journal. Diffusion limitée, pas de données clients nominatives."
            },
            {
              "block_type": "code",
              "content": "CR — COPIL Horizon — [date]\nDécisions : freeze 15 partenaires ; saisine conformité confirmée.\nAlertes : IT re-chiffrage M1 (seuil bascule A).\nActions : A12 A13.\nProchain : [date] — chiffres gelés J−3 par finance."
            },
            {
              "block_type": "heading",
              "content": "Modèle 19 — Tableau de bord des KPI"
            },
            {
              "block_type": "text",
              "content": "Objectif. Voir le réalisé vs la cible vs l'action.\n\nQuand l'utiliser. Chaque comité de suivi, REX.\n\nInformations à renseigner. KPI, formule, réalisé, cible, écart, propriétaire, décision.\n\nConsignes d'utilisation. Module 08. Pas de likes. Pas de CA groupe."
            },
            {
              "block_type": "code",
              "content": "Voir dashboard M2 (conversion, souscriptions, CAC, CA flux, activation, réclamations, budget, jalon) dans le module Performance."
            },
            {
              "block_type": "heading",
              "content": "Modèle 20 — Plan de déploiement"
            },
            {
              "block_type": "text",
              "content": "Objectif. Passer du build au réel (canaux, vagues, support).\n\nQuand l'utiliser. Avant pilote et avant national.\n\nInformations à renseigner. Vagues, critères d'entrée, support, rollback.\n\nConsignes d'utilisation. Pas de national si le pilote rate les seuils."
            },
            {
              "block_type": "code",
              "content": "VAGUE 0  Digital interne test\nVAGUE 1  12 agences + 100 % digital (pilote)\nVAGUE 2  National sous go\nRollback : couper la pub, figer les souscriptions nouvelles, script d'incident\nSupport : hotline interne, FAQ, propriétaire qualité"
            },
            {
              "block_type": "heading",
              "content": "Modèle 21 — Checklist de lancement"
            },
            {
              "block_type": "text",
              "content": "Objectif. Empêcher un go magique.\n\nQuand l'utiliser. J−10 et J−1 du lancement visé.\n\nInformations à renseigner. Cases datées, nommées. Avis, formation, claims, KPI, incident.\n\nConsignes d'utilisation. Une case vide = no-go, pas « on verra lundi »."
            },
            {
              "block_type": "code",
              "content": "CHECKLIST GO HORIZON\n[ ] Avis conformité / juridique / risques rendus et intégrés\n[ ] Claims signés juridique\n[ ] Parcours testé (seuil conversion pilote)\n[ ] Formation réseau ≥ seuil\n[ ] Dashboard gelé\n[ ] Dispositif d'incident nommé\n[ ] Sponsor a signé le go\nINTERDIT : cocher « avis » à la place de la fonction"
            },
            {
              "block_type": "heading",
              "content": "Modèle 22 — Plan de conduite du changement"
            },
            {
              "block_type": "text",
              "content": "Objectif. Faire adopter (réseau, outils, clients).\n\nQuand l'utiliser. Dès le cadrage si l'adoption est un critère, pas la veille.\n\nInformations à renseigner. Cibles, messages, rituels, relais, mesures d'adoption.\n\nConsignes d'utilisation. Un e-learning seul n'est pas un plan. Relier au rituel managérial."
            },
            {
              "block_type": "code",
              "content": "CIBLE : conseillers 25-35 + directeurs d'agence pilotes\nMESSAGE : parcours 4 écrans, script relance J+7, ce qui change vs Essentiel\nRELAIS : 12 directeurs pilotes\nRITUEL : 20 min / semaine, 6 semaines\nMESURE : % formés, activation 30 j, usage outil"
            },
            {
              "block_type": "heading",
              "content": "Modèle 23 — Grille go / no-go"
            },
            {
              "block_type": "text",
              "content": "Objectif. Rendre le lancement binaire et honnête.\n\nQuand l'utiliser. Fin de pilote, J−4 national.\n\nInformations à renseigner. Critères, seuils, statut, dérogation (sponsor + contrôle, écrite).\n\nConsignes d'utilisation. Pas de dérogation orale sur un avis de contrôle."
            },
            {
              "block_type": "code",
              "content": "CRITÈRE                 SEUIL          STATUT\nAvis contrôle           rendus          [ ]\nConversion pilote       ≥ 24 %          [ ]\nActivation 30 j         ≥ 55 %          [ ]\nFormation réseau        ≥ 90 % pilote   [ ]\nIncidents KYC           < seuil risques [ ]\nDÉROGATION : seulement écrite, sponsor + fonction concernée. Jamais sur un avis négatif."
            },
            {
              "block_type": "heading",
              "content": "Modèle 24 — Bilan projet"
            },
            {
              "block_type": "text",
              "content": "Objectif. Clôturer : prévu vs réalisé, décisions, suite.\n\nQuand l'utiliser. Clôture ou arrêt.\n\nInformations à renseigner. Objectifs, coûts, délais, qualité, bénéfices, leçons, suite (run, stop, N+1).\n\nConsignes d'utilisation. Ne pas recolorer les cibles. Un arrêt a droit à un bilan."
            },
            {
              "block_type": "code",
              "content": "BILAN — Horizon Start — [date]\nPrévu B : 380 k€, 6 mois, conversion 28 % à 12 mois\nRéalisé : [à remplir]\nBénéfices vs BC : [CA incrémental, pas CA groupe]\nSuite : run 120 k€ / stop partenaires / dossier crédit = autre cadrage"
            },
            {
              "block_type": "heading",
              "content": "Modèle 25 — Retour d'expérience"
            },
            {
              "block_type": "text",
              "content": "Objectif. Transformer un écart en standard.\n\nQuand l'utiliser. Après jalon, incident, clôture.\n\nInformations à renseigner. Faits, causes, actions, capitalisation, alertes hors REX.\n\nConsignes d'utilisation. Module 08. Un incident de contrôle sort du REX vers le circuit dédié."
            },
            {
              "block_type": "code",
              "content": "REX pilote Horizon\nÉcart : activation 61 % vs 70 %\nCause retenue : pas de script J+7\nCause écartée : « les jeunes n'aiment pas les banques »\nAction : script + rituel 20 min (réseau, [date])\nCapitalisation : checklist lancement + ligne « script relance »\nAlerte hors REX : aucune si pas d'incident de données"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Laisser les modèles vides. Datation absente. Avis de conformité tapé dans le RACI du CP. Parts de marché fictives recopiées comme des faits. Dashboard à 40 KPI."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Hors banque : remplacez « souscription » par contrat, mise en vigueur, ou commande. La structure des 25 modèles ne change pas. Politique interne : un modèle groupe prime sur celui-ci s'il est licite et plus précis."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Remplissez les modèles 5, 8, 12 et 23 pour Horizon sans regarder la correction du projet. Comparez ensuite : périmètre out, ROI, décision, cases go/no-go."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Une note de cadrage juste a un out explicite (15 partenaires, TV, crédit). Un tableau de scénarios juste ne pré-coche pas C. Une synthèse juste demande une décision. Une grille go/no-go juste refuse la dérogation orale sur un avis négatif. Si ces quatre points tiennent, les autres modèles s'alignent."
            }
          ],
          "position": 4
        }
      ]
    }
  ]
}
$coursejsonb$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'chef-projet-marketing-developpement';
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours chef-projet-marketing-developpement absent. Exécutez 008a d''abord.';
  END IF;
  IF EXISTS (
    SELECT 1 FROM modules WHERE course_id = v_course_id AND position >= 5
  ) THEN
    RAISE NOTICE '008b : déjà chargé — skip.';
  ELSE
      
    FOR v_mod IN
      SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
      FROM jsonb_array_elements(payload->'modules') WITH ORDINALITY AS t
    LOOP
      INSERT INTO modules (course_id, title, description, position)
      VALUES (
        v_course_id,
        v_mod.obj->>'title',
        v_mod.obj->>'description',
        COALESCE((v_mod.obj->>'position')::int, v_mod.pos)
      )
      RETURNING id INTO v_module_id;

      FOR v_les IN
        SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
        FROM jsonb_array_elements(v_mod.obj->'lessons') WITH ORDINALITY AS t
      LOOP
        INSERT INTO lessons (
          module_id, title, description, lesson_type, position,
          estimated_duration_minutes, is_required
        )
        VALUES (
          v_module_id,
          v_les.obj->>'title',
          v_les.obj->>'description',
          COALESCE(v_les.obj->>'lesson_type', 'lesson'),
          COALESCE((v_les.obj->>'position')::int, v_les.pos),
          NULLIF(v_les.obj->>'estimated_duration_minutes', '')::int,
          COALESCE((v_les.obj->>'is_required')::boolean, true)
        )
        RETURNING id INTO v_lesson_id;

        FOR v_blk IN
          SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
          FROM jsonb_array_elements(COALESCE(v_les.obj->'blocks', '[]'::jsonb)) WITH ORDINALITY AS t
        LOOP
          INSERT INTO content_blocks (lesson_id, block_type, content, position, metadata)
          VALUES (
            v_lesson_id,
            v_blk.obj->>'block_type',
            CASE
              WHEN jsonb_typeof(v_blk.obj->'content') IN ('object', 'array')
                THEN (v_blk.obj->'content')::text
              ELSE COALESCE(v_blk.obj->>'content', '')
            END,
            COALESCE((v_blk.obj->>'position')::int, v_blk.pos),
            CASE
              WHEN jsonb_typeof(v_blk.obj->'metadata') = 'object'
                THEN v_blk.obj->'metadata'
              ELSE NULL
            END
          );
        END LOOP;

        IF v_les.obj->>'lesson_type' = 'quiz' AND v_les.obj->'quiz' IS NOT NULL THEN
          INSERT INTO quizzes (lesson_id, title, passing_score, max_attempts)
          VALUES (
            v_lesson_id,
            v_les.obj->'quiz'->>'title',
            COALESCE((v_les.obj->'quiz'->>'passing_score')::numeric, 70),
            NULLIF(v_les.obj->'quiz'->>'max_attempts', '')::int
          )
          RETURNING id INTO v_quiz_id;

          FOR v_q IN
            SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
            FROM jsonb_array_elements(v_les.obj->'quiz'->'questions') WITH ORDINALITY AS t
          LOOP
            INSERT INTO quiz_questions (
              quiz_id, question, question_type, options, correct_answer, explanation, position
            )
            VALUES (
              v_quiz_id,
              v_q.obj->>'question',
              COALESCE(v_q.obj->>'question_type', 'single_choice'),
              v_q.obj->'options',
              v_q.obj->'correct_answer',
              v_q.obj->>'explanation',
              COALESCE((v_q.obj->>'position')::int, v_q.pos)
            );
          END LOOP;
        END IF;
      END LOOP;
    END LOOP
  END IF;
END
$seed$;

UPDATE courses
SET status = 'published',
    published_at = COALESCE(published_at, now()),
    updated_at = now()
WHERE slug = 'chef-projet-marketing-developpement';

COMMIT;
